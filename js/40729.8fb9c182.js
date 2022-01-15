"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[40729],{40729:(a,e,o)=>{o.r(e),o.d(e,{default:()=>w});var s=o(83673);const n=(0,s._)("p",null,"The officially supported versions of Capacitor are v1, v2 and v3.",-1),t=(0,s._)("p",null,"If you previously used a lower version of Capacitor and you want to upgrade to a newer version, then:",-1),c=(0,s._)("ol",null,[(0,s._)("li",null,"Delete the /src-capacitor/ios and /src-capacitor/android folders, but make sure that you are aware of any changes that you made in those folders as you will have to redo them after step 4."),(0,s._)("li",null,"Change /src-capacitor/package.json to reflect the correct versions of Capacitor dependencies (you can read them in the next appropriate section related to your desired Capacitor version)."),(0,s._)("li",null,[(0,s.Uk)("Delete yarn.lock/package-lock.json then run "),(0,s._)("code",{class:"doc-token"},"yarn"),(0,s.Uk)("/"),(0,s._)("code",{class:"doc-token"},"npm install"),(0,s.Uk)(" in /src-capacitor.")]),(0,s._)("li",null,[(0,s.Uk)("At this point, you will have Capacitor installed. Now you can run "),(0,s._)("code",{class:"doc-token"},"quasar dev -m capacitor -T [ios|android]"),(0,s.Uk)(" or "),(0,s._)("code",{class:"doc-token"},"quasar build -m capacitor -T [ios|android]"),(0,s.Uk)(" and it will add the upgraded iOS/Android platform that corresponds to your Capacitor version.")])],-1),r=(0,s._)("p",null,"It would also be wise to check the changelog of Capacitor itself to see what breaking changes it has.",-1),p=(0,s._)("div",{class:"doc-note doc-note--tip"},[(0,s._)("p",{class:"doc-note__title"},"TIP"),(0,s._)("p",null,[(0,s.Uk)("You will need "),(0,s._)("code",{class:"doc-token"},"quasar"),(0,s.Uk)(" v2.0.0-beta.8+ and "),(0,s._)("code",{class:"doc-token"},"@quasar/app"),(0,s.Uk)(" v3.0.0-beta.8+.")])],-1),i=(0,s._)("div",{class:"doc-note doc-note--warning"},[(0,s._)("p",{class:"doc-note__title"},"Known issue"),(0,s._)("p",null,[(0,s.Uk)("HTTPS devserver (through quasar.conf.js > devServer > https: true) is not "),(0,s._)("strong",null,"yet"),(0,s.Uk)(" supported. If you are using Capacitor plugins that depend on it, it’s better to stay with Capacitor v2 for the moment.")])],-1),l=(0,s._)("p",null,"Assuming that you’ve installed Capacitor mode already, this is how your dependencies in /src-capacitor/package.json should look like:",-1),d=(0,s._)("pre",{class:"doc-code language-js"},[(0,s._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,s._)("span",{class:"token literal-property property"},"dependencies"),(0,s._)("span",{class:"token operator"},":"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token string-property property"},'"@capacitor/app"'),(0,s._)("span",{class:"token operator"},":"),(0,s.Uk)(),(0,s._)("span",{class:"token string"},'"^1.0.0"'),(0,s._)("span",{class:"token punctuation"},","),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token string-property property"},'"@capacitor/cli"'),(0,s._)("span",{class:"token operator"},":"),(0,s.Uk)(),(0,s._)("span",{class:"token string"},'"^3.0.0"'),(0,s._)("span",{class:"token punctuation"},","),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token string-property property"},'"@capacitor/core"'),(0,s._)("span",{class:"token operator"},":"),(0,s.Uk)(),(0,s._)("span",{class:"token string"},'"^3.0.0"'),(0,s._)("span",{class:"token punctuation"},","),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token string-property property"},'"@capacitor/splash-screen"'),(0,s._)("span",{class:"token operator"},":"),(0,s.Uk)(),(0,s._)("span",{class:"token string"},'"^1.0.0"'),(0,s.Uk)("\n"),(0,s._)("span",{class:"token punctuation"},"}"),(0,s.Uk)("\n")])],-1),k=(0,s._)("p",null,[(0,s.Uk)("The "),(0,s._)("code",{class:"doc-token"},"@capacitor/app"),(0,s.Uk)(" and "),(0,s._)("code",{class:"doc-token"},"@capacitor/splash-screen"),(0,s.Uk)(" are optional, but it helps Quasar with some UI functionality if they are installed.")],-1),u=(0,s._)("p",null,"Assuming that you’ve installed Capacitor mode already, this is how your dependencies in /src-capacitor/package.json should look like:",-1),_=(0,s._)("pre",{class:"doc-code language-js"},[(0,s._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,s._)("span",{class:"token literal-property property"},"dependencies"),(0,s._)("span",{class:"token operator"},":"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token string-property property"},'"@capacitor/cli"'),(0,s._)("span",{class:"token operator"},":"),(0,s.Uk)(),(0,s._)("span",{class:"token string"},'"^2.0.0"'),(0,s._)("span",{class:"token punctuation"},","),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token string-property property"},'"@capacitor/core"'),(0,s._)("span",{class:"token operator"},":"),(0,s.Uk)(),(0,s._)("span",{class:"token string"},'"^2.0.0"'),(0,s.Uk)("\n"),(0,s._)("span",{class:"token punctuation"},"}"),(0,s.Uk)("\n")])],-1),g=(0,s._)("p",null,"Assuming that you’ve installed Capacitor mode already, this is how your dependencies in /src-capacitor/package.json should look like:",-1),h=(0,s._)("pre",{class:"doc-code language-js"},[(0,s._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,s._)("span",{class:"token literal-property property"},"dependencies"),(0,s._)("span",{class:"token operator"},":"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token string-property property"},'"@capacitor/cli"'),(0,s._)("span",{class:"token operator"},":"),(0,s.Uk)(),(0,s._)("span",{class:"token string"},'"^1.0.0"'),(0,s._)("span",{class:"token punctuation"},","),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token string-property property"},'"@capacitor/core"'),(0,s._)("span",{class:"token operator"},":"),(0,s.Uk)(),(0,s._)("span",{class:"token string"},'"^1.0.0"'),(0,s.Uk)("\n"),(0,s._)("span",{class:"token punctuation"},"}"),(0,s.Uk)("\n")])],-1);function y(a,e,o,y,v,U){const C=(0,s.up)("doc-page");return(0,s.wg)(),(0,s.j4)(C,{"meta-title":y.metaTitle,title:"Capacitor versions","meta-desc":y.metaDesc},{default:(0,s.w5)((()=>[n,(0,s._)("h2",{id:"upgrading-capacitor",class:"doc-heading doc-h2",onClick:e[0]||(e[0]=a=>y.copyHeading("upgrading-capacitor"))},"Upgrading Capacitor"),t,c,r,(0,s._)("h2",{id:"capacitor-v3",class:"doc-heading doc-h2",onClick:e[1]||(e[1]=a=>y.copyHeading("capacitor-v3"))},"Capacitor v3"),p,i,l,d,k,(0,s._)("h2",{id:"capacitor-v2",class:"doc-heading doc-h2",onClick:e[2]||(e[2]=a=>y.copyHeading("capacitor-v2"))},"Capacitor v2"),u,_,(0,s._)("h2",{id:"capacitor-v1",class:"doc-heading doc-h2",onClick:e[3]||(e[3]=a=>y.copyHeading("capacitor-v1"))},"Capacitor v1"),g,h])),_:1},8,["meta-title","meta-desc"])}var v=o(17536);const U={name:"DocMarkdownPage",setup(){return{metaTitle:"Capacitor versions",metaDesc:"Supported Capacitor versions in Quasar. How to upgrade to a newer Capacitor version.",copyHeading:v.Et}}};var C=o(74260);const m=(0,C.Z)(U,[["render",y]]),w=m}}]);