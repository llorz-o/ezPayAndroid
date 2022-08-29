"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[848],{62034:function(t,e,r){r.d(e,{Z:function(){return u}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"level"},t._l(5,(function(e){var n;return r("div",{key:e,staticClass:"grade mini",class:(n={},n["g"+t.largeLevel+((5==e?0==t.levelModel:t.levelModel>=e||0==t.levelModel)?"l":"")]=!0,n)})})),0)},a=[],i=(r(9653),{name:"Level",props:{level:{type:Number,default:1}},computed:{levelModel:function(){return this.level%5},largeLevel:function(){return this.levelModel>=1?(this.level-this.levelModel)/5+1:this.level/5}}}),o=i,s=r(1001),l=(0,s.Z)(o,n,a,!1,null,null,null),u=l.exports},29514:function(t,e,r){r.d(e,{Z:function(){return u}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"virtual-payment"},[r("div",{staticClass:"icon",class:t.type}),r("div",{staticClass:"info"},[r("div",[t._v("姓名："+t._s(t._f("safeRealName")(t.realName)))])]),r("van-image",{staticClass:"qr",attrs:{src:t.$root.getImageUrl(t.receiptCode)}})],1)},a=[],i={name:"VirtualPayment",props:{type:String,realName:String,receiptCode:String}},o=i,s=r(1001),l=(0,s.Z)(o,n,a,!1,null,null,null),u=l.exports},40848:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page page-sale"},[r("div",{staticClass:"top-wrapper"},[r("div",{staticClass:"merchant"},[r("div",{staticClass:"left"},[r("van-image",{staticClass:"avatar",attrs:{src:t.$root.getImageUrl(t.$root.userInfo.avatar),round:"",fit:"cover"}}),r("div",{staticClass:"seller-info"},[r("div",{staticClass:"name"},[t._v(t._s(t.$root.userInfo.nickname))]),r("Level",{attrs:{level:this.$root.userInfo.creditLevel}})],1)],1),r("div",{staticClass:"right"},[r("div",{staticClass:"label"},[t._v("可出售总额（V币）")]),r("div",{staticClass:"amount"},[t._v(" "+t._s(parseFloat(t.$root.userInfo.validSellBalance).toFixed(2))+" ")])])])]),r("van-form",{on:{submit:t.handlerSubmit}},[r("van-field",{attrs:{autocomplete:"new-password",type:"number",label:"出售数量：",placeholder:"最低出售数量为10/V币"},model:{value:t.form.amount,callback:function(e){t.$set(t.form,"amount",e)},expression:"form.amount"}}),t.form.isSplit?r("van-field",{attrs:{autocomplete:"new-password",type:"number",label:"最低购买：",placeholder:"请填写买家最低可购买数量"},model:{value:t.form.minBuyEach,callback:function(e){t.$set(t.form,"minBuyEach",e)},expression:"form.minBuyEach"}}):t._e(),r("van-collapse",{model:{value:t.form.paymentType,callback:function(e){t.$set(t.form,"paymentType",e)},expression:"form.paymentType"}},[r("van-checkbox-group",{model:{value:t.form.paymentType,callback:function(e){t.$set(t.form,"paymentType",e)},expression:"form.paymentType"}},[r("van-cell-group",{attrs:{title:"请选择收款方式"}},t._l(t.$root.payments,(function(e,n){return r("van-collapse-item",{key:n,staticClass:"payment",attrs:{title:0===e.list.length?"未绑定该收款方式":e.typeName,name:e.type,clickable:"",disabled:0===e.list.length},scopedSlots:t._u([{key:"icon",fn:function(){return[r("div",{staticClass:"payment-icon",class:n})]},proxy:!0},{key:"right-icon",fn:function(){return[r("van-checkbox",{attrs:{name:e.type,disabled:0===e.list.length,shape:"square"}})]},proxy:!0}],null,!0)},[r("van-radio-group",{model:{value:t.form.payments[n],callback:function(e){t.$set(t.form.payments,n,e)},expression:"form.payments[k]"}},[t._l(e.list,(function(a,i){return[e.type===t.PAYMENT_METHOD.BANK?[r("van-cell",{key:i,staticClass:"paymentChannel",attrs:{title:t.$root.banksIdMappingName[a.bankId],value:t._f("safeBankNumber")(a.bankNo),clickable:""},on:{click:function(e){t.form.payments[n]=a.id}},scopedSlots:t._u([{key:"right-icon",fn:function(){return[r("van-radio",{attrs:{name:a.id}})]},proxy:!0}],null,!0)})]:[r("VirtualPayment",t._b({key:i,attrs:{type:n}},"VirtualPayment",a,!1))]]}))],2)],1)})),1)],1)],1),r("van-cell-group",{staticClass:"split",attrs:{title:"是否拆分",border:!1}},[r("van-radio-group",{model:{value:t.form.isSplit,callback:function(e){t.$set(t.form,"isSplit",e)},expression:"form.isSplit"}},[r("van-radio",{staticClass:"btn",attrs:{name:1}},[r("div",{staticClass:"btn",attrs:{slot:"icon"},slot:"icon"},[t._v("可拆分")])]),r("van-radio",{staticClass:"btn",attrs:{name:0}},[r("div",{staticClass:"btn",attrs:{slot:"icon"},slot:"icon"},[t._v("不可拆分")])])],1)],1),r("van-button",{staticClass:"block primary",attrs:{"native-type":"submit"}},[t._v(" 发布挂单 ")])],1)],1)},a=[],i=r(75200),o=r(62032),s=(r(41539),r(70189),r(78783),r(33948),r(54747),r(47941),r(39714),r(69600),r(57327),r(21249),r(69720),r(9653),r(75628)),l=r(21380),u=r(62034),c=r(29514),m={components:{Level:u.Z,VirtualPayment:c.Z},data:function(){return{PAYMENT_METHOD:s.hL,collapse:"",form:{amount:"",minBuyEach:"",paymentType:[],isSplit:1,payments:{}}}},computed:{paymentsMappingIds:function(){var t={};for(var e in this.$root.payments){var r=this.$root.payments[e];t[r.type]=r.list}return t}},watch:{"form.paymentType":function(t,e){var r,n=new Set(e),a=(0,o.Z)(t);try{for(a.s();!(r=a.n()).done;){var i=r.value;if(!n.has(i)){this.form.payments[i===s.hL.BANK?"bank":i===s.hL.ALI?"ali":"wechat"]=this.paymentsMappingIds[i][0].id;break}}}catch(d){a.e(d)}finally{a.f()}var l,u=new Set(t),c=(0,o.Z)(e);try{for(c.s();!(l=c.n()).done;){var m=l.value;if(!u.has(m)){this.form.payments[m===s.hL.BANK?"bank":m===s.hL.ALI?"ali":"wechat"]="";break}}}catch(d){c.e(d)}finally{c.f()}},"form.isSplit":function(){this.form.minBuyEach=""}},created:function(){this.loadPayments(),this.$root.$emit("root:set-topbar",["left-back","customer-service"])},methods:{loadPayments:function(){var t=this,e=function(){Object.keys(t.$root.payments).forEach((function(e){t.$set(t.form.payments,e,"")}))};this.$root.isBindAnyPayment?e():this.$root.loadPayments().then((function(t){var r=t.ok;return r&&e()}))},handlerSubmit:function(){var t=this,e=Object.entries(this.form.payments).map((function(t){var e=(0,i.Z)(t,2),r=(e[0],e[1]);return r})).filter((function(t){return t>0})).join(",").toString();if(this.form.amount<10)return this.$toast.fail("最低出售量为10");if(this.form.amount>this.$root.validSellBalance)return this.$toast.fail("出售量不得高于可售数量");if(!e.length)return this.$toast.fail("请选择支付方式");var r=!0;return this.form.paymentType.forEach((function(e){return e===s.hL.BANK&&0===t.$root.payments.bank.list.length||e===s.hL.ALI&&0===t.$root.payments.ali.list.length||e===s.hL.WE_CHAT&&0===t.$root.payments.wechat.list.length?t.paymentVerifyFlag=!1:void 0})),r?this.form.isSplit&&!this.form.minBuyEach?this.$toast.fail("请输入最低购买数量"):this.form.isSplit&&this.form.minBuyEach.toNumber()>this.form.amount.toNumber()?this.$toast.fail("最低购买量不得高于出售量"):(this.$root.$emit("root:open-global-password"),void this.$root.$once("root:global-password",(function(r){r&&(0,l.v1)(t.$tls.processParams({amount:Number(t.form.amount),minBuyEach:Number(t.form.minBuyEach),paymentType:t.form.paymentType.reduce((function(t,e){return t+e}),0).toString(),paymentTypeId:e,isSplit:t.form.isSplit.toString(),maxBuyEach:Number(t.form.amount),sign:"",securePassword:r},["float","shake"])).then((function(e){var r=e.ok,n=(e.data,e.msg);r?(t.$root.fetchUserInfo(),t.$router.push("my_hang_orders")):t.$toast.fail(n)}))}))):this.$toast.fail("请选择支付账户")}}},d=m,f=r(1001),p=(0,f.Z)(d,n,a,!1,null,null,null),h=p.exports},21380:function(t,e,r){r.d(e,{$Z:function(){return l},$i:function(){return s},CI:function(){return h},Ej:function(){return v},Hn:function(){return c},N8:function(){return y},R9:function(){return O},T7:function(){return C},XW:function(){return k},_H:function(){return a},_d:function(){return b},an:function(){return f},cf:function(){return d},dF:function(){return m},fW:function(){return u},l$:function(){return g},uF:function(){return i},v1:function(){return o},vi:function(){return p},y6:function(){return $}});var n=r(51922),a=function(t){return(0,n.q)({url:"/Api/Market/PendingOrder/marketPendingOrderList",method:"POST",data:t})},i=function(t){return(0,n.q)({url:"/Api/Market/Order/myOrderList",method:"GET",data:t})},o=function(t){return(0,n.q)({url:"/Api/Market/Sell/index",method:"POST",data:t})},s=function(t){return(0,n.q)({url:"/Api/Market/Sell/recycle",method:"POST",data:t})},l=function(t){return(0,n.q)({url:"Api/Market/PendingOrder/myPendingOrderList",method:"POST",data:t})},u=function(t){return(0,n.q)({url:"/Api/Market/Order/myOrderDetail",method:"GET",data:t})},c=function(t){return(0,n.q)({url:"/Api/Market/PendingOrder/marketPendingOrderDetail",method:"POST",data:t})},m=function(t){return(0,n.q)({url:"/Api/Market/Order/getCurrentOrderStatus",method:"GET",data:t})},d=function(t){return(0,n.q)({url:"/Api/Market/PendingOrder/myPendingOrderDetail",method:"GET",data:t})},f=function(t){return(0,n.q)({url:"/Api/Market/Order/buyerCreatesOrder",method:"POST",data:t})},p=function(t){return(0,n.q)({url:"/Api/Market/PendingOrder/getOrderListByPendingOrder",method:"GET",data:t})},h=function(t){return(0,n.q)({url:"/Api/Market/Order/sellerRefusesToCreateOrder",method:"POST",data:t})},y=function(t){return(0,n.q)({url:"/Api/Market/Order/sellerConfirmsToCreateOrder",method:"POST",data:t})},v=function(t){return(0,n.q)({url:"/Api/Market/Order/sellerHasNotReceivedPayment",method:"POST",data:t})},k=function(t){return(0,n.q)({url:"/Api/Market/Order/sellerCompletesOrder",method:"POST",data:t})},b=function(t){return(0,n.q)({url:"/Api/Market/Order/buyerCancelsOrder",method:"POST",data:t})},g=function(t){return(0,n.q)({url:"/Api/Market/Order/buyerConfirmsOrderHasBeenPaid",method:"POST",data:t})},O=function(t){return(0,n.q)({url:"/Api/Market/Order/buyerAppeals",method:"POST",data:t})},$=function(t){return(0,n.q)({url:"/Api/Market/Order/getCancelsOrderDailyCount",method:"GET",data:t})},C=function(t){return(0,n.q)({url:"/Api/User/TransferOrder/userDeposit",method:"POST",data:t})}}}]);