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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__39849){
var vec__39850 = p__39849;
var k = cljs.core.nth.call(null,vec__39850,(0),null);
var value = cljs.core.nth.call(null,vec__39850,(1),null);
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
var seq__39853 = cljs.core.seq.call(null,value);
var chunk__39854 = null;
var count__39855 = (0);
var i__39856 = (0);
while(true){
if((i__39856 < count__39855)){
var map__39857 = cljs.core._nth.call(null,chunk__39854,i__39856);
var map__39857__$1 = ((((!((map__39857 == null)))?((((map__39857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39857):map__39857);
var effect = map__39857__$1;
var ms = cljs.core.get.call(null,map__39857__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39857__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39853,chunk__39854,count__39855,i__39856,map__39857,map__39857__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39853,chunk__39854,count__39855,i__39856,map__39857,map__39857__$1,effect,ms,dispatch))
,ms);
}

var G__39861 = seq__39853;
var G__39862 = chunk__39854;
var G__39863 = count__39855;
var G__39864 = (i__39856 + (1));
seq__39853 = G__39861;
chunk__39854 = G__39862;
count__39855 = G__39863;
i__39856 = G__39864;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39853);
if(temp__4657__auto__){
var seq__39853__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39853__$1)){
var c__37778__auto__ = cljs.core.chunk_first.call(null,seq__39853__$1);
var G__39865 = cljs.core.chunk_rest.call(null,seq__39853__$1);
var G__39866 = c__37778__auto__;
var G__39867 = cljs.core.count.call(null,c__37778__auto__);
var G__39868 = (0);
seq__39853 = G__39865;
chunk__39854 = G__39866;
count__39855 = G__39867;
i__39856 = G__39868;
continue;
} else {
var map__39859 = cljs.core.first.call(null,seq__39853__$1);
var map__39859__$1 = ((((!((map__39859 == null)))?((((map__39859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39859):map__39859);
var effect = map__39859__$1;
var ms = cljs.core.get.call(null,map__39859__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39859__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39853,chunk__39854,count__39855,i__39856,map__39859,map__39859__$1,effect,ms,dispatch,seq__39853__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39853,chunk__39854,count__39855,i__39856,map__39859,map__39859__$1,effect,ms,dispatch,seq__39853__$1,temp__4657__auto__))
,ms);
}

var G__39869 = cljs.core.next.call(null,seq__39853__$1);
var G__39870 = null;
var G__39871 = (0);
var G__39872 = (0);
seq__39853 = G__39869;
chunk__39854 = G__39870;
count__39855 = G__39871;
i__39856 = G__39872;
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

var seq__39873 = cljs.core.seq.call(null,value);
var chunk__39874 = null;
var count__39875 = (0);
var i__39876 = (0);
while(true){
if((i__39876 < count__39875)){
var event = cljs.core._nth.call(null,chunk__39874,i__39876);
re_frame.router.dispatch.call(null,event);

var G__39877 = seq__39873;
var G__39878 = chunk__39874;
var G__39879 = count__39875;
var G__39880 = (i__39876 + (1));
seq__39873 = G__39877;
chunk__39874 = G__39878;
count__39875 = G__39879;
i__39876 = G__39880;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39873);
if(temp__4657__auto__){
var seq__39873__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39873__$1)){
var c__37778__auto__ = cljs.core.chunk_first.call(null,seq__39873__$1);
var G__39881 = cljs.core.chunk_rest.call(null,seq__39873__$1);
var G__39882 = c__37778__auto__;
var G__39883 = cljs.core.count.call(null,c__37778__auto__);
var G__39884 = (0);
seq__39873 = G__39881;
chunk__39874 = G__39882;
count__39875 = G__39883;
i__39876 = G__39884;
continue;
} else {
var event = cljs.core.first.call(null,seq__39873__$1);
re_frame.router.dispatch.call(null,event);

var G__39885 = cljs.core.next.call(null,seq__39873__$1);
var G__39886 = null;
var G__39887 = (0);
var G__39888 = (0);
seq__39873 = G__39885;
chunk__39874 = G__39886;
count__39875 = G__39887;
i__39876 = G__39888;
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