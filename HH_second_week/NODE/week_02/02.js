// 구조분해할당 : destructuring + structuring
// de = not
// structure = 구조
// 배열이나, 객체의 속성 (배열은 대괄호 안의 요소), (객체는 중괄호 안에 있는 요소)

//1. 배열의 경우
// let [value1, value2] = [1,"new"]
// console.log(value1)
// console.log(value2)

// let arr = ['value1', 'value2', 'value3']
// let [a, b, c] = arr 
// console.log(a)
// console.log(b)
// console.log(c)

// 2. 객체인 경우
// let user = {
//     name: 'woojin',
//     age: 30,
// }

// let {name, age} = user // <- 윗 객체 (중괄호. 벨류) 에 있는 요소 둘이 {네임,에이지} <- key 로 작용해 들어감.
// console.log(name)
// console.log(age)

//새로운 이름으로 할당
let user = {
    name:'wooin',
    age: 30,
    date: "next"
}

// let {
//     name: newName,
//     age: newAge,
// } = user
// console.log(newName)
// console.log(newAge)

let { name, age, date = "today"} = user
console.log(name)
console.log(age)
console.log(date)