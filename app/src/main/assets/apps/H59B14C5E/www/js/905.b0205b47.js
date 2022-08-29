"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[905],{69905:function(a,t,e){e.r(t),e.d(t,{default:function(){return h}});var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"page page-add_payment"},[e("div",{attrs:{id:"reader-2"}}),e("div",{staticClass:"title title_line"},[a._v("请选择收款方式")]),e("van-radio-group",{model:{value:a.payment,callback:function(t){a.payment=t},expression:"payment"}},[e("van-cell-group",[e("van-cell",{attrs:{title:"银行卡",clickable:""},on:{click:function(t){a.payment=1}},scopedSlots:a._u([{key:"icon",fn:function(){return[e("div",{staticClass:"payment-icon bank"})]},proxy:!0},{key:"right-icon",fn:function(){return[e("van-radio",{attrs:{name:1}})]},proxy:!0}])}),e("van-cell",{attrs:{title:"微信支付",clickable:""},on:{click:function(t){a.payment=4}},scopedSlots:a._u([{key:"icon",fn:function(){return[e("div",{staticClass:"payment-icon wechat"})]},proxy:!0},{key:"right-icon",fn:function(){return[e("van-radio",{attrs:{name:4}})]},proxy:!0}])}),e("van-cell",{attrs:{title:"支付宝支付",clickable:""},on:{click:function(t){a.payment=2}},scopedSlots:a._u([{key:"icon",fn:function(){return[e("div",{staticClass:"payment-icon ali"})]},proxy:!0},{key:"right-icon",fn:function(){return[e("van-radio",{attrs:{name:2}})]},proxy:!0}])})],1)],1),1===a.payment?[e("div",{staticClass:"title secondary title_line"},[a._v("填写银行卡信息")]),e("van-form",{on:{submit:a.onSubmit}},[e("van-field",{attrs:{autocomplete:"new-password",readonly:"",clickable:"",name:"bank",value:a.bankFormData.bankName,label:"银行名称",placeholder:"请选择开户行","input-align":"right","right-icon":"arrow"},on:{click:function(t){a.showBankPicker=!0}}}),e("van-field",{attrs:{autocomplete:"new-password",readonly:"",clickable:"",name:"bankAddress",value:a.bankFormData.bankAddress,label:"开户所在地",placeholder:"请选择","input-align":"right","right-icon":"arrow"},on:{click:function(t){a.showBankAddressPicker=!0}}}),e("van-field",{attrs:{autocomplete:"new-password",name:"bankBranch",label:"开户支行",placeholder:"选填","input-align":"right"},model:{value:a.bankFormData.bankBranch,callback:function(t){a.$set(a.bankFormData,"bankBranch",t)},expression:"bankFormData.bankBranch"}}),e("van-field",{attrs:{autocomplete:"new-password",name:"name",label:"姓名",value:a.$root.userInfo.realName,readonly:""}}),e("van-field",{attrs:{autocomplete:"new-password",type:"digit",name:"bankNo",label:"卡号",placeholder:"储蓄卡"},model:{value:a.bankFormData.bankNo,callback:function(t){a.$set(a.bankFormData,"bankNo",t)},expression:"bankFormData.bankNo"}}),e("van-field",{attrs:{autocomplete:"new-password",type:"password",name:"securePassword",label:"资金密码",placeholder:"6位纯数字资金密码",maxlength:"6"},model:{value:a.bankFormData.securePassword,callback:function(t){a.$set(a.bankFormData,"securePassword",t)},expression:"bankFormData.securePassword"}}),e("van-button",{staticClass:"block primary",attrs:{"native-type":"submit"}},[a._v(" 确定添加 ")])],1)]:a._e(),4===a.payment?[e("div",{staticClass:"title secondary title_line"},[a._v("填写微信信息")]),e("van-form",{on:{submit:a.onSubmit}},[e("van-field",{attrs:{autocomplete:"new-password",name:"realName",value:a.$root.userInfo.realName,readonly:"",label:"真实姓名"}}),e("van-field",{attrs:{autocomplete:"new-password",readonly:"",clickable:"","input-align":"right",name:"address",value:a.wechatFormData.address,label:"所在地区","right-icon":"arrow"},on:{click:function(t){a.showBankAddressPicker=!0}}}),e("div",{staticClass:"uploadWrapper"},[e("van-uploader",{class:{disableFile:a.$root.isH5Plus},attrs:{"after-read":function(t){return a.afterRead(t,"wechat")},"preview-full-image":"","max-count":1,"image-fit":"contain","result-type":"file"},nativeOn:{click:function(t){return function(t){return a.onClickUpload("wechat",t)}.apply(null,arguments)}},model:{value:a.wechatFormData.receiptCode,callback:function(t){a.$set(a.wechatFormData,"receiptCode",t)},expression:"wechatFormData.receiptCode"}},[e("van-button",{staticClass:"upload"},[e("van-icon",{attrs:{name:"plus"}}),e("div",{staticClass:"text"},[a._v("请上传收款码")])],1)],1)],1),e("van-field",{attrs:{autocomplete:"new-password",type:"password",name:"securePassword",label:"资金密码",placeholder:"6位纯数字资金密码",maxlength:"6"},model:{value:a.wechatFormData.securePassword,callback:function(t){a.$set(a.wechatFormData,"securePassword",t)},expression:"wechatFormData.securePassword"}}),e("van-button",{staticClass:"block primary",attrs:{"native-type":"submit"}},[a._v(" 确定添加 ")])],1),e("div",{staticClass:"example",on:{click:function(t){return a.$router.push("/how_to_save_receive_code/1")}}},[a._v(" 如何保存收款码？ ")])]:a._e(),2===a.payment?[e("div",{staticClass:"title secondary title_line"},[a._v("填写支付宝信息")]),e("van-form",{on:{submit:a.onSubmit}},[e("van-field",{attrs:{autocomplete:"new-password",name:"realName",value:a.$root.userInfo.realName,readonly:"",label:"真实姓名"}}),e("van-field",{attrs:{autocomplete:"new-password",readonly:"",clickable:"","input-align":"right",name:"address",value:a.aliFormData.address,label:"所在地区","right-icon":"arrow"},on:{click:function(t){a.showBankAddressPicker=!0}}}),e("div",{staticClass:"uploadWrapper"},[e("van-uploader",{attrs:{"after-read":function(t){return a.afterRead(t,"ali")},"preview-full-image":"","max-count":1,"image-fit":"contain","result-type":"file"},nativeOn:{click:function(t){return function(t){return a.onClickUpload("ali",t)}.apply(null,arguments)}},model:{value:a.aliFormData.receiptCode,callback:function(t){a.$set(a.aliFormData,"receiptCode",t)},expression:"aliFormData.receiptCode"}},[e("van-button",{staticClass:"upload"},[e("van-icon",{attrs:{name:"plus"}}),e("div",{staticClass:"text"},[a._v("请上传收款码")])],1)],1)],1),e("van-field",{attrs:{autocomplete:"new-password",type:"password",name:"securePassword",label:"资金密码",placeholder:"6位纯数字资金密码",maxlength:"6"},model:{value:a.aliFormData.securePassword,callback:function(t){a.$set(a.aliFormData,"securePassword",t)},expression:"aliFormData.securePassword"}}),e("van-button",{staticClass:"block primary",attrs:{"native-type":"submit"}},[a._v(" 确定添加 ")])],1),e("div",{staticClass:"example",on:{click:function(t){return a.$router.push("/how_to_save_receive_code")}}},[a._v(" 如何保存收款码？ ")])]:a._e(),e("van-popup",{attrs:{position:"bottom","safe-area-inset-bottom":""},model:{value:a.showBankPicker,callback:function(t){a.showBankPicker=t},expression:"showBankPicker"}},[e("van-picker",{attrs:{"show-toolbar":"","value-key":"bankName",columns:a.$root.banks},on:{confirm:a.onConfirmPickBank,cancel:function(t){a.showBankPicker=!1}}})],1),e("van-popup",{attrs:{position:"bottom","safe-area-inset-bottom":""},model:{value:a.showBankAddressPicker,callback:function(t){a.showBankAddressPicker=t},expression:"showBankAddressPicker"}},[e("van-area",{attrs:{title:"标题","area-list":a.areaList,"columns-num":2},on:{confirm:a.onConfirmAddress}})],1)],2)},r=[],o=e(75200),s=(e(9653),e(68309),e(74916),e(77601),e(34553),e(7601)),i=e(13652),c=e(51161),l=e(14876),d={data:function(){return{payment:1,showBankPicker:!1,showBankAddressPicker:!1,areaList:s.H,bankFormData:{bankId:"",bankName:"",bankAddress:"",provinceId:"",cityId:"",bankBranch:"",bankNo:"",securePassword:""},wechatFormData:{securePassword:"",address:"",provinceId:"",cityId:"",receiptCode:[],qrContent:""},aliFormData:{securePassword:"",address:"",provinceId:"",cityId:"",receiptCode:[],qrContent:""}}},watch:{payment:function(a){1!=a&&(this.bankFormData={bankId:"",bankName:"",bankAddress:"",provinceId:"",cityId:"",bankBranch:"",bankNo:"",securePassword:""}),2!=a&&(this.aliFormData={securePassword:"",address:"",provinceId:"",cityId:"",receiptCode:[]}),4!=a&&(this.wechatFormData={securePassword:"",address:"",provinceId:"",cityId:"",receiptCode:[]})}},created:function(){this.$root.$emit("root:set-topbar",["left-back"]),this.payment=Number(this.$route.params.index||1)},methods:{onConfirmPickBank:function(a){var t=a.bankId,e=a.bankName;this.bankFormData.bankId=t,this.bankFormData.bankName=e,this.showBankPicker=!1},onConfirmAddress:function(a){var t=(0,o.Z)(a,2),e=t[0],n=t[1];1==this.payment&&(this.bankFormData.provinceId=e.code,this.bankFormData.cityId=n.code,this.bankFormData.bankAddress=e.name+"  "+n.name),2==this.payment&&(this.aliFormData.provinceId=e.code,this.aliFormData.cityId=n.code,this.aliFormData.address=e.name+"  "+n.name),4==this.payment&&(this.wechatFormData.provinceId=e.code,this.wechatFormData.cityId=n.code,this.wechatFormData.address=e.name+"  "+n.name),this.showBankAddressPicker=!1},afterRead:function(a,t){var e=this,n="wechat"===t?"wechatFormData":"ali"===t?"aliFormData":"",r=function(){a.status="uploading",a.message="上传中...";var t=e[n].receiptCode[0];(0,c.ws)({imgFile:e.$root.isH5Plus?a._filePath:a.file,type:"other"}).then((function(r){var o=r.ok,s=r.data,i=r.msg;o?(a.status="done",t.imageUrl=s.name,t.url=e.$root.getImageUrl(s.name),e[n].receiptCode=[t]):(a.status="error",a.message="上传失败",e.$toast.fail(i))}))},o=new l.t2("reader-2");o.scanFile(a.file,!0).then((function(a){e[n].qrContent=a,r()})).catch((function(a){e.$toast.fail("无法识别收款码"),console.warn(a)}))},onSubmit:function(){var a=this,t={type:this.payment};if(1==this.payment){if(!this.bankFormData.bankId)return this.$toast.fail("请选择银行");if(!this.bankFormData.bankAddress)return this.$toast.fail("请选择开户所在地");if(!this.bankFormData.bankNo)return this.$toast.fail("请输入银行卡号");if(this.bankFormData.bankNo.length<10||this.bankFormData.bankNo.length>20)return this.$toast.fail("银行卡号为10-20位数字");if(!/^\d{6}$/.test(this.bankFormData.securePassword))return this.$toast.fail("请输入6数字组成的资金密码");if(this.$root.payments.bank.list.findIndex((function(t){return t.bankNo===a.bankFormData.bankNo}))>-1)return this.$toast.fail("该银行卡号已绑定");Object.assign(t,{bankNo:this.bankFormData.bankNo,bankId:this.bankFormData.bankId,bankBranch:this.bankFormData.bankBranch,provinceId:this.bankFormData.provinceId,cityId:this.bankFormData.cityId,securePassword:this.bankFormData.securePassword})}if(2==this.payment){if(!this.aliFormData.address)return this.$toast.fail("请输入所在地区");if(this.aliFormData.receiptCode.length<=0)return this.$toast.fail("请上传收款码");if(!/^\d{6}$/.test(this.aliFormData.securePassword))return this.$toast.fail("请输入6数字组成的资金密码");Object.assign(t,{qrContent:this.aliFormData.qrContent,provinceId:this.aliFormData.provinceId,cityId:this.aliFormData.cityId,receiptCode:this.aliFormData.receiptCode[0].imageUrl,securePassword:this.aliFormData.securePassword})}if(4==this.payment){if(!this.wechatFormData.address)return this.$toast.fail("请输入所在地区");if(this.wechatFormData.receiptCode.length<=0)return this.$toast.fail("请上传收款码");if(!/^\d{6}$/.test(this.wechatFormData.securePassword))return this.$toast.fail("请输入6数字组成的资金密码");Object.assign(t,{qrContent:this.wechatFormData.qrContent,provinceId:this.wechatFormData.provinceId,cityId:this.wechatFormData.cityId,receiptCode:this.wechatFormData.receiptCode[0].imageUrl,securePassword:this.wechatFormData.securePassword})}(0,i._w)(t).then((function(t){var e=t.ok,n=(t.data,t.msg);e?(a.resetForm(),a.$toast.success(n),a.$root.loadPayments()):a.$toast.fail(n)}))},resetForm:function(){this.bankFormData={bankId:"",bankName:"",bankAddress:"",provinceId:"",cityId:"",bankBranch:"",bankNo:"",securePassword:""},this.aliFormData={securePassword:"",address:"",provinceId:"",cityId:"",receiptCode:[],qrContent:""},this.wechatFormData={securePassword:"",address:"",provinceId:"",cityId:"",receiptCode:[],qrContent:""}},onClickUpload:function(a,t){var e=this,n=this;this.$root.isH5Plus&&(t.preventDefault(),window.h5p.uploadImage((function(t,r,o,s){if(t){var i="wechat"===a?"wechatFormData":"ali"===a?"aliFormData":"";if(i){console.log(t,r,o,s);var c=new File([t],r,{type:o});n[i].receiptCode=[{file:c,_filePath:s}],n.afterRead(n[i].receiptCode[0],a)}}else e.$toast.fail("获取图片失败")})))}}},m=d,u=e(1001),p=(0,u.Z)(m,n,r,!1,null,null,null),h=p.exports},34553:function(a,t,e){var n=e(82109),r=e(42092).findIndex,o=e(51223),s="findIndex",i=!0;s in[]&&Array(1)[s]((function(){i=!1})),n({target:"Array",proto:!0,forced:i},{findIndex:function(a){return r(this,a,arguments.length>1?arguments[1]:void 0)}}),o(s)}}]);