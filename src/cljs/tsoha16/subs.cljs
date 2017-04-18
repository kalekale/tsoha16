(ns tsoha16.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re-frame]))

(re-frame/register-sub
 :aihealueet
 (fn [db _]
   (reaction (:aihealueet @db))))

(re-frame/register-sub
 :aiheet
 (fn [db _]
   (print db)
   (reaction (map
              #(assoc % :authorized (= (:kayttaja_id %) (:user-id @db)))
              (get-in @db [:aiheet])))))

(re-frame/register-sub
 :aihe
 (fn [db [_ [alue-id aihe-id]]]
   (reaction (get-in @db [:aihe]))))

(re-frame/register-sub
 :viesti
 (fn [db _]
   (reaction (:viesti @db))))

(re-frame/register-sub
 :viestit
 (fn [db [_ [alue-id aihe-id]]]
   (reaction (map
              #(assoc % :authorized (= (:kayttaja_id %) (:user-id @db)))
              (get-in @db [:viestit])))))


(re-frame/register-sub
 :aihealue
 (fn [db [_ id]]
   (reaction (:aihealue @db))))

(re-frame/register-sub
 :active-panel
 (fn [db _]
   (reaction (:active-panel @db))))
