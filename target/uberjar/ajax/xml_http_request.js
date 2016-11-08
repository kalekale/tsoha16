// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__12910,handler){
var map__12911 = p__12910;
var map__12911__$1 = ((((!((map__12911 == null)))?((((map__12911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12911):map__12911);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12911__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12911__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12911__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12911__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12911__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12911__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12911__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__12911,map__12911__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__12909_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__12909_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__12911,map__12911__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___12923 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___12923)){
var response_type_12924 = temp__4657__auto___12923;
this$__$1.responseType = cljs.core.name(response_type_12924);
} else {
}

var seq__12913_12925 = cljs.core.seq(headers);
var chunk__12914_12926 = null;
var count__12915_12927 = (0);
var i__12916_12928 = (0);
while(true){
if((i__12916_12928 < count__12915_12927)){
var vec__12917_12929 = chunk__12914_12926.cljs$core$IIndexed$_nth$arity$2(null,i__12916_12928);
var k_12930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12917_12929,(0),null);
var v_12931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12917_12929,(1),null);
this$__$1.setRequestHeader(k_12930,v_12931);

var G__12932 = seq__12913_12925;
var G__12933 = chunk__12914_12926;
var G__12934 = count__12915_12927;
var G__12935 = (i__12916_12928 + (1));
seq__12913_12925 = G__12932;
chunk__12914_12926 = G__12933;
count__12915_12927 = G__12934;
i__12916_12928 = G__12935;
continue;
} else {
var temp__4657__auto___12936 = cljs.core.seq(seq__12913_12925);
if(temp__4657__auto___12936){
var seq__12913_12937__$1 = temp__4657__auto___12936;
if(cljs.core.chunked_seq_QMARK_(seq__12913_12937__$1)){
var c__7115__auto___12938 = cljs.core.chunk_first(seq__12913_12937__$1);
var G__12939 = cljs.core.chunk_rest(seq__12913_12937__$1);
var G__12940 = c__7115__auto___12938;
var G__12941 = cljs.core.count(c__7115__auto___12938);
var G__12942 = (0);
seq__12913_12925 = G__12939;
chunk__12914_12926 = G__12940;
count__12915_12927 = G__12941;
i__12916_12928 = G__12942;
continue;
} else {
var vec__12920_12943 = cljs.core.first(seq__12913_12937__$1);
var k_12944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12920_12943,(0),null);
var v_12945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12920_12943,(1),null);
this$__$1.setRequestHeader(k_12944,v_12945);

var G__12946 = cljs.core.next(seq__12913_12937__$1);
var G__12947 = null;
var G__12948 = (0);
var G__12949 = (0);
seq__12913_12925 = G__12946;
chunk__12914_12926 = G__12947;
count__12915_12927 = G__12948;
i__12916_12928 = G__12949;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__6304__auto__ = body;
if(cljs.core.truth_(or__6304__auto__)){
return or__6304__auto__;
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
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
