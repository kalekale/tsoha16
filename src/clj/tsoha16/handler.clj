(ns tsoha16.handler
  (:require [org.httpkit.server :refer [with-channel on-close send!]]
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


(defroutes routes
  (GET "/" [] (loading-page)) 
  (GET "/about" [] (loading-page)) 
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
