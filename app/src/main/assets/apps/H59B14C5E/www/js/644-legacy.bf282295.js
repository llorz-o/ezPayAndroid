"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[644],{40644:function(t,a,s){s.r(a),s.d(a,{default:function(){return d}});var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page graybg page-payments"},[s("div",{staticClass:"bankCardsWrapper"},[s("div",{staticClass:"bankCards"},[s("div",{staticClass:"title",on:{click:function(a){return t.$router.push("/banks")}}},[s("span",{staticClass:"label"},[t._v(" 银行卡支付 ")]),t.bank.list.length?s("span",{staticClass:"count"},[t._v(" 全部 （"+t._s(t.bank.list.length)+"） ")]):t._e()]),t.bank.list.length?s("div",{staticClass:"cards"},[t._l(t.bank.list,(function(a,n){return[n<2?s("div",{key:n,class:"card bg"+n},[s("van-image",{attrs:{round:"",src:t.$root.cdnUrl+a.logoImg}}),s("div",{staticClass:"bankInfo"},[s("div",{staticClass:"top"},[s("span",{staticClass:"bankName"},[t._v(" "+t._s(t.bankIdMappingName[a.bankId])+" ")]),s("span",{staticClass:"bankNum"},[t._v(" ****"+t._s(a.bankNo.slice(-4))+" ")])]),s("div",{staticClass:"bankStatus"},[t._v("可转账")])])],1):t._e()]}))],2):[s("div",{staticClass:"bank-empty"}),s("div",{staticClass:"empty-tip"},[t._v("你还未绑定银行卡")])]],2)]),s("div",{staticClass:"payment"},[s("div",{staticClass:"title border_bottom_1px",on:{click:function(a){return t.$router.push("/wechats")}}},[s("span",{staticClass:"icon wechat"}),s("span",{staticClass:"label"},[t._v(" 微信支付 ")]),t.wechat.list.length?s("span",{staticClass:"count"},[t._v(" 全部 （"+t._s(t.wechat.list.length)+"） ")]):s("span",{staticClass:"count"},[t._v(" 未绑定 ")]),s("van-icon",{attrs:{name:"arrow"}})],1),t._l(t.wechat.list,(function(a,n){return[0==n?s("div",{key:n,staticClass:"paymentCard"},[s("div",{staticClass:"icon wechat"}),s("div",{staticClass:"info"},[s("div",[t._v("微信账号："+t._s(a.account))]),s("div",[t._v("姓名："+t._s(a.realName))])]),s("van-image",{staticClass:"qr",attrs:{src:t.$root.getImageUrl(a.receiptCode)}})],1):t._e()]}))],2),s("div",{staticClass:"payment"},[s("div",{staticClass:"title border_bottom_1px",on:{click:function(a){return t.$router.push("/alipays")}}},[s("span",{staticClass:"icon ali"}),s("span",{staticClass:"label"},[t._v(" 支付宝支付 ")]),t.ali.list.length?s("span",{staticClass:"count"},[t._v(" 全部 （"+t._s(t.ali.list.length)+"） ")]):s("span",{staticClass:"count"},[t._v(" 未绑定 ")]),s("van-icon",{attrs:{name:"arrow"}})],1),t._l(t.ali.list,(function(a,n){return[0==n?s("div",{key:n,staticClass:"paymentCard"},[s("div",{staticClass:"icon ali"}),s("div",{staticClass:"info"},[s("div",[t._v("支付宝账号："+t._s(a.account))]),s("div",[t._v("姓名："+t._s(a.realName))])]),s("van-image",{staticClass:"qr",attrs:{src:t.$root.getImageUrl(a.receiptCode)}})],1):t._e()]}))],2),s("van-button",{staticClass:"block primary",on:{click:function(a){return t.$router.push("/add_payment")}}},[s("van-icon",{attrs:{name:"add"}}),t._v(" 绑定银行卡/支付宝/微信 ")],1)],1)},i=[],e=s(23796),c=s(4367),l=(s(41539),{computed:{bank:function(){return this.$root.payments.bank},ali:function(){return this.$root.payments.ali},wechat:function(){return this.$root.payments.wechat},bankIdMappingName:function(){return this.$root.banks.reduce((function(t,a){return(0,c.Z)((0,c.Z)({},t),{},(0,e.Z)({},a.bankId,a.bankName))}),{})}},created:function(){this.$root.updateUnReadCount(),this.$root.loadPayments(),this.$root.$emit("root:set-topbar",["notices","customer-service"]),this.$root.$emit("root:set-layout",{bottom:!0})},methods:{}}),r=l,o=s(1001),u=(0,o.Z)(r,n,i,!1,null,null,null),d=u.exports}}]);