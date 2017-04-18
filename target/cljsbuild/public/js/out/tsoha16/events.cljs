(ns tsoha16.events
  (:require [re-frame.core :as re-frame]
            [tsoha16.db :as db]
            [ajax.core :as ajax]
            [day8.re-frame.http-fx]))

(re-frame/reg-event-db
 :initialize
 (fn
   [_ _]
   db/default-db))

(re-frame/reg-event-db
 :set-active-panel
 (fn [db [_ panel]]
   (print "asd")
   (if (:logged-in db)
     (assoc db :active-panel panel)
     (assoc db :active-panel :login-panel))))

(re-frame/reg-event-db
 :password-input-changed
 (fn [db [_ password]]
   (assoc db :password-input password)))

(re-frame/reg-event-db
 :username-input-changed
 (fn [db [_ username]]
   (assoc db :username-input username)))

(re-frame/reg-event-db
 :change-location
 (fn [db [_ uri]]
   (set! (.-location js/document) "#")
   (set! (.-location js/document) uri)
   db))

(re-frame/reg-event-fx
 :login-succesful
 (fn [world [_ res]]
   (print world)
   {:dispatch  [:change-location "#/"]
    :db       (-> (:db world)
                  (assoc :logged-in true)
                  (assoc :user-id (:user-id res)))}))

(re-frame/reg-event-fx
 :login-clicked
 (fn [{:keys [db]} _]
   {:http-xhrio {:uri             "/login"
                 :method          :post
                 :params          {:username (:username-input db)
                                   :password   (:password-input db)}
                 :format          (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [:login-succesful]
                 :on-failure      [:topic-creation-failed]}
    :db         db}))

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
 (fn [db [_ [res]]]
   (print res)
   (print db)
   (set! (.-location js/document) (str "#/aihealueet/" (:id (:aihealue db)) "/" (:aihe_id res)))
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

(re-frame/reg-fx         ;; <-- registration function
 :location   ;;  <1> 
 (fn [url]  ;;  <2>
   (set! (.-location js/document) "#")
   (set! (.-location js/document) url)))

(re-frame/reg-event-fx
 :message-edit-success
 (fn [{:keys [db]} [_ res]]
   {:location "#/"
    :dispatch [:get-messages (:id (:aihe db))]
    :db       (assoc-in db [:new-message] "")}))

(re-frame/reg-event-fx
 :edit-message
 (fn
   [{:keys [db]} [_ id]]
   {:http-xhrio {:uri             "/edit-message"
                 :method          :post
                 :params          {:id     id
                                   :viesti (:new-message db)}
                 :format          (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [:message-edit-success]
                 :on-failure      [:topic-creation-failed]}
    :db         db}))

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
                 :on-failure      [:topic-get-failed]}
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

(re-frame/reg-event-db
 :message-get-success
 (fn [db [_ res]]
   (assoc-in db [:viesti] res)))

(re-frame/reg-event-fx
 :get-message
 (fn [{:keys [db]} [_ id]]
   {:http-xhrio {:uri             "/message"
                 :method          :get
                 :params          {:id id}
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [:message-get-success]
                 :on-failure      [:topic-get-failed]}
    :db         db}))


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

(re-frame/reg-event-fx
 :delete-thread-success
 (fn [world [_ [thread-id]]]
   {:dispatch [:get-threads thread-id]
    :db       (:db world)}))

(re-frame/reg-event-fx
 :delete-thread
 (fn [{:keys [db]} [_ thread-id]]
   {:http-xhrio {:uri             "/thread"
                 :method          :delete
                 :params          {:thread thread-id}
                 :format          (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [:delete-thread-success]
                 :on-failure      [:topic-get-failed]}
    :db         db}))

(re-frame/reg-event-fx
 :edit-thread-success
 (fn [world [_ res]]
   (print res)
   {:dispatch [:change-location "#/"]
    :db       (:db world)}))

(re-frame/reg-event-fx
 :edit-thread
 (fn [world [_ thread-id]]
   {:http-xhrio {:uri             "/edit-thread"
                 :method          :post
                 :params          {:id thread-id
                                   :otsikko (get-in world [:db :new-thread])}
                 :format          (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [:edit-thread-success]
                 :on-failure      [:topic-get-failed]}
    :db         (:db world)}))
