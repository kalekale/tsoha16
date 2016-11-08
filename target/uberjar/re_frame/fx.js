// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.register_handler,re_frame.fx.kind);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13805){
var vec__13806 = p__13805;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13806,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13806,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return (effect_fn.cljs$core$IFn$_invoke$arity$1 ? effect_fn.cljs$core$IFn$_invoke$arity$1(value) : effect_fn.call(null,value));
} else {
return null;
}
}),cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context)));
})], 0));
var G__13809_13819 = cljs.core.cst$kw$dispatch_DASH_later;
var G__13810_13820 = ((function (G__13809_13819){
return (function (value){
var seq__13811 = cljs.core.seq(value);
var chunk__13812 = null;
var count__13813 = (0);
var i__13814 = (0);
while(true){
if((i__13814 < count__13813)){
var map__13815 = chunk__13812.cljs$core$IIndexed$_nth$arity$2(null,i__13814);
var map__13815__$1 = ((((!((map__13815 == null)))?((((map__13815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13815):map__13815);
var effect = map__13815__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13815__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13815__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13811,chunk__13812,count__13813,i__13814,map__13815,map__13815__$1,effect,ms,dispatch,G__13809_13819){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13811,chunk__13812,count__13813,i__13814,map__13815,map__13815__$1,effect,ms,dispatch,G__13809_13819))
,ms);
}

var G__13821 = seq__13811;
var G__13822 = chunk__13812;
var G__13823 = count__13813;
var G__13824 = (i__13814 + (1));
seq__13811 = G__13821;
chunk__13812 = G__13822;
count__13813 = G__13823;
i__13814 = G__13824;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13811);
if(temp__4657__auto__){
var seq__13811__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13811__$1)){
var c__7115__auto__ = cljs.core.chunk_first(seq__13811__$1);
var G__13825 = cljs.core.chunk_rest(seq__13811__$1);
var G__13826 = c__7115__auto__;
var G__13827 = cljs.core.count(c__7115__auto__);
var G__13828 = (0);
seq__13811 = G__13825;
chunk__13812 = G__13826;
count__13813 = G__13827;
i__13814 = G__13828;
continue;
} else {
var map__13817 = cljs.core.first(seq__13811__$1);
var map__13817__$1 = ((((!((map__13817 == null)))?((((map__13817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13817):map__13817);
var effect = map__13817__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13817__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13817__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13811,chunk__13812,count__13813,i__13814,map__13817,map__13817__$1,effect,ms,dispatch,seq__13811__$1,temp__4657__auto__,G__13809_13819){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13811,chunk__13812,count__13813,i__13814,map__13817,map__13817__$1,effect,ms,dispatch,seq__13811__$1,temp__4657__auto__,G__13809_13819))
,ms);
}

var G__13829 = cljs.core.next(seq__13811__$1);
var G__13830 = null;
var G__13831 = (0);
var G__13832 = (0);
seq__13811 = G__13829;
chunk__13812 = G__13830;
count__13813 = G__13831;
i__13814 = G__13832;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__13809_13819))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13809_13819,G__13810_13820) : re_frame.fx.register.call(null,G__13809_13819,G__13810_13820));
var G__13833_13835 = cljs.core.cst$kw$dispatch;
var G__13834_13836 = ((function (G__13833_13835){
return (function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value], 0));
} else {
return re_frame.router.dispatch(value);
}
});})(G__13833_13835))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13833_13835,G__13834_13836) : re_frame.fx.register.call(null,G__13833_13835,G__13834_13836));
var G__13837_13843 = cljs.core.cst$kw$dispatch_DASH_n;
var G__13838_13844 = ((function (G__13837_13843){
return (function (value){
if(!(cljs.core.sequential_QMARK_(value))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value], 0));
} else {
}

var seq__13839 = cljs.core.seq(value);
var chunk__13840 = null;
var count__13841 = (0);
var i__13842 = (0);
while(true){
if((i__13842 < count__13841)){
var event = chunk__13840.cljs$core$IIndexed$_nth$arity$2(null,i__13842);
re_frame.router.dispatch(event);

var G__13845 = seq__13839;
var G__13846 = chunk__13840;
var G__13847 = count__13841;
var G__13848 = (i__13842 + (1));
seq__13839 = G__13845;
chunk__13840 = G__13846;
count__13841 = G__13847;
i__13842 = G__13848;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13839);
if(temp__4657__auto__){
var seq__13839__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13839__$1)){
var c__7115__auto__ = cljs.core.chunk_first(seq__13839__$1);
var G__13849 = cljs.core.chunk_rest(seq__13839__$1);
var G__13850 = c__7115__auto__;
var G__13851 = cljs.core.count(c__7115__auto__);
var G__13852 = (0);
seq__13839 = G__13849;
chunk__13840 = G__13850;
count__13841 = G__13851;
i__13842 = G__13852;
continue;
} else {
var event = cljs.core.first(seq__13839__$1);
re_frame.router.dispatch(event);

var G__13853 = cljs.core.next(seq__13839__$1);
var G__13854 = null;
var G__13855 = (0);
var G__13856 = (0);
seq__13839 = G__13853;
chunk__13840 = G__13854;
count__13841 = G__13855;
i__13842 = G__13856;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__13837_13843))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13837_13843,G__13838_13844) : re_frame.fx.register.call(null,G__13837_13843,G__13838_13844));
var G__13857_13859 = cljs.core.cst$kw$deregister_DASH_event_DASH_handler;
var G__13858_13860 = ((function (G__13857_13859){
return (function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clear_event,value));
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
});})(G__13857_13859))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13857_13859,G__13858_13860) : re_frame.fx.register.call(null,G__13857_13859,G__13858_13860));
var G__13861_13863 = cljs.core.cst$kw$db;
var G__13862_13864 = ((function (G__13861_13863){
return (function (value){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,value) : cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value));
});})(G__13861_13863))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13861_13863,G__13862_13864) : re_frame.fx.register.call(null,G__13861_13863,G__13862_13864));
