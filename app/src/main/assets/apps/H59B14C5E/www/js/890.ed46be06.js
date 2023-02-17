"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[890],{21380:function(e,t,r){r.d(t,{$Z:function(){return s},$i:function(){return c},CI:function(){return v},Ej:function(){return h},Hn:function(){return l},N8:function(){return y},R9:function(){return b},T7:function(){return g},XW:function(){return _},_H:function(){return a},_d:function(){return k},an:function(){return f},cf:function(){return p},dF:function(){return d},fW:function(){return u},l$:function(){return O},uF:function(){return i},v1:function(){return o},vi:function(){return m},y6:function(){return C}});var n=r(51922),a=function(e){return(0,n.q)({url:"/Api/Market/PendingOrder/marketPendingOrderList",method:"POST",data:e})},i=function(e){return(0,n.q)({url:"/Api/Market/Order/myOrderList",method:"GET",data:e})},o=function(e){return(0,n.q)({url:"/Api/Market/Sell/index",method:"POST",data:e})},c=function(e){return(0,n.q)({url:"/Api/Market/Sell/recycle",method:"POST",data:e})},s=function(e){return(0,n.q)({url:"Api/Market/PendingOrder/myPendingOrderList",method:"POST",data:e})},u=function(e){return(0,n.q)({url:"/Api/Market/Order/myOrderDetail",method:"GET",data:e})},l=function(e){return(0,n.q)({url:"/Api/Market/PendingOrder/marketPendingOrderDetail",method:"POST",data:e})},d=function(e){return(0,n.q)({url:"/Api/Market/Order/getCurrentOrderStatus",method:"GET",data:e})},p=function(e){return(0,n.q)({url:"/Api/Market/PendingOrder/myPendingOrderDetail",method:"GET",data:e})},f=function(e){return(0,n.q)({url:"/Api/Market/Order/buyerCreatesOrder",method:"POST",data:e})},m=function(e){return(0,n.q)({url:"/Api/Market/PendingOrder/getOrderListByPendingOrder",method:"GET",data:e})},v=function(e){return(0,n.q)({url:"/Api/Market/Order/sellerRefusesToCreateOrder",method:"POST",data:e})},y=function(e){return(0,n.q)({url:"/Api/Market/Order/sellerConfirmsToCreateOrder",method:"POST",data:e})},h=function(e){return(0,n.q)({url:"/Api/Market/Order/sellerHasNotReceivedPayment",method:"POST",data:e})},_=function(e){return(0,n.q)({url:"/Api/Market/Order/sellerCompletesOrder",method:"POST",data:e})},k=function(e){return(0,n.q)({url:"/Api/Market/Order/buyerCancelsOrder",method:"POST",data:e})},O=function(e){return(0,n.q)({url:"/Api/Market/Order/buyerConfirmsOrderHasBeenPaid",method:"POST",data:e})},b=function(e){return(0,n.q)({url:"/Api/Market/Order/buyerAppeals",method:"POST",data:e})},C=function(e){return(0,n.q)({url:"/Api/Market/Order/getCancelsOrderDailyCount",method:"GET",data:e})},g=function(e){return(0,n.q)({url:"/Api/User/TransferOrder/userDeposit",method:"POST",data:e})}},51688:function(e,t,r){r.d(t,{EQ:function(){return c},H9:function(){return i},VN:function(){return o},di:function(){return s}});r(41539),r(92222);var n=r(61404),a=function(e,t){return new Promise((function(r,a){n.Z.confirm({title:e,message:t,confirmButtonText:"是",cancelButtonText:"否",confirmButtonColor:"#6f59fe",allowHtml:!0,beforeClose:function(e,t){t(),"confirm"===e?r():a()}})}))},i=function(){return a("是否开始交易","<div>\n开始交易后可在“交易记录”，“订单”中\n「我的卖单」完成后续操作\n</div>")},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return a("是否取消该笔交易",'<div>\n      <div class="tip">\n        提示：\n      </div>\n      <div>\n          1.如果你在一天内取消<span style="color:#FB2222">'.concat(t,'次</span>订单，当天你的账户将会被停止买卖。\n      </div>\n      <div class="al-c">\n          今日还可取消\n          <span style="color:#FB2222">').concat(e,"次</span>\n          订单，请谨慎操作\n      </div>\n    </div>\n"))},c=function(){return a("是否未收到转账",'请再次确认您的收款账户是否未收到转账，\n如发现\n<span style="color:#FB2222">恶意不确认转币</span>\n可能会面临\n<span style="color:#FB2222">「永久封号」</span>\n处理')},s=function(){return a("是否收到转账",'请再次确认买家否已付款，且到款信息\n是否与<span style="color:#FB2222">「买方付款信息」</span>一致')}},16116:function(e,t,r){r.d(t,{q$:function(){return S},JF:function(){return d},Ey:function(){return _}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("van-cell-group",{attrs:{border:!1},scopedSlots:e._u([{key:"title",fn:function(){return[r("span",{staticClass:"title"},[e._v(e._s(e.title))]),e._t("title-right")]},proxy:!0}],null,!0)},[r("van-cell",{staticClass:"kv",attrs:{border:!1,title:"银行名称"}},[e._v(" "+e._s(e._f("hide")(e.findBank.bankName,e.hide,"*****"))+" ")]),r("van-cell",{staticClass:"kv",attrs:{border:!1,title:"开户所在地"}},[e._v(" "+e._s(e._f("hide")(e.getAddrFromCode(e.payment.province,e.payment.city),e.hide,"*** ***"))+" ")]),r("van-cell",{staticClass:"kv",attrs:{border:!1,title:"开户支行"}},[e._v(" "+e._s(e._f("hide")(e.payment.bankBranch,e.hide,"*******"))+" ")]),r("van-cell",{staticClass:"kv",attrs:{border:!1,title:"姓名"},scopedSlots:e._u([{key:"right-icon",fn:function(){return[r("div",{directives:[{name:"clipboard",rawName:"v-clipboard",value:e.hide?"":e.payment.realName||"",expression:"hide ? '' : payment.realName || ''"}],staticClass:"copy copyBtn",on:{success:e.$root.copySuccessful}})]},proxy:!0}])},[e._v(" "+e._s(e._f("hide")(e.payment.realName,e.hide,"**"))+" ")]),r("van-cell",{staticClass:"kv",attrs:{border:!1,title:"银行卡号"},scopedSlots:e._u([{key:"right-icon",fn:function(){return[r("div",{directives:[{name:"clipboard",rawName:"v-clipboard",value:e.hide?"":e.payment.bankNo||"",expression:"hide ? '' : payment.bankNo || ''"}],staticClass:"copy copyBtn",on:{success:e.$root.copySuccessful}})]},proxy:!0}])},[e._v(" "+e._s(e._f("hide")(e.payment.bankNo,e.hide,"**** **** **** **** ****"))+" ")])],1)},a=[],i=r(16198),o=(r(78975),r(69826),r(41539),r(50622)),c={props:{title:String,hide:Boolean,payment:{default:function(){return{bankName:"******",province:"",city:"",bankBranch:"*******",realName:"**",bankNo:"**** **** **** **** ****"}}}},data:function(){return{areaList:{province_list:{},city_list:{}}}},computed:{findBank:function(){var e=this;return this.$root.banks.find((function(t){return t.bankId==e.payment.bankId}))||{}}},created:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,o.e5)();case 2:if(t.t0=t.sent.areaList,t.t0){t.next=5;break}t.t0={province_list:{},city_list:{}};case 5:e.areaList=t.t0;case 6:case"end":return t.stop()}}),t)})))()},methods:{getAddrFromCode:function(e,t){return this.areaList.province_list[e]+" "+this.areaList.city_list[t]}}},s=c,u=r(1001),l=(0,u.Z)(s,n,a,!1,null,"23eff4c3",null),d=l.exports,p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("van-cell-group",{attrs:{border:!1},scopedSlots:e._u([{key:"title",fn:function(){return[r("span",{staticClass:"title"},[e._v(e._s(e.title))])]},proxy:!0}])},[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"left"},[r("van-cell",{staticClass:"kv",attrs:{border:!1,title:"微信真实姓名"},scopedSlots:e._u([{key:"right-icon",fn:function(){return[r("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:e.hide?"":e.payment.wxRealname||"",expression:"hide ? '' : payment.wxRealname || ''"}],staticClass:"copy copyBtn",on:{success:e.$root.copySuccessful}})]},proxy:!0}])},[e._v(" "+e._s(e._f("hide")(e.payment.wxRealname,e.hide,"微信"))+" ")]),r("van-cell",{staticClass:"kv",attrs:{border:!1,title:"姓名"},scopedSlots:e._u([{key:"right-icon",fn:function(){return[r("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:e.hide?"":e.payment.realName||"",expression:"hide ? '' : payment.realName || ''"}],staticClass:"copy copyBtn",on:{success:e.$root.copySuccessful}})]},proxy:!0}])},[e._v(" "+e._s(e._f("safeRealName")(e._f("hide")(e.payment.realName,e.hide,"***")))+" ")])],1),e.hide?r("div",{staticClass:"qr"},[[e._v(" 收款二维码")]],2):r("van-image",{attrs:{src:e.hide?"":e.$root.getImageUrl(e.payment.receiptCode)},on:{click:function(t){e.preview(e.hide,e.$root.getImageUrl(e.payment.receiptCode))}}})],1)])},f=[],m=r(32277),v={props:{title:String,hide:Boolean,payment:{default:function(){return{account:"**",realName:"***",receiptCode:""}}}},methods:{preview:function(e,t){e||(0,m.Z)([t])}}},y=v,h=(0,u.Z)(y,p,f,!1,null,"aa6ea60e",null),_=h.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("van-cell-group",{attrs:{border:!1},scopedSlots:e._u([{key:"title",fn:function(){return[r("span",{staticClass:"title"},[e._v(e._s(e.title))])]},proxy:!0}])},[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"left"},[r("van-cell",{staticClass:"kv",attrs:{border:!1,title:"支付宝账号"},scopedSlots:e._u([{key:"right-icon",fn:function(){return[r("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:e.hide?"":e.payment.alipayAccount||"",expression:"hide ? '' : payment.alipayAccount || ''"}],staticClass:"copy copyBtn",on:{success:e.$root.copySuccessful}})]},proxy:!0}])},[e._v(" "+e._s(e._f("hide")(e.payment.alipayAccount,e.hide,"支付宝"))+" ")]),r("van-cell",{staticClass:"kv",attrs:{border:!1,title:"姓名"},scopedSlots:e._u([{key:"right-icon",fn:function(){return[r("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:e.hide?"":e.payment.realName||"",expression:"hide ? '' : payment.realName || ''"}],staticClass:"copy copyBtn",on:{success:e.$root.copySuccessful}})]},proxy:!0}])},[e._v(" "+e._s(e._f("safeRealName")(e._f("hide")(e.payment.realName,e.hide,"**")))+" ")])],1),e.hide?r("div",{staticClass:"qr"},[[e._v(" 收款二维码")]],2):r("van-image",{attrs:{src:e.hide?"":e.$root.getImageUrl(e.payment.receiptCode)},on:{click:function(t){e.preview(e.hide,e.$root.getImageUrl(e.payment.receiptCode))}}})],1)])},O=[],b={props:{title:String,hide:Boolean,payment:{default:function(){return{account:"***",realName:"**",receiptCode:""}}}},methods:{preview:function(e,t){e||(0,m.Z)([t])}}},C=b,g=(0,u.Z)(C,k,O,!1,null,"58c31ec1",null),S=g.exports}}]);