"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[78667],{78667:(e,o,t)=>{t.r(o),t.d(o,{default:()=>I});var i=t(83673);const a=(0,i._)("p",null,"The QToggle component is another basic element for user input. You can use this for turning settings, features or true/false inputs on and off.",-1),l={class:"doc-note doc-note--tip"},s=(0,i._)("p",{class:"doc-note__title"},"TIP",-1),n=(0,i.Uk)("Please also refer to the "),d=(0,i.Uk)("QOptionGroup"),c=(0,i.Uk)(" on other possibilities for creating groups of Checkboxes."),r=(0,i._)("p",null,[(0,i.Uk)("Use the "),(0,i._)("code",{class:"doc-token"},"color"),(0,i.Uk)(" prop to control the toggle’s color.")],-1),g=(0,i._)("p",null,[(0,i.Uk)("Instead of the default "),(0,i._)("code",{class:"doc-token"},"true"),(0,i.Uk)("/"),(0,i._)("code",{class:"doc-token"},"false"),(0,i.Uk)(" values, you can use custom ones.")],-1),u=(0,i._)("p",null,[(0,i.Uk)("In the example below, as soon as you click on the first QToggle it starts toggling between true/false. The second QToggle, on the other hand toggles between the three states (indeterminate/true/false) with help from "),(0,i._)("code",{class:"doc-token"},"toggle-indeterminate"),(0,i.Uk)(". You can optionally set the property "),(0,i._)("code",{class:"doc-token"},"indeterminate-value"),(0,i.Uk)(", otherwise the indeterminate value will be considered "),(0,i._)("code",{class:"doc-token"},"null"),(0,i.Uk)(".")],-1),h=(0,i._)("p",null,[(0,i.Uk)("By default, QToggle follows this chain when toggling: indeterminate -> checked -> unchecked. However, you can change this behavior through the "),(0,i._)("code",{class:"doc-token"},"toggle-order"),(0,i.Uk)(" prop. This property determines the order of the states and can be "),(0,i._)("code",{class:"doc-token"},"tf"),(0,i.Uk)(" (default) or "),(0,i._)("code",{class:"doc-token"},"ft"),(0,i.Uk)(" ("),(0,i._)("code",{class:"doc-token"},"t"),(0,i.Uk)(" stands for state of true/checked while "),(0,i._)("code",{class:"doc-token"},"f"),(0,i.Uk)(" for state of false/unchecked).")],-1),p=(0,i._)("p",null,"Toggling order is:",-1),m=(0,i._)("ul",null,[(0,i._)("li",null,[(0,i.Uk)("if "),(0,i._)("code",{class:"doc-token"},"toggle-indeterminate"),(0,i.Uk)(" is true, then: indet -> first state -> second state -> indet (and repeat)")]),(0,i._)("li",null,"otherwise (no toggle-indeterminate): indet -> first state -> second state -> first state -> second state -> …")],-1),k=(0,i._)("p",null,[(0,i.Uk)("If you have a number of toggles for a selection, use can use an Array as the model for all of them and specify "),(0,i._)("code",{class:"doc-token"},"val"),(0,i.Uk)(" prop on each toggle. If the toggle is ticked, its "),(0,i._)("code",{class:"doc-token"},"val"),(0,i.Uk)(" will be inserted into the array and vice versa.")],-1),f=(0,i._)("p",null,[(0,i.Uk)("Apart from the standard sizes below, you can define your own through the "),(0,i._)("code",{class:"doc-token"},"size"),(0,i.Uk)(" property (last one is a custom size).")],-1),_={class:"doc-note doc-note--tip"},b=(0,i._)("p",{class:"doc-note__title"},"TIP",-1),y=(0,i.Uk)("You can also use "),v=(0,i.Uk)("QOptionGroup"),w=(0,i.Uk)(", which simplifies the usage when you have groups of toggles, like in example below."),T=(0,i._)("p",null,[(0,i.Uk)("When dealing with a native form which has an "),(0,i._)("code",{class:"doc-token"},"action"),(0,i.Uk)(" and a "),(0,i._)("code",{class:"doc-token"},"method"),(0,i.Uk)(" (eg. when using Quasar with ASP.NET controllers), you need to specify the "),(0,i._)("code",{class:"doc-token"},"name"),(0,i.Uk)(" property on QToggle, otherwise formData will not contain it (if it should) - all value are converted to string (native behaviour, so do not use Object values):")],-1);function U(e,o,t,U,Q,W){const C=(0,i.up)("doc-link"),H=(0,i.up)("doc-api"),I=(0,i.up)("doc-example"),q=(0,i.up)("doc-page");return(0,i.wg)(),(0,i.j4)(q,{"meta-title":U.metaTitle,title:"Toggle",related:U.related,toc:U.toc,"meta-desc":U.metaDesc},{default:(0,i.w5)((()=>[a,(0,i._)("div",l,[s,(0,i._)("p",null,[n,(0,i.Wm)(C,{to:"/vue-components/option-group"},{default:(0,i.w5)((()=>[d])),_:1}),c])]),(0,i._)("h2",{id:"qtoggle-api",class:"doc-heading doc-h2",onClick:o[0]||(o[0]=e=>U.copyHeading("qtoggle-api"))},"QToggle API"),(0,i.Wm)(H,{file:"QToggle"}),(0,i._)("h2",{id:"usage",class:"doc-heading doc-h2",onClick:o[1]||(o[1]=e=>U.copyHeading("usage"))},"Usage"),(0,i._)("h3",{id:"basic",class:"doc-heading doc-h3",onClick:o[2]||(o[2]=e=>U.copyHeading("basic"))},"Basic"),r,(0,i.Wm)(I,{title:"Basic",file:"QToggle/Standard"}),(0,i._)("h3",{id:"with-labels",class:"doc-heading doc-h3",onClick:o[3]||(o[3]=e=>U.copyHeading("with-labels"))},"With labels"),(0,i.Wm)(I,{title:"With labels",file:"QToggle/Labels"}),(0,i._)("h3",{id:"keeping-color",class:"doc-heading doc-h3",onClick:o[4]||(o[4]=e=>U.copyHeading("keeping-color"))},"Keeping color"),(0,i.Wm)(I,{title:"Keep color",file:"QToggle/KeepColor"}),(0,i._)("h3",{id:"with-icons",class:"doc-heading doc-h3",onClick:o[5]||(o[5]=e=>U.copyHeading("with-icons"))},"With icons"),(0,i.Wm)(I,{title:"Icons",file:"QToggle/Icons"}),(0,i._)("h3",{id:"custom-model-values",class:"doc-heading doc-h3",onClick:o[6]||(o[6]=e=>U.copyHeading("custom-model-values"))},"Custom model values"),g,(0,i.Wm)(I,{title:"Custom model values",file:"QToggle/CustomValues"}),(0,i._)("h3",{id:"indeterminate-state",class:"doc-heading doc-h3",onClick:o[7]||(o[7]=e=>U.copyHeading("indeterminate-state"))},"Indeterminate state"),u,(0,i.Wm)(I,{title:"Indeterminate state",file:"QToggle/IndeterminateState"}),(0,i._)("h3",{id:"toggle-order",class:"doc-heading doc-h3",onClick:o[8]||(o[8]=e=>U.copyHeading("toggle-order"))},"Toggle order"),h,p,m,(0,i.Wm)(I,{title:"Toggle order",file:"QToggle/ToggleOrder"}),(0,i._)("h3",{id:"array-model",class:"doc-heading doc-h3",onClick:o[9]||(o[9]=e=>U.copyHeading("array-model"))},"Array model"),k,(0,i.Wm)(I,{title:"Array model",file:"QToggle/ArrayValue"}),(0,i._)("h3",{id:"dark-and-disable",class:"doc-heading doc-h3",onClick:o[10]||(o[10]=e=>U.copyHeading("dark-and-disable"))},"Dark and disable"),(0,i.Wm)(I,{title:"On a dark background",file:"QToggle/DarkBackground",dark:""}),(0,i.Wm)(I,{title:"Disabled state",file:"QToggle/Disabled"}),(0,i._)("h3",{id:"sizes",class:"doc-heading doc-h3",onClick:o[11]||(o[11]=e=>U.copyHeading("sizes"))},"Sizes"),f,(0,i.Wm)(I,{title:"Standard sizes",file:"QToggle/StandardSizes"}),(0,i._)("h3",{id:"with-qoptiongroup",class:"doc-heading doc-h3",onClick:o[12]||(o[12]=e=>U.copyHeading("with-qoptiongroup"))},"With QOptionGroup"),(0,i._)("div",_,[b,(0,i._)("p",null,[y,(0,i.Wm)(C,{to:"/vue-components/option-group"},{default:(0,i.w5)((()=>[v])),_:1}),w])]),(0,i.Wm)(I,{title:"Usage with QOptionGroup",file:"QToggle/OptionGroup"}),(0,i._)("h3",{id:"with-qitem",class:"doc-heading doc-h3",onClick:o[13]||(o[13]=e=>U.copyHeading("with-qitem"))},"With QItem"),(0,i.Wm)(I,{title:"With QItem",file:"QToggle/List"}),(0,i._)("h3",{id:"native-form-submit",class:"doc-heading doc-h3",onClick:o[14]||(o[14]=e=>U.copyHeading("native-form-submit"))},"Native form submit"),T,(0,i.Wm)(I,{title:"Native form",file:"QToggle/NativeForm"})])),_:1},8,["meta-title","related","toc","meta-desc"])}var Q=t(17536);const W={name:"DocMarkdownPage",setup(){return{metaTitle:"Toggle",metaDesc:"The QToggle component is a basic element for user input. You can use it for turning settings, features or true/false inputs on and off.",related:[{name:"复选框",category:"表单组件",path:"/vue-components/checkbox"},{name:"选项组",category:"表单组件",path:"/vue-components/option-group"},{name:"单选框",category:"表单组件",path:"/vue-components/radio"},{name:"按钮切换",category:"表单组件",path:"/vue-components/button-toggle"}],toc:[{id:"qtoggle-api",title:"QToggle API"},{id:"usage",title:"Usage"},{id:"basic",title:"Basic",sub:!0},{id:"with-labels",title:"With labels",sub:!0},{id:"keeping-color",title:"Keeping color",sub:!0},{id:"with-icons",title:"With icons",sub:!0},{id:"custom-model-values",title:"Custom model values",sub:!0},{id:"indeterminate-state",title:"Indeterminate state",sub:!0},{id:"toggle-order",title:"Toggle order",sub:!0},{id:"array-model",title:"Array model",sub:!0},{id:"dark-and-disable",title:"Dark and disable",sub:!0},{id:"sizes",title:"Sizes",sub:!0},{id:"with-qoptiongroup",title:"With QOptionGroup",sub:!0},{id:"with-qitem",title:"With QItem",sub:!0},{id:"native-form-submit",title:"Native form submit",sub:!0}],copyHeading:Q.Et}}};var C=t(74260);const H=(0,C.Z)(W,[["render",U]]),I=H}}]);