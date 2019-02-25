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