// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor(reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__7386__auto__ = [];
var len__7379__auto___13717 = arguments.length;
var i__7380__auto___13718 = (0);
while(true){
if((i__7380__auto___13718 < len__7379__auto___13717)){
args__7386__auto__.push((arguments[i__7380__auto___13718]));

var G__13719 = (i__7380__auto___13718 + (1));
i__7380__auto___13718 = G__13719;
continue;
} else {
}
break;
}

var argseq__7387__auto__ = ((((1) < args__7386__auto__.length))?(new cljs.core.IndexedSeq(args__7386__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7387__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__13713){
var vec__13714 = p__13713;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13714,(0),null);
var temp_a = reagent.session.cursor(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(temp_a) : cljs.core.deref.call(null,temp_a)) == null))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(temp_a) : cljs.core.deref.call(null,temp_a));
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq13711){
var G__13712 = cljs.core.first(seq13711);
var seq13711__$1 = cljs.core.next(seq13711);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__13712,seq13711__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__7386__auto__ = [];
var len__7379__auto___13728 = arguments.length;
var i__7380__auto___13729 = (0);
while(true){
if((i__7380__auto___13729 < len__7379__auto___13728)){
args__7386__auto__.push((arguments[i__7380__auto___13729]));

var G__13730 = (i__7380__auto___13729 + (1));
i__7380__auto___13729 = G__13730;
continue;
} else {
}
break;
}

var argseq__7387__auto__ = ((((1) < args__7386__auto__.length))?(new cljs.core.IndexedSeq(args__7386__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7387__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__13722){
var vec__13723 = p__13722;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13723,(0),null);
var or__6304__auto__ = (function (){var G__13727 = reagent.session.cursor(ks);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13727) : cljs.core.deref.call(null,G__13727));
})();
if(cljs.core.truth_(or__6304__auto__)){
return or__6304__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq13720){
var G__13721 = cljs.core.first(seq13720);
var seq13720__$1 = cljs.core.next(seq13720);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__13721,seq13720__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__7386__auto__ = [];
var len__7379__auto___13733 = arguments.length;
var i__7380__auto___13734 = (0);
while(true){
if((i__7380__auto___13734 < len__7379__auto___13733)){
args__7386__auto__.push((arguments[i__7380__auto___13734]));

var G__13735 = (i__7380__auto___13734 + (1));
i__7380__auto___13734 = G__13735;
continue;
} else {
}
break;
}

var argseq__7387__auto__ = ((((1) < args__7386__auto__.length))?(new cljs.core.IndexedSeq(args__7386__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7387__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq13731){
var G__13732 = cljs.core.first(seq13731);
var seq13731__$1 = cljs.core.next(seq13731);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13732,seq13731__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
var G__13738 = reagent.session.state;
var G__13739 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13738,G__13739) : cljs.core.reset_BANG_.call(null,G__13738,G__13739));
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,m) : cljs.core.reset_BANG_.call(null,reagent.session.state,m));
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__7386__auto__ = [];
var len__7379__auto___13746 = arguments.length;
var i__7380__auto___13747 = (0);
while(true){
if((i__7380__auto___13747 < len__7379__auto___13746)){
args__7386__auto__.push((arguments[i__7380__auto___13747]));

var G__13748 = (i__7380__auto___13747 + (1));
i__7380__auto___13747 = G__13748;
continue;
} else {
}
break;
}

var argseq__7387__auto__ = ((((1) < args__7386__auto__.length))?(new cljs.core.IndexedSeq(args__7386__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7387__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__13742){
var vec__13743 = p__13742;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13743,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.array_seq([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq13740){
var G__13741 = cljs.core.first(seq13740);
var seq13740__$1 = cljs.core.next(seq13740);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13741,seq13740__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__7386__auto__ = [];
var len__7379__auto___13755 = arguments.length;
var i__7380__auto___13756 = (0);
while(true){
if((i__7380__auto___13756 < len__7379__auto___13755)){
args__7386__auto__.push((arguments[i__7380__auto___13756]));

var G__13757 = (i__7380__auto___13756 + (1));
i__7380__auto___13756 = G__13757;
continue;
} else {
}
break;
}

var argseq__7387__auto__ = ((((1) < args__7386__auto__.length))?(new cljs.core.IndexedSeq(args__7386__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7387__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__13751){
var vec__13752 = p__13751;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13752,(0),null);
var cur = reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(ks,cljs.core.array_seq([default$], 0));
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq13749){
var G__13750 = cljs.core.first(seq13749);
var seq13749__$1 = cljs.core.next(seq13749);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13750,seq13749__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__7386__auto__ = [];
var len__7379__auto___13762 = arguments.length;
var i__7380__auto___13763 = (0);
while(true){
if((i__7380__auto___13763 < len__7379__auto___13762)){
args__7386__auto__.push((arguments[i__7380__auto___13763]));

var G__13764 = (i__7380__auto___13763 + (1));
i__7380__auto___13763 = G__13764;
continue;
} else {
}
break;
}

var argseq__7387__auto__ = ((((2) < args__7386__auto__.length))?(new cljs.core.IndexedSeq(args__7386__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7387__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__13758_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update,p1__13758_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq13759){
var G__13760 = cljs.core.first(seq13759);
var seq13759__$1 = cljs.core.next(seq13759);
var G__13761 = cljs.core.first(seq13759__$1);
var seq13759__$2 = cljs.core.next(seq13759__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13760,G__13761,seq13759__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__7386__auto__ = [];
var len__7379__auto___13769 = arguments.length;
var i__7380__auto___13770 = (0);
while(true){
if((i__7380__auto___13770 < len__7379__auto___13769)){
args__7386__auto__.push((arguments[i__7380__auto___13770]));

var G__13771 = (i__7380__auto___13770 + (1));
i__7380__auto___13770 = G__13771;
continue;
} else {
}
break;
}

var argseq__7387__auto__ = ((((2) < args__7386__auto__.length))?(new cljs.core.IndexedSeq(args__7386__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7387__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__13765_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__13765_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq13766){
var G__13767 = cljs.core.first(seq13766);
var seq13766__$1 = cljs.core.next(seq13766);
var G__13768 = cljs.core.first(seq13766__$1);
var seq13766__$2 = cljs.core.next(seq13766__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13767,G__13768,seq13766__$2);
});

