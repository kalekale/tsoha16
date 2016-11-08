// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async15100 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15100 = (function (fn_handler,f,meta15101){
this.fn_handler = fn_handler;
this.f = f;
this.meta15101 = meta15101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15102,meta15101__$1){
var self__ = this;
var _15102__$1 = this;
return (new cljs.core.async.t_cljs$core$async15100(self__.fn_handler,self__.f,meta15101__$1));
});

cljs.core.async.t_cljs$core$async15100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15102){
var self__ = this;
var _15102__$1 = this;
return self__.meta15101;
});

cljs.core.async.t_cljs$core$async15100.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15100.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15100.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15100.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$fn_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f], null)))], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$meta15101], null);
});

cljs.core.async.t_cljs$core$async15100.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15100";

cljs.core.async.t_cljs$core$async15100.cljs$lang$ctorPrWriter = (function (this__6910__auto__,writer__6911__auto__,opt__6912__auto__){
return cljs.core._write(writer__6911__auto__,"cljs.core.async/t_cljs$core$async15100");
});

cljs.core.async.__GT_t_cljs$core$async15100 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async15100(fn_handler__$1,f__$1,meta15101){
return (new cljs.core.async.t_cljs$core$async15100(fn_handler__$1,f__$1,meta15101));
});

}

return (new cljs.core.async.t_cljs$core$async15100(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Creates a channel with an optional buffer. If buf-or-n is a number,
 *   will create and use a fixed buffer of that size.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args15103 = [];
var len__7379__auto___15106 = arguments.length;
var i__7380__auto___15107 = (0);
while(true){
if((i__7380__auto___15107 < len__7379__auto___15106)){
args15103.push((arguments[i__7380__auto___15107]));

var G__15108 = (i__7380__auto___15107 + (1));
i__7380__auto___15107 = G__15108;
continue;
} else {
}
break;
}

var G__15105 = args15103.length;
switch (G__15105) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15103.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 1;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str("nil")].join('')));

});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args15110 = [];
var len__7379__auto___15113 = arguments.length;
var i__7380__auto___15114 = (0);
while(true){
if((i__7380__auto___15114 < len__7379__auto___15113)){
args15110.push((arguments[i__7380__auto___15114]));

var G__15115 = (i__7380__auto___15114 + (1));
i__7380__auto___15114 = G__15115;
continue;
} else {
}
break;
}

var G__15112 = args15110.length;
switch (G__15112) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15110.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_15117 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15117) : fn1.call(null,val_15117));
} else {
cljs.core.async.impl.dispatch.run(((function (val_15117,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15117) : fn1.call(null,val_15117));
});})(val_15117,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(){
return null;
});
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str("nil")].join('')));

});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args15118 = [];
var len__7379__auto___15121 = arguments.length;
var i__7380__auto___15122 = (0);
while(true){
if((i__7380__auto___15122 < len__7379__auto___15121)){
args15118.push((arguments[i__7380__auto___15122]));

var G__15123 = (i__7380__auto___15122 + (1));
i__7380__auto___15122 = G__15123;
continue;
} else {
}
break;
}

var G__15120 = args15118.length;
switch (G__15120) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15118.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(port,val,cljs.core.async.nop);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn0){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn0,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn0,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));
if(cljs.core.truth_((function (){var and__6292__auto__ = ret;
if(cljs.core.truth_(and__6292__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else {
return and__6292__auto__;
}
})())){
if(cljs.core.truth_(on_caller_QMARK_)){
(fn0.cljs$core$IFn$_invoke$arity$0 ? fn0.cljs$core$IFn$_invoke$arity$0() : fn0.call(null));
} else {
cljs.core.async.impl.dispatch.run(fn0);
}
} else {
}

return null;
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7219__auto___15125 = n;
var x_15126 = (0);
while(true){
if((x_15126 < n__7219__auto___15125)){
(a[x_15126] = (0));

var G__15127 = (x_15126 + (1));
x_15126 = G__15127;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__15128 = (i + (1));
i = G__15128;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async15132 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15132 = (function (alt_flag,flag,meta15133){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta15133 = meta15133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15134,meta15133__$1){
var self__ = this;
var _15134__$1 = this;
return (new cljs.core.async.t_cljs$core$async15132(self__.alt_flag,self__.flag,meta15133__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15132.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15134){
var self__ = this;
var _15134__$1 = this;
return self__.meta15133;
});})(flag))
;

cljs.core.async.t_cljs$core$async15132.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15132.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async15132.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15132.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta15133], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15132.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15132.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15132";

cljs.core.async.t_cljs$core$async15132.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6910__auto__,writer__6911__auto__,opt__6912__auto__){
return cljs.core._write(writer__6911__auto__,"cljs.core.async/t_cljs$core$async15132");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async15132 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15132(alt_flag__$1,flag__$1,meta15133){
return (new cljs.core.async.t_cljs$core$async15132(alt_flag__$1,flag__$1,meta15133));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15132(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async15138 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15138 = (function (alt_handler,flag,cb,meta15139){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta15139 = meta15139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15140,meta15139__$1){
var self__ = this;
var _15140__$1 = this;
return (new cljs.core.async.t_cljs$core$async15138(self__.alt_handler,self__.flag,self__.cb,meta15139__$1));
});

cljs.core.async.t_cljs$core$async15138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15140){
var self__ = this;
var _15140__$1 = this;
return self__.meta15139;
});

cljs.core.async.t_cljs$core$async15138.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15138.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async15138.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta15139], null);
});

cljs.core.async.t_cljs$core$async15138.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15138";

cljs.core.async.t_cljs$core$async15138.cljs$lang$ctorPrWriter = (function (this__6910__auto__,writer__6911__auto__,opt__6912__auto__){
return cljs.core._write(writer__6911__auto__,"cljs.core.async/t_cljs$core$async15138");
});

cljs.core.async.__GT_t_cljs$core$async15138 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15138(alt_handler__$1,flag__$1,cb__$1,meta15139){
return (new cljs.core.async.t_cljs$core$async15138(alt_handler__$1,flag__$1,cb__$1,meta15139));
});

}

return (new cljs.core.async.t_cljs$core$async15138(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){
var G__15144 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15144) : fret.call(null,G__15144));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15141_SHARP_){
var G__15145 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15141_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15145) : fret.call(null,G__15145));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6304__auto__ = wport;
if(cljs.core.truth_(or__6304__auto__)){
return or__6304__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15146 = (i + (1));
i = G__15146;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6304__auto__ = ret;
if(cljs.core.truth_(or__6304__auto__)){
return or__6304__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__6292__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6292__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6292__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 *   inside a (go ...) block. ports is a vector of channel endpoints, which
 *   can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and nil for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7386__auto__ = [];
var len__7379__auto___15152 = arguments.length;
var i__7380__auto___15153 = (0);
while(true){
if((i__7380__auto___15153 < len__7379__auto___15152)){
args__7386__auto__.push((arguments[i__7380__auto___15153]));

var G__15154 = (i__7380__auto___15153 + (1));
i__7380__auto___15153 = G__15154;
continue;
} else {
}
break;
}

var argseq__7387__auto__ = ((((1) < args__7386__auto__.length))?(new cljs.core.IndexedSeq(args__7386__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7387__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15149){
var map__15150 = p__15149;
var map__15150__$1 = ((((!((map__15150 == null)))?((((map__15150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15150):map__15150);
var opts = map__15150__$1;
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str("nil")].join('')));

});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15147){
var G__15148 = cljs.core.first(seq15147);
var seq15147__$1 = cljs.core.next(seq15147);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15148,seq15147__$1);
});

/**
 * Takes a function and a source channel, and returns a channel which
 *   contains the values produced by applying f to each value taken from
 *   the source channel
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15164 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15164 = (function (map_LT_,f,ch,meta15165){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15165 = meta15165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15166,meta15165__$1){
var self__ = this;
var _15166__$1 = this;
return (new cljs.core.async.t_cljs$core$async15164(self__.map_LT_,self__.f,self__.ch,meta15165__$1));
});

cljs.core.async.t_cljs$core$async15164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15166){
var self__ = this;
var _15166__$1 = this;
return self__.meta15165;
});

cljs.core.async.t_cljs$core$async15164.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15164.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15164.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15164.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async15167 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15167 = (function (map_LT_,f,ch,meta15165,_,fn1,meta15168){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15165 = meta15165;
this._ = _;
this.fn1 = fn1;
this.meta15168 = meta15168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15169,meta15168__$1){
var self__ = this;
var _15169__$1 = this;
return (new cljs.core.async.t_cljs$core$async15167(self__.map_LT_,self__.f,self__.ch,self__.meta15165,self__._,self__.fn1,meta15168__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15167.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15169){
var self__ = this;
var _15169__$1 = this;
return self__.meta15168;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15167.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15167.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15167.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15167.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15155_SHARP_){
var G__15170 = (((p1__15155_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__15155_SHARP_) : self__.f.call(null,p1__15155_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__15170) : f1.call(null,G__15170));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15167.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Takes a function and a source channel, and returns a channel which\n  contains the values produced by applying f to each value taken from\n  the source channel"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15165,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async15164], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta15168], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15167.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15167";

cljs.core.async.t_cljs$core$async15167.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6910__auto__,writer__6911__auto__,opt__6912__auto__){
return cljs.core._write(writer__6911__auto__,"cljs.core.async/t_cljs$core$async15167");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async15167 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15167(map_LT___$1,f__$1,ch__$1,meta15165__$1,___$2,fn1__$1,meta15168){
return (new cljs.core.async.t_cljs$core$async15167(map_LT___$1,f__$1,ch__$1,meta15165__$1,___$2,fn1__$1,meta15168));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15167(self__.map_LT_,self__.f,self__.ch,self__.meta15165,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6292__auto__ = ret;
if(cljs.core.truth_(and__6292__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6292__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__15171 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__15171) : self__.f.call(null,G__15171));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async15164.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15164.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});

cljs.core.async.t_cljs$core$async15164.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Takes a function and a source channel, and returns a channel which\n  contains the values produced by applying f to each value taken from\n  the source channel"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15165], null);
});

cljs.core.async.t_cljs$core$async15164.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15164";

cljs.core.async.t_cljs$core$async15164.cljs$lang$ctorPrWriter = (function (this__6910__auto__,writer__6911__auto__,opt__6912__auto__){
return cljs.core._write(writer__6911__auto__,"cljs.core.async/t_cljs$core$async15164");
});

cljs.core.async.__GT_t_cljs$core$async15164 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15164(map_LT___$1,f__$1,ch__$1,meta15165){
return (new cljs.core.async.t_cljs$core$async15164(map_LT___$1,f__$1,ch__$1,meta15165));
});

}

return (new cljs.core.async.t_cljs$core$async15164(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Takes a function and a target channel, and returns a channel which
 *   applies f to each value before supplying it to the target channel.
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15175 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15175 = (function (map_GT_,f,ch,meta15176){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta15176 = meta15176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15177,meta15176__$1){
var self__ = this;
var _15177__$1 = this;
return (new cljs.core.async.t_cljs$core$async15175(self__.map_GT_,self__.f,self__.ch,meta15176__$1));
});

cljs.core.async.t_cljs$core$async15175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15177){
var self__ = this;
var _15177__$1 = this;
return self__.meta15176;
});

cljs.core.async.t_cljs$core$async15175.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15175.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15175.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15175.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15175.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15175.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});

cljs.core.async.t_cljs$core$async15175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Takes a function and a target channel, and returns a channel which\n  applies f to each value before supplying it to the target channel."], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15176], null);
});

cljs.core.async.t_cljs$core$async15175.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15175";

cljs.core.async.t_cljs$core$async15175.cljs$lang$ctorPrWriter = (function (this__6910__auto__,writer__6911__auto__,opt__6912__auto__){
return cljs.core._write(writer__6911__auto__,"cljs.core.async/t_cljs$core$async15175");
});

cljs.core.async.__GT_t_cljs$core$async15175 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15175(map_GT___$1,f__$1,ch__$1,meta15176){
return (new cljs.core.async.t_cljs$core$async15175(map_GT___$1,f__$1,ch__$1,meta15176));
});

}

return (new cljs.core.async.t_cljs$core$async15175(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Takes a predicate and a target channel, and returns a channel which
 *   supplies only the values for which the predicate returns true to the
 *   target channel.
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async15181 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15181 = (function (filter_GT_,p,ch,meta15182){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta15182 = meta15182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15183,meta15182__$1){
var self__ = this;
var _15183__$1 = this;
return (new cljs.core.async.t_cljs$core$async15181(self__.filter_GT_,self__.p,self__.ch,meta15182__$1));
});

cljs.core.async.t_cljs$core$async15181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15183){
var self__ = this;
var _15183__$1 = this;
return self__.meta15182;
});

cljs.core.async.t_cljs$core$async15181.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15181.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15181.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15181.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15181.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15181.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else {
return cljs.core.async.impl.channels.box(null);
}
});

cljs.core.async.t_cljs$core$async15181.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Takes a predicate and a target channel, and returns a channel which\n  supplies only the values for which the predicate returns true to the\n  target channel."], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15182], null);
});

cljs.core.async.t_cljs$core$async15181.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15181.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15181";

cljs.core.async.t_cljs$core$async15181.cljs$lang$ctorPrWriter = (function (this__6910__auto__,writer__6911__auto__,opt__6912__auto__){
return cljs.core._write(writer__6911__auto__,"cljs.core.async/t_cljs$core$async15181");
});

cljs.core.async.__GT_t_cljs$core$async15181 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15181(filter_GT___$1,p__$1,ch__$1,meta15182){
return (new cljs.core.async.t_cljs$core$async15181(filter_GT___$1,p__$1,ch__$1,meta15182));
});

}

return (new cljs.core.async.t_cljs$core$async15181(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Takes a predicate and a target channel, and returns a channel which
 *   supplies only the values for which the predicate returns false to the
 *   target channel.
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Takes a predicate and a source channel, and returns a channel which
 *   contains only the values taken from the source channel for which the
 *   predicate returns true. The returned channel will be unbuffered by
 *   default, or a buf-or-n can be supplied. The channel will close
 *   when the source channel closes.
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args15184 = [];
var len__7379__auto___15224 = arguments.length;
var i__7380__auto___15225 = (0);
while(true){
if((i__7380__auto___15225 < len__7379__auto___15224)){
args15184.push((arguments[i__7380__auto___15225]));

var G__15226 = (i__7380__auto___15225 + (1));
i__7380__auto___15225 = G__15226;
continue;
} else {
}
break;
}

var G__15186 = args15184.length;
switch (G__15186) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15184.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15052__auto___15228 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15052__auto___15228,out){
return (function (){
var f__15053__auto__ = (function (){var switch__14943__auto__ = ((function (c__15052__auto___15228,out){
return (function (state_15207){
var state_val_15208 = (state_15207[(1)]);
if((state_val_15208 === (7))){
var inst_15203 = (state_15207[(2)]);
var state_15207__$1 = state_15207;
var statearr_15209_15229 = state_15207__$1;
(statearr_15209_15229[(2)] = inst_15203);

(statearr_15209_15229[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15208 === (1))){
var state_15207__$1 = state_15207;
var statearr_15210_15230 = state_15207__$1;
(statearr_15210_15230[(2)] = null);

(statearr_15210_15230[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15208 === (4))){
var inst_15189 = (state_15207[(5)]);
var inst_15189__$1 = (state_15207[(2)]);
var inst_15190 = (inst_15189__$1 == null);
var state_15207__$1 = (function (){var statearr_15211 = state_15207;
(statearr_15211[(5)] = inst_15189__$1);

return statearr_15211;
})();
if(cljs.core.truth_(inst_15190)){
var statearr_15212_15231 = state_15207__$1;
(statearr_15212_15231[(1)] = (5));

} else {
var statearr_15213_15232 = state_15207__$1;
(statearr_15213_15232[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15208 === (6))){
var inst_15189 = (state_15207[(5)]);
var inst_15194 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15189) : p.call(null,inst_15189));
var state_15207__$1 = state_15207;
if(cljs.core.truth_(inst_15194)){
var statearr_15214_15233 = state_15207__$1;
(statearr_15214_15233[(1)] = (8));

} else {
var statearr_15215_15234 = state_15207__$1;
(statearr_15215_15234[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15208 === (3))){
var inst_15205 = (state_15207[(2)]);
var state_15207__$1 = state_15207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15207__$1,inst_15205);
} else {
if((state_val_15208 === (2))){
var state_15207__$1 = state_15207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15207__$1,(4),ch);
} else {
if((state_val_15208 === (11))){
var inst_15197 = (state_15207[(2)]);
var state_15207__$1 = state_15207;
var statearr_15216_15235 = state_15207__$1;
(statearr_15216_15235[(2)] = inst_15197);

(statearr_15216_15235[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15208 === (9))){
var state_15207__$1 = state_15207;
var statearr_15217_15236 = state_15207__$1;
(statearr_15217_15236[(2)] = null);

(statearr_15217_15236[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15208 === (5))){
var inst_15192 = cljs.core.async.close_BANG_(out);
var state_15207__$1 = state_15207;
var statearr_15218_15237 = state_15207__$1;
(statearr_15218_15237[(2)] = inst_15192);

(statearr_15218_15237[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15208 === (10))){
var inst_15200 = (state_15207[(2)]);
var state_15207__$1 = (function (){var statearr_15219 = state_15207;
(statearr_15219[(6)] = inst_15200);

return statearr_15219;
})();
var statearr_15220_15238 = state_15207__$1;
(statearr_15220_15238[(2)] = null);

(statearr_15220_15238[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15208 === (8))){
var inst_15189 = (state_15207[(5)]);
var state_15207__$1 = state_15207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15207__$1,(11),out,inst_15189);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15052__auto___15228,out))
;
return ((function (switch__14943__auto__,c__15052__auto___15228,out){
return (function() {
var cljs$core$async$state_machine__14944__auto__ = null;
var cljs$core$async$state_machine__14944__auto____0 = (function (){
var statearr_15222 = [null,null,null,null,null,null,null];
(statearr_15222[(0)] = cljs$core$async$state_machine__14944__auto__);

(statearr_15222[(1)] = (1));

return statearr_15222;
});
var cljs$core$async$state_machine__14944__auto____1 = (function (state_15207){
while(true){
var result__14945__auto__ = switch__14943__auto__(state_15207);
if(cljs.core.keyword_identical_QMARK_(result__14945__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14945__auto__;
}
break;
}
});
cljs$core$async$state_machine__14944__auto__ = function(state_15207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14944__auto____1.call(this,state_15207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14944__auto____0;
cljs$core$async$state_machine__14944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14944__auto____1;
return cljs$core$async$state_machine__14944__auto__;
})()
;})(switch__14943__auto__,c__15052__auto___15228,out))
})();
var state__15054__auto__ = (function (){var statearr_15223 = (f__15053__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15053__auto__.cljs$core$IFn$_invoke$arity$0() : f__15053__auto__.call(null));
(statearr_15223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15052__auto___15228);

return statearr_15223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15054__auto__);
});})(c__15052__auto___15228,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Takes a predicate and a source channel, and returns a channel which
 *   contains only the values taken from the source channel for which the
 *   predicate returns false. The returned channel will be unbuffered by
 *   default, or a buf-or-n can be supplied. The channel will close
 *   when the source channel closes.
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args15239 = [];
var len__7379__auto___15242 = arguments.length;
var i__7380__auto___15243 = (0);
while(true){
if((i__7380__auto___15243 < len__7379__auto___15242)){
args15239.push((arguments[i__7380__auto___15243]));

var G__15244 = (i__7380__auto___15243 + (1));
i__7380__auto___15243 = G__15244;
continue;
} else {
}
break;
}

var G__15241 = args15239.length;
switch (G__15241) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15239.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15052__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15052__auto__){
return (function (){
var f__15053__auto__ = (function (){var switch__14943__auto__ = ((function (c__15052__auto__){
return (function (state_15393){
var state_val_15394 = (state_15393[(1)]);
if((state_val_15394 === (7))){
var inst_15389 = (state_15393[(2)]);
var state_15393__$1 = state_15393;
var statearr_15395_15428 = state_15393__$1;
(statearr_15395_15428[(2)] = inst_15389);

(statearr_15395_15428[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15394 === (20))){
var inst_15364 = (state_15393[(5)]);
var inst_15375 = (state_15393[(2)]);
var inst_15376 = cljs.core.next(inst_15364);
var inst_15350 = inst_15376;
var inst_15351 = null;
var inst_15352 = (0);
var inst_15353 = (0);
var state_15393__$1 = (function (){var statearr_15396 = state_15393;
(statearr_15396[(6)] = inst_15353);

(statearr_15396[(7)] = inst_15350);

(statearr_15396[(8)] = inst_15375);

(statearr_15396[(9)] = inst_15351);

(statearr_15396[(10)] = inst_15352);

return statearr_15396;
})();
var statearr_15397_15429 = state_15393__$1;
(statearr_15397_15429[(2)] = null);

(statearr_15397_15429[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15394 === (1))){
var state_15393__$1 = state_15393;
var statearr_15398_15430 = state_15393__$1;
(statearr_15398_15430[(2)] = null);

(statearr_15398_15430[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15394 === (4))){
var inst_15339 = (state_15393[(11)]);
var inst_15339__$1 = (state_15393[(2)]);
var inst_15340 = (inst_15339__$1 == null);
var state_15393__$1 = (function (){var statearr_15402 = state_15393;
(statearr_15402[(11)] = inst_15339__$1);

return statearr_15402;
})();
if(cljs.core.truth_(inst_15340)){
var statearr_15403_15431 = state_15393__$1;
(statearr_15403_15431[(1)] = (5));

} else {
var statearr_15404_15432 = state_15393__$1;
(statearr_15404_15432[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15394 === (15))){
var state_15393__$1 = state_15393;
var statearr_15405_15433 = state_15393__$1;
(statearr_15405_15433[(2)] = null);

(statearr_15405_15433[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15394 === (13))){
var inst_15353 = (state_15393[(6)]);
var inst_15350 = (state_15393[(7)]);
var inst_15351 = (state_15393[(9)]);
var inst_15352 = (state_15393[(10)]);
var inst_15360 = (state_15393[(2)]);
var inst_15361 = (inst_15353 + (1));
var tmp15399 = inst_15350;
var tmp15400 = inst_15351;
var tmp15401 = inst_15352;
var inst_15350__$1 = tmp15399;
var inst_15351__$1 = tmp15400;
var inst_15352__$1 = tmp15401;
var inst_15353__$1 = inst_15361;
var state_15393__$1 = (function (){var statearr_15406 = state_15393;
(statearr_15406[(6)] = inst_15353__$1);

(statearr_15406[(12)] = inst_15360);

(statearr_15406[(7)] = inst_15350__$1);

(statearr_15406[(9)] = inst_15351__$1);

(statearr_15406[(10)] = inst_15352__$1);

return statearr_15406;
})();
var statearr_15407_15434 = state_15393__$1;
(statearr_15407_15434[(2)] = null);

(statearr_15407_15434[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15394 === (6))){
var inst_15339 = (state_15393[(11)]);
var inst_15344 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15339) : f.call(null,inst_15339));
var inst_15349 = cljs.core.seq(inst_15344);
var inst_15350 = inst_15349;
var inst_15351 = null;
var inst_15352 = (0);
var inst_15353 = (0);
var state_15393__$1 = (function (){var statearr_15408 = state_15393;
(statearr_15408[(6)] = inst_15353);

(statearr_15408[(7)] = inst_15350);

(statearr_15408[(9)] = inst_15351);

(statearr_15408[(10)] = inst_15352);

return statearr_15408;
})();
var statearr_15409_15435 = state_15393__$1;
(statearr_15409_15435[(2)] = null);

(statearr_15409_15435[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15394 === (17))){
var inst_15364 = (state_15393[(5)]);
var inst_15368 = cljs.core.chunk_first(inst_15364);
var inst_15369 = cljs.core.chunk_rest(inst_15364);
var inst_15370 = cljs.core.count(inst_15368);
var inst_15350 = inst_15369;
var inst_15351 = inst_15368;
var inst_15352 = inst_15370;
var inst_15353 = (0);
var state_15393__$1 = (function (){var statearr_15410 = state_15393;
(statearr_15410[(6)] = inst_15353);

(statearr_15410[(7)] = inst_15350);

(statearr_15410[(9)] = inst_15351);

(statearr_15410[(10)] = inst_15352);

return statearr_15410;
})();
var statearr_15411_15436 = state_15393__$1;
(statearr_15411_15436[(2)] = null);

(statearr_15411_15436[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15394 === (3))){
var inst_15391 = (state_15393[(2)]);
var state_15393__$1 = state_15393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15393__$1,inst_15391);
} else {
if((state_val_15394 === (12))){
var inst_15384 = (state_15393[(2)]);
var state_15393__$1 = state_15393;
var statearr_15412_15437 = state_15393__$1;
(statearr_15412_15437[(2)] = inst_15384);

(statearr_15412_15437[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15394 === (2))){
var state_15393__$1 = state_15393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15393__$1,(4),in$);
} else {
if((state_val_15394 === (19))){
var inst_15379 = (state_15393[(2)]);
var state_15393__$1 = state_15393;
var statearr_15413_15438 = state_15393__$1;
(statearr_15413_15438[(2)] = inst_15379);

(statearr_15413_15438[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15394 === (11))){
var inst_15350 = (state_15393[(7)]);
var inst_15364 = (state_15393[(5)]);
var inst_15364__$1 = cljs.core.seq(inst_15350);
var state_15393__$1 = (function (){var statearr_15414 = state_15393;
(statearr_15414[(5)] = inst_15364__$1);

return statearr_15414;
})();
if(inst_15364__$1){
var statearr_15415_15439 = state_15393__$1;
(statearr_15415_15439[(1)] = (14));

} else {
var statearr_15416_15440 = state_15393__$1;
(statearr_15416_15440[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15394 === (9))){
var inst_15386 = (state_15393[(2)]);
var state_15393__$1 = (function (){var statearr_15417 = state_15393;
(statearr_15417[(13)] = inst_15386);

return statearr_15417;
})();
var statearr_15418_15441 = state_15393__$1;
(statearr_15418_15441[(2)] = null);

(statearr_15418_15441[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15394 === (5))){
var inst_15342 = cljs.core.async.close_BANG_(out);
var state_15393__$1 = state_15393;
var statearr_15419_15442 = state_15393__$1;
(statearr_15419_15442[(2)] = inst_15342);

(statearr_15419_15442[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15394 === (14))){
var inst_15364 = (state_15393[(5)]);
var inst_15366 = cljs.core.chunked_seq_QMARK_(inst_15364);
var state_15393__$1 = state_15393;
if(inst_15366){
var statearr_15420_15443 = state_15393__$1;
(statearr_15420_15443[(1)] = (17));

} else {
var statearr_15421_15444 = state_15393__$1;
(statearr_15421_15444[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15394 === (16))){
var inst_15382 = (state_15393[(2)]);
var state_15393__$1 = state_15393;
var statearr_15422_15445 = state_15393__$1;
(statearr_15422_15445[(2)] = inst_15382);

(statearr_15422_15445[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15394 === (10))){
var inst_15353 = (state_15393[(6)]);
var inst_15351 = (state_15393[(9)]);
var inst_15358 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15351,inst_15353);
var state_15393__$1 = state_15393;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15393__$1,(13),out,inst_15358);
} else {
if((state_val_15394 === (18))){
var inst_15364 = (state_15393[(5)]);
var inst_15373 = cljs.core.first(inst_15364);
var state_15393__$1 = state_15393;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15393__$1,(20),out,inst_15373);
} else {
if((state_val_15394 === (8))){
var inst_15353 = (state_15393[(6)]);
var inst_15352 = (state_15393[(10)]);
var inst_15355 = (inst_15353 < inst_15352);
var inst_15356 = inst_15355;
var state_15393__$1 = state_15393;
if(cljs.core.truth_(inst_15356)){
var statearr_15423_15446 = state_15393__$1;
(statearr_15423_15446[(1)] = (10));

} else {
var statearr_15424_15447 = state_15393__$1;
(statearr_15424_15447[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15052__auto__))
;
return ((function (switch__14943__auto__,c__15052__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14944__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14944__auto____0 = (function (){
var statearr_15426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15426[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14944__auto__);

(statearr_15426[(1)] = (1));

return statearr_15426;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14944__auto____1 = (function (state_15393){
while(true){
var result__14945__auto__ = switch__14943__auto__(state_15393);
if(cljs.core.keyword_identical_QMARK_(result__14945__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14945__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14944__auto__ = function(state_15393){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14944__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14944__auto____1.call(this,state_15393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14944__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14944__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14944__auto__;
})()
;})(switch__14943__auto__,c__15052__auto__))
})();
var state__15054__auto__ = (function (){var statearr_15427 = (f__15053__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15053__auto__.cljs$core$IFn$_invoke$arity$0() : f__15053__auto__.call(null));
(statearr_15427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15052__auto__);

return statearr_15427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15054__auto__);
});})(c__15052__auto__))
);

return c__15052__auto__;
});
/**
 * Takes a function and a source channel, and returns a channel which
 *   contains the values in each collection produced by applying f to
 *   each value taken from the source channel. f must return a
 *   collection.
 * 
 *   The returned channel will be unbuffered by default, or a buf-or-n
 *   can be supplied. The channel will close when the source channel
 *   closes.
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args15448 = [];
var len__7379__auto___15451 = arguments.length;
var i__7380__auto___15452 = (0);
while(true){
if((i__7380__auto___15452 < len__7379__auto___15451)){
args15448.push((arguments[i__7380__auto___15452]));

var G__15453 = (i__7380__auto___15452 + (1));
i__7380__auto___15452 = G__15453;
continue;
} else {
}
break;
}

var G__15450 = args15448.length;
switch (G__15450) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15448.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Takes a function and a target channel, and returns a channel which
 *   applies f to each value put, then supplies each element of the result
 *   to the target channel. f must return a collection.
 * 
 *   The returned channel will be unbuffered by default, or a buf-or-n
 *   can be supplied. The target channel will be closed when the source
 *   channel closes.
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args15455 = [];
var len__7379__auto___15458 = arguments.length;
var i__7380__auto___15459 = (0);
while(true){
if((i__7380__auto___15459 < len__7379__auto___15458)){
args15455.push((arguments[i__7380__auto___15459]));

var G__15460 = (i__7380__auto___15459 + (1));
i__7380__auto___15459 = G__15460;
continue;
} else {
}
break;
}

var G__15457 = args15455.length;
switch (G__15457) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15455.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel. By default, the to channel will be closed when the
 *   from channel closes, but can be determined by the close?
 *   parameter.
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args15462 = [];
var len__7379__auto___15501 = arguments.length;
var i__7380__auto___15502 = (0);
while(true){
if((i__7380__auto___15502 < len__7379__auto___15501)){
args15462.push((arguments[i__7380__auto___15502]));

var G__15503 = (i__7380__auto___15502 + (1));
i__7380__auto___15502 = G__15503;
continue;
} else {
}
break;
}

var G__15464 = args15462.length;
switch (G__15464) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15462.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15052__auto___15505 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15052__auto___15505){
return (function (){
var f__15053__auto__ = (function (){var switch__14943__auto__ = ((function (c__15052__auto___15505){
return (function (state_15484){
var state_val_15485 = (state_15484[(1)]);
if((state_val_15485 === (7))){
var inst_15480 = (state_15484[(2)]);
var state_15484__$1 = state_15484;
var statearr_15486_15506 = state_15484__$1;
(statearr_15486_15506[(2)] = inst_15480);

(statearr_15486_15506[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15485 === (1))){
var state_15484__$1 = state_15484;
var statearr_15487_15507 = state_15484__$1;
(statearr_15487_15507[(2)] = null);

(statearr_15487_15507[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15485 === (4))){
var inst_15467 = (state_15484[(5)]);
var inst_15467__$1 = (state_15484[(2)]);
var inst_15468 = (inst_15467__$1 == null);
var state_15484__$1 = (function (){var statearr_15488 = state_15484;
(statearr_15488[(5)] = inst_15467__$1);

return statearr_15488;
})();
if(cljs.core.truth_(inst_15468)){
var statearr_15489_15508 = state_15484__$1;
(statearr_15489_15508[(1)] = (5));

} else {
var statearr_15490_15509 = state_15484__$1;
(statearr_15490_15509[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15485 === (6))){
var inst_15467 = (state_15484[(5)]);
var state_15484__$1 = state_15484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15484__$1,(11),to,inst_15467);
} else {
if((state_val_15485 === (3))){
var inst_15482 = (state_15484[(2)]);
var state_15484__$1 = state_15484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15484__$1,inst_15482);
} else {
if((state_val_15485 === (2))){
var state_15484__$1 = state_15484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15484__$1,(4),from);
} else {
if((state_val_15485 === (11))){
var inst_15477 = (state_15484[(2)]);
var state_15484__$1 = (function (){var statearr_15491 = state_15484;
(statearr_15491[(6)] = inst_15477);

return statearr_15491;
})();
var statearr_15492_15510 = state_15484__$1;
(statearr_15492_15510[(2)] = null);

(statearr_15492_15510[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15485 === (9))){
var state_15484__$1 = state_15484;
var statearr_15493_15511 = state_15484__$1;
(statearr_15493_15511[(2)] = null);

(statearr_15493_15511[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15485 === (5))){
var state_15484__$1 = state_15484;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15494_15512 = state_15484__$1;
(statearr_15494_15512[(1)] = (8));

} else {
var statearr_15495_15513 = state_15484__$1;
(statearr_15495_15513[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15485 === (10))){
var inst_15474 = (state_15484[(2)]);
var state_15484__$1 = state_15484;
var statearr_15496_15514 = state_15484__$1;
(statearr_15496_15514[(2)] = inst_15474);

(statearr_15496_15514[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15485 === (8))){
var inst_15471 = cljs.core.async.close_BANG_(to);
var state_15484__$1 = state_15484;
var statearr_15497_15515 = state_15484__$1;
(statearr_15497_15515[(2)] = inst_15471);

(statearr_15497_15515[(1)] = (10));


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
}
}
}
}
});})(c__15052__auto___15505))
;
return ((function (switch__14943__auto__,c__15052__auto___15505){
return (function() {
var cljs$core$async$state_machine__14944__auto__ = null;
var cljs$core$async$state_machine__14944__auto____0 = (function (){
var statearr_15499 = [null,null,null,null,null,null,null];
(statearr_15499[(0)] = cljs$core$async$state_machine__14944__auto__);

(statearr_15499[(1)] = (1));

return statearr_15499;
});
var cljs$core$async$state_machine__14944__auto____1 = (function (state_15484){
while(true){
var result__14945__auto__ = switch__14943__auto__(state_15484);
if(cljs.core.keyword_identical_QMARK_(result__14945__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14945__auto__;
}
break;
}
});
cljs$core$async$state_machine__14944__auto__ = function(state_15484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14944__auto____1.call(this,state_15484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14944__auto____0;
cljs$core$async$state_machine__14944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14944__auto____1;
return cljs$core$async$state_machine__14944__auto__;
})()
;})(switch__14943__auto__,c__15052__auto___15505))
})();
var state__15054__auto__ = (function (){var statearr_15500 = (f__15053__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15053__auto__.cljs$core$IFn$_invoke$arity$0() : f__15053__auto__.call(null));
(statearr_15500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15052__auto___15505);

return statearr_15500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15054__auto__);
});})(c__15052__auto___15505))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args15516 = [];
var len__7379__auto___15558 = arguments.length;
var i__7380__auto___15559 = (0);
while(true){
if((i__7380__auto___15559 < len__7379__auto___15558)){
args15516.push((arguments[i__7380__auto___15559]));

var G__15560 = (i__7380__auto___15559 + (1));
i__7380__auto___15559 = G__15560;
continue;
} else {
}
break;
}

var G__15518 = args15516.length;
switch (G__15518) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15516.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15052__auto___15562 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15052__auto___15562,tc,fc){
return (function (){
var f__15053__auto__ = (function (){var switch__14943__auto__ = ((function (c__15052__auto___15562,tc,fc){
return (function (state_15540){
var state_val_15541 = (state_15540[(1)]);
if((state_val_15541 === (7))){
var inst_15536 = (state_15540[(2)]);
var state_15540__$1 = state_15540;
var statearr_15542_15563 = state_15540__$1;
(statearr_15542_15563[(2)] = inst_15536);

(statearr_15542_15563[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15541 === (1))){
var state_15540__$1 = state_15540;
var statearr_15543_15564 = state_15540__$1;
(statearr_15543_15564[(2)] = null);

(statearr_15543_15564[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15541 === (4))){
var inst_15521 = (state_15540[(5)]);
var inst_15521__$1 = (state_15540[(2)]);
var inst_15522 = (inst_15521__$1 == null);
var state_15540__$1 = (function (){var statearr_15544 = state_15540;
(statearr_15544[(5)] = inst_15521__$1);

return statearr_15544;
})();
if(cljs.core.truth_(inst_15522)){
var statearr_15545_15565 = state_15540__$1;
(statearr_15545_15565[(1)] = (5));

} else {
var statearr_15546_15566 = state_15540__$1;
(statearr_15546_15566[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15541 === (6))){
var inst_15521 = (state_15540[(5)]);
var inst_15527 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15521) : p.call(null,inst_15521));
var state_15540__$1 = state_15540;
if(cljs.core.truth_(inst_15527)){
var statearr_15547_15567 = state_15540__$1;
(statearr_15547_15567[(1)] = (9));

} else {
var statearr_15548_15568 = state_15540__$1;
(statearr_15548_15568[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15541 === (3))){
var inst_15538 = (state_15540[(2)]);
var state_15540__$1 = state_15540;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15540__$1,inst_15538);
} else {
if((state_val_15541 === (2))){
var state_15540__$1 = state_15540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15540__$1,(4),ch);
} else {
if((state_val_15541 === (11))){
var inst_15521 = (state_15540[(5)]);
var inst_15531 = (state_15540[(2)]);
var state_15540__$1 = state_15540;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15540__$1,(8),inst_15531,inst_15521);
} else {
if((state_val_15541 === (9))){
var state_15540__$1 = state_15540;
var statearr_15549_15569 = state_15540__$1;
(statearr_15549_15569[(2)] = tc);

(statearr_15549_15569[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15541 === (5))){
var inst_15524 = cljs.core.async.close_BANG_(tc);
var inst_15525 = cljs.core.async.close_BANG_(fc);
var state_15540__$1 = (function (){var statearr_15550 = state_15540;
(statearr_15550[(6)] = inst_15524);

return statearr_15550;
})();
var statearr_15551_15570 = state_15540__$1;
(statearr_15551_15570[(2)] = inst_15525);

(statearr_15551_15570[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15541 === (10))){
var state_15540__$1 = state_15540;
var statearr_15552_15571 = state_15540__$1;
(statearr_15552_15571[(2)] = fc);

(statearr_15552_15571[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15541 === (8))){
var inst_15533 = (state_15540[(2)]);
var state_15540__$1 = (function (){var statearr_15553 = state_15540;
(statearr_15553[(7)] = inst_15533);

return statearr_15553;
})();
var statearr_15554_15572 = state_15540__$1;
(statearr_15554_15572[(2)] = null);

(statearr_15554_15572[(1)] = (2));


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
}
}
}
}
});})(c__15052__auto___15562,tc,fc))
;
return ((function (switch__14943__auto__,c__15052__auto___15562,tc,fc){
return (function() {
var cljs$core$async$state_machine__14944__auto__ = null;
var cljs$core$async$state_machine__14944__auto____0 = (function (){
var statearr_15556 = [null,null,null,null,null,null,null,null];
(statearr_15556[(0)] = cljs$core$async$state_machine__14944__auto__);

(statearr_15556[(1)] = (1));

return statearr_15556;
});
var cljs$core$async$state_machine__14944__auto____1 = (function (state_15540){
while(true){
var result__14945__auto__ = switch__14943__auto__(state_15540);
if(cljs.core.keyword_identical_QMARK_(result__14945__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14945__auto__;
}
break;
}
});
cljs$core$async$state_machine__14944__auto__ = function(state_15540){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14944__auto____1.call(this,state_15540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14944__auto____0;
cljs$core$async$state_machine__14944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14944__auto____1;
return cljs$core$async$state_machine__14944__auto__;
})()
;})(switch__14943__auto__,c__15052__auto___15562,tc,fc))
})();
var state__15054__auto__ = (function (){var statearr_15557 = (f__15053__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15053__auto__.cljs$core$IFn$_invoke$arity$0() : f__15053__auto__.call(null));
(statearr_15557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15052__auto___15562);

return statearr_15557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15054__auto__);
});})(c__15052__auto___15562,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15052__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15052__auto__){
return (function (){
var f__15053__auto__ = (function (){var switch__14943__auto__ = ((function (c__15052__auto__){
return (function (state_15615){
var state_val_15616 = (state_15615[(1)]);
if((state_val_15616 === (1))){
var inst_15601 = init;
var state_15615__$1 = (function (){var statearr_15617 = state_15615;
(statearr_15617[(5)] = inst_15601);

return statearr_15617;
})();
var statearr_15618_15629 = state_15615__$1;
(statearr_15618_15629[(2)] = null);

(statearr_15618_15629[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15616 === (2))){
var state_15615__$1 = state_15615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15615__$1,(4),ch);
} else {
if((state_val_15616 === (3))){
var inst_15613 = (state_15615[(2)]);
var state_15615__$1 = state_15615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15615__$1,inst_15613);
} else {
if((state_val_15616 === (4))){
var inst_15604 = (state_15615[(6)]);
var inst_15604__$1 = (state_15615[(2)]);
var inst_15605 = (inst_15604__$1 == null);
var state_15615__$1 = (function (){var statearr_15619 = state_15615;
(statearr_15619[(6)] = inst_15604__$1);

return statearr_15619;
})();
if(cljs.core.truth_(inst_15605)){
var statearr_15620_15630 = state_15615__$1;
(statearr_15620_15630[(1)] = (5));

} else {
var statearr_15621_15631 = state_15615__$1;
(statearr_15621_15631[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15616 === (5))){
var inst_15601 = (state_15615[(5)]);
var state_15615__$1 = state_15615;
var statearr_15622_15632 = state_15615__$1;
(statearr_15622_15632[(2)] = inst_15601);

(statearr_15622_15632[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15616 === (6))){
var inst_15604 = (state_15615[(6)]);
var inst_15601 = (state_15615[(5)]);
var inst_15608 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15601,inst_15604) : f.call(null,inst_15601,inst_15604));
var inst_15601__$1 = inst_15608;
var state_15615__$1 = (function (){var statearr_15623 = state_15615;
(statearr_15623[(5)] = inst_15601__$1);

return statearr_15623;
})();
var statearr_15624_15633 = state_15615__$1;
(statearr_15624_15633[(2)] = null);

(statearr_15624_15633[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15616 === (7))){
var inst_15611 = (state_15615[(2)]);
var state_15615__$1 = state_15615;
var statearr_15625_15634 = state_15615__$1;
(statearr_15625_15634[(2)] = inst_15611);

(statearr_15625_15634[(1)] = (3));


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
});})(c__15052__auto__))
;
return ((function (switch__14943__auto__,c__15052__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__14944__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14944__auto____0 = (function (){
var statearr_15627 = [null,null,null,null,null,null,null];
(statearr_15627[(0)] = cljs$core$async$reduce_$_state_machine__14944__auto__);

(statearr_15627[(1)] = (1));

return statearr_15627;
});
var cljs$core$async$reduce_$_state_machine__14944__auto____1 = (function (state_15615){
while(true){
var result__14945__auto__ = switch__14943__auto__(state_15615);
if(cljs.core.keyword_identical_QMARK_(result__14945__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14945__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14944__auto__ = function(state_15615){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14944__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14944__auto____1.call(this,state_15615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14944__auto____0;
cljs$core$async$reduce_$_state_machine__14944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14944__auto____1;
return cljs$core$async$reduce_$_state_machine__14944__auto__;
})()
;})(switch__14943__auto__,c__15052__auto__))
})();
var state__15054__auto__ = (function (){var statearr_15628 = (f__15053__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15053__auto__.cljs$core$IFn$_invoke$arity$0() : f__15053__auto__.call(null));
(statearr_15628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15052__auto__);

return statearr_15628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15054__auto__);
});})(c__15052__auto__))
);

return c__15052__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args15635 = [];
var len__7379__auto___15675 = arguments.length;
var i__7380__auto___15676 = (0);
while(true){
if((i__7380__auto___15676 < len__7379__auto___15675)){
args15635.push((arguments[i__7380__auto___15676]));

var G__15677 = (i__7380__auto___15676 + (1));
i__7380__auto___15676 = G__15677;
continue;
} else {
}
break;
}

var G__15637 = args15635.length;
switch (G__15637) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15635.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15052__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15052__auto__){
return (function (){
var f__15053__auto__ = (function (){var switch__14943__auto__ = ((function (c__15052__auto__){
return (function (state_15658){
var state_val_15659 = (state_15658[(1)]);
if((state_val_15659 === (7))){
var inst_15639 = (state_15658[(5)]);
var inst_15644 = (state_15658[(2)]);
var inst_15645 = cljs.core.next(inst_15639);
var inst_15639__$1 = inst_15645;
var state_15658__$1 = (function (){var statearr_15660 = state_15658;
(statearr_15660[(6)] = inst_15644);

(statearr_15660[(5)] = inst_15639__$1);

return statearr_15660;
})();
var statearr_15661_15679 = state_15658__$1;
(statearr_15661_15679[(2)] = null);

(statearr_15661_15679[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15659 === (1))){
var inst_15638 = cljs.core.seq(coll);
var inst_15639 = inst_15638;
var state_15658__$1 = (function (){var statearr_15662 = state_15658;
(statearr_15662[(5)] = inst_15639);

return statearr_15662;
})();
var statearr_15663_15680 = state_15658__$1;
(statearr_15663_15680[(2)] = null);

(statearr_15663_15680[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15659 === (4))){
var inst_15639 = (state_15658[(5)]);
var inst_15642 = cljs.core.first(inst_15639);
var state_15658__$1 = state_15658;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15658__$1,(7),ch,inst_15642);
} else {
if((state_val_15659 === (6))){
var inst_15654 = (state_15658[(2)]);
var state_15658__$1 = state_15658;
var statearr_15664_15681 = state_15658__$1;
(statearr_15664_15681[(2)] = inst_15654);

(statearr_15664_15681[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15659 === (3))){
var inst_15656 = (state_15658[(2)]);
var state_15658__$1 = state_15658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15658__$1,inst_15656);
} else {
if((state_val_15659 === (2))){
var inst_15639 = (state_15658[(5)]);
var state_15658__$1 = state_15658;
if(cljs.core.truth_(inst_15639)){
var statearr_15665_15682 = state_15658__$1;
(statearr_15665_15682[(1)] = (4));

} else {
var statearr_15666_15683 = state_15658__$1;
(statearr_15666_15683[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15659 === (9))){
var state_15658__$1 = state_15658;
var statearr_15667_15684 = state_15658__$1;
(statearr_15667_15684[(2)] = null);

(statearr_15667_15684[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15659 === (5))){
var state_15658__$1 = state_15658;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15668_15685 = state_15658__$1;
(statearr_15668_15685[(1)] = (8));

} else {
var statearr_15669_15686 = state_15658__$1;
(statearr_15669_15686[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15659 === (10))){
var inst_15652 = (state_15658[(2)]);
var state_15658__$1 = state_15658;
var statearr_15670_15687 = state_15658__$1;
(statearr_15670_15687[(2)] = inst_15652);

(statearr_15670_15687[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15659 === (8))){
var inst_15649 = cljs.core.async.close_BANG_(ch);
var state_15658__$1 = state_15658;
var statearr_15671_15688 = state_15658__$1;
(statearr_15671_15688[(2)] = inst_15649);

(statearr_15671_15688[(1)] = (10));


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
}
}
}
});})(c__15052__auto__))
;
return ((function (switch__14943__auto__,c__15052__auto__){
return (function() {
var cljs$core$async$state_machine__14944__auto__ = null;
var cljs$core$async$state_machine__14944__auto____0 = (function (){
var statearr_15673 = [null,null,null,null,null,null,null];
(statearr_15673[(0)] = cljs$core$async$state_machine__14944__auto__);

(statearr_15673[(1)] = (1));

return statearr_15673;
});
var cljs$core$async$state_machine__14944__auto____1 = (function (state_15658){
while(true){
var result__14945__auto__ = switch__14943__auto__(state_15658);
if(cljs.core.keyword_identical_QMARK_(result__14945__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14945__auto__;
}
break;
}
});
cljs$core$async$state_machine__14944__auto__ = function(state_15658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14944__auto____1.call(this,state_15658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14944__auto____0;
cljs$core$async$state_machine__14944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14944__auto____1;
return cljs$core$async$state_machine__14944__auto__;
})()
;})(switch__14943__auto__,c__15052__auto__))
})();
var state__15054__auto__ = (function (){var statearr_15674 = (f__15053__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15053__auto__.cljs$core$IFn$_invoke$arity$0() : f__15053__auto__.call(null));
(statearr_15674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15052__auto__);

return statearr_15674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15054__auto__);
});})(c__15052__auto__))
);

return c__15052__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__6967__auto__ = (((_ == null))?null:_);
var m__6968__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6967__auto__)]);
if(!((m__6968__auto__ == null))){
return (m__6968__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6968__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__6968__auto__.call(null,_));
} else {
var m__6968__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6968__auto____$1 == null))){
return (m__6968__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6968__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__6968__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__6967__auto__ = (((m == null))?null:m);
var m__6968__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6967__auto__)]);
if(!((m__6968__auto__ == null))){
return (m__6968__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6968__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__6968__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__6968__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6968__auto____$1 == null))){
return (m__6968__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6968__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__6968__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__6967__auto__ = (((m == null))?null:m);
var m__6968__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6967__auto__)]);
if(!((m__6968__auto__ == null))){
return (m__6968__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6968__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6968__auto__.call(null,m,ch));
} else {
var m__6968__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6968__auto____$1 == null))){
return (m__6968__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6968__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6968__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__6967__auto__ = (((m == null))?null:m);
var m__6968__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6967__auto__)]);
if(!((m__6968__auto__ == null))){
return (m__6968__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6968__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__6968__auto__.call(null,m));
} else {
var m__6968__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6968__auto____$1 == null))){
return (m__6968__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6968__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__6968__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   If a tap put throws an exception, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__15908 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15908) : cljs.core.atom.call(null,G__15908));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15909 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15909 = (function (mult,ch,cs,meta15910){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta15910 = meta15910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15911,meta15910__$1){
var self__ = this;
var _15911__$1 = this;
return (new cljs.core.async.t_cljs$core$async15909(self__.mult,self__.ch,self__.cs,meta15910__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async15909.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15911){
var self__ = this;
var _15911__$1 = this;
return self__.meta15910;
});})(cs))
;

cljs.core.async.t_cljs$core$async15909.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15909.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async15909.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async15909.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15909.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15909.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15912_16127 = self__.cs;
var G__15913_16128 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15912_16127,G__15913_16128) : cljs.core.reset_BANG_.call(null,G__15912_16127,G__15913_16128));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15909.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  If a tap put throws an exception, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta15910], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async15909.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15909.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15909";

cljs.core.async.t_cljs$core$async15909.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6910__auto__,writer__6911__auto__,opt__6912__auto__){
return cljs.core._write(writer__6911__auto__,"cljs.core.async/t_cljs$core$async15909");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async15909 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async15909(mult__$1,ch__$1,cs__$1,meta15910){
return (new cljs.core.async.t_cljs$core$async15909(mult__$1,ch__$1,cs__$1,meta15910));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async15909(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__15052__auto___16129 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15052__auto___16129,cs,m,dchan,dctr,done){
return (function (){
var f__15053__auto__ = (function (){var switch__14943__auto__ = ((function (c__15052__auto___16129,cs,m,dchan,dctr,done){
return (function (state_16045){
var state_val_16046 = (state_16045[(1)]);
if((state_val_16046 === (7))){
var inst_16041 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
var statearr_16047_16130 = state_16045__$1;
(statearr_16047_16130[(2)] = inst_16041);

(statearr_16047_16130[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (20))){
var inst_15947 = (state_16045[(5)]);
var inst_15959 = cljs.core.first(inst_15947);
var inst_15960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15959,(0),null);
var inst_15961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15959,(1),null);
var state_16045__$1 = (function (){var statearr_16048 = state_16045;
(statearr_16048[(6)] = inst_15960);

return statearr_16048;
})();
if(cljs.core.truth_(inst_15961)){
var statearr_16049_16131 = state_16045__$1;
(statearr_16049_16131[(1)] = (22));

} else {
var statearr_16050_16132 = state_16045__$1;
(statearr_16050_16132[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (27))){
var inst_15991 = (state_16045[(7)]);
var inst_15989 = (state_16045[(8)]);
var inst_15996 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15989,inst_15991);
var state_16045__$1 = (function (){var statearr_16051 = state_16045;
(statearr_16051[(9)] = inst_15996);

return statearr_16051;
})();
var statearr_16052_16133 = state_16045__$1;
(statearr_16052_16133[(2)] = null);

(statearr_16052_16133[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (1))){
var state_16045__$1 = state_16045;
var statearr_16053_16134 = state_16045__$1;
(statearr_16053_16134[(2)] = null);

(statearr_16053_16134[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (24))){
var inst_15947 = (state_16045[(5)]);
var inst_15966 = (state_16045[(2)]);
var inst_15967 = cljs.core.next(inst_15947);
var inst_15925 = inst_15967;
var inst_15926 = null;
var inst_15927 = (0);
var inst_15928 = (0);
var state_16045__$1 = (function (){var statearr_16054 = state_16045;
(statearr_16054[(10)] = inst_15928);

(statearr_16054[(11)] = inst_15927);

(statearr_16054[(12)] = inst_15925);

(statearr_16054[(13)] = inst_15966);

(statearr_16054[(14)] = inst_15926);

return statearr_16054;
})();
var statearr_16055_16135 = state_16045__$1;
(statearr_16055_16135[(2)] = null);

(statearr_16055_16135[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (39))){
var inst_16008 = (state_16045[(15)]);
var inst_16025 = (state_16045[(2)]);
var inst_16026 = cljs.core.next(inst_16008);
var inst_15988 = inst_16026;
var inst_15989 = null;
var inst_15990 = (0);
var inst_15991 = (0);
var state_16045__$1 = (function (){var statearr_16059 = state_16045;
(statearr_16059[(16)] = inst_16025);

(statearr_16059[(7)] = inst_15991);

(statearr_16059[(8)] = inst_15989);

(statearr_16059[(17)] = inst_15988);

(statearr_16059[(18)] = inst_15990);

return statearr_16059;
})();
var statearr_16060_16136 = state_16045__$1;
(statearr_16060_16136[(2)] = null);

(statearr_16060_16136[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (4))){
var inst_15916 = (state_16045[(19)]);
var inst_15916__$1 = (state_16045[(2)]);
var inst_15917 = (inst_15916__$1 == null);
var state_16045__$1 = (function (){var statearr_16061 = state_16045;
(statearr_16061[(19)] = inst_15916__$1);

return statearr_16061;
})();
if(cljs.core.truth_(inst_15917)){
var statearr_16062_16137 = state_16045__$1;
(statearr_16062_16137[(1)] = (5));

} else {
var statearr_16063_16138 = state_16045__$1;
(statearr_16063_16138[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (15))){
var inst_15928 = (state_16045[(10)]);
var inst_15927 = (state_16045[(11)]);
var inst_15925 = (state_16045[(12)]);
var inst_15926 = (state_16045[(14)]);
var inst_15943 = (state_16045[(2)]);
var inst_15944 = (inst_15928 + (1));
var tmp16056 = inst_15927;
var tmp16057 = inst_15925;
var tmp16058 = inst_15926;
var inst_15925__$1 = tmp16057;
var inst_15926__$1 = tmp16058;
var inst_15927__$1 = tmp16056;
var inst_15928__$1 = inst_15944;
var state_16045__$1 = (function (){var statearr_16064 = state_16045;
(statearr_16064[(10)] = inst_15928__$1);

(statearr_16064[(11)] = inst_15927__$1);

(statearr_16064[(12)] = inst_15925__$1);

(statearr_16064[(20)] = inst_15943);

(statearr_16064[(14)] = inst_15926__$1);

return statearr_16064;
})();
var statearr_16065_16139 = state_16045__$1;
(statearr_16065_16139[(2)] = null);

(statearr_16065_16139[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (21))){
var inst_15970 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
var statearr_16066_16140 = state_16045__$1;
(statearr_16066_16140[(2)] = inst_15970);

(statearr_16066_16140[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (31))){
var inst_15996 = (state_16045[(9)]);
var inst_15997 = (state_16045[(2)]);
var inst_15998 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var inst_15999 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15996);
var state_16045__$1 = (function (){var statearr_16067 = state_16045;
(statearr_16067[(21)] = inst_15997);

(statearr_16067[(22)] = inst_15998);

return statearr_16067;
})();
var statearr_16068_16141 = state_16045__$1;
(statearr_16068_16141[(2)] = inst_15999);

(statearr_16068_16141[(1)] = (30));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (32))){
try{var inst_15916 = (state_16045[(19)]);
var inst_15996 = (state_16045[(9)]);
var inst_16002 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15996,inst_15916,done);
var state_16045__$1 = state_16045;
var statearr_16071_16142 = state_16045__$1;
(statearr_16071_16142[(2)] = inst_16002);

(statearr_16071_16142[(1)] = (30));


return cljs.core.cst$kw$recur;
}catch (e16069){if((e16069 instanceof Object)){
var ex__14937__auto__ = e16069;
var statearr_16070_16143 = state_16045;
(statearr_16070_16143[(1)] = (31));

(statearr_16070_16143[(2)] = ex__14937__auto__);


return cljs.core.cst$kw$recur;
} else {
throw e16069;

}
}} else {
if((state_val_16046 === (40))){
var inst_16017 = (state_16045[(23)]);
var inst_16018 = (state_16045[(2)]);
var inst_16019 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var inst_16020 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16017);
var state_16045__$1 = (function (){var statearr_16072 = state_16045;
(statearr_16072[(24)] = inst_16019);

(statearr_16072[(25)] = inst_16018);

return statearr_16072;
})();
var statearr_16073_16144 = state_16045__$1;
(statearr_16073_16144[(2)] = inst_16020);

(statearr_16073_16144[(1)] = (39));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (33))){
var inst_16008 = (state_16045[(15)]);
var inst_16010 = cljs.core.chunked_seq_QMARK_(inst_16008);
var state_16045__$1 = state_16045;
if(inst_16010){
var statearr_16074_16145 = state_16045__$1;
(statearr_16074_16145[(1)] = (36));

} else {
var statearr_16075_16146 = state_16045__$1;
(statearr_16075_16146[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (13))){
var inst_15937 = (state_16045[(26)]);
var inst_15940 = cljs.core.async.close_BANG_(inst_15937);
var state_16045__$1 = state_16045;
var statearr_16076_16147 = state_16045__$1;
(statearr_16076_16147[(2)] = inst_15940);

(statearr_16076_16147[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (22))){
var inst_15960 = (state_16045[(6)]);
var inst_15963 = cljs.core.async.close_BANG_(inst_15960);
var state_16045__$1 = state_16045;
var statearr_16077_16148 = state_16045__$1;
(statearr_16077_16148[(2)] = inst_15963);

(statearr_16077_16148[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (36))){
var inst_16008 = (state_16045[(15)]);
var inst_16012 = cljs.core.chunk_first(inst_16008);
var inst_16013 = cljs.core.chunk_rest(inst_16008);
var inst_16014 = cljs.core.count(inst_16012);
var inst_15988 = inst_16013;
var inst_15989 = inst_16012;
var inst_15990 = inst_16014;
var inst_15991 = (0);
var state_16045__$1 = (function (){var statearr_16078 = state_16045;
(statearr_16078[(7)] = inst_15991);

(statearr_16078[(8)] = inst_15989);

(statearr_16078[(17)] = inst_15988);

(statearr_16078[(18)] = inst_15990);

return statearr_16078;
})();
var statearr_16079_16149 = state_16045__$1;
(statearr_16079_16149[(2)] = null);

(statearr_16079_16149[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (41))){
try{var inst_15916 = (state_16045[(19)]);
var inst_16017 = (state_16045[(23)]);
var inst_16023 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16017,inst_15916,done);
var state_16045__$1 = state_16045;
var statearr_16082_16150 = state_16045__$1;
(statearr_16082_16150[(2)] = inst_16023);

(statearr_16082_16150[(1)] = (39));


return cljs.core.cst$kw$recur;
}catch (e16080){if((e16080 instanceof Object)){
var ex__14937__auto__ = e16080;
var statearr_16081_16151 = state_16045;
(statearr_16081_16151[(1)] = (40));

(statearr_16081_16151[(2)] = ex__14937__auto__);


return cljs.core.cst$kw$recur;
} else {
throw e16080;

}
}} else {
if((state_val_16046 === (29))){
var inst_16034 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
var statearr_16083_16152 = state_16045__$1;
(statearr_16083_16152[(2)] = inst_16034);

(statearr_16083_16152[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (6))){
var inst_15979 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_15980 = cljs.core.keys(inst_15979);
var inst_15981 = cljs.core.count(inst_15980);
var inst_15982 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_15981) : cljs.core.reset_BANG_.call(null,dctr,inst_15981));
var inst_15987 = cljs.core.seq(inst_15980);
var inst_15988 = inst_15987;
var inst_15989 = null;
var inst_15990 = (0);
var inst_15991 = (0);
var state_16045__$1 = (function (){var statearr_16084 = state_16045;
(statearr_16084[(7)] = inst_15991);

(statearr_16084[(8)] = inst_15989);

(statearr_16084[(17)] = inst_15988);

(statearr_16084[(18)] = inst_15990);

(statearr_16084[(27)] = inst_15982);

return statearr_16084;
})();
var statearr_16085_16153 = state_16045__$1;
(statearr_16085_16153[(2)] = null);

(statearr_16085_16153[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (28))){
var inst_15988 = (state_16045[(17)]);
var inst_16008 = (state_16045[(15)]);
var inst_16008__$1 = cljs.core.seq(inst_15988);
var state_16045__$1 = (function (){var statearr_16086 = state_16045;
(statearr_16086[(15)] = inst_16008__$1);

return statearr_16086;
})();
if(inst_16008__$1){
var statearr_16087_16154 = state_16045__$1;
(statearr_16087_16154[(1)] = (33));

} else {
var statearr_16088_16155 = state_16045__$1;
(statearr_16088_16155[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (25))){
var inst_15991 = (state_16045[(7)]);
var inst_15990 = (state_16045[(18)]);
var inst_15993 = (inst_15991 < inst_15990);
var inst_15994 = inst_15993;
var state_16045__$1 = state_16045;
if(cljs.core.truth_(inst_15994)){
var statearr_16089_16156 = state_16045__$1;
(statearr_16089_16156[(1)] = (27));

} else {
var statearr_16090_16157 = state_16045__$1;
(statearr_16090_16157[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (34))){
var state_16045__$1 = state_16045;
var statearr_16091_16158 = state_16045__$1;
(statearr_16091_16158[(2)] = null);

(statearr_16091_16158[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (17))){
var state_16045__$1 = state_16045;
var statearr_16092_16159 = state_16045__$1;
(statearr_16092_16159[(2)] = null);

(statearr_16092_16159[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (3))){
var inst_16043 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16045__$1,inst_16043);
} else {
if((state_val_16046 === (12))){
var inst_15975 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
var statearr_16093_16160 = state_16045__$1;
(statearr_16093_16160[(2)] = inst_15975);

(statearr_16093_16160[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (2))){
var state_16045__$1 = state_16045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16045__$1,(4),ch);
} else {
if((state_val_16046 === (23))){
var state_16045__$1 = state_16045;
var statearr_16094_16161 = state_16045__$1;
(statearr_16094_16161[(2)] = null);

(statearr_16094_16161[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (35))){
var inst_16032 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
var statearr_16095_16162 = state_16045__$1;
(statearr_16095_16162[(2)] = inst_16032);

(statearr_16095_16162[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (19))){
var inst_15947 = (state_16045[(5)]);
var inst_15951 = cljs.core.chunk_first(inst_15947);
var inst_15952 = cljs.core.chunk_rest(inst_15947);
var inst_15953 = cljs.core.count(inst_15951);
var inst_15925 = inst_15952;
var inst_15926 = inst_15951;
var inst_15927 = inst_15953;
var inst_15928 = (0);
var state_16045__$1 = (function (){var statearr_16096 = state_16045;
(statearr_16096[(10)] = inst_15928);

(statearr_16096[(11)] = inst_15927);

(statearr_16096[(12)] = inst_15925);

(statearr_16096[(14)] = inst_15926);

return statearr_16096;
})();
var statearr_16097_16163 = state_16045__$1;
(statearr_16097_16163[(2)] = null);

(statearr_16097_16163[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (11))){
var inst_15925 = (state_16045[(12)]);
var inst_15947 = (state_16045[(5)]);
var inst_15947__$1 = cljs.core.seq(inst_15925);
var state_16045__$1 = (function (){var statearr_16098 = state_16045;
(statearr_16098[(5)] = inst_15947__$1);

return statearr_16098;
})();
if(inst_15947__$1){
var statearr_16099_16164 = state_16045__$1;
(statearr_16099_16164[(1)] = (16));

} else {
var statearr_16100_16165 = state_16045__$1;
(statearr_16100_16165[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (9))){
var inst_15977 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
var statearr_16101_16166 = state_16045__$1;
(statearr_16101_16166[(2)] = inst_15977);

(statearr_16101_16166[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (5))){
var inst_15923 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_15924 = cljs.core.seq(inst_15923);
var inst_15925 = inst_15924;
var inst_15926 = null;
var inst_15927 = (0);
var inst_15928 = (0);
var state_16045__$1 = (function (){var statearr_16102 = state_16045;
(statearr_16102[(10)] = inst_15928);

(statearr_16102[(11)] = inst_15927);

(statearr_16102[(12)] = inst_15925);

(statearr_16102[(14)] = inst_15926);

return statearr_16102;
})();
var statearr_16103_16167 = state_16045__$1;
(statearr_16103_16167[(2)] = null);

(statearr_16103_16167[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (14))){
var state_16045__$1 = state_16045;
var statearr_16104_16168 = state_16045__$1;
(statearr_16104_16168[(2)] = null);

(statearr_16104_16168[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (26))){
var inst_16036 = (state_16045[(2)]);
var state_16045__$1 = (function (){var statearr_16105 = state_16045;
(statearr_16105[(28)] = inst_16036);

return statearr_16105;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16045__$1,(42),dchan);
} else {
if((state_val_16046 === (16))){
var inst_15947 = (state_16045[(5)]);
var inst_15949 = cljs.core.chunked_seq_QMARK_(inst_15947);
var state_16045__$1 = state_16045;
if(inst_15949){
var statearr_16109_16169 = state_16045__$1;
(statearr_16109_16169[(1)] = (19));

} else {
var statearr_16110_16170 = state_16045__$1;
(statearr_16110_16170[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (38))){
var inst_16029 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
var statearr_16111_16171 = state_16045__$1;
(statearr_16111_16171[(2)] = inst_16029);

(statearr_16111_16171[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (30))){
var inst_15991 = (state_16045[(7)]);
var inst_15989 = (state_16045[(8)]);
var inst_15988 = (state_16045[(17)]);
var inst_15990 = (state_16045[(18)]);
var inst_16004 = (state_16045[(2)]);
var inst_16005 = (inst_15991 + (1));
var tmp16106 = inst_15989;
var tmp16107 = inst_15988;
var tmp16108 = inst_15990;
var inst_15988__$1 = tmp16107;
var inst_15989__$1 = tmp16106;
var inst_15990__$1 = tmp16108;
var inst_15991__$1 = inst_16005;
var state_16045__$1 = (function (){var statearr_16112 = state_16045;
(statearr_16112[(7)] = inst_15991__$1);

(statearr_16112[(8)] = inst_15989__$1);

(statearr_16112[(17)] = inst_15988__$1);

(statearr_16112[(18)] = inst_15990__$1);

(statearr_16112[(29)] = inst_16004);

return statearr_16112;
})();
var statearr_16113_16172 = state_16045__$1;
(statearr_16113_16172[(2)] = null);

(statearr_16113_16172[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (10))){
var inst_15928 = (state_16045[(10)]);
var inst_15926 = (state_16045[(14)]);
var inst_15936 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15926,inst_15928);
var inst_15937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15936,(0),null);
var inst_15938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15936,(1),null);
var state_16045__$1 = (function (){var statearr_16114 = state_16045;
(statearr_16114[(26)] = inst_15937);

return statearr_16114;
})();
if(cljs.core.truth_(inst_15938)){
var statearr_16115_16173 = state_16045__$1;
(statearr_16115_16173[(1)] = (13));

} else {
var statearr_16116_16174 = state_16045__$1;
(statearr_16116_16174[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (18))){
var inst_15973 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
var statearr_16117_16175 = state_16045__$1;
(statearr_16117_16175[(2)] = inst_15973);

(statearr_16117_16175[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (42))){
var inst_16038 = (state_16045[(2)]);
var state_16045__$1 = (function (){var statearr_16118 = state_16045;
(statearr_16118[(30)] = inst_16038);

return statearr_16118;
})();
var statearr_16119_16176 = state_16045__$1;
(statearr_16119_16176[(2)] = null);

(statearr_16119_16176[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (37))){
var inst_16008 = (state_16045[(15)]);
var inst_16017 = cljs.core.first(inst_16008);
var state_16045__$1 = (function (){var statearr_16120 = state_16045;
(statearr_16120[(23)] = inst_16017);

return statearr_16120;
})();
var statearr_16121_16177 = state_16045__$1;
(statearr_16121_16177[(2)] = null);

(statearr_16121_16177[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16046 === (8))){
var inst_15928 = (state_16045[(10)]);
var inst_15927 = (state_16045[(11)]);
var inst_15930 = (inst_15928 < inst_15927);
var inst_15931 = inst_15930;
var state_16045__$1 = state_16045;
if(cljs.core.truth_(inst_15931)){
var statearr_16122_16178 = state_16045__$1;
(statearr_16122_16178[(1)] = (10));

} else {
var statearr_16123_16179 = state_16045__$1;
(statearr_16123_16179[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15052__auto___16129,cs,m,dchan,dctr,done))
;
return ((function (switch__14943__auto__,c__15052__auto___16129,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__14944__auto__ = null;
var cljs$core$async$mult_$_state_machine__14944__auto____0 = (function (){
var statearr_16125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16125[(0)] = cljs$core$async$mult_$_state_machine__14944__auto__);

(statearr_16125[(1)] = (1));

return statearr_16125;
});
var cljs$core$async$mult_$_state_machine__14944__auto____1 = (function (state_16045){
while(true){
var result__14945__auto__ = switch__14943__auto__(state_16045);
if(cljs.core.keyword_identical_QMARK_(result__14945__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14945__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14944__auto__ = function(state_16045){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14944__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14944__auto____1.call(this,state_16045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14944__auto____0;
cljs$core$async$mult_$_state_machine__14944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14944__auto____1;
return cljs$core$async$mult_$_state_machine__14944__auto__;
})()
;})(switch__14943__auto__,c__15052__auto___16129,cs,m,dchan,dctr,done))
})();
var state__15054__auto__ = (function (){var statearr_16126 = (f__15053__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15053__auto__.cljs$core$IFn$_invoke$arity$0() : f__15053__auto__.call(null));
(statearr_16126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15052__auto___16129);

return statearr_16126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15054__auto__);
});})(c__15052__auto___16129,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args16180 = [];
var len__7379__auto___16183 = arguments.length;
var i__7380__auto___16184 = (0);
while(true){
if((i__7380__auto___16184 < len__7379__auto___16183)){
args16180.push((arguments[i__7380__auto___16184]));

var G__16185 = (i__7380__auto___16184 + (1));
i__7380__auto___16184 = G__16185;
continue;
} else {
}
break;
}

var G__16182 = args16180.length;
switch (G__16182) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16180.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__6967__auto__ = (((m == null))?null:m);
var m__6968__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6967__auto__)]);
if(!((m__6968__auto__ == null))){
return (m__6968__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6968__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6968__auto__.call(null,m,ch));
} else {
var m__6968__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6968__auto____$1 == null))){
return (m__6968__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6968__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6968__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__6967__auto__ = (((m == null))?null:m);
var m__6968__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6967__auto__)]);
if(!((m__6968__auto__ == null))){
return (m__6968__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6968__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6968__auto__.call(null,m,ch));
} else {
var m__6968__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6968__auto____$1 == null))){
return (m__6968__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6968__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6968__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__6967__auto__ = (((m == null))?null:m);
var m__6968__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6967__auto__)]);
if(!((m__6968__auto__ == null))){
return (m__6968__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6968__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__6968__auto__.call(null,m));
} else {
var m__6968__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6968__auto____$1 == null))){
return (m__6968__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6968__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__6968__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__6967__auto__ = (((m == null))?null:m);
var m__6968__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6967__auto__)]);
if(!((m__6968__auto__ == null))){
return (m__6968__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6968__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__6968__auto__.call(null,m,state_map));
} else {
var m__6968__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6968__auto____$1 == null))){
return (m__6968__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6968__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__6968__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__6967__auto__ = (((m == null))?null:m);
var m__6968__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6967__auto__)]);
if(!((m__6968__auto__ == null))){
return (m__6968__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6968__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__6968__auto__.call(null,m,mode));
} else {
var m__6968__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6968__auto____$1 == null))){
return (m__6968__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6968__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__6968__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__16342 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16342) : cljs.core.atom.call(null,G__16342));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__16343 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16343) : cljs.core.atom.call(null,G__16343));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16344 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16344 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16345){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16345 = meta16345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16346,meta16345__$1){
var self__ = this;
var _16346__$1 = this;
return (new cljs.core.async.t_cljs$core$async16344(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16345__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16344.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16346){
var self__ = this;
var _16346__$1 = this;
return self__.meta16345;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16344.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16344.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16344.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async16344.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16344.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16344.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16347_16497 = self__.cs;
var G__16348_16498 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16347_16497,G__16348_16498) : cljs.core.reset_BANG_.call(null,G__16347_16497,G__16348_16498));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16344.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16344.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16344.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta16345], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16344.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16344";

cljs.core.async.t_cljs$core$async16344.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6910__auto__,writer__6911__auto__,opt__6912__auto__){
return cljs.core._write(writer__6911__auto__,"cljs.core.async/t_cljs$core$async16344");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async16344 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16344(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16345){
return (new cljs.core.async.t_cljs$core$async16344(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16345));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16344(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15052__auto___16499 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15052__auto___16499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15053__auto__ = (function (){var switch__14943__auto__ = ((function (c__15052__auto___16499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16443){
var state_val_16444 = (state_16443[(1)]);
if((state_val_16444 === (7))){
var inst_16364 = (state_16443[(2)]);
var state_16443__$1 = state_16443;
var statearr_16445_16500 = state_16443__$1;
(statearr_16445_16500[(2)] = inst_16364);

(statearr_16445_16500[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (20))){
var inst_16376 = (state_16443[(5)]);
var state_16443__$1 = state_16443;
var statearr_16446_16501 = state_16443__$1;
(statearr_16446_16501[(2)] = inst_16376);

(statearr_16446_16501[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (27))){
var state_16443__$1 = state_16443;
var statearr_16447_16502 = state_16443__$1;
(statearr_16447_16502[(2)] = null);

(statearr_16447_16502[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (1))){
var inst_16352 = (state_16443[(6)]);
var inst_16352__$1 = calc_state();
var inst_16354 = (inst_16352__$1 == null);
var inst_16355 = cljs.core.not(inst_16354);
var state_16443__$1 = (function (){var statearr_16448 = state_16443;
(statearr_16448[(6)] = inst_16352__$1);

return statearr_16448;
})();
if(inst_16355){
var statearr_16449_16503 = state_16443__$1;
(statearr_16449_16503[(1)] = (2));

} else {
var statearr_16450_16504 = state_16443__$1;
(statearr_16450_16504[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (24))){
var inst_16399 = (state_16443[(7)]);
var inst_16408 = (state_16443[(8)]);
var inst_16422 = (state_16443[(9)]);
var inst_16422__$1 = (inst_16399.cljs$core$IFn$_invoke$arity$1 ? inst_16399.cljs$core$IFn$_invoke$arity$1(inst_16408) : inst_16399.call(null,inst_16408));
var state_16443__$1 = (function (){var statearr_16451 = state_16443;
(statearr_16451[(9)] = inst_16422__$1);

return statearr_16451;
})();
if(cljs.core.truth_(inst_16422__$1)){
var statearr_16452_16505 = state_16443__$1;
(statearr_16452_16505[(1)] = (29));

} else {
var statearr_16453_16506 = state_16443__$1;
(statearr_16453_16506[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (4))){
var inst_16367 = (state_16443[(2)]);
var state_16443__$1 = state_16443;
if(cljs.core.truth_(inst_16367)){
var statearr_16454_16507 = state_16443__$1;
(statearr_16454_16507[(1)] = (8));

} else {
var statearr_16455_16508 = state_16443__$1;
(statearr_16455_16508[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (15))){
var inst_16393 = (state_16443[(2)]);
var state_16443__$1 = state_16443;
if(cljs.core.truth_(inst_16393)){
var statearr_16456_16509 = state_16443__$1;
(statearr_16456_16509[(1)] = (19));

} else {
var statearr_16457_16510 = state_16443__$1;
(statearr_16457_16510[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (21))){
var inst_16398 = (state_16443[(10)]);
var inst_16398__$1 = (state_16443[(2)]);
var inst_16399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16398__$1,cljs.core.cst$kw$solos);
var inst_16400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16398__$1,cljs.core.cst$kw$mutes);
var inst_16401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16398__$1,cljs.core.cst$kw$reads);
var state_16443__$1 = (function (){var statearr_16458 = state_16443;
(statearr_16458[(7)] = inst_16399);

(statearr_16458[(11)] = inst_16400);

(statearr_16458[(10)] = inst_16398__$1);

return statearr_16458;
})();
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_16443__$1,(22),inst_16401);
} else {
if((state_val_16444 === (31))){
var inst_16430 = (state_16443[(2)]);
var state_16443__$1 = state_16443;
if(cljs.core.truth_(inst_16430)){
var statearr_16459_16511 = state_16443__$1;
(statearr_16459_16511[(1)] = (32));

} else {
var statearr_16460_16512 = state_16443__$1;
(statearr_16460_16512[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (32))){
var inst_16407 = (state_16443[(12)]);
var state_16443__$1 = state_16443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16443__$1,(35),out,inst_16407);
} else {
if((state_val_16444 === (33))){
var state_16443__$1 = state_16443;
var statearr_16461_16513 = state_16443__$1;
(statearr_16461_16513[(2)] = null);

(statearr_16461_16513[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (13))){
var inst_16376 = (state_16443[(5)]);
var inst_16383 = inst_16376.cljs$lang$protocol_mask$partition0$;
var inst_16384 = (inst_16383 & (64));
var inst_16385 = inst_16376.cljs$core$ISeq$;
var inst_16386 = (inst_16384) || (inst_16385);
var state_16443__$1 = state_16443;
if(cljs.core.truth_(inst_16386)){
var statearr_16462_16514 = state_16443__$1;
(statearr_16462_16514[(1)] = (16));

} else {
var statearr_16463_16515 = state_16443__$1;
(statearr_16463_16515[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (22))){
var inst_16408 = (state_16443[(8)]);
var inst_16407 = (state_16443[(12)]);
var inst_16406 = (state_16443[(2)]);
var inst_16407__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16406,(0),null);
var inst_16408__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16406,(1),null);
var inst_16409 = (inst_16407__$1 == null);
var inst_16410 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16408__$1,change);
var inst_16411 = (inst_16409) || (inst_16410);
var state_16443__$1 = (function (){var statearr_16464 = state_16443;
(statearr_16464[(8)] = inst_16408__$1);

(statearr_16464[(12)] = inst_16407__$1);

return statearr_16464;
})();
if(cljs.core.truth_(inst_16411)){
var statearr_16465_16516 = state_16443__$1;
(statearr_16465_16516[(1)] = (23));

} else {
var statearr_16466_16517 = state_16443__$1;
(statearr_16466_16517[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (29))){
var inst_16422 = (state_16443[(9)]);
var state_16443__$1 = state_16443;
var statearr_16467_16518 = state_16443__$1;
(statearr_16467_16518[(2)] = inst_16422);

(statearr_16467_16518[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (6))){
var state_16443__$1 = state_16443;
var statearr_16468_16519 = state_16443__$1;
(statearr_16468_16519[(2)] = false);

(statearr_16468_16519[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (28))){
var inst_16418 = (state_16443[(2)]);
var inst_16419 = calc_state();
var inst_16376 = inst_16419;
var state_16443__$1 = (function (){var statearr_16469 = state_16443;
(statearr_16469[(13)] = inst_16418);

(statearr_16469[(5)] = inst_16376);

return statearr_16469;
})();
var statearr_16470_16520 = state_16443__$1;
(statearr_16470_16520[(2)] = null);

(statearr_16470_16520[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (25))){
var inst_16439 = (state_16443[(2)]);
var state_16443__$1 = state_16443;
var statearr_16471_16521 = state_16443__$1;
(statearr_16471_16521[(2)] = inst_16439);

(statearr_16471_16521[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (34))){
var inst_16398 = (state_16443[(10)]);
var inst_16436 = (state_16443[(2)]);
var inst_16376 = inst_16398;
var state_16443__$1 = (function (){var statearr_16472 = state_16443;
(statearr_16472[(5)] = inst_16376);

(statearr_16472[(14)] = inst_16436);

return statearr_16472;
})();
var statearr_16473_16522 = state_16443__$1;
(statearr_16473_16522[(2)] = null);

(statearr_16473_16522[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (17))){
var state_16443__$1 = state_16443;
var statearr_16474_16523 = state_16443__$1;
(statearr_16474_16523[(2)] = false);

(statearr_16474_16523[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (3))){
var state_16443__$1 = state_16443;
var statearr_16475_16524 = state_16443__$1;
(statearr_16475_16524[(2)] = false);

(statearr_16475_16524[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (12))){
var inst_16441 = (state_16443[(2)]);
var state_16443__$1 = state_16443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16443__$1,inst_16441);
} else {
if((state_val_16444 === (2))){
var inst_16352 = (state_16443[(6)]);
var inst_16357 = inst_16352.cljs$lang$protocol_mask$partition0$;
var inst_16358 = (inst_16357 & (64));
var inst_16359 = inst_16352.cljs$core$ISeq$;
var inst_16360 = (inst_16358) || (inst_16359);
var state_16443__$1 = state_16443;
if(cljs.core.truth_(inst_16360)){
var statearr_16476_16525 = state_16443__$1;
(statearr_16476_16525[(1)] = (5));

} else {
var statearr_16477_16526 = state_16443__$1;
(statearr_16477_16526[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (23))){
var inst_16407 = (state_16443[(12)]);
var inst_16413 = (inst_16407 == null);
var state_16443__$1 = state_16443;
if(cljs.core.truth_(inst_16413)){
var statearr_16478_16527 = state_16443__$1;
(statearr_16478_16527[(1)] = (26));

} else {
var statearr_16479_16528 = state_16443__$1;
(statearr_16479_16528[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (35))){
var inst_16433 = (state_16443[(2)]);
var state_16443__$1 = state_16443;
var statearr_16480_16529 = state_16443__$1;
(statearr_16480_16529[(2)] = inst_16433);

(statearr_16480_16529[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (19))){
var inst_16376 = (state_16443[(5)]);
var inst_16395 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16376);
var state_16443__$1 = state_16443;
var statearr_16481_16530 = state_16443__$1;
(statearr_16481_16530[(2)] = inst_16395);

(statearr_16481_16530[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (11))){
var inst_16376 = (state_16443[(5)]);
var inst_16380 = (inst_16376 == null);
var inst_16381 = cljs.core.not(inst_16380);
var state_16443__$1 = state_16443;
if(inst_16381){
var statearr_16482_16531 = state_16443__$1;
(statearr_16482_16531[(1)] = (13));

} else {
var statearr_16483_16532 = state_16443__$1;
(statearr_16483_16532[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (9))){
var inst_16352 = (state_16443[(6)]);
var state_16443__$1 = state_16443;
var statearr_16484_16533 = state_16443__$1;
(statearr_16484_16533[(2)] = inst_16352);

(statearr_16484_16533[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (5))){
var state_16443__$1 = state_16443;
var statearr_16485_16534 = state_16443__$1;
(statearr_16485_16534[(2)] = true);

(statearr_16485_16534[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (14))){
var state_16443__$1 = state_16443;
var statearr_16486_16535 = state_16443__$1;
(statearr_16486_16535[(2)] = false);

(statearr_16486_16535[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (26))){
var inst_16408 = (state_16443[(8)]);
var inst_16415 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16408);
var state_16443__$1 = state_16443;
var statearr_16487_16536 = state_16443__$1;
(statearr_16487_16536[(2)] = inst_16415);

(statearr_16487_16536[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (16))){
var state_16443__$1 = state_16443;
var statearr_16488_16537 = state_16443__$1;
(statearr_16488_16537[(2)] = true);

(statearr_16488_16537[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (30))){
var inst_16399 = (state_16443[(7)]);
var inst_16408 = (state_16443[(8)]);
var inst_16400 = (state_16443[(11)]);
var inst_16425 = cljs.core.empty_QMARK_(inst_16399);
var inst_16426 = (inst_16400.cljs$core$IFn$_invoke$arity$1 ? inst_16400.cljs$core$IFn$_invoke$arity$1(inst_16408) : inst_16400.call(null,inst_16408));
var inst_16427 = cljs.core.not(inst_16426);
var inst_16428 = (inst_16425) && (inst_16427);
var state_16443__$1 = state_16443;
var statearr_16489_16538 = state_16443__$1;
(statearr_16489_16538[(2)] = inst_16428);

(statearr_16489_16538[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (10))){
var inst_16352 = (state_16443[(6)]);
var inst_16372 = (state_16443[(2)]);
var inst_16373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16372,cljs.core.cst$kw$solos);
var inst_16374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16372,cljs.core.cst$kw$mutes);
var inst_16375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16372,cljs.core.cst$kw$reads);
var inst_16376 = inst_16352;
var state_16443__$1 = (function (){var statearr_16490 = state_16443;
(statearr_16490[(5)] = inst_16376);

(statearr_16490[(15)] = inst_16375);

(statearr_16490[(16)] = inst_16374);

(statearr_16490[(17)] = inst_16373);

return statearr_16490;
})();
var statearr_16491_16539 = state_16443__$1;
(statearr_16491_16539[(2)] = null);

(statearr_16491_16539[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (18))){
var inst_16390 = (state_16443[(2)]);
var state_16443__$1 = state_16443;
var statearr_16492_16540 = state_16443__$1;
(statearr_16492_16540[(2)] = inst_16390);

(statearr_16492_16540[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16444 === (8))){
var inst_16352 = (state_16443[(6)]);
var inst_16369 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16352);
var state_16443__$1 = state_16443;
var statearr_16493_16541 = state_16443__$1;
(statearr_16493_16541[(2)] = inst_16369);

(statearr_16493_16541[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15052__auto___16499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14943__auto__,c__15052__auto___16499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__14944__auto__ = null;
var cljs$core$async$mix_$_state_machine__14944__auto____0 = (function (){
var statearr_16495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16495[(0)] = cljs$core$async$mix_$_state_machine__14944__auto__);

(statearr_16495[(1)] = (1));

return statearr_16495;
});
var cljs$core$async$mix_$_state_machine__14944__auto____1 = (function (state_16443){
while(true){
var result__14945__auto__ = switch__14943__auto__(state_16443);
if(cljs.core.keyword_identical_QMARK_(result__14945__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14945__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14944__auto__ = function(state_16443){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14944__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14944__auto____1.call(this,state_16443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14944__auto____0;
cljs$core$async$mix_$_state_machine__14944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14944__auto____1;
return cljs$core$async$mix_$_state_machine__14944__auto__;
})()
;})(switch__14943__auto__,c__15052__auto___16499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15054__auto__ = (function (){var statearr_16496 = (f__15053__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15053__auto__.cljs$core$IFn$_invoke$arity$0() : f__15053__auto__.call(null));
(statearr_16496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15052__auto___16499);

return statearr_16496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15054__auto__);
});})(c__15052__auto___16499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__6967__auto__ = (((p == null))?null:p);
var m__6968__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6967__auto__)]);
if(!((m__6968__auto__ == null))){
return (m__6968__auto__.cljs$core$IFn$_invoke$arity$4 ? m__6968__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__6968__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__6968__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6968__auto____$1 == null))){
return (m__6968__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__6968__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__6968__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__6967__auto__ = (((p == null))?null:p);
var m__6968__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6967__auto__)]);
if(!((m__6968__auto__ == null))){
return (m__6968__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6968__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__6968__auto__.call(null,p,v,ch));
} else {
var m__6968__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6968__auto____$1 == null))){
return (m__6968__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6968__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__6968__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args16542 = [];
var len__7379__auto___16545 = arguments.length;
var i__7380__auto___16546 = (0);
while(true){
if((i__7380__auto___16546 < len__7379__auto___16545)){
args16542.push((arguments[i__7380__auto___16546]));

var G__16547 = (i__7380__auto___16546 + (1));
i__7380__auto___16546 = G__16547;
continue;
} else {
}
break;
}

var G__16544 = args16542.length;
switch (G__16544) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16542.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6967__auto__ = (((p == null))?null:p);
var m__6968__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6967__auto__)]);
if(!((m__6968__auto__ == null))){
return (m__6968__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6968__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__6968__auto__.call(null,p));
} else {
var m__6968__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6968__auto____$1 == null))){
return (m__6968__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6968__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__6968__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__6967__auto__ = (((p == null))?null:p);
var m__6968__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6967__auto__)]);
if(!((m__6968__auto__ == null))){
return (m__6968__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6968__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__6968__auto__.call(null,p,v));
} else {
var m__6968__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6968__auto____$1 == null))){
return (m__6968__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6968__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__6968__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args16550 = [];
var len__7379__auto___16679 = arguments.length;
var i__7380__auto___16680 = (0);
while(true){
if((i__7380__auto___16680 < len__7379__auto___16679)){
args16550.push((arguments[i__7380__auto___16680]));

var G__16681 = (i__7380__auto___16680 + (1));
i__7380__auto___16680 = G__16681;
continue;
} else {
}
break;
}

var G__16552 = args16550.length;
switch (G__16552) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16550.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__16553 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16553) : cljs.core.atom.call(null,G__16553));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6304__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6304__auto__)){
return or__6304__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6304__auto__,mults){
return (function (p1__16549_SHARP_){
if(cljs.core.truth_((p1__16549_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16549_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16549_SHARP_.call(null,topic)))){
return p1__16549_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16549_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6304__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async16554 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16554 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16555){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16555 = meta16555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16556,meta16555__$1){
var self__ = this;
var _16556__$1 = this;
return (new cljs.core.async.t_cljs$core$async16554(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16555__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16554.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16556){
var self__ = this;
var _16556__$1 = this;
return self__.meta16555;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16554.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16554.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16554.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async16554.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16554.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16554.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16557 = self__.mults;
var G__16558 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16557,G__16558) : cljs.core.reset_BANG_.call(null,G__16557,G__16558));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16554.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16554.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta16555], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16554.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16554.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16554";

cljs.core.async.t_cljs$core$async16554.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6910__auto__,writer__6911__auto__,opt__6912__auto__){
return cljs.core._write(writer__6911__auto__,"cljs.core.async/t_cljs$core$async16554");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async16554 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16554(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16555){
return (new cljs.core.async.t_cljs$core$async16554(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16555));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16554(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15052__auto___16683 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15052__auto___16683,mults,ensure_mult,p){
return (function (){
var f__15053__auto__ = (function (){var switch__14943__auto__ = ((function (c__15052__auto___16683,mults,ensure_mult,p){
return (function (state_16631){
var state_val_16632 = (state_16631[(1)]);
if((state_val_16632 === (7))){
var inst_16627 = (state_16631[(2)]);
var state_16631__$1 = state_16631;
var statearr_16633_16684 = state_16631__$1;
(statearr_16633_16684[(2)] = inst_16627);

(statearr_16633_16684[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (20))){
var state_16631__$1 = state_16631;
var statearr_16634_16685 = state_16631__$1;
(statearr_16634_16685[(2)] = null);

(statearr_16634_16685[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (1))){
var state_16631__$1 = state_16631;
var statearr_16635_16686 = state_16631__$1;
(statearr_16635_16686[(2)] = null);

(statearr_16635_16686[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (24))){
try{var inst_16561 = (state_16631[(5)]);
var inst_16611 = (state_16631[(6)]);
var inst_16617 = cljs.core.async.muxch_STAR_(inst_16611);
var state_16631__$1 = state_16631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16631__$1,(25),inst_16617,inst_16561);
}catch (e16636){if((e16636 instanceof Object)){
var ex__14937__auto__ = e16636;
var statearr_16637_16687 = state_16631;
(statearr_16637_16687[(1)] = (23));

(statearr_16637_16687[(2)] = ex__14937__auto__);


return cljs.core.cst$kw$recur;
} else {
throw e16636;

}
}} else {
if((state_val_16632 === (4))){
var inst_16561 = (state_16631[(5)]);
var inst_16561__$1 = (state_16631[(2)]);
var inst_16562 = (inst_16561__$1 == null);
var state_16631__$1 = (function (){var statearr_16638 = state_16631;
(statearr_16638[(5)] = inst_16561__$1);

return statearr_16638;
})();
if(cljs.core.truth_(inst_16562)){
var statearr_16639_16688 = state_16631__$1;
(statearr_16639_16688[(1)] = (5));

} else {
var statearr_16640_16689 = state_16631__$1;
(statearr_16640_16689[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (15))){
var inst_16603 = (state_16631[(2)]);
var state_16631__$1 = state_16631;
var statearr_16641_16690 = state_16631__$1;
(statearr_16641_16690[(2)] = inst_16603);

(statearr_16641_16690[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (21))){
var inst_16624 = (state_16631[(2)]);
var state_16631__$1 = (function (){var statearr_16642 = state_16631;
(statearr_16642[(7)] = inst_16624);

return statearr_16642;
})();
var statearr_16643_16691 = state_16631__$1;
(statearr_16643_16691[(2)] = null);

(statearr_16643_16691[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (13))){
var inst_16585 = (state_16631[(8)]);
var inst_16587 = cljs.core.chunked_seq_QMARK_(inst_16585);
var state_16631__$1 = state_16631;
if(inst_16587){
var statearr_16644_16692 = state_16631__$1;
(statearr_16644_16692[(1)] = (16));

} else {
var statearr_16645_16693 = state_16631__$1;
(statearr_16645_16693[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (22))){
var inst_16621 = (state_16631[(2)]);
var state_16631__$1 = state_16631;
var statearr_16646_16694 = state_16631__$1;
(statearr_16646_16694[(2)] = inst_16621);

(statearr_16646_16694[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (6))){
var inst_16561 = (state_16631[(5)]);
var inst_16609 = (state_16631[(9)]);
var inst_16611 = (state_16631[(6)]);
var inst_16609__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16561) : topic_fn.call(null,inst_16561));
var inst_16610 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16611__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16610,inst_16609__$1);
var state_16631__$1 = (function (){var statearr_16647 = state_16631;
(statearr_16647[(9)] = inst_16609__$1);

(statearr_16647[(6)] = inst_16611__$1);

return statearr_16647;
})();
if(cljs.core.truth_(inst_16611__$1)){
var statearr_16648_16695 = state_16631__$1;
(statearr_16648_16695[(1)] = (19));

} else {
var statearr_16649_16696 = state_16631__$1;
(statearr_16649_16696[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (25))){
try{var inst_16619 = (state_16631[(2)]);
var state_16631__$1 = state_16631;
var statearr_16652_16697 = state_16631__$1;
(statearr_16652_16697[(2)] = inst_16619);

(statearr_16652_16697[(1)] = (22));


return cljs.core.cst$kw$recur;
}catch (e16650){if((e16650 instanceof Object)){
var ex__14937__auto__ = e16650;
var statearr_16651_16698 = state_16631;
(statearr_16651_16698[(1)] = (23));

(statearr_16651_16698[(2)] = ex__14937__auto__);


return cljs.core.cst$kw$recur;
} else {
throw e16650;

}
}} else {
if((state_val_16632 === (17))){
var inst_16585 = (state_16631[(8)]);
var inst_16594 = cljs.core.first(inst_16585);
var inst_16595 = cljs.core.async.muxch_STAR_(inst_16594);
var inst_16596 = cljs.core.async.close_BANG_(inst_16595);
var inst_16597 = cljs.core.next(inst_16585);
var inst_16571 = inst_16597;
var inst_16572 = null;
var inst_16573 = (0);
var inst_16574 = (0);
var state_16631__$1 = (function (){var statearr_16653 = state_16631;
(statearr_16653[(10)] = inst_16573);

(statearr_16653[(11)] = inst_16574);

(statearr_16653[(12)] = inst_16571);

(statearr_16653[(13)] = inst_16596);

(statearr_16653[(14)] = inst_16572);

return statearr_16653;
})();
var statearr_16654_16699 = state_16631__$1;
(statearr_16654_16699[(2)] = null);

(statearr_16654_16699[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (3))){
var inst_16629 = (state_16631[(2)]);
var state_16631__$1 = state_16631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16631__$1,inst_16629);
} else {
if((state_val_16632 === (12))){
var inst_16605 = (state_16631[(2)]);
var state_16631__$1 = state_16631;
var statearr_16655_16700 = state_16631__$1;
(statearr_16655_16700[(2)] = inst_16605);

(statearr_16655_16700[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (2))){
var state_16631__$1 = state_16631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16631__$1,(4),ch);
} else {
if((state_val_16632 === (23))){
var inst_16609 = (state_16631[(9)]);
var inst_16613 = (state_16631[(2)]);
var inst_16614 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16609);
var state_16631__$1 = (function (){var statearr_16656 = state_16631;
(statearr_16656[(15)] = inst_16613);

return statearr_16656;
})();
var statearr_16657_16701 = state_16631__$1;
(statearr_16657_16701[(2)] = inst_16614);

(statearr_16657_16701[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (19))){
var state_16631__$1 = state_16631;
var statearr_16658_16702 = state_16631__$1;
(statearr_16658_16702[(2)] = null);

(statearr_16658_16702[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (11))){
var inst_16585 = (state_16631[(8)]);
var inst_16571 = (state_16631[(12)]);
var inst_16585__$1 = cljs.core.seq(inst_16571);
var state_16631__$1 = (function (){var statearr_16659 = state_16631;
(statearr_16659[(8)] = inst_16585__$1);

return statearr_16659;
})();
if(inst_16585__$1){
var statearr_16660_16703 = state_16631__$1;
(statearr_16660_16703[(1)] = (13));

} else {
var statearr_16661_16704 = state_16631__$1;
(statearr_16661_16704[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (9))){
var inst_16607 = (state_16631[(2)]);
var state_16631__$1 = state_16631;
var statearr_16662_16705 = state_16631__$1;
(statearr_16662_16705[(2)] = inst_16607);

(statearr_16662_16705[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (5))){
var inst_16568 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16569 = cljs.core.vals(inst_16568);
var inst_16570 = cljs.core.seq(inst_16569);
var inst_16571 = inst_16570;
var inst_16572 = null;
var inst_16573 = (0);
var inst_16574 = (0);
var state_16631__$1 = (function (){var statearr_16663 = state_16631;
(statearr_16663[(10)] = inst_16573);

(statearr_16663[(11)] = inst_16574);

(statearr_16663[(12)] = inst_16571);

(statearr_16663[(14)] = inst_16572);

return statearr_16663;
})();
var statearr_16664_16706 = state_16631__$1;
(statearr_16664_16706[(2)] = null);

(statearr_16664_16706[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (14))){
var state_16631__$1 = state_16631;
var statearr_16668_16707 = state_16631__$1;
(statearr_16668_16707[(2)] = null);

(statearr_16668_16707[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (16))){
var inst_16585 = (state_16631[(8)]);
var inst_16589 = cljs.core.chunk_first(inst_16585);
var inst_16590 = cljs.core.chunk_rest(inst_16585);
var inst_16591 = cljs.core.count(inst_16589);
var inst_16571 = inst_16590;
var inst_16572 = inst_16589;
var inst_16573 = inst_16591;
var inst_16574 = (0);
var state_16631__$1 = (function (){var statearr_16669 = state_16631;
(statearr_16669[(10)] = inst_16573);

(statearr_16669[(11)] = inst_16574);

(statearr_16669[(12)] = inst_16571);

(statearr_16669[(14)] = inst_16572);

return statearr_16669;
})();
var statearr_16670_16708 = state_16631__$1;
(statearr_16670_16708[(2)] = null);

(statearr_16670_16708[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (10))){
var inst_16573 = (state_16631[(10)]);
var inst_16574 = (state_16631[(11)]);
var inst_16571 = (state_16631[(12)]);
var inst_16572 = (state_16631[(14)]);
var inst_16579 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16572,inst_16574);
var inst_16580 = cljs.core.async.muxch_STAR_(inst_16579);
var inst_16581 = cljs.core.async.close_BANG_(inst_16580);
var inst_16582 = (inst_16574 + (1));
var tmp16665 = inst_16573;
var tmp16666 = inst_16571;
var tmp16667 = inst_16572;
var inst_16571__$1 = tmp16666;
var inst_16572__$1 = tmp16667;
var inst_16573__$1 = tmp16665;
var inst_16574__$1 = inst_16582;
var state_16631__$1 = (function (){var statearr_16671 = state_16631;
(statearr_16671[(10)] = inst_16573__$1);

(statearr_16671[(16)] = inst_16581);

(statearr_16671[(11)] = inst_16574__$1);

(statearr_16671[(12)] = inst_16571__$1);

(statearr_16671[(14)] = inst_16572__$1);

return statearr_16671;
})();
var statearr_16672_16709 = state_16631__$1;
(statearr_16672_16709[(2)] = null);

(statearr_16672_16709[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (18))){
var inst_16600 = (state_16631[(2)]);
var state_16631__$1 = state_16631;
var statearr_16673_16710 = state_16631__$1;
(statearr_16673_16710[(2)] = inst_16600);

(statearr_16673_16710[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (8))){
var inst_16573 = (state_16631[(10)]);
var inst_16574 = (state_16631[(11)]);
var inst_16576 = (inst_16574 < inst_16573);
var inst_16577 = inst_16576;
var state_16631__$1 = state_16631;
if(cljs.core.truth_(inst_16577)){
var statearr_16674_16711 = state_16631__$1;
(statearr_16674_16711[(1)] = (10));

} else {
var statearr_16675_16712 = state_16631__$1;
(statearr_16675_16712[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15052__auto___16683,mults,ensure_mult,p))
;
return ((function (switch__14943__auto__,c__15052__auto___16683,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__14944__auto__ = null;
var cljs$core$async$state_machine__14944__auto____0 = (function (){
var statearr_16677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16677[(0)] = cljs$core$async$state_machine__14944__auto__);

(statearr_16677[(1)] = (1));

return statearr_16677;
});
var cljs$core$async$state_machine__14944__auto____1 = (function (state_16631){
while(true){
var result__14945__auto__ = switch__14943__auto__(state_16631);
if(cljs.core.keyword_identical_QMARK_(result__14945__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14945__auto__;
}
break;
}
});
cljs$core$async$state_machine__14944__auto__ = function(state_16631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14944__auto____1.call(this,state_16631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14944__auto____0;
cljs$core$async$state_machine__14944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14944__auto____1;
return cljs$core$async$state_machine__14944__auto__;
})()
;})(switch__14943__auto__,c__15052__auto___16683,mults,ensure_mult,p))
})();
var state__15054__auto__ = (function (){var statearr_16678 = (f__15053__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15053__auto__.cljs$core$IFn$_invoke$arity$0() : f__15053__auto__.call(null));
(statearr_16678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15052__auto___16683);

return statearr_16678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15054__auto__);
});})(c__15052__auto___16683,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args16713 = [];
var len__7379__auto___16716 = arguments.length;
var i__7380__auto___16717 = (0);
while(true){
if((i__7380__auto___16717 < len__7379__auto___16716)){
args16713.push((arguments[i__7380__auto___16717]));

var G__16718 = (i__7380__auto___16717 + (1));
i__7380__auto___16717 = G__16718;
continue;
} else {
}
break;
}

var G__16715 = args16713.length;
switch (G__16715) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16713.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args16720 = [];
var len__7379__auto___16723 = arguments.length;
var i__7380__auto___16724 = (0);
while(true){
if((i__7380__auto___16724 < len__7379__auto___16723)){
args16720.push((arguments[i__7380__auto___16724]));

var G__16725 = (i__7380__auto___16724 + (1));
i__7380__auto___16724 = G__16725;
continue;
} else {
}
break;
}

var G__16722 = args16720.length;
switch (G__16722) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16720.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args16727 = [];
var len__7379__auto___16795 = arguments.length;
var i__7380__auto___16796 = (0);
while(true){
if((i__7380__auto___16796 < len__7379__auto___16795)){
args16727.push((arguments[i__7380__auto___16796]));

var G__16797 = (i__7380__auto___16796 + (1));
i__7380__auto___16796 = G__16797;
continue;
} else {
}
break;
}

var G__16729 = args16727.length;
switch (G__16729) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16727.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,(java.util.Arrays.copyOf.cljs$core$IFn$_invoke$arity$2 ? java.util.Arrays.copyOf.cljs$core$IFn$_invoke$arity$2(rets,cnt) : java.util.Arrays.copyOf.call(null,rets,cnt)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__15052__auto___16799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15052__auto___16799,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15053__auto__ = (function (){var switch__14943__auto__ = ((function (c__15052__auto___16799,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16767){
var state_val_16768 = (state_16767[(1)]);
if((state_val_16768 === (7))){
var state_16767__$1 = state_16767;
var statearr_16769_16800 = state_16767__$1;
(statearr_16769_16800[(2)] = null);

(statearr_16769_16800[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16768 === (1))){
var state_16767__$1 = state_16767;
var statearr_16770_16801 = state_16767__$1;
(statearr_16770_16801[(2)] = null);

(statearr_16770_16801[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16768 === (4))){
var inst_16732 = (state_16767[(5)]);
var inst_16734 = (inst_16732 < cnt);
var state_16767__$1 = state_16767;
if(cljs.core.truth_(inst_16734)){
var statearr_16771_16802 = state_16767__$1;
(statearr_16771_16802[(1)] = (6));

} else {
var statearr_16772_16803 = state_16767__$1;
(statearr_16772_16803[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16768 === (15))){
var inst_16763 = (state_16767[(2)]);
var state_16767__$1 = state_16767;
var statearr_16773_16804 = state_16767__$1;
(statearr_16773_16804[(2)] = inst_16763);

(statearr_16773_16804[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16768 === (13))){
var inst_16756 = cljs.core.async.close_BANG_(out);
var state_16767__$1 = state_16767;
var statearr_16774_16805 = state_16767__$1;
(statearr_16774_16805[(2)] = inst_16756);

(statearr_16774_16805[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16768 === (6))){
var state_16767__$1 = state_16767;
var statearr_16775_16806 = state_16767__$1;
(statearr_16775_16806[(2)] = null);

(statearr_16775_16806[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16768 === (3))){
var inst_16765 = (state_16767[(2)]);
var state_16767__$1 = state_16767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16767__$1,inst_16765);
} else {
if((state_val_16768 === (12))){
var inst_16753 = (state_16767[(6)]);
var inst_16753__$1 = (state_16767[(2)]);
var inst_16754 = cljs.core.some(cljs.core.nil_QMARK_,inst_16753__$1);
var state_16767__$1 = (function (){var statearr_16776 = state_16767;
(statearr_16776[(6)] = inst_16753__$1);

return statearr_16776;
})();
if(cljs.core.truth_(inst_16754)){
var statearr_16777_16807 = state_16767__$1;
(statearr_16777_16807[(1)] = (13));

} else {
var statearr_16778_16808 = state_16767__$1;
(statearr_16778_16808[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16768 === (2))){
var inst_16731 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_16732 = (0);
var state_16767__$1 = (function (){var statearr_16779 = state_16767;
(statearr_16779[(7)] = inst_16731);

(statearr_16779[(5)] = inst_16732);

return statearr_16779;
})();
var statearr_16780_16809 = state_16767__$1;
(statearr_16780_16809[(2)] = null);

(statearr_16780_16809[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16768 === (11))){
try{var inst_16732 = (state_16767[(5)]);
var inst_16740 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16732) : chs__$1.call(null,inst_16732));
var inst_16741 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16732) : done.call(null,inst_16732));
var inst_16742 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16740,inst_16741);
var state_16767__$1 = state_16767;
var statearr_16783_16810 = state_16767__$1;
(statearr_16783_16810[(2)] = inst_16742);

(statearr_16783_16810[(1)] = (9));


return cljs.core.cst$kw$recur;
}catch (e16781){if((e16781 instanceof Object)){
var ex__14937__auto__ = e16781;
var statearr_16782_16811 = state_16767;
(statearr_16782_16811[(1)] = (10));

(statearr_16782_16811[(2)] = ex__14937__auto__);


return cljs.core.cst$kw$recur;
} else {
throw e16781;

}
}} else {
if((state_val_16768 === (9))){
var inst_16732 = (state_16767[(5)]);
var inst_16744 = (state_16767[(2)]);
var inst_16745 = (inst_16732 + (1));
var inst_16732__$1 = inst_16745;
var state_16767__$1 = (function (){var statearr_16784 = state_16767;
(statearr_16784[(8)] = inst_16744);

(statearr_16784[(5)] = inst_16732__$1);

return statearr_16784;
})();
var statearr_16785_16812 = state_16767__$1;
(statearr_16785_16812[(2)] = null);

(statearr_16785_16812[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16768 === (5))){
var inst_16751 = (state_16767[(2)]);
var state_16767__$1 = (function (){var statearr_16786 = state_16767;
(statearr_16786[(9)] = inst_16751);

return statearr_16786;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16767__$1,(12),dchan);
} else {
if((state_val_16768 === (14))){
var inst_16753 = (state_16767[(6)]);
var inst_16758 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16753);
var state_16767__$1 = state_16767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16767__$1,(16),out,inst_16758);
} else {
if((state_val_16768 === (16))){
var inst_16760 = (state_16767[(2)]);
var state_16767__$1 = (function (){var statearr_16787 = state_16767;
(statearr_16787[(10)] = inst_16760);

return statearr_16787;
})();
var statearr_16788_16813 = state_16767__$1;
(statearr_16788_16813[(2)] = null);

(statearr_16788_16813[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16768 === (10))){
var inst_16736 = (state_16767[(2)]);
var inst_16737 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16767__$1 = (function (){var statearr_16789 = state_16767;
(statearr_16789[(11)] = inst_16736);

return statearr_16789;
})();
var statearr_16790_16814 = state_16767__$1;
(statearr_16790_16814[(2)] = inst_16737);

(statearr_16790_16814[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16768 === (8))){
var inst_16749 = (state_16767[(2)]);
var state_16767__$1 = state_16767;
var statearr_16791_16815 = state_16767__$1;
(statearr_16791_16815[(2)] = inst_16749);

(statearr_16791_16815[(1)] = (5));


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
}
}
}
}
}
}
}
}
}
});})(c__15052__auto___16799,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14943__auto__,c__15052__auto___16799,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__14944__auto__ = null;
var cljs$core$async$state_machine__14944__auto____0 = (function (){
var statearr_16793 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16793[(0)] = cljs$core$async$state_machine__14944__auto__);

(statearr_16793[(1)] = (1));

return statearr_16793;
});
var cljs$core$async$state_machine__14944__auto____1 = (function (state_16767){
while(true){
var result__14945__auto__ = switch__14943__auto__(state_16767);
if(cljs.core.keyword_identical_QMARK_(result__14945__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14945__auto__;
}
break;
}
});
cljs$core$async$state_machine__14944__auto__ = function(state_16767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14944__auto____1.call(this,state_16767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14944__auto____0;
cljs$core$async$state_machine__14944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14944__auto____1;
return cljs$core$async$state_machine__14944__auto__;
})()
;})(switch__14943__auto__,c__15052__auto___16799,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15054__auto__ = (function (){var statearr_16794 = (f__15053__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15053__auto__.cljs$core$IFn$_invoke$arity$0() : f__15053__auto__.call(null));
(statearr_16794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15052__auto___16799);

return statearr_16794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15054__auto__);
});})(c__15052__auto___16799,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args16817 = [];
var len__7379__auto___16871 = arguments.length;
var i__7380__auto___16872 = (0);
while(true){
if((i__7380__auto___16872 < len__7379__auto___16871)){
args16817.push((arguments[i__7380__auto___16872]));

var G__16873 = (i__7380__auto___16872 + (1));
i__7380__auto___16872 = G__16873;
continue;
} else {
}
break;
}

var G__16819 = args16817.length;
switch (G__16819) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16817.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15052__auto___16875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15052__auto___16875,out){
return (function (){
var f__15053__auto__ = (function (){var switch__14943__auto__ = ((function (c__15052__auto___16875,out){
return (function (state_16851){
var state_val_16852 = (state_16851[(1)]);
if((state_val_16852 === (7))){
var inst_16830 = (state_16851[(5)]);
var inst_16831 = (state_16851[(6)]);
var inst_16830__$1 = (state_16851[(2)]);
var inst_16831__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16830__$1,(0),null);
var inst_16832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16830__$1,(1),null);
var inst_16833 = (inst_16831__$1 == null);
var state_16851__$1 = (function (){var statearr_16853 = state_16851;
(statearr_16853[(7)] = inst_16832);

(statearr_16853[(5)] = inst_16830__$1);

(statearr_16853[(6)] = inst_16831__$1);

return statearr_16853;
})();
if(cljs.core.truth_(inst_16833)){
var statearr_16854_16876 = state_16851__$1;
(statearr_16854_16876[(1)] = (8));

} else {
var statearr_16855_16877 = state_16851__$1;
(statearr_16855_16877[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16852 === (1))){
var inst_16820 = cljs.core.vec(chs);
var inst_16821 = inst_16820;
var state_16851__$1 = (function (){var statearr_16856 = state_16851;
(statearr_16856[(8)] = inst_16821);

return statearr_16856;
})();
var statearr_16857_16878 = state_16851__$1;
(statearr_16857_16878[(2)] = null);

(statearr_16857_16878[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16852 === (4))){
var inst_16821 = (state_16851[(8)]);
var state_16851__$1 = state_16851;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_16851__$1,(7),inst_16821);
} else {
if((state_val_16852 === (6))){
var inst_16847 = (state_16851[(2)]);
var state_16851__$1 = state_16851;
var statearr_16858_16879 = state_16851__$1;
(statearr_16858_16879[(2)] = inst_16847);

(statearr_16858_16879[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16852 === (3))){
var inst_16849 = (state_16851[(2)]);
var state_16851__$1 = state_16851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16851__$1,inst_16849);
} else {
if((state_val_16852 === (2))){
var inst_16821 = (state_16851[(8)]);
var inst_16823 = cljs.core.count(inst_16821);
var inst_16824 = (inst_16823 > (0));
var state_16851__$1 = state_16851;
if(cljs.core.truth_(inst_16824)){
var statearr_16860_16880 = state_16851__$1;
(statearr_16860_16880[(1)] = (4));

} else {
var statearr_16861_16881 = state_16851__$1;
(statearr_16861_16881[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16852 === (11))){
var inst_16821 = (state_16851[(8)]);
var inst_16840 = (state_16851[(2)]);
var tmp16859 = inst_16821;
var inst_16821__$1 = tmp16859;
var state_16851__$1 = (function (){var statearr_16862 = state_16851;
(statearr_16862[(9)] = inst_16840);

(statearr_16862[(8)] = inst_16821__$1);

return statearr_16862;
})();
var statearr_16863_16882 = state_16851__$1;
(statearr_16863_16882[(2)] = null);

(statearr_16863_16882[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16852 === (9))){
var inst_16831 = (state_16851[(6)]);
var state_16851__$1 = state_16851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16851__$1,(11),out,inst_16831);
} else {
if((state_val_16852 === (5))){
var inst_16845 = cljs.core.async.close_BANG_(out);
var state_16851__$1 = state_16851;
var statearr_16864_16883 = state_16851__$1;
(statearr_16864_16883[(2)] = inst_16845);

(statearr_16864_16883[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16852 === (10))){
var inst_16843 = (state_16851[(2)]);
var state_16851__$1 = state_16851;
var statearr_16865_16884 = state_16851__$1;
(statearr_16865_16884[(2)] = inst_16843);

(statearr_16865_16884[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16852 === (8))){
var inst_16832 = (state_16851[(7)]);
var inst_16830 = (state_16851[(5)]);
var inst_16821 = (state_16851[(8)]);
var inst_16831 = (state_16851[(6)]);
var inst_16835 = (function (){var cs = inst_16821;
var vec__16826 = inst_16830;
var v = inst_16831;
var c = inst_16832;
return ((function (cs,vec__16826,v,c,inst_16832,inst_16830,inst_16821,inst_16831,state_val_16852,c__15052__auto___16875,out){
return (function (p1__16816_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16816_SHARP_);
});
;})(cs,vec__16826,v,c,inst_16832,inst_16830,inst_16821,inst_16831,state_val_16852,c__15052__auto___16875,out))
})();
var inst_16836 = cljs.core.filterv(inst_16835,inst_16821);
var inst_16821__$1 = inst_16836;
var state_16851__$1 = (function (){var statearr_16866 = state_16851;
(statearr_16866[(8)] = inst_16821__$1);

return statearr_16866;
})();
var statearr_16867_16885 = state_16851__$1;
(statearr_16867_16885[(2)] = null);

(statearr_16867_16885[(1)] = (2));


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
}
}
}
}
});})(c__15052__auto___16875,out))
;
return ((function (switch__14943__auto__,c__15052__auto___16875,out){
return (function() {
var cljs$core$async$state_machine__14944__auto__ = null;
var cljs$core$async$state_machine__14944__auto____0 = (function (){
var statearr_16869 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16869[(0)] = cljs$core$async$state_machine__14944__auto__);

(statearr_16869[(1)] = (1));

return statearr_16869;
});
var cljs$core$async$state_machine__14944__auto____1 = (function (state_16851){
while(true){
var result__14945__auto__ = switch__14943__auto__(state_16851);
if(cljs.core.keyword_identical_QMARK_(result__14945__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14945__auto__;
}
break;
}
});
cljs$core$async$state_machine__14944__auto__ = function(state_16851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14944__auto____1.call(this,state_16851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14944__auto____0;
cljs$core$async$state_machine__14944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14944__auto____1;
return cljs$core$async$state_machine__14944__auto__;
})()
;})(switch__14943__auto__,c__15052__auto___16875,out))
})();
var state__15054__auto__ = (function (){var statearr_16870 = (f__15053__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15053__auto__.cljs$core$IFn$_invoke$arity$0() : f__15053__auto__.call(null));
(statearr_16870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15052__auto___16875);

return statearr_16870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15054__auto__);
});})(c__15052__auto___16875,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
