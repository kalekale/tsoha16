// Compiled by ClojureScript 1.9.229 {}
goog.provide('tsoha16.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('tsoha16.views');
goog.require('goog.history.EventType');
goog.require('cljsjs.react');
goog.require('goog.History');
goog.require('goog.events');
goog.require('accountant.core');
goog.require('re_frame.core');
goog.require('day8.re_frame.http_fx');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aihealueet","aihealueet",-1619454521),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nimi","nimi",-1657061231),"Mukavat asiat",new cljs.core.Keyword(null,"id","id",-1388402092),"1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nimi","nimi",-1657061231),"J\u00E4nn\u00E4t jutut",new cljs.core.Keyword(null,"id","id",-1388402092),"2"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nimi","nimi",-1657061231),"Niit\u00E4 n\u00E4it\u00E4",new cljs.core.Keyword(null,"id","id",-1388402092),"3"], null)], null),new cljs.core.Keyword(null,"keskustelut-aihealueittain","keskustelut-aihealueittain",283485773),new cljs.core.PersistentArrayMap(null, 1, ["1",new cljs.core.PersistentArrayMap(null, 1, ["1",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nimi","nimi",-1657061231),"Hieno p\u00E4iv\u00E4 t\u00E4n\u00E4\u00E4n",new cljs.core.Keyword(null,"viestit","viestit",114360310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nimi","nimi",-1657061231),"hessu",new cljs.core.Keyword(null,"viesti","viesti",984723613),"Hei kaikki! T\u00E4n\u00E4\u00E4n on todella hieno p\u00E4iv\u00E4. Join aamukahvit ja k\u00E4vin pitk\u00E4ll\u00E4 k\u00E4velyll\u00E4 kauniissa talvis\u00E4\u00E4ss\u00E4."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"viesti","viesti",984723613),"Haista paska",new cljs.core.Keyword(null,"nimi","nimi",-1657061231),"mikki"], null)], null)], null)], null)], null)], null);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"aihealueet","aihealueet",-1619454521),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"aihealueet","aihealueet",-1619454521).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"aiheet","aiheet",-1391850048),(function (db,p__55844){
var vec__55845 = p__55844;
var _ = cljs.core.nth.call(null,vec__55845,(0),null);
var aihealue_id = cljs.core.nth.call(null,vec__55845,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__55845,_,aihealue_id){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keskustelut-aihealueittain","keskustelut-aihealueittain",283485773),aihealue_id], null));
});})(vec__55845,_,aihealue_id))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"aihe","aihe",-1345360341),(function (db,p__55848){
var vec__55849 = p__55848;
var _ = cljs.core.nth.call(null,vec__55849,(0),null);
var vec__55852 = cljs.core.nth.call(null,vec__55849,(1),null);
var alue_id = cljs.core.nth.call(null,vec__55852,(0),null);
var aihe_id = cljs.core.nth.call(null,vec__55852,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__55849,_,vec__55852,alue_id,aihe_id){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keskustelut-aihealueittain","keskustelut-aihealueittain",283485773),alue_id,aihe_id], null));
});})(vec__55849,_,vec__55852,alue_id,aihe_id))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"aihealue","aihealue",-944180949),(function (db,p__55856){
var vec__55857 = p__55856;
var _ = cljs.core.nth.call(null,vec__55857,(0),null);
var id = cljs.core.nth.call(null,vec__55857,(1),null);
cljs.core.print.call(null,id);

return reagent.ratom.make_reaction.call(null,((function (vec__55857,_,id){
return (function (){
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (vec__55857,_,id){
return (function (p1__55855_SHARP_){
return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55855_SHARP_));
});})(vec__55857,_,id))
,new cljs.core.Keyword(null,"aihealueet","aihealueet",-1619454521).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db))));
});})(vec__55857,_,id))
);
}));
var action__48970__auto___55865 = (function (params__48971__auto__){
if(cljs.core.map_QMARK_.call(null,params__48971__auto__)){
var map__55860 = params__48971__auto__;
var map__55860__$1 = ((((!((map__55860 == null)))?((((map__55860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55860):map__55860);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return tsoha16.views.home_page;},new cljs.core.Symbol("tsoha16.views","home-page","tsoha16.views/home-page",-296948713,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tsoha16.views","tsoha16.views",-986162543,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/tsoha16/views.cljs",16,1,49,49,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(tsoha16.views.home_page)?tsoha16.views.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__48971__auto__)){
var vec__55862 = params__48971__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return tsoha16.views.home_page;},new cljs.core.Symbol("tsoha16.views","home-page","tsoha16.views/home-page",-296948713,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tsoha16.views","tsoha16.views",-986162543,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/tsoha16/views.cljs",16,1,49,49,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(tsoha16.views.home_page)?tsoha16.views.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__48970__auto___55865);

var action__48970__auto___55870 = (function (params__48971__auto__){
if(cljs.core.map_QMARK_.call(null,params__48971__auto__)){
var map__55866 = params__48971__auto__;
var map__55866__$1 = ((((!((map__55866 == null)))?((((map__55866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55866):map__55866);
var params = map__55866__$1;
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"params","params",710516235),params);

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return tsoha16.views.aihealue_sivu;},new cljs.core.Symbol("tsoha16.views","aihealue-sivu","tsoha16.views/aihealue-sivu",-1466298427,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tsoha16.views","tsoha16.views",-986162543,null),new cljs.core.Symbol(null,"aihealue-sivu","aihealue-sivu",-2052510573,null),"src/cljs/tsoha16/views.cljs",20,1,29,29,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null)),null,(cljs.core.truth_(tsoha16.views.aihealue_sivu)?tsoha16.views.aihealue_sivu.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__48971__auto__)){
var map__55868 = params__48971__auto__;
var map__55868__$1 = ((((!((map__55868 == null)))?((((map__55868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55868):map__55868);
var params = map__55868__$1;
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"params","params",710516235),params);

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return tsoha16.views.aihealue_sivu;},new cljs.core.Symbol("tsoha16.views","aihealue-sivu","tsoha16.views/aihealue-sivu",-1466298427,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tsoha16.views","tsoha16.views",-986162543,null),new cljs.core.Symbol(null,"aihealue-sivu","aihealue-sivu",-2052510573,null),"src/cljs/tsoha16/views.cljs",20,1,29,29,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null)),null,(cljs.core.truth_(tsoha16.views.aihealue_sivu)?tsoha16.views.aihealue_sivu.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/#/aihealueet/:id",action__48970__auto___55870);

var action__48970__auto___55875 = (function (params__48971__auto__){
if(cljs.core.map_QMARK_.call(null,params__48971__auto__)){
var map__55871 = params__48971__auto__;
var map__55871__$1 = ((((!((map__55871 == null)))?((((map__55871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55871):map__55871);
var params = map__55871__$1;
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"params","params",710516235),params);

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return tsoha16.views.aihe_sivu;},new cljs.core.Symbol("tsoha16.views","aihe-sivu","tsoha16.views/aihe-sivu",-80013001,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tsoha16.views","tsoha16.views",-986162543,null),new cljs.core.Symbol(null,"aihe-sivu","aihe-sivu",-1675347483,null),"src/cljs/tsoha16/views.cljs",16,1,19,19,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"alue-id","alue-id",-91409559,null),new cljs.core.Keyword(null,"alue-id","alue-id",-1731941086),new cljs.core.Symbol(null,"aihe-id","aihe-id",1224652204,null),new cljs.core.Keyword(null,"aihe-id","aihe-id",-415879323)], null)], null)),null,(cljs.core.truth_(tsoha16.views.aihe_sivu)?tsoha16.views.aihe_sivu.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__48971__auto__)){
var map__55873 = params__48971__auto__;
var map__55873__$1 = ((((!((map__55873 == null)))?((((map__55873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55873):map__55873);
var params = map__55873__$1;
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"params","params",710516235),params);

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return tsoha16.views.aihe_sivu;},new cljs.core.Symbol("tsoha16.views","aihe-sivu","tsoha16.views/aihe-sivu",-80013001,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tsoha16.views","tsoha16.views",-986162543,null),new cljs.core.Symbol(null,"aihe-sivu","aihe-sivu",-1675347483,null),"src/cljs/tsoha16/views.cljs",16,1,19,19,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"alue-id","alue-id",-91409559,null),new cljs.core.Keyword(null,"alue-id","alue-id",-1731941086),new cljs.core.Symbol(null,"aihe-id","aihe-id",1224652204,null),new cljs.core.Keyword(null,"aihe-id","aihe-id",-415879323)], null)], null)),null,(cljs.core.truth_(tsoha16.views.aihe_sivu)?tsoha16.views.aihe_sivu.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/#/aihealueet/:alue-id/:aihe-id",action__48970__auto___55875);

