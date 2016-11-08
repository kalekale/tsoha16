(ns amz.handler
  (:require [org.httpkit.server :refer [with-channel on-close send!]]
            [amz.scraper :as scraper]
            [clojure.data.json :as json]
            [clojure.core.async :refer [go >! <! timeout chan close!]]
            [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
            [ring.middleware.json :as middleware]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.keyword-params :refer [wrap-keyword-params]]
            [ring.util.response :as response]
            [compojure.core :refer [GET POST defroutes]]
            [compojure.route :refer [not-found resources]]
            [hiccup.page :refer [include-js include-css html5]]
            [config.core :refer [env]]))

(def ^{:const true} json-header {"Content-Type" "application/json; charset=utf-8"})

(def job-queue (atom clojure.lang.PersistentQueue/EMPTY))

(def clients
  "map channel -> sequence number"
  (atom {}))

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

(defn send-to-channels [url-map]
  (doseq [channel (keys @clients)]
    (send! channel {:status 200
                    :headers json-header
                    :body (json/write-str url-map)})))

(defn info-from-pages-to-channel [urls]
  (doseq [url urls]
    (let [info (scraper/info-on-page url)]
      (send-to-channels info))))

;(future (while true
;          (while (not-empty @job-queue)
;            (info-from-pages-to-channel (peek @job-queue))
;            (swap! job-queue pop))))


(defn get-info [request]
  (print request)
  (swap! job-queue conj (get-in request [:params :urls]))
  (response/response {:data "asd"})
  )

(defn poll-test [req]
      {:status 200 :headers json-header :body (json/write-str "hei")}
      (with-channel  req channel
        ;; store the channel so other threads can write into it
        ;; notice that we don't need to return anything, the body is just
        ;; executed but a default, async response with the channel is returned
        (swap! clients assoc channel 1)
        (on-close channel (fn [status]
                            (swap! clients dissoc channel)))))

(defn channel-test [req]
    (doseq [channel (keys @clients)]
      (send! channel {:status 200
                      :headers json-header
                      :body (json/write-str "omg")}))
    {:status 200 :headers {} :body {:asd "hei"}})

(defroutes routes
  (GET "/" [] (loading-page)) 
  (GET "/about" [] (loading-page))
  (GET "/poll" [] poll-test)
  (POST "/write-to-channel" request (channel-test request) )
  (POST "/url-batch" request
    (get-info request))
  ;(POST "/get-info-by-urls" request (save-message! request)) 
  (resources "/")
  (not-found "No finds"))

(def app
  (-> routes 
      wrap-keyword-params
      middleware/wrap-json-params
      middleware/wrap-json-response
      ))
   
(def reloadable-app
  (wrap-reload app))
