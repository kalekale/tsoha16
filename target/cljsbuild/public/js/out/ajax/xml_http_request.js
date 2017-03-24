// Compiled by ClojureScript 1.9.229 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__39084,handler){
var map__39085 = p__39084;
var map__39085__$1 = ((((!((map__39085 == null)))?((((map__39085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39085):map__39085);
var uri = cljs.core.get.call(null,map__39085__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__39085__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__39085__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__39085__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__39085__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__39085__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__39085__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__39085,map__39085__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__39083_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__39083_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__39085,map__39085__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___39097 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___39097)){
var response_type_39098 = temp__4657__auto___39097;
this$__$1.responseType = cljs.core.name.call(null,response_type_39098);
} else {
}

var seq__39087_39099 = cljs.core.seq.call(null,headers);
var chunk__39088_39100 = null;
var count__39089_39101 = (0);
var i__39090_39102 = (0);
while(true){
if((i__39090_39102 < count__39089_39101)){
var vec__39091_39103 = cljs.core._nth.call(null,chunk__39088_39100,i__39090_39102);
var k_39104 = cljs.core.nth.call(null,vec__39091_39103,(0),null);
var v_39105 = cljs.core.nth.call(null,vec__39091_39103,(1),null);
this$__$1.setRequestHeader(k_39104,v_39105);

var G__39106 = seq__39087_39099;
var G__39107 = chunk__39088_39100;
var G__39108 = count__39089_39101;
var G__39109 = (i__39090_39102 + (1));
seq__39087_39099 = G__39106;
chunk__39088_39100 = G__39107;
count__39089_39101 = G__39108;
i__39090_39102 = G__39109;
continue;
} else {
var temp__4657__auto___39110 = cljs.core.seq.call(null,seq__39087_39099);
if(temp__4657__auto___39110){
var seq__39087_39111__$1 = temp__4657__auto___39110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39087_39111__$1)){
var c__37778__auto___39112 = cljs.core.chunk_first.call(null,seq__39087_39111__$1);
var G__39113 = cljs.core.chunk_rest.call(null,seq__39087_39111__$1);
var G__39114 = c__37778__auto___39112;
var G__39115 = cljs.core.count.call(null,c__37778__auto___39112);
var G__39116 = (0);
seq__39087_39099 = G__39113;
chunk__39088_39100 = G__39114;
count__39089_39101 = G__39115;
i__39090_39102 = G__39116;
continue;
} else {
var vec__39094_39117 = cljs.core.first.call(null,seq__39087_39111__$1);
var k_39118 = cljs.core.nth.call(null,vec__39094_39117,(0),null);
var v_39119 = cljs.core.nth.call(null,vec__39094_39117,(1),null);
this$__$1.setRequestHeader(k_39118,v_39119);

var G__39120 = cljs.core.next.call(null,seq__39087_39111__$1);
var G__39121 = null;
var G__39122 = (0);
var G__39123 = (0);
seq__39087_39099 = G__39120;
chunk__39088_39100 = G__39121;
count__39089_39101 = G__39122;
i__39090_39102 = G__39123;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__36967__auto__ = body;
if(cljs.core.truth_(or__36967__auto__)){
return or__36967__auto__;
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