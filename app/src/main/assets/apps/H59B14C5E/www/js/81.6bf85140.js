"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[81],{89081:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page page-user-report"},[s("van-field",{attrs:{autocomplete:"new-password",border:"",label:"标题:","label-width":"45",placeholder:"请输入标题"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),s("van-field",{staticClass:"textarea",attrs:{autocomplete:"new-password",maxlength:"200",placeholder:"0/200 请详细描述你的问题或意见",rows:"7",type:"textarea"},model:{value:e.issue,callback:function(t){e.issue=t},expression:"issue"}}),s("van-button",{staticClass:"primary block",class:{disabled:!e.title||!e.issue},on:{click:e.submit}},[e._v(" 提交 ")])],1)},l=[],i={data:function(){return{title:"",issue:""}},created:function(){this.$root.$emit("root:set-topbar",["left-back"])},methods:{submit:function(){this.$toast.success("反馈成功"),this.$router.back()}}},r=i,n=s(1001),o=(0,n.Z)(r,a,l,!1,null,null,null),u=o.exports}}]);