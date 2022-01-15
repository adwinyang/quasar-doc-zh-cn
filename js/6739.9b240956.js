"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[6739],{6739:(n,a,e)=>{e.r(a),e.d(a,{default:()=>H});var s=e(83673);const t=(0,s.Uk)("If you want to embed Quasar into your existing "),o=(0,s.Uk)("Vite"),i=(0,s.Uk)(" project then follow this guide to install and use the "),c=(0,s._)("code",{class:"doc-token"},"@quasar/vite-plugin",-1),r=(0,s.Uk)(". What our Vite plugin offers out of the box is tree-shaking for Quasar and also Quasar Sass variables integration."),l=(0,s._)("div",{class:"doc-note doc-note--warning"},[(0,s._)("p",{class:"doc-note__title"},"Warning! Current limitation:"),(0,s._)("p",null,"SSR builds with Quasar Vite plugin are not yet supported.")],-1),p=(0,s._)("blockquote",{class:"doc-note"},[(0,s._)("p",null,[(0,s.Uk)("Cross-platform support with Vite is handled by community plugins. These are not tightly integrated with Quasar as with Quasar CLI and may have issues. This is why for the best developer experience we recommend to use Quasar CLI instead. Also, there are plans to release a "),(0,s._)("strong",null,"Quasar CLI with Vite"),(0,s.Uk)(" under the hood instead of Webpack.")])],-1),u=(0,s._)("pre",{class:"doc-code language-bash"},[(0,s._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,s._)("span",{class:"token comment"},"# yarn"),(0,s.Uk)("\n$ "),(0,s._)("span",{class:"token function"},"yarn"),(0,s.Uk)(" create vite my-vue-app --template vue\n\n"),(0,s._)("span",{class:"token comment"},"# or npm 6.x"),(0,s.Uk)("\n"),(0,s._)("span",{class:"token function"},"npm"),(0,s.Uk)(" init vite@latest my-vue-app --template vue\n\n"),(0,s._)("span",{class:"token comment"},"# npm 7+, extra double-dash is needed:"),(0,s.Uk)("\n"),(0,s._)("span",{class:"token function"},"npm"),(0,s.Uk)(" init vite@latest my-vue-app -- --template vue\n\n"),(0,s._)("span",{class:"token comment"},"# pnpm"),(0,s.Uk)("\n"),(0,s._)("span",{class:"token function"},"pnpm"),(0,s.Uk)(" create vite my-vue-app -- --template vue\n")])],-1),k=(0,s.Uk)("For the official (and full) guide, please visit the "),d=(0,s.Uk)("Vite guide for scaffolding"),_=(0,s.Uk)(" a Vite project. "),g=(0,s._)("strong",null,"Select “Vue” when asked.",-1),h=(0,s._)("p",null,"Navigate to your Vite project folder and install the necessary packages.",-1),m=(0,s._)("div",{class:"doc-note doc-note--tip"},[(0,s._)("p",{class:"doc-note__title"},"TIP"),(0,s._)("ul",null,[(0,s._)("li",null,[(0,s.Uk)("Notice that "),(0,s._)("code",{class:"doc-token"},"@quasar/extras"),(0,s.Uk)(" is optional.")]),(0,s._)("li",null,[(0,s.Uk)("Also, add "),(0,s._)("code",{class:"doc-token"},"sass@1.32.0"),(0,s.Uk)(" (notice the pinned version) only if you want to use the Quasar Sass/SCSS variables.")])])],-1),U=(0,s._)("pre",{class:"doc-code language-bash"},[(0,s._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,s.Uk)("$ "),(0,s._)("span",{class:"token function"},"yarn"),(0,s.Uk)(),(0,s._)("span",{class:"token function"},"add"),(0,s.Uk)(" quasar @quasar/extras\n$ "),(0,s._)("span",{class:"token function"},"yarn"),(0,s.Uk)(),(0,s._)("span",{class:"token function"},"add"),(0,s.Uk)(" -D @quasar/vite-plugin sass@1.32.0\n\n"),(0,s._)("span",{class:"token comment"},"# or"),(0,s.Uk)("\n$ "),(0,s._)("span",{class:"token function"},"npm"),(0,s.Uk)(),(0,s._)("span",{class:"token function"},"install"),(0,s.Uk)(" quasar @quasar/extras\n$ "),(0,s._)("span",{class:"token function"},"npm"),(0,s.Uk)(),(0,s._)("span",{class:"token function"},"install"),(0,s.Uk)(" -D @quasar/vite-plugin sass@1.32.0\n\n"),(0,s._)("span",{class:"token comment"},"# or"),(0,s.Uk)("\n$ "),(0,s._)("span",{class:"token function"},"pnpm"),(0,s.Uk)(),(0,s._)("span",{class:"token function"},"add"),(0,s.Uk)(" quasar @quasar/extras\n$ "),(0,s._)("span",{class:"token function"},"pnpm"),(0,s.Uk)(),(0,s._)("span",{class:"token function"},"add"),(0,s.Uk)(" quasar -D @quasar/vite-plugin sass@1.32.0\n")])],-1),f=(0,s._)("p",null,"We have built a configurator to help you get started as quick as possible:",-1),v=(0,s.Uk)("For enabling, please check out our "),b=(0,s.Uk)("RTL Support"),w=(0,s.Uk)(" page and follow the instructions."),y=(0,s.Uk)("When building for production, you may notice the warning below. You can safely ignore it. This is a known "),q=(0,s.Uk)("Vite issue"),V=(0,s.Uk)("."),C=(0,s._)("pre",{class:"doc-code language-js"},[(0,s._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,s.Uk)("warnings when minifying css"),(0,s._)("span",{class:"token operator"},":"),(0,s.Uk)("\n "),(0,s._)("span",{class:"token operator"},">"),(0,s.Uk)(),(0,s._)("span",{class:"token operator"},"<"),(0,s.Uk)("stdin"),(0,s._)("span",{class:"token operator"},">"),(0,s._)("span",{class:"token operator"},":"),(0,s._)("span",{class:"token number"},"32"),(0,s._)("span",{class:"token operator"},":"),(0,s._)("span",{class:"token number"},"0"),(0,s._)("span",{class:"token operator"},":"),(0,s.Uk)(" warning"),(0,s._)("span",{class:"token operator"},":"),(0,s.Uk)(),(0,s._)("span",{class:"token string"},'"@charset"'),(0,s.Uk)(" must be the first rule "),(0,s._)("span",{class:"token keyword"},"in"),(0,s.Uk)(" the file\n    "),(0,s._)("span",{class:"token number"},"32"),(0,s.Uk)(" │ @charset "),(0,s._)("span",{class:"token string"},'"UTF-8"'),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n       ╵ "),(0,s._)("span",{class:"token operator"},"~"),(0,s._)("span",{class:"token operator"},"~"),(0,s._)("span",{class:"token operator"},"~"),(0,s._)("span",{class:"token operator"},"~"),(0,s._)("span",{class:"token operator"},"~"),(0,s._)("span",{class:"token operator"},"~"),(0,s._)("span",{class:"token operator"},"~"),(0,s._)("span",{class:"token operator"},"~"),(0,s.Uk)("\n   "),(0,s._)("span",{class:"token operator"},"<"),(0,s.Uk)("stdin"),(0,s._)("span",{class:"token operator"},">"),(0,s._)("span",{class:"token operator"},":"),(0,s._)("span",{class:"token number"},"9"),(0,s._)("span",{class:"token operator"},":"),(0,s._)("span",{class:"token number"},"0"),(0,s._)("span",{class:"token operator"},":"),(0,s.Uk)(" note"),(0,s._)("span",{class:"token operator"},":"),(0,s.Uk)(" This rule cannot come before a "),(0,s._)("span",{class:"token string"},'"@charset"'),(0,s.Uk)(" rule\n     "),(0,s._)("span",{class:"token number"},"9"),(0,s.Uk)(" │ "),(0,s._)("span",{class:"token punctuation"},"."),(0,s.Uk)("material"),(0,s._)("span",{class:"token operator"},"-"),(0,s.Uk)("icons "),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)("\n")])],-1);function j(n,a,e,j,Q,T){const W=(0,s.up)("doc-link"),x=(0,s.up)("vite-plugin-usage"),S=(0,s.up)("doc-page");return(0,s.wg)(),(0,s.j4)(S,{"meta-title":j.metaTitle,title:"Vite plugin for Quasar","meta-desc":j.metaDesc},{default:(0,s.w5)((()=>[(0,s._)("p",null,[t,(0,s.Wm)(W,{to:"https://vitejs.dev"},{default:(0,s.w5)((()=>[o])),_:1}),i,c,r]),l,p,(0,s._)("h2",{id:"creating-a-vite-project",class:"doc-heading doc-h2",onClick:a[0]||(a[0]=n=>j.copyHeading("creating-a-vite-project"))},"Creating a Vite project"),u,(0,s._)("p",null,[k,(0,s.Wm)(W,{to:"https://vitejs.dev/guide/#scaffolding-your-first-vite-project"},{default:(0,s.w5)((()=>[d])),_:1}),_,g]),(0,s._)("h2",{id:"installation",class:"doc-heading doc-h2",onClick:a[1]||(a[1]=n=>j.copyHeading("installation"))},"Installation"),h,m,U,(0,s._)("h2",{id:"using-quasar",class:"doc-heading doc-h2",onClick:a[2]||(a[2]=n=>j.copyHeading("using-quasar"))},"Using Quasar"),f,(0,s.Wm)(x),(0,s._)("h2",{id:"rtl-support",class:"doc-heading doc-h2",onClick:a[3]||(a[3]=n=>j.copyHeading("rtl-support"))},"RTL support"),(0,s._)("p",null,[v,(0,s.Wm)(W,{to:"/options/rtl-support"},{default:(0,s.w5)((()=>[b])),_:1}),w]),(0,s._)("h2",{id:"warning-when-building-for-production",class:"doc-heading doc-h2",onClick:a[4]||(a[4]=n=>j.copyHeading("warning-when-building-for-production"))},"Warning when building for production"),(0,s._)("p",null,[y,(0,s.Wm)(W,{to:"https://github.com/vitejs/vite/issues/4625"},{default:(0,s.w5)((()=>[q])),_:1}),V]),C])),_:1},8,["meta-title","meta-desc"])}var Q=e(17536),T=e(92952);const W={name:"DocMarkdownPage",components:{VitePluginUsage:T.Z},setup(){return{metaTitle:"Vite plugin for Quasar",metaDesc:"How to embed Quasar into a Vite app.",copyHeading:Q.Et}}};var x=e(74260);const S=(0,x.Z)(W,[["render",j]]),H=S}}]);