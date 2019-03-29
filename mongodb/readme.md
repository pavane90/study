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

# コレクションインデックスの確認

[[MongoDB] 강좌 6편 Index 설정](https://velopert.com/560)

## index 作成
**1は昇順, -1は降順**
```bash
db.COLLECTION.createIndex({KEY:1})
```
**Single field index**
```bash
db.report.createIndex( { score: 1 } )
```
**Multi field index**
```bash
db.report.createIndex( { age: 1, score: -1} )
```

## index 確認
```bash
db.collection.getindexes()
```
## index 削除
```bash
db.collection.dropindex()
```

# Update
[[MongoDB] 강좌 5편 Document 수정 – update() 메소드](https://velopert.com/545)

# mongoexport 에서 isodate 사용

> mongoexport queries require the use of strict-mode MongoDB extended JSON

```bash
mongoexport.exe -h *MYHOST* -p *MYPORT* -q "{ 'time' : { '$gte' : { '$date' : '2014-12-21 12:57:00.506Z' },'$lt' : { '$date' : '2014-12-21 12:59:00.506Z' } } }"
```

# 스크립트 사용

실행예제  
```bash
mongo dbname -u username -p password --quiet script.js > script.tsv
```

```javascript
rs.slaveOk() // db가 slave인경우 필요

print("_id, value, createDate") // title
db.collection.find(쿼리내용).forEach(function(data){
    print(data._id+","+data.value+","+data.createDate.getTime()) // 시간에 대해선 getTime를 사용하면 UNIXTIME출력가능
  }
})
```