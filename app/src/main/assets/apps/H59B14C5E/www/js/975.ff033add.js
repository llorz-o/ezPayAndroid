"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[975],{71975:function(e,t,o){o.r(t),o.d(t,{default:function(){return l}});var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page page-user-bind-phone"},[o("van-form",{on:{submit:e.onSubmit}},[o("van-field",{attrs:{label:"手机号码",autocomplete:"new-password",placeholder:"手机号",type:"tel",maxlength:"11"},model:{value:e.form.phoneNumber,callback:function(t){e.$set(e.form,"phoneNumber",t)},expression:"form.phoneNumber"}}),o("van-field",{attrs:{label:"验证码",autocomplete:"new-password",placeholder:"短信验证码"},scopedSlots:e._u([{key:"extra",fn:function(){return[o("van-button",{staticClass:"btnGetVerifyCode primary",attrs:{size:"small","native-type":"button"},on:{click:e.getSmsVerifyCode}},[e.smsCountdown?o("van-count-down",{attrs:{time:e.smsCountdown,format:"ss","auto-start":""},on:{finish:function(t){e.smsCountdown=0}}}):[e._v(" 获取验证码 ")]],2)]},proxy:!0}]),model:{value:e.form.smsCode,callback:function(t){e.$set(e.form,"smsCode",t)},expression:"form.smsCode"}}),o("van-button",{staticClass:"primary block",class:{disabled:!e.form.phoneNumber||!e.form.smsCode}},[e._v(" 确定 ")])],1)],1)},s=[],r=(o(9653),o(74916),o(77601),o(15306),o(19248)),a=o(13652),u=o(63271),i=o.n(u),m={data:function(){return{form:{phoneNumber:"",smsCode:""},smsCountdown:0}},created:function(){this.$root.$emit("root:set-topbar",["left-back"])},methods:{smsCount:function(){var e=this.$st.get("LAST_SMS_REQUEST");if(e){var t=Date.now()-Number(e);t<60&&(this.smsCountdown=1e3*(60-t))}},getSmsVerifyCode:function(){var e=this;this.smsCountdown||(0,r.Z3)({phoneNumber:this.form.phoneNumber,codeType:"bindPhoneNumber"}).then((function(t){var o=t.ok,n=t.msg;t.data;o?(e.$toast.success(n),e.smsCountdown=6e4,e.$st.set("LAST_SMS_REQUEST",Date.now())):e.$toast.fail(n)}))},onSubmit:function(){var e=this;return/^1[345789]\d{9}$/.test(this.form.phoneNumber)?""==this.form.smsCode?this.$toast.fail("请输入短信验证码"):void(0,a.ED)({phoneNumber:this.form.phoneNumber,smsCode:this.form.smsCode}).then((function(t){var o=t.ok,n=t.msg;o?(e.isAutoLogin=!1,i().set("USER_INFO",0),e.$root.userInfo.isEnteredPhoneNumber=1,e.$toast.success(n),e.$root.isBindPwd||e.$dialog.alert({className:"common",message:"请绑定密码",beforeClose:function(t,o){e.$router.replace("/user_pay_psw"),o()}}),e.$router.back()):e.$toast.fail(n)})):this.$toast.fail("请输入合法的手机号码")}}},d=m,f=o(1001),c=(0,f.Z)(d,n,s,!1,null,"3734de4b",null),l=c.exports},19248:function(e,t,o){o.d(t,{Z3:function(){return a},_B:function(){return u},mg:function(){return s},pw:function(){return r}});var n=o(51922),s=function(e){return(0,n.q)({url:"/Api/Common/VerifyCode/getImageCode",method:"POST",data:e})},r=function(e){return(0,n.q)({url:"/Api/Common/VerifyCode/checkVerifyCode",method:"POST",data:e})},a=function(e){return(0,n.q)({url:"/Api/Common/VerifyCode/sendCode",method:"POST",data:e})},u=function(e){return(0,n.q)({url:"/Api/User/UploadFile/uploadBase64Img",method:"POST",data:e})}}}]);