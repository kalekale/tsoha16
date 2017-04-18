// Compiled by ClojureScript 1.9.229 {}
goog.provide('tsoha16.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('tsoha16.views');
goog.require('tsoha16.subs');
goog.require('tsoha16.routes');
goog.require('tsoha16.events');
goog.require('tsoha16.config');
goog.require('re_frame.core');
tsoha16.core.dev_setup = (function tsoha16$core$dev_setup(){
if(cljs.core.truth_(tsoha16.config.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
tsoha16.core.mount_root = (function tsoha16$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tsoha16.views.main_panel], null),document.getElementById("app"));
});
tsoha16.core.init_BANG_ = (function tsoha16$core$init_BANG_(){
tsoha16.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

tsoha16.core.dev_setup.call(null);

return tsoha16.core.mount_root.call(null);
});
goog.exportSymbol('tsoha16.core.init_BANG_', tsoha16.core.init_BANG_);

//# sourceMappingURL=core.js.map