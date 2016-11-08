// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('accountant.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.history.Html5History');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.history.Event');
goog.require('clojure.string');
if(typeof accountant.core.history !== 'undefined'){
} else {
accountant.core.history = (new goog.history.Html5History());
}
accountant.core.listen = (function accountant$core$listen(el,type){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__16891_16894 = el;
var G__16892_16895 = type;
var G__16893_16896 = ((function (G__16891_16894,G__16892_16895,out){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,e);
});})(G__16891_16894,G__16892_16895,out))
;
goog.events.listen(G__16891_16894,G__16892_16895,G__16893_16896);

return out;
});
accountant.core.dispatch_on_navigate = (function accountant$core$dispatch_on_navigate(history,nav_handler){
var navigation = accountant.core.listen(history,goog.history.EventType.NAVIGATE);
var c__15052__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15052__auto__,navigation){
return (function (){
var f__15053__auto__ = (function (){var switch__14943__auto__ = ((function (c__15052__auto__,navigation){
return (function (state_16935){
var state_val_16936 = (state_16935[(1)]);
if((state_val_16936 === (1))){
var state_16935__$1 = state_16935;
var statearr_16937_16947 = state_16935__$1;
(statearr_16937_16947[(2)] = null);

(statearr_16937_16947[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16936 === (2))){
var state_16935__$1 = state_16935;
var statearr_16938_16948 = state_16935__$1;
(statearr_16938_16948[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_16936 === (3))){
var inst_16933 = (state_16935[(2)]);
var state_16935__$1 = state_16935;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16935__$1,inst_16933);
} else {
if((state_val_16936 === (4))){
var state_16935__$1 = state_16935;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16935__$1,(7),navigation);
} else {
if((state_val_16936 === (5))){
var state_16935__$1 = state_16935;
var statearr_16940_16949 = state_16935__$1;
(statearr_16940_16949[(2)] = null);

(statearr_16940_16949[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16936 === (6))){
var inst_16931 = (state_16935[(2)]);
var state_16935__$1 = state_16935;
var statearr_16941_16950 = state_16935__$1;
(statearr_16941_16950[(2)] = inst_16931);

(statearr_16941_16950[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16936 === (7))){
var inst_16925 = (state_16935[(2)]);
var inst_16926 = inst_16925.token;
var inst_16927 = (nav_handler.cljs$core$IFn$_invoke$arity$1 ? nav_handler.cljs$core$IFn$_invoke$arity$1(inst_16926) : nav_handler.call(null,inst_16926));
var state_16935__$1 = (function (){var statearr_16942 = state_16935;
(statearr_16942[(5)] = inst_16927);

return statearr_16942;
})();
var statearr_16943_16951 = state_16935__$1;
(statearr_16943_16951[(2)] = null);

(statearr_16943_16951[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__15052__auto__,navigation))
;
return ((function (switch__14943__auto__,c__15052__auto__,navigation){
return (function() {
var accountant$core$dispatch_on_navigate_$_state_machine__14944__auto__ = null;
var accountant$core$dispatch_on_navigate_$_state_machine__14944__auto____0 = (function (){
var statearr_16945 = [null,null,null,null,null,null];
(statearr_16945[(0)] = accountant$core$dispatch_on_navigate_$_state_machine__14944__auto__);

(statearr_16945[(1)] = (1));

return statearr_16945;
});
var accountant$core$dispatch_on_navigate_$_state_machine__14944__auto____1 = (function (state_16935){
while(true){
var result__14945__auto__ = switch__14943__auto__(state_16935);
if(cljs.core.keyword_identical_QMARK_(result__14945__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14945__auto__;
}
break;
}
});
accountant$core$dispatch_on_navigate_$_state_machine__14944__auto__ = function(state_16935){
switch(arguments.length){
case 0:
return accountant$core$dispatch_on_navigate_$_state_machine__14944__auto____0.call(this);
case 1:
return accountant$core$dispatch_on_navigate_$_state_machine__14944__auto____1.call(this,state_16935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
accountant$core$dispatch_on_navigate_$_state_machine__14944__auto__.cljs$core$IFn$_invoke$arity$0 = accountant$core$dispatch_on_navigate_$_state_machine__14944__auto____0;
accountant$core$dispatch_on_navigate_$_state_machine__14944__auto__.cljs$core$IFn$_invoke$arity$1 = accountant$core$dispatch_on_navigate_$_state_machine__14944__auto____1;
return accountant$core$dispatch_on_navigate_$_state_machine__14944__auto__;
})()
;})(switch__14943__auto__,c__15052__auto__,navigation))
})();
var state__15054__auto__ = (function (){var statearr_16946 = (f__15053__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15053__auto__.cljs$core$IFn$_invoke$arity$0() : f__15053__auto__.call(null));
(statearr_16946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15052__auto__);

return statearr_16946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15054__auto__);
});})(c__15052__auto__,navigation))
);

return c__15052__auto__;
});
/**
 * Given a DOM element that may or may not be a link, traverse up the DOM tree
 *   to see if any of its parents are links. If so, return the href content.
 */
accountant.core.find_href = (function accountant$core$find_href(e){
while(true){
var temp__4655__auto__ = e.href;
if(cljs.core.truth_(temp__4655__auto__)){
var href = temp__4655__auto__;
return href;
} else {
var temp__4657__auto__ = e.parentNode;
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
var G__16952 = parent;
e = G__16952;
continue;
} else {
return null;
}
}
break;
}
});
/**
 * Gets the URL for a history token, but without preserving the query string
 *   as Google's version incorrectly does. (See https://goo.gl/xwgUos)
 */
accountant.core.get_url = (function accountant$core$get_url(history,token){
return [cljs.core.str(history.pathPrefix_),cljs.core.str(token)].join('');
});
/**
 * Sets a history token, but without preserving the query string as Google's
 *   version incorrectly does. (See https://goo.gl/xwgUos)
 */
accountant.core.set_token_BANG_ = (function accountant$core$set_token_BANG_(history,token,title){
var js_history = history.window_.history;
var url = accountant.core.get_url(history,token);
js_history.pushState(null,(function (){var or__6304__auto__ = title;
if(cljs.core.truth_(or__6304__auto__)){
return or__6304__auto__;
} else {
var or__6304__auto____$1 = document.title;
if(cljs.core.truth_(or__6304__auto____$1)){
return or__6304__auto____$1;
} else {
return "";
}
}
})(),url);

return history.dispatchEvent((new goog.history.Event(token)));
});
accountant.core.uri__GT_query = (function accountant$core$uri__GT_query(uri){
var query = uri.getQuery();
if(cljs.core.empty_QMARK_(query)){
return null;
} else {
return [cljs.core.str("?"),cljs.core.str(query)].join('');
}
});
accountant.core.uri__GT_fragment = (function accountant$core$uri__GT_fragment(uri){
var fragment = uri.getFragment();
if(cljs.core.empty_QMARK_(fragment)){
return null;
} else {
return [cljs.core.str("#"),cljs.core.str(fragment)].join('');
}
});
/**
 * Create a click handler that blocks page reloads for known routes
 */
accountant.core.prevent_reload_on_known_path = (function accountant$core$prevent_reload_on_known_path(history,path_exists_QMARK_){
var G__16956 = document;
var G__16957 = "click";
var G__16958 = ((function (G__16956,G__16957){
return (function (e){
var target = e.target;
var button = e.button;
var meta_key = e.metaKey;
var alt_key = e.altKey;
var ctrl_key = e.ctrlKey;
var shift_key = e.shiftKey;
var any_key = (function (){var or__6304__auto__ = meta_key;
if(cljs.core.truth_(or__6304__auto__)){
return or__6304__auto__;
} else {
var or__6304__auto____$1 = alt_key;
if(cljs.core.truth_(or__6304__auto____$1)){
return or__6304__auto____$1;
} else {
var or__6304__auto____$2 = ctrl_key;
if(cljs.core.truth_(or__6304__auto____$2)){
return or__6304__auto____$2;
} else {
return shift_key;
}
}
}
})();
var href = accountant.core.find_href(target);
var uri = goog.Uri.parse(href);
var path = uri.getPath();
var query = accountant.core.uri__GT_query(uri);
var fragment = accountant.core.uri__GT_fragment(uri);
var relative_href = [cljs.core.str(path),cljs.core.str(query),cljs.core.str(fragment)].join('');
var title = target.title;
var host = uri.getDomain();
var current_host = window.location.hostname;
if(cljs.core.truth_((function (){var and__6292__auto__ = cljs.core.not(any_key);
if(and__6292__auto__){
var and__6292__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(button,(0));
if(and__6292__auto____$1){
var and__6292__auto____$2 = (path_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? path_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : path_exists_QMARK_.call(null,path));
if(cljs.core.truth_(and__6292__auto____$2)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(host,current_host);
} else {
return and__6292__auto____$2;
}
} else {
return and__6292__auto____$1;
}
} else {
return and__6292__auto__;
}
})())){
accountant.core.set_token_BANG_(history,relative_href,title);

return e.preventDefault();
} else {
return null;
}
});})(G__16956,G__16957))
;
return goog.events.listen(G__16956,G__16957,G__16958);
});
if(typeof accountant.core.nav_handler !== 'undefined'){
} else {
accountant.core.nav_handler = null;
}
if(typeof accountant.core.path_exists_QMARK_ !== 'undefined'){
} else {
accountant.core.path_exists_QMARK_ = null;
}
/**
 * Create and configure HTML5 history navigation.
 * 
 *   nav-handler: a fn of one argument, a path. Called when we've decided
 *   to navigate to another page. You'll want to make your app draw the
 *   new page here.
 * 
 *   path-exists?: a fn of one argument, a path. Return truthy if this path is handled by the SPA
 */
accountant.core.configure_navigation_BANG_ = (function accountant$core$configure_navigation_BANG_(p__16959){
var map__16962 = p__16959;
var map__16962__$1 = ((((!((map__16962 == null)))?((((map__16962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16962):map__16962);
var nav_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16962__$1,cljs.core.cst$kw$nav_DASH_handler);
var path_exists_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16962__$1,cljs.core.cst$kw$path_DASH_exists_QMARK_);
accountant.core.history.setUseFragment(false);

accountant.core.history.setPathPrefix("");

accountant.core.history.setEnabled(true);

accountant.core.nav_handler = nav_handler;

accountant.core.path_exists_QMARK_ = path_exists_QMARK_;

accountant.core.dispatch_on_navigate(accountant.core.history,nav_handler);

return accountant.core.prevent_reload_on_known_path(accountant.core.history,path_exists_QMARK_);
});
accountant.core.map__GT_params = (function accountant$core$map__GT_params(query){
var params = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16964_SHARP_){
return cljs.core.name(p1__16964_SHARP_);
}),cljs.core.keys(query));
var values = cljs.core.vals(query);
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(params,values));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (params,values,pairs){
return (function (p1__16965_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("=",p1__16965_SHARP_);
});})(params,values,pairs))
,pairs));
});
/**
 * add a browser history entry. updates window/location
 */
accountant.core.navigate_BANG_ = (function accountant$core$navigate_BANG_(var_args){
var args16966 = [];
var len__7379__auto___16969 = arguments.length;
var i__7380__auto___16970 = (0);
while(true){
if((i__7380__auto___16970 < len__7379__auto___16969)){
args16966.push((arguments[i__7380__auto___16970]));

var G__16971 = (i__7380__auto___16970 + (1));
i__7380__auto___16970 = G__16971;
continue;
} else {
}
break;
}

var G__16968 = args16966.length;
switch (G__16968) {
case 1:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16966.length)].join('')));

}
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (route){
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2(route,cljs.core.PersistentArrayMap.EMPTY);
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (route,query){
if(cljs.core.truth_(accountant.core.nav_handler)){
var token = accountant.core.history.getToken();
var old_route = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(token,"?"));
var query_string = accountant.core.map__GT_params(cljs.core.reduce_kv(((function (token,old_route){
return (function (valid,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(valid,k,v);
} else {
return valid;
}
});})(token,old_route))
,cljs.core.PersistentArrayMap.EMPTY,query));
var with_params = ((cljs.core.empty_QMARK_(query_string))?route:[cljs.core.str(route),cljs.core.str("?"),cljs.core.str(query_string)].join(''));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_route,route)){
return accountant.core.history.replaceToken(with_params);
} else {
return accountant.core.history.setToken(with_params);
}
} else {
return console.error("can't navigate! until configure-navigation! called");
}
});

accountant.core.navigate_BANG_.cljs$lang$maxFixedArity = 2;

accountant.core.dispatch_current_BANG_ = (function accountant$core$dispatch_current_BANG_(){

var path = window.location.pathname;
var query = window.location.search;
var hash = window.location.hash;
if(cljs.core.truth_(accountant.core.nav_handler)){
var G__16974 = [cljs.core.str(path),cljs.core.str(query),cljs.core.str(hash)].join('');
return (accountant.core.nav_handler.cljs$core$IFn$_invoke$arity$1 ? accountant.core.nav_handler.cljs$core$IFn$_invoke$arity$1(G__16974) : accountant.core.nav_handler.call(null,G__16974));
} else {
return console.error("can't dispatch-current until configure-navigation! called");
}
});
