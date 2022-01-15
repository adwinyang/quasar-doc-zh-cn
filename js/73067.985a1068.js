"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[73067],{73067:(e,t,l)=>{l.r(t),l.d(t,{default:()=>Q});var o=l(83673);const i=(0,o._)("p",null,"The QVirtualScroll component allows you to display only a part of a long list of items and update the visible items as the user scrolls in the container. This has several advantages: only visible items are rendered, so the smallest number of nodes are in the DOM tree at any given point in time and the memory consumption is kept at its lowest.",-1),a=(0,o._)("p",null,"There are currently two types of QVirtualScroll: “list” (using QItems) and “table” (using a tabular style to display rows of data).",-1),s=(0,o._)("div",{class:"doc-note doc-note--tip"},[(0,o._)("p",{class:"doc-note__title"},"TIP"),(0,o._)("ul",null,[(0,o._)("li",null,[(0,o.Uk)("(Composition API) To get the best performance while using large lists, do not wrap the array that you are passing in the "),(0,o._)("code",{class:"doc-token"},"items"),(0,o.Uk)(" prop with ref()/computed()/reactive()/etc. This allows Vue to skip making the list “responsive” to changes.")]),(0,o._)("li",null,[(0,o.Uk)("(Options API) To get the best performance while using large lists, freeze the array that you are passing in the "),(0,o._)("code",{class:"doc-token"},"items"),(0,o.Uk)(" prop using "),(0,o._)("code",{class:"doc-token"},"Object.freeze(items)"),(0,o.Uk)(". This allows Vue to skip making the list “responsive” to changes.")]),(0,o._)("li",null,[(0,o.Uk)("The number of items that will be rendered will be calculated based on the "),(0,o._)("code",{class:"doc-token"},"virtual-scroll-item-size"),(0,o.Uk)(" prop and the size of the scrollable area, but you can fit it to your needs using the "),(0,o._)("code",{class:"doc-token"},"virtual-scroll-slice-size"),(0,o.Uk)(" prop.")]),(0,o._)("li",null,[(0,o.Uk)("Use the "),(0,o._)("code",{class:"doc-token"},"virtual-scroll-item-size"),(0,o.Uk)(" to specify the size of elements (pixels of height, or width if horizontal). After an element is rendered on screen its size is updated automatically, but if you specify an element size close to the real size you’ll get a better initial indication of the scroll position. Regardless if you will be using this property or not, QVirtualScroll will still work, but without it you may experience the scrollbar not following the mouse grab position while continuously scrolling (on desktop) or the actual scroll of the container getting slightly off by one or two elements when on mobile and continuously scrolling.")])])],-1),n=(0,o._)("div",{class:"doc-note doc-note--warning"},[(0,o._)("p",{class:"doc-note__title"},"WARNING"),(0,o._)("p",null,"There is a maximum height of the scrolling container, imposed by each browser. In IE11 this is around 1,000,000px, while in the rest of the browsers it’s much more, but still limited.")],-1),r=(0,o._)("p",null,"Scroll the examples below to see QVirtualScroll in action.",-1),c=(0,o._)("p",null,[(0,o.Uk)("Notice the "),(0,o._)("code",{class:"doc-token"},'type="table"'),(0,o.Uk)(" property.")],-1),d=(0,o._)("p",null,"With header that scrolls along with content (doesn’t stay in place).",-1),u=(0,o._)("p",null,"Notice (in the example below) the CSS required to make the table header and footer “sticky”. Also note the additional scoped slots which define the header and footer content.",-1),h=(0,o._)("p",null,"A more involved example below, playing with sticky headers and footers.",-1),p=(0,o._)("p",null,[(0,o.Uk)("If you need to specify the scroll target (because the auto detected one is not the desired one) pass a CSS selector (as string) or the DOM element to the "),(0,o._)("code",{class:"doc-token"},"scroll-target"),(0,o.Uk)(" prop.")],-1),m=(0,o._)("p",null,[(0,o.Uk)("If you need to use the virtual list with the whole page as the scrolling element then please set "),(0,o._)("code",{class:"doc-token"},'scroll-target="body"'),(0,o.Uk)(".")],-1),g=(0,o._)("div",{class:"doc-note doc-note--warning"},[(0,o._)("p",{class:"doc-note__title"},"WARNING"),(0,o._)("ul",null,[(0,o._)("li",null,[(0,o.Uk)("If you pass a custom scroll target container with "),(0,o._)("code",{class:"doc-token"},"scroll-target"),(0,o.Uk)(" prop you must make sure that the element exists and that it can be overflowed (it must have a maximum height and an overflow that allows scrolling).")]),(0,o._)("li",null,"If the scroll target container cannot be overflowed you’ll get the whole list rendered.")])],-1),y=(0,o._)("div",{class:"doc-note doc-note--danger"},[(0,o._)("p",{class:"doc-note__title"},"WARNING"),(0,o._)("p",null,[(0,o.Uk)("If you want to use a Vue reference for "),(0,o._)("code",{class:"doc-token"},"scroll-target"),(0,o.Uk)(", please take care to set it after mounting the component, like in the example below.")])],-1),f=(0,o._)("p",null,[(0,o.Uk)("You can also generate the items to be displayed on the list by using the "),(0,o._)("code",{class:"doc-token"},"items-fn"),(0,o.Uk)(" prop.")],-1),b=(0,o._)("div",{class:"doc-note doc-note--warning"},[(0,o._)("p",{class:"doc-note__title"},"WARNING"),(0,o._)("p",null,"Make sure to use a synchronous function that returns the list of items to be displayed.")],-1),k=(0,o._)("p",null,"If you need async data use a component that retrieves and renders the data.",-1),_=(0,o._)("p",null,"There are two CSS classes that you can use (should you need to) to control VirtualScroll size calculation:",-1),w=(0,o._)("ul",null,[(0,o._)("li",null,[(0,o.Uk)("Use "),(0,o._)("code",{class:"doc-token"},"q-virtual-scroll--with-prev"),(0,o.Uk)(" class on an element rendered by the VirtualScroll to indicate the element should be grouped with the previous one (main use case is for multiple table rows generated from the same row of data).")]),(0,o._)("li",null,[(0,o.Uk)("Use "),(0,o._)("code",{class:"doc-token"},"q-virtual-scroll--skip"),(0,o.Uk)(" class on an element rendered by the VirtualScroll to indicate the element size should be ignored in size calculations.")])],-1);function S(e,t,l,S,v,V){const U=(0,o.up)("doc-api"),T=(0,o.up)("doc-example"),Q=(0,o.up)("doc-page");return(0,o.wg)(),(0,o.j4)(Q,{"meta-title":S.metaTitle,title:"Virtual Scroll",related:S.related,toc:S.toc,"meta-desc":S.metaDesc},{default:(0,o.w5)((()=>[i,a,(0,o._)("h2",{id:"qvirtualscroll-api",class:"doc-heading doc-h2",onClick:t[0]||(t[0]=e=>S.copyHeading("qvirtualscroll-api"))},"QVirtualScroll API"),(0,o.Wm)(U,{file:"QVirtualScroll"}),(0,o._)("h2",{id:"usage",class:"doc-heading doc-h2",onClick:t[1]||(t[1]=e=>S.copyHeading("usage"))},"Usage"),s,n,r,(0,o._)("h3",{id:"basic",class:"doc-heading doc-h3",onClick:t[2]||(t[2]=e=>S.copyHeading("basic"))},"Basic"),(0,o.Wm)(T,{title:"Basic",file:"QVirtualScroll/Basic"}),(0,o._)("h3",{id:"horizontal",class:"doc-heading doc-h3",onClick:t[3]||(t[3]=e=>S.copyHeading("horizontal"))},"Horizontal"),(0,o.Wm)(T,{title:"Horizontal",file:"QVirtualScroll/BasicHorizontal"}),(0,o._)("h3",{id:"different-templates",class:"doc-heading doc-h3",onClick:t[4]||(t[4]=e=>S.copyHeading("different-templates"))},"Different templates"),(0,o.Wm)(T,{title:"Different templates for items",file:"QVirtualScroll/VariousContent"}),(0,o.Wm)(T,{title:"Different templates for horizontal items",file:"QVirtualScroll/VariousContentHorizontal"}),(0,o._)("h3",{id:"table-type",class:"doc-heading doc-h3",onClick:t[5]||(t[5]=e=>S.copyHeading("table-type"))},"Table type"),c,(0,o.Wm)(T,{title:"Basic table",file:"QVirtualScroll/TableBasic"}),d,(0,o.Wm)(T,{title:"Table with scrolling header/footer",file:"QVirtualScroll/TableBasicHeader"}),u,(0,o.Wm)(T,{title:"Sticky headers table",file:"QVirtualScroll/TableSticky"}),h,(0,o.Wm)(T,{title:"Playing with sticky headers",file:"QVirtualScroll/TableSticky2"}),(0,o._)("h3",{id:"scroll-target",class:"doc-heading doc-h3",onClick:t[6]||(t[6]=e=>S.copyHeading("scroll-target"))},"Scroll target"),p,m,g,y,(0,o.Wm)(T,{title:"Custom scroll target by id",file:"QVirtualScroll/ScrollTargetId"}),(0,o.Wm)(T,{title:"Custom scroll target by ref",file:"QVirtualScroll/ScrollTargetRef"}),(0,o.Wm)(T,{title:"Using QScrollArea",file:"QVirtualScroll/ScrollArea"}),(0,o._)("h3",{id:"scroll-to-position",class:"doc-heading doc-h3",onClick:t[7]||(t[7]=e=>S.copyHeading("scroll-to-position"))},"Scroll to position"),(0,o.Wm)(T,{title:"Scroll to position",file:"QVirtualScroll/ScrollTo"}),(0,o._)("h3",{id:"sync-and-async",class:"doc-heading doc-h3",onClick:t[8]||(t[8]=e=>S.copyHeading("sync-and-async"))},"Sync and async"),f,b,k,(0,o.Wm)(T,{title:"Generate items on the fly",file:"QVirtualScroll/GenerateItems"}),(0,o._)("h3",{id:"utility-classes",class:"doc-heading doc-h3",onClick:t[9]||(t[9]=e=>S.copyHeading("utility-classes"))},"Utility classes"),_,w,(0,o.Wm)(T,{title:"Virtual scroll with multiple rows for a data row",file:"QTable/VirtscrollMultipleRows"}),(0,o.Wm)(T,{title:"Virtual scroll with expansion model",file:"QTable/VirtscrollExpandedRow"})])),_:1},8,["meta-title","related","toc","meta-desc"])}var v=l(17536);const V={name:"DocMarkdownPage",setup(){return{metaTitle:"Virtual Scroll",metaDesc:"The QVirtualScroll component renders a big list of items as the user scrolls in the container, keeping DOM tree clean and eating the lowest amount of memory possible.",related:[{name:"选择框",category:"表单组件",path:"/vue-components/select"},{name:"无限滚动",category:"Vue 组件",path:"/vue-components/infinite-scroll"}],toc:[{id:"qvirtualscroll-api",title:"QVirtualScroll API"},{id:"usage",title:"Usage"},{id:"basic",title:"Basic",sub:!0},{id:"horizontal",title:"Horizontal",sub:!0},{id:"different-templates",title:"Different templates",sub:!0},{id:"table-type",title:"Table type",sub:!0},{id:"scroll-target",title:"Scroll target",sub:!0},{id:"scroll-to-position",title:"Scroll to position",sub:!0},{id:"sync-and-async",title:"Sync and async",sub:!0},{id:"utility-classes",title:"Utility classes",sub:!0}],copyHeading:v.Et}}};var U=l(74260);const T=(0,U.Z)(V,[["render",S]]),Q=T}}]);