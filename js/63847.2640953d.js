"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[63847],{63847:(e,t,o)=>{o.r(t),o.d(t,{default:()=>w});var n=o(83673);const s=(0,n._)("p",null,[(0,n.Uk)("Quasar offers full-featured Vue directives that can totally replace libraries like Hammerjs: "),(0,n._)("code",{class:"doc-token"},"v-touch-pan"),(0,n.Uk)(", "),(0,n._)("code",{class:"doc-token"},"v-touch-swipe"),(0,n.Uk)(", "),(0,n._)("code",{class:"doc-token"},"v-touch-hold"),(0,n.Uk)(" and even "),(0,n._)("code",{class:"doc-token"},"v-touch-repeat"),(0,n.Uk)(".")],-1),a=(0,n._)("blockquote",{class:"doc-note"},[(0,n._)("p",null,[(0,n._)("strong",null,"These directives also work with mouse events, not only touch events"),(0,n.Uk)(", so you are able to build cool functionality for your App on desktops too.")])],-1),c=(0,n._)("p",null,[(0,n.Uk)("We will be describing "),(0,n._)("code",{class:"doc-token"},"v-touch-hold"),(0,n.Uk)(" directive on the lines below.")],-1),i=(0,n._)("p",null,"The default wait time is 600ms, but you can change it:",-1),l=(0,n._)("div",{class:"doc-note doc-note--tip"},[(0,n._)("p",{class:"doc-note__title"},"TIP"),(0,n._)("p",null,"TouchHold also has a default sensitivity of 5px for touch events and 7px for mouse events, which means that it allows a slight movement of the finger or mouse without aborting, improving the user experience.")],-1),u=(0,n._)("p",null,[(0,n.Uk)("However, you can change this sensitivity too (notice the directive argument below - "),(0,n._)("code",{class:"doc-token"},"600:12:15"),(0,n.Uk)(" - 600ms wait time, 12px sensitivity for touch events, 15px sensitivity for mouse events):")],-1),d=(0,n._)("p",null,[(0,n.Uk)("When you want to also handle mouse events too, use the "),(0,n._)("code",{class:"doc-token"},"mouse"),(0,n.Uk)(" modifier:")],-1),p=(0,n._)("pre",{class:"doc-code language-html"},[(0,n._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token punctuation"},"<"),(0,n.Uk)("div")]),(0,n.Uk)(),(0,n._)("span",{class:"token attr-name"},"v-touch-hold.mouse"),(0,n._)("span",{class:"token attr-value"},[(0,n._)("span",{class:"token punctuation attr-equals"},"="),(0,n._)("span",{class:"token punctuation"},'"'),(0,n.Uk)("userHasHold"),(0,n._)("span",{class:"token punctuation"},'"')]),(0,n._)("span",{class:"token punctuation"},">")]),(0,n.Uk)("..."),(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token punctuation"},"</"),(0,n.Uk)("div")]),(0,n._)("span",{class:"token punctuation"},">")]),(0,n.Uk)("\n")])],-1),h=(0,n._)("p",null,[(0,n.Uk)("When you want to inhibit TouchHold, you can do so by stopping propagation of the "),(0,n._)("code",{class:"doc-token"},"touchstart"),(0,n.Uk)("/"),(0,n._)("code",{class:"doc-token"},"mousedown"),(0,n.Uk)(" events from the inner content:")],-1),r=(0,n._)("pre",{class:"doc-code language-html"},[(0,n._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token punctuation"},"<"),(0,n.Uk)("div")]),(0,n.Uk)(),(0,n._)("span",{class:"token attr-name"},"v-touch-hold.mouse"),(0,n._)("span",{class:"token attr-value"},[(0,n._)("span",{class:"token punctuation attr-equals"},"="),(0,n._)("span",{class:"token punctuation"},'"'),(0,n.Uk)("userHasHold"),(0,n._)("span",{class:"token punctuation"},'"')]),(0,n._)("span",{class:"token punctuation"},">")]),(0,n.Uk)("\n  "),(0,n._)("span",{class:"token comment"},"\x3c!-- ...content --\x3e"),(0,n.Uk)("\n  "),(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token punctuation"},"<"),(0,n.Uk)("div")]),(0,n.Uk)(),(0,n._)("span",{class:"token attr-name"},"@touchstart.stop"),(0,n.Uk)(),(0,n._)("span",{class:"token attr-name"},"@mousedown.stop"),(0,n._)("span",{class:"token punctuation"},">")]),(0,n.Uk)("\n    "),(0,n._)("span",{class:"token comment"},"\x3c!--\n      TouchHold will not apply here because\n      we are calling stopPropagation() on touchstart\n      and mousedown events\n    --\x3e"),(0,n.Uk)("\n  "),(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token punctuation"},"</"),(0,n.Uk)("div")]),(0,n._)("span",{class:"token punctuation"},">")]),(0,n.Uk)("\n  "),(0,n._)("span",{class:"token comment"},"\x3c!-- ...content --\x3e"),(0,n.Uk)("\n"),(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token punctuation"},"</"),(0,n.Uk)("div")]),(0,n._)("span",{class:"token punctuation"},">")]),(0,n.Uk)("\n")])],-1),k=(0,n._)("p",null,[(0,n.Uk)("However, if you are using "),(0,n._)("code",{class:"doc-token"},"capture"),(0,n.Uk)(" or "),(0,n._)("code",{class:"doc-token"},"mouseCapture"),(0,n.Uk)(" modifiers then events will first reach the TouchHold directive then the inner content, so TouchHold will still trigger.")],-1),_=(0,n._)("p",null,"Due to performance reasons, not all of the modifiers are reactive. Some require a window/page/component refresh to get updated. Please check the API card for the modifiers which are not marked as reactive.",-1);function m(e,t,o,m,g,v){const U=(0,n.up)("doc-api"),f=(0,n.up)("doc-example"),w=(0,n.up)("doc-page");return(0,n.wg)(),(0,n.j4)(w,{"meta-title":m.metaTitle,title:"Touch Hold Directive",related:m.related,toc:m.toc,"meta-desc":m.metaDesc},{default:(0,n.w5)((()=>[s,a,c,(0,n._)("h2",{id:"touchhold-api",class:"doc-heading doc-h2",onClick:t[0]||(t[0]=e=>m.copyHeading("touchhold-api"))},"TouchHold API"),(0,n.Wm)(U,{file:"TouchHold"}),(0,n._)("h2",{id:"usage",class:"doc-heading doc-h2",onClick:t[1]||(t[1]=e=>m.copyHeading("usage"))},"Usage"),(0,n.Wm)(f,{title:"Basic",file:"TouchHold/Basic"}),i,(0,n.Wm)(f,{title:"Custom wait time",file:"TouchHold/CustomTimer"}),l,u,(0,n.Wm)(f,{title:"Custom sensitivity",file:"TouchHold/CustomSensitivity"}),(0,n._)("h3",{id:"handling-mouse-events",class:"doc-heading doc-h3",onClick:t[2]||(t[2]=e=>m.copyHeading("handling-mouse-events"))},"Handling Mouse Events"),d,p,(0,n._)("h3",{id:"inhibiting-touchhold",class:"doc-heading doc-h3",onClick:t[3]||(t[3]=e=>m.copyHeading("inhibiting-touchhold"))},"Inhibiting TouchHold"),h,r,k,(0,n._)("h2",{id:"note-on-hmr",class:"doc-heading doc-h2",onClick:t[4]||(t[4]=e=>m.copyHeading("note-on-hmr"))},"Note on HMR"),_])),_:1},8,["meta-title","related","toc","meta-desc"])}var g=o(17536);const v={name:"DocMarkdownPage",setup(){return{metaTitle:"Touch Hold Directive",metaDesc:"Vue directive which triggers an event when the user touches and holds on a component or element for a specified amount of time.",related:[{name:"触摸平移",category:"Vue 指令",path:"/vue-directives/touch-pan"},{name:"触摸轻扫",category:"Vue 指令",path:"/vue-directives/touch-swipe"}],toc:[{id:"touchhold-api",title:"TouchHold API"},{id:"usage",title:"Usage"},{id:"handling-mouse-events",title:"Handling Mouse Events",sub:!0},{id:"inhibiting-touchhold",title:"Inhibiting TouchHold",sub:!0},{id:"note-on-hmr",title:"Note on HMR"}],copyHeading:g.Et}}};var U=o(74260);const f=(0,U.Z)(v,[["render",m]]),w=f}}]);