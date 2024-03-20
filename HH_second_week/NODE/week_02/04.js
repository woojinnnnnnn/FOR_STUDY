// 일급객체로서의 함수

// 1. 변수에 함수를 할당할 수 있다
// 함수가 마치 값으로 취급됨
// 함수가 나중에 사용 할 수 있도록 조치가 되었다.
// const hello = function () {
//     console.log('hellow')
// }
// console.log(hello)

//2. 함수를 인자로 다른 함수에 전달 할 수가 있다.
// 2-1 콜백 함수 : 매개 변수로 쓰이는 함수
// 2-2 고차 함수 : 함수를 인자로 받거나 리턴 하는 함수
function call (func) {
    // 매개 변수로 받은 변수가 사실 함수다.
    func ()
}

const hello = function () {
    console.log('hellow')
}

call (hello)

//3. 함수를 반환할 수 있다.
function createAdder (num) {
    return function (x) {
        return x + num
    }
}


const addFive = createAdder(6)
console.log(addFive(10))