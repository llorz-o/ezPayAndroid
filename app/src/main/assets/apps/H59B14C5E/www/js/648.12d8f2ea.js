"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[648],{32648:function(t,e,r){r.r(e),r.d(e,{default:function(){return g}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page graybg page-transaction"},[t._m(0),r("van-dropdown-menu",{staticClass:"border_bottom_1px"},[r("van-dropdown-item",{ref:"amount",attrs:{title:"金额"}},[r("van-cell",{attrs:{border:!1}},[r("van-field",{staticClass:"amount_field",attrs:{autocomplete:t.$root.getHash(),placeholder:"请输入总额"},scopedSlots:t._u([{key:"extra",fn:function(){return[r("span",[t._v(" V币 ")])]},proxy:!0}]),model:{value:t.query.amount,callback:function(e){t.$set(t.query,"amount",e)},expression:"query.amount"}})],1),r("van-cell",{staticClass:"btns"},[r("van-button",{staticClass:"cancel",attrs:{type:"danger"},on:{click:t.resetAmount}},[t._v(" 重置 ")]),r("van-button",{staticClass:"confirm",attrs:{type:"primary"},on:{click:function(e){return t.load("amount")}}},[t._v(" 确定 ")])],1)],1),r("van-dropdown-item",{ref:"payment_method",attrs:{title:"交易方式"}},[r("van-cell",{staticClass:"selections",attrs:{border:!1}},[r("van-checkbox-group",{model:{value:t.query.payment_method,callback:function(e){t.$set(t.query,"payment_method",e)},expression:"query.payment_method"}},[r("van-checkbox",{staticClass:"btn",attrs:{name:t.PAYMENT_METHOD.BANK}},[r("van-button",{staticClass:"btn",attrs:{slot:"icon"},on:{click:function(){return t.clearSelect("payment_method",t.PAYMENT_METHOD.BANK)}},slot:"icon"},[t._v(" 银行卡转账 ")])],1),r("van-checkbox",{staticClass:"btn",attrs:{name:t.PAYMENT_METHOD.WE_CHAT}},[r("van-button",{staticClass:"btn",attrs:{slot:"icon"},on:{click:function(){return t.clearSelect("payment_method",t.PAYMENT_METHOD.WE_CHAT)}},slot:"icon"},[t._v(" 微信转账 ")])],1),r("van-checkbox",{staticClass:"btn",attrs:{name:t.PAYMENT_METHOD.ALI}},[r("van-button",{staticClass:"btn",attrs:{slot:"icon"},on:{click:function(){return t.clearSelect("payment_method",t.PAYMENT_METHOD.ALI)}},slot:"icon"},[t._v(" 支付宝转账 ")])],1)],1)],1),r("van-cell",{staticClass:"btns"},[r("van-button",{staticClass:"cancel",attrs:{type:"danger"},on:{click:t.resetPaymentMethod}},[t._v(" 重置 ")]),r("van-button",{staticClass:"confirm",attrs:{type:"primary"},on:{click:function(e){return t.load("payment_method")}}},[t._v(" 确定 ")])],1),r("div",{staticClass:"tip"},[t._v("仅显示可用的交易方式")])],1),r("van-dropdown-item",{ref:"split_status",attrs:{title:"是否可拆分"}},[r("van-cell",{staticClass:"selections",attrs:{border:!1}},[r("van-radio-group",{on:{change:function(e){return t.onChange(e,"split_status")}},model:{value:t.query.split_status,callback:function(e){t.$set(t.query,"split_status",e)},expression:"query.split_status"}},[r("van-radio",{staticClass:"btn",attrs:{name:1}},[r("van-button",{staticClass:"btn",attrs:{slot:"icon"},on:{click:function(){return t.clearSelect("split_status",1,!0)}},slot:"icon"},[t._v(" 可拆分 ")])],1),r("van-radio",{staticClass:"btn",attrs:{name:0}},[r("van-button",{staticClass:"btn",attrs:{slot:"icon"},on:{click:function(){return t.clearSelect("split_status",0,!0)}},slot:"icon"},[t._v(" 不可拆分 ")])],1)],1)],1)],1)],1),r("van-list",{attrs:{error:t.error,finished:t.finished,"error-text":t.errorText,"finished-text":"暂无更多数据"},on:{"update:error":function(e){t.error=e},load:t.search},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(t,e){return r("TransactionItem",{key:e,attrs:{dt:t}})})),1)],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tip_card"},[r("div",{staticClass:"tips"},[r("h3",[t._v("交易须知")]),r("p",[t._v("1.交易过程中实时留意订单状态，十分钟内完成")]),r("p",[t._v("2.购买时，付款成功后立即上传成功截图并点击「我已转账」")]),r("p",[t._v("3.出售时务必确定收到款项再进行打币")]),r("p",[t._v("4.订单出现异议第一时间点击右上角申请人工介入")]),r("p",[t._v("5.未按规定操作，平台不承担任何责任")])])])}],s=r(68932),i=(r(41539),r(39714),r(74916),r(64765),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"transaction border_bottom_1px"},[r("van-image",{staticClass:"avatar",attrs:{src:t.$root.getImageUrl(t.dt.sellerAvatar),round:""}},[r("div",{staticClass:"defaultAvatar size40",attrs:{slot:"error"},slot:"error"})]),r("div",{staticClass:"amountBox"},[r("div",{staticClass:"amountLabel"},[t._v("数量")]),r("div",{staticClass:"amount"},[r("div",{staticClass:"val"},[t._v(" "+t._s(parseFloat(t.dt.validAmount).toFixed(0))+" ")]),r("div",{staticClass:"unit"},[t._v("V币")])])]),r("div",{staticClass:"payment-method"},t._l(t.payments,(function(t,e){return r("div",{key:e,staticClass:"item",class:"pay"+t})})),0),r("div",{staticClass:"split-status"},[t._v(" "+t._s(t._f("orderSplitStatus")(t.dt.isSplit,"content"))+" ")]),r("div",{staticClass:"btnWrapper"},["Member"!==t.dt.sellerType||t.dt.sellerId!==t.$root.userInfo.userId?r("van-button",{staticClass:"btn",attrs:{to:"/buy/"+t.dt.pendingOrderId}},[t._v(" 购买 ")]):t._e()],1)],1)}),o=[],u={name:"TransactionItem",props:{dt:{type:Object,default:function(){return{avatar:"",amount:"0",paymentType:1,isSplit:1}}}},computed:{payments:function(){return this.$root.parsePayments(this.dt.paymentType)}}},l=u,c=r(1001),d=(0,c.Z)(l,i,o,!1,null,"b49b82e8",null),p=d.exports,m=r(21380),f=r(75628),h=r(6163),v={components:{TransactionItem:p},data:function(){return{PAYMENT_METHOD:f.hL,query:{amount:"",payment_method:[],split_status:""},page:1,pageSize:20,list:[],loading:!1,error:!1,errorText:"加载失败，点击重试",finished:!1}},watch:{query:{deep:!0,handler:function(){this.page=1}}},created:function(){this.$root.updateUnReadCount(),this.$root.$emit("root:set-topbar",["notices","customer-service"]),this.$root.$emit("root:set-layout",{bottom:!0})},methods:{search:function(){var t=this;(0,m._H)(this.$tls.processParams({page:this.page.toString(),pageSize:this.pageSize.toString(),amount:this.$tls.isEmpty(this.query.amount)?"":this.query.amount.toNumber(),isSplit:this.query.split_status.toString(),paymentType:this.query.payment_method.reduce((function(t,e){return t+e}),0).toString()},["shake","float"])).then((function(e){var r=e.ok,n=e.data,a=e.msg;if(t.loading=!1,r){var i;if(1==t.page)t.list=n.list||[];else(i=t.list).push.apply(i,(0,s.Z)(n.list||[]));t.finished=t.page*t.pageSize>=n.total,t.page+=1}else t.error=!0,t.errorText=a}))},resetAmount:function(){this.page=1,this.query.amount="",this.search(),this.$refs.amount.toggle(!1)},resetPaymentMethod:function(){this.page=1,this.query.payment_method=[],this.search(),this.$refs.payment_method.toggle(!1)},clearSelect:function(t,e,r){var n=this,a=this.query[t];a===e&&setTimeout((function(){n.query[t]="",r&&(n.page=1,n.search(),n.$refs[t].toggle(!1))}),50)},load:function(t){this.$refs[t].toggle(!1),this.search()},onChange:function(t,e){h.ZP.isNumber(t)&&(this.page=1,this.search(),this.$refs[e].toggle(!1))}}},y=v,_=(0,c.Z)(y,n,a,!1,null,null,null),g=_.exports},21380:function(t,e,r){r.d(e,{$Z:function(){return u},$i:function(){return o},CI:function(){return h},Ej:function(){return y},Hn:function(){return c},N8:function(){return v},R9:function(){return O},T7:function(){return T},XW:function(){return _},_H:function(){return a},_d:function(){return g},an:function(){return m},cf:function(){return p},dF:function(){return d},fW:function(){return l},l$:function(){return b},uF:function(){return s},v1:function(){return i},vi:function(){return f},y6:function(){return C}});var n=r(51922),a=function(t){return(0,n.q)({url:"/Api/Market/PendingOrder/marketPendingOrderList",method:"POST",data:t})},s=function(t){return(0,n.q)({url:"/Api/Market/Order/myOrderList",method:"GET",data:t})},i=function(t){return(0,n.q)({url:"/Api/Market/Sell/index",method:"POST",data:t})},o=function(t){return(0,n.q)({url:"/Api/Market/Sell/recycle",method:"POST",data:t})},u=function(t){return(0,n.q)({url:"Api/Market/PendingOrder/myPendingOrderList",method:"POST",data:t})},l=function(t){return(0,n.q)({url:"/Api/Market/Order/myOrderDetail",method:"GET",data:t})},c=function(t){return(0,n.q)({url:"/Api/Market/PendingOrder/marketPendingOrderDetail",method:"POST",data:t})},d=function(t){return(0,n.q)({url:"/Api/Market/Order/getCurrentOrderStatus",method:"GET",data:t})},p=function(t){return(0,n.q)({url:"/Api/Market/PendingOrder/myPendingOrderDetail",method:"GET",data:t})},m=function(t){return(0,n.q)({url:"/Api/Market/Order/buyerCreatesOrder",method:"POST",data:t})},f=function(t){return(0,n.q)({url:"/Api/Market/PendingOrder/getOrderListByPendingOrder",method:"GET",data:t})},h=function(t){return(0,n.q)({url:"/Api/Market/Order/sellerRefusesToCreateOrder",method:"POST",data:t})},v=function(t){return(0,n.q)({url:"/Api/Market/Order/sellerConfirmsToCreateOrder",method:"POST",data:t})},y=function(t){return(0,n.q)({url:"/Api/Market/Order/sellerHasNotReceivedPayment",method:"POST",data:t})},_=function(t){return(0,n.q)({url:"/Api/Market/Order/sellerCompletesOrder",method:"POST",data:t})},g=function(t){return(0,n.q)({url:"/Api/Market/Order/buyerCancelsOrder",method:"POST",data:t})},b=function(t){return(0,n.q)({url:"/Api/Market/Order/buyerConfirmsOrderHasBeenPaid",method:"POST",data:t})},O=function(t){return(0,n.q)({url:"/Api/Market/Order/buyerAppeals",method:"POST",data:t})},C=function(t){return(0,n.q)({url:"/Api/Market/Order/getCancelsOrderDailyCount",method:"GET",data:t})},T=function(t){return(0,n.q)({url:"/Api/User/TransferOrder/userDeposit",method:"POST",data:t})}},68932:function(t,e,r){r.d(e,{Z:function(){return u}});var n=r(23748);function a(t){if(Array.isArray(t))return(0,n.Z)(t)}r(82526),r(41817),r(41539),r(32165),r(78783),r(33948),r(91038);function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var i=r(48936);r(21703);function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return a(t)||s(t)||(0,i.Z)(t)||o()}}}]);