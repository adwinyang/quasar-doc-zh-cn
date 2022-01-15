"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[87508],{87508:(n,s,a)=>{a.r(s),a.d(s,{default:()=>B});var o=a(83673);const t=(0,o._)("p",null,"当你的网站/应用程序很小的时候，你可以将所有的布局/页面/组件加载到初始的捆绑包中，并在启动时提供所有的服务。但是，当你的代码变得复杂，并且有许多布局/页面/组件时，这样做就不是最理想的，因为这将大大影响加载时间。幸运的是，有一种方法可以解决这个问题。",-1),e=(0,o._)("p",null,"我们将介绍如何偷延迟加载/编码分割你的应用程序的部分，以便它们只在需要时自动被请求。这是通过动态导入完成的。让我们从一个示例开始，然后转换它，使我们使用懒惰加载 – 我们将这个示例集中在加载一个页面，但同样的原则可以应用于加载任何东西(assets，JSON，…)。",-1),c=(0,o._)("p",null,"使用Vue Router调用静态组件是很正常的，如下所示。",-1),p={class:"doc-note doc-note--warning"},k=(0,o._)("p",{class:"doc-note__title"},"WARNING",-1),l=(0,o.Uk)("Quasar 文档假定你已经熟悉了"),_=(0,o.Uk)("Vue Router"),r=(0,o.Uk)(" 。下面我们只描述了如何在 Quasar CLI 项目中使用它的基本情况。对于其功能的完整列表，请访问 "),u=(0,o.Uk)("Vue Router 文档"),i=(0,o.Uk)(" 。"),d=(0,o._)("pre",{class:"doc-code language-js"},[(0,o._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,o._)("span",{class:"token keyword"},"import"),(0,o.Uk)(" SomePage "),(0,o._)("span",{class:"token keyword"},"from"),(0,o.Uk)(),(0,o._)("span",{class:"token string"},"'pages/SomePage'"),(0,o.Uk)("\n\n"),(0,o._)("span",{class:"token keyword"},"const"),(0,o.Uk)(" routes "),(0,o._)("span",{class:"token operator"},"="),(0,o.Uk)(),(0,o._)("span",{class:"token punctuation"},"["),(0,o.Uk)("\n  "),(0,o._)("span",{class:"token punctuation"},"{"),(0,o.Uk)("\n    "),(0,o._)("span",{class:"token literal-property property"},"path"),(0,o._)("span",{class:"token operator"},":"),(0,o.Uk)(),(0,o._)("span",{class:"token string"},"'/some-page'"),(0,o._)("span",{class:"token punctuation"},","),(0,o.Uk)("\n    "),(0,o._)("span",{class:"token literal-property property"},"component"),(0,o._)("span",{class:"token operator"},":"),(0,o.Uk)(" SomePage\n  "),(0,o._)("span",{class:"token punctuation"},"}"),(0,o.Uk)("\n"),(0,o._)("span",{class:"token punctuation"},"]"),(0,o.Uk)("\n")])],-1),U=(0,o._)("p",null,"现在，让我们改变这一点，使用动态导入，使页面只在需要时加载：",-1),g=(0,o._)("pre",{class:"doc-code language-js"},[(0,o._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,o._)("span",{class:"token keyword"},"const"),(0,o.Uk)(" routes "),(0,o._)("span",{class:"token operator"},"="),(0,o.Uk)(),(0,o._)("span",{class:"token punctuation"},"["),(0,o.Uk)("\n  "),(0,o._)("span",{class:"token punctuation"},"{"),(0,o.Uk)("\n    "),(0,o._)("span",{class:"token literal-property property"},"path"),(0,o._)("span",{class:"token operator"},":"),(0,o.Uk)(),(0,o._)("span",{class:"token string"},"'/some-page'"),(0,o._)("span",{class:"token punctuation"},","),(0,o.Uk)("\n    "),(0,o._)("span",{class:"token function-variable function"},"component"),(0,o._)("span",{class:"token operator"},":"),(0,o.Uk)(),(0,o._)("span",{class:"token punctuation"},"("),(0,o._)("span",{class:"token punctuation"},")"),(0,o.Uk)(),(0,o._)("span",{class:"token operator"},"=>"),(0,o.Uk)(),(0,o._)("span",{class:"token keyword"},"import"),(0,o._)("span",{class:"token punctuation"},"("),(0,o._)("span",{class:"token string"},"'pages/SomePage'"),(0,o._)("span",{class:"token punctuation"},")"),(0,o.Uk)("\n  "),(0,o._)("span",{class:"token punctuation"},"}"),(0,o.Uk)("\n"),(0,o._)("span",{class:"token punctuation"},"]"),(0,o.Uk)("\n")])],-1),m=(0,o._)("p",null,[(0,o.Uk)("很简单，对吗？它的作用是为"),(0,o._)("code",{class:"doc-token"},"/src/pages/SomePage.vue"),(0,o.Uk)("创建一个单独的块，然后只在需要的时候加载。在这种情况下，当用户访问 “/some-page” 路线时。")],-1),y=(0,o._)("p",null,"通常，你会导入一个组件，然后将其注册到页面、布局或组件中。",-1),h=(0,o._)("pre",{class:"doc-code language-html"},[(0,o._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,o._)("span",{class:"token tag"},[(0,o._)("span",{class:"token tag"},[(0,o._)("span",{class:"token punctuation"},"<"),(0,o.Uk)("script")]),(0,o._)("span",{class:"token punctuation"},">")]),(0,o._)("span",{class:"token script"},[(0,o._)("span",{class:"token language-javascript"},[(0,o.Uk)("\n"),(0,o._)("span",{class:"token keyword"},"import"),(0,o.Uk)(" SomeComponent "),(0,o._)("span",{class:"token keyword"},"from"),(0,o.Uk)(),(0,o._)("span",{class:"token string"},"'components/SomeComponent'"),(0,o.Uk)("\n\n"),(0,o._)("span",{class:"token keyword"},"export"),(0,o.Uk)(),(0,o._)("span",{class:"token keyword"},"default"),(0,o.Uk)(),(0,o._)("span",{class:"token punctuation"},"{"),(0,o.Uk)("\n  "),(0,o._)("span",{class:"token literal-property property"},"components"),(0,o._)("span",{class:"token operator"},":"),(0,o.Uk)(),(0,o._)("span",{class:"token punctuation"},"{"),(0,o.Uk)("\n    SomeComponent"),(0,o._)("span",{class:"token punctuation"},","),(0,o.Uk)("\n  "),(0,o._)("span",{class:"token punctuation"},"}"),(0,o.Uk)("\n"),(0,o._)("span",{class:"token punctuation"},"}"),(0,o.Uk)("\n")])]),(0,o._)("span",{class:"token tag"},[(0,o._)("span",{class:"token tag"},[(0,o._)("span",{class:"token punctuation"},"</"),(0,o.Uk)("script")]),(0,o._)("span",{class:"token punctuation"},">")]),(0,o.Uk)("\n")])],-1),w=(0,o._)("p",null,"现在让我们改变一下，使用动态导入，使该组件只在需要时加载。",-1),f=(0,o._)("pre",{class:"doc-code language-html"},[(0,o._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,o._)("span",{class:"token tag"},[(0,o._)("span",{class:"token tag"},[(0,o._)("span",{class:"token punctuation"},"<"),(0,o.Uk)("script")]),(0,o._)("span",{class:"token punctuation"},">")]),(0,o._)("span",{class:"token script"},[(0,o._)("span",{class:"token language-javascript"},[(0,o.Uk)("\n"),(0,o._)("span",{class:"token keyword"},"import"),(0,o.Uk)(),(0,o._)("span",{class:"token punctuation"},"{"),(0,o.Uk)(" defineAsyncComponent "),(0,o._)("span",{class:"token punctuation"},"}"),(0,o.Uk)(),(0,o._)("span",{class:"token keyword"},"from"),(0,o.Uk)(),(0,o._)("span",{class:"token string"},"'vue'"),(0,o.Uk)("\n"),(0,o._)("span",{class:"token keyword"},"export"),(0,o.Uk)(),(0,o._)("span",{class:"token keyword"},"default"),(0,o.Uk)(),(0,o._)("span",{class:"token punctuation"},"{"),(0,o.Uk)("\n  "),(0,o._)("span",{class:"token literal-property property"},"components"),(0,o._)("span",{class:"token operator"},":"),(0,o.Uk)(),(0,o._)("span",{class:"token punctuation"},"{"),(0,o.Uk)("\n    "),(0,o._)("span",{class:"token literal-property property"},"SomeComponent"),(0,o._)("span",{class:"token operator"},":"),(0,o.Uk)(),(0,o._)("span",{class:"token function"},"defineAsyncComponent"),(0,o._)("span",{class:"token punctuation"},"("),(0,o._)("span",{class:"token punctuation"},"("),(0,o._)("span",{class:"token punctuation"},")"),(0,o.Uk)(),(0,o._)("span",{class:"token operator"},"=>"),(0,o.Uk)(),(0,o._)("span",{class:"token keyword"},"import"),(0,o._)("span",{class:"token punctuation"},"("),(0,o._)("span",{class:"token string"},"'components/SomeComponent'"),(0,o._)("span",{class:"token punctuation"},")"),(0,o._)("span",{class:"token punctuation"},")"),(0,o._)("span",{class:"token punctuation"},","),(0,o.Uk)("\n  "),(0,o._)("span",{class:"token punctuation"},"}"),(0,o.Uk)("\n"),(0,o._)("span",{class:"token punctuation"},"}"),(0,o.Uk)("\n")])]),(0,o._)("span",{class:"token tag"},[(0,o._)("span",{class:"token tag"},[(0,o._)("span",{class:"token punctuation"},"</"),(0,o.Uk)("script")]),(0,o._)("span",{class:"token punctuation"},">")]),(0,o.Uk)("\n")])],-1),j=(0,o._)("p",null,[(0,o.Uk)("正如你在上面注意到的，我们使用的是动态导入("),(0,o._)("code",{class:"doc-token"},"import('...resource.')"),(0,o.Uk)(")而不是常规导入("),(0,o._)("code",{class:"doc-token"},"import Resource from './path/to/resource'"),(0,o.Uk)(")。动态导入本质上是返回一个你可以使用的Promise。")],-1),v=(0,o._)("pre",{class:"doc-code language-js"},[(0,o._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,o._)("span",{class:"token keyword"},"import"),(0,o._)("span",{class:"token punctuation"},"("),(0,o._)("span",{class:"token string"},"'./categories.json'"),(0,o._)("span",{class:"token punctuation"},")"),(0,o.Uk)("\n  "),(0,o._)("span",{class:"token punctuation"},"."),(0,o._)("span",{class:"token function"},"then"),(0,o._)("span",{class:"token punctuation"},"("),(0,o._)("span",{class:"token parameter"},"categories"),(0,o.Uk)(),(0,o._)("span",{class:"token operator"},"=>"),(0,o.Uk)(),(0,o._)("span",{class:"token punctuation"},"{"),(0,o.Uk)("\n    "),(0,o._)("span",{class:"token comment"},"// 嘿，我们已经懒得加载文件了"),(0,o.Uk)("\n    "),(0,o._)("span",{class:"token comment"},'// 而我们在 "类别 "中拥有其内容'),(0,o.Uk)("\n  "),(0,o._)("span",{class:"token punctuation"},"}"),(0,o._)("span",{class:"token punctuation"},")"),(0,o.Uk)("\n  "),(0,o._)("span",{class:"token punctuation"},"."),(0,o._)("span",{class:"token function"},"catch"),(0,o._)("span",{class:"token punctuation"},"("),(0,o._)("span",{class:"token punctuation"},"("),(0,o._)("span",{class:"token punctuation"},")"),(0,o.Uk)(),(0,o._)("span",{class:"token operator"},"=>"),(0,o.Uk)(),(0,o._)("span",{class:"token punctuation"},"{"),(0,o.Uk)("\n    "),(0,o._)("span",{class:"token comment"},"// 哎呀，出错了..."),(0,o.Uk)("\n    "),(0,o._)("span",{class:"token comment"},"// 无法加载该资源"),(0,o.Uk)("\n  "),(0,o._)("span",{class:"token punctuation"},"}"),(0,o._)("span",{class:"token punctuation"},")"),(0,o.Uk)("\n")])],-1),C=(0,o._)("p",null,"相对于常规导入，使用动态导入的一个好处是，可以在运行时确定导入路径。",-1),S=(0,o._)("pre",{class:"doc-code language-js"},[(0,o._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,o._)("span",{class:"token keyword"},"import"),(0,o._)("span",{class:"token punctuation"},"("),(0,o._)("span",{class:"token string"},"'pages/'"),(0,o.Uk)(),(0,o._)("span",{class:"token operator"},"+"),(0,o.Uk)(" pageName "),(0,o._)("span",{class:"token operator"},"+"),(0,o.Uk)(),(0,o._)("span",{class:"token string"},"'/'"),(0,o.Uk)(),(0,o._)("span",{class:"token operator"},"+"),(0,o.Uk)(),(0,o._)("span",{class:"token string"},"'id'"),(0,o._)("span",{class:"token punctuation"},")"),(0,o.Uk)("\n")])],-1),b=(0,o._)("p",null,"在使用动态导入时，有一个注意事项，就像前面的示例中的变量部分。当网站/应用程序被捆绑时，因此在编译时，我们没有办法知道运行时的确切导入路径是什么。所以将为每个可能与变量路径相匹配的文件创建块(chunks)。你可能会在构建日志中看到不需要的文件。",-1),N=(0,o._)("p",null,"那么，在这种情况下，我们怎样才能限制创建的块的数量呢？我们的想法是尽可能地限制变量部分，使匹配的路径越少越好。",-1),q=(0,o._)("ol",null,[(0,o._)("li",null,"添加文件扩展名，即使没有扩展名也可以工作。这将只为该文件类型创建分块。当该文件夹包含许多文件类型时，这很有用。")],-1),I=(0,o._)("pre",{class:"doc-code language-js"},[(0,o._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,o._)("span",{class:"token comment"},"// 不好"),(0,o.Uk)("\n"),(0,o._)("span",{class:"token keyword"},"import"),(0,o._)("span",{class:"token punctuation"},"("),(0,o._)("span",{class:"token string"},"'./folder/'"),(0,o.Uk)(),(0,o._)("span",{class:"token operator"},"+"),(0,o.Uk)(" pageName"),(0,o._)("span",{class:"token punctuation"},")"),(0,o.Uk)("\n\n"),(0,o._)("span",{class:"token comment"},"// 好得多"),(0,o.Uk)("\n"),(0,o._)("span",{class:"token keyword"},"import"),(0,o._)("span",{class:"token punctuation"},"("),(0,o._)("span",{class:"token string"},"'./folder/'"),(0,o.Uk)(),(0,o._)("span",{class:"token operator"},"+"),(0,o.Uk)(" pageName "),(0,o._)("span",{class:"token operator"},"+"),(0,o.Uk)(),(0,o._)("span",{class:"token string"},"'.vue'"),(0,o._)("span",{class:"token punctuation"},")"),(0,o.Uk)("\n")])],-1),P=(0,o._)("ol",{start:"2"},[(0,o._)("li",null,"尝试创建一个文件夹结构，以限制该变量路径中可用的文件。尽量使其具体化。")],-1),Q=(0,o._)("pre",{class:"doc-code language-js"},[(0,o._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,o._)("span",{class:"token comment"},"// 不好 -- 对./folder内的任何JSON进行分块(递归搜索)"),(0,o.Uk)("\n"),(0,o._)("span",{class:"token keyword"},"const"),(0,o.Uk)(" asset "),(0,o._)("span",{class:"token operator"},"="),(0,o.Uk)(),(0,o._)("span",{class:"token string"},"'my/jsons/categories.json'"),(0,o._)("span",{class:"token punctuation"},"."),(0,o.Uk)("\n"),(0,o._)("span",{class:"token keyword"},"import"),(0,o._)("span",{class:"token punctuation"},"("),(0,o._)("span",{class:"token string"},"'./folder/'"),(0,o.Uk)(),(0,o._)("span",{class:"token operator"},"+"),(0,o.Uk)(" asset"),(0,o._)("span",{class:"token punctuation"},")"),(0,o.Uk)("\n\n"),(0,o._)("span",{class:"token comment"},"// 很好 -- 只为./folder/my/jsons内的JSON制作数据块"),(0,o.Uk)("\n"),(0,o._)("span",{class:"token keyword"},"const"),(0,o.Uk)(" asset "),(0,o._)("span",{class:"token operator"},"="),(0,o.Uk)(),(0,o._)("span",{class:"token string"},"'categories.json'"),(0,o.Uk)("\n"),(0,o._)("span",{class:"token keyword"},"import"),(0,o._)("span",{class:"token punctuation"},"("),(0,o._)("span",{class:"token string"},"'./folder/my/jsons/'"),(0,o.Uk)(),(0,o._)("span",{class:"token operator"},"+"),(0,o.Uk)(" asset"),(0,o._)("span",{class:"token punctuation"},")"),(0,o.Uk)("\n")])],-1),W={start:"3"},x=(0,o._)("li",null,[(0,o._)("p",null,"尝试从只包含文件的文件夹导入。以前面的示例为例，设想./folder/my/jsons进一步包含子文件夹。我们通过指定更具体的路径使动态导入变得更好，但在这种情况下，它仍然不是最佳选择。最好是使用只包含文件的终端文件夹，所以我们限制了匹配路径的数量。")],-1),H=(0,o.Uk)("使用"),R=(0,o.Uk)("Webpack magic comments"),T=(0,o.Uk)(),A=(0,o._)("code",{class:"doc-token"},"webpackInclude",-1),D=(0,o.Uk)("和"),J=(0,o._)("code",{class:"doc-token"},"webpackExclude",-1),L=(0,o.Uk)("来用正则表达式约束捆绑的块，例如："),O=(0,o._)("pre",{class:"doc-code language-js"},[(0,o._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,o._)("span",{class:"token keyword"},"await"),(0,o.Uk)(),(0,o._)("span",{class:"token keyword"},"import"),(0,o._)("span",{class:"token punctuation"},"("),(0,o.Uk)("\n  "),(0,o._)("span",{class:"token comment"},"/* webpackInclude: /(ar|en-US|ro)\\.js$/ */"),(0,o.Uk)("\n  "),(0,o._)("span",{class:"token string"},"'quasar/lang/'"),(0,o.Uk)(),(0,o._)("span",{class:"token operator"},"+"),(0,o.Uk)(" langIso\n"),(0,o._)("span",{class:"token punctuation"},")"),(0,o.Uk)("\n"),(0,o._)("span",{class:"token punctuation"},"."),(0,o._)("span",{class:"token function"},"then"),(0,o._)("span",{class:"token punctuation"},"("),(0,o._)("span",{class:"token parameter"},"lang"),(0,o.Uk)(),(0,o._)("span",{class:"token operator"},"=>"),(0,o.Uk)(),(0,o._)("span",{class:"token punctuation"},"{"),(0,o.Uk)("\n  Quasar"),(0,o._)("span",{class:"token punctuation"},"."),(0,o.Uk)("lang"),(0,o._)("span",{class:"token punctuation"},"."),(0,o._)("span",{class:"token function"},"set"),(0,o._)("span",{class:"token punctuation"},"("),(0,o.Uk)("lang"),(0,o._)("span",{class:"token punctuation"},"."),(0,o.Uk)("default"),(0,o._)("span",{class:"token punctuation"},")"),(0,o.Uk)("\n"),(0,o._)("span",{class:"token punctuation"},"}"),(0,o._)("span",{class:"token punctuation"},")"),(0,o.Uk)("\n")])],-1),V=(0,o._)("p",null,[(0,o.Uk)("将导致只捆绑你的网站/应用程序需要的语言包，而不是捆绑所有的语言包(超过40个！)，这可能会影响"),(0,o._)("code",{class:"doc-token"},"quasar dev"),(0,o.Uk)("和"),(0,o._)("code",{class:"doc-token"},"quasar build"),(0,o.Uk)("命令的性能。")],-1),E=(0,o._)("p",null,"记住，匹配的路径数等于生成的块数。",-1);function G(n,s,a,G,M,Z){const $=(0,o.up)("doc-link"),z=(0,o.up)("doc-page");return(0,o.wg)(),(0,o.j4)(z,{"meta-title":G.metaTitle,title:"延迟加载/代码拆分",nav:G.nav,toc:G.toc,"meta-desc":G.metaDesc},{default:(0,o.w5)((()=>[t,e,(0,o._)("h2",{id:"延迟加载路由器页面",class:"doc-heading doc-h2",onClick:s[0]||(s[0]=n=>G.copyHeading("延迟加载路由器页面"))},"延迟加载路由器页面"),c,(0,o._)("div",p,[k,(0,o._)("p",null,[l,(0,o.Wm)($,{to:"https://github.com/vuejs/vue-router-next"},{default:(0,o.w5)((()=>[_])),_:1}),r,(0,o.Wm)($,{to:"https://next.router.vuejs.org/"},{default:(0,o.w5)((()=>[u])),_:1}),i])]),d,U,g,m,(0,o._)("h2",{id:"延迟加载组件",class:"doc-heading doc-h2",onClick:s[1]||(s[1]=n=>G.copyHeading("延迟加载组件"))},"延迟加载组件"),y,h,w,f,(0,o._)("h2",{id:"动态延迟加载",class:"doc-heading doc-h2",onClick:s[2]||(s[2]=n=>G.copyHeading("动态延迟加载"))},"动态延迟加载"),j,v,C,S,(0,o._)("h2",{id:"动态导入的注意事项",class:"doc-heading doc-h2",onClick:s[3]||(s[3]=n=>G.copyHeading("动态导入的注意事项"))},"动态导入的注意事项"),b,N,q,I,P,Q,(0,o._)("ol",W,[x,(0,o._)("li",null,[(0,o._)("p",null,[H,(0,o.Wm)($,{to:"https://webpack.js.org/api/module-methods/#magic-comments"},{default:(0,o.w5)((()=>[R])),_:1}),T,A,D,J,L])])]),O,V,E])),_:1},8,["meta-title","nav","toc","meta-desc"])}var M=a(17536);const Z={name:"DocMarkdownPage",setup(){return{metaTitle:"延迟加载/代码拆分",metaDesc:"如何在 Quasar 应用程序中创建 Webpack chunks。",nav:[{name:"路由",category:"Quasar CLI",path:"/quasar-cli/routing",dir:"left"},{name:"处理静态资源",category:"Quasar CLI",path:"/quasar-cli/handling-assets",dir:"right"}],toc:[{id:"延迟加载路由器页面",title:"延迟加载路由器页面"},{id:"延迟加载组件",title:"延迟加载组件"},{id:"动态延迟加载",title:"动态延迟加载"},{id:"动态导入的注意事项",title:"动态导入的注意事项"}],copyHeading:M.Et}}};var $=a(74260);const z=(0,$.Z)(Z,[["render",G]]),B=z}}]);