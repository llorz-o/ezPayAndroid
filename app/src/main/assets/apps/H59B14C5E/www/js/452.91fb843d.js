"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[452],{71452:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"page page-user-nickname"},[e("van-field",{attrs:{autocomplete:"new-password"},model:{value:n.nickname,callback:function(t){n.nickname=t},expression:"nickname"}}),e("div",{staticClass:"tip"},[n._v("用户名为4-20位字符")])],1)},i=[],s=e(13652),c={data:function(){return{nickname:""}},created:function(){this.nickname=this.$root.userInfo.nickname,this.$root.$emit("root:set-topbar",["left-back","custom-btn"],{label:"保存",onClick:this.save})},methods:{save:function(){var n=this;if(this.nickname.length<4||this.nickname.length>20)return this.$toast.fail("用户名为4-20位字符");(0,s.Ax)({nickname:this.nickname}).then((function(t){var e=t.ok,a=t.msg;e?(n.$root.userInfo.nickname=n.nickname,n.$toast.success(a),n.$router.back()):n.$toast.fail(a)}))}}},o=c,r=e(1001),u=(0,r.Z)(o,a,i,!1,null,null,null),l=u.exports}}]);