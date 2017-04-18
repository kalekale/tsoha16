(ns tsoha16.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [tsoha16.events]
            [tsoha16.subs]
            [tsoha16.routes :as routes]
            [tsoha16.views :as views]
            [tsoha16.config :as config]))



(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init! []
  (routes/app-routes)
  (re-frame/dispatch-sync [:initialize])
  (dev-setup)
  (mount-root))
