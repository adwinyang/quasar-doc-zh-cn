"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[32613],{32613:(n,s,e)=>{e.r(s),e.d(s,{default:()=>T});var t=e(83673);const a=(0,t.Uk)("Having a code linter (like "),o=(0,t.Uk)("ESLint"),p=(0,t.Uk)(" in place is highly recommended and ensures your code looks legible. It also helps you capture some errors before even running the code."),r=(0,t._)("p",null,"When you create a Quasar project folder with Quasar CLI it will ask you if you want a linter and which setup you want for ESLint:",-1),c=(0,t.Uk)("Standard"),l=(0,t.Uk)("Airbnb"),u=(0,t.Uk)("Prettier"),i=(0,t._)("li",null,"… or you can configure one yourself",-1),k=(0,t._)("p",null,"Two dot files will be created:",-1),_=(0,t._)("ul",null,[(0,t._)("li",null,".eslintrc.js – ESLint configuration, including rules"),(0,t._)("li",null,".eslintignore – what ESLint should ignore when linting")],-1),d=(0,t._)("p",null,[(0,t.Uk)("Further extension of one of the Eslint setups above can be made. Your project will by default use "),(0,t._)("code",{class:"doc-token"},"eslint-plugin-vue"),(0,t.Uk)(" to handle your Vue files. Take a quick look at "),(0,t._)("code",{class:"doc-token"},".eslintrc.js"),(0,t.Uk)(" and notice it:")],-1),g=(0,t._)("pre",{class:"doc-code language-js"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,t._)("span",{class:"token keyword"},"extends"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token comment"},"// https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token comment"},"// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules."),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token string"},"'plugin:vue/strongly-recommended'"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t.Uk)("\n")])],-1),U=(0,t._)("p",null,[(0,t.Uk)("If you chose ESLint when creating your project folder, you’ll also notice that "),(0,t._)("code",{class:"doc-token"},"/quasar.conf.js"),(0,t.Uk)(" adds the eslint-loader to Webpack configuration for you:")],-1),m=(0,t._)("pre",{class:"doc-code language-js"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,t._)("span",{class:"token literal-property property"},"build"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token function"},"chainWebpack"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},"chain"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    chain"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"plugin"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'eslint-webpack-plugin'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"use"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("ESLintPlugin"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(),(0,t._)("span",{class:"token literal-property property"},"extensions"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'js'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue'"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"]"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])],-1),y=(0,t._)("p",null,"The linting rules can be removed, changed, or added. Notice some things:",-1),h=(0,t._)("ul",null,[(0,t._)("li",null,"Some rules are for the Standard, Airbnb or Prettier standards (whichever you chose when project was created). Example: ‘brace-style’."),(0,t._)("li",null,"Some rules are for eslint-plugin-vue. Example: ‘vue/max-attributes-per-line’.")],-1),b=(0,t._)("p",null,"You can add/remove/change rules by first visiting https://eslint.org/docs/rules/ or https://github.com/vuejs/eslint-plugin-vue.",-1),f=(0,t._)("p",null,"Example of ESLint rules below:",-1),w=(0,t._)("pre",{class:"doc-code language-js"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,t._)("span",{class:"token comment"},"// .eslintrc.js"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token string-property property"},"'rules'"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token string-property property"},"'brace-style'"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token number"},"2"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'stroustrup'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(),(0,t._)("span",{class:"token string-property property"},"'allowSingleLine'"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token boolean"},"true"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n\n  "),(0,t._)("span",{class:"token string-property property"},"'vue/max-attributes-per-line'"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"0"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token string-property property"},"'vue/valid-v-for'"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"0"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n\n  "),(0,t._)("span",{class:"token comment"},"// allow async-await"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token string-property property"},"'generator-star-spacing'"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'off'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n\n  "),(0,t._)("span",{class:"token comment"},"// allow paren-less arrow functions"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token string-property property"},"'arrow-parens'"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"0"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token string-property property"},"'one-var'"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"0"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n\n  "),(0,t._)("span",{class:"token string-property property"},"'import/first'"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"0"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token string-property property"},"'import/named'"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"2"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token string-property property"},"'import/namespace'"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"2"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token string-property property"},"'import/default'"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"2"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token string-property property"},"'import/export'"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"2"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token string-property property"},"'import/extensions'"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"0"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token string-property property"},"'import/no-unresolved'"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"0"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token string-property property"},"'import/no-extraneous-dependencies'"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"0"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n\n  "),(0,t._)("span",{class:"token comment"},"// allow debugger during development"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token string-property property"},"'no-debugger'"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" process"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("env"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token constant"},"NODE_ENV"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"==="),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'production'"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"?"),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"2"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"0"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])],-1),v=(0,t._)("p",null,[(0,t.Uk)("In order for you to disable ESLint later, all you need to do is comment out (or remove) the following code from "),(0,t._)("code",{class:"doc-token"},"/quasar.conf.js"),(0,t.Uk)(":")],-1),j=(0,t._)("pre",{class:"doc-code language-js"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,t._)("span",{class:"token literal-property property"},"build"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token function"},"chainWebpack"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},"chain"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token comment"},"/*\n     * we comment out this block\n     *\n    chain.plugin('eslint-webpack-plugin')\n      .use(ESLintPlugin, [{ extensions: [ 'js', 'vue' ] }])\n    */"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])],-1);function E(n,s,e,E,S,L){const x=(0,t.up)("doc-link"),W=(0,t.up)("doc-page");return(0,t.wg)(),(0,t.j4)(W,{"meta-title":E.metaTitle,title:"ESLint","meta-desc":E.metaDesc},{default:(0,t.w5)((()=>[(0,t._)("p",null,[a,(0,t.Wm)(x,{to:"https://eslint.org/"},{default:(0,t.w5)((()=>[o])),_:1}),p]),r,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Wm)(x,{to:"https://github.com/standard/standard"},{default:(0,t.w5)((()=>[c])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(x,{to:"https://github.com/airbnb/javascript"},{default:(0,t.w5)((()=>[l])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(x,{to:"https://github.com/prettier/prettier"},{default:(0,t.w5)((()=>[u])),_:1})]),i]),k,_,d,g,U,m,(0,t._)("h2",{id:"lint-rules",class:"doc-heading doc-h2",onClick:s[0]||(s[0]=n=>E.copyHeading("lint-rules"))},"Lint Rules"),y,h,b,f,w,(0,t._)("h2",{id:"disabling-linter",class:"doc-heading doc-h2",onClick:s[1]||(s[1]=n=>E.copyHeading("disabling-linter"))},"Disabling Linter"),v,j])),_:1},8,["meta-title","meta-desc"])}var S=e(17536);const L={name:"DocMarkdownPage",setup(){return{metaTitle:"ESLint",metaDesc:"How to configure a code linter in a Quasar app.",copyHeading:S.Et}}};var x=e(74260);const W=(0,x.Z)(L,[["render",E]]),T=W}}]);