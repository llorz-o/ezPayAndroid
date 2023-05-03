"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[489],{31489:function(t,e,a){a.r(e),a.d(e,{default:function(){return $}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page page-user-certify"},[a("van-steps",{attrs:{active:t.stepActive}},[a("van-step",[t._v("上传身份证")]),a("van-step",[t._v("身份识别")]),a("van-step",[t._v(" 人工审核 "),2===t.stepActive?a("div",{staticClass:"bottom-status",class:t.isVerifying?"processing":"failed"},[t._v(" ("+t._s(t.isVerifying?"审核中...":"审核失败:"+t.$root.userInfo.realNameRemark)+") ")]):t._e()])],1),a("van-form",[0===t.stepActive||2===t.stepActive?[a("van-field",{attrs:{disabled:2===t.stepActive,autocomplete:"new-password",label:"姓名",placeholder:"请输入你的名字"},model:{value:t.form.realName,callback:function(e){t.$set(t.form,"realName",e)},expression:"form.realName"}}),a("van-field",{attrs:{disabled:2===t.stepActive,autocomplete:"new-password",label:"身份证号",placeholder:"请输入身份证号码"},model:{value:t.form.idCard,callback:function(e){t.$set(t.form,"idCard",e)},expression:"form.idCard"}}),a("div",{staticClass:"gray-8"}),a("van-cell-group",{attrs:{border:!1,title:"请上传身份证"}},[a("div",{staticClass:"upload"},[a("div",{staticClass:"img"},[a("van-image",{attrs:{src:t.$root.getImageUrl(t.form.idCardFrontImg),fit:"contain"},scopedSlots:t._u([{key:"error",fn:function(){return[a("div",{staticClass:"id"})]},proxy:!0}],null,!1,1031679392)}),a("div",{staticClass:"label"},[t._v("身份证正面")])],1),0===t.stepActive?a("van-uploader",{attrs:{"after-read":t.readImage,"preview-image":!1,"max-count":"1",name:"id","result-type":"file"},nativeOn:{click:function(e){return function(e){return t.uploadID(e,{name:"id"})}.apply(null,arguments)}}},[a("div",{staticClass:"camera"})]):t._e()],1),a("div",{staticClass:"upload"},[a("div",{staticClass:"img"},[a("van-image",{attrs:{src:t.$root.getImageUrl(t.form.idCardReverseImg),fit:"contain"},scopedSlots:t._u([{key:"error",fn:function(){return[a("div",{staticClass:"id-back"})]},proxy:!0}],null,!1,3155635750)}),a("div",{staticClass:"label"},[t._v("身份证反面")])],1),0===t.stepActive?a("van-uploader",{attrs:{"after-read":t.readImage,"preview-image":!1,"max-count":"1",name:"idBack","result-type":"file"},nativeOn:{click:function(e){return function(e){return t.uploadID(e,{name:"idBack"})}.apply(null,arguments)}}},[a("div",{staticClass:"camera"})]):t._e()],1)]),t.isVerifying||2!==t.stepActive?a("van-button",{staticClass:"primary block",on:{click:t.onNext}},[t._v(" 下一步")]):a("van-button",{staticClass:"primary block",on:{click:t.onReCertify}},[t._v(" 请重新认证 ")])]:t._e(),1===t.stepActive?[a("div",{staticClass:"step2"},[a("div",{staticStyle:{display:"flex","justify-content":"center","font-size":"13px","align-items":"center"}},[a("van-count-down",{ref:"countdown",staticStyle:{color:"red"},attrs:{time:t.time,format:"mm:ss"},on:{finish:t.finish}}),t._v("  秒后刷新 ")],1),a("div",{staticClass:"numbers"},t._l(t.form.code,(function(e,s){return a("span",{key:s,staticClass:"number"},[t._v(" "+t._s(e)+" ")])})),0),a("div",{staticClass:"tip"},[t._v(" 请录制一段本人视频， "),a("span",{staticStyle:{color:"red"}},[t._v(" 证件放在下颚，念出数字"+t._s((t.form.code||[]).join(""))+"， ")]),t._v(" 视频长度最长10秒，且大小不超过40M ")]),a("van-uploader",{attrs:{"after-read":t.readVideo,"max-size":41943040,"preview-full-image":!1,"preview-image":!1,accept:"video/*"},on:{oversize:function(e){return t.$toast("视频不得超过40M")}}},[a("van-button",{staticClass:"primary block",attrs:{loading:t.showUploadProgress,icon:"plus"}},[t._v(" 点击上传视频 ")])],1),a("van-popup",{staticClass:"progressPopup",attrs:{"close-on-click-overlay":!1},model:{value:t.showUploadProgress,callback:function(e){t.showUploadProgress=e},expression:"showUploadProgress"}},[a("van-circle",{attrs:{rate:0,speed:100,text:"上传进度:"+t.currentRate.toFixed(0)+"%"},model:{value:t.currentRate,callback:function(e){t.currentRate=e},expression:"currentRate"}})],1)],1)]:t._e()],2),a("van-dialog",{staticClass:"uploadAlert",attrs:{"show-confirm-button":!1,"close-on-click-overlay":""},on:{close:t.onDialogClose},scopedSlots:t._u([{key:"title",fn:function(){return[a("van-icon",{attrs:{name:"success"}}),a("div",[t._v("上传成功")])]},proxy:!0}]),model:{value:t.showSuccessTip,callback:function(e){t.showSuccessTip=e},expression:"showSuccessTip"}},[a("div",[t._v("人工审核需要3-10分钟")]),a("div",[t._v(" 审核结果在 "),a("span",[t._v("「用户中心-实名认证」")]),t._v(" 中查看 ")])])],1)},o=[],i=a(4367),r=a(75200),n=(a(68309),a(74916),a(23123),a(47042),a(15306),a(69600),a(21249),a(72003)),l=a.n(n),c=a(51161),u=a(13652),d=a(19248),f=a(58256),p=a(79309),m=a(6163);a(77601),a(4723),a(41539),a(39714);function v(t){function e(t){var e={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "},a="",s=!0;if(t&&/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/i.test(t))if(e[t.substr(0,2)]){if(18==t.length){t=t.split("");for(var o=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],i=[1,0,"X",9,8,7,6,5,4,3,2],r=0,n=0,l=0,c=0;c<17;c++)n=t[c],l=o[c],r+=n*l;i[r%11];i[r%11]!=t[17]&&(a="校验位错误,结尾是字母请注意大小写",s=!1)}}else a="地址编码错误",s=!1;else a="身份证号格式错误",s=!1;return[s,a]}return e(t)[0]}function h(t){function e(t){var e={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "},a=/^[1-9]\d{5}(19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i,s="",o=!0;if(t)if(t.match(a))if(e[t.substr(0,2)]){if(18===t.length){t=t.split("");for(var i=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],r=[1,0,"X",9,8,7,6,5,4,3,2],n=0,l=0,c=0,u=0;u<17;u++)l=parseInt(t[u]),c=i[u],n+=l*c;var d=r[n%11];d.toString()!==t[17]&&(s="请输入正确的身份证号码",o=!1)}}else s="请输入正确的身份证号码",o=!1;else s="请输入正确的身份证号码",o=!1;else s="请输入身份证号码",o=!1;return{errorMessage:s,isPass:o}}return e(t).isPass}function g(t){for(var e=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],a=["1","0","X","9","8","7","6","5","4","3","2"],s=t+"",o=t[17],i=s.substring(0,17),r=i.split(""),n=r.length,l=0,c=0;c<n;c++)l+=r[c]*e[c];var u=l%11,d=a[u],f=/^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/,p=f.test(t);return!(o!==d||!p)||v(t)||h(t)}var C={data:function(){return{stepActive:0,isVerifying:!1,showSuccessTip:!1,form:{realName:"",idCard:"",idCardFrontImg:"",idCardReverseImg:"",faceImg:"",code:[]},idCardImg:[],idCardBackImg:[],isFaceCollecting:!1,featureCount:0,uploadInfo:{imageUrl:"",token:"",uploadUrl:""},showUploadProgress:!1,currentRate:0,time:0}},created:function(){var t=this;this.$root.isH5Plus&&window.plus.camera.getCamera();var e=f.Z.loading("查询审核状态中...");this.$root.$emit("root:close-identify-dialog"),this.$root.$emit("root:set-topbar",["left-back"]),this.fetchWcsUploadBaseInfo(),this.$root.fetchUserInfo().then((function(a){if(e.close(),a){var s=t.$root.userInfo.auditRealNameStatus;""===s&&(t.stepActive=0),0===s&&(t.stepActive=2,t.isVerifying=!0,t.$dialog.alert({className:"common alert",message:"实名认证资料正在人工审核中，请耐心等待",beforeClose:function(e,a){t.$router.back(),a()}})),2===s&&(t.stepActive=2)}else t.$dialog.alert({className:"common",message:"查询审核状态失败，请稍后再试",beforeClose:function(e,a){t.$router.back(),a()}})}))},methods:{readVideo:function(t){var e=(0,m.vc)(new Date,"YMDhms"),a=l()(e+t.file.name)+".".concat(t.file.name.split(".").pop()||"unknown");this.uploadLargeVideo(t,a)},uploadLargeVideo:function(t,e){for(var a=this,s=(t.content||"").split(","),o=(0,r.Z)(s,2),i=(o[0],o[1]),n=[],l=2048e3,c=100/n.length,u=0;u*l<i.length;)u++,n.push(i.slice((u-1)*l,u*l));c=100/n.length;var f=0,p=e,m=function t(){f>=n.length||(0,d.H6)({videoBase64:n[f],blockOrder:f+1,blockNum:n.length,fileName:p},{onUploadProgress:function(t){a.currentRate=c*f+t.loaded/t.total*c}}).then((function(e){var s=e.ok,o=e.data;s?(a.currentRate=(f+1)/n.length*100,o.feof?(a.form.faceImg=o.fileName,a.submit(),a.$toast.success("上传成功"),a.finishUpload()):(p=o.nextFileName,f++,t())):(a.finishUpload(),a.$toast.fail("上传失败"))}))};this.showUploadProgress=!0,m()},uploadFileByWcs:function(t){var e=this,a=(0,p.wcsUpload)(t,this.uploadInfo.token,this.uploadInfo.uploadUrl,{retryCount:3});this.showUploadProgress=!0,a.uploadProgress=function(t){e.currentRate=t.total.percent},a.onError=function(t){e.showUploadProgress=!1,e.isRequestError||e.$toast.fail(t.message)},a.onComplete=function(){e.showUploadProgress=!1,e.submit(),e.$toast.success("上传成功")},a.putFile()},fetchWcsUploadBaseInfo:function(){var t=this;(0,d.$x)().then((function(e){var a=e.ok,s=e.msg,o=e.data;a?t.uploadInfo=o:t.$toast.fail(s)}))},finishUpload:function(){this.showUploadProgress=!1,this.currentRate=0},uploadID:function(t,e){var a=this;this.$root.isH5Plus&&(t.preventDefault(),window.h5p.uploadImage((function(t){t?a.readImage({file:t},e):a.$toast.fail("获取图片失败")}),!0))},readImage:function(t,e){var a=this;t.status="uploading",t.message="上传中...",(0,c.ws)({imgFile:t.file,type:"authImg"}).then((function(s){var o=s.ok,i=s.data,r=s.msg;o?(t.status="done",t.url=i.name,"id"===e.name&&(a.form.idCardFrontImg=i.name),"idBack"===e.name&&(a.form.idCardReverseImg=i.name)):(t.status="error",t.message="上传失败",a.$toast.fail(r))}))},onNext:function(){return this.form.realName?g(String(this.form.idCard.replace(" ","")))?this.form.idCardFrontImg?this.form.idCardReverseImg?(this.stepActive+=1,void this.countdownCode()):this.$toast.fail("请上传身份证反面照片"):this.$toast.fail("请上传身份证正面照片"):this.$toast.fail("请输入合法身份证号码"):this.$toast.fail("请输入真实用户名")},onReCertify:function(){this.stepActive=0},onDialogClose:function(){this.$router.back()},submit:function(){var t=this;(0,u.ib)((0,i.Z)((0,i.Z)({},this.form),{},{code:this.form.code.join("")})).then((function(e){var a=e.ok,s=e.msg;a?(t.$root.userInfo.auditRealNameStatus=0,t.showSuccessTip=!0):t.$toast.fail(s)}))},countdownCode:function(){this.time=3e5,this.form.code=[0,0,0,0].map((function(){return Math.floor(10*Math.random())}))},finish:function(){this.form.code=[0,0,0,0].map((function(){return Math.floor(10*Math.random())})),this.$refs.countdown.reset()}}},b=C,k=a(1001),w=(0,k.Z)(b,s,o,!1,null,null,null),$=w.exports}}]);