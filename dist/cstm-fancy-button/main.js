!function(n){var e={};function t(l){if(e[l])return e[l].exports;var o=e[l]={i:l,l:!1,exports:{}};return n[l].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,l){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:l})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(l,o,(function(e){return n[e]}).bind(null,o));return l},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}({0:function(n,e,t){n.exports=t("zUnb")},"0S4P":function(n,e){n.exports=ng.common},"g/Wr":function(n,e){n.exports=ng.elements},"vG+p":function(n,e){n.exports=ng.platformBrowser},vOrQ:function(n,e){n.exports=ng.core},zUnb:function(n,e,t){"use strict";t.r(e);var l=t("vOrQ"),o=t("g/Wr"),r=function(){function n(){this.title="fancy-button",this.message="",this.defaultMessage="yuppee!! we have a custom event handler!",this.outputMessage=""}return n.prototype.clicked=function(){this.outputMessage=this.message?this.message:this.defaultMessage},n}(),u=function(){function n(n){this.injector=n}return n.prototype.ngDoBootstrap=function(){console.log("custom fancy button is loading..");var n=Object(o.createCustomElement)(r,{injector:this.injector});customElements.define("fancy-button",n)},n}(),a=function(){function n(){this.value="",this.message=""}return n.prototype.onKey=function(n){console.log(n),this.value=n.target.value,this.message="fancy"==this.value?"Its fancy! :)":"Its not fancy :("},n}(),i=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function c(n){return l["\u0275vid"](0,[(n()(),l["\u0275ted"](-1,null,[" Its a fancy input here: "])),(n()(),l["\u0275eld"](1,0,null,null,0,"input",[["style","border: 2px solid green;"]],null,[[null,"keyup"]],function(n,e,t){var l=!0;return"keyup"===e&&(l=!1!==n.component.onKey(t)&&l),l},null,null)),(n()(),l["\u0275ted"](2,null,[" "," "])),(n()(),l["\u0275eld"](3,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["customization says: "])),(n()(),l["\u0275eld"](5,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),l["\u0275ted"](6,null,[" ",""]))],null,function(n,e){var t=e.component;n(e,2,0,t.value),n(e,6,0,t.message)})}function s(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"app-fancy-input",[],null,null,null,c,i)),l["\u0275did"](1,49152,null,0,a,[],null,null)],null,null)}var p=l["\u0275ccf"]("app-fancy-input",a,s,{},{},[]),d=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function m(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"button",[["style","color: green;"]],null,[[null,"click"]],function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.clicked()&&l),l},null,null)),(n()(),l["\u0275ted"](1,null,["",""])),(n()(),l["\u0275eld"](2,0,null,null,1,"span",[["style","color: red;"]],null,null,null,null,null)),(n()(),l["\u0275ted"](3,null,["",""]))],null,function(n,e){var t=e.component;n(e,1,0,t.title),n(e,3,0,t.outputMessage)})}function f(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"app-fancy-button",[],null,null,null,m,d)),l["\u0275did"](1,49152,null,0,r,[],null,null)],null,null)}var g=l["\u0275ccf"]("app-fancy-button",r,f,{title:"title",message:"message"},{},[]),y=t("0S4P"),_=t("vG+p"),v=function(){return function(n){this.injector=n,console.log("fancy input is loading..");var e=Object(o.createCustomElement)(a,{injector:this.injector});try{customElements.define("fancy-input",e)}catch(t){console.log("skip, input is customized")}}}(),E=l["\u0275cmf"](u,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[p,g]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](5120,l.LOCALE_ID,l["\u0275angular_packages_core_core_s"],[[3,l.LOCALE_ID]]),l["\u0275mpd"](4608,y.NgLocalization,y.NgLocaleLocalization,[l.LOCALE_ID,[2,y["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,l.Compiler,l.Compiler,[]),l["\u0275mpd"](5120,l.APP_ID,l["\u0275angular_packages_core_core_h"],[]),l["\u0275mpd"](5120,l.IterableDiffers,l["\u0275angular_packages_core_core_q"],[]),l["\u0275mpd"](5120,l.KeyValueDiffers,l["\u0275angular_packages_core_core_r"],[]),l["\u0275mpd"](4608,_.DomSanitizer,_["\u0275DomSanitizerImpl"],[y.DOCUMENT]),l["\u0275mpd"](6144,l.Sanitizer,null,[_.DomSanitizer]),l["\u0275mpd"](4608,_.HAMMER_GESTURE_CONFIG,_.HammerGestureConfig,[]),l["\u0275mpd"](5120,_.EVENT_MANAGER_PLUGINS,function(n,e,t,l,o,r,u,a){return[new _["\u0275DomEventsPlugin"](n,e,t),new _["\u0275KeyEventsPlugin"](l),new _["\u0275HammerGesturesPlugin"](o,r,u,a)]},[y.DOCUMENT,l.NgZone,l.PLATFORM_ID,y.DOCUMENT,y.DOCUMENT,_.HAMMER_GESTURE_CONFIG,l["\u0275Console"],[2,_.HAMMER_LOADER]]),l["\u0275mpd"](4608,_.EventManager,_.EventManager,[_.EVENT_MANAGER_PLUGINS,l.NgZone]),l["\u0275mpd"](135680,_["\u0275DomSharedStylesHost"],_["\u0275DomSharedStylesHost"],[y.DOCUMENT]),l["\u0275mpd"](4608,_["\u0275DomRendererFactory2"],_["\u0275DomRendererFactory2"],[_.EventManager,_["\u0275DomSharedStylesHost"]]),l["\u0275mpd"](6144,l.RendererFactory2,null,[_["\u0275DomRendererFactory2"]]),l["\u0275mpd"](6144,_["\u0275SharedStylesHost"],null,[_["\u0275DomSharedStylesHost"]]),l["\u0275mpd"](4608,l.Testability,l.Testability,[l.NgZone]),l["\u0275mpd"](1073742336,y.CommonModule,y.CommonModule,[]),l["\u0275mpd"](1024,l.ErrorHandler,_["\u0275angular_packages_platform_browser_platform_browser_a"],[]),l["\u0275mpd"](1024,l.APP_INITIALIZER,function(n){return[_["\u0275angular_packages_platform_browser_platform_browser_j"](n)]},[[2,l.NgProbeToken]]),l["\u0275mpd"](512,l.ApplicationInitStatus,l.ApplicationInitStatus,[[2,l.APP_INITIALIZER]]),l["\u0275mpd"](131584,l.ApplicationRef,l.ApplicationRef,[l.NgZone,l["\u0275Console"],l.Injector,l.ErrorHandler,l.ComponentFactoryResolver,l.ApplicationInitStatus]),l["\u0275mpd"](1073742336,l.ApplicationModule,l.ApplicationModule,[l.ApplicationRef]),l["\u0275mpd"](1073742336,_.BrowserModule,_.BrowserModule,[[3,_.BrowserModule]]),l["\u0275mpd"](1073742336,v,v,[l.Injector]),l["\u0275mpd"](1073742336,u,u,[l.Injector]),l["\u0275mpd"](256,l["\u0275APP_ROOT"],!0,[])])});_.platformBrowser().bootstrapModuleFactory(E)}});