"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[85406],{85406:(n,a,o)=>{o.r(a),o.d(a,{default:()=>Sn});var e=o(83673);const s=(0,e._)("p",null,"在我们深入到实际的开发中去之前，我们需要做一些准备工作。",-1),l=(0,e._)("p",null,"第一步是确保你安装了 Cordova CLI 和必要的 SDK。",-1),c=(0,e._)("pre",{class:"doc-code language-bash"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,e.Uk)("$ "),(0,e._)("span",{class:"token function"},"npm"),(0,e.Uk)(),(0,e._)("span",{class:"token function"},"install"),(0,e.Uk)(" -g cordova\n")])],-1),d=(0,e._)("div",{class:"doc-note doc-note--warning"},[(0,e._)("p",{class:"doc-note__title"},"WARNING"),(0,e._)("p",null,[(0,e.Uk)("根据你的Android Studio的版本，你可能需要重新启用 “Android SDK工具”。你可以通过以下方式来完成这项工作 到 “工具 > SDK管理器 > SDK工具”，然后取消勾选 “隐藏过时的软件包”，并勾选 “Android SDK工具(过时)”。 "),(0,e._)("strong",null,"下面的说明是假设已经完成了这项工作。")])],-1),t=(0,e._)("div",{class:"doc-note doc-note--warning"},[(0,e._)("p",{class:"doc-note__title"},"WARNING"),(0,e._)("p",null,[(0,e.Uk)("环境变量"),(0,e._)("code",{class:"doc-token"},"ANDROID_HOME"),(0,e.Uk)("已被废弃，取而代之的是"),(0,e._)("code",{class:"doc-token"},"ANDROID_SDK_ROOT"),(0,e.Uk)("。根据你的Android Studio的版本，你可能需要一个或另一个。两者都设置也无妨。")])],-1),i=(0,e.Uk)("在这一步之后，你将需要在你的机器上安装Android平台的SDK。你可以"),r=(0,e.Uk)("在这里下载Android Studio"),_=(0,e.Uk)(" ，之后按照这些"),p=(0,e.Uk)("安装步骤"),u=(0,e.Uk)(" 进行。"),k=(0,e._)("li",null,[(0,e._)("p",null,[(0,e.Uk)("确保在你安装了Android SDK之后，你再接受其许可证。打开终端，进入安装SDK的文件夹，在tools/bin中，调用"),(0,e._)("code",{class:"doc-token"},"sdkmanager --licenses"),(0,e.Uk)("。")])],-1),g=(0,e._)("li",null,[(0,e._)("p",null,"在你的路径中添加Android安装。")],-1),v=(0,e._)("pre",{class:"doc-code language-bash"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,e._)("span",{class:"token builtin class-name"},"export"),(0,e.Uk)(),(0,e._)("span",{class:"token assign-left variable"},"ANDROID_HOME"),(0,e._)("span",{class:"token operator"},"="),(0,e._)("span",{class:"token string"},[(0,e.Uk)('"'),(0,e._)("span",{class:"token environment constant"},"$HOME"),(0,e.Uk)('/Android/Sdk"')]),(0,e.Uk)("\n"),(0,e._)("span",{class:"token builtin class-name"},"export"),(0,e.Uk)(),(0,e._)("span",{class:"token assign-left variable"},"ANDROID_SDK_ROOT"),(0,e._)("span",{class:"token operator"},"="),(0,e._)("span",{class:"token string"},[(0,e.Uk)('"'),(0,e._)("span",{class:"token environment constant"},"$HOME"),(0,e.Uk)('/Android/Sdk"')]),(0,e.Uk)("\n"),(0,e._)("span",{class:"token builtin class-name"},"export"),(0,e.Uk)(),(0,e._)("span",{class:"token assign-left variable"},[(0,e._)("span",{class:"token environment constant"},"PATH")]),(0,e._)("span",{class:"token operator"},"="),(0,e._)("span",{class:"token environment constant"},"$PATH"),(0,e._)("span",{class:"token builtin class-name"},":"),(0,e._)("span",{class:"token variable"},"$ANDROID_SDK_ROOT"),(0,e.Uk)("/tools"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)(),(0,e._)("span",{class:"token assign-left variable"},[(0,e._)("span",{class:"token environment constant"},"PATH")]),(0,e._)("span",{class:"token operator"},"="),(0,e._)("span",{class:"token environment constant"},"$PATH"),(0,e._)("span",{class:"token builtin class-name"},":"),(0,e._)("span",{class:"token variable"},"$ANDROID_SDK_ROOT"),(0,e.Uk)("/platform-tools\n")])],-1),m=(0,e._)("blockquote",{class:"doc-note"},[(0,e._)("p",null,[(0,e.Uk)("请注意，有时"),(0,e._)("code",{class:"doc-token"},"/Android/Sdk"),(0,e.Uk)("文件夹会被添加到你的用户文件夹内的"),(0,e._)("code",{class:"doc-token"},"/Library/"),(0,e.Uk)("中。检查你的用户文件夹，如果"),(0,e._)("code",{class:"doc-token"},"/Android/"),(0,e.Uk)("文件夹只在"),(0,e._)("code",{class:"doc-token"},"/Library/"),(0,e.Uk)("内，请执行："),(0,e._)("code",{class:"doc-token"},'export ANDROID_SDK_ROOT="$HOME/Library/Android/Sdk"'),(0,e.Uk)("或"),(0,e._)("code",{class:"doc-token"},'export ANDROID_HOME="$HOME/Library/Android/Sdk"'),(0,e.Uk)("代替。")])],-1),U=(0,e._)("p",null,"安装完Android Studio后，你还需要安装两个软件。",-1),h=(0,e.Uk)("来自Oracle的JDK。它可以在"),w=(0,e.Uk)("这里"),b=(0,e.Uk)(" 找到"),D=(0,e.Uk)("Gradle。它曾经可以从Android Studio中使用，但现在你必须单独安装它。cordova需要一个非常特殊的版本。你可以下载它"),S=(0,e.Uk)("这里"),O=(0,e.Uk)("然后，你将不得不设置环境变量。你将需要设置以下变量。Cordova已经有一个很好的指南。它可以找到"),A=(0,e.Uk)("这里"),f=(0,e.Uk)(" 。你需要。"),R=(0,e._)("ul",null,[(0,e._)("li",null,'添加ANDROID_SDK_ROOT。它可以安全地被设置为。"%USERPROFILE%AppData\\Local\\Android\\Sdk"'),(0,e._)("li",null,"在你的路径中添加两个ANDROID_SDK_ROOT目录：%ANDROID_SDK_ROOT%\\tools;%ANDROID_SDK_ROOT%\\platform-tools"),(0,e._)("li",null,"将 Gradle 添加到你的路径中。注意，gradle没有安装程序。你只要把二进制文件放在你想要的地方，然后把bin目录添加到你的路径中。")],-1),C=(0,e._)("p",null,"如果你有一个命令提示符或Powershell的init脚本，你可以试试这个：",-1),K=(0,e._)("pre",{class:"doc-code language-bash"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,e.Uk)("setx ANDROID_HOME "),(0,e._)("span",{class:"token string"},'"%USERPROFILE%\\AppData\\Local\\Android\\Sdk"'),(0,e.Uk)("\nsetx ANDROID_SDK_ROOT "),(0,e._)("span",{class:"token string"},'"%USERPROFILE%\\AppData\\Local\\Android\\Sdk"'),(0,e.Uk)("\nsetx path "),(0,e._)("span",{class:"token string"},[(0,e.Uk)('"%path%;%ANDROID_SDK_ROOT%'),(0,e._)("span",{class:"token entity",title:"\\t"},"\\t"),(0,e.Uk)("ools;%ANDROID_SDK_ROOT%\\platform-tools;<gradle_path>"),(0,e._)("span",{class:"token entity",title:"\\b"},"\\b"),(0,e.Uk)('in;"')]),(0,e.Uk)("\n")])],-1),I=(0,e._)("p",null,"工具安装完毕后，用正确的SDK设置Android Studio并创建一个虚拟机。",-1),W=(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("p",null,"启动Android studio(在你安装它的文件夹中检查可执行文件)。下一步是安装各个SDK。")]),(0,e._)("li",null,[(0,e._)("p",null,"打开窗口底部的 “配置” 菜单。"),(0,e._)("p",null,[(0,e._)("img",{src:"https://cdn.quasar.dev/img/Android-Studio-SDK-Menu.png",alt:"",title:"SDK管理器",class:"doc-img"})])]),(0,e._)("li",null,[(0,e._)("p",null,"选择所需的SDK。根据2019年12月，Cordova需要android-28(Android 9.0 - Pie)，所以一定要包括它。点击 “应用” 来安装SDK。"),(0,e._)("p",null,[(0,e._)("img",{src:"https://cdn.quasar.dev/img/Android-Studio-SDK-selection.png",alt:"",title:"SDK选择",class:"doc-img"})])])],-1),q=(0,e.Uk)("你将需要一个安装有"),H=(0,e.Uk)("Xcode"),x=(0,e.Uk)("的macOS。安装完毕后，打开Xcode以获得许可证提示。接受许可，然后你可以关闭它。"),y=(0,e._)("p",null,[(0,e.Uk)("为了开发/构建一个移动应用程序，我们需要添加 Cordova 模式到我们的 Quasar 项目。这样做的目的是，它使用Cordova CLI在"),(0,e._)("code",{class:"doc-token"},"/src-cordova"),(0,e.Uk)("文件夹中生成一个 Cordova 项目。"),(0,e._)("code",{class:"doc-token"},"/src-cordova/www"),(0,e.Uk)("文件夹将在你每次构建时被覆盖。")],-1),N=(0,e._)("pre",{class:"doc-code language-bash"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,e.Uk)("$ quasar mode "),(0,e._)("span",{class:"token function"},"add"),(0,e.Uk)(" cordova\n")])],-1),E=(0,e._)("p",null,"要切换到cordova项目，请输入。",-1),T=(0,e._)("pre",{class:"doc-code language-bash"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,e.Uk)("$ "),(0,e._)("span",{class:"token builtin class-name"},"cd"),(0,e.Uk)(" src-cordova\n")])],-1),$=(0,e._)("p",null,"目标平台由 Quasar CLI 按需安装。然而，如果你想手动添加一个平台，请输入。",-1),L=(0,e._)("pre",{class:"doc-code language-bash"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,e.Uk)("$ cordova platform "),(0,e._)("span",{class:"token function"},"add"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"["),(0,e.Uk)("android"),(0,e._)("span",{class:"token operator"},"|"),(0,e.Uk)("ios"),(0,e._)("span",{class:"token punctuation"},"]"),(0,e.Uk)("\n")])],-1),P=(0,e._)("p",null,"要验证一切是否正常，请输入。",-1),M=(0,e._)("pre",{class:"doc-code language-bash"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},"$ cordova requirements\n")],-1),G={class:"doc-note"},Q=(0,e.Uk)("在一些较新的基于Debian的操作系统上，当运行"),V=(0,e._)("code",{class:"doc-token"},"cordova requirements",-1),j=(0,e.Uk)("时，你可能会面临一个非常持久的问题。请参阅"),F=(0,e.Uk)('"安装后未找到Android SDK"'),X=(0,e.Uk)(" 部分寻求帮助。"),z=(0,e.Uk)("强烈建议切换到WKWebView(但也是可选的！)，因为UIWebView在iOS 12.0中已经被废弃了，这在 Cordova 的博客文章中有所描述。"),J=(0,e.Uk)("https://cordova.apache.org/news/2018/08/01/future-cordova-ios-webview.html"),Z=(0,e.Uk)(" 。"),B=(0,e._)("p",null,[(0,e._)("strong",null,"不过，如果你想取代默认的webview，请明智地选择。每个人都有自己的注意事项。"),(0,e.Uk)(" 请确保你访问上面的链接。")],-1),Y=(0,e._)("ol",null,[(0,e._)("li",null,"安装 Ionic Webview 插件")],-1),nn=(0,e._)("pre",{class:"doc-code language-bash"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,e._)("span",{class:"token comment"},"# from /src-cordova"),(0,e.Uk)("\n$ cordova plugin "),(0,e._)("span",{class:"token function"},"add"),(0,e.Uk)(" cordova-plugin-ionic-webview\n")])],-1),an=(0,e._)("ol",{start:"2"},[(0,e._)("li",null,"在 Config.xml 中添加 ScrollEnabled 首选项。")],-1),on=(0,e._)("pre",{class:"doc-code language-xml"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-xml"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("platform")]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"name"),(0,e._)("span",{class:"token attr-value"},[(0,e._)("span",{class:"token punctuation attr-equals"},"="),(0,e._)("span",{class:"token punctuation"},'"'),(0,e.Uk)("ios"),(0,e._)("span",{class:"token punctuation"},'"')]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("preference")]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"name"),(0,e._)("span",{class:"token attr-value"},[(0,e._)("span",{class:"token punctuation attr-equals"},"="),(0,e._)("span",{class:"token punctuation"},'"'),(0,e.Uk)("ScrollEnabled"),(0,e._)("span",{class:"token punctuation"},'"')]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"value"),(0,e._)("span",{class:"token attr-value"},[(0,e._)("span",{class:"token punctuation attr-equals"},"="),(0,e._)("span",{class:"token punctuation"},'"'),(0,e.Uk)("true"),(0,e._)("span",{class:"token punctuation"},'"')]),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"/>")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("platform")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n")])],-1),en=(0,e._)("ol",{start:"3"},[(0,e._)("li",null,"有关 WkWebViewPlugin 的注意事项，请参考 Ionic 文档。")],-1),sn=(0,e.Uk)("https://beta.ionicframework.com/docs/building/webview"),ln=(0,e.Uk)("https://github.com/ionic-team/cordova-plugin-ionic-webview"),cn=(0,e._)("ol",null,[(0,e._)("li",null,"安装 Cordova WkWebviewEngine 插件")],-1),dn=(0,e._)("pre",{class:"doc-code language-bash"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,e._)("span",{class:"token comment"},"# from /src-cordova"),(0,e.Uk)("\n$ cordova plugin "),(0,e._)("span",{class:"token function"},"add"),(0,e.Uk)(" cordova-plugin-wkwebview-engine\n")])],-1),tn={start:"2"},rn=(0,e.Uk)("有关注意事项和更多信息，请访问。"),_n=(0,e.Uk)("https://github.com/apache/cordova-plugin-wkwebview-engine"),pn=(0,e._)("p",null,"如果你想直接进入并开始开发，你可以跳过第2和第3步命令，发出下面的一个命令。如果你有一个移动/平板设备连接到你的机器上，你也可以在上面运行开发应用程序，而不是在模拟器上。",-1),un=(0,e._)("pre",{class:"doc-code language-bash"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,e.Uk)("$ quasar dev -m cordova -T "),(0,e._)("span",{class:"token punctuation"},"["),(0,e.Uk)("android"),(0,e._)("span",{class:"token operator"},"|"),(0,e.Uk)("ios"),(0,e._)("span",{class:"token punctuation"},"]"),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token comment"},"# 将额外的参数和/或选项传递给"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token comment"},'# 底层 "cordova" 可执行文件:'),(0,e.Uk)("\n$ quasar dev -m ios -- some params --and options --here\n"),(0,e._)("span",{class:"token comment"},"# 在 Windows 的 Powershell 中使用:"),(0,e.Uk)("\n$ quasar dev -m ios "),(0,e._)("span",{class:"token string"},"'--'"),(0,e.Uk)(" some params --and options --here\n")])],-1),kn=(0,e._)("p",null,"如查缺少，这将自动添加 Cordova 模式和项目。",-1),gn=(0,e._)("p",null,"然而，如果你希望打开IDE (Android Studio / Xcode)，并从那里手动选择模拟器(或同时选择多个模拟器！)，在它/他们身上运行开发应用程序。",-1),vn=(0,e._)("pre",{class:"doc-code language-bash"},[(0,e._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,e.Uk)("$ quasar dev -m "),(0,e._)("span",{class:"token punctuation"},"["),(0,e.Uk)("ios"),(0,e._)("span",{class:"token operator"},"|"),(0,e.Uk)("android"),(0,e._)("span",{class:"token punctuation"},"]"),(0,e.Uk)(" --ide\n")])],-1),mn=(0,e._)("div",{class:"doc-note doc-note--warning"},[(0,e._)("p",{class:"doc-note__title"},"WARNING"),(0,e._)("p",null,[(0,e.Uk)("在Android Studio中，你会看到一条信息，建议升级 Gradle 版本。"),(0,e._)("strong",null,"不要升级 Gradle"),(0,e.Uk)("，因为这将破坏 Cordova 项目。任何其他要求的升级也是如此。")]),(0,e._)("p",null,[(0,e._)("img",{src:"https://cdn.quasar.dev/img/gradle-upgrade-notice.png",alt:"Gradle升级",class:"q-my-md fit rounded-borders",style:{"max-width":"350px"}}),(0,e.Uk)("。")]),(0,e._)("p",null,"如果你遇到任何IDE错误，那么请点击 文件>无效缓存 (File > Invalidate caches) 并重新启动。"),(0,e._)("img",{src:"https://cdn.quasar.dev/img/gradle-invalidate-cache.png",alt:"Gradle upgrade",class:"q-mt-md fit rounded-borders",style:{"max-width":"350px"}})],-1);function Un(n,a,o,Un,hn,wn){const bn=(0,e.up)("doc-link"),Dn=(0,e.up)("doc-page");return(0,e.wg)(),(0,e.j4)(Dn,{"meta-title":Un.metaTitle,title:"为 Cordova 应用程序做准备",nav:Un.nav,toc:Un.toc,"meta-desc":Un.metaDesc},{default:(0,e.w5)((()=>[s,(0,e._)("h2",{id:"1-安装",class:"doc-heading doc-h2",onClick:a[0]||(a[0]=n=>Un.copyHeading("1-安装"))},"1. 安装"),l,c,d,t,(0,e._)("h3",{id:"安卓设置",class:"doc-heading doc-h3",onClick:a[1]||(a[1]=n=>Un.copyHeading("安卓设置"))},"安卓设置"),(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("p",null,[i,(0,e.Wm)(bn,{to:"https://developer.android.com/studio/index.html"},{default:(0,e.w5)((()=>[r])),_:1}),_,(0,e.Wm)(bn,{to:"https://developer.android.com/studio/install.html"},{default:(0,e.w5)((()=>[p])),_:1}),u])]),k,g]),(0,e._)("h4",{id:"unix-macos-linux-",class:"doc-heading doc-h4",onClick:a[2]||(a[2]=n=>Un.copyHeading("unix-macos-linux-"))},"Unix (macOS, linux)"),v,m,(0,e._)("h4",{id:"windows",class:"doc-heading doc-h4",onClick:a[3]||(a[3]=n=>Un.copyHeading("windows"))},"Windows"),U,(0,e._)("ul",null,[(0,e._)("li",null,[h,(0,e.Wm)(bn,{to:"https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html"},{default:(0,e.w5)((()=>[w])),_:1}),b]),(0,e._)("li",null,[D,(0,e.Wm)(bn,{to:"https://downloads.gradle-dn.com/distributions/gradle-4.10.3-all.zip"},{default:(0,e.w5)((()=>[S])),_:1})])]),(0,e._)("p",null,[O,(0,e.Wm)(bn,{to:"https://cordova.apache.org/docs/en/latest/guide/platforms/android/#setting-environment-variables"},{default:(0,e.w5)((()=>[A])),_:1}),f]),R,C,K,I,W,(0,e._)("h3",{id:"ios设置",class:"doc-heading doc-h3",onClick:a[4]||(a[4]=n=>Un.copyHeading("ios设置"))},"iOS设置"),(0,e._)("p",null,[q,(0,e.Wm)(bn,{to:"https://developer.apple.com/xcode/"},{default:(0,e.w5)((()=>[H])),_:1}),x]),(0,e._)("h2",{id:"2-添加cordova-quasar模式",class:"doc-heading doc-h2",onClick:a[5]||(a[5]=n=>Un.copyHeading("2-添加cordova-quasar模式"))},"2. 添加Cordova Quasar模式"),y,N,(0,e._)("h2",{id:"3-添加平台",class:"doc-heading doc-h2",onClick:a[6]||(a[6]=n=>Un.copyHeading("3-添加平台"))},"3. 添加平台"),E,T,$,L,P,M,(0,e._)("blockquote",G,[(0,e._)("p",null,[Q,V,j,(0,e.Wm)(bn,{to:"/quasar-cli/developing-cordova-apps/troubleshooting-and-tips#Android-SDK-not-found-after-installation-the-SDK"},{default:(0,e.w5)((()=>[F])),_:1}),X])]),(0,e._)("h3",{id:"切换到-ios-wkwebview",class:"doc-heading doc-h3",onClick:a[7]||(a[7]=n=>Un.copyHeading("切换到-ios-wkwebview"))},"切换到 iOS WkWebView"),(0,e._)("p",null,[z,(0,e.Wm)(bn,{to:"https://cordova.apache.org/news/2018/08/01/future-cordova-ios-webview.html"},{default:(0,e.w5)((()=>[J])),_:1}),Z]),B,(0,e._)("h4",{id:"选项1：ionic-webview-插件",class:"doc-heading doc-h4",onClick:a[8]||(a[8]=n=>Un.copyHeading("选项1：ionic-webview-插件"))},"选项1：Ionic Webview 插件"),Y,nn,an,on,en,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e.Wm)(bn,{to:"https://beta.ionicframework.com/docs/building/webview"},{default:(0,e.w5)((()=>[sn])),_:1})]),(0,e._)("li",null,[(0,e.Wm)(bn,{to:"https://github.com/ionic-team/cordova-plugin-ionic-webview"},{default:(0,e.w5)((()=>[ln])),_:1})])]),(0,e._)("h4",{id:"选项2：cordova-wkwebviewengine-插件",class:"doc-heading doc-h4",onClick:a[9]||(a[9]=n=>Un.copyHeading("选项2：cordova-wkwebviewengine-插件"))},"选项2：Cordova WkWebviewEngine 插件"),cn,dn,(0,e._)("ol",tn,[(0,e._)("li",null,[rn,(0,e.Wm)(bn,{to:"https://github.com/apache/cordova-plugin-wkwebview-engine"},{default:(0,e.w5)((()=>[_n])),_:1})])]),(0,e._)("h2",{id:"4-开始开发",class:"doc-heading doc-h2",onClick:a[10]||(a[10]=n=>Un.copyHeading("4-开始开发"))},"4. 开始开发"),pn,un,kn,gn,vn,mn])),_:1},8,["meta-title","nav","toc","meta-desc"])}var hn=o(17536);const wn={name:"DocMarkdownPage",setup(){return{metaTitle:"为 Cordova 应用程序做准备",metaDesc:"在用 Cordova 开发 Quasar 混合移动应用之前，你需要做什么。",nav:[{name:"简介",category:"开发 Cordova 应用程序",path:"/quasar-cli/developing-cordova-apps/introduction",dir:"left"},{name:"配置Cordova",category:"开发 Cordova 应用程序",path:"/quasar-cli/developing-cordova-apps/configuring-cordova",dir:"right"}],toc:[{id:"1-安装",title:"1. 安装"},{id:"安卓设置",title:"安卓设置",sub:!0},{id:"ios设置",title:"iOS设置",sub:!0},{id:"2-添加cordova-quasar模式",title:"2. 添加Cordova Quasar模式"},{id:"3-添加平台",title:"3. 添加平台"},{id:"切换到-ios-wkwebview",title:"切换到 iOS WkWebView",sub:!0},{id:"4-开始开发",title:"4. 开始开发"}],copyHeading:hn.Et}}};var bn=o(74260);const Dn=(0,bn.Z)(wn,[["render",Un]]),Sn=Dn}}]);