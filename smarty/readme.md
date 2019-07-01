## Smarty の プラグインへの引数指定方法

https://pgmemo.tokyo/data/archives/649.html

通常（ \$data を myplugin に渡す ）

```php
{$data|myplugin}
```

引数を 2 つ（$data1, $data2）渡す

```php
{$data1|myplugin:$data2}
```

引数を 3 つ（$data1, $data2, \$data3）渡す

```php
{$data1|myplugin:$data2:$data3}
```

配列や連想配列（\$ar_data）を引数として渡す

```php
{$ar_data|@myplugin}
```

## 組み込み関数

https://www.smarty.net/docsv2/ja/language.function.if.tpl

```php
{* null でないことのチェック *}
{if isset($foo) }
   .....
{/if}
```

http://www.phpschool.com/classroom/SmartyDocument.pdf

[PHP] Smarty の fetch 関数で、様々なテンプレートに Smarty を応用する

https://ameblo.jp/itboy/entry-10055111616.html

## smarty foreach, foreachelse & php foreach

smarty : https://www.smarty.net/docsv2/en/language.function.foreach.tpl  
php : https://www.php.net/manual/en/control-structures.foreach.php

## 内税対応

https://commercepack.jp/blog/post20190613.html

> Commerce pack では、消費税は全て内税として扱いますので、商品を登録する際には税込の価格で登録していただきます。送料、代引き手数料につきましても同様に、全て税込価格で登録いただきます。

## php 함수 오버로딩

https://strangelight.tistory.com/entry/%ED%95%A8%EC%88%98-%EC%98%A4%EB%B2%84%EB%A1%9C%EB%94%A9

## PHP 예제로 알아보는 MVC 패턴

https://medium.com/@smartbosslee/php-%EC%98%88%EC%A0%9C%EB%A1%9C-%EC%95%8C%EC%95%84%EB%B3%B4%EB%8A%94-mvc-%ED%8C%A8%ED%84%B4-1628b47b1b04

## PHP: unserialize() expects parameter 1 to be string

https://stackoverflow.com/questions/35262180/php-unserialize-expects-parameter-1-to-be-string

## EC-cubeコーディングルールについて

https://doc.ec-cube.net/guideline_coding-style