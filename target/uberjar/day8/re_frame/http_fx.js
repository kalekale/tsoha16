// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__17397){
var vec__17402 = p__17397;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17402,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17402,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__17405 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__17405);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__17408){
var map__17413 = p__17408;
var map__17413__$1 = ((((!((map__17413 == null)))?((((map__17413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17413):map__17413);
var request = map__17413__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17413__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17413__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.array_seq([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__17413,map__17413__$1,request,on_success,on_failure){
return (function (p1__17406_SHARP_){
var G__17415 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__17406_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17415) : re_frame.core.dispatch.call(null,G__17415));
});})(api,map__17413,map__17413__$1,request,on_success,on_failure))
,((function (api,map__17413,map__17413__$1,request,on_success,on_failure){
return (function (p1__17407_SHARP_){
var G__17416 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__17407_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17416) : re_frame.core.dispatch.call(null,G__17416));
});})(api,map__17413,map__17413__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.array_seq([cljs.core.cst$kw$on_DASH_failure], 0));
});
var G__17417_17427 = cljs.core.cst$kw$http_DASH_xhrio;
var G__17418_17428 = ((function (G__17417_17427){
return (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__17423 = cljs.core.seq(seq_request_maps);
var chunk__17424 = null;
var count__17425 = (0);
var i__17426 = (0);
while(true){
if((i__17426 < count__17425)){
var request__$1 = chunk__17424.cljs$core$IIndexed$_nth$arity$2(null,i__17426);
ajax.core.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));

var G__17429 = seq__17423;
var G__17430 = chunk__17424;
var G__17431 = count__17425;
var G__17432 = (i__17426 + (1));
seq__17423 = G__17429;
chunk__17424 = G__17430;
count__17425 = G__17431;
i__17426 = G__17432;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__17423);
if(temp__4657__auto__){
var seq__17423__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17423__$1)){
var c__7115__auto__ = cljs.core.chunk_first(seq__17423__$1);
var G__17433 = cljs.core.chunk_rest(seq__17423__$1);
var G__17434 = c__7115__auto__;
var G__17435 = cljs.core.count(c__7115__auto__);
var G__17436 = (0);
seq__17423 = G__17433;
chunk__17424 = G__17434;
count__17425 = G__17435;
i__17426 = G__17436;
continue;
} else {
var request__$1 = cljs.core.first(seq__17423__$1);
ajax.core.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));

var G__17437 = cljs.core.next(seq__17423__$1);
var G__17438 = null;
var G__17439 = (0);
var G__17440 = (0);
seq__17423 = G__17437;
chunk__17424 = G__17438;
count__17425 = G__17439;
i__17426 = G__17440;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__17417_17427))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__17417_17427,G__17418_17428) : re_frame.core.reg_fx.call(null,G__17417_17427,G__17418_17428));
