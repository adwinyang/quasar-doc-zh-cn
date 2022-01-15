"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[37251],{37251:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var a=n(83673);const o=(0,a._)("p",null,[(0,a.Uk)("Quasar offers full-featured Vue directives that can totally replace libraries like Hammerjs: "),(0,a._)("code",{class:"doc-token"},"v-touch-pan"),(0,a.Uk)(", "),(0,a._)("code",{class:"doc-token"},"v-touch-swipe"),(0,a.Uk)(", "),(0,a._)("code",{class:"doc-token"},"v-touch-hold"),(0,a.Uk)(" and "),(0,a._)("code",{class:"doc-token"},"v-touch-repeat"),(0,a.Uk)(".")],-1),s=(0,a._)("blockquote",{class:"doc-note"},[(0,a._)("p",null,[(0,a._)("strong",null,"These directives also work with mouse events, not only touch events"),(0,a.Uk)(", so you are able to build cool functionality for your App on desktops too.")])],-1),c=(0,a._)("p",null,[(0,a.Uk)("We will be describing "),(0,a._)("code",{class:"doc-token"},"v-touch-repeat"),(0,a.Uk)(" on the lines below.")],-1),l=(0,a._)("p",null,"Click and hold with your mouse on the area below to see it in action. Notice that on touch capable devices the scrolling is not blocked.",-1),i=(0,a._)("blockquote",{class:"doc-note"},[(0,a._)("p",null,"The default repeat pattern is 0:600:300 (ms).")],-1),p=(0,a._)("p",null,[(0,a.Uk)("Below is an example configured to also react to "),(0,a._)("code",{class:"doc-token"},"SPACE"),(0,a.Uk)(", "),(0,a._)("code",{class:"doc-token"},"ENTER"),(0,a.Uk)(" and "),(0,a._)("code",{class:"doc-token"},"h"),(0,a.Uk)(" keys ("),(0,a._)("strong",null,"focus on it first"),(0,a.Uk)("), with 0:300:200 (ms) repeat pattern. Hit & hold keys, or click/tap and hold.")],-1),u=(0,a._)("p",null,"Below is an example of applying TouchRepeat to QBtn. Notice how we play with the directive arguments in order to make the blue buttons increment slower than the red ones.",-1),d=(0,a._)("p",null,[(0,a.Uk)("When you want to handle mouse events too, use the "),(0,a._)("code",{class:"doc-token"},"mouse"),(0,a.Uk)(" modifier:")],-1),k=(0,a._)("pre",{class:"doc-code language-html"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("div")]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"v-touch-repeat.mouse"),(0,a._)("span",{class:"token attr-value"},[(0,a._)("span",{class:"token punctuation attr-equals"},"="),(0,a._)("span",{class:"token punctuation"},'"'),(0,a.Uk)("myHandler"),(0,a._)("span",{class:"token punctuation"},'"')]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("..."),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("div")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n")])],-1),r=(0,a.Uk)("When you want to handle key events too, use "),h=(0,a.Uk)("keycodes"),_=(0,a.Uk)(" as modifiers:"),g=(0,a._)("pre",{class:"doc-code language-html"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("div")]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"v-touch-repeat.65.70"),(0,a._)("span",{class:"token attr-value"},[(0,a._)("span",{class:"token punctuation attr-equals"},"="),(0,a._)("span",{class:"token punctuation"},'"'),(0,a.Uk)("myHandler"),(0,a._)("span",{class:"token punctuation"},'"')]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("..."),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("div")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n")])],-1),m=(0,a._)("p",null,[(0,a.Uk)("There are some special modifiers that you do not require to write the equivalent keycode: "),(0,a._)("code",{class:"doc-token"},"space"),(0,a.Uk)(", "),(0,a._)("code",{class:"doc-token"},"tab"),(0,a.Uk)(", "),(0,a._)("code",{class:"doc-token"},"enter"),(0,a.Uk)(".")],-1),U=(0,a._)("p",null,[(0,a.Uk)("When you want to inhibit TouchRepeat, you can do so by stopping propagation of the "),(0,a._)("code",{class:"doc-token"},"touchstart"),(0,a.Uk)("/"),(0,a._)("code",{class:"doc-token"},"mousedown"),(0,a.Uk)("/"),(0,a._)("code",{class:"doc-token"},"keydown"),(0,a.Uk)(" events from the inner content:")],-1),v=(0,a._)("pre",{class:"doc-code language-html"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("div")]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"v-touch-repeat.mouse.enter"),(0,a._)("span",{class:"token attr-value"},[(0,a._)("span",{class:"token punctuation attr-equals"},"="),(0,a._)("span",{class:"token punctuation"},'"'),(0,a.Uk)("userHasHold"),(0,a._)("span",{class:"token punctuation"},'"')]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token comment"},"\x3c!-- ...content --\x3e"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("div")]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"@touchstart.stop"),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"@mousedown.stop"),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"@keydown.stop"),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"\x3c!--\n      TouchRepeat will not apply here because\n      we are calling stopPropagation() on touchstart,\n      mousedown and keydown events\n    --\x3e"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("div")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token comment"},"\x3c!-- ...content --\x3e"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("div")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n")])],-1),w=(0,a._)("p",null,[(0,a.Uk)("However, if you are using "),(0,a._)("code",{class:"doc-token"},"capture"),(0,a.Uk)(", "),(0,a._)("code",{class:"doc-token"},"mouseCapture"),(0,a.Uk)(" or "),(0,a._)("code",{class:"doc-token"},"keyCapture"),(0,a.Uk)(" modifiers then events will first reach the TouchRepeat directive then the inner content, so TouchRepeat will still trigger.")],-1),y=(0,a._)("p",null,"Due to performance reasons, not all of the modifiers are reactive. Some require a window/page/component refresh to get updated. Please check the API card for the modifiers which are not marked as reactive.",-1);function f(e,t,n,f,b,T){const H=(0,a.up)("doc-api"),R=(0,a.up)("doc-example"),C=(0,a.up)("doc-link"),q=(0,a.up)("doc-page");return(0,a.wg)(),(0,a.j4)(q,{"meta-title":f.metaTitle,title:"Touch Repeat Directive","meta-desc":f.metaDesc},{default:(0,a.w5)((()=>[o,s,c,(0,a._)("h2",{id:"touchrepeat-api",class:"doc-heading doc-h2",onClick:t[0]||(t[0]=e=>f.copyHeading("touchrepeat-api"))},"TouchRepeat API"),(0,a.Wm)(H,{file:"TouchRepeat"}),(0,a._)("h2",{id:"usage",class:"doc-heading doc-h2",onClick:t[1]||(t[1]=e=>f.copyHeading("usage"))},"Usage"),l,i,(0,a.Wm)(R,{title:"Basic",file:"TouchRepeat/Basic"}),p,(0,a.Wm)(R,{title:"Custom keys",file:"TouchRepeat/Keys"}),u,(0,a.Wm)(R,{title:"Applied to QBtn",file:"TouchRepeat/Buttons"}),(0,a._)("h3",{id:"handling-mouse-events",class:"doc-heading doc-h3",onClick:t[2]||(t[2]=e=>f.copyHeading("handling-mouse-events"))},"Handling Mouse Events"),d,k,(0,a._)("h3",{id:"handling-key-events",class:"doc-heading doc-h3",onClick:t[3]||(t[3]=e=>f.copyHeading("handling-key-events"))},"Handling Key Events"),(0,a._)("p",null,[r,(0,a.Wm)(C,{to:"https://keycode.info/"},{default:(0,a.w5)((()=>[h])),_:1}),_]),g,m,(0,a._)("h3",{id:"inhibiting-touchrepeat",class:"doc-heading doc-h3",onClick:t[4]||(t[4]=e=>f.copyHeading("inhibiting-touchrepeat"))},"Inhibiting TouchRepeat"),U,v,w,(0,a._)("h2",{id:"note-on-hmr",class:"doc-heading doc-h2",onClick:t[5]||(t[5]=e=>f.copyHeading("note-on-hmr"))},"Note on HMR"),y])),_:1},8,["meta-title","meta-desc"])}var b=n(17536);const T={name:"DocMarkdownPage",setup(){return{metaTitle:"Touch Repeat Directive",metaDesc:"Vue directive which triggers an event at specified intervals of time while the user touches and holds on a component or element.",copyHeading:b.Et}}};var H=n(74260);const R=(0,H.Z)(T,[["render",f]]),C=R}}]);