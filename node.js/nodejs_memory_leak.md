# node.jsのメモリリーク対応
## 前提	
<pre>- Node.jsのプロセスにメモリサイズを指定して起動している
- Node.jsのガベージコレクションの削除範囲外のメモリ使用量が増える。
- Node.jsのプロセスにメモリサイズを超過することでOSからkillされる。</pre>
* * *
## 原因1
**HTTPリクエストを受け付けるごとに4バイトメモリリークする**
- Node.js 0.10.4で問題が発生
- Node.jsのバージョンアップで対応可

## 原因２	
**Node.jsの処理内のメモリリーク**
- 各scriptファイルの処理で使用した変数がガベージで解放されない
- 返却値を変数に格納して初期化する
* * *
### 変更前
<pre><code>for key in Object.keys site.Info.Modules
</code></pre>
### 変更後
<pre><code>keys = Object.keys site.Info.Modules
for key in keys
・・・
keys = []
</code></pre>
* * *
### 変更前
<pre><code>for apage in site.pages
</code></pre>
### 変更後
<pre><code>pages = site.pages
for apage in pages
・・・
pages = ""
footerUl = ""
</code></pre>