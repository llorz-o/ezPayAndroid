"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[146],{56146:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page page-virtual-account"},[n("div",{staticClass:"titles"},[n("div",{staticClass:"num"},[t._v(" 我的支付宝支付 "),n("span",{staticClass:"secondary"},[t._v(" （共"+t._s(t.ali.list.length)+"张） ")])]),n("van-button",{attrs:{icon:"plus","icon-position":"left",replace:"",to:"/add_payment/2"}},[t._v(" 添加支付宝 ")])],1),n("div",{staticClass:"collection"},t._l(t.ali.list,(function(e,r){return n("van-swipe-cell",{key:r,scopedSlots:t._u([{key:"right",fn:function(){return[n("van-button",{attrs:{square:"",text:"解绑",type:"danger"},on:{click:function(n){return t.unbind(e.id)}}})]},proxy:!0}],null,!0)},[n("div",{staticClass:"paymentCard"},[n("div",{staticClass:"icon ali"}),n("div",{staticClass:"info"},[n("div",[t._v("支付宝账号："+t._s(t._f("safeText")(e.alipayAccount)))]),n("div",[t._v("姓名："+t._s(t._f("safeRealName")(e.realName)))])]),n("van-image",{staticClass:"qr",attrs:{src:t.$root.getImageUrl(e.receiptCode)}})],1)])})),1)])},a=[],o=n(16198),s=(n(78975),n(13652)),i=n(35962),u={computed:{ali:function(){return this.$root.payments.ali}},created:function(){this.$root.$emit("root:set-topbar",["left-back","notices","customer-service"])},methods:{unbind:function(t){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function n(){var r,a,o,u,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,i.D)(e);case 2:if(r=n.sent,r){n.next=5;break}return n.abrupt("return");case 5:return n.next=7,verifySecuretedCode(e);case 7:if(a=n.sent,!a){n.next=15;break}return n.next=11,(0,s.k4)({id:t,securePassword:a});case 11:o=n.sent,u=o.ok,c=o.msg,u?e.$root.loadPayments():e.$toast.fail(c);case 15:case"end":return n.stop()}}),n)})))()}}},c=u,l=n(1001),f=(0,l.Z)(c,r,a,!1,null,null,null),p=f.exports},35962:function(t,e,n){n.d(e,{D:function(){return s},x:function(){return o}});var r=n(16198),a=(n(78975),n(41539),n(13652)),o=function(t){return t.$toast("请输入资金密码"),new Promise((function(e,n){t.$root.showPassowordKeyboard=!0,t.$root.$once("root:global-password",function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e(n));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}))},s=function(t){return t.$root.userInfo&&t.$root.userInfo.isGoogleAuthenticator?(t.$toast("请输入Google安全码"),new Promise((function(e,n){setTimeout((function(){t.$root.showPassowordKeyboard=!0,t.$root.$once("root:global-password",function(){var n=(0,r.Z)(regeneratorRuntime.mark((function n(r){var o,s,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r){n.next=2;break}return n.abrupt("return",e(!1));case 2:return n.next=4,(0,a.Wg)({safeCode:r});case 4:o=n.sent,s=o.ok,i=o.msg,s?e(!0):(e(!1),t.$toast.fail(i));case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())}),0)}))):Promise.resolve(!0)}}}]);