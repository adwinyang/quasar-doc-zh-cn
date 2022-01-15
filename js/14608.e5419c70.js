"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[14608],{14608:(n,s,a)=>{a.r(s),a.d(s,{default:()=>j});var t=a(83673);const o=(0,t._)("p",null,[(0,t.Uk)("在SSR上对404和500错误的处理与其他模式(如SPA)有点不同。如果你查看"),(0,t._)("code",{class:"doc-token"},"/src-ssr/middlewares/render.js"),(0,t.Uk)("，你会发现以下部分：")],-1),e=(0,t._)("pre",{class:"doc-code language-js"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,t._)("span",{class:"token keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"default"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},[(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" app"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" resolve"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" render"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" serve "),(0,t._)("span",{class:"token punctuation"},"}")]),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token comment"},"// 我们捕获任何其他快递路线并将其交给"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token comment"},"// 转到Vue和Vue Router来渲染我们的页面"),(0,t.Uk)("\n  app"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"get"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("resolve"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"urlPath"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'*'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},[(0,t.Uk)("req"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" res")]),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    res"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"setHeader"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'Content-Type'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'text/html'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token function"},"render"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" req"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" res "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"then"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},"html"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token comment"},"// 现在让我们把渲染好的html发送到客户端"),(0,t.Uk)("\n        res"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"send"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("html"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"catch"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},"err"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token comment"},"// 哎呀，我们在渲染页面时出现了一个错误"),(0,t.Uk)("\n\n        "),(0,t._)("span",{class:"token comment"},"// 我们被告知要重定向到另一个URL"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token keyword"},"if"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("err"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("url"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token keyword"},"if"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("err"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("code"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n            res"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"redirect"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("err"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("code"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" err"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("url"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token keyword"},"else"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n            res"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"redirect"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("err"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("url"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token comment"},"// 嗯，Vue Router找不到请求的路由"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token keyword"},"else"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"if"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("err"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("code "),(0,t._)("span",{class:"token operator"},"==="),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"404"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token comment"},'// 只有在没有 "总括 "路线的情况下，才应到达这里。'),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token comment"},"// 是在/src/routes中定义的。"),(0,t.Uk)("\n          res"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"status"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token number"},"404"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"send"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'404 | Page Not Found'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token comment"},"// 那么，我们把任何其他代码都视为错误。"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token comment"},"// 如果我们是在开发模式下，那么我们可以使用Quasar CLI"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token comment"},"// 以显示一个漂亮的错误页面，其中包含堆栈"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token comment"},"// 和其他有用的信息"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token keyword"},"else"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"if"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("process"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("env"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token constant"},"DEV"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token comment"},"// service.error仅在dev上可用"),(0,t.Uk)("\n          serve"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"error"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" err"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" req"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" res "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token comment"},"// 我们在生产中，所以我们应该有另一种方法"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token comment"},"// 当我们遇到错误时，向客户端显示一些东西"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token comment"},"// (出于安全原因，显示相同的财富是不可以的。"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token comment"},"// 的信息，正如我们在开发中所做的那样)"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token keyword"},"else"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token comment"},"// 在生产过程中呈现错误页面或"),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token comment"},"// 为错误页面创建一个路由(/src/routes)并重定向到它"),(0,t.Uk)("\n          res"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"status"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token number"},"500"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"send"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'500 | Internal Server Error'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])],-1),c=(0,t._)("p",null,"上面的部分是在捕捉到其他可能的请求(如对/public文件夹、manifest.json和service worker等)后写的。这就是我们用Vue和Vue Router渲染页面的地方。",-1),p=(0,t._)("p",null,"我们将讨论一些你需要注意的架构决定。选择任何最适合你的应用的方式。",-1),k=(0,t._)("p",null,[(0,t.Uk)("如果你在Vue Router的"),(0,t._)("code",{class:"doc-token"},"/src/router/routes.js"),(0,t.Uk)("文件中定义了一个等价的404路由(如下图)，那么上面示例中的"),(0,t._)("code",{class:"doc-token"},"if (err.code === 404) {"),(0,t.Uk)("部分将永远不会是"),(0,t._)("code",{class:"doc-token"},"true"),(0,t.Uk)("，因为Vue Router已经处理了它：")],-1),u=(0,t._)("pre",{class:"doc-code language-js"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,t._)("span",{class:"token comment"},"// 用Vue Router抓取404的路由实例"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(),(0,t._)("span",{class:"token literal-property property"},"path"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'/:catchAll(.*)*'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token function-variable function"},"component"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"import"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'pages/Error404.vue'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])],-1),l=(0,t._)("p",null,[(0,t.Uk)("在页面顶部的"),(0,t._)("code",{class:"doc-token"},"/src-ssr/middlewares/render.js"),(0,t.Uk)("示例中，注意到如果webserver遇到任何渲染错误，我们会发送一个简单的字符串回给客户端(‘500 | 内部服务器错误’)。如果你想显示一个漂亮的页面，你可以这样做。")],-1),_=(0,t._)("ol",null,[(0,t._)("li",null,[(0,t.Uk)("在"),(0,t._)("code",{class:"doc-token"},"/src/router/routes.js"),(0,t.Uk)("中添加一个特定的路由，比如：")])],-1),r=(0,t._)("pre",{class:"doc-code language-js"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(),(0,t._)("span",{class:"token literal-property property"},"path"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'error500'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token function-variable function"},"component"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"import"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'pages/Error500.vue'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])],-1),i=(0,t._)("ol",{start:"2"},[(0,t._)("li",null,[(0,t.Uk)("编写Vue组件来处理这个页面。在这个示例中，我们创建"),(0,t._)("code",{class:"doc-token"},"/src/pages/Error500.vue"),(0,t.Uk)("。")]),(0,t._)("li",null,[(0,t.Uk)("然后在"),(0,t._)("code",{class:"doc-token"},"/src-ssr/middlewares/render.js"),(0,t.Uk)("。")])],-1),U=(0,t._)("pre",{class:"doc-code language-js"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,t._)("span",{class:"token keyword"},"if"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("err"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("url"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"..."),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"else"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"if"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("err"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("code "),(0,t._)("span",{class:"token operator"},"==="),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"404"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"..."),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"else"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token comment"},"// 我们在这里得到一个500错误。"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token comment"},'// 我们重定向到我们在步骤1中新定义的 "error500 "路由。'),(0,t.Uk)("\nres"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"redirect"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("resolve"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"urlPath"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'error500'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},"// 保持对publicPath的考虑!"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])],-1),d=(0,t._)("div",{class:"doc-note doc-note--danger"},[(0,t._)("p",{class:"doc-note__title"},"WARNING"),(0,t._)("p",null,'唯一需要注意的是，你需要确保在渲染’/error500’路线时，你不会得到另一个500错误，这将使你的应用程序进入一个无限循环！"。')],-1),m=(0,t._)("p",null,[(0,t.Uk)("一个完美的方法是直接从"),(0,t._)("code",{class:"doc-token"},"/src-ssr/middlewares/render.js"),(0,t.Uk)("返回错误500页面的HTML(作为字符串)：")],-1),g=(0,t._)("pre",{class:"doc-code language-js"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,t.Uk)("res"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"status"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token number"},"500"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"send"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token template-string"},[(0,t._)("span",{class:"token template-punctuation string"},"`"),(0,t._)("span",{class:"token string"},"<html>....</html>"),(0,t._)("span",{class:"token template-punctuation string"},"`")]),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n")])],-1);function f(n,s,a,f,h,w){const v=(0,t.up)("doc-page");return(0,t.wg)(),(0,t.j4)(v,{"meta-title":f.metaTitle,title:"SSR对404和500错误的处理",nav:f.nav,toc:f.toc,"meta-desc":f.metaDesc},{default:(0,t.w5)((()=>[o,e,c,(0,t._)("h2",{id:"需要注意的事项",class:"doc-heading doc-h2",onClick:s[0]||(s[0]=n=>f.copyHeading("需要注意的事项"))},"需要注意的事项"),p,(0,t._)("h3",{id:"错误404",class:"doc-heading doc-h3",onClick:s[1]||(s[1]=n=>f.copyHeading("错误404"))},"错误404"),k,u,(0,t._)("h3",{id:"错误500",class:"doc-heading doc-h3",onClick:s[2]||(s[2]=n=>f.copyHeading("错误500"))},"错误500"),l,_,r,i,U,d,m,g])),_:1},8,["meta-title","nav","toc","meta-desc"])}var h=a(17536);const w={name:"DocMarkdownPage",setup(){return{metaTitle:"SSR对404和500错误的处理",metaDesc:"在 Quasar 服务器端渲染的应用程序中管理常见的404和500 HTTP错误。",nav:[{name:"客户端激活",category:"开发 SSR",path:"/quasar-cli/developing-ssr/client-side-hydration",dir:"left"},{name:"带PWA的SSR",category:"开发 SSR",path:"/quasar-cli/developing-ssr/ssr-with-pwa",dir:"right"}],toc:[{id:"需要注意的事项",title:"需要注意的事项"},{id:"错误404",title:"错误404",sub:!0},{id:"错误500",title:"错误500",sub:!0}],copyHeading:h.Et}}};var v=a(74260);const y=(0,v.Z)(w,[["render",f]]),j=y}}]);