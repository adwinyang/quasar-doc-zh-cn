"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[6031],{6031:(e,t,n)=>{n.r(t),n.d(t,{default:()=>U});var o=n(83673);const a=(0,o._)("p",null,[(0,o.Uk)("Quasar offers full-featured Vue directives that can totally replace libraries like Hammerjs: "),(0,o._)("code",{class:"doc-token"},"v-touch-pan"),(0,o.Uk)(", "),(0,o._)("code",{class:"doc-token"},"v-touch-swipe"),(0,o.Uk)(", "),(0,o._)("code",{class:"doc-token"},"v-touch-hold"),(0,o.Uk)(" and even "),(0,o._)("code",{class:"doc-token"},"v-touch-repeat"),(0,o.Uk)(".")],-1),s=(0,o._)("blockquote",{class:"doc-note"},[(0,o._)("p",null,[(0,o._)("strong",null,"These directives also work with mouse events, not only touch events"),(0,o.Uk)(", so you are able to build cool functionality for your App on desktops too.")])],-1),c=(0,o._)("p",null,[(0,o.Uk)("We will be describing "),(0,o._)("code",{class:"doc-token"},"v-touch-swipe"),(0,o.Uk)(" on the lines below.")],-1),i=(0,o._)("p",null,"Swipe with your mouse on the area below to see it in action. If using a mouse, you need to do it quick.",-1),l=(0,o._)("div",{class:"doc-note doc-note--tip"},[(0,o._)("p",{class:"doc-note__title"},"TIP"),(0,o._)("p",null,[(0,o.Uk)("If your content also has images, you might want to add "),(0,o._)("code",{class:"doc-token"},'draggable="false"'),(0,o.Uk)(" to them, otherwise the native browser behavior might interfere in a negative way.")])],-1),u=(0,o._)("p",null,[(0,o.Uk)("When you want to handle mouse events too, use the "),(0,o._)("code",{class:"doc-token"},"mouse"),(0,o.Uk)(" modifier:")],-1),p=(0,o._)("pre",{class:"doc-code language-html"},[(0,o._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,o._)("span",{class:"token tag"},[(0,o._)("span",{class:"token tag"},[(0,o._)("span",{class:"token punctuation"},"<"),(0,o.Uk)("div")]),(0,o.Uk)(),(0,o._)("span",{class:"token attr-name"},"v-touch-swipe.mouse"),(0,o._)("span",{class:"token attr-value"},[(0,o._)("span",{class:"token punctuation attr-equals"},"="),(0,o._)("span",{class:"token punctuation"},'"'),(0,o.Uk)("userHasSwiped"),(0,o._)("span",{class:"token punctuation"},'"')]),(0,o._)("span",{class:"token punctuation"},">")]),(0,o.Uk)("..."),(0,o._)("span",{class:"token tag"},[(0,o._)("span",{class:"token tag"},[(0,o._)("span",{class:"token punctuation"},"</"),(0,o.Uk)("div")]),(0,o._)("span",{class:"token punctuation"},">")]),(0,o.Uk)("\n")])],-1),d=(0,o._)("p",null,[(0,o.Uk)("When you want to inhibit TouchSwipe, you can do so by stopping propagation of the "),(0,o._)("code",{class:"doc-token"},"touchstart"),(0,o.Uk)("/"),(0,o._)("code",{class:"doc-token"},"mousedown"),(0,o.Uk)(" events from the inner content:")],-1),r=(0,o._)("pre",{class:"doc-code language-html"},[(0,o._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,o._)("span",{class:"token tag"},[(0,o._)("span",{class:"token tag"},[(0,o._)("span",{class:"token punctuation"},"<"),(0,o.Uk)("div")]),(0,o.Uk)(),(0,o._)("span",{class:"token attr-name"},"v-touch-swipe.mouse"),(0,o._)("span",{class:"token attr-value"},[(0,o._)("span",{class:"token punctuation attr-equals"},"="),(0,o._)("span",{class:"token punctuation"},'"'),(0,o.Uk)("userSwiped"),(0,o._)("span",{class:"token punctuation"},'"')]),(0,o._)("span",{class:"token punctuation"},">")]),(0,o.Uk)("\n  "),(0,o._)("span",{class:"token comment"},"\x3c!-- ...content --\x3e"),(0,o.Uk)("\n  "),(0,o._)("span",{class:"token tag"},[(0,o._)("span",{class:"token tag"},[(0,o._)("span",{class:"token punctuation"},"<"),(0,o.Uk)("div")]),(0,o.Uk)(),(0,o._)("span",{class:"token attr-name"},"@touchstart.stop"),(0,o.Uk)(),(0,o._)("span",{class:"token attr-name"},"@mousedown.stop"),(0,o._)("span",{class:"token punctuation"},">")]),(0,o.Uk)("\n    "),(0,o._)("span",{class:"token comment"},"\x3c!--\n      TouchSwipe will not apply here because\n      we are calling stopPropagation() on touchstart\n      and mousedown events\n    --\x3e"),(0,o.Uk)("\n  "),(0,o._)("span",{class:"token tag"},[(0,o._)("span",{class:"token tag"},[(0,o._)("span",{class:"token punctuation"},"</"),(0,o.Uk)("div")]),(0,o._)("span",{class:"token punctuation"},">")]),(0,o.Uk)("\n  "),(0,o._)("span",{class:"token comment"},"\x3c!-- ...content --\x3e"),(0,o.Uk)("\n"),(0,o._)("span",{class:"token tag"},[(0,o._)("span",{class:"token tag"},[(0,o._)("span",{class:"token punctuation"},"</"),(0,o.Uk)("div")]),(0,o._)("span",{class:"token punctuation"},">")]),(0,o.Uk)("\n")])],-1),h=(0,o._)("p",null,[(0,o.Uk)("However, if you are using "),(0,o._)("code",{class:"doc-token"},"capture"),(0,o.Uk)(" or "),(0,o._)("code",{class:"doc-token"},"mouseCapture"),(0,o.Uk)(" modifiers then events will first reach the TouchHold directive then the inner content, so TouchSwipe will still trigger.")],-1),k=(0,o._)("p",null,"Due to performance reasons, not all of the modifiers are reactive. Some require a window/page/component refresh to get updated. Please check the API card for the modifiers which are not marked as reactive.",-1);function _(e,t,n,_,g,m){const w=(0,o.up)("doc-api"),v=(0,o.up)("doc-example"),U=(0,o.up)("doc-page");return(0,o.wg)(),(0,o.j4)(U,{"meta-title":_.metaTitle,title:"Touch Swipe Directive",related:_.related,toc:_.toc,"meta-desc":_.metaDesc},{default:(0,o.w5)((()=>[a,s,c,(0,o._)("h2",{id:"touchswipe-api",class:"doc-heading doc-h2",onClick:t[0]||(t[0]=e=>_.copyHeading("touchswipe-api"))},"TouchSwipe API"),(0,o.Wm)(w,{file:"TouchSwipe"}),(0,o._)("h2",{id:"usage",class:"doc-heading doc-h2",onClick:t[1]||(t[1]=e=>_.copyHeading("usage"))},"Usage"),i,l,(0,o.Wm)(v,{title:"All directions",file:"TouchSwipe/Basic"}),(0,o.Wm)(v,{title:"One direction only",file:"TouchSwipe/Right"}),(0,o.Wm)(v,{title:"Several directions",file:"TouchSwipe/UpOrLeft"}),(0,o._)("h3",{id:"handling-mouse-events",class:"doc-heading doc-h3",onClick:t[2]||(t[2]=e=>_.copyHeading("handling-mouse-events"))},"Handling Mouse Events"),u,p,(0,o._)("h3",{id:"inhibiting-touchswipe",class:"doc-heading doc-h3",onClick:t[3]||(t[3]=e=>_.copyHeading("inhibiting-touchswipe"))},"Inhibiting TouchSwipe"),d,r,h,(0,o._)("h2",{id:"note-on-hmr",class:"doc-heading doc-h2",onClick:t[4]||(t[4]=e=>_.copyHeading("note-on-hmr"))},"Note on HMR"),k])),_:1},8,["meta-title","related","toc","meta-desc"])}var g=n(17536);const m={name:"DocMarkdownPage",setup(){return{metaTitle:"Touch Swipe Directive",metaDesc:"Vue directive which triggers an event when the user swipes with the finger or mouse on a component or element.",related:[{name:"触摸平移",category:"Vue 指令",path:"/vue-directives/touch-pan"},{name:"触摸保持",category:"Vue 指令",path:"/vue-directives/touch-hold"}],toc:[{id:"touchswipe-api",title:"TouchSwipe API"},{id:"usage",title:"Usage"},{id:"handling-mouse-events",title:"Handling Mouse Events",sub:!0},{id:"inhibiting-touchswipe",title:"Inhibiting TouchSwipe",sub:!0},{id:"note-on-hmr",title:"Note on HMR"}],copyHeading:g.Et}}};var w=n(74260);const v=(0,w.Z)(m,[["render",_]]),U=v}}]);