"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[25463],{25463:(a,s,n)=>{n.r(s),n.d(s,{default:()=>H});var e=n(83673);const t=(0,e.Uk)("如果你想把 Quasar 嵌入到你现有的"),o=(0,e.Uk)("Vite"),c=(0,e.Uk)(" 项目中，那么请按照这个指南来安装和使用"),l=(0,e._)("code",{class:"doc-token"},"@quasar/vit-plugin",-1),r=(0,e.Uk)("。 我们的Vite插件所提供的是 Quasar 的树形抖动和Quasar Sass变量的整合。"),p=(0,e._)("div",{class:"doc-note doc-note--warning"},[(0,e._)("p",{class:"doc-note__title"},"警告! 当前限制:"),(0,e._)("p",null,"目前还不支持带有Quasar Vite插件的SSR构建。")],-1),i=(0,e._)("blockquote",{class:"doc-note"},[(0,e._)("p",null,[(0,e.Uk)("Vite 的跨平台支持是由社区插件处理的。这些插件没有像 Quasar CLI 那样与 Quasar 紧密结合，可能会有问题。这就是为什么我们建议使用 Quasar CLI ，以获得最佳的开发体验。此外，我们还计划发布一个 "),(0,e._)("strong",null,"Vite Quasar CLI ** ，在底层使用 Vite"),(0,e.Uk)(" 而不是 Webpack。")])],-1),k=(0,e._)("pre",{class:"doc-code language-bash"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,e._)("span",{class:"token comment"},"# yarn"),(0,e.Uk)("\n$ "),(0,e._)("span",{class:"token function"},"yarn"),(0,e.Uk)(" create vite my-vue-app --template vue\n\n"),(0,e._)("span",{class:"token comment"},"# or npm 6.x"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token function"},"npm"),(0,e.Uk)(" init vite@latest my-vue-app --template vue\n\n"),(0,e._)("span",{class:"token comment"},"# npm 7+, 需要额外的双破折号:"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token function"},"npm"),(0,e.Uk)(" init vite@latest my-vue-app -- --template vue\n\n"),(0,e._)("span",{class:"token comment"},"# pnpm"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token function"},"pnpm"),(0,e.Uk)(" create vite my-vue-app -- --template vue\n")])],-1),u=(0,e.Uk)("对于官方(和完整的)指南，请访问"),_=(0,e.Uk)("Vite指南的脚手架"),d=(0,e.Uk)(" 一个Vite项目。"),U=(0,e._)("strong",null,'在询问时选择 "Vue "',-1),m=(0,e.Uk)("。"),g=(0,e._)("p",null,"导航到你的Vite项目文件夹并安装必要的软件包。",-1),v=(0,e._)("div",{class:"doc-note doc-note--tip"},[(0,e._)("p",{class:"doc-note__title"},"TIP"),(0,e._)("ul",null,[(0,e._)("li",null,[(0,e.Uk)("注意，"),(0,e._)("code",{class:"doc-token"},"@quasar/extras"),(0,e.Uk)("是可选的。")]),(0,e._)("li",null,[(0,e.Uk)("另外，只有当你想使用Quasar Sass/SCSS的变量时，才添加"),(0,e._)("code",{class:"doc-token"},"sass@1.32.0"),(0,e.Uk)("(注意是销号的)。")])])],-1),h=(0,e._)("pre",{class:"doc-code language-bash"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,e.Uk)("$ "),(0,e._)("span",{class:"token function"},"yarn"),(0,e.Uk)(),(0,e._)("span",{class:"token function"},"add"),(0,e.Uk)(" quasar @quasar/extras\n$ "),(0,e._)("span",{class:"token function"},"yarn"),(0,e.Uk)(),(0,e._)("span",{class:"token function"},"add"),(0,e.Uk)(" -D @quasar/vite-plugin sass@1.32.0\n\n"),(0,e._)("span",{class:"token comment"},"# or"),(0,e.Uk)("\n$ "),(0,e._)("span",{class:"token function"},"npm"),(0,e.Uk)(),(0,e._)("span",{class:"token function"},"install"),(0,e.Uk)(" quasar @quasar/extras\n$ "),(0,e._)("span",{class:"token function"},"npm"),(0,e.Uk)(),(0,e._)("span",{class:"token function"},"install"),(0,e.Uk)(" -D @quasar/vite-plugin sass@1.32.0\n\n"),(0,e._)("span",{class:"token comment"},"# or"),(0,e.Uk)("\n$ "),(0,e._)("span",{class:"token function"},"pnpm"),(0,e.Uk)(),(0,e._)("span",{class:"token function"},"add"),(0,e.Uk)(" quasar @quasar/extras\n$ "),(0,e._)("span",{class:"token function"},"pnpm"),(0,e.Uk)(),(0,e._)("span",{class:"token function"},"add"),(0,e.Uk)(" quasar -D @quasar/vite-plugin sass@1.32.0\n")])],-1),f=(0,e._)("p",null,"我们已经建立了一个配置器来帮助你尽快开始使用。",-1),b=(0,e.Uk)("如果要启用，请查看我们的"),y=(0,e.Uk)("RTL支持"),q=(0,e.Uk)(" 页面并按照说明操作。"),V=(0,e.Uk)("当为生产构建时，你可能会注意到下面的警告。你可以安全地忽略它。这是一个已知的"),Q=(0,e.Uk)("Vite问题"),w=(0,e.Uk)(" 。"),C=(0,e._)("pre",{class:"doc-code language-js"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,e.Uk)("warnings when minifying css"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)("\n "),(0,e._)("span",{class:"token operator"},">"),(0,e.Uk)(),(0,e._)("span",{class:"token operator"},"<"),(0,e.Uk)("stdin"),(0,e._)("span",{class:"token operator"},">"),(0,e._)("span",{class:"token operator"},":"),(0,e._)("span",{class:"token number"},"32"),(0,e._)("span",{class:"token operator"},":"),(0,e._)("span",{class:"token number"},"0"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(" warning"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'"@charset"'),(0,e.Uk)(" must be the first rule "),(0,e._)("span",{class:"token keyword"},"in"),(0,e.Uk)(" the file\n    "),(0,e._)("span",{class:"token number"},"32"),(0,e.Uk)(" │ @charset "),(0,e._)("span",{class:"token string"},'"UTF-8"'),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n       ╵ "),(0,e._)("span",{class:"token operator"},"~"),(0,e._)("span",{class:"token operator"},"~"),(0,e._)("span",{class:"token operator"},"~"),(0,e._)("span",{class:"token operator"},"~"),(0,e._)("span",{class:"token operator"},"~"),(0,e._)("span",{class:"token operator"},"~"),(0,e._)("span",{class:"token operator"},"~"),(0,e._)("span",{class:"token operator"},"~"),(0,e.Uk)("\n   "),(0,e._)("span",{class:"token operator"},"<"),(0,e.Uk)("stdin"),(0,e._)("span",{class:"token operator"},">"),(0,e._)("span",{class:"token operator"},":"),(0,e._)("span",{class:"token number"},"9"),(0,e._)("span",{class:"token operator"},":"),(0,e._)("span",{class:"token number"},"0"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(" note"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(" This rule cannot come before a "),(0,e._)("span",{class:"token string"},'"@charset"'),(0,e.Uk)(" rule\n     "),(0,e._)("span",{class:"token number"},"9"),(0,e.Uk)(" │ "),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("material"),(0,e._)("span",{class:"token operator"},"-"),(0,e.Uk)("icons "),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n")])],-1);function T(a,s,n,T,j,D){const L=(0,e.up)("doc-link"),S=(0,e.up)("vite-plugin-usage"),$=(0,e.up)("doc-page");return(0,e.wg)(),(0,e.j4)($,{"meta-title":T.metaTitle,title:"用于 Quasar 的Vite插件",nav:T.nav,toc:T.toc,"meta-desc":T.metaDesc},{default:(0,e.w5)((()=>[(0,e._)("p",null,[t,(0,e.Wm)(L,{to:"https://vitejs.dev"},{default:(0,e.w5)((()=>[o])),_:1}),c,l,r]),p,i,(0,e._)("h2",{id:"创建一个vite项目",class:"doc-heading doc-h2",onClick:s[0]||(s[0]=a=>T.copyHeading("创建一个vite项目"))},"创建一个Vite项目"),k,(0,e._)("p",null,[u,(0,e.Wm)(L,{to:"https://vitejs.dev/guide/#scaffolding-your-first-vite-project"},{default:(0,e.w5)((()=>[_])),_:1}),d,U,m]),(0,e._)("h2",{id:"安装",class:"doc-heading doc-h2",onClick:s[1]||(s[1]=a=>T.copyHeading("安装"))},"安装"),g,v,h,(0,e._)("h2",{id:"使用-quasar",class:"doc-heading doc-h2",onClick:s[2]||(s[2]=a=>T.copyHeading("使用-quasar"))},"使用 Quasar"),f,(0,e.Wm)(S),(0,e._)("h2",{id:"rtl支持",class:"doc-heading doc-h2",onClick:s[3]||(s[3]=a=>T.copyHeading("rtl支持"))},"RTL支持"),(0,e._)("p",null,[b,(0,e.Wm)(L,{to:"/options/rtl-support"},{default:(0,e.w5)((()=>[y])),_:1}),q]),(0,e._)("h2",{id:"为生产而构建时的警告",class:"doc-heading doc-h2",onClick:s[4]||(s[4]=a=>T.copyHeading("为生产而构建时的警告"))},"为生产而构建时的警告"),(0,e._)("p",null,[V,(0,e.Wm)(L,{to:"https://github.com/vitejs/vite/issues/4625"},{default:(0,e.w5)((()=>[Q])),_:1}),w]),C])),_:1},8,["meta-title","nav","toc","meta-desc"])}var j=n(17536),D=n(92952);const L={name:"DocMarkdownPage",components:{VitePluginUsage:D.Z},setup(){return{metaTitle:"用于 Quasar 的Vite插件",metaDesc:"如何将 Quasar 嵌入到Vite应用程序中。",nav:[{name:"UMD / 独立",category:"Quasar 风格",path:"/start/umd",dir:"left"},{name:"Vue CLI 插件",category:"Quasar 风格",path:"/start/vue-cli-plugin",dir:"right"}],toc:[{id:"创建一个vite项目",title:"创建一个Vite项目"},{id:"安装",title:"安装"},{id:"使用-quasar",title:"使用 Quasar"},{id:"rtl支持",title:"RTL支持"},{id:"为生产而构建时的警告",title:"为生产而构建时的警告"}],copyHeading:j.Et}}};var S=n(74260);const $=(0,S.Z)(L,[["render",T]]),H=$}}]);