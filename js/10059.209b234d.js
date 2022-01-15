"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[10059],{10059:(a,e,t)=>{t.r(e),t.d(e,{default:()=>f});var n=t(83673);const s=(0,n._)("p",null,[(0,n.Uk)("Quasar 提供了全功能的Vue指令，可以完全取代Hammerjs等库："),(0,n._)("code",{class:"doc-token"},"v-touch-pan"),(0,n.Uk)(", "),(0,n._)("code",{class:"doc-token"},"v-touch-swipe"),(0,n.Uk)(", "),(0,n._)("code",{class:"doc-token"},"v-touch-hold"),(0,n.Uk)(" 和 "),(0,n._)("code",{class:"doc-token"},"v-touch-repeat"),(0,n.Uk)("。")],-1),o=(0,n._)("blockquote",{class:"doc-note"},[(0,n._)("p",null,[(0,n._)("strong",null,"这些指令也适用于鼠标事件，而不仅仅是触摸事件"),(0,n.Uk)("，所以你也能够在桌面上为你的应用程序建立很酷的功能。")])],-1),c=(0,n._)("p",null,[(0,n.Uk)("我们将在下面的行中描述"),(0,n._)("code",{class:"doc-token"},"v-touch-repeat"),(0,n.Uk)("。")],-1),l=(0,n._)("p",null,"用你的鼠标在下面的区域点击并按住，看看它的操作情况。 注意，在具有触摸功能的设备上，滚动不会被阻止。",-1),p=(0,n._)("blockquote",{class:"doc-note"},[(0,n._)("p",null,"默认的重复模式是0:600:300(ms)。")],-1),u=(0,n._)("p",null,[(0,n.Uk)("下面是一个示例，配置成也对"),(0,n._)("code",{class:"doc-token"},"SPACE"),(0,n.Uk)("、"),(0,n._)("code",{class:"doc-token"},"ENTER"),(0,n.Uk)("和"),(0,n._)("code",{class:"doc-token"},"h"),(0,n.Uk)("键做出反应("),(0,n._)("strong",null,"先关注它"),(0,n.Uk)(")，重复模式为0:300:200(ms)。点击并按住按键，或点击/轻拍并按住。")],-1),k=(0,n._)("p",null,"下面是一个将TouchRepeat应用于QBtn的示例。注意我们是如何玩弄指令参数的，以便使蓝色按钮的增量比红色按钮的增量慢。",-1),d=(0,n._)("p",null,[(0,n.Uk)("当你也想处理鼠标事件时，使用"),(0,n._)("code",{class:"doc-token"},"mouse"),(0,n.Uk)("修饰符。")],-1),_=(0,n._)("pre",{class:"doc-code language-html"},[(0,n._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token punctuation"},"<"),(0,n.Uk)("div")]),(0,n.Uk)(),(0,n._)("span",{class:"token attr-name"},"v-touch-repeat.mouse"),(0,n._)("span",{class:"token attr-value"},[(0,n._)("span",{class:"token punctuation attr-equals"},"="),(0,n._)("span",{class:"token punctuation"},'"'),(0,n.Uk)("myHandler"),(0,n._)("span",{class:"token punctuation"},'"')]),(0,n._)("span",{class:"token punctuation"},">")]),(0,n.Uk)("..."),(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token punctuation"},"</"),(0,n.Uk)("div")]),(0,n._)("span",{class:"token punctuation"},">")]),(0,n.Uk)("\n")])],-1),i=(0,n.Uk)("当你也想处理按键事件时，使用"),r=(0,n.Uk)("keycodes"),h=(0,n.Uk)("作为修饰语。"),U=(0,n._)("pre",{class:"doc-code language-html"},[(0,n._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token punctuation"},"<"),(0,n.Uk)("div")]),(0,n.Uk)(),(0,n._)("span",{class:"token attr-name"},"v-touch-repeat.65.70"),(0,n._)("span",{class:"token attr-value"},[(0,n._)("span",{class:"token punctuation attr-equals"},"="),(0,n._)("span",{class:"token punctuation"},'"'),(0,n.Uk)("myHandler"),(0,n._)("span",{class:"token punctuation"},'"')]),(0,n._)("span",{class:"token punctuation"},">")]),(0,n.Uk)("..."),(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token punctuation"},"</"),(0,n.Uk)("div")]),(0,n._)("span",{class:"token punctuation"},">")]),(0,n.Uk)("\n")])],-1),g=(0,n._)("p",null,[(0,n.Uk)("有一些特殊的修饰语，你不需要写出相应的键码。"),(0,n._)("code",{class:"doc-token"},"space"),(0,n.Uk)(", "),(0,n._)("code",{class:"doc-token"},"tab"),(0,n.Uk)(", "),(0,n._)("code",{class:"doc-token"},"enter"),(0,n.Uk)(".")],-1),m=(0,n._)("p",null,[(0,n.Uk)("当你想抑制TouchRepeat时，你可以通过停止传播内部内容的"),(0,n._)("code",{class:"doc-token"},"touchstart"),(0,n.Uk)("/"),(0,n._)("code",{class:"doc-token"},"mousedown"),(0,n.Uk)("/"),(0,n._)("code",{class:"doc-token"},"keydown"),(0,n.Uk)("事件来实现。")],-1),v=(0,n._)("pre",{class:"doc-code language-html"},[(0,n._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token punctuation"},"<"),(0,n.Uk)("div")]),(0,n.Uk)(),(0,n._)("span",{class:"token attr-name"},"v-touch-repeat.mouse.enter"),(0,n._)("span",{class:"token attr-value"},[(0,n._)("span",{class:"token punctuation attr-equals"},"="),(0,n._)("span",{class:"token punctuation"},'"'),(0,n.Uk)("userHasHold"),(0,n._)("span",{class:"token punctuation"},'"')]),(0,n._)("span",{class:"token punctuation"},">")]),(0,n.Uk)("\n  "),(0,n._)("span",{class:"token comment"},"\x3c!-- ...内容 --\x3e"),(0,n.Uk)("\n  "),(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token punctuation"},"<"),(0,n.Uk)("div")]),(0,n.Uk)(),(0,n._)("span",{class:"token attr-name"},"@touchstart.stop"),(0,n.Uk)(),(0,n._)("span",{class:"token attr-name"},"@mousedown.stop"),(0,n.Uk)(),(0,n._)("span",{class:"token attr-name"},"@keydown.stop"),(0,n._)("span",{class:"token punctuation"},">")]),(0,n.Uk)("\n    "),(0,n._)("span",{class:"token comment"},"\x3c!--\n      TouchRepeat 不适用于此处，因为\n      我们在 touchstart 上调用 stopPropagation()，\n      mousedown 和 keydown 事件    --\x3e"),(0,n.Uk)("\n  "),(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token punctuation"},"</"),(0,n.Uk)("div")]),(0,n._)("span",{class:"token punctuation"},">")]),(0,n.Uk)("\n  "),(0,n._)("span",{class:"token comment"},"\x3c!-- ...内容 --\x3e"),(0,n.Uk)("\n"),(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token tag"},[(0,n._)("span",{class:"token punctuation"},"</"),(0,n.Uk)("div")]),(0,n._)("span",{class:"token punctuation"},">")]),(0,n.Uk)("\n")])],-1),y=(0,n._)("p",null,[(0,n.Uk)("然而，如果你使用"),(0,n._)("code",{class:"doc-token"},"capture"),(0,n.Uk)("，"),(0,n._)("code",{class:"doc-token"},"mouseCapture"),(0,n.Uk)("或"),(0,n._)("code",{class:"doc-token"},"keyCapture"),(0,n.Uk)("修饰符，那么事件将首先到达TouchRepeat 指令，然后是内部内容，所以 TouchRepeat 仍然会被触发。")],-1),T=(0,n._)("p",null,"由于性能原因，不是所有的修饰符都是反应式的。有些需要窗口/页面/组件的刷新来获得更新。请查看API卡，看看那些没有被标记为反应式的修饰符。",-1);function R(a,e,t,R,w,H){const C=(0,n.up)("doc-api"),b=(0,n.up)("doc-example"),f=(0,n.up)("doc-link"),q=(0,n.up)("doc-page");return(0,n.wg)(),(0,n.j4)(q,{"meta-title":R.metaTitle,title:"触摸重复指令",nav:R.nav,toc:R.toc,"meta-desc":R.metaDesc},{default:(0,n.w5)((()=>[s,o,c,(0,n._)("h2",{id:"touchrepeat-api",class:"doc-heading doc-h2",onClick:e[0]||(e[0]=a=>R.copyHeading("touchrepeat-api"))},"TouchRepeat API"),(0,n.Wm)(C,{file:"TouchRepeat"}),(0,n._)("h2",{id:"使用方法",class:"doc-heading doc-h2",onClick:e[1]||(e[1]=a=>R.copyHeading("使用方法"))},"使用方法"),l,p,(0,n.Wm)(b,{title:"基本",file:"TouchRepeat/Basic"}),u,(0,n.Wm)(b,{title:"自定义按键",file:"TouchRepeat/Keys"}),k,(0,n.Wm)(b,{title:"应用于QBtn",file:"TouchRepeat/Buttons"}),(0,n._)("h3",{id:"处理鼠标事件",class:"doc-heading doc-h3",onClick:e[2]||(e[2]=a=>R.copyHeading("处理鼠标事件"))},"处理鼠标事件"),d,_,(0,n._)("h3",{id:"处理按键事件",class:"doc-heading doc-h3",onClick:e[3]||(e[3]=a=>R.copyHeading("处理按键事件"))},"处理按键事件"),(0,n._)("p",null,[i,(0,n.Wm)(f,{to:"https://keycode.info/"},{default:(0,n.w5)((()=>[r])),_:1}),h]),U,g,(0,n._)("h3",{id:"抑制-touchrepeat",class:"doc-heading doc-h3",onClick:e[4]||(e[4]=a=>R.copyHeading("抑制-touchrepeat"))},"抑制 TouchRepeat"),m,v,y,(0,n._)("h2",{id:"关于hmr的说明",class:"doc-heading doc-h2",onClick:e[5]||(e[5]=a=>R.copyHeading("关于hmr的说明"))},"关于HMR的说明"),T])),_:1},8,["meta-title","nav","toc","meta-desc"])}var w=t(17536);const H={name:"DocMarkdownPage",setup(){return{metaTitle:"触摸重复指令",metaDesc:"Vue指令，当用户触摸并按住一个组件或元素时，在指定的时间间隔内触发一个事件。",nav:[{name:"触摸平移",category:"Vue 指令",path:"/vue-directives/touch-pan",dir:"left"},{name:"触摸轻扫",category:"Vue 指令",path:"/vue-directives/touch-swipe",dir:"right"}],toc:[{id:"touchrepeat-api",title:"TouchRepeat API"},{id:"使用方法",title:"使用方法"},{id:"处理鼠标事件",title:"处理鼠标事件",sub:!0},{id:"处理按键事件",title:"处理按键事件",sub:!0},{id:"抑制-touchrepeat",title:"抑制 TouchRepeat",sub:!0},{id:"关于hmr的说明",title:"关于HMR的说明"}],copyHeading:w.Et}}};var C=t(74260);const b=(0,C.Z)(H,[["render",R]]),f=b}}]);