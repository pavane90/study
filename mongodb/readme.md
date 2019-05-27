# mongodb のデータ export & import

## export

<pre><code>$ mongoexport -d [dbname] -u [username] -p [password] -c [collection] -o [outputfilename]</code></pre>

## import

<pre><code>$ mongoimport -d [dbname] -u [username] -p [password] -c [collection] [file] --upsert</code></pre>

> --upsert を使って上書きすることができる。

# mongodb のデータ dump & restore

1. バックアップ

   <pre><code>$ ssh [name & ip]
   $ df -h //容量確認
   $ sudo su
   $ cd /var/lib/mongodb/[バックアップフォルダ]
   $ export LC_ALL="en_US.UTF-8"
   $ mongodump -u [username] -p [password] --db [dbname] --out [フォルダ名].dump</code></pre>

2. 圧縮

   <pre><code>$ tar cfvz [ファイル名].dump.tar.gz [フォルダ名].dump</code></pre>

3. SFTP などで圧縮ファイルダウンロード

4. SFTP などで他のサーバーへアップロード

5. 解凍

   <pre><code>$ tar -xf [ファイル名].dump.tar.gz</code></pre>

6. リストア
   <pre><code>$ export LC_ALL="en_US.UTF-8"
   $ mongorestore -u [username] -p [password] -v --db [db名] --drop [解凍したフォルダ名]</code></pre>

> ファイルの所有者を確認すること(ex : chown root:root フォルダ名)

# mongodb のアカウント設定

dump したデータの restore したデータの password が異なる場合、admin でログインし、db.addUser が必要

<pre><code>$ mongo
> use admin
> db.auth("dbadmin","[パスワード]")
> use [db名]
> db.addUser("[ユーザ名]","[パスワード]");
> exit</code></pre>

# コレクションインデックスの確認

[[MongoDB] 강좌 6편 Index 설정](https://velopert.com/560)

## index 作成

**1 は昇順, -1 は降順**

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

## cursor.skip( value )

https://velopert.com/516

이 메소드는 출력 할 데이터의 시작부분을 설정할 때 사용됩니다. value 값 갯수의 데이터를 생략하고 그 다음부터 출력합니다.

예제4: 2개의 데이터를 생략하고 그 다음부터 출력

```bash
> db.orders.find().skip(2)
{ "_id" : 3, "item" : { "category" : "cookies", "type" : "chocolate chip" }, "amount" : 15 }
{ "_id" : 4, "item" : { "category" : "cake", "type" : "lemon" }, "amount" : 30 }
{ "_id" : 5, "item" : { "category" : "cake", "type" : "carrot" }, "amount" : 20 }
{ "_id" : 6, "item" : { "category" : "brownies", "type" : "blondie" }, "amount" : 10 }
```

# mongodb 4.0 테스트 설치

서버환경 설정패스  
몽고DB 설치후 설치폴더의 bin까지의 경로를 시스템 환경변수의 path로 추가한다  
cmd 실행 : mongod --dbpath /Users/유저명/database/local 을 입력한다
새로운 cmd창 실행 : mongo 입력후 use local 입력하면 local db를 사용할 수 있다.

# Compass  

https://www.mongodb.com/products/compass  

# 배열내의 키워드 검색 

```bash
db.collection.find({'array' : { '$elemMatch' : { 'value': /ragex/ }}})
```