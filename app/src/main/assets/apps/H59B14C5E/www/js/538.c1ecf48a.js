"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[538],{92538:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page page-transaction_sale"},[n("div",{staticClass:"top-wrapper"},[n("div",{staticClass:"card"},[n("div",{staticClass:"title"},[n("span",{staticClass:"split"},[t._v(" "+t._s(t.orderInfo.isSplit?"可拆分":"不可拆分")+" ")]),0===t.orderInfo.status?n("span",{staticClass:"status canceled"},[t._v(" "+t._s(t.orderInfo.amount==t.orderInfo.soldAmount?"已售罄":"取消挂单")+" ")]):n("span",{staticClass:"status",class:t._f("transactingOrderStatus")(t.status)},[t._v(" "+t._s(t._f("transactingOrderStatus")(t.status,"seller-content"))+" ")]),n("span",{staticClass:"btn",class:{loading:t.loading},on:{click:function(){return t.loadDetails(t.orderInfo.pendingOrderId)}}},[n("van-icon",{attrs:{name:"replay"}})],1)]),n("div",{staticClass:"time"},[t.status==t.TRANSACTING_ORDER_STATUS.HANGING?[t._v(" 创建时间 "+t._s(t._f("dateFormat")(t.orderInfo.createTime,"Y/M/D h:m:s"))+" ")]:t._e(),t.status==t.TRANSACTING_ORDER_STATUS.BUYER_REQUEST?[t._v(" 5分钟内未操作系统将默认卖家取消交易 ")]:[t._v("   ")]],2),n("div",{staticClass:"orderId"},[t._v(" 挂单编号 "+t._s(t.orderInfo.pendingOrderId)+" "),n("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.orderInfo.pendingOrderId||"",expression:"orderInfo.pendingOrderId || ''"}],staticClass:"copy copyBtn",on:{success:t.$root.copySuccessful}})])])]),n("van-cell",{staticClass:"kv amount",attrs:{title:"售卖数量"}},[t._v(" Ezb "+t._s(t.orderInfo.validAmount)+" ")]),t.status==t.TRANSACTING_ORDER_STATUS.BUYER_REQUEST?[n("div",{staticClass:"underOrders gary-8"},[n("div",{staticClass:"title title_line"},[t._v("交易订单")]),n("div",{staticClass:"list"},t._l(t.underOrders,(function(e,r){return n("div",{key:r,staticClass:"item border_bottom_1px",on:{click:function(n){return t.$router.push("/transaction_sale/"+e.orderId)}}},[n("div",{staticClass:"col time"},[t._v(" 发起时间 "),n("br"),t._v(" "+t._s(t._f("dateFormat")(e.createTime,"M/D h:m:s"))+" ")]),n("div",{staticClass:"col money"},[n("div",[t._v("购买数量")]),n("div",{staticClass:"amount"},[t._v(" "+t._s(parseFloat(e.amount).toFixed(2))+"EzB ")])]),n("div",{staticClass:"col payment",class:"pay"+e.paymentType}),n("div",{staticClass:"col status",class:t._f("transactingOrderStatus")(e.status)},[t._v(" "+t._s(t._f("transactingOrderStatus")(e.status,"seller-content"))+" ")]),n("van-icon",{attrs:{name:"arrow"}})],1)})),0)])]:[t.status==t.TRANSACTING_ORDER_STATUS.BUYER_REQUEST?n("van-cell",{staticClass:"kv amount",attrs:{title:"购买数量"}},[t._v(" Ezb 60000 ")]):t._e(),n("van-cell",{staticClass:"kv payment",attrs:{title:"收款方式"}},[n("van-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},t._l(t.payments,(function(e,r){return n("van-radio",{key:r,staticClass:"btn",attrs:{name:e}},[n("van-button",{staticClass:"btn",attrs:{slot:"icon"},slot:"icon"},[n("span",{staticClass:"item",class:"pay"+e}),t._v(" "+t._s(t._f("paymentMethod")(e,"content"))+" ")])],1)})),1)],1)],t.status==t.TRANSACTING_ORDER_STATUS.HANGING?n(t.componentsMapping[t.radio],{tag:"components",attrs:{title:"收款信息",hide:t.hide,payment:t.hide?void 0:t.getPaymentInfo.info}}):t._e(),0!=t.orderInfo.status?n("div",{staticClass:"btns"},[t.status==t.TRANSACTING_ORDER_STATUS.HANGING?[n("van-button",{staticClass:"danger block",on:{click:t.cancel_hanging}},[t._v(" 取消挂单 ")])]:t._e()],2):t._e()],2)},a=[],s=n(23796),i=(n(69826),n(41539),n(75628)),o=n(51688),c=n(20211),u=n(21380),d={components:{BankPaymentInfo:c.JF,WechatPaymentInfo:c.Ey,AliPaymentInfo:c.q$},data:function(){var t;return{STATUS_TYPE:i.Z2,STEP:i.g0,TRANSACTING_ORDER_STATUS:i.eD,status:i.eD.HANGING,countdown:1,isTimeOut:!1,loading:!1,radio:"",orderInfo:{},orderPayments:[],underOrders:[],componentsMapping:(t={},(0,s.Z)(t,i.hL.BANK,"BankPaymentInfo"),(0,s.Z)(t,i.hL.ALI,"AliPaymentInfo"),(0,s.Z)(t,i.hL.WE_CHAT,"WechatPaymentInfo"),t)}},computed:{hide:function(){return this.status==this.TRANSACTING_ORDER_STATUS.SELLER_CANCELED_DEAL||this.status==this.TRANSACTING_ORDER_STATUS.BUYRER_CANCELD_DEAL||this.status==this.TRANSACTING_ORDER_STATUS.SELLER_DID_NOT_RECEIVE&&this.isCountdownEnd||this.status==this.TRANSACTING_ORDER_STATUS.CONFIRM_TRANSFER||this.status==this.TRANSACTING_ORDER_STATUS.CANCELED_BY_OFFICIAL||this.status==this.TRANSACTING_ORDER_STATUS.CONFIRMED_BY_OFFICIAL||this.status==this.TRANSACTING_ORDER_STATUS.DEAL||this.status==this.TRANSACTING_ORDER_STATUS.TIME_OVER},isCountdownEnd:function(){return this.countdown<=0},stepsActive:function(){return this.STEP[this.status]},isTimeoutDisputing:function(){return!(this.status!=this.TRANSACTING_ORDER_STATUS.DISPUTING||!this.isTimeOut)},payments:function(){return this.$root.parsePayments(this.orderInfo.paymentType)},getPaymentInfo:function(){var t=this;return this.orderPayments.find((function(e){return e.type===t.radio}))||{}}},created:function(){this.loadDetails(this.$route.params.id),this.$root.$emit("root:set-topbar",["left-back","customer-service"])},beforeDestroy:function(){clearTimeout(this.timer)},methods:{transactingOrderStatus:function(){var t;return(t=this.$options.filters).transactingOrderStatus.apply(t,arguments)},cancel_hanging:function(){this.cancelHangOrder()},start_transaction:function(){(0,o.H9)()},cancel_transaction:function(){(0,o.VN)(2)},loadDetails:function(t){var e=this;this.loading||(this.loading=!0,(0,u.cf)({pendingOrderId:t}).then((function(n){var r=n.ok,a=n.msg,s=n.data;e.loading=!1,r?(e.orderInfo=s.pendingOrder,e.orderPayments=s.paymentType,e.radio=e.payments[0],e.orderInfo.underwayOrder>0?(e.status=i.eD.BUYER_REQUEST,e.loadUnderOrders()):(e.status=i.eD.HANGING,e.underOrders=[]),0!==e.orderInfo.status&&(e.timer=setTimeout((function(){return e.loadDetails(t)}),1e4))):e.$toast.fail(a)})))},loadUnderOrders:function(){var t=this;(0,u.vi)({pendingOrderId:this.orderInfo.pendingOrderId,page:1,pageSize:20}).then((function(e){var n=e.ok,r=e.msg,a=e.data;n?t.underOrders=a.list:t.$toast.fail(r)}))},cancelHangOrder:function(){var t=this;(0,u.$i)({pendingOrderId:this.orderInfo.pendingOrderId}).then((function(e){var n=e.ok,r=e.msg;n?(t.$router.back(),t.$toast.success(r)):t.$toast.fail(r)}))}}},l=d,p=n(1001),f=(0,p.Z)(l,r,a,!1,null,null,null),_=f.exports},21380:function(t,e,n){n.d(e,{$Z:function(){return c},$i:function(){return o},CI:function(){return m},Ej:function(){return h},Hn:function(){return d},N8:function(){return v},R9:function(){return S},T7:function(){return A},XW:function(){return y},_H:function(){return a},_d:function(){return T},an:function(){return f},cf:function(){return p},dF:function(){return l},fW:function(){return u},l$:function(){return C},uF:function(){return s},v1:function(){return i},vi:function(){return _},y6:function(){return O}});var r=n(51922),a=function(t){return(0,r.q)({url:"/Api/Market/PendingOrder/marketPendingOrderList",method:"POST",data:t})},s=function(t){return(0,r.q)({url:"/Api/Market/Order/myOrderList",method:"GET",data:t})},i=function(t){return(0,r.q)({url:"/Api/Market/Sell/index",method:"POST",data:t})},o=function(t){return(0,r.q)({url:"/Api/Market/Sell/recycle",method:"POST",data:t})},c=function(t){return(0,r.q)({url:"Api/Market/PendingOrder/myPendingOrderList",method:"POST",data:t})},u=function(t){return(0,r.q)({url:"/Api/Market/Order/myOrderDetail",method:"GET",data:t})},d=function(t){return(0,r.q)({url:"/Api/Market/PendingOrder/marketPendingOrderDetail",method:"POST",data:t})},l=function(t){return(0,r.q)({url:"/Api/Market/Order/getCurrentOrderStatus",method:"GET",data:t})},p=function(t){return(0,r.q)({url:"/Api/Market/PendingOrder/myPendingOrderDetail",method:"GET",data:t})},f=function(t){return(0,r.q)({url:"/Api/Market/Order/buyerCreatesOrder",method:"POST",data:t})},_=function(t){return(0,r.q)({url:"/Api/Market/PendingOrder/getOrderListByPendingOrder",method:"GET",data:t})},m=function(t){return(0,r.q)({url:"/Api/Market/Order/sellerRefusesToCreateOrder",method:"POST",data:t})},v=function(t){return(0,r.q)({url:"/Api/Market/Order/sellerConfirmsToCreateOrder",method:"POST",data:t})},h=function(t){return(0,r.q)({url:"/Api/Market/Order/sellerHasNotReceivedPayment",method:"POST",data:t})},y=function(t){return(0,r.q)({url:"/Api/Market/Order/sellerCompletesOrder",method:"POST",data:t})},T=function(t){return(0,r.q)({url:"/Api/Market/Order/buyerCancelsOrder",method:"POST",data:t})},C=function(t){return(0,r.q)({url:"/Api/Market/Order/buyerConfirmsOrderHasBeenPaid",method:"POST",data:t})},S=function(t){return(0,r.q)({url:"/Api/Market/Order/buyerAppeals",method:"POST",data:t})},O=function(t){return(0,r.q)({url:"/Api/Market/Order/getCancelsOrderDailyCount",method:"GET",data:t})},A=function(t){return(0,r.q)({url:"/Api/User/TransferOrder/userDeposit",method:"POST",data:t})}},51688:function(t,e,n){n.d(e,{EQ:function(){return o},H9:function(){return s},VN:function(){return i},di:function(){return c}});n(41539),n(92222);var r=n(9515),a=function(t,e){return new Promise((function(n,a){r.Z.confirm({title:t,message:e,confirmButtonText:"是",cancelButtonText:"否",confirmButtonColor:"#6f59fe",allowHtml:!0,beforeClose:function(t,e){e(),"confirm"===t?n():a()}})}))},s=function(){return a("是否开始交易","<div>\n开始交易后可在“交易记录”，“订单”中\n「我的卖单」完成后续操作\n</div>")},i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return a("是否取消该笔交易",'<div>\n      <div class="tip">\n        提示：\n      </div>\n      <div>\n          1.如果你在一天内取消<span style="color:#FB2222">'.concat(e,'次</span>订单，当天你的账户将会被停止买卖。\n      </div>\n      <div class="al-c">\n          今日还可取消\n          <span style="color:#FB2222">').concat(t,"次</span>\n          订单，请谨慎操作\n      </div>\n    </div>\n"))},o=function(){return a("是否未收到转账",'请再次确认您的收款账户是否未收到转账，\n如发现\n<span style="color:#FB2222">恶意不确认转币</span>\n可能会面临\n<span style="color:#FB2222">「永久封号」</span>\n处理')},c=function(){return a("是否收到转账",'请再次确认买家否已付款，且到款信息\n是否与<span style="color:#FB2222">「买方付款信息」</span>一致')}},20211:function(t,e,n){n.d(e,{q$:function(){return O},JF:function(){return d},Ey:function(){return v}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-cell-group",{attrs:{border:!1},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",{staticClass:"title"},[t._v(t._s(t.title))]),t._t("title-right")]},proxy:!0}],null,!0)},[n("van-cell",{staticClass:"kv",attrs:{title:"银行名称",border:!1}},[t._v(" "+t._s(t._f("hide")(t.findBank.bankName,t.hide,"中国农业银行"))+" ")]),n("van-cell",{staticClass:"kv",attrs:{title:"开户所在地",border:!1}},[t._v(" "+t._s(t._f("hide")(t.getAddrFromCode(t.payment.province,t.payment.city),t.hide,"北京市 北京市"))+" ")]),n("van-cell",{staticClass:"kv",attrs:{title:"开户支行",border:!1}},[t._v(" "+t._s(t._f("hide")(t.payment.bankBranch,t.hide,"黄浦区万达广场支行"))+" ")]),n("van-cell",{staticClass:"kv",attrs:{title:"姓名",border:!1},scopedSlots:t._u([{key:"right-icon",fn:function(){return[n("div",{staticClass:"copy"})]},proxy:!0}])},[t._v(" "+t._s(t._f("hide")(t.payment.realName,t.hide,"张三"))+" ")]),n("van-cell",{staticClass:"kv",attrs:{title:"银行卡号",border:!1},scopedSlots:t._u([{key:"right-icon",fn:function(){return[n("div",{staticClass:"copy"})]},proxy:!0}])},[t._v(" "+t._s(t._f("hide")(t.payment.bankNo,t.hide,"6227 0029 6666 7777 888"))+" ")])],1)},a=[],s=(n(69826),n(41539),n(7601)),i={props:{title:String,hide:Boolean,payment:{default:function(){return{bankName:"中国农业银行",province:11e4,city:110100,bankBranch:"黄浦区万达广场支行",realName:"张三",bankNo:"6227 0029 6666 7777 888"}}}},computed:{findBank:function(){var t=this;return this.$root.banks.find((function(e){return e.bankId==t.payment.bankId}))||{}}},methods:{getAddrFromCode:function(t,e){return s.H.province_list[t]+" "+s.H.city_list[e]}}},o=i,c=n(1001),u=(0,c.Z)(o,r,a,!1,null,"2c6bceb5",null),d=u.exports,l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-cell-group",{attrs:{border:!1},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",{staticClass:"title"},[t._v(t._s(t.title))])]},proxy:!0}])},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"left"},[n("van-cell",{staticClass:"kv",attrs:{title:"微信账号",border:!1},scopedSlots:t._u([{key:"right-icon",fn:function(){return[n("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.hide?"":t.payment.account||"",expression:"hide ? '' : payment.account || ''"}],staticClass:"copy copyBtn",on:{success:t.$root.copySuccessful}})]},proxy:!0}])},[t._v(" "+t._s(t._f("hide")(t.payment.account,t.hide,"微信"))+" ")]),n("van-cell",{staticClass:"kv",attrs:{title:"姓名",border:!1},scopedSlots:t._u([{key:"right-icon",fn:function(){return[n("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.hide?"":t.payment.realName||"",expression:"hide ? '' : payment.realName || ''"}],staticClass:"copy copyBtn",on:{success:t.$root.copySuccessful}})]},proxy:!0}])},[t._v(" "+t._s(t._f("hide")(t.payment.realName,t.hide,"张三"))+" ")])],1),t.hide?n("div",{staticClass:"qr"},[[t._v(" 收款二维码 ")]],2):n("van-image",{attrs:{src:t.hide?"":t.$root.getImageUrl(t.payment.receiptCode)}})],1)])},p=[],f={props:{title:String,hide:Boolean,payment:{default:function(){return{account:"微信",realName:"张三",receiptCode:""}}}}},_=f,m=(0,c.Z)(_,l,p,!1,null,"059397e8",null),v=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-cell-group",{attrs:{border:!1},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",{staticClass:"title"},[t._v(t._s(t.title))])]},proxy:!0}])},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"left"},[n("van-cell",{staticClass:"kv",attrs:{title:"支付宝账号",border:!1},scopedSlots:t._u([{key:"right-icon",fn:function(){return[n("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.hide?"":t.payment.account||"",expression:"hide ? '' : payment.account || ''"}],staticClass:"copy copyBtn",on:{success:t.$root.copySuccessful}})]},proxy:!0}])},[t._v(" "+t._s(t._f("hide")(t.payment.account,t.hide,"支付宝"))+" ")]),n("van-cell",{staticClass:"kv",attrs:{title:"姓名",border:!1},scopedSlots:t._u([{key:"right-icon",fn:function(){return[n("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.hide?"":t.payment.realName||"",expression:"hide ? '' : payment.realName || ''"}],staticClass:"copy copyBtn",on:{success:t.$root.copySuccessful}})]},proxy:!0}])},[t._v(" "+t._s(t._f("hide")(t.payment.realName,t.hide,"张三"))+" ")])],1),t.hide?n("div",{staticClass:"qr"},[[t._v(" 收款二维码 ")]],2):n("van-image",{attrs:{src:t.hide?"":t.$root.getImageUrl(t.payment.receiptCode)}})],1)])},y=[],T={props:{title:String,hide:Boolean,payment:{default:function(){return{account:"支付宝",realName:"张三",receiptCode:""}}}}},C=T,S=(0,c.Z)(C,h,y,!1,null,"608e2fb6",null),O=S.exports}}]);