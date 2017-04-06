(ns tsoha16.handler
  (:require [org.httpkit.server :refer [with-channel on-close send!]]
            [clojure.data.json :as json]
            [clojure.core.async :refer [go >! <! timeout chan close!]]
            [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
            [ring.middleware.json :as middleware]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.keyword-params :refer [wrap-keyword-params]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.util.response :as response]
            [compojure.core :refer [GET POST defroutes]]
            [compojure.route :refer [not-found resources]]
            [hiccup.page :refer [include-js include-css html5]]
            [config.core :refer [env]]
            [clojure.java.jdbc :as sql]))

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
  (sql/query sql-str
             ["select * from Aihealue"]))

(defn topic-by-id [topic-id]
  (sql/query sql-str
             [(str "select * from Aihealue where id=" topic-id)]))

(defn get-topic [topic-id]
  (-> (topic-by-id topic-id)
      first
      response/response))

(defn threads-by-topic [topic-id]
  (sql/query sql-str
             [(str "select * from Aihe where aihealue=" topic-id)]))

(defn messages-by-thread [thread-id]
  (sql/query sql-str
             [(str "select v.id, v.viesti, k.name from Viesti as v join Kayttaja as k on v.kayttaja_id=k.id where aihe_id=" thread-id)]))

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

(defn get-messages [thread-id]
  (-> thread-id
      messages-by-thread
      response/response))

(defroutes routes
  (GET "/" [] (loading-page)) 
  (GET "/about" [] (loading-page))
  (GET "/topic-list" [] (topic-list))
  (GET "/topic" [topic] (get-topic topic))
  (GET "/threads" [topic] (get-threads topic))
  (GET "/thread" [thread] (get-thread thread))
  (GET "/messages" [thread] (get-messages thread))
  (POST "/new-message" [message thread] (insert-message thread 1 message))
  (POST "/new-topic" [thread message topic] (new-topic thread message topic 1))
  (resources "/")
  (not-found "No finds"))

(def app
  (-> routes
      wrap-params
      wrap-keyword-params
      middleware/wrap-json-params
      middleware/wrap-json-response
      ))

(def reloadable-app
  (wrap-reload app))

