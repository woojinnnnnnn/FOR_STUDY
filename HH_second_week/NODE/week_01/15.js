// 객체
// key - value 

// 1-1 기본적인 객체 생성 방법
// let person = {
//     name: 'gildong',
//     age: 30,
//     gender: 'men',
// }

// 1-2 생성자 함수를 이용한 객체 생성 방법
// function Person(name, age, gender) {
//     this.name = name,
//     this.age = age,
//     this.gender = gender
// }
// let person1 = new Person("woojin", 30, men)
// let person2 = new Person("hojin", 40, women)


// 2. 접근 하는 방법
// console.log(person.name)
// console.log(person.age)
// console.log(person.gender)

// 3. 객체 메소드 ( 객체가 가진 여러가지 기능: Objcet.~~~~)
// 3-1 Object.key() : key 를 가져오는 메소드

let person = {
    name: 'gildong',
    age: 30,
    gender: 'men',
}
// 결과 값 -> keys => [ 'name', 'age', 'gender' ]
let keys = Object.keys(person)
// console.log('keys =>', keys)

//3-2 values 결과 값 -> values => [ 'gildong', 30, 'men' ]
let values = Object.values(person)
// console.log('values =>', values)

// 3-3 entries 결과 값 -> entries => [ [ 'name', 'gildong' ], <- 이런식으로 키밸류 쪼개져서 나옴
//key and value 를 묶어서 배열로 만든 배열

let entries = Object.entries(person)
// console.log('entries =>', entries)

// 3-4 assign 
// 객체 복사 -> 변경 도 가눙
let newPerson = {}
Object.assign(newPerson, person, { gender:'women' })
// console.log('newPerson => ', newPerson)

// 3-5 객체 비교 -> 코드 실행시 false 반환
// 크기가 큼 -> 메모리에 저장할때 별도의 공간에 저장
//person1 별도 공간에 대한 주소를 저장
let person1 = {
    name: 'gildong',
    age: 30,
    gender: 'men',
}
//person2 별도 공간에 대한 주소를 저장
let person2 = {
    name: 'gildong',
    age: 30,
    gender: 'men',
}

console.log(person1 === person2)
// json.stringify 를 사용 하면 저 객체 자체를 그냥 문자열로 바꾸어서 true 값 출력
console.log(JSON.stringify(person1) === JSON.stringify(person2))

// 3-6 객체 병합
let person3 = {
    name: 'gildong',
    age: 30,
}
let person4 = {
    gender: 'men',
}

// ... : spread operator -> person3 에 있는 값을 불러옴. -> {name: 'gildong', age:30} person4 도 동일.
let perfectMen = {...person3, ...person4}
console.log(perfectMen)