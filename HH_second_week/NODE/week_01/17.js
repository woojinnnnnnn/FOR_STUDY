// for, while => ~~ 하는 동안 : 반복문 중요함.

// for (초기값; 조건식; 증감식;) {

// }

// i 라는 변수는 0부터 시작한다.
// i 라는 변수가 10 보다 크니 ? 아니.
// 그럼 i 라는 변수에 1을 더할거야.
// 2번으로 돌아옴 i는 1이 됨.
// 10보다 크니 ? 아니.
// 다시 i 라는 변수에 1더하기
// for (let i =0; i < 10; i++) {
//     console.log(i)
// }

// 배열과 for문은 짝궁이다.

//arr 이라는 리스트가 있음
// i는 0. -> i가 < arr.length(5) -> i 라는 변수가 arr 랭스(5) 보다 크니 ? 아니.
// 그럼 i 에다 1 더할게
const arr = [15, 5, 10, 5, 20]
for (let i = 0; i < arr.length; i++) {
    console.log(i)
    console.log(arr[i])
}

// for (let i = 0; i <= 11; i++){
//     if ( i >= 2) {
//     if (i % 2 === 0){
//         // 2의 배수
//         console.log(i)
//     }
//     }
// }


//for ~ in 문 
// 객체의 속성을 출력하는 문법
// let person = {
//     name: "woojin",
//     age: 20,
//     gender: "male",
// }

// // person[key] 이 방법으로 value 에 접근 가능.
// for (let key in person) {
//     console.log(key + ":" + person[key])
// }