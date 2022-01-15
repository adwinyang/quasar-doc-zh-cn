"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[40746],{40746:(n,s,a)=>{a.r(s),a.d(s,{default:()=>R});var t=a(83673);const o=(0,t._)("p",null,"Notify是一个Quasar插件，可以以通知的形式向用户显示动画消息（浮动在页面中的所有内容之上）。它们对于提醒用户事件非常有用，甚至可以通过操作吸引用户。也被称为吐司（toast）或零食条（snackbar）。",-1),e=(0,t._)("pre",{class:"doc-code language-js"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,t._)("span",{class:"token comment"},"// 在Vue文件之外"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" Notify "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'quasar'"),(0,t.Uk)("\n\nNotify"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"create"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'Danger, Will Robinson! Danger!'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token comment"},"// 或用一个配置对象。"),(0,t.Uk)("\nNotify"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"create"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"message"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'Danger, Will Robinson! Danger!'"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token comment"},"// 在一个Vue文件中"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" useQuasar "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'quasar'"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token function"},"setup"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" $q "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"useQuasar"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n\n  $q"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"notify"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'Message'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token comment"},"// 或用一个配置对象。"),(0,t.Uk)("\n  $q"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"notify"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"{"),(0,t._)("span",{class:"token operator"},"..."),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])],-1),c=(0,t._)("div",{class:"doc-note doc-note--tip"},[(0,t._)("p",{class:"doc-note__title"},"TIP"),(0,t._)("p",null,"如果你定义了任何行动，当用户选中它时，通知将自动被驳回。")],-1),p=(0,t._)("p",null,'<doc-example title="有图标 "file=“Notify/Icon” />',-1),l=(0,t._)("div",{class:"doc-note doc-note--tip"},[(0,t._)("p",{class:"doc-note__title"},"TIP"),(0,t._)("p",null,"有关选项的完整列表，请查看API部分。")],-1),i=(0,t._)("p",null,"每个通知都有一个独特的组，它是由 消息+标题+多行+动作标签+位置 计算出来的。当同一组的多个通知被触发时，不是显示所有的通知并淹没整个视图，而是只有第一个通知和一个徽章留在屏幕上。徽章的内容代表了自第一个通知出现在屏幕上以来，同一通知被触发的次数(以及相同的位置)。",-1),k=(0,t._)("p",null,[(0,t.Uk)("然而，如果你想禁用这种行为，可以指定"),(0,t._)("code",{class:"doc-token"},"group: false"),(0,t.Uk)("。在下面的示例中，第一个按钮每次被点击都会触发相同的通知两次。第二个按钮的分组功能被禁用。然而，第三个按钮有一个自定义的组名，所以每一个后续的通知都会取代旧的通知并增加徽章的数量。")],-1),r=(0,t._)("p",null,"如果你愿意，有一种方法可以告诉用户通知何时会从屏幕上消失。那是针对超时时间没有设置为0的情况。",-1),u=(0,t._)("p",null,"如果你有一个正在进行的进程，并且你想通知用户它的进展，而不阻止他当前正在做的事情，那么你可以生成一个可更新的通知。在此过程中，显示一个旋转器也很有用。",-1),_=(0,t._)("p",null,"请注意，在下面的示例中，我们明确设置了 “group: false”(因为只有非分组的通知可以被更新)和 “timeout: 0”(因为我们想完全控制通知何时被驳回)。",-1),d=(0,t._)("p",null,"有四种开箱即用的预定义类型，你可以使用。“positive”(正面)、“negative”(负面)、“warning”(警告) 和 “info”(信息)。",-1),U=(0,t.Uk)("此外，你可以注册你自己的类型，甚至可以覆盖预定义的类型。这样做的最佳位置是在"),y=(0,t.Uk)("引导文件"),g=(0,t.Uk)(" 中。"),f=(0,t._)("pre",{class:"doc-code language-js"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,t._)("span",{class:"token comment"},"// 如何在引导文件中注册。"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" Notify "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'quasar'"),(0,t.Uk)("\n\nNotify"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"registerType"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'my-notif'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"icon"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'announcement'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"progress"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token boolean"},"true"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"color"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'brown'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"textColor"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'white'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"classes"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'glossy'"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n")])],-1),m=(0,t._)("p",null,[(0,t.Uk)('如果你指定 "html: true "属性，你可以在消息中使用HTML。'),(0,t._)("strong",null,"请注意，这可能导致XSS攻击"),(0,t.Uk)("，所以请确保你自己对消息进行消毒。")],-1),h=(0,t._)("p",null,[(0,t.Uk)("你可以通过设置"),(0,t._)("code",{class:"doc-token"},"attrs"),(0,t.Uk)("对象属性，在通知本身或单个通知动作上设置自定义HTML属性。")],-1),b=(0,t._)("pre",{class:"doc-code language-js"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" useQuasar "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'quasar'"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token function"},"setup"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" $q "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"useQuasar"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n\n  $q"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"notify"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token operator"},"..."),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token literal-property property"},"attrs"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token comment"},"// 为通知本身。"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token literal-property property"},"role"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'alertdialog'"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token literal-property property"},"actions"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token literal-property property"},"icon"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'close'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token comment"},"// 为个人行动(按钮)。"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token literal-property property"},"attrs"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token string-property property"},"'aria-label'"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'Dismiss'"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"]"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])],-1),w=(0,t._)("p",null,"通知的目的是只由用户来关闭，然而在特殊情况下，你可以通过编程来实现。当你设置无限期超时(0)时尤其有用。",-1),N=(0,t._)("pre",{class:"doc-code language-js"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" dismiss "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" $q"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"notify"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"{"),(0,t._)("span",{class:"token operator"},"..."),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token operator"},"..."),(0,t.Uk)("\n"),(0,t._)("span",{class:"token function"},"dismiss"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n")])],-1),C=(0,t._)("p",null,"有两种方法可以设置适用于所有通知的默认配置：通过 quasar.conf.js > framework > config > notify Object(见安装部分)或以编程方式(见下文)。",-1),q=(0,t.Uk)("我们将描述通过"),H=(0,t.Uk)("boot file"),j=(0,t.Uk)(" 来设置默认配置(在你的代码中的任何地方工作都是一样的，但boot file可以确保在你的应用程序启动之前就运行)。"),W=(0,t._)("p",null,"首先我们创建启动文件。让我们把它命名为 “notify-defaults.js”。",-1),v=(0,t._)("pre",{class:"doc-code language-bash"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,t.Uk)("$ quasar new boot notify-defaults "),(0,t._)("span",{class:"token punctuation"},"["),(0,t.Uk)("--format ts"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t.Uk)("\n")])],-1),T=(0,t._)("p",null,[(0,t.Uk)("将创建的 notify-defaults.js 文件添加到"),(0,t._)("code",{class:"doc-token"},"quasar.conf.js"),(0,t.Uk)("中的 "),(0,t._)("code",{class:"doc-token"},"boot"),(0,t.Uk)(" 数组中：")],-1),D=(0,t._)("pre",{class:"doc-code language-js"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,t.Uk)("module"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function-variable function"},"exports"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"function"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},"ctx"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token comment"},"// ..."),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token literal-property property"},"boot"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token string"},"'notify-defaults'"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token comment"},"// ..."),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])],-1),P=(0,t._)("p",null,[(0,t.Uk)("然后我们编辑新创建的"),(0,t._)("code",{class:"doc-token"},"/src/boot/notify-defaults.js"),(0,t.Uk)("：")],-1),Q=(0,t._)("pre",{class:"doc-code language-js"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" Notify "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'quasar'"),(0,t.Uk)("\n\nNotify"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"setDefaults"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"position"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'top-right'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"timeout"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"2500"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"textColor"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'white'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"actions"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(),(0,t._)("span",{class:"token literal-property property"},"icon"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'close'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token literal-property property"},"color"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'white'"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n")])],-1),M=(0,t._)("div",{class:"doc-note doc-note--warning"},[(0,t._)("p",{class:"doc-note__title"},"WARNING"),(0,t._)("p",null,[(0,t.Uk)("你只能通过这个方法设置默认的"),(0,t._)("code",{class:"doc-token"},"actions"),(0,t.Uk)("。在quasar.conf.js中用处理程序指定"),(0,t._)("code",{class:"doc-token"},"actions"),(0,t.Uk)("不能也不会起作用。")])],-1),$=(0,t._)("p",null,"我们也可以在一些Vue文件中设置默认值：",-1),x=(0,t._)("pre",{class:"doc-code language-js"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,t._)("span",{class:"token comment"},"// 在一个Vue组件中"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" useQuasar "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'quasar'"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token function"},"setup"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" $q "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"useQuasar"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n\n  $q"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("notify"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"setDefaults"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token literal-property property"},"position"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'top-right'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token literal-property property"},"timeout"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"2500"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token literal-property property"},"textColor"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'white'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token literal-property property"},"actions"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(),(0,t._)("span",{class:"token literal-property property"},"icon"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'close'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token literal-property property"},"color"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'white'"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])],-1);function I(n,s,a,I,A,L){const V=(0,t.up)("doc-api"),G=(0,t.up)("doc-installation"),R=(0,t.up)("doc-example"),S=(0,t.up)("doc-link"),B=(0,t.up)("doc-page");return(0,t.wg)(),(0,t.j4)(B,{"meta-title":I.metaTitle,title:"通知",nav:I.nav,toc:I.toc,"meta-desc":I.metaDesc},{default:(0,t.w5)((()=>[o,(0,t._)("h2",{id:"notify-api",class:"doc-heading doc-h2",onClick:s[0]||(s[0]=n=>I.copyHeading("notify-api"))},"Notify API"),(0,t.Wm)(V,{file:"Notify"}),(0,t._)("h2",{id:"安装",class:"doc-heading doc-h2",onClick:s[1]||(s[1]=n=>I.copyHeading("安装"))},"安装"),(0,t.Wm)(G,{plugins:"Notify",config:"notify"}),(0,t._)("h2",{id:"使用方法",class:"doc-heading doc-h2",onClick:s[2]||(s[2]=n=>I.copyHeading("使用方法"))},"使用方法"),(0,t._)("h3",{id:"基础",class:"doc-heading doc-h3",onClick:s[3]||(s[3]=n=>I.copyHeading("基础"))},"基础"),e,(0,t.Wm)(R,{title:"基础",file:"Notify/Basic"}),c,(0,t._)("h3",{id:"带标题",class:"doc-heading doc-h3",onClick:s[4]||(s[4]=n=>I.copyHeading("带标题"))},"带标题"),(0,t.Wm)(R,{title:"标题",file:"Notify/Cpation"}),(0,t._)("h3",{id:"带图标、头像或旋转器",class:"doc-heading doc-h3",onClick:s[5]||(s[5]=n=>I.copyHeading("带图标、头像或旋转器"))},"带图标、头像或旋转器"),p,(0,t.Wm)(R,{title:"有头像",file:"Notify/Avatar"}),(0,t.Wm)(R,{title:"有旋转器",file:"Notify/Spinner"}),(0,t._)("h3",{id:"有动作",class:"doc-heading doc-h3",onClick:s[6]||(s[6]=n=>I.copyHeading("有动作"))},"有动作"),(0,t.Wm)(R,{title:"有动作",file:"Notify/Actions"}),(0,t._)("h3",{id:"多行",class:"doc-heading doc-h3",onClick:s[7]||(s[7]=n=>I.copyHeading("多行"))},"多行"),(0,t.Wm)(R,{title:"多行",file:"Notify/Multiline"}),(0,t._)("h3",{id:"定位",class:"doc-heading doc-h3",onClick:s[8]||(s[8]=n=>I.copyHeading("定位"))},"定位"),(0,t.Wm)(R,{title:"定位和不同选项",file:"Notify/Positioning"}),l,(0,t._)("h3",{id:"分组",class:"doc-heading doc-h3",onClick:s[9]||(s[9]=n=>I.copyHeading("分组"))},"分组"),i,k,(0,t.Wm)(R,{title:"分组",file:"Notify/Grouping"}),(0,t.Wm)(R,{title:"自定义徽章",file:"Notify/GroupingCustomBadge"}),(0,t._)("h3",{id:"超时进度",class:"doc-heading doc-h3",onClick:s[10]||(s[10]=n=>I.copyHeading("超时进度"))},"超时进度"),r,(0,t.Wm)(R,{title:"超时进程",file:"Notify/TimeoutProgress"}),(0,t._)("h3",{id:"可更新的通知",class:"doc-heading doc-h3",onClick:s[11]||(s[11]=n=>I.copyHeading("可更新的通知"))},"可更新的通知"),u,_,(0,t.Wm)(R,{title:"可更新",file:"Notify/Updatable"}),(0,t._)("h3",{id:"预定义类型",class:"doc-heading doc-h3",onClick:s[12]||(s[12]=n=>I.copyHeading("预定义类型"))},"预定义类型"),d,(0,t.Wm)(R,{title:"开箱即用的类型",file:"Notify/PredefinedTypesDefault"}),(0,t._)("p",null,[U,(0,t.Wm)(S,{to:"/quasar-cli/boot-files"},{default:(0,t.w5)((()=>[y])),_:1}),g]),(0,t.Wm)(R,{title:"自定义类型",file:"Notify/PredefinedTypesCustom"}),f,(0,t._)("h3",{id:"使用html",class:"doc-heading doc-h3",onClick:s[13]||(s[13]=n=>I.copyHeading("使用html"))},"使用HTML"),m,(0,t.Wm)(R,{title:"不安全的HTML消息",file:"Notify/UnsafeHtml"}),(0,t._)("h3",{id:"设置属性",class:"doc-heading doc-h3",onClick:s[14]||(s[14]=n=>I.copyHeading("设置属性"))},"设置属性"),h,b,(0,t._)("h3",{id:"以编程方式关闭",class:"doc-heading doc-h3",onClick:s[15]||(s[15]=n=>I.copyHeading("以编程方式关闭"))},"以编程方式关闭"),w,N,(0,t._)("h3",{id:"设置默认值",class:"doc-heading doc-h3",onClick:s[16]||(s[16]=n=>I.copyHeading("设置默认值"))},"设置默认值"),C,(0,t._)("p",null,[q,(0,t.Wm)(S,{to:"/quasar-cli/boot-files"},{default:(0,t.w5)((()=>[H])),_:1}),j]),W,v,T,D,P,Q,M,$,x])),_:1},8,["meta-title","nav","toc","meta-desc"])}var A=a(17536);const L={name:"DocMarkdownPage",setup(){return{metaTitle:"通知",metaDesc:"一个 Quasar 插件，用于向用户显示动画信息，如通知、吐司（toast）或零食条（snackbar）。",nav:[{name:"Meta",category:"Quasar 插件",path:"/quasar-plugins/meta",dir:"left"},{name:"useQuasar",category:"Vue 可组合性",path:"/vue-composables/use-quasar",dir:"right"}],toc:[{id:"notify-api",title:"Notify API"},{id:"安装",title:"安装"},{id:"使用方法",title:"使用方法"},{id:"基础",title:"基础",sub:!0},{id:"带标题",title:"带标题",sub:!0},{id:"带图标、头像或旋转器",title:"带图标、头像或旋转器",sub:!0},{id:"有动作",title:"有动作",sub:!0},{id:"多行",title:"多行",sub:!0},{id:"定位",title:"定位",sub:!0},{id:"分组",title:"分组",sub:!0},{id:"超时进度",title:"超时进度",sub:!0},{id:"可更新的通知",title:"可更新的通知",sub:!0},{id:"预定义类型",title:"预定义类型",sub:!0},{id:"使用html",title:"使用HTML",sub:!0},{id:"设置属性",title:"设置属性",sub:!0},{id:"以编程方式关闭",title:"以编程方式关闭",sub:!0},{id:"设置默认值",title:"设置默认值",sub:!0}],copyHeading:A.Et}}};var V=a(74260);const G=(0,V.Z)(L,[["render",I]]),R=G}}]);