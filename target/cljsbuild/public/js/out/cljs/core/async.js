// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async46128 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46128 = (function (fn_handler,f,meta46129){
this.fn_handler = fn_handler;
this.f = f;
this.meta46129 = meta46129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46130,meta46129__$1){
var self__ = this;
var _46130__$1 = this;
return (new cljs.core.async.t_cljs$core$async46128(self__.fn_handler,self__.f,meta46129__$1));
});

cljs.core.async.t_cljs$core$async46128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46130){
var self__ = this;
var _46130__$1 = this;
return self__.meta46129;
});

cljs.core.async.t_cljs$core$async46128.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46128.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46128.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async46128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta46129","meta46129",-626206426,null)], null);
});

cljs.core.async.t_cljs$core$async46128.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46128";

cljs.core.async.t_cljs$core$async46128.cljs$lang$ctorPrWriter = (function (this__37684__auto__,writer__37685__auto__,opt__37686__auto__){
return cljs.core._write.call(null,writer__37685__auto__,"cljs.core.async/t_cljs$core$async46128");
});

cljs.core.async.__GT_t_cljs$core$async46128 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async46128(fn_handler__$1,f__$1,meta46129){
return (new cljs.core.async.t_cljs$core$async46128(fn_handler__$1,f__$1,meta46129));
});

}

return (new cljs.core.async.t_cljs$core$async46128(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Creates a channel with an optional buffer. If buf-or-n is a number,
 *   will create and use a fixed buffer of that size.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args46138 = [];
var len__38153__auto___46141 = arguments.length;
var i__38154__auto___46142 = (0);
while(true){
if((i__38154__auto___46142 < len__38153__auto___46141)){
args46138.push((arguments[i__38154__auto___46142]));

var G__46143 = (i__38154__auto___46142 + (1));
i__38154__auto___46142 = G__46143;
continue;
} else {
}
break;
}

var G__46140 = args46138.length;
switch (G__46140) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46138.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 1;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args46151 = [];
var len__38153__auto___46154 = arguments.length;
var i__38154__auto___46155 = (0);
while(true){
if((i__38154__auto___46155 < len__38153__auto___46154)){
args46151.push((arguments[i__38154__auto___46155]));

var G__46156 = (i__38154__auto___46155 + (1));
i__38154__auto___46155 = G__46156;
continue;
} else {
}
break;
}

var G__46153 = args46151.length;
switch (G__46153) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46151.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_46161 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_46161);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_46161,ret){
return (function (){
return fn1.call(null,val_46161);
});})(val_46161,ret))
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
var args46166 = [];
var len__38153__auto___46173 = arguments.length;
var i__38154__auto___46174 = (0);
while(true){
if((i__38154__auto___46174 < len__38153__auto___46173)){
args46166.push((arguments[i__38154__auto___46174]));

var G__46175 = (i__38154__auto___46174 + (1));
i__38154__auto___46174 = G__46175;
continue;
} else {
}
break;
}

var G__46168 = args46166.length;
switch (G__46168) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46166.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
return cljs.core.async.put_BANG_.call(null,port,val,cljs.core.async.nop);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn0){
return cljs.core.async.put_BANG_.call(null,port,val,fn0,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn0,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));
if(cljs.core.truth_((function (){var and__37066__auto__ = ret;
if(cljs.core.truth_(and__37066__auto__)){
return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else {
return and__37066__auto__;
}
})())){
if(cljs.core.truth_(on_caller_QMARK_)){
fn0.call(null);
} else {
cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else {
}

return null;
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__37993__auto___46189 = n;
var x_46190 = (0);
while(true){
if((x_46190 < n__37993__auto___46189)){
(a[x_46190] = (0));

var G__46191 = (x_46190 + (1));
x_46190 = G__46191;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__46196 = (i + (1));
i = G__46196;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async46204 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46204 = (function (alt_flag,flag,meta46205){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta46205 = meta46205;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_46206,meta46205__$1){
var self__ = this;
var _46206__$1 = this;
return (new cljs.core.async.t_cljs$core$async46204(self__.alt_flag,self__.flag,meta46205__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async46204.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_46206){
var self__ = this;
var _46206__$1 = this;
return self__.meta46205;
});})(flag))
;

cljs.core.async.t_cljs$core$async46204.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46204.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async46204.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46204.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46205","meta46205",-625869005,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async46204.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46204.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46204";

cljs.core.async.t_cljs$core$async46204.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__37684__auto__,writer__37685__auto__,opt__37686__auto__){
return cljs.core._write.call(null,writer__37685__auto__,"cljs.core.async/t_cljs$core$async46204");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async46204 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46204(alt_flag__$1,flag__$1,meta46205){
return (new cljs.core.async.t_cljs$core$async46204(alt_flag__$1,flag__$1,meta46205));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async46204(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async46216 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46216 = (function (alt_handler,flag,cb,meta46217){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta46217 = meta46217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46218,meta46217__$1){
var self__ = this;
var _46218__$1 = this;
return (new cljs.core.async.t_cljs$core$async46216(self__.alt_handler,self__.flag,self__.cb,meta46217__$1));
});

cljs.core.async.t_cljs$core$async46216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46218){
var self__ = this;
var _46218__$1 = this;
return self__.meta46217;
});

cljs.core.async.t_cljs$core$async46216.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46216.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async46216.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async46216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46217","meta46217",453431230,null)], null);
});

cljs.core.async.t_cljs$core$async46216.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46216";

cljs.core.async.t_cljs$core$async46216.cljs$lang$ctorPrWriter = (function (this__37684__auto__,writer__37685__auto__,opt__37686__auto__){
return cljs.core._write.call(null,writer__37685__auto__,"cljs.core.async/t_cljs$core$async46216");
});

cljs.core.async.__GT_t_cljs$core$async46216 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46216(alt_handler__$1,flag__$1,cb__$1,meta46217){
return (new cljs.core.async.t_cljs$core$async46216(alt_handler__$1,flag__$1,cb__$1,meta46217));
});

}

return (new cljs.core.async.t_cljs$core$async46216(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46225_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46225_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__37078__auto__ = wport;
if(cljs.core.truth_(or__37078__auto__)){
return or__37078__auto__;
} else {
return port;
}
})()], null));
} else {
var G__46258 = (i + (1));
i = G__46258;
continue;
}
} else {
return null;
}
break;
}
})();
var or__37078__auto__ = ret;
if(cljs.core.truth_(or__37078__auto__)){
return or__37078__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__37066__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__37066__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__37066__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__38160__auto__ = [];
var len__38153__auto___46279 = arguments.length;
var i__38154__auto___46280 = (0);
while(true){
if((i__38154__auto___46280 < len__38153__auto___46279)){
args__38160__auto__.push((arguments[i__38154__auto___46280]));

var G__46281 = (i__38154__auto___46280 + (1));
i__38154__auto___46280 = G__46281;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((1) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38161__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46273){
var map__46274 = p__46273;
var map__46274__$1 = ((((!((map__46274 == null)))?((((map__46274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46274):map__46274);
var opts = map__46274__$1;
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str("nil")].join('')));

});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46268){
var G__46269 = cljs.core.first.call(null,seq46268);
var seq46268__$1 = cljs.core.next.call(null,seq46268);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46269,seq46268__$1);
});

/**
 * Takes a function and a source channel, and returns a channel which
 *   contains the values produced by applying f to each value taken from
 *   the source channel
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46295 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46295 = (function (map_LT_,f,ch,meta46296){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta46296 = meta46296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46297,meta46296__$1){
var self__ = this;
var _46297__$1 = this;
return (new cljs.core.async.t_cljs$core$async46295(self__.map_LT_,self__.f,self__.ch,meta46296__$1));
});

cljs.core.async.t_cljs$core$async46295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46297){
var self__ = this;
var _46297__$1 = this;
return self__.meta46296;
});

cljs.core.async.t_cljs$core$async46295.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async46295.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46295.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async46295.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async46298 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46298 = (function (map_LT_,f,ch,meta46296,_,fn1,meta46299){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta46296 = meta46296;
this._ = _;
this.fn1 = fn1;
this.meta46299 = meta46299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_46300,meta46299__$1){
var self__ = this;
var _46300__$1 = this;
return (new cljs.core.async.t_cljs$core$async46298(self__.map_LT_,self__.f,self__.ch,self__.meta46296,self__._,self__.fn1,meta46299__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async46298.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_46300){
var self__ = this;
var _46300__$1 = this;
return self__.meta46299;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46298.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46298.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46298.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46298.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__46282_SHARP_){
return f1.call(null,(((p1__46282_SHARP_ == null))?null:self__.f.call(null,p1__46282_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async46298.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a function and a source channel, and returns a channel which\n  contains the values produced by applying f to each value taken from\n  the source channel"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46296","meta46296",945974210,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46295","cljs.core.async/t_cljs$core$async46295",1489169493,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46299","meta46299",-1969968964,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46298.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46298.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46298";

cljs.core.async.t_cljs$core$async46298.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__37684__auto__,writer__37685__auto__,opt__37686__auto__){
return cljs.core._write.call(null,writer__37685__auto__,"cljs.core.async/t_cljs$core$async46298");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async46298 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46298(map_LT___$1,f__$1,ch__$1,meta46296__$1,___$2,fn1__$1,meta46299){
return (new cljs.core.async.t_cljs$core$async46298(map_LT___$1,f__$1,ch__$1,meta46296__$1,___$2,fn1__$1,meta46299));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async46298(self__.map_LT_,self__.f,self__.ch,self__.meta46296,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__37066__auto__ = ret;
if(cljs.core.truth_(and__37066__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__37066__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async46295.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async46295.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});

cljs.core.async.t_cljs$core$async46295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a function and a source channel, and returns a channel which\n  contains the values produced by applying f to each value taken from\n  the source channel"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46296","meta46296",945974210,null)], null);
});

cljs.core.async.t_cljs$core$async46295.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46295.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46295";

cljs.core.async.t_cljs$core$async46295.cljs$lang$ctorPrWriter = (function (this__37684__auto__,writer__37685__auto__,opt__37686__auto__){
return cljs.core._write.call(null,writer__37685__auto__,"cljs.core.async/t_cljs$core$async46295");
});

cljs.core.async.__GT_t_cljs$core$async46295 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46295(map_LT___$1,f__$1,ch__$1,meta46296){
return (new cljs.core.async.t_cljs$core$async46295(map_LT___$1,f__$1,ch__$1,meta46296));
});

}

return (new cljs.core.async.t_cljs$core$async46295(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Takes a function and a target channel, and returns a channel which
 *   applies f to each value before supplying it to the target channel.
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46338 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46338 = (function (map_GT_,f,ch,meta46339){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta46339 = meta46339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46340,meta46339__$1){
var self__ = this;
var _46340__$1 = this;
return (new cljs.core.async.t_cljs$core$async46338(self__.map_GT_,self__.f,self__.ch,meta46339__$1));
});

cljs.core.async.t_cljs$core$async46338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46340){
var self__ = this;
var _46340__$1 = this;
return self__.meta46339;
});

cljs.core.async.t_cljs$core$async46338.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async46338.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46338.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async46338.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46338.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async46338.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});

cljs.core.async.t_cljs$core$async46338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a function and a target channel, and returns a channel which\n  applies f to each value before supplying it to the target channel."], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46339","meta46339",513872140,null)], null);
});

cljs.core.async.t_cljs$core$async46338.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46338";

cljs.core.async.t_cljs$core$async46338.cljs$lang$ctorPrWriter = (function (this__37684__auto__,writer__37685__auto__,opt__37686__auto__){
return cljs.core._write.call(null,writer__37685__auto__,"cljs.core.async/t_cljs$core$async46338");
});

cljs.core.async.__GT_t_cljs$core$async46338 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46338(map_GT___$1,f__$1,ch__$1,meta46339){
return (new cljs.core.async.t_cljs$core$async46338(map_GT___$1,f__$1,ch__$1,meta46339));
});

}

return (new cljs.core.async.t_cljs$core$async46338(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Takes a predicate and a target channel, and returns a channel which
 *   supplies only the values for which the predicate returns true to the
 *   target channel.
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async46361 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46361 = (function (filter_GT_,p,ch,meta46362){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta46362 = meta46362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46363,meta46362__$1){
var self__ = this;
var _46363__$1 = this;
return (new cljs.core.async.t_cljs$core$async46361(self__.filter_GT_,self__.p,self__.ch,meta46362__$1));
});

cljs.core.async.t_cljs$core$async46361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46363){
var self__ = this;
var _46363__$1 = this;
return self__.meta46362;
});

cljs.core.async.t_cljs$core$async46361.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async46361.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46361.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async46361.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46361.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async46361.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else {
return cljs.core.async.impl.channels.box.call(null,null);
}
});

cljs.core.async.t_cljs$core$async46361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a predicate and a target channel, and returns a channel which\n  supplies only the values for which the predicate returns true to the\n  target channel."], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46362","meta46362",-687310165,null)], null);
});

cljs.core.async.t_cljs$core$async46361.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46361";

cljs.core.async.t_cljs$core$async46361.cljs$lang$ctorPrWriter = (function (this__37684__auto__,writer__37685__auto__,opt__37686__auto__){
return cljs.core._write.call(null,writer__37685__auto__,"cljs.core.async/t_cljs$core$async46361");
});

cljs.core.async.__GT_t_cljs$core$async46361 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46361(filter_GT___$1,p__$1,ch__$1,meta46362){
return (new cljs.core.async.t_cljs$core$async46361(filter_GT___$1,p__$1,ch__$1,meta46362));
});

}

return (new cljs.core.async.t_cljs$core$async46361(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Takes a predicate and a target channel, and returns a channel which
 *   supplies only the values for which the predicate returns false to the
 *   target channel.
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Takes a predicate and a source channel, and returns a channel which
 *   contains only the values taken from the source channel for which the
 *   predicate returns true. The returned channel will be unbuffered by
 *   default, or a buf-or-n can be supplied. The channel will close
 *   when the source channel closes.
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args46374 = [];
var len__38153__auto___46414 = arguments.length;
var i__38154__auto___46415 = (0);
while(true){
if((i__38154__auto___46415 < len__38153__auto___46414)){
args46374.push((arguments[i__38154__auto___46415]));

var G__46416 = (i__38154__auto___46415 + (1));
i__38154__auto___46415 = G__46416;
continue;
} else {
}
break;
}

var G__46376 = args46374.length;
switch (G__46376) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46374.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40014__auto___46418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40014__auto___46418,out){
return (function (){
var f__40015__auto__ = (function (){var switch__39995__auto__ = ((function (c__40014__auto___46418,out){
return (function (state_46397){
var state_val_46398 = (state_46397[(1)]);
if((state_val_46398 === (7))){
var inst_46393 = (state_46397[(2)]);
var state_46397__$1 = state_46397;
var statearr_46399_46419 = state_46397__$1;
(statearr_46399_46419[(2)] = inst_46393);

(statearr_46399_46419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (1))){
var state_46397__$1 = state_46397;
var statearr_46400_46420 = state_46397__$1;
(statearr_46400_46420[(2)] = null);

(statearr_46400_46420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (4))){
var inst_46379 = (state_46397[(5)]);
var inst_46379__$1 = (state_46397[(2)]);
var inst_46380 = (inst_46379__$1 == null);
var state_46397__$1 = (function (){var statearr_46401 = state_46397;
(statearr_46401[(5)] = inst_46379__$1);

return statearr_46401;
})();
if(cljs.core.truth_(inst_46380)){
var statearr_46402_46421 = state_46397__$1;
(statearr_46402_46421[(1)] = (5));

} else {
var statearr_46403_46422 = state_46397__$1;
(statearr_46403_46422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (6))){
var inst_46379 = (state_46397[(5)]);
var inst_46384 = p.call(null,inst_46379);
var state_46397__$1 = state_46397;
if(cljs.core.truth_(inst_46384)){
var statearr_46404_46423 = state_46397__$1;
(statearr_46404_46423[(1)] = (8));

} else {
var statearr_46405_46424 = state_46397__$1;
(statearr_46405_46424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (3))){
var inst_46395 = (state_46397[(2)]);
var state_46397__$1 = state_46397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46397__$1,inst_46395);
} else {
if((state_val_46398 === (2))){
var state_46397__$1 = state_46397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46397__$1,(4),ch);
} else {
if((state_val_46398 === (11))){
var inst_46387 = (state_46397[(2)]);
var state_46397__$1 = state_46397;
var statearr_46406_46425 = state_46397__$1;
(statearr_46406_46425[(2)] = inst_46387);

(statearr_46406_46425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (9))){
var state_46397__$1 = state_46397;
var statearr_46407_46426 = state_46397__$1;
(statearr_46407_46426[(2)] = null);

(statearr_46407_46426[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (5))){
var inst_46382 = cljs.core.async.close_BANG_.call(null,out);
var state_46397__$1 = state_46397;
var statearr_46408_46427 = state_46397__$1;
(statearr_46408_46427[(2)] = inst_46382);

(statearr_46408_46427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (10))){
var inst_46390 = (state_46397[(2)]);
var state_46397__$1 = (function (){var statearr_46409 = state_46397;
(statearr_46409[(6)] = inst_46390);

return statearr_46409;
})();
var statearr_46410_46428 = state_46397__$1;
(statearr_46410_46428[(2)] = null);

(statearr_46410_46428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (8))){
var inst_46379 = (state_46397[(5)]);
var state_46397__$1 = state_46397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46397__$1,(11),out,inst_46379);
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
});})(c__40014__auto___46418,out))
;
return ((function (switch__39995__auto__,c__40014__auto___46418,out){
return (function() {
var cljs$core$async$state_machine__39996__auto__ = null;
var cljs$core$async$state_machine__39996__auto____0 = (function (){
var statearr_46412 = [null,null,null,null,null,null,null];
(statearr_46412[(0)] = cljs$core$async$state_machine__39996__auto__);

(statearr_46412[(1)] = (1));

return statearr_46412;
});
var cljs$core$async$state_machine__39996__auto____1 = (function (state_46397){
while(true){
var result__39997__auto__ = switch__39995__auto__.call(null,state_46397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39997__auto__;
}
break;
}
});
cljs$core$async$state_machine__39996__auto__ = function(state_46397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39996__auto____1.call(this,state_46397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39996__auto____0;
cljs$core$async$state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39996__auto____1;
return cljs$core$async$state_machine__39996__auto__;
})()
;})(switch__39995__auto__,c__40014__auto___46418,out))
})();
var state__40016__auto__ = (function (){var statearr_46413 = f__40015__auto__.call(null);
(statearr_46413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40014__auto___46418);

return statearr_46413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40016__auto__);
});})(c__40014__auto___46418,out))
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
var args46429 = [];
var len__38153__auto___46432 = arguments.length;
var i__38154__auto___46433 = (0);
while(true){
if((i__38154__auto___46433 < len__38153__auto___46432)){
args46429.push((arguments[i__38154__auto___46433]));

var G__46434 = (i__38154__auto___46433 + (1));
i__38154__auto___46433 = G__46434;
continue;
} else {
}
break;
}

var G__46431 = args46429.length;
switch (G__46431) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46429.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__40014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40014__auto__){
return (function (){
var f__40015__auto__ = (function (){var switch__39995__auto__ = ((function (c__40014__auto__){
return (function (state_46583){
var state_val_46584 = (state_46583[(1)]);
if((state_val_46584 === (7))){
var inst_46579 = (state_46583[(2)]);
var state_46583__$1 = state_46583;
var statearr_46585_46619 = state_46583__$1;
(statearr_46585_46619[(2)] = inst_46579);

(statearr_46585_46619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46584 === (20))){
var inst_46554 = (state_46583[(5)]);
var inst_46565 = (state_46583[(2)]);
var inst_46566 = cljs.core.next.call(null,inst_46554);
var inst_46540 = inst_46566;
var inst_46541 = null;
var inst_46542 = (0);
var inst_46543 = (0);
var state_46583__$1 = (function (){var statearr_46586 = state_46583;
(statearr_46586[(6)] = inst_46540);

(statearr_46586[(7)] = inst_46542);

(statearr_46586[(8)] = inst_46541);

(statearr_46586[(9)] = inst_46565);

(statearr_46586[(10)] = inst_46543);

return statearr_46586;
})();
var statearr_46587_46620 = state_46583__$1;
(statearr_46587_46620[(2)] = null);

(statearr_46587_46620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46584 === (1))){
var state_46583__$1 = state_46583;
var statearr_46588_46621 = state_46583__$1;
(statearr_46588_46621[(2)] = null);

(statearr_46588_46621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46584 === (4))){
var inst_46529 = (state_46583[(11)]);
var inst_46529__$1 = (state_46583[(2)]);
var inst_46530 = (inst_46529__$1 == null);
var state_46583__$1 = (function (){var statearr_46592 = state_46583;
(statearr_46592[(11)] = inst_46529__$1);

return statearr_46592;
})();
if(cljs.core.truth_(inst_46530)){
var statearr_46593_46622 = state_46583__$1;
(statearr_46593_46622[(1)] = (5));

} else {
var statearr_46594_46623 = state_46583__$1;
(statearr_46594_46623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46584 === (15))){
var state_46583__$1 = state_46583;
var statearr_46595_46624 = state_46583__$1;
(statearr_46595_46624[(2)] = null);

(statearr_46595_46624[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46584 === (13))){
var inst_46540 = (state_46583[(6)]);
var inst_46542 = (state_46583[(7)]);
var inst_46541 = (state_46583[(8)]);
var inst_46543 = (state_46583[(10)]);
var inst_46550 = (state_46583[(2)]);
var inst_46551 = (inst_46543 + (1));
var tmp46589 = inst_46540;
var tmp46590 = inst_46542;
var tmp46591 = inst_46541;
var inst_46540__$1 = tmp46589;
var inst_46541__$1 = tmp46591;
var inst_46542__$1 = tmp46590;
var inst_46543__$1 = inst_46551;
var state_46583__$1 = (function (){var statearr_46596 = state_46583;
(statearr_46596[(6)] = inst_46540__$1);

(statearr_46596[(7)] = inst_46542__$1);

(statearr_46596[(8)] = inst_46541__$1);

(statearr_46596[(12)] = inst_46550);

(statearr_46596[(10)] = inst_46543__$1);

return statearr_46596;
})();
var statearr_46597_46625 = state_46583__$1;
(statearr_46597_46625[(2)] = null);

(statearr_46597_46625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46584 === (6))){
var inst_46529 = (state_46583[(11)]);
var inst_46534 = f.call(null,inst_46529);
var inst_46539 = cljs.core.seq.call(null,inst_46534);
var inst_46540 = inst_46539;
var inst_46541 = null;
var inst_46542 = (0);
var inst_46543 = (0);
var state_46583__$1 = (function (){var statearr_46598 = state_46583;
(statearr_46598[(6)] = inst_46540);

(statearr_46598[(7)] = inst_46542);

(statearr_46598[(8)] = inst_46541);

(statearr_46598[(10)] = inst_46543);

return statearr_46598;
})();
var statearr_46599_46626 = state_46583__$1;
(statearr_46599_46626[(2)] = null);

(statearr_46599_46626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46584 === (17))){
var inst_46554 = (state_46583[(5)]);
var inst_46558 = cljs.core.chunk_first.call(null,inst_46554);
var inst_46559 = cljs.core.chunk_rest.call(null,inst_46554);
var inst_46560 = cljs.core.count.call(null,inst_46558);
var inst_46540 = inst_46559;
var inst_46541 = inst_46558;
var inst_46542 = inst_46560;
var inst_46543 = (0);
var state_46583__$1 = (function (){var statearr_46600 = state_46583;
(statearr_46600[(6)] = inst_46540);

(statearr_46600[(7)] = inst_46542);

(statearr_46600[(8)] = inst_46541);

(statearr_46600[(10)] = inst_46543);

return statearr_46600;
})();
var statearr_46601_46628 = state_46583__$1;
(statearr_46601_46628[(2)] = null);

(statearr_46601_46628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46584 === (3))){
var inst_46581 = (state_46583[(2)]);
var state_46583__$1 = state_46583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46583__$1,inst_46581);
} else {
if((state_val_46584 === (12))){
var inst_46574 = (state_46583[(2)]);
var state_46583__$1 = state_46583;
var statearr_46602_46629 = state_46583__$1;
(statearr_46602_46629[(2)] = inst_46574);

(statearr_46602_46629[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46584 === (2))){
var state_46583__$1 = state_46583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46583__$1,(4),in$);
} else {
if((state_val_46584 === (19))){
var inst_46569 = (state_46583[(2)]);
var state_46583__$1 = state_46583;
var statearr_46603_46630 = state_46583__$1;
(statearr_46603_46630[(2)] = inst_46569);

(statearr_46603_46630[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46584 === (11))){
var inst_46540 = (state_46583[(6)]);
var inst_46554 = (state_46583[(5)]);
var inst_46554__$1 = cljs.core.seq.call(null,inst_46540);
var state_46583__$1 = (function (){var statearr_46604 = state_46583;
(statearr_46604[(5)] = inst_46554__$1);

return statearr_46604;
})();
if(inst_46554__$1){
var statearr_46605_46631 = state_46583__$1;
(statearr_46605_46631[(1)] = (14));

} else {
var statearr_46606_46632 = state_46583__$1;
(statearr_46606_46632[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46584 === (9))){
var inst_46576 = (state_46583[(2)]);
var state_46583__$1 = (function (){var statearr_46607 = state_46583;
(statearr_46607[(13)] = inst_46576);

return statearr_46607;
})();
var statearr_46608_46633 = state_46583__$1;
(statearr_46608_46633[(2)] = null);

(statearr_46608_46633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46584 === (5))){
var inst_46532 = cljs.core.async.close_BANG_.call(null,out);
var state_46583__$1 = state_46583;
var statearr_46609_46634 = state_46583__$1;
(statearr_46609_46634[(2)] = inst_46532);

(statearr_46609_46634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46584 === (14))){
var inst_46554 = (state_46583[(5)]);
var inst_46556 = cljs.core.chunked_seq_QMARK_.call(null,inst_46554);
var state_46583__$1 = state_46583;
if(inst_46556){
var statearr_46610_46635 = state_46583__$1;
(statearr_46610_46635[(1)] = (17));

} else {
var statearr_46611_46636 = state_46583__$1;
(statearr_46611_46636[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46584 === (16))){
var inst_46572 = (state_46583[(2)]);
var state_46583__$1 = state_46583;
var statearr_46612_46637 = state_46583__$1;
(statearr_46612_46637[(2)] = inst_46572);

(statearr_46612_46637[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46584 === (10))){
var inst_46541 = (state_46583[(8)]);
var inst_46543 = (state_46583[(10)]);
var inst_46548 = cljs.core._nth.call(null,inst_46541,inst_46543);
var state_46583__$1 = state_46583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46583__$1,(13),out,inst_46548);
} else {
if((state_val_46584 === (18))){
var inst_46554 = (state_46583[(5)]);
var inst_46563 = cljs.core.first.call(null,inst_46554);
var state_46583__$1 = state_46583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46583__$1,(20),out,inst_46563);
} else {
if((state_val_46584 === (8))){
var inst_46542 = (state_46583[(7)]);
var inst_46543 = (state_46583[(10)]);
var inst_46545 = (inst_46543 < inst_46542);
var inst_46546 = inst_46545;
var state_46583__$1 = state_46583;
if(cljs.core.truth_(inst_46546)){
var statearr_46613_46639 = state_46583__$1;
(statearr_46613_46639[(1)] = (10));

} else {
var statearr_46614_46641 = state_46583__$1;
(statearr_46614_46641[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__40014__auto__))
;
return ((function (switch__39995__auto__,c__40014__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__39996__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__39996__auto____0 = (function (){
var statearr_46616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46616[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__39996__auto__);

(statearr_46616[(1)] = (1));

return statearr_46616;
});
var cljs$core$async$mapcat_STAR__$_state_machine__39996__auto____1 = (function (state_46583){
while(true){
var result__39997__auto__ = switch__39995__auto__.call(null,state_46583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39997__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__39996__auto__ = function(state_46583){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__39996__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__39996__auto____1.call(this,state_46583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__39996__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__39996__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__39996__auto__;
})()
;})(switch__39995__auto__,c__40014__auto__))
})();
var state__40016__auto__ = (function (){var statearr_46617 = f__40015__auto__.call(null);
(statearr_46617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40014__auto__);

return statearr_46617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40016__auto__);
});})(c__40014__auto__))
);

return c__40014__auto__;
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
var args46642 = [];
var len__38153__auto___46645 = arguments.length;
var i__38154__auto___46646 = (0);
while(true){
if((i__38154__auto___46646 < len__38153__auto___46645)){
args46642.push((arguments[i__38154__auto___46646]));

var G__46647 = (i__38154__auto___46646 + (1));
i__38154__auto___46646 = G__46647;
continue;
} else {
}
break;
}

var G__46644 = args46642.length;
switch (G__46644) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46642.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

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
var args46653 = [];
var len__38153__auto___46659 = arguments.length;
var i__38154__auto___46660 = (0);
while(true){
if((i__38154__auto___46660 < len__38153__auto___46659)){
args46653.push((arguments[i__38154__auto___46660]));

var G__46661 = (i__38154__auto___46660 + (1));
i__38154__auto___46660 = G__46661;
continue;
} else {
}
break;
}

var G__46658 = args46653.length;
switch (G__46658) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46653.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

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
var args46668 = [];
var len__38153__auto___46715 = arguments.length;
var i__38154__auto___46717 = (0);
while(true){
if((i__38154__auto___46717 < len__38153__auto___46715)){
args46668.push((arguments[i__38154__auto___46717]));

var G__46718 = (i__38154__auto___46717 + (1));
i__38154__auto___46717 = G__46718;
continue;
} else {
}
break;
}

var G__46672 = args46668.length;
switch (G__46672) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46668.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__40014__auto___46720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40014__auto___46720){
return (function (){
var f__40015__auto__ = (function (){var switch__39995__auto__ = ((function (c__40014__auto___46720){
return (function (state_46692){
var state_val_46693 = (state_46692[(1)]);
if((state_val_46693 === (7))){
var inst_46688 = (state_46692[(2)]);
var state_46692__$1 = state_46692;
var statearr_46694_46721 = state_46692__$1;
(statearr_46694_46721[(2)] = inst_46688);

(statearr_46694_46721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46693 === (1))){
var state_46692__$1 = state_46692;
var statearr_46695_46722 = state_46692__$1;
(statearr_46695_46722[(2)] = null);

(statearr_46695_46722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46693 === (4))){
var inst_46675 = (state_46692[(5)]);
var inst_46675__$1 = (state_46692[(2)]);
var inst_46676 = (inst_46675__$1 == null);
var state_46692__$1 = (function (){var statearr_46696 = state_46692;
(statearr_46696[(5)] = inst_46675__$1);

return statearr_46696;
})();
if(cljs.core.truth_(inst_46676)){
var statearr_46697_46725 = state_46692__$1;
(statearr_46697_46725[(1)] = (5));

} else {
var statearr_46698_46727 = state_46692__$1;
(statearr_46698_46727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46693 === (6))){
var inst_46675 = (state_46692[(5)]);
var state_46692__$1 = state_46692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46692__$1,(11),to,inst_46675);
} else {
if((state_val_46693 === (3))){
var inst_46690 = (state_46692[(2)]);
var state_46692__$1 = state_46692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46692__$1,inst_46690);
} else {
if((state_val_46693 === (2))){
var state_46692__$1 = state_46692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46692__$1,(4),from);
} else {
if((state_val_46693 === (11))){
var inst_46685 = (state_46692[(2)]);
var state_46692__$1 = (function (){var statearr_46701 = state_46692;
(statearr_46701[(6)] = inst_46685);

return statearr_46701;
})();
var statearr_46702_46732 = state_46692__$1;
(statearr_46702_46732[(2)] = null);

(statearr_46702_46732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46693 === (9))){
var state_46692__$1 = state_46692;
var statearr_46703_46733 = state_46692__$1;
(statearr_46703_46733[(2)] = null);

(statearr_46703_46733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46693 === (5))){
var state_46692__$1 = state_46692;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46704_46735 = state_46692__$1;
(statearr_46704_46735[(1)] = (8));

} else {
var statearr_46706_46736 = state_46692__$1;
(statearr_46706_46736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46693 === (10))){
var inst_46682 = (state_46692[(2)]);
var state_46692__$1 = state_46692;
var statearr_46707_46737 = state_46692__$1;
(statearr_46707_46737[(2)] = inst_46682);

(statearr_46707_46737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46693 === (8))){
var inst_46679 = cljs.core.async.close_BANG_.call(null,to);
var state_46692__$1 = state_46692;
var statearr_46708_46740 = state_46692__$1;
(statearr_46708_46740[(2)] = inst_46679);

(statearr_46708_46740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__40014__auto___46720))
;
return ((function (switch__39995__auto__,c__40014__auto___46720){
return (function() {
var cljs$core$async$state_machine__39996__auto__ = null;
var cljs$core$async$state_machine__39996__auto____0 = (function (){
var statearr_46710 = [null,null,null,null,null,null,null];
(statearr_46710[(0)] = cljs$core$async$state_machine__39996__auto__);

(statearr_46710[(1)] = (1));

return statearr_46710;
});
var cljs$core$async$state_machine__39996__auto____1 = (function (state_46692){
while(true){
var result__39997__auto__ = switch__39995__auto__.call(null,state_46692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39997__auto__;
}
break;
}
});
cljs$core$async$state_machine__39996__auto__ = function(state_46692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39996__auto____1.call(this,state_46692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39996__auto____0;
cljs$core$async$state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39996__auto____1;
return cljs$core$async$state_machine__39996__auto__;
})()
;})(switch__39995__auto__,c__40014__auto___46720))
})();
var state__40016__auto__ = (function (){var statearr_46713 = f__40015__auto__.call(null);
(statearr_46713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40014__auto___46720);

return statearr_46713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40016__auto__);
});})(c__40014__auto___46720))
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
var args46743 = [];
var len__38153__auto___46788 = arguments.length;
var i__38154__auto___46789 = (0);
while(true){
if((i__38154__auto___46789 < len__38153__auto___46788)){
args46743.push((arguments[i__38154__auto___46789]));

var G__46790 = (i__38154__auto___46789 + (1));
i__38154__auto___46789 = G__46790;
continue;
} else {
}
break;
}

var G__46748 = args46743.length;
switch (G__46748) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46743.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__40014__auto___46792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40014__auto___46792,tc,fc){
return (function (){
var f__40015__auto__ = (function (){var switch__39995__auto__ = ((function (c__40014__auto___46792,tc,fc){
return (function (state_46770){
var state_val_46771 = (state_46770[(1)]);
if((state_val_46771 === (7))){
var inst_46766 = (state_46770[(2)]);
var state_46770__$1 = state_46770;
var statearr_46772_46793 = state_46770__$1;
(statearr_46772_46793[(2)] = inst_46766);

(statearr_46772_46793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46771 === (1))){
var state_46770__$1 = state_46770;
var statearr_46773_46794 = state_46770__$1;
(statearr_46773_46794[(2)] = null);

(statearr_46773_46794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46771 === (4))){
var inst_46751 = (state_46770[(5)]);
var inst_46751__$1 = (state_46770[(2)]);
var inst_46752 = (inst_46751__$1 == null);
var state_46770__$1 = (function (){var statearr_46774 = state_46770;
(statearr_46774[(5)] = inst_46751__$1);

return statearr_46774;
})();
if(cljs.core.truth_(inst_46752)){
var statearr_46775_46795 = state_46770__$1;
(statearr_46775_46795[(1)] = (5));

} else {
var statearr_46776_46796 = state_46770__$1;
(statearr_46776_46796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46771 === (6))){
var inst_46751 = (state_46770[(5)]);
var inst_46757 = p.call(null,inst_46751);
var state_46770__$1 = state_46770;
if(cljs.core.truth_(inst_46757)){
var statearr_46777_46797 = state_46770__$1;
(statearr_46777_46797[(1)] = (9));

} else {
var statearr_46778_46798 = state_46770__$1;
(statearr_46778_46798[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46771 === (3))){
var inst_46768 = (state_46770[(2)]);
var state_46770__$1 = state_46770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46770__$1,inst_46768);
} else {
if((state_val_46771 === (2))){
var state_46770__$1 = state_46770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46770__$1,(4),ch);
} else {
if((state_val_46771 === (11))){
var inst_46751 = (state_46770[(5)]);
var inst_46761 = (state_46770[(2)]);
var state_46770__$1 = state_46770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46770__$1,(8),inst_46761,inst_46751);
} else {
if((state_val_46771 === (9))){
var state_46770__$1 = state_46770;
var statearr_46779_46799 = state_46770__$1;
(statearr_46779_46799[(2)] = tc);

(statearr_46779_46799[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46771 === (5))){
var inst_46754 = cljs.core.async.close_BANG_.call(null,tc);
var inst_46755 = cljs.core.async.close_BANG_.call(null,fc);
var state_46770__$1 = (function (){var statearr_46780 = state_46770;
(statearr_46780[(6)] = inst_46754);

return statearr_46780;
})();
var statearr_46781_46800 = state_46770__$1;
(statearr_46781_46800[(2)] = inst_46755);

(statearr_46781_46800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46771 === (10))){
var state_46770__$1 = state_46770;
var statearr_46782_46801 = state_46770__$1;
(statearr_46782_46801[(2)] = fc);

(statearr_46782_46801[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46771 === (8))){
var inst_46763 = (state_46770[(2)]);
var state_46770__$1 = (function (){var statearr_46783 = state_46770;
(statearr_46783[(7)] = inst_46763);

return statearr_46783;
})();
var statearr_46784_46804 = state_46770__$1;
(statearr_46784_46804[(2)] = null);

(statearr_46784_46804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__40014__auto___46792,tc,fc))
;
return ((function (switch__39995__auto__,c__40014__auto___46792,tc,fc){
return (function() {
var cljs$core$async$state_machine__39996__auto__ = null;
var cljs$core$async$state_machine__39996__auto____0 = (function (){
var statearr_46786 = [null,null,null,null,null,null,null,null];
(statearr_46786[(0)] = cljs$core$async$state_machine__39996__auto__);

(statearr_46786[(1)] = (1));

return statearr_46786;
});
var cljs$core$async$state_machine__39996__auto____1 = (function (state_46770){
while(true){
var result__39997__auto__ = switch__39995__auto__.call(null,state_46770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39997__auto__;
}
break;
}
});
cljs$core$async$state_machine__39996__auto__ = function(state_46770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39996__auto____1.call(this,state_46770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39996__auto____0;
cljs$core$async$state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39996__auto____1;
return cljs$core$async$state_machine__39996__auto__;
})()
;})(switch__39995__auto__,c__40014__auto___46792,tc,fc))
})();
var state__40016__auto__ = (function (){var statearr_46787 = f__40015__auto__.call(null);
(statearr_46787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40014__auto___46792);

return statearr_46787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40016__auto__);
});})(c__40014__auto___46792,tc,fc))
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
var c__40014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40014__auto__){
return (function (){
var f__40015__auto__ = (function (){var switch__39995__auto__ = ((function (c__40014__auto__){
return (function (state_46854){
var state_val_46855 = (state_46854[(1)]);
if((state_val_46855 === (1))){
var inst_46840 = init;
var state_46854__$1 = (function (){var statearr_46856 = state_46854;
(statearr_46856[(5)] = inst_46840);

return statearr_46856;
})();
var statearr_46857_46868 = state_46854__$1;
(statearr_46857_46868[(2)] = null);

(statearr_46857_46868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46855 === (2))){
var state_46854__$1 = state_46854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46854__$1,(4),ch);
} else {
if((state_val_46855 === (3))){
var inst_46852 = (state_46854[(2)]);
var state_46854__$1 = state_46854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46854__$1,inst_46852);
} else {
if((state_val_46855 === (4))){
var inst_46843 = (state_46854[(6)]);
var inst_46843__$1 = (state_46854[(2)]);
var inst_46844 = (inst_46843__$1 == null);
var state_46854__$1 = (function (){var statearr_46858 = state_46854;
(statearr_46858[(6)] = inst_46843__$1);

return statearr_46858;
})();
if(cljs.core.truth_(inst_46844)){
var statearr_46859_46869 = state_46854__$1;
(statearr_46859_46869[(1)] = (5));

} else {
var statearr_46860_46870 = state_46854__$1;
(statearr_46860_46870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46855 === (5))){
var inst_46840 = (state_46854[(5)]);
var state_46854__$1 = state_46854;
var statearr_46861_46871 = state_46854__$1;
(statearr_46861_46871[(2)] = inst_46840);

(statearr_46861_46871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46855 === (6))){
var inst_46843 = (state_46854[(6)]);
var inst_46840 = (state_46854[(5)]);
var inst_46847 = f.call(null,inst_46840,inst_46843);
var inst_46840__$1 = inst_46847;
var state_46854__$1 = (function (){var statearr_46862 = state_46854;
(statearr_46862[(5)] = inst_46840__$1);

return statearr_46862;
})();
var statearr_46863_46874 = state_46854__$1;
(statearr_46863_46874[(2)] = null);

(statearr_46863_46874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46855 === (7))){
var inst_46850 = (state_46854[(2)]);
var state_46854__$1 = state_46854;
var statearr_46864_46875 = state_46854__$1;
(statearr_46864_46875[(2)] = inst_46850);

(statearr_46864_46875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__40014__auto__))
;
return ((function (switch__39995__auto__,c__40014__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__39996__auto__ = null;
var cljs$core$async$reduce_$_state_machine__39996__auto____0 = (function (){
var statearr_46866 = [null,null,null,null,null,null,null];
(statearr_46866[(0)] = cljs$core$async$reduce_$_state_machine__39996__auto__);

(statearr_46866[(1)] = (1));

return statearr_46866;
});
var cljs$core$async$reduce_$_state_machine__39996__auto____1 = (function (state_46854){
while(true){
var result__39997__auto__ = switch__39995__auto__.call(null,state_46854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39997__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__39996__auto__ = function(state_46854){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__39996__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__39996__auto____1.call(this,state_46854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__39996__auto____0;
cljs$core$async$reduce_$_state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__39996__auto____1;
return cljs$core$async$reduce_$_state_machine__39996__auto__;
})()
;})(switch__39995__auto__,c__40014__auto__))
})();
var state__40016__auto__ = (function (){var statearr_46867 = f__40015__auto__.call(null);
(statearr_46867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40014__auto__);

return statearr_46867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40016__auto__);
});})(c__40014__auto__))
);

return c__40014__auto__;
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
var args46877 = [];
var len__38153__auto___46926 = arguments.length;
var i__38154__auto___46927 = (0);
while(true){
if((i__38154__auto___46927 < len__38153__auto___46926)){
args46877.push((arguments[i__38154__auto___46927]));

var G__46928 = (i__38154__auto___46927 + (1));
i__38154__auto___46927 = G__46928;
continue;
} else {
}
break;
}

var G__46881 = args46877.length;
switch (G__46881) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46877.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__40014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40014__auto__){
return (function (){
var f__40015__auto__ = (function (){var switch__39995__auto__ = ((function (c__40014__auto__){
return (function (state_46903){
var state_val_46904 = (state_46903[(1)]);
if((state_val_46904 === (7))){
var inst_46883 = (state_46903[(5)]);
var inst_46888 = (state_46903[(2)]);
var inst_46889 = cljs.core.next.call(null,inst_46883);
var inst_46883__$1 = inst_46889;
var state_46903__$1 = (function (){var statearr_46906 = state_46903;
(statearr_46906[(5)] = inst_46883__$1);

(statearr_46906[(6)] = inst_46888);

return statearr_46906;
})();
var statearr_46908_46934 = state_46903__$1;
(statearr_46908_46934[(2)] = null);

(statearr_46908_46934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (1))){
var inst_46882 = cljs.core.seq.call(null,coll);
var inst_46883 = inst_46882;
var state_46903__$1 = (function (){var statearr_46909 = state_46903;
(statearr_46909[(5)] = inst_46883);

return statearr_46909;
})();
var statearr_46910_46935 = state_46903__$1;
(statearr_46910_46935[(2)] = null);

(statearr_46910_46935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (4))){
var inst_46883 = (state_46903[(5)]);
var inst_46886 = cljs.core.first.call(null,inst_46883);
var state_46903__$1 = state_46903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46903__$1,(7),ch,inst_46886);
} else {
if((state_val_46904 === (6))){
var inst_46898 = (state_46903[(2)]);
var state_46903__$1 = state_46903;
var statearr_46912_46938 = state_46903__$1;
(statearr_46912_46938[(2)] = inst_46898);

(statearr_46912_46938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (3))){
var inst_46900 = (state_46903[(2)]);
var state_46903__$1 = state_46903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46903__$1,inst_46900);
} else {
if((state_val_46904 === (2))){
var inst_46883 = (state_46903[(5)]);
var state_46903__$1 = state_46903;
if(cljs.core.truth_(inst_46883)){
var statearr_46913_46939 = state_46903__$1;
(statearr_46913_46939[(1)] = (4));

} else {
var statearr_46914_46940 = state_46903__$1;
(statearr_46914_46940[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (9))){
var state_46903__$1 = state_46903;
var statearr_46915_46945 = state_46903__$1;
(statearr_46915_46945[(2)] = null);

(statearr_46915_46945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (5))){
var state_46903__$1 = state_46903;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46916_46952 = state_46903__$1;
(statearr_46916_46952[(1)] = (8));

} else {
var statearr_46917_46953 = state_46903__$1;
(statearr_46917_46953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (10))){
var inst_46896 = (state_46903[(2)]);
var state_46903__$1 = state_46903;
var statearr_46918_46960 = state_46903__$1;
(statearr_46918_46960[(2)] = inst_46896);

(statearr_46918_46960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (8))){
var inst_46893 = cljs.core.async.close_BANG_.call(null,ch);
var state_46903__$1 = state_46903;
var statearr_46919_46971 = state_46903__$1;
(statearr_46919_46971[(2)] = inst_46893);

(statearr_46919_46971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__40014__auto__))
;
return ((function (switch__39995__auto__,c__40014__auto__){
return (function() {
var cljs$core$async$state_machine__39996__auto__ = null;
var cljs$core$async$state_machine__39996__auto____0 = (function (){
var statearr_46921 = [null,null,null,null,null,null,null];
(statearr_46921[(0)] = cljs$core$async$state_machine__39996__auto__);

(statearr_46921[(1)] = (1));

return statearr_46921;
});
var cljs$core$async$state_machine__39996__auto____1 = (function (state_46903){
while(true){
var result__39997__auto__ = switch__39995__auto__.call(null,state_46903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39997__auto__;
}
break;
}
});
cljs$core$async$state_machine__39996__auto__ = function(state_46903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39996__auto____1.call(this,state_46903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39996__auto____0;
cljs$core$async$state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39996__auto____1;
return cljs$core$async$state_machine__39996__auto__;
})()
;})(switch__39995__auto__,c__40014__auto__))
})();
var state__40016__auto__ = (function (){var statearr_46924 = f__40015__auto__.call(null);
(statearr_46924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40014__auto__);

return statearr_46924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40016__auto__);
});})(c__40014__auto__))
);

return c__40014__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
var x__37741__auto__ = (((_ == null))?null:_);
var m__37742__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__37741__auto__)]);
if(!((m__37742__auto__ == null))){
return m__37742__auto__.call(null,_);
} else {
var m__37742__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__37742__auto____$1 == null))){
return m__37742__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
var x__37741__auto__ = (((m == null))?null:m);
var m__37742__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__37741__auto__)]);
if(!((m__37742__auto__ == null))){
return m__37742__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__37742__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__37742__auto____$1 == null))){
return m__37742__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__37741__auto__ = (((m == null))?null:m);
var m__37742__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__37741__auto__)]);
if(!((m__37742__auto__ == null))){
return m__37742__auto__.call(null,m,ch);
} else {
var m__37742__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__37742__auto____$1 == null))){
return m__37742__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__37741__auto__ = (((m == null))?null:m);
var m__37742__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__37741__auto__)]);
if(!((m__37742__auto__ == null))){
return m__37742__auto__.call(null,m);
} else {
var m__37742__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__37742__auto____$1 == null))){
return m__37742__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async47203 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47203 = (function (mult,ch,cs,meta47204){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta47204 = meta47204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47205,meta47204__$1){
var self__ = this;
var _47205__$1 = this;
return (new cljs.core.async.t_cljs$core$async47203(self__.mult,self__.ch,self__.cs,meta47204__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async47203.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47205){
var self__ = this;
var _47205__$1 = this;
return self__.meta47204;
});})(cs))
;

cljs.core.async.t_cljs$core$async47203.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async47203.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async47203.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async47203.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47203.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47203.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47203.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  If a tap put throws an exception, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47204","meta47204",284106008,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async47203.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47203";

cljs.core.async.t_cljs$core$async47203.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__37684__auto__,writer__37685__auto__,opt__37686__auto__){
return cljs.core._write.call(null,writer__37685__auto__,"cljs.core.async/t_cljs$core$async47203");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async47203 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async47203(mult__$1,ch__$1,cs__$1,meta47204){
return (new cljs.core.async.t_cljs$core$async47203(mult__$1,ch__$1,cs__$1,meta47204));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async47203(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__40014__auto___47451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40014__auto___47451,cs,m,dchan,dctr,done){
return (function (){
var f__40015__auto__ = (function (){var switch__39995__auto__ = ((function (c__40014__auto___47451,cs,m,dchan,dctr,done){
return (function (state_47339){
var state_val_47340 = (state_47339[(1)]);
if((state_val_47340 === (7))){
var inst_47335 = (state_47339[(2)]);
var state_47339__$1 = state_47339;
var statearr_47344_47452 = state_47339__$1;
(statearr_47344_47452[(2)] = inst_47335);

(statearr_47344_47452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (20))){
var inst_47239 = (state_47339[(5)]);
var inst_47251 = cljs.core.first.call(null,inst_47239);
var inst_47252 = cljs.core.nth.call(null,inst_47251,(0),null);
var inst_47253 = cljs.core.nth.call(null,inst_47251,(1),null);
var state_47339__$1 = (function (){var statearr_47345 = state_47339;
(statearr_47345[(6)] = inst_47252);

return statearr_47345;
})();
if(cljs.core.truth_(inst_47253)){
var statearr_47346_47453 = state_47339__$1;
(statearr_47346_47453[(1)] = (22));

} else {
var statearr_47347_47454 = state_47339__$1;
(statearr_47347_47454[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (27))){
var inst_47283 = (state_47339[(7)]);
var inst_47281 = (state_47339[(8)]);
var inst_47288 = cljs.core._nth.call(null,inst_47281,inst_47283);
var state_47339__$1 = (function (){var statearr_47348 = state_47339;
(statearr_47348[(9)] = inst_47288);

return statearr_47348;
})();
var statearr_47349_47460 = state_47339__$1;
(statearr_47349_47460[(2)] = null);

(statearr_47349_47460[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (1))){
var state_47339__$1 = state_47339;
var statearr_47353_47461 = state_47339__$1;
(statearr_47353_47461[(2)] = null);

(statearr_47353_47461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (24))){
var inst_47239 = (state_47339[(5)]);
var inst_47258 = (state_47339[(2)]);
var inst_47259 = cljs.core.next.call(null,inst_47239);
var inst_47217 = inst_47259;
var inst_47218 = null;
var inst_47219 = (0);
var inst_47220 = (0);
var state_47339__$1 = (function (){var statearr_47354 = state_47339;
(statearr_47354[(10)] = inst_47217);

(statearr_47354[(11)] = inst_47218);

(statearr_47354[(12)] = inst_47219);

(statearr_47354[(13)] = inst_47258);

(statearr_47354[(14)] = inst_47220);

return statearr_47354;
})();
var statearr_47355_47465 = state_47339__$1;
(statearr_47355_47465[(2)] = null);

(statearr_47355_47465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (39))){
var inst_47301 = (state_47339[(15)]);
var inst_47319 = (state_47339[(2)]);
var inst_47320 = cljs.core.next.call(null,inst_47301);
var inst_47280 = inst_47320;
var inst_47281 = null;
var inst_47282 = (0);
var inst_47283 = (0);
var state_47339__$1 = (function (){var statearr_47359 = state_47339;
(statearr_47359[(7)] = inst_47283);

(statearr_47359[(8)] = inst_47281);

(statearr_47359[(16)] = inst_47280);

(statearr_47359[(17)] = inst_47319);

(statearr_47359[(18)] = inst_47282);

return statearr_47359;
})();
var statearr_47360_47466 = state_47339__$1;
(statearr_47360_47466[(2)] = null);

(statearr_47360_47466[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (4))){
var inst_47208 = (state_47339[(19)]);
var inst_47208__$1 = (state_47339[(2)]);
var inst_47209 = (inst_47208__$1 == null);
var state_47339__$1 = (function (){var statearr_47361 = state_47339;
(statearr_47361[(19)] = inst_47208__$1);

return statearr_47361;
})();
if(cljs.core.truth_(inst_47209)){
var statearr_47362_47467 = state_47339__$1;
(statearr_47362_47467[(1)] = (5));

} else {
var statearr_47363_47468 = state_47339__$1;
(statearr_47363_47468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (15))){
var inst_47217 = (state_47339[(10)]);
var inst_47218 = (state_47339[(11)]);
var inst_47219 = (state_47339[(12)]);
var inst_47220 = (state_47339[(14)]);
var inst_47235 = (state_47339[(2)]);
var inst_47236 = (inst_47220 + (1));
var tmp47356 = inst_47217;
var tmp47357 = inst_47218;
var tmp47358 = inst_47219;
var inst_47217__$1 = tmp47356;
var inst_47218__$1 = tmp47357;
var inst_47219__$1 = tmp47358;
var inst_47220__$1 = inst_47236;
var state_47339__$1 = (function (){var statearr_47364 = state_47339;
(statearr_47364[(10)] = inst_47217__$1);

(statearr_47364[(11)] = inst_47218__$1);

(statearr_47364[(20)] = inst_47235);

(statearr_47364[(12)] = inst_47219__$1);

(statearr_47364[(14)] = inst_47220__$1);

return statearr_47364;
})();
var statearr_47365_47469 = state_47339__$1;
(statearr_47365_47469[(2)] = null);

(statearr_47365_47469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (21))){
var inst_47262 = (state_47339[(2)]);
var state_47339__$1 = state_47339;
var statearr_47370_47470 = state_47339__$1;
(statearr_47370_47470[(2)] = inst_47262);

(statearr_47370_47470[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (31))){
var inst_47288 = (state_47339[(9)]);
var inst_47289 = (state_47339[(2)]);
var inst_47290 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_47291 = cljs.core.async.untap_STAR_.call(null,m,inst_47288);
var state_47339__$1 = (function (){var statearr_47371 = state_47339;
(statearr_47371[(21)] = inst_47290);

(statearr_47371[(22)] = inst_47289);

return statearr_47371;
})();
var statearr_47372_47471 = state_47339__$1;
(statearr_47372_47471[(2)] = inst_47291);

(statearr_47372_47471[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (32))){
try{var inst_47208 = (state_47339[(19)]);
var inst_47288 = (state_47339[(9)]);
var inst_47294 = cljs.core.async.put_BANG_.call(null,inst_47288,inst_47208,done);
var state_47339__$1 = state_47339;
var statearr_47375_47472 = state_47339__$1;
(statearr_47375_47472[(2)] = inst_47294);

(statearr_47375_47472[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
}catch (e47373){if((e47373 instanceof Object)){
var ex__39989__auto__ = e47373;
var statearr_47374_47473 = state_47339;
(statearr_47374_47473[(1)] = (31));

(statearr_47374_47473[(2)] = ex__39989__auto__);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47373;

}
}} else {
if((state_val_47340 === (40))){
var inst_47311 = (state_47339[(23)]);
var inst_47312 = (state_47339[(2)]);
var inst_47313 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_47314 = cljs.core.async.untap_STAR_.call(null,m,inst_47311);
var state_47339__$1 = (function (){var statearr_47376 = state_47339;
(statearr_47376[(24)] = inst_47313);

(statearr_47376[(25)] = inst_47312);

return statearr_47376;
})();
var statearr_47377_47476 = state_47339__$1;
(statearr_47377_47476[(2)] = inst_47314);

(statearr_47377_47476[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (33))){
var inst_47301 = (state_47339[(15)]);
var inst_47304 = cljs.core.chunked_seq_QMARK_.call(null,inst_47301);
var state_47339__$1 = state_47339;
if(inst_47304){
var statearr_47378_47485 = state_47339__$1;
(statearr_47378_47485[(1)] = (36));

} else {
var statearr_47379_47486 = state_47339__$1;
(statearr_47379_47486[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (13))){
var inst_47229 = (state_47339[(26)]);
var inst_47232 = cljs.core.async.close_BANG_.call(null,inst_47229);
var state_47339__$1 = state_47339;
var statearr_47380_47487 = state_47339__$1;
(statearr_47380_47487[(2)] = inst_47232);

(statearr_47380_47487[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (22))){
var inst_47252 = (state_47339[(6)]);
var inst_47255 = cljs.core.async.close_BANG_.call(null,inst_47252);
var state_47339__$1 = state_47339;
var statearr_47381_47491 = state_47339__$1;
(statearr_47381_47491[(2)] = inst_47255);

(statearr_47381_47491[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (36))){
var inst_47301 = (state_47339[(15)]);
var inst_47306 = cljs.core.chunk_first.call(null,inst_47301);
var inst_47307 = cljs.core.chunk_rest.call(null,inst_47301);
var inst_47308 = cljs.core.count.call(null,inst_47306);
var inst_47280 = inst_47307;
var inst_47281 = inst_47306;
var inst_47282 = inst_47308;
var inst_47283 = (0);
var state_47339__$1 = (function (){var statearr_47382 = state_47339;
(statearr_47382[(7)] = inst_47283);

(statearr_47382[(8)] = inst_47281);

(statearr_47382[(16)] = inst_47280);

(statearr_47382[(18)] = inst_47282);

return statearr_47382;
})();
var statearr_47383_47495 = state_47339__$1;
(statearr_47383_47495[(2)] = null);

(statearr_47383_47495[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (41))){
try{var inst_47208 = (state_47339[(19)]);
var inst_47311 = (state_47339[(23)]);
var inst_47317 = cljs.core.async.put_BANG_.call(null,inst_47311,inst_47208,done);
var state_47339__$1 = state_47339;
var statearr_47388_47496 = state_47339__$1;
(statearr_47388_47496[(2)] = inst_47317);

(statearr_47388_47496[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
}catch (e47384){if((e47384 instanceof Object)){
var ex__39989__auto__ = e47384;
var statearr_47385_47497 = state_47339;
(statearr_47385_47497[(1)] = (40));

(statearr_47385_47497[(2)] = ex__39989__auto__);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47384;

}
}} else {
if((state_val_47340 === (29))){
var inst_47328 = (state_47339[(2)]);
var state_47339__$1 = state_47339;
var statearr_47389_47498 = state_47339__$1;
(statearr_47389_47498[(2)] = inst_47328);

(statearr_47389_47498[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (6))){
var inst_47271 = cljs.core.deref.call(null,cs);
var inst_47272 = cljs.core.keys.call(null,inst_47271);
var inst_47273 = cljs.core.count.call(null,inst_47272);
var inst_47274 = cljs.core.reset_BANG_.call(null,dctr,inst_47273);
var inst_47279 = cljs.core.seq.call(null,inst_47272);
var inst_47280 = inst_47279;
var inst_47281 = null;
var inst_47282 = (0);
var inst_47283 = (0);
var state_47339__$1 = (function (){var statearr_47392 = state_47339;
(statearr_47392[(7)] = inst_47283);

(statearr_47392[(8)] = inst_47281);

(statearr_47392[(27)] = inst_47274);

(statearr_47392[(16)] = inst_47280);

(statearr_47392[(18)] = inst_47282);

return statearr_47392;
})();
var statearr_47393_47504 = state_47339__$1;
(statearr_47393_47504[(2)] = null);

(statearr_47393_47504[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (28))){
var inst_47280 = (state_47339[(16)]);
var inst_47301 = (state_47339[(15)]);
var inst_47301__$1 = cljs.core.seq.call(null,inst_47280);
var state_47339__$1 = (function (){var statearr_47396 = state_47339;
(statearr_47396[(15)] = inst_47301__$1);

return statearr_47396;
})();
if(inst_47301__$1){
var statearr_47397_47507 = state_47339__$1;
(statearr_47397_47507[(1)] = (33));

} else {
var statearr_47398_47508 = state_47339__$1;
(statearr_47398_47508[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (25))){
var inst_47283 = (state_47339[(7)]);
var inst_47282 = (state_47339[(18)]);
var inst_47285 = (inst_47283 < inst_47282);
var inst_47286 = inst_47285;
var state_47339__$1 = state_47339;
if(cljs.core.truth_(inst_47286)){
var statearr_47401_47509 = state_47339__$1;
(statearr_47401_47509[(1)] = (27));

} else {
var statearr_47402_47510 = state_47339__$1;
(statearr_47402_47510[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (34))){
var state_47339__$1 = state_47339;
var statearr_47403_47511 = state_47339__$1;
(statearr_47403_47511[(2)] = null);

(statearr_47403_47511[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (17))){
var state_47339__$1 = state_47339;
var statearr_47404_47512 = state_47339__$1;
(statearr_47404_47512[(2)] = null);

(statearr_47404_47512[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (3))){
var inst_47337 = (state_47339[(2)]);
var state_47339__$1 = state_47339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47339__$1,inst_47337);
} else {
if((state_val_47340 === (12))){
var inst_47267 = (state_47339[(2)]);
var state_47339__$1 = state_47339;
var statearr_47405_47513 = state_47339__$1;
(statearr_47405_47513[(2)] = inst_47267);

(statearr_47405_47513[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (2))){
var state_47339__$1 = state_47339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47339__$1,(4),ch);
} else {
if((state_val_47340 === (23))){
var state_47339__$1 = state_47339;
var statearr_47406_47514 = state_47339__$1;
(statearr_47406_47514[(2)] = null);

(statearr_47406_47514[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (35))){
var inst_47326 = (state_47339[(2)]);
var state_47339__$1 = state_47339;
var statearr_47407_47515 = state_47339__$1;
(statearr_47407_47515[(2)] = inst_47326);

(statearr_47407_47515[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (19))){
var inst_47239 = (state_47339[(5)]);
var inst_47243 = cljs.core.chunk_first.call(null,inst_47239);
var inst_47244 = cljs.core.chunk_rest.call(null,inst_47239);
var inst_47245 = cljs.core.count.call(null,inst_47243);
var inst_47217 = inst_47244;
var inst_47218 = inst_47243;
var inst_47219 = inst_47245;
var inst_47220 = (0);
var state_47339__$1 = (function (){var statearr_47408 = state_47339;
(statearr_47408[(10)] = inst_47217);

(statearr_47408[(11)] = inst_47218);

(statearr_47408[(12)] = inst_47219);

(statearr_47408[(14)] = inst_47220);

return statearr_47408;
})();
var statearr_47409_47516 = state_47339__$1;
(statearr_47409_47516[(2)] = null);

(statearr_47409_47516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (11))){
var inst_47217 = (state_47339[(10)]);
var inst_47239 = (state_47339[(5)]);
var inst_47239__$1 = cljs.core.seq.call(null,inst_47217);
var state_47339__$1 = (function (){var statearr_47410 = state_47339;
(statearr_47410[(5)] = inst_47239__$1);

return statearr_47410;
})();
if(inst_47239__$1){
var statearr_47411_47517 = state_47339__$1;
(statearr_47411_47517[(1)] = (16));

} else {
var statearr_47412_47518 = state_47339__$1;
(statearr_47412_47518[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (9))){
var inst_47269 = (state_47339[(2)]);
var state_47339__$1 = state_47339;
var statearr_47413_47519 = state_47339__$1;
(statearr_47413_47519[(2)] = inst_47269);

(statearr_47413_47519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (5))){
var inst_47215 = cljs.core.deref.call(null,cs);
var inst_47216 = cljs.core.seq.call(null,inst_47215);
var inst_47217 = inst_47216;
var inst_47218 = null;
var inst_47219 = (0);
var inst_47220 = (0);
var state_47339__$1 = (function (){var statearr_47414 = state_47339;
(statearr_47414[(10)] = inst_47217);

(statearr_47414[(11)] = inst_47218);

(statearr_47414[(12)] = inst_47219);

(statearr_47414[(14)] = inst_47220);

return statearr_47414;
})();
var statearr_47415_47520 = state_47339__$1;
(statearr_47415_47520[(2)] = null);

(statearr_47415_47520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (14))){
var state_47339__$1 = state_47339;
var statearr_47416_47521 = state_47339__$1;
(statearr_47416_47521[(2)] = null);

(statearr_47416_47521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (26))){
var inst_47330 = (state_47339[(2)]);
var state_47339__$1 = (function (){var statearr_47419 = state_47339;
(statearr_47419[(28)] = inst_47330);

return statearr_47419;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47339__$1,(42),dchan);
} else {
if((state_val_47340 === (16))){
var inst_47239 = (state_47339[(5)]);
var inst_47241 = cljs.core.chunked_seq_QMARK_.call(null,inst_47239);
var state_47339__$1 = state_47339;
if(inst_47241){
var statearr_47424_47525 = state_47339__$1;
(statearr_47424_47525[(1)] = (19));

} else {
var statearr_47426_47526 = state_47339__$1;
(statearr_47426_47526[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (38))){
var inst_47323 = (state_47339[(2)]);
var state_47339__$1 = state_47339;
var statearr_47427_47527 = state_47339__$1;
(statearr_47427_47527[(2)] = inst_47323);

(statearr_47427_47527[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (30))){
var inst_47283 = (state_47339[(7)]);
var inst_47281 = (state_47339[(8)]);
var inst_47280 = (state_47339[(16)]);
var inst_47282 = (state_47339[(18)]);
var inst_47296 = (state_47339[(2)]);
var inst_47298 = (inst_47283 + (1));
var tmp47420 = inst_47281;
var tmp47421 = inst_47280;
var tmp47422 = inst_47282;
var inst_47280__$1 = tmp47421;
var inst_47281__$1 = tmp47420;
var inst_47282__$1 = tmp47422;
var inst_47283__$1 = inst_47298;
var state_47339__$1 = (function (){var statearr_47430 = state_47339;
(statearr_47430[(7)] = inst_47283__$1);

(statearr_47430[(8)] = inst_47281__$1);

(statearr_47430[(16)] = inst_47280__$1);

(statearr_47430[(29)] = inst_47296);

(statearr_47430[(18)] = inst_47282__$1);

return statearr_47430;
})();
var statearr_47433_47528 = state_47339__$1;
(statearr_47433_47528[(2)] = null);

(statearr_47433_47528[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (10))){
var inst_47218 = (state_47339[(11)]);
var inst_47220 = (state_47339[(14)]);
var inst_47228 = cljs.core._nth.call(null,inst_47218,inst_47220);
var inst_47229 = cljs.core.nth.call(null,inst_47228,(0),null);
var inst_47230 = cljs.core.nth.call(null,inst_47228,(1),null);
var state_47339__$1 = (function (){var statearr_47434 = state_47339;
(statearr_47434[(26)] = inst_47229);

return statearr_47434;
})();
if(cljs.core.truth_(inst_47230)){
var statearr_47435_47530 = state_47339__$1;
(statearr_47435_47530[(1)] = (13));

} else {
var statearr_47436_47531 = state_47339__$1;
(statearr_47436_47531[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (18))){
var inst_47265 = (state_47339[(2)]);
var state_47339__$1 = state_47339;
var statearr_47437_47532 = state_47339__$1;
(statearr_47437_47532[(2)] = inst_47265);

(statearr_47437_47532[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (42))){
var inst_47332 = (state_47339[(2)]);
var state_47339__$1 = (function (){var statearr_47438 = state_47339;
(statearr_47438[(30)] = inst_47332);

return statearr_47438;
})();
var statearr_47439_47533 = state_47339__$1;
(statearr_47439_47533[(2)] = null);

(statearr_47439_47533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (37))){
var inst_47301 = (state_47339[(15)]);
var inst_47311 = cljs.core.first.call(null,inst_47301);
var state_47339__$1 = (function (){var statearr_47440 = state_47339;
(statearr_47440[(23)] = inst_47311);

return statearr_47440;
})();
var statearr_47441_47534 = state_47339__$1;
(statearr_47441_47534[(2)] = null);

(statearr_47441_47534[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47340 === (8))){
var inst_47219 = (state_47339[(12)]);
var inst_47220 = (state_47339[(14)]);
var inst_47222 = (inst_47220 < inst_47219);
var inst_47223 = inst_47222;
var state_47339__$1 = state_47339;
if(cljs.core.truth_(inst_47223)){
var statearr_47442_47536 = state_47339__$1;
(statearr_47442_47536[(1)] = (10));

} else {
var statearr_47443_47537 = state_47339__$1;
(statearr_47443_47537[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__40014__auto___47451,cs,m,dchan,dctr,done))
;
return ((function (switch__39995__auto__,c__40014__auto___47451,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__39996__auto__ = null;
var cljs$core$async$mult_$_state_machine__39996__auto____0 = (function (){
var statearr_47445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47445[(0)] = cljs$core$async$mult_$_state_machine__39996__auto__);

(statearr_47445[(1)] = (1));

return statearr_47445;
});
var cljs$core$async$mult_$_state_machine__39996__auto____1 = (function (state_47339){
while(true){
var result__39997__auto__ = switch__39995__auto__.call(null,state_47339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39997__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__39996__auto__ = function(state_47339){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__39996__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__39996__auto____1.call(this,state_47339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__39996__auto____0;
cljs$core$async$mult_$_state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__39996__auto____1;
return cljs$core$async$mult_$_state_machine__39996__auto__;
})()
;})(switch__39995__auto__,c__40014__auto___47451,cs,m,dchan,dctr,done))
})();
var state__40016__auto__ = (function (){var statearr_47446 = f__40015__auto__.call(null);
(statearr_47446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40014__auto___47451);

return statearr_47446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40016__auto__);
});})(c__40014__auto___47451,cs,m,dchan,dctr,done))
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
var args47538 = [];
var len__38153__auto___47541 = arguments.length;
var i__38154__auto___47542 = (0);
while(true){
if((i__38154__auto___47542 < len__38153__auto___47541)){
args47538.push((arguments[i__38154__auto___47542]));

var G__47543 = (i__38154__auto___47542 + (1));
i__38154__auto___47542 = G__47543;
continue;
} else {
}
break;
}

var G__47540 = args47538.length;
switch (G__47540) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47538.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__37741__auto__ = (((m == null))?null:m);
var m__37742__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__37741__auto__)]);
if(!((m__37742__auto__ == null))){
return m__37742__auto__.call(null,m,ch);
} else {
var m__37742__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__37742__auto____$1 == null))){
return m__37742__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__37741__auto__ = (((m == null))?null:m);
var m__37742__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__37741__auto__)]);
if(!((m__37742__auto__ == null))){
return m__37742__auto__.call(null,m,ch);
} else {
var m__37742__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__37742__auto____$1 == null))){
return m__37742__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__37741__auto__ = (((m == null))?null:m);
var m__37742__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__37741__auto__)]);
if(!((m__37742__auto__ == null))){
return m__37742__auto__.call(null,m);
} else {
var m__37742__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__37742__auto____$1 == null))){
return m__37742__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__37741__auto__ = (((m == null))?null:m);
var m__37742__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__37741__auto__)]);
if(!((m__37742__auto__ == null))){
return m__37742__auto__.call(null,m,state_map);
} else {
var m__37742__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__37742__auto____$1 == null))){
return m__37742__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__37741__auto__ = (((m == null))?null:m);
var m__37742__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__37741__auto__)]);
if(!((m__37742__auto__ == null))){
return m__37742__auto__.call(null,m,mode);
} else {
var m__37742__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__37742__auto____$1 == null))){
return m__37742__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async47696 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47696 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47697){
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
this.meta47697 = meta47697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47698,meta47697__$1){
var self__ = this;
var _47698__$1 = this;
return (new cljs.core.async.t_cljs$core$async47696(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47697__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47696.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47698){
var self__ = this;
var _47698__$1 = this;
return self__.meta47697;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47696.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async47696.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47696.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async47696.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47696.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47696.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47696.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47696.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47696.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47697","meta47697",-2069341099,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47696.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47696.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47696";

cljs.core.async.t_cljs$core$async47696.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__37684__auto__,writer__37685__auto__,opt__37686__auto__){
return cljs.core._write.call(null,writer__37685__auto__,"cljs.core.async/t_cljs$core$async47696");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async47696 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async47696(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47697){
return (new cljs.core.async.t_cljs$core$async47696(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47697));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async47696(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40014__auto___47884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40014__auto___47884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__40015__auto__ = (function (){var switch__39995__auto__ = ((function (c__40014__auto___47884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_47794){
var state_val_47795 = (state_47794[(1)]);
if((state_val_47795 === (7))){
var inst_47715 = (state_47794[(2)]);
var state_47794__$1 = state_47794;
var statearr_47796_47885 = state_47794__$1;
(statearr_47796_47885[(2)] = inst_47715);

(statearr_47796_47885[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (20))){
var inst_47727 = (state_47794[(5)]);
var state_47794__$1 = state_47794;
var statearr_47797_47886 = state_47794__$1;
(statearr_47797_47886[(2)] = inst_47727);

(statearr_47797_47886[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (27))){
var state_47794__$1 = state_47794;
var statearr_47798_47887 = state_47794__$1;
(statearr_47798_47887[(2)] = null);

(statearr_47798_47887[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (1))){
var inst_47702 = (state_47794[(6)]);
var inst_47702__$1 = calc_state.call(null);
var inst_47704 = (inst_47702__$1 == null);
var inst_47705 = cljs.core.not.call(null,inst_47704);
var state_47794__$1 = (function (){var statearr_47799 = state_47794;
(statearr_47799[(6)] = inst_47702__$1);

return statearr_47799;
})();
if(inst_47705){
var statearr_47800_47888 = state_47794__$1;
(statearr_47800_47888[(1)] = (2));

} else {
var statearr_47801_47889 = state_47794__$1;
(statearr_47801_47889[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (24))){
var inst_47750 = (state_47794[(7)]);
var inst_47759 = (state_47794[(8)]);
var inst_47773 = (state_47794[(9)]);
var inst_47773__$1 = inst_47750.call(null,inst_47759);
var state_47794__$1 = (function (){var statearr_47802 = state_47794;
(statearr_47802[(9)] = inst_47773__$1);

return statearr_47802;
})();
if(cljs.core.truth_(inst_47773__$1)){
var statearr_47803_47890 = state_47794__$1;
(statearr_47803_47890[(1)] = (29));

} else {
var statearr_47804_47891 = state_47794__$1;
(statearr_47804_47891[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (4))){
var inst_47718 = (state_47794[(2)]);
var state_47794__$1 = state_47794;
if(cljs.core.truth_(inst_47718)){
var statearr_47805_47892 = state_47794__$1;
(statearr_47805_47892[(1)] = (8));

} else {
var statearr_47806_47893 = state_47794__$1;
(statearr_47806_47893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (15))){
var inst_47744 = (state_47794[(2)]);
var state_47794__$1 = state_47794;
if(cljs.core.truth_(inst_47744)){
var statearr_47807_47894 = state_47794__$1;
(statearr_47807_47894[(1)] = (19));

} else {
var statearr_47808_47895 = state_47794__$1;
(statearr_47808_47895[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (21))){
var inst_47749 = (state_47794[(10)]);
var inst_47749__$1 = (state_47794[(2)]);
var inst_47750 = cljs.core.get.call(null,inst_47749__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47751 = cljs.core.get.call(null,inst_47749__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47752 = cljs.core.get.call(null,inst_47749__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47794__$1 = (function (){var statearr_47809 = state_47794;
(statearr_47809[(10)] = inst_47749__$1);

(statearr_47809[(7)] = inst_47750);

(statearr_47809[(11)] = inst_47751);

return statearr_47809;
})();
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_47794__$1,(22),inst_47752);
} else {
if((state_val_47795 === (31))){
var inst_47781 = (state_47794[(2)]);
var state_47794__$1 = state_47794;
if(cljs.core.truth_(inst_47781)){
var statearr_47810_47896 = state_47794__$1;
(statearr_47810_47896[(1)] = (32));

} else {
var statearr_47811_47897 = state_47794__$1;
(statearr_47811_47897[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (32))){
var inst_47758 = (state_47794[(12)]);
var state_47794__$1 = state_47794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47794__$1,(35),out,inst_47758);
} else {
if((state_val_47795 === (33))){
var state_47794__$1 = state_47794;
var statearr_47812_47898 = state_47794__$1;
(statearr_47812_47898[(2)] = null);

(statearr_47812_47898[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (13))){
var inst_47727 = (state_47794[(5)]);
var inst_47734 = inst_47727.cljs$lang$protocol_mask$partition0$;
var inst_47735 = (inst_47734 & (64));
var inst_47736 = inst_47727.cljs$core$ISeq$;
var inst_47737 = (inst_47735) || (inst_47736);
var state_47794__$1 = state_47794;
if(cljs.core.truth_(inst_47737)){
var statearr_47813_47899 = state_47794__$1;
(statearr_47813_47899[(1)] = (16));

} else {
var statearr_47814_47900 = state_47794__$1;
(statearr_47814_47900[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (22))){
var inst_47758 = (state_47794[(12)]);
var inst_47759 = (state_47794[(8)]);
var inst_47757 = (state_47794[(2)]);
var inst_47758__$1 = cljs.core.nth.call(null,inst_47757,(0),null);
var inst_47759__$1 = cljs.core.nth.call(null,inst_47757,(1),null);
var inst_47760 = (inst_47758__$1 == null);
var inst_47761 = cljs.core._EQ_.call(null,inst_47759__$1,change);
var inst_47762 = (inst_47760) || (inst_47761);
var state_47794__$1 = (function (){var statearr_47815 = state_47794;
(statearr_47815[(12)] = inst_47758__$1);

(statearr_47815[(8)] = inst_47759__$1);

return statearr_47815;
})();
if(cljs.core.truth_(inst_47762)){
var statearr_47816_47901 = state_47794__$1;
(statearr_47816_47901[(1)] = (23));

} else {
var statearr_47817_47902 = state_47794__$1;
(statearr_47817_47902[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (29))){
var inst_47773 = (state_47794[(9)]);
var state_47794__$1 = state_47794;
var statearr_47818_47903 = state_47794__$1;
(statearr_47818_47903[(2)] = inst_47773);

(statearr_47818_47903[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (6))){
var state_47794__$1 = state_47794;
var statearr_47819_47904 = state_47794__$1;
(statearr_47819_47904[(2)] = false);

(statearr_47819_47904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (28))){
var inst_47769 = (state_47794[(2)]);
var inst_47770 = calc_state.call(null);
var inst_47727 = inst_47770;
var state_47794__$1 = (function (){var statearr_47820 = state_47794;
(statearr_47820[(5)] = inst_47727);

(statearr_47820[(13)] = inst_47769);

return statearr_47820;
})();
var statearr_47821_47905 = state_47794__$1;
(statearr_47821_47905[(2)] = null);

(statearr_47821_47905[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (25))){
var inst_47790 = (state_47794[(2)]);
var state_47794__$1 = state_47794;
var statearr_47822_47906 = state_47794__$1;
(statearr_47822_47906[(2)] = inst_47790);

(statearr_47822_47906[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (34))){
var inst_47749 = (state_47794[(10)]);
var inst_47787 = (state_47794[(2)]);
var inst_47727 = inst_47749;
var state_47794__$1 = (function (){var statearr_47823 = state_47794;
(statearr_47823[(5)] = inst_47727);

(statearr_47823[(14)] = inst_47787);

return statearr_47823;
})();
var statearr_47824_47907 = state_47794__$1;
(statearr_47824_47907[(2)] = null);

(statearr_47824_47907[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (17))){
var state_47794__$1 = state_47794;
var statearr_47825_47908 = state_47794__$1;
(statearr_47825_47908[(2)] = false);

(statearr_47825_47908[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (3))){
var state_47794__$1 = state_47794;
var statearr_47826_47909 = state_47794__$1;
(statearr_47826_47909[(2)] = false);

(statearr_47826_47909[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (12))){
var inst_47792 = (state_47794[(2)]);
var state_47794__$1 = state_47794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47794__$1,inst_47792);
} else {
if((state_val_47795 === (2))){
var inst_47702 = (state_47794[(6)]);
var inst_47708 = inst_47702.cljs$lang$protocol_mask$partition0$;
var inst_47709 = (inst_47708 & (64));
var inst_47710 = inst_47702.cljs$core$ISeq$;
var inst_47711 = (inst_47709) || (inst_47710);
var state_47794__$1 = state_47794;
if(cljs.core.truth_(inst_47711)){
var statearr_47827_47910 = state_47794__$1;
(statearr_47827_47910[(1)] = (5));

} else {
var statearr_47828_47911 = state_47794__$1;
(statearr_47828_47911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (23))){
var inst_47758 = (state_47794[(12)]);
var inst_47764 = (inst_47758 == null);
var state_47794__$1 = state_47794;
if(cljs.core.truth_(inst_47764)){
var statearr_47829_47912 = state_47794__$1;
(statearr_47829_47912[(1)] = (26));

} else {
var statearr_47830_47913 = state_47794__$1;
(statearr_47830_47913[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (35))){
var inst_47784 = (state_47794[(2)]);
var state_47794__$1 = state_47794;
var statearr_47831_47914 = state_47794__$1;
(statearr_47831_47914[(2)] = inst_47784);

(statearr_47831_47914[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (19))){
var inst_47727 = (state_47794[(5)]);
var inst_47746 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47727);
var state_47794__$1 = state_47794;
var statearr_47832_47915 = state_47794__$1;
(statearr_47832_47915[(2)] = inst_47746);

(statearr_47832_47915[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (11))){
var inst_47727 = (state_47794[(5)]);
var inst_47731 = (inst_47727 == null);
var inst_47732 = cljs.core.not.call(null,inst_47731);
var state_47794__$1 = state_47794;
if(inst_47732){
var statearr_47833_47916 = state_47794__$1;
(statearr_47833_47916[(1)] = (13));

} else {
var statearr_47834_47917 = state_47794__$1;
(statearr_47834_47917[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (9))){
var inst_47702 = (state_47794[(6)]);
var state_47794__$1 = state_47794;
var statearr_47835_47918 = state_47794__$1;
(statearr_47835_47918[(2)] = inst_47702);

(statearr_47835_47918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (5))){
var state_47794__$1 = state_47794;
var statearr_47836_47919 = state_47794__$1;
(statearr_47836_47919[(2)] = true);

(statearr_47836_47919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (14))){
var state_47794__$1 = state_47794;
var statearr_47837_47920 = state_47794__$1;
(statearr_47837_47920[(2)] = false);

(statearr_47837_47920[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (26))){
var inst_47759 = (state_47794[(8)]);
var inst_47766 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_47759);
var state_47794__$1 = state_47794;
var statearr_47838_47921 = state_47794__$1;
(statearr_47838_47921[(2)] = inst_47766);

(statearr_47838_47921[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (16))){
var state_47794__$1 = state_47794;
var statearr_47839_47922 = state_47794__$1;
(statearr_47839_47922[(2)] = true);

(statearr_47839_47922[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (30))){
var inst_47750 = (state_47794[(7)]);
var inst_47759 = (state_47794[(8)]);
var inst_47751 = (state_47794[(11)]);
var inst_47776 = cljs.core.empty_QMARK_.call(null,inst_47750);
var inst_47777 = inst_47751.call(null,inst_47759);
var inst_47778 = cljs.core.not.call(null,inst_47777);
var inst_47779 = (inst_47776) && (inst_47778);
var state_47794__$1 = state_47794;
var statearr_47840_47923 = state_47794__$1;
(statearr_47840_47923[(2)] = inst_47779);

(statearr_47840_47923[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (10))){
var inst_47702 = (state_47794[(6)]);
var inst_47723 = (state_47794[(2)]);
var inst_47724 = cljs.core.get.call(null,inst_47723,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47725 = cljs.core.get.call(null,inst_47723,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47726 = cljs.core.get.call(null,inst_47723,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47727 = inst_47702;
var state_47794__$1 = (function (){var statearr_47841 = state_47794;
(statearr_47841[(15)] = inst_47724);

(statearr_47841[(16)] = inst_47726);

(statearr_47841[(5)] = inst_47727);

(statearr_47841[(17)] = inst_47725);

return statearr_47841;
})();
var statearr_47842_47924 = state_47794__$1;
(statearr_47842_47924[(2)] = null);

(statearr_47842_47924[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (18))){
var inst_47741 = (state_47794[(2)]);
var state_47794__$1 = state_47794;
var statearr_47843_47925 = state_47794__$1;
(statearr_47843_47925[(2)] = inst_47741);

(statearr_47843_47925[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (8))){
var inst_47702 = (state_47794[(6)]);
var inst_47720 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47702);
var state_47794__$1 = state_47794;
var statearr_47845_47926 = state_47794__$1;
(statearr_47845_47926[(2)] = inst_47720);

(statearr_47845_47926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__40014__auto___47884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__39995__auto__,c__40014__auto___47884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__39996__auto__ = null;
var cljs$core$async$mix_$_state_machine__39996__auto____0 = (function (){
var statearr_47852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47852[(0)] = cljs$core$async$mix_$_state_machine__39996__auto__);

(statearr_47852[(1)] = (1));

return statearr_47852;
});
var cljs$core$async$mix_$_state_machine__39996__auto____1 = (function (state_47794){
while(true){
var result__39997__auto__ = switch__39995__auto__.call(null,state_47794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39997__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__39996__auto__ = function(state_47794){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__39996__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__39996__auto____1.call(this,state_47794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__39996__auto____0;
cljs$core$async$mix_$_state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__39996__auto____1;
return cljs$core$async$mix_$_state_machine__39996__auto__;
})()
;})(switch__39995__auto__,c__40014__auto___47884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__40016__auto__ = (function (){var statearr_47856 = f__40015__auto__.call(null);
(statearr_47856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40014__auto___47884);

return statearr_47856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40016__auto__);
});})(c__40014__auto___47884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__37741__auto__ = (((p == null))?null:p);
var m__37742__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__37741__auto__)]);
if(!((m__37742__auto__ == null))){
return m__37742__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__37742__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__37742__auto____$1 == null))){
return m__37742__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__37741__auto__ = (((p == null))?null:p);
var m__37742__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__37741__auto__)]);
if(!((m__37742__auto__ == null))){
return m__37742__auto__.call(null,p,v,ch);
} else {
var m__37742__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__37742__auto____$1 == null))){
return m__37742__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args47927 = [];
var len__38153__auto___47930 = arguments.length;
var i__38154__auto___47931 = (0);
while(true){
if((i__38154__auto___47931 < len__38153__auto___47930)){
args47927.push((arguments[i__38154__auto___47931]));

var G__47932 = (i__38154__auto___47931 + (1));
i__38154__auto___47931 = G__47932;
continue;
} else {
}
break;
}

var G__47929 = args47927.length;
switch (G__47929) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47927.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__37741__auto__ = (((p == null))?null:p);
var m__37742__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37741__auto__)]);
if(!((m__37742__auto__ == null))){
return m__37742__auto__.call(null,p);
} else {
var m__37742__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37742__auto____$1 == null))){
return m__37742__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__37741__auto__ = (((p == null))?null:p);
var m__37742__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37741__auto__)]);
if(!((m__37742__auto__ == null))){
return m__37742__auto__.call(null,p,v);
} else {
var m__37742__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37742__auto____$1 == null))){
return m__37742__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var args47935 = [];
var len__38153__auto___48061 = arguments.length;
var i__38154__auto___48062 = (0);
while(true){
if((i__38154__auto___48062 < len__38153__auto___48061)){
args47935.push((arguments[i__38154__auto___48062]));

var G__48063 = (i__38154__auto___48062 + (1));
i__38154__auto___48062 = G__48063;
continue;
} else {
}
break;
}

var G__47937 = args47935.length;
switch (G__47937) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47935.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__37078__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__37078__auto__)){
return or__37078__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__37078__auto__,mults){
return (function (p1__47934_SHARP_){
if(cljs.core.truth_(p1__47934_SHARP_.call(null,topic))){
return p1__47934_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__47934_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__37078__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async47938 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47938 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47939){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47939 = meta47939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_47940,meta47939__$1){
var self__ = this;
var _47940__$1 = this;
return (new cljs.core.async.t_cljs$core$async47938(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47939__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47938.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_47940){
var self__ = this;
var _47940__$1 = this;
return self__.meta47939;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47938.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async47938.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47938.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async47938.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47938.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47938.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47938.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47938.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47939","meta47939",-724294471,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47938.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47938.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47938";

cljs.core.async.t_cljs$core$async47938.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__37684__auto__,writer__37685__auto__,opt__37686__auto__){
return cljs.core._write.call(null,writer__37685__auto__,"cljs.core.async/t_cljs$core$async47938");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async47938 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async47938(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47939){
return (new cljs.core.async.t_cljs$core$async47938(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47939));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async47938(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40014__auto___48065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40014__auto___48065,mults,ensure_mult,p){
return (function (){
var f__40015__auto__ = (function (){var switch__39995__auto__ = ((function (c__40014__auto___48065,mults,ensure_mult,p){
return (function (state_48013){
var state_val_48014 = (state_48013[(1)]);
if((state_val_48014 === (7))){
var inst_48009 = (state_48013[(2)]);
var state_48013__$1 = state_48013;
var statearr_48015_48066 = state_48013__$1;
(statearr_48015_48066[(2)] = inst_48009);

(statearr_48015_48066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48014 === (20))){
var state_48013__$1 = state_48013;
var statearr_48016_48067 = state_48013__$1;
(statearr_48016_48067[(2)] = null);

(statearr_48016_48067[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48014 === (1))){
var state_48013__$1 = state_48013;
var statearr_48017_48068 = state_48013__$1;
(statearr_48017_48068[(2)] = null);

(statearr_48017_48068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48014 === (24))){
try{var inst_47943 = (state_48013[(5)]);
var inst_47993 = (state_48013[(6)]);
var inst_47999 = cljs.core.async.muxch_STAR_.call(null,inst_47993);
var state_48013__$1 = state_48013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48013__$1,(25),inst_47999,inst_47943);
}catch (e48018){if((e48018 instanceof Object)){
var ex__39989__auto__ = e48018;
var statearr_48019_48069 = state_48013;
(statearr_48019_48069[(1)] = (23));

(statearr_48019_48069[(2)] = ex__39989__auto__);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48018;

}
}} else {
if((state_val_48014 === (4))){
var inst_47943 = (state_48013[(5)]);
var inst_47943__$1 = (state_48013[(2)]);
var inst_47944 = (inst_47943__$1 == null);
var state_48013__$1 = (function (){var statearr_48020 = state_48013;
(statearr_48020[(5)] = inst_47943__$1);

return statearr_48020;
})();
if(cljs.core.truth_(inst_47944)){
var statearr_48021_48071 = state_48013__$1;
(statearr_48021_48071[(1)] = (5));

} else {
var statearr_48022_48072 = state_48013__$1;
(statearr_48022_48072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48014 === (15))){
var inst_47985 = (state_48013[(2)]);
var state_48013__$1 = state_48013;
var statearr_48023_48073 = state_48013__$1;
(statearr_48023_48073[(2)] = inst_47985);

(statearr_48023_48073[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48014 === (21))){
var inst_48006 = (state_48013[(2)]);
var state_48013__$1 = (function (){var statearr_48024 = state_48013;
(statearr_48024[(7)] = inst_48006);

return statearr_48024;
})();
var statearr_48025_48074 = state_48013__$1;
(statearr_48025_48074[(2)] = null);

(statearr_48025_48074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48014 === (13))){
var inst_47967 = (state_48013[(8)]);
var inst_47969 = cljs.core.chunked_seq_QMARK_.call(null,inst_47967);
var state_48013__$1 = state_48013;
if(inst_47969){
var statearr_48026_48075 = state_48013__$1;
(statearr_48026_48075[(1)] = (16));

} else {
var statearr_48027_48076 = state_48013__$1;
(statearr_48027_48076[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48014 === (22))){
var inst_48003 = (state_48013[(2)]);
var state_48013__$1 = state_48013;
var statearr_48028_48077 = state_48013__$1;
(statearr_48028_48077[(2)] = inst_48003);

(statearr_48028_48077[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48014 === (6))){
var inst_47943 = (state_48013[(5)]);
var inst_47991 = (state_48013[(9)]);
var inst_47993 = (state_48013[(6)]);
var inst_47991__$1 = topic_fn.call(null,inst_47943);
var inst_47992 = cljs.core.deref.call(null,mults);
var inst_47993__$1 = cljs.core.get.call(null,inst_47992,inst_47991__$1);
var state_48013__$1 = (function (){var statearr_48029 = state_48013;
(statearr_48029[(9)] = inst_47991__$1);

(statearr_48029[(6)] = inst_47993__$1);

return statearr_48029;
})();
if(cljs.core.truth_(inst_47993__$1)){
var statearr_48030_48078 = state_48013__$1;
(statearr_48030_48078[(1)] = (19));

} else {
var statearr_48031_48079 = state_48013__$1;
(statearr_48031_48079[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48014 === (25))){
try{var inst_48001 = (state_48013[(2)]);
var state_48013__$1 = state_48013;
var statearr_48034_48080 = state_48013__$1;
(statearr_48034_48080[(2)] = inst_48001);

(statearr_48034_48080[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
}catch (e48032){if((e48032 instanceof Object)){
var ex__39989__auto__ = e48032;
var statearr_48033_48081 = state_48013;
(statearr_48033_48081[(1)] = (23));

(statearr_48033_48081[(2)] = ex__39989__auto__);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48032;

}
}} else {
if((state_val_48014 === (17))){
var inst_47967 = (state_48013[(8)]);
var inst_47976 = cljs.core.first.call(null,inst_47967);
var inst_47977 = cljs.core.async.muxch_STAR_.call(null,inst_47976);
var inst_47978 = cljs.core.async.close_BANG_.call(null,inst_47977);
var inst_47979 = cljs.core.next.call(null,inst_47967);
var inst_47953 = inst_47979;
var inst_47954 = null;
var inst_47955 = (0);
var inst_47956 = (0);
var state_48013__$1 = (function (){var statearr_48035 = state_48013;
(statearr_48035[(10)] = inst_47955);

(statearr_48035[(11)] = inst_47954);

(statearr_48035[(12)] = inst_47956);

(statearr_48035[(13)] = inst_47978);

(statearr_48035[(14)] = inst_47953);

return statearr_48035;
})();
var statearr_48036_48082 = state_48013__$1;
(statearr_48036_48082[(2)] = null);

(statearr_48036_48082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48014 === (3))){
var inst_48011 = (state_48013[(2)]);
var state_48013__$1 = state_48013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48013__$1,inst_48011);
} else {
if((state_val_48014 === (12))){
var inst_47987 = (state_48013[(2)]);
var state_48013__$1 = state_48013;
var statearr_48037_48083 = state_48013__$1;
(statearr_48037_48083[(2)] = inst_47987);

(statearr_48037_48083[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48014 === (2))){
var state_48013__$1 = state_48013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48013__$1,(4),ch);
} else {
if((state_val_48014 === (23))){
var inst_47991 = (state_48013[(9)]);
var inst_47995 = (state_48013[(2)]);
var inst_47996 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_47991);
var state_48013__$1 = (function (){var statearr_48038 = state_48013;
(statearr_48038[(15)] = inst_47995);

return statearr_48038;
})();
var statearr_48039_48084 = state_48013__$1;
(statearr_48039_48084[(2)] = inst_47996);

(statearr_48039_48084[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48014 === (19))){
var state_48013__$1 = state_48013;
var statearr_48040_48085 = state_48013__$1;
(statearr_48040_48085[(2)] = null);

(statearr_48040_48085[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48014 === (11))){
var inst_47967 = (state_48013[(8)]);
var inst_47953 = (state_48013[(14)]);
var inst_47967__$1 = cljs.core.seq.call(null,inst_47953);
var state_48013__$1 = (function (){var statearr_48041 = state_48013;
(statearr_48041[(8)] = inst_47967__$1);

return statearr_48041;
})();
if(inst_47967__$1){
var statearr_48042_48087 = state_48013__$1;
(statearr_48042_48087[(1)] = (13));

} else {
var statearr_48043_48088 = state_48013__$1;
(statearr_48043_48088[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48014 === (9))){
var inst_47989 = (state_48013[(2)]);
var state_48013__$1 = state_48013;
var statearr_48044_48089 = state_48013__$1;
(statearr_48044_48089[(2)] = inst_47989);

(statearr_48044_48089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48014 === (5))){
var inst_47950 = cljs.core.deref.call(null,mults);
var inst_47951 = cljs.core.vals.call(null,inst_47950);
var inst_47952 = cljs.core.seq.call(null,inst_47951);
var inst_47953 = inst_47952;
var inst_47954 = null;
var inst_47955 = (0);
var inst_47956 = (0);
var state_48013__$1 = (function (){var statearr_48045 = state_48013;
(statearr_48045[(10)] = inst_47955);

(statearr_48045[(11)] = inst_47954);

(statearr_48045[(12)] = inst_47956);

(statearr_48045[(14)] = inst_47953);

return statearr_48045;
})();
var statearr_48046_48090 = state_48013__$1;
(statearr_48046_48090[(2)] = null);

(statearr_48046_48090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48014 === (14))){
var state_48013__$1 = state_48013;
var statearr_48050_48091 = state_48013__$1;
(statearr_48050_48091[(2)] = null);

(statearr_48050_48091[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48014 === (16))){
var inst_47967 = (state_48013[(8)]);
var inst_47971 = cljs.core.chunk_first.call(null,inst_47967);
var inst_47972 = cljs.core.chunk_rest.call(null,inst_47967);
var inst_47973 = cljs.core.count.call(null,inst_47971);
var inst_47953 = inst_47972;
var inst_47954 = inst_47971;
var inst_47955 = inst_47973;
var inst_47956 = (0);
var state_48013__$1 = (function (){var statearr_48051 = state_48013;
(statearr_48051[(10)] = inst_47955);

(statearr_48051[(11)] = inst_47954);

(statearr_48051[(12)] = inst_47956);

(statearr_48051[(14)] = inst_47953);

return statearr_48051;
})();
var statearr_48052_48093 = state_48013__$1;
(statearr_48052_48093[(2)] = null);

(statearr_48052_48093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48014 === (10))){
var inst_47955 = (state_48013[(10)]);
var inst_47954 = (state_48013[(11)]);
var inst_47956 = (state_48013[(12)]);
var inst_47953 = (state_48013[(14)]);
var inst_47961 = cljs.core._nth.call(null,inst_47954,inst_47956);
var inst_47962 = cljs.core.async.muxch_STAR_.call(null,inst_47961);
var inst_47963 = cljs.core.async.close_BANG_.call(null,inst_47962);
var inst_47964 = (inst_47956 + (1));
var tmp48047 = inst_47955;
var tmp48048 = inst_47954;
var tmp48049 = inst_47953;
var inst_47953__$1 = tmp48049;
var inst_47954__$1 = tmp48048;
var inst_47955__$1 = tmp48047;
var inst_47956__$1 = inst_47964;
var state_48013__$1 = (function (){var statearr_48053 = state_48013;
(statearr_48053[(10)] = inst_47955__$1);

(statearr_48053[(11)] = inst_47954__$1);

(statearr_48053[(12)] = inst_47956__$1);

(statearr_48053[(16)] = inst_47963);

(statearr_48053[(14)] = inst_47953__$1);

return statearr_48053;
})();
var statearr_48054_48094 = state_48013__$1;
(statearr_48054_48094[(2)] = null);

(statearr_48054_48094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48014 === (18))){
var inst_47982 = (state_48013[(2)]);
var state_48013__$1 = state_48013;
var statearr_48055_48095 = state_48013__$1;
(statearr_48055_48095[(2)] = inst_47982);

(statearr_48055_48095[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48014 === (8))){
var inst_47955 = (state_48013[(10)]);
var inst_47956 = (state_48013[(12)]);
var inst_47958 = (inst_47956 < inst_47955);
var inst_47959 = inst_47958;
var state_48013__$1 = state_48013;
if(cljs.core.truth_(inst_47959)){
var statearr_48056_48096 = state_48013__$1;
(statearr_48056_48096[(1)] = (10));

} else {
var statearr_48057_48097 = state_48013__$1;
(statearr_48057_48097[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__40014__auto___48065,mults,ensure_mult,p))
;
return ((function (switch__39995__auto__,c__40014__auto___48065,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__39996__auto__ = null;
var cljs$core$async$state_machine__39996__auto____0 = (function (){
var statearr_48059 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48059[(0)] = cljs$core$async$state_machine__39996__auto__);

(statearr_48059[(1)] = (1));

return statearr_48059;
});
var cljs$core$async$state_machine__39996__auto____1 = (function (state_48013){
while(true){
var result__39997__auto__ = switch__39995__auto__.call(null,state_48013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39997__auto__;
}
break;
}
});
cljs$core$async$state_machine__39996__auto__ = function(state_48013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39996__auto____1.call(this,state_48013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39996__auto____0;
cljs$core$async$state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39996__auto____1;
return cljs$core$async$state_machine__39996__auto__;
})()
;})(switch__39995__auto__,c__40014__auto___48065,mults,ensure_mult,p))
})();
var state__40016__auto__ = (function (){var statearr_48060 = f__40015__auto__.call(null);
(statearr_48060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40014__auto___48065);

return statearr_48060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40016__auto__);
});})(c__40014__auto___48065,mults,ensure_mult,p))
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
var args48098 = [];
var len__38153__auto___48101 = arguments.length;
var i__38154__auto___48102 = (0);
while(true){
if((i__38154__auto___48102 < len__38153__auto___48101)){
args48098.push((arguments[i__38154__auto___48102]));

var G__48103 = (i__38154__auto___48102 + (1));
i__38154__auto___48102 = G__48103;
continue;
} else {
}
break;
}

var G__48100 = args48098.length;
switch (G__48100) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48098.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args48105 = [];
var len__38153__auto___48108 = arguments.length;
var i__38154__auto___48109 = (0);
while(true){
if((i__38154__auto___48109 < len__38153__auto___48108)){
args48105.push((arguments[i__38154__auto___48109]));

var G__48110 = (i__38154__auto___48109 + (1));
i__38154__auto___48109 = G__48110;
continue;
} else {
}
break;
}

var G__48107 = args48105.length;
switch (G__48107) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48105.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var args48112 = [];
var len__38153__auto___48180 = arguments.length;
var i__38154__auto___48181 = (0);
while(true){
if((i__38154__auto___48181 < len__38153__auto___48180)){
args48112.push((arguments[i__38154__auto___48181]));

var G__48182 = (i__38154__auto___48181 + (1));
i__38154__auto___48181 = G__48182;
continue;
} else {
}
break;
}

var G__48114 = args48112.length;
switch (G__48114) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48112.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,java.util.Arrays.copyOf.call(null,rets,cnt));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__40014__auto___48184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40014__auto___48184,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__40015__auto__ = (function (){var switch__39995__auto__ = ((function (c__40014__auto___48184,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_48152){
var state_val_48153 = (state_48152[(1)]);
if((state_val_48153 === (7))){
var state_48152__$1 = state_48152;
var statearr_48154_48185 = state_48152__$1;
(statearr_48154_48185[(2)] = null);

(statearr_48154_48185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48153 === (1))){
var state_48152__$1 = state_48152;
var statearr_48155_48186 = state_48152__$1;
(statearr_48155_48186[(2)] = null);

(statearr_48155_48186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48153 === (4))){
var inst_48117 = (state_48152[(5)]);
var inst_48119 = (inst_48117 < cnt);
var state_48152__$1 = state_48152;
if(cljs.core.truth_(inst_48119)){
var statearr_48156_48187 = state_48152__$1;
(statearr_48156_48187[(1)] = (6));

} else {
var statearr_48157_48188 = state_48152__$1;
(statearr_48157_48188[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48153 === (15))){
var inst_48148 = (state_48152[(2)]);
var state_48152__$1 = state_48152;
var statearr_48158_48189 = state_48152__$1;
(statearr_48158_48189[(2)] = inst_48148);

(statearr_48158_48189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48153 === (13))){
var inst_48141 = cljs.core.async.close_BANG_.call(null,out);
var state_48152__$1 = state_48152;
var statearr_48159_48190 = state_48152__$1;
(statearr_48159_48190[(2)] = inst_48141);

(statearr_48159_48190[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48153 === (6))){
var state_48152__$1 = state_48152;
var statearr_48160_48191 = state_48152__$1;
(statearr_48160_48191[(2)] = null);

(statearr_48160_48191[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48153 === (3))){
var inst_48150 = (state_48152[(2)]);
var state_48152__$1 = state_48152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48152__$1,inst_48150);
} else {
if((state_val_48153 === (12))){
var inst_48138 = (state_48152[(6)]);
var inst_48138__$1 = (state_48152[(2)]);
var inst_48139 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48138__$1);
var state_48152__$1 = (function (){var statearr_48161 = state_48152;
(statearr_48161[(6)] = inst_48138__$1);

return statearr_48161;
})();
if(cljs.core.truth_(inst_48139)){
var statearr_48162_48192 = state_48152__$1;
(statearr_48162_48192[(1)] = (13));

} else {
var statearr_48163_48193 = state_48152__$1;
(statearr_48163_48193[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48153 === (2))){
var inst_48116 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_48117 = (0);
var state_48152__$1 = (function (){var statearr_48164 = state_48152;
(statearr_48164[(5)] = inst_48117);

(statearr_48164[(7)] = inst_48116);

return statearr_48164;
})();
var statearr_48165_48194 = state_48152__$1;
(statearr_48165_48194[(2)] = null);

(statearr_48165_48194[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48153 === (11))){
try{var inst_48117 = (state_48152[(5)]);
var inst_48125 = chs__$1.call(null,inst_48117);
var inst_48126 = done.call(null,inst_48117);
var inst_48127 = cljs.core.async.take_BANG_.call(null,inst_48125,inst_48126);
var state_48152__$1 = state_48152;
var statearr_48168_48195 = state_48152__$1;
(statearr_48168_48195[(2)] = inst_48127);

(statearr_48168_48195[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
}catch (e48166){if((e48166 instanceof Object)){
var ex__39989__auto__ = e48166;
var statearr_48167_48196 = state_48152;
(statearr_48167_48196[(1)] = (10));

(statearr_48167_48196[(2)] = ex__39989__auto__);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48166;

}
}} else {
if((state_val_48153 === (9))){
var inst_48117 = (state_48152[(5)]);
var inst_48129 = (state_48152[(2)]);
var inst_48130 = (inst_48117 + (1));
var inst_48117__$1 = inst_48130;
var state_48152__$1 = (function (){var statearr_48169 = state_48152;
(statearr_48169[(5)] = inst_48117__$1);

(statearr_48169[(8)] = inst_48129);

return statearr_48169;
})();
var statearr_48170_48197 = state_48152__$1;
(statearr_48170_48197[(2)] = null);

(statearr_48170_48197[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48153 === (5))){
var inst_48136 = (state_48152[(2)]);
var state_48152__$1 = (function (){var statearr_48171 = state_48152;
(statearr_48171[(9)] = inst_48136);

return statearr_48171;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48152__$1,(12),dchan);
} else {
if((state_val_48153 === (14))){
var inst_48138 = (state_48152[(6)]);
var inst_48143 = cljs.core.apply.call(null,f,inst_48138);
var state_48152__$1 = state_48152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48152__$1,(16),out,inst_48143);
} else {
if((state_val_48153 === (16))){
var inst_48145 = (state_48152[(2)]);
var state_48152__$1 = (function (){var statearr_48172 = state_48152;
(statearr_48172[(10)] = inst_48145);

return statearr_48172;
})();
var statearr_48173_48198 = state_48152__$1;
(statearr_48173_48198[(2)] = null);

(statearr_48173_48198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48153 === (10))){
var inst_48121 = (state_48152[(2)]);
var inst_48122 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_48152__$1 = (function (){var statearr_48174 = state_48152;
(statearr_48174[(11)] = inst_48121);

return statearr_48174;
})();
var statearr_48175_48199 = state_48152__$1;
(statearr_48175_48199[(2)] = inst_48122);

(statearr_48175_48199[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48153 === (8))){
var inst_48134 = (state_48152[(2)]);
var state_48152__$1 = state_48152;
var statearr_48176_48200 = state_48152__$1;
(statearr_48176_48200[(2)] = inst_48134);

(statearr_48176_48200[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__40014__auto___48184,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__39995__auto__,c__40014__auto___48184,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__39996__auto__ = null;
var cljs$core$async$state_machine__39996__auto____0 = (function (){
var statearr_48178 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48178[(0)] = cljs$core$async$state_machine__39996__auto__);

(statearr_48178[(1)] = (1));

return statearr_48178;
});
var cljs$core$async$state_machine__39996__auto____1 = (function (state_48152){
while(true){
var result__39997__auto__ = switch__39995__auto__.call(null,state_48152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39997__auto__;
}
break;
}
});
cljs$core$async$state_machine__39996__auto__ = function(state_48152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39996__auto____1.call(this,state_48152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39996__auto____0;
cljs$core$async$state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39996__auto____1;
return cljs$core$async$state_machine__39996__auto__;
})()
;})(switch__39995__auto__,c__40014__auto___48184,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__40016__auto__ = (function (){var statearr_48179 = f__40015__auto__.call(null);
(statearr_48179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40014__auto___48184);

return statearr_48179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40016__auto__);
});})(c__40014__auto___48184,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args48202 = [];
var len__38153__auto___48256 = arguments.length;
var i__38154__auto___48257 = (0);
while(true){
if((i__38154__auto___48257 < len__38153__auto___48256)){
args48202.push((arguments[i__38154__auto___48257]));

var G__48258 = (i__38154__auto___48257 + (1));
i__38154__auto___48257 = G__48258;
continue;
} else {
}
break;
}

var G__48204 = args48202.length;
switch (G__48204) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48202.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40014__auto___48260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40014__auto___48260,out){
return (function (){
var f__40015__auto__ = (function (){var switch__39995__auto__ = ((function (c__40014__auto___48260,out){
return (function (state_48236){
var state_val_48237 = (state_48236[(1)]);
if((state_val_48237 === (7))){
var inst_48215 = (state_48236[(5)]);
var inst_48216 = (state_48236[(6)]);
var inst_48215__$1 = (state_48236[(2)]);
var inst_48216__$1 = cljs.core.nth.call(null,inst_48215__$1,(0),null);
var inst_48217 = cljs.core.nth.call(null,inst_48215__$1,(1),null);
var inst_48218 = (inst_48216__$1 == null);
var state_48236__$1 = (function (){var statearr_48238 = state_48236;
(statearr_48238[(7)] = inst_48217);

(statearr_48238[(5)] = inst_48215__$1);

(statearr_48238[(6)] = inst_48216__$1);

return statearr_48238;
})();
if(cljs.core.truth_(inst_48218)){
var statearr_48239_48261 = state_48236__$1;
(statearr_48239_48261[(1)] = (8));

} else {
var statearr_48240_48262 = state_48236__$1;
(statearr_48240_48262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48237 === (1))){
var inst_48205 = cljs.core.vec.call(null,chs);
var inst_48206 = inst_48205;
var state_48236__$1 = (function (){var statearr_48241 = state_48236;
(statearr_48241[(8)] = inst_48206);

return statearr_48241;
})();
var statearr_48242_48263 = state_48236__$1;
(statearr_48242_48263[(2)] = null);

(statearr_48242_48263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48237 === (4))){
var inst_48206 = (state_48236[(8)]);
var state_48236__$1 = state_48236;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_48236__$1,(7),inst_48206);
} else {
if((state_val_48237 === (6))){
var inst_48232 = (state_48236[(2)]);
var state_48236__$1 = state_48236;
var statearr_48243_48264 = state_48236__$1;
(statearr_48243_48264[(2)] = inst_48232);

(statearr_48243_48264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48237 === (3))){
var inst_48234 = (state_48236[(2)]);
var state_48236__$1 = state_48236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48236__$1,inst_48234);
} else {
if((state_val_48237 === (2))){
var inst_48206 = (state_48236[(8)]);
var inst_48208 = cljs.core.count.call(null,inst_48206);
var inst_48209 = (inst_48208 > (0));
var state_48236__$1 = state_48236;
if(cljs.core.truth_(inst_48209)){
var statearr_48245_48265 = state_48236__$1;
(statearr_48245_48265[(1)] = (4));

} else {
var statearr_48246_48266 = state_48236__$1;
(statearr_48246_48266[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48237 === (11))){
var inst_48206 = (state_48236[(8)]);
var inst_48225 = (state_48236[(2)]);
var tmp48244 = inst_48206;
var inst_48206__$1 = tmp48244;
var state_48236__$1 = (function (){var statearr_48247 = state_48236;
(statearr_48247[(8)] = inst_48206__$1);

(statearr_48247[(9)] = inst_48225);

return statearr_48247;
})();
var statearr_48248_48267 = state_48236__$1;
(statearr_48248_48267[(2)] = null);

(statearr_48248_48267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48237 === (9))){
var inst_48216 = (state_48236[(6)]);
var state_48236__$1 = state_48236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48236__$1,(11),out,inst_48216);
} else {
if((state_val_48237 === (5))){
var inst_48230 = cljs.core.async.close_BANG_.call(null,out);
var state_48236__$1 = state_48236;
var statearr_48249_48268 = state_48236__$1;
(statearr_48249_48268[(2)] = inst_48230);

(statearr_48249_48268[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48237 === (10))){
var inst_48228 = (state_48236[(2)]);
var state_48236__$1 = state_48236;
var statearr_48250_48269 = state_48236__$1;
(statearr_48250_48269[(2)] = inst_48228);

(statearr_48250_48269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48237 === (8))){
var inst_48217 = (state_48236[(7)]);
var inst_48206 = (state_48236[(8)]);
var inst_48215 = (state_48236[(5)]);
var inst_48216 = (state_48236[(6)]);
var inst_48220 = (function (){var cs = inst_48206;
var vec__48211 = inst_48215;
var v = inst_48216;
var c = inst_48217;
return ((function (cs,vec__48211,v,c,inst_48217,inst_48206,inst_48215,inst_48216,state_val_48237,c__40014__auto___48260,out){
return (function (p1__48201_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__48201_SHARP_);
});
;})(cs,vec__48211,v,c,inst_48217,inst_48206,inst_48215,inst_48216,state_val_48237,c__40014__auto___48260,out))
})();
var inst_48221 = cljs.core.filterv.call(null,inst_48220,inst_48206);
var inst_48206__$1 = inst_48221;
var state_48236__$1 = (function (){var statearr_48251 = state_48236;
(statearr_48251[(8)] = inst_48206__$1);

return statearr_48251;
})();
var statearr_48252_48270 = state_48236__$1;
(statearr_48252_48270[(2)] = null);

(statearr_48252_48270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__40014__auto___48260,out))
;
return ((function (switch__39995__auto__,c__40014__auto___48260,out){
return (function() {
var cljs$core$async$state_machine__39996__auto__ = null;
var cljs$core$async$state_machine__39996__auto____0 = (function (){
var statearr_48254 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48254[(0)] = cljs$core$async$state_machine__39996__auto__);

(statearr_48254[(1)] = (1));

return statearr_48254;
});
var cljs$core$async$state_machine__39996__auto____1 = (function (state_48236){
while(true){
var result__39997__auto__ = switch__39995__auto__.call(null,state_48236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39997__auto__;
}
break;
}
});
cljs$core$async$state_machine__39996__auto__ = function(state_48236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39996__auto____1.call(this,state_48236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39996__auto____0;
cljs$core$async$state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39996__auto____1;
return cljs$core$async$state_machine__39996__auto__;
})()
;})(switch__39995__auto__,c__40014__auto___48260,out))
})();
var state__40016__auto__ = (function (){var statearr_48255 = f__40015__auto__.call(null);
(statearr_48255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40014__auto___48260);

return statearr_48255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40016__auto__);
});})(c__40014__auto___48260,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});

//# sourceMappingURL=async.js.map