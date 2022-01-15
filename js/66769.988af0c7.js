"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[66769],{66769:(e,o,t)=>{t.r(o),t.d(o,{default:()=>Z});var l=t(83673);const c=(0,l.Uk)("希望您之前读过"),d=(0,l.Uk)("FlexBox简介"),n=(0,l.Uk)(" 理论，让我们深入了解Gutter。"),a=(0,l.Uk)("Gutter Quasar CSS 类提供了一种简单的方法来将元素(特别是在"),i=(0,l.Uk)("Grid Row"),s=(0,l.Uk)(" 中)以相等的距离彼此隔开。"),r=(0,l._)("p",null,[(0,l.Uk)("根据您的用例，有两种主要类型的Gutter："),(0,l._)("code",{class:"doc-token"},"q-gutter-{size}"),(0,l.Uk)("和"),(0,l._)("code",{class:"doc-token"},"q-col-gutter-{size}"),(0,l.Uk)("。第一种方法是在要彼此隔开的元素不使用指定宽度的"),(0,l._)("code",{class:"doc-token"},"col-*"),(0,l.Uk)("或"),(0,l._)("code",{class:"doc-token"},"offset-*"),(0,l.Uk)("类时使用，第二种方法是在元素具有指定宽度的"),(0,l._)("code",{class:"doc-token"},"col-*"),(0,l.Uk)("或"),(0,l._)("code",{class:"doc-token"},"offset-*"),(0,l.Uk)("类时使用。")],-1),u=(0,l._)("div",{class:"doc-note doc-note--tip"},[(0,l._)("p",{class:"doc-note__title"},"TIP"),(0,l._)("p",null,[(0,l.Uk)("后缀("),(0,l._)("code",{class:"doc-token"},"-none"),(0,l.Uk)("、"),(0,l._)("code",{class:"doc-token"},"-xs"),(0,l.Uk)("、"),(0,l._)("code",{class:"doc-token"},"-sm"),(0,l.Uk)("、"),(0,l._)("code",{class:"doc-token"},"-md"),(0,l.Uk)("、"),(0,l._)("code",{class:"doc-token"},"-lg"),(0,l.Uk)("、"),(0,l._)("code",{class:"doc-token"},"-xl"),(0,l.Uk)(")不是指设备屏幕大小，而是指元素之间的间距大小。")])],-1),g={class:"doc-note doc-note--warning"},k=(0,l._)("p",{class:"doc-note__title"},"WARNING",-1),_=(0,l._)("code",{class:"doc-token"},"q-gutter-*",-1),p=(0,l.Uk)("类将"),U=(0,l._)("strong",null,"负的顶部和左侧边距",-1),m=(0,l.Uk)("应用于父级，将"),q=(0,l._)("strong",null,"正的顶部和左侧边距",-1),f=(0,l.Uk)("应用于子级。在使用其他"),y=(0,l.Uk)("Spacing classes"),h=(0,l.Uk)(" 时要考虑到这一点，以免破坏 Gutter 的css。"),z=(0,l._)("p",null,[(0,l.Uk)("当直接子级没有指定宽度的"),(0,l._)("code",{class:"doc-token"},"col-*"),(0,l.Uk)("或"),(0,l._)("code",{class:"doc-token"},"offset-*"),(0,l.Uk)("类时，将使用这些类。")],-1),x=(0,l._)("p",null,[(0,l.Uk)("还有上面的示例中没有包含的 "),(0,l._)("code",{class:"doc-token"},"q-gutter-none"),(0,l.Uk)(" 类(相当于：没有应用 gutter)。")],-1),G={class:"doc-note doc-note--warning"},W=(0,l._)("p",{class:"doc-note__title"},"WARNING",-1),v=(0,l._)("code",{class:"doc-token"},"q-col-gutter-*",-1),w=(0,l.Uk)("类将"),C=(0,l._)("strong",null,"负的顶部和左侧边距",-1),b=(0,l.Uk)("应用于父级，将"),S=(0,l._)("strong",null,"正的顶部和左侧填充",-1),H=(0,l.Uk)("应用于子级。在使用其他"),N=(0,l.Uk)("Spacing classes"),F=(0,l.Uk)(" 时要考虑到这一点，以免破坏 Gutter 的 css。"),P=(0,l._)("p",null,[(0,l.Uk)("当直接子级没有指定宽度的"),(0,l._)("code",{class:"doc-token"},"col-*"),(0,l.Uk)("或"),(0,l._)("code",{class:"doc-token"},"offset-*"),(0,l.Uk)("类时，将使用这些类")],-1),I=(0,l._)("p",null,"两组类各有利弊。",-1),R=(0,l._)("div",{class:"doc-note doc-note--warning"},[(0,l._)("p",{class:"doc-note__title"},"WARNING"),(0,l._)("p",null,[(0,l.Uk)("因为"),(0,l._)("code",{class:"doc-token"},"q-ground-*"),(0,l.Uk)("和"),(0,l._)("code",{class:"doc-token"},"q-col-ground-*"),(0,l.Uk)("类都将"),(0,l._)("strong",null,"负的顶部和左侧边距"),(0,l.Uk)("应用于父级，所以不应在父级上应用针对背景、边距或与边框相关的属性的样式。")]),(0,l._)("p",null,[(0,l.Uk)("相反，您需要将它们包装在容器中，在容器上应用样式，并"),(0,l._)("strong",null,"在容器"),(0,l.Uk)("上添加"),(0,l._)("code",{class:"doc-token"},"overflow-auto"),(0,l.Uk)("或"),(0,l._)("code",{class:"doc-token"},"row"),(0,l.Uk)("类")])],-1),T=(0,l._)("div",{class:"doc-note doc-note--tip"},[(0,l._)("p",{class:"doc-note__title"},"TIP"),(0,l._)("p",null,[(0,l._)("code",{class:"doc-token"},"q-gutter-*"),(0,l.Uk)(" 类"),(0,l._)("strong",null,"不改变"),(0,l.Uk)("子元素的内部尺寸，因此您可以直接在子元素上使用 "),(0,l._)("code",{class:"doc-token"},"background"),(0,l.Uk)(" 或 "),(0,l._)("code",{class:"doc-token"},"border"),(0,l.Uk)("。")])],-1),A=(0,l._)("div",{class:"doc-note doc-note--warning"},[(0,l._)("p",{class:"doc-note__title"},"WARNING"),(0,l._)("p",null,[(0,l._)("code",{class:"doc-token"},"q-gutter-*"),(0,l.Uk)(" 类"),(0,l._)("strong",null,"会改变"),(0,l.Uk)("子元素的外部尺寸，因此您不能再使用 "),(0,l._)("code",{class:"doc-token"},"col-*"),(0,l.Uk)(" 或 "),(0,l._)("code",{class:"doc-token"},"offset-*"),(0,l.Uk)(" 类来指定子元素的宽度。")])],-1),M=(0,l._)("div",{class:"doc-note doc-note--warning"},[(0,l._)("p",{class:"doc-note__title"},"WARNING"),(0,l._)("p",null,[(0,l.Uk)("因为"),(0,l._)("code",{class:"doc-token"},"q-col-gutter-*"),(0,l.Uk)("类对子项应用"),(0,l._)("strong",null,"负的顶部和左侧填充"),(0,l.Uk)("，所以不应该对子项应用针对背景、填充或边框相关属性的样式。相反，您需要将样式化的元素放在子元素中，并在该元素上应用样式。")])],-1),V=(0,l._)("p",null,"要查看 Flex 的运行情况，您可以使用 Flex Playground 以交互方式了解更多信息。",-1);function D(e,o,t,D,Q,j){const B=(0,l.up)("doc-link"),E=(0,l.up)("doc-example"),Z=(0,l.up)("q-btn"),J=(0,l.up)("doc-page");return(0,l.wg)(),(0,l.j4)(J,{"meta-title":D.metaTitle,title:"网格间隔(Gutter)",related:D.related,nav:D.nav,toc:D.toc,"meta-desc":D.metaDesc},{default:(0,l.w5)((()=>[(0,l._)("p",null,[c,(0,l.Wm)(B,{to:"/layout/grid/introduction-to-flexbox"},{default:(0,l.w5)((()=>[d])),_:1}),n]),(0,l._)("p",null,[a,(0,l.Wm)(B,{to:"/layout/grid/row"},{default:(0,l.w5)((()=>[i])),_:1}),s]),(0,l._)("h2",{id:"类型",class:"doc-heading doc-h2",onClick:o[0]||(o[0]=e=>D.copyHeading("类型"))},"类型"),r,u,(0,l._)("h2",{id:"类“q-gutter-{size}”",class:"doc-heading doc-h2",onClick:o[1]||(o[1]=e=>D.copyHeading("类“q-gutter-{size}”"))},"类“q-gutter- {size}”"),(0,l._)("div",g,[k,(0,l._)("p",null,[_,p,U,m,q,f,(0,l.Wm)(B,{to:"/style/spacing"},{default:(0,l.w5)((()=>[y])),_:1}),h])]),z,(0,l.Wm)(E,{title:"Sizes for q-gutter",file:"grid/GutterSize"}),x,(0,l.Wm)(E,{title:"Horizontal only q-gutter",file:"grid/GutterHorizontal"}),(0,l.Wm)(E,{title:"Vertical only q-gutter",file:"grid/GutterVertical"}),(0,l.Wm)(E,{title:"Mixed horizontal and vertical q-gutter",file:"grid/GutterMixed"}),(0,l._)("h2",{id:"类-“q-col-gutter-{size}”",class:"doc-heading doc-h2",onClick:o[2]||(o[2]=e=>D.copyHeading("类-“q-col-gutter-{size}”"))},"类 “q-col-gutter-{size}”"),(0,l._)("div",G,[W,(0,l._)("p",null,[v,w,C,b,S,H,(0,l.Wm)(B,{to:"/style/Spacing"},{default:(0,l.w5)((()=>[N])),_:1}),F])]),P,(0,l.Wm)(E,{title:"Sizes for q-col-gutter",file:"grid/ColGutterSize"}),(0,l.Wm)(E,{title:"Horizontal only q-col-gutter",file:"grid/ColGutterHorizontal"}),(0,l.Wm)(E,{title:"Vertical only q-col-gutter",file:"grid/ColGutterVertical"}),(0,l.Wm)(E,{title:"Mixed horizontal and vertical q-col-gutter",file:"grid/ColGutterMixed"}),(0,l._)("h2",{id:"优点、缺点和解决问题的方法-“q-ground-{size}”-与-“q-col-ground-{size}”",class:"doc-heading doc-h2",onClick:o[3]||(o[3]=e=>D.copyHeading("优点、缺点和解决问题的方法-“q-ground-{size}”-与-“q-col-ground-{size}”"))},"优点、缺点和解决问题的方法 - “q-ground-{size}” 与 “q-col-ground-{size}”"),I,R,(0,l.Wm)(E,{title:"Parent styling",file:"grid/ParentStyling"}),T,A,(0,l.Wm)(E,{title:"Children size compare",file:"grid/ChildrenSizeCompare"}),M,(0,l.Wm)(E,{title:"Children size compare",file:"grid/ChildrenSizeCompare"}),(0,l._)("h2",{id:"flex-grid-playground",class:"doc-heading doc-h2",onClick:o[4]||(o[4]=e=>D.copyHeading("flex-grid-playground"))},"Flex Grid Playground"),V,(0,l.Wm)(Z,{push:"",color:"brand-primary","icon-right":"launch",label:"Flex Playground",to:"/layout/grid/flex-playground"})])),_:1},8,["meta-title","related","nav","toc","meta-desc"])}var Q=t(17536);const j={name:"DocMarkdownPage",setup(){return{metaTitle:"网格间隔(Gutter)",metaDesc:"如何使用 Quasar 网格进行空间隔离。",related:[{name:"Flexbox 简介",category:"弹性网格",path:"/layout/grid/introduction-to-flexbox"},{name:"网格行",category:"弹性网格",path:"/layout/grid/row"},{name:"网格列",category:"弹性网格",path:"/layout/grid/column"},{name:"Flex 练习场",category:"弹性网格",path:"/layout/grid/flex-playground"}],nav:[{name:"网格列",category:"弹性网格",path:"/layout/grid/column",dir:"left"},{name:"Flexbox 模式",category:"弹性网格",path:"/layout/grid/flexbox-patterns",dir:"right"}],toc:[{id:"类型",title:"类型"},{id:"类“q-gutter-{size}”",title:"类“q-gutter- {size}”"},{id:"类-“q-col-gutter-{size}”",title:"类 “q-col-gutter-{size}”"},{id:"优点、缺点和解决问题的方法-“q-ground-{size}”-与-“q-col-ground-{size}”",title:"优点、缺点和解决问题的方法 - “q-ground-{size}” 与 “q-col-ground-{size}”"},{id:"flex-grid-playground",title:"Flex Grid Playground"}],copyHeading:Q.Et}}};var B=t(74260);const E=(0,B.Z)(j,[["render",D]]),Z=E}}]);