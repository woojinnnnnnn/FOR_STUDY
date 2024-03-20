// 스코프, 전역변수, 지역변수, 화살표 함수

// 현재 x 함수가 바깥쪽에 나와 있기에 전역 변수 로 적용됨. 
let x = 10

function printX() {
    console.log(x)
}

console.log(x)
printX()

// 지역 변수는 ?

function printC () {
    let c = 10
    console.log(c)
}
console.log(c)
printC