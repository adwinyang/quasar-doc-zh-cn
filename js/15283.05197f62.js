"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[15283],{15283:(n,a,s)=>{s.r(a),s.d(a,{default:()=>h});var e=s(83673);const t=(0,e._)("p",null,"Loading is a feature that you can use to display an overlay with a spinner on top of your App’s content to inform the user that a background operation is taking place. No need to add complex logic within your Pages for global background operations.",-1),o=(0,e._)("p",null,"Loading uses a delay (500ms) to display itself so that quick operations won’t make the screen flicker. This happens by showing and then quickly hiding the progress spinner without the user having a chance to see what happens. The delay before showing it eliminates confusion.",-1),i=(0,e._)("p",null,"Inside a Vue component:",-1),c=(0,e._)("pre",{class:"doc-code language-js"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,e._)("span",{class:"token keyword"},"import"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)(" useQuasar "),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)(),(0,e._)("span",{class:"token keyword"},"from"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'quasar'"),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token function"},"setup"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token keyword"},"const"),(0,e.Uk)(" $q "),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e._)("span",{class:"token function"},"useQuasar"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n\n  $q"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("loading"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"show"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token literal-property property"},"delay"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token number"},"400"),(0,e.Uk)(),(0,e._)("span",{class:"token comment"},"// ms"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token punctuation"},"}"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n\n  $q"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("loading"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"hide"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n")])],-1),p=(0,e._)("p",null,"Outside of a Vue component:",-1),l=(0,e._)("pre",{class:"doc-code language-js"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,e._)("span",{class:"token keyword"},"import"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n  Loading"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n\n  "),(0,e._)("span",{class:"token comment"},"// optional!, for example below"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token comment"},"// with custom spinner"),(0,e.Uk)("\n  QSpinnerGears\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)(),(0,e._)("span",{class:"token keyword"},"from"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'quasar'"),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token comment"},"// default options"),(0,e.Uk)("\nLoading"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"show"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token comment"},"// fully customizable"),(0,e.Uk)("\nLoading"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"show"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token literal-property property"},"spinner"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(" QSpinnerGears"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token comment"},"// other props"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n\nLoading"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"hide"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n")])],-1),u=(0,e._)("p",null,[(0,e.Uk)("Should you wish to set up some defaults, rather than specifying them each time, you can do so by using quasar.conf.js > framework > config > loading: {…} or by calling "),(0,e._)("code",{class:"doc-token"},"Loading.setDefaults({...})"),(0,e.Uk)(" or "),(0,e._)("code",{class:"doc-token"},"$q.loading.setDefaults({...})"),(0,e.Uk)(".")],-1);function d(n,a,s,d,k,r){const g=(0,e.up)("doc-api"),_=(0,e.up)("doc-installation"),h=(0,e.up)("doc-example"),m=(0,e.up)("doc-page");return(0,e.wg)(),(0,e.j4)(m,{"meta-title":d.metaTitle,title:"Loading Plugin",related:d.related,toc:d.toc,"meta-desc":d.metaDesc},{default:(0,e.w5)((()=>[t,(0,e._)("h2",{id:"loading-api",class:"doc-heading doc-h2",onClick:a[0]||(a[0]=n=>d.copyHeading("loading-api"))},"Loading API"),(0,e.Wm)(g,{file:"Loading"}),(0,e._)("h2",{id:"installation",class:"doc-heading doc-h2",onClick:a[1]||(a[1]=n=>d.copyHeading("installation"))},"Installation"),(0,e.Wm)(_,{plugins:"Loading",config:"loading"}),(0,e._)("h2",{id:"usage",class:"doc-heading doc-h2",onClick:a[2]||(a[2]=n=>d.copyHeading("usage"))},"Usage"),o,i,c,p,l,(0,e.Wm)(h,{title:"Default options",file:"Loading/Default"}),(0,e.Wm)(h,{title:"With message",file:"Loading/WithMessage"}),(0,e.Wm)(h,{title:"With customized box",file:"Loading/WithBox"}),(0,e.Wm)(h,{title:"With unsafe message, but sanitized",file:"Loading/WithMessageSanitized"}),(0,e.Wm)(h,{title:"Customized",file:"Loading/Customized"}),(0,e.Wm)(h,{title:"Show and Change",file:"Loading/ShowAndChange"}),(0,e._)("h3",{id:"setting-up-defaults",class:"doc-heading doc-h3",onClick:a[3]||(a[3]=n=>d.copyHeading("setting-up-defaults"))},"Setting Up Defaults"),u])),_:1},8,["meta-title","related","toc","meta-desc"])}var k=s(17536);const r={name:"DocMarkdownPage",setup(){return{metaTitle:"Loading Plugin",metaDesc:"A Quasar plugin which can display a loading state for your app through an overlay with a spinner and a message.",related:[{name:"线性进度条",category:"Vue 组件",path:"/vue-components/linear-progress"},{name:"圆环进度条",category:"Vue 组件",path:"/vue-components/circular-progress"},{name:"内部加载",category:"Vue 组件",path:"/vue-components/inner-loading"},{name:"旋转器",category:"Vue 组件",path:"/vue-components/spinners"},{name:"骨架屏",category:"Vue 组件",path:"/vue-components/skeleton"},{name:"装载条",category:"Quasar 插件",path:"/quasar-plugins/loading-bar"},{name:"Ajax 状态栏",category:"Vue 组件",path:"/vue-components/ajax-bar"}],toc:[{id:"loading-api",title:"Loading API"},{id:"installation",title:"Installation"},{id:"usage",title:"Usage"},{id:"setting-up-defaults",title:"Setting Up Defaults",sub:!0}],copyHeading:k.Et}}};var g=s(74260);const _=(0,g.Z)(r,[["render",d]]),h=_}}]);