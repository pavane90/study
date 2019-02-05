# node.js v0.10.4 → v0.10.48
> 隠れていたNode.jsの4バイトメモリリーク、Walmart問題の解決  
> [jovi0608.hatenablog.com](https://jovi0608.hatenablog.com/entry/20131212/1386809105)
* * *
1. 現行のバージョンを確認
<pre><code>$ nvm ls
default -> 0.10.4 (-> v0.10.4)
</code></pre>

2. グローバルパッケージを取得してメモしておく
<pre><code>$ npm -g list --depth 0
/home/dev/.node/v0.10.4/lib
├── ***@1.6.3
├── ***@1.6.2
├── ***@0.2.7
</code></pre>

3. nodejsインストール
<pre><code>$ nvm install v0.10.48</code></pre>

4. bashrcを書き換え（必要だったら）
<pre><code>$ vim ~/.bashrc
  ~~~~~
  source ~/.node/nvm.sh
  nvm use "v0.10.4" # -> "v0.10.48"に変更
  ~~~~~
</code></pre>

5. bashrcをリロード
<pre><code>$ source ~/.bashrc
Now using node v0.10.48 (npm v2.15.1)</code></pre>

6. メモしたnode_modulesをグローバルインストール
<pre><code>$ npm -g install *** *** ...
  ~~~~~
  npm install -g  brunch@1.6.3
  npm install -g  coffee@4.1.0
  npm install -g  coffee-debug@0.0.3</code></pre>

7. サーバー再起動