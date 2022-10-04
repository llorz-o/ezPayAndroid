"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[453],{59453:function(t,a,e){e.r(a),e.d(a,{default:function(){return B}});var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page page_layout"},[e("div",{staticClass:"layout"},[e("TopBar"),e("router-view",{key:t.$route.path,staticClass:"ios-pd-tp ios-pd-bt",attrs:{hasTopBar:t.$root.topBarDisplay,hasBottomBar:t.$root.bottomBarDisplay,isHome:t.$route.meta.isHome}}),e("BottomBar")],1)])},s=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("van-tabbar",{directives:[{name:"show",rawName:"v-show",value:t.display,expression:"display"}],staticClass:"GlobalBottomBar",attrs:{"z-index":10,border:!1,"safe-area-inset-bottom":""}},[t._l(t.cell,(function(a){return["scan"===a.name?[e("van-tabbar-item",{key:a.name,staticClass:"scan"},[e("div",{staticClass:"scanBtn",attrs:{slot:"icon"},on:{click:t.handlerScan},slot:"icon"})])]:[a.available?e("van-tabbar-item",{key:a.name,class:{"van-tabbar-item--active":a.name===t.active},attrs:{icon:a.icon,name:a.name},on:{click:function(){t.$router.replace(a.to)}}},[t._v(" "+t._s(a.label)+" ")]):t._e()]]})),e("svg",{staticClass:"chatRoomBtn-svg",attrs:{viewBox:"0 0 750 98"}},[e("defs",[e("filter",{attrs:{id:"shadow",width:"200%",height:"200%",x:"0",y:"-100%"}},[e("feFlood",{attrs:{result:"basic","flood-opacity":"0.15"}}),e("feComposite",{attrs:{operator:"in",in:"SourceAlpha",in2:"basic",result:"basic_color"}}),e("feGaussianBlur",{attrs:{in:"basic_color",stdDeviation:"10",result:"blur"}}),e("feOffset",{attrs:{in:"blur",dx:"0",dy:"0",result:"offsetBlur"}}),e("feMerge",[e("feMergeNode",{attrs:{in:"offsetBlur"}}),e("feMergeNode",{attrs:{in:"SourceGraphic"}})],1)],1)]),e("path",{attrs:{d:"M556,1296c33.1-.87,50.842-22.39,58-31,7.7-9.44,21.891-30.02,41.127-30,138.95,0.14,255.873,0,255.873,0a20,20,0,0,1,20,20v78H556m0,0H181v-78a20,20,0,0,1,20-20s116.923,0.14,255.873,0c19.236-.02,33.43,20.56,41.127,30,7.158,8.61,24.9,30.13,58,31",transform:"translate(-181 -1235)",filter:"url(#shadow)"}})]),e("div",{staticClass:"ios-safe-area-cover"}),e("van-popup",{staticClass:"sannerPopup",style:{height:"65%"},attrs:{round:"",position:"bottom","get-container":"body","close-on-popstate":"","safe-area-inset-bottom":""},on:{close:t.handlerPopupClose},model:{value:t.showScanPop,callback:function(a){t.showScanPop=a},expression:"showScanPop"}},[t.showScanPop?[e("div",{staticClass:"scanArea"},[e("div",{attrs:{id:"reader"}})]),e("div",{staticClass:"btns"},[e("van-button",{staticClass:"start",attrs:{type:"primary"},on:{click:t.startScan}},[t._v(" "+t._s(t.scanning?"停止扫描":"开始扫描")+" ")]),e("van-button",{staticClass:"image",attrs:{type:"info"}},[t._v(" 扫描图片 "),e("input",{attrs:{type:"file",id:"qr-input-file",accept:"image/*"}})])],1)]:t._e()],2)],2)},i=[],r=e(62032),c=(e(26699),e(32023),e(68309),e(14876)),l={name:"BottomBar",data:function(){return{active:"index",showScanPop:!1,scanning:!1}},computed:{display:function(){return this.$root.bottomBarDisplay},cell:function(){return[{name:"index",label:"首页",to:"/",alias:[],icon:"wap-home",available:!0},{name:"transaction",label:"挂单",to:"/transaction",alias:[],icon:"todo-list",available:!0},{name:"scan",label:"",to:"",alias:[],icon:"",available:!0},{name:"orders",label:"订单",to:"/orders",alias:[],icon:"bill",available:!0},{name:"payments",label:"管理",to:"/payments",alias:[],icon:"card",available:!0}]}},watch:{$route:{handler:function(t){var a,e=(0,r.Z)(this.cell);try{for(e.s();!(a=e.n()).done;){var n=a.value;if(n.to===t.path||n.alias.includes(t.path)){this.active=n.name;break}this.active=""}}catch(s){e.e(s)}finally{e.f()}},immediate:!0}},created:function(){this.$root.$on("root:close-app-scan-overlay",this.closeAppScanPopupOverlay)},methods:{closeAppScanPopupOverlay:function(){this.back&&this.back(),this.$root.app.appScanPopupOverlay=!1},handlerScan:function(){var t=this;this.$root.isH5Plus?(this.$root.app.appScanPopupOverlay=!0,this.back=window.h5p.startQrcodeScan((function(a){var e=JSON.parse(a);t.$root.app.appScanPopupOverlay=!1,e.status?t.$root.processQrcodeResult(e.result):t.$toast.fail("扫码失败！")}))):(this.showScanPop=!0,this.$nextTick((function(){t.scanImage()})))},handlerPopupClose:function(){var t=this;this.scanning=!1,this.$emit("close"),this.$nextTick((function(){return t.showScanPop=!1}))},startScan:function(){var t=this;this.scanning?this.$emit("triggle"):this.$nextTick((function(){c.t2.getCameras().then((function(a){try{if(a&&a.length>0){var e=a[a.length-1].id,n=new c.t2("reader");n.start({deviceId:{exact:e}},{fps:10,qrbox:{width:160,height:160}},(function(a,e){t.$root.processQrcodeResult(a),t.handlerPopupClose()}),(function(t){})).then((function(){t.scanning=!0})).catch((function(a){console.error(a),t.$toast.fail("系统错误，唤起扫描失败")})),t.$once("triggle",(function(){if(t.scanning)try{n&&n.stop()}catch(a){}t.scanning=!t.scanning})),t.$once("close",(function(){try{n&&n.stop()}catch(t){}})),t.$once("hook:beforeDestroy",(function(){try{n&&n.stop()}catch(t){}}))}else t.$toast.fail("未检测到摄像头！")}catch(s){console.log(s)}})).catch((function(a){console.error(a),t.$toast.fail("无法获取摄像头权限！")}))}))},scanImage:function(){var t=this,a=new c.t2("reader"),e=document.getElementById("qr-input-file");e.addEventListener("change",(function(e){if(0!=e.target.files.length){t.scanning=!1,t.$emit("close");var n=e.target.files[0];a.scanFile(n,!0).then((function(a){console.log(a),t.handlerPopupClose(),t.$root.processQrcodeResult(a)})).catch((function(t){console.log("Error scanning file. Reason: ".concat(t))}))}}))}}},u=l,p=e(1001),f=(0,p.Z)(u,o,i,!1,null,null,null),m=f.exports,h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("van-nav-bar",{staticClass:"TopBar",class:{isHome:t.$route.meta.isHome},attrs:{"z-index":11,border:!1,"safe-area-inset-top":""},scopedSlots:t._u([{key:"left",fn:function(){return[t.btnMapping["left-back"]?e("div",{staticClass:"btn normal",on:{click:function(a){return t.$router.back(-1)}}},[e("van-icon",{staticClass:"icon",attrs:{name:"arrow-left"}})],1):t._e(),t.btnMapping["user-center"]?e("div",{staticClass:"btn",class:{home:t.$route.meta.isHome},on:{click:function(a){return t.$router.push("/user")}}},[e("van-image",{staticClass:"icon",attrs:{src:t.$root.getImageUrl(t.$root.userInfo.avatar),fit:"cover",round:""}},[e("div",{staticClass:"defaultAvatar size22",attrs:{slot:"error"},slot:"error"})]),t.$route.meta.isHome?e("span",{staticClass:"label"},[t._v(" 用户中心 ")]):t._e()],1):t._e(),t.btnMapping["help"]?e("div",{staticClass:"btn",class:{home:t.$route.meta.isHome},on:{click:function(a){return t.$router.push("/helps")}}},[e("van-icon",{staticClass:"icon",attrs:{name:"question-o"}}),t.$route.meta.isHome?e("span",{staticClass:"label"},[t._v(" 帮助 ")]):t._e()],1):t._e()]},proxy:!0},{key:"title",fn:function(){return[t._v(" "+t._s(t.$root.title||t.$route.name)+" ")]},proxy:!0},{key:"right",fn:function(){return[t.btnMapping["notices"]?e("div",{staticClass:"btn",class:{home:t.$route.meta.isHome},on:{click:function(a){return t.$router.push("/messages")}}},[e("van-icon",{staticClass:"icon",attrs:{name:"bell",badge:t.badge}}),t.$route.meta.isHome?e("span",{staticClass:"label"},[t._v(" 消息通知 ")]):t._e()],1):t._e(),t.btnMapping["customer-service"]?e("div",{staticClass:"btn",class:{home:t.$route.meta.isHome},on:{click:t.$root.openCustomerService}},[e("van-icon",{staticClass:"icon",attrs:{name:"service-o"}}),t.$route.meta.isHome?e("span",{staticClass:"label"},[t._v(" 客服 ")]):t._e()],1):t._e(),t.btnMapping["time-picker"]?e("div",{staticClass:"btn time-picker",on:{click:t.timePickerConf.onClick}},[e("span",{staticClass:"label"},[t._v(" "+t._s(t.timePickerConf.label)+" ")]),e("van-icon",{attrs:{name:t.timePickerConf.down?"arrow-down":"arrow-up"}})],1):t._e(),t.btnMapping["custom-btn"]?e("div",{staticClass:"btn custom-btn",on:{click:t.customBtnConf.onClick}},[e("span",{staticClass:"label"},[t._v(" "+t._s(t.customBtnConf.label)+" ")])]):t._e()]},proxy:!0}])})},d=[],v=e(23796),b=e(4367),g=(e(41539),{name:"TopBar",computed:{btnMapping:function(){return this.$root.topIncludes.reduce((function(t,a){return(0,b.Z)((0,b.Z)({},t),{},(0,v.Z)({},a,!0))}),{})},timePickerConf:function(){return this.$root.topConfig||{down:!0,label:"今天",onClick:function(){return{}}}},customBtnConf:function(){return this.$root.topConfig||{label:"Custom",onClick:function(){return{}}}},badge:function(){return this.$root.unreadMessages>99?"99+":this.$root.unreadMessages||""}}}),C=g,$=(0,p.Z)(C,h,d,!1,null,null,null),y=$.exports,k={components:{BottomBar:m,TopBar:y}},_=k,w=(0,p.Z)(_,n,s,!1,null,null,null),B=w.exports}}]);