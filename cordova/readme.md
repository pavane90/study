# Platforms and Plugins Version Management

[Platform Versioning](https://cordova.apache.org/docs/en/8.x/platform_plugin_versioning_ref/index.html#saving-platforms)

> From version 4.3.0 onwards, Cordova provides the ability to save and restore platforms and plugins.
버전 4.3.0 이후부터,  플랫폼과 플러그인을 저장하고 복원하는 기능을 제공한다.

>This feature allows developers to save and restore their app to a known state without having to check in all of the platform and plugin source code.
이 기능을 통해 개발자는 플랫폼과 플러그인 소스 코드를 모두 체크 인하지 않고도 앱을 알려진 상태로 저장 및 복원할 수 있다.

## Platform Versioning
플랫폼을 저장할때는 아래 커맨드를 사용한다
<pre><code>$ cordova platform add <platform[@<version>] | directory | git_url></code></pre>
커맨드 실행이 완료되면 config.xml에서 아래 결과를 확인할 수 있다.
```xml
<?xml version='1.0' encoding='utf-8'?>
    ...
    <engine name="android" spec="~4.0.0" />
    ...
</xml>
```
커맨드 실행이 완료되면 package.json에서 아래 결과를 확인할 수 있다.
```xml
 "cordova": {"platforms": ["android"]},"dependencies": {"cordova-android": "^4.0.0"} 
 ```

 #### Some examples : 
 - **'cordova platform add android'** => retrieves the pinned version of the android platform, adds it to the project and then updates config.xml and package.json.
 - **'cordova platform add android@3.7.0'** => retrieves the android platform, version 3.7.0 from npm, adds it to the project and then updates config.xml and package.json.
 - **'cordova platform add https://github.com/apache/cordova-android.git'** => npm installs the specified cordova-android from the git repository, adds the android platform to the project, then updates config.xml and package.json and points its version to the specified git-url.
 - **'cordova platform add C:/path/to/android/platform'** => retrieves the android platform from the specified directory, adds it to the project, then updates config.xml and package.json and points to the directory.
 - **'cordova platform add android --nosave'** => retrieves the pinned version of the android platform, adds it to the project, but does not add it to config.xml or package.json.
 - **'cordova platform remove android --nosave'** => removes the android platform from the project, but does not remove it from config.xml or package.json.

 ## Mass saving platforms on an existing project
 기존 프로젝트가 있고 프로젝트에 현재 추가된 플랫폼을 모두 저장하려는 경우 다음을 사용할 수 있다.
 <pre><code>$ cordova platform save</code></pre>

 ## Updating / Removing platforms
 또한 **'cordova platform update'** 과 **'cordova platform remove'** 커맨드를 사용하여 config.xml과 package.json으로부터 update/delete가 가능하다. 

 <pre><code>$ cordova platform update <platform[@<version>] | directory | git_url> --save
$ cordova platform remove <platform></code></pre>

#### Some examples :
- **'cordova platform update android --save'** => In addition to updating the android platform to the pinned version, update config.xml entry
- **'cordova platform update android@3.8.0 --save'** => In addition to updating the android platform to version 3.8.0, update config.xml entry
- **'cordova platform update /path/to/android/platform --save'** => In addition to updating the android platform to version in the folder, update config.xml entry
- **'cordova platform remove android'** => Removes the android platform from the project and deletes its entry from config.xml and package.json.

## Restoring platforms

> Platforms are automatically restored from package.json and config.xml when the 'cordova prepare' command is run. After prepare is run, package.json and config.xml should contain identical platforms and versions.

> If you add a platform without specifying a version/folder/git_url, the version to install is taken from package.json or config.xml, if found. In case of conflicts, package.json is given precedence over config.xml.

버전, 폴더, 깃주소 없이 **'cordova platform add android'** 를 실행한다면 config.xml과 package.json를 기준으로 플랫폼이 추가된다.