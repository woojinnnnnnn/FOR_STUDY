// 단축 속성명 : property shorthand
const name = "abc"
const age = "30"

// key - value
const obj = { name,age } // 이처럼 키와 밸류가 변수명이 같으면 생략 할 수 있다.
const obj1 = { name:name,age:age } // 이것과 동일 하게 동작함.

// 전개 구문 = spread operator
// destructuring 과 함께 가장 많이 사용되는 ES6 문법
let arr = [1, 2, 3]
// console.log(arr) // 결과 [1, 2, 3]
// console.log(...arr) // 결과 1, 2, 3

let newArr = [...arr, 4] // <- 이건 언제 쓰느냐 새로운 구조로 덧 입혀야 할 때 쓰인다.
                        // 예시의 경우 arr [1,2,3]에 4 추가 할때
// console.log(arr)
// console.log(newArr)


// 객체
// let user = {
//     name: "avc",
//     age: 30
// }

// let user2 = {...user}

// console.log(user2)

// 나머지 매개 변수 rest parameter
// function exampleFunction (a, b, c, ...args) {
//     console.log(a, b, c)
//     console.log(...args)
// }

// exampleFunction(1, 2, 3, 4, 5)

// 탬플릿 리터널
console.log(`hello wordl ${3+3}`)
const test = 'hi'
console.log(`hello world ${test}`)
console.log(`
    hellow
    my name woojin
    nice to meet you
`)