  (ns amz.core
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

(def app-db  (reagent/atom {}))
(enable-console-print!)
;; -----------------------
;; Handlers
(re-frame/reg-event-db
 :initialize
 (fn
   [_ _]
   {:url-input ""
    :urls []
    :ready-urls {"www.amazon.com/asd" {:desc "here be dragons" :status "Pending"}
                 "www.google.com" {:desc "here be answers" :status "Done"}
                 "https://www.amazon.com/dp/B014LC3T5U/ref=gbps_img_s-6_8962_a49efb3d?pf_rd_p=2544308962&pf_rd_s=slot-6&pf_rd_t=701&pf_rd_i=gb_main&pf_rd_m=ATVPDKIKX0DER&pf_rd_r=DT6ZQ35Q7NV0Y2S9G0Q6" {:desc "i am from amazon" :status "Done"}}
    }))

(re-frame/reg-event-db
 :url-input-changed
 (fn
   [app-state [_ url-input]]
   (-> app-state
       (assoc-in [:url-input] url-input)
       (assoc-in [:urls] (mapv #(str %1) (clojure.string/split-lines url-input))))))

(re-frame/reg-event-db
 :urls-posted
 (fn
   [db [_ urls response]]
   (print response)
   (re-frame/dispatch [:poll-urls])
   (assoc-in db [:ready-urls] (reduce #(assoc-in %1 [%2 :status] "Pending") (get db :ready-urls) urls)))) 

(re-frame/reg-event-db
 :urls-post-failed
 (fn
   [db [_ result]]
   (print "failied " result)
   (assoc-in db [:urls-post-failed] true)))
 
(re-frame/reg-event-fx 
 :url-inputs-submitted
 (fn [{:keys [db]} [_ urls]]
   {:http-xhrio {:uri "/url-batch"
                 :method :post
                 :params {:urls urls}
                 :format (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? false})
                 :on-success      [:urls-posted urls]
                 :on-failure      [:urls-post-failed]}}))
  
(re-frame/reg-event-fx
 :url-inputs-submitted-old
 (fn
   [_ _]
   (ajax/POST "/get-info-by-urls" 
     {:params {:message "Hello World"
               :user    "Bob"} 
      :handler nil
      :error-handler nil})))

(re-frame/reg-event-db
 :poll-success
 (fn
   [db [_ response]]
   (print (str (first (keys response))))
   (re-frame/dispatch [:poll-urls])
   (assoc-in db [:ready-urls (first (keys response)) :status] "Done")))


(re-frame/reg-event-db
 :poll-fadlef
 (fn
   [db [_ response]]
   (print (str response))
   db)) 

(re-frame/reg-event-fx 
 :poll-urls
 (fn [{:keys [db]} [_ urls]]
   {:http-xhrio {:uri "/poll"
                 :method :get
                 :response-format (ajax/json-response-format {:keywords? false})
                 :on-success      [:poll-success]
                 :on-failure      [:poll-fadlef]}}))


;; ------------------------
;; Subscriptions
(re-frame/register-sub
 :url-input
 (fn [db _]
   (reaction (:url-input @db))))

(re-frame/register-sub
 :urls
 (fn [db _]
   (reaction (:urls @db))))

(re-frame/register-sub
 :ready-urls
 (fn [db _]
   (reaction (:ready-urls @db))))


(re-frame/register-sub
 :url-query
 (fn [db [_ url]]
   (print "url-query")
   (let [urls-reaction (reaction (:ready-urls @db))]
     (reaction (get @urls-reaction url)))))

;; -------------------------
;; Views

(defn url-input-component
  []
  (let [urls (re-frame/subscribe [:urls])]
    (fn [] 
      [:div
       [:span "Input amazon URLs here on separate lines: "]
       [:textarea {:class "boxsizingBorder"
                   :rows 20 :cols 100
                   :on-change #(re-frame/dispatch [:url-input-changed (-> % .-target .-value )])}]
       [:input  {:on-click #(re-frame/dispatch [:url-inputs-submitted @urls])
                  :value "Create listings"
                 :type "submit"}]]))) 




(defn ready-url-component
  [url]
  (let [url-map (re-frame/subscribe [:url-query url])]
    (fn [] 
      [:tr 
       [:td {:class "center-td"}
        [:a {:href url}  "View source"]]
       (if (= (:status @url-map) "Pending")
         [:td {:class "center-td"} [:div {:class "loader center"}]]
         [:td {:class "center-td"} (:status @url-map)])
       [:td {:class "center-td"}
        [:input {:on-click #(re-frame/dispatch [:preview-listing-clicked url])
                 :type "submit"
                 :value "preview"}]]])))

(defn ready-urls-component
  []
  (let [urls (re-frame/subscribe [:ready-urls])]
    (fn [] 
      [:table
       [:tbody
        [:tr
         [:th {:class "center-td"} "LINK"]
         [:th {:class "center-td"} "STATUS"]
         [:th]]
        (for [url (keys @urls)]
          ^{:key url} [ready-url-component url]) 
        ]]))) 


(defn home-page []
  [:div
   [url-input-component]
   [ready-urls-component]
   ])

(defn about-page []
  [:div [:h2 "About amz"]
   [:div [:a {:href "/"} "go to the home page"]]]) 

(defn current-page [] 
  [:div [(session/get :current-page)]])

;; -------------------------
;; Routes

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/about" []
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
