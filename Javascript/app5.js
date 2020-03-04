//Spread

const friends = [1, 2, 3, 4];
console.log(friends); //배열표시
console.log(...friends); //배열속 값표시

const family = ["a", "b", "c"];
console.log([...friends] + [...family]); //1개의 array안에 두 배열의 요소를 합칠 수 있다.

//Spread Application
const newFriends = [...friends, "dal"];
console.log(newFriends);

const nico = {
  username: "nico"
};

console.log({ ...nico, password: "1234" }); //password: 1234, username: nico

//어떻게 하면 object에 property추가가 가능한가..

const lastName = prompt("Last name"); //문자열 입력 받기

const user = {
  username: "nico",
  age: 24,
  ...(lastName !== "" && { lastName }) //입력값이 있다면 추가, 없다면 key자체를 없앤다
};

console.log(user);
