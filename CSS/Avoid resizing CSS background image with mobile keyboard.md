## Avoid resizing CSS background image with mobile keyboard

이 문제는 안드로이드나 IOS의 단말기에서 키보드가 올라올때 브라우저의 height가 변경되는 문제에서 발생한다.
height를 고정하게 되는 경우 단말기의 높이에 따라 여백이 생기므로 아주 골치아픈 부분이 아닐 수 없다.

여백이 생기지 않는 범위에서 최대한 하단에 붙였다.

```css
  min-height: 100vmax;
  background: transparent;
  padding-top: 40px;
  display: block;
  background-image: url('../assets/fonts/images-login-copy.png');
  background-position-y: bottom;
  background-size: 150%;
  background-repeat: no-repeat;
  background-attachment: fixed;
```