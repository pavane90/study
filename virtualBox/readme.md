# VBoxの時間をホストと同期させない方法

Vboxは自動的にホストの時間をゲストに同期するため、ゲストPCの時間を手動で設定する場合は以下の設定か必要

<pre><code>cd c:\Program Files\Oracle\VirtualBox</code></pre>

### 同期しない
<pre><code>VBoxManage.exe setextradata "VM NAME" "VBoxInternal/Devices/VMMDev/0/Config/GetHostTimeDisabled" "1"</code></pre>

### 同期する
<pre><code>VBoxManage.exe setextradata "VM NAME" "VBoxInternal/Devices/VMMDev/0/Config/GetHostTimeDisabled" "0"</code></pre>