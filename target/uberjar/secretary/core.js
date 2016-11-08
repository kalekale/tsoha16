// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('secretary.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');

/**
 * @interface
 */
secretary.core.IRouteMatches = function(){};

secretary.core.route_matches = (function secretary$core$route_matches(this$,route){
if((!((this$ == null))) && (!((this$.secretary$core$IRouteMatches$route_matches$arity$2 == null)))){
return this$.secretary$core$IRouteMatches$route_matches$arity$2(this$,route);
} else {
var x__6967__auto__ = (((this$ == null))?null:this$);
var m__6968__auto__ = (secretary.core.route_matches[goog.typeOf(x__6967__auto__)]);
if(!((m__6968__auto__ == null))){
return (m__6968__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6968__auto__.cljs$core$IFn$_invoke$arity$2(this$,route) : m__6968__auto__.call(null,this$,route));
} else {
var m__6968__auto____$1 = (secretary.core.route_matches["_"]);
if(!((m__6968__auto____$1 == null))){
return (m__6968__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6968__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,route) : m__6968__auto____$1.call(null,this$,route));
} else {
throw cljs.core.missing_protocol("IRouteMatches.route-matches",this$);
}
}
}
});


/**
 * @interface
 */
secretary.core.IRouteValue = function(){};

secretary.core.route_value = (function secretary$core$route_value(this$){
if((!((this$ == null))) && (!((this$.secretary$core$IRouteValue$route_value$arity$1 == null)))){
return this$.secretary$core$IRouteValue$route_value$arity$1(this$);
} else {
var x__6967__auto__ = (((this$ == null))?null:this$);
var m__6968__auto__ = (secretary.core.route_value[goog.typeOf(x__6967__auto__)]);
if(!((m__6968__auto__ == null))){
return (m__6968__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6968__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6968__auto__.call(null,this$));
} else {
var m__6968__auto____$1 = (secretary.core.route_value["_"]);
if(!((m__6968__auto____$1 == null))){
return (m__6968__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6968__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6968__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRouteValue.route-value",this$);
}
}
}
});


/**
 * @interface
 */
secretary.core.IRenderRoute = function(){};

secretary.core.render_route = (function secretary$core$render_route(var_args){
var args16996 = [];
var len__7379__auto___16999 = arguments.length;
var i__7380__auto___17000 = (0);
while(true){
if((i__7380__auto___17000 < len__7379__auto___16999)){
args16996.push((arguments[i__7380__auto___17000]));

var G__17001 = (i__7380__auto___17000 + (1));
i__7380__auto___17000 = G__17001;
continue;
} else {
}
break;
}

var G__16998 = args16996.length;
switch (G__16998) {
case 1:
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16996.length)].join('')));

}
});

secretary.core.render_route.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.secretary$core$IRenderRoute$render_route$arity$1 == null)))){
return this$.secretary$core$IRenderRoute$render_route$arity$1(this$);
} else {
var x__6967__auto__ = (((this$ == null))?null:this$);
var m__6968__auto__ = (secretary.core.render_route[goog.typeOf(x__6967__auto__)]);
if(!((m__6968__auto__ == null))){
return (m__6968__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6968__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6968__auto__.call(null,this$));
} else {
var m__6968__auto____$1 = (secretary.core.render_route["_"]);
if(!((m__6968__auto____$1 == null))){
return (m__6968__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6968__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6968__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRenderRoute.render-route",this$);
}
}
}
});

secretary.core.render_route.cljs$core$IFn$_invoke$arity$2 = (function (this$,params){
if((!((this$ == null))) && (!((this$.secretary$core$IRenderRoute$render_route$arity$2 == null)))){
return this$.secretary$core$IRenderRoute$render_route$arity$2(this$,params);
} else {
var x__6967__auto__ = (((this$ == null))?null:this$);
var m__6968__auto__ = (secretary.core.render_route[goog.typeOf(x__6967__auto__)]);
if(!((m__6968__auto__ == null))){
return (m__6968__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6968__auto__.cljs$core$IFn$_invoke$arity$2(this$,params) : m__6968__auto__.call(null,this$,params));
} else {
var m__6968__auto____$1 = (secretary.core.render_route["_"]);
if(!((m__6968__auto____$1 == null))){
return (m__6968__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6968__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,params) : m__6968__auto____$1.call(null,this$,params));
} else {
throw cljs.core.missing_protocol("IRenderRoute.render-route",this$);
}
}
}
});

secretary.core.render_route.cljs$lang$maxFixedArity = 2;


secretary.core._STAR_config_STAR_ = (function (){var G__17003 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$prefix,""], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17003) : cljs.core.atom.call(null,G__17003));
})();
/**
 * Gets a value for *config* at path.
 */
secretary.core.get_config = (function secretary$core$get_config(path){
var path__$1 = ((cljs.core.sequential_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(secretary.core._STAR_config_STAR_) : cljs.core.deref.call(null,secretary.core._STAR_config_STAR_)),path__$1);
});
/**
 * Associates a value val for *config* at path.
 */
secretary.core.set_config_BANG_ = (function secretary$core$set_config_BANG_(path,val){
var path__$1 = ((cljs.core.sequential_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_config_STAR_,cljs.core.assoc_in,path__$1,val);
});
secretary.core.encode = encodeURIComponent;
if(typeof secretary.core.encode_pair !== 'undefined'){
} else {
/**
 * Given a key and a value return and encoded key-value pair.
 */
secretary.core.encode_pair = (function (){var method_table__7229__auto__ = (function (){var G__17004 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17004) : cljs.core.atom.call(null,G__17004));
})();
var prefer_table__7230__auto__ = (function (){var G__17005 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17005) : cljs.core.atom.call(null,G__17005));
})();
var method_cache__7231__auto__ = (function (){var G__17006 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17006) : cljs.core.atom.call(null,G__17006));
})();
var cached_hierarchy__7232__auto__ = (function (){var G__17007 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17007) : cljs.core.atom.call(null,G__17007));
})();
var hierarchy__7233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("secretary.core","encode-pair"),((function (method_table__7229__auto__,prefer_table__7230__auto__,method_cache__7231__auto__,cached_hierarchy__7232__auto__,hierarchy__7233__auto__){
return (function (p__17008){
var vec__17009 = p__17008;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17009,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17009,(1),null);
if((cljs.core.sequential_QMARK_(v)) || (cljs.core.set_QMARK_(v))){
return cljs.core.cst$kw$secretary$core_SLASH_sequential;
} else {
if((function (){var or__6304__auto__ = cljs.core.map_QMARK_(v);
if(or__6304__auto__){
return or__6304__auto__;
} else {
if(!((v == null))){
if(((v.cljs$lang$protocol_mask$partition0$ & (67108864))) || (v.cljs$core$IRecord$)){
return true;
} else {
if((!v.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,v);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,v);
}
}
})()){
return cljs.core.cst$kw$secretary$core_SLASH_map;
} else {
return null;
}
}
});})(method_table__7229__auto__,prefer_table__7230__auto__,method_cache__7231__auto__,cached_hierarchy__7232__auto__,hierarchy__7233__auto__))
,cljs.core.cst$kw$default,hierarchy__7233__auto__,method_table__7229__auto__,prefer_table__7230__auto__,method_cache__7231__auto__,cached_hierarchy__7232__auto__));
})();
}
secretary.core.key_index = (function secretary$core$key_index(var_args){
var args17014 = [];
var len__7379__auto___17017 = arguments.length;
var i__7380__auto___17018 = (0);
while(true){
if((i__7380__auto___17018 < len__7379__auto___17017)){
args17014.push((arguments[i__7380__auto___17018]));

var G__17019 = (i__7380__auto___17018 + (1));
i__7380__auto___17018 = G__17019;
continue;
} else {
}
break;
}

var G__17016 = args17014.length;
switch (G__17016) {
case 1:
return secretary.core.key_index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return secretary.core.key_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17014.length)].join('')));

}
});

secretary.core.key_index.cljs$core$IFn$_invoke$arity$1 = (function (k){
return [cljs.core.str(cljs.core.name(k)),cljs.core.str("[]")].join('');
});

secretary.core.key_index.cljs$core$IFn$_invoke$arity$2 = (function (k,index){
return [cljs.core.str(cljs.core.name(k)),cljs.core.str("["),cljs.core.str(index),cljs.core.str("]")].join('');
});

secretary.core.key_index.cljs$lang$maxFixedArity = 2;

secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$secretary$core_SLASH_sequential,(function (p__17021){
var vec__17022 = p__17021;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17022,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17022,(1),null);
var encoded = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__17022,k,v){
return (function (i,x){
var pair = ((cljs.core.coll_QMARK_(x))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$2(k,i),x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$1(k),x], null));
return (secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1(pair) : secretary.core.encode_pair.call(null,pair));
});})(vec__17022,k,v))
,v);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",encoded);
}));
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$secretary$core_SLASH_map,(function (p__17025){
var vec__17026 = p__17025;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17026,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17026,(1),null);
var encoded = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__17026,k,v){
return (function (p__17029){
var vec__17030 = p__17029;
var ik = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17030,(0),null);
var iv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17030,(1),null);
var G__17033 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$2(k,cljs.core.name(ik)),iv], null);
return (secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1(G__17033) : secretary.core.encode_pair.call(null,G__17033));
});})(vec__17026,k,v))
,v);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",encoded);
}));
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__17034){
var vec__17035 = p__17034;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17035,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17035,(1),null);
return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str((function (){var G__17038 = [cljs.core.str(v)].join('');
return (secretary.core.encode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode.cljs$core$IFn$_invoke$arity$1(G__17038) : secretary.core.encode.call(null,G__17038));
})())].join('');
}));
/**
 * Convert a map of query parameters into url encoded string.
 */
secretary.core.encode_query_params = (function secretary$core$encode_query_params(query_params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.encode_pair,query_params));
});
/**
 * Like js/encodeURIComponent excepts ignore slashes.
 */
secretary.core.encode_uri = (function secretary$core$encode_uri(uri){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.encode,clojure.string.split.cljs$core$IFn$_invoke$arity$2(uri,/\//)));
});
secretary.core.decode = decodeURIComponent;
/**
 * Parse a value from a serialized query-string key index. If the
 *   index value is empty 0 is returned, if it's a digit it returns the
 *   js/parseInt value, otherwise it returns the extracted index.
 */
secretary.core.parse_path = (function secretary$core$parse_path(path){
var index_re = /\[([^\]]*)\]*/;
var parts = cljs.core.re_seq(index_re,path);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (index_re,parts){
return (function (p__17043){
var vec__17044 = p__17043;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17044,(0),null);
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17044,(1),null);
if(cljs.core.empty_QMARK_(part)){
return (0);
} else {
if(cljs.core.truth_(cljs.core.re_matches(/\d+/,part))){
return parseInt(part);
} else {
return part;

}
}
});})(index_re,parts))
,parts);
});
/**
 * Return a key path for a serialized query-string entry.
 * 
 *   Ex.
 * 
 *  (key-parse "foo[][a][][b]")
 *  ;; => ("foo" 0 "a" 0 "b")
 *   
 */
secretary.core.key_parse = (function secretary$core$key_parse(k){
var re = /([^\[\]]+)((?:\[[^\]]*\])*)?/;
var vec__17050 = cljs.core.re_matches(re,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17050,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17050,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17050,(2),null);
var parsed_path = (cljs.core.truth_(path)?secretary.core.parse_path(path):null);
return cljs.core.cons(key,parsed_path);
});
/**
 * Like assoc-in but numbers in path create vectors instead of maps.
 * 
 *   Ex.
 * 
 *  (assoc-in-query-params {} ["foo" 0] 1)
 *  ;; => {"foo" [1]}
 * 
 *  (assoc-in-query-params {} ["foo" 0 "a"] 1)
 *  ;; => {"foo" [{"a" 1}]}
 *   
 */
secretary.core.assoc_in_query_params = (function secretary$core$assoc_in_query_params(m,path,v){
var heads = (function (xs){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,_){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((i + (1)),xs);
}),xs);
});
var hs = heads(path);
var m__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (heads,hs){
return (function (m__$1,h){
if((typeof cljs.core.last(h) === 'number') && (!(cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.butlast(h)))))){
return cljs.core.assoc_in(m__$1,cljs.core.butlast(h),cljs.core.PersistentVector.EMPTY);
} else {
return m__$1;
}
});})(heads,hs))
,m,hs);
if((cljs.core.last(path) === (0))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$1,cljs.core.butlast(path),cljs.core.conj,v);
} else {
return cljs.core.assoc_in(m__$1,path,v);
}
});
/**
 * Extract a map of query parameters from a query string.
 */
secretary.core.decode_query_params = (function secretary$core$decode_query_params(query_string){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(query_string,/&/);
var params = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parts){
return (function (m,part){
var vec__17056 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(part,/=/,(2));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17056,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17056,(1),null);
return secretary.core.assoc_in_query_params(m,secretary.core.key_parse(k),(secretary.core.decode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.decode.cljs$core$IFn$_invoke$arity$1(v) : secretary.core.decode.call(null,v)));
});})(parts))
,cljs.core.PersistentArrayMap.EMPTY,parts);
var params__$1 = clojure.walk.keywordize_keys(params);
return params__$1;
});
/**
 * Like re-matches but result is a always vector. If re does not
 *   capture matches then it will return a vector of [m m] as if it had a
 *   single capture. Other wise it maintains consistent behavior with
 *   re-matches. 
 */
secretary.core.re_matches_STAR_ = (function secretary$core$re_matches_STAR_(re,s){
var ms = cljs.core.re_matches(re,s);
if(cljs.core.truth_(ms)){
if(cljs.core.sequential_QMARK_(ms)){
return ms;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms,ms], null);
}
} else {
return null;
}
});
secretary.core.re_escape_chars = cljs.core.set("\\.*+|?()[]{}$^");
secretary.core.re_escape = (function secretary$core$re_escape(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,c){
if(cljs.core.truth_((secretary.core.re_escape_chars.cljs$core$IFn$_invoke$arity$1 ? secretary.core.re_escape_chars.cljs$core$IFn$_invoke$arity$1(c) : secretary.core.re_escape_chars.call(null,c)))){
return [cljs.core.str(s__$1),cljs.core.str("\\"),cljs.core.str(c)].join('');
} else {
return [cljs.core.str(s__$1),cljs.core.str(c)].join('');
}
}),"",s);
});
/**
 * Attempt to lex a single token from s with clauses. Each clause is a
 *   pair of [regexp action] where action is a function. regexp is
 *   expected to begin with ^ and contain a single capture. If the
 *   attempt is successful a vector of [s-without-token (action capture)]
 *   is returned. Otherwise the result is nil.
 */
secretary.core.lex_STAR_ = (function secretary$core$lex_STAR_(s,clauses){
return cljs.core.some((function (p__17066){
var vec__17067 = p__17066;
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17067,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17067,(1),null);
var temp__4657__auto__ = cljs.core.re_find(re,s);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__17070 = temp__4657__auto__;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17070,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17070,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,cljs.core.count(m)),(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(c) : action.call(null,c))], null);
} else {
return null;
}
}),clauses);
});
/**
 * Return a pair of [regex params]. regex is a compiled regular
 *   expression for matching routes. params is a list of route param
 *   names (:*, :id, etc.). 
 */
secretary.core.lex_route = (function secretary$core$lex_route(s,clauses){
var s__$1 = s;
var pattern = "";
var params = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq(s__$1)){
var vec__17079 = secretary.core.lex_STAR_(s__$1,clauses);
var s__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17079,(0),null);
var vec__17082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17079,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17082,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17082,(1),null);
var G__17085 = s__$2;
var G__17086 = [cljs.core.str(pattern),cljs.core.str(r)].join('');
var G__17087 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,p);
s__$1 = G__17085;
pattern = G__17086;
params = G__17087;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.re_pattern([cljs.core.str("^"),cljs.core.str(pattern),cljs.core.str("$")].join('')),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,params)], null);
}
break;
}
});
/**
 * Given a route return an instance of IRouteMatches.
 */
secretary.core.compile_route = (function secretary$core$compile_route(orig_route){
var clauses = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\*([^\s.:*\/]*)/,(function (v){
var r = "(.*?)";
var p = ((cljs.core.seq(v))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v):cljs.core.cst$kw$_STAR_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\:([^\s.:*\/]+)/,(function (v){
var r = "([^,;?/]+)";
var p = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^([^:*]+)/,(function (v){
var r = secretary.core.re_escape(v);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null);
})], null)], null);
var vec__17097 = secretary.core.lex_route(orig_route,clauses);
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17097,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17097,(1),null);
if(typeof secretary.core.t_secretary$core17100 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {secretary.core.IRouteValue}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {secretary.core.IRouteMatches}
*/
secretary.core.t_secretary$core17100 = (function (compile_route,orig_route,clauses,vec__17097,re,params,meta17101){
this.compile_route = compile_route;
this.orig_route = orig_route;
this.clauses = clauses;
this.vec__17097 = vec__17097;
this.re = re;
this.params = params;
this.meta17101 = meta17101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
secretary.core.t_secretary$core17100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (clauses,vec__17097,re,params){
return (function (_17102,meta17101__$1){
var self__ = this;
var _17102__$1 = this;
return (new secretary.core.t_secretary$core17100(self__.compile_route,self__.orig_route,self__.clauses,self__.vec__17097,self__.re,self__.params,meta17101__$1));
});})(clauses,vec__17097,re,params))
;

secretary.core.t_secretary$core17100.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (clauses,vec__17097,re,params){
return (function (_17102){
var self__ = this;
var _17102__$1 = this;
return self__.meta17101;
});})(clauses,vec__17097,re,params))
;

secretary.core.t_secretary$core17100.prototype.secretary$core$IRouteValue$ = true;

secretary.core.t_secretary$core17100.prototype.secretary$core$IRouteValue$route_value$arity$1 = ((function (clauses,vec__17097,re,params){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.orig_route;
});})(clauses,vec__17097,re,params))
;

secretary.core.t_secretary$core17100.prototype.secretary$core$IRouteMatches$ = true;

secretary.core.t_secretary$core17100.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = ((function (clauses,vec__17097,re,params){
return (function (_,route){
var self__ = this;
var ___$1 = this;
var temp__4657__auto__ = secretary.core.re_matches_STAR_(self__.re,route);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__17103 = temp__4657__auto__;
var seq__17104 = cljs.core.seq(vec__17103);
var first__17105 = cljs.core.first(seq__17104);
var seq__17104__$1 = cljs.core.next(seq__17104);
var ___$2 = first__17105;
var ms = seq__17104__$1;
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(self__.params,cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.decode,ms)))], 0));
} else {
return null;
}
});})(clauses,vec__17097,re,params))
;

secretary.core.t_secretary$core17100.getBasis = ((function (clauses,vec__17097,re,params){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$compile_DASH_route,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$orig_DASH_route], null))),cljs.core.cst$kw$doc,"Given a route return an instance of IRouteMatches."], null)),cljs.core.cst$sym$orig_DASH_route,cljs.core.cst$sym$clauses,cljs.core.cst$sym$vec__17097,cljs.core.cst$sym$re,cljs.core.cst$sym$params,cljs.core.cst$sym$meta17101], null);
});})(clauses,vec__17097,re,params))
;

secretary.core.t_secretary$core17100.cljs$lang$type = true;

secretary.core.t_secretary$core17100.cljs$lang$ctorStr = "secretary.core/t_secretary$core17100";

secretary.core.t_secretary$core17100.cljs$lang$ctorPrWriter = ((function (clauses,vec__17097,re,params){
return (function (this__6910__auto__,writer__6911__auto__,opt__6912__auto__){
return cljs.core._write(writer__6911__auto__,"secretary.core/t_secretary$core17100");
});})(clauses,vec__17097,re,params))
;

secretary.core.__GT_t_secretary$core17100 = ((function (clauses,vec__17097,re,params){
return (function secretary$core$compile_route_$___GT_t_secretary$core17100(compile_route__$1,orig_route__$1,clauses__$1,vec__17097__$1,re__$1,params__$1,meta17101){
return (new secretary.core.t_secretary$core17100(compile_route__$1,orig_route__$1,clauses__$1,vec__17097__$1,re__$1,params__$1,meta17101));
});})(clauses,vec__17097,re,params))
;

}

return (new secretary.core.t_secretary$core17100(secretary$core$compile_route,orig_route,clauses,vec__17097,re,params,cljs.core.PersistentArrayMap.EMPTY));
});
secretary.core.render_route_STAR_ = (function secretary$core$render_route_STAR_(var_args){
var args__7386__auto__ = [];
var len__7379__auto___17109 = arguments.length;
var i__7380__auto___17110 = (0);
while(true){
if((i__7380__auto___17110 < len__7379__auto___17109)){
args__7386__auto__.push((arguments[i__7380__auto___17110]));

var G__17111 = (i__7380__auto___17110 + (1));
i__7380__auto___17110 = G__17111;
continue;
} else {
}
break;
}

var argseq__7387__auto__ = ((((1) < args__7386__auto__.length))?(new cljs.core.IndexedSeq(args__7386__auto__.slice((1)),(0),null)):null);
return secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7387__auto__);
});

secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,args){
if(((!((obj == null)))?(((false) || (obj.secretary$core$IRenderRoute$))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(secretary.core.IRenderRoute,obj):false)):cljs.core.native_satisfies_QMARK_(secretary.core.IRenderRoute,obj))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route,obj,args);
} else {
return null;
}
});

secretary.core.render_route_STAR_.cljs$lang$maxFixedArity = (1);

secretary.core.render_route_STAR_.cljs$lang$applyTo = (function (seq17106){
var G__17107 = cljs.core.first(seq17106);
var seq17106__$1 = cljs.core.next(seq17106);
return secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__17107,seq17106__$1);
});

secretary.core._STAR_routes_STAR_ = (function (){var G__17112 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17112) : cljs.core.atom.call(null,G__17112));
})();
secretary.core.add_route_BANG_ = (function secretary$core$add_route_BANG_(obj,action){
var obj__$1 = ((typeof obj === 'string')?secretary.core.compile_route(obj):obj);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(secretary.core._STAR_routes_STAR_,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj__$1,action], null));
});
secretary.core.remove_route_BANG_ = (function secretary$core$remove_route_BANG_(obj){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(secretary.core._STAR_routes_STAR_,(function (rs){
return cljs.core.filterv((function (p__17117){
var vec__17118 = p__17117;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17118,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17118,(1),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,obj);
}),rs);
}));
});
secretary.core.reset_routes_BANG_ = (function secretary$core$reset_routes_BANG_(){
var G__17123 = secretary.core._STAR_routes_STAR_;
var G__17124 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17123,G__17124) : cljs.core.reset_BANG_.call(null,G__17123,G__17124));
});
secretary.core.locate_route = (function secretary$core$locate_route(route){
return cljs.core.some((function (p__17129){
var vec__17130 = p__17129;
var compiled_route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17130,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17130,(1),null);
var temp__4657__auto__ = secretary.core.route_matches(compiled_route,route);
if(cljs.core.truth_(temp__4657__auto__)){
var params = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$action,action,cljs.core.cst$kw$params,params,cljs.core.cst$kw$route,compiled_route], null);
} else {
return null;
}
}),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(secretary.core._STAR_routes_STAR_) : cljs.core.deref.call(null,secretary.core._STAR_routes_STAR_)));
});
/**
 * Returns original route value as set in defroute when passed a URI path.
 */
secretary.core.locate_route_value = (function secretary$core$locate_route_value(uri){
return secretary.core.route_value(cljs.core.cst$kw$route.cljs$core$IFn$_invoke$arity$1(secretary.core.locate_route(uri)));
});
secretary.core.prefix = (function secretary$core$prefix(){
return [cljs.core.str(secretary.core.get_config(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prefix], null)))].join('');
});
secretary.core.uri_without_prefix = (function secretary$core$uri_without_prefix(uri){
return clojure.string.replace(uri,cljs.core.re_pattern([cljs.core.str("^"),cljs.core.str(secretary.core.prefix())].join('')),"");
});
/**
 * Ensures that the uri has a leading slash
 */
secretary.core.uri_with_leading_slash = (function secretary$core$uri_with_leading_slash(uri){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(uri))){
return uri;
} else {
return [cljs.core.str("/"),cljs.core.str(uri)].join('');
}
});
/**
 * Dispatch an action for a given route if it matches the URI path.
 */
secretary.core.dispatch_BANG_ = (function secretary$core$dispatch_BANG_(uri){
var vec__17138 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(secretary.core.uri_without_prefix(uri),/\?/);
var uri_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17138,(0),null);
var query_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17138,(1),null);
var uri_path__$1 = secretary.core.uri_with_leading_slash(uri_path);
var query_params = (cljs.core.truth_(query_string)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_DASH_params,secretary.core.decode_query_params(query_string)], null):null);
var map__17141 = secretary.core.locate_route(uri_path__$1);
var map__17141__$1 = ((((!((map__17141 == null)))?((((map__17141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17141):map__17141);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17141__$1,cljs.core.cst$kw$action);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17141__$1,cljs.core.cst$kw$params);
var action__$1 = (function (){var or__6304__auto__ = action;
if(cljs.core.truth_(or__6304__auto__)){
return or__6304__auto__;
} else {
return cljs.core.identity;
}
})();
var params__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params,query_params], 0));
return (action__$1.cljs$core$IFn$_invoke$arity$1 ? action__$1.cljs$core$IFn$_invoke$arity$1(params__$1) : action__$1.call(null,params__$1));
});
secretary.core.invalid_params = (function secretary$core$invalid_params(params,validations){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__17147){
var vec__17148 = p__17147;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17148,(0),null);
var validation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17148,(1),null);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,key);
if(cljs.core.truth_(cljs.core.re_matches(validation,value))){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,validation], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),validations));
});
secretary.core.params_valid_QMARK_ = (function secretary$core$params_valid_QMARK_(params,validations){
return cljs.core.empty_QMARK_(secretary.core.invalid_params(params,validations));
});
(secretary.core.IRouteMatches["string"] = true);

(secretary.core.route_matches["string"] = (function (this$,route){
return secretary.core.route_matches(secretary.core.compile_route(this$),route);
}));

RegExp.prototype.secretary$core$IRouteMatches$ = true;

RegExp.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (this$,route){
var this$__$1 = this;
var temp__4657__auto__ = secretary.core.re_matches_STAR_(this$__$1,route);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__17151 = temp__4657__auto__;
var seq__17152 = cljs.core.seq(vec__17151);
var first__17153 = cljs.core.first(seq__17152);
var seq__17152__$1 = cljs.core.next(seq__17152);
var _ = first__17153;
var ms = seq__17152__$1;
return cljs.core.vec(ms);
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (p__17154,route){
var vec__17155 = p__17154;
var seq__17156 = cljs.core.seq(vec__17155);
var first__17157 = cljs.core.first(seq__17156);
var seq__17156__$1 = cljs.core.next(seq__17156);
var route_string = first__17157;
var validations = seq__17156__$1;
var vec__17158 = this;
var seq__17159 = cljs.core.seq(vec__17158);
var first__17160 = cljs.core.first(seq__17159);
var seq__17159__$1 = cljs.core.next(seq__17159);
var route_string__$1 = first__17160;
var validations__$1 = seq__17159__$1;
var params = secretary.core.route_matches(secretary.core.compile_route(route_string__$1),route);
if(cljs.core.truth_(secretary.core.params_valid_QMARK_(params,validations__$1))){
return params;
} else {
return null;
}
});
(secretary.core.IRouteValue["string"] = true);

(secretary.core.route_value["string"] = (function (this$){
return secretary.core.route_value(secretary.core.compile_route(this$));
}));

RegExp.prototype.secretary$core$IRouteValue$ = true;

RegExp.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (p__17161){
var vec__17162 = p__17161;
var seq__17163 = cljs.core.seq(vec__17162);
var first__17164 = cljs.core.first(seq__17163);
var seq__17163__$1 = cljs.core.next(seq__17163);
var route_string = first__17164;
var validations = seq__17163__$1;
var vec__17165 = this;
var seq__17166 = cljs.core.seq(vec__17165);
var first__17167 = cljs.core.first(seq__17166);
var seq__17166__$1 = cljs.core.next(seq__17166);
var route_string__$1 = first__17167;
var validations__$1 = seq__17166__$1;
return cljs.core.vec(cljs.core.cons(secretary.core.route_value(route_string__$1),validations__$1));
});
(secretary.core.IRenderRoute["string"] = true);

(secretary.core.render_route["string"] = (function() {
var G__17177 = null;
var G__17177__1 = (function (this$){
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.PersistentArrayMap.EMPTY);
});
var G__17177__2 = (function (this$,params){
var map__17168 = params;
var map__17168__$1 = ((((!((map__17168 == null)))?((((map__17168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17168):map__17168);
var m = map__17168__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17168__$1,cljs.core.cst$kw$query_DASH_params);
var a = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(m) : cljs.core.atom.call(null,m));
var path = this$.replace((new RegExp(":[^\\s.:*/]+|\\*[^\\s.:*/]*","g")),((function (map__17168,map__17168__$1,m,query_params,a){
return (function ($1){
var lookup = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($1,"*"))?$1:cljs.core.subs.cljs$core$IFn$_invoke$arity$2($1,(1))));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a)),lookup);
var replacement = ((cljs.core.sequential_QMARK_(v))?(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc,lookup,cljs.core.next(v));

return secretary.core.encode_uri(cljs.core.first(v));
})()
:(cljs.core.truth_(v)?secretary.core.encode_uri(v):$1));
return replacement;
});})(map__17168,map__17168__$1,m,query_params,a))
);
var path__$1 = [cljs.core.str(secretary.core.get_config(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prefix], null))),cljs.core.str(path)].join('');
var temp__4655__auto__ = (function (){var and__6292__auto__ = query_params;
if(cljs.core.truth_(and__6292__auto__)){
return secretary.core.encode_query_params(query_params);
} else {
return and__6292__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var query_string = temp__4655__auto__;
return [cljs.core.str(path__$1),cljs.core.str("?"),cljs.core.str(query_string)].join('');
} else {
return path__$1;
}
});
G__17177 = function(this$,params){
switch(arguments.length){
case 1:
return G__17177__1.call(this,this$);
case 2:
return G__17177__2.call(this,this$,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17177.cljs$core$IFn$_invoke$arity$1 = G__17177__1;
G__17177.cljs$core$IFn$_invoke$arity$2 = G__17177__2;
return G__17177;
})()
);

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$1 = (function (this$){
var this$__$1 = this;
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$2 = (function (p__17170,params){
var vec__17171 = p__17170;
var seq__17172 = cljs.core.seq(vec__17171);
var first__17173 = cljs.core.first(seq__17172);
var seq__17172__$1 = cljs.core.next(seq__17172);
var route_string = first__17173;
var validations = seq__17172__$1;
var vec__17174 = this;
var seq__17175 = cljs.core.seq(vec__17174);
var first__17176 = cljs.core.first(seq__17175);
var seq__17175__$1 = cljs.core.next(seq__17175);
var route_string__$1 = first__17176;
var validations__$1 = seq__17175__$1;
var invalid = secretary.core.invalid_params(params,validations__$1);
if(cljs.core.empty_QMARK_(invalid)){
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(route_string__$1,params);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Could not build route: invalid params",invalid);
}
});