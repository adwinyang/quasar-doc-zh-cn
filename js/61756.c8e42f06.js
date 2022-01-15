"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[61756],{61756:(n,e,s)=>{s.r(e),s.d(e,{default:()=>X});var o=s(83673);const t=(0,o._)("p",null,[(0,o.Uk)("Allowing a Quasar App to communicate with the various parts of the BEX is essential. Quasar closes this gap using a "),(0,o._)("code",{class:"doc-token"},"bridge"),(0,o.Uk)(".")],-1),a=(0,o._)("p",null,"There are 4 areas in a BEX which will need a communication layer:",-1),i=(0,o._)("ol",null,[(0,o._)("li",null,"The Quasar App itself - this is true for all types of BEX i.e Popup, Options Page, Dev Tools or Web Page"),(0,o._)("li",null,"Background Script"),(0,o._)("li",null,"Content Script"),(0,o._)("li",null,"The web page that the BEX is running on")],-1),c=(0,o._)("p",null,"There is a fundamental rule to understand with the communication bridge in Quasar.",-1),r=(0,o._)("p",null,[(0,o._)("strong",null,"Not all BEX types have a content script"),(0,o.Uk)(" - Only BEX which run in the context of a web page will have a content script. This is how browser extensions in general work. This means if you’re adding a listener for an event on a content script and trying to trigger it from a Quasar BEX running as Dev Tools, Options Page or Popup - "),(0,o._)("strong",null,"it won’t work"),(0,o.Uk)(".")],-1),l=(0,o._)("p",null,"If you want to allow your Dev Tools, Popup or Options Page BEX to communicate with a web page, you will need to use the background script as a proxy. You would do this by:",-1),p=(0,o._)("ol",null,[(0,o._)("li",null,"Adding a listener on the background script which in turn emits another event."),(0,o._)("li",null,"Add a listener to your Quasar App running in the Web Page context which listens for the event the background script is raising"),(0,o._)("li",null,"Emitting the event to your background script from your Dev Tools, Popup or Options Page.")],-1),u=(0,o._)("p",null,"Once you get your head around this concept, there are no limits to how the BEX can communicate with each part.",-1),d=(0,o._)("p",null,"The bridge is a promise based event system which is shared between all parts of the BEX and as such allows you to listen for events in your Quasar App, emit them from other parts or vice versa. This is what gives Quasar BEX mode it’s power.",-1),k=(0,o._)("p",null,[(0,o.Uk)("To access the bridge from within your Quasar App you can use "),(0,o._)("code",{class:"doc-token"},"$q.bex"),(0,o.Uk)(". In other areas, the bridge is made available via the "),(0,o._)("code",{class:"doc-token"},"bridge"),(0,o.Uk)(" parameter in the respective hook files.")],-1),_=(0,o._)("p",null,"Let’s see how it works.",-1),h=(0,o._)("pre",{class:"doc-code language-js"},[(0,o._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,o.Uk)("bridge"),(0,o._)("span",{class:"token punctuation"},"."),(0,o._)("span",{class:"token function"},"send"),(0,o._)("span",{class:"token punctuation"},"("),(0,o._)("span",{class:"token string"},"'some.event'"),(0,o._)("span",{class:"token punctuation"},","),(0,o.Uk)(),(0,o._)("span",{class:"token punctuation"},"{"),(0,o.Uk)(),(0,o._)("span",{class:"token literal-property property"},"someKey"),(0,o._)("span",{class:"token operator"},":"),(0,o.Uk)(),(0,o._)("span",{class:"token string"},"'aValue'"),(0,o.Uk)(),(0,o._)("span",{class:"token punctuation"},"}"),(0,o._)("span",{class:"token punctuation"},")"),(0,o._)("span",{class:"token punctuation"},"."),(0,o._)("span",{class:"token function"},"then"),(0,o._)("span",{class:"token punctuation"},"("),(0,o._)("span",{class:"token parameter"},"response"),(0,o.Uk)(),(0,o._)("span",{class:"token operator"},"=>"),(0,o.Uk)(),(0,o._)("span",{class:"token punctuation"},"{"),(0,o.Uk)("\n  console"),(0,o._)("span",{class:"token punctuation"},"."),(0,o._)("span",{class:"token function"},"log"),(0,o._)("span",{class:"token punctuation"},"("),(0,o._)("span",{class:"token string"},"'Some response from the other side'"),(0,o._)("span",{class:"token punctuation"},")"),(0,o.Uk)("\n"),(0,o._)("span",{class:"token punctuation"},"}"),(0,o._)("span",{class:"token punctuation"},")"),(0,o.Uk)("\n")])],-1),g=(0,o._)("pre",{class:"doc-code language-js"},[(0,o._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,o.Uk)("bridge"),(0,o._)("span",{class:"token punctuation"},"."),(0,o._)("span",{class:"token function"},"on"),(0,o._)("span",{class:"token punctuation"},"("),(0,o._)("span",{class:"token string"},"'some.event'"),(0,o._)("span",{class:"token punctuation"},","),(0,o.Uk)(),(0,o._)("span",{class:"token parameter"},"event"),(0,o.Uk)(),(0,o._)("span",{class:"token operator"},"=>"),(0,o.Uk)(),(0,o._)("span",{class:"token punctuation"},"{"),(0,o.Uk)("\n  console"),(0,o._)("span",{class:"token punctuation"},"."),(0,o._)("span",{class:"token function"},"log"),(0,o._)("span",{class:"token punctuation"},"("),(0,o._)("span",{class:"token string"},"'Event Receieved, responding ...'"),(0,o._)("span",{class:"token punctuation"},")"),(0,o.Uk)("\n  bridge"),(0,o._)("span",{class:"token punctuation"},"."),(0,o._)("span",{class:"token function"},"send"),(0,o._)("span",{class:"token punctuation"},"("),(0,o.Uk)("event"),(0,o._)("span",{class:"token punctuation"},"."),(0,o.Uk)("eventResponseKey"),(0,o._)("span",{class:"token punctuation"},")"),(0,o.Uk)("\n"),(0,o._)("span",{class:"token punctuation"},"}"),(0,o._)("span",{class:"token punctuation"},")"),(0,o.Uk)("\n")])],-1),m=(0,o._)("pre",{class:"doc-code language-js"},[(0,o._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-js"},[(0,o.Uk)("bridge"),(0,o._)("span",{class:"token punctuation"},"."),(0,o._)("span",{class:"token function"},"off"),(0,o._)("span",{class:"token punctuation"},"("),(0,o._)("span",{class:"token string"},"'some.event'"),(0,o._)("span",{class:"token punctuation"},","),(0,o.Uk)(),(0,o._)("span",{class:"token keyword"},"this"),(0,o._)("span",{class:"token punctuation"},"."),(0,o.Uk)("someFunction"),(0,o._)("span",{class:"token punctuation"},")"),(0,o.Uk)("\n")])],-1),w=(0,o._)("p",null,[(0,o.Uk)("Wait, what’s "),(0,o._)("code",{class:"doc-token"},"bridge.send(event.eventResponseKey)"),(0,o.Uk)("?")],-1),v=(0,o._)("p",null,[(0,o.Uk)("The Quasar bridge does some work behind the scenes to convert the normal event based communication into promises and as such, in order for the promise to resolve, we need to send a "),(0,o._)("em",null,"new"),(0,o.Uk)(" event which is captured and promisified.")],-1),f=(0,o._)("div",{class:"doc-note doc-note--warning"},[(0,o._)("p",{class:"doc-note__title"},"WARNING"),(0,o._)("p",null,[(0,o.Uk)("If you omit "),(0,o._)("code",{class:"doc-token"},"bridge.send(event.eventResponseKey)"),(0,o.Uk)(" the promise on "),(0,o._)("code",{class:"doc-token"},".send()"),(0,o.Uk)(" will not resolve.")])],-1),b=(0,o._)("div",{class:"doc-note doc-note--tip"},[(0,o._)("p",{class:"doc-note__title"},"TIP"),(0,o._)("p",null,"The bridge also does some work to split large data which is too big to be transmitted in one go due to the browser extension 60mb data transfer limit. In order for this to happen, the payload must be an array.")],-1);function y(n,e,s,y,U,T){const E=(0,o.up)("doc-page");return(0,o.wg)(),(0,o.j4)(E,{"meta-title":y.metaTitle,title:"BEX Communication","meta-desc":y.metaDesc},{default:(0,o.w5)((()=>[t,a,i,(0,o._)("h2",{id:"communication-rules",class:"doc-heading doc-h2",onClick:e[0]||(e[0]=n=>y.copyHeading("communication-rules"))},"Communication Rules"),c,r,l,p,u,(0,o._)("h2",{id:"the-bridge",class:"doc-heading doc-h2",onClick:e[1]||(e[1]=n=>y.copyHeading("the-bridge"))},"The Bridge"),d,k,_,(0,o._)("h3",{id:"trigger-an-event-and-wait-for-the-response",class:"doc-heading doc-h3",onClick:e[2]||(e[2]=n=>y.copyHeading("trigger-an-event-and-wait-for-the-response"))},"Trigger an event and wait for the response"),h,(0,o._)("h3",{id:"listen-for-an-event-and-sending-a-response",class:"doc-heading doc-h3",onClick:e[3]||(e[3]=n=>y.copyHeading("listen-for-an-event-and-sending-a-response"))},"Listen for an event and sending a response"),g,(0,o._)("h3",{id:"clean-up-your-listeners",class:"doc-heading doc-h3",onClick:e[4]||(e[4]=n=>y.copyHeading("clean-up-your-listeners"))},"Clean up your listeners"),m,w,v,f,b])),_:1},8,["meta-title","meta-desc"])}var U=s(17536);const T={name:"DocMarkdownPage",setup(){return{metaTitle:"BEX Communication",metaDesc:"How to communicate between different parts of your Browser Extension (BEX) in Quasar.",copyHeading:U.Et}}};var E=s(74260);const B=(0,E.Z)(T,[["render",y]]),X=B}}]);