// Array Destructuring
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

//이런식으로 3개의 변수에 값을 순서대로 받아올 수 있다.
const [mon, tue, wed, thu = "Thu"] = days;
console.log (mon, tue, wed, thu);

// 함수형도 가능
const days2 = () => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

//이런식으로 3개의 변수에 값을 순서대로 받아올 수 있다.
const [m, t, w, th = "Thu"] = days2();
console.log (m, t, w, th);

