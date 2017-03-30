// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__37078__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__37078__auto__)){
return or__37078__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_43237 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_43237){
return (function (){
var _STAR_always_update_STAR_43238 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_43238;
}});})(_STAR_always_update_STAR_43237))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_43237;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args43239 = [];
var len__38153__auto___43242 = arguments.length;
var i__38154__auto___43243 = (0);
while(true){
if((i__38154__auto___43243 < len__38153__auto___43242)){
args43239.push((arguments[i__38154__auto___43243]));

var G__43244 = (i__38154__auto___43243 + (1));
i__38154__auto___43243 = G__43244;
continue;
} else {
}
break;
}

var G__43241 = args43239.length;
switch (G__43241) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43239.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__43250_43254 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__43251_43255 = null;
var count__43252_43256 = (0);
var i__43253_43257 = (0);
while(true){
if((i__43253_43257 < count__43252_43256)){
var v_43258 = cljs.core._nth.call(null,chunk__43251_43255,i__43253_43257);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_43258);

var G__43259 = seq__43250_43254;
var G__43260 = chunk__43251_43255;
var G__43261 = count__43252_43256;
var G__43262 = (i__43253_43257 + (1));
seq__43250_43254 = G__43259;
chunk__43251_43255 = G__43260;
count__43252_43256 = G__43261;
i__43253_43257 = G__43262;
continue;
} else {
var temp__4657__auto___43263 = cljs.core.seq.call(null,seq__43250_43254);
if(temp__4657__auto___43263){
var seq__43250_43264__$1 = temp__4657__auto___43263;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43250_43264__$1)){
var c__37889__auto___43265 = cljs.core.chunk_first.call(null,seq__43250_43264__$1);
var G__43266 = cljs.core.chunk_rest.call(null,seq__43250_43264__$1);
var G__43267 = c__37889__auto___43265;
var G__43268 = cljs.core.count.call(null,c__37889__auto___43265);
var G__43269 = (0);
seq__43250_43254 = G__43266;
chunk__43251_43255 = G__43267;
count__43252_43256 = G__43268;
i__43253_43257 = G__43269;
continue;
} else {
var v_43270 = cljs.core.first.call(null,seq__43250_43264__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_43270);

var G__43271 = cljs.core.next.call(null,seq__43250_43264__$1);
var G__43272 = null;
var G__43273 = (0);
var G__43274 = (0);
seq__43250_43254 = G__43271;
chunk__43251_43255 = G__43272;
count__43252_43256 = G__43273;
i__43253_43257 = G__43274;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map