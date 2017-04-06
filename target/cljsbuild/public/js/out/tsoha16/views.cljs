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
  (let [aihe (re-frame/subscribe [:aihe])
        viestit (re-frame/subscribe [:viestit])]
    (fn []
      [:div
       [:h3 (:otsikko @aihe)]
       (for [viesti @viestit]
         ^{:key viesti} [:div
                         [:h4 (str (:name viesti) " sanoo:")]
                         [:p (str (:viesti viesti))]])
       [:h4 "Vastaa:"]
       [:textarea {:rows        20
                   :placeholder "viesti..."
                   :on-change   #(re-frame/dispatch [:message-edited (-> % .-target .-value)])}]
       [:input {:type     "submit"
                :value    "Laheta"
                :on-click #(re-frame/dispatch [:send-new-message])}]])))

(defn aihealue-sivu [{id :id}]
  (let [aiheet   (re-frame/subscribe [:aiheet id])
        aihealue (re-frame/subscribe [:aihealue])]
    [:div
     [:h2 (:nimi @aihealue)]
     [:a {:href "#/uusi-aihe"}
      [:input {:type  "submit"
               :value "Uusi aihe"}]]
     [:ul
      (for [aihe @aiheet]
        ^{:key aihe}
        [:li
         [:a {:href (str "#/aihealueet/"
                         id
                         "/"
                         (:id aihe))}
          (:otsikko aihe)]])]]))

(defn aihealue-komponentti [aihealue]
  [:li
   [:a {:href (str "#/aihealueet/"
                   (:id aihealue))}
    (:nimi aihealue)]])

(defn aihealue-lista []
  (let [aihealueet (re-frame/subscribe [:aihealueet])]
    (fn []
      [:ul
       (for [aihealue @aihealueet]
         ^{:key aihealue} [aihealue-komponentti aihealue])])))

(defn uusi-aihe-sivu []
  [:div
   [:h2 "Uusi aihe"]
   [:input {:type        "text"
            :placeholder "Otsikko"
            :on-change   #(re-frame/dispatch [:thread-edited (-> % .-target .-value)])}]
   [:textarea {:rows        20
               :placeholder "viesti..."
               :on-change   #(re-frame/dispatch [:message-edited (-> % .-target .-value)])}]
   [:input {:type     "submit"
            :value    "Laheta"
            :on-click #(re-frame/dispatch [:send-new-topic])}]])

(defn home-page []
  [:div [:h2 "Keskustelupalsta"]
   [aihealue-lista]])

(defn current-page [] 
  [:div [(session/get :current-page) (session/get :params)]])
