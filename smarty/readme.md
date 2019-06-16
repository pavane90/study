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
