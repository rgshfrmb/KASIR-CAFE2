(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[83221],{799881:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(296882),o=n(641483);function a(e,t){if(t&&!(()=>{try{return window.localStorage.test=2,!1}catch(e){return!0}})()){const t=window.open(e,"_blank");return t&&(t.opener=null),t}{const t=(0,i.Z)(e);return setTimeout((()=>{(0,o.My)("setting_new_window_location")}),0),window.location.href=t,window}}},463080:(e,t,n)=>{n.d(t,{Z:()=>i});const i={GOOGLE_ADWORDS_ID:852082959,GOOGLE_ADWORDS_LABEL_PROPEL_QUALIFIED:"Mah3CPrv13YQj4KnlgM",GOOGLE_ADWORDS_LABEL_PROPEL_UNQUALIFIED:"_DJfCKzy13YQj4KnlgM",GOOGLE_ADWORDS_LABEL_BUSINESS_CREATE:"GGbCCM7p-nYQj4KnlgM",GOOGLE_ADWORDS_LABEL_BUSINESS_CONVERT:"SwBsCIz9k3cQj4KnlgM",GOOGLE_ADWORDS_LABEL_BUSINESS_ADVERTISER_INTENT:"kDf0COWL4okBEI-Cp5YD",DOUBLECLICK_TAG_ID:"8032161",DOUBLECLICK_EVENT_ID_PROPEL:"prope001",DOUBLECLICK_CATEGORY_ID_PROPEL_QUALIFIED:"pinte0",DOUBLECLICK_CATEGORY_ID_PROPEL_UNQUALIFIED:"pinte00",TRADEDESK_ADVERTISER_ID:"fc1uc9n",TRADEDESK_EVENT_ID_GENERAL_PAGEVIEW:"ogalyt3",TRADEDESK_CONVERSION_ID_PROPEL_QUALIFIED:"judrn76",TRADEDESK_CONVERSION_ID_PROPEL_UNQUALIFIED:"f0v4s5d",FACEBOOK_ADVERTISER_ID:"956400731086791",TWITTER_UNIVERSAL_TAG_ID:"nuzh8",TWITTER_CONVERSION_ID_PROPEL_QUALIFIED:"ny8zl",TWITTER_CONVERSION_ID_PROPEL_UNQUALIFIED:"nya0d",LINKEDIN_PARTNER_ID:"44352",LINKEDIN_CONVERSION_ID_PROPEL_QUALIFIED:"166217",LINKEDIN_CONVERSION_ID_PROPEL_UNQUALIFIED:"171754",LINKEDIN_CONVERSION_ID_SUBMISSION_EVENT:"529092",PINTEREST_TAG_ID:"2614461171935",SMB_PAID_PINTEREST_ID:"2613736141997"}},925311:(e,t,n)=>{function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:()=>a});class o{static reportGoogleConversion(e,t,n){void 0!==window.gtag_report_conversion?window.gtag_report_conversion(e,t,n):o.queuedGoogleConversions.push({id:e,label:t,url:n})}static reportFacebookConversion(e,t,n){void 0!==window.fbq?n?window.fbq("track",t,n):window.fbq("track",t):o.queuedFacebookConversions.push({id:e,event:t,data:n})}static reportCustomFacebookConversion(e,t,n){void 0!==window.fbq?n?window.fbq("trackCustom",t,n):window.fbq("trackCustom",t):o.queuedFacebookConversions.push({id:e,isCustomEvent:!0,event:t,data:n})}static reportPinterestConversion(e,t,n){void 0!==window.pintrk?n?window.pintrk("track",t,n):window.pintrk("track",t):o.queuedPinterestConversions.push({id:e,event:t,data:n})}static reportTwitterConversion(e,t){void 0!==window.twttr?t?window.twttr.conversion.trackPid(e,t):window.twttr.conversion.trackPid(e):o.queuedTwitterConversions.push({id:e,data:t})}static reportTheTradeDeskConversion(e,t){const n=document.createElement("img");n.setAttribute("height","1"),n.setAttribute("width","1"),n.style.borderStyle="none",n.style.position="absolute",n.setAttribute("src",`//insight.adsrvr.org/track/conv/?adv=${e}&ct=0:${t}&fmt=3`),document.body.insertBefore(n,document.body.lastChild)}static reportLinkedInConversion(e,t){const n=document.createElement("img");n.setAttribute("width","1"),n.setAttribute("height","1"),n.setAttribute("src",`https://dc.ads.linkedin.com/collect/?pid=${e}&conversionId=${t}&fmt=gif`),n.style.display="none",document.body.insertBefore(n,document.body.lastChild)}static reportDoubleClickConversion(e,t,n){const i=1e13*Math.random(),o=document.createElement("iframe");o.setAttribute("width","1"),o.setAttribute("height","1"),o.setAttribute("frameborder","0"),o.setAttribute("src",`https://${e}.fls.doubleclick.net/activityi;src=${e};\n    type=${t};cat=${n};dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=${i}?`),o.style.display="none",document.body.insertBefore(o,document.body.lastChild)}static insertGoogleAdWordsTag(e){const t=document.createElement("script");t.setAttribute("async",""),t.setAttribute("src",`https://www.googletagmanager.com/gtag/js?id=AW-${e}`),t.onload=()=>{window.dataLayer=window.dataLayer||[],window.gtag=function(e,t,n){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config","AW-"+e),window.gtag_report_conversion=function(e,t,n){return window.gtag("event","conversion",{send_to:"AW-"+e+"/"+t,event_callback:function(){void 0!==n&&window.location.assign(n)}}),!1};const t=o.queuedGoogleConversions;for(let n=0;n<t.length;n+=1){const i=t[n];i.id===e&&o.reportGoogleConversion(i.id,i.label,i.url)}},document.body.insertBefore(t,document.body.firstChild)}static insertFacebookPixelTag(e){var t,n,i,a,r,s;t=window,n=document,i="script",t.fbq||(a=t.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},t._fbq||(t._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],(r=n.createElement(i)).async=!0,r.src="//connect.facebook.net/en_US/fbevents.js",(s=n.getElementsByTagName(i)[0]).parentNode.insertBefore(r,s)),window.fbq("init",e),window.fbq("track","PageView");const c=o.queuedFacebookConversions;for(let d=0;d<c.length;d+=1){const t=c[d];t.id===e&&(t.isCustomEvent?o.reportCustomFacebookConversion(e,t.event,t.data):o.reportFacebookConversion(e,t.event,t.data))}}static insertTwitterUniversalTag(e){var t,n,i,o,a,r;t=window,n=document,i="script",t.twq||((o=t.twq=function(){o.exe?o.exe.apply(o,arguments):o.queue.push(arguments)}).version="1.1",o.queue=[],(a=n.createElement(i)).async=!0,a.src="//static.ads-twitter.com/uwt.js",(r=n.getElementsByTagName(i)[0]).parentNode.insertBefore(a,r)),window.twq("init",e),window.twq("track","PageView")}static insertLinkedInInsightTag(e){window._linkedin_data_partner_id=e;const t=document.createElement("script");t.setAttribute("src","//snap.licdn.com/li.lms-analytics/insight.min.js"),document.body.insertBefore(t,document.body.firstChild)}static insertPinterestTag(e){!function(e){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};const e=window.pintrk;e.queue=[],e.version="3.0";const t=document.createElement("script");t.async=!0,t.src="https://s.pinimg.com/ct/core.js";const n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}}(),window.pintrk("load",e),window.pintrk("page");const t=o.queuedPinterestConversions;for(let n=0;n<t.length;n+=1){const i=t[n];i.id===e&&o.reportPinterestConversion(e,i.event,i.data)}}}i(o,"queuedGoogleConversions",[]),i(o,"queuedFacebookConversions",[]),i(o,"queuedPinterestConversions",[]),i(o,"queuedTwitterConversions",[]);const a=o},382745:(e,t,n)=>{n.d(t,{wy:()=>O,Qx:()=>se,Fw:()=>K,ey:()=>V,bo:()=>W,AX:()=>l,Fy:()=>p,XE:()=>u,am:()=>r,pD:()=>h,OJ:()=>c,LO:()=>re,Gl:()=>H,WN:()=>z,h3:()=>J,PY:()=>E,Ni:()=>g,pV:()=>R,L6:()=>C,b0:()=>_,jC:()=>B,O7:()=>ee,LM:()=>x,OK:()=>A,mP:()=>f,C$:()=>b,J3:()=>N,Fr:()=>j,Xn:()=>v,l4:()=>D,b_:()=>Q,J:()=>s,dZ:()=>d,re:()=>y,RU:()=>te,Ui:()=>m,KY:()=>w,fY:()=>$,uM:()=>G,x7:()=>Z,s2:()=>F,HV:()=>M,cD:()=>U,Pu:()=>Y,En:()=>S,ej:()=>oe,gf:()=>L,mY:()=>ne,kY:()=>ae,cY:()=>X,vF:()=>T,$Y:()=>P,Zz:()=>I,$V:()=>k,j8:()=>q,YW:()=>ie});const i=new RegExp(/^\/(?!(?:pin|categories|report|search|password|terms|discover|help|email|topics|explore|pw|login|signup|about|business|source|ideas|today|tv))[\w\d\-]+\/(?!(?:following|followers|_tools|_created|_saved|tried))[\w\d\-]+(?=\/|$)/),o=["/BingSiteAuth.xml","/about","/add-account","/ads","/age_verification","/all","/apple-app-site-association","/apple-app-site-association.p7m","/bot.html","/browserbutton","/buy-it","/careers","/categories","/close-account","/content-claiming","/convert-business","/convert-personal","/create-business","/create-linked-business","/create-personal","/csrf_error","/ct.html","/deactivate-account","/developers","/discover","/edit","/email_verification_error","/engagement","/explore","/favicon.ico","/fb.html","/following","/google_gdn.html","/google_search.html","/googlef5dc42d6e03f6e61.html","/guidedsearch","/help","/holidays-celebrations","/homefeed","/idea-pin-builder","/idea-pin-invite","/ideas","/inbox","/invited","/jobs","/live-session","/login","/login_redirect","/logout","/manifest.json","/manifest.webapp","/me","/messages","/mobile","/notifications","/oauth","/oembed.json","/offline.html","/offsite","/opensearch.xml","/parent_contact_info","/pin-builder","/pin-editor","/pin_catalog","/pin_redirect","/pinterest-wellbeing","/pinterest-predicts","/pinterestlens","/pinterestlenstryon","/pinterestwellbeing","/policy","/product-catalogs","/recently-viewed","/report","/robots.txt","/safe-redirect","/search","/settings","/signup","/socialmanager","/story-pin-builder","/story-pin-invite","/story_feed","/story_pins","/sw-shell.html","/sw.html","/sw.js","/switch_account","/terms","/today","/topics","/transparent.html","/tv","/unauth-profile","/unlink","/upload-image","/upload-profile-image","/verified","/verify","/web-mentorship","/welcome","/windows-app-web-link","/your-shop"];var a=n(855168);const r=e=>i.test(e.pathname),s=(e,t)=>{const{pathname:n}=e;return r(e)&&n.match(t||"?")},c=e=>{const{pathname:t}=e;return!!(0,a.LX)(t,{path:"/:username/:boardId/:boardSectionId",exact:!0})&&!t.match(/^\/.+\/.+\/(_tools)/i)},d=(e,t)=>{const{pathname:n}=e;return c(e)&&n.match(t||"?")},u=e=>!!(0,a.LX)(e.pathname,{path:"/board/:id/edit",exact:!0}),p=e=>!!(0,a.LX)(e.pathname,{path:"/board/:id/edit/collaborators",exact:!0}),l=e=>!!(0,a.LX)(e.pathname,{path:"/board/:id/edit/add_collaborators",exact:!0}),h=e=>!!(0,a.LX)(e.pathname,{path:"/boardsection/:id/edit",exact:!0}),m=e=>!!(0,a.LX)(e.pathname,{path:"/pin/:id/comments",exact:!0}),w=e=>!!(0,a.LX)(e.pathname,{path:"/pin/:id/edit",exact:!0}),_=e=>!!(0,a.LX)(e.pathname,{path:"/conversation/:id",exact:!0}),g=e=>e.pathname.startsWith("/business/"),E=e=>e.pathname.startsWith("/business/invite/"),f=e=>!!(0,a.LX)(e.pathname,{path:"/pin/:id/visual-search/",exact:!0}),b=e=>"/"===e.pathname,v=e=>e.pathname.startsWith("/login"),I=e=>!!(0,a.LX)(e.pathname,{path:"/today",exact:!0}),y=e=>e.pathname.startsWith("/password/reset")||!!(0,a.LX)(e.pathname,{path:"/pw/:username",exact:!0}),L=e=>e.pathname.startsWith("/signup"),A=e=>e.pathname.startsWith("/email/subscription"),D=e=>e.pathname.startsWith("/notifications/"),C=e=>!!(0,a.LX)(e.pathname,{path:"/pin/:id",exact:!0}),O=e=>C(e)&&void 0===e.state,R=e=>e.pathname.startsWith("/pin_redirect"),S=e=>e.pathname.startsWith("/search"),N=e=>e.pathname.startsWith("/ideas"),k=e=>e.pathname.startsWith("/topics"),P=e=>e.pathname.startsWith("/today/article/")||e.pathname.startsWith("/today/best/")||e.pathname.startsWith("/today/trending/"),T=e=>e.pathname.startsWith("/today/popular/"),W=e=>I(e)||P(e)||T(e),x=e=>/^\/discover\/article\/\S+\/?/i.test(e.pathname),B=e=>e.pathname.startsWith("/pin/create/"),U=e=>!!(0,a.LX)(e.pathname,{path:"/:username/",exact:!0})&&!o.includes(e.pathname.replace(/\/$/,"")),q=e=>e.pathname.startsWith("/unauth-profile"),F=e=>!!e.pathname.match(/^\/tv\/.*/i)||!!e.pathname.match(/^\/live-session\/.*/i),G=e=>e.pathname.startsWith("/pin/"),j=e=>"#imgViewer"===e.hash,M=e=>e.pathname.startsWith("/places/recommender"),V=e=>new RegExp("invite_code").test(e.search),$=e=>!!(0,a.LX)(e.pathname,{path:"/pin/:id",exact:!1})&&(e.pathname.includes("/sent/")||e.pathname.includes("/feedback/")),K=e=>V(e)&&(($(e)?"pin":r(e)&&"board")||U(e)&&"profile")||null,Z=e=>e.pathname.includes("/repin/x"),X=e=>e.pathname.startsWith("/_/storyboard"),Q=e=>e.pathname.startsWith("/oauth"),Y=e=>e.pathname.includes("/scheduled-pin/"),H=e=>e.pathname.startsWith("/business/convert"),z=e=>e.pathname.startsWith("/business/create"),J=e=>e.pathname.startsWith("/business/hub"),ee=e=>e.pathname.startsWith("/pin-editor"),te=e=>e.pathname.startsWith("/pin-builder"),ne=e=>e.pathname.startsWith("/story-pin-builder")||e.pathname.startsWith("/idea-pin-builder"),ie=e=>e.pathname.startsWith("/advertiser/quick-promote"),oe=e=>e.pathname.startsWith("/settings"),ae=e=>e.pathname.startsWith("/story-pin-invite")||e.pathname.startsWith("/idea-pin-invite"),re=e=>void 0!==e.pathname&&e.pathname.startsWith("/business/business-access/")&&e.pathname.includes("/dashboard/"),se=e=>{var t;return(null===(t=e.match(/\amp(.*)/))||void 0===t?void 0:t[1])||""}},652382:(e,t,n)=>{n.d(t,{qn:()=>i,L_:()=>o,Nh:()=>a});const i=(e,t)=>{if("undefined"==typeof window)return t;try{return window.sessionStorage.getItem(e)}catch(n){return window.console.error("Cannot access sessionStorage."),t}},o=e=>{if("undefined"!=typeof window)try{window.sessionStorage.removeItem(e)}catch(t){window.console.error("Cannot access sessionStorage.")}},a=(e,t)=>{if("undefined"!=typeof window)try{window.sessionStorage.setItem(e,t)}catch(n){window.console.error("Cannot access sessionStorage.")}}},641483:(e,t,n)=>{n.d(t,{yl:()=>w,E8:()=>D,an:()=>I,qJ:()=>g,hD:()=>_,dy:()=>A,De:()=>y,NC:()=>v,LW:()=>L,My:()=>b,tj:()=>E,hL:()=>f});var i=n(85038),o=n(311866),a=n(221469),r=n(858875);const s="unauthHistories",c="trackHistoryClickInternalUrl";var d=n(652382),u=n(382745);const p=["board","pin","topic","clickthrough"];let l=5e3,h=[];let m;function w(e){h.length&&(o.ZP.create("UserRegisterTrackActionResource",{actions:h}).callUpdate({showError:!1,async:!e}),h=[],m=null)}function _(e){l=e}const g=e=>{!function(e){const t=(0,d.qn)(c);if((0,d.L_)(c),t)return;let n=(0,d.qn)(s);if(n=n?n.split(","):[],n.length){const t=`${e}.${n.reduce(((e,t)=>e+"-"+t))}`;h.push({name:t,aux_data:{}})}(0,d.L_)(s)}(e),h.length&&w(!0)};function E(e,t){let n="undefined"!=typeof window&&window.encodeURIComponent&&encodeURIComponent(e)||e;t||(t={}),-1!==n.indexOf("%")&&(t.invalid_action&&(t.invalid_action_original=t.invalid_action),t.invalid_action=n,n="track_register_action.web.invalid_action.with_percent"),h.push({name:n,aux_data:t}),m||(m=setTimeout((()=>w()),l)),function(e,t){if("undefined"!=typeof window)try{const n=new URL(window.location.href).searchParams.get("consoleTra");if(window.PINTEREST_DEV_LOG||n){const n=window.PINTEREST_DEV_REGEX||"";n&&!(e||"").match(n)||("object"==typeof t&&Object.keys(t).length?console.log(e+": %O",t):console.log(e))}}catch(n){}}(e,t)}function f(e,t){E(e,{tags:{...t}})}function b(e){E(e,{tags:{}})}function v(e,t=!1){if("undefined"==typeof window)return;let n=(0,d.qn)(s);n=n?n.split(","):[],n.push(e),(0,d.Nh)(s,n.join()),b(`lex.${e}`),t&&(0,d.Nh)(c,!0)}const I=()=>{const e=(0,a.mB)(window.location.search);if("31"===e.utm_source)return"email";if(e.utm_pai)return"paid";const t=i.U2(r.tg)||document.referrer;return t?t.includes("/t.co/")?"twitter":t.includes("cdn.ampproject.org")?"amp":t.includes("google.")?"google":t.includes("bing.")?"bing":t.includes("facebook.")?"facebook":"other":"direct"},y=e=>{e.action&&e.event?(e.type=e.type||"other",e.trigger=e.trigger||"other",e.referrer=I(),f("pinner_conversion",e)):f("pinner_conversion.missing_tags")},L=e=>{const t=e.page_location?(n=e.page_location,(0,u.L6)(n)?"pin":(0,u.am)(n)?"board":(0,u.Xn)(n)?"login":(0,u.C$)(n)?"home":(0,u.cD)(n)?"profile":(0,u.J3)(n)?"ideas":(0,u.$Y)(n)?"article":"other"):e.page||"other";var n;const i=e.item||"none",o=e.within||"none";f(`logged_out_product.interaction.${t}.${e.action}`,{item:i,within:o}),"visit"!==e.action&&f(`logged_out_product.interaction.all.${e.action}`,{item:i,within:o})},A=e=>{f(`pinner_conversion.autologin.${e.provider}.${e.event}`)},D=e=>p.includes(e)?p[p.indexOf(e)]:"other"},807668:(e,t,n)=>{n.d(t,{t:()=>l,N:()=>p});var i=n(667294),o=n(925311),a=n(463080),r=n(205794),s=n(311866),c=n(762803),d=n(785893);const{Provider:u,useHook:p}=(0,c.Z)("LinkedAccount");function l({children:e}){const[t,n]=(0,i.useState)(!1),[c,p]=(0,i.useState)([]),l=(0,i.useCallback)((({businessName:e,thirdPartyApps:t,thirdPartyMarketingTrackingEnabled:i,nextUrl:c})=>{n(!0);const d={business_name:e,third_party_apps:t};return s.ZP.create("BusinessOwnershipResource",d).callCreate({showError:!0}).then((()=>{i&&(o.Z.reportFacebookConversion(a.Z.FACEBOOK_ADVERTISER_ID,"CompleteRegistration",{content_name:"/business/convert"}),o.Z.reportPinterestConversion("track","lead",{lead_type:"Self-serve"}),o.Z.reportLinkedInConversion(a.Z.LINKEDIN_PARTNER_ID,a.Z.LINKEDIN_CONVERSION_ID_SUBMISSION_EVENT),o.Z.reportGoogleConversion(a.Z.GOOGLE_ADWORDS_ID,a.Z.GOOGLE_ADWORDS_LABEL_BUSINESS_CONVERT)),n(!1),(e=>{(0,r.Z)(e?`/?next=${encodeURIComponent(e)}`:"/")})(c)})).catch((e=>(n(!1),Promise.reject({error:e}))))}),[n]),h=(0,i.useMemo)((()=>({createLinkedBusinessAccount:l,linkedBusinessCreationLoading:t,userAccounts:c,userAccountsRetrieved:p})),[l,t,p,c]);return(0,d.jsx)(u,{value:h,children:e})}},258435:(e,t,n)=>{n.d(t,{c:()=>o,t:()=>a});var i=n(342347);function o({children:e}){const{height:t}=(0,i.J)();return e(t)}function a(){const{height:e}=(0,i.J)();return e}},342347:(e,t,n)=>{n.d(t,{Z:()=>h,J:()=>d});var i=n(667294),o=n(807668),a=n(762803),r=n(159617),s=n(785893);const{Provider:c,useHook:d}=(0,a.Z)("Header"),u={childList:!0,attributes:!0,subtree:!0},p={height:r.cI,isInBiznuxFullscreen:!1,repinPinId:null,repinStartAnimation:!1,showAccountMenuFlyout:!1};function l(e,t){switch(t.type){case"showAccountMenuFlyout":return{...e,showAccountMenuFlyout:!0};case"hideAccountMenuFlyout":return{...e,showAccountMenuFlyout:!1};case"showRepinAnimation":return{...e,repinStartAnimation:!0,repinPinId:t.payload};case"hideRepinAnimation":return{...e,repinStartAnimation:!1,repinPinId:null};case"updateHeight":return{...e,height:t.payload};case"updateIsInBiznuxFullscreen":return{...e,isInBiznuxFullscreen:t.payload};default:throw new Error("action type not supported")}}function h({children:e}){const t=(0,i.useRef)(null),[{height:n,isInBiznuxFullscreen:a,repinPinId:d,repinStartAnimation:h,showAccountMenuFlyout:m},w]=(0,i.useReducer)(l,p);(0,i.useEffect)((()=>{const e=document.getElementById(r.WZ),n=()=>{e&&w({type:"updateHeight",payload:e.clientHeight})};return e&&"undefined"!=typeof MutationObserver&&(t.current=new MutationObserver(n),t.current.observe(e,u)),()=>{var e;null===(e=t.current)||void 0===e||e.disconnect()}}));const _=(0,i.useMemo)((()=>({height:n,isInBiznuxFullscreen:a,repinPinId:d,repinStartAnimation:h,showAccountMenuFlyout:m,updateHeaderState:w})),[w,n,a,d,h,m]);return(0,s.jsx)(c,{value:_,children:(0,s.jsx)(o.t,{children:e})})}},159617:(e,t,n)=>{n.d(t,{hu:()=>i,cI:()=>o,L1:()=>a,WZ:()=>r,fe:()=>s,Rz:()=>c});const i=64,o=80,a=22,r="HeaderContent",s=671,c={boxShadow:"0px 8px 8px -8px rgba(0, 0, 0, 0.1)",transition:"box-shadow 300ms ease-in-out"}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/83221-e1c2a09f3a527c1c.mjs.map