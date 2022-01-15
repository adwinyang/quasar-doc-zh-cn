"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[12810],{12810:(n,s,t)=>{t.r(s),t.d(s,{default:()=>L});var a=t(83673);const e=(0,a._)("p",null,"对 Typescript 的支持并没有被默认添加到你的项目中(除非你在创建项目文件夹时选择了TS)，但它可以通过本页面的指南轻松集成。",-1),o=(0,a._)("div",{class:"doc-note doc-note--tip"},[(0,a._)("p",{class:"doc-note__title"},"TIP"),(0,a._)("p",null,[(0,a.Uk)("只有当你在创建一个新的 Quasar 项目时"),(0,a._)("strong",null,"没有"),(0,a.Uk)("选择 TypeScript 支持时，才需要以下步骤。如果你在创建项目时选择了TS选项， TypeScript 支持已经被启用。")])],-1),p=(0,a._)("p",null,[(0,a.Uk)("为了支持 TypeScript ，你需要编辑"),(0,a._)("code",{class:"doc-token"},"/quasar.conf.js"),(0,a.Uk)("：")],-1),c=(0,a._)("pre",{class:"doc-code language-js"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,a.Uk)("module"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function-variable function"},"exports"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)(),(0,a._)("span",{class:"token keyword"},"function"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token parameter"},"ctx"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token keyword"},"return"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token literal-property property"},"supportTS"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token boolean"},"true"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token operator"},"..."),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n")])],-1),r=(0,a._)("p",null,[(0,a.Uk)("然后在你的项目根部创建"),(0,a._)("code",{class:"doc-token"},"/tsconfig.json"),(0,a.Uk)("文件，内容如下：")],-1),l=(0,a._)("pre",{class:"doc-code language-json"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-json"},[(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token property"},'"extends"'),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},'"@quasar/app/tsconfig-preset"'),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token property"},'"compilerOptions"'),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token property"},'"baseUrl"'),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},'"."'),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n")])],-1),k=(0,a._)("p",null,"现在你可以开始在你的项目中使用 TypeScript 。",-1),i=(0,a._)("div",{class:"doc-note doc-note--tip"},[(0,a._)("p",{class:"doc-note__title"},"TIP"),(0,a._)("p",null,[(0,a.Uk)("记住，你必须把你的JavaScript文件的扩展名改为"),(0,a._)("code",{class:"doc-token"},".ts"),(0,a.Uk)("，以允许在里面写 TypeScript 代码。要在你的组件中写入TS代码，相反，要改变脚本的开头标签，就像这样"),(0,a._)("code",{class:"doc-token"},'<script lang="ts">'),(0,a.Uk)("。")])],-1),u=(0,a._)("div",{class:"doc-note doc-note--warning"},[(0,a._)("p",{class:"doc-note__title"},"WARNING"),(0,a._)("p",null,[(0,a.Uk)("如果你启用了"),(0,a._)("code",{class:"doc-token"},"supportTS"),(0,a.Uk)("标志，但没有添加"),(0,a._)("code",{class:"doc-token"},"tsconfig.json"),(0,a.Uk)("文件，应用程序将在编译时中断")])],-1),_=(0,a._)("p",null,[(0,a.Uk)("在幕后，Quasar使用"),(0,a._)("code",{class:"doc-token"},"ts-loader"),(0,a.Uk)("和"),(0,a._)("code",{class:"doc-token"},"fork-ts-checker-webpack-plugin"),(0,a.Uk)("(由"),(0,a._)("code",{class:"doc-token"},"@quasar/app"),(0,a.Uk)("包提供)来管理TS文件。如果你需要为这些库提供一个自定义的配置，你可以通过制定`supportTS’属性来实现，就像这样：")],-1),d=(0,a._)("pre",{class:"doc-code language-js"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,a._)("span",{class:"token comment"},"// quasar.conf.js"),(0,a.Uk)("\nmodule"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function-variable function"},"exports"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)(),(0,a._)("span",{class:"token keyword"},"function"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token parameter"},"ctx"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token keyword"},"return"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token literal-property property"},"supportTS"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token literal-property property"},"tsLoaderConfig"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n        "),(0,a._)("span",{class:"token comment"},"// `appendTsSuffixTo: [/\\.vue$/]`和`transpileOnly: true`是默认添加的，不能被重写。"),(0,a.Uk)("\n        "),(0,a._)("span",{class:"token operator"},"..."),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token literal-property property"},"tsCheckerConfig"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n        "),(0,a._)("span",{class:"token comment"},"// `vue: true`是默认添加的，不能被重写。"),(0,a.Uk)("\n        "),(0,a._)("span",{class:"token operator"},"..."),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token operator"},"..."),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n")])],-1),U=(0,a._)("p",null,"首先添加需要的依赖性。",-1),g=(0,a._)("pre",{class:"doc-code language-bash"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,a.Uk)("$ "),(0,a._)("span",{class:"token function"},"yarn"),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"add"),(0,a.Uk)(" --dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin\n")])],-1),m=(0,a._)("p",null,"然后相应地更新你的ESLint配置，就像下面的示例：",-1),y=(0,a._)("pre",{class:"doc-code language-js"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,a._)("span",{class:"token comment"},"// .eslintrc.js"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token keyword"},"const"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)(" resolve "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"require"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token string"},"'path'"),(0,a._)("span",{class:"token punctuation"},")"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n\nmodule"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("exports "),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token comment"},"// https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token comment"},"// 这个选项在这个文件上中断了配置的层次结构"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token comment"},"// 如果你有一个更高级别的ESLint配置文件，就把它去掉(它通常会发生在一个monorepos中)。"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token literal-property property"},"root"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token boolean"},"true"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n\n  "),(0,a._)("span",{class:"token comment"},"// https://eslint.vuejs.org/user-guide/#how-to-use-custom-parser"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token comment"},'// 必须使用parserOptions而不是 "parser"，以便让vue-eslint-parser继续工作。'),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token comment"},"// `parser: vue-eslint-parser'`已经包含在任何'plugin:vue/**'配置中，应该省略。"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token literal-property property"},"parserOptions"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#eslint"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// 需要使解析器考虑到'vue'文件"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token literal-property property"},"extraFileExtensions"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token string"},"'.vue'"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token literal-property property"},"parser"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},"'@typescript-eslint/parser'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token literal-property property"},"project"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"resolve"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("__dirname"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(),(0,a._)("span",{class:"token string"},"'./tsconfig.json'"),(0,a._)("span",{class:"token punctuation"},")"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token literal-property property"},"tsconfigRootDir"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(" __dirname"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token literal-property property"},"ecmaVersion"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token number"},"2018"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(),(0,a._)("span",{class:"token comment"},"// Allows for the parsing of modern ECMAScript features"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token literal-property property"},"sourceType"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},"'module'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(),(0,a._)("span",{class:"token comment"},"// Allows for the use of imports"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n\n  "),(0,a._)("span",{class:"token comment"},"// 规则的顺序很重要，请避免洗牌。"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token keyword"},"extends"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"["),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// 基础ESLint推荐规则"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token string"},"'eslint:recommended'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n\n    "),(0,a._)("span",{class:"token comment"},"// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// ESLint排版规则"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token string"},"'plugin:@typescript-eslint/eslint-recommended'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token string"},"'plugin:@typescript-eslint/recommended'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// 如果检查时间过长，可以考虑禁用这类规则"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token string"},"'plugin:@typescript-eslint/recommended-requiring-type-checking'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n\n    "),(0,a._)("span",{class:"token comment"},"// https://eslint.vuejs.org/rules/#priority-a-essential-error-prevention"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// 考虑切换到`plugin:vue/strongly-recommended`或`plugin:vue/recommended`以获得更严格的规则"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token string"},"'plugin:vue/essential'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n\n    "),(0,a._)("span",{class:"token comment"},"// ---只有在使用更漂亮的时候 ---"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// https://github.com/prettier/eslint-config-prettier#installation"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// 与Prettier的使用，由'eslint-config-prettier'提供。"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token string"},"'prettier'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token string"},"'prettier/@typescript-eslint'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token string"},"'prettier/vue'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"]"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n\n  "),(0,a._)("span",{class:"token literal-property property"},"plugins"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"["),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// 需要应用需要类型信息的规则"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token string"},"'@typescript-eslint'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n\n    "),(0,a._)("span",{class:"token comment"},"// https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// 需要对*.vue文件进行润色"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token string"},"'vue'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"]"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n\n  "),(0,a._)("span",{class:"token comment"},"// 在这里添加你的自定义规则"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token literal-property property"},"rules"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// 其他人的规则..."),(0,a.Uk)("\n\n    "),(0,a._)("span",{class:"token comment"},"// 术语表"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token string-property property"},"'quotes'"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"["),(0,a._)("span",{class:"token string"},"'warn'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(),(0,a._)("span",{class:"token string"},"'single'"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token string-property property"},"'@typescript-eslint/explicit-function-return-type'"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},"'off'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n")])],-1),f=(0,a.Uk)("如果有什么问题，请阅读"),h=(0,a.Uk)("typescript-eslint guide"),v=(0,a.Uk)(" ，这个示例就是基于此。"),T=(0,a._)("p",null,[(0,a.Uk)("作为最后一步，更新你的"),(0,a._)("code",{class:"doc-token"},"yarn lint"),(0,a.Uk)("命令，使其也对"),(0,a._)("code",{class:"doc-token"},".ts"),(0,a.Uk)("文件进行检查。")],-1),b=(0,a._)("div",{class:"doc-note doc-note--tip"},[(0,a._)("p",{class:"doc-note__title"},"TIP"),(0,a._)("p",null,[(0,a.Uk)("由于类型检查的开销， TypeScript Linting真的很慢，我们建议你在"),(0,a._)("code",{class:"doc-token"},"quasar.conf.js"),(0,a.Uk)("中禁用Webpack lint扩展，用于开发构建。")])],-1),S=(0,a._)("p",null,[(0,a.Uk)("如果你设置了 TypeScript linting并希望"),(0,a._)("code",{class:"doc-token"},"fork-ts-checker-webpack-plugin"),(0,a.Uk)("(由"),(0,a._)("code",{class:"doc-token"},"@quasar/app"),(0,a.Uk)("包提供)考虑到它，那么你应该使用"),(0,a._)("code",{class:"doc-token"},"tsCheckerConfig"),(0,a.Uk)("属性。")],-1),w=(0,a._)("pre",{class:"doc-code language-js"},[(0,a._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,a._)("span",{class:"token comment"},"// quasar.conf.js"),(0,a.Uk)("\nmodule"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function-variable function"},"exports"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)(),(0,a._)("span",{class:"token keyword"},"function"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token parameter"},"ctx"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token keyword"},"return"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token literal-property property"},"supportTS"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token literal-property property"},"tsCheckerConfig"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n        "),(0,a._)("span",{class:"token literal-property property"},"eslint"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n          "),(0,a._)("span",{class:"token literal-property property"},"enabled"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token boolean"},"true"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n          "),(0,a._)("span",{class:"token literal-property property"},"files"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},"'./src/**/*.{ts,tsx,js,jsx,vue}'"),(0,a.Uk)("\n        "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token operator"},"..."),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n")])],-1);function j(n,s,t,j,q,C){const x=(0,a.up)("doc-link"),E=(0,a.up)("doc-page");return(0,a.wg)(),(0,a.j4)(E,{"meta-title":j.metaTitle,title:"支持 TypeScript",related:j.related,nav:j.nav,toc:j.toc,"meta-desc":j.metaDesc},{default:(0,a.w5)((()=>[e,o,(0,a._)("h2",{id:"安装-typescript-支持",class:"doc-heading doc-h2",onClick:s[0]||(s[0]=n=>j.copyHeading("安装-typescript-支持"))},"安装 TypeScript 支持"),p,c,r,l,k,i,u,(0,a._)("h2",{id:"处理ts-webpack加载器",class:"doc-heading doc-h2",onClick:s[1]||(s[1]=n=>j.copyHeading("处理ts-webpack加载器"))},"处理TS Webpack加载器"),_,d,(0,a._)("h3",{id:"提示性设置",class:"doc-heading doc-h3",onClick:s[2]||(s[2]=n=>j.copyHeading("提示性设置"))},"提示性设置"),U,g,m,y,(0,a._)("p",null,[f,(0,a.Wm)(x,{to:"https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md"},{default:(0,a.w5)((()=>[h])),_:1}),v]),T,b,S,w])),_:1},8,["meta-title","related","nav","toc","meta-desc"])}var q=t(17536);const C={name:"DocMarkdownPage",setup(){return{metaTitle:"支持 TypeScript",metaDesc:"如何在 Quasar 应用程序中启用对 TypeScript 的支持。",related:[{name:"quasar.conf.js",category:"Quasar CLI",path:"/quasar-cli/quasar-conf-js"}],nav:[{name:"浏览器兼容性",category:"Quasar CLI",path:"/quasar-cli/browser-compatibility",dir:"left"},{name:"目录结构",category:"Quasar CLI",path:"/quasar-cli/directory-structure",dir:"right"}],toc:[{id:"安装-typescript-支持",title:"安装 TypeScript 支持"},{id:"处理ts-webpack加载器",title:"处理TS Webpack加载器"},{id:"提示性设置",title:"提示性设置",sub:!0}],copyHeading:q.Et}}};var x=t(74260);const E=(0,x.Z)(C,[["render",j]]),L=E}}]);