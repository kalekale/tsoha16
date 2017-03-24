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
var or__36967__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__36967__auto__){
return or__36967__auto__;
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
var or__36967__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__36967__auto__)){
return or__36967__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__42651_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__42651_SHARP_));
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
var seq__42656 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__42657 = null;
var count__42658 = (0);
var i__42659 = (0);
while(true){
if((i__42659 < count__42658)){
var n = cljs.core._nth.call(null,chunk__42657,i__42659);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__42660 = seq__42656;
var G__42661 = chunk__42657;
var G__42662 = count__42658;
var G__42663 = (i__42659 + (1));
seq__42656 = G__42660;
chunk__42657 = G__42661;
count__42658 = G__42662;
i__42659 = G__42663;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42656);
if(temp__4657__auto__){
var seq__42656__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42656__$1)){
var c__37778__auto__ = cljs.core.chunk_first.call(null,seq__42656__$1);
var G__42664 = cljs.core.chunk_rest.call(null,seq__42656__$1);
var G__42665 = c__37778__auto__;
var G__42666 = cljs.core.count.call(null,c__37778__auto__);
var G__42667 = (0);
seq__42656 = G__42664;
chunk__42657 = G__42665;
count__42658 = G__42666;
i__42659 = G__42667;
continue;
} else {
var n = cljs.core.first.call(null,seq__42656__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__42668 = cljs.core.next.call(null,seq__42656__$1);
var G__42669 = null;
var G__42670 = (0);
var G__42671 = (0);
seq__42656 = G__42668;
chunk__42657 = G__42669;
count__42658 = G__42670;
i__42659 = G__42671;
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

var seq__42722_42733 = cljs.core.seq.call(null,deps);
var chunk__42723_42734 = null;
var count__42724_42735 = (0);
var i__42725_42736 = (0);
while(true){
if((i__42725_42736 < count__42724_42735)){
var dep_42737 = cljs.core._nth.call(null,chunk__42723_42734,i__42725_42736);
topo_sort_helper_STAR_.call(null,dep_42737,(depth + (1)),state);

var G__42738 = seq__42722_42733;
var G__42739 = chunk__42723_42734;
var G__42740 = count__42724_42735;
var G__42741 = (i__42725_42736 + (1));
seq__42722_42733 = G__42738;
chunk__42723_42734 = G__42739;
count__42724_42735 = G__42740;
i__42725_42736 = G__42741;
continue;
} else {
var temp__4657__auto___42742 = cljs.core.seq.call(null,seq__42722_42733);
if(temp__4657__auto___42742){
var seq__42722_42743__$1 = temp__4657__auto___42742;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42722_42743__$1)){
var c__37778__auto___42744 = cljs.core.chunk_first.call(null,seq__42722_42743__$1);
var G__42745 = cljs.core.chunk_rest.call(null,seq__42722_42743__$1);
var G__42746 = c__37778__auto___42744;
var G__42747 = cljs.core.count.call(null,c__37778__auto___42744);
var G__42748 = (0);
seq__42722_42733 = G__42745;
chunk__42723_42734 = G__42746;
count__42724_42735 = G__42747;
i__42725_42736 = G__42748;
continue;
} else {
var dep_42749 = cljs.core.first.call(null,seq__42722_42743__$1);
topo_sort_helper_STAR_.call(null,dep_42749,(depth + (1)),state);

var G__42750 = cljs.core.next.call(null,seq__42722_42743__$1);
var G__42751 = null;
var G__42752 = (0);
var G__42753 = (0);
seq__42722_42733 = G__42750;
chunk__42723_42734 = G__42751;
count__42724_42735 = G__42752;
i__42725_42736 = G__42753;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__42726){
var vec__42730 = p__42726;
var seq__42731 = cljs.core.seq.call(null,vec__42730);
var first__42732 = cljs.core.first.call(null,seq__42731);
var seq__42731__$1 = cljs.core.next.call(null,seq__42731);
var x = first__42732;
var xs = seq__42731__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__42730,seq__42731,first__42732,seq__42731__$1,x,xs,get_deps__$1){
return (function (p1__42672_SHARP_){
return clojure.set.difference.call(null,p1__42672_SHARP_,x);
});})(vec__42730,seq__42731,first__42732,seq__42731__$1,x,xs,get_deps__$1))
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
var seq__42766 = cljs.core.seq.call(null,provides);
var chunk__42767 = null;
var count__42768 = (0);
var i__42769 = (0);
while(true){
if((i__42769 < count__42768)){
var prov = cljs.core._nth.call(null,chunk__42767,i__42769);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42770_42778 = cljs.core.seq.call(null,requires);
var chunk__42771_42779 = null;
var count__42772_42780 = (0);
var i__42773_42781 = (0);
while(true){
if((i__42773_42781 < count__42772_42780)){
var req_42782 = cljs.core._nth.call(null,chunk__42771_42779,i__42773_42781);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42782,prov);

var G__42783 = seq__42770_42778;
var G__42784 = chunk__42771_42779;
var G__42785 = count__42772_42780;
var G__42786 = (i__42773_42781 + (1));
seq__42770_42778 = G__42783;
chunk__42771_42779 = G__42784;
count__42772_42780 = G__42785;
i__42773_42781 = G__42786;
continue;
} else {
var temp__4657__auto___42787 = cljs.core.seq.call(null,seq__42770_42778);
if(temp__4657__auto___42787){
var seq__42770_42788__$1 = temp__4657__auto___42787;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42770_42788__$1)){
var c__37778__auto___42789 = cljs.core.chunk_first.call(null,seq__42770_42788__$1);
var G__42790 = cljs.core.chunk_rest.call(null,seq__42770_42788__$1);
var G__42791 = c__37778__auto___42789;
var G__42792 = cljs.core.count.call(null,c__37778__auto___42789);
var G__42793 = (0);
seq__42770_42778 = G__42790;
chunk__42771_42779 = G__42791;
count__42772_42780 = G__42792;
i__42773_42781 = G__42793;
continue;
} else {
var req_42794 = cljs.core.first.call(null,seq__42770_42788__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42794,prov);

var G__42795 = cljs.core.next.call(null,seq__42770_42788__$1);
var G__42796 = null;
var G__42797 = (0);
var G__42798 = (0);
seq__42770_42778 = G__42795;
chunk__42771_42779 = G__42796;
count__42772_42780 = G__42797;
i__42773_42781 = G__42798;
continue;
}
} else {
}
}
break;
}

var G__42799 = seq__42766;
var G__42800 = chunk__42767;
var G__42801 = count__42768;
var G__42802 = (i__42769 + (1));
seq__42766 = G__42799;
chunk__42767 = G__42800;
count__42768 = G__42801;
i__42769 = G__42802;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42766);
if(temp__4657__auto__){
var seq__42766__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42766__$1)){
var c__37778__auto__ = cljs.core.chunk_first.call(null,seq__42766__$1);
var G__42803 = cljs.core.chunk_rest.call(null,seq__42766__$1);
var G__42804 = c__37778__auto__;
var G__42805 = cljs.core.count.call(null,c__37778__auto__);
var G__42806 = (0);
seq__42766 = G__42803;
chunk__42767 = G__42804;
count__42768 = G__42805;
i__42769 = G__42806;
continue;
} else {
var prov = cljs.core.first.call(null,seq__42766__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42774_42807 = cljs.core.seq.call(null,requires);
var chunk__42775_42808 = null;
var count__42776_42809 = (0);
var i__42777_42810 = (0);
while(true){
if((i__42777_42810 < count__42776_42809)){
var req_42811 = cljs.core._nth.call(null,chunk__42775_42808,i__42777_42810);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42811,prov);

var G__42812 = seq__42774_42807;
var G__42813 = chunk__42775_42808;
var G__42814 = count__42776_42809;
var G__42815 = (i__42777_42810 + (1));
seq__42774_42807 = G__42812;
chunk__42775_42808 = G__42813;
count__42776_42809 = G__42814;
i__42777_42810 = G__42815;
continue;
} else {
var temp__4657__auto___42816__$1 = cljs.core.seq.call(null,seq__42774_42807);
if(temp__4657__auto___42816__$1){
var seq__42774_42817__$1 = temp__4657__auto___42816__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42774_42817__$1)){
var c__37778__auto___42818 = cljs.core.chunk_first.call(null,seq__42774_42817__$1);
var G__42819 = cljs.core.chunk_rest.call(null,seq__42774_42817__$1);
var G__42820 = c__37778__auto___42818;
var G__42821 = cljs.core.count.call(null,c__37778__auto___42818);
var G__42822 = (0);
seq__42774_42807 = G__42819;
chunk__42775_42808 = G__42820;
count__42776_42809 = G__42821;
i__42777_42810 = G__42822;
continue;
} else {
var req_42823 = cljs.core.first.call(null,seq__42774_42817__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42823,prov);

var G__42824 = cljs.core.next.call(null,seq__42774_42817__$1);
var G__42825 = null;
var G__42826 = (0);
var G__42827 = (0);
seq__42774_42807 = G__42824;
chunk__42775_42808 = G__42825;
count__42776_42809 = G__42826;
i__42777_42810 = G__42827;
continue;
}
} else {
}
}
break;
}

var G__42828 = cljs.core.next.call(null,seq__42766__$1);
var G__42829 = null;
var G__42830 = (0);
var G__42831 = (0);
seq__42766 = G__42828;
chunk__42767 = G__42829;
count__42768 = G__42830;
i__42769 = G__42831;
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
var seq__42836_42840 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__42837_42841 = null;
var count__42838_42842 = (0);
var i__42839_42843 = (0);
while(true){
if((i__42839_42843 < count__42838_42842)){
var ns_42844 = cljs.core._nth.call(null,chunk__42837_42841,i__42839_42843);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42844);

var G__42845 = seq__42836_42840;
var G__42846 = chunk__42837_42841;
var G__42847 = count__42838_42842;
var G__42848 = (i__42839_42843 + (1));
seq__42836_42840 = G__42845;
chunk__42837_42841 = G__42846;
count__42838_42842 = G__42847;
i__42839_42843 = G__42848;
continue;
} else {
var temp__4657__auto___42849 = cljs.core.seq.call(null,seq__42836_42840);
if(temp__4657__auto___42849){
var seq__42836_42850__$1 = temp__4657__auto___42849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42836_42850__$1)){
var c__37778__auto___42851 = cljs.core.chunk_first.call(null,seq__42836_42850__$1);
var G__42852 = cljs.core.chunk_rest.call(null,seq__42836_42850__$1);
var G__42853 = c__37778__auto___42851;
var G__42854 = cljs.core.count.call(null,c__37778__auto___42851);
var G__42855 = (0);
seq__42836_42840 = G__42852;
chunk__42837_42841 = G__42853;
count__42838_42842 = G__42854;
i__42839_42843 = G__42855;
continue;
} else {
var ns_42856 = cljs.core.first.call(null,seq__42836_42850__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42856);

var G__42857 = cljs.core.next.call(null,seq__42836_42850__$1);
var G__42858 = null;
var G__42859 = (0);
var G__42860 = (0);
seq__42836_42840 = G__42857;
chunk__42837_42841 = G__42858;
count__42838_42842 = G__42859;
i__42839_42843 = G__42860;
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
goog.require_figwheel_backup_ = (function (){var or__36967__auto__ = goog.require__;
if(cljs.core.truth_(or__36967__auto__)){
return or__36967__auto__;
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
var G__42861__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__42861 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42862__i = 0, G__42862__a = new Array(arguments.length -  0);
while (G__42862__i < G__42862__a.length) {G__42862__a[G__42862__i] = arguments[G__42862__i + 0]; ++G__42862__i;}
  args = new cljs.core.IndexedSeq(G__42862__a,0);
} 
return G__42861__delegate.call(this,args);};
G__42861.cljs$lang$maxFixedArity = 0;
G__42861.cljs$lang$applyTo = (function (arglist__42863){
var args = cljs.core.seq(arglist__42863);
return G__42861__delegate(args);
});
G__42861.cljs$core$IFn$_invoke$arity$variadic = G__42861__delegate;
return G__42861;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__42865 = cljs.core._EQ_;
var expr__42866 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__42865.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__42866))){
var path_parts = ((function (pred__42865,expr__42866){
return (function (p1__42864_SHARP_){
return clojure.string.split.call(null,p1__42864_SHARP_,/[\/\\]/);
});})(pred__42865,expr__42866))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__42865,expr__42866){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e42868){if((e42868 instanceof Error)){
var e = e42868;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e42868;

}
}})());
});
;})(path_parts,sep,root,pred__42865,expr__42866))
} else {
if(cljs.core.truth_(pred__42865.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__42866))){
return ((function (pred__42865,expr__42866){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__42865,expr__42866){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__42865,expr__42866))
);

return deferred.addErrback(((function (deferred,pred__42865,expr__42866){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__42865,expr__42866))
);
});
;})(pred__42865,expr__42866))
} else {
return ((function (pred__42865,expr__42866){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__42865,expr__42866))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__42869,callback){
var map__42872 = p__42869;
var map__42872__$1 = ((((!((map__42872 == null)))?((((map__42872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42872):map__42872);
var file_msg = map__42872__$1;
var request_url = cljs.core.get.call(null,map__42872__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__42872,map__42872__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__42872,map__42872__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__40785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40785__auto__){
return (function (){
var f__40786__auto__ = (function (){var switch__40681__auto__ = ((function (c__40785__auto__){
return (function (state_42896){
var state_val_42897 = (state_42896[(1)]);
if((state_val_42897 === (7))){
var inst_42892 = (state_42896[(2)]);
var state_42896__$1 = state_42896;
var statearr_42898_42914 = state_42896__$1;
(statearr_42898_42914[(2)] = inst_42892);

(statearr_42898_42914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42897 === (1))){
var state_42896__$1 = state_42896;
var statearr_42899_42915 = state_42896__$1;
(statearr_42899_42915[(2)] = null);

(statearr_42899_42915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42897 === (4))){
var inst_42876 = (state_42896[(5)]);
var inst_42876__$1 = (state_42896[(2)]);
var state_42896__$1 = (function (){var statearr_42900 = state_42896;
(statearr_42900[(5)] = inst_42876__$1);

return statearr_42900;
})();
if(cljs.core.truth_(inst_42876__$1)){
var statearr_42901_42916 = state_42896__$1;
(statearr_42901_42916[(1)] = (5));

} else {
var statearr_42902_42917 = state_42896__$1;
(statearr_42902_42917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42897 === (6))){
var state_42896__$1 = state_42896;
var statearr_42903_42918 = state_42896__$1;
(statearr_42903_42918[(2)] = null);

(statearr_42903_42918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42897 === (3))){
var inst_42894 = (state_42896[(2)]);
var state_42896__$1 = state_42896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42896__$1,inst_42894);
} else {
if((state_val_42897 === (2))){
var state_42896__$1 = state_42896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42896__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_42897 === (11))){
var inst_42888 = (state_42896[(2)]);
var state_42896__$1 = (function (){var statearr_42904 = state_42896;
(statearr_42904[(6)] = inst_42888);

return statearr_42904;
})();
var statearr_42905_42919 = state_42896__$1;
(statearr_42905_42919[(2)] = null);

(statearr_42905_42919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42897 === (9))){
var inst_42880 = (state_42896[(7)]);
var inst_42882 = (state_42896[(8)]);
var inst_42884 = inst_42882.call(null,inst_42880);
var state_42896__$1 = state_42896;
var statearr_42906_42920 = state_42896__$1;
(statearr_42906_42920[(2)] = inst_42884);

(statearr_42906_42920[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42897 === (5))){
var inst_42876 = (state_42896[(5)]);
var inst_42878 = figwheel.client.file_reloading.blocking_load.call(null,inst_42876);
var state_42896__$1 = state_42896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42896__$1,(8),inst_42878);
} else {
if((state_val_42897 === (10))){
var inst_42880 = (state_42896[(7)]);
var inst_42886 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_42880);
var state_42896__$1 = state_42896;
var statearr_42907_42921 = state_42896__$1;
(statearr_42907_42921[(2)] = inst_42886);

(statearr_42907_42921[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42897 === (8))){
var inst_42882 = (state_42896[(8)]);
var inst_42876 = (state_42896[(5)]);
var inst_42880 = (state_42896[(2)]);
var inst_42881 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_42882__$1 = cljs.core.get.call(null,inst_42881,inst_42876);
var state_42896__$1 = (function (){var statearr_42908 = state_42896;
(statearr_42908[(7)] = inst_42880);

(statearr_42908[(8)] = inst_42882__$1);

return statearr_42908;
})();
if(cljs.core.truth_(inst_42882__$1)){
var statearr_42909_42922 = state_42896__$1;
(statearr_42909_42922[(1)] = (9));

} else {
var statearr_42910_42923 = state_42896__$1;
(statearr_42910_42923[(1)] = (10));

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
});})(c__40785__auto__))
;
return ((function (switch__40681__auto__,c__40785__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__40682__auto__ = null;
var figwheel$client$file_reloading$state_machine__40682__auto____0 = (function (){
var statearr_42912 = [null,null,null,null,null,null,null,null,null];
(statearr_42912[(0)] = figwheel$client$file_reloading$state_machine__40682__auto__);

(statearr_42912[(1)] = (1));

return statearr_42912;
});
var figwheel$client$file_reloading$state_machine__40682__auto____1 = (function (state_42896){
while(true){
var result__40683__auto__ = switch__40681__auto__.call(null,state_42896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40683__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__40682__auto__ = function(state_42896){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__40682__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__40682__auto____1.call(this,state_42896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__40682__auto____0;
figwheel$client$file_reloading$state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__40682__auto____1;
return figwheel$client$file_reloading$state_machine__40682__auto__;
})()
;})(switch__40681__auto__,c__40785__auto__))
})();
var state__40787__auto__ = (function (){var statearr_42913 = f__40786__auto__.call(null);
(statearr_42913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40785__auto__);

return statearr_42913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40787__auto__);
});})(c__40785__auto__))
);

return c__40785__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__42924,callback){
var map__42927 = p__42924;
var map__42927__$1 = ((((!((map__42927 == null)))?((((map__42927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42927):map__42927);
var file_msg = map__42927__$1;
var namespace = cljs.core.get.call(null,map__42927__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__42927,map__42927__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__42927,map__42927__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__42929){
var map__42932 = p__42929;
var map__42932__$1 = ((((!((map__42932 == null)))?((((map__42932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42932):map__42932);
var file_msg = map__42932__$1;
var namespace = cljs.core.get.call(null,map__42932__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__36955__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__36955__auto__){
var or__36967__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36967__auto__)){
return or__36967__auto__;
} else {
var or__36967__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36967__auto____$1)){
return or__36967__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__36955__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__42934,callback){
var map__42937 = p__42934;
var map__42937__$1 = ((((!((map__42937 == null)))?((((map__42937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42937):map__42937);
var file_msg = map__42937__$1;
var request_url = cljs.core.get.call(null,map__42937__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__42937__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__40785__auto___43033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40785__auto___43033,out){
return (function (){
var f__40786__auto__ = (function (){var switch__40681__auto__ = ((function (c__40785__auto___43033,out){
return (function (state_43019){
var state_val_43020 = (state_43019[(1)]);
if((state_val_43020 === (1))){
var inst_42993 = cljs.core.seq.call(null,files);
var inst_42994 = cljs.core.first.call(null,inst_42993);
var inst_42995 = cljs.core.next.call(null,inst_42993);
var inst_42996 = files;
var state_43019__$1 = (function (){var statearr_43021 = state_43019;
(statearr_43021[(5)] = inst_42994);

(statearr_43021[(6)] = inst_42996);

(statearr_43021[(7)] = inst_42995);

return statearr_43021;
})();
var statearr_43022_43034 = state_43019__$1;
(statearr_43022_43034[(2)] = null);

(statearr_43022_43034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43020 === (2))){
var inst_42996 = (state_43019[(6)]);
var inst_43002 = (state_43019[(8)]);
var inst_43001 = cljs.core.seq.call(null,inst_42996);
var inst_43002__$1 = cljs.core.first.call(null,inst_43001);
var inst_43003 = cljs.core.next.call(null,inst_43001);
var inst_43004 = (inst_43002__$1 == null);
var inst_43005 = cljs.core.not.call(null,inst_43004);
var state_43019__$1 = (function (){var statearr_43023 = state_43019;
(statearr_43023[(8)] = inst_43002__$1);

(statearr_43023[(9)] = inst_43003);

return statearr_43023;
})();
if(inst_43005){
var statearr_43024_43035 = state_43019__$1;
(statearr_43024_43035[(1)] = (4));

} else {
var statearr_43025_43036 = state_43019__$1;
(statearr_43025_43036[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43020 === (3))){
var inst_43017 = (state_43019[(2)]);
var state_43019__$1 = state_43019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43019__$1,inst_43017);
} else {
if((state_val_43020 === (4))){
var inst_43002 = (state_43019[(8)]);
var inst_43007 = figwheel.client.file_reloading.reload_js_file.call(null,inst_43002);
var state_43019__$1 = state_43019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43019__$1,(7),inst_43007);
} else {
if((state_val_43020 === (5))){
var inst_43013 = cljs.core.async.close_BANG_.call(null,out);
var state_43019__$1 = state_43019;
var statearr_43026_43037 = state_43019__$1;
(statearr_43026_43037[(2)] = inst_43013);

(statearr_43026_43037[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43020 === (6))){
var inst_43015 = (state_43019[(2)]);
var state_43019__$1 = state_43019;
var statearr_43027_43038 = state_43019__$1;
(statearr_43027_43038[(2)] = inst_43015);

(statearr_43027_43038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43020 === (7))){
var inst_43003 = (state_43019[(9)]);
var inst_43009 = (state_43019[(2)]);
var inst_43010 = cljs.core.async.put_BANG_.call(null,out,inst_43009);
var inst_42996 = inst_43003;
var state_43019__$1 = (function (){var statearr_43028 = state_43019;
(statearr_43028[(6)] = inst_42996);

(statearr_43028[(10)] = inst_43010);

return statearr_43028;
})();
var statearr_43029_43039 = state_43019__$1;
(statearr_43029_43039[(2)] = null);

(statearr_43029_43039[(1)] = (2));


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
});})(c__40785__auto___43033,out))
;
return ((function (switch__40681__auto__,c__40785__auto___43033,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40682__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40682__auto____0 = (function (){
var statearr_43031 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43031[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40682__auto__);

(statearr_43031[(1)] = (1));

return statearr_43031;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40682__auto____1 = (function (state_43019){
while(true){
var result__40683__auto__ = switch__40681__auto__.call(null,state_43019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40683__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40682__auto__ = function(state_43019){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40682__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40682__auto____1.call(this,state_43019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40682__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40682__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40682__auto__;
})()
;})(switch__40681__auto__,c__40785__auto___43033,out))
})();
var state__40787__auto__ = (function (){var statearr_43032 = f__40786__auto__.call(null);
(statearr_43032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40785__auto___43033);

return statearr_43032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40787__auto__);
});})(c__40785__auto___43033,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__43040,opts){
var map__43044 = p__43040;
var map__43044__$1 = ((((!((map__43044 == null)))?((((map__43044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43044):map__43044);
var eval_body__$1 = cljs.core.get.call(null,map__43044__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__43044__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__36955__auto__ = eval_body__$1;
if(cljs.core.truth_(and__36955__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__36955__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e43046){var e = e43046;
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
return (function (p1__43047_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__43047_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__43056){
var vec__43057 = p__43056;
var k = cljs.core.nth.call(null,vec__43057,(0),null);
var v = cljs.core.nth.call(null,vec__43057,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__43060){
var vec__43061 = p__43060;
var k = cljs.core.nth.call(null,vec__43061,(0),null);
var v = cljs.core.nth.call(null,vec__43061,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__43067,p__43068){
var map__43311 = p__43067;
var map__43311__$1 = ((((!((map__43311 == null)))?((((map__43311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43311):map__43311);
var opts = map__43311__$1;
var before_jsload = cljs.core.get.call(null,map__43311__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__43311__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__43311__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__43312 = p__43068;
var map__43312__$1 = ((((!((map__43312 == null)))?((((map__43312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43312):map__43312);
var msg = map__43312__$1;
var files = cljs.core.get.call(null,map__43312__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__43312__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__43312__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__40785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40785__auto__,map__43311,map__43311__$1,opts,before_jsload,on_jsload,reload_dependents,map__43312,map__43312__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__40786__auto__ = (function (){var switch__40681__auto__ = ((function (c__40785__auto__,map__43311,map__43311__$1,opts,before_jsload,on_jsload,reload_dependents,map__43312,map__43312__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_43465){
var state_val_43466 = (state_43465[(1)]);
if((state_val_43466 === (7))){
var inst_43328 = (state_43465[(5)]);
var inst_43327 = (state_43465[(6)]);
var inst_43326 = (state_43465[(7)]);
var inst_43329 = (state_43465[(8)]);
var inst_43334 = cljs.core._nth.call(null,inst_43327,inst_43329);
var inst_43335 = figwheel.client.file_reloading.eval_body.call(null,inst_43334,opts);
var inst_43336 = (inst_43329 + (1));
var tmp43467 = inst_43328;
var tmp43468 = inst_43327;
var tmp43469 = inst_43326;
var inst_43326__$1 = tmp43469;
var inst_43327__$1 = tmp43468;
var inst_43328__$1 = tmp43467;
var inst_43329__$1 = inst_43336;
var state_43465__$1 = (function (){var statearr_43470 = state_43465;
(statearr_43470[(5)] = inst_43328__$1);

(statearr_43470[(9)] = inst_43335);

(statearr_43470[(6)] = inst_43327__$1);

(statearr_43470[(7)] = inst_43326__$1);

(statearr_43470[(8)] = inst_43329__$1);

return statearr_43470;
})();
var statearr_43471_43553 = state_43465__$1;
(statearr_43471_43553[(2)] = null);

(statearr_43471_43553[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (20))){
var inst_43369 = (state_43465[(10)]);
var inst_43377 = figwheel.client.file_reloading.sort_files.call(null,inst_43369);
var state_43465__$1 = state_43465;
var statearr_43472_43554 = state_43465__$1;
(statearr_43472_43554[(2)] = inst_43377);

(statearr_43472_43554[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (27))){
var state_43465__$1 = state_43465;
var statearr_43473_43555 = state_43465__$1;
(statearr_43473_43555[(2)] = null);

(statearr_43473_43555[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (1))){
var inst_43318 = (state_43465[(11)]);
var inst_43315 = before_jsload.call(null,files);
var inst_43316 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_43317 = (function (){return ((function (inst_43318,inst_43315,inst_43316,state_val_43466,c__40785__auto__,map__43311,map__43311__$1,opts,before_jsload,on_jsload,reload_dependents,map__43312,map__43312__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43064_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__43064_SHARP_);
});
;})(inst_43318,inst_43315,inst_43316,state_val_43466,c__40785__auto__,map__43311,map__43311__$1,opts,before_jsload,on_jsload,reload_dependents,map__43312,map__43312__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43318__$1 = cljs.core.filter.call(null,inst_43317,files);
var inst_43319 = cljs.core.not_empty.call(null,inst_43318__$1);
var state_43465__$1 = (function (){var statearr_43474 = state_43465;
(statearr_43474[(11)] = inst_43318__$1);

(statearr_43474[(12)] = inst_43316);

(statearr_43474[(13)] = inst_43315);

return statearr_43474;
})();
if(cljs.core.truth_(inst_43319)){
var statearr_43475_43556 = state_43465__$1;
(statearr_43475_43556[(1)] = (2));

} else {
var statearr_43476_43557 = state_43465__$1;
(statearr_43476_43557[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (24))){
var state_43465__$1 = state_43465;
var statearr_43477_43558 = state_43465__$1;
(statearr_43477_43558[(2)] = null);

(statearr_43477_43558[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (39))){
var inst_43419 = (state_43465[(14)]);
var state_43465__$1 = state_43465;
var statearr_43478_43559 = state_43465__$1;
(statearr_43478_43559[(2)] = inst_43419);

(statearr_43478_43559[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (46))){
var inst_43460 = (state_43465[(2)]);
var state_43465__$1 = state_43465;
var statearr_43479_43560 = state_43465__$1;
(statearr_43479_43560[(2)] = inst_43460);

(statearr_43479_43560[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (4))){
var inst_43363 = (state_43465[(2)]);
var inst_43364 = cljs.core.List.EMPTY;
var inst_43365 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_43364);
var inst_43366 = (function (){return ((function (inst_43363,inst_43364,inst_43365,state_val_43466,c__40785__auto__,map__43311,map__43311__$1,opts,before_jsload,on_jsload,reload_dependents,map__43312,map__43312__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43065_SHARP_){
var and__36955__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__43065_SHARP_);
if(cljs.core.truth_(and__36955__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__43065_SHARP_));
} else {
return and__36955__auto__;
}
});
;})(inst_43363,inst_43364,inst_43365,state_val_43466,c__40785__auto__,map__43311,map__43311__$1,opts,before_jsload,on_jsload,reload_dependents,map__43312,map__43312__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43367 = cljs.core.filter.call(null,inst_43366,files);
var inst_43368 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_43369 = cljs.core.concat.call(null,inst_43367,inst_43368);
var state_43465__$1 = (function (){var statearr_43480 = state_43465;
(statearr_43480[(15)] = inst_43365);

(statearr_43480[(16)] = inst_43363);

(statearr_43480[(10)] = inst_43369);

return statearr_43480;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_43481_43561 = state_43465__$1;
(statearr_43481_43561[(1)] = (16));

} else {
var statearr_43482_43562 = state_43465__$1;
(statearr_43482_43562[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (15))){
var inst_43353 = (state_43465[(2)]);
var state_43465__$1 = state_43465;
var statearr_43483_43563 = state_43465__$1;
(statearr_43483_43563[(2)] = inst_43353);

(statearr_43483_43563[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (21))){
var inst_43379 = (state_43465[(17)]);
var inst_43379__$1 = (state_43465[(2)]);
var inst_43380 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_43379__$1);
var state_43465__$1 = (function (){var statearr_43484 = state_43465;
(statearr_43484[(17)] = inst_43379__$1);

return statearr_43484;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43465__$1,(22),inst_43380);
} else {
if((state_val_43466 === (31))){
var inst_43463 = (state_43465[(2)]);
var state_43465__$1 = state_43465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43465__$1,inst_43463);
} else {
if((state_val_43466 === (32))){
var inst_43419 = (state_43465[(14)]);
var inst_43424 = inst_43419.cljs$lang$protocol_mask$partition0$;
var inst_43425 = (inst_43424 & (64));
var inst_43426 = inst_43419.cljs$core$ISeq$;
var inst_43427 = (inst_43425) || (inst_43426);
var state_43465__$1 = state_43465;
if(cljs.core.truth_(inst_43427)){
var statearr_43485_43564 = state_43465__$1;
(statearr_43485_43564[(1)] = (35));

} else {
var statearr_43486_43565 = state_43465__$1;
(statearr_43486_43565[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (40))){
var inst_43440 = (state_43465[(18)]);
var inst_43439 = (state_43465[(2)]);
var inst_43440__$1 = cljs.core.get.call(null,inst_43439,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_43441 = cljs.core.get.call(null,inst_43439,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_43442 = cljs.core.not_empty.call(null,inst_43440__$1);
var state_43465__$1 = (function (){var statearr_43487 = state_43465;
(statearr_43487[(18)] = inst_43440__$1);

(statearr_43487[(19)] = inst_43441);

return statearr_43487;
})();
if(cljs.core.truth_(inst_43442)){
var statearr_43488_43566 = state_43465__$1;
(statearr_43488_43566[(1)] = (41));

} else {
var statearr_43489_43567 = state_43465__$1;
(statearr_43489_43567[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (33))){
var state_43465__$1 = state_43465;
var statearr_43490_43568 = state_43465__$1;
(statearr_43490_43568[(2)] = false);

(statearr_43490_43568[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (13))){
var inst_43339 = (state_43465[(20)]);
var inst_43343 = cljs.core.chunk_first.call(null,inst_43339);
var inst_43344 = cljs.core.chunk_rest.call(null,inst_43339);
var inst_43345 = cljs.core.count.call(null,inst_43343);
var inst_43326 = inst_43344;
var inst_43327 = inst_43343;
var inst_43328 = inst_43345;
var inst_43329 = (0);
var state_43465__$1 = (function (){var statearr_43491 = state_43465;
(statearr_43491[(5)] = inst_43328);

(statearr_43491[(6)] = inst_43327);

(statearr_43491[(7)] = inst_43326);

(statearr_43491[(8)] = inst_43329);

return statearr_43491;
})();
var statearr_43492_43569 = state_43465__$1;
(statearr_43492_43569[(2)] = null);

(statearr_43492_43569[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (22))){
var inst_43379 = (state_43465[(17)]);
var inst_43383 = (state_43465[(21)]);
var inst_43387 = (state_43465[(22)]);
var inst_43382 = (state_43465[(23)]);
var inst_43382__$1 = (state_43465[(2)]);
var inst_43383__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43382__$1);
var inst_43384 = (function (){var all_files = inst_43379;
var res_SINGLEQUOTE_ = inst_43382__$1;
var res = inst_43383__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_43379,inst_43383,inst_43387,inst_43382,inst_43382__$1,inst_43383__$1,state_val_43466,c__40785__auto__,map__43311,map__43311__$1,opts,before_jsload,on_jsload,reload_dependents,map__43312,map__43312__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43066_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__43066_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_43379,inst_43383,inst_43387,inst_43382,inst_43382__$1,inst_43383__$1,state_val_43466,c__40785__auto__,map__43311,map__43311__$1,opts,before_jsload,on_jsload,reload_dependents,map__43312,map__43312__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43385 = cljs.core.filter.call(null,inst_43384,inst_43382__$1);
var inst_43386 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_43387__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43386);
var inst_43388 = cljs.core.not_empty.call(null,inst_43387__$1);
var state_43465__$1 = (function (){var statearr_43493 = state_43465;
(statearr_43493[(24)] = inst_43385);

(statearr_43493[(21)] = inst_43383__$1);

(statearr_43493[(22)] = inst_43387__$1);

(statearr_43493[(23)] = inst_43382__$1);

return statearr_43493;
})();
if(cljs.core.truth_(inst_43388)){
var statearr_43494_43570 = state_43465__$1;
(statearr_43494_43570[(1)] = (23));

} else {
var statearr_43495_43571 = state_43465__$1;
(statearr_43495_43571[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (36))){
var state_43465__$1 = state_43465;
var statearr_43496_43572 = state_43465__$1;
(statearr_43496_43572[(2)] = false);

(statearr_43496_43572[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (41))){
var inst_43440 = (state_43465[(18)]);
var inst_43444 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_43445 = cljs.core.map.call(null,inst_43444,inst_43440);
var inst_43446 = cljs.core.pr_str.call(null,inst_43445);
var inst_43447 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_43446)].join('');
var inst_43448 = figwheel.client.utils.log.call(null,inst_43447);
var state_43465__$1 = state_43465;
var statearr_43497_43573 = state_43465__$1;
(statearr_43497_43573[(2)] = inst_43448);

(statearr_43497_43573[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (43))){
var inst_43441 = (state_43465[(19)]);
var inst_43451 = (state_43465[(2)]);
var inst_43452 = cljs.core.not_empty.call(null,inst_43441);
var state_43465__$1 = (function (){var statearr_43498 = state_43465;
(statearr_43498[(25)] = inst_43451);

return statearr_43498;
})();
if(cljs.core.truth_(inst_43452)){
var statearr_43499_43574 = state_43465__$1;
(statearr_43499_43574[(1)] = (44));

} else {
var statearr_43500_43575 = state_43465__$1;
(statearr_43500_43575[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (29))){
var inst_43419 = (state_43465[(14)]);
var inst_43379 = (state_43465[(17)]);
var inst_43385 = (state_43465[(24)]);
var inst_43383 = (state_43465[(21)]);
var inst_43387 = (state_43465[(22)]);
var inst_43382 = (state_43465[(23)]);
var inst_43415 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_43418 = (function (){var all_files = inst_43379;
var res_SINGLEQUOTE_ = inst_43382;
var res = inst_43383;
var files_not_loaded = inst_43385;
var dependencies_that_loaded = inst_43387;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43419,inst_43379,inst_43385,inst_43383,inst_43387,inst_43382,inst_43415,state_val_43466,c__40785__auto__,map__43311,map__43311__$1,opts,before_jsload,on_jsload,reload_dependents,map__43312,map__43312__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43417){
var map__43501 = p__43417;
var map__43501__$1 = ((((!((map__43501 == null)))?((((map__43501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43501):map__43501);
var namespace = cljs.core.get.call(null,map__43501__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43419,inst_43379,inst_43385,inst_43383,inst_43387,inst_43382,inst_43415,state_val_43466,c__40785__auto__,map__43311,map__43311__$1,opts,before_jsload,on_jsload,reload_dependents,map__43312,map__43312__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43419__$1 = cljs.core.group_by.call(null,inst_43418,inst_43385);
var inst_43421 = (inst_43419__$1 == null);
var inst_43422 = cljs.core.not.call(null,inst_43421);
var state_43465__$1 = (function (){var statearr_43503 = state_43465;
(statearr_43503[(14)] = inst_43419__$1);

(statearr_43503[(26)] = inst_43415);

return statearr_43503;
})();
if(inst_43422){
var statearr_43504_43576 = state_43465__$1;
(statearr_43504_43576[(1)] = (32));

} else {
var statearr_43505_43577 = state_43465__$1;
(statearr_43505_43577[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (44))){
var inst_43441 = (state_43465[(19)]);
var inst_43454 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43441);
var inst_43455 = cljs.core.pr_str.call(null,inst_43454);
var inst_43456 = [cljs.core.str("not required: "),cljs.core.str(inst_43455)].join('');
var inst_43457 = figwheel.client.utils.log.call(null,inst_43456);
var state_43465__$1 = state_43465;
var statearr_43506_43578 = state_43465__$1;
(statearr_43506_43578[(2)] = inst_43457);

(statearr_43506_43578[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (6))){
var inst_43360 = (state_43465[(2)]);
var state_43465__$1 = state_43465;
var statearr_43507_43579 = state_43465__$1;
(statearr_43507_43579[(2)] = inst_43360);

(statearr_43507_43579[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (28))){
var inst_43385 = (state_43465[(24)]);
var inst_43412 = (state_43465[(2)]);
var inst_43413 = cljs.core.not_empty.call(null,inst_43385);
var state_43465__$1 = (function (){var statearr_43508 = state_43465;
(statearr_43508[(27)] = inst_43412);

return statearr_43508;
})();
if(cljs.core.truth_(inst_43413)){
var statearr_43509_43580 = state_43465__$1;
(statearr_43509_43580[(1)] = (29));

} else {
var statearr_43510_43581 = state_43465__$1;
(statearr_43510_43581[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (25))){
var inst_43383 = (state_43465[(21)]);
var inst_43399 = (state_43465[(2)]);
var inst_43400 = cljs.core.not_empty.call(null,inst_43383);
var state_43465__$1 = (function (){var statearr_43511 = state_43465;
(statearr_43511[(28)] = inst_43399);

return statearr_43511;
})();
if(cljs.core.truth_(inst_43400)){
var statearr_43512_43582 = state_43465__$1;
(statearr_43512_43582[(1)] = (26));

} else {
var statearr_43513_43583 = state_43465__$1;
(statearr_43513_43583[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (34))){
var inst_43434 = (state_43465[(2)]);
var state_43465__$1 = state_43465;
if(cljs.core.truth_(inst_43434)){
var statearr_43514_43584 = state_43465__$1;
(statearr_43514_43584[(1)] = (38));

} else {
var statearr_43515_43585 = state_43465__$1;
(statearr_43515_43585[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (17))){
var state_43465__$1 = state_43465;
var statearr_43516_43586 = state_43465__$1;
(statearr_43516_43586[(2)] = recompile_dependents);

(statearr_43516_43586[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (3))){
var state_43465__$1 = state_43465;
var statearr_43517_43587 = state_43465__$1;
(statearr_43517_43587[(2)] = null);

(statearr_43517_43587[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (12))){
var inst_43356 = (state_43465[(2)]);
var state_43465__$1 = state_43465;
var statearr_43518_43588 = state_43465__$1;
(statearr_43518_43588[(2)] = inst_43356);

(statearr_43518_43588[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (2))){
var inst_43318 = (state_43465[(11)]);
var inst_43325 = cljs.core.seq.call(null,inst_43318);
var inst_43326 = inst_43325;
var inst_43327 = null;
var inst_43328 = (0);
var inst_43329 = (0);
var state_43465__$1 = (function (){var statearr_43519 = state_43465;
(statearr_43519[(5)] = inst_43328);

(statearr_43519[(6)] = inst_43327);

(statearr_43519[(7)] = inst_43326);

(statearr_43519[(8)] = inst_43329);

return statearr_43519;
})();
var statearr_43520_43589 = state_43465__$1;
(statearr_43520_43589[(2)] = null);

(statearr_43520_43589[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (23))){
var inst_43379 = (state_43465[(17)]);
var inst_43385 = (state_43465[(24)]);
var inst_43383 = (state_43465[(21)]);
var inst_43387 = (state_43465[(22)]);
var inst_43382 = (state_43465[(23)]);
var inst_43390 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_43392 = (function (){var all_files = inst_43379;
var res_SINGLEQUOTE_ = inst_43382;
var res = inst_43383;
var files_not_loaded = inst_43385;
var dependencies_that_loaded = inst_43387;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43379,inst_43385,inst_43383,inst_43387,inst_43382,inst_43390,state_val_43466,c__40785__auto__,map__43311,map__43311__$1,opts,before_jsload,on_jsload,reload_dependents,map__43312,map__43312__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43391){
var map__43521 = p__43391;
var map__43521__$1 = ((((!((map__43521 == null)))?((((map__43521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43521):map__43521);
var request_url = cljs.core.get.call(null,map__43521__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43379,inst_43385,inst_43383,inst_43387,inst_43382,inst_43390,state_val_43466,c__40785__auto__,map__43311,map__43311__$1,opts,before_jsload,on_jsload,reload_dependents,map__43312,map__43312__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43393 = cljs.core.reverse.call(null,inst_43387);
var inst_43394 = cljs.core.map.call(null,inst_43392,inst_43393);
var inst_43395 = cljs.core.pr_str.call(null,inst_43394);
var inst_43396 = figwheel.client.utils.log.call(null,inst_43395);
var state_43465__$1 = (function (){var statearr_43523 = state_43465;
(statearr_43523[(29)] = inst_43390);

return statearr_43523;
})();
var statearr_43524_43590 = state_43465__$1;
(statearr_43524_43590[(2)] = inst_43396);

(statearr_43524_43590[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (35))){
var state_43465__$1 = state_43465;
var statearr_43525_43591 = state_43465__$1;
(statearr_43525_43591[(2)] = true);

(statearr_43525_43591[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (19))){
var inst_43369 = (state_43465[(10)]);
var inst_43375 = figwheel.client.file_reloading.expand_files.call(null,inst_43369);
var state_43465__$1 = state_43465;
var statearr_43526_43592 = state_43465__$1;
(statearr_43526_43592[(2)] = inst_43375);

(statearr_43526_43592[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (11))){
var state_43465__$1 = state_43465;
var statearr_43527_43593 = state_43465__$1;
(statearr_43527_43593[(2)] = null);

(statearr_43527_43593[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (9))){
var inst_43358 = (state_43465[(2)]);
var state_43465__$1 = state_43465;
var statearr_43528_43594 = state_43465__$1;
(statearr_43528_43594[(2)] = inst_43358);

(statearr_43528_43594[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (5))){
var inst_43328 = (state_43465[(5)]);
var inst_43329 = (state_43465[(8)]);
var inst_43331 = (inst_43329 < inst_43328);
var inst_43332 = inst_43331;
var state_43465__$1 = state_43465;
if(cljs.core.truth_(inst_43332)){
var statearr_43529_43595 = state_43465__$1;
(statearr_43529_43595[(1)] = (7));

} else {
var statearr_43530_43596 = state_43465__$1;
(statearr_43530_43596[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (14))){
var inst_43339 = (state_43465[(20)]);
var inst_43348 = cljs.core.first.call(null,inst_43339);
var inst_43349 = figwheel.client.file_reloading.eval_body.call(null,inst_43348,opts);
var inst_43350 = cljs.core.next.call(null,inst_43339);
var inst_43326 = inst_43350;
var inst_43327 = null;
var inst_43328 = (0);
var inst_43329 = (0);
var state_43465__$1 = (function (){var statearr_43531 = state_43465;
(statearr_43531[(5)] = inst_43328);

(statearr_43531[(6)] = inst_43327);

(statearr_43531[(7)] = inst_43326);

(statearr_43531[(30)] = inst_43349);

(statearr_43531[(8)] = inst_43329);

return statearr_43531;
})();
var statearr_43532_43597 = state_43465__$1;
(statearr_43532_43597[(2)] = null);

(statearr_43532_43597[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (45))){
var state_43465__$1 = state_43465;
var statearr_43533_43598 = state_43465__$1;
(statearr_43533_43598[(2)] = null);

(statearr_43533_43598[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (26))){
var inst_43379 = (state_43465[(17)]);
var inst_43385 = (state_43465[(24)]);
var inst_43383 = (state_43465[(21)]);
var inst_43387 = (state_43465[(22)]);
var inst_43382 = (state_43465[(23)]);
var inst_43402 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_43404 = (function (){var all_files = inst_43379;
var res_SINGLEQUOTE_ = inst_43382;
var res = inst_43383;
var files_not_loaded = inst_43385;
var dependencies_that_loaded = inst_43387;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43379,inst_43385,inst_43383,inst_43387,inst_43382,inst_43402,state_val_43466,c__40785__auto__,map__43311,map__43311__$1,opts,before_jsload,on_jsload,reload_dependents,map__43312,map__43312__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43403){
var map__43534 = p__43403;
var map__43534__$1 = ((((!((map__43534 == null)))?((((map__43534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43534):map__43534);
var namespace = cljs.core.get.call(null,map__43534__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__43534__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43379,inst_43385,inst_43383,inst_43387,inst_43382,inst_43402,state_val_43466,c__40785__auto__,map__43311,map__43311__$1,opts,before_jsload,on_jsload,reload_dependents,map__43312,map__43312__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43405 = cljs.core.map.call(null,inst_43404,inst_43383);
var inst_43406 = cljs.core.pr_str.call(null,inst_43405);
var inst_43407 = figwheel.client.utils.log.call(null,inst_43406);
var inst_43408 = (function (){var all_files = inst_43379;
var res_SINGLEQUOTE_ = inst_43382;
var res = inst_43383;
var files_not_loaded = inst_43385;
var dependencies_that_loaded = inst_43387;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43379,inst_43385,inst_43383,inst_43387,inst_43382,inst_43402,inst_43404,inst_43405,inst_43406,inst_43407,state_val_43466,c__40785__auto__,map__43311,map__43311__$1,opts,before_jsload,on_jsload,reload_dependents,map__43312,map__43312__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43379,inst_43385,inst_43383,inst_43387,inst_43382,inst_43402,inst_43404,inst_43405,inst_43406,inst_43407,state_val_43466,c__40785__auto__,map__43311,map__43311__$1,opts,before_jsload,on_jsload,reload_dependents,map__43312,map__43312__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43409 = setTimeout(inst_43408,(10));
var state_43465__$1 = (function (){var statearr_43536 = state_43465;
(statearr_43536[(31)] = inst_43402);

(statearr_43536[(32)] = inst_43407);

return statearr_43536;
})();
var statearr_43537_43599 = state_43465__$1;
(statearr_43537_43599[(2)] = inst_43409);

(statearr_43537_43599[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (16))){
var state_43465__$1 = state_43465;
var statearr_43538_43600 = state_43465__$1;
(statearr_43538_43600[(2)] = reload_dependents);

(statearr_43538_43600[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (38))){
var inst_43419 = (state_43465[(14)]);
var inst_43436 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43419);
var state_43465__$1 = state_43465;
var statearr_43539_43601 = state_43465__$1;
(statearr_43539_43601[(2)] = inst_43436);

(statearr_43539_43601[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (30))){
var state_43465__$1 = state_43465;
var statearr_43540_43602 = state_43465__$1;
(statearr_43540_43602[(2)] = null);

(statearr_43540_43602[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (10))){
var inst_43339 = (state_43465[(20)]);
var inst_43341 = cljs.core.chunked_seq_QMARK_.call(null,inst_43339);
var state_43465__$1 = state_43465;
if(inst_43341){
var statearr_43541_43603 = state_43465__$1;
(statearr_43541_43603[(1)] = (13));

} else {
var statearr_43542_43604 = state_43465__$1;
(statearr_43542_43604[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (18))){
var inst_43373 = (state_43465[(2)]);
var state_43465__$1 = state_43465;
if(cljs.core.truth_(inst_43373)){
var statearr_43543_43605 = state_43465__$1;
(statearr_43543_43605[(1)] = (19));

} else {
var statearr_43544_43606 = state_43465__$1;
(statearr_43544_43606[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (42))){
var state_43465__$1 = state_43465;
var statearr_43545_43607 = state_43465__$1;
(statearr_43545_43607[(2)] = null);

(statearr_43545_43607[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (37))){
var inst_43431 = (state_43465[(2)]);
var state_43465__$1 = state_43465;
var statearr_43546_43608 = state_43465__$1;
(statearr_43546_43608[(2)] = inst_43431);

(statearr_43546_43608[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (8))){
var inst_43339 = (state_43465[(20)]);
var inst_43326 = (state_43465[(7)]);
var inst_43339__$1 = cljs.core.seq.call(null,inst_43326);
var state_43465__$1 = (function (){var statearr_43547 = state_43465;
(statearr_43547[(20)] = inst_43339__$1);

return statearr_43547;
})();
if(inst_43339__$1){
var statearr_43548_43609 = state_43465__$1;
(statearr_43548_43609[(1)] = (10));

} else {
var statearr_43549_43610 = state_43465__$1;
(statearr_43549_43610[(1)] = (11));

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
});})(c__40785__auto__,map__43311,map__43311__$1,opts,before_jsload,on_jsload,reload_dependents,map__43312,map__43312__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__40681__auto__,c__40785__auto__,map__43311,map__43311__$1,opts,before_jsload,on_jsload,reload_dependents,map__43312,map__43312__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40682__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40682__auto____0 = (function (){
var statearr_43551 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43551[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__40682__auto__);

(statearr_43551[(1)] = (1));

return statearr_43551;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40682__auto____1 = (function (state_43465){
while(true){
var result__40683__auto__ = switch__40681__auto__.call(null,state_43465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40683__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__40682__auto__ = function(state_43465){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40682__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40682__auto____1.call(this,state_43465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__40682__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__40682__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__40682__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40682__auto__;
})()
;})(switch__40681__auto__,c__40785__auto__,map__43311,map__43311__$1,opts,before_jsload,on_jsload,reload_dependents,map__43312,map__43312__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__40787__auto__ = (function (){var statearr_43552 = f__40786__auto__.call(null);
(statearr_43552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40785__auto__);

return statearr_43552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40787__auto__);
});})(c__40785__auto__,map__43311,map__43311__$1,opts,before_jsload,on_jsload,reload_dependents,map__43312,map__43312__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__40785__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__43613,link){
var map__43616 = p__43613;
var map__43616__$1 = ((((!((map__43616 == null)))?((((map__43616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43616):map__43616);
var file = cljs.core.get.call(null,map__43616__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__43616,map__43616__$1,file){
return (function (p1__43611_SHARP_,p2__43612_SHARP_){
if(cljs.core._EQ_.call(null,p1__43611_SHARP_,p2__43612_SHARP_)){
return p1__43611_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__43616,map__43616__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__43622){
var map__43623 = p__43622;
var map__43623__$1 = ((((!((map__43623 == null)))?((((map__43623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43623):map__43623);
var match_length = cljs.core.get.call(null,map__43623__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__43623__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__43618_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__43618_SHARP_);
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
var args43625 = [];
var len__38042__auto___43628 = arguments.length;
var i__38043__auto___43629 = (0);
while(true){
if((i__38043__auto___43629 < len__38042__auto___43628)){
args43625.push((arguments[i__38043__auto___43629]));

var G__43630 = (i__38043__auto___43629 + (1));
i__38043__auto___43629 = G__43630;
continue;
} else {
}
break;
}

var G__43627 = args43625.length;
switch (G__43627) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43625.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__43632_SHARP_,p2__43633_SHARP_){
return cljs.core.assoc.call(null,p1__43632_SHARP_,cljs.core.get.call(null,p2__43633_SHARP_,key),p2__43633_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__43634){
var map__43637 = p__43634;
var map__43637__$1 = ((((!((map__43637 == null)))?((((map__43637.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43637.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43637):map__43637);
var f_data = map__43637__$1;
var file = cljs.core.get.call(null,map__43637__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__43639,p__43640){
var map__43649 = p__43639;
var map__43649__$1 = ((((!((map__43649 == null)))?((((map__43649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43649):map__43649);
var opts = map__43649__$1;
var on_cssload = cljs.core.get.call(null,map__43649__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__43650 = p__43640;
var map__43650__$1 = ((((!((map__43650 == null)))?((((map__43650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43650):map__43650);
var files_msg = map__43650__$1;
var files = cljs.core.get.call(null,map__43650__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__43653_43657 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__43654_43658 = null;
var count__43655_43659 = (0);
var i__43656_43660 = (0);
while(true){
if((i__43656_43660 < count__43655_43659)){
var f_43661 = cljs.core._nth.call(null,chunk__43654_43658,i__43656_43660);
figwheel.client.file_reloading.reload_css_file.call(null,f_43661);

var G__43662 = seq__43653_43657;
var G__43663 = chunk__43654_43658;
var G__43664 = count__43655_43659;
var G__43665 = (i__43656_43660 + (1));
seq__43653_43657 = G__43662;
chunk__43654_43658 = G__43663;
count__43655_43659 = G__43664;
i__43656_43660 = G__43665;
continue;
} else {
var temp__4657__auto___43666 = cljs.core.seq.call(null,seq__43653_43657);
if(temp__4657__auto___43666){
var seq__43653_43667__$1 = temp__4657__auto___43666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43653_43667__$1)){
var c__37778__auto___43668 = cljs.core.chunk_first.call(null,seq__43653_43667__$1);
var G__43669 = cljs.core.chunk_rest.call(null,seq__43653_43667__$1);
var G__43670 = c__37778__auto___43668;
var G__43671 = cljs.core.count.call(null,c__37778__auto___43668);
var G__43672 = (0);
seq__43653_43657 = G__43669;
chunk__43654_43658 = G__43670;
count__43655_43659 = G__43671;
i__43656_43660 = G__43672;
continue;
} else {
var f_43673 = cljs.core.first.call(null,seq__43653_43667__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_43673);

var G__43674 = cljs.core.next.call(null,seq__43653_43667__$1);
var G__43675 = null;
var G__43676 = (0);
var G__43677 = (0);
seq__43653_43657 = G__43674;
chunk__43654_43658 = G__43675;
count__43655_43659 = G__43676;
i__43656_43660 = G__43677;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__43649,map__43649__$1,opts,on_cssload,map__43650,map__43650__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__43649,map__43649__$1,opts,on_cssload,map__43650,map__43650__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map