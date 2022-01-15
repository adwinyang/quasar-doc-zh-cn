"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[92797],{92797:(n,s,a)=>{a.r(s),a.d(s,{default:()=>V});var e=a(83673);const t=(0,e._)("p",null,"本指南适用于您想要创建新的 UI 组件并通过 App Extension 提供它的情况，该 App Extension 会将其注入到宿主应用程序中(托管应用程序中)。",-1),o={class:"doc-note doc-note--tip"},c=(0,e._)("p",{class:"doc-note__title"},"TIP",-1),p=(0,e.Uk)("要创建一个App Extension项目文件夹，请先阅读"),k=(0,e.Uk)("开发指南>简介"),l=(0,e.Uk)(" 。"),u={class:"doc-note doc-note--tip"},i=(0,e._)("p",{class:"doc-note__title"},"Full Example",-1),_=(0,e.Uk)("要查看我们将构建的示例，请转到 "),r=(0,e.Uk)("MyComponent 完整示例"),d=(0,e.Uk)(" ，这是一个 GitHub 存储库这个应用扩展。"),m=(0,e._)("p",null,"创建一个文件夹结构，以保持你的代码模块化和结构化。例如，对于一个 UI 组件，创建一个看起来像这样的结构：",-1),U=(0,e._)("pre",{class:"doc-code language-bash"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,e._)("span",{class:"token builtin class-name"},"."),(0,e.Uk)("\n├── package.json\n└── src\n    └── boot "),(0,e._)("span",{class:"token comment"},'# 包含 "启动 "代码的文件夹'),(0,e.Uk)("\n    │ └── register-my-component.js "),(0,e._)("span",{class:"token comment"},"# 组件的启动文件"),(0,e.Uk)("\n    ├── component "),(0,e._)("span",{class:"token comment"},"# 包含组件的文件夹"),(0,e.Uk)("\n    │ └──MyComponent.vue "),(0,e._)("span",{class:"token comment"},"# 组件文件(可以是.vue，也可以是.js)。"),(0,e.Uk)("\n    │ └──MyComponent.sass "),(0,e._)("span",{class:"token comment"},"# 组件的sass文件(或.scss/.css，或任何你需要的)。"),(0,e.Uk)("\n    └── index.js "),(0,e._)("span",{class:"token comment"},"# 索引API中描述的内容"),(0,e.Uk)("\n")])],-1),g=(0,e.Uk)("现在，你需要处理注册你的组件。你用 "),f=(0,e._)("code",{class:"doc-token"},"/index.js",-1),x=(0,e.Uk)(" 文件(在"),y=(0,e.Uk)("Index API"),v=(0,e.Uk)(" 中描述)来做，这个文件是在你设置新的App Extension时创建的。"),b=(0,e._)("p",null,"让我们分解一下。",-1),h=(0,e._)("pre",{class:"doc-code language-js"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,e._)("span",{class:"token comment"},"// file: /index.js"),(0,e.Uk)("\nmodule"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function-variable function"},"exports"),(0,e.Uk)(),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e._)("span",{class:"token keyword"},"function"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token parameter"},"api"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token comment"},"// (可选！)。"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token comment"},"// Quasar兼容性检查；你可能需要"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token comment"},'// 硬性依赖，如最小版本的 "quasar"'),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token comment"},'// 或最低版本的 "@quasar/app" CLI。'),(0,e.Uk)("\n  api"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"compatibleWith"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token string"},"'quasar'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'^2.0.0'"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n  api"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"compatibleWith"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token string"},"'@quasar/app'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'^3.0.0'"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n\n  "),(0,e._)("span",{class:"token comment"},"// 这里我们扩展了/quasar.conf.js，所以我们可以添加"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token comment"},"// 一个启动文件，该文件注册了我们的新UI组件。"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token comment"},'// "extendConf" 将在下面定义(继续阅读教程)'),(0,e.Uk)("\n  api"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"extendQuasarConf"),(0,e._)("span",{class:"token punctuation"},"("),(0,e.Uk)("extendConf"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n")])],-1),w=(0,e._)("p",null,"第一组做了与 Quasar 的兼容性检查(这是可选的，但建议使用)。如果你的组件使用的 Quasar 功能是在某个版本之后才有的，你可以确保安装的 Quasar 版本是正确的。",-1),j=(0,e.Uk)(":: tip 你不仅可以做 "),C=(0,e._)("code",{class:"doc-token"},"api.compatibleWith()",-1),q=(0,e.Uk)(" 来检查 Quasar 软件包，还可以检查任何其他可用的软件包(你没有通过你的App Extension自己提供)。请阅读App Extension Development Guide > Introduction页面中的"),I=(0,e.Uk)("Handling package-dependencies"),Q=(0,e.Uk)(" 部分以了解更多信息。 :::"),A=(0,e._)("p",null,[(0,e.Uk)("第二组告诉 Quasar 在 "),(0,e._)("code",{class:"doc-token"},"extendQuasarConf"),(0,e.Uk)(" CLI 生命周期钩子被调用时调用我们的自定义函数。它看起来会像这样:")],-1),E=(0,e._)("pre",{class:"doc-code language-js"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,e._)("span",{class:"token comment"},"//文件: /index.js"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token keyword"},"function"),(0,e.Uk)(),(0,e._)("span",{class:"token function"},"extendConf"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token parameter"},"conf"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token comment"},"// 确保我的组件的启动文件被注册了"),(0,e.Uk)("\n  conf"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("boot"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"push"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token string"},"'~quasar-app-extension-my-component/src/boot/register-my-component.js'"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n\n  "),(0,e._)("span",{class:"token comment"},"// 确保启动和组件文件被转译"),(0,e.Uk)("\n  conf"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("build"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("transpileDependencies"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"push"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token regex"},[(0,e._)("span",{class:"token regex-delimiter"},"/"),(0,e._)("span",{class:"token regex-source language-regex"},"quasar-app-extension-my-component[/\\/]src"),(0,e._)("span",{class:"token regex-delimiter"},"/")]),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n\n  "),(0,e._)("span",{class:"token comment"},"// 确保 my-component 的 css 通过 webpack，以避免ssr问题"),(0,e.Uk)("\n  conf"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("css"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"push"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token string"},"'~quasar-app-extension-my-component/src/component/MyComponent.sass'"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n")])],-1),M=(0,e.Uk)("最后，让我们看看启动文件会是什么样子。请确保你先阅读"),W=(0,e.Uk)("Boot files"),D=(0,e.Uk)(" 文档，了解什么是 Boot 文件。"),T=(0,e._)("pre",{class:"doc-code language-js"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,e._)("span",{class:"token comment"},"// file: /src/boot/register-my-component.js"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token keyword"},"import"),(0,e.Uk)(" MyComponent "),(0,e._)("span",{class:"token keyword"},"from"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'../component/MyComponent.vue'"),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token comment"},"// 我们在全局范围内向Vue注册我们的组件"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token keyword"},"export"),(0,e.Uk)(),(0,e._)("span",{class:"token keyword"},"default"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token parameter"},[(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)(" app "),(0,e._)("span",{class:"token punctuation"},"}")]),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e._)("span",{class:"token operator"},"=>"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n  app"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"component"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token string"},"'my-component'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(" MyComponent"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n")])],-1);function P(n,s,a,P,H,B){const G=(0,e.up)("doc-link"),L=(0,e.up)("doc-page");return(0,e.wg)(),(0,e.j4)(L,{"meta-title":P.metaTitle,title:"提供一个UI组件",nav:P.nav,toc:P.toc,"meta-desc":P.metaDesc},{default:(0,e.w5)((()=>[t,(0,e._)("div",o,[c,(0,e._)("p",null,[p,(0,e.Wm)(G,{to:"/app-extensions/development-guide/introduction"},{default:(0,e.w5)((()=>[k])),_:1}),l])]),(0,e._)("div",u,[i,(0,e._)("p",null,[_,(0,e.Wm)(G,{to:"https://github.com/quasarframework/app-extension-examples/tree/v2/my-component"},{default:(0,e.w5)((()=>[r])),_:1}),d])]),m,U,(0,e._)("p",null,[g,f,x,(0,e.Wm)(G,{to:"/app-extensions/development-guide/index-api"},{default:(0,e.w5)((()=>[y])),_:1}),v]),b,h,w,(0,e._)("p",null,[j,C,q,(0,e.Wm)(G,{to:"/app-extensions/development-guide/introduction#handling-package-dependencies"},{default:(0,e.w5)((()=>[I])),_:1}),Q]),A,E,(0,e._)("p",null,[M,(0,e.Wm)(G,{to:"/quasar-cli/boot-files"},{default:(0,e.w5)((()=>[W])),_:1}),D]),T])),_:1},8,["meta-title","nav","toc","meta-desc"])}var H=a(17536);const B={name:"DocMarkdownPage",setup(){return{metaTitle:"提供一个UI组件",metaDesc:"关于如何向 Quasar 应用扩展的主机应用提供Vue组件的技巧和窍门。",nav:[{name:"简介",category:"技巧和窍门",path:"/app-extensions/tips-and-tricks/introduction",dir:"left"},{name:"提供一个指令",category:"技巧和窍门",path:"/app-extensions/tips-and-tricks/provide-a-directive",dir:"right"}],toc:[],copyHeading:H.Et}}};var G=a(74260);const L=(0,G.Z)(B,[["render",P]]),V=L}}]);