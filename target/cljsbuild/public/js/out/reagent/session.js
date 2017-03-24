// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor.call(null,reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__38049__auto__ = [];
var len__38042__auto___39770 = arguments.length;
var i__38043__auto___39771 = (0);
while(true){
if((i__38043__auto___39771 < len__38042__auto___39770)){
args__38049__auto__.push((arguments[i__38043__auto___39771]));

var G__39772 = (i__38043__auto___39771 + (1));
i__38043__auto___39771 = G__39772;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((1) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38050__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__39766){
var vec__39767 = p__39766;
var default$ = cljs.core.nth.call(null,vec__39767,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq39764){
var G__39765 = cljs.core.first.call(null,seq39764);
var seq39764__$1 = cljs.core.next.call(null,seq39764);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__39765,seq39764__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__38049__auto__ = [];
var len__38042__auto___39779 = arguments.length;
var i__38043__auto___39780 = (0);
while(true){
if((i__38043__auto___39780 < len__38042__auto___39779)){
args__38049__auto__.push((arguments[i__38043__auto___39780]));

var G__39781 = (i__38043__auto___39780 + (1));
i__38043__auto___39780 = G__39781;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((1) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38050__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__39775){
var vec__39776 = p__39775;
var default$ = cljs.core.nth.call(null,vec__39776,(0),null);
var or__36967__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__36967__auto__)){
return or__36967__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq39773){
var G__39774 = cljs.core.first.call(null,seq39773);
var seq39773__$1 = cljs.core.next.call(null,seq39773);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__39774,seq39773__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__38049__auto__ = [];
var len__38042__auto___39784 = arguments.length;
var i__38043__auto___39785 = (0);
while(true){
if((i__38043__auto___39785 < len__38042__auto___39784)){
args__38049__auto__.push((arguments[i__38043__auto___39785]));

var G__39786 = (i__38043__auto___39785 + (1));
i__38043__auto___39785 = G__39786;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((1) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38050__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq39782){
var G__39783 = cljs.core.first.call(null,seq39782);
var seq39782__$1 = cljs.core.next.call(null,seq39782);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39783,seq39782__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__38049__auto__ = [];
var len__38042__auto___39793 = arguments.length;
var i__38043__auto___39794 = (0);
while(true){
if((i__38043__auto___39794 < len__38042__auto___39793)){
args__38049__auto__.push((arguments[i__38043__auto___39794]));

var G__39795 = (i__38043__auto___39794 + (1));
i__38043__auto___39794 = G__39795;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((1) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38050__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__39789){
var vec__39790 = p__39789;
var default$ = cljs.core.nth.call(null,vec__39790,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq39787){
var G__39788 = cljs.core.first.call(null,seq39787);
var seq39787__$1 = cljs.core.next.call(null,seq39787);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39788,seq39787__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__38049__auto__ = [];
var len__38042__auto___39802 = arguments.length;
var i__38043__auto___39803 = (0);
while(true){
if((i__38043__auto___39803 < len__38042__auto___39802)){
args__38049__auto__.push((arguments[i__38043__auto___39803]));

var G__39804 = (i__38043__auto___39803 + (1));
i__38043__auto___39803 = G__39804;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((1) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38050__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__39798){
var vec__39799 = p__39798;
var default$ = cljs.core.nth.call(null,vec__39799,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq39796){
var G__39797 = cljs.core.first.call(null,seq39796);
var seq39796__$1 = cljs.core.next.call(null,seq39796);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39797,seq39796__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__38049__auto__ = [];
var len__38042__auto___39809 = arguments.length;
var i__38043__auto___39810 = (0);
while(true){
if((i__38043__auto___39810 < len__38042__auto___39809)){
args__38049__auto__.push((arguments[i__38043__auto___39810]));

var G__39811 = (i__38043__auto___39810 + (1));
i__38043__auto___39810 = G__39811;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((2) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__38050__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__39805_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__39805_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq39806){
var G__39807 = cljs.core.first.call(null,seq39806);
var seq39806__$1 = cljs.core.next.call(null,seq39806);
var G__39808 = cljs.core.first.call(null,seq39806__$1);
var seq39806__$2 = cljs.core.next.call(null,seq39806__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39807,G__39808,seq39806__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__38049__auto__ = [];
var len__38042__auto___39816 = arguments.length;
var i__38043__auto___39817 = (0);
while(true){
if((i__38043__auto___39817 < len__38042__auto___39816)){
args__38049__auto__.push((arguments[i__38043__auto___39817]));

var G__39818 = (i__38043__auto___39817 + (1));
i__38043__auto___39817 = G__39818;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((2) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__38050__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__39812_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__39812_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq39813){
var G__39814 = cljs.core.first.call(null,seq39813);
var seq39813__$1 = cljs.core.next.call(null,seq39813);
var G__39815 = cljs.core.first.call(null,seq39813__$1);
var seq39813__$2 = cljs.core.next.call(null,seq39813__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39814,G__39815,seq39813__$2);
});


//# sourceMappingURL=session.js.map