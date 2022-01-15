"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[66566],{66566:(e,t,l)=>{l.r(t),l.d(t,{default:()=>Ae});var o=l(83673);const a=(0,o._)("p",null,"QDate组件提供了一个输入日期的方法。目前它支持公历(默认)和波斯历。",-1),n={class:"doc-note doc-note--tip"},c=(0,o._)("p",{class:"doc-note__title"},"TIP",-1),i=(0,o.Uk)("对于处理日期和/或时间，也可以查看"),d=(0,o.Uk)("Quasar Date Utils"),s=(0,o.Uk)("。"),u=(0,o._)("div",{class:"doc-note doc-note--warning"},[(0,o._)("p",{class:"doc-note__title"},"WARNING"),(0,o._)("p",null,"请注意，该模型的实际日期都是字符串格式。")],-1),p={class:"doc-note doc-note--tip"},_=(0,o._)("p",{class:"doc-note__title"},"TIP",-1),k=(0,o.Uk)("对于横向模式，你可以和"),r=(0,o._)("code",{class:"doc-token"},"$q.screen",-1),m=(0,o.Uk)("一起使用，使QDate具有响应性。例如："),U=(0,o._)("code",{class:"doc-token"},':landscape="$q.screen.gt.xs"',-1),f=(0,o.Uk)("。更多信息："),h=(0,o.Uk)("Quasar Screen Plugin"),g=(0,o.Uk)("。"),Q=(0,o._)("p",null,'请注意，下面的模型是一个数组，我们指定了 "多重 "属性。',-1),D=(0,o._)("p",null,"点击一个已经选择的日子将取消选择。",-1),v=(0,o._)("p",null,"注意在下面的例子中，模型是一个对象(单选)或一个对象的数组(多选)。",-1),w=(0,o._)("div",{class:"doc-note doc-note--tip"},[(0,o._)("p",{class:"doc-note__title"},"TIPS"),(0,o._)("ul",null,[(0,o._)("li",null,"点击一个已经选择的日子将取消选择它。"),(0,o._)("li",null,[(0,o.Uk)("用户的当前编辑范围也可以通过"),(0,o._)("code",{class:"doc-token"},"setEditingRange"),(0,o.Uk)("方法进行编程设置(查看API卡)。")]),(0,o._)("li",null,[(0,o.Uk)("关于当前的编辑范围，有两个有用的事件："),(0,o._)("code",{class:"doc-token"},"range-start"),(0,o.Uk)("和"),(0,o._)("code",{class:"doc-token"},"range-end"),(0,o.Uk)("(查看API卡)。")])])],-1),W=(0,o._)("div",{class:"doc-note doc-note--warning"},[(0,o._)("p",{class:"doc-note__title"},"WARNING"),(0,o._)("p",null,'范围 "属性只与 "选项 "属性部分兼容：选择的范围也可能包括 “不可选择” 的日子。')],-1),b=(0,o._)("p",null,'当不在 "最小 "模式时，QDate有一个计算的标题和副标题。你可以覆盖它，就像下面的例子。',-1),y=(0,o._)("p",null,"当点击标题时，QDate的视图就会变成日历，而当点击副标题时，视图就会切换到年份选择。",-1),q=(0,o._)("p",null,[(0,o.Uk)("当模型未被填充时(如"),(0,o._)("code",{class:"doc-token"},"null', "),(0,o.Uk)("void 0"),(0,o._)("code",{class:"doc-token"},"/"),(0,o.Uk)("undefined’)，QDate仍然要显示一年中某个月的日历。你可以为此使用"),(0,o._)("code",{class:"doc-token"},"default-year-month"),(0,o.Uk)("属性，否则将显示该年的当前月份。")],-1),C=(0,o._)("p",null,"可以改变默认视图。",-1),I=(0,o.Uk)(" 默认视图可以改变。"),T=(0,o.Uk)("每周第一天的应用取决于你所设置的"),H=(0,o.Uk)("Quasar语言包"),M=(0,o.Uk)("，但你也可以强制它，就像下面的例子。"),P=(0,o._)("p",null,'点击 "今天 "按钮，将日期设置为当前用户日期。需要头，所以你不能和 "最小 "模式一起使用它。',-1),Y=(0,o._)("p",null,[(0,o.Uk)("默认的模型掩码是"),(0,o._)("code",{class:"doc-token"},"YYYY/MM/DD"),(0,o.Uk)("，然而你也可以使用自定义的。")],-1),S=(0,o._)("code",{class:"doc-token"},"mask",-1),N=(0,o.Uk)("属性标记可以在"),A=(0,o.Uk)("Quasar Utils > Date utils"),R=(0,o.Uk)("找到。"),x=(0,o._)("div",{class:"doc-note doc-note--warning"},[(0,o._)("p",{class:"doc-note__title"},"Note on SSR"),(0,o._)("p",null,[(0,o.Uk)("在掩码中使用"),(0,o._)("code",{class:"doc-token"},"x"),(0,o.Uk)("或"),(0,o._)("code",{class:"doc-token"},"X"),(0,o.Uk)("(时间戳)可能会导致客户端的水合错误，因为模型字符串的解码必须用"),(0,o._)("code",{class:"doc-token"},"new Date()"),(0,o.Uk)("来完成，它需要考虑到当地的时区。因此，如果服务器与客户端处于不同的时区，那么服务器的渲染输出将与客户端的输出不同，所以激活将失败。")])],-1),E=(0,o._)("div",{class:"doc-note doc-note--danger"},[(0,o._)("p",{class:"doc-note__title"},"Note on persian calendar"),(0,o._)("p",null,[(0,o.Uk)("当使用波斯历时，QDate的掩码被强制为"),(0,o._)("code",{class:"doc-token"},"YYYY/MM/DD"),(0,o.Uk)("。")])],-1),B=(0,o._)("p",null,[(0,o.Uk)("如果你想在你的掩码中插入字符串，请确保用"),(0,o._)("code",{class:"doc-token"},"["),(0,o.Uk)("和``]`包围它们，否则这些字符可能会被解释为格式标记。")],-1),F=(0,o.Uk)("使用掩码将QDate和"),G=(0,o.Uk)("QTime"),j=(0,o.Uk)("连接到同一个模型中。"),L=(0,o._)("div",{class:"doc-note doc-note--tip"},[(0,o._)("p",{class:"doc-note__title"},"TIP"),(0,o._)("p",null,[(0,o.Uk)("如果你想以编程方式设置QDate的值，你可以通过重新指定你传递的值来实现。然而，更新的值需要是一个与你的掩码格式相同的字符串。例如，如果你的掩码是"),(0,o._)("code",{class:"doc-token"},"'ddd, MMM D, YYYY'"),(0,o.Uk)("，传递"),(0,o._)("code",{class:"doc-token"},"'2019/04/28'作为值是不行的，你需要传递"),(0,o.Uk)("’Sunday, Apr 28, 2019’代替。")])],-1),V=(0,o._)("p",null,[(0,o.Uk)("如果由于某种原因，你需要使用一个自定义的特定语言，而不是当前已经设置的Quasar语言包，你可以使用"),(0,o._)("code",{class:"doc-token"},"locale"),(0,o.Uk)("属性。")],-1),O=(0,o._)("p",null,'<doc-example title="自定义特定语言 "file=“QDate/CustomLocale” overflow />。',-1),$=(0,o._)("p",null,'<doc-example title="黑暗 "file=“QDate/Dark” overflow dark />',-1),K=(0,o._)("p",null,"第一个例子是使用一个数组，第二个例子是使用一个函数。",-1),X=(0,o._)("p",null,"<doc-example title=“事件” file=“QDate/Events” 溢出 />",-1),Z=(0,o._)("ul",null,[(0,o._)("li",null,[(0,o.Uk)("你可以使用"),(0,o._)("code",{class:"doc-token"},"options"),(0,o.Uk)("属性来限制用户选择某些时间。")]),(0,o._)("li",null,[(0,o.Uk)("另外，为了更深入地限制选项，你也可以为"),(0,o._)("code",{class:"doc-token"},"options-fn"),(0,o.Uk)("属性提供一个函数(下面第二个和第三个例子)。")])],-1),z=(0,o._)("div",{class:"doc-note doc-note--warning"},[(0,o._)("p",{class:"doc-note__title"},"WARNING"),(0,o._)("p",null,[(0,o._)("code",{class:"doc-token"},"options"),(0,o.Uk)("属性只与"),(0,o._)("code",{class:"doc-token"},"range"),(0,o.Uk)('属性部分兼容。范围可能包含 "不可选择的 "日子。')])],-1),J=(0,o._)("p",null,"在下面的例子中，导航被限制在2020/07和2020/09之间。",-1),ee=(0,o.Uk)(" 溢出。"),te=(0,o._)("p",null,"你可以使用默认的槽来添加按钮。",-1),le=(0,o.Uk)("更多信息："),oe=(0,o.Uk)("QSplitter"),ae=(0,o.Uk)(", "),ne=(0,o.Uk)("QTabPanels"),ce=(0,o.Uk)("。"),ie=(0,o._)("p",null,"在QInput上用相同的模型连接一个QDate和QTime。",-1),de=(0,o._)("p",null,[(0,o.Uk)("下面是QInput "),(0,o._)("code",{class:"doc-token"},"mask"),(0,o.Uk)("和"),(0,o._)("code",{class:"doc-token"},"rules"),(0,o.Uk)("属性的"),(0,o._)("strong",null,"帮助"),(0,o.Uk)("。你可以使用这些以获得便利，或者写下指定你的[自定义需求]的字符串(/vue-components/input#mask)。")],-1),se=(0,o.Uk)("属性"),ue=(0,o._)("code",{class:"doc-token"},"mask",-1),pe=(0,o.Uk)("帮助器。"),_e=(0,o.Uk)("完整列表"),ke=(0,o.Uk)("。"),re=(0,o.Uk)("Property "),me=(0,o._)("code",{class:"doc-token"},"rules",-1),Ue=(0,o.Uk)(" helpers: "),fe=(0,o.Uk)("完整列表"),he=(0,o.Uk)("。"),ge=(0,o._)("p",null,"示例：“date”, “time”, “fulltime”.",-1),Qe=(0,o.Uk)("更多信息："),De=(0,o.Uk)("QInput"),ve=(0,o.Uk)("。"),we={class:"doc-note doc-note--tip"},We=(0,o._)("p",{class:"doc-note__title"},"TIP",-1),be=(0,o.Uk)("你可以把它与Quasar"),ye=(0,o.Uk)("语言包"),qe=(0,o.Uk)("结合起来，如波斯语(Farsi, "),Ce=(0,o._)("code",{class:"doc-token"},"fa-ir",-1),Ie=(0,o.Uk)(")，使QDate字符串也得到翻译，以获得完整的体验。"),Te=(0,o._)("div",{class:"doc-note doc-note--warning"},[(0,o._)("p",{class:"doc-note__title"},"WARNING"),(0,o._)("p",null,[(0,o.Uk)("当使用波斯历时，QDate的掩码被强制为"),(0,o._)("code",{class:"doc-token"},"YYYY/MM/DD"),(0,o.Uk)("。")])],-1),He=(0,o._)("p",null,[(0,o.Uk)("当处理一个有 "),(0,o._)("code",{class:"doc-token"},"action"),(0,o.Uk)("和"),(0,o._)("code",{class:"doc-token"},"method"),(0,o.Uk)('的本地表单时(例如，当使用Quasar和ASP.NET控制器时)，你需要指定QDate的 "name "属性，否则formData将不包含它(如果它应该包含)。')],-1);function Me(e,t,l,Me,Pe,Ye){const Se=(0,o.up)("doc-link"),Ne=(0,o.up)("doc-api"),Ae=(0,o.up)("doc-example"),Re=(0,o.up)("q-btn"),xe=(0,o.up)("doc-page");return(0,o.wg)(),(0,o.j4)(xe,{"meta-title":Me.metaTitle,title:"日期选择器",related:Me.related,nav:Me.nav,toc:Me.toc,"meta-desc":Me.metaDesc},{default:(0,o.w5)((()=>[a,(0,o._)("div",n,[c,(0,o._)("p",null,[i,(0,o.Wm)(Se,{to:"/quasar-utils/dateutils"},{default:(0,o.w5)((()=>[d])),_:1}),s])]),(0,o._)("h2",{id:"qdate-api",class:"doc-heading doc-h2",onClick:t[0]||(t[0]=e=>Me.copyHeading("qdate-api"))},"QDate API"),(0,o.Wm)(Ne,{file:"QDate"}),(0,o._)("h2",{id:"用法",class:"doc-heading doc-h2",onClick:t[1]||(t[1]=e=>Me.copyHeading("用法"))},"用法"),u,(0,o._)("h3",{id:"基础",class:"doc-heading doc-h3",onClick:t[2]||(t[2]=e=>Me.copyHeading("基础"))},"基础"),(0,o.Wm)(Ae,{title:"基础",file:"QDate/Basic",overflow:""}),(0,o._)("div",p,[_,(0,o._)("p",null,[k,r,m,U,f,(0,o.Wm)(Se,{to:"/options/screen-plugin"},{default:(0,o.w5)((()=>[h])),_:1}),g])]),(0,o.Wm)(Ae,{title:"景观",file:"QDate/Landscape",overflow:""}),(0,o._)("h3",{id:"多重选择",class:"doc-heading doc-h3",onClick:t[3]||(t[3]=e=>Me.copyHeading("多重选择"))},"多重选择"),Q,D,(0,o.Wm)(Ae,{title:"多天",file:"QDate/SelectionMultiple",overflow:""}),(0,o._)("h3",{id:"范围选择",class:"doc-heading doc-h3",onClick:t[4]||(t[4]=e=>Me.copyHeading("范围选择"))},"范围选择"),v,w,W,(0,o.Wm)(Ae,{title:"单一范围",file:"QDate/SelectionRange",overflow:""}),(0,o.Wm)(Ae,{title:"多个范围",file:"QDate/SelectionRangeMultiple",overflow:""}),(0,o._)("h3",{id:"自定义标题和副标题",class:"doc-heading doc-h3",onClick:t[5]||(t[5]=e=>Me.copyHeading("自定义标题和副标题"))},"自定义标题和副标题"),b,y,(0,o.Wm)(Ae,{title:"自定义标题和副标题",file:"QDate/CustomTitleSubtitle",overflow:""}),(0,o._)("h3",{id:"功能",class:"doc-heading doc-h3",onClick:t[6]||(t[6]=e=>Me.copyHeading("功能"))},"功能"),q,(0,o.Wm)(Ae,{title:"默认年月",file:"QDate/DefaultYearMonth",overflow:""}),C,(0,o._)("p",null,[(0,o.Wm)(Ae,{title:"默认视图",file:"QDate/DefaultView",overflow:""}),I]),(0,o._)("p",null,[T,(0,o.Wm)(Se,{to:"/options/quasar-language-packs"},{default:(0,o.w5)((()=>[H])),_:1}),M]),(0,o.Wm)(Ae,{title:"一周的第一天",file:"QDate/FirstDayOfWeek",overflow:""}),P,(0,o.Wm)(Ae,{title:"今天按钮",file:"QDate/TodayBtn",overflow:""}),(0,o.Wm)(Ae,{title:"禁用和只读",file:"QDate/DisableReadonly",overflow:""}),(0,o._)("h3",{id:"模型掩码",class:"doc-heading doc-h3",onClick:t[7]||(t[7]=e=>Me.copyHeading("模型掩码"))},"模型掩码"),Y,(0,o._)("p",null,[S,N,(0,o.Wm)(Se,{to:"/quasar-utils/dateutils#format-for-display"},{default:(0,o.w5)((()=>[A])),_:1}),R]),x,E,(0,o.Wm)(Ae,{title:"简单掩码",file:"QDate/MaskSimple",overflow:""}),B,(0,o.Wm)(Ae,{title:"带有转义字符的掩码",file:"QDate/MaskEscape",overflow:""}),(0,o._)("p",null,[F,(0,o.Wm)(Se,{to:"/vue-components/time"},{default:(0,o.w5)((()=>[G])),_:1}),j]),(0,o.Wm)(Ae,{title:"同一模型上的QDate和QTime",file:"QDate/MaskDateTime",overflow:""}),L,(0,o._)("h3",{id:"自定义特定的语言环境",class:"doc-heading doc-h3",onClick:t[8]||(t[8]=e=>Me.copyHeading("自定义特定的语言环境"))},"自定义特定的语言环境"),V,O,(0,o._)("h3",{id:"着色",class:"doc-heading doc-h3",onClick:t[9]||(t[9]=e=>Me.copyHeading("着色"))},"着色"),(0,o.Wm)(Ae,{title:"着色",file:"QDate/Color",overflow:""}),$,(0,o._)("h3",{id:"突出显示事件",class:"doc-heading doc-h3",onClick:t[10]||(t[10]=e=>Me.copyHeading("突出显示事件"))},"突出显示事件"),K,X,(0,o.Wm)(Ae,{title:"事件颜色",file:"QDate/EventColor",overflow:""}),(0,o._)("h3",{id:"限制性选项",class:"doc-heading doc-h3",onClick:t[11]||(t[11]=e=>Me.copyHeading("限制性选项"))},"限制性选项"),Z,z,(0,o.Wm)(Ae,{title:"选项",file:"QDate/Options",overflow:""}),(0,o._)("h3",{id:"应用导航边界",class:"doc-heading doc-h3",onClick:t[12]||(t[12]=e=>Me.copyHeading("应用导航边界"))},"应用导航边界"),J,(0,o._)("p",null,[(0,o.Wm)(Ae,{title:"导航边界",file:"QDate/NavigationBoundaries",overflow:""}),ee]),(0,o._)("h3",{id:"带附加按钮",class:"doc-heading doc-h3",onClick:t[13]||(t[13]=e=>Me.copyHeading("带附加按钮"))},"带附加按钮"),te,(0,o.Wm)(Ae,{title:"有了额外的按钮",file:"QDate/AdditionalButtons",overflow:""}),(0,o._)("h3",{id:"使用qsplitter和qtabpanels",class:"doc-heading doc-h3",onClick:t[14]||(t[14]=e=>Me.copyHeading("使用qsplitter和qtabpanels"))},"使用QSplitter和QTabPanels"),(0,o.Wm)(Ae,{title:"使用QSplitter和QTabPanels",file:"QDate/Splitter"}),(0,o._)("p",null,[le,(0,o.Wm)(Se,{to:"/vue-components/splitter"},{default:(0,o.w5)((()=>[oe])),_:1}),ae,(0,o.Wm)(Se,{to:"/vue-components/tab-panels"},{default:(0,o.w5)((()=>[ne])),_:1}),ce]),(0,o._)("h3",{id:"使用qinput",class:"doc-heading doc-h3",onClick:t[15]||(t[15]=e=>Me.copyHeading("使用qinput"))},"使用QInput"),(0,o.Wm)(Ae,{title:"使用QInput",file:"QDate/Input"}),ie,(0,o.Wm)(Ae,{title:"用QInput连接QDate和QTime",file:"QDate/InputFull",overflow:""}),de,(0,o._)("ul",null,[(0,o._)("li",null,[se,ue,pe,(0,o.Wm)(Se,{to:"https://github.com/quasarframework/quasar/blob/dev/ui/src/components/input/use-mask.js#L6"},{default:(0,o.w5)((()=>[_e])),_:1}),ke]),(0,o._)("li",null,[re,me,Ue,(0,o.Wm)(Se,{to:"https://github.com/quasarframework/quasar/blob/dev/ui/src/utils/patterns.js"},{default:(0,o.w5)((()=>[fe])),_:1}),he])]),ge,(0,o._)("p",null,[Qe,(0,o.Wm)(Se,{to:"/vue-components/input"},{default:(0,o.w5)((()=>[De])),_:1}),ve]),(0,o._)("h3",{id:"波斯日历",class:"doc-heading doc-h3",onClick:t[16]||(t[16]=e=>Me.copyHeading("波斯日历"))},"波斯日历"),(0,o._)("div",we,[We,(0,o._)("p",null,[be,(0,o.Wm)(Se,{to:"/options/quasar-language-packs"},{default:(0,o.w5)((()=>[ye])),_:1}),qe,Ce,Ie])]),Te,(0,o.Wm)(Re,{href:"https://codepen.io/rstoenescu/pen/MWKpbNa",target:"_blank",label:"查看示例","icon-right":"启动",color:"品牌主打"}),(0,o._)("h3",{id:"本地表单提交",class:"doc-heading doc-h3",onClick:t[17]||(t[17]=e=>Me.copyHeading("本地表单提交"))},"本地表单提交"),He,(0,o.Wm)(Ae,{title:"本地表单",file:"QDate/NativeForm"})])),_:1},8,["meta-title","related","nav","toc","meta-desc"])}var Pe=l(17536);const Ye={name:"DocMarkdownPage",setup(){return{metaTitle:"日期选择器",metaDesc:"QDate Vue 组件提供了一种方法来输入公历或波斯历的日期。",related:[{name:"时间选择器",category:"表单组件",path:"/vue-components/time"},{name:"日期工具",category:"Quasar 工具",path:"/quasar-utils/date-utils"},{name:"字段(包装器)",category:"表单组件",path:"/vue-components/field"}],nav:[{name:"时间选择器",category:"表单组件",path:"/vue-components/time",dir:"left"},{name:"图标",category:"Vue 组件",path:"/vue-components/icon",dir:"right"}],toc:[{id:"qdate-api",title:"QDate API"},{id:"用法",title:"用法"},{id:"基础",title:"基础",sub:!0},{id:"多重选择",title:"多重选择",sub:!0},{id:"范围选择",title:"范围选择",sub:!0},{id:"自定义标题和副标题",title:"自定义标题和副标题",sub:!0},{id:"功能",title:"功能",sub:!0},{id:"模型掩码",title:"模型掩码",sub:!0},{id:"自定义特定的语言环境",title:"自定义特定的语言环境",sub:!0},{id:"着色",title:"着色",sub:!0},{id:"突出显示事件",title:"突出显示事件",sub:!0},{id:"限制性选项",title:"限制性选项",sub:!0},{id:"应用导航边界",title:"应用导航边界",sub:!0},{id:"带附加按钮",title:"带附加按钮",sub:!0},{id:"使用qsplitter和qtabpanels",title:"使用QSplitter和QTabPanels",sub:!0},{id:"使用qinput",title:"使用QInput",sub:!0},{id:"波斯日历",title:"波斯日历",sub:!0},{id:"本地表单提交",title:"本地表单提交",sub:!0}],copyHeading:Pe.Et}}};var Se=l(74260);const Ne=(0,Se.Z)(Ye,[["render",Me]]),Ae=Ne}}]);