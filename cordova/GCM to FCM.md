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
