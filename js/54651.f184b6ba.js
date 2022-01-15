"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[54651],{54651:(e,o,t)=>{t.r(o),t.d(o,{default:()=>W});var i=t(83673);const a=(0,i._)("p",null,"QRadio组件是另一个用于用户输入的基本元素。你可以用它来为用户提供一种方法，让他们从多个选择中挑选一个选项。",-1),d={class:"doc-note doc-note--tip"},n=(0,i._)("p",{class:"doc-note__title"},"TIP",-1),c=(0,i.Uk)("也请参考"),l=(0,i.Uk)("QOptionGroup"),s=(0,i.Uk)("关于创建Radios组的其他可能性。"),p=(0,i._)("p",null,[(0,i.Uk)("在下面例子的第二行中，属性"),(0,i._)("code",{class:"doc-token"},"keep-color"),(0,i.Uk)("被用来在单选按钮不处于切换状态时保留传入的颜色。")],-1),r=(0,i._)("p",null,"除了下面的标准尺寸外，你可以通过`size’属性定义你自己的尺寸(最后一个是自定义尺寸)。",-1),u={class:"doc-note doc-note--tip"},h=(0,i._)("p",{class:"doc-note__title"},"TIP",-1),m=(0,i.Uk)("你也可以使用"),g=(0,i.Uk)("QOptionGroup"),k=(0,i.Uk)("，当你有一组收音机时，它可以简化使用，比如下面的例子。"),_=(0,i._)("p",null,[(0,i.Uk)("In the example below, we are rendering a "),(0,i._)("code",{class:"doc-token"},"<label>"),(0,i.Uk)(" tag (notice "),(0,i._)("code",{class:"doc-token"},'tag="label"'),(0,i.Uk)(") so the QRadio will respond to clicks on QItems to change toggle state.")],-1),v=(0,i._)("p",null,[(0,i.Uk)("When dealing with a native form which has an "),(0,i._)("code",{class:"doc-token"},"action"),(0,i.Uk)(" and a "),(0,i._)("code",{class:"doc-token"},"method"),(0,i.Uk)(" (eg. when using Quasar with ASP.NET controllers), you need to specify the "),(0,i._)("code",{class:"doc-token"},"name"),(0,i.Uk)(" property on QRadio, otherwise formData will not contain it (if it should) - all value are converted to string (native behaviour, so do not use Object values):")],-1);function b(e,o,t,b,f,Q){const y=(0,i.up)("doc-link"),w=(0,i.up)("doc-api"),W=(0,i.up)("doc-example"),U=(0,i.up)("doc-page");return(0,i.wg)(),(0,i.j4)(U,{"meta-title":b.metaTitle,title:"单选框",related:b.related,nav:b.nav,toc:b.toc,"meta-desc":b.metaDesc},{default:(0,i.w5)((()=>[a,(0,i._)("div",d,[n,(0,i._)("p",null,[c,(0,i.Wm)(y,{to:"/vue-components/option-group"},{default:(0,i.w5)((()=>[l])),_:1}),s])]),(0,i._)("h2",{id:"qradio-api",class:"doc-heading doc-h2",onClick:o[0]||(o[0]=e=>b.copyHeading("qradio-api"))},"QRadio API"),(0,i.Wm)(w,{file:"QRadio"}),(0,i._)("h2",{id:"用法",class:"doc-heading doc-h2",onClick:o[1]||(o[1]=e=>b.copyHeading("用法"))},"用法"),(0,i._)("h3",{id:"标准",class:"doc-heading doc-h3",onClick:o[2]||(o[2]=e=>b.copyHeading("标准"))},"标准"),(0,i.Wm)(W,{title:"标准",file:"QLadio/Standard"}),(0,i._)("h3",{id:"密集型",class:"doc-heading doc-h3",onClick:o[3]||(o[3]=e=>b.copyHeading("密集型"))},"密集型"),(0,i.Wm)(W,{title:"密集",file:"QRadio/Dense"}),(0,i._)("h3",{id:"着色",class:"doc-heading doc-h3",onClick:o[4]||(o[4]=e=>b.copyHeading("着色"))},"着色"),p,(0,i.Wm)(W,{title:"着色",file:"QLadio/Coloring"}),(0,i._)("h3",{id:"深色和禁用",class:"doc-heading doc-h3",onClick:o[5]||(o[5]=e=>b.copyHeading("深色和禁用"))},"深色和禁用"),(0,i.Wm)(W,{title:"在黑暗背景下",file:"QRadio/OnDarkBackground",dark:""}),(0,i.Wm)(W,{title:"禁用",file:"QRadio/Disable"}),(0,i._)("h3",{id:"左侧的标签",class:"doc-heading doc-h3",onClick:o[6]||(o[6]=e=>b.copyHeading("左侧的标签"))},"左侧的标签"),(0,i.Wm)(W,{title:"标签在左侧",file:"QRadio/LabelPosition"}),(0,i._)("h3",{id:"尺寸",class:"doc-heading doc-h3",onClick:o[7]||(o[7]=e=>b.copyHeading("尺寸"))},"尺寸"),r,(0,i.Wm)(W,{title:"标准尺寸",file:"QLadio/StandardSizes"}),(0,i._)("h3",{id:"使用qoptiongroup",class:"doc-heading doc-h3",onClick:o[8]||(o[8]=e=>b.copyHeading("使用qoptiongroup"))},"使用QOptionGroup"),(0,i._)("div",u,[h,(0,i._)("p",null,[m,(0,i.Wm)(y,{to:"/vue-components/option-group"},{default:(0,i.w5)((()=>[g])),_:1}),k])]),(0,i.Wm)(W,{title:"Usage with QOptionGroup",file:"QRadio/OptionGroup"}),(0,i._)("h3",{id:"with-qitem",class:"doc-heading doc-h3",onClick:o[9]||(o[9]=e=>b.copyHeading("with-qitem"))},"With QItem"),_,(0,i.Wm)(W,{title:"With QItem",file:"QRadio/InaList"}),(0,i._)("h3",{id:"native-form-submit",class:"doc-heading doc-h3",onClick:o[10]||(o[10]=e=>b.copyHeading("native-form-submit"))},"Native form submit"),v,(0,i.Wm)(W,{title:"Native form",file:"QRadio/NativeForm"})])),_:1},8,["meta-title","related","nav","toc","meta-desc"])}var f=t(17536);const Q={name:"DocMarkdownPage",setup(){return{metaTitle:"单选框",metaDesc:"QRadio Vue组件是一个用户输入的基本元素。它可以用来为用户提供一种方式，让他们从多个选择中挑选一个选项。",related:[{name:"选项组",category:"表单组件",path:"/vue-components/option-group"},{name:"按钮切换",category:"表单组件",path:"/vue-components/button-toggle"},{name:"复选框",category:"表单组件",path:"/vue-components/checkbox"},{name:"切换开关",category:"表单组件",path:"/vue-components/toggle"}],nav:[{name:"字段(包装器)",category:"表单组件",path:"/vue-components/field",dir:"left"},{name:"复选框",category:"表单组件",path:"/vue-components/checkbox",dir:"right"}],toc:[{id:"qradio-api",title:"QRadio API"},{id:"用法",title:"用法"},{id:"标准",title:"标准",sub:!0},{id:"密集型",title:"密集型",sub:!0},{id:"着色",title:"着色",sub:!0},{id:"深色和禁用",title:"深色和禁用",sub:!0},{id:"左侧的标签",title:"左侧的标签",sub:!0},{id:"尺寸",title:"尺寸",sub:!0},{id:"使用qoptiongroup",title:"使用QOptionGroup",sub:!0},{id:"with-qitem",title:"With QItem",sub:!0},{id:"native-form-submit",title:"Native form submit",sub:!0}],copyHeading:f.Et}}};var y=t(74260);const w=(0,y.Z)(Q,[["render",b]]),W=w}}]);