"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[276],{39276:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page graybg page-my_hang_orders"},[n("van-dropdown-menu",{staticClass:"border_bottom_1px"},[n("van-dropdown-item",{ref:"payment_method",attrs:{title:"收款方式"}},[n("van-cell",{staticClass:"selections",attrs:{border:!1}},[n("van-checkbox-group",{model:{value:t.query.paymentType,callback:function(e){t.$set(t.query,"paymentType",e)},expression:"query.paymentType"}},[n("van-checkbox",{staticClass:"btn",attrs:{name:t.PAYMENT_METHOD.BANK}},[n("van-button",{staticClass:"btn",attrs:{slot:"icon"},slot:"icon"},[t._v(" 银行卡转账")])],1),n("van-checkbox",{staticClass:"btn",attrs:{name:t.PAYMENT_METHOD.WE_CHAT}},[n("van-button",{staticClass:"btn",attrs:{slot:"icon"},slot:"icon"},[t._v(" 微信转账")])],1),n("van-checkbox",{staticClass:"btn",attrs:{name:t.PAYMENT_METHOD.ALI}},[n("van-button",{staticClass:"btn",attrs:{slot:"icon"},slot:"icon"},[t._v(" 支付宝转账")])],1)],1)],1),n("van-cell",{staticClass:"btns"},[n("van-button",{staticClass:"cancel",attrs:{type:"danger"},on:{click:t.resetPaymentMethod}},[t._v(" 重置 ")]),n("van-button",{staticClass:"confirm",attrs:{type:"primary"},on:{click:function(e){return t.load("payment_method")}}},[t._v(" 确定 ")])],1)],1),n("van-dropdown-item",{ref:"status",attrs:{title:"状态"}},[n("van-cell",{staticClass:"selections",attrs:{border:!1}},[n("div",{staticClass:"group"},[n("van-checkbox",{staticClass:"btn",model:{value:t.query.isTransacting,callback:function(e){t.$set(t.query,"isTransacting",e)},expression:"query.isTransacting"}},[n("van-button",{staticClass:"btn",attrs:{slot:"icon"},slot:"icon"},[t._v(" 已发起交易")])],1),n("van-checkbox",{staticClass:"btn",model:{value:t.query.isHanging,callback:function(e){t.$set(t.query,"isHanging",e)},expression:"query.isHanging"}},[n("van-button",{staticClass:"btn",attrs:{slot:"icon"},slot:"icon"},[t._v(" 挂单中")])],1)],1)]),n("van-cell",{staticClass:"btns"},[n("van-button",{staticClass:"cancel",attrs:{type:"danger"},on:{click:t.resetStatus}},[t._v(" 重置 ")]),n("van-button",{staticClass:"confirm",attrs:{type:"primary"},on:{click:function(e){return t.load("status")}}},[t._v(" 确定 ")])],1)],1),n("van-dropdown-item",{ref:"split_status",attrs:{title:"是否可拆分"}},[n("van-cell",{staticClass:"selections",attrs:{border:!1}},[n("van-radio-group",{on:{change:function(e){return t.onChangeSplitStatus(e)}},model:{value:t.query.isSplit,callback:function(e){t.$set(t.query,"isSplit",e)},expression:"query.isSplit"}},[n("van-radio",{staticClass:"btn",attrs:{name:1}},[n("van-button",{staticClass:"btn",attrs:{slot:"icon"},on:{click:function(e){return t.cancelSelect(1)}},slot:"icon"},[t._v(" 可拆分 ")])],1),n("van-radio",{staticClass:"btn",attrs:{name:0}},[n("van-button",{staticClass:"btn",attrs:{slot:"icon"},on:{click:function(e){return t.cancelSelect(0)}},slot:"icon"},[t._v(" 不可拆分 ")])],1)],1)],1)],1)],1),n("van-list",{attrs:{"error-text":t.errorText,error:t.error,finished:t.finished,"finished-text":"暂无更多数据"},on:{"update:error":function(e){t.error=e},load:t.search},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(t,e){return n("HangOrderItem",{key:e,attrs:{dt:t}})})),1)],1)},a=[],s=n(68932),i=(n(41539),n(9653),n(74916),n(64765),n(20145)),o=n(21380),u=n(75628),c=n(6163),l={components:{HangOrderItem:i.K},data:function(){return{PAYMENT_METHOD:u.hL,list:[],loading:!1,error:!1,finished:!1,errorText:"加载失败，点击重试",page:1,pageSize:20,query:{isTransacting:!1,isHanging:!1,isSplit:"",paymentType:[]}}},watch:{query:{deep:!0,handler:function(){this.page=1,this.list=[]}}},created:function(){this.$root.$emit("root:set-topbar",["left-back","notices","customer-service"])},methods:{search:function(){var t=this;(0,o.$Z)(this.$tls.processParams({page:this.page,pageSize:this.pageSize,isSplit:this.query.isSplit,paymentType:this.query.paymentType.reduce((function(t,e){return Number(t)+Number(e)}),0),inProgress:this.query.isTransacting?1:"",status:this.query.isHanging?1:""},["shake"])).then((function(e){var n=e.ok,r=e.data,a=e.msg;if(t.loading=!1,n){var i;if(1==t.page)t.list=r.list||[];else(i=t.list).push.apply(i,(0,s.Z)(r.list||[]));t.finished=t.page*t.pageSize>=r.total,t.page+=1}else t.error=!0,t.errorText=a}))},resetPaymentMethod:function(){this.query.paymentType=[],this.load("payment_method")},resetStatus:function(){this.query.isTransacting=!1,this.query.isHanging=!1,this.load("status")},load:function(t){this.page=1,this.$refs[t].toggle(!1),this.search()},onChangeSplitStatus:function(t){c.ZP.isNumber(t)&&this.load("split_status")},cancelSelect:function(t){var e=this;this.query.isSplit===t&&setTimeout((function(){e.query.isSplit="",e.load("split_status")}),50)}}},d=l,p=n(1001),m=(0,p.Z)(d,r,a,!1,null,null,null),f=m.exports},21380:function(t,e,n){n.d(e,{$Z:function(){return u},$i:function(){return o},CI:function(){return h},Ej:function(){return v},Hn:function(){return l},N8:function(){return y},R9:function(){return O},T7:function(){return C},XW:function(){return g},_H:function(){return a},_d:function(){return b},an:function(){return m},cf:function(){return p},dF:function(){return d},fW:function(){return c},l$:function(){return _},uF:function(){return s},v1:function(){return i},vi:function(){return f},y6:function(){return T}});var r=n(51922),a=function(t){return(0,r.q)({url:"/Api/Market/PendingOrder/marketPendingOrderList",method:"POST",data:t})},s=function(t){return(0,r.q)({url:"/Api/Market/Order/myOrderList",method:"GET",data:t})},i=function(t){return(0,r.q)({url:"/Api/Market/Sell/index",method:"POST",data:t})},o=function(t){return(0,r.q)({url:"/Api/Market/Sell/recycle",method:"POST",data:t})},u=function(t){return(0,r.q)({url:"Api/Market/PendingOrder/myPendingOrderList",method:"POST",data:t})},c=function(t){return(0,r.q)({url:"/Api/Market/Order/myOrderDetail",method:"GET",data:t})},l=function(t){return(0,r.q)({url:"/Api/Market/PendingOrder/marketPendingOrderDetail",method:"POST",data:t})},d=function(t){return(0,r.q)({url:"/Api/Market/Order/getCurrentOrderStatus",method:"GET",data:t})},p=function(t){return(0,r.q)({url:"/Api/Market/PendingOrder/myPendingOrderDetail",method:"GET",data:t})},m=function(t){return(0,r.q)({url:"/Api/Market/Order/buyerCreatesOrder",method:"POST",data:t})},f=function(t){return(0,r.q)({url:"/Api/Market/PendingOrder/getOrderListByPendingOrder",method:"GET",data:t})},h=function(t){return(0,r.q)({url:"/Api/Market/Order/sellerRefusesToCreateOrder",method:"POST",data:t})},y=function(t){return(0,r.q)({url:"/Api/Market/Order/sellerConfirmsToCreateOrder",method:"POST",data:t})},v=function(t){return(0,r.q)({url:"/Api/Market/Order/sellerHasNotReceivedPayment",method:"POST",data:t})},g=function(t){return(0,r.q)({url:"/Api/Market/Order/sellerCompletesOrder",method:"POST",data:t})},b=function(t){return(0,r.q)({url:"/Api/Market/Order/buyerCancelsOrder",method:"POST",data:t})},_=function(t){return(0,r.q)({url:"/Api/Market/Order/buyerConfirmsOrderHasBeenPaid",method:"POST",data:t})},O=function(t){return(0,r.q)({url:"/Api/Market/Order/buyerAppeals",method:"POST",data:t})},T=function(t){return(0,r.q)({url:"/Api/Market/Order/getCancelsOrderDailyCount",method:"GET",data:t})},C=function(t){return(0,r.q)({url:"/Api/User/TransferOrder/userDeposit",method:"POST",data:t})}},20145:function(t,e,n){n.d(e,{K:function(){return c},A:function(){return h}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hang-order",on:{click:function(e){return t.$router.push("/my_hang_order/"+t.dt.pendingOrderId)}}},[n("div",{staticClass:"time"},[t._v(" 挂单时间 "+t._s(t._f("dateFormat")(t.dt.createTime,"M/D h:m:s"))+" ")]),n("div",{staticClass:"content"},[n("span",{staticClass:"payment-method"},t._l(t.payments,(function(t,e){return n("div",{key:e,staticClass:"item",class:"pay"+t})})),0),n("span",{staticClass:"order-type"},[t._v(t._s(t.dt.isSplit?"可拆分":"不可拆分"))]),n("span",{staticClass:"amount"},[t._v(" "+t._s(t._f("amountFormat")(t.dt.validAmount,{places:0}))+" V币 ")]),n("span",{staticClass:"order-status",class:t.stateClass},[t._v(" "+t._s(t.stateStr)+" ")]),n("van-icon",{attrs:{name:"arrow"}})],1)])},a=[],s={name:"hangOrderItem",props:{dt:{type:Object,default:function(){return{createTime:(new Date).toLocaleDateString(),paymentType:7,isSplit:0,amount:"13076598",status:1,underwayOrder:1}}}},computed:{stateClass:function(){return this.dt.underwayOrder>0?"underway":1===this.dt.status?"hanging":0===this.dt.status?"closed":void 0},stateStr:function(){return 1==this.dt.frozen?"冻结":this.dt.underwayOrder>0?"已发起交易":1===this.dt.status?"挂单中...":0===this.dt.status?this.dt.amount==this.dt.soldAmount?"已售罄":"取消挂单":void 0},payments:function(){return this.$root.parsePayments(this.dt.paymentType)}},methods:{}},i=s,o=n(1001),u=(0,o.Z)(i,r,a,!1,null,"b8886d6a",null),c=u.exports,l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"transaction",on:{click:function(e){return t.$router.push("/"+(t.isSale?"transaction_sale":"transaction_buy")+"/"+t.dt.orderId)}}},[n("span",{staticClass:"inout bg",class:t.isSale?"out":"in"},[t._v(" "+t._s(t.isSale?"卖":"买")+" ")]),n("span",{staticClass:"time"},[t._v(" "+t._s(t.ymd)+" "),n("br"),t._v(" "+t._s(t.hms)+" ")]),n("span",{staticClass:"amountEl"},[n("span",{staticClass:"amount",class:t.isSale?"out":"in"},[t._v(" "+t._s(t._f("amountFormat")(t.dt.amount))+" ")]),n("span",{staticClass:"unit"},[t._v(" V币 ")])]),n("span",{staticClass:"order-status",class:t._f("transactingOrderStatus")(t.dt.status)},[t._v(" "+t._s(t._f("transactingOrderStatus")(t.dt.status,"seller-content"))+" ")])])},d=[],p=(n(47042),{name:"TransactionItem",props:{dt:{type:Object,default:function(){return{orderType:1,time:(new Date).toLocaleDateString(),amount:"0",orderStatus:"WaitingSellerConfirm"}}}},computed:{orderTime:function(){return this.$options.filters.dateFormat(this.dt.createTime,"Y/M/D h:m:s")},ymd:function(){return this.orderTime.slice(0,10)},hms:function(){return this.orderTime.slice(11)},isSale:function(){return this.dt.sellerId==this.$root.userInfo.userId&&"Member"===this.dt.sellerType}}}),m=p,f=(0,o.Z)(m,l,d,!1,null,"0f858ee6",null),h=f.exports},68932:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(23748);function a(t){if(Array.isArray(t))return(0,r.Z)(t)}n(82526),n(41817),n(41539),n(32165),n(78783),n(33948),n(91038);function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var i=n(48936);n(21703);function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return a(t)||s(t)||(0,i.Z)(t)||o()}}}]);