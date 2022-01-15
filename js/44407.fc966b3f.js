"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[44407],{44407:(n,s,t)=>{t.r(s),t.d(s,{default:()=>E});var a=t(83673);const o=(0,a._)("p",null,[(0,a.Uk)("Here you’ll learn how to interact with the Service Worker from within your website/app space. Remember, "),(0,a._)("strong",null,"service workers MUST be served over HTTPS"),(0,a.Uk)(".")],-1),e=(0,a._)("p",null,[(0,a.Uk)("It’s important to note that the Service Worker (which gets automatically generated by Workbox – or you’ve configured Quasar CLI to use your custom one) runs in a separate thread. You can however interact with it from app-space from within "),(0,a._)("code",{class:"doc-token"},"/src-pwa/register-service-worker.js"),(0,a.Uk)(" file.")],-1),c=(0,a.Uk)("Notice the "),p=(0,a.Uk)("register-service-worker"),r=(0,a.Uk)(" npm package, which comes out of the box along with Quasar CLI (so don’t install it yourself)."),i=(0,a._)("pre",{class:"doc-code language-js"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,a._)("span",{class:"token comment"},"// src-pwa/register-service-worker.js file"),(0,a.Uk)("\n\n"),(0,a._)("span",{class:"token keyword"},"import"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)(" register "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)(),(0,a._)("span",{class:"token keyword"},"from"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},"'register-service-worker'"),(0,a.Uk)("\n\n"),(0,a._)("span",{class:"token function"},"register"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("process"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("env"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token constant"},"SERVICE_WORKER_FILE"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token function"},"ready"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token parameter"},"registration"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    console"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function"},"log"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token string"},"'Service worker is active.'"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n\n  "),(0,a._)("span",{class:"token function"},"registered"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token parameter"},"registration"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    console"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function"},"log"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token string"},"'Service worker has been registered.'"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n\n  "),(0,a._)("span",{class:"token function"},"cached"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token parameter"},"registration"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    console"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function"},"log"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token string"},"'Content has been cached for offline use.'"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n\n  "),(0,a._)("span",{class:"token function"},"updatefound"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token parameter"},"registration"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    console"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function"},"log"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token string"},"'New content is downloading.'"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n\n  "),(0,a._)("span",{class:"token function"},"updated"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token parameter"},"registration"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    console"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function"},"log"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token string"},"'New content is available; please refresh.'"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n\n  "),(0,a._)("span",{class:"token function"},"offline"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    console"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function"},"log"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token string"},"'No internet connection found. App is running in offline mode.'"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n\n  "),(0,a._)("span",{class:"token function"},"error"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token parameter"},"error"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    console"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function"},"error"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token string"},"'Error during service worker registration:'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" error"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n")])],-1),l=(0,a._)("div",{class:"doc-note doc-note--tip"},[(0,a._)("p",{class:"doc-note__title"},"TIP"),(0,a._)("p",null,[(0,a.Uk)("This file is automatically bundled into your website/app by Quasar CLI because it is considered as part of app-space "),(0,a._)("code",{class:"doc-token"},"/src"),(0,a.Uk)(". What this means is that you can use ES6, import other files etc.")])],-1),k=(0,a._)("p",null,[(0,a.Uk)("You may notice in some dev environments, that Workbox will not load your service workers during "),(0,a._)("code",{class:"doc-token"},"quasar dev"),(0,a.Uk)(" if you are not using HTTPS to serve - even on localhost. You will see that there are two scripts that can’t load. The Chrome browser console is relatively tight-lipped about this, but Firefox tells you what is going on. The three options you have are:")],-1),u=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Uk)("set quasar.conf.js > devServer > "),(0,a._)("code",{class:"doc-token"},"https: true")]),(0,a._)("li",null,"setup a loopback from localhost to 127.0.0.1 (but this is not without security implications)"),(0,a._)("li",null,"serve your localhost over ngrok and use the https address that ngrok provides")],-1),_=(0,a.Uk)("When you set "),d=(0,a._)("code",{class:"doc-token"},"devServer > https: true",-1),h=(0,a.Uk)(" in your quasar.conf.js file, Quasar will auto-generate a SSL certificate for you. However, if you want to create one yourself for your localhost, then check out this blog post by "),U=(0,a.Uk)("Filippo"),g=(0,a.Uk)(". Then your "),f=(0,a._)("code",{class:"doc-token"},"quasar.conf.js > devServer > https",-1),y=(0,a.Uk)(" should look like this:"),v=(0,a._)("pre",{class:"doc-code language-js"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,a._)("span",{class:"token comment"},"// quasar.conf.js"),(0,a.Uk)("\n\n"),(0,a._)("span",{class:"token literal-property property"},"devServer"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token literal-property property"},"server"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token literal-property property"},"type"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},"'https'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(),(0,a._)("span",{class:"token comment"},"// NECESSARY"),(0,a.Uk)("\n\n    "),(0,a._)("span",{class:"token literal-property property"},"options"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token comment"},"// Use ABSOLUTE paths or path.join(__dirname, 'root/relative/path')"),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token literal-property property"},"key"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},'"/path/to/server.key"'),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token literal-property property"},"pfx"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},'"/path/to/server.pfx"'),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token literal-property property"},"cert"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},'"/path/to/server.crt"'),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token literal-property property"},"ca"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},'"/path/to/ca.pem"'),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token literal-property property"},"passphrase"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},"'webpack-dev-server'"),(0,a.Uk)(),(0,a._)("span",{class:"token comment"},"// do you need it?"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n")])],-1),w=(0,a._)("p",null,[(0,a.Uk)("It’s important that you do not allow browsers to cache the "),(0,a._)("code",{class:"doc-token"},"service-worker.js"),(0,a.Uk)(" file. Because otherwise updates to this file or to your app might slip through the cracks for browsers that load the service-worker from cache.")],-1),m=(0,a._)("p",null,[(0,a.Uk)("This is why you must always make sure to add "),(0,a._)("code",{class:"doc-token"},'"Cache-Control": "no-cache"'),(0,a.Uk)(" to the headers of "),(0,a._)("code",{class:"doc-token"},"service-worker.js"),(0,a.Uk)(" file via your hosting service.")],-1),b=(0,a._)("p",null,[(0,a.Uk)("As an example how this is done for Google Firebase, you would add the following to the "),(0,a._)("code",{class:"doc-token"},"firebase.json"),(0,a.Uk)(" configuration:")],-1),S=(0,a._)("pre",{class:"doc-code language-json"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-json"},[(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token property"},'"hosting"'),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token property"},'"headers"'),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"["),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)(),(0,a._)("span",{class:"token property"},'"source"'),(0,a._)("span",{class:"token operator"},":"),(0,a._)("span",{class:"token string"},'"/service-worker.js"'),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(),(0,a._)("span",{class:"token property"},'"headers"'),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token punctuation"},"{"),(0,a._)("span",{class:"token property"},'"key"'),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},'"Cache-Control"'),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(),(0,a._)("span",{class:"token property"},'"value"'),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},'"no-cache"'),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n")])],-1);function j(n,s,t,j,C,T){const W=(0,a.up)("doc-link"),H=(0,a.up)("doc-page");return(0,a.wg)(),(0,a.j4)(H,{"meta-title":j.metaTitle,title:"Handling Service Worker","meta-desc":j.metaDesc},{default:(0,a.w5)((()=>[o,e,(0,a._)("h2",{id:"interacting-with-service-worker",class:"doc-heading doc-h2",onClick:s[0]||(s[0]=n=>j.copyHeading("interacting-with-service-worker"))},"Interacting with Service Worker"),(0,a._)("p",null,[c,(0,a.Wm)(W,{to:"https://github.com/yyx990803/register-service-worker"},{default:(0,a.w5)((()=>[p])),_:1}),r]),i,l,(0,a._)("h2",{id:"ssl-certificate",class:"doc-heading doc-h2",onClick:s[1]||(s[1]=n=>j.copyHeading("ssl-certificate"))},"SSL certificate"),k,u,(0,a._)("p",null,[_,d,h,(0,a.Wm)(W,{to:"https://blog.filippo.io/mkcert-valid-https-certificates-for-localhost/"},{default:(0,a.w5)((()=>[U])),_:1}),g,f,y]),v,(0,a._)("h2",{id:"important-hosting-configuration",class:"doc-heading doc-h2",onClick:s[2]||(s[2]=n=>j.copyHeading("important-hosting-configuration"))},"Important Hosting Configuration"),w,m,b,S])),_:1},8,["meta-title","meta-desc"])}var C=t(17536);const T={name:"DocMarkdownPage",setup(){return{metaTitle:"Handling Service Worker",metaDesc:"How to configure the service worker in a Quasar Progressive Web App.",copyHeading:C.Et}}};var W=t(74260);const H=(0,W.Z)(T,[["render",j]]),E=H}}]);