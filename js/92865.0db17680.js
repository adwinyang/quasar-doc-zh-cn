"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[92865],{92865:(e,t,o)=>{o.r(t),o.d(t,{default:()=>x});var n=o(83673);const i=(0,n.Uk)("The QIntersection component is essentially a wrapper over the "),s=(0,n.Uk)("Intersection directive"),a=(0,n.Uk)(" with the added benefit that it handles the state by itself (does not require you to add it and handle it manually) and can optionally have a show/hide transition as well."),l=(0,n._)("p",null,[(0,n.Uk)("The main benefit of using QIntersection is, however, that the DOM tree is freed up of hidden nodes thus using the minimum possible RAM memory and making the page feel very snappy. As well, you can specify the "),(0,n._)("code",{class:"doc-token"},"tag"),(0,n.Uk)(" property for the wrapper element to match your own needs, thus eliminating yet another DOM node.")],-1),r=(0,n.Uk)("Under the hood, it uses the "),c=(0,n.Uk)("Intersection Observer API"),d=(0,n.Uk)("."),h={class:"doc-note doc-note--warning"},p=(0,n._)("p",{class:"doc-note__title"},"WARNING",-1),u=(0,n.Uk)("Not all browsers support the Intersection Observer API. Most "),m=(0,n.Uk)("modern browsers"),w=(0,n.Uk)(" do, but other browsers do not. If you need to support older browsers, you can install and import (into a boot file) the official W3C "),g=(0,n.Uk)("polyfill"),f=(0,n.Uk)("."),y=(0,n._)("div",{class:"doc-note doc-note--warning"},[(0,n._)("p",{class:"doc-note__title"},"WARNING"),(0,n._)("p",null,"In most cases, it is required that you apply CSS to the QIntersection element so that it acts as a necessary filler when the inner content is not rendered. This will allow for a smooth scrolling experience, because otherwise the scroll will jump erratically."),(0,n._)("p",null,"An example of such needed CSS would be, for example, a fixed height or at least a min-height (and possibly even a fixed width, as in the examples below, where multiple QIntersections can be displayed on same row).")],-1),_=(0,n._)("div",{class:"doc-note doc-note--danger"},[(0,n._)("p",{class:"doc-note__title"},"WARNING"),(0,n._)("p",null,[(0,n.Uk)("If using the "),(0,n._)("code",{class:"doc-token"},"transition"),(0,n.Uk)(" prop, it is required that the content be wrapped in one and only one element.")])],-1),b=(0,n._)("div",{class:"doc-note doc-note--tip"},[(0,n._)("p",{class:"doc-note__title"},"TIP"),(0,n._)("p",null,[(0,n.Uk)("There are edge cases where the default viewport won’t work. For instance, when your code is hosted in an iframe (like Codepen). This is where you need to use the "),(0,n._)("code",{class:"doc-token"},"root"),(0,n.Uk)(" property. It allows you to define an alternative to the viewport as your root (through its DOM element). It is important to keep in mind that root needs to be an ancestor of the observed element.")])],-1),k=(0,n.Uk)("In the example below we used a Quasar transition. For a full list, please head to "),I=(0,n.Uk)("Transitions"),v=(0,n.Uk)(" page."),U=(0,n._)("p",null,"Triggering only once means, however, that you lose the benefit of freeing up the DOM tree. The content will remain in DOM regardless of visibility.",-1),W=(0,n._)("p",null,[(0,n.Uk)("The example below uses the "),(0,n._)("code",{class:"doc-token"},"root"),(0,n.Uk)(" property and therefore can be seen in a Codepen (which hosts in an iframe).")],-1);function T(e,t,o,T,Q,A){const C=(0,n.up)("doc-link"),O=(0,n.up)("doc-api"),x=(0,n.up)("doc-example"),q=(0,n.up)("doc-page");return(0,n.wg)(),(0,n.j4)(q,{"meta-title":T.metaTitle,title:"Intersection",related:T.related,toc:T.toc,"meta-desc":T.metaDesc},{default:(0,n.w5)((()=>[(0,n._)("p",null,[i,(0,n.Wm)(C,{to:"/vue-directives/intersection"},{default:(0,n.w5)((()=>[s])),_:1}),a]),l,(0,n._)("p",null,[r,(0,n.Wm)(C,{to:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"},{default:(0,n.w5)((()=>[c])),_:1}),d]),(0,n._)("div",h,[p,(0,n._)("p",null,[u,(0,n.Wm)(C,{to:"https://caniuse.com/#search=intersection"},{default:(0,n.w5)((()=>[m])),_:1}),w,(0,n.Wm)(C,{to:"https://github.com/w3c/IntersectionObserver"},{default:(0,n.w5)((()=>[g])),_:1}),f])]),(0,n._)("h2",{id:"qintersection-api",class:"doc-heading doc-h2",onClick:t[0]||(t[0]=e=>T.copyHeading("qintersection-api"))},"QIntersection API"),(0,n.Wm)(O,{file:"QIntersection"}),(0,n._)("h2",{id:"usage",class:"doc-heading doc-h2",onClick:t[1]||(t[1]=e=>T.copyHeading("usage"))},"Usage"),y,_,b,(0,n._)("h3",{id:"basic",class:"doc-heading doc-h3",onClick:t[2]||(t[2]=e=>T.copyHeading("basic"))},"Basic"),(0,n.Wm)(x,{title:"Basic",file:"QIntersection/Basic",scrollable:"","no-edit":""}),(0,n._)("h3",{id:"with-transition",class:"doc-heading doc-h3",onClick:t[3]||(t[3]=e=>T.copyHeading("with-transition"))},"With transition"),(0,n._)("p",null,[k,(0,n.Wm)(C,{to:"/options/transitions"},{default:(0,n.w5)((()=>[I])),_:1}),v]),(0,n.Wm)(x,{title:"With transition",file:"QIntersection/Transition",scrollable:"","no-edit":""}),(0,n.Wm)(x,{title:"A list with transition",file:"QIntersection/List",scrollable:"","no-edit":""}),(0,n._)("h3",{id:"only-once",class:"doc-heading doc-h3",onClick:t[4]||(t[4]=e=>T.copyHeading("only-once"))},"Only once"),U,(0,n.Wm)(x,{title:"Triggering only once",file:"QIntersection/Once",scrollable:"","no-edit":""}),W,(0,n.Wm)(x,{title:"Root viewport",file:"QIntersection/Root",scrollable:""})])),_:1},8,["meta-title","related","toc","meta-desc"])}var Q=o(17536);const A={name:"DocMarkdownPage",setup(){return{metaTitle:"Intersection",metaDesc:"The QIntersection vue component, a wrapper over Quasar's Intersection directive.",related:[{name:"交叉点",category:"Vue 指令",path:"/vue-directives/intersection"},{name:"过渡",category:"选项和辅助",path:"/options/transitions"}],toc:[{id:"qintersection-api",title:"QIntersection API"},{id:"usage",title:"Usage"},{id:"basic",title:"Basic",sub:!0},{id:"with-transition",title:"With transition",sub:!0},{id:"only-once",title:"Only once",sub:!0}],copyHeading:Q.Et}}};var C=o(74260);const O=(0,C.Z)(A,[["render",T]]),x=O}}]);