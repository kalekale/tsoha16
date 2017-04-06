// Compiled by ClojureScript 1.9.229 {}
goog.provide('tsoha16.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('tsoha16.views');
goog.require('goog.history.EventType');
goog.require('cljsjs.react');
goog.require('goog.History');
goog.require('goog.events');
goog.require('accountant.core');
goog.require('re_frame.core');
goog.require('day8.re_frame.http_fx');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"new-thread","new-thread",-1960760943),"",new cljs.core.Keyword(null,"new-message","new-message",1599844061),"",new cljs.core.Keyword(null,"aihealueet","aihealueet",-1619454521),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"aihealue","aihealue",-944180949),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"aiheet","aiheet",-1391850048),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"aihe","aihe",-1345360341),cljs.core.PersistentArrayMap.EMPTY], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"message-edited","message-edited",-969545469),(function (app_state,p__65829){
var vec__65830 = p__65829;
var _ = cljs.core.nth.call(null,vec__65830,(0),null);
var message_str = cljs.core.nth.call(null,vec__65830,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-message","new-message",1599844061)], null),message_str);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"thread-edited","thread-edited",787683904),(function (app_state,p__65833){
var vec__65834 = p__65833;
var _ = cljs.core.nth.call(null,vec__65834,(0),null);
var topic_str = cljs.core.nth.call(null,vec__65834,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-thread","new-thread",-1960760943)], null),topic_str);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"topic-creation-failed","topic-creation-failed",-761156688),(function (db,p__65837){
var vec__65838 = p__65837;
var _ = cljs.core.nth.call(null,vec__65838,(0),null);
var res = cljs.core.nth.call(null,vec__65838,(1),null);
cljs.core.print.call(null,res);

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"topic-created","topic-created",1415188127),(function (db,p__65841){
var vec__65842 = p__65841;
var _ = cljs.core.nth.call(null,vec__65842,(0),null);
var response = cljs.core.nth.call(null,vec__65842,(1),null);
cljs.core.print.call(null,"heii");

document.location = [cljs.core.str("#/aihealueet/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"aihealue","aihealue",-944180949).cljs$core$IFn$_invoke$arity$1(db)))].join('');

return db;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"send-new-topic","send-new-topic",1706722599),(function (p__65845,_){
var map__65846 = p__65845;
var map__65846__$1 = ((((!((map__65846 == null)))?((((map__65846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65846):map__65846);
var db = cljs.core.get.call(null,map__65846__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/new-topic",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"aihealue","aihealue",-944180949).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"thread","thread",947001524),new cljs.core.Keyword(null,"new-thread","new-thread",-1960760943).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"new-message","new-message",1599844061).cljs$core$IFn$_invoke$arity$1(db)], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-created","topic-created",1415188127)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-creation-failed","topic-creation-failed",-761156688)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"message-sent","message-sent",1107637548),(function (p__65848,p__65849){
var map__65850 = p__65848;
var map__65850__$1 = ((((!((map__65850 == null)))?((((map__65850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65850):map__65850);
var db = cljs.core.get.call(null,map__65850__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__65851 = p__65849;
var _ = cljs.core.nth.call(null,vec__65851,(0),null);
var res = cljs.core.nth.call(null,vec__65851,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-messages","get-messages",-1767747536),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"aihe","aihe",-1345360341).cljs$core$IFn$_invoke$arity$1(db))], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-message","new-message",1599844061)], null),"")], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"send-new-message","send-new-message",1962058295),(function (p__65855,_){
var map__65856 = p__65855;
var map__65856__$1 = ((((!((map__65856 == null)))?((((map__65856.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65856.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65856):map__65856);
var db = cljs.core.get.call(null,map__65856__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/new-message",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"thread","thread",947001524),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"aihealue","aihealue",-944180949).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"new-message","new-message",1599844061).cljs$core$IFn$_invoke$arity$1(db)], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message-sent","message-sent",1107637548)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-creation-failed","topic-creation-failed",-761156688)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"topic-list-success","topic-list-success",-1884672900),(function (db,p__65858){
var vec__65859 = p__65858;
var _ = cljs.core.nth.call(null,vec__65859,(0),null);
var res = cljs.core.nth.call(null,vec__65859,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aihealueet","aihealueet",-1619454521)], null),res);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"topic-list-fail","topic-list-fail",-1266802669),(function (db,p__65862){
var vec__65863 = p__65862;
var _ = cljs.core.nth.call(null,vec__65863,(0),null);
var res = cljs.core.nth.call(null,vec__65863,(1),null);
cljs.core.print.call(null,res);

return db;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-topic-list","get-topic-list",-2106505061),(function (p__65866,_){
var map__65867 = p__65866;
var map__65867__$1 = ((((!((map__65867 == null)))?((((map__65867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65867):map__65867);
var db = cljs.core.get.call(null,map__65867__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/topic-list",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-list-success","topic-list-success",-1884672900)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-list-fail","topic-list-fail",-1266802669)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"topic-get-failed","topic-get-failed",142912952),(function (db,p__65869){
var vec__65870 = p__65869;
var _ = cljs.core.nth.call(null,vec__65870,(0),null);
var res = cljs.core.nth.call(null,vec__65870,(1),null);
cljs.core.print.call(null,res);

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"topic-get-success","topic-get-success",408282807),(function (db,p__65873){
var vec__65874 = p__65873;
var _ = cljs.core.nth.call(null,vec__65874,(0),null);
var res = cljs.core.nth.call(null,vec__65874,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aihealue","aihealue",-944180949)], null),res);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-topic","get-topic",945644646),(function (p__65877,p__65878){
var map__65879 = p__65877;
var map__65879__$1 = ((((!((map__65879 == null)))?((((map__65879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65879):map__65879);
var db = cljs.core.get.call(null,map__65879__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__65880 = p__65878;
var _ = cljs.core.nth.call(null,vec__65880,(0),null);
var topic_id = cljs.core.nth.call(null,vec__65880,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/topic",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic_id], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-get-success","topic-get-success",408282807)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-get-failed","topic-get-failed",142912952)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"threads-get-success","threads-get-success",-295502714),(function (db,p__65884){
var vec__65885 = p__65884;
var _ = cljs.core.nth.call(null,vec__65885,(0),null);
var res = cljs.core.nth.call(null,vec__65885,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aiheet","aiheet",-1391850048)], null),res);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"thread-get-success","thread-get-success",-979380283),(function (db,p__65888){
var vec__65889 = p__65888;
var _ = cljs.core.nth.call(null,vec__65889,(0),null);
var res = cljs.core.nth.call(null,vec__65889,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aihe","aihe",-1345360341)], null),res);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-threads","get-threads",-470534495),(function (p__65892,p__65893){
var map__65894 = p__65892;
var map__65894__$1 = ((((!((map__65894 == null)))?((((map__65894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65894):map__65894);
var db = cljs.core.get.call(null,map__65894__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__65895 = p__65893;
var _ = cljs.core.nth.call(null,vec__65895,(0),null);
var topic_id = cljs.core.nth.call(null,vec__65895,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/threads",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic_id], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threads-get-success","threads-get-success",-295502714)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threads-get-failed","threads-get-failed",1138043499)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-thread","get-thread",-1356240042),(function (p__65899,p__65900){
var map__65901 = p__65899;
var map__65901__$1 = ((((!((map__65901 == null)))?((((map__65901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65901):map__65901);
var db = cljs.core.get.call(null,map__65901__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__65902 = p__65900;
var _ = cljs.core.nth.call(null,vec__65902,(0),null);
var thread_id = cljs.core.nth.call(null,vec__65902,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/thread",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"thread","thread",947001524),thread_id], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thread-get-success","thread-get-success",-979380283)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thread-get-failed","thread-get-failed",1830639839)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"messages-get-success","messages-get-success",-1484871163),(function (db,p__65906){
var vec__65907 = p__65906;
var _ = cljs.core.nth.call(null,vec__65907,(0),null);
var res = cljs.core.nth.call(null,vec__65907,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viestit","viestit",114360310)], null),res);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-messages","get-messages",-1767747536),(function (p__65910,p__65911){
var map__65912 = p__65910;
var map__65912__$1 = ((((!((map__65912 == null)))?((((map__65912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65912):map__65912);
var db = cljs.core.get.call(null,map__65912__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__65913 = p__65911;
var _ = cljs.core.nth.call(null,vec__65913,(0),null);
var thread_id = cljs.core.nth.call(null,vec__65913,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/messages",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"thread","thread",947001524),thread_id], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messages-get-success","messages-get-success",-1484871163)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thread-get-failed","thread-get-failed",1830639839)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"aihealueet","aihealueet",-1619454521),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"aihealueet","aihealueet",-1619454521).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"aiheet","aiheet",-1391850048),(function (db,p__65917){
var vec__65918 = p__65917;
var _ = cljs.core.nth.call(null,vec__65918,(0),null);
var aihealue_id = cljs.core.nth.call(null,vec__65918,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__65918,_,aihealue_id){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aiheet","aiheet",-1391850048)], null));
});})(vec__65918,_,aihealue_id))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"aihe","aihe",-1345360341),(function (db,p__65921){
var vec__65922 = p__65921;
var _ = cljs.core.nth.call(null,vec__65922,(0),null);
var vec__65925 = cljs.core.nth.call(null,vec__65922,(1),null);
var alue_id = cljs.core.nth.call(null,vec__65925,(0),null);
var aihe_id = cljs.core.nth.call(null,vec__65925,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__65922,_,vec__65925,alue_id,aihe_id){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aihe","aihe",-1345360341)], null));
});})(vec__65922,_,vec__65925,alue_id,aihe_id))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"viestit","viestit",114360310),(function (db,p__65928){
var vec__65929 = p__65928;
var _ = cljs.core.nth.call(null,vec__65929,(0),null);
var vec__65932 = cljs.core.nth.call(null,vec__65929,(1),null);
var alue_id = cljs.core.nth.call(null,vec__65932,(0),null);
var aihe_id = cljs.core.nth.call(null,vec__65932,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__65929,_,vec__65932,alue_id,aihe_id){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viestit","viestit",114360310)], null));
});})(vec__65929,_,vec__65932,alue_id,aihe_id))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"aihealue","aihealue",-944180949),(function (db,p__65935){
var vec__65936 = p__65935;
var _ = cljs.core.nth.call(null,vec__65936,(0),null);
var id = cljs.core.nth.call(null,vec__65936,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__65936,_,id){
return (function (){
return new cljs.core.Keyword(null,"aihealue","aihealue",-944180949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
});})(vec__65936,_,id))
);
}));
var action__50486__auto___65944 = (function (params__50487__auto__){
if(cljs.core.map_QMARK_.call(null,params__50487__auto__)){
var map__65939 = params__50487__auto__;
var map__65939__$1 = ((((!((map__65939 == null)))?((((map__65939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65939):map__65939);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-topic-list","get-topic-list",-2106505061)], null));

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return tsoha16.views.home_page;},new cljs.core.Symbol("tsoha16.views","home-page","tsoha16.views/home-page",-296948713,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tsoha16.views","tsoha16.views",-986162543,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/kallelehikoinen/dev/tsoha16/src/cljs/tsoha16/views.cljs",16,1,81,81,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(tsoha16.views.home_page)?tsoha16.views.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__50487__auto__)){
var vec__65941 = params__50487__auto__;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-topic-list","get-topic-list",-2106505061)], null));

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return tsoha16.views.home_page;},new cljs.core.Symbol("tsoha16.views","home-page","tsoha16.views/home-page",-296948713,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tsoha16.views","tsoha16.views",-986162543,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/kallelehikoinen/dev/tsoha16/src/cljs/tsoha16/views.cljs",16,1,81,81,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(tsoha16.views.home_page)?tsoha16.views.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__50486__auto___65944);

var action__50486__auto___65949 = (function (params__50487__auto__){
if(cljs.core.map_QMARK_.call(null,params__50487__auto__)){
var map__65945 = params__50487__auto__;
var map__65945__$1 = ((((!((map__65945 == null)))?((((map__65945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65945):map__65945);
var params = map__65945__$1;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-topic","get-topic",945644646),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-threads","get-threads",-470534495),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params)], null));

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"params","params",710516235),params);

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return tsoha16.views.aihealue_sivu;},new cljs.core.Symbol("tsoha16.views","aihealue-sivu","tsoha16.views/aihealue-sivu",-1466298427,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tsoha16.views","tsoha16.views",-986162543,null),new cljs.core.Symbol(null,"aihealue-sivu","aihealue-sivu",-2052510573,null),"/Users/kallelehikoinen/dev/tsoha16/src/cljs/tsoha16/views.cljs",20,1,37,37,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null)),null,(cljs.core.truth_(tsoha16.views.aihealue_sivu)?tsoha16.views.aihealue_sivu.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__50487__auto__)){
var map__65947 = params__50487__auto__;
var map__65947__$1 = ((((!((map__65947 == null)))?((((map__65947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65947):map__65947);
var params = map__65947__$1;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-topic","get-topic",945644646),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-threads","get-threads",-470534495),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params)], null));

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"params","params",710516235),params);

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return tsoha16.views.aihealue_sivu;},new cljs.core.Symbol("tsoha16.views","aihealue-sivu","tsoha16.views/aihealue-sivu",-1466298427,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tsoha16.views","tsoha16.views",-986162543,null),new cljs.core.Symbol(null,"aihealue-sivu","aihealue-sivu",-2052510573,null),"/Users/kallelehikoinen/dev/tsoha16/src/cljs/tsoha16/views.cljs",20,1,37,37,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null)),null,(cljs.core.truth_(tsoha16.views.aihealue_sivu)?tsoha16.views.aihealue_sivu.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/#/aihealueet/:id",action__50486__auto___65949);

var action__50486__auto___65954 = (function (params__50487__auto__){
if(cljs.core.map_QMARK_.call(null,params__50487__auto__)){
var map__65950 = params__50487__auto__;
var map__65950__$1 = ((((!((map__65950 == null)))?((((map__65950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65950):map__65950);
var params = map__65950__$1;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-thread","get-thread",-1356240042),new cljs.core.Keyword(null,"aihe-id","aihe-id",-415879323).cljs$core$IFn$_invoke$arity$1(params)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-messages","get-messages",-1767747536),new cljs.core.Keyword(null,"aihe-id","aihe-id",-415879323).cljs$core$IFn$_invoke$arity$1(params)], null));

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"params","params",710516235),params);

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return tsoha16.views.aihe_sivu;},new cljs.core.Symbol("tsoha16.views","aihe-sivu","tsoha16.views/aihe-sivu",-80013001,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tsoha16.views","tsoha16.views",-986162543,null),new cljs.core.Symbol(null,"aihe-sivu","aihe-sivu",-1675347483,null),"/Users/kallelehikoinen/dev/tsoha16/src/cljs/tsoha16/views.cljs",16,1,19,19,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"alue-id","alue-id",-91409559,null),new cljs.core.Keyword(null,"alue-id","alue-id",-1731941086),new cljs.core.Symbol(null,"aihe-id","aihe-id",1224652204,null),new cljs.core.Keyword(null,"aihe-id","aihe-id",-415879323)], null)], null)),null,(cljs.core.truth_(tsoha16.views.aihe_sivu)?tsoha16.views.aihe_sivu.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__50487__auto__)){
var map__65952 = params__50487__auto__;
var map__65952__$1 = ((((!((map__65952 == null)))?((((map__65952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65952):map__65952);
var params = map__65952__$1;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-thread","get-thread",-1356240042),new cljs.core.Keyword(null,"aihe-id","aihe-id",-415879323).cljs$core$IFn$_invoke$arity$1(params)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-messages","get-messages",-1767747536),new cljs.core.Keyword(null,"aihe-id","aihe-id",-415879323).cljs$core$IFn$_invoke$arity$1(params)], null));

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"params","params",710516235),params);

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return tsoha16.views.aihe_sivu;},new cljs.core.Symbol("tsoha16.views","aihe-sivu","tsoha16.views/aihe-sivu",-80013001,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tsoha16.views","tsoha16.views",-986162543,null),new cljs.core.Symbol(null,"aihe-sivu","aihe-sivu",-1675347483,null),"/Users/kallelehikoinen/dev/tsoha16/src/cljs/tsoha16/views.cljs",16,1,19,19,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"alue-id","alue-id",-91409559,null),new cljs.core.Keyword(null,"alue-id","alue-id",-1731941086),new cljs.core.Symbol(null,"aihe-id","aihe-id",1224652204,null),new cljs.core.Keyword(null,"aihe-id","aihe-id",-415879323)], null)], null)),null,(cljs.core.truth_(tsoha16.views.aihe_sivu)?tsoha16.views.aihe_sivu.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/#/aihealueet/:alue-id/:aihe-id",action__50486__auto___65954);

var action__50486__auto___65960 = (function (params__50487__auto__){
if(cljs.core.map_QMARK_.call(null,params__50487__auto__)){
var map__65955 = params__50487__auto__;
var map__65955__$1 = ((((!((map__65955 == null)))?((((map__65955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65955):map__65955);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return tsoha16.views.uusi_aihe_sivu;},new cljs.core.Symbol("tsoha16.views","uusi-aihe-sivu","tsoha16.views/uusi-aihe-sivu",-106248327,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tsoha16.views","tsoha16.views",-986162543,null),new cljs.core.Symbol(null,"uusi-aihe-sivu","uusi-aihe-sivu",-1621100497,null),"/Users/kallelehikoinen/dev/tsoha16/src/cljs/tsoha16/views.cljs",21,1,68,68,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(tsoha16.views.uusi_aihe_sivu)?tsoha16.views.uusi_aihe_sivu.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__50487__auto__)){
var vec__65957 = params__50487__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return tsoha16.views.uusi_aihe_sivu;},new cljs.core.Symbol("tsoha16.views","uusi-aihe-sivu","tsoha16.views/uusi-aihe-sivu",-106248327,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tsoha16.views","tsoha16.views",-986162543,null),new cljs.core.Symbol(null,"uusi-aihe-sivu","uusi-aihe-sivu",-1621100497,null),"/Users/kallelehikoinen/dev/tsoha16/src/cljs/tsoha16/views.cljs",21,1,68,68,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(tsoha16.views.uusi_aihe_sivu)?tsoha16.views.uusi_aihe_sivu.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/#/uusi-aihe",action__50486__auto___65960);

tsoha16.core.mount_root = (function tsoha16$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tsoha16.views.current_page], null),document.getElementById("app"));
});
tsoha16.core.init_BANG_ = (function tsoha16$core$init_BANG_(){
cljs.core.enable_console_print_BANG_.call(null);

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
return secretary.core.dispatch_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return secretary.core.locate_route.call(null,path);
})], null));

accountant.core.dispatch_current_BANG_.call(null);

return tsoha16.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map