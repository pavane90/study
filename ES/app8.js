//for or loop
const friends = ["nico", "Lynn", "Lee", "hu", "King"];
//for
for (let i = 0; i < friends.length; i++) {
  console.log(`${i}`);
}
//foreach
const addHeart = c => console.log(c);
friends.forEach(friend => console.log(friend));
//for or loop
for (const friend of friends) {
  console.log(friend);
  if (friend === "hu");
  break;
}
//loop는 Array뿐만이 아닌 String등에서도 사용할 수 있다. 또한 루프를 멈출 수도 있음
