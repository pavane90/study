//Rest

const infiniteArgs = (...kimchi) => console.log(kimchi);

infiniteArgs(
  "1",
  2,
  true,
  "lalala",
  [1, 2, 3, 4, 5],
  "aaaaaaaaa",
  1,
  2,
  3,
  4,
  5,
  6,
  7
);
//아래와 같이 쓰면 배열의 첫번째 값을 인수로 받고 나머지요소를 하나씩 개수제한없이 전달받을 수 있다
const bestFriendMaker = (firstOne, ...rest) =>
  console.log(`my best friend is ${firstOne}   ${rest}`);
bestFriendMaker("nic", "lynn", "dall", "japanboy");
