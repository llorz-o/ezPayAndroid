"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[360],{78360:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var a=function(){var t,e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"page page-transaction_buy"},[a("div",{staticClass:"top-wrapper"},[a("div",{staticClass:"card"},[a("div",{staticClass:"title"},[a("span",{staticClass:"split"}),a("span",{staticClass:"status",class:e._f("transactingOrderStatus")(e.status)},[e._v(" "+e._s(e._f("transactingOrderStatus")(e.status,"buyer-content"))+" ")]),a("span",{staticClass:"btn",class:{loading:e.loading},on:{click:function(){return e.loadOrderDetail(e.orderInfo.orderId)}}},[a("van-icon",{attrs:{name:"replay"}})],1)]),a("div",{staticClass:"time"},[e.status==e.TRANSACTING_ORDER_STATUS.BUYER_REQUEST?[e._v(" 卖家5分钟内未确认订单，系统默认卖家取消交易 ")]:e._e(),e.status==e.TRANSACTING_ORDER_STATUS.WAITING_FOR_TRANSFER?[e._v(" 买家15分钟内未操作,系统将默认买家取消交易 ")]:e._e(),e.status==e.TRANSACTING_ORDER_STATUS.TIME_OVER?[e._v(" 未操作超时取消，如有异议请在30分钟内提交 "),a("span",{staticStyle:{color:"#fb2222"}},[e._v("[申请客服介入]")]),e._v(" ，否则交易将自动结束，买家无法收到转币 ")]:e._e(),e.status==e.TRANSACTING_ORDER_STATUS.TRANSFERRED?[e._v(" 卖家确认付款后系统将自动将币转入您的账户 ")]:e._e(),e.status==e.TRANSACTING_ORDER_STATUS.DISPUTING?[e._v(" 争议订单将由官方客服介入协助处理 ")]:e._e(),e.status!=e.TRANSACTING_ORDER_STATUS.SELLER_DID_NOT_RECEIVE||e.isCountdownEnd?e._e():[e._v(" 卖家已提交 "),a("span",{staticStyle:{color:"#fb2222"}},[e._v("[未收到付款]")]),e._v(" ，如有异议请在30分钟内提交 "),a("span",{staticStyle:{color:"#6f59fe"}},[e._v("[申请客服介入]")]),e._v(" ，否则交易将自动结束买家无法收到转币 ")],e.status==e.TRANSACTING_ORDER_STATUS.SELLER_DID_NOT_RECEIVE&&e.isCountdownEnd?[e._v(" 超时未提交异议，系统自动结束交易 ")]:[e._v("   ")]],2),a("div",{staticClass:"orderId"},[e._v(" 订单编号 "+e._s(e.orderInfo.orderNo)+" "),a("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:e.orderInfo.orderNo||"",expression:"orderInfo.orderNo || ''"}],staticClass:"copy copyBtn",on:{success:e.$root.copySuccessful}})])])]),a("van-cell",{staticClass:"kv amount",attrs:{title:"购买数量"}},[e._v(" Ezb "+e._s(parseFloat(e.orderInfo.amount).toFixed(2))+" ")]),a("van-cell",{staticClass:"kv payment",attrs:{title:"收款方式"}},[e.PAYMENT_METHOD.BANK===e.orderInfo.paymentType?a("div",{staticClass:"payment-icon bank"}):e._e(),e.PAYMENT_METHOD.ALI===e.orderInfo.paymentType?a("div",{staticClass:"payment-icon ali"}):e._e(),e.PAYMENT_METHOD.WE_CHAT===e.orderInfo.paymentType?a("div",{staticClass:"payment-icon wechat"}):e._e()]),a("van-cell-group",{attrs:{title:"交易进度",border:!1},scopedSlots:e._u([{key:"title",fn:function(){return[a("span",{staticClass:"title"},[e._v("交易进度")]),e.status===e.TRANSACTING_ORDER_STATUS.BUYER_REQUEST||e.status===e.TRANSACTING_ORDER_STATUS.WAITING_FOR_TRANSFER||e.status===e.TRANSACTING_ORDER_STATUS.TIME_OVER||e.status===e.TRANSACTING_ORDER_STATUS.SELLER_DID_NOT_RECEIVE&&!e.isCountdownEnd?a("span",{staticClass:"countdown"},[e._v(" 订单倒计时 "),a("van-count-down",{attrs:{time:e.countdown},on:{finish:e.onCountdownFinish}})],1):e._e()]},proxy:!0}])},[a("van-steps",{attrs:{active:e.stepsActive}},[a("van-step",[e._v(" "+e._s(e._f("dateFormat")(e.orderInfo.createTime,"M/D"))+" "),e.BUYER_STEP[e.status]>=0?a("div",{staticClass:"bottom-status time"},[e._v(" "+e._s(e._f("dateFormat")(e.orderInfo.createTime,"h:m:s"))+" ")]):e._e()]),a("van-step",[e._v(" 卖家确认交易 "),e.BUYER_STEP[e.status]>=0?a("div",{staticClass:"bottom-status",class:e._f("transactingOrderStatus")(e.status,void 0,1)},[e._v(" "+e._s(e._f("transactingOrderStatus")(e.status,"step",1))+" ")]):e._e()]),a("van-step",[e._v(" 买家转账 "),e.BUYER_STEP[e.status]>=2?a("div",{staticClass:"bottom-status",class:(t={},t["time-over"]=e.isTimeoutDisputing,t[e.transactingOrderStatus(e.status,void 0,2)]=!0,t)},[e.isTimeoutDisputing?[e._v(" 超时取消 ")]:[e._v(" "+e._s(e._f("transactingOrderStatus")(e.status,"step",2))+" ")]],2):e._e()]),a("van-step",[e._v(" 交易完成 "),e.BUYER_STEP[e.status]>=3?a("div",{staticClass:"bottom-status",class:e._f("transactingOrderStatus")(e.status)},[e._v(" "+e._s(e._f("transactingOrderStatus")(e.status,"step"))+" ")]):e._e()])],1)],1),a(e.componentsMapping[e.orderInfo.paymentType],{tag:"components",attrs:{title:"卖方收款信息",hide:e.hide,payment:e.sellerPayment}}),a(e.componentsMapping[e.orderInfo.paymentType],{tag:"components",attrs:{title:"买方付款信息",hide:e.hide,payment:e.buyerPayment}}),e.status==e.TRANSACTING_ORDER_STATUS.WAITING_FOR_TRANSFER||e.status==e.TRANSACTING_ORDER_STATUS.TRANSFERRED||e.status==e.TRANSACTING_ORDER_STATUS.SELLER_DID_NOT_RECEIVE&&!e.isCountdownEnd||e.status==e.TRANSACTING_ORDER_STATUS.DISPUTING?[e.BUYER_STEP[e.status]>2?a("van-image",{staticClass:"certificationImage",attrs:{src:e.$root.getImageUrl(e.orderInfo.voucher),fit:"contain"}}):a("van-uploader",{attrs:{"preview-full-image":"","image-fit":"contain","max-count":1,"after-read":e.afterRead,"result-type":"file"},nativeOn:{click:function(t){return function(t){return e.onClickUpload(t)}.apply(null,arguments)}},model:{value:e.imageList,callback:function(t){e.imageList=t},expression:"imageList"}},[a("van-button",{staticClass:"upload"},[a("van-icon",{attrs:{name:"plus"}}),a("div",{staticClass:"text"},[e._v("请上传付款凭证")])],1)],1)]:e._e(),e.status==e.TRANSACTING_ORDER_STATUS.WAITING_FOR_TRANSFER?[a("div",{staticClass:"warning"},[e._v(" 1.请务必使用您实名认证的付款方式进行转账，否则卖家有权利 延迟或拒绝转币 ")]),a("div",{staticClass:"warning"},[e._v(" 2.转账成功后请上传真实付款凭证，对于提供虚假付款凭证用户 平台将予以严肃处理，恶意提供虚假转账用户平台封号处理 ")]),a("div",{staticClass:"warning"},[e._v(" 3.上传真实付款凭证后点击「我已转账」等待商家审核 ")])]:e._e(),a("div",{staticClass:"btns"},[e.status==e.TRANSACTING_ORDER_STATUS.TIME_OVER||e.status==e.TRANSACTING_ORDER_STATUS.SELLER_DID_NOT_RECEIVE&&!e.isCountdownEnd?[a("van-button",{staticClass:"primary block",on:{click:e.apply_disputing}},[e._v(" 申请客服介入 ")])]:e._e(),e.status==e.TRANSACTING_ORDER_STATUS.WAITING_FOR_TRANSFER?[a("van-button",{staticClass:"danger block",on:{click:e.cancel_transaction}},[e._v(" 取消交易 ")]),a("van-button",{staticClass:"primary block",on:{click:e.is_transferred}},[e._v(" 我已转账 ")])]:e._e(),e.status==e.TRANSACTING_ORDER_STATUS.DISPUTING?[a("van-button",{staticClass:"primary block"},[e._v(" 联系客服 ")])]:e._e()],2),a("van-dialog",{staticClass:"applyDialog",attrs:{title:"请简要描述您的申诉内容","show-cancel-button":"","confirm-button-text":"提交申诉","confirm-button-color":"#6F59FE"},on:{confirm:e.submitApplying,closed:function(t){e.applyContent=""}},model:{value:e.isApplyDialogVisiblity,callback:function(t){e.isApplyDialogVisiblity=t},expression:"isApplyDialogVisiblity"}},[a("van-field",{attrs:{autocomplete:e.$root.getHash(),rows:"3",autosize:"",type:"textarea",maxlength:"50",placeholder:"0/50","show-word-limit":""},model:{value:e.applyContent,callback:function(t){e.applyContent=t},expression:"applyContent"}})],1)],2)},r=[],s=n(23796),i=(n(68309),n(75628)),o=(n(41539),n(92222),n(9515)),u=function(t,e){return new Promise((function(n,a){o.Z.confirm({title:t,message:e,confirmButtonText:"是",cancelButtonText:"否",confirmButtonColor:"#6f59fe",allowHtml:!0,beforeClose:function(t,e){e(),"confirm"===t?n():a()}})}))},c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return u("你确定取消该笔交易",'<div>\n      <div class="tip">\n        提示：\n      </div>\n      <div>\n        1.如果你已给卖方付款，请勿取消交易；\n      </div>\n      <div>\n      2.如果你在一天内取消<span style="color:#FB2222">'.concat(e,'次</span>买卖订单，当天你的账户将会被停止买卖。\n      </div>\n      <div class="al-c">\n          今日还可取消\n          <span style="color:#FB2222">').concat(t,"次</span>\n          挂单，请谨慎操作\n      </div>\n    </div>\n"))},l=function(){return u("是否已转账",'请再次确认您已使用实名认证账户成功转账，\n如发现有违规操作可能会面临\n<span style="color:#FB2222">\n    「永久封号」\n</span>\n处理')},d=function(){return o.Z.alert({message:'<div class="al-c">请上传付款凭证</div>',confirmButtonColor:"#6f59fe",allowHtml:!0})},p=n(64669),f=n(21380),_=n(51161),m={components:{BankPaymentInfo:p.JF,WechatPaymentInfo:p.Ey,AliPaymentInfo:p.q$},data:function(){var t;return{PAYMENT_METHOD:i.hL,STATUS_TYPE:i.Z2,BUYER_STEP:i.B2,TRANSACTING_ORDER_STATUS:i.eD,status:i.eD.WAITING_FOR_TRANSFER,componentsMapping:(t={},(0,s.Z)(t,i.hL.BANK,"BankPaymentInfo"),(0,s.Z)(t,i.hL.ALI,"AliPaymentInfo"),(0,s.Z)(t,i.hL.WE_CHAT,"WechatPaymentInfo"),t),countdown:0,isTimeOut:!1,loading:!1,isApplyDialogVisiblity:!1,applyContent:"",orderInfo:{},sellerPayment:{},buyerPayment:{},imageList:[]}},computed:{hide:function(){return!(this.status===this.TRANSACTING_ORDER_STATUS.TRANSFERRED&&!this.isCountdownEnd||this.status===this.TRANSACTING_ORDER_STATUS.DISPUTING||this.status===this.TRANSACTING_ORDER_STATUS.WAITING_FOR_TRANSFER)},isCountdownEnd:function(){return this.countdown<=0},stepsActive:function(){return this.BUYER_STEP[this.status]},isTimeoutDisputing:function(){return!(this.status!=this.TRANSACTING_ORDER_STATUS.DISPUTING||!this.isTimeOut)}},created:function(){this.load(),this.$root.$emit("root:set-topbar",["left-back","customer-service"])},beforeDestroy:function(){clearTimeout(this.timer)},methods:{transactingOrderStatus:function(){var t;return(t=this.$options.filters).transactingOrderStatus.apply(t,arguments)},cancel_transaction:function(){var t=this;(0,f.y6)().then((function(e){var n=e.ok,a=e.data,r=e.msg;n?c(a.allowedCancelsOrderDailyCount-a.cancelsOrderDailyCount,a.allowedCancelsOrderDailyCount).then((function(){(0,f._d)({orderId:t.$route.params.id}).then((function(e){var n=e.ok,a=e.msg;n?(t.status=i.eD.BUYRER_CANCELD_DEAL,t.$toast.success(a),t.load()):t.$toast.fail(a)}))})):t.$toast.fail(r)}))},is_transferred:function(){var t=this;if(!this.imageList.length)return d();l().then((function(){(0,f.l$)({orderId:t.$route.params.id,voucher:t.imageList[0].url}).then((function(e){var n=e.ok,a=e.msg;n?(t.status=i.eD.TRANSFERRED,t.$toast.success(a),t.load()):t.$toast.fail(a)}))}))},apply_disputing:function(){this.isApplyDialogVisiblity=!0},submitApplying:function(){var t=this;(0,f.R9)({orderId:this.$route.params.id}).then((function(e){var n=e.ok,a=e.msg;n?(t.status===i.eD.TIME_OVER&&(t.isTimeoutDisputing=!0),t.status=i.eD.DISPUTING,t.$toast.success(a),t.load()):t.$toast.fail(a)}))},load:function(){this.loadOrderDetail(this.$route.params.id)},loadOrderDetail:function(t){var e=this;this.loading||(this.loading=!0,(0,f.fW)({orderId:t}).then((function(t){var n=t.ok,a=t.msg,r=t.data;e.loading=!1,n?(clearTimeout(e.timer),e.orderInfo=r.order,e.sellerPayment=r.sellerPayment,e.buyerPayment=r.buyerPayment,e.orderInfo.appeal>0?(e.status=i.eD.DISPUTING,e.orderInfo.status===i.eD.TIME_OVER&&(e.isTimeOut=!0)):e.status=e.orderInfo.status,r.currentStateExpireTime&&(r.currentStateExpireTime.expire?e.countdown=1e3*r.currentStateExpireTime.expire-e.$root.getServerTime():e.countdown=0),e.refreshStatus()):e.$toast.fail(a)})))},refreshStatus:function(){var t=this;this.timer=setTimeout((function(){(0,f.dF)({orderId:t.orderInfo.orderId}).then((function(e){var n=e.ok,a=e.data;if(t.refreshStatus(),n){var r=t.status;t.orderInfo.appeal>0?(t.status=i.eD.DISPUTING,a.status===i.eD.TIME_OVER&&(t.isTimeOut=!0)):t.status=a.status,t.status!==r&&t.loadOrderDetail(t.orderInfo.orderId)}}))}),1e4)},onCountdownFinish:function(){this.load()},afterRead:function(t){var e=this;t.status="uploading",t.message="上传中...",(0,_.w)({imgFile:t.file,type:"tradeImg"}).then((function(n){var a=n.ok,r=n.data,s=n.msg;a?(t.status="done",e.imageList[0].url=e.$root.getImageUrl(r.name)):(t.status="error",t.message="上传失败",e.$toast.fail(s))}))},onClickUpload:function(t){var e=this;this.$root.isH5Plus&&(t.preventDefault(),window.h5p.uploadImage((function(t){t?(e.imageList.push({file:{file:t}}),e.afterRead({file:t})):e.$toast.fail("获取图片失败")}),!0))}}},T=m,v=n(1001),S=(0,v.Z)(T,a,r,!1,null,null,null),y=S.exports},21380:function(t,e,n){n.d(e,{$Z:function(){return u},$i:function(){return o},CI:function(){return m},Ej:function(){return v},Hn:function(){return l},N8:function(){return T},R9:function(){return R},T7:function(){return E},XW:function(){return S},_H:function(){return r},_d:function(){return y},an:function(){return f},cf:function(){return p},dF:function(){return d},fW:function(){return c},l$:function(){return h},uF:function(){return s},v1:function(){return i},vi:function(){return _},y6:function(){return A}});var a=n(51922),r=function(t){return(0,a.q)({url:"/Api/Market/PendingOrder/marketPendingOrderList",method:"POST",data:t})},s=function(t){return(0,a.q)({url:"/Api/Market/Order/myOrderList",method:"GET",data:t})},i=function(t){return(0,a.q)({url:"/Api/Market/Sell/index",method:"POST",data:t})},o=function(t){return(0,a.q)({url:"/Api/Market/Sell/recycle",method:"POST",data:t})},u=function(t){return(0,a.q)({url:"Api/Market/PendingOrder/myPendingOrderList",method:"POST",data:t})},c=function(t){return(0,a.q)({url:"/Api/Market/Order/myOrderDetail",method:"GET",data:t})},l=function(t){return(0,a.q)({url:"/Api/Market/PendingOrder/marketPendingOrderDetail",method:"POST",data:t})},d=function(t){return(0,a.q)({url:"/Api/Market/Order/getCurrentOrderStatus",method:"GET",data:t})},p=function(t){return(0,a.q)({url:"/Api/Market/PendingOrder/myPendingOrderDetail",method:"GET",data:t})},f=function(t){return(0,a.q)({url:"/Api/Market/Order/buyerCreatesOrder",method:"POST",data:t})},_=function(t){return(0,a.q)({url:"/Api/Market/PendingOrder/getOrderListByPendingOrder",method:"GET",data:t})},m=function(t){return(0,a.q)({url:"/Api/Market/Order/sellerRefusesToCreateOrder",method:"POST",data:t})},T=function(t){return(0,a.q)({url:"/Api/Market/Order/sellerConfirmsToCreateOrder",method:"POST",data:t})},v=function(t){return(0,a.q)({url:"/Api/Market/Order/sellerHasNotReceivedPayment",method:"POST",data:t})},S=function(t){return(0,a.q)({url:"/Api/Market/Order/sellerCompletesOrder",method:"POST",data:t})},y=function(t){return(0,a.q)({url:"/Api/Market/Order/buyerCancelsOrder",method:"POST",data:t})},h=function(t){return(0,a.q)({url:"/Api/Market/Order/buyerConfirmsOrderHasBeenPaid",method:"POST",data:t})},R=function(t){return(0,a.q)({url:"/Api/Market/Order/buyerAppeals",method:"POST",data:t})},A=function(t){return(0,a.q)({url:"/Api/Market/Order/getCancelsOrderDailyCount",method:"GET",data:t})},E=function(t){return(0,a.q)({url:"/Api/User/TransferOrder/userDeposit",method:"POST",data:t})}},64669:function(t,e,n){n.d(e,{q$:function(){return A},JF:function(){return l},Ey:function(){return T}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-cell-group",{attrs:{border:!1},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",{staticClass:"title"},[t._v(t._s(t.title))]),t._t("title-right")]},proxy:!0}],null,!0)},[n("van-cell",{staticClass:"kv",attrs:{title:"银行名称",border:!1}},[t._v(" "+t._s(t._f("hide")(t.findBank.bankName,t.hide))+" ")]),n("van-cell",{staticClass:"kv",attrs:{title:"开户所在地",border:!1}},[t._v(" "+t._s(t._f("hide")(t.getAddrFromCode(t.payment.province,t.payment.city),t.hide))+" ")]),n("van-cell",{staticClass:"kv",attrs:{title:"开户支行",border:!1}},[t._v(" "+t._s(t._f("hide")(t.payment.bankBranch,t.hide))+" ")]),n("van-cell",{staticClass:"kv",attrs:{title:"姓名",border:!1},scopedSlots:t._u([{key:"right-icon",fn:function(){return[n("div",{staticClass:"copy"})]},proxy:!0}])},[t._v(" "+t._s(t._f("hide")(t.payment.realName,t.hide))+" ")]),n("van-cell",{staticClass:"kv",attrs:{title:"银行卡号",border:!1},scopedSlots:t._u([{key:"right-icon",fn:function(){return[n("div",{staticClass:"copy"})]},proxy:!0}])},[t._v(" "+t._s(t._f("hide")(t.payment.bankNo,t.hide))+" ")])],1)},r=[],s=(n(69826),n(41539),n(7601)),i={props:{title:String,hide:Boolean,payment:{default:function(){return{bankId:"中国农业银行",city:"广东省 广州市",payment:"",bankBranch:"黄浦区万达广场支行",realName:"张三",bankNo:"6227 0029 6666 7777 888"}}}},computed:{findBank:function(){var t=this;return this.$root.banks.find((function(e){return e.bankId==t.payment.bankId}))||{}}},methods:{getAddrFromCode:function(t,e){return s.H.province_list[t]+" "+s.H.city_list[e]}}},o=i,u=n(1001),c=(0,u.Z)(o,a,r,!1,null,null,null),l=c.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-cell-group",{attrs:{border:!1},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",{staticClass:"title"},[t._v(t._s(t.title))])]},proxy:!0}])},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"left"},[n("van-cell",{staticClass:"kv",attrs:{title:"微信账号",border:!1},scopedSlots:t._u([{key:"right-icon",fn:function(){return[n("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.hide?"":t.payment.account||"",expression:"hide ? '' : payment.account || ''"}],staticClass:"copy copyBtn",on:{success:t.$root.copySuccessful}})]},proxy:!0}])},[t._v(" "+t._s(t._f("hide")(t.payment.account,t.hide))+" ")]),n("van-cell",{staticClass:"kv",attrs:{title:"姓名",border:!1},scopedSlots:t._u([{key:"right-icon",fn:function(){return[n("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.hide?"":t.payment.realName||"",expression:"hide ? '' : payment.realName || ''"}],staticClass:"copy copyBtn",on:{success:t.$root.copySuccessful}})]},proxy:!0}])},[t._v(" "+t._s(t._f("hide")(t.payment.realName,t.hide))+" ")])],1),t.hide?n("div",{staticClass:"qr"},[[t._v(" 收款二维码 ")]],2):n("van-image",{attrs:{src:t.hide?"":t.$root.getImageUrl(t.payment.receiptCode)}})],1)])},p=[],f={props:{title:String,hide:Boolean,payment:{default:function(){return{account:"中国农业银行",realName:"广东省 广州市",receiptCode:""}}}}},_=f,m=(0,u.Z)(_,d,p,!1,null,"a8baf5b0",null),T=m.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-cell-group",{attrs:{border:!1},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",{staticClass:"title"},[t._v(t._s(t.title))])]},proxy:!0}])},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"left"},[n("van-cell",{staticClass:"kv",attrs:{title:"支付宝账号",border:!1},scopedSlots:t._u([{key:"right-icon",fn:function(){return[n("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.hide?"":t.payment.account||"",expression:"hide ? '' : payment.account || ''"}],staticClass:"copy copyBtn",on:{success:t.$root.copySuccessful}})]},proxy:!0}])},[t._v(" "+t._s(t._f("hide")(t.payment.account,t.hide))+" ")]),n("van-cell",{staticClass:"kv",attrs:{title:"姓名",border:!1},scopedSlots:t._u([{key:"right-icon",fn:function(){return[n("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.hide?"":t.payment.realName||"",expression:"hide ? '' : payment.realName || ''"}],staticClass:"copy copyBtn",on:{success:t.$root.copySuccessful}})]},proxy:!0}])},[t._v(" "+t._s(t._f("hide")(t.payment.realName,t.hide))+" ")])],1),t.hide?n("div",{staticClass:"qr"},[[t._v(" 收款二维码 ")]],2):n("van-image",{attrs:{src:t.hide?"":t.$root.getImageUrl(t.payment.receiptCode)}})],1)])},S=[],y={props:{title:String,hide:Boolean,payment:{default:function(){return{account:"中国农业银行",realName:"广东省 广州市",receiptCode:""}}}}},h=y,R=(0,u.Z)(h,v,S,!1,null,"65614cf1",null),A=R.exports}}]);