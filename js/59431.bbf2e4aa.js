"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[59431],{59431:(e,o,n)=>{n.r(o),n.d(o,{default:()=>v});var a=n(83673);const s=(0,a._)("p",null,"The difference between building a SPA, Mobile App, Electron App, BEX or SSR is simply determined by the “mode” parameter in “quasar dev” and “quasar build” commands.",-1),t=(0,a._)("p",null,"In order to build a BEX, we first need to add the BEX mode to our Quasar project:",-1),c=(0,a._)("pre",{class:"doc-code language-bash"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,a.Uk)("$ quasar mode "),(0,a._)("span",{class:"token function"},"add"),(0,a.Uk)(" bex\n")])],-1),r=(0,a._)("p",null,"If you want to jump right in and start developing, you can skip the “quasar mode” command and issue:",-1),d=(0,a._)("pre",{class:"doc-code language-bash"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},"$ quasar dev -m bex\n")],-1),i=(0,a._)("p",null,[(0,a.Uk)("This will add BEX mode automatically, if it is missing adding a "),(0,a._)("code",{class:"doc-token"},"src-bex"),(0,a.Uk)(" folder to your project.")],-1),l={class:"doc-note doc-note--tip"},p=(0,a._)("p",{class:"doc-note__title"},"TIP",-1),m=(0,a._)("p",null,[(0,a.Uk)("The "),(0,a._)("code",{class:"doc-token"},"src-bex"),(0,a.Uk)(" folder is just a standard browser extension folder so you are free to use it as you would any other browser extension project folder. Please refer to supported Browser Extension documentation to learn more.")],-1),u=(0,a.Uk)("Mozilla FireFox Browser Extension Documentation"),k=(0,a.Uk)("Google Chrome Browser Extension Documentation"),_=(0,a._)("li",null,[(0,a._)("strong",null,"Other Chromium Based Browsers"),(0,a.Uk)(" - Refer to their specific documentation.")],-1),h=(0,a.Uk)("2. Understand The Anatomy Of "),f=(0,a._)("code",{class:"doc-token"},"src-bex",-1),g=[h,f],U=(0,a._)("p",null,"The new folder has the following structure:",-1),b=(0,a._)("pre",{class:"doc-code language-bash"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,a._)("span",{class:"token builtin class-name"},"."),(0,a.Uk)("\n└── src-bex/\n    ├── css                    "),(0,a._)("span",{class:"token comment"},"# CSS to use in the Browser Context"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token operator"},"|"),(0,a.Uk)("   ├── content-css.css       "),(0,a._)("span",{class:"token comment"},"# CSS file which is auto injected into the consuming webpage via the manifest.json"),(0,a.Uk)("\n    ├── icons/                 "),(0,a._)("span",{class:"token comment"},"# Icons of your app for all platforms"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token operator"},"|"),(0,a.Uk)("   ├── icon-16x16.png         "),(0,a._)("span",{class:"token comment"},"# Icon file at 16px x 16px"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token operator"},"|"),(0,a.Uk)("   ├── icon-48x48.png         "),(0,a._)("span",{class:"token comment"},"# Icon file at 48px x 48px"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token operator"},"|"),(0,a.Uk)("   └── icon-128x128.png       "),(0,a._)("span",{class:"token comment"},"# Icon file at 128px x 128px"),(0,a.Uk)("\n    ├── js/                    "),(0,a._)("span",{class:"token comment"},"# Javascript files used within the context of the BEX."),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token operator"},"|"),(0,a.Uk)("   ├── background.js         "),(0,a._)("span",{class:"token comment"},"# Standard background script BEX file - auto injected via manifest.json"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token operator"},"|"),(0,a.Uk)("   ├── background-hooks.js   "),(0,a._)("span",{class:"token comment"},"# Background script with a hook into the BEX communication layer"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token operator"},"|"),(0,a.Uk)("   ├── content-hooks.js      "),(0,a._)("span",{class:"token comment"},"# Content script script with a hook into the BEX communication layer"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token operator"},"|"),(0,a.Uk)("   ├── content-script.js     "),(0,a._)("span",{class:"token comment"},"# Standard content script BEX file - auto injected via manifest.json"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token operator"},"|"),(0,a.Uk)("   └── dom-hooks.js          "),(0,a._)("span",{class:"token comment"},"# JS file which is injected into the DOM with a hook into the BEX communication layer"),(0,a.Uk)("\n    └── www/                   "),(0,a._)("span",{class:"token comment"},"# Compiled BEX source - compiled from /src (Quasar app)"),(0,a.Uk)("\n    └── manifest.json          "),(0,a._)("span",{class:"token comment"},"# Main thread code for production"),(0,a.Uk)("\n")])],-1),w=(0,a._)("p",null,"The next section will discuss these in more detail.",-1);function x(e,o,n,h,f,x){const B=(0,a.up)("doc-link"),E=(0,a.up)("doc-page");return(0,a.wg)(),(0,a.j4)(E,{"meta-title":h.metaTitle,title:"Preparation for BEX","meta-desc":h.metaDesc},{default:(0,a.w5)((()=>[s,(0,a._)("h2",{id:"1-add-quasar-bex-mode",class:"doc-heading doc-h2",onClick:o[0]||(o[0]=e=>h.copyHeading("1-add-quasar-bex-mode"))},"1. Add Quasar BEX Mode"),t,c,r,d,i,(0,a._)("div",l,[p,m,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(B,{to:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions"},{default:(0,a.w5)((()=>[u])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(B,{to:"https://developer.chrome.com/extensions"},{default:(0,a.w5)((()=>[k])),_:1})]),_])]),(0,a._)("h2",{id:"2-understand-the-anatomy-of-src-bex",class:"doc-heading doc-h2",onClick:o[1]||(o[1]=e=>h.copyHeading("2-understand-the-anatomy-of-src-bex"))},g),U,b,w])),_:1},8,["meta-title","meta-desc"])}var B=n(17536);const E={name:"DocMarkdownPage",setup(){return{metaTitle:"Preparation for BEX",metaDesc:"How to add the Browser Extension (BEX) mode into a Quasar app.",copyHeading:B.Et}}};var j=n(74260);const y=(0,j.Z)(E,[["render",x]]),v=y}}]);