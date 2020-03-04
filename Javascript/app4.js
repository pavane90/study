function saveSettings(settings) {
    console.log(settings);
}

//object 형식으로 만들어서 보내면 변수사용을 간략하게 할 수 있다. (보기도 쉽다)
saveSettings({
    follow: true,
    alert: true,
    mkt: true,
    color: "green"
});

//문제는 이게 사용할때는 좋은데 함수를 작성할땐 좋지 않다.
//이 문제를 ObjectDestructuring으로 해결할 수 있다.

function saveSettings2({follow, alert, mkt, color = "blue"}) {
    console.log(color);
}

saveSettings2({
    follow: true,
    alert: true,
    mkt: true,
    color: "green"
});

//변수명 단축

//const follow = checkFollow();
//const alert = checkAlert();
/*
const settings = {
    notifications: {
        follow: follow, //변수명이 같다면 :뒤로는 생략이 가능
        alert: alert
    }
}
*/

// Swapping and Skipping

let mon = "Sat";
let sat = "Mon";

//아래와 같은 방식으로 스왑핑이 가능
[sat, mon] = [mon, sat];
console.log (mon, sat); //mon sat

//스킵
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const [,,,thu, fri] = days;
console.log (thu, fri); //Thu, Fri

