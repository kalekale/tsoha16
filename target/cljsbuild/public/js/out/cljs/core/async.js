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
if(typeof cljs.core.async.t_cljs$core$async40833 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40833 = (function (fn_handler,f,meta40834){
this.fn_handler = fn_handler;
this.f = f;
this.meta40834 = meta40834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40835,meta40834__$1){
var self__ = this;
var _40835__$1 = this;
return (new cljs.core.async.t_cljs$core$async40833(self__.fn_handler,self__.f,meta40834__$1));
});

cljs.core.async.t_cljs$core$async40833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40835){
var self__ = this;
var _40835__$1 = this;
return self__.meta40834;
});

cljs.core.async.t_cljs$core$async40833.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40833.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40833.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async40833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta40834","meta40834",1139289770,null)], null);
});

cljs.core.async.t_cljs$core$async40833.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40833";

cljs.core.async.t_cljs$core$async40833.cljs$lang$ctorPrWriter = (function (this__37573__auto__,writer__37574__auto__,opt__37575__auto__){
return cljs.core._write.call(null,writer__37574__auto__,"cljs.core.async/t_cljs$core$async40833");
});

cljs.core.async.__GT_t_cljs$core$async40833 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async40833(fn_handler__$1,f__$1,meta40834){
return (new cljs.core.async.t_cljs$core$async40833(fn_handler__$1,f__$1,meta40834));
});

}

return (new cljs.core.async.t_cljs$core$async40833(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args40836 = [];
var len__38042__auto___40839 = arguments.length;
var i__38043__auto___40840 = (0);
while(true){
if((i__38043__auto___40840 < len__38042__auto___40839)){
args40836.push((arguments[i__38043__auto___40840]));

var G__40841 = (i__38043__auto___40840 + (1));
i__38043__auto___40840 = G__40841;
continue;
} else {
}
break;
}

var G__40838 = args40836.length;
switch (G__40838) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40836.length)].join('')));

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
var args40843 = [];
var len__38042__auto___40846 = arguments.length;
var i__38043__auto___40847 = (0);
while(true){
if((i__38043__auto___40847 < len__38042__auto___40846)){
args40843.push((arguments[i__38043__auto___40847]));

var G__40848 = (i__38043__auto___40847 + (1));
i__38043__auto___40847 = G__40848;
continue;
} else {
}
break;
}

var G__40845 = args40843.length;
switch (G__40845) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40843.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_40850 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_40850);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_40850,ret){
return (function (){
return fn1.call(null,val_40850);
});})(val_40850,ret))
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
var args40851 = [];
var len__38042__auto___40854 = arguments.length;
var i__38043__auto___40855 = (0);
while(true){
if((i__38043__auto___40855 < len__38042__auto___40854)){
args40851.push((arguments[i__38043__auto___40855]));

var G__40856 = (i__38043__auto___40855 + (1));
i__38043__auto___40855 = G__40856;
continue;
} else {
}
break;
}

var G__40853 = args40851.length;
switch (G__40853) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40851.length)].join('')));

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
if(cljs.core.truth_((function (){var and__36955__auto__ = ret;
if(cljs.core.truth_(and__36955__auto__)){
return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else {
return and__36955__auto__;
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
var n__37882__auto___40858 = n;
var x_40859 = (0);
while(true){
if((x_40859 < n__37882__auto___40858)){
(a[x_40859] = (0));

var G__40860 = (x_40859 + (1));
x_40859 = G__40860;
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

var G__40861 = (i + (1));
i = G__40861;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async40865 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40865 = (function (alt_flag,flag,meta40866){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta40866 = meta40866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40867,meta40866__$1){
var self__ = this;
var _40867__$1 = this;
return (new cljs.core.async.t_cljs$core$async40865(self__.alt_flag,self__.flag,meta40866__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async40865.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40867){
var self__ = this;
var _40867__$1 = this;
return self__.meta40866;
});})(flag))
;

cljs.core.async.t_cljs$core$async40865.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40865.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async40865.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40865.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40866","meta40866",1300074890,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async40865.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40865";

cljs.core.async.t_cljs$core$async40865.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__37573__auto__,writer__37574__auto__,opt__37575__auto__){
return cljs.core._write.call(null,writer__37574__auto__,"cljs.core.async/t_cljs$core$async40865");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async40865 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40865(alt_flag__$1,flag__$1,meta40866){
return (new cljs.core.async.t_cljs$core$async40865(alt_flag__$1,flag__$1,meta40866));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async40865(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async40871 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40871 = (function (alt_handler,flag,cb,meta40872){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta40872 = meta40872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40873,meta40872__$1){
var self__ = this;
var _40873__$1 = this;
return (new cljs.core.async.t_cljs$core$async40871(self__.alt_handler,self__.flag,self__.cb,meta40872__$1));
});

cljs.core.async.t_cljs$core$async40871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40873){
var self__ = this;
var _40873__$1 = this;
return self__.meta40872;
});

cljs.core.async.t_cljs$core$async40871.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40871.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async40871.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async40871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40872","meta40872",1189159900,null)], null);
});

cljs.core.async.t_cljs$core$async40871.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40871";

cljs.core.async.t_cljs$core$async40871.cljs$lang$ctorPrWriter = (function (this__37573__auto__,writer__37574__auto__,opt__37575__auto__){
return cljs.core._write.call(null,writer__37574__auto__,"cljs.core.async/t_cljs$core$async40871");
});

cljs.core.async.__GT_t_cljs$core$async40871 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40871(alt_handler__$1,flag__$1,cb__$1,meta40872){
return (new cljs.core.async.t_cljs$core$async40871(alt_handler__$1,flag__$1,cb__$1,meta40872));
});

}

return (new cljs.core.async.t_cljs$core$async40871(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__40874_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40874_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__36967__auto__ = wport;
if(cljs.core.truth_(or__36967__auto__)){
return or__36967__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40875 = (i + (1));
i = G__40875;
continue;
}
} else {
return null;
}
break;
}
})();
var or__36967__auto__ = ret;
if(cljs.core.truth_(or__36967__auto__)){
return or__36967__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__36955__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__36955__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__36955__auto__;
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
var args__38049__auto__ = [];
var len__38042__auto___40881 = arguments.length;
var i__38043__auto___40882 = (0);
while(true){
if((i__38043__auto___40882 < len__38042__auto___40881)){
args__38049__auto__.push((arguments[i__38043__auto___40882]));

var G__40883 = (i__38043__auto___40882 + (1));
i__38043__auto___40882 = G__40883;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((1) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38050__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40878){
var map__40879 = p__40878;
var map__40879__$1 = ((((!((map__40879 == null)))?((((map__40879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40879):map__40879);
var opts = map__40879__$1;
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str("nil")].join('')));

});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40876){
var G__40877 = cljs.core.first.call(null,seq40876);
var seq40876__$1 = cljs.core.next.call(null,seq40876);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40877,seq40876__$1);
});

/**
 * Takes a function and a source channel, and returns a channel which
 *   contains the values produced by applying f to each value taken from
 *   the source channel
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40891 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40891 = (function (map_LT_,f,ch,meta40892){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta40892 = meta40892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40893,meta40892__$1){
var self__ = this;
var _40893__$1 = this;
return (new cljs.core.async.t_cljs$core$async40891(self__.map_LT_,self__.f,self__.ch,meta40892__$1));
});

cljs.core.async.t_cljs$core$async40891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40893){
var self__ = this;
var _40893__$1 = this;
return self__.meta40892;
});

cljs.core.async.t_cljs$core$async40891.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async40891.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40891.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async40891.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async40894 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40894 = (function (map_LT_,f,ch,meta40892,_,fn1,meta40895){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta40892 = meta40892;
this._ = _;
this.fn1 = fn1;
this.meta40895 = meta40895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40896,meta40895__$1){
var self__ = this;
var _40896__$1 = this;
return (new cljs.core.async.t_cljs$core$async40894(self__.map_LT_,self__.f,self__.ch,self__.meta40892,self__._,self__.fn1,meta40895__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async40894.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40896){
var self__ = this;
var _40896__$1 = this;
return self__.meta40895;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40894.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40894.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40894.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40894.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40884_SHARP_){
return f1.call(null,(((p1__40884_SHARP_ == null))?null:self__.f.call(null,p1__40884_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40894.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a function and a source channel, and returns a channel which\n  contains the values produced by applying f to each value taken from\n  the source channel"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40892","meta40892",-1362307809,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40891","cljs.core.async/t_cljs$core$async40891",-1256959778,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40895","meta40895",-1229455107,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40894.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40894";

cljs.core.async.t_cljs$core$async40894.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__37573__auto__,writer__37574__auto__,opt__37575__auto__){
return cljs.core._write.call(null,writer__37574__auto__,"cljs.core.async/t_cljs$core$async40894");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async40894 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40894(map_LT___$1,f__$1,ch__$1,meta40892__$1,___$2,fn1__$1,meta40895){
return (new cljs.core.async.t_cljs$core$async40894(map_LT___$1,f__$1,ch__$1,meta40892__$1,___$2,fn1__$1,meta40895));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40894(self__.map_LT_,self__.f,self__.ch,self__.meta40892,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__36955__auto__ = ret;
if(cljs.core.truth_(and__36955__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__36955__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async40891.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async40891.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});

cljs.core.async.t_cljs$core$async40891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a function and a source channel, and returns a channel which\n  contains the values produced by applying f to each value taken from\n  the source channel"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40892","meta40892",-1362307809,null)], null);
});

cljs.core.async.t_cljs$core$async40891.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40891";

cljs.core.async.t_cljs$core$async40891.cljs$lang$ctorPrWriter = (function (this__37573__auto__,writer__37574__auto__,opt__37575__auto__){
return cljs.core._write.call(null,writer__37574__auto__,"cljs.core.async/t_cljs$core$async40891");
});

cljs.core.async.__GT_t_cljs$core$async40891 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40891(map_LT___$1,f__$1,ch__$1,meta40892){
return (new cljs.core.async.t_cljs$core$async40891(map_LT___$1,f__$1,ch__$1,meta40892));
});

}

return (new cljs.core.async.t_cljs$core$async40891(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Takes a function and a target channel, and returns a channel which
 *   applies f to each value before supplying it to the target channel.
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40900 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40900 = (function (map_GT_,f,ch,meta40901){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta40901 = meta40901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40902,meta40901__$1){
var self__ = this;
var _40902__$1 = this;
return (new cljs.core.async.t_cljs$core$async40900(self__.map_GT_,self__.f,self__.ch,meta40901__$1));
});

cljs.core.async.t_cljs$core$async40900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40902){
var self__ = this;
var _40902__$1 = this;
return self__.meta40901;
});

cljs.core.async.t_cljs$core$async40900.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async40900.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40900.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async40900.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40900.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async40900.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});

cljs.core.async.t_cljs$core$async40900.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a function and a target channel, and returns a channel which\n  applies f to each value before supplying it to the target channel."], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40901","meta40901",-1125345347,null)], null);
});

cljs.core.async.t_cljs$core$async40900.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40900.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40900";

cljs.core.async.t_cljs$core$async40900.cljs$lang$ctorPrWriter = (function (this__37573__auto__,writer__37574__auto__,opt__37575__auto__){
return cljs.core._write.call(null,writer__37574__auto__,"cljs.core.async/t_cljs$core$async40900");
});

cljs.core.async.__GT_t_cljs$core$async40900 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40900(map_GT___$1,f__$1,ch__$1,meta40901){
return (new cljs.core.async.t_cljs$core$async40900(map_GT___$1,f__$1,ch__$1,meta40901));
});

}

return (new cljs.core.async.t_cljs$core$async40900(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Takes a predicate and a target channel, and returns a channel which
 *   supplies only the values for which the predicate returns true to the
 *   target channel.
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async40906 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40906 = (function (filter_GT_,p,ch,meta40907){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta40907 = meta40907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40908,meta40907__$1){
var self__ = this;
var _40908__$1 = this;
return (new cljs.core.async.t_cljs$core$async40906(self__.filter_GT_,self__.p,self__.ch,meta40907__$1));
});

cljs.core.async.t_cljs$core$async40906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40908){
var self__ = this;
var _40908__$1 = this;
return self__.meta40907;
});

cljs.core.async.t_cljs$core$async40906.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async40906.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40906.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async40906.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40906.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async40906.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else {
return cljs.core.async.impl.channels.box.call(null,null);
}
});

cljs.core.async.t_cljs$core$async40906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a predicate and a target channel, and returns a channel which\n  supplies only the values for which the predicate returns true to the\n  target channel."], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40907","meta40907",-1277290107,null)], null);
});

cljs.core.async.t_cljs$core$async40906.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40906";

cljs.core.async.t_cljs$core$async40906.cljs$lang$ctorPrWriter = (function (this__37573__auto__,writer__37574__auto__,opt__37575__auto__){
return cljs.core._write.call(null,writer__37574__auto__,"cljs.core.async/t_cljs$core$async40906");
});

cljs.core.async.__GT_t_cljs$core$async40906 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40906(filter_GT___$1,p__$1,ch__$1,meta40907){
return (new cljs.core.async.t_cljs$core$async40906(filter_GT___$1,p__$1,ch__$1,meta40907));
});

}

return (new cljs.core.async.t_cljs$core$async40906(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args40909 = [];
var len__38042__auto___40949 = arguments.length;
var i__38043__auto___40950 = (0);
while(true){
if((i__38043__auto___40950 < len__38042__auto___40949)){
args40909.push((arguments[i__38043__auto___40950]));

var G__40951 = (i__38043__auto___40950 + (1));
i__38043__auto___40950 = G__40951;
continue;
} else {
}
break;
}

var G__40911 = args40909.length;
switch (G__40911) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40909.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40785__auto___40953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40785__auto___40953,out){
return (function (){
var f__40786__auto__ = (function (){var switch__40681__auto__ = ((function (c__40785__auto___40953,out){
return (function (state_40932){
var state_val_40933 = (state_40932[(1)]);
if((state_val_40933 === (7))){
var inst_40928 = (state_40932[(2)]);
var state_40932__$1 = state_40932;
var statearr_40934_40954 = state_40932__$1;
(statearr_40934_40954[(2)] = inst_40928);

(statearr_40934_40954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40933 === (1))){
var state_40932__$1 = state_40932;
var statearr_40935_40955 = state_40932__$1;
(statearr_40935_40955[(2)] = null);

(statearr_40935_40955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40933 === (4))){
var inst_40914 = (state_40932[(5)]);
var inst_40914__$1 = (state_40932[(2)]);
var inst_40915 = (inst_40914__$1 == null);
var state_40932__$1 = (function (){var statearr_40936 = state_40932;
(statearr_40936[(5)] = inst_40914__$1);

return statearr_40936;
})();
if(cljs.core.truth_(inst_40915)){
var statearr_40937_40956 = state_40932__$1;
(statearr_40937_40956[(1)] = (5));

} else {
var statearr_40938_40957 = state_40932__$1;
(statearr_40938_40957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40933 === (6))){
var inst_40914 = (state_40932[(5)]);
var inst_40919 = p.call(null,inst_40914);
var state_40932__$1 = state_40932;
if(cljs.core.truth_(inst_40919)){
var statearr_40939_40958 = state_40932__$1;
(statearr_40939_40958[(1)] = (8));

} else {
var statearr_40940_40959 = state_40932__$1;
(statearr_40940_40959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40933 === (3))){
var inst_40930 = (state_40932[(2)]);
var state_40932__$1 = state_40932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40932__$1,inst_40930);
} else {
if((state_val_40933 === (2))){
var state_40932__$1 = state_40932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40932__$1,(4),ch);
} else {
if((state_val_40933 === (11))){
var inst_40922 = (state_40932[(2)]);
var state_40932__$1 = state_40932;
var statearr_40941_40960 = state_40932__$1;
(statearr_40941_40960[(2)] = inst_40922);

(statearr_40941_40960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40933 === (9))){
var state_40932__$1 = state_40932;
var statearr_40942_40961 = state_40932__$1;
(statearr_40942_40961[(2)] = null);

(statearr_40942_40961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40933 === (5))){
var inst_40917 = cljs.core.async.close_BANG_.call(null,out);
var state_40932__$1 = state_40932;
var statearr_40943_40962 = state_40932__$1;
(statearr_40943_40962[(2)] = inst_40917);

(statearr_40943_40962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40933 === (10))){
var inst_40925 = (state_40932[(2)]);
var state_40932__$1 = (function (){var statearr_40944 = state_40932;
(statearr_40944[(6)] = inst_40925);

return statearr_40944;
})();
var statearr_40945_40963 = state_40932__$1;
(statearr_40945_40963[(2)] = null);

(statearr_40945_40963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40933 === (8))){
var inst_40914 = (state_40932[(5)]);
var state_40932__$1 = state_40932;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40932__$1,(11),out,inst_40914);
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
});})(c__40785__auto___40953,out))
;
return ((function (switch__40681__auto__,c__40785__auto___40953,out){
return (function() {
var cljs$core$async$state_machine__40682__auto__ = null;
var cljs$core$async$state_machine__40682__auto____0 = (function (){
var statearr_40947 = [null,null,null,null,null,null,null];
(statearr_40947[(0)] = cljs$core$async$state_machine__40682__auto__);

(statearr_40947[(1)] = (1));

return statearr_40947;
});
var cljs$core$async$state_machine__40682__auto____1 = (function (state_40932){
while(true){
var result__40683__auto__ = switch__40681__auto__.call(null,state_40932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40683__auto__;
}
break;
}
});
cljs$core$async$state_machine__40682__auto__ = function(state_40932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40682__auto____1.call(this,state_40932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40682__auto____0;
cljs$core$async$state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40682__auto____1;
return cljs$core$async$state_machine__40682__auto__;
})()
;})(switch__40681__auto__,c__40785__auto___40953,out))
})();
var state__40787__auto__ = (function (){var statearr_40948 = f__40786__auto__.call(null);
(statearr_40948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40785__auto___40953);

return statearr_40948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40787__auto__);
});})(c__40785__auto___40953,out))
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
var args40964 = [];
var len__38042__auto___40967 = arguments.length;
var i__38043__auto___40968 = (0);
while(true){
if((i__38043__auto___40968 < len__38042__auto___40967)){
args40964.push((arguments[i__38043__auto___40968]));

var G__40969 = (i__38043__auto___40968 + (1));
i__38043__auto___40968 = G__40969;
continue;
} else {
}
break;
}

var G__40966 = args40964.length;
switch (G__40966) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40964.length)].join('')));

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
var c__40785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40785__auto__){
return (function (){
var f__40786__auto__ = (function (){var switch__40681__auto__ = ((function (c__40785__auto__){
return (function (state_41118){
var state_val_41119 = (state_41118[(1)]);
if((state_val_41119 === (7))){
var inst_41114 = (state_41118[(2)]);
var state_41118__$1 = state_41118;
var statearr_41120_41153 = state_41118__$1;
(statearr_41120_41153[(2)] = inst_41114);

(statearr_41120_41153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41119 === (20))){
var inst_41089 = (state_41118[(5)]);
var inst_41100 = (state_41118[(2)]);
var inst_41101 = cljs.core.next.call(null,inst_41089);
var inst_41075 = inst_41101;
var inst_41076 = null;
var inst_41077 = (0);
var inst_41078 = (0);
var state_41118__$1 = (function (){var statearr_41121 = state_41118;
(statearr_41121[(6)] = inst_41076);

(statearr_41121[(7)] = inst_41077);

(statearr_41121[(8)] = inst_41075);

(statearr_41121[(9)] = inst_41078);

(statearr_41121[(10)] = inst_41100);

return statearr_41121;
})();
var statearr_41122_41154 = state_41118__$1;
(statearr_41122_41154[(2)] = null);

(statearr_41122_41154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41119 === (1))){
var state_41118__$1 = state_41118;
var statearr_41123_41155 = state_41118__$1;
(statearr_41123_41155[(2)] = null);

(statearr_41123_41155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41119 === (4))){
var inst_41064 = (state_41118[(11)]);
var inst_41064__$1 = (state_41118[(2)]);
var inst_41065 = (inst_41064__$1 == null);
var state_41118__$1 = (function (){var statearr_41127 = state_41118;
(statearr_41127[(11)] = inst_41064__$1);

return statearr_41127;
})();
if(cljs.core.truth_(inst_41065)){
var statearr_41128_41156 = state_41118__$1;
(statearr_41128_41156[(1)] = (5));

} else {
var statearr_41129_41157 = state_41118__$1;
(statearr_41129_41157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41119 === (15))){
var state_41118__$1 = state_41118;
var statearr_41130_41158 = state_41118__$1;
(statearr_41130_41158[(2)] = null);

(statearr_41130_41158[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41119 === (13))){
var inst_41076 = (state_41118[(6)]);
var inst_41077 = (state_41118[(7)]);
var inst_41075 = (state_41118[(8)]);
var inst_41078 = (state_41118[(9)]);
var inst_41085 = (state_41118[(2)]);
var inst_41086 = (inst_41078 + (1));
var tmp41124 = inst_41076;
var tmp41125 = inst_41077;
var tmp41126 = inst_41075;
var inst_41075__$1 = tmp41126;
var inst_41076__$1 = tmp41124;
var inst_41077__$1 = tmp41125;
var inst_41078__$1 = inst_41086;
var state_41118__$1 = (function (){var statearr_41131 = state_41118;
(statearr_41131[(6)] = inst_41076__$1);

(statearr_41131[(7)] = inst_41077__$1);

(statearr_41131[(8)] = inst_41075__$1);

(statearr_41131[(9)] = inst_41078__$1);

(statearr_41131[(12)] = inst_41085);

return statearr_41131;
})();
var statearr_41132_41159 = state_41118__$1;
(statearr_41132_41159[(2)] = null);

(statearr_41132_41159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41119 === (6))){
var inst_41064 = (state_41118[(11)]);
var inst_41069 = f.call(null,inst_41064);
var inst_41074 = cljs.core.seq.call(null,inst_41069);
var inst_41075 = inst_41074;
var inst_41076 = null;
var inst_41077 = (0);
var inst_41078 = (0);
var state_41118__$1 = (function (){var statearr_41133 = state_41118;
(statearr_41133[(6)] = inst_41076);

(statearr_41133[(7)] = inst_41077);

(statearr_41133[(8)] = inst_41075);

(statearr_41133[(9)] = inst_41078);

return statearr_41133;
})();
var statearr_41134_41160 = state_41118__$1;
(statearr_41134_41160[(2)] = null);

(statearr_41134_41160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41119 === (17))){
var inst_41089 = (state_41118[(5)]);
var inst_41093 = cljs.core.chunk_first.call(null,inst_41089);
var inst_41094 = cljs.core.chunk_rest.call(null,inst_41089);
var inst_41095 = cljs.core.count.call(null,inst_41093);
var inst_41075 = inst_41094;
var inst_41076 = inst_41093;
var inst_41077 = inst_41095;
var inst_41078 = (0);
var state_41118__$1 = (function (){var statearr_41135 = state_41118;
(statearr_41135[(6)] = inst_41076);

(statearr_41135[(7)] = inst_41077);

(statearr_41135[(8)] = inst_41075);

(statearr_41135[(9)] = inst_41078);

return statearr_41135;
})();
var statearr_41136_41161 = state_41118__$1;
(statearr_41136_41161[(2)] = null);

(statearr_41136_41161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41119 === (3))){
var inst_41116 = (state_41118[(2)]);
var state_41118__$1 = state_41118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41118__$1,inst_41116);
} else {
if((state_val_41119 === (12))){
var inst_41109 = (state_41118[(2)]);
var state_41118__$1 = state_41118;
var statearr_41137_41162 = state_41118__$1;
(statearr_41137_41162[(2)] = inst_41109);

(statearr_41137_41162[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41119 === (2))){
var state_41118__$1 = state_41118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41118__$1,(4),in$);
} else {
if((state_val_41119 === (19))){
var inst_41104 = (state_41118[(2)]);
var state_41118__$1 = state_41118;
var statearr_41138_41163 = state_41118__$1;
(statearr_41138_41163[(2)] = inst_41104);

(statearr_41138_41163[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41119 === (11))){
var inst_41075 = (state_41118[(8)]);
var inst_41089 = (state_41118[(5)]);
var inst_41089__$1 = cljs.core.seq.call(null,inst_41075);
var state_41118__$1 = (function (){var statearr_41139 = state_41118;
(statearr_41139[(5)] = inst_41089__$1);

return statearr_41139;
})();
if(inst_41089__$1){
var statearr_41140_41164 = state_41118__$1;
(statearr_41140_41164[(1)] = (14));

} else {
var statearr_41141_41165 = state_41118__$1;
(statearr_41141_41165[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41119 === (9))){
var inst_41111 = (state_41118[(2)]);
var state_41118__$1 = (function (){var statearr_41142 = state_41118;
(statearr_41142[(13)] = inst_41111);

return statearr_41142;
})();
var statearr_41143_41166 = state_41118__$1;
(statearr_41143_41166[(2)] = null);

(statearr_41143_41166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41119 === (5))){
var inst_41067 = cljs.core.async.close_BANG_.call(null,out);
var state_41118__$1 = state_41118;
var statearr_41144_41167 = state_41118__$1;
(statearr_41144_41167[(2)] = inst_41067);

(statearr_41144_41167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41119 === (14))){
var inst_41089 = (state_41118[(5)]);
var inst_41091 = cljs.core.chunked_seq_QMARK_.call(null,inst_41089);
var state_41118__$1 = state_41118;
if(inst_41091){
var statearr_41145_41168 = state_41118__$1;
(statearr_41145_41168[(1)] = (17));

} else {
var statearr_41146_41169 = state_41118__$1;
(statearr_41146_41169[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41119 === (16))){
var inst_41107 = (state_41118[(2)]);
var state_41118__$1 = state_41118;
var statearr_41147_41170 = state_41118__$1;
(statearr_41147_41170[(2)] = inst_41107);

(statearr_41147_41170[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41119 === (10))){
var inst_41076 = (state_41118[(6)]);
var inst_41078 = (state_41118[(9)]);
var inst_41083 = cljs.core._nth.call(null,inst_41076,inst_41078);
var state_41118__$1 = state_41118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41118__$1,(13),out,inst_41083);
} else {
if((state_val_41119 === (18))){
var inst_41089 = (state_41118[(5)]);
var inst_41098 = cljs.core.first.call(null,inst_41089);
var state_41118__$1 = state_41118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41118__$1,(20),out,inst_41098);
} else {
if((state_val_41119 === (8))){
var inst_41077 = (state_41118[(7)]);
var inst_41078 = (state_41118[(9)]);
var inst_41080 = (inst_41078 < inst_41077);
var inst_41081 = inst_41080;
var state_41118__$1 = state_41118;
if(cljs.core.truth_(inst_41081)){
var statearr_41148_41171 = state_41118__$1;
(statearr_41148_41171[(1)] = (10));

} else {
var statearr_41149_41172 = state_41118__$1;
(statearr_41149_41172[(1)] = (11));

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
});})(c__40785__auto__))
;
return ((function (switch__40681__auto__,c__40785__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__40682__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__40682__auto____0 = (function (){
var statearr_41151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41151[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__40682__auto__);

(statearr_41151[(1)] = (1));

return statearr_41151;
});
var cljs$core$async$mapcat_STAR__$_state_machine__40682__auto____1 = (function (state_41118){
while(true){
var result__40683__auto__ = switch__40681__auto__.call(null,state_41118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40683__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__40682__auto__ = function(state_41118){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__40682__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__40682__auto____1.call(this,state_41118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__40682__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__40682__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__40682__auto__;
})()
;})(switch__40681__auto__,c__40785__auto__))
})();
var state__40787__auto__ = (function (){var statearr_41152 = f__40786__auto__.call(null);
(statearr_41152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40785__auto__);

return statearr_41152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40787__auto__);
});})(c__40785__auto__))
);

return c__40785__auto__;
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
var args41173 = [];
var len__38042__auto___41176 = arguments.length;
var i__38043__auto___41177 = (0);
while(true){
if((i__38043__auto___41177 < len__38042__auto___41176)){
args41173.push((arguments[i__38043__auto___41177]));

var G__41178 = (i__38043__auto___41177 + (1));
i__38043__auto___41177 = G__41178;
continue;
} else {
}
break;
}

var G__41175 = args41173.length;
switch (G__41175) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41173.length)].join('')));

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
var args41180 = [];
var len__38042__auto___41183 = arguments.length;
var i__38043__auto___41184 = (0);
while(true){
if((i__38043__auto___41184 < len__38042__auto___41183)){
args41180.push((arguments[i__38043__auto___41184]));

var G__41185 = (i__38043__auto___41184 + (1));
i__38043__auto___41184 = G__41185;
continue;
} else {
}
break;
}

var G__41182 = args41180.length;
switch (G__41182) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41180.length)].join('')));

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
var args41187 = [];
var len__38042__auto___41226 = arguments.length;
var i__38043__auto___41227 = (0);
while(true){
if((i__38043__auto___41227 < len__38042__auto___41226)){
args41187.push((arguments[i__38043__auto___41227]));

var G__41228 = (i__38043__auto___41227 + (1));
i__38043__auto___41227 = G__41228;
continue;
} else {
}
break;
}

var G__41189 = args41187.length;
switch (G__41189) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41187.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__40785__auto___41230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40785__auto___41230){
return (function (){
var f__40786__auto__ = (function (){var switch__40681__auto__ = ((function (c__40785__auto___41230){
return (function (state_41209){
var state_val_41210 = (state_41209[(1)]);
if((state_val_41210 === (7))){
var inst_41205 = (state_41209[(2)]);
var state_41209__$1 = state_41209;
var statearr_41211_41231 = state_41209__$1;
(statearr_41211_41231[(2)] = inst_41205);

(statearr_41211_41231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41210 === (1))){
var state_41209__$1 = state_41209;
var statearr_41212_41232 = state_41209__$1;
(statearr_41212_41232[(2)] = null);

(statearr_41212_41232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41210 === (4))){
var inst_41192 = (state_41209[(5)]);
var inst_41192__$1 = (state_41209[(2)]);
var inst_41193 = (inst_41192__$1 == null);
var state_41209__$1 = (function (){var statearr_41213 = state_41209;
(statearr_41213[(5)] = inst_41192__$1);

return statearr_41213;
})();
if(cljs.core.truth_(inst_41193)){
var statearr_41214_41233 = state_41209__$1;
(statearr_41214_41233[(1)] = (5));

} else {
var statearr_41215_41234 = state_41209__$1;
(statearr_41215_41234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41210 === (6))){
var inst_41192 = (state_41209[(5)]);
var state_41209__$1 = state_41209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41209__$1,(11),to,inst_41192);
} else {
if((state_val_41210 === (3))){
var inst_41207 = (state_41209[(2)]);
var state_41209__$1 = state_41209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41209__$1,inst_41207);
} else {
if((state_val_41210 === (2))){
var state_41209__$1 = state_41209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41209__$1,(4),from);
} else {
if((state_val_41210 === (11))){
var inst_41202 = (state_41209[(2)]);
var state_41209__$1 = (function (){var statearr_41216 = state_41209;
(statearr_41216[(6)] = inst_41202);

return statearr_41216;
})();
var statearr_41217_41235 = state_41209__$1;
(statearr_41217_41235[(2)] = null);

(statearr_41217_41235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41210 === (9))){
var state_41209__$1 = state_41209;
var statearr_41218_41236 = state_41209__$1;
(statearr_41218_41236[(2)] = null);

(statearr_41218_41236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41210 === (5))){
var state_41209__$1 = state_41209;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41219_41237 = state_41209__$1;
(statearr_41219_41237[(1)] = (8));

} else {
var statearr_41220_41238 = state_41209__$1;
(statearr_41220_41238[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41210 === (10))){
var inst_41199 = (state_41209[(2)]);
var state_41209__$1 = state_41209;
var statearr_41221_41239 = state_41209__$1;
(statearr_41221_41239[(2)] = inst_41199);

(statearr_41221_41239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41210 === (8))){
var inst_41196 = cljs.core.async.close_BANG_.call(null,to);
var state_41209__$1 = state_41209;
var statearr_41222_41240 = state_41209__$1;
(statearr_41222_41240[(2)] = inst_41196);

(statearr_41222_41240[(1)] = (10));


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
});})(c__40785__auto___41230))
;
return ((function (switch__40681__auto__,c__40785__auto___41230){
return (function() {
var cljs$core$async$state_machine__40682__auto__ = null;
var cljs$core$async$state_machine__40682__auto____0 = (function (){
var statearr_41224 = [null,null,null,null,null,null,null];
(statearr_41224[(0)] = cljs$core$async$state_machine__40682__auto__);

(statearr_41224[(1)] = (1));

return statearr_41224;
});
var cljs$core$async$state_machine__40682__auto____1 = (function (state_41209){
while(true){
var result__40683__auto__ = switch__40681__auto__.call(null,state_41209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40683__auto__;
}
break;
}
});
cljs$core$async$state_machine__40682__auto__ = function(state_41209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40682__auto____1.call(this,state_41209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40682__auto____0;
cljs$core$async$state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40682__auto____1;
return cljs$core$async$state_machine__40682__auto__;
})()
;})(switch__40681__auto__,c__40785__auto___41230))
})();
var state__40787__auto__ = (function (){var statearr_41225 = f__40786__auto__.call(null);
(statearr_41225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40785__auto___41230);

return statearr_41225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40787__auto__);
});})(c__40785__auto___41230))
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
var args41241 = [];
var len__38042__auto___41283 = arguments.length;
var i__38043__auto___41284 = (0);
while(true){
if((i__38043__auto___41284 < len__38042__auto___41283)){
args41241.push((arguments[i__38043__auto___41284]));

var G__41285 = (i__38043__auto___41284 + (1));
i__38043__auto___41284 = G__41285;
continue;
} else {
}
break;
}

var G__41243 = args41241.length;
switch (G__41243) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41241.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__40785__auto___41287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40785__auto___41287,tc,fc){
return (function (){
var f__40786__auto__ = (function (){var switch__40681__auto__ = ((function (c__40785__auto___41287,tc,fc){
return (function (state_41265){
var state_val_41266 = (state_41265[(1)]);
if((state_val_41266 === (7))){
var inst_41261 = (state_41265[(2)]);
var state_41265__$1 = state_41265;
var statearr_41267_41288 = state_41265__$1;
(statearr_41267_41288[(2)] = inst_41261);

(statearr_41267_41288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41266 === (1))){
var state_41265__$1 = state_41265;
var statearr_41268_41289 = state_41265__$1;
(statearr_41268_41289[(2)] = null);

(statearr_41268_41289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41266 === (4))){
var inst_41246 = (state_41265[(5)]);
var inst_41246__$1 = (state_41265[(2)]);
var inst_41247 = (inst_41246__$1 == null);
var state_41265__$1 = (function (){var statearr_41269 = state_41265;
(statearr_41269[(5)] = inst_41246__$1);

return statearr_41269;
})();
if(cljs.core.truth_(inst_41247)){
var statearr_41270_41290 = state_41265__$1;
(statearr_41270_41290[(1)] = (5));

} else {
var statearr_41271_41291 = state_41265__$1;
(statearr_41271_41291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41266 === (6))){
var inst_41246 = (state_41265[(5)]);
var inst_41252 = p.call(null,inst_41246);
var state_41265__$1 = state_41265;
if(cljs.core.truth_(inst_41252)){
var statearr_41272_41292 = state_41265__$1;
(statearr_41272_41292[(1)] = (9));

} else {
var statearr_41273_41293 = state_41265__$1;
(statearr_41273_41293[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41266 === (3))){
var inst_41263 = (state_41265[(2)]);
var state_41265__$1 = state_41265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41265__$1,inst_41263);
} else {
if((state_val_41266 === (2))){
var state_41265__$1 = state_41265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41265__$1,(4),ch);
} else {
if((state_val_41266 === (11))){
var inst_41246 = (state_41265[(5)]);
var inst_41256 = (state_41265[(2)]);
var state_41265__$1 = state_41265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41265__$1,(8),inst_41256,inst_41246);
} else {
if((state_val_41266 === (9))){
var state_41265__$1 = state_41265;
var statearr_41274_41294 = state_41265__$1;
(statearr_41274_41294[(2)] = tc);

(statearr_41274_41294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41266 === (5))){
var inst_41249 = cljs.core.async.close_BANG_.call(null,tc);
var inst_41250 = cljs.core.async.close_BANG_.call(null,fc);
var state_41265__$1 = (function (){var statearr_41275 = state_41265;
(statearr_41275[(6)] = inst_41249);

return statearr_41275;
})();
var statearr_41276_41295 = state_41265__$1;
(statearr_41276_41295[(2)] = inst_41250);

(statearr_41276_41295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41266 === (10))){
var state_41265__$1 = state_41265;
var statearr_41277_41296 = state_41265__$1;
(statearr_41277_41296[(2)] = fc);

(statearr_41277_41296[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41266 === (8))){
var inst_41258 = (state_41265[(2)]);
var state_41265__$1 = (function (){var statearr_41278 = state_41265;
(statearr_41278[(7)] = inst_41258);

return statearr_41278;
})();
var statearr_41279_41297 = state_41265__$1;
(statearr_41279_41297[(2)] = null);

(statearr_41279_41297[(1)] = (2));


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
});})(c__40785__auto___41287,tc,fc))
;
return ((function (switch__40681__auto__,c__40785__auto___41287,tc,fc){
return (function() {
var cljs$core$async$state_machine__40682__auto__ = null;
var cljs$core$async$state_machine__40682__auto____0 = (function (){
var statearr_41281 = [null,null,null,null,null,null,null,null];
(statearr_41281[(0)] = cljs$core$async$state_machine__40682__auto__);

(statearr_41281[(1)] = (1));

return statearr_41281;
});
var cljs$core$async$state_machine__40682__auto____1 = (function (state_41265){
while(true){
var result__40683__auto__ = switch__40681__auto__.call(null,state_41265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40683__auto__;
}
break;
}
});
cljs$core$async$state_machine__40682__auto__ = function(state_41265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40682__auto____1.call(this,state_41265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40682__auto____0;
cljs$core$async$state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40682__auto____1;
return cljs$core$async$state_machine__40682__auto__;
})()
;})(switch__40681__auto__,c__40785__auto___41287,tc,fc))
})();
var state__40787__auto__ = (function (){var statearr_41282 = f__40786__auto__.call(null);
(statearr_41282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40785__auto___41287);

return statearr_41282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40787__auto__);
});})(c__40785__auto___41287,tc,fc))
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
var c__40785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40785__auto__){
return (function (){
var f__40786__auto__ = (function (){var switch__40681__auto__ = ((function (c__40785__auto__){
return (function (state_41340){
var state_val_41341 = (state_41340[(1)]);
if((state_val_41341 === (1))){
var inst_41326 = init;
var state_41340__$1 = (function (){var statearr_41342 = state_41340;
(statearr_41342[(5)] = inst_41326);

return statearr_41342;
})();
var statearr_41343_41354 = state_41340__$1;
(statearr_41343_41354[(2)] = null);

(statearr_41343_41354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41341 === (2))){
var state_41340__$1 = state_41340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41340__$1,(4),ch);
} else {
if((state_val_41341 === (3))){
var inst_41338 = (state_41340[(2)]);
var state_41340__$1 = state_41340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41340__$1,inst_41338);
} else {
if((state_val_41341 === (4))){
var inst_41329 = (state_41340[(6)]);
var inst_41329__$1 = (state_41340[(2)]);
var inst_41330 = (inst_41329__$1 == null);
var state_41340__$1 = (function (){var statearr_41344 = state_41340;
(statearr_41344[(6)] = inst_41329__$1);

return statearr_41344;
})();
if(cljs.core.truth_(inst_41330)){
var statearr_41345_41355 = state_41340__$1;
(statearr_41345_41355[(1)] = (5));

} else {
var statearr_41346_41356 = state_41340__$1;
(statearr_41346_41356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41341 === (5))){
var inst_41326 = (state_41340[(5)]);
var state_41340__$1 = state_41340;
var statearr_41347_41357 = state_41340__$1;
(statearr_41347_41357[(2)] = inst_41326);

(statearr_41347_41357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41341 === (6))){
var inst_41326 = (state_41340[(5)]);
var inst_41329 = (state_41340[(6)]);
var inst_41333 = f.call(null,inst_41326,inst_41329);
var inst_41326__$1 = inst_41333;
var state_41340__$1 = (function (){var statearr_41348 = state_41340;
(statearr_41348[(5)] = inst_41326__$1);

return statearr_41348;
})();
var statearr_41349_41358 = state_41340__$1;
(statearr_41349_41358[(2)] = null);

(statearr_41349_41358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41341 === (7))){
var inst_41336 = (state_41340[(2)]);
var state_41340__$1 = state_41340;
var statearr_41350_41359 = state_41340__$1;
(statearr_41350_41359[(2)] = inst_41336);

(statearr_41350_41359[(1)] = (3));


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
});})(c__40785__auto__))
;
return ((function (switch__40681__auto__,c__40785__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__40682__auto__ = null;
var cljs$core$async$reduce_$_state_machine__40682__auto____0 = (function (){
var statearr_41352 = [null,null,null,null,null,null,null];
(statearr_41352[(0)] = cljs$core$async$reduce_$_state_machine__40682__auto__);

(statearr_41352[(1)] = (1));

return statearr_41352;
});
var cljs$core$async$reduce_$_state_machine__40682__auto____1 = (function (state_41340){
while(true){
var result__40683__auto__ = switch__40681__auto__.call(null,state_41340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40683__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__40682__auto__ = function(state_41340){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__40682__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__40682__auto____1.call(this,state_41340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__40682__auto____0;
cljs$core$async$reduce_$_state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__40682__auto____1;
return cljs$core$async$reduce_$_state_machine__40682__auto__;
})()
;})(switch__40681__auto__,c__40785__auto__))
})();
var state__40787__auto__ = (function (){var statearr_41353 = f__40786__auto__.call(null);
(statearr_41353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40785__auto__);

return statearr_41353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40787__auto__);
});})(c__40785__auto__))
);

return c__40785__auto__;
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
var args41360 = [];
var len__38042__auto___41400 = arguments.length;
var i__38043__auto___41401 = (0);
while(true){
if((i__38043__auto___41401 < len__38042__auto___41400)){
args41360.push((arguments[i__38043__auto___41401]));

var G__41402 = (i__38043__auto___41401 + (1));
i__38043__auto___41401 = G__41402;
continue;
} else {
}
break;
}

var G__41362 = args41360.length;
switch (G__41362) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41360.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__40785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40785__auto__){
return (function (){
var f__40786__auto__ = (function (){var switch__40681__auto__ = ((function (c__40785__auto__){
return (function (state_41383){
var state_val_41384 = (state_41383[(1)]);
if((state_val_41384 === (7))){
var inst_41364 = (state_41383[(5)]);
var inst_41369 = (state_41383[(2)]);
var inst_41370 = cljs.core.next.call(null,inst_41364);
var inst_41364__$1 = inst_41370;
var state_41383__$1 = (function (){var statearr_41385 = state_41383;
(statearr_41385[(6)] = inst_41369);

(statearr_41385[(5)] = inst_41364__$1);

return statearr_41385;
})();
var statearr_41386_41404 = state_41383__$1;
(statearr_41386_41404[(2)] = null);

(statearr_41386_41404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41384 === (1))){
var inst_41363 = cljs.core.seq.call(null,coll);
var inst_41364 = inst_41363;
var state_41383__$1 = (function (){var statearr_41387 = state_41383;
(statearr_41387[(5)] = inst_41364);

return statearr_41387;
})();
var statearr_41388_41405 = state_41383__$1;
(statearr_41388_41405[(2)] = null);

(statearr_41388_41405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41384 === (4))){
var inst_41364 = (state_41383[(5)]);
var inst_41367 = cljs.core.first.call(null,inst_41364);
var state_41383__$1 = state_41383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41383__$1,(7),ch,inst_41367);
} else {
if((state_val_41384 === (6))){
var inst_41379 = (state_41383[(2)]);
var state_41383__$1 = state_41383;
var statearr_41389_41406 = state_41383__$1;
(statearr_41389_41406[(2)] = inst_41379);

(statearr_41389_41406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41384 === (3))){
var inst_41381 = (state_41383[(2)]);
var state_41383__$1 = state_41383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41383__$1,inst_41381);
} else {
if((state_val_41384 === (2))){
var inst_41364 = (state_41383[(5)]);
var state_41383__$1 = state_41383;
if(cljs.core.truth_(inst_41364)){
var statearr_41390_41407 = state_41383__$1;
(statearr_41390_41407[(1)] = (4));

} else {
var statearr_41391_41408 = state_41383__$1;
(statearr_41391_41408[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41384 === (9))){
var state_41383__$1 = state_41383;
var statearr_41392_41409 = state_41383__$1;
(statearr_41392_41409[(2)] = null);

(statearr_41392_41409[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41384 === (5))){
var state_41383__$1 = state_41383;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41393_41410 = state_41383__$1;
(statearr_41393_41410[(1)] = (8));

} else {
var statearr_41394_41411 = state_41383__$1;
(statearr_41394_41411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41384 === (10))){
var inst_41377 = (state_41383[(2)]);
var state_41383__$1 = state_41383;
var statearr_41395_41412 = state_41383__$1;
(statearr_41395_41412[(2)] = inst_41377);

(statearr_41395_41412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41384 === (8))){
var inst_41374 = cljs.core.async.close_BANG_.call(null,ch);
var state_41383__$1 = state_41383;
var statearr_41396_41413 = state_41383__$1;
(statearr_41396_41413[(2)] = inst_41374);

(statearr_41396_41413[(1)] = (10));


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
});})(c__40785__auto__))
;
return ((function (switch__40681__auto__,c__40785__auto__){
return (function() {
var cljs$core$async$state_machine__40682__auto__ = null;
var cljs$core$async$state_machine__40682__auto____0 = (function (){
var statearr_41398 = [null,null,null,null,null,null,null];
(statearr_41398[(0)] = cljs$core$async$state_machine__40682__auto__);

(statearr_41398[(1)] = (1));

return statearr_41398;
});
var cljs$core$async$state_machine__40682__auto____1 = (function (state_41383){
while(true){
var result__40683__auto__ = switch__40681__auto__.call(null,state_41383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40683__auto__;
}
break;
}
});
cljs$core$async$state_machine__40682__auto__ = function(state_41383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40682__auto____1.call(this,state_41383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40682__auto____0;
cljs$core$async$state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40682__auto____1;
return cljs$core$async$state_machine__40682__auto__;
})()
;})(switch__40681__auto__,c__40785__auto__))
})();
var state__40787__auto__ = (function (){var statearr_41399 = f__40786__auto__.call(null);
(statearr_41399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40785__auto__);

return statearr_41399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40787__auto__);
});})(c__40785__auto__))
);

return c__40785__auto__;
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
var x__37630__auto__ = (((_ == null))?null:_);
var m__37631__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__37630__auto__)]);
if(!((m__37631__auto__ == null))){
return m__37631__auto__.call(null,_);
} else {
var m__37631__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__37631__auto____$1 == null))){
return m__37631__auto____$1.call(null,_);
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
var x__37630__auto__ = (((m == null))?null:m);
var m__37631__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__37630__auto__)]);
if(!((m__37631__auto__ == null))){
return m__37631__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__37631__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__37631__auto____$1 == null))){
return m__37631__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__37630__auto__ = (((m == null))?null:m);
var m__37631__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__37630__auto__)]);
if(!((m__37631__auto__ == null))){
return m__37631__auto__.call(null,m,ch);
} else {
var m__37631__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__37631__auto____$1 == null))){
return m__37631__auto____$1.call(null,m,ch);
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
var x__37630__auto__ = (((m == null))?null:m);
var m__37631__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__37630__auto__)]);
if(!((m__37631__auto__ == null))){
return m__37631__auto__.call(null,m);
} else {
var m__37631__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__37631__auto____$1 == null))){
return m__37631__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async41630 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41630 = (function (mult,ch,cs,meta41631){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta41631 = meta41631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41632,meta41631__$1){
var self__ = this;
var _41632__$1 = this;
return (new cljs.core.async.t_cljs$core$async41630(self__.mult,self__.ch,self__.cs,meta41631__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async41630.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41632){
var self__ = this;
var _41632__$1 = this;
return self__.meta41631;
});})(cs))
;

cljs.core.async.t_cljs$core$async41630.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async41630.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async41630.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async41630.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41630.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41630.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41630.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  If a tap put throws an exception, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41631","meta41631",-1834172539,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async41630.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41630.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41630";

cljs.core.async.t_cljs$core$async41630.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__37573__auto__,writer__37574__auto__,opt__37575__auto__){
return cljs.core._write.call(null,writer__37574__auto__,"cljs.core.async/t_cljs$core$async41630");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async41630 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async41630(mult__$1,ch__$1,cs__$1,meta41631){
return (new cljs.core.async.t_cljs$core$async41630(mult__$1,ch__$1,cs__$1,meta41631));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async41630(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__40785__auto___41846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40785__auto___41846,cs,m,dchan,dctr,done){
return (function (){
var f__40786__auto__ = (function (){var switch__40681__auto__ = ((function (c__40785__auto___41846,cs,m,dchan,dctr,done){
return (function (state_41764){
var state_val_41765 = (state_41764[(1)]);
if((state_val_41765 === (7))){
var inst_41760 = (state_41764[(2)]);
var state_41764__$1 = state_41764;
var statearr_41766_41847 = state_41764__$1;
(statearr_41766_41847[(2)] = inst_41760);

(statearr_41766_41847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (20))){
var inst_41666 = (state_41764[(5)]);
var inst_41678 = cljs.core.first.call(null,inst_41666);
var inst_41679 = cljs.core.nth.call(null,inst_41678,(0),null);
var inst_41680 = cljs.core.nth.call(null,inst_41678,(1),null);
var state_41764__$1 = (function (){var statearr_41767 = state_41764;
(statearr_41767[(6)] = inst_41679);

return statearr_41767;
})();
if(cljs.core.truth_(inst_41680)){
var statearr_41768_41848 = state_41764__$1;
(statearr_41768_41848[(1)] = (22));

} else {
var statearr_41769_41849 = state_41764__$1;
(statearr_41769_41849[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (27))){
var inst_41708 = (state_41764[(7)]);
var inst_41710 = (state_41764[(8)]);
var inst_41715 = cljs.core._nth.call(null,inst_41708,inst_41710);
var state_41764__$1 = (function (){var statearr_41770 = state_41764;
(statearr_41770[(9)] = inst_41715);

return statearr_41770;
})();
var statearr_41771_41850 = state_41764__$1;
(statearr_41771_41850[(2)] = null);

(statearr_41771_41850[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (1))){
var state_41764__$1 = state_41764;
var statearr_41772_41851 = state_41764__$1;
(statearr_41772_41851[(2)] = null);

(statearr_41772_41851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (24))){
var inst_41666 = (state_41764[(5)]);
var inst_41685 = (state_41764[(2)]);
var inst_41686 = cljs.core.next.call(null,inst_41666);
var inst_41644 = inst_41686;
var inst_41645 = null;
var inst_41646 = (0);
var inst_41647 = (0);
var state_41764__$1 = (function (){var statearr_41773 = state_41764;
(statearr_41773[(10)] = inst_41645);

(statearr_41773[(11)] = inst_41644);

(statearr_41773[(12)] = inst_41646);

(statearr_41773[(13)] = inst_41685);

(statearr_41773[(14)] = inst_41647);

return statearr_41773;
})();
var statearr_41774_41852 = state_41764__$1;
(statearr_41774_41852[(2)] = null);

(statearr_41774_41852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (39))){
var inst_41727 = (state_41764[(15)]);
var inst_41744 = (state_41764[(2)]);
var inst_41745 = cljs.core.next.call(null,inst_41727);
var inst_41707 = inst_41745;
var inst_41708 = null;
var inst_41709 = (0);
var inst_41710 = (0);
var state_41764__$1 = (function (){var statearr_41778 = state_41764;
(statearr_41778[(7)] = inst_41708);

(statearr_41778[(16)] = inst_41744);

(statearr_41778[(8)] = inst_41710);

(statearr_41778[(17)] = inst_41709);

(statearr_41778[(18)] = inst_41707);

return statearr_41778;
})();
var statearr_41779_41853 = state_41764__$1;
(statearr_41779_41853[(2)] = null);

(statearr_41779_41853[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (4))){
var inst_41635 = (state_41764[(19)]);
var inst_41635__$1 = (state_41764[(2)]);
var inst_41636 = (inst_41635__$1 == null);
var state_41764__$1 = (function (){var statearr_41780 = state_41764;
(statearr_41780[(19)] = inst_41635__$1);

return statearr_41780;
})();
if(cljs.core.truth_(inst_41636)){
var statearr_41781_41854 = state_41764__$1;
(statearr_41781_41854[(1)] = (5));

} else {
var statearr_41782_41855 = state_41764__$1;
(statearr_41782_41855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (15))){
var inst_41645 = (state_41764[(10)]);
var inst_41644 = (state_41764[(11)]);
var inst_41646 = (state_41764[(12)]);
var inst_41647 = (state_41764[(14)]);
var inst_41662 = (state_41764[(2)]);
var inst_41663 = (inst_41647 + (1));
var tmp41775 = inst_41645;
var tmp41776 = inst_41644;
var tmp41777 = inst_41646;
var inst_41644__$1 = tmp41776;
var inst_41645__$1 = tmp41775;
var inst_41646__$1 = tmp41777;
var inst_41647__$1 = inst_41663;
var state_41764__$1 = (function (){var statearr_41783 = state_41764;
(statearr_41783[(10)] = inst_41645__$1);

(statearr_41783[(11)] = inst_41644__$1);

(statearr_41783[(12)] = inst_41646__$1);

(statearr_41783[(20)] = inst_41662);

(statearr_41783[(14)] = inst_41647__$1);

return statearr_41783;
})();
var statearr_41784_41856 = state_41764__$1;
(statearr_41784_41856[(2)] = null);

(statearr_41784_41856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (21))){
var inst_41689 = (state_41764[(2)]);
var state_41764__$1 = state_41764;
var statearr_41785_41857 = state_41764__$1;
(statearr_41785_41857[(2)] = inst_41689);

(statearr_41785_41857[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (31))){
var inst_41715 = (state_41764[(9)]);
var inst_41716 = (state_41764[(2)]);
var inst_41717 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_41718 = cljs.core.async.untap_STAR_.call(null,m,inst_41715);
var state_41764__$1 = (function (){var statearr_41786 = state_41764;
(statearr_41786[(21)] = inst_41717);

(statearr_41786[(22)] = inst_41716);

return statearr_41786;
})();
var statearr_41787_41858 = state_41764__$1;
(statearr_41787_41858[(2)] = inst_41718);

(statearr_41787_41858[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (32))){
try{var inst_41635 = (state_41764[(19)]);
var inst_41715 = (state_41764[(9)]);
var inst_41721 = cljs.core.async.put_BANG_.call(null,inst_41715,inst_41635,done);
var state_41764__$1 = state_41764;
var statearr_41790_41859 = state_41764__$1;
(statearr_41790_41859[(2)] = inst_41721);

(statearr_41790_41859[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
}catch (e41788){if((e41788 instanceof Object)){
var ex__40675__auto__ = e41788;
var statearr_41789_41860 = state_41764;
(statearr_41789_41860[(1)] = (31));

(statearr_41789_41860[(2)] = ex__40675__auto__);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41788;

}
}} else {
if((state_val_41765 === (40))){
var inst_41736 = (state_41764[(23)]);
var inst_41737 = (state_41764[(2)]);
var inst_41738 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_41739 = cljs.core.async.untap_STAR_.call(null,m,inst_41736);
var state_41764__$1 = (function (){var statearr_41791 = state_41764;
(statearr_41791[(24)] = inst_41737);

(statearr_41791[(25)] = inst_41738);

return statearr_41791;
})();
var statearr_41792_41861 = state_41764__$1;
(statearr_41792_41861[(2)] = inst_41739);

(statearr_41792_41861[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (33))){
var inst_41727 = (state_41764[(15)]);
var inst_41729 = cljs.core.chunked_seq_QMARK_.call(null,inst_41727);
var state_41764__$1 = state_41764;
if(inst_41729){
var statearr_41793_41862 = state_41764__$1;
(statearr_41793_41862[(1)] = (36));

} else {
var statearr_41794_41863 = state_41764__$1;
(statearr_41794_41863[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (13))){
var inst_41656 = (state_41764[(26)]);
var inst_41659 = cljs.core.async.close_BANG_.call(null,inst_41656);
var state_41764__$1 = state_41764;
var statearr_41795_41864 = state_41764__$1;
(statearr_41795_41864[(2)] = inst_41659);

(statearr_41795_41864[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (22))){
var inst_41679 = (state_41764[(6)]);
var inst_41682 = cljs.core.async.close_BANG_.call(null,inst_41679);
var state_41764__$1 = state_41764;
var statearr_41796_41865 = state_41764__$1;
(statearr_41796_41865[(2)] = inst_41682);

(statearr_41796_41865[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (36))){
var inst_41727 = (state_41764[(15)]);
var inst_41731 = cljs.core.chunk_first.call(null,inst_41727);
var inst_41732 = cljs.core.chunk_rest.call(null,inst_41727);
var inst_41733 = cljs.core.count.call(null,inst_41731);
var inst_41707 = inst_41732;
var inst_41708 = inst_41731;
var inst_41709 = inst_41733;
var inst_41710 = (0);
var state_41764__$1 = (function (){var statearr_41797 = state_41764;
(statearr_41797[(7)] = inst_41708);

(statearr_41797[(8)] = inst_41710);

(statearr_41797[(17)] = inst_41709);

(statearr_41797[(18)] = inst_41707);

return statearr_41797;
})();
var statearr_41798_41866 = state_41764__$1;
(statearr_41798_41866[(2)] = null);

(statearr_41798_41866[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (41))){
try{var inst_41736 = (state_41764[(23)]);
var inst_41635 = (state_41764[(19)]);
var inst_41742 = cljs.core.async.put_BANG_.call(null,inst_41736,inst_41635,done);
var state_41764__$1 = state_41764;
var statearr_41801_41867 = state_41764__$1;
(statearr_41801_41867[(2)] = inst_41742);

(statearr_41801_41867[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
}catch (e41799){if((e41799 instanceof Object)){
var ex__40675__auto__ = e41799;
var statearr_41800_41868 = state_41764;
(statearr_41800_41868[(1)] = (40));

(statearr_41800_41868[(2)] = ex__40675__auto__);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41799;

}
}} else {
if((state_val_41765 === (29))){
var inst_41753 = (state_41764[(2)]);
var state_41764__$1 = state_41764;
var statearr_41802_41869 = state_41764__$1;
(statearr_41802_41869[(2)] = inst_41753);

(statearr_41802_41869[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (6))){
var inst_41698 = cljs.core.deref.call(null,cs);
var inst_41699 = cljs.core.keys.call(null,inst_41698);
var inst_41700 = cljs.core.count.call(null,inst_41699);
var inst_41701 = cljs.core.reset_BANG_.call(null,dctr,inst_41700);
var inst_41706 = cljs.core.seq.call(null,inst_41699);
var inst_41707 = inst_41706;
var inst_41708 = null;
var inst_41709 = (0);
var inst_41710 = (0);
var state_41764__$1 = (function (){var statearr_41803 = state_41764;
(statearr_41803[(27)] = inst_41701);

(statearr_41803[(7)] = inst_41708);

(statearr_41803[(8)] = inst_41710);

(statearr_41803[(17)] = inst_41709);

(statearr_41803[(18)] = inst_41707);

return statearr_41803;
})();
var statearr_41804_41870 = state_41764__$1;
(statearr_41804_41870[(2)] = null);

(statearr_41804_41870[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (28))){
var inst_41727 = (state_41764[(15)]);
var inst_41707 = (state_41764[(18)]);
var inst_41727__$1 = cljs.core.seq.call(null,inst_41707);
var state_41764__$1 = (function (){var statearr_41805 = state_41764;
(statearr_41805[(15)] = inst_41727__$1);

return statearr_41805;
})();
if(inst_41727__$1){
var statearr_41806_41871 = state_41764__$1;
(statearr_41806_41871[(1)] = (33));

} else {
var statearr_41807_41872 = state_41764__$1;
(statearr_41807_41872[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (25))){
var inst_41710 = (state_41764[(8)]);
var inst_41709 = (state_41764[(17)]);
var inst_41712 = (inst_41710 < inst_41709);
var inst_41713 = inst_41712;
var state_41764__$1 = state_41764;
if(cljs.core.truth_(inst_41713)){
var statearr_41808_41873 = state_41764__$1;
(statearr_41808_41873[(1)] = (27));

} else {
var statearr_41809_41874 = state_41764__$1;
(statearr_41809_41874[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (34))){
var state_41764__$1 = state_41764;
var statearr_41810_41875 = state_41764__$1;
(statearr_41810_41875[(2)] = null);

(statearr_41810_41875[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (17))){
var state_41764__$1 = state_41764;
var statearr_41811_41876 = state_41764__$1;
(statearr_41811_41876[(2)] = null);

(statearr_41811_41876[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (3))){
var inst_41762 = (state_41764[(2)]);
var state_41764__$1 = state_41764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41764__$1,inst_41762);
} else {
if((state_val_41765 === (12))){
var inst_41694 = (state_41764[(2)]);
var state_41764__$1 = state_41764;
var statearr_41812_41877 = state_41764__$1;
(statearr_41812_41877[(2)] = inst_41694);

(statearr_41812_41877[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (2))){
var state_41764__$1 = state_41764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41764__$1,(4),ch);
} else {
if((state_val_41765 === (23))){
var state_41764__$1 = state_41764;
var statearr_41813_41878 = state_41764__$1;
(statearr_41813_41878[(2)] = null);

(statearr_41813_41878[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (35))){
var inst_41751 = (state_41764[(2)]);
var state_41764__$1 = state_41764;
var statearr_41814_41879 = state_41764__$1;
(statearr_41814_41879[(2)] = inst_41751);

(statearr_41814_41879[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (19))){
var inst_41666 = (state_41764[(5)]);
var inst_41670 = cljs.core.chunk_first.call(null,inst_41666);
var inst_41671 = cljs.core.chunk_rest.call(null,inst_41666);
var inst_41672 = cljs.core.count.call(null,inst_41670);
var inst_41644 = inst_41671;
var inst_41645 = inst_41670;
var inst_41646 = inst_41672;
var inst_41647 = (0);
var state_41764__$1 = (function (){var statearr_41815 = state_41764;
(statearr_41815[(10)] = inst_41645);

(statearr_41815[(11)] = inst_41644);

(statearr_41815[(12)] = inst_41646);

(statearr_41815[(14)] = inst_41647);

return statearr_41815;
})();
var statearr_41816_41880 = state_41764__$1;
(statearr_41816_41880[(2)] = null);

(statearr_41816_41880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (11))){
var inst_41666 = (state_41764[(5)]);
var inst_41644 = (state_41764[(11)]);
var inst_41666__$1 = cljs.core.seq.call(null,inst_41644);
var state_41764__$1 = (function (){var statearr_41817 = state_41764;
(statearr_41817[(5)] = inst_41666__$1);

return statearr_41817;
})();
if(inst_41666__$1){
var statearr_41818_41881 = state_41764__$1;
(statearr_41818_41881[(1)] = (16));

} else {
var statearr_41819_41882 = state_41764__$1;
(statearr_41819_41882[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (9))){
var inst_41696 = (state_41764[(2)]);
var state_41764__$1 = state_41764;
var statearr_41820_41883 = state_41764__$1;
(statearr_41820_41883[(2)] = inst_41696);

(statearr_41820_41883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (5))){
var inst_41642 = cljs.core.deref.call(null,cs);
var inst_41643 = cljs.core.seq.call(null,inst_41642);
var inst_41644 = inst_41643;
var inst_41645 = null;
var inst_41646 = (0);
var inst_41647 = (0);
var state_41764__$1 = (function (){var statearr_41821 = state_41764;
(statearr_41821[(10)] = inst_41645);

(statearr_41821[(11)] = inst_41644);

(statearr_41821[(12)] = inst_41646);

(statearr_41821[(14)] = inst_41647);

return statearr_41821;
})();
var statearr_41822_41884 = state_41764__$1;
(statearr_41822_41884[(2)] = null);

(statearr_41822_41884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (14))){
var state_41764__$1 = state_41764;
var statearr_41823_41885 = state_41764__$1;
(statearr_41823_41885[(2)] = null);

(statearr_41823_41885[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (26))){
var inst_41755 = (state_41764[(2)]);
var state_41764__$1 = (function (){var statearr_41824 = state_41764;
(statearr_41824[(28)] = inst_41755);

return statearr_41824;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41764__$1,(42),dchan);
} else {
if((state_val_41765 === (16))){
var inst_41666 = (state_41764[(5)]);
var inst_41668 = cljs.core.chunked_seq_QMARK_.call(null,inst_41666);
var state_41764__$1 = state_41764;
if(inst_41668){
var statearr_41828_41886 = state_41764__$1;
(statearr_41828_41886[(1)] = (19));

} else {
var statearr_41829_41887 = state_41764__$1;
(statearr_41829_41887[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (38))){
var inst_41748 = (state_41764[(2)]);
var state_41764__$1 = state_41764;
var statearr_41830_41888 = state_41764__$1;
(statearr_41830_41888[(2)] = inst_41748);

(statearr_41830_41888[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (30))){
var inst_41708 = (state_41764[(7)]);
var inst_41710 = (state_41764[(8)]);
var inst_41709 = (state_41764[(17)]);
var inst_41707 = (state_41764[(18)]);
var inst_41723 = (state_41764[(2)]);
var inst_41724 = (inst_41710 + (1));
var tmp41825 = inst_41708;
var tmp41826 = inst_41709;
var tmp41827 = inst_41707;
var inst_41707__$1 = tmp41827;
var inst_41708__$1 = tmp41825;
var inst_41709__$1 = tmp41826;
var inst_41710__$1 = inst_41724;
var state_41764__$1 = (function (){var statearr_41831 = state_41764;
(statearr_41831[(29)] = inst_41723);

(statearr_41831[(7)] = inst_41708__$1);

(statearr_41831[(8)] = inst_41710__$1);

(statearr_41831[(17)] = inst_41709__$1);

(statearr_41831[(18)] = inst_41707__$1);

return statearr_41831;
})();
var statearr_41832_41889 = state_41764__$1;
(statearr_41832_41889[(2)] = null);

(statearr_41832_41889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (10))){
var inst_41645 = (state_41764[(10)]);
var inst_41647 = (state_41764[(14)]);
var inst_41655 = cljs.core._nth.call(null,inst_41645,inst_41647);
var inst_41656 = cljs.core.nth.call(null,inst_41655,(0),null);
var inst_41657 = cljs.core.nth.call(null,inst_41655,(1),null);
var state_41764__$1 = (function (){var statearr_41833 = state_41764;
(statearr_41833[(26)] = inst_41656);

return statearr_41833;
})();
if(cljs.core.truth_(inst_41657)){
var statearr_41834_41890 = state_41764__$1;
(statearr_41834_41890[(1)] = (13));

} else {
var statearr_41835_41891 = state_41764__$1;
(statearr_41835_41891[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (18))){
var inst_41692 = (state_41764[(2)]);
var state_41764__$1 = state_41764;
var statearr_41836_41892 = state_41764__$1;
(statearr_41836_41892[(2)] = inst_41692);

(statearr_41836_41892[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (42))){
var inst_41757 = (state_41764[(2)]);
var state_41764__$1 = (function (){var statearr_41837 = state_41764;
(statearr_41837[(30)] = inst_41757);

return statearr_41837;
})();
var statearr_41838_41893 = state_41764__$1;
(statearr_41838_41893[(2)] = null);

(statearr_41838_41893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (37))){
var inst_41727 = (state_41764[(15)]);
var inst_41736 = cljs.core.first.call(null,inst_41727);
var state_41764__$1 = (function (){var statearr_41839 = state_41764;
(statearr_41839[(23)] = inst_41736);

return statearr_41839;
})();
var statearr_41840_41894 = state_41764__$1;
(statearr_41840_41894[(2)] = null);

(statearr_41840_41894[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41765 === (8))){
var inst_41646 = (state_41764[(12)]);
var inst_41647 = (state_41764[(14)]);
var inst_41649 = (inst_41647 < inst_41646);
var inst_41650 = inst_41649;
var state_41764__$1 = state_41764;
if(cljs.core.truth_(inst_41650)){
var statearr_41841_41895 = state_41764__$1;
(statearr_41841_41895[(1)] = (10));

} else {
var statearr_41842_41896 = state_41764__$1;
(statearr_41842_41896[(1)] = (11));

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
});})(c__40785__auto___41846,cs,m,dchan,dctr,done))
;
return ((function (switch__40681__auto__,c__40785__auto___41846,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__40682__auto__ = null;
var cljs$core$async$mult_$_state_machine__40682__auto____0 = (function (){
var statearr_41844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41844[(0)] = cljs$core$async$mult_$_state_machine__40682__auto__);

(statearr_41844[(1)] = (1));

return statearr_41844;
});
var cljs$core$async$mult_$_state_machine__40682__auto____1 = (function (state_41764){
while(true){
var result__40683__auto__ = switch__40681__auto__.call(null,state_41764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40683__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__40682__auto__ = function(state_41764){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__40682__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__40682__auto____1.call(this,state_41764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__40682__auto____0;
cljs$core$async$mult_$_state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__40682__auto____1;
return cljs$core$async$mult_$_state_machine__40682__auto__;
})()
;})(switch__40681__auto__,c__40785__auto___41846,cs,m,dchan,dctr,done))
})();
var state__40787__auto__ = (function (){var statearr_41845 = f__40786__auto__.call(null);
(statearr_41845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40785__auto___41846);

return statearr_41845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40787__auto__);
});})(c__40785__auto___41846,cs,m,dchan,dctr,done))
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
var args41897 = [];
var len__38042__auto___41900 = arguments.length;
var i__38043__auto___41901 = (0);
while(true){
if((i__38043__auto___41901 < len__38042__auto___41900)){
args41897.push((arguments[i__38043__auto___41901]));

var G__41902 = (i__38043__auto___41901 + (1));
i__38043__auto___41901 = G__41902;
continue;
} else {
}
break;
}

var G__41899 = args41897.length;
switch (G__41899) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41897.length)].join('')));

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
var x__37630__auto__ = (((m == null))?null:m);
var m__37631__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__37630__auto__)]);
if(!((m__37631__auto__ == null))){
return m__37631__auto__.call(null,m,ch);
} else {
var m__37631__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__37631__auto____$1 == null))){
return m__37631__auto____$1.call(null,m,ch);
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
var x__37630__auto__ = (((m == null))?null:m);
var m__37631__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__37630__auto__)]);
if(!((m__37631__auto__ == null))){
return m__37631__auto__.call(null,m,ch);
} else {
var m__37631__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__37631__auto____$1 == null))){
return m__37631__auto____$1.call(null,m,ch);
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
var x__37630__auto__ = (((m == null))?null:m);
var m__37631__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__37630__auto__)]);
if(!((m__37631__auto__ == null))){
return m__37631__auto__.call(null,m);
} else {
var m__37631__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__37631__auto____$1 == null))){
return m__37631__auto____$1.call(null,m);
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
var x__37630__auto__ = (((m == null))?null:m);
var m__37631__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__37630__auto__)]);
if(!((m__37631__auto__ == null))){
return m__37631__auto__.call(null,m,state_map);
} else {
var m__37631__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__37631__auto____$1 == null))){
return m__37631__auto____$1.call(null,m,state_map);
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
var x__37630__auto__ = (((m == null))?null:m);
var m__37631__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__37630__auto__)]);
if(!((m__37631__auto__ == null))){
return m__37631__auto__.call(null,m,mode);
} else {
var m__37631__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__37631__auto____$1 == null))){
return m__37631__auto____$1.call(null,m,mode);
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
if(typeof cljs.core.async.t_cljs$core$async42055 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42055 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42056){
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
this.meta42056 = meta42056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42057,meta42056__$1){
var self__ = this;
var _42057__$1 = this;
return (new cljs.core.async.t_cljs$core$async42055(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta42056__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42055.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42057){
var self__ = this;
var _42057__$1 = this;
return self__.meta42056;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42055.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async42055.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42055.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async42055.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42055.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42055.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42055.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42055.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async42055.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta42056","meta42056",-1190902122,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42055.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42055.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42055";

cljs.core.async.t_cljs$core$async42055.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__37573__auto__,writer__37574__auto__,opt__37575__auto__){
return cljs.core._write.call(null,writer__37574__auto__,"cljs.core.async/t_cljs$core$async42055");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async42055 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async42055(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42056){
return (new cljs.core.async.t_cljs$core$async42055(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42056));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async42055(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40785__auto___42206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40785__auto___42206,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__40786__auto__ = (function (){var switch__40681__auto__ = ((function (c__40785__auto___42206,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_42152){
var state_val_42153 = (state_42152[(1)]);
if((state_val_42153 === (7))){
var inst_42073 = (state_42152[(2)]);
var state_42152__$1 = state_42152;
var statearr_42154_42207 = state_42152__$1;
(statearr_42154_42207[(2)] = inst_42073);

(statearr_42154_42207[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (20))){
var inst_42085 = (state_42152[(5)]);
var state_42152__$1 = state_42152;
var statearr_42155_42208 = state_42152__$1;
(statearr_42155_42208[(2)] = inst_42085);

(statearr_42155_42208[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (27))){
var state_42152__$1 = state_42152;
var statearr_42156_42209 = state_42152__$1;
(statearr_42156_42209[(2)] = null);

(statearr_42156_42209[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (1))){
var inst_42061 = (state_42152[(6)]);
var inst_42061__$1 = calc_state.call(null);
var inst_42063 = (inst_42061__$1 == null);
var inst_42064 = cljs.core.not.call(null,inst_42063);
var state_42152__$1 = (function (){var statearr_42157 = state_42152;
(statearr_42157[(6)] = inst_42061__$1);

return statearr_42157;
})();
if(inst_42064){
var statearr_42158_42210 = state_42152__$1;
(statearr_42158_42210[(1)] = (2));

} else {
var statearr_42159_42211 = state_42152__$1;
(statearr_42159_42211[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (24))){
var inst_42108 = (state_42152[(7)]);
var inst_42131 = (state_42152[(8)]);
var inst_42117 = (state_42152[(9)]);
var inst_42131__$1 = inst_42108.call(null,inst_42117);
var state_42152__$1 = (function (){var statearr_42160 = state_42152;
(statearr_42160[(8)] = inst_42131__$1);

return statearr_42160;
})();
if(cljs.core.truth_(inst_42131__$1)){
var statearr_42161_42212 = state_42152__$1;
(statearr_42161_42212[(1)] = (29));

} else {
var statearr_42162_42213 = state_42152__$1;
(statearr_42162_42213[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (4))){
var inst_42076 = (state_42152[(2)]);
var state_42152__$1 = state_42152;
if(cljs.core.truth_(inst_42076)){
var statearr_42163_42214 = state_42152__$1;
(statearr_42163_42214[(1)] = (8));

} else {
var statearr_42164_42215 = state_42152__$1;
(statearr_42164_42215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (15))){
var inst_42102 = (state_42152[(2)]);
var state_42152__$1 = state_42152;
if(cljs.core.truth_(inst_42102)){
var statearr_42165_42216 = state_42152__$1;
(statearr_42165_42216[(1)] = (19));

} else {
var statearr_42166_42217 = state_42152__$1;
(statearr_42166_42217[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (21))){
var inst_42107 = (state_42152[(10)]);
var inst_42107__$1 = (state_42152[(2)]);
var inst_42108 = cljs.core.get.call(null,inst_42107__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42109 = cljs.core.get.call(null,inst_42107__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42110 = cljs.core.get.call(null,inst_42107__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42152__$1 = (function (){var statearr_42167 = state_42152;
(statearr_42167[(11)] = inst_42109);

(statearr_42167[(7)] = inst_42108);

(statearr_42167[(10)] = inst_42107__$1);

return statearr_42167;
})();
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_42152__$1,(22),inst_42110);
} else {
if((state_val_42153 === (31))){
var inst_42139 = (state_42152[(2)]);
var state_42152__$1 = state_42152;
if(cljs.core.truth_(inst_42139)){
var statearr_42168_42218 = state_42152__$1;
(statearr_42168_42218[(1)] = (32));

} else {
var statearr_42169_42219 = state_42152__$1;
(statearr_42169_42219[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (32))){
var inst_42116 = (state_42152[(12)]);
var state_42152__$1 = state_42152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42152__$1,(35),out,inst_42116);
} else {
if((state_val_42153 === (33))){
var state_42152__$1 = state_42152;
var statearr_42170_42220 = state_42152__$1;
(statearr_42170_42220[(2)] = null);

(statearr_42170_42220[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (13))){
var inst_42085 = (state_42152[(5)]);
var inst_42092 = inst_42085.cljs$lang$protocol_mask$partition0$;
var inst_42093 = (inst_42092 & (64));
var inst_42094 = inst_42085.cljs$core$ISeq$;
var inst_42095 = (inst_42093) || (inst_42094);
var state_42152__$1 = state_42152;
if(cljs.core.truth_(inst_42095)){
var statearr_42171_42221 = state_42152__$1;
(statearr_42171_42221[(1)] = (16));

} else {
var statearr_42172_42222 = state_42152__$1;
(statearr_42172_42222[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (22))){
var inst_42116 = (state_42152[(12)]);
var inst_42117 = (state_42152[(9)]);
var inst_42115 = (state_42152[(2)]);
var inst_42116__$1 = cljs.core.nth.call(null,inst_42115,(0),null);
var inst_42117__$1 = cljs.core.nth.call(null,inst_42115,(1),null);
var inst_42118 = (inst_42116__$1 == null);
var inst_42119 = cljs.core._EQ_.call(null,inst_42117__$1,change);
var inst_42120 = (inst_42118) || (inst_42119);
var state_42152__$1 = (function (){var statearr_42173 = state_42152;
(statearr_42173[(12)] = inst_42116__$1);

(statearr_42173[(9)] = inst_42117__$1);

return statearr_42173;
})();
if(cljs.core.truth_(inst_42120)){
var statearr_42174_42223 = state_42152__$1;
(statearr_42174_42223[(1)] = (23));

} else {
var statearr_42175_42224 = state_42152__$1;
(statearr_42175_42224[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (29))){
var inst_42131 = (state_42152[(8)]);
var state_42152__$1 = state_42152;
var statearr_42176_42225 = state_42152__$1;
(statearr_42176_42225[(2)] = inst_42131);

(statearr_42176_42225[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (6))){
var state_42152__$1 = state_42152;
var statearr_42177_42226 = state_42152__$1;
(statearr_42177_42226[(2)] = false);

(statearr_42177_42226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (28))){
var inst_42127 = (state_42152[(2)]);
var inst_42128 = calc_state.call(null);
var inst_42085 = inst_42128;
var state_42152__$1 = (function (){var statearr_42178 = state_42152;
(statearr_42178[(5)] = inst_42085);

(statearr_42178[(13)] = inst_42127);

return statearr_42178;
})();
var statearr_42179_42227 = state_42152__$1;
(statearr_42179_42227[(2)] = null);

(statearr_42179_42227[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (25))){
var inst_42148 = (state_42152[(2)]);
var state_42152__$1 = state_42152;
var statearr_42180_42228 = state_42152__$1;
(statearr_42180_42228[(2)] = inst_42148);

(statearr_42180_42228[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (34))){
var inst_42107 = (state_42152[(10)]);
var inst_42145 = (state_42152[(2)]);
var inst_42085 = inst_42107;
var state_42152__$1 = (function (){var statearr_42181 = state_42152;
(statearr_42181[(5)] = inst_42085);

(statearr_42181[(14)] = inst_42145);

return statearr_42181;
})();
var statearr_42182_42229 = state_42152__$1;
(statearr_42182_42229[(2)] = null);

(statearr_42182_42229[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (17))){
var state_42152__$1 = state_42152;
var statearr_42183_42230 = state_42152__$1;
(statearr_42183_42230[(2)] = false);

(statearr_42183_42230[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (3))){
var state_42152__$1 = state_42152;
var statearr_42184_42231 = state_42152__$1;
(statearr_42184_42231[(2)] = false);

(statearr_42184_42231[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (12))){
var inst_42150 = (state_42152[(2)]);
var state_42152__$1 = state_42152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42152__$1,inst_42150);
} else {
if((state_val_42153 === (2))){
var inst_42061 = (state_42152[(6)]);
var inst_42066 = inst_42061.cljs$lang$protocol_mask$partition0$;
var inst_42067 = (inst_42066 & (64));
var inst_42068 = inst_42061.cljs$core$ISeq$;
var inst_42069 = (inst_42067) || (inst_42068);
var state_42152__$1 = state_42152;
if(cljs.core.truth_(inst_42069)){
var statearr_42185_42232 = state_42152__$1;
(statearr_42185_42232[(1)] = (5));

} else {
var statearr_42186_42233 = state_42152__$1;
(statearr_42186_42233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (23))){
var inst_42116 = (state_42152[(12)]);
var inst_42122 = (inst_42116 == null);
var state_42152__$1 = state_42152;
if(cljs.core.truth_(inst_42122)){
var statearr_42187_42234 = state_42152__$1;
(statearr_42187_42234[(1)] = (26));

} else {
var statearr_42188_42235 = state_42152__$1;
(statearr_42188_42235[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (35))){
var inst_42142 = (state_42152[(2)]);
var state_42152__$1 = state_42152;
var statearr_42189_42236 = state_42152__$1;
(statearr_42189_42236[(2)] = inst_42142);

(statearr_42189_42236[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (19))){
var inst_42085 = (state_42152[(5)]);
var inst_42104 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42085);
var state_42152__$1 = state_42152;
var statearr_42190_42237 = state_42152__$1;
(statearr_42190_42237[(2)] = inst_42104);

(statearr_42190_42237[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (11))){
var inst_42085 = (state_42152[(5)]);
var inst_42089 = (inst_42085 == null);
var inst_42090 = cljs.core.not.call(null,inst_42089);
var state_42152__$1 = state_42152;
if(inst_42090){
var statearr_42191_42238 = state_42152__$1;
(statearr_42191_42238[(1)] = (13));

} else {
var statearr_42192_42239 = state_42152__$1;
(statearr_42192_42239[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (9))){
var inst_42061 = (state_42152[(6)]);
var state_42152__$1 = state_42152;
var statearr_42193_42240 = state_42152__$1;
(statearr_42193_42240[(2)] = inst_42061);

(statearr_42193_42240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (5))){
var state_42152__$1 = state_42152;
var statearr_42194_42241 = state_42152__$1;
(statearr_42194_42241[(2)] = true);

(statearr_42194_42241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (14))){
var state_42152__$1 = state_42152;
var statearr_42195_42242 = state_42152__$1;
(statearr_42195_42242[(2)] = false);

(statearr_42195_42242[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (26))){
var inst_42117 = (state_42152[(9)]);
var inst_42124 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_42117);
var state_42152__$1 = state_42152;
var statearr_42196_42243 = state_42152__$1;
(statearr_42196_42243[(2)] = inst_42124);

(statearr_42196_42243[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (16))){
var state_42152__$1 = state_42152;
var statearr_42197_42244 = state_42152__$1;
(statearr_42197_42244[(2)] = true);

(statearr_42197_42244[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (30))){
var inst_42109 = (state_42152[(11)]);
var inst_42108 = (state_42152[(7)]);
var inst_42117 = (state_42152[(9)]);
var inst_42134 = cljs.core.empty_QMARK_.call(null,inst_42108);
var inst_42135 = inst_42109.call(null,inst_42117);
var inst_42136 = cljs.core.not.call(null,inst_42135);
var inst_42137 = (inst_42134) && (inst_42136);
var state_42152__$1 = state_42152;
var statearr_42198_42245 = state_42152__$1;
(statearr_42198_42245[(2)] = inst_42137);

(statearr_42198_42245[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (10))){
var inst_42061 = (state_42152[(6)]);
var inst_42081 = (state_42152[(2)]);
var inst_42082 = cljs.core.get.call(null,inst_42081,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42083 = cljs.core.get.call(null,inst_42081,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42084 = cljs.core.get.call(null,inst_42081,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42085 = inst_42061;
var state_42152__$1 = (function (){var statearr_42199 = state_42152;
(statearr_42199[(15)] = inst_42082);

(statearr_42199[(5)] = inst_42085);

(statearr_42199[(16)] = inst_42083);

(statearr_42199[(17)] = inst_42084);

return statearr_42199;
})();
var statearr_42200_42246 = state_42152__$1;
(statearr_42200_42246[(2)] = null);

(statearr_42200_42246[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (18))){
var inst_42099 = (state_42152[(2)]);
var state_42152__$1 = state_42152;
var statearr_42201_42247 = state_42152__$1;
(statearr_42201_42247[(2)] = inst_42099);

(statearr_42201_42247[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42153 === (8))){
var inst_42061 = (state_42152[(6)]);
var inst_42078 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42061);
var state_42152__$1 = state_42152;
var statearr_42202_42248 = state_42152__$1;
(statearr_42202_42248[(2)] = inst_42078);

(statearr_42202_42248[(1)] = (10));


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
});})(c__40785__auto___42206,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__40681__auto__,c__40785__auto___42206,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__40682__auto__ = null;
var cljs$core$async$mix_$_state_machine__40682__auto____0 = (function (){
var statearr_42204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42204[(0)] = cljs$core$async$mix_$_state_machine__40682__auto__);

(statearr_42204[(1)] = (1));

return statearr_42204;
});
var cljs$core$async$mix_$_state_machine__40682__auto____1 = (function (state_42152){
while(true){
var result__40683__auto__ = switch__40681__auto__.call(null,state_42152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40683__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__40682__auto__ = function(state_42152){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__40682__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__40682__auto____1.call(this,state_42152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__40682__auto____0;
cljs$core$async$mix_$_state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__40682__auto____1;
return cljs$core$async$mix_$_state_machine__40682__auto__;
})()
;})(switch__40681__auto__,c__40785__auto___42206,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__40787__auto__ = (function (){var statearr_42205 = f__40786__auto__.call(null);
(statearr_42205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40785__auto___42206);

return statearr_42205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40787__auto__);
});})(c__40785__auto___42206,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__37630__auto__ = (((p == null))?null:p);
var m__37631__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__37630__auto__)]);
if(!((m__37631__auto__ == null))){
return m__37631__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__37631__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__37631__auto____$1 == null))){
return m__37631__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__37630__auto__ = (((p == null))?null:p);
var m__37631__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__37630__auto__)]);
if(!((m__37631__auto__ == null))){
return m__37631__auto__.call(null,p,v,ch);
} else {
var m__37631__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__37631__auto____$1 == null))){
return m__37631__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args42249 = [];
var len__38042__auto___42252 = arguments.length;
var i__38043__auto___42253 = (0);
while(true){
if((i__38043__auto___42253 < len__38042__auto___42252)){
args42249.push((arguments[i__38043__auto___42253]));

var G__42254 = (i__38043__auto___42253 + (1));
i__38043__auto___42253 = G__42254;
continue;
} else {
}
break;
}

var G__42251 = args42249.length;
switch (G__42251) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42249.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__37630__auto__ = (((p == null))?null:p);
var m__37631__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37630__auto__)]);
if(!((m__37631__auto__ == null))){
return m__37631__auto__.call(null,p);
} else {
var m__37631__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37631__auto____$1 == null))){
return m__37631__auto____$1.call(null,p);
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
var x__37630__auto__ = (((p == null))?null:p);
var m__37631__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37630__auto__)]);
if(!((m__37631__auto__ == null))){
return m__37631__auto__.call(null,p,v);
} else {
var m__37631__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37631__auto____$1 == null))){
return m__37631__auto____$1.call(null,p,v);
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
var args42257 = [];
var len__38042__auto___42383 = arguments.length;
var i__38043__auto___42384 = (0);
while(true){
if((i__38043__auto___42384 < len__38042__auto___42383)){
args42257.push((arguments[i__38043__auto___42384]));

var G__42385 = (i__38043__auto___42384 + (1));
i__38043__auto___42384 = G__42385;
continue;
} else {
}
break;
}

var G__42259 = args42257.length;
switch (G__42259) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42257.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__36967__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__36967__auto__)){
return or__36967__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__36967__auto__,mults){
return (function (p1__42256_SHARP_){
if(cljs.core.truth_(p1__42256_SHARP_.call(null,topic))){
return p1__42256_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__42256_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__36967__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async42260 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42260 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42261){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42261 = meta42261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42262,meta42261__$1){
var self__ = this;
var _42262__$1 = this;
return (new cljs.core.async.t_cljs$core$async42260(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42261__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42260.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42262){
var self__ = this;
var _42262__$1 = this;
return self__.meta42261;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42260.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async42260.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42260.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async42260.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42260.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async42260.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42260.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42260.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42261","meta42261",1101647188,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42260.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42260";

cljs.core.async.t_cljs$core$async42260.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__37573__auto__,writer__37574__auto__,opt__37575__auto__){
return cljs.core._write.call(null,writer__37574__auto__,"cljs.core.async/t_cljs$core$async42260");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async42260 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async42260(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42261){
return (new cljs.core.async.t_cljs$core$async42260(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42261));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async42260(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40785__auto___42387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40785__auto___42387,mults,ensure_mult,p){
return (function (){
var f__40786__auto__ = (function (){var switch__40681__auto__ = ((function (c__40785__auto___42387,mults,ensure_mult,p){
return (function (state_42335){
var state_val_42336 = (state_42335[(1)]);
if((state_val_42336 === (7))){
var inst_42331 = (state_42335[(2)]);
var state_42335__$1 = state_42335;
var statearr_42337_42388 = state_42335__$1;
(statearr_42337_42388[(2)] = inst_42331);

(statearr_42337_42388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42336 === (20))){
var state_42335__$1 = state_42335;
var statearr_42338_42389 = state_42335__$1;
(statearr_42338_42389[(2)] = null);

(statearr_42338_42389[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42336 === (1))){
var state_42335__$1 = state_42335;
var statearr_42339_42390 = state_42335__$1;
(statearr_42339_42390[(2)] = null);

(statearr_42339_42390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42336 === (24))){
try{var inst_42265 = (state_42335[(5)]);
var inst_42315 = (state_42335[(6)]);
var inst_42321 = cljs.core.async.muxch_STAR_.call(null,inst_42315);
var state_42335__$1 = state_42335;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42335__$1,(25),inst_42321,inst_42265);
}catch (e42340){if((e42340 instanceof Object)){
var ex__40675__auto__ = e42340;
var statearr_42341_42391 = state_42335;
(statearr_42341_42391[(1)] = (23));

(statearr_42341_42391[(2)] = ex__40675__auto__);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42340;

}
}} else {
if((state_val_42336 === (4))){
var inst_42265 = (state_42335[(5)]);
var inst_42265__$1 = (state_42335[(2)]);
var inst_42266 = (inst_42265__$1 == null);
var state_42335__$1 = (function (){var statearr_42342 = state_42335;
(statearr_42342[(5)] = inst_42265__$1);

return statearr_42342;
})();
if(cljs.core.truth_(inst_42266)){
var statearr_42343_42392 = state_42335__$1;
(statearr_42343_42392[(1)] = (5));

} else {
var statearr_42344_42393 = state_42335__$1;
(statearr_42344_42393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42336 === (15))){
var inst_42307 = (state_42335[(2)]);
var state_42335__$1 = state_42335;
var statearr_42345_42394 = state_42335__$1;
(statearr_42345_42394[(2)] = inst_42307);

(statearr_42345_42394[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42336 === (21))){
var inst_42328 = (state_42335[(2)]);
var state_42335__$1 = (function (){var statearr_42346 = state_42335;
(statearr_42346[(7)] = inst_42328);

return statearr_42346;
})();
var statearr_42347_42395 = state_42335__$1;
(statearr_42347_42395[(2)] = null);

(statearr_42347_42395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42336 === (13))){
var inst_42289 = (state_42335[(8)]);
var inst_42291 = cljs.core.chunked_seq_QMARK_.call(null,inst_42289);
var state_42335__$1 = state_42335;
if(inst_42291){
var statearr_42348_42396 = state_42335__$1;
(statearr_42348_42396[(1)] = (16));

} else {
var statearr_42349_42397 = state_42335__$1;
(statearr_42349_42397[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42336 === (22))){
var inst_42325 = (state_42335[(2)]);
var state_42335__$1 = state_42335;
var statearr_42350_42398 = state_42335__$1;
(statearr_42350_42398[(2)] = inst_42325);

(statearr_42350_42398[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42336 === (6))){
var inst_42265 = (state_42335[(5)]);
var inst_42313 = (state_42335[(9)]);
var inst_42315 = (state_42335[(6)]);
var inst_42313__$1 = topic_fn.call(null,inst_42265);
var inst_42314 = cljs.core.deref.call(null,mults);
var inst_42315__$1 = cljs.core.get.call(null,inst_42314,inst_42313__$1);
var state_42335__$1 = (function (){var statearr_42351 = state_42335;
(statearr_42351[(9)] = inst_42313__$1);

(statearr_42351[(6)] = inst_42315__$1);

return statearr_42351;
})();
if(cljs.core.truth_(inst_42315__$1)){
var statearr_42352_42399 = state_42335__$1;
(statearr_42352_42399[(1)] = (19));

} else {
var statearr_42353_42400 = state_42335__$1;
(statearr_42353_42400[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42336 === (25))){
try{var inst_42323 = (state_42335[(2)]);
var state_42335__$1 = state_42335;
var statearr_42356_42401 = state_42335__$1;
(statearr_42356_42401[(2)] = inst_42323);

(statearr_42356_42401[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
}catch (e42354){if((e42354 instanceof Object)){
var ex__40675__auto__ = e42354;
var statearr_42355_42402 = state_42335;
(statearr_42355_42402[(1)] = (23));

(statearr_42355_42402[(2)] = ex__40675__auto__);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42354;

}
}} else {
if((state_val_42336 === (17))){
var inst_42289 = (state_42335[(8)]);
var inst_42298 = cljs.core.first.call(null,inst_42289);
var inst_42299 = cljs.core.async.muxch_STAR_.call(null,inst_42298);
var inst_42300 = cljs.core.async.close_BANG_.call(null,inst_42299);
var inst_42301 = cljs.core.next.call(null,inst_42289);
var inst_42275 = inst_42301;
var inst_42276 = null;
var inst_42277 = (0);
var inst_42278 = (0);
var state_42335__$1 = (function (){var statearr_42357 = state_42335;
(statearr_42357[(10)] = inst_42276);

(statearr_42357[(11)] = inst_42278);

(statearr_42357[(12)] = inst_42277);

(statearr_42357[(13)] = inst_42300);

(statearr_42357[(14)] = inst_42275);

return statearr_42357;
})();
var statearr_42358_42403 = state_42335__$1;
(statearr_42358_42403[(2)] = null);

(statearr_42358_42403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42336 === (3))){
var inst_42333 = (state_42335[(2)]);
var state_42335__$1 = state_42335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42335__$1,inst_42333);
} else {
if((state_val_42336 === (12))){
var inst_42309 = (state_42335[(2)]);
var state_42335__$1 = state_42335;
var statearr_42359_42404 = state_42335__$1;
(statearr_42359_42404[(2)] = inst_42309);

(statearr_42359_42404[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42336 === (2))){
var state_42335__$1 = state_42335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42335__$1,(4),ch);
} else {
if((state_val_42336 === (23))){
var inst_42313 = (state_42335[(9)]);
var inst_42317 = (state_42335[(2)]);
var inst_42318 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_42313);
var state_42335__$1 = (function (){var statearr_42360 = state_42335;
(statearr_42360[(15)] = inst_42317);

return statearr_42360;
})();
var statearr_42361_42405 = state_42335__$1;
(statearr_42361_42405[(2)] = inst_42318);

(statearr_42361_42405[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42336 === (19))){
var state_42335__$1 = state_42335;
var statearr_42362_42406 = state_42335__$1;
(statearr_42362_42406[(2)] = null);

(statearr_42362_42406[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42336 === (11))){
var inst_42289 = (state_42335[(8)]);
var inst_42275 = (state_42335[(14)]);
var inst_42289__$1 = cljs.core.seq.call(null,inst_42275);
var state_42335__$1 = (function (){var statearr_42363 = state_42335;
(statearr_42363[(8)] = inst_42289__$1);

return statearr_42363;
})();
if(inst_42289__$1){
var statearr_42364_42407 = state_42335__$1;
(statearr_42364_42407[(1)] = (13));

} else {
var statearr_42365_42408 = state_42335__$1;
(statearr_42365_42408[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42336 === (9))){
var inst_42311 = (state_42335[(2)]);
var state_42335__$1 = state_42335;
var statearr_42366_42409 = state_42335__$1;
(statearr_42366_42409[(2)] = inst_42311);

(statearr_42366_42409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42336 === (5))){
var inst_42272 = cljs.core.deref.call(null,mults);
var inst_42273 = cljs.core.vals.call(null,inst_42272);
var inst_42274 = cljs.core.seq.call(null,inst_42273);
var inst_42275 = inst_42274;
var inst_42276 = null;
var inst_42277 = (0);
var inst_42278 = (0);
var state_42335__$1 = (function (){var statearr_42367 = state_42335;
(statearr_42367[(10)] = inst_42276);

(statearr_42367[(11)] = inst_42278);

(statearr_42367[(12)] = inst_42277);

(statearr_42367[(14)] = inst_42275);

return statearr_42367;
})();
var statearr_42368_42410 = state_42335__$1;
(statearr_42368_42410[(2)] = null);

(statearr_42368_42410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42336 === (14))){
var state_42335__$1 = state_42335;
var statearr_42372_42411 = state_42335__$1;
(statearr_42372_42411[(2)] = null);

(statearr_42372_42411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42336 === (16))){
var inst_42289 = (state_42335[(8)]);
var inst_42293 = cljs.core.chunk_first.call(null,inst_42289);
var inst_42294 = cljs.core.chunk_rest.call(null,inst_42289);
var inst_42295 = cljs.core.count.call(null,inst_42293);
var inst_42275 = inst_42294;
var inst_42276 = inst_42293;
var inst_42277 = inst_42295;
var inst_42278 = (0);
var state_42335__$1 = (function (){var statearr_42373 = state_42335;
(statearr_42373[(10)] = inst_42276);

(statearr_42373[(11)] = inst_42278);

(statearr_42373[(12)] = inst_42277);

(statearr_42373[(14)] = inst_42275);

return statearr_42373;
})();
var statearr_42374_42412 = state_42335__$1;
(statearr_42374_42412[(2)] = null);

(statearr_42374_42412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42336 === (10))){
var inst_42276 = (state_42335[(10)]);
var inst_42278 = (state_42335[(11)]);
var inst_42277 = (state_42335[(12)]);
var inst_42275 = (state_42335[(14)]);
var inst_42283 = cljs.core._nth.call(null,inst_42276,inst_42278);
var inst_42284 = cljs.core.async.muxch_STAR_.call(null,inst_42283);
var inst_42285 = cljs.core.async.close_BANG_.call(null,inst_42284);
var inst_42286 = (inst_42278 + (1));
var tmp42369 = inst_42276;
var tmp42370 = inst_42277;
var tmp42371 = inst_42275;
var inst_42275__$1 = tmp42371;
var inst_42276__$1 = tmp42369;
var inst_42277__$1 = tmp42370;
var inst_42278__$1 = inst_42286;
var state_42335__$1 = (function (){var statearr_42375 = state_42335;
(statearr_42375[(10)] = inst_42276__$1);

(statearr_42375[(11)] = inst_42278__$1);

(statearr_42375[(12)] = inst_42277__$1);

(statearr_42375[(14)] = inst_42275__$1);

(statearr_42375[(16)] = inst_42285);

return statearr_42375;
})();
var statearr_42376_42413 = state_42335__$1;
(statearr_42376_42413[(2)] = null);

(statearr_42376_42413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42336 === (18))){
var inst_42304 = (state_42335[(2)]);
var state_42335__$1 = state_42335;
var statearr_42377_42414 = state_42335__$1;
(statearr_42377_42414[(2)] = inst_42304);

(statearr_42377_42414[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42336 === (8))){
var inst_42278 = (state_42335[(11)]);
var inst_42277 = (state_42335[(12)]);
var inst_42280 = (inst_42278 < inst_42277);
var inst_42281 = inst_42280;
var state_42335__$1 = state_42335;
if(cljs.core.truth_(inst_42281)){
var statearr_42378_42415 = state_42335__$1;
(statearr_42378_42415[(1)] = (10));

} else {
var statearr_42379_42416 = state_42335__$1;
(statearr_42379_42416[(1)] = (11));

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
});})(c__40785__auto___42387,mults,ensure_mult,p))
;
return ((function (switch__40681__auto__,c__40785__auto___42387,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__40682__auto__ = null;
var cljs$core$async$state_machine__40682__auto____0 = (function (){
var statearr_42381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42381[(0)] = cljs$core$async$state_machine__40682__auto__);

(statearr_42381[(1)] = (1));

return statearr_42381;
});
var cljs$core$async$state_machine__40682__auto____1 = (function (state_42335){
while(true){
var result__40683__auto__ = switch__40681__auto__.call(null,state_42335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40683__auto__;
}
break;
}
});
cljs$core$async$state_machine__40682__auto__ = function(state_42335){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40682__auto____1.call(this,state_42335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40682__auto____0;
cljs$core$async$state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40682__auto____1;
return cljs$core$async$state_machine__40682__auto__;
})()
;})(switch__40681__auto__,c__40785__auto___42387,mults,ensure_mult,p))
})();
var state__40787__auto__ = (function (){var statearr_42382 = f__40786__auto__.call(null);
(statearr_42382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40785__auto___42387);

return statearr_42382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40787__auto__);
});})(c__40785__auto___42387,mults,ensure_mult,p))
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
var args42417 = [];
var len__38042__auto___42420 = arguments.length;
var i__38043__auto___42421 = (0);
while(true){
if((i__38043__auto___42421 < len__38042__auto___42420)){
args42417.push((arguments[i__38043__auto___42421]));

var G__42422 = (i__38043__auto___42421 + (1));
i__38043__auto___42421 = G__42422;
continue;
} else {
}
break;
}

var G__42419 = args42417.length;
switch (G__42419) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42417.length)].join('')));

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
var args42424 = [];
var len__38042__auto___42427 = arguments.length;
var i__38043__auto___42428 = (0);
while(true){
if((i__38043__auto___42428 < len__38042__auto___42427)){
args42424.push((arguments[i__38043__auto___42428]));

var G__42429 = (i__38043__auto___42428 + (1));
i__38043__auto___42428 = G__42429;
continue;
} else {
}
break;
}

var G__42426 = args42424.length;
switch (G__42426) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42424.length)].join('')));

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
var args42431 = [];
var len__38042__auto___42499 = arguments.length;
var i__38043__auto___42500 = (0);
while(true){
if((i__38043__auto___42500 < len__38042__auto___42499)){
args42431.push((arguments[i__38043__auto___42500]));

var G__42501 = (i__38043__auto___42500 + (1));
i__38043__auto___42500 = G__42501;
continue;
} else {
}
break;
}

var G__42433 = args42431.length;
switch (G__42433) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42431.length)].join('')));

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
var c__40785__auto___42503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40785__auto___42503,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__40786__auto__ = (function (){var switch__40681__auto__ = ((function (c__40785__auto___42503,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42471){
var state_val_42472 = (state_42471[(1)]);
if((state_val_42472 === (7))){
var state_42471__$1 = state_42471;
var statearr_42473_42504 = state_42471__$1;
(statearr_42473_42504[(2)] = null);

(statearr_42473_42504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42472 === (1))){
var state_42471__$1 = state_42471;
var statearr_42474_42505 = state_42471__$1;
(statearr_42474_42505[(2)] = null);

(statearr_42474_42505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42472 === (4))){
var inst_42436 = (state_42471[(5)]);
var inst_42438 = (inst_42436 < cnt);
var state_42471__$1 = state_42471;
if(cljs.core.truth_(inst_42438)){
var statearr_42475_42506 = state_42471__$1;
(statearr_42475_42506[(1)] = (6));

} else {
var statearr_42476_42507 = state_42471__$1;
(statearr_42476_42507[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42472 === (15))){
var inst_42467 = (state_42471[(2)]);
var state_42471__$1 = state_42471;
var statearr_42477_42508 = state_42471__$1;
(statearr_42477_42508[(2)] = inst_42467);

(statearr_42477_42508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42472 === (13))){
var inst_42460 = cljs.core.async.close_BANG_.call(null,out);
var state_42471__$1 = state_42471;
var statearr_42478_42509 = state_42471__$1;
(statearr_42478_42509[(2)] = inst_42460);

(statearr_42478_42509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42472 === (6))){
var state_42471__$1 = state_42471;
var statearr_42479_42510 = state_42471__$1;
(statearr_42479_42510[(2)] = null);

(statearr_42479_42510[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42472 === (3))){
var inst_42469 = (state_42471[(2)]);
var state_42471__$1 = state_42471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42471__$1,inst_42469);
} else {
if((state_val_42472 === (12))){
var inst_42457 = (state_42471[(6)]);
var inst_42457__$1 = (state_42471[(2)]);
var inst_42458 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_42457__$1);
var state_42471__$1 = (function (){var statearr_42480 = state_42471;
(statearr_42480[(6)] = inst_42457__$1);

return statearr_42480;
})();
if(cljs.core.truth_(inst_42458)){
var statearr_42481_42511 = state_42471__$1;
(statearr_42481_42511[(1)] = (13));

} else {
var statearr_42482_42512 = state_42471__$1;
(statearr_42482_42512[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42472 === (2))){
var inst_42435 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_42436 = (0);
var state_42471__$1 = (function (){var statearr_42483 = state_42471;
(statearr_42483[(7)] = inst_42435);

(statearr_42483[(5)] = inst_42436);

return statearr_42483;
})();
var statearr_42484_42513 = state_42471__$1;
(statearr_42484_42513[(2)] = null);

(statearr_42484_42513[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42472 === (11))){
try{var inst_42436 = (state_42471[(5)]);
var inst_42444 = chs__$1.call(null,inst_42436);
var inst_42445 = done.call(null,inst_42436);
var inst_42446 = cljs.core.async.take_BANG_.call(null,inst_42444,inst_42445);
var state_42471__$1 = state_42471;
var statearr_42487_42514 = state_42471__$1;
(statearr_42487_42514[(2)] = inst_42446);

(statearr_42487_42514[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
}catch (e42485){if((e42485 instanceof Object)){
var ex__40675__auto__ = e42485;
var statearr_42486_42515 = state_42471;
(statearr_42486_42515[(1)] = (10));

(statearr_42486_42515[(2)] = ex__40675__auto__);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42485;

}
}} else {
if((state_val_42472 === (9))){
var inst_42436 = (state_42471[(5)]);
var inst_42448 = (state_42471[(2)]);
var inst_42449 = (inst_42436 + (1));
var inst_42436__$1 = inst_42449;
var state_42471__$1 = (function (){var statearr_42488 = state_42471;
(statearr_42488[(5)] = inst_42436__$1);

(statearr_42488[(8)] = inst_42448);

return statearr_42488;
})();
var statearr_42489_42516 = state_42471__$1;
(statearr_42489_42516[(2)] = null);

(statearr_42489_42516[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42472 === (5))){
var inst_42455 = (state_42471[(2)]);
var state_42471__$1 = (function (){var statearr_42490 = state_42471;
(statearr_42490[(9)] = inst_42455);

return statearr_42490;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42471__$1,(12),dchan);
} else {
if((state_val_42472 === (14))){
var inst_42457 = (state_42471[(6)]);
var inst_42462 = cljs.core.apply.call(null,f,inst_42457);
var state_42471__$1 = state_42471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42471__$1,(16),out,inst_42462);
} else {
if((state_val_42472 === (16))){
var inst_42464 = (state_42471[(2)]);
var state_42471__$1 = (function (){var statearr_42491 = state_42471;
(statearr_42491[(10)] = inst_42464);

return statearr_42491;
})();
var statearr_42492_42517 = state_42471__$1;
(statearr_42492_42517[(2)] = null);

(statearr_42492_42517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42472 === (10))){
var inst_42440 = (state_42471[(2)]);
var inst_42441 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_42471__$1 = (function (){var statearr_42493 = state_42471;
(statearr_42493[(11)] = inst_42440);

return statearr_42493;
})();
var statearr_42494_42518 = state_42471__$1;
(statearr_42494_42518[(2)] = inst_42441);

(statearr_42494_42518[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42472 === (8))){
var inst_42453 = (state_42471[(2)]);
var state_42471__$1 = state_42471;
var statearr_42495_42519 = state_42471__$1;
(statearr_42495_42519[(2)] = inst_42453);

(statearr_42495_42519[(1)] = (5));


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
});})(c__40785__auto___42503,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__40681__auto__,c__40785__auto___42503,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__40682__auto__ = null;
var cljs$core$async$state_machine__40682__auto____0 = (function (){
var statearr_42497 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42497[(0)] = cljs$core$async$state_machine__40682__auto__);

(statearr_42497[(1)] = (1));

return statearr_42497;
});
var cljs$core$async$state_machine__40682__auto____1 = (function (state_42471){
while(true){
var result__40683__auto__ = switch__40681__auto__.call(null,state_42471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40683__auto__;
}
break;
}
});
cljs$core$async$state_machine__40682__auto__ = function(state_42471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40682__auto____1.call(this,state_42471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40682__auto____0;
cljs$core$async$state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40682__auto____1;
return cljs$core$async$state_machine__40682__auto__;
})()
;})(switch__40681__auto__,c__40785__auto___42503,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__40787__auto__ = (function (){var statearr_42498 = f__40786__auto__.call(null);
(statearr_42498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40785__auto___42503);

return statearr_42498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40787__auto__);
});})(c__40785__auto___42503,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args42521 = [];
var len__38042__auto___42575 = arguments.length;
var i__38043__auto___42576 = (0);
while(true){
if((i__38043__auto___42576 < len__38042__auto___42575)){
args42521.push((arguments[i__38043__auto___42576]));

var G__42577 = (i__38043__auto___42576 + (1));
i__38043__auto___42576 = G__42577;
continue;
} else {
}
break;
}

var G__42523 = args42521.length;
switch (G__42523) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42521.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40785__auto___42579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40785__auto___42579,out){
return (function (){
var f__40786__auto__ = (function (){var switch__40681__auto__ = ((function (c__40785__auto___42579,out){
return (function (state_42555){
var state_val_42556 = (state_42555[(1)]);
if((state_val_42556 === (7))){
var inst_42535 = (state_42555[(5)]);
var inst_42534 = (state_42555[(6)]);
var inst_42534__$1 = (state_42555[(2)]);
var inst_42535__$1 = cljs.core.nth.call(null,inst_42534__$1,(0),null);
var inst_42536 = cljs.core.nth.call(null,inst_42534__$1,(1),null);
var inst_42537 = (inst_42535__$1 == null);
var state_42555__$1 = (function (){var statearr_42557 = state_42555;
(statearr_42557[(5)] = inst_42535__$1);

(statearr_42557[(7)] = inst_42536);

(statearr_42557[(6)] = inst_42534__$1);

return statearr_42557;
})();
if(cljs.core.truth_(inst_42537)){
var statearr_42558_42580 = state_42555__$1;
(statearr_42558_42580[(1)] = (8));

} else {
var statearr_42559_42581 = state_42555__$1;
(statearr_42559_42581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (1))){
var inst_42524 = cljs.core.vec.call(null,chs);
var inst_42525 = inst_42524;
var state_42555__$1 = (function (){var statearr_42560 = state_42555;
(statearr_42560[(8)] = inst_42525);

return statearr_42560;
})();
var statearr_42561_42582 = state_42555__$1;
(statearr_42561_42582[(2)] = null);

(statearr_42561_42582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (4))){
var inst_42525 = (state_42555[(8)]);
var state_42555__$1 = state_42555;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_42555__$1,(7),inst_42525);
} else {
if((state_val_42556 === (6))){
var inst_42551 = (state_42555[(2)]);
var state_42555__$1 = state_42555;
var statearr_42562_42583 = state_42555__$1;
(statearr_42562_42583[(2)] = inst_42551);

(statearr_42562_42583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (3))){
var inst_42553 = (state_42555[(2)]);
var state_42555__$1 = state_42555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42555__$1,inst_42553);
} else {
if((state_val_42556 === (2))){
var inst_42525 = (state_42555[(8)]);
var inst_42527 = cljs.core.count.call(null,inst_42525);
var inst_42528 = (inst_42527 > (0));
var state_42555__$1 = state_42555;
if(cljs.core.truth_(inst_42528)){
var statearr_42564_42584 = state_42555__$1;
(statearr_42564_42584[(1)] = (4));

} else {
var statearr_42565_42585 = state_42555__$1;
(statearr_42565_42585[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (11))){
var inst_42525 = (state_42555[(8)]);
var inst_42544 = (state_42555[(2)]);
var tmp42563 = inst_42525;
var inst_42525__$1 = tmp42563;
var state_42555__$1 = (function (){var statearr_42566 = state_42555;
(statearr_42566[(8)] = inst_42525__$1);

(statearr_42566[(9)] = inst_42544);

return statearr_42566;
})();
var statearr_42567_42586 = state_42555__$1;
(statearr_42567_42586[(2)] = null);

(statearr_42567_42586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (9))){
var inst_42535 = (state_42555[(5)]);
var state_42555__$1 = state_42555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42555__$1,(11),out,inst_42535);
} else {
if((state_val_42556 === (5))){
var inst_42549 = cljs.core.async.close_BANG_.call(null,out);
var state_42555__$1 = state_42555;
var statearr_42568_42587 = state_42555__$1;
(statearr_42568_42587[(2)] = inst_42549);

(statearr_42568_42587[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (10))){
var inst_42547 = (state_42555[(2)]);
var state_42555__$1 = state_42555;
var statearr_42569_42588 = state_42555__$1;
(statearr_42569_42588[(2)] = inst_42547);

(statearr_42569_42588[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (8))){
var inst_42535 = (state_42555[(5)]);
var inst_42525 = (state_42555[(8)]);
var inst_42536 = (state_42555[(7)]);
var inst_42534 = (state_42555[(6)]);
var inst_42539 = (function (){var cs = inst_42525;
var vec__42530 = inst_42534;
var v = inst_42535;
var c = inst_42536;
return ((function (cs,vec__42530,v,c,inst_42535,inst_42525,inst_42536,inst_42534,state_val_42556,c__40785__auto___42579,out){
return (function (p1__42520_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__42520_SHARP_);
});
;})(cs,vec__42530,v,c,inst_42535,inst_42525,inst_42536,inst_42534,state_val_42556,c__40785__auto___42579,out))
})();
var inst_42540 = cljs.core.filterv.call(null,inst_42539,inst_42525);
var inst_42525__$1 = inst_42540;
var state_42555__$1 = (function (){var statearr_42570 = state_42555;
(statearr_42570[(8)] = inst_42525__$1);

return statearr_42570;
})();
var statearr_42571_42589 = state_42555__$1;
(statearr_42571_42589[(2)] = null);

(statearr_42571_42589[(1)] = (2));


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
});})(c__40785__auto___42579,out))
;
return ((function (switch__40681__auto__,c__40785__auto___42579,out){
return (function() {
var cljs$core$async$state_machine__40682__auto__ = null;
var cljs$core$async$state_machine__40682__auto____0 = (function (){
var statearr_42573 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42573[(0)] = cljs$core$async$state_machine__40682__auto__);

(statearr_42573[(1)] = (1));

return statearr_42573;
});
var cljs$core$async$state_machine__40682__auto____1 = (function (state_42555){
while(true){
var result__40683__auto__ = switch__40681__auto__.call(null,state_42555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40683__auto__;
}
break;
}
});
cljs$core$async$state_machine__40682__auto__ = function(state_42555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40682__auto____1.call(this,state_42555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40682__auto____0;
cljs$core$async$state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40682__auto____1;
return cljs$core$async$state_machine__40682__auto__;
})()
;})(switch__40681__auto__,c__40785__auto___42579,out))
})();
var state__40787__auto__ = (function (){var statearr_42574 = f__40786__auto__.call(null);
(statearr_42574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40785__auto___42579);

return statearr_42574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40787__auto__);
});})(c__40785__auto___42579,out))
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