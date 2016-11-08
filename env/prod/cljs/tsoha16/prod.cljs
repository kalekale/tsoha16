(ns tsoha16.prod
  (:require [tsoha16.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
