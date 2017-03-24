// Compiled by ClojureScript 1.9.229 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__39130_39134 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__39131_39135 = null;
var count__39132_39136 = (0);
var i__39133_39137 = (0);
while(true){
if((i__39133_39137 < count__39132_39136)){
var k_39138 = cljs.core._nth.call(null,chunk__39131_39135,i__39133_39137);
var v_39139 = (b[k_39138]);
(a[k_39138] = v_39139);

var G__39140 = seq__39130_39134;
var G__39141 = chunk__39131_39135;
var G__39142 = count__39132_39136;
var G__39143 = (i__39133_39137 + (1));
seq__39130_39134 = G__39140;
chunk__39131_39135 = G__39141;
count__39132_39136 = G__39142;
i__39133_39137 = G__39143;
continue;
} else {
var temp__4657__auto___39144 = cljs.core.seq.call(null,seq__39130_39134);
if(temp__4657__auto___39144){
var seq__39130_39145__$1 = temp__4657__auto___39144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39130_39145__$1)){
var c__37778__auto___39146 = cljs.core.chunk_first.call(null,seq__39130_39145__$1);
var G__39147 = cljs.core.chunk_rest.call(null,seq__39130_39145__$1);
var G__39148 = c__37778__auto___39146;
var G__39149 = cljs.core.count.call(null,c__37778__auto___39146);
var G__39150 = (0);
seq__39130_39134 = G__39147;
chunk__39131_39135 = G__39148;
count__39132_39136 = G__39149;
i__39133_39137 = G__39150;
continue;
} else {
var k_39151 = cljs.core.first.call(null,seq__39130_39145__$1);
var v_39152 = (b[k_39151]);
(a[k_39151] = v_39152);

var G__39153 = cljs.core.next.call(null,seq__39130_39145__$1);
var G__39154 = null;
var G__39155 = (0);
var G__39156 = (0);
seq__39130_39134 = G__39153;
chunk__39131_39135 = G__39154;
count__39132_39136 = G__39155;
i__39133_39137 = G__39156;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__37573__auto__,writer__37574__auto__,opt__37575__auto__){
return cljs.core._write.call(null,writer__37574__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__37573__auto__,writer__37574__auto__,opt__37575__auto__){
return cljs.core._write.call(null,writer__37574__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args39157 = [];
var len__38042__auto___39160 = arguments.length;
var i__38043__auto___39161 = (0);
while(true){
if((i__38043__auto___39161 < len__38042__auto___39160)){
args39157.push((arguments[i__38043__auto___39161]));

var G__39162 = (i__38043__auto___39161 + (1));
i__38043__auto___39161 = G__39162;
continue;
} else {
}
break;
}

var G__39159 = args39157.length;
switch (G__39159) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39157.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__39164 = (i + (2));
var G__39165 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__39164;
ret = G__39165;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__37573__auto__,writer__37574__auto__,opt__37575__auto__){
return cljs.core._write.call(null,writer__37574__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__37573__auto__,writer__37574__auto__,opt__37575__auto__){
return cljs.core._write.call(null,writer__37574__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__39166_39170 = cljs.core.seq.call(null,v);
var chunk__39167_39171 = null;
var count__39168_39172 = (0);
var i__39169_39173 = (0);
while(true){
if((i__39169_39173 < count__39168_39172)){
var x_39174 = cljs.core._nth.call(null,chunk__39167_39171,i__39169_39173);
ret.push(x_39174);

var G__39175 = seq__39166_39170;
var G__39176 = chunk__39167_39171;
var G__39177 = count__39168_39172;
var G__39178 = (i__39169_39173 + (1));
seq__39166_39170 = G__39175;
chunk__39167_39171 = G__39176;
count__39168_39172 = G__39177;
i__39169_39173 = G__39178;
continue;
} else {
var temp__4657__auto___39179 = cljs.core.seq.call(null,seq__39166_39170);
if(temp__4657__auto___39179){
var seq__39166_39180__$1 = temp__4657__auto___39179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39166_39180__$1)){
var c__37778__auto___39181 = cljs.core.chunk_first.call(null,seq__39166_39180__$1);
var G__39182 = cljs.core.chunk_rest.call(null,seq__39166_39180__$1);
var G__39183 = c__37778__auto___39181;
var G__39184 = cljs.core.count.call(null,c__37778__auto___39181);
var G__39185 = (0);
seq__39166_39170 = G__39182;
chunk__39167_39171 = G__39183;
count__39168_39172 = G__39184;
i__39169_39173 = G__39185;
continue;
} else {
var x_39186 = cljs.core.first.call(null,seq__39166_39180__$1);
ret.push(x_39186);

var G__39187 = cljs.core.next.call(null,seq__39166_39180__$1);
var G__39188 = null;
var G__39189 = (0);
var G__39190 = (0);
seq__39166_39170 = G__39187;
chunk__39167_39171 = G__39188;
count__39168_39172 = G__39189;
i__39169_39173 = G__39190;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__37573__auto__,writer__37574__auto__,opt__37575__auto__){
return cljs.core._write.call(null,writer__37574__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__37573__auto__,writer__37574__auto__,opt__37575__auto__){
return cljs.core._write.call(null,writer__37574__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__39191_39195 = cljs.core.seq.call(null,v);
var chunk__39192_39196 = null;
var count__39193_39197 = (0);
var i__39194_39198 = (0);
while(true){
if((i__39194_39198 < count__39193_39197)){
var x_39199 = cljs.core._nth.call(null,chunk__39192_39196,i__39194_39198);
ret.push(x_39199);

var G__39200 = seq__39191_39195;
var G__39201 = chunk__39192_39196;
var G__39202 = count__39193_39197;
var G__39203 = (i__39194_39198 + (1));
seq__39191_39195 = G__39200;
chunk__39192_39196 = G__39201;
count__39193_39197 = G__39202;
i__39194_39198 = G__39203;
continue;
} else {
var temp__4657__auto___39204 = cljs.core.seq.call(null,seq__39191_39195);
if(temp__4657__auto___39204){
var seq__39191_39205__$1 = temp__4657__auto___39204;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39191_39205__$1)){
var c__37778__auto___39206 = cljs.core.chunk_first.call(null,seq__39191_39205__$1);
var G__39207 = cljs.core.chunk_rest.call(null,seq__39191_39205__$1);
var G__39208 = c__37778__auto___39206;
var G__39209 = cljs.core.count.call(null,c__37778__auto___39206);
var G__39210 = (0);
seq__39191_39195 = G__39207;
chunk__39192_39196 = G__39208;
count__39193_39197 = G__39209;
i__39194_39198 = G__39210;
continue;
} else {
var x_39211 = cljs.core.first.call(null,seq__39191_39205__$1);
ret.push(x_39211);

var G__39212 = cljs.core.next.call(null,seq__39191_39205__$1);
var G__39213 = null;
var G__39214 = (0);
var G__39215 = (0);
seq__39191_39195 = G__39212;
chunk__39192_39196 = G__39213;
count__39193_39197 = G__39214;
i__39194_39198 = G__39215;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__37573__auto__,writer__37574__auto__,opt__37575__auto__){
return cljs.core._write.call(null,writer__37574__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__39216_39220 = cljs.core.seq.call(null,v);
var chunk__39217_39221 = null;
var count__39218_39222 = (0);
var i__39219_39223 = (0);
while(true){
if((i__39219_39223 < count__39218_39222)){
var x_39224 = cljs.core._nth.call(null,chunk__39217_39221,i__39219_39223);
ret.push(x_39224);

var G__39225 = seq__39216_39220;
var G__39226 = chunk__39217_39221;
var G__39227 = count__39218_39222;
var G__39228 = (i__39219_39223 + (1));
seq__39216_39220 = G__39225;
chunk__39217_39221 = G__39226;
count__39218_39222 = G__39227;
i__39219_39223 = G__39228;
continue;
} else {
var temp__4657__auto___39229 = cljs.core.seq.call(null,seq__39216_39220);
if(temp__4657__auto___39229){
var seq__39216_39230__$1 = temp__4657__auto___39229;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39216_39230__$1)){
var c__37778__auto___39231 = cljs.core.chunk_first.call(null,seq__39216_39230__$1);
var G__39232 = cljs.core.chunk_rest.call(null,seq__39216_39230__$1);
var G__39233 = c__37778__auto___39231;
var G__39234 = cljs.core.count.call(null,c__37778__auto___39231);
var G__39235 = (0);
seq__39216_39220 = G__39232;
chunk__39217_39221 = G__39233;
count__39218_39222 = G__39234;
i__39219_39223 = G__39235;
continue;
} else {
var x_39236 = cljs.core.first.call(null,seq__39216_39230__$1);
ret.push(x_39236);

var G__39237 = cljs.core.next.call(null,seq__39216_39230__$1);
var G__39238 = null;
var G__39239 = (0);
var G__39240 = (0);
seq__39216_39220 = G__39237;
chunk__39217_39221 = G__39238;
count__39218_39222 = G__39239;
i__39219_39223 = G__39240;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__37573__auto__,writer__37574__auto__,opt__37575__auto__){
return cljs.core._write.call(null,writer__37574__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__37573__auto__,writer__37574__auto__,opt__37575__auto__){
return cljs.core._write.call(null,writer__37574__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args39241 = [];
var len__38042__auto___39256 = arguments.length;
var i__38043__auto___39257 = (0);
while(true){
if((i__38043__auto___39257 < len__38042__auto___39256)){
args39241.push((arguments[i__38043__auto___39257]));

var G__39258 = (i__38043__auto___39257 + (1));
i__38043__auto___39257 = G__39258;
continue;
} else {
}
break;
}

var G__39243 = args39241.length;
switch (G__39243) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39241.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__39244 = obj;
G__39244.push(kfn.call(null,k),vfn.call(null,v));

return G__39244;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x39245 = cljs.core.clone.call(null,handlers);
x39245.forEach = ((function (x39245,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__39246 = cljs.core.seq.call(null,coll);
var chunk__39247 = null;
var count__39248 = (0);
var i__39249 = (0);
while(true){
if((i__39249 < count__39248)){
var vec__39250 = cljs.core._nth.call(null,chunk__39247,i__39249);
var k = cljs.core.nth.call(null,vec__39250,(0),null);
var v = cljs.core.nth.call(null,vec__39250,(1),null);
f.call(null,v,k);

var G__39260 = seq__39246;
var G__39261 = chunk__39247;
var G__39262 = count__39248;
var G__39263 = (i__39249 + (1));
seq__39246 = G__39260;
chunk__39247 = G__39261;
count__39248 = G__39262;
i__39249 = G__39263;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39246);
if(temp__4657__auto__){
var seq__39246__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39246__$1)){
var c__37778__auto__ = cljs.core.chunk_first.call(null,seq__39246__$1);
var G__39264 = cljs.core.chunk_rest.call(null,seq__39246__$1);
var G__39265 = c__37778__auto__;
var G__39266 = cljs.core.count.call(null,c__37778__auto__);
var G__39267 = (0);
seq__39246 = G__39264;
chunk__39247 = G__39265;
count__39248 = G__39266;
i__39249 = G__39267;
continue;
} else {
var vec__39253 = cljs.core.first.call(null,seq__39246__$1);
var k = cljs.core.nth.call(null,vec__39253,(0),null);
var v = cljs.core.nth.call(null,vec__39253,(1),null);
f.call(null,v,k);

var G__39268 = cljs.core.next.call(null,seq__39246__$1);
var G__39269 = null;
var G__39270 = (0);
var G__39271 = (0);
seq__39246 = G__39268;
chunk__39247 = G__39269;
count__39248 = G__39270;
i__39249 = G__39271;
continue;
}
} else {
return null;
}
}
break;
}
});})(x39245,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x39245;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args39272 = [];
var len__38042__auto___39278 = arguments.length;
var i__38043__auto___39279 = (0);
while(true){
if((i__38043__auto___39279 < len__38042__auto___39278)){
args39272.push((arguments[i__38043__auto___39279]));

var G__39280 = (i__38043__auto___39279 + (1));
i__38043__auto___39279 = G__39280;
continue;
} else {
}
break;
}

var G__39274 = args39272.length;
switch (G__39274) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39272.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit39275 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit39275 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta39276){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta39276 = meta39276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit39275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39277,meta39276__$1){
var self__ = this;
var _39277__$1 = this;
return (new cognitect.transit.t_cognitect$transit39275(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta39276__$1));
});

cognitect.transit.t_cognitect$transit39275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39277){
var self__ = this;
var _39277__$1 = this;
return self__.meta39276;
});

cognitect.transit.t_cognitect$transit39275.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit39275.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit39275.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit39275.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit39275.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta39276","meta39276",173117340,null)], null);
});

cognitect.transit.t_cognitect$transit39275.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit39275.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit39275";

cognitect.transit.t_cognitect$transit39275.cljs$lang$ctorPrWriter = (function (this__37573__auto__,writer__37574__auto__,opt__37575__auto__){
return cljs.core._write.call(null,writer__37574__auto__,"cognitect.transit/t_cognitect$transit39275");
});

cognitect.transit.__GT_t_cognitect$transit39275 = (function cognitect$transit$__GT_t_cognitect$transit39275(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta39276){
return (new cognitect.transit.t_cognitect$transit39275(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta39276));
});

}

return (new cognitect.transit.t_cognitect$transit39275(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__36967__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__36967__auto__)){
return or__36967__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map