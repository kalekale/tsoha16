// Compiled by ClojureScript 1.9.229 {}
goog.provide('tsoha16.core');
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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aihealueet","aihealueet",-1619454521),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nimi","nimi",-1657061231),"Mukavat asiat",new cljs.core.Keyword(null,"id","id",-1388402092),"1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nimi","nimi",-1657061231),"J\u00E4nn\u00E4t jutut",new cljs.core.Keyword(null,"id","id",-1388402092),"2"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nimi","nimi",-1657061231),"Niit\u00E4 n\u00E4it\u00E4",new cljs.core.Keyword(null,"id","id",-1388402092),"3"], null)], null),new cljs.core.Keyword(null,"keskustelut-aihealueittain","keskustelut-aihealueittain",283485773),new cljs.core.PersistentArrayMap(null, 1, ["1",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nimi","nimi",-1657061231),"Hieno p\u00E4iv\u00E4 t\u00E4n\u00E4\u00E4n",new cljs.core.Keyword(null,"viesti","viesti",984723613),"Hei kaikki! T\u00E4n\u00E4\u00E4n on todella hieno p\u00E4iv\u00E4. Join aamukahvit ja k\u00E4vin pitk\u00E4ll\u00E4 k\u00E4velyll\u00E4 kauniissa talvis\u00E4\u00E4ss\u00E4.",new cljs.core.Keyword(null,"id","id",-1388402092),"1"], null)], null)], null)], null);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"aihealueet","aihealueet",-1619454521),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"aihealueet","aihealueet",-1619454521).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"aiheet","aiheet",-1391850048),(function (db,p__57455){
var vec__57456 = p__57455;
var _ = cljs.core.nth.call(null,vec__57456,(0),null);
var aihealue_id = cljs.core.nth.call(null,vec__57456,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__57456,_,aihealue_id){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keskustelut-aihealueittain","keskustelut-aihealueittain",283485773),aihealue_id], null));
});})(vec__57456,_,aihealue_id))
);
}));
tsoha16.core.aihealue_sivu = (function tsoha16$core$aihealue_sivu(p__57464){
var map__57471 = p__57464;
var map__57471__$1 = ((((!((map__57471 == null)))?((((map__57471.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57471.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57471):map__57471);
var id = cljs.core.get.call(null,map__57471__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var nimi = cljs.core.get.call(null,map__57471__$1,new cljs.core.Keyword(null,"nimi","nimi",-1657061231));
cljs.core.print.call(null,id);

var aiheet = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aiheet","aiheet",-1391850048),id], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),nimi], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__37747__auto__ = ((function (aiheet,map__57471,map__57471__$1,id,nimi){
return (function tsoha16$core$aihealue_sivu_$_iter__57473(s__57474){
return (new cljs.core.LazySeq(null,((function (aiheet,map__57471,map__57471__$1,id,nimi){
return (function (){
var s__57474__$1 = s__57474;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__57474__$1);
if(temp__4657__auto__){
var s__57474__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__57474__$2)){
var c__37745__auto__ = cljs.core.chunk_first.call(null,s__57474__$2);
var size__37746__auto__ = cljs.core.count.call(null,c__37745__auto__);
var b__57476 = cljs.core.chunk_buffer.call(null,size__37746__auto__);
if((function (){var i__57475 = (0);
while(true){
if((i__57475 < size__37746__auto__)){
var aihe = cljs.core._nth.call(null,c__37745__auto__,i__57475);
cljs.core.chunk_append.call(null,b__57476,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"nimi","nimi",-1657061231).cljs$core$IFn$_invoke$arity$1(aihe)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),aihe], null)));

var G__57482 = (i__57475 + (1));
i__57475 = G__57482;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57476),tsoha16$core$aihealue_sivu_$_iter__57473.call(null,cljs.core.chunk_rest.call(null,s__57474__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57476),null);
}
} else {
var aihe = cljs.core.first.call(null,s__57474__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"nimi","nimi",-1657061231).cljs$core$IFn$_invoke$arity$1(aihe)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),aihe], null)),tsoha16$core$aihealue_sivu_$_iter__57473.call(null,cljs.core.rest.call(null,s__57474__$2)));
}
} else {
return null;
}
break;
}
});})(aiheet,map__57471,map__57471__$1,id,nimi))
,null,null));
});})(aiheet,map__57471,map__57471__$1,id,nimi))
;
return iter__37747__auto__.call(null,cljs.core.deref.call(null,aiheet));
})()], null)], null);
});
tsoha16.core.aihealue_komponentti = (function tsoha16$core$aihealue_komponentti(aihealue){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/aihealueet/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(aihealue)),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"nimi","nimi",-1657061231).cljs$core$IFn$_invoke$arity$1(aihealue))].join('')], null),new cljs.core.Keyword(null,"nimi","nimi",-1657061231).cljs$core$IFn$_invoke$arity$1(aihealue)], null)], null);
});
tsoha16.core.aihealue_lista = (function tsoha16$core$aihealue_lista(){
var aihealueet = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aihealueet","aihealueet",-1619454521)], null));
return ((function (aihealueet){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__37747__auto__ = ((function (aihealueet){
return (function tsoha16$core$aihealue_lista_$_iter__57493(s__57494){
return (new cljs.core.LazySeq(null,((function (aihealueet){
return (function (){
var s__57494__$1 = s__57494;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__57494__$1);
if(temp__4657__auto__){
var s__57494__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__57494__$2)){
var c__37745__auto__ = cljs.core.chunk_first.call(null,s__57494__$2);
var size__37746__auto__ = cljs.core.count.call(null,c__37745__auto__);
var b__57496 = cljs.core.chunk_buffer.call(null,size__37746__auto__);
if((function (){var i__57495 = (0);
while(true){
if((i__57495 < size__37746__auto__)){
var aihealue = cljs.core._nth.call(null,c__37745__auto__,i__57495);
cljs.core.chunk_append.call(null,b__57496,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tsoha16.core.aihealue_komponentti,aihealue], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),aihealue], null)));

var G__57497 = (i__57495 + (1));
i__57495 = G__57497;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57496),tsoha16$core$aihealue_lista_$_iter__57493.call(null,cljs.core.chunk_rest.call(null,s__57494__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57496),null);
}
} else {
var aihealue = cljs.core.first.call(null,s__57494__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tsoha16.core.aihealue_komponentti,aihealue], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),aihealue], null)),tsoha16$core$aihealue_lista_$_iter__57493.call(null,cljs.core.rest.call(null,s__57494__$2)));
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
return iter__37747__auto__.call(null,cljs.core.deref.call(null,aihealueet));
})()], null);
});
;})(aihealueet))
});
tsoha16.core.home_page = (function tsoha16$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Keskustelupalsta"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tsoha16.core.aihealue_lista], null)], null);
});
tsoha16.core.about_page = (function tsoha16$core$about_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"About tsoha16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"go to the home page"], null)], null)], null);
});
tsoha16.core.current_page = (function tsoha16$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180)),reagent.session.get.call(null,new cljs.core.Keyword(null,"params","params",710516235))], null)], null);
});
var action__43761__auto___57503 = (function (params__43762__auto__){
if(cljs.core.map_QMARK_.call(null,params__43762__auto__)){
var map__57498 = params__43762__auto__;
var map__57498__$1 = ((((!((map__57498 == null)))?((((map__57498.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57498.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57498):map__57498);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return tsoha16.core.home_page;},new cljs.core.Symbol("tsoha16.core","home-page","tsoha16.core/home-page",1870557256,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tsoha16.core","tsoha16.core",760876239,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/kallelehikoinen/dev/tsoha16/src/cljs/tsoha16/core.cljs",16,1,63,63,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(tsoha16.core.home_page)?tsoha16.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__43762__auto__)){
var vec__57500 = params__43762__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return tsoha16.core.home_page;},new cljs.core.Symbol("tsoha16.core","home-page","tsoha16.core/home-page",1870557256,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tsoha16.core","tsoha16.core",760876239,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/kallelehikoinen/dev/tsoha16/src/cljs/tsoha16/core.cljs",16,1,63,63,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(tsoha16.core.home_page)?tsoha16.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__43761__auto___57503);

var action__43761__auto___57508 = (function (params__43762__auto__){
if(cljs.core.map_QMARK_.call(null,params__43762__auto__)){
var map__57504 = params__43762__auto__;
var map__57504__$1 = ((((!((map__57504 == null)))?((((map__57504.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57504.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57504):map__57504);
var params = map__57504__$1;
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return tsoha16.core.aihealue_sivu;},new cljs.core.Symbol("tsoha16.core","aihealue-sivu","tsoha16.core/aihealue-sivu",734626420,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tsoha16.core","tsoha16.core",760876239,null),new cljs.core.Symbol(null,"aihealue-sivu","aihealue-sivu",-2052510573,null),"/Users/kallelehikoinen/dev/tsoha16/src/cljs/tsoha16/core.cljs",20,1,43,43,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"nimi","nimi",-16529704,null),new cljs.core.Keyword(null,"nimi","nimi",-1657061231)], null)], null)),null,(cljs.core.truth_(tsoha16.core.aihealue_sivu)?tsoha16.core.aihealue_sivu.cljs$lang$test:null)])));

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"params","params",710516235),params);
} else {
if(cljs.core.vector_QMARK_.call(null,params__43762__auto__)){
var map__57506 = params__43762__auto__;
var map__57506__$1 = ((((!((map__57506 == null)))?((((map__57506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57506):map__57506);
var params = map__57506__$1;
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return tsoha16.core.aihealue_sivu;},new cljs.core.Symbol("tsoha16.core","aihealue-sivu","tsoha16.core/aihealue-sivu",734626420,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tsoha16.core","tsoha16.core",760876239,null),new cljs.core.Symbol(null,"aihealue-sivu","aihealue-sivu",-2052510573,null),"/Users/kallelehikoinen/dev/tsoha16/src/cljs/tsoha16/core.cljs",20,1,43,43,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"nimi","nimi",-16529704,null),new cljs.core.Keyword(null,"nimi","nimi",-1657061231)], null)], null)),null,(cljs.core.truth_(tsoha16.core.aihealue_sivu)?tsoha16.core.aihealue_sivu.cljs$lang$test:null)])));

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"params","params",710516235),params);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/#/aihealueet/:id/:nimi",action__43761__auto___57508);

var action__43761__auto___57514 = (function (params__43762__auto__){
if(cljs.core.map_QMARK_.call(null,params__43762__auto__)){
var map__57509 = params__43762__auto__;
var map__57509__$1 = ((((!((map__57509 == null)))?((((map__57509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57509):map__57509);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return tsoha16.core.about_page;},new cljs.core.Symbol("tsoha16.core","about-page","tsoha16.core/about-page",13315528,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tsoha16.core","tsoha16.core",760876239,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"/Users/kallelehikoinen/dev/tsoha16/src/cljs/tsoha16/core.cljs",17,1,67,67,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(tsoha16.core.about_page)?tsoha16.core.about_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__43762__auto__)){
var vec__57511 = params__43762__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return tsoha16.core.about_page;},new cljs.core.Symbol("tsoha16.core","about-page","tsoha16.core/about-page",13315528,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tsoha16.core","tsoha16.core",760876239,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"/Users/kallelehikoinen/dev/tsoha16/src/cljs/tsoha16/core.cljs",17,1,67,67,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(tsoha16.core.about_page)?tsoha16.core.about_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/#/about",action__43761__auto___57514);

tsoha16.core.mount_root = (function tsoha16$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tsoha16.core.current_page], null),document.getElementById("app"));
});
tsoha16.core.init_BANG_ = (function tsoha16$core$init_BANG_(){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
return secretary.core.dispatch_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return secretary.core.locate_route.call(null,path);
})], null));

accountant.core.dispatch_current_BANG_.call(null);

return tsoha16.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map