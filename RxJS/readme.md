## MS는 ReactiveX를 왜 만들었을까? (feat. RxJS)

https://huns.me/development/2051

## 쉽게 써봅시다. RxJS! - 손찬욱

https://www.youtube.com/watch?v=2f09-veX4HA

## RxJS

https://rxjs-dev.firebaseapp.com/guide/overview

## Understanding RxJS

https://www.youtube.com/watch?v=T9wOu11uU6U&list=PL55RiY5tL51pHpagYcrN9ubNLVXF8rGVi

## [번역] 반응형 프로그래밍과 RxJS 이해하기

https://hyunseob.github.io/2016/10/09/understanding-reactive-programming-and-rxjs/

```js
const btnClickStream = Rx.Observable.fromEvent(addLocationBtn, "click")
  .map(() => true)
  .forEach(val => console.log("btnClickStream val", val));
```
