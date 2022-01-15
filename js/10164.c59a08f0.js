"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[10164],{10164:(e,l,t)=>{t.r(l),t.d(l,{default:()=>S});var n=t(83673);const o=(0,n._)("p",null,"QInfiniteScroll组件允许你在用户滚动页面时加载新内容。",-1),c=(0,n._)("div",{class:"doc-note doc-note--tip"},[(0,n._)("p",{class:"doc-note__title"},"TIP"),(0,n._)("p",null,[(0,n.Uk)("当剩余的像素小于"),(0,n._)("code",{class:"doc-token"},"offset"),(0,n.Uk)("(默认=500)时，无限滚动会提前加载项目。如果你获取的内容在屏幕上的高度小于滚动目标容器的高度，那么Infinite Scroll将继续加载更多的内容。所以要确保你加载足够的内容。")])],-1),i=(0,n._)("div",{class:"doc-note doc-note--tip"},[(0,n._)("p",{class:"doc-note__title"},"TIP"),(0,n._)("p",null,[(0,n.Uk)("在你的"),(0,n._)("code",{class:"doc-token"},"@load"),(0,n.Uk)("函数中，别忘了在你完成加载更多的数据时调用传入的"),(0,n._)("code",{class:"doc-token"},"done()"),(0,n.Uk)("函数。")])],-1),a=(0,n._)("p",null,"滚动到底部可以看到QInfiniteScroll的操作。",-1),s=(0,n._)("p",null,"<doc-example title=“基础” file=“QInfiniteScroll/Basic” 可滚动 />",-1),d={class:"doc-note doc-note--tip"},r=(0,n._)("p",{class:"doc-note__title"},"Scrolling container",-1),u=(0,n.Uk)("请阅读"),p=(0,n.Uk)("这里"),_=(0,n.Uk)("关于Quasar如何确定将滚动事件附加到的容器。"),m=(0,n._)("ul",null,[(0,n._)("li",null,"当作为渲染你的页面的Vue组件的直接子代时，效果最好。"),(0,n._)("li",null,[(0,n.Uk)("如果你改变了这个组件的父级，别忘了在QInfiniteScroll Vue引用上调用"),(0,n._)("code",{class:"doc-token"},"updateScrollTarget()"),(0,n.Uk)("。")]),(0,n._)("li",null,[(0,n.Uk)("如果你需要指定滚动目标的内部元素(因为自动检测的元素不是你想要的)，在"),(0,n._)("code",{class:"doc-token"},"scroll-target"),(0,n.Uk)("属性中传递一个CSS选择器(作为字符串)或DOM元素。")])],-1),g=(0,n._)("div",{class:"doc-note doc-note--warning"},[(0,n._)("p",{class:"doc-note__title"},"WARNING"),(0,n._)("p",null,[(0,n.Uk)("如果你用"),(0,n._)("code",{class:"doc-token"},"scroll-target"),(0,n.Uk)("属性传递一个自定义的滚动目标容器，你必须确保该元素的存在，并且它可以被溢出(它必须有一个最大高度和一个允许滚动的溢出)。")]),(0,n._)("p",null,"如果滚动目标容器不能被溢出，你会得到一个永远加载的情况。")],-1);function k(e,l,t,k,f,v){const h=(0,n.up)("doc-api"),I=(0,n.up)("doc-example"),S=(0,n.up)("doc-link"),U=(0,n.up)("doc-page");return(0,n.wg)(),(0,n.j4)(U,{"meta-title":k.metaTitle,title:"无限卷轴",related:k.related,nav:k.nav,toc:k.toc,"meta-desc":k.metaDesc},{default:(0,n.w5)((()=>[o,(0,n._)("h2",{id:"qinfinitescroll-api",class:"doc-heading doc-h2",onClick:l[0]||(l[0]=e=>k.copyHeading("qinfinitescroll-api"))},"QInfiniteScroll API"),(0,n.Wm)(h,{file:"QInfiniteScroll"}),(0,n._)("h2",{id:"使用方法",class:"doc-heading doc-h2",onClick:l[1]||(l[1]=e=>k.copyHeading("使用方法"))},"使用方法"),c,i,a,s,(0,n.Wm)(I,{title:"自定义滚动目标容器",file:"QInfiniteScroll/Container"}),(0,n.Wm)(I,{title:"反转(Messenger风格)",file:"QInfiniteScroll/Reverse",scrollable:""}),(0,n._)("h3",{id:"提示",class:"doc-heading doc-h3",onClick:l[2]||(l[2]=e=>k.copyHeading("提示"))},"提示"),(0,n._)("div",d,[r,(0,n._)("p",null,[u,(0,n.Wm)(S,{to:"/vue-components/scroll-observer#determining-scrolling-container"},{default:(0,n.w5)((()=>[p])),_:1}),_])]),m,g,(0,n.Wm)(I,{title:"QMenu中的用法",file:"QInfiniteScroll/Menu"})])),_:1},8,["meta-title","related","nav","toc","meta-desc"])}var f=t(17536);const v={name:"DocMarkdownPage",setup(){return{metaTitle:"无限卷轴",metaDesc:"QInfiniteScroll Vue组件允许你在用户滚动页面时加载新内容。",related:[{name:"旋转器",category:"Vue 组件",path:"/vue-components/spinners"},{name:"下拉刷新",category:"Vue 组件",path:"/vue-components/pull-to-refresh"},{name:"交叉点",category:"Vue 组件",path:"/vue-components/intersection"},{name:"虚拟滚动",category:"Vue 组件",path:"/vue-components/virtual-scroll"}],nav:[{name:"印象",category:"Vue 组件",path:"/vue-components/img",dir:"left"},{name:"内部加载",category:"Vue 组件",path:"/vue-components/inner-loading",dir:"right"}],toc:[{id:"qinfinitescroll-api",title:"QInfiniteScroll API"},{id:"使用方法",title:"使用方法"},{id:"提示",title:"提示",sub:!0}],copyHeading:f.Et}}};var h=t(74260);const I=(0,h.Z)(v,[["render",k]]),S=I}}]);