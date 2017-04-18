// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__48045_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__48045_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected a collection of interceptors, got:")].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering"),cljs.core.str(id),cljs.core.str(", given an empty interceptor chain")].join(''));
} else {
}

var temp__4657__auto___48046 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___48046)){
var not_i_48047 = temp__4657__auto___48046;
if(cljs.core.fn_QMARK_.call(null,not_i_48047)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_48047);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected interceptors, but got:")].join(''),not_i_48047);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: while handling \""),cljs.core.str(re_frame.events._STAR_handling_STAR_),cljs.core.str("\", dispatch-sync was called for \""),cljs.core.str(event_v),cljs.core.str("\". You can't call dispatch-sync within an event handler.")].join(''));
} else {
var _STAR_handling_STAR_48062 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_48063 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__48020__auto___48076 = re_frame.interop.now.call(null);
var duration__48021__auto___48077 = (end__48020__auto___48076 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__48064_48078 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__48065_48079 = null;
var count__48066_48080 = (0);
var i__48067_48081 = (0);
while(true){
if((i__48067_48081 < count__48066_48080)){
var vec__48068_48082 = cljs.core._nth.call(null,chunk__48065_48079,i__48067_48081);
var k__48022__auto___48083 = cljs.core.nth.call(null,vec__48068_48082,(0),null);
var cb__48023__auto___48084 = cljs.core.nth.call(null,vec__48068_48082,(1),null);
try{cb__48023__auto___48084.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__48021__auto___48077,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e48071){if((e48071 instanceof java.lang.Exception)){
var e__48024__auto___48085 = e48071;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__48022__auto___48083,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__48024__auto___48085);
} else {
throw e48071;

}
}
var G__48086 = seq__48064_48078;
var G__48087 = chunk__48065_48079;
var G__48088 = count__48066_48080;
var G__48089 = (i__48067_48081 + (1));
seq__48064_48078 = G__48086;
chunk__48065_48079 = G__48087;
count__48066_48080 = G__48088;
i__48067_48081 = G__48089;
continue;
} else {
var temp__4657__auto___48090 = cljs.core.seq.call(null,seq__48064_48078);
if(temp__4657__auto___48090){
var seq__48064_48091__$1 = temp__4657__auto___48090;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48064_48091__$1)){
var c__47258__auto___48092 = cljs.core.chunk_first.call(null,seq__48064_48091__$1);
var G__48093 = cljs.core.chunk_rest.call(null,seq__48064_48091__$1);
var G__48094 = c__47258__auto___48092;
var G__48095 = cljs.core.count.call(null,c__47258__auto___48092);
var G__48096 = (0);
seq__48064_48078 = G__48093;
chunk__48065_48079 = G__48094;
count__48066_48080 = G__48095;
i__48067_48081 = G__48096;
continue;
} else {
var vec__48072_48097 = cljs.core.first.call(null,seq__48064_48091__$1);
var k__48022__auto___48098 = cljs.core.nth.call(null,vec__48072_48097,(0),null);
var cb__48023__auto___48099 = cljs.core.nth.call(null,vec__48072_48097,(1),null);
try{cb__48023__auto___48099.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__48021__auto___48077,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e48075){if((e48075 instanceof java.lang.Exception)){
var e__48024__auto___48100 = e48075;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__48022__auto___48098,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__48024__auto___48100);
} else {
throw e48075;

}
}
var G__48101 = cljs.core.next.call(null,seq__48064_48091__$1);
var G__48102 = null;
var G__48103 = (0);
var G__48104 = (0);
seq__48064_48078 = G__48101;
chunk__48065_48079 = G__48102;
count__48066_48080 = G__48103;
i__48067_48081 = G__48104;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_48063;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_48062;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map