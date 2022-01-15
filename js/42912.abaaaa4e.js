"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[42912],{42912:(e,o,l)=>{l.r(o),l.d(o,{default:()=>Ee});var t=l(83673);const n=(0,t._)("p",null,"如果你在构建Electron应用程序时没有保持警惕，你可能会将你的应用程序的用户置于切实的数字危险之中。像XSS(跨站脚本)和远程代码执行这样的东西，实际上可以使攻击者深入访问你的应用程序中的数据–甚至可能是底层操作系统。",-1),s=(0,t._)("p",null,'特别是在 "公开 "工作时，即作为一个开源项目，你肯定要考虑用代码签名和完整性检查来加固你的应用程序。(见 "提示 "部分)',-1),c=(0,t._)("div",{class:"doc-note doc-note--danger"},[(0,t._)("p",{class:"doc-note__title"},"WARNING"),(0,t._)("p",null,"在任何情况下，你都不应该加载和执行远程代码。相反，只使用本地文件(与你的应用程序一起打包)，在你的主线程和/或预加载脚本中执行Node.js代码。")],-1),a=(0,t._)("p",null,"Electron团队自己提出了以下建议：",-1),i=(0,t.Uk)("确保你将"),d=(0,t._)("code",{class:"doc-token"},"webPreferences",-1),r=(0,t.Uk)(">"),u=(0,t._)("code",{class:"doc-token"},"contextIsolation",-1),p=(0,t.Uk)("设置为"),k=(0,t._)("code",{class:"doc-token"},"true",-1),_=(0,t.Uk)("。使用"),h=(0,t.Uk)("preload script"),g=(0,t.Uk)("，只注入必须的API到渲染器线程。"),m=(0,t.Uk)("如果你必须加载远程内容，并且无法绕过这一点，那么就使用"),U=(0,t.Uk)("只加载安全内容"),b=(0,t.Uk)("在所有加载远程内容的会话中使用"),w=(0,t._)("code",{class:"doc-token"},"ses.setPermissionRequestHandler()",-1),y=(0,t.Uk)("不要禁用"),f=(0,t._)("code",{class:"doc-token"},"webSecurity",-1),v=(0,t.Uk)("不要将"),W=(0,t._)("code",{class:"doc-token"},"allowRunningInsecureContent",-1),j=(0,t.Uk)("设置为"),C=(0,t._)("code",{class:"doc-token"},"true",-1),H=(0,t.Uk)("不要启用实验性功能"),E=(0,t.Uk)("不要使用"),q=(0,t._)("code",{class:"doc-token"},"enableBlinkFeatures",-1),I=(0,t._)("code",{class:"doc-token"},"<webview>",-1),P=(0,t.Uk)(": 不要使用"),T=(0,t._)("code",{class:"doc-token"},"allowpopups",-1),S=(0,t._)("code",{class:"doc-token"},"<webview>",-1),G=(0,t.Uk)(": 验证选项和参数"),x=(0,t.Uk)("禁用或限制导航"),A=(0,t.Uk)("禁止或限制创建新窗口"),R=(0,t._)("p",null,"除了上面的第3和第4项，如果检测到这些问题中的一个，Electron会在开发控制台中发出警告。",-1),z=(0,t._)("p",null,[(0,t.Uk)("你现在应该知道了，但是如果你没有使用"),(0,t._)("strong",null,"https"),(0,t.Uk)(" / "),(0,t._)("strong",null,"sftp"),(0,t.Uk)(" / "),(0,t._)("strong",null,"wss"),(0,t.Uk)("，那么应用程序与外界的通信就会非常容易被篡改。无论你在构建什么，请在任何地方使用安全协议。")],-1),D=(0,t._)("p",null,"拥有对文件系统的读写权限是渗透测试者的圣杯，如果你的应用程序能够实现这种类型的交互，请考虑使用IPC和多个窗口(具有不同的权限)，以尽量减少攻击面。",-1),M=(0,t._)("p",null,"如果你的应用程序的用户有秘密，如钱包地址、个人信息或其他类型的商业秘密，在休息时保持该信息的加密，只有在需要时才在内存中解密，并确保在你用完它时覆盖/销毁内存中的对象。但无论你如何处理，都要遵循这四条规则。",-1),N=(0,t._)("p",null,"1.使用强加密(即抗碰撞，而不是md5)。 2.不要发明一种新的加密类型 3.明确地遵循实施说明 4.考虑到用户体验",-1),F=(0,t._)("p",null,"你可能不想让那些穿着连帽衫的流氓在你的应用程序的控制台中执行这样的东西：",-1),L=(0,t._)("pre",{class:"doc-code language-js"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,t.Uk)("window"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("location"),(0,t._)("span",{class:"token operator"},"="),(0,t._)("span",{class:"token string"},"'https://evilsite.com/looks-just-like-your-app'"),(0,t.Uk)("\n")])],-1),O=(0,t._)("p",null,[(0,t.Uk)("The key-combination "),(0,t._)("kbd",null,"CTRL"),(0,t.Uk)("+"),(0,t._)("kbd",null,"SHIFT"),(0,t.Uk)("+"),(0,t._)("kbd",null,"I"),(0,t.Uk)(" (or "),(0,t._)("kbd",null,"ALT"),(0,t.Uk)("+"),(0,t._)("kbd",null,"CMD"),(0,t.Uk)("+"),(0,t._)("kbd",null,"I"),(0,t.Uk)(" on Mac) will open the dev tools and enable inspection of the application. It will even enable some degree of modification. Prevent the simple "),(0,t._)("code",{class:"doc-token"},"evil maid"),(0,t.Uk)(" attack by catching these keypresses and "),(0,t._)("code",{class:"doc-token"},"return false"),(0,t.Uk)(".")],-1),Q=(0,t.Uk)("When you have built your binary blobs and want to publish them e.g. on GitHub, use "),B=(0,t._)("code",{class:"doc-token"},"shasum",-1),J=(0,t.Uk)(" and post these results somewhere prominent (like on the GitHub release page for your project) and potentially on a public blockchain, such as "),K=(0,t.Uk)("Steem"),X=(0,t.Uk)("."),Y=(0,t._)("pre",{class:"doc-code language-bash"},[(0,t._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,t.Uk)("$ shasum -a "),(0,t._)("span",{class:"token number"},"256"),(0,t.Uk)(" myApp-v1.0.0_darwin-x64.dmg\n40ed03e0fb3c422e554c7e75d41ba71405a4a49d560b1bf92a00ea6f5cbd8daa myApp-v1.0.0_darwin-x64.dmg\n")])],-1),Z=(0,t._)("p",null,"虽然不是分享你的应用程序的硬性要求，但签署代码是一种最佳做法–而且MacOS和Windows商店都要求这样做。在这个[Electron官方教程]中阅读更多关于它的内容(https://electronjs.org/docs/tutorial/code-signing)。",-1),$=(0,t.Uk)("Snyk.io"),V=(0,t.Uk)("是一个服务、CLI甚至GitHub集成机器人，它通过比较你的package.json中的依赖关系和它的受损模块列表来跟踪节点模块的漏洞。在许多情况下，他们的服务可以推荐最低更新版本，甚至提供他们自己已经打过补丁的模块。他们还进行研究和漏洞披露。如果你正在使用压缩文件(zip、tar等)，可以查看他们的"),ee=(0,t.Uk)("文章"),oe=(0,t.Uk)("和"),le=(0,t.Uk)("受影响软件列表"),te=(0,t.Uk)("。"),ne=(0,t._)("p",null,"为每个平台目标使用一个专门的物理桌面机器。如果你必须让这个设备保持在线，确保操作系统一直在更新，允许从互联网/蓝牙(尤其是shell/ssh)的零入站连接，并不断进行病毒和 rootkit 检查。",-1),se=(0,t._)("p",null,"只允许合并有GPG签名的提交，并要求至少有两个团队成员(没有做PR的人)审查和批准该提交。",-1),ce=(0,t._)("p",null,"重新考虑你的node软件包管理系统。",-1),ae=(0,t.Uk)("使用一个私有的npm注册表(如"),ie=(0,t.Uk)("JFrog"),de=(0,t.Uk)(") 。"),re=(0,t._)("li",null,"将你的包修正为已知的特定版本",-1),ue=(0,t._)("li",null,"使用 pnpm",-1),pe=(0,t._)("li",null,"审核每一个模块和它的依赖关系",-1),ke=(0,t.Uk)("某个聪明人可能已经黑掉了你的项目(或一个底层库)。如果你用这个应用程序赚钱，可以考虑获得一个"),_e=(0,t.Uk)("Hacker One"),he=(0,t.Uk)("账户，并不断进行赏金奖励。至少你能说服黑客遵守道德，不要把漏洞卖给你的竞争对手。"),ge=(0,t.Uk)("你可能会感到不知所措，因为Electron的可怕之处带来了许多你从未想过的头痛问题。如果是这种情况，请考虑"),me=(0,t.Uk)("联系"),Ue=(0,t.Uk)("并获得专家的支持，由给你带来 Quasar 框架的经验丰富的开发团队对你的应用程序进行审查、审计和加固。"),be={class:"doc-note"},we=(0,t.Uk)("本页部分内容取自官方的"),ye=(0,t.Uk)("Electron安全指南"),fe=(0,t.Uk)("。");function ve(e,o,l,ve,We,je){const Ce=(0,t.up)("doc-link"),He=(0,t.up)("q-separator"),Ee=(0,t.up)("doc-page");return(0,t.wg)(),(0,t.j4)(Ee,{"meta-title":ve.metaTitle,title:"对 Electron 安全的担忧",nav:ve.nav,toc:ve.toc,"meta-desc":ve.metaDesc},{default:(0,t.w5)((()=>[n,s,c,(0,t._)("h2",{id:"检查表：安全建议",class:"doc-heading doc-h2",onClick:o[0]||(o[0]=e=>ve.copyHeading("检查表：安全建议"))},"检查表：安全建议"),a,(0,t._)("ol",null,[(0,t._)("li",null,[i,d,r,u,p,k,_,(0,t.Wm)(Ce,{to:"/quasar-cli/developing-electron-apps/electron-preload-script"},{default:(0,t.w5)((()=>[h])),_:1}),g]),(0,t._)("li",null,[m,(0,t.Wm)(Ce,{to:"https://electronjs.org/docs/tutorial/security#1-only-load-secure-content"},{default:(0,t.w5)((()=>[U])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(Ce,{to:"https://electronjs.org/docs/tutorial/security#4-handle-session-permission-requests-from-remote-content"},{default:(0,t.w5)((()=>[b,w])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(Ce,{to:"https://electronjs.org/docs/tutorial/security#5-do-not-disable-websecurity"},{default:(0,t.w5)((()=>[y,f])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(Ce,{to:"https://electronjs.org/docs/tutorial/security#7-do-not-set-allowrunninginsecurecontent-to-true"},{default:(0,t.w5)((()=>[v,W,j,C])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(Ce,{to:"https://electronjs.org/docs/tutorial/security#8-do-not-enable-experimental-features"},{default:(0,t.w5)((()=>[H])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(Ce,{to:"https://electronjs.org/docs/tutorial/security#9-do-not-use-enableblinkfeatures"},{default:(0,t.w5)((()=>[E,q])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(Ce,{to:"https://electronjs.org/docs/tutorial/security#10-do-not-use-allowpopups"},{default:(0,t.w5)((()=>[I,P,T])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(Ce,{to:"https://electronjs.org/docs/tutorial/security#11-verify-webview-options-before-creation"},{default:(0,t.w5)((()=>[S,G])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(Ce,{to:"https://electronjs.org/docs/tutorial/security#12-disable-or-limit-navigation"},{default:(0,t.w5)((()=>[x])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(Ce,{to:"https://electronjs.org/docs/tutorial/security#13-disable-or-limit-creation-of-new-windows"},{default:(0,t.w5)((()=>[A])),_:1})])]),R,(0,t._)("h2",{id:"技巧和窍门",class:"doc-heading doc-h2",onClick:o[1]||(o[1]=e=>ve.copyHeading("技巧和窍门"))},"技巧和窍门"),(0,t._)("h4",{id:"通讯协议",class:"doc-heading doc-h4",onClick:o[2]||(o[2]=e=>ve.copyHeading("通讯协议"))},"通讯协议"),z,(0,t._)("h4",{id:"文件系统访问",class:"doc-heading doc-h4",onClick:o[3]||(o[3]=e=>ve.copyHeading("文件系统访问"))},"文件系统访问"),D,(0,t._)("h4",{id:"加密",class:"doc-heading doc-h4",onClick:o[4]||(o[4]=e=>ve.copyHeading("加密"))},"加密"),M,N,(0,t._)("h4",{id:"在生产中禁用开发者工具",class:"doc-heading doc-h4",onClick:o[5]||(o[5]=e=>ve.copyHeading("在生产中禁用开发者工具"))},"在生产中禁用开发者工具"),F,L,O,(0,t._)("h4",{id:"publish-checksums",class:"doc-heading doc-h4",onClick:o[6]||(o[6]=e=>ve.copyHeading("publish-checksums"))},"Publish checksums"),(0,t._)("p",null,[Q,B,J,(0,t.Wm)(Ce,{to:"https://steemworld.org/@quasarframework"},{default:(0,t.w5)((()=>[K])),_:1}),X]),Y,(0,t._)("h4",{id:"签署构建",class:"doc-heading doc-h4",onClick:o[7]||(o[7]=e=>ve.copyHeading("签署构建"))},"签署构建"),Z,(0,t._)("h4",{id:"使用-snyk",class:"doc-heading doc-h4",onClick:o[8]||(o[8]=e=>ve.copyHeading("使用-snyk"))},"使用 SNYK"),(0,t._)("p",null,[(0,t.Wm)(Ce,{to:"https://snyk.io"},{default:(0,t.w5)((()=>[$])),_:1}),V,(0,t.Wm)(Ce,{to:"https://snyk.io/research/zip-slip-vulnerability"},{default:(0,t.w5)((()=>[ee])),_:1}),oe,(0,t.Wm)(Ce,{to:"https://github.com/snyk/zip-slip-vulnerability"},{default:(0,t.w5)((()=>[le])),_:1}),te]),(0,t._)("h4",{id:"对于那些真正的偏执狂",class:"doc-heading doc-h4",onClick:o[9]||(o[9]=e=>ve.copyHeading("对于那些真正的偏执狂"))},"对于那些真正的偏执狂"),ne,se,ce,(0,t._)("ul",null,[(0,t._)("li",null,[ae,(0,t.Wm)(Ce,{to:"https://jfrog.com/"},{default:(0,t.w5)((()=>[ie])),_:1}),de]),re,ue,pe]),(0,t._)("h4",{id:"付出被黑的代价",class:"doc-heading doc-h4",onClick:o[10]||(o[10]=e=>ve.copyHeading("付出被黑的代价"))},"付出被黑的代价"),(0,t._)("p",null,[ke,(0,t.Wm)(Ce,{to:"https://hackerone.com"},{default:(0,t.w5)((()=>[_e])),_:1}),he]),(0,t._)("h4",{id:"获得帮助",class:"doc-heading doc-h4",onClick:o[11]||(o[11]=e=>ve.copyHeading("获得帮助"))},"获得帮助"),(0,t._)("p",null,[ge,(0,t.Wm)(Ce,{to:"mailto:razvan.stoenescu@gmail.com"},{default:(0,t.w5)((()=>[me])),_:1}),Ue]),(0,t.Wm)(He,{class:"q-mt-xl"}),(0,t._)("blockquote",be,[(0,t._)("p",null,[we,(0,t.Wm)(Ce,{to:"https://electronjs.org/docs/tutorial/security"},{default:(0,t.w5)((()=>[ye])),_:1}),fe])])])),_:1},8,["meta-title","nav","toc","meta-desc"])}var We=l(17536);const je={name:"DocMarkdownPage",setup(){return{metaTitle:"对 Electron 安全的担忧",metaDesc:"关于 Quasar 桌面应用程序的安全性，你应该知道的事情。",nav:[{name:"带 Typescript 的 Electron",category:"开发 Electron 应用程序",path:"/quasar-cli/developing-electron-apps/electron-with-typescript",dir:"left"},{name:"故障排除和提示",category:"开发 Electron 应用程序",path:"/quasar-cli/developing-electron-apps/troubleshooting-and-tips",dir:"right"}],toc:[{id:"检查表：安全建议",title:"检查表：安全建议"},{id:"技巧和窍门",title:"技巧和窍门"}],copyHeading:We.Et}}};var Ce=l(74260);const He=(0,Ce.Z)(je,[["render",ve]]),Ee=He}}]);