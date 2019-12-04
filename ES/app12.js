//symbol

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
