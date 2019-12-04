//generators
//일시정지가 가능한 함수

function* listPeople() {
  yield "dal"; // == return
  yield "Flynn";
  yield "mark";
  yield "godkimchi";
  yield "sushi";
}

const listG = listPeople();
console.log(listG); //suspended

console.log(listG.next()); //value: "dal", done: false

/* 어떠한 data를 fetch한 뒤에 데이터를 가공하고 그 뒤 또다시 fetch하고 다시 가공하고 다시 fetch하고.. 한다면 사용할 수 있을듯 */

//proxy
const userObj = {
  username: "nico",
  age: 12,
  password: 1234
};

const userFilter = {
  get: (target, prop, receiver) => {
    return target[prop];
  },
  set: () => {
    console.log("Somebody wrote something");
  }
};

const filteredUser = new Proxy(userObj, userFilter); //모든 동작을 userFilter로 가로챌 수 있다.
