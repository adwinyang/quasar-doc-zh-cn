"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[67541],{67541:(e,o,t)=>{t.r(o),t.d(o,{default:()=>H});var i=t(83673);const a=(0,i.Uk)("QLayout allows you to configure your views as a 3x3 matrix, containing optional left-side and/or right-side Drawers. If you haven’t already, please read "),n=(0,i.Uk)("QLayout"),l=(0,i.Uk)(" documentation page first."),r=(0,i._)("p",null,"QDrawer is the sidebar part of your QLayout.",-1),s=(0,i._)("p",null,"Scaffold your layout(s) by clicking on the button below.",-1),d=(0,i._)("div",{class:"doc-note doc-note--tip"},[(0,i._)("p",{class:"doc-note__title"},"TIP"),(0,i._)("ul",null,[(0,i._)("li",null,"Since QDrawer needs a layout and QLayout by default manages the entire window, then for demoing purposes we are going to use containerized QLayouts. But remember that by no means you are required to use containerized QLayouts for QDrawer."),(0,i._)("li",null,[(0,i.Uk)("If the QDrawer content also has images and you want to use touch actions to close it, you might want to add "),(0,i._)("code",{class:"doc-token"},'draggable="false"'),(0,i.Uk)(" to them, otherwise the native browser behavior might interfere in a negative way.")])])],-1),c=(0,i._)("div",{class:"doc-note doc-note--danger"},[(0,i._)("p",{class:"doc-note__title"},"WARNING"),(0,i._)("p",null,[(0,i.Uk)("By default, QDrawer has touch actions attached to it. If this interferes with your drawer content components, disable it by specifying the Boolean "),(0,i._)("code",{class:"doc-token"},"no-swipe-close"),(0,i.Uk)(" property.")])],-1),u=(0,i._)("div",{class:"doc-note doc-note--warning"},[(0,i._)("p",{class:"doc-note__title"},"WARNING"),(0,i._)("p",null,[(0,i.Uk)("When QDrawer is set into overlay mode, "),(0,i._)("strong",null,"it will force it to go into fixed position"),(0,i.Uk)(", regardless if QLayout’s “view” prop is configured with “l/r” or “L/R”. Also, "),(0,i._)("strong",null,"if on iOS platform and QLayout is containerized"),(0,i.Uk)(", the fixed position will also be forced upon QDrawer due to platform limitations that cannot be overcome.")])],-1),h=(0,i._)("p",null,[(0,i.Uk)("Consider using QItems with routing props (like "),(0,i._)("code",{class:"doc-token"},"to"),(0,i.Uk)(") below. For demoing purposes these props have not been added as it would break the UMD version.")],-1),w=(0,i._)("p",null,[(0,i.Uk)("Drawer can operate in two modes: ‘normal’ and ‘mini’, and you can switch between them by using the Boolean "),(0,i._)("code",{class:"doc-token"},"mini"),(0,i.Uk)(" property on QLayoutDrawer.")],-1),m=(0,i._)("div",{class:"doc-note doc-note--warning"},[(0,i._)("p",{class:"doc-note__title"},"WARNING"),(0,i._)("p",null,[(0,i.Uk)("Please note that "),(0,i._)("strong",null,[(0,i._)("code",{class:"doc-token"},"mini"),(0,i.Uk)(" mode")]),(0,i.Uk)(" does not apply when in "),(0,i._)("strong",null,"mobile"),(0,i.Uk)(" behavior.")])],-1),p=(0,i._)("p",null,"There are some CSS classes that will help you customize the drawer when dealing with “mini” mode. These are very useful especially when using the “click” trigger:",-1),y=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th",{class:"text-left"},"CSS Class"),(0,i._)("th",{class:"text-left"},"Description")])],-1),g=(0,i._)("tbody",null,[(0,i._)("tr",null,[(0,i._)("td",null,[(0,i._)("code",{class:"doc-token"},"q-mini-drawer-hide")]),(0,i._)("td",null,"Hide when drawer is in “mini” mode.")]),(0,i._)("tr",null,[(0,i._)("td",null,[(0,i._)("code",{class:"doc-token"},"q-mini-drawer-only")]),(0,i._)("td",null,"Show only when drawer is in “mini” mode.")])],-1),k=(0,i._)("p",null,[(0,i.Uk)("You can also write your own CSS classes based on the fact that QLayoutDrawer has "),(0,i._)("code",{class:"doc-token"},"q-drawer--standard"),(0,i.Uk)(" CSS class when in “normal” mode and "),(0,i._)("code",{class:"doc-token"},"q-drawer--mini"),(0,i.Uk)(" when in “mini” mode. Also, when drawer is in “mobile” behavior, it gets "),(0,i._)("code",{class:"doc-token"},"q-drawer--mobile"),(0,i.Uk)(" CSS class.")],-1),_=(0,i._)("p",null,[(0,i.Uk)("Consider using QItems with routing props (like "),(0,i._)("code",{class:"doc-token"},"to"),(0,i.Uk)(") below. For demoing purposes these props have not been added as it would break the UMD version.")],-1),f=(0,i._)("p",null,[(0,i.Uk)("The "),(0,i._)("code",{class:"doc-token"},"mini-to-overlay"),(0,i.Uk)(" Boolean property will always set your drawer with fixed position, regardless of your configuration from the "),(0,i._)("code",{class:"doc-token"},"view"),(0,i.Uk)(" prop, but will occupy space on the layout only as wide as when in mini-mode.")],-1),b=(0,i._)("p",null,"In the example below, when in “mini” mode, if the user clicks on Drawer then we switch to normal mode.",-1),v=(0,i._)("p",null,[(0,i.Uk)("Consider using QItems with routing props (like "),(0,i._)("code",{class:"doc-token"},"to"),(0,i.Uk)(") below. For demoing purposes these props have not been added as it would break the UMD version.")],-1),D=(0,i._)("p",null,"By default, when in “mini” mode, Quasar CSS hides a few DOM elements to provide a neat narrow drawer. But there may certainly be use-cases where you need a deep tweak. You can use the “mini” Vue slot of QLayoutDrawer just for that. The content of this slot will replace your drawer’s default content when in “mini” mode.",-1),Q=(0,i._)("p",null,[(0,i.Uk)("The overlay mode prevents the drawer from occupying space on the layout and rather hover over the page instead. This will always set your drawer with fixed position, regardless of your configuration from the "),(0,i._)("code",{class:"doc-token"},"view"),(0,i.Uk)(" prop.")],-1),U=(0,i._)("p",null,"On the example below, click the menu icon to see the drawer in action. It’s best viewed on a desktop with a window of at least 500px width (this is the breakpoint that is set on this demo).",-1);function C(e,o,t,C,M,S){const W=(0,i.up)("doc-link"),L=(0,i.up)("doc-api"),H=(0,i.up)("q-btn"),B=(0,i.up)("doc-example"),I=(0,i.up)("q-markup-table"),q=(0,i.up)("doc-page");return(0,i.wg)(),(0,i.j4)(q,{"meta-title":C.metaTitle,title:"Layout Drawer",related:C.related,toc:C.toc,"meta-desc":C.metaDesc},{default:(0,i.w5)((()=>[(0,i._)("p",null,[a,(0,i.Wm)(W,{to:"/layout/layout"},{default:(0,i.w5)((()=>[n])),_:1}),l]),r,(0,i._)("h2",{id:"qdrawer-api",class:"doc-heading doc-h2",onClick:o[0]||(o[0]=e=>C.copyHeading("qdrawer-api"))},"QDrawer API"),(0,i.Wm)(L,{file:"QDrawer"}),(0,i._)("h2",{id:"layout-builder",class:"doc-heading doc-h2",onClick:o[1]||(o[1]=e=>C.copyHeading("layout-builder"))},"Layout Builder"),s,(0,i.Wm)(H,{push:"",color:"brand-primary","icon-right":"launch",label:"Layout Builder",href:"layout-builder",target:"_blank",rel:"noopener noreferrer"}),(0,i._)("h2",{id:"usage",class:"doc-heading doc-h2",onClick:o[2]||(o[2]=e=>C.copyHeading("usage"))},"Usage"),d,c,u,(0,i._)("h3",{id:"basic",class:"doc-heading doc-h3",onClick:o[3]||(o[3]=e=>C.copyHeading("basic"))},"Basic"),(0,i.Wm)(B,{title:"Basic",file:"QDrawer/Basic"}),h,(0,i.Wm)(B,{title:"With navigation menu",file:"QDrawer/Menu"}),(0,i.Wm)(B,{title:"Seamless menu",file:"QDrawer/MenuSeamless"}),(0,i.Wm)(B,{title:"Header Picture",file:"QDrawer/HeaderPicture"}),(0,i._)("h3",{id:"mini-mode",class:"doc-heading doc-h3",onClick:o[4]||(o[4]=e=>C.copyHeading("mini-mode"))},"Mini-mode"),w,m,p,(0,i.Wm)(I,{"wrap-cells":!0,flat:!0,bordered:!0,style:{width:"fit-content","max-width":"100%"}},{default:(0,i.w5)((()=>[y,g])),_:1}),k,(0,i._)("h4",{id:"mouseover-mouseout-trigger",class:"doc-heading doc-h4",onClick:o[5]||(o[5]=e=>C.copyHeading("mouseover-mouseout-trigger"))},"Mouseover/mouseout trigger"),_,(0,i.Wm)(B,{title:"Mini-mode with mouseover/mouseout trigger",file:"QDrawer/MiniMouseEvents"}),(0,i._)("h4",{id:"mini-to-overlay",class:"doc-heading doc-h4",onClick:o[6]||(o[6]=e=>C.copyHeading("mini-to-overlay"))},"Mini to overlay"),f,(0,i.Wm)(B,{title:"Mini to overlay",file:"QDrawer/MiniToOverlay"}),(0,i._)("h4",{id:"click-trigger",class:"doc-heading doc-h4",onClick:o[7]||(o[7]=e=>C.copyHeading("click-trigger"))},"Click trigger"),b,v,(0,i.Wm)(B,{title:"Mini-mode with click trigger",file:"QDrawer/MiniClickEvent"}),(0,i._)("h4",{id:"slots",class:"doc-heading doc-h4",onClick:o[8]||(o[8]=e=>C.copyHeading("slots"))},"Slots"),D,(0,i.Wm)(B,{title:"Mini-mode with slot",file:"QDrawer/MiniSlot"}),(0,i._)("h3",{id:"overlay-mode",class:"doc-heading doc-h3",onClick:o[9]||(o[9]=e=>C.copyHeading("overlay-mode"))},"Overlay mode"),Q,U,(0,i.Wm)(B,{title:"Overlay mode",file:"QDrawer/OverlayMode"})])),_:1},8,["meta-title","related","toc","meta-desc"])}var M=t(17536);const S={name:"DocMarkdownPage",setup(){return{metaTitle:"Layout Drawer",metaDesc:"How to use the QDrawer component. The sidebars of your Quasar app.",related:[{name:"布局",category:"布局和网格",path:"/layout/layout"},{name:"列表和列表项",category:"Vue 组件",path:"/vue-components/list-and-list-items"}],toc:[{id:"qdrawer-api",title:"QDrawer API"},{id:"layout-builder",title:"Layout Builder"},{id:"usage",title:"Usage"},{id:"basic",title:"Basic",sub:!0},{id:"mini-mode",title:"Mini-mode",sub:!0},{id:"overlay-mode",title:"Overlay mode",sub:!0}],copyHeading:M.Et}}};var W=t(74260);const L=(0,W.Z)(S,[["render",C]]),H=L}}]);