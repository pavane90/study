//Promises
/*
const amISexy = new Promise((resolve, reject) => {
  //resolve("Yes you are!");
  reject("U R ugly");
});

amISexy.then(result => console.log(result)).catch(err => console.log(err));
//then과 catch는 별도로 실행된다.*/

//Promises 체이닝
/* 
const amISexy = new Promise((resolve, reject) => {
  resolve(2);
});

amISexy
  .then(number => {
    console.log(number * 2);
    return number * 2;
  }) //아랫쪽 then에서 이전의 처리값을 받아와서 쓸 수 있다.
  .then(otherNumber => {
    console.log(otherNumber * 2);
  });*/

//Promiss.all
/*
const p1 = new Promise(resolve => {
  setTimeout(resolve, 5000, "First");
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Second");
});

const p3 = new Promise(resolve => {
  setTimeout(resolve, 3000, "Third");
});
/*
const motherPromise = Promise.all([p1, p2, p3]);

motherPromise
  .then(values => console.log(values))
  .catch(err => console.log(err)); //모든 진행을 기다렸다가 값을 반환함
*/

//Promiss.race
//가장먼저 처리된 Promise를 반환한다
/*
const motherPromise = Promise.race([p1, p2, p3]);
motherPromise
  .then(values => console.log(values))
  .catch(err => console.log(err));
*/

//Promise Finally
/*
const p1 = new Promise(resolve => {
  setTimeout(resolve, 1000, "JS");
})
  .then(value => console.log(value))
  .finally(() => console.log("im done"));
*/

//real world promise

fetch("http://127.0.0.1:8080")
  .then(response => console.log(response.text()))
  .catch(e => console.log("e"));
