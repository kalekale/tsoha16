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
var args47519 = [];
var len__38042__auto___47522 = arguments.length;
var i__38043__auto___47523 = (0);
while(true){
if((i__38043__auto___47523 < len__38042__auto___47522)){
args47519.push((arguments[i__38043__auto___47523]));

var G__47524 = (i__38043__auto___47523 + (1));
i__38043__auto___47523 = G__47524;
continue;
} else {
}
break;
}

var G__47521 = args47519.length;
switch (G__47521) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47519.length)].join('')));

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
var args__38049__auto__ = [];
var len__38042__auto___47527 = arguments.length;
var i__38043__auto___47528 = (0);
while(true){
if((i__38043__auto___47528 < len__38042__auto___47527)){
args__38049__auto__.push((arguments[i__38043__auto___47528]));

var G__47529 = (i__38043__auto___47528 + (1));
i__38043__auto___47528 = G__47529;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq47526){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47526));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__38049__auto__ = [];
var len__38042__auto___47531 = arguments.length;
var i__38043__auto___47532 = (0);
while(true){
if((i__38043__auto___47532 < len__38042__auto___47531)){
args__38049__auto__.push((arguments[i__38043__auto___47532]));

var G__47533 = (i__38043__auto___47532 + (1));
i__38043__auto___47532 = G__47533;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq47530){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47530));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__47534 = cljs.core._EQ_;
var expr__47535 = (function (){var or__36967__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e47538){if((e47538 instanceof Error)){
var e = e47538;
return false;
} else {
throw e47538;

}
}})();
if(cljs.core.truth_(or__36967__auto__)){
return or__36967__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__47534.call(null,"true",expr__47535))){
return true;
} else {
if(cljs.core.truth_(pred__47534.call(null,"false",expr__47535))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__47535)].join('')));
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
}catch (e47540){if((e47540 instanceof Error)){
var e = e47540;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e47540;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__47541){
var map__47544 = p__47541;
var map__47544__$1 = ((((!((map__47544 == null)))?((((map__47544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47544):map__47544);
var message = cljs.core.get.call(null,map__47544__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__47544__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__36967__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__36967__auto__)){
return or__36967__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__36955__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__36955__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__36955__auto__;
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
var c__40785__auto___47698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40785__auto___47698,ch){
return (function (){
var f__40786__auto__ = (function (){var switch__40681__auto__ = ((function (c__40785__auto___47698,ch){
return (function (state_47671){
var state_val_47672 = (state_47671[(1)]);
if((state_val_47672 === (7))){
var inst_47667 = (state_47671[(2)]);
var state_47671__$1 = state_47671;
var statearr_47673_47699 = state_47671__$1;
(statearr_47673_47699[(2)] = inst_47667);

(statearr_47673_47699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47672 === (1))){
var state_47671__$1 = state_47671;
var statearr_47674_47700 = state_47671__$1;
(statearr_47674_47700[(2)] = null);

(statearr_47674_47700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47672 === (4))){
var inst_47624 = (state_47671[(5)]);
var inst_47624__$1 = (state_47671[(2)]);
var state_47671__$1 = (function (){var statearr_47675 = state_47671;
(statearr_47675[(5)] = inst_47624__$1);

return statearr_47675;
})();
if(cljs.core.truth_(inst_47624__$1)){
var statearr_47676_47701 = state_47671__$1;
(statearr_47676_47701[(1)] = (5));

} else {
var statearr_47677_47702 = state_47671__$1;
(statearr_47677_47702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47672 === (15))){
var inst_47631 = (state_47671[(6)]);
var inst_47646 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_47631);
var inst_47647 = cljs.core.first.call(null,inst_47646);
var inst_47648 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_47647);
var inst_47649 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_47648)].join('');
var inst_47650 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_47649);
var state_47671__$1 = state_47671;
var statearr_47678_47703 = state_47671__$1;
(statearr_47678_47703[(2)] = inst_47650);

(statearr_47678_47703[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47672 === (13))){
var inst_47655 = (state_47671[(2)]);
var state_47671__$1 = state_47671;
var statearr_47679_47704 = state_47671__$1;
(statearr_47679_47704[(2)] = inst_47655);

(statearr_47679_47704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47672 === (6))){
var state_47671__$1 = state_47671;
var statearr_47680_47705 = state_47671__$1;
(statearr_47680_47705[(2)] = null);

(statearr_47680_47705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47672 === (17))){
var inst_47653 = (state_47671[(2)]);
var state_47671__$1 = state_47671;
var statearr_47681_47706 = state_47671__$1;
(statearr_47681_47706[(2)] = inst_47653);

(statearr_47681_47706[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47672 === (3))){
var inst_47669 = (state_47671[(2)]);
var state_47671__$1 = state_47671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47671__$1,inst_47669);
} else {
if((state_val_47672 === (12))){
var inst_47630 = (state_47671[(7)]);
var inst_47644 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_47630,opts);
var state_47671__$1 = state_47671;
if(cljs.core.truth_(inst_47644)){
var statearr_47682_47707 = state_47671__$1;
(statearr_47682_47707[(1)] = (15));

} else {
var statearr_47683_47708 = state_47671__$1;
(statearr_47683_47708[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47672 === (2))){
var state_47671__$1 = state_47671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47671__$1,(4),ch);
} else {
if((state_val_47672 === (11))){
var inst_47631 = (state_47671[(6)]);
var inst_47636 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47637 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_47631);
var inst_47638 = cljs.core.async.timeout.call(null,(1000));
var inst_47639 = [inst_47637,inst_47638];
var inst_47640 = (new cljs.core.PersistentVector(null,2,(5),inst_47636,inst_47639,null));
var state_47671__$1 = state_47671;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_47671__$1,(14),inst_47640);
} else {
if((state_val_47672 === (9))){
var inst_47631 = (state_47671[(6)]);
var inst_47657 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_47658 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_47631);
var inst_47659 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_47658);
var inst_47660 = [cljs.core.str("Not loading: "),cljs.core.str(inst_47659)].join('');
var inst_47661 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_47660);
var state_47671__$1 = (function (){var statearr_47684 = state_47671;
(statearr_47684[(8)] = inst_47657);

return statearr_47684;
})();
var statearr_47685_47709 = state_47671__$1;
(statearr_47685_47709[(2)] = inst_47661);

(statearr_47685_47709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47672 === (5))){
var inst_47624 = (state_47671[(5)]);
var inst_47626 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_47627 = (new cljs.core.PersistentArrayMap(null,2,inst_47626,null));
var inst_47628 = (new cljs.core.PersistentHashSet(null,inst_47627,null));
var inst_47629 = figwheel.client.focus_msgs.call(null,inst_47628,inst_47624);
var inst_47630 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_47629);
var inst_47631 = cljs.core.first.call(null,inst_47629);
var inst_47632 = figwheel.client.autoload_QMARK_.call(null);
var state_47671__$1 = (function (){var statearr_47686 = state_47671;
(statearr_47686[(6)] = inst_47631);

(statearr_47686[(7)] = inst_47630);

return statearr_47686;
})();
if(cljs.core.truth_(inst_47632)){
var statearr_47687_47710 = state_47671__$1;
(statearr_47687_47710[(1)] = (8));

} else {
var statearr_47688_47711 = state_47671__$1;
(statearr_47688_47711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47672 === (14))){
var inst_47642 = (state_47671[(2)]);
var state_47671__$1 = state_47671;
var statearr_47689_47712 = state_47671__$1;
(statearr_47689_47712[(2)] = inst_47642);

(statearr_47689_47712[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47672 === (16))){
var state_47671__$1 = state_47671;
var statearr_47690_47713 = state_47671__$1;
(statearr_47690_47713[(2)] = null);

(statearr_47690_47713[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47672 === (10))){
var inst_47663 = (state_47671[(2)]);
var state_47671__$1 = (function (){var statearr_47691 = state_47671;
(statearr_47691[(9)] = inst_47663);

return statearr_47691;
})();
var statearr_47692_47714 = state_47671__$1;
(statearr_47692_47714[(2)] = null);

(statearr_47692_47714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47672 === (8))){
var inst_47630 = (state_47671[(7)]);
var inst_47634 = figwheel.client.reload_file_state_QMARK_.call(null,inst_47630,opts);
var state_47671__$1 = state_47671;
if(cljs.core.truth_(inst_47634)){
var statearr_47693_47715 = state_47671__$1;
(statearr_47693_47715[(1)] = (11));

} else {
var statearr_47694_47716 = state_47671__$1;
(statearr_47694_47716[(1)] = (12));

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
});})(c__40785__auto___47698,ch))
;
return ((function (switch__40681__auto__,c__40785__auto___47698,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__40682__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__40682__auto____0 = (function (){
var statearr_47696 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47696[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__40682__auto__);

(statearr_47696[(1)] = (1));

return statearr_47696;
});
var figwheel$client$file_reloader_plugin_$_state_machine__40682__auto____1 = (function (state_47671){
while(true){
var result__40683__auto__ = switch__40681__auto__.call(null,state_47671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40683__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__40682__auto__ = function(state_47671){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__40682__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__40682__auto____1.call(this,state_47671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__40682__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__40682__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__40682__auto__;
})()
;})(switch__40681__auto__,c__40785__auto___47698,ch))
})();
var state__40787__auto__ = (function (){var statearr_47697 = f__40786__auto__.call(null);
(statearr_47697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40785__auto___47698);

return statearr_47697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40787__auto__);
});})(c__40785__auto___47698,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__47717_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__47717_SHARP_));
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
var base_path_47720 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_47720){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e47719){if((e47719 instanceof Error)){
var e = e47719;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_47720], null));
} else {
var e = e47719;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_47720))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__47721){
var map__47730 = p__47721;
var map__47730__$1 = ((((!((map__47730 == null)))?((((map__47730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47730):map__47730);
var opts = map__47730__$1;
var build_id = cljs.core.get.call(null,map__47730__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__47730,map__47730__$1,opts,build_id){
return (function (p__47732){
var vec__47733 = p__47732;
var seq__47734 = cljs.core.seq.call(null,vec__47733);
var first__47735 = cljs.core.first.call(null,seq__47734);
var seq__47734__$1 = cljs.core.next.call(null,seq__47734);
var map__47736 = first__47735;
var map__47736__$1 = ((((!((map__47736 == null)))?((((map__47736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47736):map__47736);
var msg = map__47736__$1;
var msg_name = cljs.core.get.call(null,map__47736__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47734__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__47733,seq__47734,first__47735,seq__47734__$1,map__47736,map__47736__$1,msg,msg_name,_,map__47730,map__47730__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__47733,seq__47734,first__47735,seq__47734__$1,map__47736,map__47736__$1,msg,msg_name,_,map__47730,map__47730__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__47730,map__47730__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__47744){
var vec__47745 = p__47744;
var seq__47746 = cljs.core.seq.call(null,vec__47745);
var first__47747 = cljs.core.first.call(null,seq__47746);
var seq__47746__$1 = cljs.core.next.call(null,seq__47746);
var map__47748 = first__47747;
var map__47748__$1 = ((((!((map__47748 == null)))?((((map__47748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47748):map__47748);
var msg = map__47748__$1;
var msg_name = cljs.core.get.call(null,map__47748__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47746__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__47750){
var map__47762 = p__47750;
var map__47762__$1 = ((((!((map__47762 == null)))?((((map__47762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47762):map__47762);
var on_compile_warning = cljs.core.get.call(null,map__47762__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__47762__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__47762,map__47762__$1,on_compile_warning,on_compile_fail){
return (function (p__47764){
var vec__47765 = p__47764;
var seq__47766 = cljs.core.seq.call(null,vec__47765);
var first__47767 = cljs.core.first.call(null,seq__47766);
var seq__47766__$1 = cljs.core.next.call(null,seq__47766);
var map__47768 = first__47767;
var map__47768__$1 = ((((!((map__47768 == null)))?((((map__47768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47768):map__47768);
var msg = map__47768__$1;
var msg_name = cljs.core.get.call(null,map__47768__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47766__$1;
var pred__47770 = cljs.core._EQ_;
var expr__47771 = msg_name;
if(cljs.core.truth_(pred__47770.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__47771))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__47770.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__47771))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__47762,map__47762__$1,on_compile_warning,on_compile_fail))
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
var c__40785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40785__auto__,msg_hist,msg_names,msg){
return (function (){
var f__40786__auto__ = (function (){var switch__40681__auto__ = ((function (c__40785__auto__,msg_hist,msg_names,msg){
return (function (state_47995){
var state_val_47996 = (state_47995[(1)]);
if((state_val_47996 === (7))){
var inst_47915 = (state_47995[(2)]);
var state_47995__$1 = state_47995;
if(cljs.core.truth_(inst_47915)){
var statearr_47997_48043 = state_47995__$1;
(statearr_47997_48043[(1)] = (8));

} else {
var statearr_47998_48044 = state_47995__$1;
(statearr_47998_48044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47996 === (20))){
var inst_47989 = (state_47995[(2)]);
var state_47995__$1 = state_47995;
var statearr_47999_48045 = state_47995__$1;
(statearr_47999_48045[(2)] = inst_47989);

(statearr_47999_48045[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47996 === (27))){
var inst_47985 = (state_47995[(2)]);
var state_47995__$1 = state_47995;
var statearr_48000_48046 = state_47995__$1;
(statearr_48000_48046[(2)] = inst_47985);

(statearr_48000_48046[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47996 === (1))){
var inst_47908 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_47995__$1 = state_47995;
if(cljs.core.truth_(inst_47908)){
var statearr_48001_48047 = state_47995__$1;
(statearr_48001_48047[(1)] = (2));

} else {
var statearr_48002_48048 = state_47995__$1;
(statearr_48002_48048[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47996 === (24))){
var inst_47987 = (state_47995[(2)]);
var state_47995__$1 = state_47995;
var statearr_48003_48049 = state_47995__$1;
(statearr_48003_48049[(2)] = inst_47987);

(statearr_48003_48049[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47996 === (4))){
var inst_47993 = (state_47995[(2)]);
var state_47995__$1 = state_47995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47995__$1,inst_47993);
} else {
if((state_val_47996 === (15))){
var inst_47991 = (state_47995[(2)]);
var state_47995__$1 = state_47995;
var statearr_48004_48050 = state_47995__$1;
(statearr_48004_48050[(2)] = inst_47991);

(statearr_48004_48050[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47996 === (21))){
var inst_47944 = (state_47995[(2)]);
var inst_47945 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47946 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47945);
var state_47995__$1 = (function (){var statearr_48005 = state_47995;
(statearr_48005[(5)] = inst_47944);

return statearr_48005;
})();
var statearr_48006_48051 = state_47995__$1;
(statearr_48006_48051[(2)] = inst_47946);

(statearr_48006_48051[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47996 === (31))){
var inst_47974 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_47995__$1 = state_47995;
if(cljs.core.truth_(inst_47974)){
var statearr_48007_48052 = state_47995__$1;
(statearr_48007_48052[(1)] = (34));

} else {
var statearr_48008_48053 = state_47995__$1;
(statearr_48008_48053[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47996 === (32))){
var inst_47983 = (state_47995[(2)]);
var state_47995__$1 = state_47995;
var statearr_48009_48054 = state_47995__$1;
(statearr_48009_48054[(2)] = inst_47983);

(statearr_48009_48054[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47996 === (33))){
var inst_47970 = (state_47995[(2)]);
var inst_47971 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47972 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47971);
var state_47995__$1 = (function (){var statearr_48010 = state_47995;
(statearr_48010[(6)] = inst_47970);

return statearr_48010;
})();
var statearr_48011_48055 = state_47995__$1;
(statearr_48011_48055[(2)] = inst_47972);

(statearr_48011_48055[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47996 === (13))){
var inst_47929 = figwheel.client.heads_up.clear.call(null);
var state_47995__$1 = state_47995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47995__$1,(16),inst_47929);
} else {
if((state_val_47996 === (22))){
var inst_47950 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47951 = figwheel.client.heads_up.append_warning_message.call(null,inst_47950);
var state_47995__$1 = state_47995;
var statearr_48012_48056 = state_47995__$1;
(statearr_48012_48056[(2)] = inst_47951);

(statearr_48012_48056[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47996 === (36))){
var inst_47981 = (state_47995[(2)]);
var state_47995__$1 = state_47995;
var statearr_48013_48057 = state_47995__$1;
(statearr_48013_48057[(2)] = inst_47981);

(statearr_48013_48057[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47996 === (29))){
var inst_47961 = (state_47995[(2)]);
var inst_47962 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47963 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47962);
var state_47995__$1 = (function (){var statearr_48014 = state_47995;
(statearr_48014[(7)] = inst_47961);

return statearr_48014;
})();
var statearr_48015_48058 = state_47995__$1;
(statearr_48015_48058[(2)] = inst_47963);

(statearr_48015_48058[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47996 === (6))){
var inst_47910 = (state_47995[(8)]);
var state_47995__$1 = state_47995;
var statearr_48016_48059 = state_47995__$1;
(statearr_48016_48059[(2)] = inst_47910);

(statearr_48016_48059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47996 === (28))){
var inst_47957 = (state_47995[(2)]);
var inst_47958 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47959 = figwheel.client.heads_up.display_warning.call(null,inst_47958);
var state_47995__$1 = (function (){var statearr_48017 = state_47995;
(statearr_48017[(9)] = inst_47957);

return statearr_48017;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47995__$1,(29),inst_47959);
} else {
if((state_val_47996 === (25))){
var inst_47955 = figwheel.client.heads_up.clear.call(null);
var state_47995__$1 = state_47995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47995__$1,(28),inst_47955);
} else {
if((state_val_47996 === (34))){
var inst_47976 = figwheel.client.heads_up.flash_loaded.call(null);
var state_47995__$1 = state_47995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47995__$1,(37),inst_47976);
} else {
if((state_val_47996 === (17))){
var inst_47935 = (state_47995[(2)]);
var inst_47936 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47937 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47936);
var state_47995__$1 = (function (){var statearr_48018 = state_47995;
(statearr_48018[(10)] = inst_47935);

return statearr_48018;
})();
var statearr_48019_48060 = state_47995__$1;
(statearr_48019_48060[(2)] = inst_47937);

(statearr_48019_48060[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47996 === (3))){
var inst_47927 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_47995__$1 = state_47995;
if(cljs.core.truth_(inst_47927)){
var statearr_48020_48061 = state_47995__$1;
(statearr_48020_48061[(1)] = (13));

} else {
var statearr_48021_48062 = state_47995__$1;
(statearr_48021_48062[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47996 === (12))){
var inst_47923 = (state_47995[(2)]);
var state_47995__$1 = state_47995;
var statearr_48022_48063 = state_47995__$1;
(statearr_48022_48063[(2)] = inst_47923);

(statearr_48022_48063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47996 === (2))){
var inst_47910 = (state_47995[(8)]);
var inst_47910__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_47995__$1 = (function (){var statearr_48023 = state_47995;
(statearr_48023[(8)] = inst_47910__$1);

return statearr_48023;
})();
if(cljs.core.truth_(inst_47910__$1)){
var statearr_48024_48064 = state_47995__$1;
(statearr_48024_48064[(1)] = (5));

} else {
var statearr_48025_48065 = state_47995__$1;
(statearr_48025_48065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47996 === (23))){
var inst_47953 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_47995__$1 = state_47995;
if(cljs.core.truth_(inst_47953)){
var statearr_48026_48066 = state_47995__$1;
(statearr_48026_48066[(1)] = (25));

} else {
var statearr_48027_48067 = state_47995__$1;
(statearr_48027_48067[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47996 === (35))){
var state_47995__$1 = state_47995;
var statearr_48028_48068 = state_47995__$1;
(statearr_48028_48068[(2)] = null);

(statearr_48028_48068[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47996 === (19))){
var inst_47948 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_47995__$1 = state_47995;
if(cljs.core.truth_(inst_47948)){
var statearr_48029_48069 = state_47995__$1;
(statearr_48029_48069[(1)] = (22));

} else {
var statearr_48030_48070 = state_47995__$1;
(statearr_48030_48070[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47996 === (11))){
var inst_47919 = (state_47995[(2)]);
var state_47995__$1 = state_47995;
var statearr_48031_48071 = state_47995__$1;
(statearr_48031_48071[(2)] = inst_47919);

(statearr_48031_48071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47996 === (9))){
var inst_47921 = figwheel.client.heads_up.clear.call(null);
var state_47995__$1 = state_47995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47995__$1,(12),inst_47921);
} else {
if((state_val_47996 === (5))){
var inst_47912 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_47995__$1 = state_47995;
var statearr_48032_48072 = state_47995__$1;
(statearr_48032_48072[(2)] = inst_47912);

(statearr_48032_48072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47996 === (14))){
var inst_47939 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_47995__$1 = state_47995;
if(cljs.core.truth_(inst_47939)){
var statearr_48033_48073 = state_47995__$1;
(statearr_48033_48073[(1)] = (18));

} else {
var statearr_48034_48074 = state_47995__$1;
(statearr_48034_48074[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47996 === (26))){
var inst_47965 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_47995__$1 = state_47995;
if(cljs.core.truth_(inst_47965)){
var statearr_48035_48075 = state_47995__$1;
(statearr_48035_48075[(1)] = (30));

} else {
var statearr_48036_48076 = state_47995__$1;
(statearr_48036_48076[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47996 === (16))){
var inst_47931 = (state_47995[(2)]);
var inst_47932 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47933 = figwheel.client.heads_up.display_exception.call(null,inst_47932);
var state_47995__$1 = (function (){var statearr_48037 = state_47995;
(statearr_48037[(11)] = inst_47931);

return statearr_48037;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47995__$1,(17),inst_47933);
} else {
if((state_val_47996 === (30))){
var inst_47967 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47968 = figwheel.client.heads_up.display_warning.call(null,inst_47967);
var state_47995__$1 = state_47995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47995__$1,(33),inst_47968);
} else {
if((state_val_47996 === (10))){
var inst_47925 = (state_47995[(2)]);
var state_47995__$1 = state_47995;
var statearr_48038_48077 = state_47995__$1;
(statearr_48038_48077[(2)] = inst_47925);

(statearr_48038_48077[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47996 === (18))){
var inst_47941 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47942 = figwheel.client.heads_up.display_exception.call(null,inst_47941);
var state_47995__$1 = state_47995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47995__$1,(21),inst_47942);
} else {
if((state_val_47996 === (37))){
var inst_47978 = (state_47995[(2)]);
var state_47995__$1 = state_47995;
var statearr_48039_48078 = state_47995__$1;
(statearr_48039_48078[(2)] = inst_47978);

(statearr_48039_48078[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47996 === (8))){
var inst_47917 = figwheel.client.heads_up.flash_loaded.call(null);
var state_47995__$1 = state_47995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47995__$1,(11),inst_47917);
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
});})(c__40785__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__40681__auto__,c__40785__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40682__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40682__auto____0 = (function (){
var statearr_48041 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48041[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40682__auto__);

(statearr_48041[(1)] = (1));

return statearr_48041;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40682__auto____1 = (function (state_47995){
while(true){
var result__40683__auto__ = switch__40681__auto__.call(null,state_47995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40683__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40682__auto__ = function(state_47995){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40682__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40682__auto____1.call(this,state_47995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40682__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40682__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40682__auto__;
})()
;})(switch__40681__auto__,c__40785__auto__,msg_hist,msg_names,msg))
})();
var state__40787__auto__ = (function (){var statearr_48042 = f__40786__auto__.call(null);
(statearr_48042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40785__auto__);

return statearr_48042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40787__auto__);
});})(c__40785__auto__,msg_hist,msg_names,msg))
);

return c__40785__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__40785__auto___48133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40785__auto___48133,ch){
return (function (){
var f__40786__auto__ = (function (){var switch__40681__auto__ = ((function (c__40785__auto___48133,ch){
return (function (state_48120){
var state_val_48121 = (state_48120[(1)]);
if((state_val_48121 === (1))){
var state_48120__$1 = state_48120;
var statearr_48122_48134 = state_48120__$1;
(statearr_48122_48134[(2)] = null);

(statearr_48122_48134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48121 === (2))){
var state_48120__$1 = state_48120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48120__$1,(4),ch);
} else {
if((state_val_48121 === (3))){
var inst_48118 = (state_48120[(2)]);
var state_48120__$1 = state_48120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48120__$1,inst_48118);
} else {
if((state_val_48121 === (4))){
var inst_48108 = (state_48120[(5)]);
var inst_48108__$1 = (state_48120[(2)]);
var state_48120__$1 = (function (){var statearr_48123 = state_48120;
(statearr_48123[(5)] = inst_48108__$1);

return statearr_48123;
})();
if(cljs.core.truth_(inst_48108__$1)){
var statearr_48124_48135 = state_48120__$1;
(statearr_48124_48135[(1)] = (5));

} else {
var statearr_48125_48136 = state_48120__$1;
(statearr_48125_48136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48121 === (5))){
var inst_48108 = (state_48120[(5)]);
var inst_48110 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_48108);
var state_48120__$1 = state_48120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48120__$1,(8),inst_48110);
} else {
if((state_val_48121 === (6))){
var state_48120__$1 = state_48120;
var statearr_48126_48137 = state_48120__$1;
(statearr_48126_48137[(2)] = null);

(statearr_48126_48137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48121 === (7))){
var inst_48116 = (state_48120[(2)]);
var state_48120__$1 = state_48120;
var statearr_48127_48138 = state_48120__$1;
(statearr_48127_48138[(2)] = inst_48116);

(statearr_48127_48138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48121 === (8))){
var inst_48112 = (state_48120[(2)]);
var state_48120__$1 = (function (){var statearr_48128 = state_48120;
(statearr_48128[(6)] = inst_48112);

return statearr_48128;
})();
var statearr_48129_48139 = state_48120__$1;
(statearr_48129_48139[(2)] = null);

(statearr_48129_48139[(1)] = (2));


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
});})(c__40785__auto___48133,ch))
;
return ((function (switch__40681__auto__,c__40785__auto___48133,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__40682__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__40682__auto____0 = (function (){
var statearr_48131 = [null,null,null,null,null,null,null];
(statearr_48131[(0)] = figwheel$client$heads_up_plugin_$_state_machine__40682__auto__);

(statearr_48131[(1)] = (1));

return statearr_48131;
});
var figwheel$client$heads_up_plugin_$_state_machine__40682__auto____1 = (function (state_48120){
while(true){
var result__40683__auto__ = switch__40681__auto__.call(null,state_48120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40683__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__40682__auto__ = function(state_48120){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__40682__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__40682__auto____1.call(this,state_48120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__40682__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__40682__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__40682__auto__;
})()
;})(switch__40681__auto__,c__40785__auto___48133,ch))
})();
var state__40787__auto__ = (function (){var statearr_48132 = f__40786__auto__.call(null);
(statearr_48132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40785__auto___48133);

return statearr_48132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40787__auto__);
});})(c__40785__auto___48133,ch))
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
var c__40785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40785__auto__){
return (function (){
var f__40786__auto__ = (function (){var switch__40681__auto__ = ((function (c__40785__auto__){
return (function (state_48156){
var state_val_48157 = (state_48156[(1)]);
if((state_val_48157 === (1))){
var inst_48151 = cljs.core.async.timeout.call(null,(3000));
var state_48156__$1 = state_48156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48156__$1,(2),inst_48151);
} else {
if((state_val_48157 === (2))){
var inst_48153 = (state_48156[(2)]);
var inst_48154 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_48156__$1 = (function (){var statearr_48158 = state_48156;
(statearr_48158[(5)] = inst_48153);

return statearr_48158;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48156__$1,inst_48154);
} else {
return null;
}
}
});})(c__40785__auto__))
;
return ((function (switch__40681__auto__,c__40785__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__40682__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__40682__auto____0 = (function (){
var statearr_48160 = [null,null,null,null,null,null];
(statearr_48160[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__40682__auto__);

(statearr_48160[(1)] = (1));

return statearr_48160;
});
var figwheel$client$enforce_project_plugin_$_state_machine__40682__auto____1 = (function (state_48156){
while(true){
var result__40683__auto__ = switch__40681__auto__.call(null,state_48156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40683__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__40682__auto__ = function(state_48156){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__40682__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__40682__auto____1.call(this,state_48156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__40682__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__40682__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__40682__auto__;
})()
;})(switch__40681__auto__,c__40785__auto__))
})();
var state__40787__auto__ = (function (){var statearr_48161 = f__40786__auto__.call(null);
(statearr_48161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40785__auto__);

return statearr_48161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40787__auto__);
});})(c__40785__auto__))
);

return c__40785__auto__;
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
var c__40785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40785__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__40786__auto__ = (function (){var switch__40681__auto__ = ((function (c__40785__auto__,figwheel_version,temp__4657__auto__){
return (function (state_48180){
var state_val_48181 = (state_48180[(1)]);
if((state_val_48181 === (1))){
var inst_48174 = cljs.core.async.timeout.call(null,(2000));
var state_48180__$1 = state_48180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48180__$1,(2),inst_48174);
} else {
if((state_val_48181 === (2))){
var inst_48176 = (state_48180[(2)]);
var inst_48177 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_48178 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_48177);
var state_48180__$1 = (function (){var statearr_48182 = state_48180;
(statearr_48182[(5)] = inst_48176);

return statearr_48182;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48180__$1,inst_48178);
} else {
return null;
}
}
});})(c__40785__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__40681__auto__,c__40785__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40682__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40682__auto____0 = (function (){
var statearr_48184 = [null,null,null,null,null,null];
(statearr_48184[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40682__auto__);

(statearr_48184[(1)] = (1));

return statearr_48184;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40682__auto____1 = (function (state_48180){
while(true){
var result__40683__auto__ = switch__40681__auto__.call(null,state_48180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40683__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40682__auto__ = function(state_48180){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40682__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40682__auto____1.call(this,state_48180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40682__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40682__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40682__auto__;
})()
;})(switch__40681__auto__,c__40785__auto__,figwheel_version,temp__4657__auto__))
})();
var state__40787__auto__ = (function (){var statearr_48185 = f__40786__auto__.call(null);
(statearr_48185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40785__auto__);

return statearr_48185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40787__auto__);
});})(c__40785__auto__,figwheel_version,temp__4657__auto__))
);

return c__40785__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__48186){
var map__48190 = p__48186;
var map__48190__$1 = ((((!((map__48190 == null)))?((((map__48190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48190):map__48190);
var file = cljs.core.get.call(null,map__48190__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48190__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48190__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__48192 = "";
var G__48192__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__48192),cljs.core.str("file "),cljs.core.str(file)].join(''):G__48192);
var G__48192__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__48192__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__48192__$1);
if(cljs.core.truth_((function (){var and__36955__auto__ = line;
if(cljs.core.truth_(and__36955__auto__)){
return column;
} else {
return and__36955__auto__;
}
})())){
return [cljs.core.str(G__48192__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__48192__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__48193){
var map__48200 = p__48193;
var map__48200__$1 = ((((!((map__48200 == null)))?((((map__48200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48200):map__48200);
var ed = map__48200__$1;
var formatted_exception = cljs.core.get.call(null,map__48200__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__48200__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__48200__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__48202_48206 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__48203_48207 = null;
var count__48204_48208 = (0);
var i__48205_48209 = (0);
while(true){
if((i__48205_48209 < count__48204_48208)){
var msg_48210 = cljs.core._nth.call(null,chunk__48203_48207,i__48205_48209);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_48210);

var G__48211 = seq__48202_48206;
var G__48212 = chunk__48203_48207;
var G__48213 = count__48204_48208;
var G__48214 = (i__48205_48209 + (1));
seq__48202_48206 = G__48211;
chunk__48203_48207 = G__48212;
count__48204_48208 = G__48213;
i__48205_48209 = G__48214;
continue;
} else {
var temp__4657__auto___48215 = cljs.core.seq.call(null,seq__48202_48206);
if(temp__4657__auto___48215){
var seq__48202_48216__$1 = temp__4657__auto___48215;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48202_48216__$1)){
var c__37778__auto___48217 = cljs.core.chunk_first.call(null,seq__48202_48216__$1);
var G__48218 = cljs.core.chunk_rest.call(null,seq__48202_48216__$1);
var G__48219 = c__37778__auto___48217;
var G__48220 = cljs.core.count.call(null,c__37778__auto___48217);
var G__48221 = (0);
seq__48202_48206 = G__48218;
chunk__48203_48207 = G__48219;
count__48204_48208 = G__48220;
i__48205_48209 = G__48221;
continue;
} else {
var msg_48222 = cljs.core.first.call(null,seq__48202_48216__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_48222);

var G__48223 = cljs.core.next.call(null,seq__48202_48216__$1);
var G__48224 = null;
var G__48225 = (0);
var G__48226 = (0);
seq__48202_48206 = G__48223;
chunk__48203_48207 = G__48224;
count__48204_48208 = G__48225;
i__48205_48209 = G__48226;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__48227){
var map__48230 = p__48227;
var map__48230__$1 = ((((!((map__48230 == null)))?((((map__48230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48230):map__48230);
var w = map__48230__$1;
var message = cljs.core.get.call(null,map__48230__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__36955__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__36955__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__36955__auto__;
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
var seq__48242 = cljs.core.seq.call(null,plugins);
var chunk__48243 = null;
var count__48244 = (0);
var i__48245 = (0);
while(true){
if((i__48245 < count__48244)){
var vec__48246 = cljs.core._nth.call(null,chunk__48243,i__48245);
var k = cljs.core.nth.call(null,vec__48246,(0),null);
var plugin = cljs.core.nth.call(null,vec__48246,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48252 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48242,chunk__48243,count__48244,i__48245,pl_48252,vec__48246,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_48252.call(null,msg_hist);
});})(seq__48242,chunk__48243,count__48244,i__48245,pl_48252,vec__48246,k,plugin))
);
} else {
}

var G__48253 = seq__48242;
var G__48254 = chunk__48243;
var G__48255 = count__48244;
var G__48256 = (i__48245 + (1));
seq__48242 = G__48253;
chunk__48243 = G__48254;
count__48244 = G__48255;
i__48245 = G__48256;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48242);
if(temp__4657__auto__){
var seq__48242__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48242__$1)){
var c__37778__auto__ = cljs.core.chunk_first.call(null,seq__48242__$1);
var G__48257 = cljs.core.chunk_rest.call(null,seq__48242__$1);
var G__48258 = c__37778__auto__;
var G__48259 = cljs.core.count.call(null,c__37778__auto__);
var G__48260 = (0);
seq__48242 = G__48257;
chunk__48243 = G__48258;
count__48244 = G__48259;
i__48245 = G__48260;
continue;
} else {
var vec__48249 = cljs.core.first.call(null,seq__48242__$1);
var k = cljs.core.nth.call(null,vec__48249,(0),null);
var plugin = cljs.core.nth.call(null,vec__48249,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48261 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48242,chunk__48243,count__48244,i__48245,pl_48261,vec__48249,k,plugin,seq__48242__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_48261.call(null,msg_hist);
});})(seq__48242,chunk__48243,count__48244,i__48245,pl_48261,vec__48249,k,plugin,seq__48242__$1,temp__4657__auto__))
);
} else {
}

var G__48262 = cljs.core.next.call(null,seq__48242__$1);
var G__48263 = null;
var G__48264 = (0);
var G__48265 = (0);
seq__48242 = G__48262;
chunk__48243 = G__48263;
count__48244 = G__48264;
i__48245 = G__48265;
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
var args48266 = [];
var len__38042__auto___48273 = arguments.length;
var i__38043__auto___48274 = (0);
while(true){
if((i__38043__auto___48274 < len__38042__auto___48273)){
args48266.push((arguments[i__38043__auto___48274]));

var G__48275 = (i__38043__auto___48274 + (1));
i__38043__auto___48274 = G__48275;
continue;
} else {
}
break;
}

var G__48268 = args48266.length;
switch (G__48268) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48266.length)].join('')));

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

var seq__48269_48277 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__48270_48278 = null;
var count__48271_48279 = (0);
var i__48272_48280 = (0);
while(true){
if((i__48272_48280 < count__48271_48279)){
var msg_48281 = cljs.core._nth.call(null,chunk__48270_48278,i__48272_48280);
figwheel.client.socket.handle_incoming_message.call(null,msg_48281);

var G__48282 = seq__48269_48277;
var G__48283 = chunk__48270_48278;
var G__48284 = count__48271_48279;
var G__48285 = (i__48272_48280 + (1));
seq__48269_48277 = G__48282;
chunk__48270_48278 = G__48283;
count__48271_48279 = G__48284;
i__48272_48280 = G__48285;
continue;
} else {
var temp__4657__auto___48286 = cljs.core.seq.call(null,seq__48269_48277);
if(temp__4657__auto___48286){
var seq__48269_48287__$1 = temp__4657__auto___48286;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48269_48287__$1)){
var c__37778__auto___48288 = cljs.core.chunk_first.call(null,seq__48269_48287__$1);
var G__48289 = cljs.core.chunk_rest.call(null,seq__48269_48287__$1);
var G__48290 = c__37778__auto___48288;
var G__48291 = cljs.core.count.call(null,c__37778__auto___48288);
var G__48292 = (0);
seq__48269_48277 = G__48289;
chunk__48270_48278 = G__48290;
count__48271_48279 = G__48291;
i__48272_48280 = G__48292;
continue;
} else {
var msg_48293 = cljs.core.first.call(null,seq__48269_48287__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_48293);

var G__48294 = cljs.core.next.call(null,seq__48269_48287__$1);
var G__48295 = null;
var G__48296 = (0);
var G__48297 = (0);
seq__48269_48277 = G__48294;
chunk__48270_48278 = G__48295;
count__48271_48279 = G__48296;
i__48272_48280 = G__48297;
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
var args__38049__auto__ = [];
var len__38042__auto___48302 = arguments.length;
var i__38043__auto___48303 = (0);
while(true){
if((i__38043__auto___48303 < len__38042__auto___48302)){
args__38049__auto__.push((arguments[i__38043__auto___48303]));

var G__48304 = (i__38043__auto___48303 + (1));
i__38043__auto___48303 = G__48304;
continue;
} else {
}
break;
}

var argseq__38050__auto__ = ((((0) < args__38049__auto__.length))?(new cljs.core.IndexedSeq(args__38049__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__38050__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__48299){
var map__48300 = p__48299;
var map__48300__$1 = ((((!((map__48300 == null)))?((((map__48300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48300):map__48300);
var opts = map__48300__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq48298){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48298));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e48306){if((e48306 instanceof Error)){
var e = e48306;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e48306;

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
return (function (p__48310){
var map__48311 = p__48310;
var map__48311__$1 = ((((!((map__48311 == null)))?((((map__48311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48311):map__48311);
var msg_name = cljs.core.get.call(null,map__48311__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map