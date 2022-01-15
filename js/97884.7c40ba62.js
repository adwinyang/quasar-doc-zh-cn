"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[97884],{97884:(n,e,s)=>{s.r(e),s.d(e,{default:()=>$n});var a=s(83673);const o=(0,a._)("p",null,"本节文档涉及如何创建自己的应用扩展。",-1),c=(0,a._)("p",null,[(0,a.Uk)("假设你已经安装了一个官方的应用扩展。当您开始创建自己的应用扩展时，拥有这些经验将是非常有价值的。如果你遇到问题，请访问我们的 Discord 服务器的 "),(0,a._)("code",{class:"doc-token"},"#app-extensions"),(0,a.Uk)("。")],-1),t=(0,a._)("p",null,[(0,a.Uk)("一个"),(0,a._)("strong",null,"应用扩展"),(0,a.Uk)("是一个 npm 包。有两个用于创建"),(0,a._)("strong",null,"应用扩展"),(0,a.Uk)("的官方工具包。官方的 “应用扩展” 入门工具包应用于创建不带 UI 的应用扩展，如组件或指令， 除非目的是将第三方库安装到Vue中。第二个官方工具包是 “UI” 工具包。它有一个用于创建组件/指令的"),(0,a._)("code",{class:"doc-token"},"ui"),(0,a.Uk)("文件夹，一个 "),(0,a._)("code",{class:"doc-token"},"ui/dev"),(0,a.Uk)(" Quasar应用程序 用于单独测试你的组件/指令，还有一个"),(0,a._)("code",{class:"doc-token"},"app-extension"),(0,a.Uk)("文件夹用于创建应用程序扩展，通过 Quasar CLI 将你的组件/指令注入到 Quasar 应用程序。 UI工具包也可使你自定义的组件/指令 与 Quasar Vite 插件或 Vue CLI 或 UMD 一起使用。")],-1),l=(0,a._)("pre",{class:"doc-code language-bash"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,a.Uk)("$ quasar create my-ext --kit app-extension\n"),(0,a._)("span",{class:"token comment"},"# 或"),(0,a.Uk)("\n$ quasar create my-ui --kit ui\n")])],-1),d=(0,a._)("p",null,"它会提示您具体的需求。您是否需要安装脚本、卸载脚本，您是否会向用户提示一些问题？只选择您将要使用的内容。如果您另有决定，可以在以后手动添加这些。",-1),p=(0,a._)("p",null,[(0,a.Uk)("在本文档页面中，让我们假设我们用"),(0,a._)("code",{class:"doc-token"},"my-ext"),(0,a.Uk)(" 来回答应用扩展"),(0,a._)("code",{class:"doc-token"},"ext-id"),(0,a.Uk)("的问题(关于上述内容)。请记住，应用扩展源文件夹的文件夹名称可以与实际的"),(0,a._)("code",{class:"doc-token"},"ext-id"),(0,a.Uk)("不同。 最后，我们将发布我们的新 npm 包("),(0,a._)("code",{class:"doc-token"},"quasar-app-extension-my-ext"),(0,a.Uk)(")。")],-1),k=(0,a._)("p",null,"根据你的回答，Quasar CLI 将为你的应用扩展的源代码创建一个文件夹，其结构如下。",-1),i=(0,a._)("pre",{class:"doc-code language-bash"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,a._)("span",{class:"token comment"},"# app-extension kit"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token builtin class-name"},"."),(0,a.Uk)("\n├── package.json\n└── src\n    ├── index.js "),(0,a._)("span",{class:"token comment"},"# 在Index API中描述的。"),(0,a.Uk)("\n    ├── install.js "),(0,a._)("span",{class:"token comment"},"# 在 Install API 中描述。"),(0,a.Uk)("\n    ├── prompts.js "),(0,a._)("span",{class:"token comment"},"# 在 Prompts API 中描述的。"),(0,a.Uk)("\n    └── uninstall.js "),(0,a._)("span",{class:"token comment"},"# 在 Uninstall API 中描述的。"),(0,a.Uk)("\n\n"),(0,a._)("span",{class:"token comment"},"# ui kit"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token builtin class-name"},"."),(0,a.Uk)("\n├────app-extension\n│ └── package.json\n│ └── src\n│ ├── index.js "),(0,a._)("span",{class:"token comment"},"# 在 Index API 中描述的"),(0,a.Uk)("\n│ ├── install.js "),(0,a._)("span",{class:"token comment"},"# 在Install API中描述。"),(0,a.Uk)("\n│ ├── prompts.js "),(0,a._)("span",{class:"token comment"},"# 在 Prompts API 中描述的内容"),(0,a.Uk)("\n│ └── uninstall.js "),(0,a._)("span",{class:"token comment"},"# 在 Uninstall API 中描述的。"),(0,a.Uk)("\n└── ui\n    ├── package.json\n    ├── build "),(0,a._)("span",{class:"token comment"},"# 构建脚本"),(0,a.Uk)("\n    ├── dev "),(0,a._)("span",{class:"token comment"},"# 用于测试组件/指令的 Quasar 应用程序"),(0,a.Uk)("\n    └── src\n        ├── components "),(0,a._)("span",{class:"token comment"},"# (可选)，用于存放你的组件的文件夹"),(0,a.Uk)("\n        │ ├──Component.js "),(0,a._)("span",{class:"token comment"},"# (可选) 组件的代码"),(0,a.Uk)("\n        │ └──Component.sass "),(0,a._)("span",{class:"token comment"},"# (可选) 用于组件的 Sass 代码"),(0,a.Uk)("\n        ├── directives "),(0,a._)("span",{class:"token comment"},"# (可选) directive的文件夹"),(0,a.Uk)("\n        │ └── Directive.js "),(0,a._)("span",{class:"token comment"},"# (可选) Directive的代码"),(0,a.Uk)("\n        │ └── Directive.sass "),(0,a._)("span",{class:"token comment"},"# (可选) 用于指令的 Sass 代码"),(0,a.Uk)("\n        └── mixins "),(0,a._)("span",{class:"token comment"},"# (optional) 放置 mixin 源的地方"),(0,a.Uk)("\n        └── index.js "),(0,a._)("span",{class:"token comment"},"# 輸出與 Vue 注入"),(0,a.Uk)("\n        └── index.sass "),(0,a._)("span",{class:"token comment"},"# Sass导入"),(0,a.Uk)("\n")])],-1),_=(0,a._)("p",null,[(0,a.Uk)("除了"),(0,a._)("code",{class:"doc-token"},"src/index.js"),(0,a.Uk)("(来自"),(0,a._)("code",{class:"doc-token"},"app-extension"),(0,a.Uk)("工具包)或"),(0,a._)("code",{class:"doc-token"},"app-extension/src/index.js"),(0,a.Uk)("(来自"),(0,a._)("code",{class:"doc-token"},"ui"),(0,a.Uk)("工具包)，其他文件都是可选的。你可以在任何时候手动添加或删除它们。")],-1),u=(0,a._)("p",null,[(0,a.Uk)("当使用"),(0,a._)("code",{class:"doc-token"},"UI"),(0,a.Uk)("工具包时，你将有两个npm包；一个用于App Extension，一个用于UI模块。对于使用"),(0,a._)("code",{class:"doc-token"},"dev"),(0,a.Uk)("应用程序的测试，从"),(0,a._)("code",{class:"doc-token"},"ui"),(0,a.Uk)("文件夹中输入"),(0,a._)("code",{class:"doc-token"},"yarn dev"),(0,a.Uk)("。 在"),(0,a._)("code",{class:"doc-token"},"dev"),(0,a.Uk)("文件夹中创建用于测试的页面，它们将自动被注入到测试应用程序中。另外，查看"),(0,a._)("code",{class:"doc-token"},"package.json"),(0,a.Uk)("中的"),(0,a._)("code",{class:"doc-token"},"scripts"),(0,a.Uk)("部分，看看你有什么可用的东西。 当你执行"),(0,a._)("code",{class:"doc-token"},"yarn build"),(0,a.Uk)("命令时，将创建一个"),(0,a._)("code",{class:"doc-token"},"dist"),(0,a.Uk)("文件夹并创建各种类型的包(common, esm, and umd)。")],-1),r=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{class:"text-left"},"名称"),(0,a._)("th",{class:"text-left"},"描述")])],-1),m=(0,a._)("tbody",null,[(0,a._)("tr",null,[(0,a._)("td",null,[(0,a._)("code",{class:"doc-token"},"src/prompts.js")]),(0,a._)("td",null,"处理安装应用扩展时的提示信息")]),(0,a._)("tr",null,[(0,a._)("td",null,[(0,a._)("code",{class:"doc-token"},"src/install.js")]),(0,a._)("td",null,"扩展应用扩展的安装程序。")]),(0,a._)("tr",null,[(0,a._)("td",null,[(0,a._)("code",{class:"doc-token"},"src/index.js")]),(0,a._)("td",null,[(0,a.Uk)("在"),(0,a._)("code",{class:"doc-token"},"quasar dev"),(0,a.Uk)("和"),(0,a._)("code",{class:"doc-token"},"quasar build"),(0,a.Uk)("中执行。")])]),(0,a._)("tr",null,[(0,a._)("td",null,[(0,a._)("code",{class:"doc-token"},"src/uninstall.js")]),(0,a._)("td",null,"扩展应用的卸载程序。")])],-1),U=(0,a.Uk)('如果你的应用扩展需要依赖某些软件包才能运行(Quasar CLI 提供的软件包除外，如 “quasar”、"@quasar/extras"、"@quasar/app" – 你应该在/install.js和/index.js中调用 “api.compatibleWith()” – 检查'),g=(0,a.Uk)("Install API"),x=(0,a.Uk)("和"),h=(0,a.Uk)("Index API"),y=(0,a.Uk)(" )，然后使用 yarn/npm 将它们安装到你的App Extension文件夹中，并提拱给托管应用程序。"),b=(0,a._)("p",null,"例如: 你正在创建一个依赖 “my-table” npm包的UI组件(假设的名字，仅作为示例)，那么你应该把 “my-table” 安装到你的App Extension文件夹中。",-1),v=(0,a._)("p",null,':: 警告 千万不要用 yarn/npm 安装由 Quasar CLI 提供的软件包，因为App Extensions不应该如此具有侵入性，强迫用户使用某个 Quasar 版本。相反，对这些包要使用 “api.compatibleWith()”，这相当于轻声说 "对不起，如果你想利用我的应用扩展，你需要安装这个版本的 Quasar "。 :::',-1),I=(0,a._)("p",null,"我们需要创建一个 Quasar 项目文件夹，以便在开发应用扩展时能够对其进行测试。",-1),f=(0,a._)("pre",{class:"doc-code language-bash"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},"$ quasar create test-app\n")],-1),j={class:"doc-note doc-note--tip"},q=(0,a._)("p",{class:"doc-note__title"},"TIP",-1),w=(0,a.Uk)("了解更多关于"),A=(0,a.Uk)("Prompts API"),W=(0,a.Uk)("和"),P=(0,a.Uk)("Install API"),C=(0,a.Uk)(" 可以做什么。"),Q=(0,a._)("p",null,"在测试 Quasar 项目文件夹内，我们手动添加我们的App Extension。注意，我们没有指定npm包的名称(它还没有发布！)，而是指定了我们开发的App Extension文件夹的路径，因为我们想测试未发布的工作。",-1),$=(0,a._)("pre",{class:"doc-code language-bash"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,a.Uk)("$ "),(0,a._)("span",{class:"token function"},"yarn"),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"add"),(0,a.Uk)(" --dev file://path/to/our/app/ext/root\n"),(0,a._)("span",{class:"token comment"},"# 或者"),(0,a.Uk)("\n$ "),(0,a._)("span",{class:"token function"},"yarn"),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"add"),(0,a.Uk)(" --dev link://path/to/our/app/ext/root\n")])],-1),E=(0,a._)("p",null,"你需要弄清楚哪条命令最适合你的环境。",-1),H=(0,a._)("div",{class:"doc-note doc-note--warning"},[(0,a._)("p",{class:"doc-note__title"},"WARNING"),(0,a._)("p",null,[(0,a.Uk)("有许多关于通过"),(0,a._)("code",{class:"doc-token"},"file:"),(0,a.Uk)("和"),(0,a._)("code",{class:"doc-token"},"link:"),(0,a.Uk)("链接的问题报告。这不在 Quasar 的范围之内，但可能与你的开发环境有关，也就是你在Windows下的里程会有所不同。")])],-1),D=(0,a._)("p",null,"然后我们调用它。调用过程假定App Extension的软件包已经安装了yarn/npm(我们之前已经安装了)，因此跳过了这一步。",-1),L=(0,a._)("pre",{class:"doc-code language-bash"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,a._)("span",{class:"token comment"},'# 我们的 <ext-id>将是 "my-ext"，所以:'),(0,a.Uk)("\n$ quasar ext invoke my-ext\n")])],-1),S=(0,a._)("p",null,"这将安装我们应用扩展的安装。每次做了改动并想测试它们时，都需要重做以上两个步骤。",-1),T=(0,a._)("p",null,[(0,a.Uk)("此外，如果你想在开发应用扩展时，在你的测试应用程序中拥有HMR(热模块重载)功能，那么你的"),(0,a._)("code",{class:"doc-token"},"quasar.conf.js > devServer > watchFiles"),(0,a.Uk)("将看起来像这样：")],-1),N=(0,a._)("pre",{class:"doc-code language-js"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,a._)("span",{class:"token comment"},"// quasar.conf.js"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token literal-property property"},"devServer"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token comment"},"// 请务必将下面的<myextid>改为你的应用程序扩展名。"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token literal-property property"},"watchFiles"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"["),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token string"},"'/node_modules/quasar-app-extension-<myextid>/*'"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n")])],-1),M=(0,a.Uk)("而你可能想扩展Webpack的配置。假设你使用的是"),R=(0,a._)("code",{class:"doc-token"},"chainWebpack",-1),V=(0,a.Uk)("方法，你的"),G=(0,a._)("code",{class:"doc-token"},"quasar.conf.js > build > chainWebpack",-1),F=(0,a.Uk)("应该是这样的："),O=(0,a._)("pre",{class:"doc-code language-js"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,a._)("span",{class:"token function"},"chainWebpack"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token parameter"},"chain"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  chain"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function"},"merge"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token literal-property property"},"snapshot"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token literal-property property"},"managedPaths"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token punctuation"},"]"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n")])],-1),Z={class:"doc-note doc-note--tip"},z=(0,a._)("p",{class:"doc-note__title"},"TIP",-1),B=(0,a.Uk)("了解更多关于"),J=(0,a.Uk)("Uninstall API"),K=(0,a.Uk)(" 可以做什么。"),X=(0,a._)("p",null,"假设你已经按照上面的部分安装了你的App Extension，我们现在可以测试卸载脚本(如果你有的话)。",-1),Y=(0,a._)("pre",{class:"doc-code language-bash"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},"$ quasar ext uninvoke my-ext\n")],-1),nn=(0,a._)("p",null,[(0,a.Uk)("上述命令同样没有修改或删除 package.json 和 node_modules 中的 npm 包。它只是调用卸载脚本，将其从测试 Quasar 应用项目文件夹的注册/安装的应用扩展列表中删除。然而，你的最终用户将调用"),(0,a._)("code",{class:"doc-token"},"$ quasar ext remove my-ext"),(0,a.Uk)("来卸载它，这也会卸载 npm 包。")],-1),en=(0,a._)("p",null,"你需要重做这些安装步骤，并在每次你对卸载脚本进行修改并想测试时发出 uninvoke 命令。",-1),sn=(0,a._)("p",null,"在上面的章节中，我们描述了如何测试提示、安装和卸载脚本。现在是索引脚本的时间了，它是你的应用扩展的核心。",-1),an=(0,a._)("p",null,[(0,a.Uk)("在这里你可以篡改所有的"),(0,a._)("code",{class:"doc-token"},"quasar.config.js"),(0,a.Uk)("选项，扩展Webpack配置，注册 Quasar CLI 命令，启动开发应用程序所需的外部服务等等。")],-1),on=(0,a._)("p",null,[(0,a.Uk)("因此，每次执行"),(0,a._)("code",{class:"doc-token"},"$ quasar dev"),(0,a.Uk)("和"),(0,a._)("code",{class:"doc-token"},"$ quasar build"),(0,a.Uk)("时，都会运行索引脚本。")],-1),cn=(0,a.Uk)("为了测试索引脚本，你可以在每次改变App Extension脚本代码中的某些内容时，重复上述的卸载和安装程序。但这变得非常乏味。如果你在Unix操作系统(MacOS, Linux)上开发，你可以利用"),tn=(0,a._)("code",{class:"doc-token"},"yarn link",-1),ln=(0,a.Uk)("命令，从 Quasar 测试应用的node_modules文件夹创建一个"),dn=(0,a.Uk)("符号链接"),pn=(0,a.Uk)(" 到你的扩展文件夹中。"),kn=(0,a._)("pre",{class:"doc-code language-bash"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,a.Uk)("$ "),(0,a._)("span",{class:"token builtin class-name"},"cd"),(0,a.Uk)(" /path/to/app/extension/folder\n\n"),(0,a._)("span",{class:"token comment"},"# 我们通过yarn注册这个扩展"),(0,a.Uk)("\n$ "),(0,a._)("span",{class:"token function"},"yarn"),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"link"),(0,a.Uk)("\n\n$ "),(0,a._)("span",{class:"token builtin class-name"},"cd"),(0,a.Uk)(" /path/to/quasar/testing/app/folder\n\n$ "),(0,a._)("span",{class:"token function"},"yarn"),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"link"),(0,a.Uk)(" quasar-app-extension-"),(0,a._)("span",{class:"token operator"},"<"),(0,a.Uk)("ext-id\n"),(0,a._)("span",{class:"token comment"},"# 在我们的演示案例中，它是这样的。"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token comment"},"# $ yarn link quasar-app-extension-my-ext"),(0,a.Uk)("\n")])],-1),_n=(0,a._)("p",null,[(0,a.Uk)("记住，如果你需要"),(0,a._)("code",{class:"doc-token"},"yarn/npm安装"),(0,a.Uk)("任何依赖项到"),(0,a._)("strong",null,"你的"),(0,a.Uk)("应用扩展中，那么你也必须卸载你的应用扩展并在你的测试应用中重新安装。")],-1),un=(0,a._)("pre",{class:"doc-code language-bash"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,a.Uk)("$ "),(0,a._)("span",{class:"token builtin class-name"},"cd"),(0,a.Uk)(" /path/to/app/extension/folder\n\n"),(0,a._)("span",{class:"token comment"},"# 运行yarn/npm命令(安装/卸载，等等)"),(0,a.Uk)("\n\n"),(0,a._)("span",{class:"token comment"},"# 然后"),(0,a.Uk)("\n\n$ "),(0,a._)("span",{class:"token builtin class-name"},"cd"),(0,a.Uk)(" /path/to/quasar/testing/app/folder\n\n"),(0,a._)("span",{class:"token comment"},"# 卸载应用程序ext"),(0,a.Uk)("\n$ quasar ext uninvoke my-ext\n\n"),(0,a._)("span",{class:"token comment"},"# 重新安装应用程序 ext"),(0,a.Uk)("\n$ quasar ext invoke my-ext\n")])],-1),rn=(0,a._)("p",null,[(0,a.Uk)("你实际上只需要"),(0,a._)("code",{class:"doc-token"},"quasar ext invoke my-ext"),(0,a.Uk)("(安装)应用扩展就可以重新安装它。上面的信息是为了完整起见。")],-1),mn=(0,a._)("div",{class:"doc-note doc-note--warning"},[(0,a._)("p",{class:"doc-note__title"},"WARNING"),(0,a._)("p",null,[(0,a.Uk)("有很多关于Windows上"),(0,a._)("code",{class:"doc-token"},"yarn link"),(0,a.Uk)("的问题报告。这不在 Quasar 的范围之内，但很可能与你的开发环境有关，也就是你在Windows上的里程数会有所不同。")])],-1),Un={class:"doc-note doc-note--tip"},gn=(0,a._)("p",{class:"doc-note__title"},"TIP",-1),xn=(0,a.Uk)("了解更多关于你能用"),hn=(0,a.Uk)("索引API"),yn=(0,a.Uk)(" 做什么。"),bn=(0,a._)("p",null,"当你完成了你的App Extension并准备部署它时，你需要做的就是把它发布到npm仓库。",-1),vn=(0,a.Uk)("在你的App Extension文件夹中，运行"),In=(0,a.Uk)("yarn publish"),fn=(0,a.Uk)(" 或"),jn=(0,a.Uk)("npm publish"),qn=(0,a.Uk)(" 。两者都做同样的事情。"),wn=(0,a._)("div",{class:"doc-note doc-note--warning"},[(0,a._)("p",{class:"doc-note__title"},"WARNING"),(0,a._)("p",null,[(0,a.Uk)("一定要记住不要把"),(0,a._)("code",{class:"doc-token"},"quasar-app-extension-"),(0,a.Uk)("前缀从扩展的"),(0,a._)("code",{class:"doc-token"},"package.json"),(0,a.Uk)("的"),(0,a._)("code",{class:"doc-token"},"name"),(0,a.Uk)("属性中剥离出来，否则 Quasar CLI 将无法识别它。")])],-1);function An(n,e,s,An,Wn,Pn){const Cn=(0,a.up)("q-markup-table"),Qn=(0,a.up)("doc-link"),$n=(0,a.up)("doc-page");return(0,a.wg)(),(0,a.j4)($n,{"meta-title":An.metaTitle,title:"应用扩展开发",nav:An.nav,toc:An.toc,"meta-desc":An.metaDesc},{default:(0,a.w5)((()=>[o,c,(0,a._)("h2",{id:"开始",class:"doc-heading doc-h2",onClick:e[0]||(e[0]=n=>An.copyHeading("开始"))},"开始"),t,l,d,p,k,i,_,u,(0,a._)("h2",{id:"应用扩展脚本描述",class:"doc-heading doc-h2",onClick:e[1]||(e[1]=n=>An.copyHeading("应用扩展脚本描述"))},"应用扩展脚本描述"),(0,a.Wm)(Cn,{"wrap-cells":!0,flat:!0,bordered:!0,style:{width:"fit-content","max-width":"100%"}},{default:(0,a.w5)((()=>[r,m])),_:1}),(0,a._)("h2",{id:"处理软件包的依赖性",class:"doc-heading doc-h2",onClick:e[2]||(e[2]=n=>An.copyHeading("处理软件包的依赖性"))},"处理软件包的依赖性"),(0,a._)("p",null,[U,(0,a.Wm)(Qn,{to:"/app-extensions/development-guide/install-api"},{default:(0,a.w5)((()=>[g])),_:1}),x,(0,a.Wm)(Qn,{to:"/app-extensions/development-guide/index-api"},{default:(0,a.w5)((()=>[h])),_:1}),y]),b,v,(0,a._)("h2",{id:"手动测试",class:"doc-heading doc-h2",onClick:e[3]||(e[3]=n=>An.copyHeading("手动测试"))},"手动测试"),I,f,(0,a._)("h3",{id:"安装和提示脚本",class:"doc-heading doc-h3",onClick:e[4]||(e[4]=n=>An.copyHeading("安装和提示脚本"))},"安装和提示脚本"),(0,a._)("div",j,[q,(0,a._)("p",null,[w,(0,a.Wm)(Qn,{to:"/app-extensions/development-guide/prompts-api"},{default:(0,a.w5)((()=>[A])),_:1}),W,(0,a.Wm)(Qn,{to:"/app-extensions/development-guide/install-api"},{default:(0,a.w5)((()=>[P])),_:1}),C])]),Q,$,E,H,D,L,S,T,N,(0,a._)("p",null,[M,(0,a.Wm)(Qn,{to:"/quasar-cli/handling-webpack#usage-with-quasar-conf-js"},{default:(0,a.w5)((()=>[R])),_:1}),V,G,F]),O,(0,a._)("h3",{id:"卸载脚本",class:"doc-heading doc-h3",onClick:e[5]||(e[5]=n=>An.copyHeading("卸载脚本"))},"卸载脚本"),(0,a._)("div",Z,[z,(0,a._)("p",null,[B,(0,a.Wm)(Qn,{to:"/app-extensions/development-guide/uninstall-api"},{default:(0,a.w5)((()=>[J])),_:1}),K])]),X,Y,nn,en,(0,a._)("h3",{id:"索引脚本",class:"doc-heading doc-h3",onClick:e[6]||(e[6]=n=>An.copyHeading("索引脚本"))},"索引脚本"),sn,an,on,(0,a._)("p",null,[cn,tn,ln,(0,a.Wm)(Qn,{to:"https://en.wikipedia.org/wiki/Symbolic_link"},{default:(0,a.w5)((()=>[dn])),_:1}),pn]),kn,_n,un,rn,mn,(0,a._)("div",Un,[gn,(0,a._)("p",null,[xn,(0,a.Wm)(Qn,{to:"/app-extensions/development-guide/index-api"},{default:(0,a.w5)((()=>[hn])),_:1}),yn])]),(0,a._)("h2",{id:"发布",class:"doc-heading doc-h2",onClick:e[7]||(e[7]=n=>An.copyHeading("发布"))},"发布"),bn,(0,a._)("p",null,[vn,(0,a.Wm)(Qn,{to:"https://yarnpkg.com/lang/en/docs/cli/publish/"},{default:(0,a.w5)((()=>[In])),_:1}),fn,(0,a.Wm)(Qn,{to:"https://docs.npmjs.com/cli/publish"},{default:(0,a.w5)((()=>[jn])),_:1}),qn]),wn])),_:1},8,["meta-title","nav","toc","meta-desc"])}var Wn=s(17536);const Pn={name:"DocMarkdownPage",setup(){return{metaTitle:"应用扩展开发",metaDesc:"如何为 Quasar 应用扩展开发(App Extension Development)设置计算机，并快速入门。",nav:[{name:"发现应用扩展",category:"应用程序扩展",path:"/app-extensions/discover",dir:"left"},{name:"提示 API",category:"开发指南",path:"/app-extensions/development-guide/prompts-api",dir:"right"}],toc:[{id:"开始",title:"开始"},{id:"应用扩展脚本描述",title:"应用扩展脚本描述"},{id:"处理软件包的依赖性",title:"处理软件包的依赖性"},{id:"手动测试",title:"手动测试"},{id:"安装和提示脚本",title:"安装和提示脚本",sub:!0},{id:"卸载脚本",title:"卸载脚本",sub:!0},{id:"索引脚本",title:"索引脚本",sub:!0},{id:"发布",title:"发布"}],copyHeading:Wn.Et}}};var Cn=s(74260);const Qn=(0,Cn.Z)(Pn,[["render",An]]),$n=Qn}}]);