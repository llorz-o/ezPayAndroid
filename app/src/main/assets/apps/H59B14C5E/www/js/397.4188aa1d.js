"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[397],{32698:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page graybg page-orders"},[r("van-tabs",{attrs:{border:"",sticky:"","offset-top":"12.267vw"},model:{value:t.form.identity,callback:function(e){t.$set(t.form,"identity",e)},expression:"form.identity"}},[t._l(t.tabs,(function(e,n){return r("van-tab",{key:n,attrs:{title:e.title,name:n}},[r("van-list",{ref:n,refInFor:!0,attrs:{error:e.error,finished:e.finished,"error-text":e.errorText,"finished-text":e.finishedText},on:{"update:error":function(r){return t.$set(e,"error",r)},load:function(){return t.loadList(n)}},model:{value:e.loading,callback:function(r){t.$set(e,"loading",r)},expression:"v.loading"}},t._l(e.list,(function(t,e){return r("TransactionItem",{key:e,attrs:{dt:t}})})),1)],1)})),r("van-tab",{attrs:{title:"筛选",name:"filter"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" 筛选 "),r("van-icon",{attrs:{name:"filter-o"}})]},proxy:!0}])},[r("div",{staticClass:"filters"},[r("van-checkbox-group",{model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},t._l(t.ORDER_STATUS,(function(e,n){return r("van-checkbox",{key:n,staticClass:"btn",attrs:{"label-disabled":"",name:e},scopedSlots:t._u([{key:"icon",fn:function(){return[r("div",{staticClass:"btn"},[t._v(" "+t._s(t._f("transactingOrderStatus")(e,"seller-content"))+" ")])]},proxy:!0}],null,!0)})})),1)],1),r("van-cell",{staticClass:"btns"},[r("van-button",{staticClass:"cancel",attrs:{type:"danger"},on:{click:t.resetFilters}},[t._v(" 重置 ")]),r("van-button",{staticClass:"confirm",attrs:{type:"primary"},on:{click:t.confirmFilters}},[t._v(" 确定 ")])],1)],1)],2)],1)},a=[],i=r(68932),s=r(92371),o=r(75628),u=r(21380),d={components:{TransactionItem:s.A},data:function(){return{ORDER_STATUS:o.DF,tabs:{all:{title:"全部",loading:!1,error:!1,finished:!1,errorText:"加载失败，点击重试",finishedText:"暂无更多数据",list:[],page:1,pageSize:20},buyer:{title:"买单",loading:!1,error:!1,finished:!1,errorText:"加载失败，点击重试",finishedText:"暂无更多数据",list:[],page:1,pageSize:20},seller:{title:"卖单",loading:!1,error:!1,finished:!1,errorText:"加载失败，点击重试",finishedText:"暂无更多数据",list:[],page:1,pageSize:20}},form:{identity:"all",status:[]},lastIdentity:"all"}},watch:{"form.identity":function(t,e){var r=this;this.lastIdentity=e,this.tabs={all:{title:"全部",loading:!1,error:!1,finished:!1,errorText:"加载失败，点击重试",finishedText:"暂无更多数据",list:[],page:1,pageSize:20},buyer:{title:"买单",loading:!1,error:!1,finished:!1,errorText:"加载失败，点击重试",finishedText:"暂无更多数据",list:[],page:1,pageSize:20},seller:{title:"卖单",loading:!1,error:!1,finished:!1,errorText:"加载失败，点击重试",finishedText:"暂无更多数据",list:[],page:1,pageSize:20}},"filter"!=t&&this.$nextTick((function(){return r.$refs[t][0].check()}))}},created:function(){this.$root.updateUnReadCount(),this.$root.$emit("root:set-topbar",["notices","customer-service"]),this.$root.$emit("root:set-layout",{bottom:!0})},methods:{loadList:function(t){var e=this;(0,u.uF)(this.$tls.processParams({page:this.tabs[t].page,pageSize:this.tabs[t].pageSize,identity:"all"===t?"":t,status:this.form.status},["shake"])).then((function(r){var n=r.ok,a=r.msg,s=r.data;if(n){var o;if(e.tabs[t].loading=!1,(o=e.tabs[t].list).push.apply(o,(0,i.Z)(s.list)),e.tabs[t].page*e.tabs[t].pageSize>=s.total)return void(e.tabs[t].finished=!0);e.tabs[t].page+=1}else e.tabs[t].error=!0,e.tabs[t].errorText=a}))},confirmFilters:function(){this.form.identity=this.lastIdentity},resetFilters:function(){this.form.status=[],this.form.identity=this.lastIdentity}}},l=d,c=r(1001),f=(0,c.Z)(l,n,a,!1,null,null,null),m=f.exports},21380:function(t,e,r){r.d(e,{$Z:function(){return u},$i:function(){return o},CI:function(){return h},Ej:function(){return g},Hn:function(){return l},N8:function(){return y},R9:function(){return b},T7:function(){return S},XW:function(){return v},_H:function(){return a},_d:function(){return O},an:function(){return m},cf:function(){return f},dF:function(){return c},fW:function(){return d},l$:function(){return T},uF:function(){return i},v1:function(){return s},vi:function(){return p},y6:function(){return _}});var n=r(51922),a=function(t){return(0,n.q)({url:"/Api/Market/PendingOrder/marketPendingOrderList",method:"POST",data:t})},i=function(t){return(0,n.q)({url:"/Api/Market/Order/myOrderList",method:"GET",data:t})},s=function(t){return(0,n.q)({url:"/Api/Market/Sell/index",method:"POST",data:t})},o=function(t){return(0,n.q)({url:"/Api/Market/Sell/recycle",method:"POST",data:t})},u=function(t){return(0,n.q)({url:"Api/Market/PendingOrder/myPendingOrderList",method:"POST",data:t})},d=function(t){return(0,n.q)({url:"/Api/Market/Order/myOrderDetail",method:"GET",data:t})},l=function(t){return(0,n.q)({url:"/Api/Market/PendingOrder/marketPendingOrderDetail",method:"POST",data:t})},c=function(t){return(0,n.q)({url:"/Api/Market/Order/getCurrentOrderStatus",method:"GET",data:t})},f=function(t){return(0,n.q)({url:"/Api/Market/PendingOrder/myPendingOrderDetail",method:"GET",data:t})},m=function(t){return(0,n.q)({url:"/Api/Market/Order/buyerCreatesOrder",method:"POST",data:t})},p=function(t){return(0,n.q)({url:"/Api/Market/PendingOrder/getOrderListByPendingOrder",method:"GET",data:t})},h=function(t){return(0,n.q)({url:"/Api/Market/Order/sellerRefusesToCreateOrder",method:"POST",data:t})},y=function(t){return(0,n.q)({url:"/Api/Market/Order/sellerConfirmsToCreateOrder",method:"POST",data:t})},g=function(t){return(0,n.q)({url:"/Api/Market/Order/sellerHasNotReceivedPayment",method:"POST",data:t})},v=function(t){return(0,n.q)({url:"/Api/Market/Order/sellerCompletesOrder",method:"POST",data:t})},O=function(t){return(0,n.q)({url:"/Api/Market/Order/buyerCancelsOrder",method:"POST",data:t})},T=function(t){return(0,n.q)({url:"/Api/Market/Order/buyerConfirmsOrderHasBeenPaid",method:"POST",data:t})},b=function(t){return(0,n.q)({url:"/Api/Market/Order/buyerAppeals",method:"POST",data:t})},_=function(t){return(0,n.q)({url:"/Api/Market/Order/getCancelsOrderDailyCount",method:"GET",data:t})},S=function(t){return(0,n.q)({url:"/Api/User/TransferOrder/userDeposit",method:"POST",data:t})}},92371:function(t,e,r){r.d(e,{K:function(){return d},A:function(){return h}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hang-order",on:{click:function(e){return t.$router.push("/my_hang_order/"+t.dt.pendingOrderId)}}},[r("div",{staticClass:"time"},[t._v(" 挂单时间 "+t._s(t._f("dateFormat")(t.dt.createTime,"M/D h:m:s"))+" ")]),r("div",{staticClass:"content"},[r("span",{staticClass:"payment-method"},t._l(t.payments,(function(t,e){return r("div",{key:e,staticClass:"item",class:"pay"+t})})),0),r("span",{staticClass:"order-type"},[t._v(t._s(t.dt.isSplit?"可拆分":"不可拆分"))]),r("span",{staticClass:"amount"},[t._v(" "+t._s(t._f("amountFormat")(t.dt.validAmount,{places:0}))+" V币 ")]),r("span",{staticClass:"order-status",class:t.stateClass},[t._v(" "+t._s(t.stateStr)+" ")]),r("van-icon",{attrs:{name:"arrow"}})],1)])},a=[],i={name:"hangOrderItem",props:{dt:{type:Object,default:function(){return{createTime:(new Date).toLocaleDateString(),paymentType:7,isSplit:0,amount:"13076598",status:1,underwayOrder:1}}}},computed:{stateClass:function(){return this.dt.underwayOrder>0?"underway":1===this.dt.status?"hanging":0===this.dt.status?"closed":void 0},stateStr:function(){return this.dt.underwayOrder>0?"已发起交易":1===this.dt.status?"挂单中...":0===this.dt.status?this.dt.amount==this.dt.soldAmount?"已售罄":"取消挂单":void 0},payments:function(){return this.$root.parsePayments(this.dt.paymentType)}},methods:{}},s=i,o=r(1001),u=(0,o.Z)(s,n,a,!1,null,"2910d5a5",null),d=u.exports,l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"transaction",on:{click:function(e){return t.$router.push("/"+(t.isSale?"transaction_sale":"transaction_buy")+"/"+t.dt.orderId)}}},[r("span",{staticClass:"inout bg",class:t.isSale?"out":"in"},[t._v(" "+t._s(t.isSale?"卖":"买")+" ")]),r("span",{staticClass:"time"},[t._v(" "+t._s(t.ymd)+" "),r("br"),t._v(" "+t._s(t.hms)+" ")]),r("span",{staticClass:"amountEl"},[r("span",{staticClass:"amount",class:t.isSale?"out":"in"},[t._v(" "+t._s(t._f("amountFormat")(t.dt.amount))+" ")]),r("span",{staticClass:"unit"},[t._v(" V币 ")])]),r("span",{staticClass:"order-status",class:t._f("transactingOrderStatus")(t.dt.status)},[t._v(" "+t._s(t._f("transactingOrderStatus")(t.dt.status,"seller-content"))+" ")])])},c=[],f=(r(47042),{name:"TransactionItem",props:{dt:{type:Object,default:function(){return{orderType:1,time:(new Date).toLocaleDateString(),amount:"0",orderStatus:"WaitingSellerConfirm"}}}},computed:{orderTime:function(){return this.$options.filters.dateFormat(this.dt.createTime,"Y/M/D h:m:s")},ymd:function(){return this.orderTime.slice(0,10)},hms:function(){return this.orderTime.slice(11)},isSale:function(){return this.dt.sellerId==this.$root.userInfo.userId&&"Member"===this.dt.sellerType}}}),m=f,p=(0,o.Z)(m,l,c,!1,null,"e973515c",null),h=p.exports},68932:function(t,e,r){r.d(e,{Z:function(){return u}});var n=r(23748);function a(t){if(Array.isArray(t))return(0,n.Z)(t)}r(82526),r(41817),r(41539),r(32165),r(78783),r(33948),r(91038);function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var s=r(48936);r(21703);function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return a(t)||i(t)||(0,s.Z)(t)||o()}}}]);