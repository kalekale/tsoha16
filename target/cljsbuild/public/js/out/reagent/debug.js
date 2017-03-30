// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__42284__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__42284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42285__i = 0, G__42285__a = new Array(arguments.length -  0);
while (G__42285__i < G__42285__a.length) {G__42285__a[G__42285__i] = arguments[G__42285__i + 0]; ++G__42285__i;}
  args = new cljs.core.IndexedSeq(G__42285__a,0);
} 
return G__42284__delegate.call(this,args);};
G__42284.cljs$lang$maxFixedArity = 0;
G__42284.cljs$lang$applyTo = (function (arglist__42286){
var args = cljs.core.seq(arglist__42286);
return G__42284__delegate(args);
});
G__42284.cljs$core$IFn$_invoke$arity$variadic = G__42284__delegate;
return G__42284;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__42287__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__42287 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42288__i = 0, G__42288__a = new Array(arguments.length -  0);
while (G__42288__i < G__42288__a.length) {G__42288__a[G__42288__i] = arguments[G__42288__i + 0]; ++G__42288__i;}
  args = new cljs.core.IndexedSeq(G__42288__a,0);
} 
return G__42287__delegate.call(this,args);};
G__42287.cljs$lang$maxFixedArity = 0;
G__42287.cljs$lang$applyTo = (function (arglist__42289){
var args = cljs.core.seq(arglist__42289);
return G__42287__delegate(args);
});
G__42287.cljs$core$IFn$_invoke$arity$variadic = G__42287__delegate;
return G__42287;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map