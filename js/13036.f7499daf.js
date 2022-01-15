"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[13036],{13036:(e,i,l)=>{l.r(i),l.d(i,{default:()=>w});var t=l(83673);const a=(0,t._)("p",null,"The QSlider is a great way for the user to specify a number value between a minimum and maximum value, with optional steps between valid values. The slider also has a focus indicator (highlighted slider button), which allows for keyboard adjustments of the slider.",-1),o=(0,t.Uk)("Also check its “sibling”, the "),n=(0,t.Uk)("QRange"),d=(0,t.Uk)(" component."),s=(0,t._)("div",{class:"doc-note doc-note--warning"},[(0,t._)("p",{class:"doc-note__title"},"WARNING"),(0,t._)("p",null,"You are responsible for accommodating the space around QSlider so that the label and marker labels won’t overlap the other content on your page. You can use CSS margin or padding for this purpose.")],-1),r=(0,t.Uk)("With inner min/max "),c=(0,t._)("p",null,[(0,t.Uk)("Sometimes you need to restrict the model value to an interval inside of the track’s length. For this purpose, use "),(0,t._)("code",{class:"doc-token"},"inner-min"),(0,t.Uk)(" and "),(0,t._)("code",{class:"doc-token"},"inner-max"),(0,t.Uk)(" props. First prop needs to be higher or equal to "),(0,t._)("code",{class:"doc-token"},"min"),(0,t.Uk)(" prop while the latter needs to be lower or equal to the "),(0,t._)("code",{class:"doc-token"},"max"),(0,t.Uk)(" prop.")],-1),h=(0,t._)("p",null,[(0,t.Uk)("The "),(0,t._)("code",{class:"doc-token"},"step"),(0,t.Uk)(" property can also be floating point number (or numeric "),(0,t._)("code",{class:"doc-token"},"0"),(0,t.Uk)(" if you need infinite precision).")],-1),m=(0,t._)("p",null,"In the example below, move the slider to see the label.",-1),u=(0,t._)("p",null,"The example below is better highlighting how QSlider handles label positioning so that it always stays inside the QSlider’s box horizontally.",-1),p=(0,t.Uk)("Marker labels "),b=(0,t._)("div",{class:"doc-note doc-note--tip"},[(0,t._)("p",{class:"doc-note__title"},"TIP on slots"),(0,t._)("p",null,[(0,t.Uk)("In order to use the marker label slots (see below), you must enable them by using the "),(0,t._)("code",{class:"doc-token"},"marker-labels"),(0,t.Uk)(" prop.")])],-1),k=(0,t.Uk)("Other customizations "),g=(0,t._)("p",null,[(0,t.Uk)("When dealing with a native form which has an "),(0,t._)("code",{class:"doc-token"},"action"),(0,t.Uk)(" and a "),(0,t._)("code",{class:"doc-token"},"method"),(0,t.Uk)(" (eg. when using Quasar with ASP.NET controllers), you need to specify the "),(0,t._)("code",{class:"doc-token"},"name"),(0,t.Uk)(" property on QSlider, otherwise formData will not contain it (if it should):")],-1);function y(e,i,l,y,f,S){const v=(0,t.up)("doc-link"),_=(0,t.up)("doc-api"),w=(0,t.up)("doc-example"),W=(0,t.up)("q-badge"),Q=(0,t.up)("doc-page");return(0,t.wg)(),(0,t.j4)(Q,{"meta-title":y.metaTitle,title:"Slider",related:y.related,toc:y.toc,"meta-desc":y.metaDesc},{default:(0,t.w5)((()=>[a,(0,t._)("p",null,[o,(0,t.Wm)(v,{to:"/vue-components/range"},{default:(0,t.w5)((()=>[n])),_:1}),d]),(0,t._)("h2",{id:"qslider-api",class:"doc-heading doc-h2",onClick:i[0]||(i[0]=e=>y.copyHeading("qslider-api"))},"QSlider API"),(0,t.Wm)(_,{file:"QSlider"}),(0,t._)("h2",{id:"usage",class:"doc-heading doc-h2",onClick:i[1]||(i[1]=e=>y.copyHeading("usage"))},"Usage"),s,(0,t._)("h3",{id:"standard",class:"doc-heading doc-h3",onClick:i[2]||(i[2]=e=>y.copyHeading("standard"))},"Standard"),(0,t.Wm)(w,{title:"Standard",file:"QSlider/Standard"}),(0,t._)("h3",{id:"vertical",class:"doc-heading doc-h3",onClick:i[3]||(i[3]=e=>y.copyHeading("vertical"))},"Vertical"),(0,t.Wm)(w,{title:"Vertical orientation",file:"QSlider/Vertical"}),(0,t._)("h3",{id:"with-inner-min-max",class:"doc-heading doc-h3",onClick:i[4]||(i[4]=e=>y.copyHeading("with-inner-min-max"))},[r,(0,t.Wm)(W,{align:"top",color:"brand-primary",label:"v2.4+"})]),c,(0,t.Wm)(w,{title:"Inner min/max",file:"QSlider/InnerMinMax"}),(0,t._)("h3",{id:"with-step",class:"doc-heading doc-h3",onClick:i[5]||(i[5]=e=>y.copyHeading("with-step"))},"With step"),(0,t.Wm)(w,{title:"With step",file:"QSlider/Step"}),h,(0,t.Wm)(w,{title:"Floating point",file:"QSlider/FloatingPoint"}),(0,t.Wm)(w,{title:"Snap to steps",file:"QSlider/Snap"}),(0,t._)("h3",{id:"with-label",class:"doc-heading doc-h3",onClick:i[6]||(i[6]=e=>y.copyHeading("with-label"))},"With label"),m,(0,t.Wm)(w,{title:"With label",file:"QSlider/Label"}),(0,t.Wm)(w,{title:"Always display label",file:"QSlider/LabelAlways"}),(0,t.Wm)(w,{title:"Custom label value",file:"QSlider/LabelValue"}),u,(0,t.Wm)(w,{title:"Long label",file:"QSlider/LabelLong"}),(0,t._)("h3",{id:"markers",class:"doc-heading doc-h3",onClick:i[7]||(i[7]=e=>y.copyHeading("markers"))},"Markers"),(0,t.Wm)(w,{title:"Markers",file:"QSlider/Markers"}),(0,t._)("h3",{id:"marker-labels",class:"doc-heading doc-h3",onClick:i[8]||(i[8]=e=>y.copyHeading("marker-labels"))},[p,(0,t.Wm)(W,{align:"top",color:"brand-primary",label:"v2.4+"})]),(0,t.Wm)(w,{title:"Marker labels",file:"QSlider/MarkerLabels"}),b,(0,t.Wm)(w,{title:"Marker label slots",file:"QSlider/MarkerLabelSlots"}),(0,t._)("h3",{id:"other-customizations",class:"doc-heading doc-h3",onClick:i[9]||(i[9]=e=>y.copyHeading("other-customizations"))},[k,(0,t.Wm)(W,{align:"top",color:"brand-primary",label:"v2.4+"})]),(0,t.Wm)(w,{title:"Color customizations",file:"QSlider/SliderColoring"}),(0,t.Wm)(w,{title:"Hide selection bar",file:"QSlider/NoSelection"}),(0,t.Wm)(w,{title:"Custom track images",file:"QSlider/TrackImages"}),(0,t.Wm)(w,{title:"Track & thumb size",file:"QSlider/SliderSizes"}),(0,t._)("h3",{id:"lazy-input",class:"doc-heading doc-h3",onClick:i[10]||(i[10]=e=>y.copyHeading("lazy-input"))},"Lazy input"),(0,t.Wm)(w,{title:"Lazy input",file:"QSlider/Lazy"}),(0,t._)("h3",{id:"null-value",class:"doc-heading doc-h3",onClick:i[11]||(i[11]=e=>y.copyHeading("null-value"))},"Null value"),(0,t.Wm)(w,{title:"Null value",file:"QSlider/Null"}),(0,t._)("h3",{id:"reverse",class:"doc-heading doc-h3",onClick:i[12]||(i[12]=e=>y.copyHeading("reverse"))},"Reverse"),(0,t.Wm)(w,{title:"In reverse",file:"QSlider/Reverse"}),(0,t._)("h3",{id:"dark-readonly-disable",class:"doc-heading doc-h3",onClick:i[13]||(i[13]=e=>y.copyHeading("dark-readonly-disable"))},"Dark, readonly, disable"),(0,t.Wm)(w,{title:"Dark",file:"QSlider/Dark",dark:""}),(0,t.Wm)(w,{title:"Readonly",file:"QSlider/Readonly"}),(0,t.Wm)(w,{title:"Disable",file:"QSlider/Disable"}),(0,t._)("h3",{id:"with-qitem",class:"doc-heading doc-h3",onClick:i[14]||(i[14]=e=>y.copyHeading("with-qitem"))},"With QItem"),(0,t.Wm)(w,{title:"With QItem",file:"QSlider/List"}),(0,t._)("h3",{id:"native-form-submit",class:"doc-heading doc-h3",onClick:i[15]||(i[15]=e=>y.copyHeading("native-form-submit"))},"Native form submit"),g,(0,t.Wm)(w,{title:"Native form",file:"QSlider/NativeForm"})])),_:1},8,["meta-title","related","toc","meta-desc"])}var f=l(17536);const S={name:"DocMarkdownPage",setup(){return{metaTitle:"Slider",metaDesc:"The QSlider Vue component is a great way for the user to specify a number value between a minimum and maximum value, with optional steps between valid values.",related:[{name:"范围",category:"表单组件",path:"/vue-components/range"},{name:"字段(包装器)",category:"表单组件",path:"/vue-components/field"}],toc:[{id:"qslider-api",title:"QSlider API"},{id:"usage",title:"Usage"},{id:"standard",title:"Standard",sub:!0},{id:"vertical",title:"Vertical",sub:!0},{id:"with-inner-min-max",title:"With inner min/max",sub:!0},{id:"with-step",title:"With step",sub:!0},{id:"with-label",title:"With label",sub:!0},{id:"markers",title:"Markers",sub:!0},{id:"marker-labels",title:"Marker labels",sub:!0},{id:"other-customizations",title:"Other customizations",sub:!0},{id:"lazy-input",title:"Lazy input",sub:!0},{id:"null-value",title:"Null value",sub:!0},{id:"reverse",title:"Reverse",sub:!0},{id:"dark-readonly-disable",title:"Dark, readonly, disable",sub:!0},{id:"with-qitem",title:"With QItem",sub:!0},{id:"native-form-submit",title:"Native form submit",sub:!0}],copyHeading:f.Et}}};var v=l(74260);const _=(0,v.Z)(S,[["render",y]]),w=_}}]);