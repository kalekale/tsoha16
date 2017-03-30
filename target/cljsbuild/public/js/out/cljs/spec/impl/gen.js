// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__37684__auto__,writer__37685__auto__,opt__37686__auto__){
return cljs.core._write.call(null,writer__37685__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49837 = arguments.length;
var i__38154__auto___49838 = (0);
while(true){
if((i__38154__auto___49838 < len__38153__auto___49837)){
args__38160__auto__.push((arguments[i__38154__auto___49838]));

var G__49839 = (i__38154__auto___49838 + (1));
i__38154__auto___49838 = G__49839;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq49836){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49836));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49841 = arguments.length;
var i__38154__auto___49842 = (0);
while(true){
if((i__38154__auto___49842 < len__38153__auto___49841)){
args__38160__auto__.push((arguments[i__38154__auto___49842]));

var G__49843 = (i__38154__auto___49842 + (1));
i__38154__auto___49842 = G__49843;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq49840){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49840));
});

var g_QMARK__49844 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_49845 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__49844){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__49844))
,null));
var mkg_49846 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__49844,g_49845){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__49844,g_49845))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__49844,g_49845,mkg_49846){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__49844).call(null,x);
});})(g_QMARK__49844,g_49845,mkg_49846))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__49844,g_49845,mkg_49846){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_49846).call(null,gfn);
});})(g_QMARK__49844,g_49845,mkg_49846))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__49844,g_49845,mkg_49846){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_49845).call(null,generator);
});})(g_QMARK__49844,g_49845,mkg_49846))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__38371__auto___49865 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__38371__auto___49865){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49866 = arguments.length;
var i__38154__auto___49867 = (0);
while(true){
if((i__38154__auto___49867 < len__38153__auto___49866)){
args__38160__auto__.push((arguments[i__38154__auto___49867]));

var G__49868 = (i__38154__auto___49867 + (1));
i__38154__auto___49867 = G__49868;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38371__auto___49865))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38371__auto___49865){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38371__auto___49865),args);
});})(g__38371__auto___49865))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__38371__auto___49865){
return (function (seq49847){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49847));
});})(g__38371__auto___49865))
;


var g__38371__auto___49869 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__38371__auto___49869){
return (function cljs$spec$impl$gen$list(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49870 = arguments.length;
var i__38154__auto___49871 = (0);
while(true){
if((i__38154__auto___49871 < len__38153__auto___49870)){
args__38160__auto__.push((arguments[i__38154__auto___49871]));

var G__49872 = (i__38154__auto___49871 + (1));
i__38154__auto___49871 = G__49872;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38371__auto___49869))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38371__auto___49869){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38371__auto___49869),args);
});})(g__38371__auto___49869))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__38371__auto___49869){
return (function (seq49848){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49848));
});})(g__38371__auto___49869))
;


var g__38371__auto___49873 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__38371__auto___49873){
return (function cljs$spec$impl$gen$map(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49874 = arguments.length;
var i__38154__auto___49875 = (0);
while(true){
if((i__38154__auto___49875 < len__38153__auto___49874)){
args__38160__auto__.push((arguments[i__38154__auto___49875]));

var G__49876 = (i__38154__auto___49875 + (1));
i__38154__auto___49875 = G__49876;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38371__auto___49873))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38371__auto___49873){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38371__auto___49873),args);
});})(g__38371__auto___49873))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__38371__auto___49873){
return (function (seq49849){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49849));
});})(g__38371__auto___49873))
;


var g__38371__auto___49877 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__38371__auto___49877){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49878 = arguments.length;
var i__38154__auto___49879 = (0);
while(true){
if((i__38154__auto___49879 < len__38153__auto___49878)){
args__38160__auto__.push((arguments[i__38154__auto___49879]));

var G__49880 = (i__38154__auto___49879 + (1));
i__38154__auto___49879 = G__49880;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38371__auto___49877))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38371__auto___49877){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38371__auto___49877),args);
});})(g__38371__auto___49877))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__38371__auto___49877){
return (function (seq49850){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49850));
});})(g__38371__auto___49877))
;


var g__38371__auto___49881 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__38371__auto___49881){
return (function cljs$spec$impl$gen$set(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49882 = arguments.length;
var i__38154__auto___49883 = (0);
while(true){
if((i__38154__auto___49883 < len__38153__auto___49882)){
args__38160__auto__.push((arguments[i__38154__auto___49883]));

var G__49884 = (i__38154__auto___49883 + (1));
i__38154__auto___49883 = G__49884;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38371__auto___49881))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38371__auto___49881){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38371__auto___49881),args);
});})(g__38371__auto___49881))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__38371__auto___49881){
return (function (seq49851){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49851));
});})(g__38371__auto___49881))
;


var g__38371__auto___49885 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__38371__auto___49885){
return (function cljs$spec$impl$gen$vector(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49886 = arguments.length;
var i__38154__auto___49887 = (0);
while(true){
if((i__38154__auto___49887 < len__38153__auto___49886)){
args__38160__auto__.push((arguments[i__38154__auto___49887]));

var G__49888 = (i__38154__auto___49887 + (1));
i__38154__auto___49887 = G__49888;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38371__auto___49885))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38371__auto___49885){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38371__auto___49885),args);
});})(g__38371__auto___49885))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__38371__auto___49885){
return (function (seq49852){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49852));
});})(g__38371__auto___49885))
;


var g__38371__auto___49889 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__38371__auto___49889){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49890 = arguments.length;
var i__38154__auto___49891 = (0);
while(true){
if((i__38154__auto___49891 < len__38153__auto___49890)){
args__38160__auto__.push((arguments[i__38154__auto___49891]));

var G__49892 = (i__38154__auto___49891 + (1));
i__38154__auto___49891 = G__49892;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38371__auto___49889))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38371__auto___49889){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38371__auto___49889),args);
});})(g__38371__auto___49889))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__38371__auto___49889){
return (function (seq49853){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49853));
});})(g__38371__auto___49889))
;


var g__38371__auto___49893 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__38371__auto___49893){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49894 = arguments.length;
var i__38154__auto___49895 = (0);
while(true){
if((i__38154__auto___49895 < len__38153__auto___49894)){
args__38160__auto__.push((arguments[i__38154__auto___49895]));

var G__49896 = (i__38154__auto___49895 + (1));
i__38154__auto___49895 = G__49896;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38371__auto___49893))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38371__auto___49893){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38371__auto___49893),args);
});})(g__38371__auto___49893))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__38371__auto___49893){
return (function (seq49854){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49854));
});})(g__38371__auto___49893))
;


var g__38371__auto___49897 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__38371__auto___49897){
return (function cljs$spec$impl$gen$elements(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49898 = arguments.length;
var i__38154__auto___49899 = (0);
while(true){
if((i__38154__auto___49899 < len__38153__auto___49898)){
args__38160__auto__.push((arguments[i__38154__auto___49899]));

var G__49900 = (i__38154__auto___49899 + (1));
i__38154__auto___49899 = G__49900;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38371__auto___49897))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38371__auto___49897){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38371__auto___49897),args);
});})(g__38371__auto___49897))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__38371__auto___49897){
return (function (seq49855){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49855));
});})(g__38371__auto___49897))
;


var g__38371__auto___49901 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__38371__auto___49901){
return (function cljs$spec$impl$gen$bind(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49902 = arguments.length;
var i__38154__auto___49903 = (0);
while(true){
if((i__38154__auto___49903 < len__38153__auto___49902)){
args__38160__auto__.push((arguments[i__38154__auto___49903]));

var G__49904 = (i__38154__auto___49903 + (1));
i__38154__auto___49903 = G__49904;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38371__auto___49901))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38371__auto___49901){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38371__auto___49901),args);
});})(g__38371__auto___49901))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__38371__auto___49901){
return (function (seq49856){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49856));
});})(g__38371__auto___49901))
;


var g__38371__auto___49905 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__38371__auto___49905){
return (function cljs$spec$impl$gen$choose(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49906 = arguments.length;
var i__38154__auto___49907 = (0);
while(true){
if((i__38154__auto___49907 < len__38153__auto___49906)){
args__38160__auto__.push((arguments[i__38154__auto___49907]));

var G__49908 = (i__38154__auto___49907 + (1));
i__38154__auto___49907 = G__49908;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38371__auto___49905))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38371__auto___49905){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38371__auto___49905),args);
});})(g__38371__auto___49905))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__38371__auto___49905){
return (function (seq49857){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49857));
});})(g__38371__auto___49905))
;


var g__38371__auto___49909 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__38371__auto___49909){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49910 = arguments.length;
var i__38154__auto___49911 = (0);
while(true){
if((i__38154__auto___49911 < len__38153__auto___49910)){
args__38160__auto__.push((arguments[i__38154__auto___49911]));

var G__49912 = (i__38154__auto___49911 + (1));
i__38154__auto___49911 = G__49912;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38371__auto___49909))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38371__auto___49909){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38371__auto___49909),args);
});})(g__38371__auto___49909))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__38371__auto___49909){
return (function (seq49858){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49858));
});})(g__38371__auto___49909))
;


var g__38371__auto___49913 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__38371__auto___49913){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49914 = arguments.length;
var i__38154__auto___49915 = (0);
while(true){
if((i__38154__auto___49915 < len__38153__auto___49914)){
args__38160__auto__.push((arguments[i__38154__auto___49915]));

var G__49916 = (i__38154__auto___49915 + (1));
i__38154__auto___49915 = G__49916;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38371__auto___49913))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38371__auto___49913){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38371__auto___49913),args);
});})(g__38371__auto___49913))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__38371__auto___49913){
return (function (seq49859){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49859));
});})(g__38371__auto___49913))
;


var g__38371__auto___49917 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__38371__auto___49917){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49918 = arguments.length;
var i__38154__auto___49919 = (0);
while(true){
if((i__38154__auto___49919 < len__38153__auto___49918)){
args__38160__auto__.push((arguments[i__38154__auto___49919]));

var G__49920 = (i__38154__auto___49919 + (1));
i__38154__auto___49919 = G__49920;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38371__auto___49917))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38371__auto___49917){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38371__auto___49917),args);
});})(g__38371__auto___49917))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__38371__auto___49917){
return (function (seq49860){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49860));
});})(g__38371__auto___49917))
;


var g__38371__auto___49921 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__38371__auto___49921){
return (function cljs$spec$impl$gen$sample(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49922 = arguments.length;
var i__38154__auto___49923 = (0);
while(true){
if((i__38154__auto___49923 < len__38153__auto___49922)){
args__38160__auto__.push((arguments[i__38154__auto___49923]));

var G__49924 = (i__38154__auto___49923 + (1));
i__38154__auto___49923 = G__49924;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38371__auto___49921))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38371__auto___49921){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38371__auto___49921),args);
});})(g__38371__auto___49921))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__38371__auto___49921){
return (function (seq49861){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49861));
});})(g__38371__auto___49921))
;


var g__38371__auto___49925 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__38371__auto___49925){
return (function cljs$spec$impl$gen$return(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49926 = arguments.length;
var i__38154__auto___49927 = (0);
while(true){
if((i__38154__auto___49927 < len__38153__auto___49926)){
args__38160__auto__.push((arguments[i__38154__auto___49927]));

var G__49928 = (i__38154__auto___49927 + (1));
i__38154__auto___49927 = G__49928;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38371__auto___49925))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38371__auto___49925){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38371__auto___49925),args);
});})(g__38371__auto___49925))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__38371__auto___49925){
return (function (seq49862){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49862));
});})(g__38371__auto___49925))
;


var g__38371__auto___49929 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__38371__auto___49929){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49930 = arguments.length;
var i__38154__auto___49931 = (0);
while(true){
if((i__38154__auto___49931 < len__38153__auto___49930)){
args__38160__auto__.push((arguments[i__38154__auto___49931]));

var G__49932 = (i__38154__auto___49931 + (1));
i__38154__auto___49931 = G__49932;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38371__auto___49929))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38371__auto___49929){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38371__auto___49929),args);
});})(g__38371__auto___49929))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__38371__auto___49929){
return (function (seq49863){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49863));
});})(g__38371__auto___49929))
;


var g__38371__auto___49933 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__38371__auto___49933){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49934 = arguments.length;
var i__38154__auto___49935 = (0);
while(true){
if((i__38154__auto___49935 < len__38153__auto___49934)){
args__38160__auto__.push((arguments[i__38154__auto___49935]));

var G__49936 = (i__38154__auto___49935 + (1));
i__38154__auto___49935 = G__49936;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38371__auto___49933))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38371__auto___49933){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38371__auto___49933),args);
});})(g__38371__auto___49933))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__38371__auto___49933){
return (function (seq49864){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49864));
});})(g__38371__auto___49933))
;

var g__38384__auto___49958 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__38384__auto___49958){
return (function cljs$spec$impl$gen$any(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49959 = arguments.length;
var i__38154__auto___49960 = (0);
while(true){
if((i__38154__auto___49960 < len__38153__auto___49959)){
args__38160__auto__.push((arguments[i__38154__auto___49960]));

var G__49961 = (i__38154__auto___49960 + (1));
i__38154__auto___49960 = G__49961;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38384__auto___49958))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38384__auto___49958){
return (function (args){
return cljs.core.deref.call(null,g__38384__auto___49958);
});})(g__38384__auto___49958))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__38384__auto___49958){
return (function (seq49937){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49937));
});})(g__38384__auto___49958))
;


var g__38384__auto___49962 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__38384__auto___49962){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49963 = arguments.length;
var i__38154__auto___49964 = (0);
while(true){
if((i__38154__auto___49964 < len__38153__auto___49963)){
args__38160__auto__.push((arguments[i__38154__auto___49964]));

var G__49965 = (i__38154__auto___49964 + (1));
i__38154__auto___49964 = G__49965;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38384__auto___49962))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38384__auto___49962){
return (function (args){
return cljs.core.deref.call(null,g__38384__auto___49962);
});})(g__38384__auto___49962))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__38384__auto___49962){
return (function (seq49938){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49938));
});})(g__38384__auto___49962))
;


var g__38384__auto___49966 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__38384__auto___49966){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49967 = arguments.length;
var i__38154__auto___49968 = (0);
while(true){
if((i__38154__auto___49968 < len__38153__auto___49967)){
args__38160__auto__.push((arguments[i__38154__auto___49968]));

var G__49969 = (i__38154__auto___49968 + (1));
i__38154__auto___49968 = G__49969;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38384__auto___49966))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38384__auto___49966){
return (function (args){
return cljs.core.deref.call(null,g__38384__auto___49966);
});})(g__38384__auto___49966))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__38384__auto___49966){
return (function (seq49939){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49939));
});})(g__38384__auto___49966))
;


var g__38384__auto___49970 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__38384__auto___49970){
return (function cljs$spec$impl$gen$char(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49971 = arguments.length;
var i__38154__auto___49972 = (0);
while(true){
if((i__38154__auto___49972 < len__38153__auto___49971)){
args__38160__auto__.push((arguments[i__38154__auto___49972]));

var G__49973 = (i__38154__auto___49972 + (1));
i__38154__auto___49972 = G__49973;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38384__auto___49970))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38384__auto___49970){
return (function (args){
return cljs.core.deref.call(null,g__38384__auto___49970);
});})(g__38384__auto___49970))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__38384__auto___49970){
return (function (seq49940){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49940));
});})(g__38384__auto___49970))
;


var g__38384__auto___49974 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__38384__auto___49974){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49975 = arguments.length;
var i__38154__auto___49976 = (0);
while(true){
if((i__38154__auto___49976 < len__38153__auto___49975)){
args__38160__auto__.push((arguments[i__38154__auto___49976]));

var G__49977 = (i__38154__auto___49976 + (1));
i__38154__auto___49976 = G__49977;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38384__auto___49974))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38384__auto___49974){
return (function (args){
return cljs.core.deref.call(null,g__38384__auto___49974);
});})(g__38384__auto___49974))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__38384__auto___49974){
return (function (seq49941){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49941));
});})(g__38384__auto___49974))
;


var g__38384__auto___49978 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__38384__auto___49978){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49979 = arguments.length;
var i__38154__auto___49980 = (0);
while(true){
if((i__38154__auto___49980 < len__38153__auto___49979)){
args__38160__auto__.push((arguments[i__38154__auto___49980]));

var G__49981 = (i__38154__auto___49980 + (1));
i__38154__auto___49980 = G__49981;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38384__auto___49978))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38384__auto___49978){
return (function (args){
return cljs.core.deref.call(null,g__38384__auto___49978);
});})(g__38384__auto___49978))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__38384__auto___49978){
return (function (seq49942){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49942));
});})(g__38384__auto___49978))
;


var g__38384__auto___49982 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__38384__auto___49982){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49983 = arguments.length;
var i__38154__auto___49984 = (0);
while(true){
if((i__38154__auto___49984 < len__38153__auto___49983)){
args__38160__auto__.push((arguments[i__38154__auto___49984]));

var G__49985 = (i__38154__auto___49984 + (1));
i__38154__auto___49984 = G__49985;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38384__auto___49982))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38384__auto___49982){
return (function (args){
return cljs.core.deref.call(null,g__38384__auto___49982);
});})(g__38384__auto___49982))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__38384__auto___49982){
return (function (seq49943){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49943));
});})(g__38384__auto___49982))
;


var g__38384__auto___49986 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__38384__auto___49986){
return (function cljs$spec$impl$gen$double(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49987 = arguments.length;
var i__38154__auto___49988 = (0);
while(true){
if((i__38154__auto___49988 < len__38153__auto___49987)){
args__38160__auto__.push((arguments[i__38154__auto___49988]));

var G__49989 = (i__38154__auto___49988 + (1));
i__38154__auto___49988 = G__49989;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38384__auto___49986))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38384__auto___49986){
return (function (args){
return cljs.core.deref.call(null,g__38384__auto___49986);
});})(g__38384__auto___49986))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__38384__auto___49986){
return (function (seq49944){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49944));
});})(g__38384__auto___49986))
;


var g__38384__auto___49990 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__38384__auto___49990){
return (function cljs$spec$impl$gen$int(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49991 = arguments.length;
var i__38154__auto___49992 = (0);
while(true){
if((i__38154__auto___49992 < len__38153__auto___49991)){
args__38160__auto__.push((arguments[i__38154__auto___49992]));

var G__49993 = (i__38154__auto___49992 + (1));
i__38154__auto___49992 = G__49993;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38384__auto___49990))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38384__auto___49990){
return (function (args){
return cljs.core.deref.call(null,g__38384__auto___49990);
});})(g__38384__auto___49990))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__38384__auto___49990){
return (function (seq49945){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49945));
});})(g__38384__auto___49990))
;


var g__38384__auto___49994 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__38384__auto___49994){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49995 = arguments.length;
var i__38154__auto___49996 = (0);
while(true){
if((i__38154__auto___49996 < len__38153__auto___49995)){
args__38160__auto__.push((arguments[i__38154__auto___49996]));

var G__49997 = (i__38154__auto___49996 + (1));
i__38154__auto___49996 = G__49997;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38384__auto___49994))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38384__auto___49994){
return (function (args){
return cljs.core.deref.call(null,g__38384__auto___49994);
});})(g__38384__auto___49994))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__38384__auto___49994){
return (function (seq49946){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49946));
});})(g__38384__auto___49994))
;


var g__38384__auto___49998 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__38384__auto___49998){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__38160__auto__ = [];
var len__38153__auto___49999 = arguments.length;
var i__38154__auto___50000 = (0);
while(true){
if((i__38154__auto___50000 < len__38153__auto___49999)){
args__38160__auto__.push((arguments[i__38154__auto___50000]));

var G__50001 = (i__38154__auto___50000 + (1));
i__38154__auto___50000 = G__50001;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38384__auto___49998))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38384__auto___49998){
return (function (args){
return cljs.core.deref.call(null,g__38384__auto___49998);
});})(g__38384__auto___49998))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__38384__auto___49998){
return (function (seq49947){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49947));
});})(g__38384__auto___49998))
;


var g__38384__auto___50002 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__38384__auto___50002){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__38160__auto__ = [];
var len__38153__auto___50003 = arguments.length;
var i__38154__auto___50004 = (0);
while(true){
if((i__38154__auto___50004 < len__38153__auto___50003)){
args__38160__auto__.push((arguments[i__38154__auto___50004]));

var G__50005 = (i__38154__auto___50004 + (1));
i__38154__auto___50004 = G__50005;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38384__auto___50002))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38384__auto___50002){
return (function (args){
return cljs.core.deref.call(null,g__38384__auto___50002);
});})(g__38384__auto___50002))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__38384__auto___50002){
return (function (seq49948){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49948));
});})(g__38384__auto___50002))
;


var g__38384__auto___50006 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__38384__auto___50006){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__38160__auto__ = [];
var len__38153__auto___50007 = arguments.length;
var i__38154__auto___50008 = (0);
while(true){
if((i__38154__auto___50008 < len__38153__auto___50007)){
args__38160__auto__.push((arguments[i__38154__auto___50008]));

var G__50009 = (i__38154__auto___50008 + (1));
i__38154__auto___50008 = G__50009;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38384__auto___50006))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38384__auto___50006){
return (function (args){
return cljs.core.deref.call(null,g__38384__auto___50006);
});})(g__38384__auto___50006))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__38384__auto___50006){
return (function (seq49949){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49949));
});})(g__38384__auto___50006))
;


var g__38384__auto___50010 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__38384__auto___50010){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__38160__auto__ = [];
var len__38153__auto___50011 = arguments.length;
var i__38154__auto___50012 = (0);
while(true){
if((i__38154__auto___50012 < len__38153__auto___50011)){
args__38160__auto__.push((arguments[i__38154__auto___50012]));

var G__50013 = (i__38154__auto___50012 + (1));
i__38154__auto___50012 = G__50013;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38384__auto___50010))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38384__auto___50010){
return (function (args){
return cljs.core.deref.call(null,g__38384__auto___50010);
});})(g__38384__auto___50010))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__38384__auto___50010){
return (function (seq49950){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49950));
});})(g__38384__auto___50010))
;


var g__38384__auto___50014 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__38384__auto___50014){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__38160__auto__ = [];
var len__38153__auto___50015 = arguments.length;
var i__38154__auto___50016 = (0);
while(true){
if((i__38154__auto___50016 < len__38153__auto___50015)){
args__38160__auto__.push((arguments[i__38154__auto___50016]));

var G__50017 = (i__38154__auto___50016 + (1));
i__38154__auto___50016 = G__50017;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38384__auto___50014))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38384__auto___50014){
return (function (args){
return cljs.core.deref.call(null,g__38384__auto___50014);
});})(g__38384__auto___50014))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__38384__auto___50014){
return (function (seq49951){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49951));
});})(g__38384__auto___50014))
;


var g__38384__auto___50018 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__38384__auto___50018){
return (function cljs$spec$impl$gen$string(var_args){
var args__38160__auto__ = [];
var len__38153__auto___50019 = arguments.length;
var i__38154__auto___50020 = (0);
while(true){
if((i__38154__auto___50020 < len__38153__auto___50019)){
args__38160__auto__.push((arguments[i__38154__auto___50020]));

var G__50021 = (i__38154__auto___50020 + (1));
i__38154__auto___50020 = G__50021;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38384__auto___50018))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38384__auto___50018){
return (function (args){
return cljs.core.deref.call(null,g__38384__auto___50018);
});})(g__38384__auto___50018))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__38384__auto___50018){
return (function (seq49952){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49952));
});})(g__38384__auto___50018))
;


var g__38384__auto___50022 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__38384__auto___50022){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__38160__auto__ = [];
var len__38153__auto___50023 = arguments.length;
var i__38154__auto___50024 = (0);
while(true){
if((i__38154__auto___50024 < len__38153__auto___50023)){
args__38160__auto__.push((arguments[i__38154__auto___50024]));

var G__50025 = (i__38154__auto___50024 + (1));
i__38154__auto___50024 = G__50025;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38384__auto___50022))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38384__auto___50022){
return (function (args){
return cljs.core.deref.call(null,g__38384__auto___50022);
});})(g__38384__auto___50022))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__38384__auto___50022){
return (function (seq49953){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49953));
});})(g__38384__auto___50022))
;


var g__38384__auto___50026 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__38384__auto___50026){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__38160__auto__ = [];
var len__38153__auto___50027 = arguments.length;
var i__38154__auto___50028 = (0);
while(true){
if((i__38154__auto___50028 < len__38153__auto___50027)){
args__38160__auto__.push((arguments[i__38154__auto___50028]));

var G__50029 = (i__38154__auto___50028 + (1));
i__38154__auto___50028 = G__50029;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38384__auto___50026))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38384__auto___50026){
return (function (args){
return cljs.core.deref.call(null,g__38384__auto___50026);
});})(g__38384__auto___50026))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__38384__auto___50026){
return (function (seq49954){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49954));
});})(g__38384__auto___50026))
;


var g__38384__auto___50030 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__38384__auto___50030){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__38160__auto__ = [];
var len__38153__auto___50031 = arguments.length;
var i__38154__auto___50032 = (0);
while(true){
if((i__38154__auto___50032 < len__38153__auto___50031)){
args__38160__auto__.push((arguments[i__38154__auto___50032]));

var G__50033 = (i__38154__auto___50032 + (1));
i__38154__auto___50032 = G__50033;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38384__auto___50030))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38384__auto___50030){
return (function (args){
return cljs.core.deref.call(null,g__38384__auto___50030);
});})(g__38384__auto___50030))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__38384__auto___50030){
return (function (seq49955){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49955));
});})(g__38384__auto___50030))
;


var g__38384__auto___50034 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__38384__auto___50034){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__38160__auto__ = [];
var len__38153__auto___50035 = arguments.length;
var i__38154__auto___50036 = (0);
while(true){
if((i__38154__auto___50036 < len__38153__auto___50035)){
args__38160__auto__.push((arguments[i__38154__auto___50036]));

var G__50037 = (i__38154__auto___50036 + (1));
i__38154__auto___50036 = G__50037;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38384__auto___50034))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38384__auto___50034){
return (function (args){
return cljs.core.deref.call(null,g__38384__auto___50034);
});})(g__38384__auto___50034))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__38384__auto___50034){
return (function (seq49956){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49956));
});})(g__38384__auto___50034))
;


var g__38384__auto___50038 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__38384__auto___50038){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__38160__auto__ = [];
var len__38153__auto___50039 = arguments.length;
var i__38154__auto___50040 = (0);
while(true){
if((i__38154__auto___50040 < len__38153__auto___50039)){
args__38160__auto__.push((arguments[i__38154__auto___50040]));

var G__50041 = (i__38154__auto___50040 + (1));
i__38154__auto___50040 = G__50041;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});})(g__38384__auto___50038))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38384__auto___50038){
return (function (args){
return cljs.core.deref.call(null,g__38384__auto___50038);
});})(g__38384__auto___50038))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__38384__auto___50038){
return (function (seq49957){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49957));
});})(g__38384__auto___50038))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__38160__auto__ = [];
var len__38153__auto___50044 = arguments.length;
var i__38154__auto___50045 = (0);
while(true){
if((i__38154__auto___50045 < len__38153__auto___50044)){
args__38160__auto__.push((arguments[i__38154__auto___50045]));

var G__50046 = (i__38154__auto___50045 + (1));
i__38154__auto___50045 = G__50046;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__50042_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__50042_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq50043){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50043));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__50047_SHARP_){
return (new Date(p1__50047_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map