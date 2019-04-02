# GCMからFCMへの移行(phonegap-plugin-push)

[Link - phonegap-plubin-push : Installation](https://github.com/phonegap/phonegap-plugin-push/blob/v1.x/docs/INSTALLATION.md#co-existing-with-plugins-that-use-firebase)
> ### Co-existing with plugins that use Firebase
> Problems may arise when push plugin is used along plugins that implement Firebase functionality (cordova-plugin-firebase-analytics, for example). Firebase uses @string/google_app_id, as does the push plugin, though the value format differs, causing problems like this: Invalid google_app_id. Firebase Analytics disabled.

> To make the two work together, you need to migrate your GCM project from Google console to Firebase console:

> 1. In Firebase console - [import your existing GCM project](https://firebase.google.com/support/guides/google-android#migrate_your_console_project), don't create a new one.
> 2. Set your SENDER_ID variable to match the id of your imported Firebase project. In case of cordova, your config.xml would look something like this:

```xml
<plugin name="phonegap-plugin-push" spec="~1.10.0">
    <variable name="SENDER_ID" value="1:956432534015:android:df201d13e7261425" />
</plugin>
```

> ***Note***: No changes on the back-end side are needed: even though recommended, it isn't yet required and sending messages through GCM gateway should work just fine.

***
# phonegap-plugin-push migrate 1.x to 2.x

> ['Read This'](https://developers.google.com/cloud-messaging/android/android-migrate-fcm) As of April 10, 2018, Google has deprecated GCM. The GCM server and client APIs are deprecated and will be removed as soon as April 11, 2019. Migrate GCM apps to Firebase Cloud Messaging (FCM), which inherits the reliable and scalable GCM infrastructure, plus many new features. See the migration guide to learn more.


phonegap-plugin-push 1.x는 GCM용이고 2.x는 FCM용이기 때문에 업그레이드를 하지 않으면 2019년 4월 11일부터 GCM게이트를 통한 Push가 이용 불가능해질 가능성이 있다.

```bash
> ionic cordova plugin rm phonegap-plugin-push
> ionic cordova plugin add phonegap-plugin-push@2.0.0 (or lastest)
> ionic cordova platform rm android
> ionic cordova platform add android@6.2.1 (or lastest)
> ionic cordova build android
> ionic cordova run android
```

# phonegap-plugin-pushがparseされない
```bash
AndroidRuntime: android.content.res.Resources$NotFoundException: String resource ID #0x0”
```
> https://github.com/phonegap/phonegap-plugin-push/issues/1800


# メモ
https://stackoverflow.com/questions/37861231/how-can-i-implement-ionic-io-push-notifications-on-android  

https://codesundar.com/phonegap-plugin-push/

# :processDebugGoogleServices がスキップされた

play-services-gcmを使っているプラグインが複数存在する場合、gradleのバージョンが合わなくなるため、正しいバージョンを指定する必要がある。

主に、facebook, google+, notifications, crosswalk, google mapsでこの問題が発生するぽい

#### com.adjust.sdk@4.10.1	
    cordova.system.library.1=com.google.android.gms:play-services-analytics:+
#### com.cmackay.plugins.googleanalytics@0.1.22	
	cordova.system.library.2=com.google.android.gms:play-services-analytics:+
#### cordova-plugin-android-idfa@1.0.4	
	cordova.system.library.6=com.google.android.gms:play-services-ads:+
#### cordova.plugins.diagnostic@3.1.5	
	cordova.system.library.7=com.android.support:support-v4:+
	cordova.system.library.8=com.android.support:appcompat-v7:+
#### de.appplant.cordova.plugin.local-notification@0.8.5	
	cordova.system.library.7=com.android.support:support-v4:+

# 解決策
原因はプラグインレベルの*build.gradle*とプロジェクトレベルの*build.gradle*が合わなくてコンパイルをスキップすることが原因ぽい（なぜログに表示されないのかは不明・・・）

1. platforms > android > phonegap-plugin-push/XXXXXXX-push.gradleを開く
2. *classpath 'com.google.gms:google-services:3.0.0'* と *apply plugin: com.google.gms.googleservices.GoogleServicesPlugin* 行を削除して保存
3. platforms > android > build.gradle の34行目に *classpath 'com.google.gms:google-services:3.2.1'* を追加
4. build.gradle の最後に *apply plugin: 'com.google.gms.google-services'* を追加
**これで怒られたので以下を修正**
5. platforms > android > project.properties の*cordova.system.library.5=com.google.firebase:firebase-messaging:11.0.1* を*11.0.4* に指定した(ログで交換性があるバージョンが11.0.4で表示されていたため)
6. ionic build androidするとパーシングがうまく始まる、FCMコンソールでも端末が登録されていることが確認できた

# Android 8.0の対応

```bash
04-01 15:43:35.037 14496 14496 E AndroidRuntime: java.lang.RuntimeException: java.lang.RuntimeException: java.lang.SecurityException: Permission Denial: opening provider com.android.providers.contacts.ContactsProvider2 from ProcessRecord{22b8b64 14496:jp.co.xxxx.yyyy/u0a415} (pid=14496, uid=10415) requires android.permission.READ_CONTACTS or android.permission.WRITE_CONTACTS
04-01 15:43:35.037 14496 14496 E AndroidRuntime: 	at org.xwalk.core.ReflectMethod.invoke(ReflectMethod.java:67)			
04-01 15:43:35.037 14496 14496 E AndroidRuntime: 	at org.xwalk.core.XWalkCoreWrapper.handlePostInit(XWalkCoreWrapper.java:157)			
04-01 15:43:35.037 14496 14496 E AndroidRuntime: 	at org.xwalk.core.XWalkLibraryLoader$ActivateTask.onPostExecute(XWalkLibraryLoader.java:306)			
04-01 15:43:35.037 14496 14496 E AndroidRuntime: 	at org.xwalk.core.XWalkLibraryLoader$ActivateTask.onPostExecute(XWalkLibraryLoader.java:277)			
```

連絡先を使ってないのに権限を呼び出す…  
**crosswalkを削除した**(プラグインのメインテナンスが数年前からなくて最新のAndroidに対応できない)

# SDK最新化

SDKリポジトリはmavenからダウンロードできるからbuild.gradleを以下のように修正

```gradle
allprojects {
    repositories {
        jcenter()
        maven {
            url "https://maven.google.com"
        }
    }
}
```

