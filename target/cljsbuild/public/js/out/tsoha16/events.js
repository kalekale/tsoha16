// Compiled by ClojureScript 1.9.229 {}
goog.provide('tsoha16.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('tsoha16.db');
goog.require('ajax.core');
goog.require('day8.re_frame.http_fx');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return tsoha16.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__78439){
var vec__78440 = p__78439;
var _ = cljs.core.nth.call(null,vec__78440,(0),null);
var panel = cljs.core.nth.call(null,vec__78440,(1),null);
cljs.core.print.call(null,"asd");

if(cljs.core.truth_(new cljs.core.Keyword(null,"logged-in","logged-in",627058423).cljs$core$IFn$_invoke$arity$1(db))){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),panel);
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Keyword(null,"login-panel","login-panel",-2123767360));
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"password-input-changed","password-input-changed",-1771836944),(function (db,p__78443){
var vec__78444 = p__78443;
var _ = cljs.core.nth.call(null,vec__78444,(0),null);
var password = cljs.core.nth.call(null,vec__78444,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"password-input","password-input",-978093158),password);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"username-input-changed","username-input-changed",253033443),(function (db,p__78454){
var vec__78455 = p__78454;
var _ = cljs.core.nth.call(null,vec__78455,(0),null);
var username = cljs.core.nth.call(null,vec__78455,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"username-input","username-input",673530501),username);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-location","change-location",516139777),(function (db,p__78458){
var vec__78459 = p__78458;
var _ = cljs.core.nth.call(null,vec__78459,(0),null);
var uri = cljs.core.nth.call(null,vec__78459,(1),null);
document.location = "#";

document.location = uri;

return db;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"login-succesful","login-succesful",-687198579),(function (world,p__78469){
var vec__78470 = p__78469;
var _ = cljs.core.nth.call(null,vec__78470,(0),null);
var res = cljs.core.nth.call(null,vec__78470,(1),null);
cljs.core.print.call(null,world);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-location","change-location",516139777),"#/"], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(world),new cljs.core.Keyword(null,"logged-in","logged-in",627058423),true),new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Keyword(null,"user-id","user-id",-206822291).cljs$core$IFn$_invoke$arity$1(res))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"login-clicked","login-clicked",-468133673),(function (p__78473,_){
var map__78474 = p__78473;
var map__78474__$1 = ((((!((map__78474 == null)))?((((map__78474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78474):map__78474);
var db = cljs.core.get.call(null,map__78474__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/login",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"username-input","username-input",673530501).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"password-input","password-input",-978093158).cljs$core$IFn$_invoke$arity$1(db)], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login-succesful","login-succesful",-687198579)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-creation-failed","topic-creation-failed",-761156688)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"message-edited","message-edited",-969545469),(function (app_state,p__78483){
var vec__78484 = p__78483;
var _ = cljs.core.nth.call(null,vec__78484,(0),null);
var message_str = cljs.core.nth.call(null,vec__78484,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-message","new-message",1599844061)], null),message_str);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"thread-edited","thread-edited",787683904),(function (app_state,p__78490){
var vec__78491 = p__78490;
var _ = cljs.core.nth.call(null,vec__78491,(0),null);
var topic_str = cljs.core.nth.call(null,vec__78491,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-thread","new-thread",-1960760943)], null),topic_str);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"topic-creation-failed","topic-creation-failed",-761156688),(function (db,p__78494){
var vec__78495 = p__78494;
var _ = cljs.core.nth.call(null,vec__78495,(0),null);
var res = cljs.core.nth.call(null,vec__78495,(1),null);
cljs.core.print.call(null,res);

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"topic-created","topic-created",1415188127),(function (db,p__78502){
var vec__78503 = p__78502;
var _ = cljs.core.nth.call(null,vec__78503,(0),null);
var vec__78506 = cljs.core.nth.call(null,vec__78503,(1),null);
var res = cljs.core.nth.call(null,vec__78506,(0),null);
cljs.core.print.call(null,res);

cljs.core.print.call(null,db);

document.location = [cljs.core.str("#/aihealueet/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"aihealue","aihealue",-944180949).cljs$core$IFn$_invoke$arity$1(db))),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"aihe_id","aihe_id",-154038011).cljs$core$IFn$_invoke$arity$1(res))].join('');

return db;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"send-new-topic","send-new-topic",1706722599),(function (p__78516,_){
var map__78517 = p__78516;
var map__78517__$1 = ((((!((map__78517 == null)))?((((map__78517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78517):map__78517);
var db = cljs.core.get.call(null,map__78517__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/new-topic",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"aihealue","aihealue",-944180949).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"thread","thread",947001524),new cljs.core.Keyword(null,"new-thread","new-thread",-1960760943).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"new-message","new-message",1599844061).cljs$core$IFn$_invoke$arity$1(db)], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-created","topic-created",1415188127)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-creation-failed","topic-creation-failed",-761156688)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"message-sent","message-sent",1107637548),(function (p__78527,p__78528){
var map__78529 = p__78527;
var map__78529__$1 = ((((!((map__78529 == null)))?((((map__78529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78529):map__78529);
var db = cljs.core.get.call(null,map__78529__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__78530 = p__78528;
var _ = cljs.core.nth.call(null,vec__78530,(0),null);
var res = cljs.core.nth.call(null,vec__78530,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-messages","get-messages",-1767747536),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"aihe","aihe",-1345360341).cljs$core$IFn$_invoke$arity$1(db))], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-message","new-message",1599844061)], null),"")], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"location","location",1815599388),(function (url){
document.location = "#";

return document.location = url;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"message-edit-success","message-edit-success",1082318856),(function (p__78541,p__78542){
var map__78544 = p__78541;
var map__78544__$1 = ((((!((map__78544 == null)))?((((map__78544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78544):map__78544);
var db = cljs.core.get.call(null,map__78544__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__78545 = p__78542;
var _ = cljs.core.nth.call(null,vec__78545,(0),null);
var res = cljs.core.nth.call(null,vec__78545,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"location","location",1815599388),"#/",new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-messages","get-messages",-1767747536),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"aihe","aihe",-1345360341).cljs$core$IFn$_invoke$arity$1(db))], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-message","new-message",1599844061)], null),"")], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"edit-message","edit-message",373070759),(function (p__78563,p__78564){
var map__78565 = p__78563;
var map__78565__$1 = ((((!((map__78565 == null)))?((((map__78565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78565):map__78565);
var db = cljs.core.get.call(null,map__78565__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__78566 = p__78564;
var _ = cljs.core.nth.call(null,vec__78566,(0),null);
var id = cljs.core.nth.call(null,vec__78566,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/edit-message",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"viesti","viesti",984723613),new cljs.core.Keyword(null,"new-message","new-message",1599844061).cljs$core$IFn$_invoke$arity$1(db)], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message-edit-success","message-edit-success",1082318856)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-creation-failed","topic-creation-failed",-761156688)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"send-new-message","send-new-message",1962058295),(function (p__78577,_){
var map__78578 = p__78577;
var map__78578__$1 = ((((!((map__78578 == null)))?((((map__78578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78578):map__78578);
var db = cljs.core.get.call(null,map__78578__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/new-message",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"thread","thread",947001524),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"aihealue","aihealue",-944180949).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"new-message","new-message",1599844061).cljs$core$IFn$_invoke$arity$1(db)], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message-sent","message-sent",1107637548)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-creation-failed","topic-creation-failed",-761156688)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"topic-list-success","topic-list-success",-1884672900),(function (db,p__78588){
var vec__78589 = p__78588;
var _ = cljs.core.nth.call(null,vec__78589,(0),null);
var res = cljs.core.nth.call(null,vec__78589,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aihealueet","aihealueet",-1619454521)], null),res);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"topic-list-fail","topic-list-fail",-1266802669),(function (db,p__78599){
var vec__78600 = p__78599;
var _ = cljs.core.nth.call(null,vec__78600,(0),null);
var res = cljs.core.nth.call(null,vec__78600,(1),null);
cljs.core.print.call(null,res);

return db;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-topic-list","get-topic-list",-2106505061),(function (p__78603,_){
var map__78604 = p__78603;
var map__78604__$1 = ((((!((map__78604 == null)))?((((map__78604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78604):map__78604);
var db = cljs.core.get.call(null,map__78604__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/topic-list",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-list-success","topic-list-success",-1884672900)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-list-fail","topic-list-fail",-1266802669)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"topic-get-failed","topic-get-failed",142912952),(function (db,p__78613){
var vec__78614 = p__78613;
var _ = cljs.core.nth.call(null,vec__78614,(0),null);
var res = cljs.core.nth.call(null,vec__78614,(1),null);
cljs.core.print.call(null,res);

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"topic-get-success","topic-get-success",408282807),(function (db,p__78617){
var vec__78618 = p__78617;
var _ = cljs.core.nth.call(null,vec__78618,(0),null);
var res = cljs.core.nth.call(null,vec__78618,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aihealue","aihealue",-944180949)], null),res);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-topic","get-topic",945644646),(function (p__78628,p__78629){
var map__78630 = p__78628;
var map__78630__$1 = ((((!((map__78630 == null)))?((((map__78630.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78630.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78630):map__78630);
var db = cljs.core.get.call(null,map__78630__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__78631 = p__78629;
var _ = cljs.core.nth.call(null,vec__78631,(0),null);
var topic_id = cljs.core.nth.call(null,vec__78631,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/topic",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic_id], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-get-success","topic-get-success",408282807)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-get-failed","topic-get-failed",142912952)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"threads-get-success","threads-get-success",-295502714),(function (db,p__78646){
var vec__78647 = p__78646;
var _ = cljs.core.nth.call(null,vec__78647,(0),null);
var res = cljs.core.nth.call(null,vec__78647,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aiheet","aiheet",-1391850048)], null),res);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"thread-get-success","thread-get-success",-979380283),(function (db,p__78654){
var vec__78655 = p__78654;
var _ = cljs.core.nth.call(null,vec__78655,(0),null);
var res = cljs.core.nth.call(null,vec__78655,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aihe","aihe",-1345360341)], null),res);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-threads","get-threads",-470534495),(function (p__78658,p__78659){
var map__78660 = p__78658;
var map__78660__$1 = ((((!((map__78660 == null)))?((((map__78660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78660):map__78660);
var db = cljs.core.get.call(null,map__78660__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__78661 = p__78659;
var _ = cljs.core.nth.call(null,vec__78661,(0),null);
var topic_id = cljs.core.nth.call(null,vec__78661,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/threads",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic_id], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threads-get-success","threads-get-success",-295502714)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-get-failed","topic-get-failed",142912952)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-thread","get-thread",-1356240042),(function (p__78665,p__78666){
var map__78667 = p__78665;
var map__78667__$1 = ((((!((map__78667 == null)))?((((map__78667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78667):map__78667);
var db = cljs.core.get.call(null,map__78667__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__78668 = p__78666;
var _ = cljs.core.nth.call(null,vec__78668,(0),null);
var thread_id = cljs.core.nth.call(null,vec__78668,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/thread",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"thread","thread",947001524),thread_id], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thread-get-success","thread-get-success",-979380283)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thread-get-failed","thread-get-failed",1830639839)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"messages-get-success","messages-get-success",-1484871163),(function (db,p__78672){
var vec__78673 = p__78672;
var _ = cljs.core.nth.call(null,vec__78673,(0),null);
var res = cljs.core.nth.call(null,vec__78673,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viestit","viestit",114360310)], null),res);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"message-get-success","message-get-success",1683918932),(function (db,p__78676){
var vec__78677 = p__78676;
var _ = cljs.core.nth.call(null,vec__78677,(0),null);
var res = cljs.core.nth.call(null,vec__78677,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viesti","viesti",984723613)], null),res);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-message","get-message",959360291),(function (p__78680,p__78681){
var map__78682 = p__78680;
var map__78682__$1 = ((((!((map__78682 == null)))?((((map__78682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78682):map__78682);
var db = cljs.core.get.call(null,map__78682__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__78683 = p__78681;
var _ = cljs.core.nth.call(null,vec__78683,(0),null);
var id = cljs.core.nth.call(null,vec__78683,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/message",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message-get-success","message-get-success",1683918932)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-get-failed","topic-get-failed",142912952)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-messages","get-messages",-1767747536),(function (p__78687,p__78688){
var map__78689 = p__78687;
var map__78689__$1 = ((((!((map__78689 == null)))?((((map__78689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78689):map__78689);
var db = cljs.core.get.call(null,map__78689__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__78690 = p__78688;
var _ = cljs.core.nth.call(null,vec__78690,(0),null);
var thread_id = cljs.core.nth.call(null,vec__78690,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/messages",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"thread","thread",947001524),thread_id], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messages-get-success","messages-get-success",-1484871163)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thread-get-failed","thread-get-failed",1830639839)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"delete-thread-success","delete-thread-success",1405917449),(function (world,p__78694){
var vec__78695 = p__78694;
var _ = cljs.core.nth.call(null,vec__78695,(0),null);
var vec__78698 = cljs.core.nth.call(null,vec__78695,(1),null);
var thread_id = cljs.core.nth.call(null,vec__78698,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-threads","get-threads",-470534495),thread_id], null),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(world)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"delete-thread","delete-thread",1020499095),(function (p__78701,p__78702){
var map__78703 = p__78701;
var map__78703__$1 = ((((!((map__78703 == null)))?((((map__78703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78703):map__78703);
var db = cljs.core.get.call(null,map__78703__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__78704 = p__78702;
var _ = cljs.core.nth.call(null,vec__78704,(0),null);
var thread_id = cljs.core.nth.call(null,vec__78704,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/thread",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"thread","thread",947001524),thread_id], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-thread-success","delete-thread-success",1405917449)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-get-failed","topic-get-failed",142912952)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"edit-thread-success","edit-thread-success",-1322260413),(function (world,p__78708){
var vec__78709 = p__78708;
var _ = cljs.core.nth.call(null,vec__78709,(0),null);
var res = cljs.core.nth.call(null,vec__78709,(1),null);
cljs.core.print.call(null,res);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-location","change-location",516139777),"#/"], null),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(world)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"edit-thread","edit-thread",1381567452),(function (world,p__78712){
var vec__78713 = p__78712;
var _ = cljs.core.nth.call(null,vec__78713,(0),null);
var thread_id = cljs.core.nth.call(null,vec__78713,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/edit-thread",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),thread_id,new cljs.core.Keyword(null,"otsikko","otsikko",1642720594),cljs.core.get_in.call(null,world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"new-thread","new-thread",-1960760943)], null))], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit-thread-success","edit-thread-success",-1322260413)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-get-failed","topic-get-failed",142912952)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(world)], null);
}));

//# sourceMappingURL=events.js.map