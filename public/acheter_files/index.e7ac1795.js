var okxGlobal;(()=>{"use strict";var e={8066:(e,t,n)=>{n.d(t,{Jf:()=>s});var r=n(5671),a=n(3144),o=n(8361),i="okGlobalFloatLayer",c="ok-global-float-layer-box";function u(e,t){if((0,o.y)())return null;var n=document.createElement("div");return n.id=e,n.setAttribute("class",t),n}var s=new(function(){function e(){(0,r.Z)(this,e),this.isHideLayer=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!(0,o.y)()){var t=document.querySelector("#okGlobalFloatLayer"),n="ok-global-float-layer-hide-all";if(!t)return;var r=t.classList.contains(n);e?!r&&t.classList.add(n):r&&t.classList.remove(n)}},this.count=0,this.hasInsertContainer=!1,(0,o.y)()||(this.container=document.getElementById(i)||u(i,"ok-global-float-layer"),document.getElementById(i)?this.hasInsertContainer=!0:document.body&&(document.body.appendChild(this.container),this.hasInsertContainer=!0))}return(0,a.Z)(e,[{key:"setContainer",value:function(){var e=document.getElementById(i);!this.hasInsertContainer&&e?(this.container=e,this.hasInsertContainer=!0):this.hasInsertContainer||e||(this.container=u(i,"ok-global-float-layer"),document.body.appendChild(this.container),this.hasInsertContainer=!0)}},{key:"createFirstBox",value:function(e){if(!(0,o.y)()){var t;this.setContainer();var n=null===(t=document.getElementById(i))||void 0===t?void 0:t.getElementsByClassName(c)[0];if(n){var r="".concat(i,"Box").concat(this.count);this.count++;var a=u(r,c);this.container.insertBefore(a,n),e({dom:a,id:r})}else this.createLastBox(e)}}},{key:"createLastBox",value:function(e){if(!(0,o.y)()){this.setContainer();var t="".concat(i,"Box").concat(this.count);this.count++;var n=u(t,c);this.container.appendChild(n),e({dom:n,id:t})}}}]),e}())},4108:(e,t,n)=>{n.d(t,{okxGlobal:()=>Re});var r=n(8361),a=n(1825);const o=function(e){if(!(0,r.y)()){var t=e.nav,n=e.hideFooter,a=document.querySelector("#footerContainer");void 0!==t&&document.body.setAttribute("data-nav",e.nav),void 0!==n&&a&&a.setAttribute("data-hide",n)}};var i=n(8066);var c={showAppDownloadFloat:function(e){return(0,r.y)()?null:Promise.all([n.e(736),n.e(254)]).then(n.bind(n,5254)).then((function(t){(0,t.default)(e)}))},setNav:o,showUkRiskDialog:function(){(0,r.y)()||Promise.all([n.e(736),n.e(566),n.e(967),n.e(746)]).then(n.bind(n,8673)).then((function(e){(0,e.default)()})).catch((function(e){}))},setLanguageList:function(){return null},floatLayer:{createFirstBox:function(e){return(0,r.y)()?null:i.Jf.createFirstBox(e)},createLastBox:function(e){return(0,r.y)()?null:i.Jf.createLastBox(e)},isHideLayer:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(0,r.y)()?null:i.Jf.isHideLayer(e)}},hideBanner:function(e){return(0,r.y)()?null:i.Jf.isHideLayer(e)},showUpgradeBrowserDialog:function(){},setResponsive:function(){}};const u=c;var s=n(7423);const l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(0,r.y)()||(0,s.k)(e,t?"_blank":"_self")};var g=n(4165),d=n(1413),f=n(5861),h=n(5886),v=n(5833),p=n.n(v);function m(){var e=((arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})||{}).data;return e&&0===Number(e.code)?Promise.resolve(e):Promise.reject(e||{})}function w(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})||{},t=e.status,n=void 0===t?"":t,r={status:n,code:n,msg:e.data.msg||""};return Promise.reject(r)}var y=function(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(p(),n).then(m,w)}},Z=(0,d.Z)((0,d.Z)({},p()),{},{post:y(p()&&p().post),delete:y(p()&&p().delete)});if(!(0,r.y)()){var _=function(e){return Promise.reject({status:e.statusCode,data:JSON.parse(e.body),headers:e.headers})};Z&&Z.get&&(Z.get=function(e,t,n){var r={params:t};return n&&(r.customToLogin=_),p().get(e,r).catch(w).then(m)}),Z.getAsync=function(){var e=(0,f.Z)((0,g.Z)().mark((function e(t,n){return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.get(t,n);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}(),Z.getWithCache=function(e,t,n){var r=(0,d.Z)({},t);return n&&(r.customToLogin=_),p().getWithCache(e,r).catch(w).then(m)}}const C=(0,r.y)()?{}:Z;const b={CHECK_COUNTRY_LIMIT:"/v3/users/support/common/check-country-limit",COMMUNITY_ALL:"/v3/users/common/globalConfig/community/getAll",USER_PROFILE:"/v3/users/security/profile",POST_REFRESH_TOKEN:"/v3/users/support/refresh",GET_CHARGE_UNIT:"/v3/users/local-config/get-charge-unit",POST_CHARGE_UNIT:"/v3/users/local-config/renewal-charge-unit",GET_DEFAULT_LANGUAGE:"/v2/support/template/detail/55",GET_ACADEMY_LANGUAGE:"/v2/support/template/detail/137",GET_NEW_ACADEMY_LANGUAGE:"/v2/support/template/detail/155",GET_OPEN_LANG:"/v3/users/broker/open/lang",GET_ALL_CURRENCY:"/v3/users/common/list/currencies",GET_HOME_ACTIVITY_INFO:"/v2/support/home/web-config/info",GET_PREFERENCE:"/v3/users/local-config/settings"};var k=n(6724),E=function(e){var t=a.Z.localeMap,n=a.Z.langPath,r=Object.keys(t),o=e.toLowerCase(),i=r.some((function(e){return e===o})),c=n;return i&&(k.Z.set("locale",e,{path:"/",expires:18250}),k.Z.set("preferLocale",e,{path:"/",expires:18250}),c=t[o]?"/".concat(t[o]):""),{newPath:c,isLanguageLegal:i}},L=function(){var e=(0,f.Z)((0,g.Z)().mark((function e(t,n){var r,a,o,i,c,u,s,l,f,v,m,w,y,Z,_,k,L,T,S,x,I;return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.token,a=n._tk,o=n.pastDue,(i=n.account||localStorage.getItem("loginName"))&&localStorage.setItem("loginName",i),e.prev=3,p().saveLoginState({token:r,expireTime:o}),e.next=7,C.getAsync(b.USER_PROFILE);case 7:0===(c=e.sent).code&&(u=c.data,s=u.realEmail,l=u.phone,f=u.nickName,v=u.currentIsSub,m=u.brokerAdmin,w=u.email,y=u.vipLevel,Z=u.language,_=v?f:s||l,k=i||_,L=f,v||(L=k.includes("@")?w:l),T=E(Z),S=T.newPath,x=(0,d.Z)((0,d.Z)({},u),{},{nickName:L,loginName:k}),h.Z.g.set("profile",x),localStorage.setItem("currentIsSub",v?"1":"0"),localStorage.setItem("isBrokerAdmin",m?"1":"0"),localStorage.setItem("vipLevel",y||0),k&&localStorage.setItem("nickName",L),k&&localStorage.setItem("loginName",k),localStorage.setItem("_tk",a),I=(0,d.Z)((0,d.Z)({},x),{},{newPath:S}),t(I)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),localStorage.setItem("_tk",a);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t,n){return e.apply(this,arguments)}}();const T=function(e){return(0,r.y)()?null:new Promise((function(t){L(t,e)}))};var S=n(9439),x=n(8443),I=function(e){var t=e.forwardUrl,n=e.url,r=e.query,a=e.params,o=void 0===a?{}:a;if(t){var i="";Object.entries(o).forEach((function(e){var t=(0,S.Z)(e,2),n=t[0],r=t[1];i+="&".concat(n,"=").concat(r)}));var c=document.querySelectorAll(r),u="".concat(n).concat(t).concat(i);c.forEach((function(e){e.setAttribute("href",u)}))}};const P=function(e){if(!(0,r.y)()){var t=e.loginForward,n=void 0===t?"":t,a=e.registerForward,o=void 0===a?"":a,i=e.loginParams,c=void 0===i?{}:i,u=e.registerParams,s=void 0===u?{}:u;!function(e,t){var n=(0,x.zN)("/account/login?forward=");I({forwardUrl:e,url:n,query:".header-container .user-login-btn",params:t})}(n,c),function(e,t){var n=(0,x.zN)("/account/register?action=header_register_btn&forward=");I({forwardUrl:e,url:n,query:".header-container .user-register-btn",params:t})}(o,s)}};var A=n(5564),U=n.n(A);function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.text,n=e.size,r=void 0===n?100:n;if(!t)return"";var a=U()(t),o=document.createElement("canvas"),i=o.getContext("2d"),c=a.modules,u=r/c.length,s=r/c.length,l=(window&&window.devicePixelRatio||1)/function(e){return e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1}(i);return o.height=r*l,o.width=r*l,i.scale(l,l),c.forEach((function(e,t){e.forEach((function(e,n){i&&(i.fillStyle=e?"#000":"#fff");var r=Math.ceil((n+1)*u)-Math.floor(n*u),a=Math.ceil((t+1)*s)-Math.floor(t*s);i&&i.fillRect(Math.round(n*u),Math.round(t*s),r,a)}))})),o.toDataURL()}var D=function(e,t){e&&N&&e(N(t))};const O=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=arguments.length,a=new Array(n>2?n-2:0),o=2;o<n;o++)a[o-2]=arguments[o];var i="object"===typeof e?e:(0,d.Z)({text:e,size:t},a);return!(0,r.y)()&&new Promise((function(e){!function(e,t){D(e,t)}((function(t){e(t)}),i)}))};var R=n(8694),W="global_chatbot_toggled",G=function(){};const F=function(e){if(!(0,r.y)()){var t=(e||{}).needFallback;if(void 0!==t&&t)return new Promise((function(e,t){R.Z.send(W,(function(){!(arguments.length>0&&void 0!==arguments[0])||arguments[0]?e():t()}))}));R.Z.send(W,G)}return null};var j=n(2838),B=n.n(j);const M=function(e){return!(0,r.y)()&&new Promise((function(t){!function(e){var t,n,r,o,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,c=k.Z.get("first_ref"),u=(c=c?decodeURIComponent(c):"").match(/^http(s)?:\/\/(.*?)\//),s=u?u[2]:"",l=B()(window&&(null===(t=window.utils.monitor)||void 0===t||null===(n=t.getChannelId)||void 0===n?void 0:n.call(t))),g=/Electron/.test(navigator.userAgent),d="";g||(d=s&&l?"?first_ref=".concat(s,"&channelId=").concat(l):s?"?first_ref=".concat(s):l?"?channelId=".concat(l):"");var f=a.Z.isApp,h=null===(r=window)||void 0===r||null===(o=r.location)||void 0===o?void 0:o.origin;(f||g)&&(h="https://www.okx.com");var v="".concat(h,"/download").concat(d);D(e,{text:v,size:i})}((function(e){t(e)}),e)}))};const z=function(){var e,t,n,r,o=k.Z.get("first_ref"),i=(o=o?decodeURIComponent(o):"").match(/^http(s)?:\/\/(.*?)\//),c=i?i[2]:"",u=B()(window&&(null===(e=window.utils.monitor)||void 0===e||null===(t=e.getChannelId)||void 0===t?void 0:t.call(e))),s=/Electron/.test(navigator.userAgent),l="";s||(l=c&&u?"?first_ref=".concat(c,"&channelId=").concat(u):c?"?first_ref=".concat(c):u?"?channelId=".concat(u):"");var g=a.Z.isApp,d=null===(n=window)||void 0===n||null===(r=n.location)||void 0===r?void 0:r.origin;return(g||s)&&(d="https://www.okx.com"),"".concat(d,"/download").concat(l)};const H=function(e,t){(0,r.y)()||function(e){var t=e.id,n=e.schemaStr,r=document.body,a="".concat(t,"Schema"),o=document.getElementById(a);if(o)o.innerText=n;else{var i=document.createElement("script");i.type="application/ld+json",i.id=a,i.innerText=n,r.appendChild(i)}}({id:e,schemaStr:t})};var q=n(3465),K="".concat(a.Z.cdnBaseUrl,"/cdn/assets/okfe/libs/dv/zhengdao-okx-v8.2.1.min.js");const J={loadDV:function(){return!(0,r.y)()&&new Promise((function(e,t){!function(e,t){(0,q.f)({url:K}).then(e).catch(t)}(e,t)}))},postManualEvent:function(e,t){return!(0,r.y)()&&new Promise((function(n,r){!function(e,t,n,r){(0,q.f)({url:K}).then((function(){var a=(window&&window.raphael()).setZdEnv("https://zd.okx-dv.net");"success"===a?(window&&window.dvZhengdao.postManualEvent(n,r),e(window&&window.dvZhengdao)):t({flagZdEnv:a})})).catch(t)}(n,r,e,t)}))},setToken:function(){return!(0,r.y)()&&new Promise((function(e){e("")}))}};var $={then:function(e){!(0,r.y)()&&C.get(b.CHECK_COUNTRY_LIMIT).then(function(){var t=(0,f.Z)((0,g.Z)().mark((function t(n){var r,a,o,i,c,u,s,l,f,h,v,m,w;return(0,g.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.data,a=r.cefi,o=void 0===a?{}:a,i=r.web3,c=void 0===i?{}:i,u=r.register,s=void 0===u?{}:u,l=o.limit,f=void 0!==l&&l,h=o.kycLevel,!f&&!s.limit){t.next=9;break}return t.next=5,p().checkIsLogin();case 5:v=t.sent,m=!!v&&h<2,w=f&&c.limit,e((0,d.Z)((0,d.Z)({},o),{},{kycRequired:m,allLimit:w,registerLimit:s.limit,registerData:s}));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(){e({country:"",displayCountryName:"",kycLevel:0,limit:!1,politStatus:0,province:"",provinceCode:"",kycRequired:!1,allLimit:!1,registerLimit:!1,registerData:{country:"",displayCountryName:"",kycLevel:0,politStatus:0,province:"",provinceCode:"",kycRequired:!1}})}))}};const Y=$;const V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!(0,r.y)()){var t=h.Z.g.get("profile")||{},n=t.currentIsSub,a=t.subUserAuth||{isAllowLogin:!0,isAllowDeposit:!n,isAllowWithdraw:!n,isAllowTransfer:!0,isAllowTrading:!0,isAllowCreateApi:!0,isAllowOAuth:!0,isAllowUseFinancial:!0,isAllowUseAsset:!0,isAllowInquireTrading:!0,isAllowInquireAsset:!0};if(0===e.length)return a;var o={};return e.forEach((function(e){o[e]=a[e]})),o}return null};var Q={zh_CN:{langPath:"cn",icon:"",language:"zh_CN",text:"\u7b80\u4f53\u4e2d\u6587"},en_US:{langPath:"en",icon:"",language:"en_US",text:"English"},zh_HK:{langPath:"hk",icon:"",language:"zh_HK",text:"\u7e41\u9ad4\u4e2d\u6587"},zh_TW:{langPath:"tw",icon:"",language:"zh_TW",text:"\u7e41\u9ad4\u4e2d\u6587"},fr_FR:{langPath:"fr",icon:"",language:"fr_FR",text:"Fran\xe7ais (Afrique)"},ru_RU:{langPath:"ru",icon:"",language:"ru_RU",text:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"},th_TH:{langPath:"th",icon:"",language:"th_TH",text:"\u0e44\u0e17\u0e22"},vi_VN:{langPath:"vi",icon:"",language:"vi_VN",text:"Ti\u1ebfng Vi\u1ec7t"},in_ID:{langPath:"id",icon:"",language:"in_ID",text:"Bahasa Indonesia"},tr_TR:{langPath:"tr",icon:"",language:"tr_TR",text:"T\xfcrk\xe7e"},ko_KR:{langPath:"ko",icon:"",language:"ko_KR",text:"\ud55c\uad6d\uc5b4"},de_DE:{langPath:"de",icon:"",language:"de_DE",text:"Deutsch"},it_IT:{langPath:"it",icon:"",language:"it_IT",text:"Italiano"},pl_PL:{langPath:"pl",icon:"",language:"pl_PL",text:"Polski"},en_IN:{langPath:"en-IN",icon:"",language:"en_IN",text:"English (India)"},pt_BR:{langPath:"pt-br",icon:"",language:"pt_BR",text:"Portugu\xeas (Brasil)"},pt_PT:{langPath:"pt-pt",icon:"",language:"pt_PT",text:"Portugu\xeas (Portugal)"},es_ES:{langPath:"es-es",icon:"",language:"es_ES",text:"Espa\xf1ol (Espa\xf1a)"},es_419:{langPath:"es-la",icon:"",language:"es_419",text:"Espa\xf1ol (Latinoam\xe9rica)"},cs_CZ:{langPath:"cs",icon:"",language:"cs_CZ",text:"\u010ce\u0161tina"},ro_RO:{langPath:"ro",icon:"",language:"ro_RO",text:"Rom\xe2n\u0103"},uk_UA:{langPath:"uk-ua",icon:"",language:"uk_UA",text:"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"},ar_001:{langPath:"ar",icon:"",language:"ar_001",text:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"}},X=function(){return function(e,t){var n=a.Z.localeMap,r={},o={};"object"===typeof e?e.forEach((function(e){var t=e.language,n=e.href;r[t.toLowerCase()]={href:n}})):Object.entries(n).forEach((function(e){var t=(0,S.Z)(e,2),n=t[0],a=t[1];r[n]={langPath:a}})),o=Object.keys(r);var i={};return 0===o.length?t:(Object.entries(t).forEach((function(e){var t=(0,S.Z)(e,2),n=t[0],a=t[1],c=n.toLowerCase(),u=r[c]||{};o.includes(c)&&(i[n]=(0,d.Z)((0,d.Z)({},a),u))})),i)}("",Q)},ee=n(5671),te=n(3144),ne=n(8674),re=n(7935),ae=function(){var e=k.Z.get(ne.FP);try{if(e)return JSON.parse(e)}catch(t){return re.k.error("get currency",{nowCurrencyUnit:e,customConfig:ne.Dv}),null}return null},oe=function(){var e=k.Z.get(ne.$i);try{if(e)return e}catch(t){return}},ie={currencyId:0,displayName:"USD",isDefault:1,isoCode:"USD",precision:2,symbol:"$",usdToThisRate:1},ce=function(){function e(){(0,ee.Z)(this,e),this.getting=!1,this.got=!1,this.data={nowCurrencyUnit:ie,allCurrencyUnit:[(0,d.Z)({},ie)]},this.cbList=[]}return(0,te.Z)(e,[{key:"executeCbList",value:function(){var e=this;this.cbList.forEach((function(t){t&&t(e.data)}))}},{key:"getCurrency",value:function(){var e=(0,f.Z)((0,g.Z)().mark((function e(){var t,n,r,o,i,c,u,s,l,f=this;return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("modifyCurrencyFlag"),e.next=3,p().checkIsLogin();case 3:if(n=e.sent,r=h.Z.g.get("nowCurrencyUnit"),n||t||!r||(k.Z.set(ne.FP,JSON.stringify(r),{expires:18250}),localStorage.setItem("modifyCurrencyFlag",1)),o=ae(),n&&o&&(h.Z.g.set("legalCurrencyId",o.currencyId),h.Z.g.set("nowCurrencyUnit",o)),i=o||r||{},!this.got){e.next=17;break}return c=h.Z.g.get("allCurrencyUnit")||[(0,d.Z)({},ie)],u=ie,Object.keys(i).length>0&&c.forEach((function(e){var t=e.currencyId,n=void 0===t?0:t;i.currencyId===n&&(u=e)})),this.data=(0,d.Z)((0,d.Z)({},this.data),{},{nowCurrencyUnit:u,allCurrencyUnit:c}),this.executeCbList(),e.abrupt("return");case 17:this.getting||(this.getting=!0,s=a.Z.locale,l="?locale=".concat(void 0===s?"en_US":s),C.getWithCache(b.GET_ALL_CURRENCY+l,{cacheSeconds:60}).then((function(e){var t=e.data,n=void 0===t?[]:t;f.data=(0,d.Z)((0,d.Z)({},f.data),{},{allCurrencyUnit:n}),h.Z.g.set("allCurrencyUnit",n),f.got=!0,f.getting=!1,f.getNowCurrency()})).catch((function(){h.Z.g.set("allCurrencyUnit",f.data.allCurrencyUnit),f.getNowCurrency(),f.getting=!1})));case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getNowCurrency",value:function(){var e=this.data.allCurrencyUnit,t=ie,n=ae()||h.Z.g.get("nowCurrencyUnit")||{},r=Object.keys(n).length>0;e.forEach((function(e){var a=e.isoCode,o=void 0===a?"USD":a,i=e.currencyId,c=void 0===i?0:i;r?n.currencyId===c&&(t=e):"USD"===o.toUpperCase()&&(t=e)})),h.Z.g.set("legalCurrencyId",t.currencyId),h.Z.g.set("nowCurrencyUnit",t),k.Z.set(ne.FP,JSON.stringify(t),{expires:18250}),this.data=(0,d.Z)((0,d.Z)({},this.data),{},{nowCurrencyUnit:t}),this.executeCbList()}},{key:"then",value:function(e){this.cbList.push(e),this.getCurrency()}}]),e}(),ue=n(2706),se=function(){function e(){(0,ee.Z)(this,e),this.allCurrencyUnit=[],this.nowLang={},this.nowCurrency={},this.languageMap={}}return(0,te.Z)(e,[{key:"getLanguage",value:function(e){var t=a.Z.locale;this.languageMap=e,this.nowLang=this.languageMap[t]||{}}},{key:"setUserLanguage",value:function(e){var t=E(e),n=t.newPath,r=t.isLanguageLegal;return re.k.info("setUserLanguage",{nowLocale:e,isLanguageLegal:r,customConfig:ne.Dv}),{newPath:n}}},{key:"isAcademy",value:function(){var e=(window&&window.location).pathname,t=a.Z.langPath;return e.toLowerCase().startsWith((0,x.zN)("".concat(t,"/learn")))}},{key:"setLanguage",value:function(){var e=(0,f.Z)((0,g.Z)().mark((function e(t){var n,r,o,i,c,u,s,l,d,f,h,v,m;return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.Z.locale,t!==(void 0===n?"en_US":n)){e.next=3;break}return e.abrupt("return");case 3:return r=this.languageMap[t]||{},this.nowLang=r,e.next=7,null===p()||void 0===p()?void 0:p().checkIsLogin();case 7:e.sent&&sessionStorage.setItem("reportedLanguage","1"),k.Z.set("locale",r.language,{path:"/",expires:18250}),k.Z.set("preferLocale",r.language,{path:"/",expires:18250}),o=a.Z.langPath,i=""===o,c=this.isSpecialLang(r.language),u=window&&window.location,s=u.hash,l=u.pathname,d=/^\/{2,}/,f=l.replace(d,"/"),h=f.toLowerCase().startsWith((0,x.zN)("".concat(o,"/learn"))),v=/\/help\/section\/[^/?#]+\/page\/\d+/.test(f),i&&c&&s&&!h&&!v?window.location.reload():(m=this.getNewUrl(t),window&&window.location.replace(m));case 21:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSecuritySearch",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e;if(e&&e.includes("?")){var n=e.substring(e.indexOf("?")+1).split("&").filter((function(e){var t=e.toLowerCase();return!(t.startsWith("channelid")||t.startsWith("channelflag"))}));t=n.length>0?"?".concat(n.join("&")):""}return t}},{key:"getNewUrl",value:function(e){var t=a.Z.langPath,n=this.languageMap[e]||{},r=window&&window.location,o=r.pathname,i=r.search,c=r.hash,u=o.replace(/^\/{2,}/,"/"),s=this.getSecuritySearch(i),l=n.langPath?"/".concat(n.langPath):"/";if(n.href)return B()(n.href);if(this.isAcademy())return B()("".concat(n.langPath?"/".concat(n.langPath,"/"):"/","learn"));if("/"===u||u===t)return B()("".concat(l).concat(s).concat(c));var g="",d=u,f=/(\/help\/section\/[^/?#]+)\/page\/\d+/;f.test(u)&&(d=u.replace(f,"$1"));var h="".concat(d).concat(s).concat(c);return g=t.length?h.replace(t,l):"".concat(l).concat(h),B()(g.replace("//","/"))}},{key:"isSpecialLang",value:function(e){return!(this.languageMap[e]||{}).langPath}},{key:"postRenewalCharge",value:function(e){var t={currencyId:e.currencyId};return C.post(b.POST_CHARGE_UNIT,t).then().catch((function(){localStorage.setItem(ne.Ik,e.currencyId),k.Z.set(ne.Zv,"2",{expires:18250})}))}},{key:"setCurrency",value:function(e,t){return this.getNowCurrency(e,t)}},{key:"getNowCurrency",value:function(){var e=(0,f.Z)((0,g.Z)().mark((function e(t,n){var r,a,o,i;return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===p()||void 0===p()?void 0:p().checkIsLogin();case 2:return r=e.sent,a=ae()||h.Z.g.get(ne.BW)||{},o=h.Z.g.get(ne.RK)||[],0===this.allCurrencyUnit.length&&(this.allCurrencyUnit=o),i=a,this.allCurrencyUnit.forEach((function(e){t===e.currencyId&&(i=e)})),r?(h.Z.g.set(ne.BW,i),k.Z.set(ne.FP,JSON.stringify(i),{expires:18250}),n?(localStorage.setItem(ne.Ik,t),k.Z.set(ne.Zv,"2",{expires:18250})):this.postRenewalCharge(i)):(k.Z.set(ne.FP,JSON.stringify(i),{expires:18250}),h.Z.g.set(ne.BW,i)),n&&window.location.reload(),this.nowCurrency=i,ue.Z.trigger("global_updated_currency",i),e.abrupt("return",i);case 13:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),le=n(9966);const ge=function(e){var t=(h.Z.g.get("preference")||{}).upDownColor,n=void 0===t?0:t,r=(0,le.mZ)(!!n);e&&e(r)};const de=function(e){var t=h.Z.g.get("preference")||{};h.Z.g.set("chgSetIsRedUp",e),h.Z.g.set("preference",(0,d.Z)((0,d.Z)({},t),{},{upDownColor:e?1:0})),(0,le.w)(!!e)};var fe=function(e,t){var n=a.Z.localeMap,r=void 0===n?{}:n,o={},i={};"object"===typeof e?e.forEach((function(e){var t=e.language,n=e.href;o[t.toLowerCase()]={href:n}})):Object.entries(r).forEach((function(e){var t=(0,S.Z)(e,2),n=t[0],r=t[1];o[n]={langPath:r}})),i=Object.keys(o);var c={};return 0===i.length?t:(Object.entries(t).forEach((function(e){var t=(0,S.Z)(e,2),n=t[0],r=t[1],a=n.toLowerCase(),u=o[a]||{};i.includes(a)&&(c[n]=(0,d.Z)((0,d.Z)({},r),u))})),c)},he=function(){return C.getWithCache(b.GET_OPEN_LANG,{cacheSeconds:300})};const ve=function(){function e(){(0,ee.Z)(this,e)}return(0,te.Z)(e,[{key:"init",value:function(){var e=a.Z.broker;if((void 0===e?{}:e).is){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("function"!==typeof e)throw new Error("cb should be function");var n=t.delay,r=void 0===n?300:n,a=t.times||3;return new Promise((function(t,n){!function o(){e().then(t).catch((function(e){0===a?n(e):(a--,window&&window.setTimeout(o,r))}))}()}))}(he,{times:3,delay:100}),n={};return t.then((function(e){return 0===e.code?(e.data.forEach((function(e){var t={language:e.lang,text:e.name,icon:e.icon};n[t.language]=t})),fe("",n)):{}}))}return fe("",Q)}}]),e}();var pe=function(e){var t,n=h.Z.g.get("preference")||{},r=oe(),o=localStorage.getItem("modifyUpDownTimeZone"),i=n.upDownColor,c=void 0===i?0:i,u=n.upDownTimeZone,s=(0,le.mZ)(!!c),l=(a.Z||{}).locale,g=void 0===l?"en_US":l;void 0===r?(t="zh_CN"===g||"zh_HK"===g||"zh_TW"===g?2:1,h.Z.g.set("preference",(0,d.Z)((0,d.Z)({},n),{},{chgSetInfo:s,upDownTimeZone:t}))):t=r,o||!u&&0!==u||(k.Z.set(ne.$i,u,{expires:18250}),localStorage.setItem("modifyCurrencyFlag",1),t=u),e&&e((0,d.Z)((0,d.Z)({},n),{},{chgSetInfo:s,upDownTimeZone:Number(t),upDownColor:c}))},me=function(){var e=(0,f.Z)((0,g.Z)().mark((function e(t){var n,r,a;return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p().checkIsLogin();case 2:e.sent?(r=(null===(n=h.Z.g.get("profile"))||void 0===n?void 0:n.uuid)||"",a="".concat(b.GET_PREFERENCE,"?uuid=").concat(r),C.getWithCache(a,{cacheSeconds:10},!0).then((function(e){var n=e.data,r=void 0===n?{}:n,a=h.Z.g.get("preference")||{},o=oe()||r.upDownTimeZone,i=a.upDownColor,c=!!(void 0===i?0:i),u=(0,le.mZ)(c);h.Z.g.set("chgSetIsRedUp",c),h.Z.g.set("preference",(0,d.Z)({},r)),t&&t((0,d.Z)((0,d.Z)({},r),{},{chgSetInfo:u,upDownTimeZone:Number(o)}))})).catch((function(){pe(t)}))):pe(t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();const we=me;var ye=n(4942);const Ze=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=h.Z.g.get("preference")||{};Object.keys(t).forEach((function(e){h.Z.g.set("preference",(0,d.Z)((0,d.Z)({},n),{},(0,ye.Z)({},e,t[e]))),"upDownTimeZone"===e&&k.Z.set(ne.$i,t[e],{expires:18250})})),void 0!==t.upDownColor&&(0,le.w)(!!t.upDownColor),e&&e()};var _e={langCurrency:new se,getUnit:function(e){if(!(0,r.y)()){var t=new ce;if(!e)return new Promise((function(e){t.then(e)}));t.then(e)}return null},setUnit:function(e){var t=e.currencyId,n=e.refresh,a=void 0!==n&&n,o=e.callback;if(!(0,r.y)()){var i=_e.langCurrency.setCurrency(t,a);if(!o)return new Promise((function(e){e(i)}));o&&o(i)}return null},getChgSet:function(e){return!(0,r.y)()&&ge(e)},setChg:function(e){return!(0,r.y)()&&de(e)},getLanguageList:function(){var e=(0,f.Z)((0,g.Z)().mark((function e(t){var n,a;return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,r.y)()){e.next=9;break}return n=new ve,e.next=4,n.init();case 4:if(a=e.sent,_e.langCurrency.getLanguage(a),t){e.next=8;break}return e.abrupt("return",new Promise((function(e){e(a)})));case 8:t&&t(a);case 9:return e.abrupt("return",{});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setLanguage:function(e){var t=e.nowLocale;_e.langCurrency.setLanguage(t)},setUserLanguage:function(e){return _e.langCurrency.setUserLanguage(e)},get:function(){return!(0,r.y)()&&new Promise((function(e){we(e)}))},set:function(e){return!(0,r.y)()&&new Promise((function(t){Ze(t,e)}))}},Ce={then:function(e){_e.getUnit(e)}},be=function(){var e={currencyId:0,displayName:"USD",isDefault:1,isoCode:"USD",precision:2,symbol:"$",usdToThisRate:1},t=k.Z.get(ne.ap)||0,n=(a.Z||{}).locale,o=void 0===n?"en_US":n,i="zh_CN"===o||"zh_HK"===o||"zh_TW"===o?2:1,c=oe()||i,u=ae()||e;if(!(0,r.y)()){var s=h.Z.g.get("preference")||{},l=s.upDownColor,g=void 0===l?0:l,d=s.upDownTimeZone;t=g,(c=oe()||d)||0===c||(c=i),u=ae()||h.Z.g.get(ne.BW)||e}var f=(0,le.mZ)(!!t);return{nowCurrencyUnit:u,upDownTimeZone:Number(c),chgSetInfo:f}},ke=new(function(){function e(){(0,ee.Z)(this,e),this.getting={},this.got={},this.data={},this.cbList={}}return(0,te.Z)(e,[{key:"getMedia",value:function(e){var t=this,n=a.Z.locale,r=void 0===n?"en_US":n,o=e?"&type=".concat(e):"",i="".concat(b.COMMUNITY_ALL,"?locale=").concat(r).concat(o);this.getting[e]||this.got[e]||(this.getting[e]=!0,C.getWithCache(i,{cacheSeconds:300}).then((function(n){t.data[e]=n.data,t.got[e]=!0,t.getting[e]=!1,t.cbList[e].forEach((function(n){return n(t.data[e])}))})).catch((function(){t.data[e]={},t.getting[e]=!1,t.cbList[e].forEach((function(n){return n(t.data[e])}))})))}},{key:"then",value:function(e){var t=e.fn,n=e.type,r=void 0===n?0:n;this.got[r]?t&&t(this.data[r]):(this.getMedia(r),this.cbList[r]||(this.cbList[r]=[]),this.cbList[r].push(t))}}]),e}()),Ee={then:function(e,t){!(0,r.y)()&&ke.then({fn:e,type:t})}},Le=function(){var e=(0,f.Z)((0,g.Z)().mark((function e(){var t;return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p().checkIsLogin();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Te=function(e,t,n,r){var a=(0,x.zN)("/trade");if(e?(localStorage.setItem("simulatedTrading","1"),k.Z.set("simulatedTrading","1",{expires:365})):(localStorage.removeItem("simulatedTrading"),k.Z.set("simulatedTrading","1",{expires:-1})),r&&localStorage.setItem("simulatedTradingNotice",e),!n){var o=window.location,i=t||o.href;e&&(i=t||a),i===o.href?o.reload():o.assign(i)}};const Se=function(e){return!(0,r.y)()&&new Promise((function(t,n){var r=a.Z.envSign,o=a.Z.cdnBaseUrl,i="".concat(o,"/cdn/assets/okfe/libs/threatmetrix/index.js");(0,q.f)({url:i}).then((function(){var a=e||"".concat(Math.random().toString(36).substring(2)).concat(Date.now()),o=0;!function(e,t,n){var r=t.toLocaleLowerCase();r.includes("script")||r.includes("javascript")||k.Z.set(e,t,n)}("tmx_session_id",a,(0,d.Z)({},function(){var e={path:"/"};return window.location.protocol.includes("https:")&&(e={path:"/",SameSite:"None",secure:!0}),e}()));var i="daily"===r?"84wtshmb":"9kqz9786";(function e(){return window.threatmetrix&&window.threatmetrix.profile?(o=0,t(a),window.threatmetrix):{profile:function(t,r,a){var i=setTimeout((function(){if(o>=3)return clearTimeout(i),void n(a);o++,e().profile(t,r,a)}),1e3)}}})().profile("contentmx.okcoin.com",i,a)})).catch((function(){n()}))}))};var xe=n(7607),Ie={QUESTION:"question",UK_QUESTION:"advancedQuestion"},Pe={hidden:!1,action:"",limit:!1};const Ae=new Proxy({},{get:function(e,t){var a;if(xe.X.isSpider)return Pe;var o=(null===(a=function(){var e;if("undefined"!==typeof globalThis)e=globalThis;else if("undefined"!==typeof window)e=window;else{if("undefined"===typeof n.g)throw new Error("unable to locate global object");e=n.g}return e.addEventListener=e.addEventListener||function(){},e}()._okxGlobal)||void 0===a?void 0:a.restriction)||{};if(!(0,r.y)()){var i,c=null===(i=localStorage)||void 0===i?void 0:i.getItem("restrictionData");c&&(o=JSON.parse(c))}return o[t]||Pe}});const Ue=function(){R.Z.send("global_toggle_account")};var Ne=function e(t,n){var r=(a.Z.versionUrls||{}).kyc;if(r){var o="".concat(r,"/entryDialog/index.css"),i="".concat(r,"/entryDialog/index.js");Promise.all([(0,q.j)({url:o}),(0,q.f)({url:i,parentDom:document.body})]).then((function(){window.createComplianceEntryDialog&&window.createComplianceEntryDialog(n)})).catch((function(){var r=t-1;r>=0&&e(r,n)}))}};const De={GET_WALLET_WIDGET:"g_get_wallet_widget",SET_WALLET_DATA:"g_set_wallet_data",GET_WALLET_DATA_CHANGE:"g_get_wallet_data_change",OFF_WALLET_DATA_CHANGE:"g_off_wallet_data_change",SET_WALLET_LOG_OUT:"g_set_wallet_log_out"};var Oe={getWalletWidget:function(){return new Promise((function(e){R.Z.send(De.GET_WALLET_WIDGET,(function(t){e(t)}))}))},setWalletData:function(e){R.Z.send(De.SET_WALLET_DATA,e)},setWalletLogout:function(){R.Z.send(De.SET_WALLET_LOG_OUT,{})},onWalletDataChange:function(e){R.Z.send(De.GET_WALLET_DATA_CHANGE,e)},offWalletDataChange:function(e){R.Z.send(De.OFF_WALLET_DATA_CHANGE,e)},clearWalletData:function(){var e=JSON.parse(localStorage.getItem("ok_onChain")),t=(0,d.Z)((0,d.Z)({},e),{},{walletData:{},currentWalletId:"",bundleMode:!1});localStorage.setItem("ok_onChain",t),window.location.reload()},getAllData:function(){var e=h.Z.getProjectStorage("onChain"),t=Object.values(e.walletData||{})||[],n=e.bundleData||[];return{walletData:{connected:t.filter((function(e){return!e.isWatched})).sort((function(e,t){return e.createTime-t.createTime})),watched:t.filter((function(e){return e.isWatched})).sort((function(e,t){return e.createTime-t.createTime})),bundles:n.sort((function(e,t){return e.createTime-t.createTime}))},currentWalletId:e.currentWalletId||"",connectedAccount:e.connectedAccount||{}}}};const Re=(0,r.y)()?{getSeoLanguageList:X,restriction:Ae,RESTRICTION_ACTIONS:Ie,getPreferenceSync:be}:{ui:u,DVInstance:J,preference:_e,getPreferenceSync:be,getCheckIpInfo:Y,allAssociation:Ee,allCurrencyUnit:Ce,getSeoLanguageList:X,setCurrency:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];_e.setUnit({currencyId:e,refresh:t})},getTradeSystemStatus:function(){var e=a.Z.simulatedStatus;return new Promise((function(t){t&&t({canUnified:!0,canTrade:!1,canSimulate:"0"!==e,demoApi:2,realApi:2})}))},showNav:function(e){c.setNav({nav:e})},showCS:F,setCsIconVisibility:function(e){R.Z.send("global_general_charbot_icon_visibility",{isVisible:e})},getQrCode:O,setForward:P,saveUserInfo:T,linkToLangUrl:l,setSchemaScript:H,getDownloadQrCode:M,getDownloadUrl:z,getSimulatedTrading:function(e){if(!(0,r.y)()){var t=(h.Z.g.get("profile")||{}).openSimulate;t=void 0===t?1:t,e({isSimulated:a.Z.simulatedTrading,isShow:!!Le()&&t})}},setSimulatedTrading:function(e,t){if(!(0,r.y)()){if(!Le())return void Te(e,t,!1,!0);Te(e,t,!0,!1);var n={onUpdateTokenDone:function(){Te(e,t,!1,!0)},switchingDemoTrading:!0};C.post(b.POST_REFRESH_TOKEN,{},n).then().catch((function(){}))}},checkSubAccountPermission:V,getWatcher:function(){return R.Z},refreshTmxSessionId:Se,restriction:Ae,RESTRICTION_ACTIONS:Ie,getEntityId:function(){return localStorage.getItem("_eid")||""},redditTrack:function(e,t){(0,r.y)()||window.rdt&&window.rdt("track",e,t)},showToggleAccount:Ue,showWeb3LimitDialog:function(e){R.Z.send("global_web3_limit_dialog",e)},showKycDialog:function(e){(0,r.y)()||(window.createComplianceEntryDialog?window.createComplianceEntryDialog(e):Ne(3,e))},onchain:Oe,getSecondNavFixed:function(e){ue.Z.listen("global_risky_banner_fixed",(function(t){e(t)}))}};var We=function(){var e=(0,f.Z)((0,g.Z)().mark((function e(){var t,n,r,a,o,i;return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.Z.g.get("preference")||{},n=t.upDownColor,r=void 0===n?0:n,(0,le.w)(!!r),e.next=5,p().checkIsLogin();case 5:e.sent&&(o=(null===(a=h.Z.g.get("profile"))||void 0===a?void 0:a.uuid)||"",i="".concat(b.GET_PREFERENCE,"?uuid=").concat(o),window.setTimeout((function(){C.get(i,{},!0).then((function(e){var t=e.data,n=void 0===t?{}:t,r=!!n.upDownColor;h.Z.g.set("chgSetIsRedUp",r),h.Z.g.set("preference",n),E(n.language)})).catch((function(){}))}),3e3));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();const Ge=We;(0,r.y)()||(a.Z.isRenderByNode&&(window.okGlobal=window.okGlobal?window.okGlobal:{}),Object.assign(window.okGlobal,Re),Ge())},8674:(e,t,n)=>{n.d(t,{$i:()=>s,BW:()=>r,Dv:()=>l,FP:()=>o,Ik:()=>c,RK:()=>a,Zv:()=>i,ap:()=>u});var r="nowCurrencyUnit",a="allCurrencyUnit",o="ok_prefer_currency",i="ok_prefer_exp",c="willReportCurrencyId",u="ok_prefer_udColor",s="ok_prefer_udTimeZone",l={project:{id:160,token:"b32011805ecf66fdb148c22d63d2803d"}}},7363:e=>{e.exports=React},1533:e=>{e.exports=ReactDOM},5833:e=>{e.exports=utils.ont}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,(()=>{var e=[];n.O=(t,r,a,o)=>{if(!r){var i=1/0;for(l=0;l<e.length;l++){for(var[r,a,o]=e[l],c=!0,u=0;u<r.length;u++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](r[u])))?r.splice(u--,1):(c=!1,o<i&&(i=o));if(c){e.splice(l--,1);var s=a();void 0!==s&&(t=s)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,a,o]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"common/"+e+"."+{254:"ebb98182",566:"4fcdf3c0",746:"21d8cc16",967:"d27e0aaf"}[e]+".js",n.miniCssF=e=>"common/"+e+"."+{254:"436e1193",566:"909bc0f8",746:"118c6043",967:"64af1e5e"}[e]+".css",n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="okx-nav:";n.l=(r,a,o,i)=>{if(e[r])e[r].push(a);else{var c,u;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var g=s[l];if(g.getAttribute("src")==r||g.getAttribute("data-webpack")==t+o){c=g;break}}c||(u=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+o),c.src=r),e[r]=[a];var d=(t,n)=>{c.onerror=c.onload=null,clearTimeout(f);var a=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((e=>e(n))),t)return t(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),u&&document.head.appendChild(c)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=416,(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"})(),(()=>{if("undefined"!==typeof document){var e=e=>new Promise(((t,r)=>{var a=n.miniCssF(e),o=n.p+a;if(((e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=(i=n[r]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){var i;if((a=(i=o[r]).getAttribute("data-href"))===e||a===t)return i}})(a,o))return t();((e,t,n,r,a)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=n=>{if(o.onerror=o.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=c,o.parentNode&&o.parentNode.removeChild(o),a(u)}},o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o)})(e,o,null,t,r)})),t={416:0};n.f.miniCss=(n,r)=>{t[n]?r.push(t[n]):0!==t[n]&&{254:1,566:1,746:1,967:1}[n]&&r.push(t[n]=e(n).then((()=>{t[n]=0}),(e=>{throw delete t[n],e})))}}})(),(()=>{var e={416:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise(((n,r)=>a=e[t]=[n,r]));r.push(a[2]=o);var i=n.p+n.u(t),c=new Error;n.l(i,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,a[1](c)}}),"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[i,c,u]=r,s=0;if(i.some((t=>0!==e[t]))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(u)var l=u(n)}for(t&&t(r);s<i.length;s++)o=i[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},r=self.webpackChunkokx_nav=self.webpackChunkokx_nav||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[736],(()=>n(4108)));r=n.O(r),okxGlobal=r.okxGlobal})();
//# sourceMappingURL=https://static-daily.okg.com/crash/okfe/okx-nav/okxGlobal/index.e7ac1795.js.map