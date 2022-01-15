"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[54345],{54345:(n,a,s)=>{s.r(a),s.d(a,{default:()=>E});var t=s(83673);const o=(0,t.Uk)("You can hook into the native device APIs by using "),e=(0,t.Uk)("Capacitor APIs"),c=(0,t.Uk)("."),p=(0,t._)("p",null,"A few examples of such APIs:",-1),k=(0,t._)("ul",null,[(0,t._)("li",null,"Background Task"),(0,t._)("li",null,"Camera"),(0,t._)("li",null,"Console"),(0,t._)("li",null,"Device"),(0,t._)("li",null,"Filesystem"),(0,t._)("li",null,"Geolocation"),(0,t._)("li",null,"Motion"),(0,t._)("li",null,"Network"),(0,t._)("li",null,"Push Notifications"),(0,t._)("li",null,"Share"),(0,t._)("li",null,"Splash Screen"),(0,t._)("li",null,"Status Bar")],-1),l=(0,t._)("p",null,"Let’s learn by taking some examples, assuming you’ve added Capacitor mode to your Quasar project already.",-1),u=(0,t.Uk)("First step is to read the documentation of the Capacitor API that we want to use. We look at Capacitor’s "),i=(0,t.Uk)("Geolocation API"),_=(0,t.Uk)("."),r=(0,t._)("p",null,"Now let’s put this plugin to some good use. In one of your Quasar project’s pages/layouts/components Vue file, we write:",-1),U=(0,t._)("pre",{class:"doc-code language-html"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,t.Uk)("// some Vue file\n// remember this is simply an example;\n// only look at how we use the API described in the plugin's page;\n// the rest of things here are of no importance\n\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    GPS position: "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("strong")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("{{ position }}"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("strong")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token script"},[(0,t._)("span",{class:"token language-javascript"},[(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" ref"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" onMounted"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" onBeforeUnmount "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue'"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" Geolocation "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'@capacitor/geolocation'"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"default"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token function"},"setup"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" position "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"ref"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'determining...'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"getCurrentPosition"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      Geolocation"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"getCurrentPosition"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"then"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},"newPosition"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        console"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"log"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'Current'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" newPosition"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n        position"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("value "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" newPosition\n      "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token keyword"},"let"),(0,t.Uk)(" geoId\n\n    "),(0,t._)("span",{class:"token function"},"onMounted"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token function"},"getCurrentPosition"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n\n      "),(0,t._)("span",{class:"token comment"},"// we start listening"),(0,t.Uk)("\n      geoId "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" Geolocation"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"watchPosition"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"{"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},[(0,t.Uk)("newPosition"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" err")]),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        console"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"log"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'New GPS position'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n        position"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("value "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" newPosition\n      "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token function"},"onBeforeUnmount"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token comment"},"// we do cleanup"),(0,t.Uk)("\n      Geolocation"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"clearWatch"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("geoId"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      position\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])],-1),d=(0,t.Uk)("First step is to read the documentation of the Capacitor API that we want to use. We look at Capacitor’s "),g=(0,t.Uk)("Camera API"),m=(0,t.Uk)("."),f=(0,t._)("p",null,"Now let’s put this API to some good use. In one of your Quasar project’s pages/layouts/components Vue file, we write:",-1),w=(0,t._)("pre",{class:"doc-code language-html"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,t.Uk)("// some Vue file\n// remember this is simply an example;\n// only look at how we use the API described in the plugin's page;\n// the rest of things here are of no importance\n\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("q-btn")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"color"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("primary"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"label"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("Get Picture"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"@click"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("captureImage"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"/>")]),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("img")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},":src"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("imageSrc"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token script"},[(0,t._)("span",{class:"token language-javascript"},[(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" ref "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue'"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" Camera"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" CameraResultType "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'@capacitor/camera'"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"default"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token function"},"setup"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" imageSrc "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"ref"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"''"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token keyword"},"async"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"captureImage"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" image "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"await"),(0,t.Uk)(" Camera"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"getPhoto"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token literal-property property"},"quality"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"90"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token literal-property property"},"allowEditing"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token boolean"},"true"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token literal-property property"},"resultType"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" CameraResultType"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("Uri\n      "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n\n      "),(0,t._)("span",{class:"token comment"},"// The result will vary on the value of the resultType option."),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token comment"},"// CameraResultType.Uri - Get the result from image.webPath"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token comment"},"// CameraResultType.Base64 - Get the result from image.base64String"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token comment"},"// CameraResultType.DataUrl - Get the result from image.dataUrl"),(0,t.Uk)("\n      imageSrc"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("value "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" image"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("webPath\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      imageSrc"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      captureImage\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])],-1),h=(0,t._)("p",null,"Some Capacitor plugins, such as Camera, have a web-based UI available when not running natively but in a standard web browser. To enable these controls, add @ionic/pwa-elements to your project:",-1),y=(0,t._)("pre",{class:"doc-code language-bash"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,t.Uk)("$ "),(0,t._)("span",{class:"token function"},"npm"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"install"),(0,t.Uk)(" @ionic/pwa-elements\n")])],-1),v=(0,t._)("p",null,[(0,t.Uk)("Then create a boot file to initialize them, for example "),(0,t._)("code",{class:"doc-token"},"src/boot/capacitor.js"),(0,t.Uk)(":")],-1),C=(0,t._)("pre",{class:"doc-code language-js"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" defineCustomElements "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'@ionic/pwa-elements/loader'"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"default"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token function"},"defineCustomElements"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("window"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])],-1),P=(0,t._)("p",null,[(0,t.Uk)("Don’t forget to call the boot script in "),(0,t._)("code",{class:"doc-token"},"quasar.conf.js")],-1),b=(0,t._)("pre",{class:"doc-code language-js"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,t._)("span",{class:"token literal-property property"},"boot"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token string"},"'capacitor'"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t.Uk)("\n")])],-1),I=(0,t._)("p",null,"Now you are able to use the Camera API not just in native Android or iOS, but also in web based projects like a SPA or PWA.",-1),A=(0,t.Uk)("First step is to read the documentation of the Capacitor API that we want to use. Look at the Capacitor’s "),x=(0,t.Uk)("Device API"),j=(0,t.Uk)("."),T=(0,t._)("p",null,"Now let’s put this API to some good use. In one of your Quasar project’s pages/layouts/components Vue file, we write:",-1),S=(0,t._)("pre",{class:"doc-code language-html"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,t.Uk)("// some Vue file\n// remember this is simply an example;\n// only look at how we use the API described in the plugin's page;\n// the rest of things here are of no importance\n\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("Model: {{ model }}"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("Manufacturer: {{ manufacturer }}"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token script"},[(0,t._)("span",{class:"token language-javascript"},[(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" ref"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" onMounted "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue'"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" Device "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'@capacitor/device'"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"default"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token function"},"setup"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" model "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"ref"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'Please wait...'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" manufacturer "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"ref"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'Please wait...'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token function"},"onMounted"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      Device"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"getInfo"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"then"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},"info"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        model"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("value "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" info"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("model\n        manufacturer"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("value "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" info"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("manufacturer\n      "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      model"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      manufacturer\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])],-1);function G(n,a,s,G,D,q){const M=(0,t.up)("doc-link"),W=(0,t.up)("doc-page");return(0,t.wg)(),(0,t.j4)(W,{"meta-title":G.metaTitle,title:"Capacitor APIs","meta-desc":G.metaDesc},{default:(0,t.w5)((()=>[(0,t._)("p",null,[o,(0,t.Wm)(M,{to:"https://capacitor.ionicframework.com/docs/apis"},{default:(0,t.w5)((()=>[e])),_:1}),c]),(0,t._)("h2",{id:"capacitor-apis",class:"doc-heading doc-h2",onClick:a[0]||(a[0]=n=>G.copyHeading("capacitor-apis"))},"Capacitor APIs"),p,k,(0,t._)("h2",{id:"using-a-capacitor-api",class:"doc-heading doc-h2",onClick:a[1]||(a[1]=n=>G.copyHeading("using-a-capacitor-api"))},"Using a Capacitor API"),l,(0,t._)("h3",{id:"example-geolocation",class:"doc-heading doc-h3",onClick:a[2]||(a[2]=n=>G.copyHeading("example-geolocation"))},"Example: Geolocation"),(0,t._)("p",null,[u,(0,t.Wm)(M,{to:"https://capacitor.ionicframework.com/docs/apis/geolocation"},{default:(0,t.w5)((()=>[i])),_:1}),_]),r,U,(0,t._)("h3",{id:"example-camera",class:"doc-heading doc-h3",onClick:a[3]||(a[3]=n=>G.copyHeading("example-camera"))},"Example: Camera"),(0,t._)("p",null,[d,(0,t.Wm)(M,{to:"https://capacitor.ionicframework.com/docs/apis/camera"},{default:(0,t.w5)((()=>[g])),_:1}),m]),f,w,h,y,v,C,P,b,I,(0,t._)("h3",{id:"example-device",class:"doc-heading doc-h3",onClick:a[4]||(a[4]=n=>G.copyHeading("example-device"))},"Example: Device"),(0,t._)("p",null,[A,(0,t.Wm)(M,{to:"https://capacitor.ionicframework.com/docs/apis/device"},{default:(0,t.w5)((()=>[x])),_:1}),j]),T,S])),_:1},8,["meta-title","meta-desc"])}var D=s(17536);const q={name:"DocMarkdownPage",setup(){return{metaTitle:"Capacitor APIs",metaDesc:"How to use the Capacitor plugins in a Quasar app.",copyHeading:D.Et}}};var M=s(74260);const W=(0,M.Z)(q,[["render",G]]),E=W}}]);