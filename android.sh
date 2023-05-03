# 直接使用 dirname 和 使用 pwd 输出的路径在windows上是有差别的，window上 dirname 输出的是反斜杠
shell_dir=$(cd "$(dirname "$0")" && pwd)

safe_sed() {
  if [ "$(uname)" == "Darwin" && "$(which sed)" == "/usr/bin/sed" ]; then
    brew install gnu-sed
    # PATH="/usr/local/opt/gnu-sed/libexec/gnubin:$PATH"
    # shellcheck disable=SC2016
    echo 'PATH="/usr/local/opt/gnu-sed/libexec/gnubin:$PATH"' >> ~/.zshrc
    cd ~ && source .zshrc

    if [ "$(which sed)" != "/usr/local/opt/gnu-sed/libexec/gnubin/sed" ]; then
      echo "gnu-sed install failed, pls install it manual"
      return 1
    fi
    return 0
  fi
  return 0
}

ezpay_dir() {
  # /Users/joe/Documents/GitHub/ezPay
  if [ "$(uname)" == "Darwin" ]; then
    echo "/Users/joe/Documents/GitHub/ezPay"
  else
    echo "C:/Personal/Personal_Projects/HT/ez_pay"
  fi
}

java_bin() {
  if [ "$(uname)" == "Darwin" ]; then
    echo "/Users/joe/Library/Java/JavaVirtualMachines/openjdk-18.0.2/Contents/Home/bin"
  else
    echo "C:/Program Files/Java/jdk-18.0.1.1/bin"
  fi
}

open_dir() {
  echo "$1"
  if [ "$(uname)" == "Darwin" ]; then
    open "$1"
  else
    cd "$1" && explorer .
  fi
}

runBuild() {
    version_code="$1"
    echo "当前版本:$version_code"

    #  project root path
    projectRoot=$shell_dir
    # build.gradle path
    buildGradleFilePath=$projectRoot/app/build.gradle
    # buildGradleContent=$(cat ${buildGradleFilePath})
    # echo "build.gradle 文件内容:$buildGradleContent"
    sed -i 's/versionName "[0-9\.]\+"/versionName "'"$version_code"'"/' "$buildGradleFilePath"

    dcloudControlXmlPath=$projectRoot/app/src/main/assets/data/dcloud_control.xml
    # dcloudControlXmlContent=$(cat $dcloudControlXmlPath)
    sed -i 's/appver="[0-9\.]\+"/appver="'"$version_code"'"/' "$dcloudControlXmlPath"

    sourceHtmlPath=$(ezpay_dir)/dist/sources/index.html

    if [ -e "$sourceHtmlPath" ]; then
        # 将资源文件夹复制到项目目录下
        androidResourcePath=$projectRoot/app/src/main/assets/apps/H59B14C5E/www
        outputResourcePath=$(ezpay_dir)/dist/sources
        # 清空Android目录下的资源文件夹
        rm -rf "${androidResourcePath:?}"/*
        cp -rf "$outputResourcePath"/. "$androidResourcePath"
        echo "复制完成"

        cd "$projectRoot" && ./gradlew assembleRelease
        openReleaseDir=$projectRoot/app/build/outputs/apk/release
        # 打开打包完成的文件夹
        open_dir "$openReleaseDir"

        # 验证是否签名
        keystorePath=$projectRoot/app/ezpay.keystore
        # /Users/joe/Library/Java/JavaVirtualMachines/openjdk-18.0.2/Contents/Home/bin
        keytoolPath=$(java_bin)
        # 由于路径中包含空格所以 实际执行时必须包含在双引号中
        cd "$keytoolPath" && ./keytool -list -v -keystore "$keystorePath" -storepass 725361

        releaseReleaseApkPath=$projectRoot/app/build/outputs/apk/release/app-release.apk
        # shellcheck disable=SC2086
        cd "$keytoolPath" && ./keytool -printcert -jarfile $releaseReleaseApkPath

        # 签名
        # jarsignerPath="C:\Program Files\Android\Android Studio\jre\bin\jarsigner.exe"
        # cd $jarsignerPath
        # keystorePath="$projectRoot\app\ezpay.keystore"
        # unsignedApkPath="$projectRoot\app\build\outputs\apk\release\app-release-unsigned.apk"
        # signedApkPath="$projectRoot\app\build\outputs\apk\release\app-release-signed.apk"
        # ./jarsigner.exe -verbose -keystore $keystorePath -signedjar $signedApkPath $unsignedApkPath
    else
        echo "资源没有打包"
    fi

    echo "错误:$?"
    echo "点击按钮关闭"
    read -r
}

runTest() {
    echo "测试:"
    # keystorePath='$projectRoot\app\ezpay.keystore'
    # keytoolPath='C:\Program Files\Android\Android Studio\jre\bin'
    # cd "$keytoolPath" && ./keytool -list -v -keystore $keystorePath -storepass 725361
    # releaseReleaseApkPath='$projectRoot\app\build\outputs\apk\release\app-release.apk'
    # cd "$keytoolPath" && ./keytool -printcert -jarfile $releaseReleaseApkPath
    echo "错误:$?"
    echo "点击按钮关闭"
    read -r
}

safe_sed

echo "请输入版本号:"
# 当会车时version 可以用 "version" 判空
read -r version
echo "是否直接打包web文件?[yes/no]:"
read -r answer

while [ "$answer" != "yes" ] && [ "$answer" != "no" ]; do
    echo "Error! 请输入yes or no"
    echo "是否直接打包web文件?[yes/no]:"
    read -r answer
done

if [ "$version" = "" ]; then
    runTest "121212"
else
    if [ "$answer" = "yes" ]; then
        echo "replace config.js version:$version"
        sed -i 's/version:"[0-9\.]\+"/version:"'"$version"'"/' ''"$(ezpay_dir)"'/config.js'
        cd "$(ezpay_dir)" && npm run release
    fi
    runBuild "$version"
fi

read -r
