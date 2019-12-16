## 북마크

1. 공식홈페이지 https://angular.kr/
2. 블로그 https://blog.angular.io/
3. Poiemaweb https://poiemaweb.com/

## 도서

- Angular Essentials  
  https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=153742929

- 앵귤러 첫걸음  
  https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=110012566

- Angular Development with TypeScript  
  https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=110998774

### How to call a function on every route change in angular2

https://stackoverflow.com/questions/42453375/how-to-call-a-function-on-every-route-change-in-angular2

희망사항 : 스마트폰에서 PC화면을 열었을때 스케일을 0.5로 하고싶다.
하지만 스마트폰 전용 페이지의 경우에는 1.0을 사용한다.

```html
<meta id="viewport" name="viewport" content="width=device-width,
initial-scale={{scale}}>
```

```ts
  //최초의 스케일은 1로 초기화해둔다
  this.scale = 1.0;
  //router이벤트를 감시하여 주소변경이 있을때마다 함수를 불러온다
  this.router.events.subscribe((ev) => {
  if (ev instanceof NavigationEnd) {this.initScale()}
  });

  public initScale() {
    //화면이 가로인지 세로인지를 판단하여 가로폭의 너비만 사용
    let sw = screen.width;
    let sh = screen.height;
    let fw;
    if ( window.matchMedia("(orientation: landscape)").matches ) {
    fw = sh;
    } else {
    fw = sw;
    }

    if (fw < 768 && this.getPageName()) {
        this.scale = 0.5; //768px미만 (bootstrap상 768미만은 스마트폰으로 판단하므로 해당되는 단말이면 0.5스케일로 반환)
    } else {
        this.scale = 1.0; //그외는 1.0으로 복귀
    }
  }

  public getPageName(){
    // 특정 문자열을 가진 페이지에 대해서는 0.5로 하고 싶었기 때문에 getPageName함수도 정의
    if (!location.href.match('/sp/')) {
        return true;
    }
    else {
        return false;
    }
  }
```

### Route transition animations

https://angular.io/guide/route-animations

### Angular 데이터 바인딩 III (ngModel)

https://dschci.tistory.com/84

### Hierarchical Routing Animations in Angular

https://www.youtube.com/watch?v=yPKSpuso6K0

### Catalysing your Angular 4 app Performance

https://medium.com/paramsingh-66174/catalysing-your-angular-4-app-performance-9211979075f6

> A very prime way to optimise your loops is to keep track of \*ngFor them using the trackBy property.

```html
<ul>
  <li *ngFor="let song of songs; trackBy: trackSongByFn">{{song.name}}</li>
</ul>
```

> And then you can create a trackBy function in your ts file like this:

```ts
trackByFn(index, song) { return index; // or song.id }
```

### How to use Virtual Scroll in Angular to boost the website performance

https://medium.com/wineofbits/how-to-use-virtual-scroll-in-angular-to-boost-the-website-performance-ed2d543be41c

### Improving Angular \*ngFor Performance Through trackBy

https://medium.com/better-programming/improving-angular-ngfor-performance-through-trackby-ae4cf943b878

### 상대경로의 보안문제

../로 경로를 찾아가게 하면 일부 단말기에서 400에러를 내며 표시하지 못하는 경우가 있다.

### 과연 Vue.js가 앵귤러나 리엑트보다 좋을까?

http://jeonghwan-kim.github.io/vue/2017/03/29/is-vue-better-than-angular-react.html

### ’==’와 ‘===’의 차이

http://guswnsxodlf.github.io/javascript-equal-operator

### 앵귤러 부트스트랩

https://angular.kr/guide/bootstrapping

### Angular でアコーディオンを実装

https://qiita.com/shirokuman/items/9859f7ef9bc12230cd77

> app.module.ts

```typescript
// import for animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
  ],
})
```

> accordion.html

```html
<!-- アコーディオンを開く閉じるのボタン -->
<div class="pointerCursor" (click)="onAccordion($event)">
  <i [ngClass]="showDetail ? 'fa fa-minus-circle' : 'fa fa-plus-circle'"></i>
  &nbsp;詳しい情報を{{showDetail ? '隠す' : '表示する'}}
</div>

<!-- アコーディオンの中身 -->
<div *ngIf="showDetail" [@accordion]>
  〜アコーディオンで表示したい内容〜
</div>
```

> accordion.component.ts

```typescript
import { trigger, style, animate, transition } from "@angular/animations";

@Component({
  selector: "sample-app",
  templateUrl: "./accordion.html",
  styleUrls: ["./accordionStyle.scss"],
  animations: [
    trigger("accordion", [
      transition(":enter", [
        style({ height: "0", opacity: 0, overflow: "hidden" }),
        animate("500ms", style({ height: "*", opacity: 1 }))
      ]),
      transition(":leave", [
        style({ height: "*", opacity: "1", overflow: "hidden" }),
        animate("500ms", style({ height: "0" }))
      ])
    ])
  ]
})
export class AccordionTest {
  public showDetail: boolean;

  constructor() {}

  // アコーディオン開閉時に呼ばれるイベント
  onAccordion($event) {
    this.showDetail = !this.showDetail;
  }
}
```

### 프론트엔드 개발자를 위한 가이드 문서 모음 (NO. 10)

https://serisepomme.tistory.com/entry/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%A5%BC-%EC%9C%84%ED%95%9C-%EA%B0%80%EC%9D%B4%EB%93%9C-%EB%AC%B8%EC%84%9C-%EB%AA%A8%EC%9D%8C-NO-10

### TypeScript 함수 오버로딩

https://codeday.me/ko/qa/20190313/22279.html

### 11 Angular Component Libraries You Should Know In 2019

https://blog.bitsrc.io/11-angular-component-libraries-you-should-know-in-2018-e9f9c9d544ff

### Flux로의 카툰 안내서

http://bestalign.github.io/2015/10/06/cartoon-guide-to-flux/

### Redux로의 카툰 안내서

http://bestalign.github.io/2015/10/26/cartoon-intro-to-redux/

### Context API가 Redux를 대체할 수 있을까요?

https://medium.com/lunit-engineering/context-api%EA%B0%80-redux%EB%A5%BC-%EB%8C%80%EC%B2%B4%ED%95%A0-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C%EC%9A%94-76a6209b369b

### 10 Angular and TypeScript Projects to Take You From Zero to Hero

https://blog.codewithdan.com/10-angular-and-typescript-projects-to-take-you-from-zero-to-hero/

### 9 Extremely Useful HTML Tricks

https://dev.to/razgandeanu/9-extremely-useful-html-tricks-463a