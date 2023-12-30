"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[5788],{85788:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n,a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page page-pay_order"},[r("div",{staticClass:"orderNumber"},[e._v("订单编号："+e._s(e.$route.query.orderNo))]),r("div",{staticClass:"amountBox"},[r("div",{staticClass:"amount"},[e._v(e._s(e.$route.query.amount))]),r("div",{staticClass:"amount-icon"})]),r("div",{staticClass:"tip"},[e._v("支付金额(V币)")]),r("div",{staticClass:"password"},[r("div",{staticClass:"label"},[e._v("支付密码")]),r("div",[r("van-password-input",{attrs:{focused:e.showKeyboard,value:e.value},on:{focus:function(t){e.showKeyboard=!0}}})],1)]),r("van-button",{staticClass:"primary block",attrs:{loading:e.payLoading,"loading-text":"请求支付中..."},on:{click:e.pay}},[e._v(" 支付 ")]),r("van-number-keyboard",{staticClass:"safetyKeyboard",attrs:{show:e.showKeyboard,"close-button-text":"完成","safe-area-inset-bottom":"",title:"支付安全键盘"},on:{blur:function(t){e.showKeyboard=!1}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},o=[],s=r(39873),u=r(7067),i=(r(83040),r(68309),r(74916),r(15306),r(53045)),c=r(93126),l=r(78396),d=r(39766),f={components:(n={},(0,u.Z)(n,c.Z.name,c.Z),(0,u.Z)(n,l.Z.name,l.Z),n),data:function(){return{value:"",showKeyboard:!1,payLoading:!1}},created:function(){this.$root.$emit("root:set-topbar",["left-back"])},methods:{pay:function(){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.payLoading){t.next=2;break}return t.abrupt("return");case 2:if(!(e.value.length<6)){t.next=4;break}return t.abrupt("return",e.$toast.fail("请输入6位数字密码"));case 4:return t.next=6,(0,d.D)(e);case 6:if(r=t.sent,r){t.next=9;break}return t.abrupt("return");case 9:return e.payLoading=!0,t.prev=10,t.next=13,(0,i.T7)({orderNo:e.$route.query.orderNo,securePassword:e.value});case 13:n=t.sent,a=n.ok,o=n.msg,a?(e.$toast.success(o),e.$root.fetchUserInfo(),e.$router.replace("/")):e.$toast.fail(o),t.next=22;break;case 19:t.prev=19,t.t0=t["catch"](10),window.alert(t.t0);case 22:return t.prev=22,e.payLoading=!1,t.finish(22);case 25:case"end":return t.stop()}}),t,null,[[10,19,22,25]])})))()}}},p=f,v=r(1001),b=(0,v.Z)(p,a,o,!1,null,null,null),m=b.exports},39766:function(e,t,r){r.d(t,{D:function(){return s},x:function(){return o}});var n=r(39873),a=(r(83040),r(41539),r(32564),r(53045)),o=function(e){return e.$toast("请输入资金密码"),new Promise((function(t,r){e.$root.showPassowordKeyboard=!0,e.$root.$once("root:global-password",function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",t(r));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))},s=function(e){return e.$root.userInfo&&e.$root.userInfo.isGoogleAuthenticator?(e.$toast("请输入Google安全码"),new Promise((function(t,r){setTimeout((function(){e.$root.showPassowordKeyboard=!0,e.$root.$once("root:global-password",function(){var r=(0,n.Z)(regeneratorRuntime.mark((function r(n){var o,s,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n&&"close-by-route-change"!==n){r.next=2;break}return r.abrupt("return",t(!1));case 2:return r.next=4,(0,a.Wg)({safeCode:n});case 4:o=r.sent,s=o.ok,u=o.msg,s?t(!0):(t(!1),e.$toast.fail(u));case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}),0)}))):Promise.resolve(!0)}}}]);
//# sourceMappingURL=5788.e2d8a113.js.map