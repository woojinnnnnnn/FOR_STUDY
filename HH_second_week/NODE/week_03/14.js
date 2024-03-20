// bind 메서드
// -> this 를 바인딩 하는 메서드
// call, apply 는 다름 즉시 호출 하지 않음.

// 목적
// 1. 함수에 디스를 미리 적용
// 2. 부분 적용 함수.
var func = function ( a, b, c, d){
    console.log( this, a, b, c, d)
}
// func(1, 2, 3, 4) // 

// 함수에 디스를 미리 적용
var bindFunc1 = func.bind({ x:1 })
// bindFunc1(5, 6, 7, 8)

// 부분 적용 함수
var bindfunc2 = func.bind({x:1}, 4, 5)
// bindfunc2( 6, 7)

console.log(func.name)
console.log(bindFunc1.name)
console.log(bindfunc2.name)

// name 프로퍼티
// bind - 'bound' 라는 접두어 