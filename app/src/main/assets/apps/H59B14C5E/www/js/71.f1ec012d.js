"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[71],{83071:function(t,e,a){a.r(e),a.d(e,{default:function(){return F}});var n,o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page page_layout"},[a("div",{staticClass:"layout"},[a("TopBar"),a("router-view",{key:t.$route.path,staticClass:"ios-pd-tp ios-pd-bt",attrs:{hasBottomBar:t.$root.bottomBarDisplay,hasTopBar:t.$root.topBarDisplay,isHome:t.$route.meta.isHome}}),a("BottomBar")],1)])},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-tabbar",{directives:[{name:"show",rawName:"v-show",value:t.display,expression:"display"}],staticClass:"GlobalBottomBar",attrs:{border:!1,"z-index":10,"safe-area-inset-bottom":""}},[t._l(t.cell,(function(e){return["scan"===e.name?[a("van-tabbar-item",{key:e.name,staticClass:"scan"},[a("div",{staticClass:"scanBtn",attrs:{slot:"icon"},on:{click:t.handlerScan},slot:"icon"})])]:[e.available?a("van-tabbar-item",{key:e.name,class:{"van-tabbar-item--active":e.name===t.active},attrs:{icon:e.icon,name:e.name},on:{click:function(){t.$router.replace(e.to)}}},[t._v(" "+t._s(e.label)+" ")]):t._e()]]})),a("svg",{staticClass:"chatRoomBtn-svg",attrs:{viewBox:"0 0 750 98"}},[a("defs",[a("filter",{attrs:{id:"shadow",height:"200%",width:"200%",x:"0",y:"-100%"}},[a("feFlood",{attrs:{"flood-opacity":"0.15",result:"basic"}}),a("feComposite",{attrs:{in:"SourceAlpha",in2:"basic",operator:"in",result:"basic_color"}}),a("feGaussianBlur",{attrs:{in:"basic_color",result:"blur",stdDeviation:"10"}}),a("feOffset",{attrs:{dx:"0",dy:"0",in:"blur",result:"offsetBlur"}}),a("feMerge",[a("feMergeNode",{attrs:{in:"offsetBlur"}}),a("feMergeNode",{attrs:{in:"SourceGraphic"}})],1)],1)]),a("path",{attrs:{d:"M556,1296c33.1-.87,50.842-22.39,58-31,7.7-9.44,21.891-30.02,41.127-30,138.95,0.14,255.873,0,255.873,0a20,20,0,0,1,20,20v78H556m0,0H181v-78a20,20,0,0,1,20-20s116.923,0.14,255.873,0c19.236-.02,33.43,20.56,41.127,30,7.158,8.61,24.9,30.13,58,31",filter:"url(#shadow)",transform:"translate(-181 -1235)"}})]),a("div",{staticClass:"ios-safe-area-cover"}),a("van-popup",{staticClass:"sannerPopup",style:{height:"65%"},attrs:{"close-on-popstate":"","get-container":"body",position:"bottom",round:"","safe-area-inset-bottom":""},on:{close:t.handlerPopupClose},model:{value:t.showScanPop,callback:function(e){t.showScanPop=e},expression:"showScanPop"}},[t.showScanPop?[a("div",{staticClass:"scanArea"},[a("div",{attrs:{id:"reader"}})]),a("div",{staticClass:"btns"},[a("van-button",{staticClass:"start",attrs:{type:"primary"},on:{click:t.startScan}},[t._v(" "+t._s(t.scanning?"停止扫描":"开始扫描")+" ")]),a("van-button",{staticClass:"image",attrs:{type:"info"}},[t._v(" 扫描图片 "),a("input",{attrs:{id:"qr-input-file",accept:"image/*",type:"file"}})])],1)]:t._e()],2)],2)},r=[],c=a(62032),l=a(23796),u=(a(68309),a(26699),a(32023),a(14876)),h=(a(9653),a(29253),a(41539),a(54747),a(42960)),p=a(87043),f=a(37987),d=a(66742),m=(0,h.d)("tabbar"),v=m[0],b=m[1],g=v({mixins:[(0,d.G)("vanTabbar")],props:{route:Boolean,zIndex:[Number,String],placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,value:{type:[Number,String],default:0},border:{type:Boolean,default:!0},fixed:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:null}},data:function(){return{height:null}},computed:{fit:function(){return null!==this.safeAreaInsetBottom?this.safeAreaInsetBottom:this.fixed}},watch:{value:"setActiveItem",children:"setActiveItem"},mounted:function(){var t=this;if(this.placeholder&&this.fixed){var e=function(){t.height=t.$refs.tabbar.getBoundingClientRect().height};e(),setTimeout(e,100)}},methods:{setActiveItem:function(){var t=this;this.children.forEach((function(e,a){e.nameMatched=(e.name||a)===t.value}))},triggerChange:function(t,e){var a=this;(0,f.I)({interceptor:this.beforeChange,args:[t],done:function(){a.$emit("input",t),a.$emit("change",t),e()}})},genTabbar:function(){var t,e=this.$createElement;return e("div",{ref:"tabbar",style:{zIndex:this.zIndex},class:[(t={},t[p.r5]=this.border,t),b({unfit:!this.fit,fixed:this.fixed})]},[this.slots()])}},render:function(){var t=arguments[0];return this.placeholder&&this.fixed?t("div",{class:b("placeholder"),style:{height:this.height+"px"}},[this.genTabbar()]):this.genTabbar()}}),C=(a(69826),a(6885)),$=a(99402),y=a(81425),k=a(71911),_=a(2718),B=(0,h.d)("tabbar-item"),x=B[0],w=B[1],S=x({mixins:[(0,d.j)("vanTabbar")],props:(0,C.Z)({},y.g2,{dot:Boolean,icon:String,name:[Number,String],info:[Number,String],badge:[Number,String],iconPrefix:String}),data:function(){return{nameMatched:!1}},computed:{routeMatched:function(){var t=this.to,e=this.$route;if(t&&e){var a=(0,$.Kn)(t)?t:{path:t};return!!e.matched.find((function(t){var e=a.path===t.path,n=(0,$.Xq)(a.name)&&a.name===t.name;return e||n}))}},active:function(){return this.parent.route?this.routeMatched:this.nameMatched}},methods:{onClick:function(t){var e=this;this.active||this.parent.triggerChange(this.name||this.index,(function(){(0,y.BC)(e.$router,e)})),this.$emit("click",t)},genIcon:function(){var t=this.$createElement,e=this.slots("icon",{active:this.active});return e||(this.icon?t(k.Z,{attrs:{name:this.icon,classPrefix:this.iconPrefix}}):void 0)}},render:function(){var t,e=arguments[0],a=this.active,n=this.parent[a?"activeColor":"inactiveColor"];return e("div",{class:w({active:a}),style:{color:n},on:{click:this.onClick}},[e("div",{class:w("icon")},[this.genIcon(),e(_.Z,{attrs:{dot:this.dot,info:null!=(t=this.badge)?t:this.info}})]),e("div",{class:w("text")},[this.slots("default",{active:a})])])}}),P={name:"BottomBar",components:(n={},(0,l.Z)(n,g.name,g),(0,l.Z)(n,S.name,S),n),data:function(){return{active:"index",showScanPop:!1,scanning:!1}},computed:{display:function(){return this.$root.bottomBarDisplay},cell:function(){return[{name:"index",label:"首页",to:"/",alias:[],icon:"wap-home",available:!0},{name:"transaction",label:"挂单",to:"/transaction",alias:[],icon:"todo-list",available:!0},{name:"scan",label:"",to:"",alias:[],icon:"",available:!0},{name:"orders",label:"订单",to:"/orders",alias:[],icon:"bill",available:!0},{name:"payments",label:"管理",to:"/payments",alias:[],icon:"card",available:!0}]}},watch:{$route:{handler:function(t){var e,a=(0,c.Z)(this.cell);try{for(a.s();!(e=a.n()).done;){var n=e.value;if(n.to===t.path||n.alias.includes(t.path)){this.active=n.name;break}this.active=""}}catch(o){a.e(o)}finally{a.f()}},immediate:!0}},created:function(){this.$root.$on("root:close-app-scan-overlay",this.closeAppScanPopupOverlay)},methods:{closeAppScanPopupOverlay:function(){this.back&&this.back(),this.$root.app.appScanPopupOverlay=!1},handlerScan:function(){var t=this;this.$root.isH5Plus?(this.$root.app.appScanPopupOverlay=!0,this.back=window.h5p.startQrcodeScan((function(e){var a=JSON.parse(e);t.$root.app.appScanPopupOverlay=!1,a.status?t.$root.processQrcodeResult(a.result):t.$toast.fail("扫码失败！")}))):(this.showScanPop=!0,this.$nextTick((function(){t.scanImage()})))},handlerPopupClose:function(){var t=this;this.scanning=!1,this.$emit("close"),this.$nextTick((function(){return t.showScanPop=!1}))},startScan:function(){var t=this;this.scanning?this.$emit("triggle"):this.$nextTick((function(){u.t2.getCameras().then((function(e){try{if(e&&e.length>0){var a=e[e.length-1].id,n=new u.t2("reader");n.start({deviceId:{exact:a}},{fps:10,qrbox:{width:160,height:160}},(function(e,a){t.$root.processQrcodeResult(e),t.handlerPopupClose()}),(function(t){})).then((function(){t.scanning=!0})).catch((function(e){console.error(e),t.$toast.fail("系统错误，唤起扫描失败")})),t.$once("triggle",(function(){if(t.scanning)try{n&&n.stop()}catch(e){}t.scanning=!t.scanning})),t.$once("close",(function(){try{n&&n.stop()}catch(t){}})),t.$once("hook:beforeDestroy",(function(){try{n&&n.stop()}catch(t){}}))}else t.$toast.fail("未检测到摄像头！")}catch(o){console.log(o)}})).catch((function(e){console.error(e),t.$toast.fail("无法获取摄像头权限！")}))}))},scanImage:function(){var t=this,e=new u.t2("reader"),a=document.getElementById("qr-input-file");a.addEventListener("change",(function(a){if(0!=a.target.files.length){t.scanning=!1,t.$emit("close");var n=a.target.files[0];e.scanFile(n,!0).then((function(e){console.log(e),t.handlerPopupClose(),t.$root.processQrcodeResult(e)})).catch((function(t){console.log("Error scanning file. Reason: ".concat(t))}))}}))}}},I=P,M=a(1001),H=(0,M.Z)(I,s,r,!1,null,null,null),Z=H.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-nav-bar",{staticClass:"TopBar",class:{isHome:t.$route.meta.isHome},attrs:{border:!1,"z-index":11,"safe-area-inset-top":""},scopedSlots:t._u([{key:"left",fn:function(){return[t.btnMapping["left-back"]?a("div",{staticClass:"btn normal",on:{click:function(e){return t.$router.back(-1)}}},[a("van-icon",{staticClass:"icon",attrs:{name:"arrow-left"}})],1):t._e(),t.btnMapping["user-center"]?a("div",{staticClass:"btn",class:{home:t.$route.meta.isHome},on:{click:function(e){return t.$router.push("/user")}}},[a("van-image",{staticClass:"icon",attrs:{src:t.$root.getImageUrl(t.$root.userInfo.avatar),fit:"cover",round:""}},[a("div",{staticClass:"defaultAvatar size22",attrs:{slot:"error"},slot:"error"})]),t.$route.meta.isHome?a("span",{staticClass:"label"},[t._v(" 用户中心 ")]):t._e()],1):t._e(),t.btnMapping["help"]?a("div",{staticClass:"btn",class:{home:t.$route.meta.isHome},on:{click:function(e){return t.$router.push("/helps")}}},[a("van-icon",{staticClass:"icon",attrs:{name:"question-o"}}),t.$route.meta.isHome?a("span",{staticClass:"label"},[t._v(" 帮助 ")]):t._e()],1):t._e()]},proxy:!0},{key:"title",fn:function(){return[t._v(" "+t._s(t.$root.title||t.$route.name)+" ")]},proxy:!0},{key:"right",fn:function(){return[t.btnMapping["notices"]?a("div",{staticClass:"btn",class:{home:t.$route.meta.isHome},on:{click:function(e){return t.$router.push("/messages")}}},[a("van-icon",{staticClass:"icon",attrs:{badge:t.badge,name:"bell"}}),t.$route.meta.isHome?a("span",{staticClass:"label"},[t._v(" 消息通知 ")]):t._e()],1):t._e(),t.btnMapping["customer-service"]?a("div",{staticClass:"btn",class:{home:t.$route.meta.isHome},on:{click:t.$root.openCustomerService}},[a("van-icon",{staticClass:"icon",attrs:{name:"service-o"}}),t.$route.meta.isHome?a("span",{staticClass:"label"},[t._v(" 客服 ")]):t._e()],1):t._e(),t.btnMapping["time-picker"]?a("div",{staticClass:"btn time-picker",on:{click:t.timePickerConf.onClick}},[a("span",{staticClass:"label"},[t._v(" "+t._s(t.timePickerConf.label)+" ")]),a("van-icon",{attrs:{name:t.timePickerConf.down?"arrow-down":"arrow-up"}})],1):t._e(),t.btnMapping["custom-btn"]?a("div",{staticClass:"btn custom-btn",on:{click:t.customBtnConf.onClick}},[a("span",{staticClass:"label"},[t._v(" "+t._s(t.customBtnConf.label)+" ")])]):t._e()]},proxy:!0}])})},A=[],E=a(4367),N=a(51197),z={name:"TopBar",components:(0,l.Z)({},N.Z.name,N.Z),computed:{btnMapping:function(){return this.$root.topIncludes.reduce((function(t,e){return(0,E.Z)((0,E.Z)({},t),{},(0,l.Z)({},e,!0))}),{})},timePickerConf:function(){return this.$root.topConfig||{down:!0,label:"今天",onClick:function(){return{}}}},customBtnConf:function(){return this.$root.topConfig||{label:"Custom",onClick:function(){return{}}}},badge:function(){return this.$root.unreadMessages>99?"99+":this.$root.unreadMessages||""}}},O=z,R=(0,M.Z)(O,T,A,!1,null,null,null),q=R.exports,D={components:{BottomBar:Z,TopBar:q}},G=D,Q=(0,M.Z)(G,o,i,!1,null,null,null),F=Q.exports}}]);