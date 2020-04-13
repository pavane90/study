# Vanilla JS

http://vanilla-js.com/

### stuff by kangax

http://kangax.github.io/

### Can I use

https://caniuse.com/#search=include

### Dynamic import()

https://v8.dev/features/dynamic-import

### Optional catch binding

https://v8.dev/features/optional-catch-binding

### 2020 자바스크립트 트렌드는 어떻게 될까?

https://www.youtube.com/watch?v=YPMARa8Ex58

### state of javascript 2019

https://2019.stateofjs.com/

### 구조 분해 할당

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

#### 배열 구조 분해

기본 변수 할당

```javascript
var foo = ["one", "two", "three"];

var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"
```

선언에서 분리한 할당
변수의 선언이 분리되어도 구조 분해를 통해 값을 할당할 수 있습니다.

```javascript
var a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```
