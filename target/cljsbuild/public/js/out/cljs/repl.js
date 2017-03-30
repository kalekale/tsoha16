// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50850){
var map__50875 = p__50850;
var map__50875__$1 = ((((!((map__50875 == null)))?((((map__50875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50875):map__50875);
var m = map__50875__$1;
var n = cljs.core.get.call(null,map__50875__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__50875__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__50877_50899 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50878_50900 = null;
var count__50879_50901 = (0);
var i__50880_50902 = (0);
while(true){
if((i__50880_50902 < count__50879_50901)){
var f_50903 = cljs.core._nth.call(null,chunk__50878_50900,i__50880_50902);
cljs.core.println.call(null,"  ",f_50903);

var G__50904 = seq__50877_50899;
var G__50905 = chunk__50878_50900;
var G__50906 = count__50879_50901;
var G__50907 = (i__50880_50902 + (1));
seq__50877_50899 = G__50904;
chunk__50878_50900 = G__50905;
count__50879_50901 = G__50906;
i__50880_50902 = G__50907;
continue;
} else {
var temp__4657__auto___50908 = cljs.core.seq.call(null,seq__50877_50899);
if(temp__4657__auto___50908){
var seq__50877_50909__$1 = temp__4657__auto___50908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50877_50909__$1)){
var c__37889__auto___50910 = cljs.core.chunk_first.call(null,seq__50877_50909__$1);
var G__50911 = cljs.core.chunk_rest.call(null,seq__50877_50909__$1);
var G__50912 = c__37889__auto___50910;
var G__50913 = cljs.core.count.call(null,c__37889__auto___50910);
var G__50914 = (0);
seq__50877_50899 = G__50911;
chunk__50878_50900 = G__50912;
count__50879_50901 = G__50913;
i__50880_50902 = G__50914;
continue;
} else {
var f_50915 = cljs.core.first.call(null,seq__50877_50909__$1);
cljs.core.println.call(null,"  ",f_50915);

var G__50916 = cljs.core.next.call(null,seq__50877_50909__$1);
var G__50917 = null;
var G__50918 = (0);
var G__50919 = (0);
seq__50877_50899 = G__50916;
chunk__50878_50900 = G__50917;
count__50879_50901 = G__50918;
i__50880_50902 = G__50919;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50920 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__37078__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__37078__auto__)){
return or__37078__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_50920);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_50920)))?cljs.core.second.call(null,arglists_50920):arglists_50920));
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
var seq__50881_50921 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50882_50922 = null;
var count__50883_50923 = (0);
var i__50884_50924 = (0);
while(true){
if((i__50884_50924 < count__50883_50923)){
var vec__50885_50925 = cljs.core._nth.call(null,chunk__50882_50922,i__50884_50924);
var name_50926 = cljs.core.nth.call(null,vec__50885_50925,(0),null);
var map__50888_50927 = cljs.core.nth.call(null,vec__50885_50925,(1),null);
var map__50888_50928__$1 = ((((!((map__50888_50927 == null)))?((((map__50888_50927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50888_50927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50888_50927):map__50888_50927);
var doc_50929 = cljs.core.get.call(null,map__50888_50928__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50930 = cljs.core.get.call(null,map__50888_50928__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_50926);

cljs.core.println.call(null," ",arglists_50930);

if(cljs.core.truth_(doc_50929)){
cljs.core.println.call(null," ",doc_50929);
} else {
}

var G__50931 = seq__50881_50921;
var G__50932 = chunk__50882_50922;
var G__50933 = count__50883_50923;
var G__50934 = (i__50884_50924 + (1));
seq__50881_50921 = G__50931;
chunk__50882_50922 = G__50932;
count__50883_50923 = G__50933;
i__50884_50924 = G__50934;
continue;
} else {
var temp__4657__auto___50935 = cljs.core.seq.call(null,seq__50881_50921);
if(temp__4657__auto___50935){
var seq__50881_50936__$1 = temp__4657__auto___50935;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50881_50936__$1)){
var c__37889__auto___50937 = cljs.core.chunk_first.call(null,seq__50881_50936__$1);
var G__50938 = cljs.core.chunk_rest.call(null,seq__50881_50936__$1);
var G__50939 = c__37889__auto___50937;
var G__50940 = cljs.core.count.call(null,c__37889__auto___50937);
var G__50941 = (0);
seq__50881_50921 = G__50938;
chunk__50882_50922 = G__50939;
count__50883_50923 = G__50940;
i__50884_50924 = G__50941;
continue;
} else {
var vec__50890_50942 = cljs.core.first.call(null,seq__50881_50936__$1);
var name_50943 = cljs.core.nth.call(null,vec__50890_50942,(0),null);
var map__50893_50944 = cljs.core.nth.call(null,vec__50890_50942,(1),null);
var map__50893_50945__$1 = ((((!((map__50893_50944 == null)))?((((map__50893_50944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50893_50944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50893_50944):map__50893_50944);
var doc_50946 = cljs.core.get.call(null,map__50893_50945__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50947 = cljs.core.get.call(null,map__50893_50945__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_50943);

cljs.core.println.call(null," ",arglists_50947);

if(cljs.core.truth_(doc_50946)){
cljs.core.println.call(null," ",doc_50946);
} else {
}

var G__50948 = cljs.core.next.call(null,seq__50881_50936__$1);
var G__50949 = null;
var G__50950 = (0);
var G__50951 = (0);
seq__50881_50921 = G__50948;
chunk__50882_50922 = G__50949;
count__50883_50923 = G__50950;
i__50884_50924 = G__50951;
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

var seq__50895 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50896 = null;
var count__50897 = (0);
var i__50898 = (0);
while(true){
if((i__50898 < count__50897)){
var role = cljs.core._nth.call(null,chunk__50896,i__50898);
var temp__4657__auto___50952__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___50952__$1)){
var spec_50953 = temp__4657__auto___50952__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_50953));
} else {
}

var G__50954 = seq__50895;
var G__50955 = chunk__50896;
var G__50956 = count__50897;
var G__50957 = (i__50898 + (1));
seq__50895 = G__50954;
chunk__50896 = G__50955;
count__50897 = G__50956;
i__50898 = G__50957;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__50895);
if(temp__4657__auto____$1){
var seq__50895__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50895__$1)){
var c__37889__auto__ = cljs.core.chunk_first.call(null,seq__50895__$1);
var G__50958 = cljs.core.chunk_rest.call(null,seq__50895__$1);
var G__50959 = c__37889__auto__;
var G__50960 = cljs.core.count.call(null,c__37889__auto__);
var G__50961 = (0);
seq__50895 = G__50958;
chunk__50896 = G__50959;
count__50897 = G__50960;
i__50898 = G__50961;
continue;
} else {
var role = cljs.core.first.call(null,seq__50895__$1);
var temp__4657__auto___50962__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___50962__$2)){
var spec_50963 = temp__4657__auto___50962__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_50963));
} else {
}

var G__50964 = cljs.core.next.call(null,seq__50895__$1);
var G__50965 = null;
var G__50966 = (0);
var G__50967 = (0);
seq__50895 = G__50964;
chunk__50896 = G__50965;
count__50897 = G__50966;
i__50898 = G__50967;
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