// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.core');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.subs');
goog.require('re_frame.cofx');
goog.require('re_frame.interceptor');
goog.require('re_frame.fx');
goog.require('re_frame.events');
goog.require('re_frame.loggers');
goog.require('re_frame.registrar');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.std_interceptors');
re_frame.core.dispatch = re_frame.router.dispatch;
re_frame.core.dispatch_sync = re_frame.router.dispatch_sync;
re_frame.core.__GT_interceptor = re_frame.interceptor.__GT_interceptor;
re_frame.core.enqueue = re_frame.interceptor.enqueue;
re_frame.core.get_coeffect = re_frame.interceptor.get_coeffect;
re_frame.core.get_effect = re_frame.interceptor.get_effect;
re_frame.core.assoc_effect = re_frame.interceptor.assoc_effect;
re_frame.core.assoc_coeffect = re_frame.interceptor.assoc_coeffect;
re_frame.core.debug = re_frame.std_interceptors.debug;
re_frame.core.path = re_frame.std_interceptors.path;
re_frame.core.enrich = re_frame.std_interceptors.enrich;
re_frame.core.trim_v = re_frame.std_interceptors.trim_v;
re_frame.core.after = re_frame.std_interceptors.after;
re_frame.core.on_changes = re_frame.std_interceptors.on_changes;
re_frame.core.reg_sub_raw = re_frame.subs.register_raw;
re_frame.core.reg_sub = re_frame.subs.reg_sub;
re_frame.core.subscribe = re_frame.subs.subscribe;
re_frame.core.clear_sub = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.subs.kind);
re_frame.core.reg_fx = re_frame.fx.register;
re_frame.core.clear_fx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.fx.kind);
re_frame.core.reg_cofx = re_frame.cofx.register;
re_frame.core.inject_cofx = re_frame.cofx.inject_cofx;
re_frame.core.clear_cofx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.cofx.kind);
re_frame.core.clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
/**
 * Register the given `id`, typically a keyword, with the combination of
 *   `db-handler` and an interceptor chain.
 *   `db-handler` is a function: (db event) -> db
 *   `interceptors` is a collection of interceptors, possibly nested (needs flattenting).
 *   `db-handler` is wrapped in an interceptor and added to the end of the chain, so in the end
 * there is only a chain.
 * The necessary effects and coeffects handler are added to the front of the
 * interceptor chain.  These interceptors ensure that app-db is available and updated.
 */
re_frame.core.reg_event_db = (function re_frame$core$reg_event_db(var_args){
var args17343 = [];
var len__7379__auto___17346 = arguments.length;
var i__7380__auto___17347 = (0);
while(true){
if((i__7380__auto___17347 < len__7379__auto___17346)){
args17343.push((arguments[i__7380__auto___17347]));

var G__17348 = (i__7380__auto___17347 + (1));
i__7380__auto___17347 = G__17348;
continue;
} else {
}
break;
}

var G__17345 = args17343.length;
switch (G__17345) {
case 2:
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17343.length)].join('')));

}
});

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,db_handler){
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(id,null,db_handler);
});

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,db_handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.db_handler__GT_interceptor(db_handler)], null));
});

re_frame.core.reg_event_db.cljs$lang$maxFixedArity = 3;

re_frame.core.reg_event_fx = (function re_frame$core$reg_event_fx(var_args){
var args17350 = [];
var len__7379__auto___17353 = arguments.length;
var i__7380__auto___17354 = (0);
while(true){
if((i__7380__auto___17354 < len__7379__auto___17353)){
args17350.push((arguments[i__7380__auto___17354]));

var G__17355 = (i__7380__auto___17354 + (1));
i__7380__auto___17354 = G__17355;
continue;
} else {
}
break;
}

var G__17352 = args17350.length;
switch (G__17352) {
case 2:
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17350.length)].join('')));

}
});

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,fx_handler){
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,null,fx_handler);
});

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,fx_handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.fx_handler__GT_interceptor(fx_handler)], null));
});

re_frame.core.reg_event_fx.cljs$lang$maxFixedArity = 3;

re_frame.core.reg_event_ctx = (function re_frame$core$reg_event_ctx(var_args){
var args17357 = [];
var len__7379__auto___17360 = arguments.length;
var i__7380__auto___17361 = (0);
while(true){
if((i__7380__auto___17361 < len__7379__auto___17360)){
args17357.push((arguments[i__7380__auto___17361]));

var G__17362 = (i__7380__auto___17361 + (1));
i__7380__auto___17361 = G__17362;
continue;
} else {
}
break;
}

var G__17359 = args17357.length;
switch (G__17359) {
case 2:
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17357.length)].join('')));

}
});

re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
});

re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.ctx_handler__GT_interceptor(handler)], null));
});

re_frame.core.reg_event_ctx.cljs$lang$maxFixedArity = 3;

re_frame.core.set_loggers_BANG_ = re_frame.loggers.set_loggers_BANG_;
re_frame.core.console = re_frame.loggers.console;
/**
 * Checkpoints the state of re-frame and returns a function which, when
 *   later called, will restore re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 *   
 */
re_frame.core.make_restore_fn = (function re_frame$core$make_restore_fn(){
var handlers = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.registrar.kind__GT_id__GT_handler) : cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler));
var app_db = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.db.app_db) : cljs.core.deref.call(null,re_frame.db.app_db));
var subs_cache = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.subs.query__GT_reaction) : cljs.core.deref.call(null,re_frame.subs.query__GT_reaction));
return ((function (handlers,app_db,subs_cache){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.subs.query__GT_reaction,subs_cache) : cljs.core.reset_BANG_.call(null,re_frame.subs.query__GT_reaction,subs_cache));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.kind__GT_id__GT_handler,handlers) : cljs.core.reset_BANG_.call(null,re_frame.registrar.kind__GT_id__GT_handler,handlers));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,app_db) : cljs.core.reset_BANG_.call(null,re_frame.db.app_db,app_db));

return null;
});
;})(handlers,app_db,subs_cache))
});
/**
 * Registers a function `f` to be called after each event is procecessed
 * `f` will be called with two arguments:
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This is useful in advanced cases like:
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   'id' is typically a keyword. Supplied at "add time" so it can subsequently
 *   be used at "remove time" to get rid of the right callback.
 *   
 */
re_frame.core.add_post_event_callback = (function re_frame$core$add_post_event_callback(var_args){
var args17364 = [];
var len__7379__auto___17367 = arguments.length;
var i__7380__auto___17368 = (0);
while(true){
if((i__7380__auto___17368 < len__7379__auto___17367)){
args17364.push((arguments[i__7380__auto___17368]));

var G__17369 = (i__7380__auto___17368 + (1));
i__7380__auto___17368 = G__17369;
continue;
} else {
}
break;
}

var G__17366 = args17364.length;
switch (G__17366) {
case 1:
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17364.length)].join('')));

}
});

re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2(f,f);
});

re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return re_frame.router.add_post_event_callback(re_frame.router.event_queue,id,f);
});

re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = 2;

re_frame.core.remove_post_event_callback = (function re_frame$core$remove_post_event_callback(id){
return re_frame.router.remove_post_event_callback(re_frame.router.event_queue,id);
});
re_frame.core.register_handler = (function re_frame$core$register_handler(var_args){
var args__7386__auto__ = [];
var len__7379__auto___17376 = arguments.length;
var i__7380__auto___17377 = (0);
while(true){
if((i__7380__auto___17377 < len__7379__auto___17376)){
args__7386__auto__.push((arguments[i__7380__auto___17377]));

var G__17378 = (i__7380__auto___17377 + (1));
i__7380__auto___17377 = G__17378;
continue;
} else {
}
break;
}

var argseq__7387__auto__ = ((((0) < args__7386__auto__.length))?(new cljs.core.IndexedSeq(args__7386__auto__.slice((0)),(0),null)):null);
return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__7387__auto__);
});

re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__17372_17379 = cljs.core.cst$kw$warn;
var G__17373_17380 = "re-frame:  \"register-handler\" has been renamed \"reg-event-db\" (look for registration of ";
var G__17374_17381 = [cljs.core.str(cljs.core.first(args))].join('');
var G__17375_17382 = ")";
(re_frame.core.console.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$4(G__17372_17379,G__17373_17380,G__17374_17381,G__17375_17382) : re_frame.core.console.call(null,G__17372_17379,G__17373_17380,G__17374_17381,G__17375_17382));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.core.reg_event_db,args);
});

re_frame.core.register_handler.cljs$lang$maxFixedArity = (0);

re_frame.core.register_handler.cljs$lang$applyTo = (function (seq17371){
return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17371));
});

re_frame.core.register_sub = (function re_frame$core$register_sub(var_args){
var args__7386__auto__ = [];
var len__7379__auto___17388 = arguments.length;
var i__7380__auto___17389 = (0);
while(true){
if((i__7380__auto___17389 < len__7379__auto___17388)){
args__7386__auto__.push((arguments[i__7380__auto___17389]));

var G__17390 = (i__7380__auto___17389 + (1));
i__7380__auto___17389 = G__17390;
continue;
} else {
}
break;
}

var argseq__7387__auto__ = ((((0) < args__7386__auto__.length))?(new cljs.core.IndexedSeq(args__7386__auto__.slice((0)),(0),null)):null);
return re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__7387__auto__);
});

re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__17384_17391 = cljs.core.cst$kw$warn;
var G__17385_17392 = "re-frame:  \"register-sub\" is deprecated. Use \"reg-sub-raw\" (look for registration of ";
var G__17386_17393 = [cljs.core.str(cljs.core.first(args))].join('');
var G__17387_17394 = ")";
(re_frame.core.console.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$4(G__17384_17391,G__17385_17392,G__17386_17393,G__17387_17394) : re_frame.core.console.call(null,G__17384_17391,G__17385_17392,G__17386_17393,G__17387_17394));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.core.reg_sub_raw,args);
});

re_frame.core.register_sub.cljs$lang$maxFixedArity = (0);

re_frame.core.register_sub.cljs$lang$applyTo = (function (seq17383){
return re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17383));
});

