(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],p=0,u=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&u.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},i={app:0},r=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-3fd346b4":"50446073","chunk-1646d082":"b3bf99b7","chunk-6f6b4afb":"02166a81"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-3fd346b4":1,"chunk-1646d082":1,"chunk-6f6b4afb":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-3fd346b4":"8b35433b","chunk-1646d082":"d44203de","chunk-6f6b4afb":"75bffcdd"}[e]+".css",i=c.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],p=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(p===a||p===i))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],p=l.getAttribute("data-href");if(p===a||p===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[e],d.parentNode.removeChild(d),n(r)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=r);var l,p=document.createElement("script");p.charset="utf-8",p.timeout=120,c.nc&&p.setAttribute("nonce",c.nc),p.src=s(e);var u=new Error;l=function(t){p.onerror=p.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}i[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:p})}),12e4);p.onerror=p.onload=l,document.head.appendChild(p)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],p=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=p;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3545:function(e,t,n){},"45f2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=n("1e18"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"root-div"},[n("div",{staticClass:"d-flex flex-column justify-content-center",attrs:{id:"app"}},[n("my-navbar"),n("router-view")],1)])},r=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-navbar",{attrs:{toggleable:"md",type:"light",variant:"light",fixed:"top"}},[n("b-navbar-brand",{attrs:{to:"/"}},[e._v(e._s(e.info.fullName))]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{id:"id-nav-about"},on:{click:function(t){return e.goToHome("#id-about","aboutRef")}}},[e._v(e._s(e.info.about))]),n("b-nav-item",{attrs:{id:"id-nav-project"},on:{click:function(t){return e.goToHome("#id-project","projectRef")}}},[e._v(e._s(e.info.project))]),n("b-nav-item",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],attrs:{id:"id-nav-project"},on:{click:function(t){return e.goToHome("#id-contact","contactRef")}}},[e._v(e._s(e.info.contact))])],1)],1)],1)],1)},c=[],l=(n("b0c0"),n("d5c7")),p={name:"MyNavbar",data:function(){return{info:{}}},methods:{goToHome:function(e,t){var n=this;"projectimg"!==this.$route.name?"#id-contact"!==e?this.$nextTick((function(){n.$bus.$emit(t+"Anchor",t)})):this.$root.$emit("bv::toggle::collapse","id-contact"):"#id-contact"!==e?this.$router.push({path:"/",hash:e}):this.$root.$emit("bv::toggle::collapse","id-contact")}},created:function(){this.info=l["c"]},mounted:function(){},beforeDestroy:function(){}},u=p,d=(n("5ebe"),n("2877")),f=Object(d["a"])(u,s,c,!1,null,"7e74294a",null),g=f.exports,m={name:"App",components:{myNavbar:g},mounted:function(){this.$router.push("/")}},h=m,b=(n("57f3"),Object(d["a"])(h,i,r,!1,null,null,null)),v=b.exports,y=(n("d3b7"),n("8c4f"));a["default"].use(y["a"]);var w=new y["a"]({mode:"history",routes:[{path:"/",name:"home",component:function(){return Promise.all([n.e("chunk-3fd346b4"),n.e("chunk-6f6b4afb")]).then(n.bind(null,"6511"))}},{path:"/projectimg/:projectIndex?",name:"projectimg",component:function(){return Promise.all([n.e("chunk-3fd346b4"),n.e("chunk-1646d082")]).then(n.bind(null,"5eb7"))}}],scrollBehavior:function(e,t,n){return e.hash?{selector:e.hash}:n||{x:0,y:0}}}),j=w,k=n("01e8"),S=n.n(k);a["default"].prototype.$bus=new a["default"];n("abe2"),n("f9e3"),n("2dd8");a["default"].use(o["a"]),a["default"].use(S.a),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(v)},router:j}).$mount("#app")},"57f3":function(e,t,n){"use strict";var a=n("3545"),o=n.n(a);o.a},"5ebe":function(e,t,n){"use strict";var a=n("45f2"),o=n.n(a);o.a},abe2:function(e,t,n){},d5c7:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"h",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"g",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"f",(function(){return p}));var a={name:"Jessica",fullName:"Jessica Wang",about:"About",work:"Work",project:"Project",contact:"Contact",job:"A creative front-end developer with a passion for learning."},o={heading:"me",content:"I come from a beautiful harbor city Kaohsiung. I was graduated from National Chiao Tung University and majoring in Cancer Biology.I am quite a fast-learner and adapt well to different environment, no matter what the challenges might be awaiting ahead of me. In my leisure time, I would love to explore new techniques and skills and traveling. Cooking and baking will always be my favorite hobbies when at home."},i={heading:"Work Experiences",experiences:[{title:"Software Engineer",company:"Smart eCare (悅康科技)",year:"Oct.2017 - Present",contents:{"Homedical (醫生到我家)：":"AngularJS, HTML, CSS, Firebase","Dialysis System：":"AngularJS, HTML, CSS, MongoDB, ECharts"}},{title:"Software Engineer",company:"JGALLOP (工樂行動科技)",year:"Mar.2017 - Sep.2017",contents:{"Web：":"Javascript, AJAX, Google Map API, Chart.js, Google Charts","App：":"Swift3, Camera, QRCode, UI-hard code","Design：":"Sketch, Zeplin"}},{title:"Research Assistant",company:"Academia Sinica, NCGM",year:"Jun.2014 - Apr.2016",contents:{"":"As research assistant, it has allowed me to fully utilized my analytical and quantitative reasoning that have been taught during my study. The reserch of circulating tumor cells (CTCs) can improve the prognosis of cancer stages. This technique is successfully transferred to a company (CellMax Life). Due to my proficiency in this technique, I assisted them to set up the CTCs detection system."}}]},r={heading:"Education",educations:[{qualification:"Master's Degree",school:"NATIONAL CHIAO TUNG UNIVERSITY 交通大學",location:"Hsinchu, Taiwan",year:"2011 - 2013",major:"M.S., Molecular Medicine and Bioengineering"},{qualification:"Bachelor's Degree",school:"KAOHSIUNG MEDICAL UNIVERSITY 高雄醫學大學",location:"Kaohsiung, Taiwan",year:"2008 - 2011",major:"B.S., Biotechnology"},{qualification:"Specialized Degree",school:"UCOM Training Center 恆逸資訊",year:"Jun. 2016 - Oct.2016",major:"智慧型手機應用程式設計實務班 (414hr)",courses:["手機程式設計基本概論","Java程式語言與物件導向程式設計","Google Android程式實戰演練-Android SDK","iPhone Objective-C程式語言課程","iPhone Swift程式語言課程","iPhone App應用程式開發-使用Objective-C及Swift語言","使用者介面視覺構成解析與優化","JavaScript與jQuery網頁互動實作","HTML5與CSS3網站開發實務","跨平台手機App開發實務"]}]},s={heading:"Skill",content:"",imageName:["html5-48","css3-48","javascript-48","firebase-48","angularjs-48","vuejs-48"]},c={items:[{projectName:"Homedical 醫生到我家 | Web / App",projectImage:"homedical.png",projectContent:'Homedical 是一個 "居家照護醫療" 系統。Web 部分：醫療人員個人管理後台、營運中心管理後台。App部分：醫療人員操作介面。醫療院所使用 Web 版的中心管理後台，約診、排班、派單給醫療人員，全方位掌控醫療人員出勤狀況，地圖定位，所有病情資料的紀錄等功能。醫療人員則使用手機版 App ，提供定位、撥電話、接單、病情紀錄、簽名、行事曆等功能。全系統使用Firebase做資料庫使用。',isImgLeft:!0},{projectName:"Dialysis System | Web / App",projectImage:"dialysissystem.png",projectContent:"This system provides medical experts a digital working environment. It was written with AngularJS and Angular material. Collaborate with the UI/UX designer, back-end developer and PM. We customized different hospital’s dialysis system. ",isImgLeft:!1},{projectName:"PaPaLewis management system | Web",projectImage:"papalewis.png",projectContent:"A coffee store management system, it can manage store's profile, consumption records, coffee beans, etc. This system did not use any front end framework.",isImgLeft:!0},{projectName:"ismartboss | iOS App (Swift3)",projectImage:"ismartboss.png",projectContent:"Scan QR code on invoices, and analyzing it consumption records.",isImgLeft:!1},{projectName:"Travobook | Android App (Java)",projectImage:"travobook.png",projectContent:"Travobook can let user remember, share, and route on their fascinating journey.",isImgLeft:!0},{projectName:"Instagrom | iOS App (Swift3)",projectImage:"instagrom.png",projectContent:"This app is just like the Instagram. You can note and post a beautiful photo and share it.",isImgLeft:!1}]},l={title:"Contact",message:"Please feel free to contact me.",email:"chienfang0611@gmail.com",phone:"+886933302134",github:"GitHub"},p={imageItems:{homedical:["homedical-login.png","homedical-login2.png","homedical-map.png","homedical-request.png","homedical-user.png","homedical-userDetail.png","homedical-history.png","homedical-file.png","homedical-todayShift.png","homedical-assign.png","homedical-assignDialog.png","homedical-app-1.png","homedical-app-2.png"],dialysis:["dialysis-patient.png","dialysis-summary.png","dialysis-form.png","dialysis-todayBed.png","dialysis-bloodPresure.png","dialysis-lab-1.png","dialysis-lab-2.png","dialysis-charge.png","dialysis-calender.png","dialysis-shift.png","dialysis-arrangeBed.png","dialysis-report.png","dialysis-barcode-1.png","dialysis-barcode-2.png"],papaLewis:["papaLewis-login.png","papaLewis-shopAccount.png","papaLewis-shop.png","papaLewis-coffee.png","papaLewis-productList.png","papaLewis-map.png","papaLewis-product.png","papaLewis-productDetail.png","papaLewis-management.png","papaLewis-order.png","papaLewis-info.png","papaLewis-cancel.png"],ismartboss:["ismartboss-1.png","ismartboss-2.png","ismartboss-3.png"],travobook:["travobook-1.png","travobook-2.png","travobook-3.png"],instagrom:["instagrom-1.png","instagrom-2.png"]}}}});
//# sourceMappingURL=app.bc9ee1ee.js.map