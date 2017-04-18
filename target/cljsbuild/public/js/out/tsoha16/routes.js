// Compiled by ClojureScript 1.9.229 {}
goog.provide('tsoha16.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
tsoha16.routes.hook_browser_navigation_BANG_ = (function tsoha16$routes$hook_browser_navigation_BANG_(){
var G__71687 = (new goog.History());
goog.events.listen(G__71687,goog.history.EventType.NAVIGATE,((function (G__71687){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__71687))
);

G__71687.setEnabled(true);

return G__71687;
});
tsoha16.routes.app_routes = (function tsoha16$routes$app_routes(){
var action__49051__auto___71758 = (function (params__49052__auto__){
if(cljs.core.map_QMARK_.call(null,params__49052__auto__)){
var map__71723 = params__49052__auto__;
var map__71723__$1 = ((((!((map__71723 == null)))?((((map__71723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71723):map__71723);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-panel","login-panel",-2123767360)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__49052__auto__)){
var vec__71725 = params__49052__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-panel","login-panel",-2123767360)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/login",action__49051__auto___71758);


secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__49051__auto___71759 = (function (params__49052__auto__){
if(cljs.core.map_QMARK_.call(null,params__49052__auto__)){
var map__71728 = params__49052__auto__;
var map__71728__$1 = ((((!((map__71728 == null)))?((((map__71728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71728):map__71728);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-topic-list","get-topic-list",-2106505061)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__49052__auto__)){
var vec__71730 = params__49052__auto__;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-topic-list","get-topic-list",-2106505061)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__49051__auto___71759);


var action__49051__auto___71760 = (function (params__49052__auto__){
if(cljs.core.map_QMARK_.call(null,params__49052__auto__)){
var map__71733 = params__49052__auto__;
var map__71733__$1 = ((((!((map__71733 == null)))?((((map__71733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71733):map__71733);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-panel","login-panel",-2123767360)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__49052__auto__)){
var vec__71735 = params__49052__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-panel","login-panel",-2123767360)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/login",action__49051__auto___71760);


var action__49051__auto___71761 = (function (params__49052__auto__){
if(cljs.core.map_QMARK_.call(null,params__49052__auto__)){
var map__71738 = params__49052__auto__;
var map__71738__$1 = ((((!((map__71738 == null)))?((((map__71738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71738):map__71738);
var params = map__71738__$1;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-topic","get-topic",945644646),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-threads","get-threads",-470534495),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"topic-panel","topic-panel",1776045868)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__49052__auto__)){
var map__71740 = params__49052__auto__;
var map__71740__$1 = ((((!((map__71740 == null)))?((((map__71740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71740):map__71740);
var params = map__71740__$1;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-topic","get-topic",945644646),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-threads","get-threads",-470534495),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"topic-panel","topic-panel",1776045868)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/aihealueet/:id",action__49051__auto___71761);


var action__49051__auto___71762 = (function (params__49052__auto__){
if(cljs.core.map_QMARK_.call(null,params__49052__auto__)){
var map__71742 = params__49052__auto__;
var map__71742__$1 = ((((!((map__71742 == null)))?((((map__71742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71742):map__71742);
var params = map__71742__$1;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-thread","get-thread",-1356240042),new cljs.core.Keyword(null,"aihe-id","aihe-id",-415879323).cljs$core$IFn$_invoke$arity$1(params)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-messages","get-messages",-1767747536),new cljs.core.Keyword(null,"aihe-id","aihe-id",-415879323).cljs$core$IFn$_invoke$arity$1(params)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"thread-panel","thread-panel",-660420667)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__49052__auto__)){
var map__71744 = params__49052__auto__;
var map__71744__$1 = ((((!((map__71744 == null)))?((((map__71744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71744):map__71744);
var params = map__71744__$1;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-thread","get-thread",-1356240042),new cljs.core.Keyword(null,"aihe-id","aihe-id",-415879323).cljs$core$IFn$_invoke$arity$1(params)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-messages","get-messages",-1767747536),new cljs.core.Keyword(null,"aihe-id","aihe-id",-415879323).cljs$core$IFn$_invoke$arity$1(params)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"thread-panel","thread-panel",-660420667)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/aihealueet/:alue-id/:aihe-id",action__49051__auto___71762);


var action__49051__auto___71763 = (function (params__49052__auto__){
if(cljs.core.map_QMARK_.call(null,params__49052__auto__)){
var map__71746 = params__49052__auto__;
var map__71746__$1 = ((((!((map__71746 == null)))?((((map__71746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71746):map__71746);
var params = map__71746__$1;
cljs.core.print.call(null,params);

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-thread","get-thread",-1356240042),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"edit-thread-panel","edit-thread-panel",772151204)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__49052__auto__)){
var map__71748 = params__49052__auto__;
var map__71748__$1 = ((((!((map__71748 == null)))?((((map__71748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71748):map__71748);
var params = map__71748__$1;
cljs.core.print.call(null,params);

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-thread","get-thread",-1356240042),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"edit-thread-panel","edit-thread-panel",772151204)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/muokkaa-aihetta/:id",action__49051__auto___71763);


var action__49051__auto___71764 = (function (params__49052__auto__){
if(cljs.core.map_QMARK_.call(null,params__49052__auto__)){
var map__71750 = params__49052__auto__;
var map__71750__$1 = ((((!((map__71750 == null)))?((((map__71750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71750):map__71750);
var params = map__71750__$1;
cljs.core.print.call(null,params);

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-topic","get-topic",945644646),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"new-thread-panel","new-thread-panel",896402906)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__49052__auto__)){
var map__71752 = params__49052__auto__;
var map__71752__$1 = ((((!((map__71752 == null)))?((((map__71752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71752):map__71752);
var params = map__71752__$1;
cljs.core.print.call(null,params);

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-topic","get-topic",945644646),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"new-thread-panel","new-thread-panel",896402906)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/uusi-aihe/:id",action__49051__auto___71764);


var action__49051__auto___71765 = (function (params__49052__auto__){
if(cljs.core.map_QMARK_.call(null,params__49052__auto__)){
var map__71754 = params__49052__auto__;
var map__71754__$1 = ((((!((map__71754 == null)))?((((map__71754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71754):map__71754);
var params = map__71754__$1;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-message","get-message",959360291),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"edit-message-panel","edit-message-panel",-2047248288)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__49052__auto__)){
var map__71756 = params__49052__auto__;
var map__71756__$1 = ((((!((map__71756 == null)))?((((map__71756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71756):map__71756);
var params = map__71756__$1;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-message","get-message",959360291),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"edit-message-panel","edit-message-panel",-2047248288)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/muokkaa-viestia/:id",action__49051__auto___71765);


return tsoha16.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map