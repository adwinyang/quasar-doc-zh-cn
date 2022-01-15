"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[72873],{72873:(t,n,s)=>{s.r(n),s.d(n,{default:()=>C});var a=s(83673);const e=(0,a._)("p",null,[(0,a.Uk)("You’ll notice that your Quasar project contains a "),(0,a._)("code",{class:"doc-token"},"/src/router"),(0,a.Uk)(" folder. This holds the routing configuration of your website/app:")],-1),o=(0,a._)("ul",null,[(0,a._)("li",null,"“/src/router/index.js” holds the Vue Router initialization code"),(0,a._)("li",null,"“/src/router/routes.js” holds the routes of your website/app")],-1),c={class:"doc-note doc-note--warning"},u=(0,a._)("p",{class:"doc-note__title"},"WARNING",-1),p=(0,a.Uk)("Quasar documentation assumes you are already familiar with "),l=(0,a.Uk)("Vue Router"),r=(0,a.Uk)(". Below it’s described only the basics of how to make use of it in a Quasar CLI project. For the full list of its features please visit the "),k=(0,a.Uk)("Vue Router documentation"),i=(0,a.Uk)("."),_=(0,a.Uk)("The "),d=(0,a._)("code",{class:"doc-token"},"/src/router/routes.js",-1),U=(0,a.Uk)(" needs to import your website/app’s Pages and Layouts. Read more on "),h=(0,a.Uk)("Routing with Layouts and Pages"),m=(0,a.Uk)(" documentation page."),f=(0,a._)("p",null,[(0,a.Uk)("When using Vuex the store is not directly importable from other scripts, but it is passed to the exported function of "),(0,a._)("code",{class:"doc-token"},"/src/router/index.js"),(0,a.Uk)(", so it can be accessed from there. For example you can use the "),(0,a._)("code",{class:"doc-token"},"Router.beforeEach"),(0,a.Uk)(" method to check authentication in the router:")],-1),g=(0,a._)("pre",{class:"doc-code language-js"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,a._)("span",{class:"token keyword"},"export"),(0,a.Uk)(),(0,a._)("span",{class:"token keyword"},"default"),(0,a.Uk)(),(0,a._)("span",{class:"token keyword"},"function"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)(" store "),(0,a._)("span",{class:"token comment"},"/*, ssrContext */"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token comment"},"// ..."),(0,a.Uk)("\n  Router"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function"},"beforeEach"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token parameter"},[(0,a.Uk)("to"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" from"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" next")]),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"=>"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token keyword"},"if"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("to"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("matched"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function"},"some"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token parameter"},"record"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"=>"),(0,a.Uk)(" record"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("meta"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("requireAuth"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"&&"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"!"),(0,a.Uk)("store"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("getters"),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token string"},"'auth/isSignedIn'"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token function"},"next"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)(),(0,a._)("span",{class:"token literal-property property"},"name"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},"'account-signin'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(),(0,a._)("span",{class:"token literal-property property"},"query"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)(),(0,a._)("span",{class:"token literal-property property"},"next"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(" to"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("fullPath "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)(),(0,a._)("span",{class:"token keyword"},"else"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token function"},"next"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token comment"},"// ..."),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n")])],-1),y={class:"doc-note doc-note--tip"},w=(0,a._)("p",{class:"doc-note__title"},"TIP",-1),b=(0,a.Uk)("If you are developing a SSR app, then you can check out the "),x=(0,a.Uk)("ssrContext"),v=(0,a.Uk)(" Object that gets supplied server-side.");function j(t,n,s,j,R,T){const W=(0,a.up)("doc-link"),q=(0,a.up)("doc-page");return(0,a.wg)(),(0,a.j4)(q,{"meta-title":j.metaTitle,title:"App Routing","meta-desc":j.metaDesc},{default:(0,a.w5)((()=>[e,o,(0,a._)("div",c,[u,(0,a._)("p",null,[p,(0,a.Wm)(W,{to:"https://github.com/vuejs/vue-router-next"},{default:(0,a.w5)((()=>[l])),_:1}),r,(0,a.Wm)(W,{to:"https://next.router.vuejs.org/"},{default:(0,a.w5)((()=>[k])),_:1}),i])]),(0,a._)("p",null,[_,d,U,(0,a.Wm)(W,{to:"/layout/routing-with-layouts-and-pages"},{default:(0,a.w5)((()=>[h])),_:1}),m]),f,g,(0,a._)("div",y,[w,(0,a._)("p",null,[b,(0,a.Wm)(W,{to:"/quasar-cli/developing-ssr/ssr-context"},{default:(0,a.w5)((()=>[x])),_:1}),v])])])),_:1},8,["meta-title","meta-desc"])}var R=s(17536);const T={name:"DocMarkdownPage",setup(){return{metaTitle:"App Routing",metaDesc:"How to use the Vue Router in a Quasar app.",copyHeading:R.Et}}};var W=s(74260);const q=(0,W.Z)(T,[["render",j]]),C=q}}]);