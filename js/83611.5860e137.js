"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[83611],{83611:(a,n,t)=>{t.r(n),t.d(n,{default:()=>L});var s=t(83673);const e=(0,s.Uk)("我们将谈论在 QLayout 中的封装页面。 如果您还没有，请先阅读"),o=(0,s.Uk)("QLayout"),c=(0,s.Uk)(" 文档页面。"),p=(0,s._)("p",null,[(0,s.Uk)("<doc-api file="),(0,s._)("code",{class:"doc-token"},"QPageContainer"),(0,s.Uk)("/>")],-1),l=(0,s._)("p",null,[(0,s.Uk)("<doc-api file="),(0,s._)("code",{class:"doc-token"},"QPage"),(0,s.Uk)("/>")],-1),k=(0,s._)("p",null,"单击下面的按钮，构建您的布局。",-1),u=(0,s._)("p",null,"QPage 必须由 QPageContainer 封装，而 QPageContainer 又必须是 QLayout 的子级。",-1),i=(0,s._)("pre",{class:"doc-code language-html"},[(0,s._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("q-layout")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n  ...\n  "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("q-page-container")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n    "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("q-page")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n      "),(0,s._)("span",{class:"token comment"},"\x3c!-- 页面内容 --\x3e"),(0,s.Uk)("\n    "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("q-page")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("q-page-container")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n  ...\n"),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("q-layout")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n")])],-1),_=(0,s.Uk)("通常，QPageContainer 是布局模板的一部分(其中仅包含"),r=(0,s._)("code",{class:"doc-token"},"<router view/>",-1),g=(0,s.Uk)("子元素)，其内容放入"),d=(0,s._)("code",{class:"doc-token"},"/src/pages",-1),U=(0,s.Uk)(" 下的单独 vue 文件中。如果还没有，请阅读"),m=(0,s.Uk)("Routing with Layouts and Pages"),y=(0,s.Uk)(" 。"),h=(0,s._)("pre",{class:"doc-code language-html"},[(0,s._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,s._)("span",{class:"token comment"},"\x3c!-- 用于布局的 vue 文件: --\x3e"),(0,s.Uk)("\n"),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("q-layout")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n  ...\n  "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("q-page-container")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n    "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("router-view")]),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"/>")]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("q-page-container")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n  ...\n"),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("q-layout")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n\n"),(0,s._)("span",{class:"token comment"},"\x3c!-- 含有一个页面的 vue 文件: --\x3e"),(0,s.Uk)("\n"),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("q-page")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"padding"),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token comment"},"\x3c!-- 页面内容 --\x3e"),(0,s.Uk)("\n"),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("q-page")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n")])],-1),Q=(0,s._)("div",{class:"doc-note doc-note--tip"},[(0,s._)("p",{class:"doc-note__title"},"TIP"),(0,s._)("p",null,"由于 QPageContainer 和 QPage 需要布局并且 QLayout 默认管理整个窗口，因此出于演示目的，我们将使用容器化的 QLayout。但请记住，您绝不需要为 QPageContainer 和 QPage 使用容器化的 QLayout。")],-1),f=(0,s._)("p",null,[(0,s.Uk)("QPage 需要 QLayout，因为 QLayout 控制页面的所有偏移量，根据其 "),(0,s._)("code",{class:"doc-token"},"view"),(0,s.Uk)(" 属性配置，考虑页眉/页脚/抽屉使用的空间。默认情况下，您的 QPage 组件将设置一个 "),(0,s._)("code",{class:"doc-token"},"min-height"),(0,s.Uk)(" CSS 属性，以确保内容始终填满屏幕，即使内容只有几行。")],-1),P=(0,s._)("p",null,[(0,s.Uk)("如果你想调整，甚至删除这个属性，你可以使用 "),(0,s._)("code",{class:"doc-token"},"style-fn"),(0,s.Uk)(" 属性来实现：")],-1),q=(0,s._)("pre",{class:"doc-code language-html"},[(0,s._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("template")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("q-page")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},":style-fn"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("myTweak"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("..."),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("q-page")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n"),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("template")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n\n"),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("script")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s._)("span",{class:"token script"},[(0,s._)("span",{class:"token language-javascript"},[(0,s.Uk)("\n"),(0,s._)("span",{class:"token keyword"},"export"),(0,s.Uk)(),(0,s._)("span",{class:"token keyword"},"default"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token comment"},"// ......"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token literal-property property"},"methods"),(0,s._)("span",{class:"token operator"},":"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)("\n    "),(0,s._)("span",{class:"token function"},"myTweak"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"("),(0,s._)("span",{class:"token parameter"},"offset"),(0,s._)("span",{class:"token punctuation"},")"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)("\n      "),(0,s._)("span",{class:"token comment"},"//“offset”是指总计的数字(像素)"),(0,s.Uk)("\n      "),(0,s._)("span",{class:"token comment"},"//标题+页脚的高度，占用屏幕，"),(0,s.Uk)("\n      "),(0,s._)("span",{class:"token comment"},"//基于QLayout“View”的Prop配置"),(0,s.Uk)("\n\n      "),(0,s._)("span",{class:"token comment"},"//这实际上是默认的样式 -  FN在 Quasar 中所做的"),(0,s.Uk)("\n      "),(0,s._)("span",{class:"token keyword"},"return"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)(),(0,s._)("span",{class:"token literal-property property"},"minHeight"),(0,s._)("span",{class:"token operator"},":"),(0,s.Uk)(" offset "),(0,s._)("span",{class:"token operator"},"?"),(0,s.Uk)(),(0,s._)("span",{class:"token template-string"},[(0,s._)("span",{class:"token template-punctuation string"},"`"),(0,s._)("span",{class:"token string"},"calc(100vh - "),(0,s._)("span",{class:"token interpolation"},[(0,s._)("span",{class:"token interpolation-punctuation punctuation"},"${"),(0,s.Uk)("offset"),(0,s._)("span",{class:"token interpolation-punctuation punctuation"},"}")]),(0,s._)("span",{class:"token string"},"px)"),(0,s._)("span",{class:"token template-punctuation string"},"`")]),(0,s.Uk)(),(0,s._)("span",{class:"token operator"},":"),(0,s.Uk)(),(0,s._)("span",{class:"token string"},"'100vh'"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"}"),(0,s.Uk)("\n    "),(0,s._)("span",{class:"token punctuation"},"}"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token punctuation"},"}"),(0,s.Uk)("\n"),(0,s._)("span",{class:"token punctuation"},"}"),(0,s.Uk)("\n")])]),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("script")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n")])],-1);function v(a,n,t,v,w,C){const b=(0,s.up)("doc-link"),x=(0,s.up)("q-btn"),L=(0,s.up)("doc-example"),H=(0,s.up)("doc-page");return(0,s.wg)(),(0,s.j4)(H,{"meta-title":v.metaTitle,title:"布局页面",related:v.related,nav:v.nav,toc:v.toc,"meta-desc":v.metaDesc},{default:(0,s.w5)((()=>[(0,s._)("p",null,[e,(0,s.Wm)(b,{to:"/loayout/layout"},{default:(0,s.w5)((()=>[o])),_:1}),c]),(0,s._)("h2",{id:"qpagecontainer-api",class:"doc-heading doc-h2",onClick:n[0]||(n[0]=a=>v.copyHeading("qpagecontainer-api"))},"QPageContainer API"),p,(0,s._)("h2",{id:"qpage-api-",class:"doc-heading doc-h2",onClick:n[1]||(n[1]=a=>v.copyHeading("qpage-api-"))},"QPage API."),l,(0,s._)("h2",{id:"布局构建器",class:"doc-heading doc-h2",onClick:n[2]||(n[2]=a=>v.copyHeading("布局构建器"))},"布局构建器"),k,(0,s.Wm)(x,{push:"",color:"brand-primary","icon-right":"launch",label:"Layout Builder",href:"layout-builder",target:"_blank",rel:"noopener noreferrer"}),(0,s._)("h2",{id:"用法",class:"doc-heading doc-h2",onClick:n[3]||(n[3]=a=>v.copyHeading("用法"))},"用法"),u,i,(0,s._)("p",null,[_,r,g,d,U,(0,s.Wm)(b,{to:"/layout/routing-with-layouts-and-pages"},{default:(0,s.w5)((()=>[m])),_:1}),y]),h,(0,s._)("h3",{id:"示例",class:"doc-heading doc-h3",onClick:n[4]||(n[4]=a=>v.copyHeading("示例"))},"示例"),Q,(0,s.Wm)(L,{title:"Basic",file:"QPage/Basic"}),(0,s._)("h3",{id:"style-fn",class:"doc-heading doc-h3",onClick:n[5]||(n[5]=a=>v.copyHeading("style-fn"))},"Style-fn"),f,P,q])),_:1},8,["meta-title","related","nav","toc","meta-desc"])}var w=t(17536);const C={name:"DocMarkdownPage",setup(){return{metaTitle:"布局页面",metaDesc:"如何使用 QPageContainer 和 QPage 组件。 它们定义了 Quasar App 页面的内容。",related:[{name:"布局",category:"布局和网格",path:"/layout/layout"}],nav:[{name:"布局抽屉",category:"布局和网格",path:"/layout/drawer",dir:"left"},{name:"布局图库",category:"布局和网格",path:"/layout/gallery",dir:"right"}],toc:[{id:"qpagecontainer-api",title:"QPageContainer API"},{id:"qpage-api-",title:"QPage API."},{id:"布局构建器",title:"布局构建器"},{id:"用法",title:"用法"},{id:"示例",title:"示例",sub:!0},{id:"style-fn",title:"Style-fn",sub:!0}],copyHeading:w.Et}}};var b=t(74260);const x=(0,b.Z)(C,[["render",v]]),L=x}}]);