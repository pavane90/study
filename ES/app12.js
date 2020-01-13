//symbol
/*
Symbol() 함수는 심볼(symbol) 형식의 값을 반환하는데, 이 심볼은 내장 객체(built-in objects)의 여러 멤버를 가리키는 정적 프로퍼티와 전역 심볼 레지스트리(global symbol registry)를 가리키는 정적 메서드를 가지며, "new Symbol()" 문법을 지원하지 않아 생성자 측면에서는 불완전한 내장 객체 클래스(built-in object class)와 유사합니다.
*/

const hello = Symbol();
const bye = Symbol();
//이 두개는 같지않다.

const superBig = {
  [Symbol("nico")]: {
    handsome: true
  },
  [Symbol("nico")]: {
    age: 12
  }
};
//이렇게 되면 nico는 절대 바꿀 수 없다.

//set
//오브젝트형으로 중복값없이 값을 넣을 수 있다.
const sexySet = new Set([1, 2, 3, 4, 5, 6, 7, 7, 7, 8, 9]); //1,2,3,4,5,6,7,8,9

//weakSet
const weakSet = new WeakSet();
//내부에 요소가 없다면 가비지 컬렉터가 내용을 가져간다 (문제는 타이밍을 알수없음)
