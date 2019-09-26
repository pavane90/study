# CSS 애니메이션 예제모음

## 25 CSS Button Animation Examples 2018

https://bashooka.com/coding/25-css-button-animation-examples-2018/

## CSS3 애니메이션을 쉽게 사용 가능한 온라인 툴 소개

https://nanati.me/css3-animation-tools/

---

# 자주찾는 디자인 모음

## CSS - ( Part 2 : Adding Icon ) Simple Input Text Box

https://www.youtube.com/watch?v=rWjntaq4FW4

## CSS flex box 3분만에 배우기

https://joshuajangblog.wordpress.com/2016/09/19/learn-css-flexbox-in-3mins/

### CSS ではみ出した文字を省略する「text-overflow: ellipsis;」がいつの間にか PC でも使えるようになってた！

http://tacamy.hatenablog.com/entry/2014/02/19/141948

### CSS Grid Layout

https://www.w3schools.com/css/css_grid.asp

### Angular 7 - Changing sidebar and element z-index

https://stackoverflow.com/questions/55315387/angular-7-changing-sidebar-and-element-z-index

### CSS / 선택자(Selector) / :nth-child(), :nth-last-child()

https://www.codingfactory.net/10781

### CSS 디버깅 시간을 절약 할 수있는 CSS 명명 규칙

https://www.vobour.com/-css-%EB%94%94%EB%B2%84%EA%B9%85-%EC%8B%9C%EA%B0%84%EC%9D%84-%EC%A0%88%EC%95%BD-%ED%95%A0-%EC%88%98%EC%9E%88%EB%8A%94-css-%EB%AA%85%EB%AA%85-%EA%B7%9C%EC%B9%99

### CSS Transition 활용 TIP (부드러운 움직임)

https://velog.io/@chading/CSS-Transition-%ED%99%9C%EC%9A%A9-TIP-%EB%B6%80%EB%93%9C%EB%9F%AC%EC%9A%B4-%EC%9B%80%EC%A7%81%EC%9E%84

### Position : Flexbox

http://www.beautifulcss.com/archives/2812

### 모바일환경에서 키보드가 올라올때 input을 가리는 문제

키보드가 올라오면 브라우저의 폭이 그만큼 줄어들게 되는데 modal을 사용하는 경우 position에 따라 브라우저의 중앙에 오게 되는 경우가 많다. 이럴땐 키보드의 높이로 인해 부족해진 브라우저의 높이가 input을 표시하지 못하는 경우가 있는데 media쿼리를 사용하여 modal의 위치를 조정하는 식으로 해결할 수 있다.

다만 modal내의 input이 여러개가 된다면 overflow로 스크롤을 가능하게 하는등의 대응이 필요해 보인다.

```css
@media screen and (max-height: 250px) {
  .modal-m {
    position: fixed;
    top: -20px;
  }
}
```

### CSS generator

http://www.bad-company.jp/box-shadow/

### SVG percentage circle with css keyframes animation - complete example

https://codepen.io/takenotsuka/pen/MWgEVpM

### Android、iPhone では button 要素に text-overflow:ellipsis が適用されない

https://blog.webcreativepark.net/2013/07/28-030252.html

### Scrollable container with dynamic height

https://codepen.io/stephenbunch/pen/KWBNVo

### When do the :hover, :focus, and :active pseudo-classes apply?

https://bitsofco.de/when-do-the-hover-focus-and-active-pseudo-classes-apply/

### Prevent BODY from scrolling when a modal is opened

https://stackoverflow.com/questions/9538868/prevent-body-from-scrolling-when-a-modal-is-opened

### CSS에 대한 깊은 이해: 폰트 매트릭스, line-height와 vertical-align

https://wit.nts-corp.com/2017/09/25/4903

### 반응형 웹을 위한 rem 단위로 디자인하기

http://indivdot.github.io/css/2016/03/26/emrem.html

### CSS 배경속성(Background Property)

https://webdir.tistory.com/340

### CSS Flex(Flexible Box) 완벽 가이드

https://heropy.blog/2018/11/24/css-flexible-box/

### 안드로이드 해상도 대응

https://pjh445.blog.me/220786859708

### 모달 팝업뜰때 바닥 스크롤 막기

https://velog.io/@naynara/%EB%AA%A8%EB%8B%AC-%ED%8C%9D%EC%97%85%EB%9C%B0%EB%95%8C-%EB%B0%94%EB%8B%A5-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EB%A7%89%EA%B8%B0

> 이방법을 쓰면 해결은 되나 안드로이드에서는 페이지 하단으로 스크롤시 URL바가 사라지지 않는다.

### Make a whole div clickable in order to launch a _blank document

https://stackoverflow.com/questions/4491879/make-a-whole-div-clickable-in-order-to-launch-a-blank-document

### Bootstrap Modal Dialog showing under Modal Background

https://weblog.west-wind.com/posts/2016/sep/14/bootstrap-modal-dialog-showing-under-modal-background

부트스트랩 모달의 경우 body를 기준으로 위치를 잡는데, 배경을 최대폭으로 쓰기위해 absolute속성으로 크기를 잡는 경우 모달이 나오지 않는 문제가 있다. 

여러가지 방법을 시도해본 결과 아래의 방법이 가장 효과적이다.

```html
<!--페이지 상단에 이러한 더미용 div를 추가한다.-->
<div class="">
  <div class=""></div>
</div>
<!-- 이 div에 컨텐츠를 집어넣고 absolute로 잡아주면 해결 -->
<div class="contents"> //position: absolute
  ...
</div>
```