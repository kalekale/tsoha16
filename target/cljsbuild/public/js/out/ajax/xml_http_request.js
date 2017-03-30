// Compiled by ClojureScript 1.9.229 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__43445,handler){
var map__43446 = p__43445;
var map__43446__$1 = ((((!((map__43446 == null)))?((((map__43446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43446):map__43446);
var uri = cljs.core.get.call(null,map__43446__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__43446__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__43446__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__43446__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__43446__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__43446__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__43446__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__43446,map__43446__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__43444_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__43444_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__43446,map__43446__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___43459 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___43459)){
var response_type_43460 = temp__4657__auto___43459;
this$__$1.responseType = cljs.core.name.call(null,response_type_43460);
} else {
}

var seq__43448_43461 = cljs.core.seq.call(null,headers);
var chunk__43449_43462 = null;
var count__43450_43463 = (0);
var i__43451_43464 = (0);
while(true){
if((i__43451_43464 < count__43450_43463)){
var vec__43452_43465 = cljs.core._nth.call(null,chunk__43449_43462,i__43451_43464);
var k_43466 = cljs.core.nth.call(null,vec__43452_43465,(0),null);
var v_43467 = cljs.core.nth.call(null,vec__43452_43465,(1),null);
this$__$1.setRequestHeader(k_43466,v_43467);

var G__43468 = seq__43448_43461;
var G__43469 = chunk__43449_43462;
var G__43470 = count__43450_43463;
var G__43471 = (i__43451_43464 + (1));
seq__43448_43461 = G__43468;
chunk__43449_43462 = G__43469;
count__43450_43463 = G__43470;
i__43451_43464 = G__43471;
continue;
} else {
var temp__4657__auto___43472 = cljs.core.seq.call(null,seq__43448_43461);
if(temp__4657__auto___43472){
var seq__43448_43473__$1 = temp__4657__auto___43472;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43448_43473__$1)){
var c__37889__auto___43474 = cljs.core.chunk_first.call(null,seq__43448_43473__$1);
var G__43475 = cljs.core.chunk_rest.call(null,seq__43448_43473__$1);
var G__43476 = c__37889__auto___43474;
var G__43477 = cljs.core.count.call(null,c__37889__auto___43474);
var G__43478 = (0);
seq__43448_43461 = G__43475;
chunk__43449_43462 = G__43476;
count__43450_43463 = G__43477;
i__43451_43464 = G__43478;
continue;
} else {
var vec__43455_43479 = cljs.core.first.call(null,seq__43448_43473__$1);
var k_43480 = cljs.core.nth.call(null,vec__43455_43479,(0),null);
var v_43481 = cljs.core.nth.call(null,vec__43455_43479,(1),null);
this$__$1.setRequestHeader(k_43480,v_43481);

var G__43482 = cljs.core.next.call(null,seq__43448_43473__$1);
var G__43483 = null;
var G__43484 = (0);
var G__43485 = (0);
seq__43448_43461 = G__43482;
chunk__43449_43462 = G__43483;
count__43450_43463 = G__43484;
i__43451_43464 = G__43485;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__37078__auto__ = body;
if(cljs.core.truth_(or__37078__auto__)){
return or__37078__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map