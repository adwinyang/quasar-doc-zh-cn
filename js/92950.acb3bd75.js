"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[92950],{92950:(e,a,n)=>{n.r(a),n.d(a,{default:()=>y});var s=n(83673);const c={class:"doc-note doc-note--warning"},o=(0,s._)("p",{class:"doc-note__title"},"WARNING",-1),l=(0,s._)("p",null,"Vue CLI的跨平台支持是由一些社区插件处理的。这意味着，将 Quasar 提供的开箱即用的功能放在一起将花费你额外的时间和精力，并不能保证你获得最好的体验，而且你将无法使用只有 Quasar CLI 才有的一些功能。Quasar也没有专门对这些插件进行测试，因此你有可能遇到问题。然而，这对任何组件库都是有效的，除非他们特别提到已经用第三方插件测试了他们的组件。",-1),u=(0,s.Uk)("因此，在你开始使用 Quasar 进行开发的这条道路之前，我们希望你能理解以下几点。为了保证你在使用 Quasar 时有最好的开发者体验，我们强烈建议你使用 Quasar 的CLI，并用它来构建你的项目，因为你不会错过Vue CLI的任何功能。你会得到 Quasar 提供的全部功能，比如完全的跨平台构建支持(但这只是冰山一角)，而且你也可以做几乎所有你想用Vue做的事情，即通过 Quasar 的"),t=(0,s.Uk)("Boot Files"),r=(0,s.Uk)(" 使用Vue插件。"),d=(0,s._)("p",null,"要通过Vue CLI插件与 Quasar 一起工作，你需要确保你在全局范围内安装了@vue/cli。为了确保你有正确的版本，请使用这个命令。",-1),i=(0,s._)("pre",{class:"doc-code language-bash"},[(0,s._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},"$ vue --version\n")],-1),_=(0,s._)("p",null,"如果你安装了Vue CLI 2.x.x.，你就需要用卸载它。",-1),p=(0,s._)("pre",{class:"doc-code language-bash"},[(0,s._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,s.Uk)("$ "),(0,s._)("span",{class:"token function"},"npm"),(0,s.Uk)(" uninstall -g vue-cli\n"),(0,s._)("span",{class:"token comment"},"# or (depending with which you've installed it)"),(0,s.Uk)("\n$ "),(0,s._)("span",{class:"token function"},"yarn"),(0,s.Uk)(" global remove vue-cli\n")])],-1),g=(0,s._)("p",null,"安装Vue CLI(v4.5.11以上)，如下所示。",-1),k=(0,s._)("pre",{class:"doc-code language-bash"},[(0,s._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,s.Uk)("$ "),(0,s._)("span",{class:"token function"},"npm"),(0,s.Uk)(),(0,s._)("span",{class:"token function"},"install"),(0,s.Uk)(" -g @vue/cli\n")])],-1),v=(0,s._)("p",null,[(0,s.Uk)("如果你还没有用@vue/cli创建一个项目，那么就用下面的命令来做。"),(0,s._)("strong",null,"确保你在屏幕上出现的Vue CLI功能列表提示中勾选Babel"),(0,s.Uk)("。")],-1),h=(0,s._)("pre",{class:"doc-code language-bash"},[(0,s._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,s._)("span",{class:"token comment"},"# 当被问及以下问题时，请确保选择Vue 3："),(0,s.Uk)("\n$ vue create my-app\n")])],-1),m=(0,s._)("p",null,"导航到新创建的项目文件夹并添加cli插件。在安装它之前，请确保提交你当前的修改，如果你想在以后恢复它们。",-1),b=(0,s._)("div",{class:"doc-note doc-note--warning"},[(0,s._)("p",{class:"doc-note__title"},"WARNING"),(0,s._)("p",null,"Vue CLI的跨平台支持是由社区插件处理的。这些插件没有像 Quasar CLI 那样与 Quasar 紧密结合，可能会有问题。")],-1),C=(0,s._)("pre",{class:"doc-code language-bash"},[(0,s._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,s.Uk)("$ "),(0,s._)("span",{class:"token builtin class-name"},"cd"),(0,s.Uk)(" my-app\n$ vue "),(0,s._)("span",{class:"token function"},"add"),(0,s.Uk)(" quasar\n")])],-1),I=(0,s._)("p",null,"CLI会问你是否希望该插件替换一些现有的文件。建议你这样做，如果你希望有一个示例，那么你可以快速开发你的应用程序。",-1),Q=(0,s._)("p",null,[(0,s.Uk)("你的Vue配置(在package.json或vue.config.js文件中，取决于你在创建vue应用时的选择)也将包含一个"),(0,s._)("code",{class:"doc-token"},"quasar"),(0,s.Uk)("对象，包含一些基本的 Quasar 配置。")],-1);function U(e,a,n,U,L,V){const f=(0,s.up)("doc-link"),w=(0,s.up)("doc-page");return(0,s.wg)(),(0,s.j4)(w,{"meta-title":U.metaTitle,title:"Quasar Plugin CLI视图",nav:U.nav,toc:U.toc,"meta-desc":U.metaDesc},{default:(0,s.w5)((()=>[(0,s._)("div",c,[o,l,(0,s._)("p",null,[u,(0,s.Wm)(f,{to:"/quasar-cli/boot-files#Anatomy-of-an-boot-file"},{default:(0,s.w5)((()=>[t])),_:1}),r])]),d,i,_,p,g,k,v,h,(0,s._)("h2",{id:"添加vue-cli-quasar插件",class:"doc-heading doc-h2",onClick:a[0]||(a[0]=e=>U.copyHeading("添加vue-cli-quasar插件"))},"添加Vue CLI Quasar插件"),m,b,C,I,Q])),_:1},8,["meta-title","nav","toc","meta-desc"])}var L=n(17536);const V={name:"DocMarkdownPage",setup(){return{metaTitle:"Quasar Plugin CLI视图",metaDesc:"如何将 Quasar 嵌入到Vue CLI应用中。",nav:[{name:"Vite 插件",category:"Quasar 风格",path:"/start/vite-plugin",dir:"left"},{name:"如何使用 Vue",category:"入门",path:"/start/how-to-use-vue",dir:"right"}],toc:[{id:"添加vue-cli-quasar插件",title:"添加Vue CLI Quasar插件"}],copyHeading:L.Et}}};var f=n(74260);const w=(0,f.Z)(V,[["render",U]]),y=w}}]);