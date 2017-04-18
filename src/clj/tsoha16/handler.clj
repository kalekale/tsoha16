(ns tsoha16.handler
  (:require [org.httpkit.server :refer [with-channel on-close send!]]
            [clojure.data.json :as json]
            [clojure.core.async :refer [go >! <! timeout chan close!]]
            [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
            [ring.middleware.json :as middleware]
            [ring.middleware.session :refer [wrap-session]]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.keyword-params :refer [wrap-keyword-params]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.util.response :as response]
            [ring.middleware.session :as session]
            [compojure.core :refer [GET POST DELETE defroutes wrap-routes]]
            [compojure.route :refer [not-found resources]]
            [hiccup.page :refer [include-js include-css html5]]
            [config.core :refer [env]]
            [clojure.java.jdbc :as sql]
            [cemerick.friend.credentials :as creds]
            [tsoha16.auth :refer [auth-middleware]]))

(def sql-str (or (System/getenv "DATABASE_URL")
              "postgresql://localhost:5432/tsoha"))

(def ^{:const true} json-header {"Content-Type" "application/json; charset=utf-8"})

(def mount-target
  [:div#app
      [:h3 "ClojureScript has not been compiled!"]
      [:p "please run "
       [:b "lein figwheel"]
       " in order to start the compiler"]])

(defn head []
  [:head
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport"
           :content "width=device-width, initial-scale=1"}]
   (include-css (if (env :dev) "/css/site.css" "/css/site.min.css"))])

(defn loading-page []
  (html5
    (head)
    [:body {:class "body-container"}
     mount-target
     (include-js "/js/app.js")]))

(defn insert-topic [user-id thread topic]
  (sql/insert! sql-str
               :Aihe {:kayttaja_id user-id
                      :otsikko     thread
                      :aihealue    topic}))

(defn insert-message [topic-id user-id message]
  (sql/insert! sql-str
               :Viesti {:kayttaja_id user-id
                        :aihe_id     topic-id
                        :viesti      message}))

(defn new-topic [thread message topic-id user-id]
  (-> (insert-topic user-id thread topic-id)
      first
      :id
      (insert-message user-id message)
      response/response))

(defn topic-list []
  (response/response (json/write-str (sql/query sql-str
             ["select * from Aihealue"]))))

(defn topic-by-id [topic-id]
  (sql/query sql-str
             ["select * from Aihealue where id=?" (Integer/parseInt topic-id)]))

(defn get-topic [topic-id]
  (-> (topic-by-id topic-id)
      first
      response/response))

(defn threads-by-topic [topic-id]
  (sql/query sql-str
             [(str "select * from Aihe where aihealue=" topic-id)]))

(defn messages-by-thread [thread-id]
  (sql/query sql-str
             [(str "select v.kayttaja_id, v.id, v.viesti, k.name from Viesti as v join Kayttaja as k on v.kayttaja_id=k.id where aihe_id=" thread-id)]))

(defn thread-by-id [thread-id]
  (sql/query sql-str
             [(str "select * from Aihe  where id=" thread-id)]))

(defn get-threads [topic-id]
  (-> topic-id
      threads-by-topic
      response/response))

(defn get-thread [thread-id]
  (-> thread-id
      thread-by-id
      first
      response/response))


(defn get-message [id]
  (response/response (first (sql/query sql-str
             ["select * from viesti where id=?" (Integer/parseInt id)]))))

(defn get-messages [thread-id]
  (-> thread-id
      messages-by-thread
      response/response))

(defn handler [{session :session}]
  (response/response (str session)))

(defn password-by-username [username]
  (sql/query sql-str
             [(str "select password from kayttaja where name='" username "'")]))

(defn password-correct?
  [username password]
  (-> username
      (password-by-username)
      (first)
      (:password)
      ((partial creds/bcrypt-verify password))))

(defn id-by-username [username]
  (sql/query sql-str
             [(str "select id from kayttaja where name='" username "'")]))


(defn login [username password]
  (if (password-correct? username password)
    (let [user-id (:id (first (id-by-username username)))]
     (-> (response/response {:user-id user-id})
         (assoc-in [:session :user-id] user-id)
         (assoc-in [:session :username] username)))
    (response/response (json/write-str "login failed"))))

(defn delete-thread [id]
  (sql/delete! sql-str
                    :Aihe
                    ["id=? " id]))

(defn edit-thread [id otsikko]
  (sql/update! sql-str
               :Aihe
               {:otsikko otsikko}
               ["id=?" id]))

(defn edit-message [id viesti]
  (sql/update! sql-str
               :Viesti
               {:viesti viesti}
               ["id=?" id]))


(defn return [res]
  (response/response (str res)))

(defroutes protected-routes
  (GET "/topic-list" [] (topic-list))
  (GET "/topic" [topic] (get-topic topic))
  (GET "/threads" [topic] (get-threads topic))
  (GET "/thread" [thread] (get-thread thread))
  (GET "/messages" [thread] (get-messages thread))
  (POST "/edit-thread" [id otsikko] (edit-thread id otsikko))
  (POST "/new-message" [message thread :as {{:keys [user-id]} :session}] (insert-message thread user-id message))
  (POST "/new-topic" [thread message topic :as {{:keys [user-id]} :session}] (new-topic thread message topic user-id))
  (DELETE "/thread" [thread] (delete-thread thread)))

(defroutes routes
  (resources "/")
  (GET "/message" [id] (get-message id))
  (POST "/edit-message" [id viesti] (edit-message id viesti))
  (GET "/" [] (loading-page))
  (GET "/session" [session] handler)
  (POST "/login" [username password] (login username password))
  (wrap-routes protected-routes auth-middleware)
  (not-found "No finds"))

(def app
  (-> routes
      (wrap-session {:cookie-attrs {:max-age 3600}})
      wrap-params
      wrap-keyword-params
      middleware/wrap-json-params
      middleware/wrap-json-response
      ))

(def reloadable-app
  (wrap-reload app))
