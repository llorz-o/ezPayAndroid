"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[1331],{47804:function(e,t,r){r.d(t,{Z:function(){return u}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"level"},e._l(5,(function(t){var n;return r("div",{key:t,staticClass:"grade mini",class:(n={},n["g"+e.largeLevel+((5==t?0==e.levelModel:e.levelModel>=t||0==e.levelModel)?"l":"")]=!0,n)})})),0)},a=[],o=(r(9653),{name:"Level",props:{level:{type:Number,default:1}},computed:{levelModel:function(){return this.level%5},largeLevel:function(){return this.levelModel>=1?(this.level-this.levelModel)/5+1:this.level/5}}}),s=o,l=r(1001),i=(0,l.Z)(s,n,a,!1,null,null,null),u=i.exports},71331:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page page-sale"},[r("div",{staticClass:"top-wrapper"},[r("div",{staticClass:"merchant"},[r("div",{staticClass:"left"},[r("van-image",{staticClass:"avatar",attrs:{src:e.$root.getImageUrl(e.$root.userInfo.avatar),fit:"cover",round:""}}),r("div",{staticClass:"seller-info"},[r("div",{staticClass:"name"},[e._v(e._s(e.$root.userInfo.nickname))]),r("Level",{attrs:{level:this.$root.userInfo.creditLevel}})],1)],1),r("div",{staticClass:"right"},[r("div",{staticClass:"label"},[e._v("余额（V币）")]),r("div",{staticClass:"amount"},[e._v(" "+e._s(parseFloat(e.$root.userInfo.balance).toFixed(2))+" ")])])])]),r("van-form",{on:{submit:e.handlerSubmit}},[r("van-field",{attrs:{autocomplete:"new-password",label:"钱包地址：",placeholder:"请输入收款商户钱包地址",type:"text"},model:{value:e.form.walletAddress,callback:function(t){e.$set(e.form,"walletAddress",t)},expression:"form.walletAddress"}}),r("van-field",{attrs:{autocomplete:"new-password",label:"转账金额：",placeholder:"请输入转账金额",type:"number"},model:{value:e.form.amount,callback:function(t){e.$set(e.form,"amount",t)},expression:"form.amount"}}),r("p",{staticStyle:{"font-size":"12px","text-align":"center",padding:"10px 0 0"}},[e._v(" 注：该功能仅允许向商户钱包地址转账")]),r("van-button",{staticClass:"block primary",attrs:{"native-type":"submit"}},[e._v(" 确认转账 ")])],1)],1)},a=[],o=r(49749),s=r(39873),l=(r(83040),r(47804)),i=r(53045),u=r(39766),c={components:{Level:l.Z},data:function(){return{form:{amount:"",walletAddress:""}}},created:function(){this.$root.$emit("root:set-topbar",["left-back","customer-service"])},methods:{handlerSubmit:function(){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function t(){var r,n,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.form.walletAddress){t.next=2;break}return t.abrupt("return",e.$toast.fail("请输入转账地址"));case 2:if(e.form.amount){t.next=4;break}return t.abrupt("return",e.$toast.fail("请输入转账金额"));case 4:return t.next=6,(0,u.x)(e);case 6:if(r=t.sent,!r||6!==r.length){t.next=14;break}return t.next=10,(0,i.eU)((0,o.Z)((0,o.Z)({},e.form),{},{securePassword:r}));case 10:n=t.sent,a=n.ok,s=n.msg,a?(e.$toast.success("转账成功"),e.form={amount:"",walletAddress:""}):e.$toast.fail(s||"转账失败");case 14:case"end":return t.stop()}}),t)})))()}}},f=c,d=r(1001),v=(0,d.Z)(f,n,a,!1,null,null,null),m=v.exports},39766:function(e,t,r){r.d(t,{D:function(){return s},x:function(){return o}});var n=r(39873),a=(r(83040),r(41539),r(32564),r(53045)),o=function(e){return e.$toast("请输入资金密码"),new Promise((function(t,r){e.$root.showPassowordKeyboard=!0,e.$root.$once("root:global-password",function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",t(r));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))},s=function(e){return e.$root.userInfo&&e.$root.userInfo.isGoogleAuthenticator?(e.$toast("请输入Google安全码"),new Promise((function(t,r){setTimeout((function(){e.$root.showPassowordKeyboard=!0,e.$root.$once("root:global-password",function(){var r=(0,n.Z)(regeneratorRuntime.mark((function r(n){var o,s,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n&&"close-by-route-change"!==n){r.next=2;break}return r.abrupt("return",t(!1));case 2:return r.next=4,(0,a.Wg)({safeCode:n});case 4:o=r.sent,s=o.ok,l=o.msg,s?t(!0):(t(!1),e.$toast.fail(l));case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}),0)}))):Promise.resolve(!0)}}}]);
//# sourceMappingURL=1331.313907f2.js.map