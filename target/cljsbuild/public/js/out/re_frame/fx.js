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
var seq__48189 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__48190 = null;
var count__48191 = (0);
var i__48192 = (0);
while(true){
if((i__48192 < count__48191)){
var vec__48193 = cljs.core._nth.call(null,chunk__48190,i__48192);
var effect_k = cljs.core.nth.call(null,vec__48193,(0),null);
var value = cljs.core.nth.call(null,vec__48193,(1),null);
var temp__4655__auto___48199 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___48199)){
var effect_fn_48200 = temp__4655__auto___48199;
effect_fn_48200.call(null,value);
} else {
}

var G__48201 = seq__48189;
var G__48202 = chunk__48190;
var G__48203 = count__48191;
var G__48204 = (i__48192 + (1));
seq__48189 = G__48201;
chunk__48190 = G__48202;
count__48191 = G__48203;
i__48192 = G__48204;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48189);
if(temp__4657__auto__){
var seq__48189__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48189__$1)){
var c__47258__auto__ = cljs.core.chunk_first.call(null,seq__48189__$1);
var G__48205 = cljs.core.chunk_rest.call(null,seq__48189__$1);
var G__48206 = c__47258__auto__;
var G__48207 = cljs.core.count.call(null,c__47258__auto__);
var G__48208 = (0);
seq__48189 = G__48205;
chunk__48190 = G__48206;
count__48191 = G__48207;
i__48192 = G__48208;
continue;
} else {
var vec__48196 = cljs.core.first.call(null,seq__48189__$1);
var effect_k = cljs.core.nth.call(null,vec__48196,(0),null);
var value = cljs.core.nth.call(null,vec__48196,(1),null);
var temp__4655__auto___48209 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___48209)){
var effect_fn_48210 = temp__4655__auto___48209;
effect_fn_48210.call(null,value);
} else {
}

var G__48211 = cljs.core.next.call(null,seq__48189__$1);
var G__48212 = null;
var G__48213 = (0);
var G__48214 = (0);
seq__48189 = G__48211;
chunk__48190 = G__48212;
count__48191 = G__48213;
i__48192 = G__48214;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__48215 = cljs.core.seq.call(null,value);
var chunk__48216 = null;
var count__48217 = (0);
var i__48218 = (0);
while(true){
if((i__48218 < count__48217)){
var map__48219 = cljs.core._nth.call(null,chunk__48216,i__48218);
var map__48219__$1 = ((((!((map__48219 == null)))?((((map__48219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48219):map__48219);
var effect = map__48219__$1;
var ms = cljs.core.get.call(null,map__48219__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__48219__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__48215,chunk__48216,count__48217,i__48218,map__48219,map__48219__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__48215,chunk__48216,count__48217,i__48218,map__48219,map__48219__$1,effect,ms,dispatch))
,ms);
}

var G__48223 = seq__48215;
var G__48224 = chunk__48216;
var G__48225 = count__48217;
var G__48226 = (i__48218 + (1));
seq__48215 = G__48223;
chunk__48216 = G__48224;
count__48217 = G__48225;
i__48218 = G__48226;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48215);
if(temp__4657__auto__){
var seq__48215__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48215__$1)){
var c__47258__auto__ = cljs.core.chunk_first.call(null,seq__48215__$1);
var G__48227 = cljs.core.chunk_rest.call(null,seq__48215__$1);
var G__48228 = c__47258__auto__;
var G__48229 = cljs.core.count.call(null,c__47258__auto__);
var G__48230 = (0);
seq__48215 = G__48227;
chunk__48216 = G__48228;
count__48217 = G__48229;
i__48218 = G__48230;
continue;
} else {
var map__48221 = cljs.core.first.call(null,seq__48215__$1);
var map__48221__$1 = ((((!((map__48221 == null)))?((((map__48221.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48221.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48221):map__48221);
var effect = map__48221__$1;
var ms = cljs.core.get.call(null,map__48221__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__48221__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__48215,chunk__48216,count__48217,i__48218,map__48221,map__48221__$1,effect,ms,dispatch,seq__48215__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__48215,chunk__48216,count__48217,i__48218,map__48221,map__48221__$1,effect,ms,dispatch,seq__48215__$1,temp__4657__auto__))
,ms);
}

var G__48231 = cljs.core.next.call(null,seq__48215__$1);
var G__48232 = null;
var G__48233 = (0);
var G__48234 = (0);
seq__48215 = G__48231;
chunk__48216 = G__48232;
count__48217 = G__48233;
i__48218 = G__48234;
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
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__48235 = cljs.core.seq.call(null,value);
var chunk__48236 = null;
var count__48237 = (0);
var i__48238 = (0);
while(true){
if((i__48238 < count__48237)){
var event = cljs.core._nth.call(null,chunk__48236,i__48238);
re_frame.router.dispatch.call(null,event);

var G__48239 = seq__48235;
var G__48240 = chunk__48236;
var G__48241 = count__48237;
var G__48242 = (i__48238 + (1));
seq__48235 = G__48239;
chunk__48236 = G__48240;
count__48237 = G__48241;
i__48238 = G__48242;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48235);
if(temp__4657__auto__){
var seq__48235__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48235__$1)){
var c__47258__auto__ = cljs.core.chunk_first.call(null,seq__48235__$1);
var G__48243 = cljs.core.chunk_rest.call(null,seq__48235__$1);
var G__48244 = c__47258__auto__;
var G__48245 = cljs.core.count.call(null,c__47258__auto__);
var G__48246 = (0);
seq__48235 = G__48243;
chunk__48236 = G__48244;
count__48237 = G__48245;
i__48238 = G__48246;
continue;
} else {
var event = cljs.core.first.call(null,seq__48235__$1);
re_frame.router.dispatch.call(null,event);

var G__48247 = cljs.core.next.call(null,seq__48235__$1);
var G__48248 = null;
var G__48249 = (0);
var G__48250 = (0);
seq__48235 = G__48247;
chunk__48236 = G__48248;
count__48237 = G__48249;
i__48238 = G__48250;
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
var seq__48251 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__48252 = null;
var count__48253 = (0);
var i__48254 = (0);
while(true){
if((i__48254 < count__48253)){
var event = cljs.core._nth.call(null,chunk__48252,i__48254);
clear_event.call(null,event);

var G__48255 = seq__48251;
var G__48256 = chunk__48252;
var G__48257 = count__48253;
var G__48258 = (i__48254 + (1));
seq__48251 = G__48255;
chunk__48252 = G__48256;
count__48253 = G__48257;
i__48254 = G__48258;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48251);
if(temp__4657__auto__){
var seq__48251__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48251__$1)){
var c__47258__auto__ = cljs.core.chunk_first.call(null,seq__48251__$1);
var G__48259 = cljs.core.chunk_rest.call(null,seq__48251__$1);
var G__48260 = c__47258__auto__;
var G__48261 = cljs.core.count.call(null,c__47258__auto__);
var G__48262 = (0);
seq__48251 = G__48259;
chunk__48252 = G__48260;
count__48253 = G__48261;
i__48254 = G__48262;
continue;
} else {
var event = cljs.core.first.call(null,seq__48251__$1);
clear_event.call(null,event);

var G__48263 = cljs.core.next.call(null,seq__48251__$1);
var G__48264 = null;
var G__48265 = (0);
var G__48266 = (0);
seq__48251 = G__48263;
chunk__48252 = G__48264;
count__48253 = G__48265;
i__48254 = G__48266;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map