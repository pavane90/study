# npm으로 package.json 생성하기
> https://blog.outsider.ne.kr/674  
> プロジェクトのレポジトリでnpm initを実行する

<pre><code>c:\git\nodejs>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (nodejs) //プロジェクトの名前
version: (1.0.0) //バージョン情報
description: do it node.js programming //説明など
entry point: (calc3.js) //main
test command:
git repository: (https://github.com/pavane90/nodejs)
keywords:
author: Lee, Byungman
license: (ISC)
About to write to c:\git\nodejs\package.json:

{
  "name": "nodejs",
  "version": "1.0.0",
  "description": "do it node.js programming",
  "main": "calc3.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/pavane90/nodejs.git"
  },
  "author": "Lee, Byungman",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/pavane90/nodejs/issues"
  },
  "homepage": "https://github.com/pavane90/nodejs#readme"
}


Is this OK? (yes)</code></pre>