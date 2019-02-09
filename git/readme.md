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