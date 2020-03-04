//Renaming

const settings = {
    color: {
        chosen_color: "dark"
    }
};

const {
    color : {chosen_color : chosenColor = "light"}
} = settings;
// :사용할변수명으로 Object의 reName이 가능하다

console.log(chosenColor);

// 만약 
let chosenColor = "blue"
//이런 경우에 그 변수명을 그대로 끌어쓰고 싶다면 어떻게 해야할까?

({
    color : {chosen_color : chosenColor = "light"}
} = settings);

//괄호로 끝까지 감싸주면 let변수를 가져올 수 있다.