"use strict";(globalThis["webpackChunkquasar_dev"]=globalThis["webpackChunkquasar_dev"]||[]).push([[14004],{14004:(e,o,t)=>{t.r(o),t.d(o,{default:()=>we});var n=t(83673);const a=(0,n._)("p",null,"So, you’ve finished working on your Mobile App. Now it’s time to deploy it. Let’s learn how.",-1),i=(0,n._)("p",null,"To generate a release build for Android, we can use the following Quasar CLI command:",-1),l=(0,n._)("pre",{class:"doc-code language-bash"},[(0,n._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,n.Uk)("$ quasar build -m cordova -T android\n"),(0,n._)("span",{class:"token comment"},"# or the short form:"),(0,n.Uk)("\n$ quasar build -m android\n")])],-1),s=(0,n._)("p",null,[(0,n.Uk)("This will generate a release build based on the settings in your "),(0,n._)("code",{class:"doc-token"},"/src-cordova/config.xml"),(0,n.Uk)(".")],-1),r=(0,n._)("p",null,"Next, we can find our unsigned APK file in “/src-cordova/platforms/android/app/build/outputs/apk/release” or equivalent path (written in the output of terminal). Filename usually ends with “-release-unsigned.apk”. Now, we need to sign the unsigned APK and run an alignment utility on it to optimize it and prepare it for the app store. If you already have a signing key, skip these steps and use that one instead.",-1),d=(0,n._)("p",null,"Let’s generate our private key using the keytool command that comes with the JDK. If this tool isn’t found, refer to the installation guide:",-1),c=(0,n._)("pre",{class:"doc-code language-bash"},[(0,n._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,n.Uk)("$ keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize "),(0,n._)("span",{class:"token number"},"2048"),(0,n.Uk)(" -validity "),(0,n._)("span",{class:"token number"},"20000"),(0,n.Uk)("\n")])],-1),p=(0,n._)("p",null,"You’ll first be prompted to create a password for the keystore. Then, answer the rest of the nice tool’s questions and when it’s all done, you should have a file called my-release-key.keystore created in the current directory.",-1),u=(0,n._)("div",{class:"doc-note doc-note--danger"},[(0,n._)("p",{class:"doc-note__title"},"WARNING"),(0,n._)("p",null,"Make sure to save this file somewhere safe, if you lose it you won’t be able to submit updates to your app!")],-1),h=(0,n._)("p",null,"To sign the unsigned APK, run the jarsigner tool which is also included in the JDK:",-1),g=(0,n._)("pre",{class:"doc-code language-bash"},[(0,n._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,n.Uk)("$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore "),(0,n._)("span",{class:"token operator"},"<"),(0,n.Uk)("path-to-unsigned-apk-file"),(0,n._)("span",{class:"token operator"},">"),(0,n.Uk)(" alias_name\n")])],-1),y=(0,n._)("p",null,[(0,n.Uk)("This signs the apk in place. Finally, we need to run the zip align tool to optimize the APK. The zipalign tool can be found in "),(0,n._)("code",{class:"doc-token"},"/path/to/Android/sdk/build-tools/VERSION/zipalign"),(0,n.Uk)(". For example, on OS X with Android Studio installed, zipalign is in "),(0,n._)("code",{class:"doc-token"},"~/Library/Android/sdk/build-tools/VERSION/zipalign"),(0,n.Uk)(":")],-1),f=(0,n._)("pre",{class:"doc-code language-bash"},[(0,n._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,n.Uk)("$ zipalign -v "),(0,n._)("span",{class:"token number"},"4"),(0,n.Uk)(),(0,n._)("span",{class:"token operator"},"<"),(0,n.Uk)("path-to-same-apk-file"),(0,n._)("span",{class:"token operator"},">"),(0,n.Uk)(" HelloWorld.apk\n")])],-1),k=(0,n._)("p",null,"Now we have our final release binary called HelloWorld.apk and we can release this on the Google Play Store for all the world to enjoy!",-1),m=(0,n._)("p",null,"(There are a few other ways to sign APKs. Refer to the official Android App Signing documentation for more information.)",-1),_=(0,n._)("p",null,"Now that we have our release APK ready for the Google Play Store, we can create a Play Store listing and upload our APK.",-1),b=(0,n.Uk)("To start, you’ll need to visit the "),w=(0,n.Uk)("Google Play Store Developer Console"),v=(0,n.Uk)(" and create a new developer account. Unfortunately, this is not free. However, the cost is only $25 compared to Apple’s $99."),A=(0,n._)("p",null,"Once you have a developer account, you can go ahead and click “Publish an Android App on Google Play”.",-1),U=(0,n._)("p",null,"Then, you can go ahead and click the button to edit the store listing (We will upload an APK later). You’ll want to fill out the description for the app.",-1),C=(0,n._)("p",null,"When you are ready, upload the APK for the release build and publish the listing. Be patient and your hard work should be live in the wild!",-1),P=(0,n._)("p",null,"As you develop your app, you’ll want to update it periodically.",-1),S=(0,n._)("p",null,[(0,n.Uk)("In order for the Google Play Store to accept updated APKs, you’ll need to bump the app version (from "),(0,n._)("code",{class:"doc-token"},"/package.json"),(0,n.Uk)(" or from "),(0,n._)("code",{class:"doc-token"},"/quasar.conf.js > cordova > version"),(0,n.Uk)(", then rebuild the app for release.")],-1),T=(0,n.Uk)("First, you need to enroll in "),I=(0,n.Uk)("Apple Developer Program"),x=(0,n.Uk)(". As with Google, if you have a personal account with Apple, you can create an additional one for your applications."),D=(0,n._)("p",null,[(0,n.Uk)("After you receive your developer status, open Xcode on your Mac and go to Preferences > Accounts. Add your account to Xcode by clicking the "),(0,n._)("code",{class:"doc-token"},"+"),(0,n.Uk)(" button on the lower left-hand side and follow the instructions.")],-1),N=(0,n._)("p",null,"Now that you linked Xcode with your developer account, go to Preferences > Accounts, select your Apple Id on the left-hand side and then click the View Details button shown on the previous image.",-1),H=(0,n._)("p",null,"Click the Create button next to the iOS Distribution option.",-1),O=(0,n._)("p",null,"You can learn more about maintaining your signing identities and certificates from the official documentation.",-1),j=(0,n._)("p",null,"Next, through the Apple Developer Member Center we’ll set up the app ID identifier details. Identifiers are used to allow an app to have access to certain app services like for example Apple Pay. You can login to Apple Developer Member Center with your Apple ID and password.",-1),M=(0,n._)("p",null,[(0,n.Uk)("Once you’re logged in you should choose Certificates, Identifiers, and Profiles option. Also select the Identifiers option under the iOS Apps. Then select the "),(0,n._)("code",{class:"doc-token"},"+"),(0,n.Uk)(" button in order to add a new iOS App ID.")],-1),K=(0,n._)("p",null,"Then you’ll have to set the name of your app, use the Explicit App ID option and set the Bundle ID to the value of the id in your Cordova config.xml tag.",-1),R=(0,n._)("p",null,"Additionally, you’ll have to choose any of the services that need to be enabled. For example, if you use Apple Pay or Wallet in your app, you need to choose those option.",-1),z=(0,n.Uk)("You can learn more about registering app identifiers from the "),q=(0,n.Uk)("official documentation"),G=(0,n.Uk)("."),W=(0,n._)("p",null,[(0,n.Uk)("Apple uses iTunes Connect to manage app submissions. After your login, you should select the My Apps button, and on the next screen select the "),(0,n._)("code",{class:"doc-token"},"+"),(0,n.Uk)(" button, just below the iTunes Connect My Apps header.")],-1),X=(0,n._)("p",null,"This will show three options in a dropdown, and you should select the New App. After this the popup appears where you have to choose the name of the application, platform, primary language, bundle ID and SKU.",-1),E=(0,n._)("p",null,"Once you’re done, click on the Create button and you’ll be presented with a screen where you’ll have to set some basic options like Privacy Policy URL, category and sub category.",-1),Y=(0,n._)("p",null,"Now, before we fill out everything in the listing, we’ll build our app and get it uploaded with Xcode. Then you’ll come back to finish the listing.",-1),F=(0,n.Uk)("You can learn more about managing your app in iTunes Connect from the "),$=(0,n.Uk)("official documentation"),L=(0,n.Uk)("."),B=(0,n._)("pre",{class:"doc-code language-bash"},[(0,n._)("code",{class:"doc-code__inner doc-code__inner--prerendered language-bash"},[(0,n.Uk)("$ quasar build -m cordova -T ios\n"),(0,n._)("span",{class:"token comment"},"# or the short form:"),(0,n.Uk)("\n$ quasar build -m ios\n\n"),(0,n._)("span",{class:"token comment"},"# passing extra parameters and/or options to"),(0,n.Uk)("\n"),(0,n._)("span",{class:"token comment"},'# underlying "cordova" executable:'),(0,n.Uk)("\n$ quasar build -m ios -- some params --and options --here\n")])],-1),V=(0,n._)("p",null,[(0,n.Uk)("If everything went well you’ll see the "),(0,n._)("code",{class:"doc-token"},"BUILD SUCCEEDED"),(0,n.Uk)(" output in the console.")],-1),J=(0,n._)("p",null,[(0,n.Uk)("Now, open the "),(0,n._)("code",{class:"doc-token"},"/src-cordova/platforms/ios/<name>.xcodeproj"),(0,n.Uk)(" file in Xcode. You may need to instead use "),(0,n._)("code",{class:"doc-token"},"<name>.xcworkspace"),(0,n.Uk)(" if the next step doesn’t work.")],-1),Q=(0,n._)("p",null,"Once the Xcode opens up the project, you should see the details about your app in the general view.",-1),Z=(0,n._)("p",null,"You should just check that the bundle identifier is set up correctly, so that it’s the same as the value you specified earlier in the app ID. Also, make sure that the version and build numbers are correct. Team option should be set to your Apple developer account. Under the deployment target you can choose which devices your application will support.",-1),ee=(0,n._)("p",null,"In Xcode, select Product > Scheme > Edit Scheme to open the scheme editor. Next, select the Archive from the list on the left-hand side. Make sure that the Build configuration is set to Release.",-1),oe=(0,n._)("p",null,"To create an archive, choose a Generic iOS Device, or your device if it’s connected to your Mac (you can’t create an archive if simulator is selected), from the Scheme toolbar menu in the project editor.",-1),te=(0,n._)("p",null,[(0,n.Uk)("Next, select Product > Archive, and the Archive organizer appears and displays the new archive. (If it produces an error instead, go back to the last step and open "),(0,n._)("code",{class:"doc-token"},"<name>.xcworkspace"),(0,n.Uk)(".)")],-1),ne=(0,n._)("p",null,[(0,n.Uk)("At this point you can click the "),(0,n._)("code",{class:"doc-token"},"Upload to App Store..."),(0,n.Uk)(" button, and if everything goes fine you’ll have an uploaded app, and the only thing that’s left to do is to complete the iTunes Connect listing and submit it for review!")],-1),ae=(0,n._)("p",null,"At this point you should get an email from iTunes Connect shortly after you uploaded the archive with the content.",-1),ie=(0,n._)("p",null,"Now you should head back to the iTunes Connect portal and login. Next, click on the Pricing and Availability on the left-hand side under APP STORE INFORMATION.",-1),le=(0,n._)("p",null,"You don’t have to worry about forgetting to insert any crucial and required information about your application, since you’ll be notified about what’s missing and what needs to be added/changed if you try to submit the app for review before all details are filled in.",-1),se=(0,n._)("p",null,"Next, click on the 1.0 Prepare for Submission button on the left-hand side, as shown on the image below. When we uploaded our archive, iTunes Connect automatically determined which device sizes are supported. You’ll need to upload at least one screenshot image for each of the various app sizes that were detected by iTunes Connect.",-1),re=(0,n._)("p",null,"Next, you’ll have to insert Description, Keywords, Support URL and Marketing URL (optionally).",-1),de=(0,n._)("p",null,[(0,n.Uk)("In the Build section you have to click on the "),(0,n._)("code",{class:"doc-token"},"+"),(0,n.Uk)(" button and select the build that was uploaded through Xcode in the previous steps.")],-1),ce=(0,n._)("p",null,"Next, you’ll have to upload the icon, edit the rating, and set some additional info like copyright and your information. Note that the size of the icon that you’ll have to upload here will have to be 1024 by 1024 pixels. Thankfully, you can use the splash.png from the second tutorial. If you’re the sole developer then the data in the App Review Information should be your own. Finally, as the last option, you can leave the default checked option that once your app is approved that it is automatically released to the App Store.",-1),pe=(0,n._)("p",null,"Now that we’re finished with adding all of the details to the app listing, we can press Save and then Submit for Review. Finally, you’ll be presented with the last form that you’ll have to fill out.",-1),ue=(0,n._)("p",null,"After you submit your app for review you’ll see the status of it in the My Apps as Waiting for review, as shown on the image below. Also, shortly after you submit your app for review you’ll get a confirmation email from iTunes Connect that your app is in review.",-1),he=(0,n._)("p",null,"Apple prides itself with a manual review process, which basically means it can take several days for your app to be reviewed. You’ll be notified of any issues or updates to your app status.",-1),ge=(0,n._)("p",null,[(0,n.Uk)("Since you’ll probably want to update your app at some point you’ll first need to bump the app version (from "),(0,n._)("code",{class:"doc-token"},"/package.json"),(0,n.Uk)(" or from "),(0,n._)("code",{class:"doc-token"},"/quasar.conf.js > cordova > version"),(0,n.Uk)(", then rebuild the app for release. Finally, you’ll have to open it up from the Xcode and follow the same steps all over again.")],-1),ye=(0,n._)("p",null,"Once you submit for the review, you’ll have to wait for the review process again.",-1);function fe(e,o,t,fe,ke,me){const _e=(0,n.up)("doc-link"),be=(0,n.up)("doc-page");return(0,n.wg)(),(0,n.j4)(be,{"meta-title":fe.metaTitle,title:"Publishing to Store","meta-desc":fe.metaDesc},{default:(0,n.w5)((()=>[a,(0,n._)("h2",{id:"android-publishing",class:"doc-heading doc-h2",onClick:o[0]||(o[0]=e=>fe.copyHeading("android-publishing"))},"Android Publishing"),i,l,s,r,d,c,p,u,h,g,y,f,k,m,(0,n._)("h3",{id:"google-play-store",class:"doc-heading doc-h3",onClick:o[1]||(o[1]=e=>fe.copyHeading("google-play-store"))},"Google Play Store"),_,(0,n._)("p",null,[b,(0,n.Wm)(_e,{to:"https://play.google.com/apps/publish"},{default:(0,n.w5)((()=>[w])),_:1}),v]),A,U,C,(0,n._)("h3",{id:"updating-your-app",class:"doc-heading doc-h3",onClick:o[2]||(o[2]=e=>fe.copyHeading("updating-your-app"))},"Updating your App"),P,S,(0,n._)("h2",{id:"ios-publishing",class:"doc-heading doc-h2",onClick:o[3]||(o[3]=e=>fe.copyHeading("ios-publishing"))},"iOS Publishing"),(0,n._)("p",null,[T,(0,n.Wm)(_e,{to:"https://developer.apple.com/programs/"},{default:(0,n.w5)((()=>[I])),_:1}),x]),(0,n._)("h3",{id:"connecting-xcode-with-your-developer-account",class:"doc-heading doc-h3",onClick:o[4]||(o[4]=e=>fe.copyHeading("connecting-xcode-with-your-developer-account"))},"Connecting Xcode with your developer account"),D,(0,n._)("h3",{id:"signing",class:"doc-heading doc-h3",onClick:o[5]||(o[5]=e=>fe.copyHeading("signing"))},"Signing"),N,H,O,(0,n._)("h3",{id:"setting-up-the-app-identifier",class:"doc-heading doc-h3",onClick:o[6]||(o[6]=e=>fe.copyHeading("setting-up-the-app-identifier"))},"Setting up the app identifier"),j,M,K,R,(0,n._)("p",null,[z,(0,n.Wm)(_e,{to:"https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingProfiles/MaintainingProfiles.html"},{default:(0,n.w5)((()=>[q])),_:1}),G]),(0,n._)("h3",{id:"creating-the-app-listing",class:"doc-heading doc-h3",onClick:o[7]||(o[7]=e=>fe.copyHeading("creating-the-app-listing"))},"Creating the app listing"),W,X,E,Y,(0,n._)("p",null,[F,(0,n.Wm)(_e,{to:"https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/UsingiTunesConnect/UsingiTunesConnect.html"},{default:(0,n.w5)((()=>[$])),_:1}),L]),(0,n._)("h3",{id:"building-the-app-for-production",class:"doc-heading doc-h3",onClick:o[8]||(o[8]=e=>fe.copyHeading("building-the-app-for-production"))},"Building the app for production"),B,V,(0,n._)("h3",{id:"opening-the-project-in-xcode",class:"doc-heading doc-h3",onClick:o[9]||(o[9]=e=>fe.copyHeading("opening-the-project-in-xcode"))},"Opening the project in Xcode"),J,Q,Z,(0,n._)("h3",{id:"creating-an-archive-of-the-application",class:"doc-heading doc-h3",onClick:o[10]||(o[10]=e=>fe.copyHeading("creating-an-archive-of-the-application"))},"Creating an archive of the application"),ee,oe,te,ne,ae,(0,n._)("h3",{id:"finishing-the-app-list-process",class:"doc-heading doc-h3",onClick:o[11]||(o[11]=e=>fe.copyHeading("finishing-the-app-list-process"))},"Finishing the app list process"),ie,le,se,re,de,ce,pe,ue,he,(0,n._)("h3",{id:"updating-the-app",class:"doc-heading doc-h3",onClick:o[12]||(o[12]=e=>fe.copyHeading("updating-the-app"))},"Updating the app"),ge,ye])),_:1},8,["meta-title","meta-desc"])}var ke=t(17536);const me={name:"DocMarkdownPage",setup(){return{metaTitle:"Publishing to Store",metaDesc:"How to publish a Quasar hybrid mobile app with Cordova to Google Play Store and to Apple App Store.",copyHeading:ke.Et}}};var _e=t(74260);const be=(0,_e.Z)(me,[["render",fe]]),we=be}}]);