"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[962],{2962:function(t,a,e){e.r(a),e.d(a,{default:function(){return o}});var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page page-virtual-account"},[e("div",{staticClass:"titles"},[e("div",{staticClass:"num"},[t._v(" 我的微信支付 "),e("span",{staticClass:"secondary"},[t._v(" （共"+t._s(t.wechat.list.length)+"张） ")])]),e("van-button",{attrs:{icon:"plus","icon-position":"left",to:"/add_payment/4",replace:""}},[t._v(" 添加微信 ")])],1),e("div",{staticClass:"collection"},t._l(t.wechat.list,(function(a,s){return e("div",{key:s,staticClass:"paymentCard"},[e("div",{staticClass:"icon wechat"}),e("div",{staticClass:"info"},[e("div",[t._v("姓名："+t._s(t._f("safeRealName")(a.realName)))])]),e("van-image",{staticClass:"qr",attrs:{src:t.$root.getImageUrl(a.receiptCode)}})],1)})),0)])},i=[],c={computed:{wechat:function(){return this.$root.payments.wechat}},created:function(){this.$root.$emit("root:set-topbar",["left-back","notices","customer-service"])}},n=c,l=e(1001),r=(0,l.Z)(n,s,i,!1,null,null,null),o=r.exports}}]);