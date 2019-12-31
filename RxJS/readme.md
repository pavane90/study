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

```js
import { Component, OnInit } from '@angular/core';

// ① RxJS 임포트
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h3>Mouse Coordinates</h3>
    <h3>X: {{ posX }} Y: {{ posY }}</h3>
  `
})
export class AppComponent implements OnInit {
  mousePositon$ :Observable<Event>;
  posX: number = 0;
  posY: number = 0;

  ngOnInit() {
    // ② 옵저버블의 생성(DOM 이벤트를 옵저버블로 변환)
    this.mousePositon$ = fromEvent(document, 'mousemove');

    // ③ 옵저버는 옵저버블을 구독하고 옵저버블이 방출한 데이터를 전파받아 사용한다.
    this.mousePositon$.subscribe(
      (event: MouseEvent) => {
        this.posX = event.clientX;
        this.posY = event.clientY;
      },
      error => console.log(error),
      () => console.log('complete!')
    );
  }
}
```