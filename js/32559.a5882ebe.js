"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[32559],{32559:(n,s,a)=>{a.r(s),a.d(s,{default:()=>q});var e=a(83673);const o=(0,e._)("p",null,[(0,e.Uk)("This page refers to "),(0,e._)("code",{class:"doc-token"},"src/uninstall.js"),(0,e.Uk)(" file which is executed when the App Extension is uninstalled. Not all App Extensions will need an uninstall – this is an optional step.")],-1),t=(0,e._)("p",null,"Example of basic structure of the file:",-1),c=(0,e._)("pre",{class:"doc-code language-js"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,e.Uk)("module"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function-variable function"},"exports"),(0,e.Uk)(),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e._)("span",{class:"token keyword"},"function"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token parameter"},"api"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token comment"},'// props and methods for "api" Object'),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token comment"},"// are described below"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n")])],-1),p=(0,e._)("p",null,[(0,e.Uk)("Contains the "),(0,e._)("code",{class:"doc-token"},"ext-id"),(0,e.Uk)(" (String) of this App Extension.")],-1),i=(0,e.Uk)("Is an Object which has the answers to the prompts when this App Extension gets installed. For more info on prompts, check out "),l=(0,e.Uk)("Prompts API"),k=(0,e.Uk)("."),u=(0,e._)("p",null,[(0,e.Uk)("Resolves paths within the app on which this App Extension is running. Eliminates the need to import "),(0,e._)("code",{class:"doc-token"},"path"),(0,e.Uk)(" and resolve the paths yourself.")],-1),r=(0,e._)("pre",{class:"doc-code language-js"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,e._)("span",{class:"token comment"},"// resolves to root of app"),(0,e.Uk)("\napi"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("resolve"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"app"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token string"},"'src/my-file.js'"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token comment"},"// resolves to root/src of app"),(0,e.Uk)("\napi"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("resolve"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"src"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token string"},"'my-file.js'"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token comment"},"// resolves to root/src-pwa of app"),(0,e.Uk)("\napi"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("resolve"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"pwa"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token string"},"'some-file.js'"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token comment"},"// resolves to root/src-ssr of app"),(0,e.Uk)("\napi"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("resolve"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"ssr"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token string"},"'some-file.js'"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token comment"},"// resolves to root/src-cordova of app"),(0,e.Uk)("\napi"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("resolve"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"cordova"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token string"},"'config.xml'"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token comment"},"// resolves to root/src-electron of app"),(0,e.Uk)("\napi"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("resolve"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"electron"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token string"},"'some-file.js'"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n")])],-1),d=(0,e._)("p",null,"Contains the full path (String) to the root of the app on which this App Extension is running.",-1),_=(0,e._)("p",null,"Determine if some package is installed in the host app through a semver condition.",-1),h=(0,e._)("p",null,[(0,e.Uk)("Example of semver condition: "),(0,e._)("code",{class:"doc-token"},"'1.x || >=2.5.0 || 5.0.0 - 7.2.3'"),(0,e.Uk)(".")],-1),g=(0,e._)("pre",{class:"doc-code language-js"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,e._)("span",{class:"token comment"},"/**\n * @param {string} packageName\n * @param {string} (optional) semverCondition\n * @return {boolean} package is installed and meets optional semver condition\n */"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token keyword"},"if"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"("),(0,e.Uk)("api"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"hasPackage"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token string"},"'vuelidate'"),(0,e._)("span",{class:"token punctuation"},")"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token comment"},"// hey, this app has it (any version of it)"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token keyword"},"if"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"("),(0,e.Uk)("api"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"hasPackage"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token string"},"'quasar'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'^1.0.0'"),(0,e._)("span",{class:"token punctuation"},")"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token comment"},"// hey, this app has v1 installed"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n")])],-1),m=(0,e._)("p",null,"Check if another app extension is installed.",-1),f=(0,e._)("pre",{class:"doc-code language-js"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,e._)("span",{class:"token comment"},"/**\n * Check if another app extension is installed\n *\n * @param {string} extId\n * @return {boolean} has the extension installed.\n */"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token keyword"},"if"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"("),(0,e.Uk)("api"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"hasExtension"),(0,e._)("span",{class:"token punctuation"},"("),(0,e.Uk)("extId"),(0,e._)("span",{class:"token punctuation"},")"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token comment"},"// hey, we have it"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n")])],-1),U=(0,e._)("p",null,"Get the version of a host app package.",-1),v=(0,e._)("pre",{class:"doc-code language-js"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,e._)("span",{class:"token comment"},"/**\n * @param {string} packageName\n * @return {string|undefined} version of app's package\n */"),(0,e.Uk)("\nconsole"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"log"),(0,e._)("span",{class:"token punctuation"},"("),(0,e.Uk)(" api"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"getPackageVersion"),(0,e._)("span",{class:"token punctuation"},"("),(0,e.Uk)("packageName"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token comment"},"// output examples:"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token comment"},"//   1.1.3"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token comment"},"//   undefined (when package not found)"),(0,e.Uk)("\n")])],-1),x=(0,e._)("p",null,"Removes a file or folder from the app project folder (which the App Extension has installed and is no longer needed).",-1),j=(0,e._)("p",null,"Be mindful about it and do not delete the files that would break developer’s app.",-1),w=(0,e._)("p",null,"The path to file or folder needs to be relative to project’s root folder.",-1),y=(0,e._)("pre",{class:"doc-code language-js"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,e._)("span",{class:"token comment"},"/**\n  * @param {string} __path\n  */"),(0,e.Uk)("\napi"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"removePath"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token string"},"'my-folder'"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n")])],-1),b=(0,e._)("p",null,"The above example deletes “my-folder” from the root of the app.",-1),C=(0,e._)("p",null,"Get the internal persistent config of this extension. Returns empty object if it has none.",-1),E=(0,e._)("pre",{class:"doc-code language-js"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,e._)("span",{class:"token comment"},"/**\n * @return {object} cfg\n */"),(0,e.Uk)("\napi"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"getPersistentConf"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n")])],-1),A=(0,e._)("p",null,"Adds a message to be printed after App CLI finishes up uninstalling the App Extension and is about to exit. Can be called multiple times to register multiple exit logs.",-1),P=(0,e._)("pre",{class:"doc-code language-js"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,e._)("span",{class:"token comment"},"/**\n * @param {string} msg\n */"),(0,e.Uk)("\napi"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"onExitLog"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token string"},"'Thanks for having used my extension'"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n")])],-1);function H(n,s,a,H,I,T){const D=(0,e.up)("doc-link"),N=(0,e.up)("doc-page");return(0,e.wg)(),(0,e.j4)(N,{"meta-title":H.metaTitle,title:"App Extension Uninstall API","meta-desc":H.metaDesc},{default:(0,e.w5)((()=>[o,t,c,(0,e._)("h2",{id:"api-extid",class:"doc-heading doc-h2",onClick:s[0]||(s[0]=n=>H.copyHeading("api-extid"))},"api.extId"),p,(0,e._)("h2",{id:"api-prompts",class:"doc-heading doc-h2",onClick:s[1]||(s[1]=n=>H.copyHeading("api-prompts"))},"api.prompts"),(0,e._)("p",null,[i,(0,e.Wm)(D,{to:"/app-extensions/development-guide/prompts-api"},{default:(0,e.w5)((()=>[l])),_:1}),k]),(0,e._)("h2",{id:"api-resolve",class:"doc-heading doc-h2",onClick:s[2]||(s[2]=n=>H.copyHeading("api-resolve"))},"api.resolve"),u,r,(0,e._)("h2",{id:"api-appdir",class:"doc-heading doc-h2",onClick:s[3]||(s[3]=n=>H.copyHeading("api-appdir"))},"api.appDir"),d,(0,e._)("h2",{id:"api-haspackage",class:"doc-heading doc-h2",onClick:s[4]||(s[4]=n=>H.copyHeading("api-haspackage"))},"api.hasPackage"),_,h,g,(0,e._)("h2",{id:"api-hasextension",class:"doc-heading doc-h2",onClick:s[5]||(s[5]=n=>H.copyHeading("api-hasextension"))},"api.hasExtension"),m,f,(0,e._)("h2",{id:"api-getpackageversion",class:"doc-heading doc-h2",onClick:s[6]||(s[6]=n=>H.copyHeading("api-getpackageversion"))},"api.getPackageVersion"),U,v,(0,e._)("h2",{id:"api-removepath",class:"doc-heading doc-h2",onClick:s[7]||(s[7]=n=>H.copyHeading("api-removepath"))},"api.removePath"),x,j,w,y,b,(0,e._)("h2",{id:"api-getpersistentconf",class:"doc-heading doc-h2",onClick:s[8]||(s[8]=n=>H.copyHeading("api-getpersistentconf"))},"api.getPersistentConf"),C,E,(0,e._)("h2",{id:"api-onexitlog",class:"doc-heading doc-h2",onClick:s[9]||(s[9]=n=>H.copyHeading("api-onexitlog"))},"api.onExitLog"),A,P])),_:1},8,["meta-title","meta-desc"])}var I=a(17536);const T={name:"DocMarkdownPage",setup(){return{metaTitle:"App Extension Uninstall API",metaDesc:"The API for the uninstall script of a Quasar App Extension.",copyHeading:I.Et}}};var D=a(74260);const N=(0,D.Z)(T,[["render",H]]),q=N}}]);