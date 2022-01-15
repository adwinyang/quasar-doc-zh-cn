"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[58181],{58181:(s,n,a)=>{a.r(n),a.d(n,{default:()=>q});var o=a(83673);const e=(0,o._)("p",null,"较新的移动浏览器能够为地址栏指定一种颜色，就像下面的图片。",-1),t={class:"doc-note doc-note--warning"},c=(0,o._)("p",{class:"doc-note__title"},"WARNING",-1),l=(0,o._)("li",null,"目前还没有一个网络标准，所以它不会对所有的移动浏览器起作用。",-1),r=(0,o.Uk)("这只适用于建立网站时。对于在移动应用程序(用 Cordova 模式构建)上着色的顶栏，请参考"),p=(0,o.Uk)("cordova-plugin-statusbar"),d=(0,o.Uk)(" 。"),k=(0,o._)("p",null,[(0,o._)("img",{src:"https://cdn.quasar.dev/img/mobile-address-bar-colors.jpg",alt:"",title:"移动地址栏着色",class:"doc-img"})],-1),u=(0,o._)("p",null,[(0,o.Uk)("我们创建启动文件来初始化其使用。"),(0,o._)("code",{class:"doc-token"},"$ quasar new boot addressbar-color [--format ts]"),(0,o.Uk)("。一个文件被创建("),(0,o._)("code",{class:"doc-token"},"/src/boot/addressbar-color.js"),(0,o.Uk)(")。我们编辑它：")],-1),i=(0,o._)("pre",{class:"doc-code language-js"},[(0,o._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,o._)("span",{class:"token comment"},"// 文件：/src/boot/addressbar-color.js"),(0,o.Uk)("\n"),(0,o._)("span",{class:"token keyword"},"import"),(0,o.Uk)(),(0,o._)("span",{class:"token punctuation"},"{"),(0,o.Uk)(" AddressbarColor "),(0,o._)("span",{class:"token punctuation"},"}"),(0,o.Uk)(),(0,o._)("span",{class:"token keyword"},"from"),(0,o.Uk)(),(0,o._)("span",{class:"token string"},"'quasar'"),(0,o.Uk)("\n\n"),(0,o._)("span",{class:"token keyword"},"export"),(0,o.Uk)(),(0,o._)("span",{class:"token keyword"},"default"),(0,o.Uk)(),(0,o._)("span",{class:"token punctuation"},"("),(0,o._)("span",{class:"token punctuation"},")"),(0,o.Uk)(),(0,o._)("span",{class:"token operator"},"=>"),(0,o.Uk)(),(0,o._)("span",{class:"token punctuation"},"{"),(0,o.Uk)("\n  AddressbarColor"),(0,o._)("span",{class:"token punctuation"},"."),(0,o._)("span",{class:"token function"},"set"),(0,o._)("span",{class:"token punctuation"},"("),(0,o._)("span",{class:"token string"},"'#a2e3fa'"),(0,o._)("span",{class:"token punctuation"},")"),(0,o.Uk)("\n"),(0,o._)("span",{class:"token punctuation"},"}"),(0,o.Uk)("\n")])],-1),_=(0,o._)("p",null,"然后我们要告诉quasar使用我们刚刚创建的这个启动文件。要做到这一点，我们要编辑quasar配置中的启动部分。",-1),U=(0,o._)("pre",{class:"doc-code language-js"},[(0,o._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,o._)("span",{class:"token comment"},"// 文件：/quasar.conf.js"),(0,o.Uk)("\n"),(0,o._)("span",{class:"token keyword"},"return"),(0,o.Uk)(),(0,o._)("span",{class:"token punctuation"},"{"),(0,o.Uk)("\n  "),(0,o._)("span",{class:"token literal-property property"},"boot"),(0,o._)("span",{class:"token operator"},":"),(0,o.Uk)(),(0,o._)("span",{class:"token punctuation"},"["),(0,o.Uk)("\n    "),(0,o._)("span",{class:"token string"},"'addressbar-color'"),(0,o.Uk)("\n  "),(0,o._)("span",{class:"token punctuation"},"]"),(0,o.Uk)("\n"),(0,o._)("span",{class:"token punctuation"},"}"),(0,o.Uk)("\n")])],-1),g=(0,o._)("p",null,[(0,o.Uk)("它的作用是在运行时将一些"),(0,o._)("code",{class:"doc-token"},"<meta>"),(0,o.Uk)("标签注入到你的"),(0,o._)("code",{class:"doc-token"},"index.html"),(0,o.Uk)("。")],-1),m=(0,o._)("p",null,[(0,o.Uk)("因为元标签直到运行时才被注入，你可以根据用户所在的页面，多次动态地改变这个颜色(通过调用相应页面的"),(0,o._)("code",{class:"doc-token"},"created()"),(0,o.Uk)("生命周期钩子中的"),(0,o._)("code",{class:"doc-token"},"set"),(0,o.Uk)("方法)：")],-1),b=(0,o._)("pre",{class:"doc-code language-js"},[(0,o._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,o._)("span",{class:"token comment"},"// 一个代表页面的.vue文件"),(0,o.Uk)("\n\n"),(0,o._)("span",{class:"token keyword"},"import"),(0,o.Uk)(),(0,o._)("span",{class:"token punctuation"},"{"),(0,o.Uk)(" useQuasar "),(0,o._)("span",{class:"token punctuation"},"}"),(0,o.Uk)(),(0,o._)("span",{class:"token keyword"},"from"),(0,o.Uk)(),(0,o._)("span",{class:"token string"},"'quasar'"),(0,o.Uk)("\n\n"),(0,o._)("span",{class:"token keyword"},"export"),(0,o.Uk)(),(0,o._)("span",{class:"token keyword"},"default"),(0,o.Uk)(),(0,o._)("span",{class:"token punctuation"},"{"),(0,o.Uk)("\n  "),(0,o._)("span",{class:"token function"},"setup"),(0,o.Uk)(),(0,o._)("span",{class:"token punctuation"},"("),(0,o._)("span",{class:"token punctuation"},")"),(0,o.Uk)(),(0,o._)("span",{class:"token punctuation"},"{"),(0,o.Uk)("\n    "),(0,o._)("span",{class:"token comment"},"// 相当于在创建组件时调用这个"),(0,o.Uk)("\n    "),(0,o._)("span",{class:"token keyword"},"const"),(0,o.Uk)(" $q "),(0,o._)("span",{class:"token operator"},"="),(0,o.Uk)(),(0,o._)("span",{class:"token function"},"useQuasar"),(0,o._)("span",{class:"token punctuation"},"("),(0,o._)("span",{class:"token punctuation"},")"),(0,o.Uk)("\n    $q"),(0,o._)("span",{class:"token punctuation"},"."),(0,o.Uk)("addressbarColor"),(0,o._)("span",{class:"token punctuation"},"."),(0,o._)("span",{class:"token function"},"set"),(0,o._)("span",{class:"token punctuation"},"("),(0,o._)("span",{class:"token string"},"'#a2e3fa'"),(0,o._)("span",{class:"token punctuation"},")"),(0,o.Uk)("\n  "),(0,o._)("span",{class:"token punctuation"},"}"),(0,o.Uk)("\n"),(0,o._)("span",{class:"token punctuation"},"}"),(0,o.Uk)("\n")])],-1),h=(0,o._)("div",{class:"doc-note doc-note--tip"},[(0,o._)("p",{class:"doc-note__title"},"TIP"),(0,o._)("p",null,[(0,o.Uk)("调用没有参数的"),(0,o._)("code",{class:"doc-token"},"set()"),(0,o.Uk)("将使用原色。")])],-1);function f(s,n,a,f,v,w){const y=(0,o.up)("doc-link"),C=(0,o.up)("doc-api"),q=(0,o.up)("doc-installation"),j=(0,o.up)("doc-page");return(0,o.wg)(),(0,o.j4)(j,{"meta-title":f.metaTitle,title:"地址栏颜色插件",nav:f.nav,toc:f.toc,"meta-desc":f.metaDesc},{default:(0,o.w5)((()=>[e,(0,o._)("div",t,[c,(0,o._)("ul",null,[l,(0,o._)("li",null,[r,(0,o.Wm)(y,{to:"https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-statusbar/"},{default:(0,o.w5)((()=>[p])),_:1}),d])])]),k,(0,o._)("h2",{id:"addressbarcolor-api",class:"doc-heading doc-h2",onClick:n[0]||(n[0]=s=>f.copyHeading("addressbarcolor-api"))},"AddressbarColor API"),(0,o.Wm)(C,{file:"AddressbarColor"}),(0,o._)("h2",{id:"安装",class:"doc-heading doc-h2",onClick:n[1]||(n[1]=s=>f.copyHeading("安装"))},"安装"),(0,o.Wm)(q,{plugins:"AddressbarColor"}),(0,o._)("h2",{id:"使用方法",class:"doc-heading doc-h2",onClick:n[2]||(n[2]=s=>f.copyHeading("使用方法"))},"使用方法"),u,i,_,U,g,m,b,h])),_:1},8,["meta-title","nav","toc","meta-desc"])}var v=a(17536);const w={name:"DocMarkdownPage",setup(){return{metaTitle:"地址栏颜色插件",metaDesc:"一个 Quasar 插件，用于在较新的移动浏览器上改变地址栏颜色。",nav:[{name:"触摸轻扫",category:"Vue 指令",path:"/vue-directives/touch-swipe",dir:"left"},{name:"应用程序全屏",category:"Quasar 插件",path:"/quasar-plugins/app-fullscreen",dir:"right"}],toc:[{id:"addressbarcolor-api",title:"AddressbarColor API"},{id:"安装",title:"安装"},{id:"使用方法",title:"使用方法"}],copyHeading:v.Et}}};var y=a(74260);const C=(0,y.Z)(w,[["render",f]]),q=C}}]);