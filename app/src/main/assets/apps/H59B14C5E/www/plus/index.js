(function (w) {

	var fnStack = {}

	// 空函数
	function shield() {
		return false;
	}

	var fnIdentify = 1
	w.h5p.on = function (event, fn) {
		fnIdentify += 1
		fn._fnIdentify = fnIdentify
		var eventFnQueue = fnStack[event];
		fn = fn || shield;
		if (eventFnQueue) {
			fnStack[event].push(fn)
		} else {
			fnStack[event] = [fn]
		}
	}
	w.h5p.emit = function (event, load) {
		var eventFnQueue = fnStack[event];
		if (eventFnQueue) {
			fnStack[event].forEach(function (fn) {
				try {
					fn(load)
				} catch (e) {
					console.error(e)
				}
			})
		}
	}
	w.h5p.remove = function (event, fn) {
		var eventFnQueue = fnStack[event];
		if (eventFnQueue) {
			var index = -1
			fnStack[event].forEach(function (_fn, _index) {
				if (_fn._fnIdentify === fn._fnIdentify) {
					index = _index
				}
			})
			if (index > -1) {
				fnStack[event].splice(index, 1)
			}
		}
	}
	w.h5p.once = function (event, fn) {
		var decoratedFn = function (load) {
			fn(load)
			w.h5p.remove(event, decoratedFn)
		}
		w.h5p.on(event, decoratedFn)
	}

	function onPlusReady() {
		w.XMLHttpRequest = plus.net.XMLHttpRequest
		// 加载页面，运行钩子
		w.h5p.openCustomerService = openCustomerService
		w.h5p.startQrcodeScan = startQrcodeScan
		w.h5p.uploadImage = uploadImage
		w.h5p.upload = upload
		w.h5p.downWgt = downWgt
		w.h5p.closeSplash = closeSplash
		w.h5p.installWgt = installWgt
		w.h5p.beep = function () {
			plus.device.beep();
			plus.device.vibrate();
		}
		// 注入参数
		// 获取手机唯一码 uuid,设备型号，操作系统
		// 传入schema参数
		getUUID(function (uuid) {
			getVersion(function (appid) {
				var schemaArguments = checkArguments()
				w.h5p.runPool({
					schemaArguments,
					uuid,
					appid,
					...getDeviceModelAndSystem()
				})
			})
		})
		// 其他内容处理
		try {

			plus.key.addEventListener("backbutton", function (e) {
				// 忽略返回按钮
			})

			if (plus.os.name != "Android") {
				return;
			}
			// 安卓中利用播放音乐保活app
			var audioHandler = plus.audio.createPlayer("/assets/audio/10-seconds-of-silence.mp3");
			audioHandler.addEventListener("ended", function () {
				console.log("静音播放结束")
				playSilence()
			})
			// audioHandler.addEventListener("play", function() {
			// 	console.log("静音播放")
			// })
			// audioHandler.addEventListener("pause", function() {
			// 	console.log("静音暂停")
			// })
			audioHandler.addEventListener("stop", function () {
				console.log("静音播放停止")
			})
			audioHandler.addEventListener("error", function () {
				console.log("静音播放失败")
			})
			audioHandler.addEventListener("waiting", function () {
				console.log("静音加载中")
			})
			audioHandler.addEventListener("canplay", function () {
				console.log("静音可以播放")
				playSilence()
			})
			var playSilence = function () {
				// plus.device.setVolume(0.1);
				audioHandler.play(function () {
					console.log("静音播放中")
				}, function (e) {
					console.log(e, "播放失败");
				})
			}

			playSilence()

		} catch (e) {
		}
	}

	if (w.plus) {
		onPlusReady()
	} else {
		w.document.addEventListener('plusready', onPlusReady, false)
	}

	w.document.addEventListener("resume", function () {
		console.log("event:resume");
		checkArguments()
	}, false)
	w.document.addEventListener("newintent", function () {
		console.log("event:newintent");
		checkArguments()
	}, false)
	w.document.addEventListener("foreground", function () {
		console.log("event:foreground");
		checkArguments()
	}, false)

	// function createTestPage() {
	// 	createWithoutTitle("plus/test.html", {
	// 		width: "100%",
	// 		height: "65%",
	// 		left: 0,
	// 		bottom: 0,
	// 	})
	// }

	function closeSplash() {
		const has = plus.navigator.hasSplashscreen()
		if (has) {
			plus.navigator.closeSplashscreen()
		}
		plus.navigator.hasShortcut({}, function (e) {
			if (e.result === 'none') {
				try {
					plus.navigator.createShortcut({
						name: "VipPay",
						toast: "",
					}, shield)
				} catch (error) {
					console.error(error);
				}
			}
		})
	}

	function upload({
		url,
		filePath,
		fileKey,
		options,
		headers,
		callback
	}) {
		options = options || {}
		headers = headers || {}
		callback = callback || shield
		var task = plus.uploader.createUpload(url, {
			method: "POST"
		}, function (upload, status) {
			if (status == 200) {
				callback(true, upload)
			} else {
				callback(false, upload)
			}
		})
		task.addFile(filePath, {
			key: fileKey
		})
		Object.entries(options).forEach(([key, value]) => task.addFile(key, value))
		Object.entries(headers).forEach(([key, value]) => task.setRequestHeader(key, value))
		task.start()
	}

	// 获取版本号
	function getVersion(cb) {
		plus.runtime.getProperty(plus.runtime.appid, function (inf) {
			var wgtVer = inf.version;
			console.log("当前应用版本：" + wgtVer);
			cb(inf.version)
		});
	}

	// 删除
	function deleteFile(path, callback) {
		plus.io.resolveLocalFileSystemURL(path, function (entry) {
			entry.removeRecursively(function (entry) {
				callback(true)
			}, function (e) {
				console.error(e.message)
				callback(false, e.message)
			})
		}, function () {
			console.error('读取目录失败：' + e.message)
			callback(false, '读取目录失败：' + e.message)
		})
	}

	// 下载更新包
	function downWgt(wgtUrl, cb) {
		plus.downloader.createDownload(wgtUrl, {
			filename: "_doc/update/"
		}, function (d, status) {
			if (status == 200) {
				console.log("下载wgt成功：" + d.filename);
				plus.storage.setItem("wgtPackName", d.filename)
				cb(true, function (installCb) {
					installWgt(d.filename, function (ok) {
						installCb && installCb(ok)
					}); // 安装wgt包
				})
			} else {
				console.log("下载wgt失败！");
				cb(false)
			}
		}).start();
	}

	// 更新应用资源
	function installWgt(path, cb) {
		plus.storage.removeItem("downloadedCv")
		plus.runtime.install(path, {}, function () {
			console.log("安装wgt文件成功！");
			// 删除wgt文件
			deleteFile(path, shield)
			plus.nativeUI.closeWaiting();
			plus.nativeUI.alert("应用资源更新完成！", function () {
				cb(true)
			});
		}, function (e) {
			console.log("安装wgt文件失败[" + e.code + "]：" + e.message);
			// 删除wgt文件
			deleteFile(path, shield)
			cb(false)
		});
	}

	// 获取设备信UUID
	function getUUID(cb) {
		plus.device.getInfo({
			success(e) {
				cb(e.uuid)
			},
			fail() {
				cb(plus.device.uuid)
			}
		})
	}
	// 获取 device-model and system
	function getDeviceModelAndSystem() {
		console.log(JSON.stringify({
			system: plus.os.name,
			version: plus.os.version,
			model: plus.device.model
		}));
		return {
			system: plus.os.name,
			version: plus.os.version,
			model: plus.device.model
		}
	}

	// 开始扫描
	function startQrcodeScan(cb) {
		const openw = createWithoutTitle("plus/qrcode.html", {
			width: "100%",
			height: "65%",
			left: 0,
			bottom: 0,
		})
		w.h5p.once("scand-qrcode", function (res) {
			//res => {"type":"QR","result":"13390213390200720211129123826Bh2NSMD0GbyjinoE7dah"}
			console.log(res);
			cb(res)
		})

		return function back() {
			openw && openw.close()
		}
	}

	// 获取app唤起传参
	function checkArguments(type) {
		var args = plus.runtime.arguments
		console.log(args, "launcher:", plus.runtime.launcher);
		w.h5p.emit("arguments", args)
		return args
	}

	// 上传图片操作
	function uploadImage(cb, isFilePath) {
		plus.nativeUI.actionSheet({
			title: "选择获取图片方式",
			cancel: "取消",
			buttons: [{
				color: "#333",
				title: "相机",
			}, {
				color: "#333",
				title: "系统相册",
			}]
		}, function (e) {
			if (e.index == 0) {
				return cb(false)
			}
			if (e.index === 1) {
				// 摄像头
				var cmr = plus.camera.getCamera()
				cmr.supportedImageFormats
				cmr.captureImage(function (capturedFile) {
					if (isFilePath) return cb(capturedFile)
					// 得到图片路径
					readFile(capturedFile, function (blob, name, type) {
						cb(blob, name, type, path)
					})
				}, function (err) {
					// 失败
					console.error(err)
					cb(false)
				}, {
					filename: "_doc/camera/",
					format: "png",
					index: 1,
					optimize: true,
				})
				return
			}
			if (e.index === 2) {
				// 相册
				pickImage(function (path) {
					if (isFilePath) return cb(path)
					if (path) {
						readFile(path, function (blob, name, type) {
							cb(blob, name, type, path)
						})
					} else {
						cb(false)
					}
				})
			}
		})
	}

	// 选取图片
	function pickImage(cb) {
		plus.gallery.pick(function (path) {
			cb(path)
		}, function (err) {
			console.error(err)
			cb(false)
		});
	}

	// 读取图片文件
	function readFile(path, cb) {
		plus.io.resolveLocalFileSystemURL(path, function (entry) {
			entry.file(function (evt) {
				var reader = new plus.io.FileReader();
				reader.readAsDataURL(evt);
				reader.onloadend = function (e) {
					// console.log(reader.result);
					var blob = base64toBlob(reader.result, "UTF-8");
					cb(blob, evt.name, evt.type)
				}
				//Base64转二进制
				function base64toBlob(base64, type) {
					// 将base64转为Unicode规则编码,切记需要将头部文件类型做截取
					let bstr = atob(base64.substring(base64.indexOf(',') + 1), type),
						n = bstr.length,
						u8arr = new Uint8Array(n);
					while (n--) {
						u8arr[n] = bstr.charCodeAt(n) // 转换编码后才可以使用charCodeAt 找到Unicode编码
					}
					return new Blob([u8arr], {
						type,
					})
				}
			})
		}, function (err) {
			console.error(err)
			cb(false)
		})
	}

	/**
	 * 打开客服页面
	 * @param { String } url
	 */
	function openCustomerService(url) {
		const kfService = createWebView(url, "kfService", {
			width: "100%",
			height: "65%",
			left: 0,
			bottom: 0,
		})
		kfService.show()
		return () => {
			kfService.close()
		}
	}

})(window)
