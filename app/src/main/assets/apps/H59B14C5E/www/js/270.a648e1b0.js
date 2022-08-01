"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[270],{24270:function(t,r,e){e.r(r),e.d(r,{default:function(){return p}});var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"page page-buy"},[e("div",{staticClass:"top-wrapper"},[e("div",{staticClass:"merchant",class:{split:!!t.orderInfo.isSplit}},[e("div",{staticClass:"left"},[e("van-image",{staticClass:"avatar",attrs:{src:t.$root.getImageUrl(t.orderInfo.sellerAvatar),round:""}},[e("div",{staticClass:"defaultAvatar size45",attrs:{slot:"error"},slot:"error"})]),e("div",{staticClass:"name"},[t._v(t._s(t.orderInfo.sellerNickname))])],1),e("div",{staticClass:"right"},[e("div",{staticClass:"label"},[t._v("可购买总额（V币）")]),e("div",{staticClass:"amount"},[t._v(t._s(t.orderInfo.validAmount))])])])]),e("van-form",{on:{submit:t.onSubmit}},[e("van-field",{attrs:{autocomplete:"new-password",type:"number",label:"购买数量：",readonly:!t.orderInfo.isSplit,placeholder:t.orderInfo.minBuyEach+"～"+t.orderInfo.validAmount+"/V币"},model:{value:t.form.amount,callback:function(r){t.$set(t.form,"amount",r)},expression:"form.amount"}}),e("van-cell",{staticClass:"payment",attrs:{title:"支付方式："}},[e("van-radio-group",{model:{value:t.form.paymentType,callback:function(r){t.$set(t.form,"paymentType",r)},expression:"form.paymentType"}},t._l(t.payments,(function(r,n){return e("van-radio",{key:n,staticClass:"btn",attrs:{disabled:!t.$root.validPayments[r],name:r}},[e("van-button",{staticClass:"btn",attrs:{slot:"icon","native-type":"button"},slot:"icon"},[e("span",{staticClass:"item",class:"pay"+r}),t._v(" "+t._s(t._f("paymentMethod")(r,"content"))+" ")])],1)})),1)],1),e("van-cell",[e("van-radio-group",{model:{value:t.form.buyerPaymentTypeId,callback:function(r){t.$set(t.form,"buyerPaymentTypeId",r)},expression:"form.buyerPaymentTypeId"}},t._l(t.paymentChannel,(function(r,n){return e("van-cell",{key:n,staticClass:"paymentChannel",attrs:{title:t.form.paymentType===t.PAYMENT_METHOD.BANK?t.bankIdMappingName[r.bankId]:r.account,value:(r.bankNo||"").replace(/^\d+(\d{4})$/g,(function(t,r){return"**** **** **** "+r}))},on:{click:function(e){t.form.buyerPaymentTypeId=r.id}},scopedSlots:t._u([{key:"right-icon",fn:function(){return[e("van-radio",{attrs:{name:r.id}})]},proxy:!0}],null,!0)})})),1)],1),e("van-button",{staticClass:"primary block",attrs:{"native-type":"submit"}},[t._v(" 确定购买 ")]),e("p",{staticClass:"tip"},[t._v("确认购买后如未自动跳转请到交易记录中查看我的买单")])],1)],1)},a=[],o=e(23796),i=e(4367),u=e(75200),s=(e(69826),e(41539),e(21249),e(69720),e(39714),e(74916),e(15306),e(54747),e(75628)),d=e(21380),l={data:function(){return{PAYMENT_METHOD:s.hL,form:{amount:"",buyerPaymentTypeId:"",paymentType:""},orderInfo:{}}},computed:{payments:function(){return this.$root.parsePayments(this.orderInfo.paymentType)},paymentChannel:function(){var t=this;return(Object.entries(this.$root.payments).map((function(t){var r=(0,u.Z)(t,2),e=(r[0],r[1]);return e})).find((function(r){return r.type===t.form.paymentType}))||{}).list||[]},bankIdMappingName:function(){return this.$root.banks.reduce((function(t,r){return(0,i.Z)((0,i.Z)({},t),{},(0,o.Z)({},r.bankId,r.bankName))}),{})}},created:function(){this.loadOrderInfo(this.$route.params.id),this.$root.$emit("root:set-topbar",["left-back","customer-service"])},methods:{onSubmit:function(){var t=this;return this.form.amount?this.form.amount.toNumber()<this.orderInfo.minBuyEach.toNumber()?this.$toast.fail("购买数额不得小于最低可购买额".concat(this.orderInfo.minBuyEach)):this.form.amount.toNumber()>this.orderInfo.validAmount.toNumber()?this.$toast.fail("购买数额不得大于最高可购买额".concat(this.orderInfo.minBuyEach)):this.form.paymentType?this.form.buyerPaymentTypeId?void(0,d.an)(this.$root.$tls.processParams({pendingOrderId:this.orderInfo.pendingOrderId.toString(),amount:this.form.amount.toNumber(),buyerPaymentTypeId:this.form.buyerPaymentTypeId.toString(),paymentType:this.form.paymentType.toString()},["float","shake"])).then((function(r){var e=r.ok,n=r.data,a=r.msg;e?t.$router.replace("/transaction_buy/".concat(n.orderId)):t.$toast.fail(a)})):this.$toast.fail("请选择支付账号"):this.$toast.fail("请选择支付方式"):this.$toast.fail("请输入购买数额")},loadOrderInfo:function(t){var r=this;(0,d.Hn)({pendingOrderId:t}).then((function(t){var e=t.ok,n=t.msg,a=t.data;if(e){a.isSplit||(r.form.amount=a.validAmount),r.orderInfo=a;var o=function(){r.payments.forEach((function(t){r.$root.validPayments[t]&&(r.form.paymentType=t)})),r.form.paymentType||r.warnning()};r.$root.isBindAnyPayment?o():r.$root.loadPayments().then((function(t){var r=t.ok;return r&&o()}))}else r.$toast.fail(n)}))},warnning:function(){var t=this;this.$dialog.confirm({message:"您还未绑定该支付方式的支付账号,请绑定对应支付账号后再选择该支付方式",confirmButtonText:"去绑定",showCancelButton:!0,beforeClose:function(r,e){"confirm"===r&&t.$router.replace("/add_payment"),e()}})}}},c=l,m=e(1001),f=(0,m.Z)(c,n,a,!1,null,null,null),p=f.exports},21380:function(t,r,e){e.d(r,{$Z:function(){return s},$i:function(){return u},CI:function(){return y},Ej:function(){return v},Hn:function(){return l},N8:function(){return h},R9:function(){return k},T7:function(){return g},XW:function(){return O},_H:function(){return a},_d:function(){return b},an:function(){return f},cf:function(){return m},dF:function(){return c},fW:function(){return d},l$:function(){return T},uF:function(){return o},v1:function(){return i},vi:function(){return p},y6:function(){return P}});var n=e(51922),a=function(t){return(0,n.q)({url:"/Api/Market/PendingOrder/marketPendingOrderList",method:"POST",data:t})},o=function(t){return(0,n.q)({url:"/Api/Market/Order/myOrderList",method:"GET",data:t})},i=function(t){return(0,n.q)({url:"/Api/Market/Sell/index",method:"POST",data:t})},u=function(t){return(0,n.q)({url:"/Api/Market/Sell/recycle",method:"POST",data:t})},s=function(t){return(0,n.q)({url:"Api/Market/PendingOrder/myPendingOrderList",method:"POST",data:t})},d=function(t){return(0,n.q)({url:"/Api/Market/Order/myOrderDetail",method:"GET",data:t})},l=function(t){return(0,n.q)({url:"/Api/Market/PendingOrder/marketPendingOrderDetail",method:"POST",data:t})},c=function(t){return(0,n.q)({url:"/Api/Market/Order/getCurrentOrderStatus",method:"GET",data:t})},m=function(t){return(0,n.q)({url:"/Api/Market/PendingOrder/myPendingOrderDetail",method:"GET",data:t})},f=function(t){return(0,n.q)({url:"/Api/Market/Order/buyerCreatesOrder",method:"POST",data:t})},p=function(t){return(0,n.q)({url:"/Api/Market/PendingOrder/getOrderListByPendingOrder",method:"GET",data:t})},y=function(t){return(0,n.q)({url:"/Api/Market/Order/sellerRefusesToCreateOrder",method:"POST",data:t})},h=function(t){return(0,n.q)({url:"/Api/Market/Order/sellerConfirmsToCreateOrder",method:"POST",data:t})},v=function(t){return(0,n.q)({url:"/Api/Market/Order/sellerHasNotReceivedPayment",method:"POST",data:t})},O=function(t){return(0,n.q)({url:"/Api/Market/Order/sellerCompletesOrder",method:"POST",data:t})},b=function(t){return(0,n.q)({url:"/Api/Market/Order/buyerCancelsOrder",method:"POST",data:t})},T=function(t){return(0,n.q)({url:"/Api/Market/Order/buyerConfirmsOrderHasBeenPaid",method:"POST",data:t})},k=function(t){return(0,n.q)({url:"/Api/Market/Order/buyerAppeals",method:"POST",data:t})},P=function(t){return(0,n.q)({url:"/Api/Market/Order/getCancelsOrderDailyCount",method:"GET",data:t})},g=function(t){return(0,n.q)({url:"/Api/User/TransferOrder/userDeposit",method:"POST",data:t})}}}]);