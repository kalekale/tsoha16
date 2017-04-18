// Compiled by ClojureScript 1.9.229 {}
goog.provide('tsoha16.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"aihealueet","aihealueet",-1619454521),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"aihealueet","aihealueet",-1619454521).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"aiheet","aiheet",-1391850048),(function (db,_){
cljs.core.print.call(null,db);

return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.map.call(null,(function (p1__74151_SHARP_){
return cljs.core.assoc.call(null,p1__74151_SHARP_,new cljs.core.Keyword(null,"authorized","authorized",509904454),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"kayttaja_id","kayttaja_id",-1704479264).cljs$core$IFn$_invoke$arity$1(p1__74151_SHARP_),new cljs.core.Keyword(null,"user-id","user-id",-206822291).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db))));
}),cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aiheet","aiheet",-1391850048)], null)));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"aihe","aihe",-1345360341),(function (db,p__74160){
var vec__74161 = p__74160;
var _ = cljs.core.nth.call(null,vec__74161,(0),null);
var vec__74164 = cljs.core.nth.call(null,vec__74161,(1),null);
var alue_id = cljs.core.nth.call(null,vec__74164,(0),null);
var aihe_id = cljs.core.nth.call(null,vec__74164,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__74161,_,vec__74164,alue_id,aihe_id){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aihe","aihe",-1345360341)], null));
});})(vec__74161,_,vec__74164,alue_id,aihe_id))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"viesti","viesti",984723613),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"viesti","viesti",984723613).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"viestit","viestit",114360310),(function (db,p__74172){
var vec__74173 = p__74172;
var _ = cljs.core.nth.call(null,vec__74173,(0),null);
var vec__74176 = cljs.core.nth.call(null,vec__74173,(1),null);
var alue_id = cljs.core.nth.call(null,vec__74176,(0),null);
var aihe_id = cljs.core.nth.call(null,vec__74176,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__74173,_,vec__74176,alue_id,aihe_id){
return (function (){
return cljs.core.map.call(null,((function (vec__74173,_,vec__74176,alue_id,aihe_id){
return (function (p1__74171_SHARP_){
return cljs.core.assoc.call(null,p1__74171_SHARP_,new cljs.core.Keyword(null,"authorized","authorized",509904454),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"kayttaja_id","kayttaja_id",-1704479264).cljs$core$IFn$_invoke$arity$1(p1__74171_SHARP_),new cljs.core.Keyword(null,"user-id","user-id",-206822291).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db))));
});})(vec__74173,_,vec__74176,alue_id,aihe_id))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viestit","viestit",114360310)], null)));
});})(vec__74173,_,vec__74176,alue_id,aihe_id))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"aihealue","aihealue",-944180949),(function (db,p__74179){
var vec__74180 = p__74179;
var _ = cljs.core.nth.call(null,vec__74180,(0),null);
var id = cljs.core.nth.call(null,vec__74180,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__74180,_,id){
return (function (){
return new cljs.core.Keyword(null,"aihealue","aihealue",-944180949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
});})(vec__74180,_,id))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));

//# sourceMappingURL=subs.js.map