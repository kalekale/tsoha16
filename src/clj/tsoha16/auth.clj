(ns tsoha16.auth
  (:require [clojure.java.jdbc :as sql]
            [cemerick.friend.credentials :as creds]
            [ring.util.response :refer [response]]))

(def sql-str (or (System/getenv "DATABASE_URL")
                 "postgresql://localhost:5432/tsoha"))



(defn register-user
  [username password]
  (sql/insert! sql-str
               :Kayttaja {:name     username
                          :password (creds/hash-bcrypt password)
                          :admin    false}))

(defn password-by-username [username]
  (sql/query sql-str
             [(str "select password from kayttaja where name='" username "'")]))

(defn password-correct?
  [username password]
  (-> username
      password-by-username
      (partial = (creds/hash-bcrypt password))))

(defn logged-in?
  [request]
  (print :session request)
  (seq (:session request)))

(defn auth-middleware
  [handler]
  (fn [request]
    (if (logged-in? request)
      (handler request)
      (response nil))))
