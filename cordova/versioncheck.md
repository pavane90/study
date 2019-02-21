# ionic & cordova のバージョン嚙み合わせ


■android-23 (propertiesのバージョン確認)
```
$ grep -r "android-2" ./
.//platforms/android/project.properties:target=android-23
.//platforms/android/CordovaLib/project.properties:target=android-23
```

■7:+ から 7:23+ に変更 (androidのビルドバージョン)

```
$ grep -r "com.android.support:appcompat-v7:" ./

.//platforms/android/project.properties:cordova.system.library.5=com.android.support:appcompat-v7:+
.//platforms/android/build.gradle:    compile "com.android.support:appcompat-v7:+"
.//plugins/cordova.plugins.diagnostic/plugin.xml:        <framework src="com.android.support:appcompat-v7:+" />
```

■4:+ から 4:23+ に変更
```
$ grep -r "com.android.support:support-v4:" ./ 
.//platforms/android/project.properties:cordova.system.library.4=com.android.support:support-v4:+
.//platforms/android/project.properties:cordova.system.library.6=com.android.support:support-v4:+
.//platforms/android/build.gradle:    compile "com.android.support:support-v4:+"
.//plugins/cordova.plugins.diagnostic/plugin.xml:        <framework src="com.android.support:support-v4:+" />
```
