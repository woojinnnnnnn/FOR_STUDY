// 배열

//1. 생성
// 1-1 기본 생성
let fruits = ['apple', 'banana', 'orange']

// 1-2 크기 지정
let number = new Array(5)
// console.log(number)
// console.log(fruits.length)


//2. 요소 접근
// console.log(fruits[0])

//3. 배열 메서드
// 3-1 .push
let money = ['won', 'dollor']

money.push('yen')
// console.log(money)

// 3-2 pop -> 마지막걸 삭제함 0,1 -> 0.
let food = ['kimbob', 'ddokbboke']
food.pop()
// console.log(food)

// 3-3 shift -> 첫번째걸 삭제함 0, 1 -> 1 이지만 사실은 0
let coin = ['bit', 'eder', 'dozy']
coin.shift()
// console.log(coin)

// 3-4 unshift -> 앞에 무언갈 추가
coin.unshift('hod')
// console.log(coin)

// 3-5 splice ->  1번째 요소 부터 시작 해서 1번째 요소를 지우고 포도로 갈아 끼워줘 -> 결과 [ 'apple', 'grape', 'kiwi' ]
let fruitss = ['apple', 'banana', 'kiwi']
fruitss.splice(1, 1, 'grape')
// console.log(fruitss)

// 3-6 slice -> 1, 바나나로 시작해서 2, 키위 전까지 -> 결과 [ 'banana' ]
// let fruitsss = ['apple', 'banana', 'kiwi']
// let slicedFruits = fruitsss.slice(1, 2)
// console.log(slicedFruits)

// forEach, map, filter, find

let numbers = [1, 2, 3, 4, 5]

// 매게 변수 자리에 함수를 넣는 것 콜백. -> 
// 실행 결과 
// item =>1
// item =>2
// item =>3
// item =>4
// item =>5
// numbers.forEach(function (item) {
//     // console.log('item =>' + item)
// })

// 2.map -> 원본 배열의 길이 만큼 리턴 된다. -> 결과 [ 2, 4, 6, 8, 10 ]
// let newNumbers = numbers.map(function(item){
//     return item * 2 // <- 가공할 값이 꼭 들어가야함.
// })
// console.log(newNumbers)

//3. filter -> 조건에 해당하는 것 만 리턴함 ->  [ 5 ]
// let filtersNumbers = numbers.filter(function(item){
//     return item === 5
// })
// console.log(filtersNumbers)

//4. find -> 필터랑 유사 하지만. 3 보다 큰 첫번째 값 4 만 반환함.
let result = numbers.find(function(item){
    return item > 3
})
console.log(result)