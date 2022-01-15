"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[71924],{71924:(a,n,o)=>{o.r(n),o.d(n,{default:()=>G});var e=o(83673);const c=(0,e.Uk)("Quasar CLI"),s=(0,e.Uk)("使得从你的源代码中开发或构建最终的可分发文件变得异常简单。"),t=(0,e._)("pre",{class:"doc-code language-bash"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,e.Uk)("$ quasar dev -m capacitor -T "),(0,e._)("span",{class:"token punctuation"},"["),(0,e.Uk)("ios"),(0,e._)("span",{class:"token operator"},"|"),(0,e.Uk)("android"),(0,e._)("span",{class:"token punctuation"},"]"),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token comment"},"# ..或者更长的形式:"),(0,e.Uk)("\n$ quasar dev --mode capacitor --target "),(0,e._)("span",{class:"token punctuation"},"["),(0,e.Uk)("ios"),(0,e._)("span",{class:"token operator"},"|"),(0,e.Uk)("android"),(0,e._)("span",{class:"token punctuation"},"]"),(0,e.Uk)("\n")])],-1),l=(0,e._)("p",null,"它将打开 IDE(Android Studio / Xcode)，从那里你可以手动选择模拟器(或同时选择多个模拟器！)，并在它/他们身上安装开发应用。你也可以在真正的移动/平板电脑设备上运行开发应用程序。",-1),d=(0,e._)("div",{class:"doc-note doc-note--warning"},[(0,e._)("p",{class:"doc-note__title"},"WARNING"),(0,e._)("p",null,[(0,e.Uk)("在Android Studio中，你会看到一条信息，建议升级 Gradle 版本。"),(0,e._)("strong",null,"不要升级 Gradle"),(0,e.Uk)("，因为这将破坏Capacitor项目。任何其他要求的升级也是如此。")]),(0,e._)("p",null,[(0,e._)("img",{src:"https://cdn.quasar.dev/img/gradle-upgrade-notice.png",alt:"Gradle升级",class:"q-my-md fit rounded-borders",style:{"max-width":"350px"}}),(0,e.Uk)("。")]),(0,e._)("p",null,"如果你遇到任何IDE错误，那么请点击文件>无效缓存并重新启动。"),(0,e._)("img",{src:"https://cdn.quasar.dev/img/gradle-invalidate-cache.png",alt:"Gradle upgrade",class:"q-mt-md fit rounded-borders",style:{"max-width":"350px"}})],-1),r=(0,e._)("p",null,"为了使你能够在设备模拟器上或直接在手机上开发(包括热模块重装)，Quasar CLI 遵循以下步骤。",-1),i=(0,e._)("ol",null,[(0,e._)("li",null,"检测你的机器的外部IP地址。如果检测到有多个这样的IP，那么它会要求你选择一个。如果你将使用手机进行开发，那么选择你的机器的IP地址，该地址可以从手机/平板电脑上ping到。"),(0,e._)("li",null,"它在你的机器上启动了一个开发服务器。"),(0,e._)("li",null,"它告诉Capacitor使用之前检测到的IP。这样，应用程序就可以连接到开发服务器。"),(0,e._)("li",null,"它使用Capacitor CLI来更新你所有的插件。"),(0,e._)("li",null,"最后，它打开你的本地IDE。在这里运行你的应用程序，它将自动连接到开发服务器。")],-1),p=(0,e._)("div",{class:"doc-note doc-note--danger"},[(0,e._)("p",{class:"doc-note__title"},"WARNING"),(0,e._)("p",null,"如果在手机/平板电脑上开发，非常重要的一点是，你的构建机器的外部IP地址可以从手机/平板电脑上访问，否则你会得到一个只有白屏的开发应用。还要检查你的机器的防火墙是否允许连接到开发选择的端口。")],-1),u=(0,e._)("pre",{class:"doc-code language-bash"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,e.Uk)("$ quasar build -m capacitor -T "),(0,e._)("span",{class:"token punctuation"},"["),(0,e.Uk)("ios"),(0,e._)("span",{class:"token operator"},"|"),(0,e.Uk)("android"),(0,e._)("span",{class:"token punctuation"},"]"),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token comment"},"# ..or the longer form:"),(0,e.Uk)("\n$ quasar build --mode capacitor --target "),(0,e._)("span",{class:"token punctuation"},"["),(0,e.Uk)("ios"),(0,e._)("span",{class:"token operator"},"|"),(0,e.Uk)("android"),(0,e._)("span",{class:"token punctuation"},"]"),(0,e.Uk)("\n")])],-1),_=(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("p",null,[(0,e.Uk)("这些命令解析并构建你的"),(0,e._)("code",{class:"doc-token"},"/src"),(0,e.Uk)("文件夹，然后覆盖"),(0,e._)("code",{class:"doc-token"},"/src-capacitor/www"),(0,e.Uk)("，然后使用 Gradle /xcodebuild生成最终的资产，进入手机/平板电脑。")])]),(0,e._)("li",null,[(0,e._)("p",null,[(0,e.Uk)("除非另有配置，否则构建的包将位于"),(0,e._)("code",{class:"doc-token"},"/dist/capacitor"),(0,e.Uk)("中。")])]),(0,e._)("li",null,[(0,e._)("p",null,[(0,e.Uk)("如果你希望跳过 Gradle /xcodebuild步骤，只填充"),(0,e._)("code",{class:"doc-token"},"/src-capacitor/www"),(0,e.Uk)("文件夹。")])])],-1),k=(0,e._)("pre",{class:"doc-code language-bash"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,e.Uk)("$ quasar build -m capacitor -T "),(0,e._)("span",{class:"token punctuation"},"["),(0,e.Uk)("ios"),(0,e._)("span",{class:"token operator"},"|"),(0,e.Uk)("android"),(0,e._)("span",{class:"token punctuation"},"]"),(0,e.Uk)(" --skip-pkg\n")])],-1),g=(0,e._)("ul",null,[(0,e._)("li",null,"如果你希望使用IDE(Android Studio / Xcode)手动构建最终资产，而不是做终端构建，那么。")],-1),U=(0,e._)("pre",{class:"doc-code language-bash"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,e.Uk)("$ quasar build -m capacitor -T "),(0,e._)("span",{class:"token punctuation"},"["),(0,e.Uk)("ios"),(0,e._)("span",{class:"token operator"},"|"),(0,e.Uk)("android"),(0,e._)("span",{class:"token punctuation"},"]"),(0,e.Uk)(" --ide\n")])],-1),m=(0,e._)("div",{class:"doc-note doc-note--warning"},[(0,e._)("p",{class:"doc-note__title"},"WARNING"),(0,e._)("p",null,[(0,e.Uk)("在Android Studio中，你会看到一条信息，建议升级 Gradle 版本。"),(0,e._)("strong",null,"不要升级 Gradle"),(0,e.Uk)("，因为这将破坏Capacitor项目。任何其他要求的升级也是如此。")]),(0,e._)("p",null,[(0,e._)("img",{src:"https://cdn.quasar.dev/img/gradle-upgrade-notice.png",alt:"Gradle升级",class:"q-my-md fit rounded-borders",style:{"max-width":"350px"}}),(0,e.Uk)("。")]),(0,e._)("p",null,"如果你遇到任何IDE错误，那么请点击文件>无效缓存并重新启动。"),(0,e._)("img",{src:"https://cdn.quasar.dev/img/gradle-invalidate-cache.png",alt:"Gradle upgrade",class:"q-mt-md fit rounded-borders",style:{"max-width":"350px"}})],-1),h=(0,e._)("p",null,"如果你想在生产构建中启用UI代码的调试功能。",-1),b=(0,e._)("pre",{class:"doc-code language-bash"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,e.Uk)("$ quasar build -m capacitor -T "),(0,e._)("span",{class:"token punctuation"},"["),(0,e.Uk)("ios"),(0,e._)("span",{class:"token operator"},"|"),(0,e.Uk)("android"),(0,e._)("span",{class:"token punctuation"},"]"),(0,e.Uk)(" -d\n\n"),(0,e._)("span",{class:"token comment"},"# ..或者更长的形式"),(0,e.Uk)("\n$ quasar build -m capacitor -T "),(0,e._)("span",{class:"token punctuation"},"["),(0,e.Uk)("ios"),(0,e._)("span",{class:"token operator"},"|"),(0,e.Uk)("android"),(0,e._)("span",{class:"token punctuation"},"]"),(0,e.Uk)(" --debug\n")])],-1);function v(a,n,o,v,q,I){const w=(0,e.up)("doc-link"),C=(0,e.up)("doc-page");return(0,e.wg)(),(0,e.j4)(C,{"meta-title":v.metaTitle,title:"Capacitor 构建命令",nav:v.nav,toc:v.toc,"meta-desc":v.metaDesc},{default:(0,e.w5)((()=>[(0,e._)("p",null,[(0,e.Wm)(w,{to:"/quasar-cli/installation"},{default:(0,e.w5)((()=>[c])),_:1}),s]),(0,e._)("h2",{id:"开发",class:"doc-heading doc-h2",onClick:n[0]||(n[0]=a=>v.copyHeading("开发"))},"开发"),t,l,d,r,i,p,(0,e._)("h2",{id:"为生产而建",class:"doc-heading doc-h2",onClick:n[1]||(n[1]=a=>v.copyHeading("为生产而建"))},"为生产而建"),u,_,k,g,U,m,h,b])),_:1},8,["meta-title","nav","toc","meta-desc"])}var q=o(17536);const I={name:"DocMarkdownPage",setup(){return{metaTitle:"Capacitor 构建命令",metaDesc:"使用 Capacitor 开发或构建混合移动应用程序时的 Quasar CLI 命令列表。",nav:[{name:" Capacitor API",category:"开发 Capacitor 应用程序",path:"/quasar-cli/developing-capacitor-apps/capacitor-api",dir:"left"},{name:"故障排除和提示",category:"开发 Capacitor 应用程序",path:"/quasar-cli/developing-capacitor-apps/troubleshooting-and-tips",dir:"right"}],toc:[{id:"开发",title:"开发"},{id:"为生产而建",title:"为生产而建"}],copyHeading:q.Et}}};var w=o(74260);const C=(0,w.Z)(I,[["render",v]]),G=C}}]);