"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[21295],{21295:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Q});var o=n(83673);const i=(0,o.Uk)("The QMenu component is a convenient way to show menus. Goes very well with "),s=(0,o.Uk)("QList"),a=(0,o.Uk)(" as dropdown content, but it’s by no means limited to it."),l=(0,o._)("p",null,[(0,o.Uk)("The idea with QMenu is to place it inside your DOM element / component that you want to be the trigger as direct child. Don’t worry about QMenu content inheriting CSS from the container as the QMenu will be injected as a direct child of "),(0,o._)("code",{class:"doc-token"},"<body>"),(0,o.Uk)(" through a Quasar Portal.")],-1),c=(0,o._)("div",{class:"doc-note doc-note--tip"},[(0,o._)("p",{class:"doc-note__title"},"TIP"),(0,o._)("p",null,[(0,o.Uk)("Don’t forget to use the directive "),(0,o._)("code",{class:"doc-token"},"v-close-popup"),(0,o.Uk)(" in your clickable menu items if you want the menu to close automatically. Alternatively, you can use the QMenu’s property "),(0,o._)("code",{class:"doc-token"},"auto-close"),(0,o.Uk)(" or handle closing the menu yourself through its v-model.")])],-1),d=(0,o._)("p",null,"You can also set QMenu to act as a context menu. On desktop, you need to right click the parent target to trigger it, and on mobile a long tap will do the job.",-1),u=(0,o._)("p",null,[(0,o.Uk)("If you want the QMenu to not close if app route changes or if hitting ESCAPE key or if clicking/tapping outside of the menu, then use "),(0,o._)("code",{class:"doc-token"},"persistent"),(0,o.Uk)(" prop:")],-1),r=(0,o.Uk)("In the example below there’s a few transitions showcased. For a full list of transitions available, go to "),p=(0,o.Uk)("Transitions"),h=(0,o.Uk)("."),g=(0,o._)("p",null,"The example below shows how to create a re-usable menu that can be shared with different targets.",-1),m=(0,o._)("p",null,[(0,o.Uk)("The position of QMenu can be customized. It keeps account of the "),(0,o._)("code",{class:"doc-token"},"anchor"),(0,o.Uk)(" and "),(0,o._)("code",{class:"doc-token"},"self"),(0,o.Uk)(" optional props. The final position of QMenu popup is calculated so that it will be displayed on the available screen real estate, switching to the right-side and/or top-side when necessary.")],-1),k=(0,o._)("p",null,[(0,o.Uk)("For horizontal positioning you can use "),(0,o._)("code",{class:"doc-token"},"start"),(0,o.Uk)(" and "),(0,o._)("code",{class:"doc-token"},"end"),(0,o.Uk)(" when you want to automatically take into account if on RTL or non-RTL. "),(0,o._)("code",{class:"doc-token"},"start"),(0,o.Uk)(" and "),(0,o._)("code",{class:"doc-token"},"end"),(0,o.Uk)(" mean “left” for non-RTL and “right” for RTL.")],-1);function y(e,t,n,y,b,f){const _=(0,o.up)("doc-link"),M=(0,o.up)("doc-api"),w=(0,o.up)("doc-example"),Q=(0,o.up)("menu-positioning"),U=(0,o.up)("doc-page");return(0,o.wg)(),(0,o.j4)(U,{"meta-title":y.metaTitle,title:"QMenu",related:y.related,toc:y.toc,"meta-desc":y.metaDesc},{default:(0,o.w5)((()=>[(0,o._)("p",null,[i,(0,o.Wm)(_,{to:"/vue-components/list-and-list-items"},{default:(0,o.w5)((()=>[s])),_:1}),a]),(0,o._)("h2",{id:"qmenu-api",class:"doc-heading doc-h2",onClick:t[0]||(t[0]=e=>y.copyHeading("qmenu-api"))},"QMenu API"),(0,o.Wm)(M,{file:"QMenu"}),(0,o._)("h2",{id:"usage",class:"doc-heading doc-h2",onClick:t[1]||(t[1]=e=>y.copyHeading("usage"))},"Usage"),l,c,(0,o._)("h3",{id:"basic",class:"doc-heading doc-h3",onClick:t[2]||(t[2]=e=>y.copyHeading("basic"))},"Basic"),(0,o.Wm)(w,{title:"Basic",file:"QMenu/Basic"}),(0,o.Wm)(w,{title:"Idea for content",file:"QMenu/VariousContent"}),(0,o.Wm)(w,{title:"Toggle through v-model",file:"QMenu/VModel"}),(0,o._)("h3",{id:"submenus",class:"doc-heading doc-h3",onClick:t[3]||(t[3]=e=>y.copyHeading("submenus"))},"Submenus"),(0,o.Wm)(w,{title:"Menus in menus",file:"QMenu/MenuInMenu"}),(0,o._)("h3",{id:"sizing-and-styling",class:"doc-heading doc-h3",onClick:t[4]||(t[4]=e=>y.copyHeading("sizing-and-styling"))},"Sizing and styling"),(0,o.Wm)(w,{title:"Sizing",file:"QMenu/Sizing"}),(0,o.Wm)(w,{title:"Style",file:"QMenu/Style"}),(0,o._)("h3",{id:"context-menu",class:"doc-heading doc-h3",onClick:t[5]||(t[5]=e=>y.copyHeading("context-menu"))},"Context menu"),d,(0,o.Wm)(w,{title:"Context Menu",file:"QMenu/ContextMenu"}),(0,o._)("h3",{id:"persistent",class:"doc-heading doc-h3",onClick:t[6]||(t[6]=e=>y.copyHeading("persistent"))},"Persistent"),u,(0,o.Wm)(w,{title:"Persistent",file:"QMenu/Persistent"}),(0,o._)("h3",{id:"transitions",class:"doc-heading doc-h3",onClick:t[7]||(t[7]=e=>y.copyHeading("transitions"))},"Transitions"),(0,o._)("p",null,[r,(0,o.Wm)(_,{to:"/options/transitions"},{default:(0,o.w5)((()=>[p])),_:1}),h]),(0,o.Wm)(w,{title:"Transition examples",file:"QMenu/Transitions"}),(0,o._)("h3",{id:"reusable",class:"doc-heading doc-h3",onClick:t[8]||(t[8]=e=>y.copyHeading("reusable"))},"Reusable"),g,(0,o.Wm)(w,{title:"Using target",file:"QMenu/Target"}),(0,o._)("h3",{id:"positioning",class:"doc-heading doc-h3",onClick:t[9]||(t[9]=e=>y.copyHeading("positioning"))},"Positioning"),(0,o.Wm)(w,{title:"Position examples",file:"QMenu/Positions"}),m,k,(0,o.Wm)(Q)])),_:1},8,["meta-title","related","toc","meta-desc"])}var b=n(17536),f=n(80217);const _={name:"DocMarkdownPage",components:{MenuPositioning:f.Z},setup(){return{metaTitle:"QMenu",metaDesc:"The QMenu Vue component is a convenient way to show menus.",related:[{name:"关闭弹出窗口",category:"Vue 指令",path:"/vue-directives/close-popup"},{name:"过渡",category:"选项和辅助",path:"/options/transitions"},{name:"弹出代理",category:"Vue 组件",path:"/vue-components/popup-proxy"}],toc:[{id:"qmenu-api",title:"QMenu API"},{id:"usage",title:"Usage"},{id:"basic",title:"Basic",sub:!0},{id:"submenus",title:"Submenus",sub:!0},{id:"sizing-and-styling",title:"Sizing and styling",sub:!0},{id:"context-menu",title:"Context menu",sub:!0},{id:"persistent",title:"Persistent",sub:!0},{id:"transitions",title:"Transitions",sub:!0},{id:"reusable",title:"Reusable",sub:!0},{id:"positioning",title:"Positioning",sub:!0}],copyHeading:b.Et}}};var M=n(74260);const w=(0,M.Z)(_,[["render",y]]),Q=w}}]);