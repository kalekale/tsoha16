  (ns tsoha16.views
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

;; -------------------------
;; Views

(defn aihe-sivu [{alue-id :alue-id aihe-id :aihe-id}]
  (let [aihe (re-frame/subscribe [:aihe [alue-id aihe-id]])]
    (fn []
      [:div
       [:h3 (:nimi @aihe)]
       (for [viesti (:viestit @aihe)]
         ^{:key viesti} [:div
                         [:h4 (str (:nimi viesti) ":")]
                         [:p (str (:viesti viesti))]])])))

(defn aihealue-sivu [{id :id}]
  (let [aiheet (re-frame/subscribe [:aiheet id])
        aihealue (re-frame/subscribe [:aihealue id])]
    [:div
     [:h2 (:nimi @aihealue)]
     [:ul
      (for [aihe @aiheet]
         ^{:key aihe} [:li [:a {:href (str "#/aihealueet/" id "/"  (key aihe))} (:nimi (val aihe))]])]]))

(defn aihealue-komponentti [aihealue]
  [:li
   [:a {:href (str "#/aihealueet/" (:id aihealue))} (:nimi aihealue)]])

(defn aihealue-lista []
  (let [aihealueet (re-frame/subscribe [:aihealueet])]
    (fn []
      [:ul
       (for [aihealue @aihealueet]
         ^{:key aihealue} [aihealue-komponentti aihealue])])))

(defn home-page []
  [:div [:h2 "Keskustelupalsta"]
   [aihealue-lista]])

(defn current-page [] 
  [:div [(session/get :current-page) (session/get :params)]])
