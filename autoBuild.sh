runBuild() {
    version_code="$1"
    echo "当前版本:$version_code"

    # build.grale path
    buildGradleFilePath='C:\Personal\Personal_Projects\HT\ezpayAndroid\app\build.gradle'
    # buildGradleContent=$(cat ${buildGradleFilePath})
    # echo "build.gradle 文件内容:$buildGradleContent"
    sed -i 's/versionName "[0-9\.]\+"/versionName "'$version_code'"/' $buildGradleFilePath

    dcloudControlXmlPath='C:\Personal\Personal_Projects\HT\ezpayAndroid\app\src\main\assets\data\dcloud_control.xml'
    # dcloudControlXmlContent=$(cat $dcloudControlXmlPath)
    sed -i 's/appver="[0-9\.]\+"/appver="'$version_code'"/' $dcloudControlXmlPath

    sourceHtmlPath='C:\Personal\Personal_Projects\HT\ez_pay\dist\sources\index.html'

    if [ -e $sourceHtmlPath ]; then
        # 将资源文件夹复制到项目目录下
        androidResourcePath='C:\Personal\Personal_Projects\HT\ezpayAndroid\app\src\main\assets\apps\H59B14C5E\www'
        outputResourcePath='C:\Personal\Personal_Projects\HT\ez_pay\dist\sources'
        # 清空Android目录下的资源文件夹
        rm -rf $androidResourcePath\\\*
        cp -rf $outputResourcePath\\\. $androidResourcePath
        echo "复制完成"

        projectRoot='C:\Personal\Personal_Projects\HT\ezpayAndroid'
        cd $projectRoot && ./gradlew assembleRelease
        openReleaseDir='C:\Personal\Personal_Projects\HT\ezpayAndroid\app\release'
        explorer $openReleaseDir

        # 验证是否签名
        keystorePath='C:\Personal\Personal_Projects\HT\ezpayAndroid\app\ezpay.keystore'
        keytoolPath='C:\Program Files\Android\Android Studio\jre\bin'
        # 由于路径中包含空格所以 实际执行时必须包含在双引号中
        cd "$keytoolPath" && ./keytool -list -v -keystore $keystorePath -storepass 725361

        releaseReleaseApkPath='C:\Personal\Personal_Projects\HT\ezpayAndroid\app\release\app-release.apk'
        cd "$keytoolPath" && ./keytool -printcert -jarfile $releaseReleaseApkPath

        # 签名
        # jarsignerPath='C:\Program Files\Android\Android Studio\jre\bin\jarsigner.exe'
        # cd $jarsignerPath
        # keystorePath='C:\Personal\Personal_Projects\HT\ezpayAndroid\app\ezpay.keystore'
        # unsignedApkPath='C:\Personal\Personal_Projects\HT\ezpayAndroid\app\build\outputs\apk\release\app-release-unsigned.apk'
        # signedApkPath='C:\Personal\Personal_Projects\HT\ezpayAndroid\app\build\outputs\apk\release\app-release-signed.apk'
        # ./jarsigner.exe -verbose -keystore $keystorePath -signedjar $signedApkPath $unsignedApkPath
        echo "点击按钮关闭"
        read a
    else
        echo "资源没有打包"
    fi

    echo "错误:$?"
}

runTest() {
    echo "测试:"
    keystorePath='C:\Personal\Personal_Projects\HT\ezpayAndroid\app\ezpay.keystore'
    keytoolPath='C:\Program Files\Android\Android Studio\jre\bin'
    cd "$keytoolPath" && ./keytool -list -v -keystore $keystorePath -storepass 725361
    releaseReleaseApkPath='C:\Personal\Personal_Projects\HT\ezpayAndroid\app\release\app-release.apk'
    cd "$keytoolPath" && ./keytool -printcert -jarfile $releaseReleaseApkPath
    echo "错误:$?"
    echo "点击按钮关闭"
    read a
}

echo "请输入版本号:"
# 当会车时version 可以用 "version" 判空
read version

if [ "$version" = "" ]; then
    runTest "121212"
else
    runBuild version
fi
