// 연산자 (+, -, /, %)

// 1. 더하기
// console.log( 1 + 1)
// console.log(1, "1")

// 2. 빼기
// console.log(1 - "2")
// console.log(1 - 2)

// 3.곱하기
// console.log( 2 * 3)
// console.log( "2" * 3)

// 나누기
// console.log( 4 / 2)
// console.log( "4" / 2)

// 5. 나누기 연산자 vs 나머지 연산자
// console.log(5/2) // 2.5
// console.log(5 % 2 ) // 1

// 6. 할당 연산자(x)
//6-2 등호 연산자 (=)
let x = 10

//6-2 더하기 등호 연산자 (+=)
x += 5

// 6-3 빼기 등호 연산자 (-=)
x -= 25

// 6-4 곱하기 (*=)
let a = 10
a *= 2
// console.log(a)

// 비교 연산자. -> true or false
// 1. 일치 연산자 ( === ) 타입 까지 일치해야 true 반환

// 숫자 2 가 숫자 2랑 같니 ?
console.log(2 === 2) // true
console.log("2" === 2) // false

// 2. 불일치 연산자 ( !== ) 타임 까지 일치 해야 false 변환 그냥 일치 연산자의 반댓값 이라고 생각

// 숫자 2가 숫자 2와 다르니 ?
console.log(2 !== 2) // false
console.log("2" !== 2) // true

// 3. 작다 연산자 (<)
// 2가 3보다 작니 ?
console.log("--------")
console.log( 2 < 3) //true
console.log( 2 <= 3) //true
console.log( 3 <= 3) //true
console.log( 4 <= 3) //false

// 4. 논리 연산자.
// 4-1 논리 곱 연산자 ( && ) -> 모두 참 일때 참 변환
console.log("--------")
console.log(true && true) // true
console.log(true && false) // false
console.log(false && true)// flase
console.log(false && true) // false

// 4-2 논리 합 연산자 (||) -> 두 값중 하나라도 참 인 경우 참 변환
console.log("--------")
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

//4-3 논리 부정 연산자 (!)  -> 값을 반대로 바꿈
console.log("--------")
console.log(!true)
let b = true;
console.log(!b)

// 5. 삼항 연산자 (중요함)
// 조건에 따라 값을 선택함
let ok = 10
//               1항       2항      3항
let result = ( ok > 5) ? "big": "small"
console.log('-----')
console.log(result)

console.log ("--------")

let y = 20
let result2 = ( y > 10) ? "big": "small"
console.log(result2)

// 6. 타입 연산자 (typeof)
console.log(typeof "5")

