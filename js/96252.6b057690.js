"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[96252],{96252:(l,e,i)=>{i.r(e),i.d(e,{default:()=>W});var t=i(83673);const o=(0,t.Uk)("在此之前请先阅读"),a=(0,t.Uk)("Flexbox简介"),d=(0,t.Uk)(' ，让我们深入了解一下"列"。'),n=(0,t._)("p",null,"利用特定断点的行类来实现等高的行。为你需要的每个断点添加任意数量的无单元类，每一行都将是相同的高度。",-1),c=(0,t._)("p",null,"例如，这有两个网格布局，适用于从 xs 至 xl 的每个设备和视口。",-1),r=(0,t._)("p",null,"Flexbox网格行的自动布局也意味着您可以设置一行的高度，其他人将自动调整其周围。您可以使用预定义的网格类(如下所示)或内联高度。请注意，无论中心行高度，其他行都会调整大小。",-1),g=(0,t._)("p",null,"使用“col- {断点} -auto`类，行基于其内容的自然高度可以大小。这是Super Symery，单行内容如输入，数字等。这与水平对齐类相结合，对于以观点高度的变化为居中核心的布局非常有用。",-1),u=(0,t._)("p",null,"该网格包括五层预定义的类，用于构建复杂的响应布局。在超细，小型，大型，大型或超大设备上自定义行的大小，但您认为适合。",-1),s=(0,t._)("p",null,[(0,t.Uk)("对于与最小的设备相同的网格，最大，使用“.col"),(0,t._)("code",{class:"doc-token"},"和"),(0,t.Uk)(".col- *`类。在需要一个特别大小的行时指定一个编号的类;否则，请随时坚持.COL。")],-1),h=(0,t._)("p",null,"不想让你的行简单地堆在一些网格层中？根据需要，为每个层使用不同的类的组合。请看下面的示例，以更好地了解这一切是如何运作的。",-1),p=(0,t._)("p",null,"使用flexbox对齐工具来垂直和水平地对齐列。",-1),m=(0,t._)("p",null,"如果在单行内放置超过12列，则每组额外列将作为一个单位包装到新行上。",-1),y=(0,t._)("p",null,[(0,t.Uk)("要使用默认网格嵌套您的内容，请在现有的"),(0,t._)("code",{class:"doc-token"},".col-sm-*"),(0,t.Uk)("列中添加新的"),(0,t._)("code",{class:"doc-token"},".col-sm-*"),(0,t.Uk)("列。嵌套的行应包括一组列最多12个或更少的列(不需要使用所有12列)。")],-1),x=(0,t._)("p",null,"要查看 Flex 的动行情况，您可以使用 Flex Playground 以交互方式了解更多信息。",-1);function k(l,e,i,k,_,C){const f=(0,t.up)("doc-link"),b=(0,t.up)("doc-example"),W=(0,t.up)("q-btn"),H=(0,t.up)("doc-page");return(0,t.wg)(),(0,t.j4)(H,{"meta-title":k.metaTitle,title:"网格列",related:k.related,nav:k.nav,toc:k.toc,"meta-desc":k.metaDesc},{default:(0,t.w5)((()=>[(0,t._)("p",null,[o,(0,t.Wm)(f,{to:"/layout/grid/introduction-to-flexbox"},{default:(0,t.w5)((()=>[a])),_:1}),d]),n,(0,t._)("h2",{id:"等高度",class:"doc-heading doc-h2",onClick:e[0]||(e[0]=l=>k.copyHeading("等高度"))},"等高度"),c,(0,t.Wm)(b,{title:"Equal Height Example",file:"grid/ColumnEqualWidth"}),(0,t._)("h2",{id:"设置一行高度",class:"doc-heading doc-h2",onClick:e[1]||(e[1]=l=>k.copyHeading("设置一行高度"))},"设置一行高度"),r,(0,t.Wm)(b,{title:"Setting one row height",file:"grid/ColumnRowWidth"}),(0,t._)("h2",{id:"可变高度内容",class:"doc-heading doc-h2",onClick:e[2]||(e[2]=l=>k.copyHeading("可变高度内容"))},"可变高度内容"),g,(0,t.Wm)(b,{title:"Variable height content",file:"grid/ColumnVariableWidth"}),(0,t._)("h2",{id:"响应类",class:"doc-heading doc-h2",onClick:e[3]||(e[3]=l=>k.copyHeading("响应类"))},"响应类"),u,(0,t._)("h3",{id:"所有断点",class:"doc-heading doc-h3",onClick:e[4]||(e[4]=l=>k.copyHeading("所有断点"))},"所有断点"),s,(0,t.Wm)(b,{title:"All breakpoints",file:"grid/ColumnAllBreakpoints"}),(0,t._)("h3",{id:"混搭",class:"doc-heading doc-h3",onClick:e[5]||(e[5]=l=>k.copyHeading("混搭"))},"混搭"),h,(0,t.Wm)(b,{title:"Mix and match",file:"grid/ColumnMixAndMatch"}),(0,t._)("h3",{id:"对齐",class:"doc-heading doc-h3",onClick:e[6]||(e[6]=l=>k.copyHeading("对齐"))},"对齐"),p,(0,t.Wm)(b,{title:"Horizontal alignment",file:"grid/ColumnHorizontalAlignment"}),(0,t.Wm)(b,{title:"Vertical alignment",file:"grid/ColumnVerticalAlignment"}),(0,t._)("h3",{id:"包装",class:"doc-heading doc-h3",onClick:e[7]||(e[7]=l=>k.copyHeading("包装"))},"包装"),m,(0,t.Wm)(b,{title:"Wrapping",file:"grid/ColumnRowWrapping"}),(0,t._)("h3",{id:"重新排序",class:"doc-heading doc-h3",onClick:e[8]||(e[8]=l=>k.copyHeading("重新排序"))},"重新排序"),(0,t.Wm)(b,{title:"Reverse",file:"grid/ColumnReverse"}),(0,t.Wm)(b,{title:"Flex order",file:"grid/ColumnFlexOrder"}),(0,t._)("h3",{id:"嵌套",class:"doc-heading doc-h3",onClick:e[9]||(e[9]=l=>k.copyHeading("嵌套"))},"嵌套"),y,(0,t.Wm)(b,{title:"Nesting",file:"grid/ColumnNesting"}),(0,t._)("h2",{id:"flex网格游乐场",class:"doc-heading doc-h2",onClick:e[10]||(e[10]=l=>k.copyHeading("flex网格游乐场"))},"Flex网格游乐场"),x,(0,t.Wm)(W,{push:"",color:"brand-primary","icon-right":"launch",label:"Flex Playground",to:"/layout/grid/flex-playground"})])),_:1},8,["meta-title","related","nav","toc","meta-desc"])}var _=i(17536);const C={name:"DocMarkdownPage",setup(){return{metaTitle:"网格列",metaDesc:"如何使用 Quasar 的网格列。",related:[{name:"Flexbox 简介",category:"弹性网格",path:"/layout/grid/introduction-to-flexbox"},{name:"网格行",category:"弹性网格",path:"/layout/grid/row"},{name:"网格间隔",category:"弹性网格",path:"/layout/grid/gutter"},{name:"Flex 练习场",category:"弹性网格",path:"/layout/grid/flex-playground"}],nav:[{name:"网格行",category:"弹性网格",path:"/layout/grid/row",dir:"left"},{name:"网格间隔",category:"弹性网格",path:"/layout/grid/gutter",dir:"right"}],toc:[{id:"等高度",title:"等高度"},{id:"设置一行高度",title:"设置一行高度"},{id:"可变高度内容",title:"可变高度内容"},{id:"响应类",title:"响应类"},{id:"所有断点",title:"所有断点",sub:!0},{id:"混搭",title:"混搭",sub:!0},{id:"对齐",title:"对齐",sub:!0},{id:"包装",title:"包装",sub:!0},{id:"重新排序",title:"重新排序",sub:!0},{id:"嵌套",title:"嵌套",sub:!0},{id:"flex网格游乐场",title:"Flex网格游乐场"}],copyHeading:_.Et}}};var f=i(74260);const b=(0,f.Z)(C,[["render",k]]),W=b}}]);