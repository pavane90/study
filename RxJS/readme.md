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
import { Component, OnInit } from "@angular/core";

// ① RxJS 임포트
import { Observable, fromEvent } from "rxjs";

@Component({
  selector: "app-root",
  template: `
    <h3>Mouse Coordinates</h3>
    <h3>X: {{ posX }} Y: {{ posY }}</h3>
  `
})
export class AppComponent implements OnInit {
  mousePositon$: Observable<Event>;
  posX: number = 0;
  posY: number = 0;

  ngOnInit() {
    // ② 옵저버블의 생성(DOM 이벤트를 옵저버블로 변환)
    this.mousePositon$ = fromEvent(document, "mousemove");

    // ③ 옵저버는 옵저버블을 구독하고 옵저버블이 방출한 데이터를 전파받아 사용한다.
    this.mousePositon$.subscribe(
      (event: MouseEvent) => {
        this.posX = event.clientX;
        this.posY = event.clientY;
      },
      error => console.log(error),
      () => console.log("complete!")
    );
  }
}
```

### RxJS의 모든 것

https://gracefullight.dev/2019/04/30/RxJS%EC%9D%98-%EB%AA%A8%EB%93%A0-%EA%B2%83/

### 옵저버블 이벤트 스트림 예제

```js
// observable-event-http.component
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// RxJS 임포트
import { Subscription, Observable, of, throwError } from 'rxjs';
import { debounceTime, switchMap, map, tap, catchError } from 'rxjs/operators';

interface GithubUser {
  login: number;
  name: string;
}

@Component({
  selector: 'app-root',
  template: `
    <h2>Observable Events</h2>
    <input type="text" placeholder="Enter github userid"
      [formControl]="searchInput">
    <pre>{{ githubUser | json }}</pre>
  `
})
export class ObservableEventHttpComponent implements OnInit, OnDestroy {
  // ① Angular forms
  searchInput: FormControl = new FormControl('');
  githubUser: GithubUser;
  subscription: Subscription;

  // ② 서버와의 통신을 위해 HttpClient를 의존성 주입한다.
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // ① 폼 컨트롤 값의 상태를 옵저버블 스트림으로 수신한다.
    this.subscription = this.searchInput.valueChanges
      .pipe(
        // ③ 옵저버블이 방출하는 데이터를 수신하는 시간을 지연시킨다.
        debounceTime(500),
        // ④ 새로운 옵저버블을 생성한다.
        switchMap((userId: string) => this.getGithubUser(userId))
      )
      // ⑥ 옵저버블을 구독한다.
      .subscribe(
        user => this.githubUser = user,
        error => console.log(error)
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // ⑤ 서버로부터 데이터를 응답받아 옵저버블을 반환한다.
  getGithubUser(userId: string): Observable<GithubUser> {
    return this.http
      .get<GithubUser>(`https://api.github.com/users/${userId}`)
      .pipe(
        map(user => ({ login: user.login, name: user.name })),
        tap(console.log),
        // ⑦ Error handling
        catchError(err => {
          if (err.status === 404) {
            return of(`[ERROR] Not found user: ${userId}`);
          } else {
            return throwError(err);
          }
        })
      );
  }
}
```

### operators

오퍼레이터는 옵저버블을 생성, 변환, 필터링, 에러 처리의 기능을 하는 함수이다. 오퍼레이터는 새로운 옵저버블을 반환하므로 subscribe 메소드에 도달하기 전까지 체이닝을 통해 데이터를 전달할 수 있다.

### Subscription

http://sculove.github.io/blog/2017/10/07/rxjsbook4/

> Observable.subscribe의 반환값이다. Subscription 객체는 자원의 해제를 담당한다. 등록된 Observable의 데이터를 더이상 전달 받고 싶지 않을 경우 unsubscribe 메소드를 호출하여 자원을 해제한다.

> RxJS를 사용하여 개발할 때의 프로세스는 대부분 다음과 같은 과정을 거친다.

- 첫째. 데이터 소스를 Observable로 변경한다.
- 둘째. Observable의 operator를 통해 데이터를 변경하거나 추출한다.
  또는 여러 개의 Observable을 하나의 Observable로 합치거나 하나의 Observable을 여러 개의 Observable로 만든다.
- 셋째. 원하는 데이터를 받아 처리하는 Observer를 만든다.
- 넷째. Observable의 subscribe를 통해 Observer를 등록한다.
- 다섯째. Observable 구독을 정지하고 자원을 해지한다.


###  Rxjs 구독을 취소하는 여러가지 방법

https://ddalpange.github.io/2018/11/21/how-to-unsubscibe-in-rxjs/

Angular는 기본적으로 RxJS를 사용합니다. RxJS를 사용할때 스트림을 연 컴포넌트가 없어진다 해도 열린 스트림은 닫히지 않기 때문에 메모리를 계속 먹습니다. 그렇기 때문에 Unsubscribe를 호출하여 스트림을 닫아주어야하는데요. 매번 Unsubscribe를 하기는 너무나 귀찮음으로 스트림 구독을 해제할 수 있는 다양한 방법을 소개합니다.
참고로 HttpClient, Router 등 앵귤러 내부에서 제공하는 기능들은 따로 Unsubscribe를 하지 않아도 자동으로 구독을 해제합니다.