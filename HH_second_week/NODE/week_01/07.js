// 함수 = function
// input, output

// function () {}

// 1. 함수 선언문
// function add (매개변수) {
    //함수 내부 에서 실행할 로직
// }

// 함수의 input 부분 아래 예시 에선 add(~, ~) 매개변수!
// return 문 뒤에 오는 걸 반환값 -> output

// 두 개의 숫자를 입력 받아서 덧셈을 한 후 내보내는 함수
function add(x, y) {
    return x + y;
}

// 2. 함수 표현식
let add2 = function (x, y) {
    return x + y
}

// 함수를 호출한다 (사용한다)
// 함수명 () -> add(입력값)
console.log(add(2, 3))
functionResult = add(3, 4)
console.log(functionResult)

console.log(add2(10, 20))
functionResult2 = add2(20, 40)
console.log(functionResult2)