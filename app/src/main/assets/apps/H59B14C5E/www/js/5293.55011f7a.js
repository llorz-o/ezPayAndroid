"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[5293],{25293:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page page-virtual-account"},[r("div",{staticClass:"titles"},[r("div",{staticClass:"num"},[t._v(" 我的USDT地址 "),r("span",{staticClass:"secondary"},[t._v(" （共"+t._s(t.usdt.list.length)+"张） ")])]),r("van-button",{attrs:{icon:"plus","icon-position":"left",replace:"",to:"/add_payment/8"+(t.isMerchant?"?m=1":"")}},[t._v(" 添加USDT地址 ")])],1),r("div",{staticClass:"collection"},t._l(t.usdt.list,(function(e,n){return r("van-swipe-cell",{key:n,scopedSlots:t._u([{key:"right",fn:function(){return[r("van-button",{attrs:{square:"",text:"解绑",type:"danger"},on:{click:function(r){return t.unbind(e.id)}}})]},proxy:!0}],null,!0)},[r("div",{staticClass:"paymentCard"},[r("div",{staticClass:"icon usdt"}),r("div",{staticClass:"info"},[r("div",[t._v("USDT收款地址："+t._s(t._f("safeText")(e.usdtAddress)))]),r("div",[t._v("姓名："+t._s(t._f("safeRealName")(e.realName)))])])])])})),1)])},o=[],s=r(39873),a=(r(83040),r(53045)),u=r(39766),i=r(89828),c={mixins:[i.mi],computed:{usdt:function(){return this.payments.usdt}},created:function(){this.$root.$emit("root:set-topbar",["left-back","notices","customer-service"])},methods:{unbind:function(t){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function r(){var n,o,s,i,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,(0,u.D)(e);case 2:if(n=r.sent,n){r.next=5;break}return r.abrupt("return");case 5:return r.next=7,(0,u.x)(e);case 7:if(o=r.sent,!o||6!==o.length){r.next=15;break}return r.next=11,(0,a.k4)({id:t,securePassword:o});case 11:s=r.sent,i=s.ok,c=s.msg,i?e.$root.loadPayments():e.$toast.fail(c);case 15:case"end":return r.stop()}}),r)})))()}}},d=c,p=r(1001),f=(0,p.Z)(d,n,o,!1,null,null,null),m=f.exports},39766:function(t,e,r){r.d(e,{D:function(){return a},x:function(){return s}});var n=r(39873),o=(r(83040),r(41539),r(32564),r(53045)),s=function(t){return t.$toast("请输入资金密码"),new Promise((function(e,r){t.$root.showPassowordKeyboard=!0,t.$root.$once("root:global-password",function(){var t=(0,n.Z)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e(r));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}))},a=function(t){return t.$root.userInfo&&t.$root.userInfo.isGoogleAuthenticator?(t.$toast("请输入Google安全码"),new Promise((function(e,r){setTimeout((function(){t.$root.showPassowordKeyboard=!0,t.$root.$once("root:global-password",function(){var r=(0,n.Z)(regeneratorRuntime.mark((function r(n){var s,a,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n&&"close-by-route-change"!==n){r.next=2;break}return r.abrupt("return",e(!1));case 2:return r.next=4,(0,o.Wg)({safeCode:n});case 4:s=r.sent,a=s.ok,u=s.msg,a?e(!0):(e(!1),t.$toast.fail(u));case 8:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())}),0)}))):Promise.resolve(!0)}},89828:function(t,e,r){r.d(e,{RY:function(){return d},VM:function(){return p},fN:function(){return c},mi:function(){return f}});var n=r(49749),o=r(52336),s=r(39873),a=(r(56977),r(54678),r(32564),r(83040),r(12879)),u=r(75461),i=["ok","data","msg"],c={data:function(){return{cryptoAccountInfo:{address:"",otcTicker:""}}},methods:{businessGetAccountInfo:function(t){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function r(){var s,u,c,d,p;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,(0,a.bb)({type:t});case 2:return s=r.sent,u=s.ok,c=s.data,d=s.msg,p=(0,o.Z)(s,i),u?(e.cryptoAccountInfo=c,e.updateQRcode()):e.$toast(d),r.abrupt("return",(0,n.Z)({ok:u,data:c,msg:d},p));case 9:case"end":return r.stop()}}),r)})))()},updateQRcode:function(t){u.toDataURL(t||this.cryptoAccountInfo.address).then((function(t){var e=document.querySelector(".QRcode");e&&e.setAttribute("src",t)}))}}},d={computed:{isCryptoMerchant:function(){return"1"===this.$route.query.m},amICryptoMerchant:function(){return 1===this.$root.userInfo.BusinessStatus},ApiPath:function(){return this.isCryptoMerchant?"Business":""},BuyerApiPath:function(){return this.isCryptoMerchant&&this.amICryptoMerchant?"Business":""}}},p={data:function(){return{countdown:0,orderType:"TronDeposit",form:{paymentType:"",amount:""},orderInfo:{userId:null,paymentType:"",amount:"",passageType:"",receivingAddress:"",copeAmount:0,createDate:"",status:"",createTime:"",updateTime:"",orderId:0,orderNo:""}}},computed:{isTrading:function(){return!!this.orderInfo.orderId}},created:function(){this.getDepositDetail(this.isBuyVb)},methods:{getDepositDetail:function(){var t=arguments,e=this;return(0,s.Z)(regeneratorRuntime.mark((function r(){var n,o,s,u,i,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.length>0&&void 0!==t[0]&&t[0],r.next=3,(0,a.IA)({orderType:e.orderType});case 3:o=r.sent,s=o.ok,u=o.data,i=o.msg,s?u&&(e.$set(e,"orderInfo",u.order),e.form.amount=n?u.order.amount:u.order.copeAmount,e.form.paymentType=u.order.paymentType,e.cryptoAccountInfo.address=u.order.receivingAddress,e.cryptoAccountInfo.otcTicker=parseFloat(String(u.order.amount/u.order.copeAmount)).toFixed(2),e.updateQRcode(),u.currentStateExpireTime&&(u.currentStateExpireTime.expire?(e.countdown=1e3*u.currentStateExpireTime.expire-e.$root.getServerTime(),e.countdown>0&&(c=setTimeout((function(){return e.getDepositDetail(n)}),5e3),e.$once("hook:beforeDestroy",(function(){return clearTimeout(c)})))):e.countdown=0)):e.$toast(i);case 8:case"end":return r.stop()}}),r)})))()}}},f={computed:{isMerchant:function(){return"1"===this.$route.query.m||"merchant"===this.$route.params.type},hideAlipayWechat:function(){return this.isMerchant&&!this.$root.isMerchantAlipayWechatOpen},hideAlipayWechatAtMerchantPage:function(){return!this.$root.isMerchantAlipayWechatOpen},payments:function(){return this.isMerchant?this.$root.merchantPayments:this.$root.payments}}}}}]);
//# sourceMappingURL=5293.55011f7a.js.map