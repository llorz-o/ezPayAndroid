"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[921],{87921:function(s,o,t){t.r(o),t.d(o,{default:function(){return c}});var e=function(){var s=this,o=s.$createElement,t=s._self._c||o;return t("div",{staticClass:"page page-user-login-psw"},[t("van-form",{on:{submit:s.onSubmit}},[s.$root.isBindPwd?t("div",{staticClass:"form-item"},[t("div",{staticClass:"label"},[s._v("旧密码")]),t("van-field",{attrs:{autocomplete:"new-password",type:s.showPsw?"text":"password",placeholder:"请输入原密码"},model:{value:s.form.oldPassword,callback:function(o){s.$set(s.form,"oldPassword",o)},expression:"form.oldPassword"}},[t("van-button",{staticClass:"btn",attrs:{slot:"extra",size:"mini",icon:s.showPsw?"eye-o":"closed-eye","native-type":"button"},on:{click:function(o){s.showPsw=!s.showPsw}},slot:"extra"})],1),t("div",{staticClass:"tip"},[s._v("请输入6-15位字母数字组成的密码")])],1):s._e(),t("div",{staticClass:"form-item"},[t("div",{staticClass:"label"},[s._v("新密码")]),t("van-field",{attrs:{autocomplete:"new-password",type:s.showPsw2?"text":"password",placeholder:"请输入新密码",clearable:""},model:{value:s.form.newPassword,callback:function(o){s.$set(s.form,"newPassword",o)},expression:"form.newPassword"}},[t("van-button",{staticClass:"btn",attrs:{slot:"extra",size:"mini",icon:s.showPsw2?"eye-o":"closed-eye","native-type":"button"},on:{click:function(o){s.showPsw2=!s.showPsw2}},slot:"extra"})],1),t("div",{staticClass:"tip"},[s._v("请输入6-15位字母数字组成的密码")])],1),t("div",{staticClass:"form-item"},[t("div",{staticClass:"label"},[s._v("确认新密码")]),t("van-field",{attrs:{autocomplete:"new-password",type:s.showPsw3?"text":"password",placeholder:"请确认新密码",clearable:""},model:{value:s.form.confirmPassword,callback:function(o){s.$set(s.form,"confirmPassword",o)},expression:"form.confirmPassword"}},[t("van-button",{staticClass:"btn",attrs:{slot:"extra",size:"mini",icon:s.showPsw3?"eye-o":"closed-eye","native-type":"button"},on:{click:function(o){s.showPsw3=!s.showPsw3}},slot:"extra"})],1),t("div",{staticClass:"tip"},[s._v("请输入6-15位字母数字组成的密码")])],1),t("van-button",{staticClass:"primary block",class:{disabled:!!s.$root.isBindPwd&&!s.form.oldPassword||!s.form.newPassword||!s.form.confirmPassword}},[s._v(" 确定 ")])],1),t("van-dialog",{staticClass:"warning",attrs:{"show-cancel-button":"","close-on-click-overlay":""},on:{confirm:s.onConfirm},scopedSlots:s._u([{key:"title",fn:function(){return[t("van-icon",{attrs:{name:"fail"}})]},proxy:!0}]),model:{value:s.showFailDialog,callback:function(o){s.showFailDialog=o},expression:"showFailDialog"}},[s._v(" 为保障你的账户安全，登录密码修改后 "),t("span",[s._v(" 7天 ")]),s._v(" 以内不允许再次修改 ")])],1)},a=[],i=(t(74916),t(77601),t(13652)),r=t(6163),n={data:function(){return{showFailDialog:!1,form:{oldPassword:"",newPassword:"",confirmPassword:""},showPsw:!1,showPsw2:!1,showPsw3:!1}},created:function(){var s=this;if(this.$root.$emit("root:set-topbar",["left-back"]),this.$root.isBindPwd){var o=this.$root.userInfo.preResetPwdTime;if(o){var t=this.$tls.dateFix(1e3*o),e=this.$root.getServerTime(),a=6048e5;if(e-t<a){var i=(0,r.LU)(a-e+t);this.$dialog.alert({message:"短期内你已修改过密码，请在".concat(i,"后修改密码！"),confirmButtonColor:"#6f59fe",beforeClose:function(o,t){s.$router.back(),t()}})}}}else this.$root.$emit("root:set-title","设置登录密码")},methods:{onSubmit:function(){return this.$root.isBindPwd&&(!/^(?![^a-zA-Z]+$)(?!\D+$)/.test(this.form.oldPassword)||this.form.oldPassword.length<6||this.form.oldPassword.length>15)?this.$toast.fail("请输入正确的旧密码"):!/^(?![^a-zA-Z]+$)(?!\D+$)/.test(this.form.newPassword)||this.form.newPassword.length<6||this.form.newPassword.length>15?this.$toast.fail("请输入6-15位字母数字组成的密码"):this.form.newPassword!=this.form.confirmPassword?this.$toast.fail("两次输入的密码不一致"):void(this.$root.isBindPwd?this.showFailDialog=!0:this.setPwd())},setPwd:function(){var s=this;(0,i.eo)({password:this.form.newPassword}).then((function(o){var t=o.ok,e=o.msg;t?(s.$root.userInfo.isEnteredPassword=!0,s.$toast.success(e)):s.$toast.fail(e),s.$router.back()}))},onConfirm:function(){var s=this;(0,i.J$)({oldPassword:this.form.oldPassword,newPassword:this.form.newPassword}).then((function(o){var t=o.ok,e=o.msg;t?(s.$root.userInfo.preResetPwdTime=s.$root.getServerTime(),s.$toast.success(e),s.$root.exitLogin()):s.$toast.fail(e),s.$router.back()}))}}},l=n,w=t(1001),d=(0,w.Z)(l,e,a,!1,null,null,null),c=d.exports}}]);