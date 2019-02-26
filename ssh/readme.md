# MacでSSH公開鍵・秘密鍵ファイルをコピーして使ったら警告がでた
http://blog.ruedap.com/2011/04/04/mac-ssh-key-copy-error
***
```bash
$ git push nekostagram master
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Permissions 0644 for '/Users/ruedap/.ssh/id_rsa' are too open.
It is recommended that your private key files are NOT accessible by others.
This private key will be ignored.
bad permissions: ignore key: /Users/ruedap/.ssh/id_rsa
Permission denied (publickey).
fatal: The remote end hung up unexpectedly
```

> ググると**パーミッションを0600に変えてあげれば大丈夫**ってのをちらほら見かけたので、その通りにしてみる。

```bash
$ chmod 0600 ~/.ssh/id_rsa
```

# SSH接続エラー回避方法：.ssh/known_hostsから特定のホストを削除する/削除しないで対処する3つの方法

https://qiita.com/grgrjnjn/items/8ca33b64ea0406e12938
***

```bash
$ ssh remote_host
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that the RSA host key has just been changed.
The fingerprint for the RSA key sent by the remote host is
29:24:c2:69:a3:b0:dc:4d:23:fc:9d:85:9f:ea:01:9b.
Please contact your system administrator.
Add correct host key in /home/grgrjnjn/.ssh/known_hosts to get rid of this message.
Offending key in /home/grgrjnjn/.ssh/known_hosts:3
RSA host key for remote_host has changed and you have requested strict checking.
Host key verification failed.
```

```bash
$ ssh-keygen -R remote_host_name
```
で解決できる