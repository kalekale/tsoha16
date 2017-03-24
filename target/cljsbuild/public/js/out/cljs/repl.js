// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45396){
var map__45421 = p__45396;
var map__45421__$1 = ((((!((map__45421 == null)))?((((map__45421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45421):map__45421);
var m = map__45421__$1;
var n = cljs.core.get.call(null,map__45421__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__45421__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45423_45445 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45424_45446 = null;
var count__45425_45447 = (0);
var i__45426_45448 = (0);
while(true){
if((i__45426_45448 < count__45425_45447)){
var f_45449 = cljs.core._nth.call(null,chunk__45424_45446,i__45426_45448);
cljs.core.println.call(null,"  ",f_45449);

var G__45450 = seq__45423_45445;
var G__45451 = chunk__45424_45446;
var G__45452 = count__45425_45447;
var G__45453 = (i__45426_45448 + (1));
seq__45423_45445 = G__45450;
chunk__45424_45446 = G__45451;
count__45425_45447 = G__45452;
i__45426_45448 = G__45453;
continue;
} else {
var temp__4657__auto___45454 = cljs.core.seq.call(null,seq__45423_45445);
if(temp__4657__auto___45454){
var seq__45423_45455__$1 = temp__4657__auto___45454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45423_45455__$1)){
var c__37778__auto___45456 = cljs.core.chunk_first.call(null,seq__45423_45455__$1);
var G__45457 = cljs.core.chunk_rest.call(null,seq__45423_45455__$1);
var G__45458 = c__37778__auto___45456;
var G__45459 = cljs.core.count.call(null,c__37778__auto___45456);
var G__45460 = (0);
seq__45423_45445 = G__45457;
chunk__45424_45446 = G__45458;
count__45425_45447 = G__45459;
i__45426_45448 = G__45460;
continue;
} else {
var f_45461 = cljs.core.first.call(null,seq__45423_45455__$1);
cljs.core.println.call(null,"  ",f_45461);

var G__45462 = cljs.core.next.call(null,seq__45423_45455__$1);
var G__45463 = null;
var G__45464 = (0);
var G__45465 = (0);
seq__45423_45445 = G__45462;
chunk__45424_45446 = G__45463;
count__45425_45447 = G__45464;
i__45426_45448 = G__45465;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45466 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__36967__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__36967__auto__)){
return or__36967__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_45466);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_45466)))?cljs.core.second.call(null,arglists_45466):arglists_45466));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45427_45467 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45428_45468 = null;
var count__45429_45469 = (0);
var i__45430_45470 = (0);
while(true){
if((i__45430_45470 < count__45429_45469)){
var vec__45431_45471 = cljs.core._nth.call(null,chunk__45428_45468,i__45430_45470);
var name_45472 = cljs.core.nth.call(null,vec__45431_45471,(0),null);
var map__45434_45473 = cljs.core.nth.call(null,vec__45431_45471,(1),null);
var map__45434_45474__$1 = ((((!((map__45434_45473 == null)))?((((map__45434_45473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45434_45473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45434_45473):map__45434_45473);
var doc_45475 = cljs.core.get.call(null,map__45434_45474__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45476 = cljs.core.get.call(null,map__45434_45474__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_45472);

cljs.core.println.call(null," ",arglists_45476);

if(cljs.core.truth_(doc_45475)){
cljs.core.println.call(null," ",doc_45475);
} else {
}

var G__45477 = seq__45427_45467;
var G__45478 = chunk__45428_45468;
var G__45479 = count__45429_45469;
var G__45480 = (i__45430_45470 + (1));
seq__45427_45467 = G__45477;
chunk__45428_45468 = G__45478;
count__45429_45469 = G__45479;
i__45430_45470 = G__45480;
continue;
} else {
var temp__4657__auto___45481 = cljs.core.seq.call(null,seq__45427_45467);
if(temp__4657__auto___45481){
var seq__45427_45482__$1 = temp__4657__auto___45481;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45427_45482__$1)){
var c__37778__auto___45483 = cljs.core.chunk_first.call(null,seq__45427_45482__$1);
var G__45484 = cljs.core.chunk_rest.call(null,seq__45427_45482__$1);
var G__45485 = c__37778__auto___45483;
var G__45486 = cljs.core.count.call(null,c__37778__auto___45483);
var G__45487 = (0);
seq__45427_45467 = G__45484;
chunk__45428_45468 = G__45485;
count__45429_45469 = G__45486;
i__45430_45470 = G__45487;
continue;
} else {
var vec__45436_45488 = cljs.core.first.call(null,seq__45427_45482__$1);
var name_45489 = cljs.core.nth.call(null,vec__45436_45488,(0),null);
var map__45439_45490 = cljs.core.nth.call(null,vec__45436_45488,(1),null);
var map__45439_45491__$1 = ((((!((map__45439_45490 == null)))?((((map__45439_45490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45439_45490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45439_45490):map__45439_45490);
var doc_45492 = cljs.core.get.call(null,map__45439_45491__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45493 = cljs.core.get.call(null,map__45439_45491__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_45489);

cljs.core.println.call(null," ",arglists_45493);

if(cljs.core.truth_(doc_45492)){
cljs.core.println.call(null," ",doc_45492);
} else {
}

var G__45494 = cljs.core.next.call(null,seq__45427_45482__$1);
var G__45495 = null;
var G__45496 = (0);
var G__45497 = (0);
seq__45427_45467 = G__45494;
chunk__45428_45468 = G__45495;
count__45429_45469 = G__45496;
i__45430_45470 = G__45497;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__45441 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45442 = null;
var count__45443 = (0);
var i__45444 = (0);
while(true){
if((i__45444 < count__45443)){
var role = cljs.core._nth.call(null,chunk__45442,i__45444);
var temp__4657__auto___45498__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___45498__$1)){
var spec_45499 = temp__4657__auto___45498__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_45499));
} else {
}

var G__45500 = seq__45441;
var G__45501 = chunk__45442;
var G__45502 = count__45443;
var G__45503 = (i__45444 + (1));
seq__45441 = G__45500;
chunk__45442 = G__45501;
count__45443 = G__45502;
i__45444 = G__45503;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__45441);
if(temp__4657__auto____$1){
var seq__45441__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45441__$1)){
var c__37778__auto__ = cljs.core.chunk_first.call(null,seq__45441__$1);
var G__45504 = cljs.core.chunk_rest.call(null,seq__45441__$1);
var G__45505 = c__37778__auto__;
var G__45506 = cljs.core.count.call(null,c__37778__auto__);
var G__45507 = (0);
seq__45441 = G__45504;
chunk__45442 = G__45505;
count__45443 = G__45506;
i__45444 = G__45507;
continue;
} else {
var role = cljs.core.first.call(null,seq__45441__$1);
var temp__4657__auto___45508__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___45508__$2)){
var spec_45509 = temp__4657__auto___45508__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_45509));
} else {
}

var G__45510 = cljs.core.next.call(null,seq__45441__$1);
var G__45511 = null;
var G__45512 = (0);
var G__45513 = (0);
seq__45441 = G__45510;
chunk__45442 = G__45511;
count__45443 = G__45512;
i__45444 = G__45513;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map