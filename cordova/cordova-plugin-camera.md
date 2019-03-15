# Android8以上のcordova-plugin-camera
cordova-plugin-cameraプラグインがandroid OS8.0以上ではうまく動作しない問題があった
・ライブラリの画像選択はできる
・動画撮影もできる
・**写真撮影**ができない問題がある（権限取得失敗やアプリクラッシュ）


## 問題が発生した時点のログ

```bash
03-14 13:13:17.175  4899  5484 E PluginManager: Uncaught exception from plugin
03-14 13:13:17.175  4899  5484 E PluginManager: android.os.FileUriExposedException: file:///storage/emulated/0/Android/data/jp.co.XXXXX.XXXXXX/cache/.Pic.jpg exposed beyond app through ClipData.Item.getUri()
03-14 13:13:17.175  4899  5484 E PluginManager: 	at android.os.StrictMode.onFileUriExposed(StrictMode.java:1958)
03-14 13:13:17.175  4899  5484 E PluginManager: 	at android.net.Uri.checkFileUriExposed(Uri.java:2356)
03-14 13:13:17.175  4899  5484 E PluginManager: 	at android.content.ClipData.prepareToLeaveProcess(ClipData.java:944)
03-14 13:13:17.175  4899  5484 E PluginManager: 	at android.content.Intent.prepareToLeaveProcess(Intent.java:10480)
03-14 13:13:17.175  4899  5484 E PluginManager: 	at android.content.Intent.prepareToLeaveProcess(Intent.java:10465)
03-14 13:13:17.175  4899  5484 E PluginManager: 	at android.app.Instrumentation.execStartActivity(Instrumentation.java:1616)
03-14 13:13:17.175  4899  5484 E PluginManager: 	at android.app.Activity.startActivityForResult(Activity.java:4564)
03-14 13:13:17.175  4899  5484 E PluginManager: 	at org.apache.cordova.CordovaActivity.startActivityForResult(CordovaActivity.java:342)
03-14 13:13:17.175  4899  5484 E PluginManager: 	at android.app.Activity.startActivityForResult(Activity.java:4522)
03-14 13:13:17.175  4899  5484 E PluginManager: 	at org.apache.cordova.CordovaInterfaceImpl.startActivityForResult(CordovaInterfaceImpl.java:66)
03-14 13:13:17.175  4899  5484 E PluginManager: 	at org.apache.cordova.camera.CameraLauncher.takePicture(CameraLauncher.java:293)
03-14 13:13:17.175  4899  5484 E PluginManager: 	at org.apache.cordova.camera.CameraLauncher.callTakePicture(CameraLauncher.java:264)
03-14 13:13:17.175  4899  5484 E PluginManager: 	at org.apache.cordova.camera.CameraLauncher.execute(CameraLauncher.java:173)
03-14 13:13:17.175  4899  5484 E PluginManager: 	at org.apache.cordova.CordovaPlugin.execute(CordovaPlugin.java:98)
03-14 13:13:17.175  4899  5484 E PluginManager: 	at org.apache.cordova.PluginManager.exec(PluginManager.java:132)
03-14 13:13:17.175  4899  5484 E PluginManager: 	at org.apache.cordova.CordovaBridge.jsExec(CordovaBridge.java:57)
03-14 13:13:17.175  4899  5484 E PluginManager: 	at org.crosswalk.engine.XWalkExposedJsApi.exec(XWalkExposedJsApi.java:40)
03-14 13:13:17.175  4899  5484 E PluginManager: 	at org.chromium.base.SystemMessageHandler.nativeDoRunLoopOnce(Native Method)
03-14 13:13:17.175  4899  5484 E PluginManager: 	at org.chromium.base.SystemMessageHandler.handleMessage(SystemMessageHandler.java:39)
03-14 13:13:17.175  4899  5484 E PluginManager: 	at android.os.Handler.dispatchMessage(Handler.java:105)
03-14 13:13:17.175  4899  5484 E PluginManager: 	at android.os.Looper.loop(Looper.java:164)
03-14 13:13:17.175  4899  5484 E PluginManager: 	at android.os.HandlerThread.run(HandlerThread.java:65)
```

## 参考資料
https://github.com/apache/cordova-plugin-camera/issues/416
https://github.com/apache/cordova-plugin-camera/issues/373

## 解決
ionic plugin remove --force cordova-plugin-camera  
ionic plugin remove --force cordova-plugin-compat  
ionic plugin add cordova-plugin-compat@1.1.0  
ionic platform remove android  
ionic platform add android@6.2.1  
ionic plugin add cordova-plugin-camera@2.3.1  
