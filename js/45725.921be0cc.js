"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[45725],{45725:(n,s,e)=>{e.r(s),e.d(s,{default:()=>E});var a=e(83673);const o=(0,a._)("p",null,[(0,a.Uk)("出于安全考虑，渲染器线程(你在"),(0,a._)("code",{class:"doc-token"},"/src"),(0,a.Uk)("的UI代码)不能访问Node.js的东西。然而，你可以运行Node.js代码，并通过位于"),(0,a._)("code",{class:"doc-token"},"/src-electron/electron-preload.[js|ts]"),(0,a.Uk)("的Electron预加载脚本将其连接到渲染器线程。使用"),(0,a._)("code",{class:"doc-token"},"contextBridge"),(0,a.Uk)("(来自"),(0,a._)("code",{class:"doc-token"},"electron"),(0,a.Uk)("包)来暴露你的用户界面所需要的东西。")],-1),t=(0,a._)("p",null,"由于预加载脚本是从Node.js中运行的，所以要注意你对它所做的事情以及你向渲染器线程暴露的东西",-1),c=(0,a._)("p",null,[(0,a.Uk)("在"),(0,a._)("code",{class:"doc-token"},"/src-electron/"),(0,a.Uk)("文件夹中，有一个名为"),(0,a._)("code",{class:"doc-token"},"electron-preload.js"),(0,a.Uk)("的文件。将你的预加载代码填入其中。")],-1),p=(0,a._)("p",null,[(0,a.Uk)("确保你的"),(0,a._)("code",{class:"doc-token"},"/src-electron/electron-main.[js|ts]"),(0,a.Uk)('有以下内容(靠近 "webPreferences "部分)：')],-1),l=(0,a._)("pre",{class:"doc-code language-js"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,a._)("span",{class:"token comment"},"// 文件：/src-electron/electron-main.[js|ts]"),(0,a.Uk)("\n\n"),(0,a._)("span",{class:"token comment"},"// 在顶部添加这个。"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token keyword"},"import"),(0,a.Uk)(" path "),(0,a._)("span",{class:"token keyword"},"from"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},"'path'"),(0,a.Uk)("\n\n"),(0,a._)("span",{class:"token comment"},"// ..."),(0,a.Uk)("\n\n"),(0,a._)("span",{class:"token keyword"},"function"),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"createWindow"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token comment"},"// ..."),(0,a.Uk)("\n  mainWindow "),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)(),(0,a._)("span",{class:"token keyword"},"new"),(0,a.Uk)(),(0,a._)("span",{class:"token class-name"},"BrowserWindow"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// ..."),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token literal-property property"},"webPreferences"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token comment"},"// 这就是神奇之处。"),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token literal-property property"},"preload"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(" path"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function"},"resolve"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("__dirname"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" process"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("env"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token constant"},"QUASAR_ELECTRON_PRELOAD"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n")])],-1),k=(0,a._)("p",null,[(0,a._)("code",{class:"doc-token"},"/src-electron/electron-preload.[js|ts]"),(0,a.Uk)("内容的示例：")],-1),r=(0,a._)("pre",{class:"doc-code language-js"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,a._)("span",{class:"token comment"},"// 示例，它将window.myAPI.doAThing()注入到渲染器中。"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token comment"},"// 线程 (/src/*)"),(0,a.Uk)("\n\n"),(0,a._)("span",{class:"token keyword"},"const"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)(" contextBridge "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"require"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token string"},"'electron'"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n\ncontextBridge"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function"},"exposeInMainWorld"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token string"},"'myAPI'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token function-variable function"},"doAThing"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"=>"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n")])],-1),_=(0,a._)("div",{class:"doc-note doc-note--warning"},[(0,a._)("p",{class:"doc-note__title"},"WARNING"),(0,a._)("ol",null,[(0,a._)("li",null,"请注意该文件是在Node.js环境下运行的。"),(0,a._)("li",null,'如果你从node_modules中导入任何东西，那么请确保该包是在/package.json > "dependencies "中指定的，而不是在 "devDependencies "中。')])],-1),u=(0,a._)("p",null,'使用 "contextBridge "并不自动意味着你所做的一切是安全的。例如，下面的代码是不安全的。',-1),i=(0,a._)("pre",{class:"doc-code language-js"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,a._)("span",{class:"token comment"},"// 糟糕的代码；不要！！！。"),(0,a.Uk)("\ncontextBridge"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function"},"exposeInMainWorld"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token string"},"'myAPI'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token literal-property property"},"send"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(" ipcRenderer"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("send\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n")])],-1),d=(0,a._)("p",null,"它直接暴露了一个强大的API，没有任何形式的参数过滤。这将允许任何网站发送任意的IPC消息，这是你不希望看到的。暴露基于IPC的API的正确方式是为每个IPC消息提供一个方法。",-1),U=(0,a._)("pre",{class:"doc-code language-js"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,a._)("span",{class:"token comment"},"// 良好的代码"),(0,a.Uk)("\ncontextBridge"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function"},"exposeInMainWorld"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token string"},"'myAPI'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token function-variable function"},"loadPreferences"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"=>"),(0,a.Uk)(" ipcRenderer"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function"},"invoke"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token string"},"'load-prefs'"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n")])],-1),g=(0,a._)("p",null,[(0,a.Uk)("现在，"),(0,a._)("code",{class:"doc-token"},"loadPreferences"),(0,a.Uk)("在你的javascript代码中全局可用(即："),(0,a._)("code",{class:"doc-token"},"window.myAPI.loadPreferences"),(0,a.Uk)(")。")],-1),m=(0,a._)("div",{class:"doc-note doc-note--warning"},[(0,a._)("p",{class:"doc-note__title"},"WARNING"),(0,a._)("p",null,'请确保挑选的名称不与现有的 "窗口 "键相冲突。')],-1),y=(0,a._)("p",null,[(0,a.Uk)("在主线程中使用上述代码和"),(0,a._)("code",{class:"doc-token"},"invoke'到"),(0,a.Uk)("load-prefs’，会有这样的代码。")],-1),f=(0,a._)("pre",{class:"doc-code language-js"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,a.Uk)("ipcMain"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function"},"handle"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token string"},"'myAPI:load-prefs'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"=>"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token keyword"},"return"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// 对象，其中包含偏好"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n")])],-1),j=(0,a._)("p",null,[(0,a.Uk)("如果你想改变预装脚本的位置(甚至是主线程文件)，那么请编辑"),(0,a._)("code",{class:"doc-token"},"/quasar.conf.js"),(0,a.Uk)("。")],-1),w=(0,a._)("pre",{class:"doc-code language-js"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,a._)("span",{class:"token comment"},"// 如果你想改变默认文件"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token literal-property property"},"sourceFiles"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token literal-property property"},"electronMain"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},"'src-electron/electron-main.js'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token literal-property property"},"electronPreload"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},"'src-electron/electron-preload.js'"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n")])],-1);function h(n,s,e,h,v,P){const I=(0,a.up)("doc-page");return(0,a.wg)(),(0,a.j4)(I,{"meta-title":h.metaTitle,title:"Electron 预加载脚本",nav:h.nav,toc:h.toc,"meta-desc":h.metaDesc},{default:(0,a.w5)((()=>[o,t,(0,a._)("h2",{id:"如何使用它",class:"doc-heading doc-h2",onClick:s[0]||(s[0]=n=>h.copyHeading("如何使用它"))},"如何使用它"),c,p,l,k,r,_,(0,a._)("h2",{id:"安全考虑",class:"doc-heading doc-h2",onClick:s[1]||(s[1]=n=>h.copyHeading("安全考虑"))},"安全考虑"),u,i,d,U,g,m,y,f,(0,a._)("h2",{id:"预装脚本的自定义路径",class:"doc-heading doc-h2",onClick:s[2]||(s[2]=n=>h.copyHeading("预装脚本的自定义路径"))},"预装脚本的自定义路径"),j,w])),_:1},8,["meta-title","nav","toc","meta-desc"])}var v=e(17536);const P={name:"DocMarkdownPage",setup(){return{metaTitle:"Electron 预加载脚本",metaDesc:"如何用 Quasar CLI 处理Electron节点与Electron预加载脚本的集成。",nav:[{name:"构建命令",category:"开发 Electron 应用程序",path:"/quasar-cli/developing-electron-apps/build-commands",dir:"left"},{name:"Electron 包",category:"开发 Electron 应用程序",path:"/quasar-cli/developing-electron-apps/electron-packages",dir:"right"}],toc:[{id:"如何使用它",title:"如何使用它"},{id:"安全考虑",title:"安全考虑"},{id:"预装脚本的自定义路径",title:"预装脚本的自定义路径"}],copyHeading:v.Et}}};var I=e(74260);const A=(0,I.Z)(P,[["render",h]]),E=A}}]);