# pgcrypto

[1. API Document](https://www.postgresql.org/docs/8.3/pgcrypto.html)

> The pgcrypto module provides cryptographic functions for PostgreSQL.
>
> pgcrypto 모듈은 PostgreSQL에서 사용할 수 있는 암호화 관련 함수를 제공한다.

## crypt()

```
crypt(password text, salt text) returns text
```

> Calculates a crypt(3)-style hash of password. When storing a new password, you need to use gen_salt() to generate a new salt value. To check a password, pass the stored hash value as salt, and test whether the result matches the stored value.
>
> 입력한 password 문자열에 대한 crypt(3) 형태의 해시 값을 계산하는 함수. 첫 비밀번호를 만들 때는 gen_salt() 함수를 이용해 새로운 salt 값을 만들어 사용하면 편하다. 사용자가 입력한 비밀번호가 올바른지를 확인하는 방법은 저장된 값에서 salt 값을 구해서, 그 값으로 같은 함수의 소금 인자로 사용하고, 그 반환 값이 저장된 값과 같은가를 확인한다.

Example of setting a new password:

```sql
UPDATE ... SET pswhash = crypt('new password', gen_salt('md5'));
```

Example of authentication:

```sql
SELECT pswhash = crypt('entered password', pswhash) FROM ... ;
```

This returns true if the entered password is correct.

---

[2. PostgreSQL でパスワードをハッシュで保存](http://aoyagikouhei.blog8.fc2.com/blog-entry-182.html)

> データベースにパスワードを保存する時はハッシュ化するのは当然ですが、md5 とかだと脆弱だし同じパスワードが同じ値になってしまいます。  
> PostgreSQL の pgcrypto では安全なハッシュを提供しています。

セットアップ（PostgreSQL 9.1 以降）

```sql
CREATE EXTENSION pgcrypto;
```

テーブルは以下の通り。

```sql
CREATE TABLE t_user (
user_id TEXT NOT NULL,
password TEXT NOT NULL,
PRIMARY KEY(user_id))
```

ユーザ ID を「aoyagi」パスワードを「abc」とします。
登録は以下の通り。

```sql
INSERT INTO t_user (user_id ,password) VALUES ('aoyagi',crypt'abc', gen_salt('bf')));
```

パスワードの確認は以下の通りです。

```sql
SELECT user_id FROM t_user WHERE user_id = 'aoyagi' AND password = crypt('abc', password);
```

[3. ハッシュと暗号化・復号化について](https://qiita.com/reflet/items/eeced34f9c5c2a9fbaf6)

### crypt된 패스워드를 평문으로 바꿔보자

```sql
select user_id, case when (password = crypt('abc', password)) = 't' then 'abc' else null end as password
from t_user
where password is not null;
```

select절에서 crypt를 사용하면 맞을경우 true를 틀릴경우 false를 반환한다.

case문을 사용하면 패스워드를 평문으로 받을 수 있다.

where조건에 is not null를 써서 틀릴경우 결과 자체가 나오지 않게 하려 했으나, select절에 alias를 사용한 경우 where절에선 바로 쓸 수가 없었다.

때문에 아래와 같이 수정

```sql
select user_id, password
from (select user_id, case when (password = crypt('abc', password)) = 't' then 'abc' else null end as password
from t_user) as x
where x.password is not null;
```

틀린 암호를 입력한 경우 결과 자체가 나오지 않는다!

### PostgreSQL 데이터베이스 & 스키마

https://seuis398.blog.me/70097173659

> MySQL에서는 테이블의 집합을 데이터베이스(Database)라는 개념으로 사용했었지만,  
> PostgreSQL에서는 테이블의 집합으로 데이터베이스(Database)와 스키마(Schema)라는 두 개의 개념을 사용한다.
>
> 데이터베이스(Database)는 스키마(Schema)의 상위 개념이며, 또한 물리적인 집합인지 논리적인 집합인지의 차이도 가지고 있다.
>
> MySQL에서의 데이터베이스(Database) 개념은 PostgreSQL에서 스키마(Schema) 개념과 유사하다.
>
> 한가지 유의할 점은 서로 다른 데이터베이스(Database)에 있는 테이블은 서로 JOIN이 될 수 없다는 점이다.
>
> 하나의 DB 인스턴스에 의해 처리되지만 데이터베이스(Database)가 다르면 완전히 물리적인 분리가 되어 있다는 것을 의미하기 때문이다.
> 반면, 서로 다른 Schema의 테이블 간에는 JOIN이 가능하다.
> 또한 한 세션은 무조건 하나의 데이터베이스(Database)에만 접속할 수 있다.
>
> 스키마를 별도로 지정하지 않았다면 public이라는 이름의 스키마를 기본으로 사용하게 된다.

MySQL과는 조금 다르구나..

### ユーザとアクセス権限

https://www.techscore.com/tech/sql/10_01.html

> 一般に、構築したデータベースには多くのユーザがアクセスします。 必要なデータを取り出す、登録されたデータをさまざまな角度から分析する、新しいデータを追加する、古いデータを削除する、変更の必要があるデータを修正するなど、いろんな利用形態があります。しかし、誰もがこのようなことができる状態では、データベースが壊されてしまったり、外には見せたくないデータが流出してしまうということが起こりえます。
>
> 各 RDBMS はデータベースを利用できるユーザを限定することにより、データベースを保護しています。ユーザを限定すると同時に、参照はできるがデータの追加はできない、データの追加はできるが削除はできないなど、ユーザがデータベースにアクセスできる方法に対しても制限を与えています。

### PostgreSQL 暗号化

https://www.casleyconsulting.co.jp/blog/engineer/278/

### CASE문과 date_part

http://www.gisdeveloper.co.kr/?p=4601  
https://postgresdba.com/bbs/board.php?bo_table=B10&wr_id=25

### 날짜기준으로 하나의 레코드만 group by 한다면...

```sql
select * from (select 이름, 장소, 시간 from 테이블 order by 시간 desc) as a group by a.이름, a.장소
```

더 좋은 방법이 있을 것 같다.

### [SQL] ALTER TABLE 테이블 수정 (ADD, DROP, MODIFY, RENAME)

https://hyeonstorage.tistory.com/292

### PostgreSQL 한글 정렬 문제 해결하기

https://jupiny.com/2016/12/12/sort-korean-in-postgresql/

> Collate라는 컬럼이 있는데, 바로 이 부분이 데이터베이스의 정렬하는 순서를 결정한다. 그냥 데이터베이스를 생성하면 기본적으로 ko_KR.UTF-8 또는 en_US.utf8으로 설정되있음을 볼 수 있다.
>
> 해결법은 여기서 데이터베이스의 LC_COLLATE라는 변수 값을 'C'로 바꾸면 된다. 하지만 이는 생성된 데이터베이스에서는 바꿀 수 없으며, 데이터베이스를 최초로 생성할 때 설정을 해주어야 한다.
> 그래서 어쩔 수 없이 기존의 데이터베이스를 dump하고, LC_COLLATE를 'C'로 설정한 데이터베이스를 새로 만든 후, 이전에 dump한 것을 복구하는 방식으로 해결하여야 한다.

### Postgresql Order By is very weird

https://stackoverflow.com/questions/14191848/postgresql-order-by-is-very-weird

> PostgreSQL collation is mostly handled by PostgreSQL and should follow the same rules as the UNIX sort command. The first thing to do is to try using the sort command to determine if this is in fact the problem or if it is merely a symptom of something further down the stack.
