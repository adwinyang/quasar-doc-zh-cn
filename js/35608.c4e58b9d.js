"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[35608],{35608:(s,n,a)=>{a.r(n),a.d(n,{default:()=>ps});var t=a(83673);const e=(0,t._)("p",null,'RTL是指 "从右到左"的用户界面，用于需要它的语言。',-1),o=(0,t._)("p",null,[(0,t.Uk)("要启用它，你需要编辑"),(0,t._)("code",{class:"doc-token"},"/quasar.conf.js"),(0,t.Uk)("。")],-1),c=(0,t._)("pre",{class:"doc-code language-js"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,t._)("span",{class:"token literal-property property"},"build"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"rtl"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token boolean"},"true"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])],-1),l=(0,t._)("p",null,[(0,t.Uk)("你首先需要安装"),(0,t._)("code",{class:"doc-token"},"postcss-rtlcss"),(0,t.Uk)("包：")],-1),p=(0,t._)("pre",{class:"doc-code language-bash"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,t.Uk)("$ "),(0,t._)("span",{class:"token function"},"yarn"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"add"),(0,t.Uk)(" -D postcss-rtlcss\n"),(0,t._)("span",{class:"token comment"},"# or"),(0,t.Uk)("\n$ "),(0,t._)("span",{class:"token function"},"npm"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"install"),(0,t.Uk)(" -D postcss-rtlcss\n"),(0,t._)("span",{class:"token comment"},"# or"),(0,t.Uk)("\n$ "),(0,t._)("span",{class:"token function"},"pnpm"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"add"),(0,t.Uk)(" quasar -D postcss-rtlcss\n")])],-1),u=(0,t._)("p",null,[(0,t.Uk)("然后创建"),(0,t._)("code",{class:"doc-token"},"/postcss.config.js"),(0,t.Uk)("文件，如果你还没有的话，把这个添加到里面：")],-1),k=(0,t._)("pre",{class:"doc-code language-js"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,t.Uk)("module"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("exports "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"plugins"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token function"},"require"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'postcss-rtlcss'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},'// <<<< in "plugins"'),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"]"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])],-1),r=(0,t.Uk)("RTL与"),_=(0,t.Uk)("Quasar语言包"),i=(0,t.Uk)(" 紧密相连。"),d=(0,t._)("strong",null,"当 Quasar 被设置为使用RTL语言",-1),U=(0,t.Uk)('(语言包的 "rtl "属性设置为 “true”)，并且'),g=(0,t._)("strong",null,"RTL支持被启用",-1),m=(0,t.Uk)('(查看上面的 "启用RTL支持 "部分)，那么用户界面将动态地转换 Quasar 和你的网站/应用程序代码为RTL。'),h=(0,t._)("p",null,"让我们来讨论一下这些要求中的每一项:",-1),L=(0,t._)("em",null,"Quasar需要被设置为使用一种RTL语言",-1),T=(0,t.Uk)("。 请参阅"),R=(0,t.Uk)("Quasar语言包"),y=(0,t.Uk)(" 了解如何设置语言。你可以将语言设置为默认语言或动态设置。"),S=(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("em",null,"RTL支持需要被启用"),(0,t.Uk)('。 请仔细检查上面的 "启用RTL支持 "部分。它的作用是为您的网站/应用程序代码和 Quasar 组件编译CSS，并自动添加相应的RTL CSS规则。由于增加了这些CSS规则，你的CSS包的大小将略有增加。')])],-1),C=(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Uk)("可选的。"),(0,t._)("em",null,"将devland源代码的CSS视为RTL"),(0,t.Uk)("。 默认情况下，Quasar假定所有的样式都是以LTR方向编写的，并为它们生成相应的RTL样式。如果你想直接用RTL写你自己的css，那么你需要。")])],-1),Q=(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Uk)("(Quasar CLI) 设置 quasar.conf.js > “build” > rtl > “source” 为 "),(0,t._)("code",{class:"doc-token"},"rtl"),(0,t.Uk)("。")]),(0,t._)("li",null,[(0,t.Uk)("(Quasar Vite 插件 / Vue CLI 插件) 在/postcss.config.js中设置"),(0,t._)("code",{class:"doc-token"},"require('postcss-rtlcss', { source: 'rtl' })"),(0,t.Uk)("。")])],-1),q=(0,t.Uk)("Quasar CLI 使用了"),f=(0,t.Uk)("postcss-rtlcss"),v=(0,t.Uk)("，所以如果你想通过quasar.conf.js > build > rtl来调整RTL设置，那么它必须符合"),b=(0,t.Uk)("postcss-rtlcss options"),x=(0,t.Uk)(" 。"),D=(0,t._)("li",null,[(0,t._)("p",null,"RTL和非RTL Quasar语言包将一起工作，并动态地切换到/从RTL。因此，只有选择一个RTL Quasar语言包才会为你触发RTL用户界面。你不需要单独构建你的应用程序(一个用于非RTL，一个用于仅有RTL)。RTL会自动为你动态地改变。")],-1),j=(0,t.Uk)("你可以通过查看布尔值"),w=(0,t._)("code",{class:"doc-token"},"$q.lang.rtl",-1),I=(0,t.Uk)("来动态地检测你是否处于RTL模式。关于"),H=(0,t.Uk)("$q对象"),M=(0,t.Uk)(" 的更多信息。"),V=(0,t._)("li",null,[(0,t._)("p",null,'在编写你自己的CSS时，你需要小心。像上面提到的，如果启用了RTL支持，那么RTL(如果postcss-rtl配置的 "source "设置为 “ltr”，则为LTR)规则将根据你的CSS代码自动添加。所以写：'),(0,t._)("pre",{class:"doc-code language-css"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-css"},[(0,t._)("span",{class:"token selector"},".my-class"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},"margin-left"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 10px"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  right：5px"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t._)("p",null,"…将为RTL添加这个规则："),(0,t._)("pre",{class:"doc-code language-css"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-css"},[(0,t._)("span",{class:"token selector"},"[dir=rtl] .my-class"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},"margin-right"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 10px"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},"left"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 5px"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t._)("p",null,"任何引用“左”或“右”的CSS规则都会自动触发要添加的等效RTL CSS规则。")],-1),W=(0,t._)("p",null,"如果你需要一个例外，这样你的CSS代码就不会添加相应的RTL规则，那么就添加这个注释:",-1),$=(0,t._)("pre",{class:"doc-code language-css"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-css"},[(0,t._)("span",{class:"token selector"},".my-class"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},"margin-left"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 10px "),(0,t._)("span",{class:"token comment"},"/* rtl:ignore */"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])],-1),O=(0,t._)("p",null,"…或SCSS的缩进形式:",-1),z=(0,t._)("pre",{class:"doc-code language-sass"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-sass"},[(0,t._)("span",{class:"token selector"},".my-class"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token property-line"},[(0,t.Uk)("  "),(0,t._)("span",{class:"token property"},"margin-left"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(' 10px #{"'),(0,t._)("span",{class:"token operator"},"/"),(0,t._)("span",{class:"token operator"},"*"),(0,t.Uk)(),(0,t._)("span",{class:"token property"},"rtl"),(0,t._)("span",{class:"token punctuation"},":"),(0,t._)("span",{class:"token property"},"ignore"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"*"),(0,t._)("span",{class:"token operator"},"/"),(0,t.Uk)('"}')]),(0,t.Uk)("\n")])],-1),A=(0,t._)("p",null,"…或默认的SCSS。",-1),E=(0,t._)("pre",{class:"doc-code language-sass"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-sass"},[(0,t._)("span",{class:"token selector"},".my-class {"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token property-line"},[(0,t.Uk)("  "),(0,t._)("span",{class:"token property"},"margin-left"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(' 10px #{"'),(0,t._)("span",{class:"token operator"},"/"),(0,t._)("span",{class:"token operator"},"*"),(0,t.Uk)(),(0,t._)("span",{class:"token property"},"rtl"),(0,t._)("span",{class:"token punctuation"},":"),(0,t._)("span",{class:"token property"},"ignore"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"*"),(0,t._)("span",{class:"token operator"},"/"),(0,t.Uk)('"};')]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token selector"},"}"),(0,t.Uk)("\n")])],-1),J=(0,t._)("p",null,[(0,t.Uk)("现在RTL和非RTL的UI模式都会有"),(0,t._)("code",{class:"doc-token"},"margin-left"),(0,t.Uk)("属性。")],-1),P=(0,t._)("p",null,[(0,t.Uk)("有时你需要对整个DOM元素/组件进行例外处理。在这种情况下，将"),(0,t._)("code",{class:"doc-token"},'dir="ltr"'),(0,t.Uk)("或"),(0,t._)("code",{class:"doc-token"},'dir="rtl"'),(0,t.Uk)("HTML属性添加到最外层的DOM元素/组件模板:")],-1),Z=(0,t._)("pre",{class:"doc-code language-html"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"dir"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("rtl"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token comment"},"\x3c!--\n    this DIV and all its content will use RTL mode\n    regardless of Quasar language pack RTL settings\n  --\x3e"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])],-1),B=(0,t._)("p",null,"或者，如果你需要你的RTL用户界面对一个DOM元素/组件使用从左到右(ltr)的模式:",-1),F=(0,t._)("pre",{class:"doc-code language-html"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"dir"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("ltr"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token comment"},"\x3c!--\n    此DIV及其所有内容将使用非RTL模式\n    不考虑 Quasar 语言包RTL设置\n  --\x3e"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])],-1),G=(0,t._)("p",null,"要在UMD中启用RTL UIs，你需要为你的 Quasar 版本包含RTL等效的CSS标签，同时还要打包Quasar RTL语言包(如希伯来语或波斯语)。例如：",-1),K=(0,t._)("pre",{class:"doc-code language-html"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-html"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("html")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("head")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    ...\n    "),(0,t._)("span",{class:"token comment"},"\x3c!-- 用您的 Quasar 版本替换“2.0.0”（如下）。 --\x3e"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("link")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"href"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("https://cdn.jsdelivr.net/npm/quasar@2/dist/quasar.rtl.prod.css"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"rel"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("stylesheet"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"type"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("text/css"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("head")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("body")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    ...\n\n    "),(0,t._)("span",{class:"token comment"},"\x3c!--\n      我们还需要一个 RTL Quasar 语言包；我们以希伯来语为例；\n      在 Quasar JS 标签之后包含它；\n      用您的 Quasar 版本替换“2.0.0”（如下）。\n    --\x3e"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("script")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"src"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("https://cdn.jsdelivr.net/npm/quasar@2/dist/lang/he.umd.prod.js"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token script"}),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token script"},[(0,t._)("span",{class:"token language-javascript"},[(0,t.Uk)("\n      Quasar"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("lang"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"set"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("Quasar"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("lang"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("he"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n    ")])]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("body")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("html")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])],-1),N=(0,t.Uk)("通过使用我们的"),X=(0,t.Uk)("UMD标签生成器"),Y=(0,t.Uk)(' 检查你需要在你的HTML文件中包含哪些标签，并确保你勾选 "支持RTL CSS "复选框。 还要注意生成的HTML文件开头的'),ss=(0,t._)("code",{class:"doc-token"},'<html dir="rtl">',-1),ns=(0,t.Uk)("标签 – 你也需要它。"),as=(0,t._)("div",{class:"doc-note doc-note--warning"},[(0,t._)("p",{class:"doc-note__title"},"CAVEAT"),(0,t._)("p",null,"Quasar CLI 会自动为您的网站/应用程序代码添加等效的 RTL CSS 规则，但对于未使用 Quasar CLI 的 UMD，情况并非如此。您必须自己管理编写与您的网站/应用程序 CSS 代码等效的 RTL 代码。只有 Quasar 组件会自动处理这个问题。")],-1);function ts(s,n,a,ts,es,os){const cs=(0,t.up)("doc-link"),ls=(0,t.up)("doc-page");return(0,t.wg)(),(0,t.j4)(ls,{"meta-title":ts.metaTitle,title:"RTL支持",related:ts.related,nav:ts.nav,toc:ts.toc,"meta-desc":ts.metaDesc},{default:(0,t.w5)((()=>[e,(0,t._)("h2",{id:"启用rtl支持",class:"doc-heading doc-h2",onClick:n[0]||(n[0]=s=>ts.copyHeading("启用rtl支持"))},"启用RTL支持"),(0,t._)("h3",{id:"quasar-cli",class:"doc-heading doc-h3",onClick:n[1]||(n[1]=s=>ts.copyHeading("quasar-cli"))},"Quasar CLI"),o,c,(0,t._)("h3",{id:"quasar-vite-插件-vue-cli-插件",class:"doc-heading doc-h3",onClick:n[2]||(n[2]=s=>ts.copyHeading("quasar-vite-插件-vue-cli-插件"))},"Quasar Vite 插件 / Vue CLI 插件"),l,p,u,k,(0,t._)("h2",{id:"它是如何工作的",class:"doc-heading doc-h2",onClick:n[3]||(n[3]=s=>ts.copyHeading("它是如何工作的"))},"它是如何工作的"),(0,t._)("p",null,[r,(0,t.Wm)(cs,{to:"/options/quasar-language-packs"},{default:(0,t.w5)((()=>[_])),_:1}),i,d,U,g,m]),h,(0,t._)("ol",null,[(0,t._)("li",null,[(0,t._)("p",null,[L,T,(0,t.Wm)(cs,{to:"/options/quasar-language-packs"},{default:(0,t.w5)((()=>[R])),_:1}),y])]),S,C]),Q,(0,t._)("h2",{id:"配置",class:"doc-heading doc-h2",onClick:n[4]||(n[4]=s=>ts.copyHeading("配置"))},"配置"),(0,t._)("p",null,[q,(0,t.Wm)(cs,{to:"https://github.com/elchininet/postcss-rtlcss"},{default:(0,t.w5)((()=>[f])),_:1}),v,(0,t.Wm)(cs,{to:"https://github.com/elchininet/postcss-rtlcss#options"},{default:(0,t.w5)((()=>[b])),_:1}),x]),(0,t._)("h2",{id:"需要记住的事情",class:"doc-heading doc-h2",onClick:n[5]||(n[5]=s=>ts.copyHeading("需要记住的事情"))},"需要记住的事情"),(0,t._)("ul",null,[D,(0,t._)("li",null,[(0,t._)("p",null,[j,w,I,(0,t.Wm)(cs,{to:"/options/the-q-object"},{default:(0,t.w5)((()=>[H])),_:1}),M])]),V]),(0,t._)("h3",{id:"将css规则标记为例外",class:"doc-heading doc-h3",onClick:n[6]||(n[6]=s=>ts.copyHeading("将css规则标记为例外"))},"将CSS规则标记为例外"),W,$,O,z,A,E,J,P,Z,B,F,(0,t._)("h2",{id:"处理-quasar-umd",class:"doc-heading doc-h2",onClick:n[7]||(n[7]=s=>ts.copyHeading("处理-quasar-umd"))},"处理 Quasar UMD"),G,K,(0,t._)("p",null,[N,(0,t.Wm)(cs,{to:"/start/umd"},{default:(0,t.w5)((()=>[X])),_:1}),Y,ss,ns]),as])),_:1},8,["meta-title","related","nav","toc","meta-desc"])}var es=a(17536);const os={name:"DocMarkdownPage",setup(){return{metaTitle:"RTL支持",metaDesc:"在 Quasar 应用程序中支持从右到左。",related:[{name:"Quasar 语言包",category:"选项和辅助",path:"/options/quasar-language-packs"},{name:"应用程序国际化",category:"选项和辅助",path:"/options/app-internationalization"}],nav:[{name:"应用程序国际化",category:"选项和辅助",path:"/options/app-internationalization",dir:"left"},{name:"安装图标库",category:"选项和辅助",path:"/options/installing-icon-libraries",dir:"right"}],toc:[{id:"启用rtl支持",title:"启用RTL支持"},{id:"quasar-cli",title:"Quasar CLI",sub:!0},{id:"quasar-vite-插件-vue-cli-插件",title:"Quasar Vite 插件 / Vue CLI 插件",sub:!0},{id:"它是如何工作的",title:"它是如何工作的"},{id:"配置",title:"配置"},{id:"需要记住的事情",title:"需要记住的事情"},{id:"将css规则标记为例外",title:"将CSS规则标记为例外",sub:!0},{id:"处理-quasar-umd",title:"处理 Quasar UMD"}],copyHeading:es.Et}}};var cs=a(74260);const ls=(0,cs.Z)(os,[["render",ts]]),ps=ls}}]);