"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[4211],{4211:(n,e,s)=>{s.r(e),s.d(e,{default:()=>kn});var a=s(83673);const o=(0,a._)("p",null,"This is the place where you can configure some SSR options. Like if you want the client side to takeover as a SPA (Single Page Application – the default behaviour), or as a PWA (Progressive Web App).",-1),t=(0,a._)("pre",{class:"doc-code language-js"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,a._)("span",{class:"token keyword"},"return"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token comment"},"// ..."),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token literal-property property"},"ssr"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token literal-property property"},"pwa"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token boolean"},"true"),(0,a._)("span",{class:"token operator"},"/"),(0,a._)("span",{class:"token boolean"},"false"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(),(0,a._)("span",{class:"token comment"},"// should a PWA take over (default: false), or just a SPA?"),(0,a.Uk)("\n\n    "),(0,a._)("span",{class:"token literal-property property"},"manualStoreHydration"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token boolean"},"true"),(0,a._)("span",{class:"token operator"},"/"),(0,a._)("span",{class:"token boolean"},"false"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n        "),(0,a._)("span",{class:"token comment"},"// Manually hydrate the store."),(0,a.Uk)("\n        "),(0,a._)("span",{class:"token comment"},"// This is detailed in a subsection below"),(0,a.Uk)("\n\n    "),(0,a._)("span",{class:"token literal-property property"},"manualPostHydrationTrigger"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token boolean"},"true"),(0,a._)("span",{class:"token operator"},"/"),(0,a._)("span",{class:"token boolean"},"false"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n        "),(0,a._)("span",{class:"token comment"},"// Manually trigger the post-hydration logic on client-side."),(0,a.Uk)("\n        "),(0,a._)("span",{class:"token comment"},"// This is detailed in a subsection below"),(0,a.Uk)("\n\n    "),(0,a._)("span",{class:"token literal-property property"},"prodPort"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token number"},"3000"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(),(0,a._)("span",{class:"token comment"},"// The default port that the production server should use"),(0,a.Uk)("\n                    "),(0,a._)("span",{class:"token comment"},"// (gets superseded if process.env.PORT is specified at runtime)"),(0,a.Uk)("\n\n    "),(0,a._)("span",{class:"token literal-property property"},"maxAge"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token number"},"1000"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"*"),(0,a.Uk)(),(0,a._)("span",{class:"token number"},"60"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"*"),(0,a.Uk)(),(0,a._)("span",{class:"token number"},"60"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"*"),(0,a.Uk)(),(0,a._)("span",{class:"token number"},"24"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"*"),(0,a.Uk)(),(0,a._)("span",{class:"token number"},"30"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n        "),(0,a._)("span",{class:"token comment"},"// Tell browser when a file from the server should expire from cache"),(0,a.Uk)("\n        "),(0,a._)("span",{class:"token comment"},"// (the default value, in ms)"),(0,a.Uk)("\n        "),(0,a._)("span",{class:"token comment"},"// Has effect only when server.static() is used"),(0,a.Uk)("\n\n    "),(0,a._)("span",{class:"token comment"},"// List of SSR middleware files (src-ssr/middlewares/*). Order is important."),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token literal-property property"},"middlewares"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"["),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token comment"},"// ..."),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token string"},"'render'"),(0,a.Uk)(),(0,a._)("span",{class:"token comment"},"// Should not be missing, and should be last in the list."),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token punctuation"},"]"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n\n    "),(0,a._)("span",{class:"token comment"},"// optional; add/remove/change properties"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// of production generated package.json"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token function"},"extendPackageJson"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token parameter"},"pkg"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token comment"},"// directly change props of pkg;"),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token comment"},"// no need to return anything"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n\n    "),(0,a._)("span",{class:"token comment"},"// optional;"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// handles the Webserver webpack config ONLY"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// which includes the SSR middleware"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token function"},"extendWebpackWebserver"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token parameter"},"cfg"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token comment"},"// directly change props of cfg;"),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token comment"},"// no need to return anything"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n\n    "),(0,a._)("span",{class:"token comment"},"// optional; EQUIVALENT to extendWebpack() but uses webpack-chain;"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// handles the Webserver webpack config ONLY"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// which includes the SSR middleware"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token function"},"chainWebpackWebserver"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token parameter"},"chain"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token comment"},"// chain is a webpack-chain instance"),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token comment"},"// of the Webpack configuration"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n")])],-1),c={class:"doc-note"},p=(0,a.Uk)("If you decide to go with a PWA client takeover ("),l=(0,a._)("strong",null,"which is a killer combo",-1),r=(0,a.Uk)("), the Quasar CLI PWA mode will be installed too. You may want to check out the "),k=(0,a.Uk)("Quasar PWA"),i=(0,a.Uk)(" guide too. But most importantly, make sure you read "),u=(0,a.Uk)("SSR with PWA"),d=(0,a.Uk)(" page."),_=(0,a._)("p",null,[(0,a.Uk)("When building, "),(0,a._)("code",{class:"doc-token"},"extendWebpack()"),(0,a.Uk)(" and "),(0,a._)("code",{class:"doc-token"},"chainWebpack()"),(0,a.Uk)(" will receive one more parameter (Object), currently containing "),(0,a._)("code",{class:"doc-token"},"isServer"),(0,a.Uk)(" or "),(0,a._)("code",{class:"doc-token"},"isClient"),(0,a.Uk)(" boolean props, because there will be two Webpack builds (one for the server-side and one for the client-side).")],-1),m=(0,a._)("pre",{class:"doc-code language-js"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,a._)("span",{class:"token comment"},"// quasar.conf.js"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token literal-property property"},"build"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token function"},"extendWebpack"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token parameter"},[(0,a.Uk)("cfg"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)(" isServer"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" isClient "),(0,a._)("span",{class:"token punctuation"},"}")]),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"..."),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n")])],-1),U=(0,a.Uk)("If you want more information, please see this page that goes into more detail about "),h=(0,a.Uk)("handling webpack"),g=(0,a.Uk)(" in the "),y=(0,a._)("code",{class:"doc-token"},"quasar.conf.js",-1),f=(0,a.Uk)(" file."),b=(0,a._)("p",null,"By default, Quasar CLI takes care of hydrating the Vuex store (if you use it) on client-side.",-1),w=(0,a.Uk)("However, should you wish to manually hydrate it yourself, you need to set quasar.conf.js > ssr > manualStoreHydration: true. Then you need to call "),v=(0,a._)("code",{class:"doc-token"},"store.replaceState(window.__INITIAL_STATE__)",-1),S=(0,a.Uk)(" yourself. One good example is doing it from "),j=(0,a.Uk)("a boot file"),W=(0,a.Uk)(":"),x=(0,a._)("pre",{class:"doc-code language-js"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,a._)("span",{class:"token comment"},"// some_boot_file"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token comment"},"// MAKE SURE TO CONFIGURE THIS BOOT FILE"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token comment"},"// TO RUN ONLY ON CLIENT-SIDE"),(0,a.Uk)("\n\n"),(0,a._)("span",{class:"token keyword"},"export"),(0,a.Uk)(),(0,a._)("span",{class:"token keyword"},"default"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token parameter"},[(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)(" store "),(0,a._)("span",{class:"token punctuation"},"}")]),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"=>"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  store"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function"},"replaceState"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("window"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("__INITIAL_STATE__"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n")])],-1),T=(0,a._)("p",null,[(0,a.Uk)("By default, Quasar CLI wraps your App component and calls "),(0,a._)("code",{class:"doc-token"},"$q.onSSRHydrated()"),(0,a.Uk)(" on the client-side when this wrapper component gets mounted. This is the moment that the client-side takes over. You don’t need to configure anything for this to happen.")],-1),q=(0,a._)("p",null,"However should you wish to override the moment when this happens, you need to set quasar.conf.js > ssr > manualPostHydrationTrigger: true. For whatever your reason is (very custom use-case), this is an example of manually triggering the post hydration:",-1),A=(0,a._)("pre",{class:"doc-code language-js"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,a._)("span",{class:"token comment"},"// App.vue - Composition API"),(0,a.Uk)("\n\n"),(0,a._)("span",{class:"token keyword"},"import"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)(" onMounted "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)(),(0,a._)("span",{class:"token keyword"},"from"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},"'vue'"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token keyword"},"import"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)(" useQuasar "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)(),(0,a._)("span",{class:"token keyword"},"from"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},"'quasar'"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token keyword"},"export"),(0,a.Uk)(),(0,a._)("span",{class:"token keyword"},"default"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token comment"},"// ...."),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token function"},"setup"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// ..."),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token keyword"},"const"),(0,a.Uk)(" $q "),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"useQuasar"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token function"},"onMounted"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"=>"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n      $q"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function"},"onSSRHydrated"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n")])],-1),O=(0,a._)("pre",{class:"doc-code language-js"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,a._)("span",{class:"token comment"},"// App.vue - Options API"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token keyword"},"export"),(0,a.Uk)(),(0,a._)("span",{class:"token keyword"},"default"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token function"},"mounted"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token keyword"},"this"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("$q"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function"},"onSSRHydrated"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n")])],-1),C=(0,a._)("p",null,[(0,a.Uk)("Adding SSR mode to a Quasar project means a new folder will be created: "),(0,a._)("code",{class:"doc-token"},"/src-ssr"),(0,a.Uk)(", which contains SSR specific files:")],-1),P=(0,a._)("pre",{class:"doc-code language-bash"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,a._)("span",{class:"token builtin class-name"},"."),(0,a.Uk)("\n└── src-ssr/\n    ├── middlewares/  "),(0,a._)("span",{class:"token comment"},"# SSR middleware files"),(0,a.Uk)("\n    ├── directives/   "),(0,a._)("span",{class:"token comment"},"# SSR transformations for Vue directives"),(0,a.Uk)("\n    └── production-export.js "),(0,a._)("span",{class:"token comment"},"# SSR webserver production export"),(0,a.Uk)("\n")])],-1),I=(0,a._)("p",null,"You can freely edit these files. Each of the two folders are detailed in their own doc pages (check left-side menu).",-1),R=(0,a._)("p",null,"Notice a few things:",-1),N=(0,a._)("ol",null,[(0,a._)("li",null,[(0,a._)("p",null,"These files run in a Node context (they are NOT transpiled by Babel), so use only the ES6 features that are supported by your Node version. (https://node.green/)")]),(0,a._)("li",null,[(0,a._)("p",null,"If you import anything from node_modules, then make sure that the package is specified in package.json > “dependencies” and NOT in “devDependencies”.")]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("The "),(0,a._)("code",{class:"doc-token"},"/src-ssr/middlewares"),(0,a.Uk)(" is built through a separate Webpack config. "),(0,a._)("strong",null,"You will see this marked as “Webserver” when Quasar App CLI builds your app."),(0,a.Uk)(" You can chain/extend the Webpack configuration of these files through quasar.conf.js:")])])],-1),H=(0,a._)("pre",{class:"doc-code language-js"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,a._)("span",{class:"token keyword"},"return"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token comment"},"// ..."),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token literal-property property"},"ssr"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// ..."),(0,a.Uk)("\n\n    "),(0,a._)("span",{class:"token comment"},"// optional; webpack config Object for"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// the Webserver part ONLY (/src-ssr/)"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// which is invoked for production (NOT for dev)"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token function"},"extendWebpackWebserver"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token parameter"},"cfg"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token comment"},"// directly change props of cfg;"),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token comment"},"// no need to return anything"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n\n    "),(0,a._)("span",{class:"token comment"},"// optional; EQUIVALENT to extendWebpack() but uses webpack-chain;"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// the Webserver part ONLY (/src-ssr/)"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// which is invoked for production (NOT for dev)"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token function"},"chainWebpackWebserver"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token parameter"},"chain"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token comment"},"// chain is a webpack-chain instance"),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token comment"},"// of the Webpack configuration"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n")])],-1),E={start:"4"},L=(0,a.Uk)("The "),Q=(0,a._)("code",{class:"doc-token"},"/src-ssr/production-export.js",-1),Y=(0,a.Uk)(" file is detailed in "),M=(0,a.Uk)("SSR Production Export"),B=(0,a.Uk)(" page. Read it especially if you need to support serverless functions."),F=(0,a.Uk)("One of the main reasons when you develop a SSR instead of a SPA is for taking care of the SEO. And SEO can be greatly improved by using the "),D=(0,a.Uk)("Quasar Meta Plugin"),V=(0,a.Uk)(" to manage dynamic html markup required by the search engines."),$=(0,a.Uk)("When running on SSR mode, your application code needs to be isomorphic or “universal”, which means that it must run both on a Node context and in the browser. This applies to your "),J=(0,a.Uk)("Boot Files"),G=(0,a.Uk)(" too."),K=(0,a._)("p",null,"However, there are cases where you only want some boot files to run only on the server or only on the client-side. You can achieve that by specifying:",-1),Z=(0,a._)("pre",{class:"doc-code language-js"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,a._)("span",{class:"token comment"},"// quasar.conf.js"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token keyword"},"return"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token comment"},"// ..."),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token literal-property property"},"boot"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"["),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token string"},"'some-boot-file'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(),(0,a._)("span",{class:"token comment"},"// runs on both server and client"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)(),(0,a._)("span",{class:"token literal-property property"},"path"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},"'some-other'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(),(0,a._)("span",{class:"token literal-property property"},"server"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token boolean"},"false"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)(),(0,a._)("span",{class:"token comment"},"// this boot file gets embedded only on client-side"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)(),(0,a._)("span",{class:"token literal-property property"},"path"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},"'third'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(),(0,a._)("span",{class:"token literal-property property"},"client"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token boolean"},"false"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)(),(0,a._)("span",{class:"token comment"},"// this boot file gets embedded only on server-side"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n")])],-1),z=(0,a._)("p",null,"Just make sure that your app is consistent, though.",-1),X=(0,a.Uk)("When a boot file runs on the server, you will have access to one more parameter (called "),nn=(0,a.Uk)("ssrContext"),en=(0,a.Uk)(") on the default exported function:"),sn=(0,a._)("pre",{class:"doc-code language-js"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,a._)("span",{class:"token comment"},"// some boot file"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token keyword"},"export"),(0,a.Uk)(),(0,a._)("span",{class:"token keyword"},"default"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token parameter"},[(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)(" app"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"..."),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" ssrContext "),(0,a._)("span",{class:"token punctuation"},"}")]),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"=>"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token comment"},"// You can add props to the ssrContext then use them in the src/index.template.html."),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token comment"},"// Example - let's say we ssrContext.someProp = 'some value', then in index template we can reference it:"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token comment"},"// {{ someProp }}"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n")])],-1),an=(0,a._)("p",null,[(0,a.Uk)("When you add such references ("),(0,a._)("code",{class:"doc-token"},"someProp"),(0,a.Uk)(" surrounded by brackets in the example above) into your "),(0,a._)("code",{class:"doc-token"},"src/index.template.html"),(0,a.Uk)(", make sure you tell Quasar it’s only valid for SSR builds:")],-1),on=(0,a._)("pre",{class:"doc-code language-html"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,a._)("span",{class:"token comment"},"\x3c!-- index.template.html --\x3e"),(0,a.Uk)("\n<% if (ctx.mode.ssr) { %>{{ someProp }} <% } %>\n")])],-1);function tn(n,e,s,tn,cn,pn){const ln=(0,a.up)("doc-link"),rn=(0,a.up)("doc-page");return(0,a.wg)(),(0,a.j4)(rn,{"meta-title":tn.metaTitle,title:"Configuring SSR",related:tn.related,toc:tn.toc,"meta-desc":tn.metaDesc},{default:(0,a.w5)((()=>[(0,a._)("h2",{id:"quasar-conf-js",class:"doc-heading doc-h2",onClick:e[0]||(e[0]=n=>tn.copyHeading("quasar-conf-js"))},"Quasar.conf.js"),o,t,(0,a._)("blockquote",c,[(0,a._)("p",null,[p,l,r,(0,a.Wm)(ln,{to:"/quasar-cli/developing-pwa/introduction"},{default:(0,a.w5)((()=>[k])),_:1}),i,(0,a.Wm)(ln,{to:"/quasar-cli/developing-ssr/ssr-with-pwa"},{default:(0,a.w5)((()=>[u])),_:1}),d])]),_,m,(0,a._)("p",null,[U,(0,a.Wm)(ln,{to:"/quasar-cli/handling-webpack"},{default:(0,a.w5)((()=>[h])),_:1}),g,y,f]),(0,a._)("h3",{id:"manually-triggering-store-hydration",class:"doc-heading doc-h3",onClick:e[1]||(e[1]=n=>tn.copyHeading("manually-triggering-store-hydration"))},"Manually triggering store hydration"),b,(0,a._)("p",null,[w,v,S,(0,a.Wm)(ln,{to:"/quasar-cli/boot-files"},{default:(0,a.w5)((()=>[j])),_:1}),W]),x,(0,a._)("h3",{id:"manually-triggering-post-hydration",class:"doc-heading doc-h3",onClick:e[2]||(e[2]=n=>tn.copyHeading("manually-triggering-post-hydration"))},"Manually triggering post-hydration"),T,q,A,O,(0,a._)("h2",{id:"nodejs-server",class:"doc-heading doc-h2",onClick:e[3]||(e[3]=n=>tn.copyHeading("nodejs-server"))},"Nodejs Server"),C,P,I,R,N,H,(0,a._)("ol",E,[(0,a._)("li",null,[L,Q,Y,(0,a.Wm)(ln,{to:"/quasar-cli/developing-ssr/ssr-production-export"},{default:(0,a.w5)((()=>[M])),_:1}),B])]),(0,a._)("h2",{id:"helping-seo",class:"doc-heading doc-h2",onClick:e[4]||(e[4]=n=>tn.copyHeading("helping-seo"))},"Helping SEO"),(0,a._)("p",null,[F,(0,a.Wm)(ln,{to:"/quasar-plugins/meta"},{default:(0,a.w5)((()=>[D])),_:1}),V]),(0,a._)("h2",{id:"boot-files",class:"doc-heading doc-h2",onClick:e[5]||(e[5]=n=>tn.copyHeading("boot-files"))},"Boot Files"),(0,a._)("p",null,[$,(0,a.Wm)(ln,{to:"/quasar-cli/boot-files"},{default:(0,a.w5)((()=>[J])),_:1}),G]),K,Z,z,(0,a._)("p",null,[X,(0,a.Wm)(ln,{to:"/quasar-cli/developing-ssr/ssr-context"},{default:(0,a.w5)((()=>[nn])),_:1}),en]),sn,an,on])),_:1},8,["meta-title","related","toc","meta-desc"])}var cn=s(17536);const pn={name:"DocMarkdownPage",setup(){return{metaTitle:"Configuring SSR",metaDesc:"How to manage your server-side rendered apps with Quasar CLI.",related:[{name:"quasar.conf.js",category:"Quasar CLI",path:"/quasar-cli/quasar-conf-js"}],toc:[{id:"quasar-conf-js",title:"Quasar.conf.js"},{id:"manually-triggering-store-hydration",title:"Manually triggering store hydration",sub:!0},{id:"manually-triggering-post-hydration",title:"Manually triggering post-hydration",sub:!0},{id:"nodejs-server",title:"Nodejs Server"},{id:"helping-seo",title:"Helping SEO"},{id:"boot-files",title:"Boot Files"}],copyHeading:cn.Et}}};var ln=s(74260);const rn=(0,ln.Z)(pn,[["render",tn]]),kn=rn}}]);