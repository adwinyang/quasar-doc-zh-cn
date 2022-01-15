"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[91939],{91939:(n,s,a)=>{a.r(s),a.d(s,{default:()=>q});var t=a(83673);const o=(0,t._)("p",null,"如前所述，Quasar可以处理浏览器扩展的各种位置，即新标签、网页、开发工具选项或弹出窗口。你不需要为每个地方单独安装 Quasar 应用程序。你可以用路由器做一些方便的工作。",-1),e=(0,t._)("p",null,"这是一个BEX运行的默认方式。你可以通过点击浏览器中的BEX图标进入。Quasar应用程序将在这个新的(空白)标签中运行。",-1),p=(0,t._)("p",null,[(0,t.Uk)("这些都遵循相同的模式，设置一个路由并配置"),(0,t._)("code",{class:"doc-token"},"manifest.json"),(0,t.Uk)("文件，当它试图显示其中一个类型时，就会查看该路由。比如说。")],-1),c=(0,t._)("pre",{class:"doc-code language-js"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,t._)("span",{class:"token comment"},"// routes.js。"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" routes "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(),(0,t._)("span",{class:"token literal-property property"},"path"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'/options'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token function-variable function"},"component"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"import"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'pages/OptionsPage.vue'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(),(0,t._)("span",{class:"token literal-property property"},"path"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'/popup'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token function-variable function"},"component"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"import"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'pages/PopupPage.vue'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(),(0,t._)("span",{class:"token literal-property property"},"path"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'/devtools'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token function-variable function"},"component"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"import"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'pages/DevToolsPage.vue'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t.Uk)("\n")])],-1),k=(0,t._)("p",null,[(0,t.Uk)("你可以用以下方式配置你的"),(0,t._)("code",{class:"doc-token"},"manifest.json"),(0,t.Uk)("文件，这样选项页面就会从该路由加载。")],-1),l=(0,t._)("pre",{class:"doc-code language-json"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-json"},[(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},'"name"'),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},'"My extension"'),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  ...\n  "),(0,t._)("span",{class:"token property"},'"options_page"'),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},'"www/index.html#/options"'),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},"// Options Page"),(0,t.Uk)("\n  ...\n  "),(0,t._)("span",{class:"token property"},'"browser_action"'),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token property"},'"default_popup"'),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},'"www/index.html#/popup"'),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},"// Popup Page"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  ...\n  "),(0,t._)("span",{class:"token property"},'"devtools_page"'),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},'"www/index.html#/devtools"'),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},"// Dev Tools"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])],-1),u=(0,t._)("p",null,"这就是真正的力量所在。通过一点小技巧，我们可以将 Quasar 应用程序注入到网页中，并将其作为一个覆盖层，使其看起来像我们的 Quasar 应用程序是网页体验的一部分。",-1),r=(0,t._)("p",null,"下面是一个关于如何实现这一目标的简要介绍：",-1),_=(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("code",{class:"doc-token"},"src-bex/js/content-hooks.js"),(0,t.Uk)("。")])],-1),i=(0,t._)("p",null,"这里的想法是创建一个IFrame并将我们的 Quasar 应用添加到其中，然后将其注入到页面中。",-1),U=(0,t._)("p",null,"鉴于我们的 Quasar 应用程序可能需要占用窗口的全部高度(从而停止与底层页面的任何交互)，我们有一个事件来处理设置IFrame的高度。默认情况下，IFrame的高度刚好可以让 Quasar 工具条显示出来(反过来也允许与页面的其他部分互动)。",-1),d=(0,t._)("p",null,"我们可以在任何时候从我们的 Quasar 应用程序中调用这个事件，我们知道我们正在打开抽屉，从而改变IFrame的高度，使整个绘图可见。",-1),g=(0,t._)("pre",{class:"doc-code language-js"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)("\n  iFrame "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" document"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"createElement"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'iframe'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  defaultFrameHeight "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'62px'"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token comment"},"/**\n * 设置包含BEX的iFrame的高度\n * @param height\n */"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(),(0,t._)("span",{class:"token function-variable function"},"setIFrameHeight"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token parameter"},"height"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  iFrame"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("height "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" height\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token comment"},"/**\n * 将iFrame重置为其默认高度，例如顶栏的高度。\n */"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(),(0,t._)("span",{class:"token function-variable function"},"resetIFrameHeight"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token function"},"setIFrameHeight"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("defaultFrameHeight"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token comment"},"/**\n * 在iFrame中侦听来自BEX的消息的内容挂钩\n * @param bridge\n */"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"default"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"attachContentHooks"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},"bridge"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token comment"},"/**\n   * 切换抽屉时，设置iFrame高度以占据整个页面。\n   * 抽屉关闭时复位。\n   */"),(0,t.Uk)("\n  bridge"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"on"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'wb.drawer.toggle'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token parameter"},"event"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" payload "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" event"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("data\n    "),(0,t._)("span",{class:"token keyword"},"if"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("payload"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("open"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token function"},"setIFrameHeight"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'100%'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"else"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token function"},"resetIFrameHeight"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n    bridge"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"send"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("event"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("eventResponseKey"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token comment"},"/**\n * 下面的代码将使一切正常运行。使用默认值初始化iFrame并将其添加到页面中。\n * @type {string}\n */"),(0,t.Uk)("\niFrame"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("id "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'bex-app-iframe'"),(0,t.Uk)("\niFrame"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("width "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'100%'"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token function"},"resetIFrameHeight"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token comment"},"// 指定一些造型，使其看起来天衣无缝"),(0,t.Uk)("\nObject"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"assign"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("iFrame"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("style"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"position"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'fixed'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"top"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'0'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"right"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'0'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"bottom"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'0'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"left"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'0'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"border"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'0'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"zIndex"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'9999999'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},"// Make sure it's on top"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"overflow"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'visible'"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token punctuation"},";"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token comment"},"// 当页面加载时，插入我们的浏览器扩展应用。"),(0,t.Uk)("\n  iFrame"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("src "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" chrome"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("runtime"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"getURL"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token template-string"},[(0,t._)("span",{class:"token template-punctuation string"},"`"),(0,t._)("span",{class:"token string"},"www/index.html"),(0,t._)("span",{class:"token template-punctuation string"},"`")]),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n  document"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("body"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"prepend"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("iFrame"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n")])],-1),m=(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("code",{class:"doc-token"},"src-bex/css/content-css.css"),(0,t.Uk)("。")])],-1),y=(0,t._)("p",null,"在我们的文档顶部添加一个空白，这样我们的 Quasar 工具条就不会与实际的页面内容重叠了。",-1),w=(0,t._)("pre",{class:"doc-code language-css"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-css"},[(0,t._)("span",{class:"token selector"},".target-some-header-class"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},"margin-top"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 62px"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])],-1),f=(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("code",{class:"doc-token"},"Quasar应用程序")])],-1),h=(0,t._)("p",null,"然后在我们的 Quasar 应用程序(/src)中，我们有一个函数来切换抽屉，并向内容脚本发送一个事件，告诉它 调整IFrame的大小，从而使我们的整个应用程序可见。",-1),v=(0,t._)("pre",{class:"doc-code language-html"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("q-drawer")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},":model-value"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("drawerIsOpen"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},[(0,t._)("span",{class:"token namespace"},"@update:"),(0,t.Uk)("model-value")]),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("drawerToggled"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  Some Content\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("q-drawer")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])],-1),b=(0,t._)("pre",{class:"doc-code language-js"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" useQuasar "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'quasar'"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" ref "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue'"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token function"},"setup"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" $q "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"useQuasar"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" drawerIsOpen "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"ref"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token boolean"},"true"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n\n  "),(0,t._)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"drawerToggled"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    $q"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("bex\n      "),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"send"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'wb.drawer.toggle'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token literal-property property"},"open"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" drawerIsOpen"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("value "),(0,t._)("span",{class:"token comment"},"// So it knows to make it bigger / smaller"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"then"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},"r"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token comment"},"// 只有在承诺解决后才设置这个，这样我们才能看到整个滑动动画。"),(0,t.Uk)("\n        drawerIsOpen"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("value "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"!"),(0,t.Uk)("drawerIsOpen"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("value\n      "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\n  "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" drawerToggled "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])],-1),F=(0,t._)("p",null,"现在你有一个在网页中运行的 Quasar 应用程序。你现在可以从 Quasar 应用中触发其他事件，而内容 脚本可以监听并与底层页面互动。",-1);function x(n,s,a,x,I,Q){const j=(0,t.up)("doc-page");return(0,t.wg)(),(0,t.j4)(j,{"meta-title":x.metaTitle,title:"BEX的类型",nav:x.nav,toc:x.toc,"meta-desc":x.metaDesc},{default:(0,t.w5)((()=>[o,(0,t._)("h2",{id:"新标签",class:"doc-heading doc-h2",onClick:s[0]||(s[0]=n=>x.copyHeading("新标签"))},"新标签"),e,(0,t._)("h2",{id:"开发工具、选项和弹出窗口",class:"doc-heading doc-h2",onClick:s[1]||(s[1]=n=>x.copyHeading("开发工具、选项和弹出窗口"))},"开发工具、选项和弹出窗口"),p,c,k,l,(0,t._)("h2",{id:"网页",class:"doc-heading doc-h2",onClick:s[2]||(s[2]=n=>x.copyHeading("网页"))},"网页"),u,r,_,i,U,d,g,m,y,w,f,h,v,b,F])),_:1},8,["meta-title","nav","toc","meta-desc"])}var I=a(17536);const Q={name:"DocMarkdownPage",setup(){return{metaTitle:"BEX的类型",metaDesc:"如何在 Quasar 中配置每种类型的浏览器扩展。",nav:[{name:"构建命令",category:"开发浏览器扩展",path:"/quasar-cli/developing-browser-extensions/build-commands",dir:"left"},{name:"BEX交流/活动",category:"开发浏览器扩展",path:"/quasar-cli/developing-browser-extensions/bex-communication",dir:"right"}],toc:[{id:"新标签",title:"新标签"},{id:"开发工具、选项和弹出窗口",title:"开发工具、选项和弹出窗口"},{id:"网页",title:"网页"}],copyHeading:I.Et}}};var j=a(74260);const H=(0,j.Z)(Q,[["render",x]]),q=H}}]);