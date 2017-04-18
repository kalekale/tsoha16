// Compiled by ClojureScript 1.9.229 {}
goog.provide('tsoha16.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('cljsjs.react');
goog.require('tsoha16.db');
goog.require('goog.History');
goog.require('goog.events');
goog.require('accountant.core');
goog.require('re_frame.core');
goog.require('day8.re_frame.http_fx');
tsoha16.views.edit_message_panel = (function tsoha16$views$edit_message_panel(){
var viesti = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viesti","viesti",984723613)], null));
return ((function (viesti){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rows","rows",850049680),(20),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,viesti)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (viesti){
return (function (p1__78020_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message-edited","message-edited",-969545469),p1__78020_SHARP_.target.value], null));
});})(viesti))
,new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"viesti","viesti",984723613).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,viesti))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"Tallenna",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (viesti){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit-message","edit-message",373070759),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,viesti))], null));
});})(viesti))
], null)], null)], null);
});
;})(viesti))
});
tsoha16.views.thread_panel = (function tsoha16$views$thread_panel(p__78028){
var map__78039 = p__78028;
var map__78039__$1 = ((((!((map__78039 == null)))?((((map__78039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78039):map__78039);
var alue_id = cljs.core.get.call(null,map__78039__$1,new cljs.core.Keyword(null,"alue-id","alue-id",-1731941086));
var aihe_id = cljs.core.get.call(null,map__78039__$1,new cljs.core.Keyword(null,"aihe-id","aihe-id",-415879323));
var aihe = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aihe","aihe",-1345360341)], null));
var viestit = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viestit","viestit",114360310)], null));
return ((function (aihe,viestit,map__78039,map__78039__$1,alue_id,aihe_id){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str(cljs.core.deref.call(null,viestit))].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"otsikko","otsikko",1642720594).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aihe))], null),cljs.core.doall.call(null,(function (){var iter__47227__auto__ = ((function (aihe,viestit,map__78039,map__78039__$1,alue_id,aihe_id){
return (function tsoha16$views$thread_panel_$_iter__78041(s__78042){
return (new cljs.core.LazySeq(null,((function (aihe,viestit,map__78039,map__78039__$1,alue_id,aihe_id){
return (function (){
var s__78042__$1 = s__78042;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__78042__$1);
if(temp__4657__auto__){
var s__78042__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__78042__$2)){
var c__47225__auto__ = cljs.core.chunk_first.call(null,s__78042__$2);
var size__47226__auto__ = cljs.core.count.call(null,c__47225__auto__);
var b__78044 = cljs.core.chunk_buffer.call(null,size__47226__auto__);
if((function (){var i__78043 = (0);
while(true){
if((i__78043 < size__47226__auto__)){
var viesti = cljs.core._nth.call(null,c__47225__auto__,i__78043);
cljs.core.chunk_append.call(null,b__78044,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(viesti)),cljs.core.str(" sanoo:")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str(new cljs.core.Keyword(null,"viesti","viesti",984723613).cljs$core$IFn$_invoke$arity$1(viesti))].join('')], null),(cljs.core.truth_(new cljs.core.Keyword(null,"authorized","authorized",509904454).cljs$core$IFn$_invoke$arity$1(viesti))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/muokkaa-viestia/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(viesti))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"muokkaa"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"poista",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__78043,viesti,c__47225__auto__,size__47226__auto__,b__78044,s__78042__$2,temp__4657__auto__,aihe,viestit,map__78039,map__78039__$1,alue_id,aihe_id){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-thread","delete-thread",1020499095),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(aihe)], null));
});})(i__78043,viesti,c__47225__auto__,size__47226__auto__,b__78044,s__78042__$2,temp__4657__auto__,aihe,viestit,map__78039,map__78039__$1,alue_id,aihe_id))
], null)], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),viesti], null)));

var G__78046 = (i__78043 + (1));
i__78043 = G__78046;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78044),tsoha16$views$thread_panel_$_iter__78041.call(null,cljs.core.chunk_rest.call(null,s__78042__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78044),null);
}
} else {
var viesti = cljs.core.first.call(null,s__78042__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(viesti)),cljs.core.str(" sanoo:")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str(new cljs.core.Keyword(null,"viesti","viesti",984723613).cljs$core$IFn$_invoke$arity$1(viesti))].join('')], null),(cljs.core.truth_(new cljs.core.Keyword(null,"authorized","authorized",509904454).cljs$core$IFn$_invoke$arity$1(viesti))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/muokkaa-viestia/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(viesti))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"muokkaa"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"poista",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (viesti,s__78042__$2,temp__4657__auto__,aihe,viestit,map__78039,map__78039__$1,alue_id,aihe_id){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-thread","delete-thread",1020499095),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(aihe)], null));
});})(viesti,s__78042__$2,temp__4657__auto__,aihe,viestit,map__78039,map__78039__$1,alue_id,aihe_id))
], null)], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),viesti], null)),tsoha16$views$thread_panel_$_iter__78041.call(null,cljs.core.rest.call(null,s__78042__$2)));
}
} else {
return null;
}
break;
}
});})(aihe,viestit,map__78039,map__78039__$1,alue_id,aihe_id))
,null,null));
});})(aihe,viestit,map__78039,map__78039__$1,alue_id,aihe_id))
;
return iter__47227__auto__.call(null,cljs.core.deref.call(null,viestit));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Vastaa:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rows","rows",850049680),(20),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"viesti...",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (aihe,viestit,map__78039,map__78039__$1,alue_id,aihe_id){
return (function (p1__78025_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message-edited","message-edited",-969545469),p1__78025_SHARP_.target.value], null));
});})(aihe,viestit,map__78039,map__78039__$1,alue_id,aihe_id))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"Laheta",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (aihe,viestit,map__78039,map__78039__$1,alue_id,aihe_id){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-new-message","send-new-message",1962058295)], null));
});})(aihe,viestit,map__78039,map__78039__$1,alue_id,aihe_id))
], null)], null)], null);
});
;})(aihe,viestit,map__78039,map__78039__$1,alue_id,aihe_id))
});
tsoha16.views.topic_panel = (function tsoha16$views$topic_panel(){
var aiheet = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aiheet","aiheet",-1391850048)], null));
var aihealue = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aihealue","aihealue",-944180949)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"nimi","nimi",-1657061231).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aihealue))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/uusi-aihe/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aihealue)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"Uusi aihe"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.doall.call(null,(function (){var iter__47227__auto__ = ((function (aiheet,aihealue){
return (function tsoha16$views$topic_panel_$_iter__78059(s__78060){
return (new cljs.core.LazySeq(null,((function (aiheet,aihealue){
return (function (){
var s__78060__$1 = s__78060;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__78060__$1);
if(temp__4657__auto__){
var s__78060__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__78060__$2)){
var c__47225__auto__ = cljs.core.chunk_first.call(null,s__78060__$2);
var size__47226__auto__ = cljs.core.count.call(null,c__47225__auto__);
var b__78062 = cljs.core.chunk_buffer.call(null,size__47226__auto__);
if((function (){var i__78061 = (0);
while(true){
if((i__78061 < size__47226__auto__)){
var aihe = cljs.core._nth.call(null,c__47225__auto__,i__78061);
cljs.core.chunk_append.call(null,b__78062,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/aihealueet/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aihealue))),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(aihe))].join('')], null),new cljs.core.Keyword(null,"otsikko","otsikko",1642720594).cljs$core$IFn$_invoke$arity$1(aihe)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"authorized","authorized",509904454).cljs$core$IFn$_invoke$arity$1(aihe))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/muokkaa-aihetta/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(aihe))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"muokkaa"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"poista",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__78061,aihe,c__47225__auto__,size__47226__auto__,b__78062,s__78060__$2,temp__4657__auto__,aiheet,aihealue){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-thread","delete-thread",1020499095),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(aihe)], null));
});})(i__78061,aihe,c__47225__auto__,size__47226__auto__,b__78062,s__78060__$2,temp__4657__auto__,aiheet,aihealue))
], null)], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),aihe], null)));

var G__78064 = (i__78061 + (1));
i__78061 = G__78064;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78062),tsoha16$views$topic_panel_$_iter__78059.call(null,cljs.core.chunk_rest.call(null,s__78060__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78062),null);
}
} else {
var aihe = cljs.core.first.call(null,s__78060__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/aihealueet/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aihealue))),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(aihe))].join('')], null),new cljs.core.Keyword(null,"otsikko","otsikko",1642720594).cljs$core$IFn$_invoke$arity$1(aihe)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"authorized","authorized",509904454).cljs$core$IFn$_invoke$arity$1(aihe))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/muokkaa-aihetta/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(aihe))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"muokkaa"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"poista",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (aihe,s__78060__$2,temp__4657__auto__,aiheet,aihealue){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-thread","delete-thread",1020499095),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(aihe)], null));
});})(aihe,s__78060__$2,temp__4657__auto__,aiheet,aihealue))
], null)], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),aihe], null)),tsoha16$views$topic_panel_$_iter__78059.call(null,cljs.core.rest.call(null,s__78060__$2)));
}
} else {
return null;
}
break;
}
});})(aiheet,aihealue))
,null,null));
});})(aiheet,aihealue))
;
return iter__47227__auto__.call(null,cljs.core.deref.call(null,aiheet));
})())], null)], null);
});
tsoha16.views.aihealue_komponentti = (function tsoha16$views$aihealue_komponentti(aihealue){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/aihealueet/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(aihealue))].join('')], null),new cljs.core.Keyword(null,"nimi","nimi",-1657061231).cljs$core$IFn$_invoke$arity$1(aihealue)], null)], null);
});
tsoha16.views.aihealue_lista = (function tsoha16$views$aihealue_lista(){
var aihealueet = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aihealueet","aihealueet",-1619454521)], null));
return ((function (aihealueet){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__47227__auto__ = ((function (aihealueet){
return (function tsoha16$views$aihealue_lista_$_iter__78077(s__78078){
return (new cljs.core.LazySeq(null,((function (aihealueet){
return (function (){
var s__78078__$1 = s__78078;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__78078__$1);
if(temp__4657__auto__){
var s__78078__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__78078__$2)){
var c__47225__auto__ = cljs.core.chunk_first.call(null,s__78078__$2);
var size__47226__auto__ = cljs.core.count.call(null,c__47225__auto__);
var b__78080 = cljs.core.chunk_buffer.call(null,size__47226__auto__);
if((function (){var i__78079 = (0);
while(true){
if((i__78079 < size__47226__auto__)){
var aihealue = cljs.core._nth.call(null,c__47225__auto__,i__78079);
cljs.core.chunk_append.call(null,b__78080,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tsoha16.views.aihealue_komponentti,aihealue], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),aihealue], null)));

var G__78083 = (i__78079 + (1));
i__78079 = G__78083;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78080),tsoha16$views$aihealue_lista_$_iter__78077.call(null,cljs.core.chunk_rest.call(null,s__78078__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78080),null);
}
} else {
var aihealue = cljs.core.first.call(null,s__78078__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tsoha16.views.aihealue_komponentti,aihealue], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),aihealue], null)),tsoha16$views$aihealue_lista_$_iter__78077.call(null,cljs.core.rest.call(null,s__78078__$2)));
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
return iter__47227__auto__.call(null,cljs.core.deref.call(null,aihealueet));
})()], null);
});
;})(aihealueet))
});
tsoha16.views.edit_thread_panel = (function tsoha16$views$edit_thread_panel(){
var aihe = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aihe","aihe",-1345360341)], null));
return ((function (aihe){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str(cljs.core.deref.call(null,aihe))].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Muokkaa aihetta"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"otsikko","otsikko",1642720594).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aihe)),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Otsikko",new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"otsikko","otsikko",1642720594).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aihe)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (aihe){
return (function (p1__78084_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thread-edited","thread-edited",787683904),p1__78084_SHARP_.target.value], null));
});})(aihe))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"Tallenna",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (aihe){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit-thread","edit-thread",1381567452),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aihe))], null));
});})(aihe))
], null)], null)], null);
});
;})(aihe))
});
tsoha16.views.new_thread_panel = (function tsoha16$views$new_thread_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Uusi aihe"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Otsikko",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__78087_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thread-edited","thread-edited",787683904),p1__78087_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rows","rows",850049680),(20),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"viesti...",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__78090_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message-edited","message-edited",-969545469),p1__78090_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"Laheta",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-new-topic","send-new-topic",1706722599)], null));
})], null)], null)], null);
});
tsoha16.views.login_panel = (function tsoha16$views$login_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Login here. Enter your email and password"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"email address",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__78091_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"username-input-changed","username-input-changed",253033443),p1__78091_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"password",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__78092_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password-input-changed","password-input-changed",-1771836944),p1__78092_SHARP_.target.value], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login-clicked","login-clicked",-468133673)], null));
}),new cljs.core.Keyword(null,"value","value",305978217),"Login"], null)], null)], null)], null);
});
tsoha16.views.home_panel = (function tsoha16$views$home_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Keskustelupalsta"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tsoha16.views.aihealue_lista], null)], null);
});
tsoha16.views.panels = (function tsoha16$views$panels(panel_name){
var G__78097 = (((panel_name instanceof cljs.core.Keyword))?panel_name.fqn:null);
switch (G__78097) {
case "home-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tsoha16.views.home_panel], null);

break;
case "login-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tsoha16.views.login_panel], null);

break;
case "topic-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tsoha16.views.topic_panel], null);

break;
case "thread-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tsoha16.views.thread_panel], null);

break;
case "new-thread-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tsoha16.views.new_thread_panel], null);

break;
case "edit-thread-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tsoha16.views.edit_thread_panel], null);

break;
case "edit-message-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tsoha16.views.edit_message_panel], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);

}
});
tsoha16.views.show_panel = (function tsoha16$views$show_panel(panel_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tsoha16.views.panels,panel_name], null);
});
tsoha16.views.main_panel = (function tsoha16$views$main_panel(){
var active_panel = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994)], null));
return ((function (active_panel){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tsoha16.views.show_panel,cljs.core.deref.call(null,active_panel)], null);
});
;})(active_panel))
});

//# sourceMappingURL=views.js.map