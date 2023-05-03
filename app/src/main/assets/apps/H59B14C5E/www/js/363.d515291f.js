"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[363],{55363:function(t,e,s){s.r(e),s.d(e,{default:function(){return d}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page page-user"},[s("van-cell-group",{attrs:{border:!1}},[s("van-cell",{staticClass:"userInfo",scopedSlots:t._u([{key:"title",fn:function(){return[s("div",{staticClass:"avatarBox"},[s("van-uploader",{attrs:{"after-read":t.afterRead,"preview-image":!1,"max-count":"1","result-type":"file"},nativeOn:{click:function(e){return function(e){return t.onClickUpload(e)}.apply(null,arguments)}}},[s("van-image",{attrs:{src:t.$root.getImageUrl(t.userInfo.avatar),fit:"cover",round:""}},[s("div",{staticClass:"defaultAvatar size60",attrs:{slot:"error"},slot:"error"})])],1),s("div",{staticClass:"icon-camera"})],1)]},proxy:!0},{key:"right-icon",fn:function(){return[s("div",{staticClass:"creditStatus",class:{pass:t.userInfo.isRealNameAuth}},[s("div",{staticClass:"icon-certificate"}),t._v(" "+t._s(t.userInfo.isRealNameAuth?"已认证":"未认证")+" ")])]},proxy:!0}])},[s("div",{staticClass:"info"},[s("div",{staticClass:"username",on:{click:function(e){return t.$router.push("/user_nickname")}}},[t._v(" "+t._s(t.userInfo.nickname)+" "),s("van-icon",{attrs:{name:"edit"}})],1),s("div",{staticClass:"walletAddr"},[s("span",{staticClass:"van-ellipsis"},[t._v(" 钱包地址 "+t._s(t.userInfo.walletAddress)+" ")]),s("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.userInfo.walletAddress,expression:"userInfo.walletAddress"}],staticClass:"copy copyBtn",on:{success:t.$root.copySuccessful}})]),s("div",{staticClass:"credit",on:{click:function(e){return t.$router.push("/user_credit")}}},[t._v(" 信用等级 "),s("div",{staticClass:"volume"},t._l(5,(function(e){var a;return s("div",{key:e,staticClass:"grade mini",class:(a={},a["g"+t.largeLevel+((5==e?0==t.levelModel:t.levelModel>=e||0==t.levelModel)?"l":"")]=!0,a)})})),0)])])]),s("van-cell",{attrs:{"is-link":"",title:"个人账变",to:"user_bill"}}),s("van-cell",{attrs:{"is-link":"",title:"个人转账",to:"user_transfer"}})],1),s("div",{staticClass:"gray-8"}),s("van-cell-group",[s("van-cell",{attrs:{"is-link":""===t.userInfo.auditRealNameStatus,to:t.userInfo.isRealNameAuth?"":"/user_certify",title:"实名认证"}},[[t.userInfo.isRealNameAuth?s("span",{staticStyle:{color:"#07ca5e"}},[t._v(" 已实名认证 ")]):0===t.userInfo.auditRealNameStatus?s("span",{staticStyle:{color:"#6f5bfe"}},[t._v(" 审核中 ")]):2===t.userInfo.auditRealNameStatus?s("span",{staticStyle:{color:"#fb2222"}},[t._v(" 审核不通过 ")]):t._e()]],2),s("van-cell",{attrs:{to:"/user_security","is-link":"",title:"安全中心"}}),s("van-cell",{attrs:{to:t.userInfo.userName?"":"/user_name","is-link":!t.userInfo.userName,title:"用户名"}},[t._v(" "+t._s(t.userInfo.userName||"未设置用户名")+" ")]),s("van-cell",{attrs:{"is-link":"",title:"登录设备管理",to:"/user_devices"}}),s("van-cell",{attrs:{"is-link":"",title:"意见反馈",to:"/user_report"}}),s("van-cell",{attrs:{"is-link":"",title:"异常交易行为以及平台处理措施",to:"/panic"}}),s("van-cell",{attrs:{"is-link":"",title:"关于我们",to:"/user_us"}},[t._v(" 版本V"+t._s(t.$root.version)+" ")])],1),s("van-button",{staticClass:"primary block",on:{click:t.exit}},[t._v(" 退出登录")]),t.isErude?t._e():s("div",{staticClass:"debug",attrs:{id:"debug-block"},on:{click:t.onDebug}})],1)},r=[],i=(s(68309),s(74916),s(15306),s(51161)),l=s(13652),n=s(51922),o={data:function(){var t=document.getElementById("eruda-script");return{isErude:!!t,count:0,lastPressTimestamp:0}},created:function(){this.$root.$emit("root:set-topbar",["left-back","customer-service"]),this.$root.fetchUserInfo()},computed:{levelModel:function(){return this.userInfo.creditLevel%5},largeLevel:function(){return this.levelModel>=1?(this.userInfo.creditLevel-this.levelModel)/5+1:this.userInfo.creditLevel/5},userInfo:function(){return this.$root.userInfo||{}}},methods:{onClickUpload:function(t){var e=this;this.$root.isH5Plus&&(t.preventDefault(),window.h5p.uploadImage((function(t){t?e.afterRead({file:t}):e.$toast.fail("获取图片失败")}),!0))},afterRead:function(t){var e=this;console.log(t.file),(0,i.ws)({imgFile:t.file,type:"avatar"}).then((function(t){var s=t.ok,a=t.data,r=t.msg;s?(0,l.J3)({avatarAddr:a.name}).then((function(t){var s=t.ok,r=t.msg;s?e.userInfo.avatar=a.name:e.$toast.fail(r)})):e.$toast.fail(r)}))},exit:function(){this.$root.userInfo=null,(0,n.Ks)(void 0),window.localStorage.clear(),window.sessionStorage.clear(),this.$root.$router.replace("/layout_auth")},onDebug:function(){var t=Date.now();console.log(t-this.lastPressTimestamp),t-this.lastPressTimestamp>500&&this.lastPressTimestamp>0?(this.lastPressTimestamp=0,this.count=0):(this.lastPressTimestamp=t,this.count+=1),this.count>6&&localStorage.setItem("debug",1)}}},u=o,c=s(1001),v=(0,c.Z)(u,a,r,!1,null,null,null),d=v.exports}}]);