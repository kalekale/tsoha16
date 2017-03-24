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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__37573__auto__,writer__37574__auto__,opt__37575__auto__){
return cljs.core._write.call(null,writer__37574__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__38049__auto__ = [];
var len__38042__auto___44150 = arguments.length;
var i__38043__auto___44151 = (0);
while(true){
if((i__38043__auto___44151 < len__38042__auto___44150)){
args__38049__auto__.push((arguments[i__38043__auto___44151]));

var G__44152 = (i__38043__auto___44151 + (1));
i__38043__auto___44151 = G__44152;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq44149){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44149));
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
var args__38049__auto__ = [];
var len__38042__auto___44154 = arguments.length;
var i__38043__auto___44155 = (0);
while(true){
if((i__38043__auto___44155 < len__38042__auto___44154)){
args__38049__auto__.push((arguments[i__38043__auto___44155]));

var G__44156 = (i__38043__auto___44155 + (1));
i__38043__auto___44155 = G__44156;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq44153){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44153));
});

var g_QMARK__44157 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_44158 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__44157){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__44157))
,null));
var mkg_44159 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__44157,g_44158){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__44157,g_44158))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__44157,g_44158,mkg_44159){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__44157).call(null,x);
});})(g_QMARK__44157,g_44158,mkg_44159))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__44157,g_44158,mkg_44159){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_44159).call(null,gfn);
});})(g_QMARK__44157,g_44158,mkg_44159))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__44157,g_44158,mkg_44159){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_44158).call(null,generator);
});})(g_QMARK__44157,g_44158,mkg_44159))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__44121__auto___44178 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__44121__auto___44178){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44179 = arguments.length;
var i__38043__auto___44180 = (0);
while(true){
if((i__38043__auto___44180 < len__38042__auto___44179)){
args__38049__auto__.push((arguments[i__38043__auto___44180]));

var G__44181 = (i__38043__auto___44180 + (1));
i__38043__auto___44180 = G__44181;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44121__auto___44178))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44121__auto___44178){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44121__auto___44178),args);
});})(g__44121__auto___44178))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__44121__auto___44178){
return (function (seq44160){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44160));
});})(g__44121__auto___44178))
;


var g__44121__auto___44182 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__44121__auto___44182){
return (function cljs$spec$impl$gen$list(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44183 = arguments.length;
var i__38043__auto___44184 = (0);
while(true){
if((i__38043__auto___44184 < len__38042__auto___44183)){
args__38049__auto__.push((arguments[i__38043__auto___44184]));

var G__44185 = (i__38043__auto___44184 + (1));
i__38043__auto___44184 = G__44185;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44121__auto___44182))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44121__auto___44182){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44121__auto___44182),args);
});})(g__44121__auto___44182))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__44121__auto___44182){
return (function (seq44161){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44161));
});})(g__44121__auto___44182))
;


var g__44121__auto___44186 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__44121__auto___44186){
return (function cljs$spec$impl$gen$map(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44187 = arguments.length;
var i__38043__auto___44188 = (0);
while(true){
if((i__38043__auto___44188 < len__38042__auto___44187)){
args__38049__auto__.push((arguments[i__38043__auto___44188]));

var G__44189 = (i__38043__auto___44188 + (1));
i__38043__auto___44188 = G__44189;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44121__auto___44186))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44121__auto___44186){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44121__auto___44186),args);
});})(g__44121__auto___44186))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__44121__auto___44186){
return (function (seq44162){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44162));
});})(g__44121__auto___44186))
;


var g__44121__auto___44190 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__44121__auto___44190){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44191 = arguments.length;
var i__38043__auto___44192 = (0);
while(true){
if((i__38043__auto___44192 < len__38042__auto___44191)){
args__38049__auto__.push((arguments[i__38043__auto___44192]));

var G__44193 = (i__38043__auto___44192 + (1));
i__38043__auto___44192 = G__44193;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44121__auto___44190))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44121__auto___44190){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44121__auto___44190),args);
});})(g__44121__auto___44190))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__44121__auto___44190){
return (function (seq44163){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44163));
});})(g__44121__auto___44190))
;


var g__44121__auto___44194 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__44121__auto___44194){
return (function cljs$spec$impl$gen$set(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44195 = arguments.length;
var i__38043__auto___44196 = (0);
while(true){
if((i__38043__auto___44196 < len__38042__auto___44195)){
args__38049__auto__.push((arguments[i__38043__auto___44196]));

var G__44197 = (i__38043__auto___44196 + (1));
i__38043__auto___44196 = G__44197;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44121__auto___44194))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44121__auto___44194){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44121__auto___44194),args);
});})(g__44121__auto___44194))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__44121__auto___44194){
return (function (seq44164){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44164));
});})(g__44121__auto___44194))
;


var g__44121__auto___44198 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__44121__auto___44198){
return (function cljs$spec$impl$gen$vector(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44199 = arguments.length;
var i__38043__auto___44200 = (0);
while(true){
if((i__38043__auto___44200 < len__38042__auto___44199)){
args__38049__auto__.push((arguments[i__38043__auto___44200]));

var G__44201 = (i__38043__auto___44200 + (1));
i__38043__auto___44200 = G__44201;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44121__auto___44198))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44121__auto___44198){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44121__auto___44198),args);
});})(g__44121__auto___44198))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__44121__auto___44198){
return (function (seq44165){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44165));
});})(g__44121__auto___44198))
;


var g__44121__auto___44202 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__44121__auto___44202){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44203 = arguments.length;
var i__38043__auto___44204 = (0);
while(true){
if((i__38043__auto___44204 < len__38042__auto___44203)){
args__38049__auto__.push((arguments[i__38043__auto___44204]));

var G__44205 = (i__38043__auto___44204 + (1));
i__38043__auto___44204 = G__44205;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44121__auto___44202))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44121__auto___44202){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44121__auto___44202),args);
});})(g__44121__auto___44202))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__44121__auto___44202){
return (function (seq44166){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44166));
});})(g__44121__auto___44202))
;


var g__44121__auto___44206 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__44121__auto___44206){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44207 = arguments.length;
var i__38043__auto___44208 = (0);
while(true){
if((i__38043__auto___44208 < len__38042__auto___44207)){
args__38049__auto__.push((arguments[i__38043__auto___44208]));

var G__44209 = (i__38043__auto___44208 + (1));
i__38043__auto___44208 = G__44209;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44121__auto___44206))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44121__auto___44206){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44121__auto___44206),args);
});})(g__44121__auto___44206))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__44121__auto___44206){
return (function (seq44167){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44167));
});})(g__44121__auto___44206))
;


var g__44121__auto___44210 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__44121__auto___44210){
return (function cljs$spec$impl$gen$elements(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44211 = arguments.length;
var i__38043__auto___44212 = (0);
while(true){
if((i__38043__auto___44212 < len__38042__auto___44211)){
args__38049__auto__.push((arguments[i__38043__auto___44212]));

var G__44213 = (i__38043__auto___44212 + (1));
i__38043__auto___44212 = G__44213;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44121__auto___44210))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44121__auto___44210){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44121__auto___44210),args);
});})(g__44121__auto___44210))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__44121__auto___44210){
return (function (seq44168){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44168));
});})(g__44121__auto___44210))
;


var g__44121__auto___44214 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__44121__auto___44214){
return (function cljs$spec$impl$gen$bind(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44215 = arguments.length;
var i__38043__auto___44216 = (0);
while(true){
if((i__38043__auto___44216 < len__38042__auto___44215)){
args__38049__auto__.push((arguments[i__38043__auto___44216]));

var G__44217 = (i__38043__auto___44216 + (1));
i__38043__auto___44216 = G__44217;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44121__auto___44214))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44121__auto___44214){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44121__auto___44214),args);
});})(g__44121__auto___44214))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__44121__auto___44214){
return (function (seq44169){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44169));
});})(g__44121__auto___44214))
;


var g__44121__auto___44218 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__44121__auto___44218){
return (function cljs$spec$impl$gen$choose(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44219 = arguments.length;
var i__38043__auto___44220 = (0);
while(true){
if((i__38043__auto___44220 < len__38042__auto___44219)){
args__38049__auto__.push((arguments[i__38043__auto___44220]));

var G__44221 = (i__38043__auto___44220 + (1));
i__38043__auto___44220 = G__44221;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44121__auto___44218))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44121__auto___44218){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44121__auto___44218),args);
});})(g__44121__auto___44218))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__44121__auto___44218){
return (function (seq44170){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44170));
});})(g__44121__auto___44218))
;


var g__44121__auto___44222 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__44121__auto___44222){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44223 = arguments.length;
var i__38043__auto___44224 = (0);
while(true){
if((i__38043__auto___44224 < len__38042__auto___44223)){
args__38049__auto__.push((arguments[i__38043__auto___44224]));

var G__44225 = (i__38043__auto___44224 + (1));
i__38043__auto___44224 = G__44225;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44121__auto___44222))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44121__auto___44222){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44121__auto___44222),args);
});})(g__44121__auto___44222))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__44121__auto___44222){
return (function (seq44171){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44171));
});})(g__44121__auto___44222))
;


var g__44121__auto___44226 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__44121__auto___44226){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44227 = arguments.length;
var i__38043__auto___44228 = (0);
while(true){
if((i__38043__auto___44228 < len__38042__auto___44227)){
args__38049__auto__.push((arguments[i__38043__auto___44228]));

var G__44229 = (i__38043__auto___44228 + (1));
i__38043__auto___44228 = G__44229;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44121__auto___44226))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44121__auto___44226){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44121__auto___44226),args);
});})(g__44121__auto___44226))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__44121__auto___44226){
return (function (seq44172){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44172));
});})(g__44121__auto___44226))
;


var g__44121__auto___44230 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__44121__auto___44230){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44231 = arguments.length;
var i__38043__auto___44232 = (0);
while(true){
if((i__38043__auto___44232 < len__38042__auto___44231)){
args__38049__auto__.push((arguments[i__38043__auto___44232]));

var G__44233 = (i__38043__auto___44232 + (1));
i__38043__auto___44232 = G__44233;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44121__auto___44230))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44121__auto___44230){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44121__auto___44230),args);
});})(g__44121__auto___44230))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__44121__auto___44230){
return (function (seq44173){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44173));
});})(g__44121__auto___44230))
;


var g__44121__auto___44234 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__44121__auto___44234){
return (function cljs$spec$impl$gen$sample(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44235 = arguments.length;
var i__38043__auto___44236 = (0);
while(true){
if((i__38043__auto___44236 < len__38042__auto___44235)){
args__38049__auto__.push((arguments[i__38043__auto___44236]));

var G__44237 = (i__38043__auto___44236 + (1));
i__38043__auto___44236 = G__44237;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44121__auto___44234))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44121__auto___44234){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44121__auto___44234),args);
});})(g__44121__auto___44234))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__44121__auto___44234){
return (function (seq44174){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44174));
});})(g__44121__auto___44234))
;


var g__44121__auto___44238 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__44121__auto___44238){
return (function cljs$spec$impl$gen$return(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44239 = arguments.length;
var i__38043__auto___44240 = (0);
while(true){
if((i__38043__auto___44240 < len__38042__auto___44239)){
args__38049__auto__.push((arguments[i__38043__auto___44240]));

var G__44241 = (i__38043__auto___44240 + (1));
i__38043__auto___44240 = G__44241;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44121__auto___44238))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44121__auto___44238){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44121__auto___44238),args);
});})(g__44121__auto___44238))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__44121__auto___44238){
return (function (seq44175){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44175));
});})(g__44121__auto___44238))
;


var g__44121__auto___44242 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__44121__auto___44242){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44243 = arguments.length;
var i__38043__auto___44244 = (0);
while(true){
if((i__38043__auto___44244 < len__38042__auto___44243)){
args__38049__auto__.push((arguments[i__38043__auto___44244]));

var G__44245 = (i__38043__auto___44244 + (1));
i__38043__auto___44244 = G__44245;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44121__auto___44242))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44121__auto___44242){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44121__auto___44242),args);
});})(g__44121__auto___44242))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__44121__auto___44242){
return (function (seq44176){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44176));
});})(g__44121__auto___44242))
;


var g__44121__auto___44246 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__44121__auto___44246){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44247 = arguments.length;
var i__38043__auto___44248 = (0);
while(true){
if((i__38043__auto___44248 < len__38042__auto___44247)){
args__38049__auto__.push((arguments[i__38043__auto___44248]));

var G__44249 = (i__38043__auto___44248 + (1));
i__38043__auto___44248 = G__44249;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44121__auto___44246))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44121__auto___44246){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44121__auto___44246),args);
});})(g__44121__auto___44246))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__44121__auto___44246){
return (function (seq44177){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44177));
});})(g__44121__auto___44246))
;

var g__44134__auto___44271 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__44134__auto___44271){
return (function cljs$spec$impl$gen$any(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44272 = arguments.length;
var i__38043__auto___44273 = (0);
while(true){
if((i__38043__auto___44273 < len__38042__auto___44272)){
args__38049__auto__.push((arguments[i__38043__auto___44273]));

var G__44274 = (i__38043__auto___44273 + (1));
i__38043__auto___44273 = G__44274;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44134__auto___44271))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44134__auto___44271){
return (function (args){
return cljs.core.deref.call(null,g__44134__auto___44271);
});})(g__44134__auto___44271))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__44134__auto___44271){
return (function (seq44250){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44250));
});})(g__44134__auto___44271))
;


var g__44134__auto___44275 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__44134__auto___44275){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44276 = arguments.length;
var i__38043__auto___44277 = (0);
while(true){
if((i__38043__auto___44277 < len__38042__auto___44276)){
args__38049__auto__.push((arguments[i__38043__auto___44277]));

var G__44278 = (i__38043__auto___44277 + (1));
i__38043__auto___44277 = G__44278;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44134__auto___44275))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44134__auto___44275){
return (function (args){
return cljs.core.deref.call(null,g__44134__auto___44275);
});})(g__44134__auto___44275))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__44134__auto___44275){
return (function (seq44251){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44251));
});})(g__44134__auto___44275))
;


var g__44134__auto___44279 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__44134__auto___44279){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44280 = arguments.length;
var i__38043__auto___44281 = (0);
while(true){
if((i__38043__auto___44281 < len__38042__auto___44280)){
args__38049__auto__.push((arguments[i__38043__auto___44281]));

var G__44282 = (i__38043__auto___44281 + (1));
i__38043__auto___44281 = G__44282;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44134__auto___44279))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44134__auto___44279){
return (function (args){
return cljs.core.deref.call(null,g__44134__auto___44279);
});})(g__44134__auto___44279))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__44134__auto___44279){
return (function (seq44252){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44252));
});})(g__44134__auto___44279))
;


var g__44134__auto___44283 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__44134__auto___44283){
return (function cljs$spec$impl$gen$char(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44284 = arguments.length;
var i__38043__auto___44285 = (0);
while(true){
if((i__38043__auto___44285 < len__38042__auto___44284)){
args__38049__auto__.push((arguments[i__38043__auto___44285]));

var G__44286 = (i__38043__auto___44285 + (1));
i__38043__auto___44285 = G__44286;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44134__auto___44283))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44134__auto___44283){
return (function (args){
return cljs.core.deref.call(null,g__44134__auto___44283);
});})(g__44134__auto___44283))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__44134__auto___44283){
return (function (seq44253){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44253));
});})(g__44134__auto___44283))
;


var g__44134__auto___44287 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__44134__auto___44287){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44288 = arguments.length;
var i__38043__auto___44289 = (0);
while(true){
if((i__38043__auto___44289 < len__38042__auto___44288)){
args__38049__auto__.push((arguments[i__38043__auto___44289]));

var G__44290 = (i__38043__auto___44289 + (1));
i__38043__auto___44289 = G__44290;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44134__auto___44287))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44134__auto___44287){
return (function (args){
return cljs.core.deref.call(null,g__44134__auto___44287);
});})(g__44134__auto___44287))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__44134__auto___44287){
return (function (seq44254){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44254));
});})(g__44134__auto___44287))
;


var g__44134__auto___44291 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__44134__auto___44291){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44292 = arguments.length;
var i__38043__auto___44293 = (0);
while(true){
if((i__38043__auto___44293 < len__38042__auto___44292)){
args__38049__auto__.push((arguments[i__38043__auto___44293]));

var G__44294 = (i__38043__auto___44293 + (1));
i__38043__auto___44293 = G__44294;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44134__auto___44291))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44134__auto___44291){
return (function (args){
return cljs.core.deref.call(null,g__44134__auto___44291);
});})(g__44134__auto___44291))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__44134__auto___44291){
return (function (seq44255){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44255));
});})(g__44134__auto___44291))
;


var g__44134__auto___44295 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__44134__auto___44295){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44296 = arguments.length;
var i__38043__auto___44297 = (0);
while(true){
if((i__38043__auto___44297 < len__38042__auto___44296)){
args__38049__auto__.push((arguments[i__38043__auto___44297]));

var G__44298 = (i__38043__auto___44297 + (1));
i__38043__auto___44297 = G__44298;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44134__auto___44295))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44134__auto___44295){
return (function (args){
return cljs.core.deref.call(null,g__44134__auto___44295);
});})(g__44134__auto___44295))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__44134__auto___44295){
return (function (seq44256){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44256));
});})(g__44134__auto___44295))
;


var g__44134__auto___44299 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__44134__auto___44299){
return (function cljs$spec$impl$gen$double(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44300 = arguments.length;
var i__38043__auto___44301 = (0);
while(true){
if((i__38043__auto___44301 < len__38042__auto___44300)){
args__38049__auto__.push((arguments[i__38043__auto___44301]));

var G__44302 = (i__38043__auto___44301 + (1));
i__38043__auto___44301 = G__44302;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44134__auto___44299))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44134__auto___44299){
return (function (args){
return cljs.core.deref.call(null,g__44134__auto___44299);
});})(g__44134__auto___44299))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__44134__auto___44299){
return (function (seq44257){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44257));
});})(g__44134__auto___44299))
;


var g__44134__auto___44303 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__44134__auto___44303){
return (function cljs$spec$impl$gen$int(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44304 = arguments.length;
var i__38043__auto___44305 = (0);
while(true){
if((i__38043__auto___44305 < len__38042__auto___44304)){
args__38049__auto__.push((arguments[i__38043__auto___44305]));

var G__44306 = (i__38043__auto___44305 + (1));
i__38043__auto___44305 = G__44306;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44134__auto___44303))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44134__auto___44303){
return (function (args){
return cljs.core.deref.call(null,g__44134__auto___44303);
});})(g__44134__auto___44303))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__44134__auto___44303){
return (function (seq44258){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44258));
});})(g__44134__auto___44303))
;


var g__44134__auto___44307 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__44134__auto___44307){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44308 = arguments.length;
var i__38043__auto___44309 = (0);
while(true){
if((i__38043__auto___44309 < len__38042__auto___44308)){
args__38049__auto__.push((arguments[i__38043__auto___44309]));

var G__44310 = (i__38043__auto___44309 + (1));
i__38043__auto___44309 = G__44310;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44134__auto___44307))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44134__auto___44307){
return (function (args){
return cljs.core.deref.call(null,g__44134__auto___44307);
});})(g__44134__auto___44307))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__44134__auto___44307){
return (function (seq44259){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44259));
});})(g__44134__auto___44307))
;


var g__44134__auto___44311 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__44134__auto___44311){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44312 = arguments.length;
var i__38043__auto___44313 = (0);
while(true){
if((i__38043__auto___44313 < len__38042__auto___44312)){
args__38049__auto__.push((arguments[i__38043__auto___44313]));

var G__44314 = (i__38043__auto___44313 + (1));
i__38043__auto___44313 = G__44314;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44134__auto___44311))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44134__auto___44311){
return (function (args){
return cljs.core.deref.call(null,g__44134__auto___44311);
});})(g__44134__auto___44311))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__44134__auto___44311){
return (function (seq44260){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44260));
});})(g__44134__auto___44311))
;


var g__44134__auto___44315 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__44134__auto___44315){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44316 = arguments.length;
var i__38043__auto___44317 = (0);
while(true){
if((i__38043__auto___44317 < len__38042__auto___44316)){
args__38049__auto__.push((arguments[i__38043__auto___44317]));

var G__44318 = (i__38043__auto___44317 + (1));
i__38043__auto___44317 = G__44318;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44134__auto___44315))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44134__auto___44315){
return (function (args){
return cljs.core.deref.call(null,g__44134__auto___44315);
});})(g__44134__auto___44315))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__44134__auto___44315){
return (function (seq44261){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44261));
});})(g__44134__auto___44315))
;


var g__44134__auto___44319 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__44134__auto___44319){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44320 = arguments.length;
var i__38043__auto___44321 = (0);
while(true){
if((i__38043__auto___44321 < len__38042__auto___44320)){
args__38049__auto__.push((arguments[i__38043__auto___44321]));

var G__44322 = (i__38043__auto___44321 + (1));
i__38043__auto___44321 = G__44322;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44134__auto___44319))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44134__auto___44319){
return (function (args){
return cljs.core.deref.call(null,g__44134__auto___44319);
});})(g__44134__auto___44319))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__44134__auto___44319){
return (function (seq44262){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44262));
});})(g__44134__auto___44319))
;


var g__44134__auto___44323 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__44134__auto___44323){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44324 = arguments.length;
var i__38043__auto___44325 = (0);
while(true){
if((i__38043__auto___44325 < len__38042__auto___44324)){
args__38049__auto__.push((arguments[i__38043__auto___44325]));

var G__44326 = (i__38043__auto___44325 + (1));
i__38043__auto___44325 = G__44326;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44134__auto___44323))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44134__auto___44323){
return (function (args){
return cljs.core.deref.call(null,g__44134__auto___44323);
});})(g__44134__auto___44323))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__44134__auto___44323){
return (function (seq44263){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44263));
});})(g__44134__auto___44323))
;


var g__44134__auto___44327 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__44134__auto___44327){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44328 = arguments.length;
var i__38043__auto___44329 = (0);
while(true){
if((i__38043__auto___44329 < len__38042__auto___44328)){
args__38049__auto__.push((arguments[i__38043__auto___44329]));

var G__44330 = (i__38043__auto___44329 + (1));
i__38043__auto___44329 = G__44330;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44134__auto___44327))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44134__auto___44327){
return (function (args){
return cljs.core.deref.call(null,g__44134__auto___44327);
});})(g__44134__auto___44327))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__44134__auto___44327){
return (function (seq44264){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44264));
});})(g__44134__auto___44327))
;


var g__44134__auto___44331 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__44134__auto___44331){
return (function cljs$spec$impl$gen$string(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44332 = arguments.length;
var i__38043__auto___44333 = (0);
while(true){
if((i__38043__auto___44333 < len__38042__auto___44332)){
args__38049__auto__.push((arguments[i__38043__auto___44333]));

var G__44334 = (i__38043__auto___44333 + (1));
i__38043__auto___44333 = G__44334;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44134__auto___44331))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44134__auto___44331){
return (function (args){
return cljs.core.deref.call(null,g__44134__auto___44331);
});})(g__44134__auto___44331))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__44134__auto___44331){
return (function (seq44265){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44265));
});})(g__44134__auto___44331))
;


var g__44134__auto___44335 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__44134__auto___44335){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44336 = arguments.length;
var i__38043__auto___44337 = (0);
while(true){
if((i__38043__auto___44337 < len__38042__auto___44336)){
args__38049__auto__.push((arguments[i__38043__auto___44337]));

var G__44338 = (i__38043__auto___44337 + (1));
i__38043__auto___44337 = G__44338;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44134__auto___44335))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44134__auto___44335){
return (function (args){
return cljs.core.deref.call(null,g__44134__auto___44335);
});})(g__44134__auto___44335))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__44134__auto___44335){
return (function (seq44266){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44266));
});})(g__44134__auto___44335))
;


var g__44134__auto___44339 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__44134__auto___44339){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44340 = arguments.length;
var i__38043__auto___44341 = (0);
while(true){
if((i__38043__auto___44341 < len__38042__auto___44340)){
args__38049__auto__.push((arguments[i__38043__auto___44341]));

var G__44342 = (i__38043__auto___44341 + (1));
i__38043__auto___44341 = G__44342;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44134__auto___44339))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44134__auto___44339){
return (function (args){
return cljs.core.deref.call(null,g__44134__auto___44339);
});})(g__44134__auto___44339))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__44134__auto___44339){
return (function (seq44267){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44267));
});})(g__44134__auto___44339))
;


var g__44134__auto___44343 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__44134__auto___44343){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44344 = arguments.length;
var i__38043__auto___44345 = (0);
while(true){
if((i__38043__auto___44345 < len__38042__auto___44344)){
args__38049__auto__.push((arguments[i__38043__auto___44345]));

var G__44346 = (i__38043__auto___44345 + (1));
i__38043__auto___44345 = G__44346;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44134__auto___44343))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44134__auto___44343){
return (function (args){
return cljs.core.deref.call(null,g__44134__auto___44343);
});})(g__44134__auto___44343))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__44134__auto___44343){
return (function (seq44268){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44268));
});})(g__44134__auto___44343))
;


var g__44134__auto___44347 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__44134__auto___44347){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44348 = arguments.length;
var i__38043__auto___44349 = (0);
while(true){
if((i__38043__auto___44349 < len__38042__auto___44348)){
args__38049__auto__.push((arguments[i__38043__auto___44349]));

var G__44350 = (i__38043__auto___44349 + (1));
i__38043__auto___44349 = G__44350;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44134__auto___44347))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44134__auto___44347){
return (function (args){
return cljs.core.deref.call(null,g__44134__auto___44347);
});})(g__44134__auto___44347))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__44134__auto___44347){
return (function (seq44269){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44269));
});})(g__44134__auto___44347))
;


var g__44134__auto___44351 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__44134__auto___44351){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44352 = arguments.length;
var i__38043__auto___44353 = (0);
while(true){
if((i__38043__auto___44353 < len__38042__auto___44352)){
args__38049__auto__.push((arguments[i__38043__auto___44353]));

var G__44354 = (i__38043__auto___44353 + (1));
i__38043__auto___44353 = G__44354;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});})(g__44134__auto___44351))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44134__auto___44351){
return (function (args){
return cljs.core.deref.call(null,g__44134__auto___44351);
});})(g__44134__auto___44351))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__44134__auto___44351){
return (function (seq44270){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44270));
});})(g__44134__auto___44351))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__38049__auto__ = [];
var len__38042__auto___44357 = arguments.length;
var i__38043__auto___44358 = (0);
while(true){
if((i__38043__auto___44358 < len__38042__auto___44357)){
args__38049__auto__.push((arguments[i__38043__auto___44358]));

var G__44359 = (i__38043__auto___44358 + (1));
i__38043__auto___44358 = G__44359;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__44355_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__44355_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq44356){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44356));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__44360_SHARP_){
return (new Date(p1__44360_SHARP_));
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