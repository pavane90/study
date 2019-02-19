# 一部のプラグインのメモ

"com-badrit-base64"  
なぜかURLからうまく取得できない（機能していないっぽい）  

"cordova-plugin-carrier"  
Gitから取得ができなくてnpmから取得する  
cordova plugin add com.peerio.cordova.plugin.carrier

## プラグインの復旧
package.jsonからプラグインを取得する
<pre><code>ionic state restore --plugins 
//もしくは
cordova state restore --plugins </code></pre>