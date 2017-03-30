// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__37078__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__37078__auto__){
return or__37078__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__37078__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__37078__auto__)){
return or__37078__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__48300_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__48300_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__48305 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__48306 = null;
var count__48307 = (0);
var i__48308 = (0);
while(true){
if((i__48308 < count__48307)){
var n = cljs.core._nth.call(null,chunk__48306,i__48308);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__48309 = seq__48305;
var G__48310 = chunk__48306;
var G__48311 = count__48307;
var G__48312 = (i__48308 + (1));
seq__48305 = G__48309;
chunk__48306 = G__48310;
count__48307 = G__48311;
i__48308 = G__48312;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48305);
if(temp__4657__auto__){
var seq__48305__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48305__$1)){
var c__37889__auto__ = cljs.core.chunk_first.call(null,seq__48305__$1);
var G__48313 = cljs.core.chunk_rest.call(null,seq__48305__$1);
var G__48314 = c__37889__auto__;
var G__48315 = cljs.core.count.call(null,c__37889__auto__);
var G__48316 = (0);
seq__48305 = G__48313;
chunk__48306 = G__48314;
count__48307 = G__48315;
i__48308 = G__48316;
continue;
} else {
var n = cljs.core.first.call(null,seq__48305__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__48317 = cljs.core.next.call(null,seq__48305__$1);
var G__48318 = null;
var G__48319 = (0);
var G__48320 = (0);
seq__48305 = G__48317;
chunk__48306 = G__48318;
count__48307 = G__48319;
i__48308 = G__48320;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__48371_48382 = cljs.core.seq.call(null,deps);
var chunk__48372_48383 = null;
var count__48373_48384 = (0);
var i__48374_48385 = (0);
while(true){
if((i__48374_48385 < count__48373_48384)){
var dep_48386 = cljs.core._nth.call(null,chunk__48372_48383,i__48374_48385);
topo_sort_helper_STAR_.call(null,dep_48386,(depth + (1)),state);

var G__48387 = seq__48371_48382;
var G__48388 = chunk__48372_48383;
var G__48389 = count__48373_48384;
var G__48390 = (i__48374_48385 + (1));
seq__48371_48382 = G__48387;
chunk__48372_48383 = G__48388;
count__48373_48384 = G__48389;
i__48374_48385 = G__48390;
continue;
} else {
var temp__4657__auto___48391 = cljs.core.seq.call(null,seq__48371_48382);
if(temp__4657__auto___48391){
var seq__48371_48392__$1 = temp__4657__auto___48391;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48371_48392__$1)){
var c__37889__auto___48393 = cljs.core.chunk_first.call(null,seq__48371_48392__$1);
var G__48394 = cljs.core.chunk_rest.call(null,seq__48371_48392__$1);
var G__48395 = c__37889__auto___48393;
var G__48396 = cljs.core.count.call(null,c__37889__auto___48393);
var G__48397 = (0);
seq__48371_48382 = G__48394;
chunk__48372_48383 = G__48395;
count__48373_48384 = G__48396;
i__48374_48385 = G__48397;
continue;
} else {
var dep_48398 = cljs.core.first.call(null,seq__48371_48392__$1);
topo_sort_helper_STAR_.call(null,dep_48398,(depth + (1)),state);

var G__48399 = cljs.core.next.call(null,seq__48371_48392__$1);
var G__48400 = null;
var G__48401 = (0);
var G__48402 = (0);
seq__48371_48382 = G__48399;
chunk__48372_48383 = G__48400;
count__48373_48384 = G__48401;
i__48374_48385 = G__48402;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__48375){
var vec__48379 = p__48375;
var seq__48380 = cljs.core.seq.call(null,vec__48379);
var first__48381 = cljs.core.first.call(null,seq__48380);
var seq__48380__$1 = cljs.core.next.call(null,seq__48380);
var x = first__48381;
var xs = seq__48380__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__48379,seq__48380,first__48381,seq__48380__$1,x,xs,get_deps__$1){
return (function (p1__48321_SHARP_){
return clojure.set.difference.call(null,p1__48321_SHARP_,x);
});})(vec__48379,seq__48380,first__48381,seq__48380__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__48415 = cljs.core.seq.call(null,provides);
var chunk__48416 = null;
var count__48417 = (0);
var i__48418 = (0);
while(true){
if((i__48418 < count__48417)){
var prov = cljs.core._nth.call(null,chunk__48416,i__48418);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__48419_48427 = cljs.core.seq.call(null,requires);
var chunk__48420_48428 = null;
var count__48421_48429 = (0);
var i__48422_48430 = (0);
while(true){
if((i__48422_48430 < count__48421_48429)){
var req_48431 = cljs.core._nth.call(null,chunk__48420_48428,i__48422_48430);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48431,prov);

var G__48432 = seq__48419_48427;
var G__48433 = chunk__48420_48428;
var G__48434 = count__48421_48429;
var G__48435 = (i__48422_48430 + (1));
seq__48419_48427 = G__48432;
chunk__48420_48428 = G__48433;
count__48421_48429 = G__48434;
i__48422_48430 = G__48435;
continue;
} else {
var temp__4657__auto___48436 = cljs.core.seq.call(null,seq__48419_48427);
if(temp__4657__auto___48436){
var seq__48419_48437__$1 = temp__4657__auto___48436;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48419_48437__$1)){
var c__37889__auto___48438 = cljs.core.chunk_first.call(null,seq__48419_48437__$1);
var G__48439 = cljs.core.chunk_rest.call(null,seq__48419_48437__$1);
var G__48440 = c__37889__auto___48438;
var G__48441 = cljs.core.count.call(null,c__37889__auto___48438);
var G__48442 = (0);
seq__48419_48427 = G__48439;
chunk__48420_48428 = G__48440;
count__48421_48429 = G__48441;
i__48422_48430 = G__48442;
continue;
} else {
var req_48443 = cljs.core.first.call(null,seq__48419_48437__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48443,prov);

var G__48444 = cljs.core.next.call(null,seq__48419_48437__$1);
var G__48445 = null;
var G__48446 = (0);
var G__48447 = (0);
seq__48419_48427 = G__48444;
chunk__48420_48428 = G__48445;
count__48421_48429 = G__48446;
i__48422_48430 = G__48447;
continue;
}
} else {
}
}
break;
}

var G__48448 = seq__48415;
var G__48449 = chunk__48416;
var G__48450 = count__48417;
var G__48451 = (i__48418 + (1));
seq__48415 = G__48448;
chunk__48416 = G__48449;
count__48417 = G__48450;
i__48418 = G__48451;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48415);
if(temp__4657__auto__){
var seq__48415__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48415__$1)){
var c__37889__auto__ = cljs.core.chunk_first.call(null,seq__48415__$1);
var G__48452 = cljs.core.chunk_rest.call(null,seq__48415__$1);
var G__48453 = c__37889__auto__;
var G__48454 = cljs.core.count.call(null,c__37889__auto__);
var G__48455 = (0);
seq__48415 = G__48452;
chunk__48416 = G__48453;
count__48417 = G__48454;
i__48418 = G__48455;
continue;
} else {
var prov = cljs.core.first.call(null,seq__48415__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__48423_48456 = cljs.core.seq.call(null,requires);
var chunk__48424_48457 = null;
var count__48425_48458 = (0);
var i__48426_48459 = (0);
while(true){
if((i__48426_48459 < count__48425_48458)){
var req_48460 = cljs.core._nth.call(null,chunk__48424_48457,i__48426_48459);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48460,prov);

var G__48461 = seq__48423_48456;
var G__48462 = chunk__48424_48457;
var G__48463 = count__48425_48458;
var G__48464 = (i__48426_48459 + (1));
seq__48423_48456 = G__48461;
chunk__48424_48457 = G__48462;
count__48425_48458 = G__48463;
i__48426_48459 = G__48464;
continue;
} else {
var temp__4657__auto___48465__$1 = cljs.core.seq.call(null,seq__48423_48456);
if(temp__4657__auto___48465__$1){
var seq__48423_48466__$1 = temp__4657__auto___48465__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48423_48466__$1)){
var c__37889__auto___48467 = cljs.core.chunk_first.call(null,seq__48423_48466__$1);
var G__48468 = cljs.core.chunk_rest.call(null,seq__48423_48466__$1);
var G__48469 = c__37889__auto___48467;
var G__48470 = cljs.core.count.call(null,c__37889__auto___48467);
var G__48471 = (0);
seq__48423_48456 = G__48468;
chunk__48424_48457 = G__48469;
count__48425_48458 = G__48470;
i__48426_48459 = G__48471;
continue;
} else {
var req_48472 = cljs.core.first.call(null,seq__48423_48466__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48472,prov);

var G__48473 = cljs.core.next.call(null,seq__48423_48466__$1);
var G__48474 = null;
var G__48475 = (0);
var G__48476 = (0);
seq__48423_48456 = G__48473;
chunk__48424_48457 = G__48474;
count__48425_48458 = G__48475;
i__48426_48459 = G__48476;
continue;
}
} else {
}
}
break;
}

var G__48477 = cljs.core.next.call(null,seq__48415__$1);
var G__48478 = null;
var G__48479 = (0);
var G__48480 = (0);
seq__48415 = G__48477;
chunk__48416 = G__48478;
count__48417 = G__48479;
i__48418 = G__48480;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__48485_48489 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__48486_48490 = null;
var count__48487_48491 = (0);
var i__48488_48492 = (0);
while(true){
if((i__48488_48492 < count__48487_48491)){
var ns_48493 = cljs.core._nth.call(null,chunk__48486_48490,i__48488_48492);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_48493);

var G__48494 = seq__48485_48489;
var G__48495 = chunk__48486_48490;
var G__48496 = count__48487_48491;
var G__48497 = (i__48488_48492 + (1));
seq__48485_48489 = G__48494;
chunk__48486_48490 = G__48495;
count__48487_48491 = G__48496;
i__48488_48492 = G__48497;
continue;
} else {
var temp__4657__auto___48498 = cljs.core.seq.call(null,seq__48485_48489);
if(temp__4657__auto___48498){
var seq__48485_48499__$1 = temp__4657__auto___48498;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48485_48499__$1)){
var c__37889__auto___48500 = cljs.core.chunk_first.call(null,seq__48485_48499__$1);
var G__48501 = cljs.core.chunk_rest.call(null,seq__48485_48499__$1);
var G__48502 = c__37889__auto___48500;
var G__48503 = cljs.core.count.call(null,c__37889__auto___48500);
var G__48504 = (0);
seq__48485_48489 = G__48501;
chunk__48486_48490 = G__48502;
count__48487_48491 = G__48503;
i__48488_48492 = G__48504;
continue;
} else {
var ns_48505 = cljs.core.first.call(null,seq__48485_48499__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_48505);

var G__48506 = cljs.core.next.call(null,seq__48485_48499__$1);
var G__48507 = null;
var G__48508 = (0);
var G__48509 = (0);
seq__48485_48489 = G__48506;
chunk__48486_48490 = G__48507;
count__48487_48491 = G__48508;
i__48488_48492 = G__48509;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__37078__auto__ = goog.require__;
if(cljs.core.truth_(or__37078__auto__)){
return or__37078__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__48510__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__48510 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48511__i = 0, G__48511__a = new Array(arguments.length -  0);
while (G__48511__i < G__48511__a.length) {G__48511__a[G__48511__i] = arguments[G__48511__i + 0]; ++G__48511__i;}
  args = new cljs.core.IndexedSeq(G__48511__a,0);
} 
return G__48510__delegate.call(this,args);};
G__48510.cljs$lang$maxFixedArity = 0;
G__48510.cljs$lang$applyTo = (function (arglist__48512){
var args = cljs.core.seq(arglist__48512);
return G__48510__delegate(args);
});
G__48510.cljs$core$IFn$_invoke$arity$variadic = G__48510__delegate;
return G__48510;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__48514 = cljs.core._EQ_;
var expr__48515 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__48514.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__48515))){
var path_parts = ((function (pred__48514,expr__48515){
return (function (p1__48513_SHARP_){
return clojure.string.split.call(null,p1__48513_SHARP_,/[\/\\]/);
});})(pred__48514,expr__48515))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__48514,expr__48515){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e48517){if((e48517 instanceof Error)){
var e = e48517;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e48517;

}
}})());
});
;})(path_parts,sep,root,pred__48514,expr__48515))
} else {
if(cljs.core.truth_(pred__48514.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__48515))){
return ((function (pred__48514,expr__48515){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__48514,expr__48515){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__48514,expr__48515))
);

return deferred.addErrback(((function (deferred,pred__48514,expr__48515){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__48514,expr__48515))
);
});
;})(pred__48514,expr__48515))
} else {
return ((function (pred__48514,expr__48515){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__48514,expr__48515))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__48518,callback){
var map__48521 = p__48518;
var map__48521__$1 = ((((!((map__48521 == null)))?((((map__48521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48521):map__48521);
var file_msg = map__48521__$1;
var request_url = cljs.core.get.call(null,map__48521__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__48521,map__48521__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__48521,map__48521__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__40014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40014__auto__){
return (function (){
var f__40015__auto__ = (function (){var switch__39995__auto__ = ((function (c__40014__auto__){
return (function (state_48545){
var state_val_48546 = (state_48545[(1)]);
if((state_val_48546 === (7))){
var inst_48541 = (state_48545[(2)]);
var state_48545__$1 = state_48545;
var statearr_48547_48563 = state_48545__$1;
(statearr_48547_48563[(2)] = inst_48541);

(statearr_48547_48563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48546 === (1))){
var state_48545__$1 = state_48545;
var statearr_48548_48564 = state_48545__$1;
(statearr_48548_48564[(2)] = null);

(statearr_48548_48564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48546 === (4))){
var inst_48525 = (state_48545[(5)]);
var inst_48525__$1 = (state_48545[(2)]);
var state_48545__$1 = (function (){var statearr_48549 = state_48545;
(statearr_48549[(5)] = inst_48525__$1);

return statearr_48549;
})();
if(cljs.core.truth_(inst_48525__$1)){
var statearr_48550_48565 = state_48545__$1;
(statearr_48550_48565[(1)] = (5));

} else {
var statearr_48551_48566 = state_48545__$1;
(statearr_48551_48566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48546 === (6))){
var state_48545__$1 = state_48545;
var statearr_48552_48567 = state_48545__$1;
(statearr_48552_48567[(2)] = null);

(statearr_48552_48567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48546 === (3))){
var inst_48543 = (state_48545[(2)]);
var state_48545__$1 = state_48545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48545__$1,inst_48543);
} else {
if((state_val_48546 === (2))){
var state_48545__$1 = state_48545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48545__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_48546 === (11))){
var inst_48537 = (state_48545[(2)]);
var state_48545__$1 = (function (){var statearr_48553 = state_48545;
(statearr_48553[(6)] = inst_48537);

return statearr_48553;
})();
var statearr_48554_48568 = state_48545__$1;
(statearr_48554_48568[(2)] = null);

(statearr_48554_48568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48546 === (9))){
var inst_48529 = (state_48545[(7)]);
var inst_48531 = (state_48545[(8)]);
var inst_48533 = inst_48531.call(null,inst_48529);
var state_48545__$1 = state_48545;
var statearr_48555_48569 = state_48545__$1;
(statearr_48555_48569[(2)] = inst_48533);

(statearr_48555_48569[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48546 === (5))){
var inst_48525 = (state_48545[(5)]);
var inst_48527 = figwheel.client.file_reloading.blocking_load.call(null,inst_48525);
var state_48545__$1 = state_48545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48545__$1,(8),inst_48527);
} else {
if((state_val_48546 === (10))){
var inst_48529 = (state_48545[(7)]);
var inst_48535 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_48529);
var state_48545__$1 = state_48545;
var statearr_48556_48570 = state_48545__$1;
(statearr_48556_48570[(2)] = inst_48535);

(statearr_48556_48570[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48546 === (8))){
var inst_48531 = (state_48545[(8)]);
var inst_48525 = (state_48545[(5)]);
var inst_48529 = (state_48545[(2)]);
var inst_48530 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_48531__$1 = cljs.core.get.call(null,inst_48530,inst_48525);
var state_48545__$1 = (function (){var statearr_48557 = state_48545;
(statearr_48557[(7)] = inst_48529);

(statearr_48557[(8)] = inst_48531__$1);

return statearr_48557;
})();
if(cljs.core.truth_(inst_48531__$1)){
var statearr_48558_48571 = state_48545__$1;
(statearr_48558_48571[(1)] = (9));

} else {
var statearr_48559_48572 = state_48545__$1;
(statearr_48559_48572[(1)] = (10));

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
});})(c__40014__auto__))
;
return ((function (switch__39995__auto__,c__40014__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__39996__auto__ = null;
var figwheel$client$file_reloading$state_machine__39996__auto____0 = (function (){
var statearr_48561 = [null,null,null,null,null,null,null,null,null];
(statearr_48561[(0)] = figwheel$client$file_reloading$state_machine__39996__auto__);

(statearr_48561[(1)] = (1));

return statearr_48561;
});
var figwheel$client$file_reloading$state_machine__39996__auto____1 = (function (state_48545){
while(true){
var result__39997__auto__ = switch__39995__auto__.call(null,state_48545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39997__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__39996__auto__ = function(state_48545){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__39996__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__39996__auto____1.call(this,state_48545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__39996__auto____0;
figwheel$client$file_reloading$state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__39996__auto____1;
return figwheel$client$file_reloading$state_machine__39996__auto__;
})()
;})(switch__39995__auto__,c__40014__auto__))
})();
var state__40016__auto__ = (function (){var statearr_48562 = f__40015__auto__.call(null);
(statearr_48562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40014__auto__);

return statearr_48562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40016__auto__);
});})(c__40014__auto__))
);

return c__40014__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__48573,callback){
var map__48576 = p__48573;
var map__48576__$1 = ((((!((map__48576 == null)))?((((map__48576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48576):map__48576);
var file_msg = map__48576__$1;
var namespace = cljs.core.get.call(null,map__48576__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__48576,map__48576__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__48576,map__48576__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__48578){
var map__48581 = p__48578;
var map__48581__$1 = ((((!((map__48581 == null)))?((((map__48581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48581):map__48581);
var file_msg = map__48581__$1;
var namespace = cljs.core.get.call(null,map__48581__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__37066__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__37066__auto__){
var or__37078__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__37078__auto__)){
return or__37078__auto__;
} else {
var or__37078__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__37078__auto____$1)){
return or__37078__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__37066__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__48583,callback){
var map__48586 = p__48583;
var map__48586__$1 = ((((!((map__48586 == null)))?((((map__48586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48586):map__48586);
var file_msg = map__48586__$1;
var request_url = cljs.core.get.call(null,map__48586__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__48586__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__40014__auto___48682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40014__auto___48682,out){
return (function (){
var f__40015__auto__ = (function (){var switch__39995__auto__ = ((function (c__40014__auto___48682,out){
return (function (state_48668){
var state_val_48669 = (state_48668[(1)]);
if((state_val_48669 === (1))){
var inst_48642 = cljs.core.seq.call(null,files);
var inst_48643 = cljs.core.first.call(null,inst_48642);
var inst_48644 = cljs.core.next.call(null,inst_48642);
var inst_48645 = files;
var state_48668__$1 = (function (){var statearr_48670 = state_48668;
(statearr_48670[(5)] = inst_48645);

(statearr_48670[(6)] = inst_48644);

(statearr_48670[(7)] = inst_48643);

return statearr_48670;
})();
var statearr_48671_48683 = state_48668__$1;
(statearr_48671_48683[(2)] = null);

(statearr_48671_48683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (2))){
var inst_48645 = (state_48668[(5)]);
var inst_48651 = (state_48668[(8)]);
var inst_48650 = cljs.core.seq.call(null,inst_48645);
var inst_48651__$1 = cljs.core.first.call(null,inst_48650);
var inst_48652 = cljs.core.next.call(null,inst_48650);
var inst_48653 = (inst_48651__$1 == null);
var inst_48654 = cljs.core.not.call(null,inst_48653);
var state_48668__$1 = (function (){var statearr_48672 = state_48668;
(statearr_48672[(9)] = inst_48652);

(statearr_48672[(8)] = inst_48651__$1);

return statearr_48672;
})();
if(inst_48654){
var statearr_48673_48684 = state_48668__$1;
(statearr_48673_48684[(1)] = (4));

} else {
var statearr_48674_48685 = state_48668__$1;
(statearr_48674_48685[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (3))){
var inst_48666 = (state_48668[(2)]);
var state_48668__$1 = state_48668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48668__$1,inst_48666);
} else {
if((state_val_48669 === (4))){
var inst_48651 = (state_48668[(8)]);
var inst_48656 = figwheel.client.file_reloading.reload_js_file.call(null,inst_48651);
var state_48668__$1 = state_48668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48668__$1,(7),inst_48656);
} else {
if((state_val_48669 === (5))){
var inst_48662 = cljs.core.async.close_BANG_.call(null,out);
var state_48668__$1 = state_48668;
var statearr_48675_48686 = state_48668__$1;
(statearr_48675_48686[(2)] = inst_48662);

(statearr_48675_48686[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (6))){
var inst_48664 = (state_48668[(2)]);
var state_48668__$1 = state_48668;
var statearr_48676_48687 = state_48668__$1;
(statearr_48676_48687[(2)] = inst_48664);

(statearr_48676_48687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (7))){
var inst_48652 = (state_48668[(9)]);
var inst_48658 = (state_48668[(2)]);
var inst_48659 = cljs.core.async.put_BANG_.call(null,out,inst_48658);
var inst_48645 = inst_48652;
var state_48668__$1 = (function (){var statearr_48677 = state_48668;
(statearr_48677[(5)] = inst_48645);

(statearr_48677[(10)] = inst_48659);

return statearr_48677;
})();
var statearr_48678_48688 = state_48668__$1;
(statearr_48678_48688[(2)] = null);

(statearr_48678_48688[(1)] = (2));


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
});})(c__40014__auto___48682,out))
;
return ((function (switch__39995__auto__,c__40014__auto___48682,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39996__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39996__auto____0 = (function (){
var statearr_48680 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48680[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39996__auto__);

(statearr_48680[(1)] = (1));

return statearr_48680;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39996__auto____1 = (function (state_48668){
while(true){
var result__39997__auto__ = switch__39995__auto__.call(null,state_48668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39997__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39996__auto__ = function(state_48668){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39996__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39996__auto____1.call(this,state_48668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39996__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39996__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39996__auto__;
})()
;})(switch__39995__auto__,c__40014__auto___48682,out))
})();
var state__40016__auto__ = (function (){var statearr_48681 = f__40015__auto__.call(null);
(statearr_48681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40014__auto___48682);

return statearr_48681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40016__auto__);
});})(c__40014__auto___48682,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__48689,opts){
var map__48693 = p__48689;
var map__48693__$1 = ((((!((map__48693 == null)))?((((map__48693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48693):map__48693);
var eval_body__$1 = cljs.core.get.call(null,map__48693__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__48693__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__37066__auto__ = eval_body__$1;
if(cljs.core.truth_(and__37066__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__37066__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e48695){var e = e48695;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__48696_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__48696_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__48705){
var vec__48706 = p__48705;
var k = cljs.core.nth.call(null,vec__48706,(0),null);
var v = cljs.core.nth.call(null,vec__48706,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__48709){
var vec__48710 = p__48709;
var k = cljs.core.nth.call(null,vec__48710,(0),null);
var v = cljs.core.nth.call(null,vec__48710,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__48716,p__48717){
var map__48960 = p__48716;
var map__48960__$1 = ((((!((map__48960 == null)))?((((map__48960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48960):map__48960);
var opts = map__48960__$1;
var before_jsload = cljs.core.get.call(null,map__48960__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__48960__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__48960__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__48961 = p__48717;
var map__48961__$1 = ((((!((map__48961 == null)))?((((map__48961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48961):map__48961);
var msg = map__48961__$1;
var files = cljs.core.get.call(null,map__48961__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__48961__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__48961__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__40014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40014__auto__,map__48960,map__48960__$1,opts,before_jsload,on_jsload,reload_dependents,map__48961,map__48961__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__40015__auto__ = (function (){var switch__39995__auto__ = ((function (c__40014__auto__,map__48960,map__48960__$1,opts,before_jsload,on_jsload,reload_dependents,map__48961,map__48961__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_49114){
var state_val_49115 = (state_49114[(1)]);
if((state_val_49115 === (7))){
var inst_48975 = (state_49114[(5)]);
var inst_48978 = (state_49114[(6)]);
var inst_48976 = (state_49114[(7)]);
var inst_48977 = (state_49114[(8)]);
var inst_48983 = cljs.core._nth.call(null,inst_48976,inst_48978);
var inst_48984 = figwheel.client.file_reloading.eval_body.call(null,inst_48983,opts);
var inst_48985 = (inst_48978 + (1));
var tmp49116 = inst_48975;
var tmp49117 = inst_48976;
var tmp49118 = inst_48977;
var inst_48975__$1 = tmp49116;
var inst_48976__$1 = tmp49117;
var inst_48977__$1 = tmp49118;
var inst_48978__$1 = inst_48985;
var state_49114__$1 = (function (){var statearr_49119 = state_49114;
(statearr_49119[(5)] = inst_48975__$1);

(statearr_49119[(6)] = inst_48978__$1);

(statearr_49119[(9)] = inst_48984);

(statearr_49119[(7)] = inst_48976__$1);

(statearr_49119[(8)] = inst_48977__$1);

return statearr_49119;
})();
var statearr_49120_49202 = state_49114__$1;
(statearr_49120_49202[(2)] = null);

(statearr_49120_49202[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (20))){
var inst_49018 = (state_49114[(10)]);
var inst_49026 = figwheel.client.file_reloading.sort_files.call(null,inst_49018);
var state_49114__$1 = state_49114;
var statearr_49121_49203 = state_49114__$1;
(statearr_49121_49203[(2)] = inst_49026);

(statearr_49121_49203[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (27))){
var state_49114__$1 = state_49114;
var statearr_49122_49204 = state_49114__$1;
(statearr_49122_49204[(2)] = null);

(statearr_49122_49204[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (1))){
var inst_48967 = (state_49114[(11)]);
var inst_48964 = before_jsload.call(null,files);
var inst_48965 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_48966 = (function (){return ((function (inst_48967,inst_48964,inst_48965,state_val_49115,c__40014__auto__,map__48960,map__48960__$1,opts,before_jsload,on_jsload,reload_dependents,map__48961,map__48961__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__48713_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__48713_SHARP_);
});
;})(inst_48967,inst_48964,inst_48965,state_val_49115,c__40014__auto__,map__48960,map__48960__$1,opts,before_jsload,on_jsload,reload_dependents,map__48961,map__48961__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48967__$1 = cljs.core.filter.call(null,inst_48966,files);
var inst_48968 = cljs.core.not_empty.call(null,inst_48967__$1);
var state_49114__$1 = (function (){var statearr_49123 = state_49114;
(statearr_49123[(12)] = inst_48965);

(statearr_49123[(11)] = inst_48967__$1);

(statearr_49123[(13)] = inst_48964);

return statearr_49123;
})();
if(cljs.core.truth_(inst_48968)){
var statearr_49124_49205 = state_49114__$1;
(statearr_49124_49205[(1)] = (2));

} else {
var statearr_49125_49206 = state_49114__$1;
(statearr_49125_49206[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (24))){
var state_49114__$1 = state_49114;
var statearr_49126_49207 = state_49114__$1;
(statearr_49126_49207[(2)] = null);

(statearr_49126_49207[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (39))){
var inst_49068 = (state_49114[(14)]);
var state_49114__$1 = state_49114;
var statearr_49127_49208 = state_49114__$1;
(statearr_49127_49208[(2)] = inst_49068);

(statearr_49127_49208[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (46))){
var inst_49109 = (state_49114[(2)]);
var state_49114__$1 = state_49114;
var statearr_49128_49209 = state_49114__$1;
(statearr_49128_49209[(2)] = inst_49109);

(statearr_49128_49209[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (4))){
var inst_49012 = (state_49114[(2)]);
var inst_49013 = cljs.core.List.EMPTY;
var inst_49014 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_49013);
var inst_49015 = (function (){return ((function (inst_49012,inst_49013,inst_49014,state_val_49115,c__40014__auto__,map__48960,map__48960__$1,opts,before_jsload,on_jsload,reload_dependents,map__48961,map__48961__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__48714_SHARP_){
var and__37066__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__48714_SHARP_);
if(cljs.core.truth_(and__37066__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__48714_SHARP_));
} else {
return and__37066__auto__;
}
});
;})(inst_49012,inst_49013,inst_49014,state_val_49115,c__40014__auto__,map__48960,map__48960__$1,opts,before_jsload,on_jsload,reload_dependents,map__48961,map__48961__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49016 = cljs.core.filter.call(null,inst_49015,files);
var inst_49017 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_49018 = cljs.core.concat.call(null,inst_49016,inst_49017);
var state_49114__$1 = (function (){var statearr_49129 = state_49114;
(statearr_49129[(10)] = inst_49018);

(statearr_49129[(15)] = inst_49012);

(statearr_49129[(16)] = inst_49014);

return statearr_49129;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_49130_49210 = state_49114__$1;
(statearr_49130_49210[(1)] = (16));

} else {
var statearr_49131_49211 = state_49114__$1;
(statearr_49131_49211[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (15))){
var inst_49002 = (state_49114[(2)]);
var state_49114__$1 = state_49114;
var statearr_49132_49212 = state_49114__$1;
(statearr_49132_49212[(2)] = inst_49002);

(statearr_49132_49212[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (21))){
var inst_49028 = (state_49114[(17)]);
var inst_49028__$1 = (state_49114[(2)]);
var inst_49029 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_49028__$1);
var state_49114__$1 = (function (){var statearr_49133 = state_49114;
(statearr_49133[(17)] = inst_49028__$1);

return statearr_49133;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49114__$1,(22),inst_49029);
} else {
if((state_val_49115 === (31))){
var inst_49112 = (state_49114[(2)]);
var state_49114__$1 = state_49114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49114__$1,inst_49112);
} else {
if((state_val_49115 === (32))){
var inst_49068 = (state_49114[(14)]);
var inst_49073 = inst_49068.cljs$lang$protocol_mask$partition0$;
var inst_49074 = (inst_49073 & (64));
var inst_49075 = inst_49068.cljs$core$ISeq$;
var inst_49076 = (inst_49074) || (inst_49075);
var state_49114__$1 = state_49114;
if(cljs.core.truth_(inst_49076)){
var statearr_49134_49213 = state_49114__$1;
(statearr_49134_49213[(1)] = (35));

} else {
var statearr_49135_49214 = state_49114__$1;
(statearr_49135_49214[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (40))){
var inst_49089 = (state_49114[(18)]);
var inst_49088 = (state_49114[(2)]);
var inst_49089__$1 = cljs.core.get.call(null,inst_49088,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_49090 = cljs.core.get.call(null,inst_49088,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_49091 = cljs.core.not_empty.call(null,inst_49089__$1);
var state_49114__$1 = (function (){var statearr_49136 = state_49114;
(statearr_49136[(19)] = inst_49090);

(statearr_49136[(18)] = inst_49089__$1);

return statearr_49136;
})();
if(cljs.core.truth_(inst_49091)){
var statearr_49137_49215 = state_49114__$1;
(statearr_49137_49215[(1)] = (41));

} else {
var statearr_49138_49216 = state_49114__$1;
(statearr_49138_49216[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (33))){
var state_49114__$1 = state_49114;
var statearr_49139_49217 = state_49114__$1;
(statearr_49139_49217[(2)] = false);

(statearr_49139_49217[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (13))){
var inst_48988 = (state_49114[(20)]);
var inst_48992 = cljs.core.chunk_first.call(null,inst_48988);
var inst_48993 = cljs.core.chunk_rest.call(null,inst_48988);
var inst_48994 = cljs.core.count.call(null,inst_48992);
var inst_48975 = inst_48993;
var inst_48976 = inst_48992;
var inst_48977 = inst_48994;
var inst_48978 = (0);
var state_49114__$1 = (function (){var statearr_49140 = state_49114;
(statearr_49140[(5)] = inst_48975);

(statearr_49140[(6)] = inst_48978);

(statearr_49140[(7)] = inst_48976);

(statearr_49140[(8)] = inst_48977);

return statearr_49140;
})();
var statearr_49141_49218 = state_49114__$1;
(statearr_49141_49218[(2)] = null);

(statearr_49141_49218[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (22))){
var inst_49031 = (state_49114[(21)]);
var inst_49036 = (state_49114[(22)]);
var inst_49028 = (state_49114[(17)]);
var inst_49032 = (state_49114[(23)]);
var inst_49031__$1 = (state_49114[(2)]);
var inst_49032__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49031__$1);
var inst_49033 = (function (){var all_files = inst_49028;
var res_SINGLEQUOTE_ = inst_49031__$1;
var res = inst_49032__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_49031,inst_49036,inst_49028,inst_49032,inst_49031__$1,inst_49032__$1,state_val_49115,c__40014__auto__,map__48960,map__48960__$1,opts,before_jsload,on_jsload,reload_dependents,map__48961,map__48961__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__48715_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__48715_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_49031,inst_49036,inst_49028,inst_49032,inst_49031__$1,inst_49032__$1,state_val_49115,c__40014__auto__,map__48960,map__48960__$1,opts,before_jsload,on_jsload,reload_dependents,map__48961,map__48961__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49034 = cljs.core.filter.call(null,inst_49033,inst_49031__$1);
var inst_49035 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_49036__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49035);
var inst_49037 = cljs.core.not_empty.call(null,inst_49036__$1);
var state_49114__$1 = (function (){var statearr_49142 = state_49114;
(statearr_49142[(24)] = inst_49034);

(statearr_49142[(21)] = inst_49031__$1);

(statearr_49142[(22)] = inst_49036__$1);

(statearr_49142[(23)] = inst_49032__$1);

return statearr_49142;
})();
if(cljs.core.truth_(inst_49037)){
var statearr_49143_49219 = state_49114__$1;
(statearr_49143_49219[(1)] = (23));

} else {
var statearr_49144_49220 = state_49114__$1;
(statearr_49144_49220[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (36))){
var state_49114__$1 = state_49114;
var statearr_49145_49221 = state_49114__$1;
(statearr_49145_49221[(2)] = false);

(statearr_49145_49221[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (41))){
var inst_49089 = (state_49114[(18)]);
var inst_49093 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_49094 = cljs.core.map.call(null,inst_49093,inst_49089);
var inst_49095 = cljs.core.pr_str.call(null,inst_49094);
var inst_49096 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_49095)].join('');
var inst_49097 = figwheel.client.utils.log.call(null,inst_49096);
var state_49114__$1 = state_49114;
var statearr_49146_49222 = state_49114__$1;
(statearr_49146_49222[(2)] = inst_49097);

(statearr_49146_49222[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (43))){
var inst_49090 = (state_49114[(19)]);
var inst_49100 = (state_49114[(2)]);
var inst_49101 = cljs.core.not_empty.call(null,inst_49090);
var state_49114__$1 = (function (){var statearr_49147 = state_49114;
(statearr_49147[(25)] = inst_49100);

return statearr_49147;
})();
if(cljs.core.truth_(inst_49101)){
var statearr_49148_49223 = state_49114__$1;
(statearr_49148_49223[(1)] = (44));

} else {
var statearr_49149_49224 = state_49114__$1;
(statearr_49149_49224[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (29))){
var inst_49034 = (state_49114[(24)]);
var inst_49031 = (state_49114[(21)]);
var inst_49036 = (state_49114[(22)]);
var inst_49068 = (state_49114[(14)]);
var inst_49028 = (state_49114[(17)]);
var inst_49032 = (state_49114[(23)]);
var inst_49064 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_49067 = (function (){var all_files = inst_49028;
var res_SINGLEQUOTE_ = inst_49031;
var res = inst_49032;
var files_not_loaded = inst_49034;
var dependencies_that_loaded = inst_49036;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49034,inst_49031,inst_49036,inst_49068,inst_49028,inst_49032,inst_49064,state_val_49115,c__40014__auto__,map__48960,map__48960__$1,opts,before_jsload,on_jsload,reload_dependents,map__48961,map__48961__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49066){
var map__49150 = p__49066;
var map__49150__$1 = ((((!((map__49150 == null)))?((((map__49150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49150):map__49150);
var namespace = cljs.core.get.call(null,map__49150__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49034,inst_49031,inst_49036,inst_49068,inst_49028,inst_49032,inst_49064,state_val_49115,c__40014__auto__,map__48960,map__48960__$1,opts,before_jsload,on_jsload,reload_dependents,map__48961,map__48961__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49068__$1 = cljs.core.group_by.call(null,inst_49067,inst_49034);
var inst_49070 = (inst_49068__$1 == null);
var inst_49071 = cljs.core.not.call(null,inst_49070);
var state_49114__$1 = (function (){var statearr_49152 = state_49114;
(statearr_49152[(26)] = inst_49064);

(statearr_49152[(14)] = inst_49068__$1);

return statearr_49152;
})();
if(inst_49071){
var statearr_49153_49225 = state_49114__$1;
(statearr_49153_49225[(1)] = (32));

} else {
var statearr_49154_49226 = state_49114__$1;
(statearr_49154_49226[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (44))){
var inst_49090 = (state_49114[(19)]);
var inst_49103 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49090);
var inst_49104 = cljs.core.pr_str.call(null,inst_49103);
var inst_49105 = [cljs.core.str("not required: "),cljs.core.str(inst_49104)].join('');
var inst_49106 = figwheel.client.utils.log.call(null,inst_49105);
var state_49114__$1 = state_49114;
var statearr_49155_49227 = state_49114__$1;
(statearr_49155_49227[(2)] = inst_49106);

(statearr_49155_49227[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (6))){
var inst_49009 = (state_49114[(2)]);
var state_49114__$1 = state_49114;
var statearr_49156_49228 = state_49114__$1;
(statearr_49156_49228[(2)] = inst_49009);

(statearr_49156_49228[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (28))){
var inst_49034 = (state_49114[(24)]);
var inst_49061 = (state_49114[(2)]);
var inst_49062 = cljs.core.not_empty.call(null,inst_49034);
var state_49114__$1 = (function (){var statearr_49157 = state_49114;
(statearr_49157[(27)] = inst_49061);

return statearr_49157;
})();
if(cljs.core.truth_(inst_49062)){
var statearr_49158_49229 = state_49114__$1;
(statearr_49158_49229[(1)] = (29));

} else {
var statearr_49159_49230 = state_49114__$1;
(statearr_49159_49230[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (25))){
var inst_49032 = (state_49114[(23)]);
var inst_49048 = (state_49114[(2)]);
var inst_49049 = cljs.core.not_empty.call(null,inst_49032);
var state_49114__$1 = (function (){var statearr_49160 = state_49114;
(statearr_49160[(28)] = inst_49048);

return statearr_49160;
})();
if(cljs.core.truth_(inst_49049)){
var statearr_49161_49231 = state_49114__$1;
(statearr_49161_49231[(1)] = (26));

} else {
var statearr_49162_49232 = state_49114__$1;
(statearr_49162_49232[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (34))){
var inst_49083 = (state_49114[(2)]);
var state_49114__$1 = state_49114;
if(cljs.core.truth_(inst_49083)){
var statearr_49163_49233 = state_49114__$1;
(statearr_49163_49233[(1)] = (38));

} else {
var statearr_49164_49234 = state_49114__$1;
(statearr_49164_49234[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (17))){
var state_49114__$1 = state_49114;
var statearr_49165_49235 = state_49114__$1;
(statearr_49165_49235[(2)] = recompile_dependents);

(statearr_49165_49235[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (3))){
var state_49114__$1 = state_49114;
var statearr_49166_49236 = state_49114__$1;
(statearr_49166_49236[(2)] = null);

(statearr_49166_49236[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (12))){
var inst_49005 = (state_49114[(2)]);
var state_49114__$1 = state_49114;
var statearr_49167_49237 = state_49114__$1;
(statearr_49167_49237[(2)] = inst_49005);

(statearr_49167_49237[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (2))){
var inst_48967 = (state_49114[(11)]);
var inst_48974 = cljs.core.seq.call(null,inst_48967);
var inst_48975 = inst_48974;
var inst_48976 = null;
var inst_48977 = (0);
var inst_48978 = (0);
var state_49114__$1 = (function (){var statearr_49168 = state_49114;
(statearr_49168[(5)] = inst_48975);

(statearr_49168[(6)] = inst_48978);

(statearr_49168[(7)] = inst_48976);

(statearr_49168[(8)] = inst_48977);

return statearr_49168;
})();
var statearr_49169_49238 = state_49114__$1;
(statearr_49169_49238[(2)] = null);

(statearr_49169_49238[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (23))){
var inst_49034 = (state_49114[(24)]);
var inst_49031 = (state_49114[(21)]);
var inst_49036 = (state_49114[(22)]);
var inst_49028 = (state_49114[(17)]);
var inst_49032 = (state_49114[(23)]);
var inst_49039 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_49041 = (function (){var all_files = inst_49028;
var res_SINGLEQUOTE_ = inst_49031;
var res = inst_49032;
var files_not_loaded = inst_49034;
var dependencies_that_loaded = inst_49036;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49034,inst_49031,inst_49036,inst_49028,inst_49032,inst_49039,state_val_49115,c__40014__auto__,map__48960,map__48960__$1,opts,before_jsload,on_jsload,reload_dependents,map__48961,map__48961__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49040){
var map__49170 = p__49040;
var map__49170__$1 = ((((!((map__49170 == null)))?((((map__49170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49170):map__49170);
var request_url = cljs.core.get.call(null,map__49170__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49034,inst_49031,inst_49036,inst_49028,inst_49032,inst_49039,state_val_49115,c__40014__auto__,map__48960,map__48960__$1,opts,before_jsload,on_jsload,reload_dependents,map__48961,map__48961__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49042 = cljs.core.reverse.call(null,inst_49036);
var inst_49043 = cljs.core.map.call(null,inst_49041,inst_49042);
var inst_49044 = cljs.core.pr_str.call(null,inst_49043);
var inst_49045 = figwheel.client.utils.log.call(null,inst_49044);
var state_49114__$1 = (function (){var statearr_49172 = state_49114;
(statearr_49172[(29)] = inst_49039);

return statearr_49172;
})();
var statearr_49173_49239 = state_49114__$1;
(statearr_49173_49239[(2)] = inst_49045);

(statearr_49173_49239[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (35))){
var state_49114__$1 = state_49114;
var statearr_49174_49240 = state_49114__$1;
(statearr_49174_49240[(2)] = true);

(statearr_49174_49240[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (19))){
var inst_49018 = (state_49114[(10)]);
var inst_49024 = figwheel.client.file_reloading.expand_files.call(null,inst_49018);
var state_49114__$1 = state_49114;
var statearr_49175_49241 = state_49114__$1;
(statearr_49175_49241[(2)] = inst_49024);

(statearr_49175_49241[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (11))){
var state_49114__$1 = state_49114;
var statearr_49176_49242 = state_49114__$1;
(statearr_49176_49242[(2)] = null);

(statearr_49176_49242[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (9))){
var inst_49007 = (state_49114[(2)]);
var state_49114__$1 = state_49114;
var statearr_49177_49243 = state_49114__$1;
(statearr_49177_49243[(2)] = inst_49007);

(statearr_49177_49243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (5))){
var inst_48978 = (state_49114[(6)]);
var inst_48977 = (state_49114[(8)]);
var inst_48980 = (inst_48978 < inst_48977);
var inst_48981 = inst_48980;
var state_49114__$1 = state_49114;
if(cljs.core.truth_(inst_48981)){
var statearr_49178_49244 = state_49114__$1;
(statearr_49178_49244[(1)] = (7));

} else {
var statearr_49179_49245 = state_49114__$1;
(statearr_49179_49245[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (14))){
var inst_48988 = (state_49114[(20)]);
var inst_48997 = cljs.core.first.call(null,inst_48988);
var inst_48998 = figwheel.client.file_reloading.eval_body.call(null,inst_48997,opts);
var inst_48999 = cljs.core.next.call(null,inst_48988);
var inst_48975 = inst_48999;
var inst_48976 = null;
var inst_48977 = (0);
var inst_48978 = (0);
var state_49114__$1 = (function (){var statearr_49180 = state_49114;
(statearr_49180[(5)] = inst_48975);

(statearr_49180[(6)] = inst_48978);

(statearr_49180[(30)] = inst_48998);

(statearr_49180[(7)] = inst_48976);

(statearr_49180[(8)] = inst_48977);

return statearr_49180;
})();
var statearr_49181_49246 = state_49114__$1;
(statearr_49181_49246[(2)] = null);

(statearr_49181_49246[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (45))){
var state_49114__$1 = state_49114;
var statearr_49182_49247 = state_49114__$1;
(statearr_49182_49247[(2)] = null);

(statearr_49182_49247[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (26))){
var inst_49034 = (state_49114[(24)]);
var inst_49031 = (state_49114[(21)]);
var inst_49036 = (state_49114[(22)]);
var inst_49028 = (state_49114[(17)]);
var inst_49032 = (state_49114[(23)]);
var inst_49051 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_49053 = (function (){var all_files = inst_49028;
var res_SINGLEQUOTE_ = inst_49031;
var res = inst_49032;
var files_not_loaded = inst_49034;
var dependencies_that_loaded = inst_49036;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49034,inst_49031,inst_49036,inst_49028,inst_49032,inst_49051,state_val_49115,c__40014__auto__,map__48960,map__48960__$1,opts,before_jsload,on_jsload,reload_dependents,map__48961,map__48961__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49052){
var map__49183 = p__49052;
var map__49183__$1 = ((((!((map__49183 == null)))?((((map__49183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49183):map__49183);
var namespace = cljs.core.get.call(null,map__49183__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__49183__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49034,inst_49031,inst_49036,inst_49028,inst_49032,inst_49051,state_val_49115,c__40014__auto__,map__48960,map__48960__$1,opts,before_jsload,on_jsload,reload_dependents,map__48961,map__48961__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49054 = cljs.core.map.call(null,inst_49053,inst_49032);
var inst_49055 = cljs.core.pr_str.call(null,inst_49054);
var inst_49056 = figwheel.client.utils.log.call(null,inst_49055);
var inst_49057 = (function (){var all_files = inst_49028;
var res_SINGLEQUOTE_ = inst_49031;
var res = inst_49032;
var files_not_loaded = inst_49034;
var dependencies_that_loaded = inst_49036;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49034,inst_49031,inst_49036,inst_49028,inst_49032,inst_49051,inst_49053,inst_49054,inst_49055,inst_49056,state_val_49115,c__40014__auto__,map__48960,map__48960__$1,opts,before_jsload,on_jsload,reload_dependents,map__48961,map__48961__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49034,inst_49031,inst_49036,inst_49028,inst_49032,inst_49051,inst_49053,inst_49054,inst_49055,inst_49056,state_val_49115,c__40014__auto__,map__48960,map__48960__$1,opts,before_jsload,on_jsload,reload_dependents,map__48961,map__48961__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49058 = setTimeout(inst_49057,(10));
var state_49114__$1 = (function (){var statearr_49185 = state_49114;
(statearr_49185[(31)] = inst_49056);

(statearr_49185[(32)] = inst_49051);

return statearr_49185;
})();
var statearr_49186_49248 = state_49114__$1;
(statearr_49186_49248[(2)] = inst_49058);

(statearr_49186_49248[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (16))){
var state_49114__$1 = state_49114;
var statearr_49187_49249 = state_49114__$1;
(statearr_49187_49249[(2)] = reload_dependents);

(statearr_49187_49249[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (38))){
var inst_49068 = (state_49114[(14)]);
var inst_49085 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49068);
var state_49114__$1 = state_49114;
var statearr_49188_49250 = state_49114__$1;
(statearr_49188_49250[(2)] = inst_49085);

(statearr_49188_49250[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (30))){
var state_49114__$1 = state_49114;
var statearr_49189_49251 = state_49114__$1;
(statearr_49189_49251[(2)] = null);

(statearr_49189_49251[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (10))){
var inst_48988 = (state_49114[(20)]);
var inst_48990 = cljs.core.chunked_seq_QMARK_.call(null,inst_48988);
var state_49114__$1 = state_49114;
if(inst_48990){
var statearr_49190_49252 = state_49114__$1;
(statearr_49190_49252[(1)] = (13));

} else {
var statearr_49191_49253 = state_49114__$1;
(statearr_49191_49253[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (18))){
var inst_49022 = (state_49114[(2)]);
var state_49114__$1 = state_49114;
if(cljs.core.truth_(inst_49022)){
var statearr_49192_49254 = state_49114__$1;
(statearr_49192_49254[(1)] = (19));

} else {
var statearr_49193_49255 = state_49114__$1;
(statearr_49193_49255[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (42))){
var state_49114__$1 = state_49114;
var statearr_49194_49256 = state_49114__$1;
(statearr_49194_49256[(2)] = null);

(statearr_49194_49256[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (37))){
var inst_49080 = (state_49114[(2)]);
var state_49114__$1 = state_49114;
var statearr_49195_49257 = state_49114__$1;
(statearr_49195_49257[(2)] = inst_49080);

(statearr_49195_49257[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49115 === (8))){
var inst_48975 = (state_49114[(5)]);
var inst_48988 = (state_49114[(20)]);
var inst_48988__$1 = cljs.core.seq.call(null,inst_48975);
var state_49114__$1 = (function (){var statearr_49196 = state_49114;
(statearr_49196[(20)] = inst_48988__$1);

return statearr_49196;
})();
if(inst_48988__$1){
var statearr_49197_49258 = state_49114__$1;
(statearr_49197_49258[(1)] = (10));

} else {
var statearr_49198_49259 = state_49114__$1;
(statearr_49198_49259[(1)] = (11));

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
});})(c__40014__auto__,map__48960,map__48960__$1,opts,before_jsload,on_jsload,reload_dependents,map__48961,map__48961__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__39995__auto__,c__40014__auto__,map__48960,map__48960__$1,opts,before_jsload,on_jsload,reload_dependents,map__48961,map__48961__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39996__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39996__auto____0 = (function (){
var statearr_49200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49200[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__39996__auto__);

(statearr_49200[(1)] = (1));

return statearr_49200;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39996__auto____1 = (function (state_49114){
while(true){
var result__39997__auto__ = switch__39995__auto__.call(null,state_49114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39997__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__39996__auto__ = function(state_49114){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39996__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39996__auto____1.call(this,state_49114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39996__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__39996__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39996__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39996__auto__;
})()
;})(switch__39995__auto__,c__40014__auto__,map__48960,map__48960__$1,opts,before_jsload,on_jsload,reload_dependents,map__48961,map__48961__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__40016__auto__ = (function (){var statearr_49201 = f__40015__auto__.call(null);
(statearr_49201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40014__auto__);

return statearr_49201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40016__auto__);
});})(c__40014__auto__,map__48960,map__48960__$1,opts,before_jsload,on_jsload,reload_dependents,map__48961,map__48961__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__40014__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__49262,link){
var map__49265 = p__49262;
var map__49265__$1 = ((((!((map__49265 == null)))?((((map__49265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49265):map__49265);
var file = cljs.core.get.call(null,map__49265__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__49265,map__49265__$1,file){
return (function (p1__49260_SHARP_,p2__49261_SHARP_){
if(cljs.core._EQ_.call(null,p1__49260_SHARP_,p2__49261_SHARP_)){
return p1__49260_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__49265,map__49265__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__49271){
var map__49272 = p__49271;
var map__49272__$1 = ((((!((map__49272 == null)))?((((map__49272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49272):map__49272);
var match_length = cljs.core.get.call(null,map__49272__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__49272__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__49267_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__49267_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args49274 = [];
var len__38153__auto___49277 = arguments.length;
var i__38154__auto___49278 = (0);
while(true){
if((i__38154__auto___49278 < len__38153__auto___49277)){
args49274.push((arguments[i__38154__auto___49278]));

var G__49279 = (i__38154__auto___49278 + (1));
i__38154__auto___49278 = G__49279;
continue;
} else {
}
break;
}

var G__49276 = args49274.length;
switch (G__49276) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49274.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__49281_SHARP_,p2__49282_SHARP_){
return cljs.core.assoc.call(null,p1__49281_SHARP_,cljs.core.get.call(null,p2__49282_SHARP_,key),p2__49282_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__49283){
var map__49286 = p__49283;
var map__49286__$1 = ((((!((map__49286 == null)))?((((map__49286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49286):map__49286);
var f_data = map__49286__$1;
var file = cljs.core.get.call(null,map__49286__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__49288,p__49289){
var map__49298 = p__49288;
var map__49298__$1 = ((((!((map__49298 == null)))?((((map__49298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49298):map__49298);
var opts = map__49298__$1;
var on_cssload = cljs.core.get.call(null,map__49298__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__49299 = p__49289;
var map__49299__$1 = ((((!((map__49299 == null)))?((((map__49299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49299):map__49299);
var files_msg = map__49299__$1;
var files = cljs.core.get.call(null,map__49299__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__49302_49306 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__49303_49307 = null;
var count__49304_49308 = (0);
var i__49305_49309 = (0);
while(true){
if((i__49305_49309 < count__49304_49308)){
var f_49310 = cljs.core._nth.call(null,chunk__49303_49307,i__49305_49309);
figwheel.client.file_reloading.reload_css_file.call(null,f_49310);

var G__49311 = seq__49302_49306;
var G__49312 = chunk__49303_49307;
var G__49313 = count__49304_49308;
var G__49314 = (i__49305_49309 + (1));
seq__49302_49306 = G__49311;
chunk__49303_49307 = G__49312;
count__49304_49308 = G__49313;
i__49305_49309 = G__49314;
continue;
} else {
var temp__4657__auto___49315 = cljs.core.seq.call(null,seq__49302_49306);
if(temp__4657__auto___49315){
var seq__49302_49316__$1 = temp__4657__auto___49315;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49302_49316__$1)){
var c__37889__auto___49317 = cljs.core.chunk_first.call(null,seq__49302_49316__$1);
var G__49318 = cljs.core.chunk_rest.call(null,seq__49302_49316__$1);
var G__49319 = c__37889__auto___49317;
var G__49320 = cljs.core.count.call(null,c__37889__auto___49317);
var G__49321 = (0);
seq__49302_49306 = G__49318;
chunk__49303_49307 = G__49319;
count__49304_49308 = G__49320;
i__49305_49309 = G__49321;
continue;
} else {
var f_49322 = cljs.core.first.call(null,seq__49302_49316__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_49322);

var G__49323 = cljs.core.next.call(null,seq__49302_49316__$1);
var G__49324 = null;
var G__49325 = (0);
var G__49326 = (0);
seq__49302_49306 = G__49323;
chunk__49303_49307 = G__49324;
count__49304_49308 = G__49325;
i__49305_49309 = G__49326;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__49298,map__49298__$1,opts,on_cssload,map__49299,map__49299__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__49298,map__49298__$1,opts,on_cssload,map__49299,map__49299__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map