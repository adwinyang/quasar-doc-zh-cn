"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[22294],{22294:(e,s,o)=>{o.r(s),o.d(s,{default:()=>ae});var a=o(83673);const r=(0,a._)("p",null,"This page refers only to upgrading a Quasar UI v1 app (with Vue 2) to a Quasar UI v2 one (with Vue 3).",-1),t=(0,a._)("p",null,"The SSR mode for Quasar v2 is an almost complete overhaul of the previous version, significantly improving the developer experience. Some of the changes were needed due to the architectural requirements of Vue 3.",-1),n=(0,a.Uk)("Please note that currently the only Nodejs supported server is "),i=(0,a.Uk)("Expressjs"),l=(0,a.Uk)("."),d=(0,a.Uk)("Introducing the concept of "),c=(0,a.Uk)("SSR middleware"),u=(0,a.Uk)(" files, which also allows for HMR for them while on dev. This replaces the old "),p=(0,a._)("code",{class:"doc-token"},"index.js",-1),h=(0,a.Uk)(" and "),m=(0,a._)("code",{class:"doc-token"},"extension.js",-1),k=(0,a.Uk)("."),g=(0,a._)("li",null,"The exact same middleware can now run on both dev and production builds, not just the old “SSR Extension”.",-1),_=(0,a._)("li",null,"You can enable linting for SSR middlewares too.",-1),f=(0,a._)("li",null,"Due to the architecture of Vue 3, you now can (and need!) to define a SSR transformation for each of your custom Vue directives (Quasar supplied Vue directives are excluded from this).",-1),w=(0,a._)("strong",null,"Out of the box support for Typescript",-1),v=(0,a.Uk)(". All .js files under "),U=(0,a._)("code",{class:"doc-token"},"src-ssr",-1),S=(0,a.Uk)(" can be now rewritten as .ts. Make sure to read about "),y=(0,a.Uk)("SSR with Typescript"),b=(0,a.Uk)(" for more information."),R=(0,a._)("pre",{class:"doc-code language-bash"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,a._)("span",{class:"token comment"},"# old structure"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token builtin class-name"},"."),(0,a.Uk)("\n└── src-ssr/\n    ├── index.js      "),(0,a._)("span",{class:"token comment"},"# Production Node webserver serving the app"),(0,a.Uk)("\n    └── extension.js  "),(0,a._)("span",{class:"token comment"},"# Common code for production & development server"),(0,a.Uk)("\n\n"),(0,a._)("span",{class:"token comment"},"# NEW structure"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token builtin class-name"},"."),(0,a.Uk)("\n└── src-ssr/\n    ├── middlewares/  "),(0,a._)("span",{class:"token comment"},"# SSR middleware files"),(0,a.Uk)("\n    ├── directives/   "),(0,a._)("span",{class:"token comment"},"# SSR transformations for Vue directives"),(0,a.Uk)("\n    └── production-export.js "),(0,a._)("span",{class:"token comment"},"# SSR webserver production export"),(0,a.Uk)("\n")])],-1),q=(0,a.Uk)("The old "),x=(0,a._)("code",{class:"doc-token"},"index.js",-1),j=(0,a.Uk)(" and "),T=(0,a._)("code",{class:"doc-token"},"extension.js",-1),C=(0,a.Uk)(" have been replaced by the superior SSR middleware files. It would be a good idea to "),W=(0,a.Uk)("read about the SSR middleware"),H=(0,a.Uk)(" before diving in further."),Q=(0,a._)("p",null,"So here we go:",-1),V=(0,a._)("ol",null,[(0,a._)("li",null,[(0,a.Uk)("We recommend that you save the content of your current "),(0,a._)("code",{class:"doc-token"},"src-ssr"),(0,a.Uk)(" folder somewhere else.")]),(0,a._)("li",null,[(0,a.Uk)("Remove and add back the Quasar SSR mode ("),(0,a._)("code",{class:"doc-token"},"$ quasar mode remove ssr"),(0,a.Uk)(", "),(0,a._)("code",{class:"doc-token"},"$quasar mode add ssr"),(0,a.Uk)(").")]),(0,a._)("li",null,"Declare the middleware files under quasar.conf.js > ssr > middlewares: []. The array should look like this:")],-1),E=(0,a._)("pre",{class:"doc-code language-js"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,a._)("span",{class:"token literal-property property"},"middlewares"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"["),(0,a.Uk)("\n  ctx"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("prod "),(0,a._)("span",{class:"token operator"},"?"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},"'compression'"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},"''"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token string"},"'render'"),(0,a.Uk)(),(0,a._)("span",{class:"token comment"},"// should always keep this one as last one"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)("\n")])],-1),P={start:"4"},Y=(0,a._)("li",null,"You will then have to port the old logic by using the SSR middleware files, which should be really easy (since you’ll end up copy-pasting most of the old code into the middleware files).",-1),D=(0,a.Uk)("Review quasar.conf.js > ssr properties. Most of the old props have been removed and replaced by "),I=(0,a.Uk)("new ones"),M=(0,a.Uk)("."),A=(0,a._)("p",null,[(0,a.Uk)("Also remember that the files that you create in the "),(0,a._)("code",{class:"doc-token"},"src-ssr/middlewares"),(0,a.Uk)(" folder need to also be declared under quasar.conf.js > ssr > middlewares. This is because their order matters, just like how the order of applying any Expressjs middleware matters too. You can use the "),(0,a._)("code",{class:"doc-token"},"$ quasar new ssrmiddleware <name>"),(0,a.Uk)(" command to speed things up.")],-1),N=(0,a._)("p",null,[(0,a.Uk)("Always keep the original "),(0,a._)("code",{class:"doc-token"},"render"),(0,a.Uk)(" middleware as last one in the list.")],-1),$=(0,a.Uk)("You might want to check out the "),O=(0,a.Uk)("new configuration"),Z=(0,a.Uk)(" properties available through quasar.conf.js > ssr."),z=(0,a.Uk)("You might want to check out the "),B=(0,a.Uk)("ssrContext"),F=(0,a.Uk)(" page which describes in detail what properties you can use from it."),G=(0,a.Uk)("You might want to check out the "),J=(0,a.Uk)("SSR Production Export"),K=(0,a.Uk)(" page which describes in detail what the production-export.js/ts can do for you.");function L(e,s,o,L,X,ee){const se=(0,a.up)("doc-link"),oe=(0,a.up)("doc-page");return(0,a.wg)(),(0,a.j4)(oe,{"meta-title":L.metaTitle,title:"Upgrade guide on SSR",related:L.related,toc:L.toc,"meta-desc":L.metaDesc},{default:(0,a.w5)((()=>[r,(0,a._)("h2",{id:"upgrading-from-quasar-v1",class:"doc-heading doc-h2",onClick:s[0]||(s[0]=e=>L.copyHeading("upgrading-from-quasar-v1"))},"Upgrading from Quasar v1"),t,(0,a._)("p",null,[n,(0,a.Wm)(se,{to:"https://expressjs.com/"},{default:(0,a.w5)((()=>[i])),_:1}),l]),(0,a._)("h3",{id:"high-overview-of-the-improvements",class:"doc-heading doc-h3",onClick:s[1]||(s[1]=e=>L.copyHeading("high-overview-of-the-improvements"))},"High overview of the improvements"),(0,a._)("ul",null,[(0,a._)("li",null,[d,(0,a.Wm)(se,{to:"/quasar-cli/developing-ssr/ssr-middleware"},{default:(0,a.w5)((()=>[c])),_:1}),u,p,h,m,k]),g,_,f,(0,a._)("li",null,[w,v,U,S,(0,a.Wm)(se,{to:"/quasar-cli/developing-ssr/ssr-with-typescript"},{default:(0,a.w5)((()=>[y])),_:1}),b])]),(0,a._)("h3",{id:"the-src-ssr-folder",class:"doc-heading doc-h3",onClick:s[2]||(s[2]=e=>L.copyHeading("the-src-ssr-folder"))},"The /src-ssr folder"),R,(0,a._)("h3",{id:"performing-the-upgrade",class:"doc-heading doc-h3",onClick:s[3]||(s[3]=e=>L.copyHeading("performing-the-upgrade"))},"Performing the upgrade"),(0,a._)("p",null,[q,x,j,T,C,(0,a.Wm)(se,{to:"/quasar-cli/developing-ssr/ssr-middleware"},{default:(0,a.w5)((()=>[W])),_:1}),H]),Q,V,E,(0,a._)("ol",P,[Y,(0,a._)("li",null,[D,(0,a.Wm)(se,{to:"/quasar-cli/developing-ssr/configuring-ssr#quasar-conf-js"},{default:(0,a.w5)((()=>[I])),_:1}),M])]),A,N,(0,a._)("h3",{id:"tips",class:"doc-heading doc-h3",onClick:s[4]||(s[4]=e=>L.copyHeading("tips"))},"Tips"),(0,a._)("ul",null,[(0,a._)("li",null,[$,(0,a.Wm)(se,{to:"/quasar-cli/developing-ssr/configuring-ssr"},{default:(0,a.w5)((()=>[O])),_:1}),Z]),(0,a._)("li",null,[z,(0,a.Wm)(se,{to:"/quasar-cli/developing-ssr/ssr-context"},{default:(0,a.w5)((()=>[B])),_:1}),F]),(0,a._)("li",null,[G,(0,a.Wm)(se,{to:"/quasar-cli/developing-ssr/ssr-production-export"},{default:(0,a.w5)((()=>[J])),_:1}),K])])])),_:1},8,["meta-title","related","toc","meta-desc"])}var X=o(17536);const ee={name:"DocMarkdownPage",setup(){return{metaTitle:"Upgrade guide on SSR",metaDesc:"Upgrading instructions from Quasar v1 to v2 when dealing with SSR.",related:[{name:"配置SSR",category:"开发 SSR",path:"/quasar-cli/developing-ssr/configuring-ssr"},{name:"ssrContext",category:"开发 SSR",path:"/quasar-cli/developing-ssr/ssr-context"},{name:"SSR 中间件",category:"开发 SSR",path:"/quasar-cli/developing-ssr/ssr-middleware"},{name:"SSR 生产导出",category:"开发 SSR",path:"/quasar-cli/developing-ssr/ssr-production-export"}],toc:[{id:"upgrading-from-quasar-v1",title:"Upgrading from Quasar v1"},{id:"high-overview-of-the-improvements",title:"High overview of the improvements",sub:!0},{id:"the-src-ssr-folder",title:"The /src-ssr folder",sub:!0},{id:"performing-the-upgrade",title:"Performing the upgrade",sub:!0},{id:"tips",title:"Tips",sub:!0}],copyHeading:X.Et}}};var se=o(74260);const oe=(0,se.Z)(ee,[["render",L]]),ae=oe}}]);