## 0. 설정과 초기화
기초강좌  
https://backlog.com/git-tutorial/kr/

전역 사용자명/이메일 구성하기
<pre><code>git config - -global user.name “Your name”

git config - -global user.email “Your email address”</code></pre>

저장소별 사용자명/이메일 구성하기
<pre><code>git config user.name “Your name”

git config user.email “Your email address”</code></pre>
전역 설정 정보 조회
<pre><code>git config - -global - -list</code></pre>
저장소별 설정 정보 조회
<pre><code>git config - -list</code></pre>

## 1. 이미 커밋된 내용에서 author(작성자) 수정하기
https://jojoldu.tistory.com/120
> <pre><code>git rebase -i -p 커밋hash
> 에디터에서 pick을 edit로(rebase대상지정)
> git commit --amend --author="사용자명 <이메일>"
> git rebase --continue
> git pull & git push</code></pre>

## 2. 로그 
<pre><code>git log --graph --decorate --oneline</code></pre>

## 3. reset과 revert의 차이
[[초보용] Git 되돌리기( Reset, Revert )](https://medium.com/nonamedeveloper/%EC%B4%88%EB%B3%B4%EC%9A%A9-git-%EB%90%98%EB%8F%8C%EB%A6%AC%EA%B8%B0-reset-revert-d572b4cb0bd5)

git reset
<pre><code>git reset <옵션> <돌아가고싶은 커밋> </code></pre>

git revert
<pre><code>git revert <되돌릴 커밋>
git revert 2664ce8 //단일커밋
git revert 2664ce8..15413dc // 범위지정</code></pre>

### 언제 reset을 하고 언제 revert를 해야하나?
> 단순하게 생각하면 reset을 하는 것이 revert를 하는 것보다 이력을 더 단순하게 만들어주기 때문에 revert의 장점이 많지 않아 보입니다. 하지만 이력 중간에 로그 출력하도록 한 커밋이 있고 그 커밋만을 취소하려고 한다면 reset을 사용하여 이후의 이력을 모두 제거하는 것은 이후 이력을 모두 날려버리는 결과를 나을 것입니다. 이런 때 revert를 사용하여 해당 커밋의 내용만 되돌릴 수 있습니다. 또한 이미 원격 리파지토리에 push 를 한 상태라면 reset을 사용하면 reset 하기 이전으로 되돌리기 전까지는 push 할 수 없게됩니다. (물론 force라는 무시무시한 옵션이 있기는 합니다. ) 그래서 이미 push 한 코드라면 미련을 버리고 revert를 하셔야 합니다.

## Git Branch 이름 변경하기 

https://thdev.tech/git/2016/12/19/Git-Branch-Name-Change/

## [Git]Tag 추가, 변경 및 삭제하기

http://minsone.github.io/git/git-addtion-and-modified-delete-tag