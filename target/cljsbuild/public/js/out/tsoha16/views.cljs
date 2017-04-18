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
            [tsoha16.db :as db]
            [day8.re-frame.http-fx])
  (:require-macros [reagent.ratom  :refer [reaction]]
                   [cljs.core.async.macros :refer [go]])
  (:import goog.History))

;; -------------------------
;; Views

(defn edit-message-panel []
  (let [viesti (re-frame/subscribe [:viesti])]
    (fn []
      [:div
       [:textarea {:rows          20
                   :key           (:id @viesti)
                   :on-change     #(re-frame/dispatch [:message-edited (-> % .-target .-value)])
                   :default-value (:viesti @viesti)}]
       [:input {:type     "submit"
                :value    "Tallenna"
                :on-click #(re-frame/dispatch [:edit-message (:id @viesti)])}]])))

(defn thread-panel [{alue-id :alue-id aihe-id :aihe-id}]
  (let [aihe (re-frame/subscribe [:aihe])
        viestit (re-frame/subscribe [:viestit])]
    (fn []
      [:div (str @viestit)
       [:h3 (:otsikko @aihe)]
       (doall (for [viesti @viestit]
         ^{:key viesti} [:div
                         [:h4 (str (:name viesti) " sanoo:")]
                         [:p (str (:viesti viesti))]
                         (if (:authorized viesti)
                           [:div
                            [:a {:href (str "#/muokkaa-viestia/" (:id viesti))}
                             [:input {:type "submit"
                                      :value "muokkaa"}]]
                            [:input {:type "submit"
                                     :value "poista"
                                     :on-click #(re-frame/dispatch [:delete-thread (:id aihe)])}]])]))
       [:h4 "Vastaa:"]
       [:textarea {:rows        20
                   :placeholder "viesti..."
                   :on-change   #(re-frame/dispatch [:message-edited (-> % .-target .-value)])}]
       [:input {:type     "submit"
                :value    "Laheta"
                :on-click #(re-frame/dispatch [:send-new-message])}]])))

(defn topic-panel []
  (let [aiheet   (re-frame/subscribe [:aiheet])
        aihealue (re-frame/subscribe [:aihealue])]
    [:div
     [:h2 (:nimi @aihealue)]
     [:a {:href (str "#/uusi-aihe/" (:id @aihealue))}
      [:input {:type  "submit"
               :value "Uusi aihe"}]]
     [:ul
      (doall
       (for [aihe @aiheet]
         ^{:key aihe}
         [:li
          [:a {:href (str "#/aihealueet/"
                          (:id @aihealue)
                          "/"
                          (:id aihe))}
           (:otsikko aihe)]
          (if (:authorized aihe)
            [:div
             [:a {:href (str "#/muokkaa-aihetta/" (:id aihe))}
              [:input {:type "submit"
                       :value "muokkaa"}]]
             [:input {:type "submit"
                      :value "poista"
                      :on-click #(re-frame/dispatch [:delete-thread (:id aihe)])}]])]))]]))

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


(defn edit-thread-panel []
  (let [aihe (re-frame/subscribe [:aihe])]
    (fn []
      [:div
       (str @aihe)
       [:h2 "Muokkaa aihetta"]
       [:input {:key         (:otsikko @aihe)
                :type        "text"
                :placeholder "Otsikko"
                :default-value       (:otsikko @aihe)
                :on-change   #(re-frame/dispatch [:thread-edited (-> % .-target .-value)])}]
       [:input {:type     "submit"
                :value    "Tallenna"
                :on-click #(re-frame/dispatch [:edit-thread (:id @aihe)])}]])))

(defn new-thread-panel []
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

(defn login-panel []
  [:div
   [:p "Login here. Enter your email and password"]
   [:input {:type "text"
            :placeholder "email address"
            :on-change #(re-frame/dispatch [:username-input-changed (-> % .-target .-value)])}]
   [:div
    [:input {:type "password"
             :placeholder "password"
             :on-change #(re-frame/dispatch [:password-input-changed (-> % .-target .-value)])}]]
   [:div [:input {:type "submit"
                  :on-click #(re-frame/dispatch [:login-clicked])
                  :value "Login"}]]])

(defn home-panel []
  [:div [:h2 "Keskustelupalsta"]
   [aihealue-lista]])

(defn- panels [panel-name]
  (case panel-name
    :home-panel [home-panel]
    :login-panel [login-panel]
    :topic-panel [topic-panel]
    :thread-panel [thread-panel]
    :new-thread-panel [new-thread-panel]
    :edit-thread-panel [edit-thread-panel]
    :edit-message-panel [edit-message-panel]
    [:div]))

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [:active-panel])]
    (fn []
      [show-panel @active-panel])))
