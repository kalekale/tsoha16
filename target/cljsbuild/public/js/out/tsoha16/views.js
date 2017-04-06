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
tsoha16.views.aihe_sivu = (function tsoha16$views$aihe_sivu(p__64971){
var map__64978 = p__64971;
var map__64978__$1 = ((((!((map__64978 == null)))?((((map__64978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64978):map__64978);
var alue_id = cljs.core.get.call(null,map__64978__$1,new cljs.core.Keyword(null,"alue-id","alue-id",-1731941086));
var aihe_id = cljs.core.get.call(null,map__64978__$1,new cljs.core.Keyword(null,"aihe-id","aihe-id",-415879323));
var aihe = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aihe","aihe",-1345360341)], null));
var viestit = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viestit","viestit",114360310)], null));
return ((function (aihe,viestit,map__64978,map__64978__$1,alue_id,aihe_id){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"otsikko","otsikko",1642720594).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aihe))], null),(function (){var iter__47162__auto__ = ((function (aihe,viestit,map__64978,map__64978__$1,alue_id,aihe_id){
return (function tsoha16$views$aihe_sivu_$_iter__64980(s__64981){
return (new cljs.core.LazySeq(null,((function (aihe,viestit,map__64978,map__64978__$1,alue_id,aihe_id){
return (function (){
var s__64981__$1 = s__64981;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__64981__$1);
if(temp__4657__auto__){
var s__64981__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__64981__$2)){
var c__47160__auto__ = cljs.core.chunk_first.call(null,s__64981__$2);
var size__47161__auto__ = cljs.core.count.call(null,c__47160__auto__);
var b__64983 = cljs.core.chunk_buffer.call(null,size__47161__auto__);
if((function (){var i__64982 = (0);
while(true){
if((i__64982 < size__47161__auto__)){
var viesti = cljs.core._nth.call(null,c__47160__auto__,i__64982);
cljs.core.chunk_append.call(null,b__64983,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(viesti)),cljs.core.str(" sanoo:")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str(new cljs.core.Keyword(null,"viesti","viesti",984723613).cljs$core$IFn$_invoke$arity$1(viesti))].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),viesti], null)));

var G__64984 = (i__64982 + (1));
i__64982 = G__64984;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64983),tsoha16$views$aihe_sivu_$_iter__64980.call(null,cljs.core.chunk_rest.call(null,s__64981__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64983),null);
}
} else {
var viesti = cljs.core.first.call(null,s__64981__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(viesti)),cljs.core.str(" sanoo:")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str(new cljs.core.Keyword(null,"viesti","viesti",984723613).cljs$core$IFn$_invoke$arity$1(viesti))].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),viesti], null)),tsoha16$views$aihe_sivu_$_iter__64980.call(null,cljs.core.rest.call(null,s__64981__$2)));
}
} else {
return null;
}
break;
}
});})(aihe,viestit,map__64978,map__64978__$1,alue_id,aihe_id))
,null,null));
});})(aihe,viestit,map__64978,map__64978__$1,alue_id,aihe_id))
;
return iter__47162__auto__.call(null,cljs.core.deref.call(null,viestit));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Vastaa:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rows","rows",850049680),(20),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"viesti...",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (aihe,viestit,map__64978,map__64978__$1,alue_id,aihe_id){
return (function (p1__64970_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message-edited","message-edited",-969545469),p1__64970_SHARP_.target.value], null));
});})(aihe,viestit,map__64978,map__64978__$1,alue_id,aihe_id))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"Laheta",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (aihe,viestit,map__64978,map__64978__$1,alue_id,aihe_id){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-new-message","send-new-message",1962058295)], null));
});})(aihe,viestit,map__64978,map__64978__$1,alue_id,aihe_id))
], null)], null)], null);
});
;})(aihe,viestit,map__64978,map__64978__$1,alue_id,aihe_id))
});
tsoha16.views.aihealue_sivu = (function tsoha16$views$aihealue_sivu(p__64991){
var map__65004 = p__64991;
var map__65004__$1 = ((((!((map__65004 == null)))?((((map__65004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65004):map__65004);
var id = cljs.core.get.call(null,map__65004__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var aiheet = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aiheet","aiheet",-1391850048),id], null));
var aihealue = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aihealue","aihealue",-944180949)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"nimi","nimi",-1657061231).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aihealue))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/uusi-aihe"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"Uusi aihe"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__47162__auto__ = ((function (aiheet,aihealue,map__65004,map__65004__$1,id){
return (function tsoha16$views$aihealue_sivu_$_iter__65008(s__65009){
return (new cljs.core.LazySeq(null,((function (aiheet,aihealue,map__65004,map__65004__$1,id){
return (function (){
var s__65009__$1 = s__65009;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__65009__$1);
if(temp__4657__auto__){
var s__65009__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__65009__$2)){
var c__47160__auto__ = cljs.core.chunk_first.call(null,s__65009__$2);
var size__47161__auto__ = cljs.core.count.call(null,c__47160__auto__);
var b__65011 = cljs.core.chunk_buffer.call(null,size__47161__auto__);
if((function (){var i__65010 = (0);
while(true){
if((i__65010 < size__47161__auto__)){
var aihe = cljs.core._nth.call(null,c__47160__auto__,i__65010);
cljs.core.chunk_append.call(null,b__65011,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/aihealueet/"),cljs.core.str(id),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(aihe))].join('')], null),new cljs.core.Keyword(null,"otsikko","otsikko",1642720594).cljs$core$IFn$_invoke$arity$1(aihe)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),aihe], null)));

var G__65026 = (i__65010 + (1));
i__65010 = G__65026;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65011),tsoha16$views$aihealue_sivu_$_iter__65008.call(null,cljs.core.chunk_rest.call(null,s__65009__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65011),null);
}
} else {
var aihe = cljs.core.first.call(null,s__65009__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/aihealueet/"),cljs.core.str(id),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(aihe))].join('')], null),new cljs.core.Keyword(null,"otsikko","otsikko",1642720594).cljs$core$IFn$_invoke$arity$1(aihe)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),aihe], null)),tsoha16$views$aihealue_sivu_$_iter__65008.call(null,cljs.core.rest.call(null,s__65009__$2)));
}
} else {
return null;
}
break;
}
});})(aiheet,aihealue,map__65004,map__65004__$1,id))
,null,null));
});})(aiheet,aihealue,map__65004,map__65004__$1,id))
;
return iter__47162__auto__.call(null,cljs.core.deref.call(null,aiheet));
})()], null)], null);
});
tsoha16.views.aihealue_komponentti = (function tsoha16$views$aihealue_komponentti(aihealue){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/aihealueet/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(aihealue))].join('')], null),new cljs.core.Keyword(null,"nimi","nimi",-1657061231).cljs$core$IFn$_invoke$arity$1(aihealue)], null)], null);
});
tsoha16.views.aihealue_lista = (function tsoha16$views$aihealue_lista(){
var aihealueet = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aihealueet","aihealueet",-1619454521)], null));
return ((function (aihealueet){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__47162__auto__ = ((function (aihealueet){
return (function tsoha16$views$aihealue_lista_$_iter__65039(s__65040){
return (new cljs.core.LazySeq(null,((function (aihealueet){
return (function (){
var s__65040__$1 = s__65040;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__65040__$1);
if(temp__4657__auto__){
var s__65040__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__65040__$2)){
var c__47160__auto__ = cljs.core.chunk_first.call(null,s__65040__$2);
var size__47161__auto__ = cljs.core.count.call(null,c__47160__auto__);
var b__65042 = cljs.core.chunk_buffer.call(null,size__47161__auto__);
if((function (){var i__65041 = (0);
while(true){
if((i__65041 < size__47161__auto__)){
var aihealue = cljs.core._nth.call(null,c__47160__auto__,i__65041);
cljs.core.chunk_append.call(null,b__65042,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tsoha16.views.aihealue_komponentti,aihealue], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),aihealue], null)));

var G__65058 = (i__65041 + (1));
i__65041 = G__65058;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65042),tsoha16$views$aihealue_lista_$_iter__65039.call(null,cljs.core.chunk_rest.call(null,s__65040__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65042),null);
}
} else {
var aihealue = cljs.core.first.call(null,s__65040__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tsoha16.views.aihealue_komponentti,aihealue], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),aihealue], null)),tsoha16$views$aihealue_lista_$_iter__65039.call(null,cljs.core.rest.call(null,s__65040__$2)));
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
return iter__47162__auto__.call(null,cljs.core.deref.call(null,aihealueet));
})()], null);
});
;})(aihealueet))
});
tsoha16.views.uusi_aihe_sivu = (function tsoha16$views$uusi_aihe_sivu(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Uusi aihe"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Otsikko",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__65066_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thread-edited","thread-edited",787683904),p1__65066_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rows","rows",850049680),(20),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"viesti...",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__65067_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message-edited","message-edited",-969545469),p1__65067_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"Laheta",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-new-topic","send-new-topic",1706722599)], null));
})], null)], null)], null);
});
tsoha16.views.home_page = (function tsoha16$views$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Keskustelupalsta"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tsoha16.views.aihealue_lista], null)], null);
});
tsoha16.views.current_page = (function tsoha16$views$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180)),reagent.session.get.call(null,new cljs.core.Keyword(null,"params","params",710516235))], null)], null);
});

//# sourceMappingURL=views.js.map