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
   {:new-thread   ""
    :new-message ""
    :aihealueet  []
    :aihealue    {}
    :aiheet      []
    :aihe        {}
    }))

(re-frame/reg-event-db
 :message-edited
 (fn [app-state [_ message-str]]
   (assoc-in app-state [:new-message] message-str)))

(re-frame/reg-event-db
 :thread-edited
 (fn [app-state [_ topic-str]]
   (assoc-in app-state [:new-thread] topic-str)))

(re-frame/reg-event-db
 :topic-creation-failed
 (fn [db [_ res]]
   (print res)
   db))

(re-frame/reg-event-db
 :topic-created
 (fn [db [_ response]]
   (print "heii")
   (set! (.-location js/document) (str "#/aihealueet/" (:id (:aihealue db))))
   db))

(re-frame/reg-event-fx
 :send-new-topic
 (fn
   [{:keys [db]} _]
   {:http-xhrio {:uri             "/new-topic"
                 :method          :post
                 :params          {:topic (:id (:aihealue db))
                                   :thread   (:new-thread db)
                                   :message (:new-message db)}
                 :format          (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [:topic-created]
                 :on-failure      [:topic-creation-failed]}
    :db         db}))

(re-frame/reg-event-fx
 :message-sent
 (fn [{:keys [db]} [_ res]]
   {:dispatch [:get-messages (:id (:aihe db))]
    :db       (assoc-in db [:new-message] "")}))

(re-frame/reg-event-fx
 :send-new-message
 (fn
   [{:keys [db]} _]
   {:http-xhrio {:uri             "/new-message"
                 :method          :post
                 :params          {:thread   (:id (:aihealue db))
                                   :message (:new-message db)}
                 :format          (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [:message-sent]
                 :on-failure      [:topic-creation-failed]}
    :db         db}))

(re-frame/reg-event-db
 :topic-list-success
 (fn [db [_ res]]
   (assoc-in db [:aihealueet] res)))

(re-frame/reg-event-db
 :topic-list-fail
 (fn [db [_ res]]
   (print res)
   db))


(re-frame/reg-event-fx
 :get-topic-list
 (fn
   [{:keys [db]} _]
   {:http-xhrio {:uri             "/topic-list"
                 :method          :get
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [:topic-list-success]
                 :on-failure      [:topic-list-fail]}
    :db          db}))

(re-frame/reg-event-db
 :topic-get-failed
 (fn [db [_ res]]
   (print res)
   db))

(re-frame/reg-event-db
 :topic-get-success
 (fn [db [_ res]]
   (assoc-in db [:aihealue] res)))

(re-frame/reg-event-fx
 :get-topic
 (fn [{:keys [db]} [_ topic-id]]
   {:http-xhrio {:uri             "/topic"
                 :method          :get
                 :params          {:topic topic-id}
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [:topic-get-success]
                 :on-failure      [:topic-get-failed]}
    :db         db}))

(re-frame/reg-event-db
 :threads-get-success
 (fn [db [_ res]]
   (assoc-in db [:aiheet] res)))

(re-frame/reg-event-db
 :thread-get-success
 (fn [db [_ res]]
   (assoc-in db [:aihe] res)))

(re-frame/reg-event-fx
 :get-threads
 (fn [{:keys [db]} [_ topic-id]]
   {:http-xhrio {:uri             "/threads"
                 :method          :get
                 :params          {:topic topic-id}
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [:threads-get-success]
                 :on-failure      [:threads-get-failed]}
    :db         db}))

(re-frame/reg-event-fx
 :get-thread
 (fn [{:keys [db]} [_ thread-id]]
   {:http-xhrio {:uri             "/thread"
                 :method          :get
                 :params          {:thread thread-id}
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [:thread-get-success]
                 :on-failure      [:thread-get-failed]}
    :db         db}))

(re-frame/reg-event-db
 :messages-get-success
 (fn [db [_ res]]
   (assoc-in db [:viestit] res)))

(re-frame/reg-event-fx
 :get-messages
 (fn [{:keys [db]} [_ thread-id]]
   {:http-xhrio {:uri             "/messages"
                 :method          :get
                 :params          {:thread thread-id}
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [:messages-get-success]
                 :on-failure      [:thread-get-failed]}
    :db         db}))


;;=-------------
;;SUBSRIPTIONSa

(re-frame/register-sub
 :aihealueet
 (fn [db _]
   (reaction (:aihealueet @db))))

(re-frame/register-sub
 :aiheet
 (fn [db [_ aihealue-id]]
   (reaction (get-in @db [:aiheet]))))

(re-frame/register-sub
 :aihe
 (fn [db [_ [alue-id aihe-id]]]
   (reaction (get-in @db [:aihe]))))

(re-frame/register-sub
 :viestit
 (fn [db [_ [alue-id aihe-id]]]
   (reaction (get-in @db [:viestit]))))


(re-frame/register-sub
 :aihealue
 (fn [db [_ id]]
   (reaction (:aihealue @db))))

;; Routes

(secretary/defroute "/" []
  (re-frame/dispatch [:get-topic-list])
  (session/put! :current-page #'views/home-page))

(secretary/defroute "/#/aihealueet/:id" {:as params}
  (re-frame/dispatch [:get-topic (:id params)])
  (re-frame/dispatch [:get-threads (:id params)])
  (session/put! :params params)
  (session/put! :current-page #'views/aihealue-sivu))

(secretary/defroute "/#/aihealueet/:alue-id/:aihe-id" {:as params}
  (re-frame/dispatch [:get-thread (:aihe-id params)])
  (re-frame/dispatch [:get-messages (:aihe-id params)])
  (session/put! :params params)
  (session/put! :current-page #'views/aihe-sivu))

(secretary/defroute "/#/uusi-aihe" []
  (session/put! :current-page #'views/uusi-aihe-sivu))

;; ------------------------ 
;; Initialize app

(defn mount-root []
  (reagent/render [views/current-page] (.getElementById js/document "app")))

(defn init! []
  (enable-console-print!)
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
