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
            [day8.re-frame.http-fx])
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
    :keskustelut-aihealueittain {"1" [{:nimi "Hieno päivä tänään" :viesti "Hei kaikki! Tänään on todella hieno päivä. Join aamukahvit ja kävin pitkällä kävelyllä kauniissa talvisäässä." :id "1"}]}
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


;; -------------------------
;; Views

(defn aihealue-sivu [{id :id nimi :nimi}]
  (print id)
  (let [aiheet (re-frame/subscribe [:aiheet id])]
    [:div
     [:h2 nimi]
     [:ul
      (for [aihe @aiheet]
         ^{:key aihe} [:li (:nimi aihe)])]]))

(defn aihealue-komponentti [aihealue]
  [:li
   [:a {:href (str "#/aihealueet/" (:id aihealue) "/" (:nimi aihealue))} (:nimi aihealue)]])

(defn aihealue-lista []
  (let [aihealueet (re-frame/subscribe [:aihealueet])]
    (fn []
      [:ul
       (for [aihealue @aihealueet]
         ^{:key aihealue} [aihealue-komponentti aihealue])])))

(defn home-page []
  [:div [:h2 "Keskustelupalsta"]
   [aihealue-lista]])

(defn about-page []
  [:div [:h2 "About tsoha16"]
   [:div [:a {:href "/"} "go to the home page"]]]) 

(defn current-page [] 
  [:div [(session/get :current-page) (session/get :params)]])

;; -------------------------
;; Routes

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/#/aihealueet/:id/:nimi" {:as params}
  (session/put! :current-page #'aihealue-sivu)
  (session/put! :params params))


(secretary/defroute "/#/about" []
  (session/put! :current-page #'about-page))
 
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
