/*
js는 함수에서 multi date를 return 할 수 있다.
여러개의 값을 return 할 수 있다.
*/
const student = () => {
  return ["홍길동", "서울시", "33"];
};

//함수가 여러개의 값을 return하면
//다음과 같이 각각 변수에 값을 받아서 저장 할 수 있다.
[이름, 주소, 나이] = student();
console.log("이름:", 이름, "주소:", 주소, "나이:", 나이);

//배열의 요소에 저장된 데이터를 개별적인 변수로 복사하기
[한글, 영문] = ["대한민국", "Republic of Korea"];
console.log("한글", 한글, "영문", 영문);

/*java스러운
const nation = ["대한민국", "Republic of Korea"];
let 한글 = nation[0];
let 영문 = nation[1];
console.log("한글", 한글, "영문", 영문);
*/

/*
JSON(Javascript Object Notation)
js에서 사용하는 특별한 데이터 type
데이터 요소를   { key : value } 조합으로 작성한다.
*/
const dogs = { 이름: "몽", 나이: 11, 성별: "남" };
console.log(dogs);
console.log(dogs.이름);
console.log(dogs["이름"]);
