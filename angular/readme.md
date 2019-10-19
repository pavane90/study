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
