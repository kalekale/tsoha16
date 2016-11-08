(ns amz.server
  (:require [amz.handler :refer [app]]
            [amz.handler :refer [reloadable-app]]
            [config.core :refer [env]]
            [ring.adapter.jetty :refer [run-jetty]]
            [org.httpkit.server :refer [run-server]]
            [ring.adapter.jetty-async :refer [run-jetty-async]])
  (:gen-class))

(defn -main [& args]
   (let [port (Integer/parseInt (or (env :port) "3000"))]
     (run-server reloadable-app {:port port :join? false})))
