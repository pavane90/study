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