# mongodbのデータexport & import

## export
<pre><code>$ mongoexport -d [dbname] -u [username] -p [password] -c [collection] -o [outputfilename]</code></pre>

## import
<pre><code>$ mongoimport -d [dbname] -u [username] -p [password] -c [collection] [file] --upsert</code></pre>
> --upsert を使って上書きすることができる。

# mongodbのデータdump & restore
1. バックアップ
<pre><code>$ ssh [name & ip]
$ df -h //容量確認
$ sudo su
$ cd /var/lib/mongodb/[バックアップフォルダ]
$ export LC_ALL="en_US.UTF-8"
$ mongodump -u [username] -p [password] --db [dbname] --out [フォルダ名].dump</code></pre>

2. 圧縮
<pre><code>$ tar cfvz [ファイル名].dump.tar.gz [フォルダ名].dump</code></pre>

3. SFTPなどで圧縮ファイルダウンロード

4. SFTPなどで他のサーバーへアップロード

5. 解凍
<pre><code>$ tar -xf [ファイル名].dump.tar.gz</code></pre>

6. リストア
<pre><code>$ export LC_ALL="en_US.UTF-8"
$ mongorestore -u [username] -p [password] -v --db [db名] --drop [解凍したフォルダ名]</code></pre>

> ファイルの所有者を確認すること(ex : chown root:root フォルダ名)

# mongodbのアカウント設定
dumpしたデータのrestoreしたデータのpasswordが異なる場合、adminでログインし、db.addUserが必要
<pre><code>$ mongo
> use admin
> db.auth("dbadmin","[パスワード]")
> use [db名]
> db.addUser("[ユーザ名]","[パスワード]");
> exit</code></pre>