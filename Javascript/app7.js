const user = {
  NAME: "nico",
  age: 24,
  password: 12345
};

const killPassword = ({ password, ...rest }) => rest;

const cleanUser = killPassword(user); //name, age
console.log(cleanUser);

const setCountry = ({ country = "KR", ...rest }) => ({ country, ...rest });

console.log(setCountry(user));

const rename = ({ NAME: name, ...rest }) => ({ name, ...rest });
//변수명가 대문자로 바뀌고 즉시리턴으로 1줄로 처리 가능하며 object를 전개해서 하나의 object를 그대로 유지한다.
console.log(rename(user));
