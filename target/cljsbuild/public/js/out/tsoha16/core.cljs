  (ns tsoha16.core
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [accountant.core :as accountant]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [cljsjs.react :as react]
            [re-frame.core :as re-frame]
            [ajax.core :as ajax]
            [day8.re-frame.http-fx]
            [tsoha16.views :as views])
  (:require-macros [reagent.ratom  :refer [reaction]]
                   [cljs.core.async.macros :refer [go]])
  (:import goog.History))

;; -----------------------
;; Handlers
(re-frame/reg-event-db
 :initialize
 (fn
   [_ _]
   {:aihealueet [{:nimi "Mukavat asiat" :id "1"} {:nimi "Jännät jutut" :id "2"} {:nimi "Niitä näitä" :id "3"}]
    :keskustelut-aihealueittain {"1" { "1" {:nimi "Hieno päivä tänään" :viestit [{:nimi "hessu" :viesti "Hei kaikki! Tänään on todella hieno päivä. Join aamukahvit ja kävin pitkällä kävelyllä kauniissa talvisäässä."} {:viesti "Haista paska" :nimi "mikki"}]}}}
    }))
;;=-------------
;;SUBSRIPTIONSa

(re-frame/register-sub
 :aihealueet
 (fn [db _]
   (reaction (:aihealueet @db))))

(re-frame/register-sub
 :aiheet
 (fn [db [_ aihealue-id]]
   (reaction (get-in @db [:keskustelut-aihealueittain aihealue-id]))))

(re-frame/register-sub
 :aihe
 (fn [db [_ [alue-id aihe-id]]]
   (reaction (get-in @db [:keskustelut-aihealueittain alue-id aihe-id]))))

(re-frame/register-sub
 :aihealue
 (fn [db [_ id]]
   (print id)
   (reaction (first (filter #(= id (:id %1)) (:aihealueet @db))))))

;; Routes

(secretary/defroute "/" []
  (session/put! :current-page #'views/home-page))

(secretary/defroute "/#/aihealueet/:id" {:as params}
  (session/put! :params params)
  (session/put! :current-page #'views/aihealue-sivu))

(secretary/defroute "/#/aihealueet/:alue-id/:aihe-id" {:as params}
  (session/put! :params params)
  (session/put! :current-page #'views/aihe-sivu))

(secretary/defroute "/#/about" []
  (session/put! :current-page #'views/about-page))
 
;; ------------------------ 
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (re-frame/dispatch [:initialize])
  (accountant/configure-navigation!
    {:nav-handler
     (fn [path]
       (secretary/dispatch! path))
     :path-exists?
     (fn [path]
       (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (mount-root)
  )
