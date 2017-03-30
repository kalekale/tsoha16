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
var args__38160__auto__ = [];
var len__38153__auto___45677 = arguments.length;
var i__38154__auto___45678 = (0);
while(true){
if((i__38154__auto___45678 < len__38153__auto___45677)){
args__38160__auto__.push((arguments[i__38154__auto___45678]));

var G__45680 = (i__38154__auto___45678 + (1));
i__38154__auto___45678 = G__45680;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((1) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38161__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__45672){
var vec__45673 = p__45672;
var default$ = cljs.core.nth.call(null,vec__45673,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq45669){
var G__45670 = cljs.core.first.call(null,seq45669);
var seq45669__$1 = cljs.core.next.call(null,seq45669);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__45670,seq45669__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__38160__auto__ = [];
var len__38153__auto___45691 = arguments.length;
var i__38154__auto___45692 = (0);
while(true){
if((i__38154__auto___45692 < len__38153__auto___45691)){
args__38160__auto__.push((arguments[i__38154__auto___45692]));

var G__45693 = (i__38154__auto___45692 + (1));
i__38154__auto___45692 = G__45693;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((1) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38161__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__45687){
var vec__45688 = p__45687;
var default$ = cljs.core.nth.call(null,vec__45688,(0),null);
var or__37078__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__37078__auto__)){
return or__37078__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq45684){
var G__45685 = cljs.core.first.call(null,seq45684);
var seq45684__$1 = cljs.core.next.call(null,seq45684);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__45685,seq45684__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__38160__auto__ = [];
var len__38153__auto___45699 = arguments.length;
var i__38154__auto___45700 = (0);
while(true){
if((i__38154__auto___45700 < len__38153__auto___45699)){
args__38160__auto__.push((arguments[i__38154__auto___45700]));

var G__45702 = (i__38154__auto___45700 + (1));
i__38154__auto___45700 = G__45702;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((1) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38161__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq45696){
var G__45697 = cljs.core.first.call(null,seq45696);
var seq45696__$1 = cljs.core.next.call(null,seq45696);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45697,seq45696__$1);
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
var args__38160__auto__ = [];
var len__38153__auto___45714 = arguments.length;
var i__38154__auto___45715 = (0);
while(true){
if((i__38154__auto___45715 < len__38153__auto___45714)){
args__38160__auto__.push((arguments[i__38154__auto___45715]));

var G__45716 = (i__38154__auto___45715 + (1));
i__38154__auto___45715 = G__45716;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((1) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38161__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__45710){
var vec__45711 = p__45710;
var default$ = cljs.core.nth.call(null,vec__45711,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq45707){
var G__45708 = cljs.core.first.call(null,seq45707);
var seq45707__$1 = cljs.core.next.call(null,seq45707);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45708,seq45707__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__38160__auto__ = [];
var len__38153__auto___45725 = arguments.length;
var i__38154__auto___45726 = (0);
while(true){
if((i__38154__auto___45726 < len__38153__auto___45725)){
args__38160__auto__.push((arguments[i__38154__auto___45726]));

var G__45728 = (i__38154__auto___45726 + (1));
i__38154__auto___45726 = G__45728;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((1) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38161__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__45720){
var vec__45721 = p__45720;
var default$ = cljs.core.nth.call(null,vec__45721,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq45718){
var G__45719 = cljs.core.first.call(null,seq45718);
var seq45718__$1 = cljs.core.next.call(null,seq45718);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45719,seq45718__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__38160__auto__ = [];
var len__38153__auto___45736 = arguments.length;
var i__38154__auto___45737 = (0);
while(true){
if((i__38154__auto___45737 < len__38153__auto___45736)){
args__38160__auto__.push((arguments[i__38154__auto___45737]));

var G__45739 = (i__38154__auto___45737 + (1));
i__38154__auto___45737 = G__45739;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((2) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__38161__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__45731_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__45731_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq45732){
var G__45733 = cljs.core.first.call(null,seq45732);
var seq45732__$1 = cljs.core.next.call(null,seq45732);
var G__45734 = cljs.core.first.call(null,seq45732__$1);
var seq45732__$2 = cljs.core.next.call(null,seq45732__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45733,G__45734,seq45732__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__38160__auto__ = [];
var len__38153__auto___45750 = arguments.length;
var i__38154__auto___45751 = (0);
while(true){
if((i__38154__auto___45751 < len__38153__auto___45750)){
args__38160__auto__.push((arguments[i__38154__auto___45751]));

var G__45753 = (i__38154__auto___45751 + (1));
i__38154__auto___45751 = G__45753;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((2) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__38161__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__45745_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__45745_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq45746){
var G__45747 = cljs.core.first.call(null,seq45746);
var seq45746__$1 = cljs.core.next.call(null,seq45746);
var G__45748 = cljs.core.first.call(null,seq45746__$1);
var seq45746__$2 = cljs.core.next.call(null,seq45746__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45747,G__45748,seq45746__$2);
});


//# sourceMappingURL=session.js.map