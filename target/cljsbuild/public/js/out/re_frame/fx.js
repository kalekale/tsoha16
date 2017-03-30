// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__45948){
var vec__45949 = p__45948;
var k = cljs.core.nth.call(null,vec__45949,(0),null);
var value = cljs.core.nth.call(null,vec__45949,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return effect_fn.call(null,value);
} else {
return null;
}
}),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context)));
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__45952 = cljs.core.seq.call(null,value);
var chunk__45953 = null;
var count__45954 = (0);
var i__45955 = (0);
while(true){
if((i__45955 < count__45954)){
var map__45956 = cljs.core._nth.call(null,chunk__45953,i__45955);
var map__45956__$1 = ((((!((map__45956 == null)))?((((map__45956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45956):map__45956);
var effect = map__45956__$1;
var ms = cljs.core.get.call(null,map__45956__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__45956__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__45952,chunk__45953,count__45954,i__45955,map__45956,map__45956__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__45952,chunk__45953,count__45954,i__45955,map__45956,map__45956__$1,effect,ms,dispatch))
,ms);
}

var G__45960 = seq__45952;
var G__45961 = chunk__45953;
var G__45962 = count__45954;
var G__45963 = (i__45955 + (1));
seq__45952 = G__45960;
chunk__45953 = G__45961;
count__45954 = G__45962;
i__45955 = G__45963;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45952);
if(temp__4657__auto__){
var seq__45952__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45952__$1)){
var c__37889__auto__ = cljs.core.chunk_first.call(null,seq__45952__$1);
var G__45964 = cljs.core.chunk_rest.call(null,seq__45952__$1);
var G__45965 = c__37889__auto__;
var G__45966 = cljs.core.count.call(null,c__37889__auto__);
var G__45967 = (0);
seq__45952 = G__45964;
chunk__45953 = G__45965;
count__45954 = G__45966;
i__45955 = G__45967;
continue;
} else {
var map__45958 = cljs.core.first.call(null,seq__45952__$1);
var map__45958__$1 = ((((!((map__45958 == null)))?((((map__45958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45958):map__45958);
var effect = map__45958__$1;
var ms = cljs.core.get.call(null,map__45958__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__45958__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__45952,chunk__45953,count__45954,i__45955,map__45958,map__45958__$1,effect,ms,dispatch,seq__45952__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__45952,chunk__45953,count__45954,i__45955,map__45958,map__45958__$1,effect,ms,dispatch,seq__45952__$1,temp__4657__auto__))
,ms);
}

var G__45968 = cljs.core.next.call(null,seq__45952__$1);
var G__45969 = null;
var G__45970 = (0);
var G__45971 = (0);
seq__45952 = G__45968;
chunk__45953 = G__45969;
count__45954 = G__45970;
i__45955 = G__45971;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value);
} else {
}

var seq__45972 = cljs.core.seq.call(null,value);
var chunk__45973 = null;
var count__45974 = (0);
var i__45975 = (0);
while(true){
if((i__45975 < count__45974)){
var event = cljs.core._nth.call(null,chunk__45973,i__45975);
re_frame.router.dispatch.call(null,event);

var G__45976 = seq__45972;
var G__45977 = chunk__45973;
var G__45978 = count__45974;
var G__45979 = (i__45975 + (1));
seq__45972 = G__45976;
chunk__45973 = G__45977;
count__45974 = G__45978;
i__45975 = G__45979;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45972);
if(temp__4657__auto__){
var seq__45972__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45972__$1)){
var c__37889__auto__ = cljs.core.chunk_first.call(null,seq__45972__$1);
var G__45980 = cljs.core.chunk_rest.call(null,seq__45972__$1);
var G__45981 = c__37889__auto__;
var G__45982 = cljs.core.count.call(null,c__37889__auto__);
var G__45983 = (0);
seq__45972 = G__45980;
chunk__45973 = G__45981;
count__45974 = G__45982;
i__45975 = G__45983;
continue;
} else {
var event = cljs.core.first.call(null,seq__45972__$1);
re_frame.router.dispatch.call(null,event);

var G__45984 = cljs.core.next.call(null,seq__45972__$1);
var G__45985 = null;
var G__45986 = (0);
var G__45987 = (0);
seq__45972 = G__45984;
chunk__45973 = G__45985;
count__45974 = G__45986;
i__45975 = G__45987;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.doall.call(null,cljs.core.map.call(null,clear_event,value));
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map