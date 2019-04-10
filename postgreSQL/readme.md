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

***

[2. PostgreSQLでパスワードをハッシュで保存](http://aoyagikouhei.blog8.fc2.com/blog-entry-182.html)  
> データベースにパスワードを保存する時はハッシュ化するのは当然ですが、md5とかだと脆弱だし同じパスワードが同じ値になってしまいます。  
PostgreSQLのpgcryptoでは安全なハッシュを提供しています。 

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

ユーザIDを「aoyagi」パスワードを「abc」とします。
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