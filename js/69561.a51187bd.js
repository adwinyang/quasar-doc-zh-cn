"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[69561],{69561:(e,o,l)=>{l.r(o),l.d(o,{default:()=>Ae});var n=l(83673);const a=(0,n._)("p",null,"所以，你已经完成了你的移动应用程序的工作。现在是时候部署它了。让我们来学习一下。",-1),d=(0,n._)("p",null,"要为Android生成一个发布版本，我们可以使用以下 Quasar CLI 命令。",-1),c=(0,n._)("pre",{class:"doc-code language-bash"},[(0,n._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,n.Uk)("$ quasar build -m cordova -T android\n"),(0,n._)("span",{class:"token comment"},"# or the short form:"),(0,n.Uk)("\n$ quasar build -m android\n")])],-1),s=(0,n._)("p",null,[(0,n.Uk)("这将根据你的"),(0,n._)("code",{class:"doc-token"},"/src-cordova/config.xml"),(0,n.Uk)("中的设置生成一个发布版构建。")],-1),i=(0,n._)("p",null,'接下来，我们可以在"/src-cordova/platforms/android/app/build/outputs/apk/release “或同等路径(写在终端的输出中)找到我们的无签名APK文件。文件名通常以”-release-unsigned.apk "结束。现在，我们需要对未签名的APK进行签名，并对其运行一个对齐工具，以优化它并为应用商店做准备。如果你已经有一个签名密钥，请跳过这些步骤，用它代替。',-1),t=(0,n._)("p",null,"让我们使用JDK附带的keytool命令生成我们的私钥。如果没有找到这个工具，请参考安装指南。",-1),p=(0,n._)("pre",{class:"doc-code language-bash"},[(0,n._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,n.Uk)("$ keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize "),(0,n._)("span",{class:"token number"},"2048"),(0,n.Uk)(" -validity "),(0,n._)("span",{class:"token number"},"20000"),(0,n.Uk)("\n")])],-1),r=(0,n._)("p",null,"首先，你会被提示为钥匙库创建一个密码。然后，回答好工具的其他问题，当它全部完成后，你应该在当前目录下创建一个名为my-release-key.keystore的文件。",-1),u=(0,n._)("div",{class:"doc-note doc-note--danger"},[(0,n._)("p",{class:"doc-note__title"},"WARNING"),(0,n._)("p",null,"请确保将此文件保存在安全的地方，如果你丢失了它，你将无法提交你的应用程序的更新。")],-1),_=(0,n._)("p",null,"要签署未签名的APK，请运行JDK中包含的jarsigner工具。",-1),k=(0,n._)("pre",{class:"doc-code language-bash"},[(0,n._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,n.Uk)("$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore "),(0,n._)("span",{class:"token operator"},"<"),(0,n.Uk)("path-to-unsigned-apk-file"),(0,n._)("span",{class:"token operator"},">"),(0,n.Uk)(" alias_name\n")])],-1),g=(0,n._)("p",null,[(0,n.Uk)("这就把apk签在了原地。最后，我们需要运行zip对齐工具来优化APK。zipalign工具可以在"),(0,n._)("code",{class:"doc-token"},"/path/to/Android/sdk/build-tools/VERSION/zipalign"),(0,n.Uk)("中找到。例如，在安装了Android Studio的OS X上，zipalign在"),(0,n._)("code",{class:"doc-token"},"~/Library/Android/sdk/build-tools/VERSION/zipalign"),(0,n.Uk)("中。")],-1),h=(0,n._)("pre",{class:"doc-code language-bash"},[(0,n._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,n.Uk)("$ zipalign -v "),(0,n._)("span",{class:"token number"},"4"),(0,n.Uk)(),(0,n._)("span",{class:"token operator"},"<"),(0,n.Uk)("path-to-same-apk-file"),(0,n._)("span",{class:"token operator"},">"),(0,n.Uk)(" HelloWorld.apk\n")])],-1),m=(0,n._)("p",null,"现在我们有了最终的发布二进制文件，名为HelloWorld.apk，我们可以在Google Play Store上发布，让全世界的人都能享受到这一服务",-1),y=(0,n._)("p",null,"(还有一些其他的方法来签署APKs。更多信息请参考官方Android应用签名文档)。",-1),U=(0,n._)("p",null,"现在我们已经为Google Play Store准备好了我们的发布APK，我们可以创建一个Play Store列表并上传我们的APK。",-1),b=(0,n.Uk)("要开始，你需要访问"),A=(0,n.Uk)("Google Play Store开发者控制台"),v=(0,n.Uk)(" 并创建一个新的开发者账户。不幸的是，这并不是免费的。然而，与苹果的99美元相比，费用只有25美元。"),C=(0,n._)("p",null,"一旦你有了开发者账户，你就可以继续点击 “在Google Play上发布Android应用程序”。",-1),P=(0,n._)("p",null,"然后，你可以继续点击按钮，编辑商店列表(我们稍后将上传APK)。你要填写该应用程序的描述。",-1),S=(0,n._)("p",null,"当你准备好后，上传发布构建的APK，并发布列表。耐心点，你的辛勤工作应该是在野外进行的!",-1),f=(0,n._)("p",null,"当你开发你的应用程序时，你会希望定期更新它。",-1),D=(0,n._)("p",null,[(0,n.Uk)("为了让Google Play商店接受更新的APK，你需要提高应用程序的版本(从"),(0,n._)("code",{class:"doc-token"},"/package.json"),(0,n.Uk)("或从"),(0,n._)("code",{class:"doc-token"},"/quasar.conf.js > cordova > version"),(0,n.Uk)("，然后重新构建应用程序进行发布。")],-1),H=(0,n.Uk)("首先，你需要注册"),T=(0,n.Uk)("苹果开发者计划"),I=(0,n.Uk)(" 。和Google一样，如果你有一个苹果的个人账户，你可以为你的应用程序创建一个额外的账户。"),x=(0,n._)("p",null,"在你收到你的开发者身份后，在你的Mac上打开Xcode并进入首选项>账户。通过点击左下角的 “+” 按钮将您的账户添加到Xcode中，并按照说明操作。",-1),X=(0,n._)("p",null,"现在您已经将Xcode与您的开发者账户连接起来了，进入Preferences > Accounts，在左侧选择您的Apple Id，然后点击上图中的 View Details 按钮。",-1),w=(0,n._)("p",null,"点击iOS分布选项旁边的创建按钮。",-1),G=(0,n._)("p",null,"你可以从官方文档中了解更多关于维护你的签名身份和证书的信息。",-1),K=(0,n._)("p",null,"接下来，通过苹果开发者会员中心，我们将设置应用程序ID标识符的详细信息。标识符用于允许一个应用程序访问某些应用程序服务，例如Apple Pay。你可以用你的苹果ID和密码登录到苹果开发者会员中心。",-1),q=(0,n._)("p",null,'一旦你登录，你应该选择证书、标识符和配置文件选项。同时选择iOS应用程序下的识别器选项。然后选择 "+"按钮，以添加一个新的iOS应用程序ID。',-1),E=(0,n._)("p",null,"然后你必须设置你的应用程序的名称，使用Explicit App ID选项，并将Bundle ID设置为Cordova config.xml标签中的ID值。",-1),O=(0,n._)("p",null,"此外，你还得选择任何需要启用的服务。例如，如果你在你的应用程序中使用Apple Pay或Wallet，你需要选择这些选项。",-1),j=(0,n.Uk)("你可以从"),R=(0,n.Uk)("官方文档"),W=(0,n.Uk)(" 中了解更多关于注册应用标识符的信息。"),$=(0,n._)("p",null,'苹果使用 iTunes Connect 来管理应用程序的提交。登录后，你应该选择 "我的应用程序 "按钮，并在下一个屏幕上选择 “+” 按钮，就在iTunes Connect My Apps 标题的下方。',-1),z=(0,n._)("p",null,"这将在一个下拉菜单中显示三个选项，你应该选择新的应用程序。之后会出现弹出窗口，你必须选择应用程序的名称、平台、主要语言、捆绑ID和SKU。",-1),M=(0,n._)("p",null,"一旦你完成了，点击创建按钮，你会看到一个屏幕，你必须设置一些基本的选项，如隐私政策URL，类别和子类别。",-1),L=(0,n._)("p",null,"现在，在我们填写列表中的所有内容之前，我们将建立我们的应用程序，并通过Xcode上传它。然后你再回来完成列表。",-1),N=(0,n.Uk)("你可以从"),B=(0,n.Uk)("官方文档"),V=(0,n.Uk)(" 中了解更多关于在 iTunes Connect 中管理你的应用。"),J=(0,n._)("pre",{class:"doc-code language-bash"},[(0,n._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,n.Uk)("$ quasar build -m cordova -T ios\n"),(0,n._)("span",{class:"token comment"},"# or the short form:"),(0,n.Uk)("\n$ quasar build -m ios\n\n"),(0,n._)("span",{class:"token comment"},"# passing extra parameters and/or options to"),(0,n.Uk)("\n"),(0,n._)("span",{class:"token comment"},'# underlying "cordova" executable:'),(0,n.Uk)("\n$ quasar build -m ios -- some params --and options --here\n")])],-1),Q=(0,n._)("p",null,[(0,n.Uk)("如果一切顺利，你会在控制台中看到 "),(0,n._)("code",{class:"doc-token"},"BUILD SUCCEEDED"),(0,n.Uk)(" 输出。")],-1),Z=(0,n._)("p",null,[(0,n.Uk)("现在，在Xcode中打开"),(0,n._)("code",{class:"doc-token"},"/src-cordova/platforms/ios/<name>.xcodeproj"),(0,n.Uk)("文件。如果下一步不成功，你可能需要改用"),(0,n._)("code",{class:"doc-token"},"<name>.xcworkspace"),(0,n.Uk)("。")],-1),F=(0,n._)("p",null,"一旦Xcode打开了这个项目，你应该在总视图中看到关于你的应用程序的细节。",-1),Y=(0,n._)("p",null,"你只需检查捆绑标识符的设置是否正确，使其与你先前在应用程序ID中指定的值相同。另外，确保版本和构建号是正确的。团队选项应该被设置为你的苹果开发者账户。在部署目标下，你可以选择你的应用程序将支持哪些设备。",-1),ee=(0,n._)("p",null,"在Xcode中，选择产品>方案>编辑方案来打开方案编辑器。接下来，从左侧的列表中选择存档。确保Build配置被设置为Release。",-1),oe=(0,n._)("p",null,"要创建一个存档，从项目编辑器的方案工具栏菜单中选择一个通用的iOS设备，或者你的设备，如果它连接到你的Mac(如果选择模拟器，你不能创建一个存档)。",-1),le=(0,n._)("p",null,[(0,n.Uk)("接下来，选择 “产品”>“归档”，“归档” 组织者就会出现并显示新的归档。(如果它反而产生错误，请回到上一步，打开"),(0,n._)("code",{class:"doc-token"},"<名称>.xcworkspace"),(0,n.Uk)("。)")],-1),ne=(0,n._)("p",null,'在这一点上，你可以点击 "上传至App Store… "按钮，如果一切顺利，你将有一个上传的应用程序，唯一要做的是完成iTunes连接列表并提交审查',-1),ae=(0,n._)("p",null,"这时，你应该在上传存档后不久收到iTunes Connect的电子邮件，并附上内容。",-1),de=(0,n._)("p",null,"现在你应该回到iTunes Connect门户网站并登录。接下来，点击左侧APP STORE信息下的定价和可用性。",-1),ce=(0,n._)("p",null,"你不必担心忘记插入关于你的应用程序的任何关键和必要的信息，因为如果你在所有细节填写之前试图提交应用程序进行审查，你会被通知缺少什么以及需要添加/修改什么。",-1),se=(0,n._)("p",null,"接下来，点击左侧的1.0准备提交按钮，如下图所示。当我们上传我们的档案时，iTunes Connect自动确定支持哪些设备尺寸。你需要为iTunes Connect检测到的各种应用尺寸至少上传一张屏幕截图图片。",-1),ie=(0,n._)("p",null,"接下来，你必须插入描述、关键词、支持网址和营销网址(可选)。",-1),te=(0,n._)("p",null,"在 “构建” 部分，你必须点击 “+” 按钮，并选择在前面步骤中通过Xcode上传的构建。",-1),pe=(0,n._)("p",null,"接下来，你必须上传图标，编辑评级，并设置一些额外的信息，如版权和你的信息。注意，你在这里上传的图标的尺寸必须是1024×1024像素。幸好，你可以使用第二个教程中的splash.png。如果你是唯一的开发者，那么应用程序评论信息中的数据应该是你自己的。最后，作为最后一个选项，你可以保留默认勾选的选项，一旦你的应用程序被批准，它就会自动发布到App Store。",-1),re=(0,n._)("p",null,"现在，我们已经完成了对应用程序列表的所有细节的添加，我们可以按 “保存”，然后提交审查。最后，你将会看到你必须填写的最后一张表格。",-1),ue=(0,n._)("p",null,"在你提交你的应用程序进行审查后，你会在我的应用程序中看到它的状态为等待审查，如下图所示。此外，在你提交你的应用程序进行审查后不久，你会从iTunes Connect收到一封确认电子邮件，说明你的应用程序正在审查中。",-1),_e=(0,n._)("p",null,"苹果为自己的人工审查过程感到自豪，这基本上意味着你的应用程序可能需要几天的时间来审查。你会被通知任何问题或更新你的应用程序的状态。",-1),ke=(0,n._)("p",null,[(0,n.Uk)("由于你可能想在某些时候更新你的应用程序，你首先需要提升应用程序的版本(从"),(0,n._)("code",{class:"doc-token"},"/package.json"),(0,n.Uk)("或从"),(0,n._)("code",{class:"doc-token"},"/quasar.conf.js > cordova > version"),(0,n.Uk)("，然后重建应用程序以便发布。最后，你必须从Xcode中打开它，重新按照同样的步骤进行。")],-1),ge=(0,n._)("p",null,"一旦你提交审查，你将不得不再次等待审查过程。",-1);function he(e,o,l,he,me,ye){const Ue=(0,n.up)("doc-link"),be=(0,n.up)("doc-page");return(0,n.wg)(),(0,n.j4)(be,{"meta-title":he.metaTitle,title:"发布到商店",nav:he.nav,toc:he.toc,"meta-desc":he.metaDesc},{default:(0,n.w5)((()=>[a,(0,n._)("h2",{id:"android-发布",class:"doc-heading doc-h2",onClick:o[0]||(o[0]=e=>he.copyHeading("android-发布"))},"Android 发布"),d,c,s,i,t,p,r,u,_,k,g,h,m,y,(0,n._)("h3",{id:"google-play-store",class:"doc-heading doc-h3",onClick:o[1]||(o[1]=e=>he.copyHeading("google-play-store"))},"Google Play Store"),U,(0,n._)("p",null,[b,(0,n.Wm)(Ue,{to:"https://play.google.com/apps/publish"},{default:(0,n.w5)((()=>[A])),_:1}),v]),C,P,S,(0,n._)("h3",{id:"更新你的应用程序",class:"doc-heading doc-h3",onClick:o[2]||(o[2]=e=>he.copyHeading("更新你的应用程序"))},"更新你的应用程序"),f,D,(0,n._)("h2",{id:"ios发布",class:"doc-heading doc-h2",onClick:o[3]||(o[3]=e=>he.copyHeading("ios发布"))},"iOS发布"),(0,n._)("p",null,[H,(0,n.Wm)(Ue,{to:"https://developer.apple.com/programs/"},{default:(0,n.w5)((()=>[T])),_:1}),I]),(0,n._)("h3",{id:"将xcode与您的开发者账户连接起来",class:"doc-heading doc-h3",onClick:o[4]||(o[4]=e=>he.copyHeading("将xcode与您的开发者账户连接起来"))},"将Xcode与您的开发者账户连接起来"),x,(0,n._)("h3",{id:"签名",class:"doc-heading doc-h3",onClick:o[5]||(o[5]=e=>he.copyHeading("签名"))},"签名"),X,w,G,(0,n._)("h3",{id:"设置应用程序标识符",class:"doc-heading doc-h3",onClick:o[6]||(o[6]=e=>he.copyHeading("设置应用程序标识符"))},"设置应用程序标识符"),K,q,E,O,(0,n._)("p",null,[j,(0,n.Wm)(Ue,{to:"https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingProfiles/MaintainingProfiles.html"},{default:(0,n.w5)((()=>[R])),_:1}),W]),(0,n._)("h3",{id:"创建应用程序列表",class:"doc-heading doc-h3",onClick:o[7]||(o[7]=e=>he.copyHeading("创建应用程序列表"))},"创建应用程序列表"),$,z,M,L,(0,n._)("p",null,[N,(0,n.Wm)(Ue,{to:"https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/UsingiTunesConnect/UsingiTunesConnect.html"},{default:(0,n.w5)((()=>[B])),_:1}),V]),(0,n._)("h3",{id:"构建用于生产的应用程序",class:"doc-heading doc-h3",onClick:o[8]||(o[8]=e=>he.copyHeading("构建用于生产的应用程序"))},"构建用于生产的应用程序"),J,Q,(0,n._)("h3",{id:"在-xcode-中打开该项目",class:"doc-heading doc-h3",onClick:o[9]||(o[9]=e=>he.copyHeading("在-xcode-中打开该项目"))},"在 Xcode 中打开该项目"),Z,F,Y,(0,n._)("h3",{id:"创建应用程序的存档",class:"doc-heading doc-h3",onClick:o[10]||(o[10]=e=>he.copyHeading("创建应用程序的存档"))},"创建应用程序的存档"),ee,oe,le,ne,ae,(0,n._)("h3",{id:"完成应用程序列表过程",class:"doc-heading doc-h3",onClick:o[11]||(o[11]=e=>he.copyHeading("完成应用程序列表过程"))},"完成应用程序列表过程"),de,ce,se,ie,te,pe,re,ue,_e,(0,n._)("h3",{id:"更新应用程序",class:"doc-heading doc-h3",onClick:o[12]||(o[12]=e=>he.copyHeading("更新应用程序"))},"更新应用程序"),ke,ge])),_:1},8,["meta-title","nav","toc","meta-desc"])}var me=l(17536);const ye={name:"DocMarkdownPage",setup(){return{metaTitle:"发布到商店",metaDesc:"如何用 Cordova 发布 Quasar 混合移动应用程序到Google Play Store和Apple App Store。",nav:[{name:"管理 Google Analytics",category:"开发 Cordova 应用程序",path:"/quasar-cli/developing-cordova-apps/managing-google-analytics",dir:"left"},{name:"简介",category:"开发 Electron 应用程序",path:"/quasar-cli/developing-electron-apps/introduction",dir:"right"}],toc:[{id:"android-发布",title:"Android 发布"},{id:"google-play-store",title:"Google Play Store",sub:!0},{id:"更新你的应用程序",title:"更新你的应用程序",sub:!0},{id:"ios发布",title:"iOS发布"},{id:"将xcode与您的开发者账户连接起来",title:"将Xcode与您的开发者账户连接起来",sub:!0},{id:"签名",title:"签名",sub:!0},{id:"设置应用程序标识符",title:"设置应用程序标识符",sub:!0},{id:"创建应用程序列表",title:"创建应用程序列表",sub:!0},{id:"构建用于生产的应用程序",title:"构建用于生产的应用程序",sub:!0},{id:"在-xcode-中打开该项目",title:"在 Xcode 中打开该项目",sub:!0},{id:"创建应用程序的存档",title:"创建应用程序的存档",sub:!0},{id:"完成应用程序列表过程",title:"完成应用程序列表过程",sub:!0},{id:"更新应用程序",title:"更新应用程序",sub:!0}],copyHeading:me.Et}}};var Ue=l(74260);const be=(0,Ue.Z)(ye,[["render",he]]),Ae=be}}]);