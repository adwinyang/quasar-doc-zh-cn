"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[30696],{30696:(e,n,a)=>{a.r(n),a.d(n,{default:()=>U});var s=a(83673);const t=(0,s._)("p",null,"客户端激活指的是客户端的过程，指的是 Vue 在浏览器端接管由服务端发送的静态 HTML，使其变为由 Vue 管理的动态 DOM 的过程，这样对客户端的数据变化做出反应。",-1),o=(0,s._)("p",null,"由于服务器已经渲染了标记，我们显然不想扔掉它并重新创建所有的DOM元素。相反，我们想把静态标记 “激活”，使其成为互动的。",-1),l=(0,s._)("div",{class:"doc-note doc-note--warning"},[(0,s._)("p",{class:"doc-note__title"},"WARNING"),(0,s._)("p",null,[(0,s.Uk)("在开发模式下，Vue会断定客户端生成的虚拟DOM树与从服务器渲染的DOM结构相匹配。如果有不匹配，它将放弃激活，丢弃现有的DOM并从头开始渲染。"),(0,s._)("strong",null,"在生产模式下，这个断言被禁用，以获得最大的性能"),(0,s.Uk)("。")])],-1),c=(0,s._)("p",null,"在使用SSR+客户端激活时，需要注意的一点是一些特殊的HTML结构可能会被浏览器改变。例如，当你在Vue模板中这样写时。",-1),d=(0,s._)("pre",{class:"doc-code language-html"},[(0,s._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("table")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("tr")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("td")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("hi"),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("td")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("tr")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n"),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("table")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n")])],-1),_=(0,s._)("p",null,[(0,s.Uk)("浏览器会自动将"),(0,s._)("code",{class:"doc-token"},"<tbody>"),(0,s.Uk)("注入"),(0,s._)("code",{class:"doc-token"},"<table>"),(0,s.Uk)("内，然而，Vue生成的虚拟DOM不包含"),(0,s._)("code",{class:"doc-token"},"<tbody>"),(0,s.Uk)("，所以会造成不匹配。为了确保正确的匹配，确保在你的模板中编写有效的HTML。")],-1),u=(0,s._)("p",null,"如果你确实收到了激活错误(如在控制台看到的。“Vuejs Error - The client-side rendered virtual DOM tree is not matching server-rendered content”)，你可以尝试以下步骤。",-1),k=(0,s._)("ol",null,[(0,s._)("li",null,"在 Chrome 浏览器中显示 DevTools (F12)"),(0,s._)("li",null,'加载导致 "客户端渲染的虚拟DOM树… "警告的页面。'),(0,s._)("li",null,"滚动到 DevTools 控制台中的警告。"),(0,s._)("li",null,"点击 vue.runtime.esm.js 中警告的源位置超链接。"),(0,s._)("li",null,"在那里设置一个断点(在源代码浏览器中左键点击行号)。"),(0,s._)("li",null,[(0,s.Uk)("让同样的警告再次出现。通常是通过重新加载页面。如果有很多警告，你可以通过将鼠标移到"),(0,s._)("code",{class:"doc-token"},"msg"),(0,s.Uk)("变量上检查信息。")]),(0,s._)("li",null,'当你找到你的信息并停在断点上时，看一下_调用堆栈_。点击向下一帧调用 "patch "来打开它的来源。将鼠标悬停在补丁中执行行上方4行的hydrate函数调用。通往Hydrate源代码的超链接将被打开。'),(0,s._)("li",null,[(0,s.Uk)("在hydrate函数中，从开始的15行开始，在"),(0,s._)("code",{class:"doc-token"},"assertNodeMatch'返回"),(0,s.Uk)("false’后返回false的地方设置一个断点。在那里设置断点，并删除所有其他断点。")]),(0,s._)("li",null,[(0,s.Uk)("让同样的警告再次发生。现在，当断点被击中时， hydrate函数的执行应该停止。切换到DevTools控制台，评估"),(0,s._)("code",{class:"doc-token"},"elm"),(0,s.Uk)("，然后是"),(0,s._)("code",{class:"doc-token"},"vnode"),(0,s.Uk)("。这里"),(0,s._)("code",{class:"doc-token"},"elm"),(0,s.Uk)("似乎是一个_server-rendered DOM element_，而"),(0,s._)("code",{class:"doc-token"},"vnode"),(0,s.Uk)("是一个_virtual DOM node_。"),(0,s._)("code",{class:"doc-token"},"Elm"),(0,s.Uk)("被打印成HTML，所以你可以找出错误发生的地方。")])],-1);function i(e,n,a,i,r,p){const g=(0,s.up)("doc-page");return(0,s.wg)(),(0,s.j4)(g,{"meta-title":i.metaTitle,title:"客户端激活",nav:i.nav,toc:i.toc,"meta-desc":i.metaDesc},{default:(0,s.w5)((()=>[t,o,l,(0,s._)("h2",{id:"激活的注意事项",class:"doc-heading doc-h2",onClick:n[0]||(n[0]=e=>i.copyHeading("激活的注意事项"))},"激活的注意事项"),c,d,_,(0,s._)("h2",{id:"处理激活错误",class:"doc-heading doc-h2",onClick:n[1]||(n[1]=e=>i.copyHeading("处理激活错误"))},"处理激活错误"),u,k])),_:1},8,["meta-title","nav","toc","meta-desc"])}var r=a(17536);const p={name:"DocMarkdownPage",setup(){return{metaTitle:"客户端激活",metaDesc:"Quasar 服务器端渲染应用程序中的”客户端激话“是什么及其注意事项。",nav:[{name:"为 SSR 做 SEO",category:"开发 SSR",path:"/quasar-cli/developing-ssr/seo-for-ssr",dir:"left"},{name:"处理404和500错误",category:"开发 SSR",path:"/quasar-cli/developing-ssr/handling-404-and-500-errors",dir:"right"}],toc:[{id:"激活的注意事项",title:"激活的注意事项"},{id:"处理激活错误",title:"处理激活错误"}],copyHeading:r.Et}}};var g=a(74260);const h=(0,g.Z)(p,[["render",i]]),U=h}}]);