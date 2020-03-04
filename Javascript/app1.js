/*===Array.from 에 대해서===*/
/*
const buttons = document.getElementsByClassName("btn");

buttons.forEach(button => {
    button.addEventListener("click", () => console.log("clicked"));
})

/* 위와같은 방식은 작동하지 않는다. buttons가 array-like object로 왔기 때문이다.
Array.from을 사용하면 이를 완벽한 Array로 바꿀 수 있다. */

/* Array.from(buttons).forEach(button => {
    button.addEventListener("click", () => console.log("clicked"));
})

//이를 사용하여 array-like object를 array로 바꿀 수 있다.

/*===Array.find() / Array.findIndex() / Array.fill() 에 대해서===*/

const friends = [
    "nico@gmail.com",
    "lynn@naver.com",
    "dal@yahoo.com",
    "mark@hotmail.com",
    "flynn@korea.com"
];
//Array.find
const target = friends.find(friend => friend.includes("@korea.com"));
//console.log (target);
//Array.findIndex
const index = friends.findIndex(friend => friend.includes("@korea.com"));
//console.log (index);
//Array fill
friends.fill("*".repeat(5), index);
//console.log(friends);


/*===destructuring에 대해서===*/
// destructuring = object나 array, 그 외의 요소들 안의 변수를 바깥으로 끄집어 내서 사용할 수 있도록 하는것

const settings = {
    notifications : {
        follow: true,
        alerts: true,
        unfollow: false
    },
    color : {
        theme: "dark"
    }
};

if(settings.notifications.follow) {
    //send email
    /* 이것은 매우 효율이 떨어진다.
    예를들어 notifications가 통째로 없다면?..
    */
}

//destructuring을 사용해보자
const {notifications: { follow }, color} = settings;

console.log(follow);
console.log(color);

//notification이 없다면? 기본값을 넣어줄 수 있다.

const {notifications: { follow = false }} = settings;

console.log(follow);

//notification 자체가 없다면 빈object로 날릴 수 있다.
const {notifications: { follow = false } = {} } = settings;

