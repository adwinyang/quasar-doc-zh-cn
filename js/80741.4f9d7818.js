"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[80741],{80741:(e,t,i)=>{i.r(t),i.d(t,{default:()=>F});var o=i(83673);const l=(0,o._)("p",null,"QImg组件使处理图片(任何图片格式)变得简单，并且还为它增加了一个漂亮的加载效果以及许多其他功能(例如：能够设置长宽比)。",-1),n=(0,o._)("p",null,'在下面的例子中，我们添加了模糊和棕褐色的效果。此外，我们还使用了 "圆形边框 "的CSS辅助类。',-1),d=(0,o.Uk)("有多种方式可以通过"),a=(0,o._)("code",{class:"doc-token"},"fit",-1),c=(0,o.Uk)("属性来显示图像：‘覆盖’、‘填充’(默认)、‘包含’、‘无’、‘缩小’。它基本上与CSS属性中的"),s=(0,o.Uk)("object-fit"),m=(0,o.Uk)("相同。"),p=(0,o._)("p",null,"有些模式会导致图像之外的空隙(水平或垂直)。",-1),g=(0,o.Uk)('你也可以通过 "position "属性来配置位置，它相当于CSS中的'),_=(0,o.Uk)("object-position"),r=(0,o.Uk)("属性。它的默认值是 “50% 50%”。"),u=(0,o._)("p",null,"当你有大尺寸的图片时，你可以使用一个占位符图片(建议用base64编码指定)，就像下面的例子。该占位符将被显示，直到目标图像被加载。我们正在切换QImg标签，这样你就可以看到占位符图像的作用。",-1),h={class:"doc-note doc-note--warning"},k=(0,o._)("p",{class:"doc-note__title"},"WARNING",-1),f=(0,o.Uk)("要掌握"),v=(0,o._)("code",{class:"doc-token"},"sizes",-1),U=(0,o.Uk)("和"),I=(0,o._)("code",{class:"doc-token"},"srcset",-1),W=(0,o.Uk)("属性，请阅读关于"),b=(0,o.Uk)("响应式图像"),y=(0,o.Uk)("的本地支持，因为**QImg完全依赖于此。"),C={class:"doc-note doc-note--tip"},Q=(0,o._)("p",{class:"doc-note__title"},"TIP",-1),S=(0,o.Uk)('关于 "尺寸 "属性，请阅读关于分辨率切换：'),w=(0,o.Uk)("不同尺寸"),H=(0,o.Uk)("。"),z=(0,o._)("div",{class:"doc-note doc-note--tip"},[(0,o._)("p",{class:"doc-note__title"},"TIP"),(0,o._)("p",null,'关于 "srcset "属性，请阅读 “分辨率切换：[相同尺寸，不同分辨率]”(https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#Resolution_switching_Same_size_different_resolutions)。')],-1),M=(0,o.Uk)("对于原生支持"),L=(0,o.Uk)("loading=“lazy” DOM属性"),R=(0,o.Uk)("的浏览器，你可以利用它的优势。Quasar将使用它，并告诉浏览器请求图片，只有当图片当前在屏幕上显示时(或当它被滚动到屏幕上时)，才会渲染它。"),T=(0,o.Uk)("一种替代方法是使用"),P=(0,o.Uk)("QIntersection"),j=(0,o.Uk)("组件作为封装器或"),q=(0,o.Uk)("Intersection"),D=(0,o.Uk)("指令。"),A=(0,o._)("p",null,"在下面的例子中，我们禁用了图像上的本地上下文菜单。",-1),N=(0,o._)("div",{class:"doc-note doc-note--warning"},[(0,o._)("p",{class:"doc-note__title"},"WARNING"),(0,o._)("p",null,[(0,o.Uk)("当你使用这个选项时，一定要注意将"),(0,o._)("code",{class:"doc-token"},"default'或"),(0,o.Uk)("error’槽的内容包裹在"),(0,o._)("code",{class:"doc-token"},"div'元素中，或者在元素上添加"),(0,o.Uk)("all-pointer-events’类。")])],-1);function V(e,t,i,V,x,E){const G=(0,o.up)("doc-api"),B=(0,o.up)("doc-example"),F=(0,o.up)("doc-link"),O=(0,o.up)("doc-page");return(0,o.wg)(),(0,o.j4)(O,{"meta-title":V.metaTitle,title:"图像",related:V.related,nav:V.nav,toc:V.toc,"meta-desc":V.metaDesc},{default:(0,o.w5)((()=>[l,(0,o._)("h2",{id:"qimg-api",class:"doc-heading doc-h2",onClick:t[0]||(t[0]=e=>V.copyHeading("qimg-api"))},"QImg API"),(0,o.Wm)(G,{file:"QImg"}),(0,o._)("h2",{id:"使用方法",class:"doc-heading doc-h2",onClick:t[1]||(t[1]=e=>V.copyHeading("使用方法"))},"使用方法"),(0,o._)("h3",{id:"基础",class:"doc-heading doc-h3",onClick:t[2]||(t[2]=e=>V.copyHeading("基础"))},"基础"),(0,o.Wm)(B,{title:"基础",file:"QImg/Basic"}),(0,o._)("h3",{id:"纵横比",class:"doc-heading doc-h3",onClick:t[3]||(t[3]=e=>V.copyHeading("纵横比"))},"纵横比"),(0,o.Wm)(B,{title:"自定义长宽比",file:"QImg/Ratio"}),(0,o._)("h3",{id:"标题",class:"doc-heading doc-h3",onClick:t[4]||(t[4]=e=>V.copyHeading("标题"))},"标题"),(0,o.Wm)(B,{title:"标题",file:"QImg/Caption"}),(0,o._)("h3",{id:"图像样式",class:"doc-heading doc-h3",onClick:t[5]||(t[5]=e=>V.copyHeading("图像样式"))},"图像样式"),n,(0,o.Wm)(B,{title:"自定义图像样式",file:"QImg/CustomImageStyle"}),(0,o._)("h3",{id:"适合模式",class:"doc-heading doc-h3",onClick:t[6]||(t[6]=e=>V.copyHeading("适合模式"))},"适合模式"),(0,o._)("p",null,[d,a,c,(0,o.Wm)(F,{to:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"},{default:(0,o.w5)((()=>[s])),_:1}),m]),p,(0,o._)("p",null,[g,(0,o.Wm)(F,{to:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-position"},{default:(0,o.w5)((()=>[_])),_:1}),r]),(0,o.Wm)(B,{title:"适合模式",file:"QImg/FitModes"}),(0,o._)("h3",{id:"加载状态",class:"doc-heading doc-h3",onClick:t[7]||(t[7]=e=>V.copyHeading("加载状态"))},"加载状态"),(0,o.Wm)(B,{title:"加载状态",file:"QImg/LoadingState"}),u,(0,o.Wm)(B,{title:"占位符来源",file:"QImg/PlaceholderSrc"}),(0,o.Wm)(B,{title:"错误状态",file:"QImg/ErrorState"}),(0,o._)("h3",{id:"响应式",class:"doc-heading doc-h3",onClick:t[8]||(t[8]=e=>V.copyHeading("响应式"))},"响应式"),(0,o._)("div",h,[k,(0,o._)("p",null,[f,v,U,I,W,(0,o.Wm)(F,{to:"https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#Why_responsive_images"},{default:(0,o.w5)((()=>[b])),_:1}),y])]),(0,o.Wm)(B,{title:"响应式",file:"QImg/Responsive"}),(0,o._)("div",C,[Q,(0,o._)("p",null,[S,(0,o.Wm)(F,{to:"https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#Resolution_switching_Different_sizes"},{default:(0,o.w5)((()=>[w])),_:1}),H])]),z,(0,o._)("h3",{id:"按需渲染",class:"doc-heading doc-h3",onClick:t[9]||(t[9]=e=>V.copyHeading("按需渲染"))},"按需渲染"),(0,o._)("p",null,[M,(0,o.Wm)(F,{to:"https://caniuse.com/loading-lazy-attr"},{default:(0,o.w5)((()=>[L])),_:1}),R]),(0,o._)("p",null,[T,(0,o.Wm)(F,{to:"/vue-components/intersection"},{default:(0,o.w5)((()=>[P])),_:1}),j,(0,o.Wm)(F,{to:"/vue-directives/intersection"},{default:(0,o.w5)((()=>[q])),_:1}),D]),(0,o.Wm)(B,{title:"本地懒加载",file:"QImg/LoadingLazy"}),(0,o._)("h3",{id:"没有本地上下文菜单",class:"doc-heading doc-h3",onClick:t[10]||(t[10]=e=>V.copyHeading("没有本地上下文菜单"))},"没有本地上下文菜单"),A,N,(0,o.Wm)(B,{title:"本地上下文菜单",file:"QImg/ContextMenu"})])),_:1},8,["meta-title","related","nav","toc","meta-desc"])}var x=i(17536);const E={name:"DocMarkdownPage",setup(){return{metaTitle:"图像",metaDesc:"QImg Vue组件使响应式图片的工作变得简单，还为它们添加了一个漂亮的加载效果，以及许多其他功能，如自定义长宽比和标题。",related:[{name:"旋转器",category:"Vue 组件",path:"/vue-components/spinners"},{name:"过渡",category:"选项和辅助",path:"/options/transitions"}],nav:[{name:"图标",category:"Vue 组件",path:"/vue-components/icon",dir:"left"},{name:"无限滚动",category:"Vue 组件",path:"/vue-components/infinite-scroll",dir:"right"}],toc:[{id:"qimg-api",title:"QImg API"},{id:"使用方法",title:"使用方法"},{id:"基础",title:"基础",sub:!0},{id:"纵横比",title:"纵横比",sub:!0},{id:"标题",title:"标题",sub:!0},{id:"图像样式",title:"图像样式",sub:!0},{id:"适合模式",title:"适合模式",sub:!0},{id:"加载状态",title:"加载状态",sub:!0},{id:"响应式",title:"响应式",sub:!0},{id:"按需渲染",title:"按需渲染",sub:!0},{id:"没有本地上下文菜单",title:"没有本地上下文菜单",sub:!0}],copyHeading:x.Et}}};var G=i(74260);const B=(0,G.Z)(E,[["render",V]]),F=B}}]);