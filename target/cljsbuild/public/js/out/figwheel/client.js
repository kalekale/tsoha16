// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args52883 = [];
var len__38153__auto___52886 = arguments.length;
var i__38154__auto___52887 = (0);
while(true){
if((i__38154__auto___52887 < len__38153__auto___52886)){
args52883.push((arguments[i__38154__auto___52887]));

var G__52888 = (i__38154__auto___52887 + (1));
i__38154__auto___52887 = G__52888;
continue;
} else {
}
break;
}

var G__52885 = args52883.length;
switch (G__52885) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52883.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__38160__auto__ = [];
var len__38153__auto___52891 = arguments.length;
var i__38154__auto___52892 = (0);
while(true){
if((i__38154__auto___52892 < len__38153__auto___52891)){
args__38160__auto__.push((arguments[i__38154__auto___52892]));

var G__52893 = (i__38154__auto___52892 + (1));
i__38154__auto___52892 = G__52893;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq52890){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52890));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__38160__auto__ = [];
var len__38153__auto___52895 = arguments.length;
var i__38154__auto___52896 = (0);
while(true){
if((i__38154__auto___52896 < len__38153__auto___52895)){
args__38160__auto__.push((arguments[i__38154__auto___52896]));

var G__52897 = (i__38154__auto___52896 + (1));
i__38154__auto___52896 = G__52897;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq52894){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52894));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__52898 = cljs.core._EQ_;
var expr__52899 = (function (){var or__37078__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e52902){if((e52902 instanceof Error)){
var e = e52902;
return false;
} else {
throw e52902;

}
}})();
if(cljs.core.truth_(or__37078__auto__)){
return or__37078__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__52898.call(null,"true",expr__52899))){
return true;
} else {
if(cljs.core.truth_(pred__52898.call(null,"false",expr__52899))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__52899)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e52904){if((e52904 instanceof Error)){
var e = e52904;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e52904;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__52905){
var map__52908 = p__52905;
var map__52908__$1 = ((((!((map__52908 == null)))?((((map__52908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52908):map__52908);
var message = cljs.core.get.call(null,map__52908__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__52908__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__37078__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__37078__auto__)){
return or__37078__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__37066__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__37066__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__37066__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__40014__auto___53062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40014__auto___53062,ch){
return (function (){
var f__40015__auto__ = (function (){var switch__39995__auto__ = ((function (c__40014__auto___53062,ch){
return (function (state_53035){
var state_val_53036 = (state_53035[(1)]);
if((state_val_53036 === (7))){
var inst_53031 = (state_53035[(2)]);
var state_53035__$1 = state_53035;
var statearr_53037_53063 = state_53035__$1;
(statearr_53037_53063[(2)] = inst_53031);

(statearr_53037_53063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53036 === (1))){
var state_53035__$1 = state_53035;
var statearr_53038_53064 = state_53035__$1;
(statearr_53038_53064[(2)] = null);

(statearr_53038_53064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53036 === (4))){
var inst_52988 = (state_53035[(5)]);
var inst_52988__$1 = (state_53035[(2)]);
var state_53035__$1 = (function (){var statearr_53039 = state_53035;
(statearr_53039[(5)] = inst_52988__$1);

return statearr_53039;
})();
if(cljs.core.truth_(inst_52988__$1)){
var statearr_53040_53065 = state_53035__$1;
(statearr_53040_53065[(1)] = (5));

} else {
var statearr_53041_53066 = state_53035__$1;
(statearr_53041_53066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53036 === (15))){
var inst_52995 = (state_53035[(6)]);
var inst_53010 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_52995);
var inst_53011 = cljs.core.first.call(null,inst_53010);
var inst_53012 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_53011);
var inst_53013 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_53012)].join('');
var inst_53014 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_53013);
var state_53035__$1 = state_53035;
var statearr_53042_53067 = state_53035__$1;
(statearr_53042_53067[(2)] = inst_53014);

(statearr_53042_53067[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53036 === (13))){
var inst_53019 = (state_53035[(2)]);
var state_53035__$1 = state_53035;
var statearr_53043_53068 = state_53035__$1;
(statearr_53043_53068[(2)] = inst_53019);

(statearr_53043_53068[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53036 === (6))){
var state_53035__$1 = state_53035;
var statearr_53044_53069 = state_53035__$1;
(statearr_53044_53069[(2)] = null);

(statearr_53044_53069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53036 === (17))){
var inst_53017 = (state_53035[(2)]);
var state_53035__$1 = state_53035;
var statearr_53045_53070 = state_53035__$1;
(statearr_53045_53070[(2)] = inst_53017);

(statearr_53045_53070[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53036 === (3))){
var inst_53033 = (state_53035[(2)]);
var state_53035__$1 = state_53035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53035__$1,inst_53033);
} else {
if((state_val_53036 === (12))){
var inst_52994 = (state_53035[(7)]);
var inst_53008 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_52994,opts);
var state_53035__$1 = state_53035;
if(cljs.core.truth_(inst_53008)){
var statearr_53046_53071 = state_53035__$1;
(statearr_53046_53071[(1)] = (15));

} else {
var statearr_53047_53072 = state_53035__$1;
(statearr_53047_53072[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53036 === (2))){
var state_53035__$1 = state_53035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53035__$1,(4),ch);
} else {
if((state_val_53036 === (11))){
var inst_52995 = (state_53035[(6)]);
var inst_53000 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53001 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_52995);
var inst_53002 = cljs.core.async.timeout.call(null,(1000));
var inst_53003 = [inst_53001,inst_53002];
var inst_53004 = (new cljs.core.PersistentVector(null,2,(5),inst_53000,inst_53003,null));
var state_53035__$1 = state_53035;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_53035__$1,(14),inst_53004);
} else {
if((state_val_53036 === (9))){
var inst_52995 = (state_53035[(6)]);
var inst_53021 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_53022 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_52995);
var inst_53023 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_53022);
var inst_53024 = [cljs.core.str("Not loading: "),cljs.core.str(inst_53023)].join('');
var inst_53025 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_53024);
var state_53035__$1 = (function (){var statearr_53048 = state_53035;
(statearr_53048[(8)] = inst_53021);

return statearr_53048;
})();
var statearr_53049_53073 = state_53035__$1;
(statearr_53049_53073[(2)] = inst_53025);

(statearr_53049_53073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53036 === (5))){
var inst_52988 = (state_53035[(5)]);
var inst_52990 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_52991 = (new cljs.core.PersistentArrayMap(null,2,inst_52990,null));
var inst_52992 = (new cljs.core.PersistentHashSet(null,inst_52991,null));
var inst_52993 = figwheel.client.focus_msgs.call(null,inst_52992,inst_52988);
var inst_52994 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_52993);
var inst_52995 = cljs.core.first.call(null,inst_52993);
var inst_52996 = figwheel.client.autoload_QMARK_.call(null);
var state_53035__$1 = (function (){var statearr_53050 = state_53035;
(statearr_53050[(7)] = inst_52994);

(statearr_53050[(6)] = inst_52995);

return statearr_53050;
})();
if(cljs.core.truth_(inst_52996)){
var statearr_53051_53074 = state_53035__$1;
(statearr_53051_53074[(1)] = (8));

} else {
var statearr_53052_53075 = state_53035__$1;
(statearr_53052_53075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53036 === (14))){
var inst_53006 = (state_53035[(2)]);
var state_53035__$1 = state_53035;
var statearr_53053_53076 = state_53035__$1;
(statearr_53053_53076[(2)] = inst_53006);

(statearr_53053_53076[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53036 === (16))){
var state_53035__$1 = state_53035;
var statearr_53054_53077 = state_53035__$1;
(statearr_53054_53077[(2)] = null);

(statearr_53054_53077[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53036 === (10))){
var inst_53027 = (state_53035[(2)]);
var state_53035__$1 = (function (){var statearr_53055 = state_53035;
(statearr_53055[(9)] = inst_53027);

return statearr_53055;
})();
var statearr_53056_53078 = state_53035__$1;
(statearr_53056_53078[(2)] = null);

(statearr_53056_53078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53036 === (8))){
var inst_52994 = (state_53035[(7)]);
var inst_52998 = figwheel.client.reload_file_state_QMARK_.call(null,inst_52994,opts);
var state_53035__$1 = state_53035;
if(cljs.core.truth_(inst_52998)){
var statearr_53057_53079 = state_53035__$1;
(statearr_53057_53079[(1)] = (11));

} else {
var statearr_53058_53080 = state_53035__$1;
(statearr_53058_53080[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40014__auto___53062,ch))
;
return ((function (switch__39995__auto__,c__40014__auto___53062,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__39996__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__39996__auto____0 = (function (){
var statearr_53060 = [null,null,null,null,null,null,null,null,null,null];
(statearr_53060[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__39996__auto__);

(statearr_53060[(1)] = (1));

return statearr_53060;
});
var figwheel$client$file_reloader_plugin_$_state_machine__39996__auto____1 = (function (state_53035){
while(true){
var result__39997__auto__ = switch__39995__auto__.call(null,state_53035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39997__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__39996__auto__ = function(state_53035){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__39996__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__39996__auto____1.call(this,state_53035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__39996__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__39996__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__39996__auto__;
})()
;})(switch__39995__auto__,c__40014__auto___53062,ch))
})();
var state__40016__auto__ = (function (){var statearr_53061 = f__40015__auto__.call(null);
(statearr_53061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40014__auto___53062);

return statearr_53061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40016__auto__);
});})(c__40014__auto___53062,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__53081_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__53081_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_53084 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_53084){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e53083){if((e53083 instanceof Error)){
var e = e53083;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_53084], null));
} else {
var e = e53083;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_53084))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__53085){
var map__53094 = p__53085;
var map__53094__$1 = ((((!((map__53094 == null)))?((((map__53094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53094):map__53094);
var opts = map__53094__$1;
var build_id = cljs.core.get.call(null,map__53094__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__53094,map__53094__$1,opts,build_id){
return (function (p__53096){
var vec__53097 = p__53096;
var seq__53098 = cljs.core.seq.call(null,vec__53097);
var first__53099 = cljs.core.first.call(null,seq__53098);
var seq__53098__$1 = cljs.core.next.call(null,seq__53098);
var map__53100 = first__53099;
var map__53100__$1 = ((((!((map__53100 == null)))?((((map__53100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53100):map__53100);
var msg = map__53100__$1;
var msg_name = cljs.core.get.call(null,map__53100__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__53098__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__53097,seq__53098,first__53099,seq__53098__$1,map__53100,map__53100__$1,msg,msg_name,_,map__53094,map__53094__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__53097,seq__53098,first__53099,seq__53098__$1,map__53100,map__53100__$1,msg,msg_name,_,map__53094,map__53094__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__53094,map__53094__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__53108){
var vec__53109 = p__53108;
var seq__53110 = cljs.core.seq.call(null,vec__53109);
var first__53111 = cljs.core.first.call(null,seq__53110);
var seq__53110__$1 = cljs.core.next.call(null,seq__53110);
var map__53112 = first__53111;
var map__53112__$1 = ((((!((map__53112 == null)))?((((map__53112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53112):map__53112);
var msg = map__53112__$1;
var msg_name = cljs.core.get.call(null,map__53112__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__53110__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__53114){
var map__53126 = p__53114;
var map__53126__$1 = ((((!((map__53126 == null)))?((((map__53126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53126):map__53126);
var on_compile_warning = cljs.core.get.call(null,map__53126__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__53126__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__53126,map__53126__$1,on_compile_warning,on_compile_fail){
return (function (p__53128){
var vec__53129 = p__53128;
var seq__53130 = cljs.core.seq.call(null,vec__53129);
var first__53131 = cljs.core.first.call(null,seq__53130);
var seq__53130__$1 = cljs.core.next.call(null,seq__53130);
var map__53132 = first__53131;
var map__53132__$1 = ((((!((map__53132 == null)))?((((map__53132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53132):map__53132);
var msg = map__53132__$1;
var msg_name = cljs.core.get.call(null,map__53132__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__53130__$1;
var pred__53134 = cljs.core._EQ_;
var expr__53135 = msg_name;
if(cljs.core.truth_(pred__53134.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__53135))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__53134.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__53135))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__53126,map__53126__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__40014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40014__auto__,msg_hist,msg_names,msg){
return (function (){
var f__40015__auto__ = (function (){var switch__39995__auto__ = ((function (c__40014__auto__,msg_hist,msg_names,msg){
return (function (state_53359){
var state_val_53360 = (state_53359[(1)]);
if((state_val_53360 === (7))){
var inst_53279 = (state_53359[(2)]);
var state_53359__$1 = state_53359;
if(cljs.core.truth_(inst_53279)){
var statearr_53361_53407 = state_53359__$1;
(statearr_53361_53407[(1)] = (8));

} else {
var statearr_53362_53408 = state_53359__$1;
(statearr_53362_53408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53360 === (20))){
var inst_53353 = (state_53359[(2)]);
var state_53359__$1 = state_53359;
var statearr_53363_53409 = state_53359__$1;
(statearr_53363_53409[(2)] = inst_53353);

(statearr_53363_53409[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53360 === (27))){
var inst_53349 = (state_53359[(2)]);
var state_53359__$1 = state_53359;
var statearr_53364_53410 = state_53359__$1;
(statearr_53364_53410[(2)] = inst_53349);

(statearr_53364_53410[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53360 === (1))){
var inst_53272 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_53359__$1 = state_53359;
if(cljs.core.truth_(inst_53272)){
var statearr_53365_53411 = state_53359__$1;
(statearr_53365_53411[(1)] = (2));

} else {
var statearr_53366_53412 = state_53359__$1;
(statearr_53366_53412[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53360 === (24))){
var inst_53351 = (state_53359[(2)]);
var state_53359__$1 = state_53359;
var statearr_53367_53413 = state_53359__$1;
(statearr_53367_53413[(2)] = inst_53351);

(statearr_53367_53413[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53360 === (4))){
var inst_53357 = (state_53359[(2)]);
var state_53359__$1 = state_53359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53359__$1,inst_53357);
} else {
if((state_val_53360 === (15))){
var inst_53355 = (state_53359[(2)]);
var state_53359__$1 = state_53359;
var statearr_53368_53414 = state_53359__$1;
(statearr_53368_53414[(2)] = inst_53355);

(statearr_53368_53414[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53360 === (21))){
var inst_53308 = (state_53359[(2)]);
var inst_53309 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53310 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53309);
var state_53359__$1 = (function (){var statearr_53369 = state_53359;
(statearr_53369[(5)] = inst_53308);

return statearr_53369;
})();
var statearr_53370_53415 = state_53359__$1;
(statearr_53370_53415[(2)] = inst_53310);

(statearr_53370_53415[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53360 === (31))){
var inst_53338 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_53359__$1 = state_53359;
if(cljs.core.truth_(inst_53338)){
var statearr_53371_53416 = state_53359__$1;
(statearr_53371_53416[(1)] = (34));

} else {
var statearr_53372_53417 = state_53359__$1;
(statearr_53372_53417[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53360 === (32))){
var inst_53347 = (state_53359[(2)]);
var state_53359__$1 = state_53359;
var statearr_53373_53418 = state_53359__$1;
(statearr_53373_53418[(2)] = inst_53347);

(statearr_53373_53418[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53360 === (33))){
var inst_53334 = (state_53359[(2)]);
var inst_53335 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53336 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53335);
var state_53359__$1 = (function (){var statearr_53374 = state_53359;
(statearr_53374[(6)] = inst_53334);

return statearr_53374;
})();
var statearr_53375_53419 = state_53359__$1;
(statearr_53375_53419[(2)] = inst_53336);

(statearr_53375_53419[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53360 === (13))){
var inst_53293 = figwheel.client.heads_up.clear.call(null);
var state_53359__$1 = state_53359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53359__$1,(16),inst_53293);
} else {
if((state_val_53360 === (22))){
var inst_53314 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53315 = figwheel.client.heads_up.append_warning_message.call(null,inst_53314);
var state_53359__$1 = state_53359;
var statearr_53376_53420 = state_53359__$1;
(statearr_53376_53420[(2)] = inst_53315);

(statearr_53376_53420[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53360 === (36))){
var inst_53345 = (state_53359[(2)]);
var state_53359__$1 = state_53359;
var statearr_53377_53421 = state_53359__$1;
(statearr_53377_53421[(2)] = inst_53345);

(statearr_53377_53421[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53360 === (29))){
var inst_53325 = (state_53359[(2)]);
var inst_53326 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53327 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53326);
var state_53359__$1 = (function (){var statearr_53378 = state_53359;
(statearr_53378[(7)] = inst_53325);

return statearr_53378;
})();
var statearr_53379_53422 = state_53359__$1;
(statearr_53379_53422[(2)] = inst_53327);

(statearr_53379_53422[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53360 === (6))){
var inst_53274 = (state_53359[(8)]);
var state_53359__$1 = state_53359;
var statearr_53380_53423 = state_53359__$1;
(statearr_53380_53423[(2)] = inst_53274);

(statearr_53380_53423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53360 === (28))){
var inst_53321 = (state_53359[(2)]);
var inst_53322 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53323 = figwheel.client.heads_up.display_warning.call(null,inst_53322);
var state_53359__$1 = (function (){var statearr_53381 = state_53359;
(statearr_53381[(9)] = inst_53321);

return statearr_53381;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53359__$1,(29),inst_53323);
} else {
if((state_val_53360 === (25))){
var inst_53319 = figwheel.client.heads_up.clear.call(null);
var state_53359__$1 = state_53359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53359__$1,(28),inst_53319);
} else {
if((state_val_53360 === (34))){
var inst_53340 = figwheel.client.heads_up.flash_loaded.call(null);
var state_53359__$1 = state_53359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53359__$1,(37),inst_53340);
} else {
if((state_val_53360 === (17))){
var inst_53299 = (state_53359[(2)]);
var inst_53300 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53301 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53300);
var state_53359__$1 = (function (){var statearr_53382 = state_53359;
(statearr_53382[(10)] = inst_53299);

return statearr_53382;
})();
var statearr_53383_53424 = state_53359__$1;
(statearr_53383_53424[(2)] = inst_53301);

(statearr_53383_53424[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53360 === (3))){
var inst_53291 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_53359__$1 = state_53359;
if(cljs.core.truth_(inst_53291)){
var statearr_53384_53425 = state_53359__$1;
(statearr_53384_53425[(1)] = (13));

} else {
var statearr_53385_53426 = state_53359__$1;
(statearr_53385_53426[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53360 === (12))){
var inst_53287 = (state_53359[(2)]);
var state_53359__$1 = state_53359;
var statearr_53386_53427 = state_53359__$1;
(statearr_53386_53427[(2)] = inst_53287);

(statearr_53386_53427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53360 === (2))){
var inst_53274 = (state_53359[(8)]);
var inst_53274__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_53359__$1 = (function (){var statearr_53387 = state_53359;
(statearr_53387[(8)] = inst_53274__$1);

return statearr_53387;
})();
if(cljs.core.truth_(inst_53274__$1)){
var statearr_53388_53428 = state_53359__$1;
(statearr_53388_53428[(1)] = (5));

} else {
var statearr_53389_53429 = state_53359__$1;
(statearr_53389_53429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53360 === (23))){
var inst_53317 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_53359__$1 = state_53359;
if(cljs.core.truth_(inst_53317)){
var statearr_53390_53430 = state_53359__$1;
(statearr_53390_53430[(1)] = (25));

} else {
var statearr_53391_53431 = state_53359__$1;
(statearr_53391_53431[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53360 === (35))){
var state_53359__$1 = state_53359;
var statearr_53392_53432 = state_53359__$1;
(statearr_53392_53432[(2)] = null);

(statearr_53392_53432[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53360 === (19))){
var inst_53312 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_53359__$1 = state_53359;
if(cljs.core.truth_(inst_53312)){
var statearr_53393_53433 = state_53359__$1;
(statearr_53393_53433[(1)] = (22));

} else {
var statearr_53394_53434 = state_53359__$1;
(statearr_53394_53434[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53360 === (11))){
var inst_53283 = (state_53359[(2)]);
var state_53359__$1 = state_53359;
var statearr_53395_53435 = state_53359__$1;
(statearr_53395_53435[(2)] = inst_53283);

(statearr_53395_53435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53360 === (9))){
var inst_53285 = figwheel.client.heads_up.clear.call(null);
var state_53359__$1 = state_53359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53359__$1,(12),inst_53285);
} else {
if((state_val_53360 === (5))){
var inst_53276 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_53359__$1 = state_53359;
var statearr_53396_53436 = state_53359__$1;
(statearr_53396_53436[(2)] = inst_53276);

(statearr_53396_53436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53360 === (14))){
var inst_53303 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_53359__$1 = state_53359;
if(cljs.core.truth_(inst_53303)){
var statearr_53397_53437 = state_53359__$1;
(statearr_53397_53437[(1)] = (18));

} else {
var statearr_53398_53438 = state_53359__$1;
(statearr_53398_53438[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53360 === (26))){
var inst_53329 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_53359__$1 = state_53359;
if(cljs.core.truth_(inst_53329)){
var statearr_53399_53439 = state_53359__$1;
(statearr_53399_53439[(1)] = (30));

} else {
var statearr_53400_53440 = state_53359__$1;
(statearr_53400_53440[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53360 === (16))){
var inst_53295 = (state_53359[(2)]);
var inst_53296 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53297 = figwheel.client.heads_up.display_exception.call(null,inst_53296);
var state_53359__$1 = (function (){var statearr_53401 = state_53359;
(statearr_53401[(11)] = inst_53295);

return statearr_53401;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53359__$1,(17),inst_53297);
} else {
if((state_val_53360 === (30))){
var inst_53331 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53332 = figwheel.client.heads_up.display_warning.call(null,inst_53331);
var state_53359__$1 = state_53359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53359__$1,(33),inst_53332);
} else {
if((state_val_53360 === (10))){
var inst_53289 = (state_53359[(2)]);
var state_53359__$1 = state_53359;
var statearr_53402_53441 = state_53359__$1;
(statearr_53402_53441[(2)] = inst_53289);

(statearr_53402_53441[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53360 === (18))){
var inst_53305 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53306 = figwheel.client.heads_up.display_exception.call(null,inst_53305);
var state_53359__$1 = state_53359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53359__$1,(21),inst_53306);
} else {
if((state_val_53360 === (37))){
var inst_53342 = (state_53359[(2)]);
var state_53359__$1 = state_53359;
var statearr_53403_53442 = state_53359__$1;
(statearr_53403_53442[(2)] = inst_53342);

(statearr_53403_53442[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53360 === (8))){
var inst_53281 = figwheel.client.heads_up.flash_loaded.call(null);
var state_53359__$1 = state_53359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53359__$1,(11),inst_53281);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40014__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__39995__auto__,c__40014__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39996__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39996__auto____0 = (function (){
var statearr_53405 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53405[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39996__auto__);

(statearr_53405[(1)] = (1));

return statearr_53405;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39996__auto____1 = (function (state_53359){
while(true){
var result__39997__auto__ = switch__39995__auto__.call(null,state_53359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39997__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39996__auto__ = function(state_53359){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39996__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39996__auto____1.call(this,state_53359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39996__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39996__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39996__auto__;
})()
;})(switch__39995__auto__,c__40014__auto__,msg_hist,msg_names,msg))
})();
var state__40016__auto__ = (function (){var statearr_53406 = f__40015__auto__.call(null);
(statearr_53406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40014__auto__);

return statearr_53406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40016__auto__);
});})(c__40014__auto__,msg_hist,msg_names,msg))
);

return c__40014__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__40014__auto___53497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40014__auto___53497,ch){
return (function (){
var f__40015__auto__ = (function (){var switch__39995__auto__ = ((function (c__40014__auto___53497,ch){
return (function (state_53484){
var state_val_53485 = (state_53484[(1)]);
if((state_val_53485 === (1))){
var state_53484__$1 = state_53484;
var statearr_53486_53498 = state_53484__$1;
(statearr_53486_53498[(2)] = null);

(statearr_53486_53498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53485 === (2))){
var state_53484__$1 = state_53484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53484__$1,(4),ch);
} else {
if((state_val_53485 === (3))){
var inst_53482 = (state_53484[(2)]);
var state_53484__$1 = state_53484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53484__$1,inst_53482);
} else {
if((state_val_53485 === (4))){
var inst_53472 = (state_53484[(5)]);
var inst_53472__$1 = (state_53484[(2)]);
var state_53484__$1 = (function (){var statearr_53487 = state_53484;
(statearr_53487[(5)] = inst_53472__$1);

return statearr_53487;
})();
if(cljs.core.truth_(inst_53472__$1)){
var statearr_53488_53499 = state_53484__$1;
(statearr_53488_53499[(1)] = (5));

} else {
var statearr_53489_53500 = state_53484__$1;
(statearr_53489_53500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53485 === (5))){
var inst_53472 = (state_53484[(5)]);
var inst_53474 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_53472);
var state_53484__$1 = state_53484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53484__$1,(8),inst_53474);
} else {
if((state_val_53485 === (6))){
var state_53484__$1 = state_53484;
var statearr_53490_53501 = state_53484__$1;
(statearr_53490_53501[(2)] = null);

(statearr_53490_53501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53485 === (7))){
var inst_53480 = (state_53484[(2)]);
var state_53484__$1 = state_53484;
var statearr_53491_53502 = state_53484__$1;
(statearr_53491_53502[(2)] = inst_53480);

(statearr_53491_53502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53485 === (8))){
var inst_53476 = (state_53484[(2)]);
var state_53484__$1 = (function (){var statearr_53492 = state_53484;
(statearr_53492[(6)] = inst_53476);

return statearr_53492;
})();
var statearr_53493_53503 = state_53484__$1;
(statearr_53493_53503[(2)] = null);

(statearr_53493_53503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__40014__auto___53497,ch))
;
return ((function (switch__39995__auto__,c__40014__auto___53497,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__39996__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__39996__auto____0 = (function (){
var statearr_53495 = [null,null,null,null,null,null,null];
(statearr_53495[(0)] = figwheel$client$heads_up_plugin_$_state_machine__39996__auto__);

(statearr_53495[(1)] = (1));

return statearr_53495;
});
var figwheel$client$heads_up_plugin_$_state_machine__39996__auto____1 = (function (state_53484){
while(true){
var result__39997__auto__ = switch__39995__auto__.call(null,state_53484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39997__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__39996__auto__ = function(state_53484){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__39996__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__39996__auto____1.call(this,state_53484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__39996__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__39996__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__39996__auto__;
})()
;})(switch__39995__auto__,c__40014__auto___53497,ch))
})();
var state__40016__auto__ = (function (){var statearr_53496 = f__40015__auto__.call(null);
(statearr_53496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40014__auto___53497);

return statearr_53496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40016__auto__);
});})(c__40014__auto___53497,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__40014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40014__auto__){
return (function (){
var f__40015__auto__ = (function (){var switch__39995__auto__ = ((function (c__40014__auto__){
return (function (state_53520){
var state_val_53521 = (state_53520[(1)]);
if((state_val_53521 === (1))){
var inst_53515 = cljs.core.async.timeout.call(null,(3000));
var state_53520__$1 = state_53520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53520__$1,(2),inst_53515);
} else {
if((state_val_53521 === (2))){
var inst_53517 = (state_53520[(2)]);
var inst_53518 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_53520__$1 = (function (){var statearr_53522 = state_53520;
(statearr_53522[(5)] = inst_53517);

return statearr_53522;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53520__$1,inst_53518);
} else {
return null;
}
}
});})(c__40014__auto__))
;
return ((function (switch__39995__auto__,c__40014__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__39996__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__39996__auto____0 = (function (){
var statearr_53524 = [null,null,null,null,null,null];
(statearr_53524[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__39996__auto__);

(statearr_53524[(1)] = (1));

return statearr_53524;
});
var figwheel$client$enforce_project_plugin_$_state_machine__39996__auto____1 = (function (state_53520){
while(true){
var result__39997__auto__ = switch__39995__auto__.call(null,state_53520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39997__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__39996__auto__ = function(state_53520){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__39996__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__39996__auto____1.call(this,state_53520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__39996__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__39996__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__39996__auto__;
})()
;})(switch__39995__auto__,c__40014__auto__))
})();
var state__40016__auto__ = (function (){var statearr_53525 = f__40015__auto__.call(null);
(statearr_53525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40014__auto__);

return statearr_53525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40016__auto__);
});})(c__40014__auto__))
);

return c__40014__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__40014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40014__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__40015__auto__ = (function (){var switch__39995__auto__ = ((function (c__40014__auto__,figwheel_version,temp__4657__auto__){
return (function (state_53544){
var state_val_53545 = (state_53544[(1)]);
if((state_val_53545 === (1))){
var inst_53538 = cljs.core.async.timeout.call(null,(2000));
var state_53544__$1 = state_53544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53544__$1,(2),inst_53538);
} else {
if((state_val_53545 === (2))){
var inst_53540 = (state_53544[(2)]);
var inst_53541 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_53542 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_53541);
var state_53544__$1 = (function (){var statearr_53546 = state_53544;
(statearr_53546[(5)] = inst_53540);

return statearr_53546;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53544__$1,inst_53542);
} else {
return null;
}
}
});})(c__40014__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__39995__auto__,c__40014__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39996__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39996__auto____0 = (function (){
var statearr_53548 = [null,null,null,null,null,null];
(statearr_53548[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39996__auto__);

(statearr_53548[(1)] = (1));

return statearr_53548;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39996__auto____1 = (function (state_53544){
while(true){
var result__39997__auto__ = switch__39995__auto__.call(null,state_53544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39997__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39996__auto__ = function(state_53544){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39996__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39996__auto____1.call(this,state_53544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39996__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39996__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39996__auto__;
})()
;})(switch__39995__auto__,c__40014__auto__,figwheel_version,temp__4657__auto__))
})();
var state__40016__auto__ = (function (){var statearr_53549 = f__40015__auto__.call(null);
(statearr_53549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40014__auto__);

return statearr_53549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40016__auto__);
});})(c__40014__auto__,figwheel_version,temp__4657__auto__))
);

return c__40014__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__53550){
var map__53554 = p__53550;
var map__53554__$1 = ((((!((map__53554 == null)))?((((map__53554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53554):map__53554);
var file = cljs.core.get.call(null,map__53554__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__53554__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__53554__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__53556 = "";
var G__53556__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__53556),cljs.core.str("file "),cljs.core.str(file)].join(''):G__53556);
var G__53556__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__53556__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__53556__$1);
if(cljs.core.truth_((function (){var and__37066__auto__ = line;
if(cljs.core.truth_(and__37066__auto__)){
return column;
} else {
return and__37066__auto__;
}
})())){
return [cljs.core.str(G__53556__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__53556__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__53557){
var map__53564 = p__53557;
var map__53564__$1 = ((((!((map__53564 == null)))?((((map__53564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53564):map__53564);
var ed = map__53564__$1;
var formatted_exception = cljs.core.get.call(null,map__53564__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__53564__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__53564__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__53566_53570 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__53567_53571 = null;
var count__53568_53572 = (0);
var i__53569_53573 = (0);
while(true){
if((i__53569_53573 < count__53568_53572)){
var msg_53574 = cljs.core._nth.call(null,chunk__53567_53571,i__53569_53573);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_53574);

var G__53575 = seq__53566_53570;
var G__53576 = chunk__53567_53571;
var G__53577 = count__53568_53572;
var G__53578 = (i__53569_53573 + (1));
seq__53566_53570 = G__53575;
chunk__53567_53571 = G__53576;
count__53568_53572 = G__53577;
i__53569_53573 = G__53578;
continue;
} else {
var temp__4657__auto___53579 = cljs.core.seq.call(null,seq__53566_53570);
if(temp__4657__auto___53579){
var seq__53566_53580__$1 = temp__4657__auto___53579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53566_53580__$1)){
var c__37889__auto___53581 = cljs.core.chunk_first.call(null,seq__53566_53580__$1);
var G__53582 = cljs.core.chunk_rest.call(null,seq__53566_53580__$1);
var G__53583 = c__37889__auto___53581;
var G__53584 = cljs.core.count.call(null,c__37889__auto___53581);
var G__53585 = (0);
seq__53566_53570 = G__53582;
chunk__53567_53571 = G__53583;
count__53568_53572 = G__53584;
i__53569_53573 = G__53585;
continue;
} else {
var msg_53586 = cljs.core.first.call(null,seq__53566_53580__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_53586);

var G__53587 = cljs.core.next.call(null,seq__53566_53580__$1);
var G__53588 = null;
var G__53589 = (0);
var G__53590 = (0);
seq__53566_53570 = G__53587;
chunk__53567_53571 = G__53588;
count__53568_53572 = G__53589;
i__53569_53573 = G__53590;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__53591){
var map__53594 = p__53591;
var map__53594__$1 = ((((!((map__53594 == null)))?((((map__53594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53594):map__53594);
var w = map__53594__$1;
var message = cljs.core.get.call(null,map__53594__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__37066__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__37066__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__37066__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__53606 = cljs.core.seq.call(null,plugins);
var chunk__53607 = null;
var count__53608 = (0);
var i__53609 = (0);
while(true){
if((i__53609 < count__53608)){
var vec__53610 = cljs.core._nth.call(null,chunk__53607,i__53609);
var k = cljs.core.nth.call(null,vec__53610,(0),null);
var plugin = cljs.core.nth.call(null,vec__53610,(1),null);
if(cljs.core.truth_(plugin)){
var pl_53616 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__53606,chunk__53607,count__53608,i__53609,pl_53616,vec__53610,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_53616.call(null,msg_hist);
});})(seq__53606,chunk__53607,count__53608,i__53609,pl_53616,vec__53610,k,plugin))
);
} else {
}

var G__53617 = seq__53606;
var G__53618 = chunk__53607;
var G__53619 = count__53608;
var G__53620 = (i__53609 + (1));
seq__53606 = G__53617;
chunk__53607 = G__53618;
count__53608 = G__53619;
i__53609 = G__53620;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__53606);
if(temp__4657__auto__){
var seq__53606__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53606__$1)){
var c__37889__auto__ = cljs.core.chunk_first.call(null,seq__53606__$1);
var G__53621 = cljs.core.chunk_rest.call(null,seq__53606__$1);
var G__53622 = c__37889__auto__;
var G__53623 = cljs.core.count.call(null,c__37889__auto__);
var G__53624 = (0);
seq__53606 = G__53621;
chunk__53607 = G__53622;
count__53608 = G__53623;
i__53609 = G__53624;
continue;
} else {
var vec__53613 = cljs.core.first.call(null,seq__53606__$1);
var k = cljs.core.nth.call(null,vec__53613,(0),null);
var plugin = cljs.core.nth.call(null,vec__53613,(1),null);
if(cljs.core.truth_(plugin)){
var pl_53625 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__53606,chunk__53607,count__53608,i__53609,pl_53625,vec__53613,k,plugin,seq__53606__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_53625.call(null,msg_hist);
});})(seq__53606,chunk__53607,count__53608,i__53609,pl_53625,vec__53613,k,plugin,seq__53606__$1,temp__4657__auto__))
);
} else {
}

var G__53626 = cljs.core.next.call(null,seq__53606__$1);
var G__53627 = null;
var G__53628 = (0);
var G__53629 = (0);
seq__53606 = G__53626;
chunk__53607 = G__53627;
count__53608 = G__53628;
i__53609 = G__53629;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args53630 = [];
var len__38153__auto___53637 = arguments.length;
var i__38154__auto___53638 = (0);
while(true){
if((i__38154__auto___53638 < len__38153__auto___53637)){
args53630.push((arguments[i__38154__auto___53638]));

var G__53639 = (i__38154__auto___53638 + (1));
i__38154__auto___53638 = G__53639;
continue;
} else {
}
break;
}

var G__53632 = args53630.length;
switch (G__53632) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53630.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__53633_53641 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__53634_53642 = null;
var count__53635_53643 = (0);
var i__53636_53644 = (0);
while(true){
if((i__53636_53644 < count__53635_53643)){
var msg_53645 = cljs.core._nth.call(null,chunk__53634_53642,i__53636_53644);
figwheel.client.socket.handle_incoming_message.call(null,msg_53645);

var G__53646 = seq__53633_53641;
var G__53647 = chunk__53634_53642;
var G__53648 = count__53635_53643;
var G__53649 = (i__53636_53644 + (1));
seq__53633_53641 = G__53646;
chunk__53634_53642 = G__53647;
count__53635_53643 = G__53648;
i__53636_53644 = G__53649;
continue;
} else {
var temp__4657__auto___53650 = cljs.core.seq.call(null,seq__53633_53641);
if(temp__4657__auto___53650){
var seq__53633_53651__$1 = temp__4657__auto___53650;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53633_53651__$1)){
var c__37889__auto___53652 = cljs.core.chunk_first.call(null,seq__53633_53651__$1);
var G__53653 = cljs.core.chunk_rest.call(null,seq__53633_53651__$1);
var G__53654 = c__37889__auto___53652;
var G__53655 = cljs.core.count.call(null,c__37889__auto___53652);
var G__53656 = (0);
seq__53633_53641 = G__53653;
chunk__53634_53642 = G__53654;
count__53635_53643 = G__53655;
i__53636_53644 = G__53656;
continue;
} else {
var msg_53657 = cljs.core.first.call(null,seq__53633_53651__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_53657);

var G__53658 = cljs.core.next.call(null,seq__53633_53651__$1);
var G__53659 = null;
var G__53660 = (0);
var G__53661 = (0);
seq__53633_53641 = G__53658;
chunk__53634_53642 = G__53659;
count__53635_53643 = G__53660;
i__53636_53644 = G__53661;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__38160__auto__ = [];
var len__38153__auto___53666 = arguments.length;
var i__38154__auto___53667 = (0);
while(true){
if((i__38154__auto___53667 < len__38153__auto___53666)){
args__38160__auto__.push((arguments[i__38154__auto___53667]));

var G__53668 = (i__38154__auto___53667 + (1));
i__38154__auto___53667 = G__53668;
continue;
} else {
}
break;
}

var argseq__38161__auto__ = ((((0) < args__38160__auto__.length))?(new cljs.core.IndexedSeq(args__38160__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__38161__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__53663){
var map__53664 = p__53663;
var map__53664__$1 = ((((!((map__53664 == null)))?((((map__53664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53664):map__53664);
var opts = map__53664__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq53662){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53662));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e53670){if((e53670 instanceof Error)){
var e = e53670;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e53670;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__53674){
var map__53675 = p__53674;
var map__53675__$1 = ((((!((map__53675 == null)))?((((map__53675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53675):map__53675);
var msg_name = cljs.core.get.call(null,map__53675__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map