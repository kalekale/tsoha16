// Compiled by ClojureScript 1.9.229 {}
goog.provide('tsoha16.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('cljsjs.react');
goog.require('goog.History');
goog.require('goog.events');
goog.require('accountant.core');
goog.require('re_frame.core');
goog.require('day8.re_frame.http_fx');
tsoha16.views.aihe_sivu = (function tsoha16$views$aihe_sivu(p__55746){
var map__55757 = p__55746;
var map__55757__$1 = ((((!((map__55757 == null)))?((((map__55757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55757):map__55757);
var alue_id = cljs.core.get.call(null,map__55757__$1,new cljs.core.Keyword(null,"alue-id","alue-id",-1731941086));
var aihe_id = cljs.core.get.call(null,map__55757__$1,new cljs.core.Keyword(null,"aihe-id","aihe-id",-415879323));
var aihe = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aihe","aihe",-1345360341),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [alue_id,aihe_id], null)], null));
return ((function (aihe,map__55757,map__55757__$1,alue_id,aihe_id){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"nimi","nimi",-1657061231).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aihe))], null),(function (){var iter__46706__auto__ = ((function (aihe,map__55757,map__55757__$1,alue_id,aihe_id){
return (function tsoha16$views$aihe_sivu_$_iter__55759(s__55760){
return (new cljs.core.LazySeq(null,((function (aihe,map__55757,map__55757__$1,alue_id,aihe_id){
return (function (){
var s__55760__$1 = s__55760;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__55760__$1);
if(temp__4657__auto__){
var s__55760__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55760__$2)){
var c__46704__auto__ = cljs.core.chunk_first.call(null,s__55760__$2);
var size__46705__auto__ = cljs.core.count.call(null,c__46704__auto__);
var b__55762 = cljs.core.chunk_buffer.call(null,size__46705__auto__);
if((function (){var i__55761 = (0);
while(true){
if((i__55761 < size__46705__auto__)){
var viesti = cljs.core._nth.call(null,c__46704__auto__,i__55761);
cljs.core.chunk_append.call(null,b__55762,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str(new cljs.core.Keyword(null,"nimi","nimi",-1657061231).cljs$core$IFn$_invoke$arity$1(viesti)),cljs.core.str(":")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str(new cljs.core.Keyword(null,"viesti","viesti",984723613).cljs$core$IFn$_invoke$arity$1(viesti))].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),viesti], null)));

var G__55768 = (i__55761 + (1));
i__55761 = G__55768;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55762),tsoha16$views$aihe_sivu_$_iter__55759.call(null,cljs.core.chunk_rest.call(null,s__55760__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55762),null);
}
} else {
var viesti = cljs.core.first.call(null,s__55760__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str(new cljs.core.Keyword(null,"nimi","nimi",-1657061231).cljs$core$IFn$_invoke$arity$1(viesti)),cljs.core.str(":")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str(new cljs.core.Keyword(null,"viesti","viesti",984723613).cljs$core$IFn$_invoke$arity$1(viesti))].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),viesti], null)),tsoha16$views$aihe_sivu_$_iter__55759.call(null,cljs.core.rest.call(null,s__55760__$2)));
}
} else {
return null;
}
break;
}
});})(aihe,map__55757,map__55757__$1,alue_id,aihe_id))
,null,null));
});})(aihe,map__55757,map__55757__$1,alue_id,aihe_id))
;
return iter__46706__auto__.call(null,new cljs.core.Keyword(null,"viestit","viestit",114360310).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aihe)));
})()], null);
});
;})(aihe,map__55757,map__55757__$1,alue_id,aihe_id))
});
tsoha16.views.aihealue_sivu = (function tsoha16$views$aihealue_sivu(p__55769){
var map__55776 = p__55769;
var map__55776__$1 = ((((!((map__55776 == null)))?((((map__55776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55776):map__55776);
var id = cljs.core.get.call(null,map__55776__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var aiheet = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aiheet","aiheet",-1391850048),id], null));
var aihealue = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aihealue","aihealue",-944180949),id], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"nimi","nimi",-1657061231).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aihealue))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__46706__auto__ = ((function (aiheet,aihealue,map__55776,map__55776__$1,id){
return (function tsoha16$views$aihealue_sivu_$_iter__55778(s__55779){
return (new cljs.core.LazySeq(null,((function (aiheet,aihealue,map__55776,map__55776__$1,id){
return (function (){
var s__55779__$1 = s__55779;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__55779__$1);
if(temp__4657__auto__){
var s__55779__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55779__$2)){
var c__46704__auto__ = cljs.core.chunk_first.call(null,s__55779__$2);
var size__46705__auto__ = cljs.core.count.call(null,c__46704__auto__);
var b__55781 = cljs.core.chunk_buffer.call(null,size__46705__auto__);
if((function (){var i__55780 = (0);
while(true){
if((i__55780 < size__46705__auto__)){
var aihe = cljs.core._nth.call(null,c__46704__auto__,i__55780);
cljs.core.chunk_append.call(null,b__55781,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/aihealueet/"),cljs.core.str(id),cljs.core.str("/"),cljs.core.str(cljs.core.key.call(null,aihe))].join('')], null),new cljs.core.Keyword(null,"nimi","nimi",-1657061231).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,aihe))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),aihe], null)));

var G__55782 = (i__55780 + (1));
i__55780 = G__55782;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55781),tsoha16$views$aihealue_sivu_$_iter__55778.call(null,cljs.core.chunk_rest.call(null,s__55779__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55781),null);
}
} else {
var aihe = cljs.core.first.call(null,s__55779__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/aihealueet/"),cljs.core.str(id),cljs.core.str("/"),cljs.core.str(cljs.core.key.call(null,aihe))].join('')], null),new cljs.core.Keyword(null,"nimi","nimi",-1657061231).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,aihe))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),aihe], null)),tsoha16$views$aihealue_sivu_$_iter__55778.call(null,cljs.core.rest.call(null,s__55779__$2)));
}
} else {
return null;
}
break;
}
});})(aiheet,aihealue,map__55776,map__55776__$1,id))
,null,null));
});})(aiheet,aihealue,map__55776,map__55776__$1,id))
;
return iter__46706__auto__.call(null,cljs.core.deref.call(null,aiheet));
})()], null)], null);
});
tsoha16.views.aihealue_komponentti = (function tsoha16$views$aihealue_komponentti(aihealue){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/aihealueet/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(aihealue))].join('')], null),new cljs.core.Keyword(null,"nimi","nimi",-1657061231).cljs$core$IFn$_invoke$arity$1(aihealue)], null)], null);
});
tsoha16.views.aihealue_lista = (function tsoha16$views$aihealue_lista(){
var aihealueet = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aihealueet","aihealueet",-1619454521)], null));
return ((function (aihealueet){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__46706__auto__ = ((function (aihealueet){
return (function tsoha16$views$aihealue_lista_$_iter__55787(s__55788){
return (new cljs.core.LazySeq(null,((function (aihealueet){
return (function (){
var s__55788__$1 = s__55788;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__55788__$1);
if(temp__4657__auto__){
var s__55788__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55788__$2)){
var c__46704__auto__ = cljs.core.chunk_first.call(null,s__55788__$2);
var size__46705__auto__ = cljs.core.count.call(null,c__46704__auto__);
var b__55790 = cljs.core.chunk_buffer.call(null,size__46705__auto__);
if((function (){var i__55789 = (0);
while(true){
if((i__55789 < size__46705__auto__)){
var aihealue = cljs.core._nth.call(null,c__46704__auto__,i__55789);
cljs.core.chunk_append.call(null,b__55790,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tsoha16.views.aihealue_komponentti,aihealue], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),aihealue], null)));

var G__55791 = (i__55789 + (1));
i__55789 = G__55791;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55790),tsoha16$views$aihealue_lista_$_iter__55787.call(null,cljs.core.chunk_rest.call(null,s__55788__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55790),null);
}
} else {
var aihealue = cljs.core.first.call(null,s__55788__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tsoha16.views.aihealue_komponentti,aihealue], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),aihealue], null)),tsoha16$views$aihealue_lista_$_iter__55787.call(null,cljs.core.rest.call(null,s__55788__$2)));
}
} else {
return null;
}
break;
}
});})(aihealueet))
,null,null));
});})(aihealueet))
;
return iter__46706__auto__.call(null,cljs.core.deref.call(null,aihealueet));
})()], null);
});
;})(aihealueet))
});
tsoha16.views.home_page = (function tsoha16$views$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Keskustelupalsta"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tsoha16.views.aihealue_lista], null)], null);
});
tsoha16.views.current_page = (function tsoha16$views$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180)),reagent.session.get.call(null,new cljs.core.Keyword(null,"params","params",710516235))], null)], null);
});

//# sourceMappingURL=views.js.map