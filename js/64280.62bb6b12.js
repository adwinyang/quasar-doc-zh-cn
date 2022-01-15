"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[64280],{64280:(e,a,i)=>{i.r(a),i.d(a,{default:()=>C});var l=i(83673);const n=(0,l._)("p",null,"QRange组件是一个很好的方法，可以为用户提供一个最小值和最大值之间的子范围的选择，并可以选择这些值的步骤。Range组件的一个使用案例是提供一个价格范围的选择。",-1),t=(0,l.Uk)("还可以看看它的 “兄弟姐妹”，"),d=(0,l.Uk)("QSlider"),o=(0,l.Uk)("组件。"),c=(0,l._)("p",null,[(0,l.Uk)("注意，我们正在使用一个对象来进行选择，它持有所选范围的低值–"),(0,l._)("code",{class:"doc-token"},"rangeValues.min"),(0,l.Uk)("和高值–"),(0,l._)("code",{class:"doc-token"},"rangeValues.max"),(0,l.Uk)("的值。")],-1),s=(0,l._)("div",{class:"doc-note doc-note--warning"},[(0,l._)("p",{class:"doc-note__title"},"WARNING"),(0,l._)("p",null,"您有责任在QSlider周围留出空间，使标签和标记标签不会与您页面上的其他内容重叠。您可以使用CSS margin或padding来达到这个目的。")],-1),g=(0,l.Uk)("带有内部最小/最大值 "),r=(0,l._)("p",null,[(0,l.Uk)("有时你需要将模型值限制在轨道长度内的一个区间。为此，使用"),(0,l._)("code",{class:"doc-token"},"inner-min"),(0,l.Uk)("和"),(0,l._)("code",{class:"doc-token"},"inner-max"),(0,l.Uk)("属性。第一个属性需要高于或等于"),(0,l._)("code",{class:"doc-token"},"min"),(0,l.Uk)("属性，而后者则需要低于或等于"),(0,l._)("code",{class:"doc-token"},"max"),(0,l.Uk)("属性。")],-1),m=(0,l._)("p",null,'阶梯 "属性也可以是一个浮点数(如果你需要无限的精度，也可以是数字 “0”)。',-1),p=(0,l._)("p",null,"在下面的例子中，移动滑块可以看到标签。",-1),h=(0,l._)("p",null,"下面的例子更好地强调了QRange是如何处理标签定位的，以便它总是在水平方向上停留在QRange的盒子里。",-1),k=(0,l.Uk)("标记标签 "),u=(0,l._)("div",{class:"doc-note doc-note--tip"},[(0,l._)("p",{class:"doc-note__title"},"TIP on slots"),(0,l._)("p",null,"为了使用标记标签槽(见下文)，你必须通过使用`标记-标签’属性来启用它们。")],-1),_=(0,l.Uk)("其他定制 "),Q=(0,l._)("p",null,[(0,l.Uk)("使用"),(0,l._)("code",{class:"doc-token"},"drag-range"),(0,l.Uk)("或"),(0,l._)("code",{class:"doc-token"},"drag-only-range"),(0,l.Uk)("属性，允许用户移动选定的范围或只移动预先确定的整体范围。")],-1),R=(0,l._)("p",null,[(0,l.Uk)("当处理一个有 "),(0,l._)("code",{class:"doc-token"},"action"),(0,l.Uk)("和"),(0,l._)("code",{class:"doc-token"},"method"),(0,l.Uk)('的本地表单时(例如，当使用Quasar和ASP.NET控制器时)，你需要指定QRange上的 "name "属性，否则formData将不包含它(如果它应该包含)。')],-1);function f(e,a,i,f,W,b){const y=(0,l.up)("doc-link"),v=(0,l.up)("doc-api"),C=(0,l.up)("doc-example"),U=(0,l.up)("q-badge"),H=(0,l.up)("doc-page");return(0,l.wg)(),(0,l.j4)(H,{"meta-title":f.metaTitle,title:"范围",related:f.related,nav:f.nav,toc:f.toc,"meta-desc":f.metaDesc},{default:(0,l.w5)((()=>[n,(0,l._)("p",null,[t,(0,l.Wm)(y,{to:"/vue-components/slider"},{default:(0,l.w5)((()=>[d])),_:1}),o]),(0,l._)("h2",{id:"qrange-api",class:"doc-heading doc-h2",onClick:a[0]||(a[0]=e=>f.copyHeading("qrange-api"))},"QRange API"),(0,l.Wm)(v,{file:"QRange"}),(0,l._)("h2",{id:"使用方法",class:"doc-heading doc-h2",onClick:a[1]||(a[1]=e=>f.copyHeading("使用方法"))},"使用方法"),c,(0,l._)("h3",{id:"标准",class:"doc-heading doc-h3",onClick:a[2]||(a[2]=e=>f.copyHeading("标准"))},"标准"),s,(0,l.Wm)(C,{title:"标准",file:"QRange/Standard"}),(0,l._)("h3",{id:"垂直方向",class:"doc-heading doc-h3",onClick:a[3]||(a[3]=e=>f.copyHeading("垂直方向"))},"垂直方向"),(0,l.Wm)(C,{title:"垂直方向",file:"QRange/Vertical"}),(0,l._)("h3",{id:"带有内部最小-最大值",class:"doc-heading doc-h3",onClick:a[4]||(a[4]=e=>f.copyHeading("带有内部最小-最大值"))},[g,(0,l.Wm)(U,{align:"top",color:"brand-primary",label:"v2.4+"})]),r,(0,l.Wm)(C,{title:"内部最小/最大",file:"QRange/InnerMinMax"}),(0,l._)("h3",{id:"带步骤",class:"doc-heading doc-h3",onClick:a[5]||(a[5]=e=>f.copyHeading("带步骤"))},"带步骤"),(0,l.Wm)(C,{title:"有步骤",file:"QRange/Step"}),m,(0,l.Wm)(C,{title:"浮点",file:"QRange/FloatingPoint"}),(0,l.Wm)(C,{title:"抓取到步骤",file:"QRange/Snap"}),(0,l._)("h3",{id:"带标签",class:"doc-heading doc-h3",onClick:a[6]||(a[6]=e=>f.copyHeading("带标签"))},"带标签"),p,(0,l.Wm)(C,{title:"有标签",file:"QRange/Label"}),(0,l.Wm)(C,{title:"总是显示标签",file:"QRange/LabelAlways"}),(0,l.Wm)(C,{title:"自定义标签值",file:"QRange/LabelValue"}),h,(0,l.Wm)(C,{title:"长标签",file:"QRange/LabelLong"}),(0,l._)("h3",{id:"标记",class:"doc-heading doc-h3",onClick:a[7]||(a[7]=e=>f.copyHeading("标记"))},"标记"),(0,l.Wm)(C,{title:"标记",file:"QRange/Markers"}),(0,l._)("h3",{id:"标记标签",class:"doc-heading doc-h3",onClick:a[8]||(a[8]=e=>f.copyHeading("标记标签"))},[k,(0,l.Wm)(U,{align:"top",color:"brand-primary",label:"v2.4+"})]),(0,l.Wm)(C,{title:"标记标签",file:"QRange/MarkerLabels"}),u,(0,l.Wm)(C,{title:"标记标签插槽",file:"QRange/MarkerLabelSlots"}),(0,l._)("h3",{id:"其他定制",class:"doc-heading doc-h3",onClick:a[9]||(a[9]=e=>f.copyHeading("其他定制"))},[_,(0,l.Wm)(U,{align:"top",color:"brand-primary",label:"v2.4+"})]),(0,l.Wm)(C,{title:"颜色定制",file:"QRange/RangeColoring"}),(0,l.Wm)(C,{title:"隐藏选择栏",file:"QRange/NoSelection"}),(0,l.Wm)(C,{title:"自定义轨道图像",file:"QRange/TrackImages"}),(0,l.Wm)(C,{title:"轨道和拇指大小",file:"QRange/RangeSizes"}),(0,l._)("h3",{id:"拖动范围",class:"doc-heading doc-h3",onClick:a[10]||(a[10]=e=>f.copyHeading("拖动范围"))},"拖动范围"),Q,(0,l.Wm)(C,{title:"拖动范围",file:"QRange/Drag"}),(0,l.Wm)(C,{title:"拖动范围+抓取到步骤",file:"QRange/DragSnap"}),(0,l.Wm)(C,{title:"只拖动范围(固定间隔)",file:"QRange/DragOnly"}),(0,l._)("h3",{id:"懒惰的输入",class:"doc-heading doc-h3",onClick:a[11]||(a[11]=e=>f.copyHeading("懒惰的输入"))},"懒惰的输入"),(0,l.Wm)(C,{title:"懒人输入",file:"QRange/Lazy"}),(0,l._)("h3",{id:"空值",class:"doc-heading doc-h3",onClick:a[12]||(a[12]=e=>f.copyHeading("空值"))},"空值"),(0,l.Wm)(C,{title:"空值",file:"QRange/Null"}),(0,l._)("h3",{id:"反向",class:"doc-heading doc-h3",onClick:a[13]||(a[13]=e=>f.copyHeading("反向"))},"反向"),(0,l.Wm)(C,{title:"反转",file:"QRange/Reverse"}),(0,l._)("h3",{id:"黑暗、只读、禁用",class:"doc-heading doc-h3",onClick:a[14]||(a[14]=e=>f.copyHeading("黑暗、只读、禁用"))},"黑暗、只读、禁用"),(0,l.Wm)(C,{title:"黑暗",file:"QRange/Dark",dark:""}),(0,l.Wm)(C,{title:"只读",file:"QRange/Readonly"}),(0,l.Wm)(C,{title:"禁用",file:"QRange/Disable"}),(0,l._)("h3",{id:"使用-qitem",class:"doc-heading doc-h3",onClick:a[15]||(a[15]=e=>f.copyHeading("使用-qitem"))},"使用 QItem"),(0,l.Wm)(C,{title:"使用QItem",file:"QRange/List"}),(0,l._)("h3",{id:"本地表单提交",class:"doc-heading doc-h3",onClick:a[16]||(a[16]=e=>f.copyHeading("本地表单提交"))},"本地表单提交"),R,(0,l.Wm)(C,{title:"本地表单",file:"QRange/NativeForm"})])),_:1},8,["meta-title","related","nav","toc","meta-desc"])}var W=i(17536);const b={name:"DocMarkdownPage",setup(){return{metaTitle:"范围",metaDesc:"QRange Vue组件为用户提供了一种方法，可以从一个最小值和最大值之间的子范围中进行选择，并带有可选步骤。",related:[{name:"滑块",category:"表单组件",path:"/vue-components/slider"},{name:"字段(包装器)",category:"表单组件",path:"/vue-components/field"}],nav:[{name:"滑块",category:"表单组件",path:"/vue-components/slider",dir:"left"},{name:"时间选择器",category:"表单组件",path:"/vue-components/time",dir:"right"}],toc:[{id:"qrange-api",title:"QRange API"},{id:"使用方法",title:"使用方法"},{id:"标准",title:"标准",sub:!0},{id:"垂直方向",title:"垂直方向",sub:!0},{id:"带有内部最小-最大值",title:"带有内部最小/最大值",sub:!0},{id:"带步骤",title:"带步骤",sub:!0},{id:"带标签",title:"带标签",sub:!0},{id:"标记",title:"标记",sub:!0},{id:"标记标签",title:"标记标签",sub:!0},{id:"其他定制",title:"其他定制",sub:!0},{id:"拖动范围",title:"拖动范围",sub:!0},{id:"懒惰的输入",title:"懒惰的输入",sub:!0},{id:"空值",title:"空值",sub:!0},{id:"反向",title:"反向",sub:!0},{id:"黑暗、只读、禁用",title:"黑暗、只读、禁用",sub:!0},{id:"使用-qitem",title:"使用 QItem",sub:!0},{id:"本地表单提交",title:"本地表单提交",sub:!0}],copyHeading:W.Et}}};var y=i(74260);const v=(0,y.Z)(b,[["render",f]]),C=v}}]);