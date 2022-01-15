"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[42328],{42328:(n,t,a)=>{a.r(t),a.d(t,{default:()=>L});var s=a(83673);const o=(0,s._)("p",null,"QEditor组件是一个WYSIWYG(“所见即所得”)编辑器组件，使用户可以编写甚至粘贴HTML。它使用所谓的设计模式和跨浏览器的`内容可编辑’接口。这里有一些来自MDN webdocs的可供参考的页面，其中有关于底层技术的更详细的信息。",-1),e=(0,s.Uk)("使内容可编辑"),c=(0,s.Uk)("设计模式"),l=(0,s.Uk)("execCommand()参考"),u=(0,s.Uk)("contentEditable spec"),p=(0,s._)("div",{class:"doc-note doc-note--warning"},[(0,s._)("p",{class:"doc-note__title"},"WARNING"),(0,s._)("p",null,[(0,s.Uk)("在这第一个例子中，编辑器下面有两个卡片。第一张显示的是使用双胡子的未解析的html，而第二张显示的是使用"),(0,s._)("code",{class:"doc-token"},'v-html="editor"'),(0,s.Uk)("的已渲染版本。这样使用v-html会使你的用户容易受到跨站脚本攻击。如果内容是用户生成的，请确保在渲染或服务器端(或两者)对其时行清理。")])],-1),i=(0,s._)("p",null,"在默认情况下，QEditor提供了大部分(如果不是全部)你在所见即所得编辑器中需要的命令。粗体、斜体、删除、下划线、无序(列表)、有序(列表)、下标、上标、链接、全屏、引用、向左(对齐)、居中(对齐)、向右(对齐)、对齐(对齐)、打印、缩进、删除格式、hr、撤销、重做、h1到h6、p(段落)、code(代码段落)、size-1到size-7。",-1),k=(0,s._)("p",null,"这些命令中的每一个都预先配置了图标和它们自己的国际化工具提示。然而，如果你想覆盖它们的一些设置，你可以在定义对象属性的帮助下这样做。",-1),_=(0,s._)("pre",{class:"doc-code language-html"},[(0,s._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},":definitions=\"{\n  bold: {label: 'Bold', icon: null, tip: 'My bold tooltip'}\n}\"\n")],-1),d=(0,s._)("p",null,"下面是一个增加自定义定义的例子。在这种情况下，请确保你不与默认的命令相重叠。",-1),r=(0,s._)("pre",{class:"doc-code language-html"},[(0,s._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("q-editor")]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token attr-name"},"v-model"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("model"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token attr-name"},":toolbar"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("[\n    [\n      {\n        label: "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("Icons & Label"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(",\n        icon: "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("filter_1"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(",\n        fixedLabel: true,\n        fixedIcon: true,\n        options: ["),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("bold"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(", "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("italic"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(", "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("strike"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(", "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("underline"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("]\n      }\n    ],\n    [\n      {\n        label: "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("Only label"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(",\n        icon: "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("filter_2"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(",\n        fixedLabel: true,\n        fixedIcon: true,\n        list: "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("no-icons"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(",\n        options: ["),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("bold"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(", "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("italic"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(", "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("strike"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(", "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("underline"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("]\n      }\n    ],\n    [\n      {\n        label: "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("Only icons"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(",\n        icon: "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("filter_3"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(",\n        fixedLabel: true,\n        fixedIcon: true,\n        list: "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("only-icons"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(",\n        options: ["),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("bold"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(", "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("italic"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(", "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("strike"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(", "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("underline"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("]\n      }\n    ]\n  ]"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)("\n"),(0,s._)("span",{class:"token punctuation"},"/>")]),(0,s.Uk)("\n")])],-1),U=(0,s._)("p",null,"用户只能从每个下拉菜单中选择一个选项。",-1),g=(0,s._)("ul",null,[(0,s._)("li",null,"第一个下拉菜单的图标和标签根据当前的选择而改变。"),(0,s._)("li",null,"第二个有固定的标签，但有动态图标"),(0,s._)("li",null,"第三项有固定的图标，但有动态标签")],-1),m=(0,s._)("pre",{class:"doc-code language-html"},[(0,s._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("q-editor")]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token attr-name"},"v-model"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("model"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token attr-name"},":toolbar"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("[\n    [\n      {\n        label: "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("Dynamic label"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(",\n        icon: "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("help_outline"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(",\n        options: ["),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("left"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(", "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("center"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(", "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("right"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(", "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("justify"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("]\n      }\n    ],\n    [\n      {\n        label: "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("Static label"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(",\n        fixedLabel: true,\n        options: ["),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("left"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(", "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("center"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(", "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("right"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(", "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("justify"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("]\n      }\n    ],\n    [\n      {\n        label: "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("Some label"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(",\n        icon: "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("account_balance"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(",\n        fixedIcon: true,\n        options: ["),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("left"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(", "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("center"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(", "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("right"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)(", "),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("justify"),(0,s._)("span",{class:"token punctuation"},"'"),(0,s.Uk)("]\n      }\n    ]\n  ]"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)("\n"),(0,s._)("span",{class:"token punctuation"},"/>")]),(0,s.Uk)("\n")])],-1),h=(0,s._)("p",null,[(0,s.Uk)("在某些情况下，你可能想关闭许多现代浏览器提供的综合自动更正、自动完成、自动大写和拼写校正 “功能”。要做到这一点，只需将"),(0,s._)("code",{class:"doc-token"},"<q-editor>"),(0,s.Uk)("组件包裹在"),(0,s._)("code",{class:"doc-token"},"<form>"),(0,s.Uk)("元素中，像这样。")],-1),b=(0,s._)("pre",{class:"doc-code language-html"},[(0,s._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("form")]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token attr-name"},"autocorrect"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("off"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token attr-name"},"autocapitalize"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("off"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token attr-name"},"autocomplete"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("off"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token attr-name"},"spellcheck"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("false"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)("\n"),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("q-editor")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"model"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("editor"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"/>")]),(0,s.Uk)("\n"),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("form")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n")])],-1),f=(0,s._)("p",null,"不幸的是，在不同的浏览器中，从缓冲区中粘贴和将图片拖放到编辑器中的做法是不同的–而且还高度依赖于图片首先是如何进入缓冲区的。事实上，直到最近，在使用Firefox时，你甚至可以在ContentEditable中调整图片的大小。如果你想允许图片的粘贴/下拉，我们强烈建议你编写自己的方法。",-1),v=(0,s._)("pre",{class:"doc-code language-html"},[(0,s._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("q-editor")]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token attr-name"},"model"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("editor"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token attr-name"},"@paste.native"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("evt => pasteCapture(evt)"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token attr-name"},"@drop.native"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("evt => dropCapture(evt)"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)("\n "),(0,s._)("span",{class:"token punctuation"},"/>")]),(0,s.Uk)("\n")])],-1),q=(0,s._)("p",null,'如果粘贴事件的内容类型是文本，根据文本的来源，可能已经有大量的标记，contentEditable会自动解析。如果你想只粘贴 "干净的、无标记的 "文本，那么你可以使用这个例子中的方法(它也关闭了上面提到的拼写校正)。',-1),y=(0,s._)("p",null,"如果你没有设置字体(或者用户没有选择字体)，打印对话框将默认为系统字体，这可能会因浏览器和底层操作系统而不同。请务必考虑到这一点。",-1),C=(0,s.Uk)("QEditor的工具提示内容是由"),W=(0,s.Uk)("Quasar Language Pack"),E=(0,s.Uk)("翻译的，所以仅仅改变语言也会改变界面。如果你想要的语言包丢失了–或者你发现了一个错误，请考虑以PR的形式提供更新。");function H(n,t,a,H,Q,w){const x=(0,s.up)("doc-link"),I=(0,s.up)("doc-api"),L=(0,s.up)("doc-example"),S=(0,s.up)("doc-page");return(0,s.wg)(),(0,s.j4)(S,{"meta-title":H.metaTitle,title:"编辑器(所见即所得)",nav:H.nav,toc:H.toc,"meta-desc":H.metaDesc},{default:(0,s.w5)((()=>[o,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s.Wm)(x,{to:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content"},{default:(0,s.w5)((()=>[e])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(x,{to:"https://developer.mozilla.org/en-US/docs/Web/API/Document/designMode"},{default:(0,s.w5)((()=>[c])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(x,{to:"https://developer.mozilla.org/en-US/docs/Web/API/document/execCommand"},{default:(0,s.w5)((()=>[l])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(x,{to:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable"},{default:(0,s.w5)((()=>[u])),_:1})])]),(0,s._)("h2",{id:"qeditor-api",class:"doc-heading doc-h2",onClick:t[0]||(t[0]=n=>H.copyHeading("qeditor-api"))},"QEditor API"),(0,s.Wm)(I,{file:"QEditor"}),(0,s._)("h2",{id:"示例",class:"doc-heading doc-h2",onClick:t[1]||(t[1]=n=>H.copyHeading("示例"))},"示例"),(0,s.Wm)(L,{title:"默认编辑器",file:"QEditor/Basic"}),p,i,k,_,(0,s.Wm)(L,{title:"重新定义加粗命令",file:"QEditor/NewBold"}),d,(0,s.Wm)(L,{title:"添加新命令",file:"QEditor/NewCommands"}),(0,s.Wm)(L,{title:"厨房水槽",file:"QEditor/KitchenSink"}),(0,s.Wm)(L,{title:"自定义样式",file:"QEditor/Custom"}),(0,s.Wm)(L,{title:"使用工具条插槽",file:"QEditor/ToolbarSlot"}),(0,s._)("h2",{id:"下拉菜单",class:"doc-heading doc-h2",onClick:t[2]||(t[2]=n=>H.copyHeading("下拉菜单"))},"下拉菜单"),(0,s._)("h3",{id:"下拉框的类型",class:"doc-heading doc-h3",onClick:t[3]||(t[3]=n=>H.copyHeading("下拉框的类型"))},"下拉框的类型"),r,(0,s._)("h3",{id:"有专属选项的下拉菜单",class:"doc-heading doc-h3",onClick:t[4]||(t[4]=n=>H.copyHeading("有专属选项的下拉菜单"))},"有专属选项的下拉菜单"),U,g,m,(0,s._)("h2",{id:"注意事项",class:"doc-heading doc-h2",onClick:t[5]||(t[5]=n=>H.copyHeading("注意事项"))},"注意事项"),(0,s._)("h3",{id:"自动更正和拼写检查",class:"doc-heading doc-h3",onClick:t[6]||(t[6]=n=>H.copyHeading("自动更正和拼写检查"))},"自动更正和拼写检查"),h,b,(0,s._)("h3",{id:"图片",class:"doc-heading doc-h3",onClick:t[7]||(t[7]=n=>H.copyHeading("图片"))},"图片"),f,v,(0,s._)("h3",{id:"纯文本粘贴",class:"doc-heading doc-h3",onClick:t[8]||(t[8]=n=>H.copyHeading("纯文本粘贴"))},"纯文本粘贴"),q,(0,s.Wm)(L,{title:"粘贴事件重写",file:"QEditor/Pasting"}),(0,s._)("h3",{id:"打印",class:"doc-heading doc-h3",onClick:t[9]||(t[9]=n=>H.copyHeading("打印"))},"打印"),y,(0,s._)("h3",{id:"国际化",class:"doc-heading doc-h3",onClick:t[10]||(t[10]=n=>H.copyHeading("国际化"))},"国际化"),(0,s._)("p",null,[C,(0,s.Wm)(x,{to:"/options/quasar-language-packs"},{default:(0,s.w5)((()=>[W])),_:1}),E])])),_:1},8,["meta-title","nav","toc","meta-desc"])}var Q=a(17536);const w={name:"DocMarkdownPage",setup(){return{metaTitle:"编辑器(所见即所得)",metaDesc:"QEditor Vue组件是一个所见即所得的编辑器，可以编写和粘贴HTML。",nav:[{name:"对话框",category:"Vue 组件",path:"/vue-components/dialog",dir:"left"},{name:"扩展项",category:"Vue 组件",path:"/vue-components/expansion-item",dir:"right"}],toc:[{id:"qeditor-api",title:"QEditor API"},{id:"示例",title:"示例"},{id:"下拉菜单",title:"下拉菜单"},{id:"下拉框的类型",title:"下拉框的类型",sub:!0},{id:"有专属选项的下拉菜单",title:"有专属选项的下拉菜单",sub:!0},{id:"注意事项",title:"注意事项"},{id:"自动更正和拼写检查",title:"自动更正和拼写检查",sub:!0},{id:"图片",title:"图片",sub:!0},{id:"纯文本粘贴",title:"纯文本粘贴",sub:!0},{id:"打印",title:"打印",sub:!0},{id:"国际化",title:"国际化",sub:!0}],copyHeading:Q.Et}}};var x=a(74260);const I=(0,x.Z)(w,[["render",H]]),L=I}}]);