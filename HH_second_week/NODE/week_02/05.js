// 일급 객체로써의 함수
const person = {
    name: 'john',
    age: 31,
    ismarried: true,
    sayhello: () => {
        //                              화살표 함수는 디스를 바인딩 하지 않는다.
        console.log(`hellow my name is ${this.name}`)
    }
    // sayhello: function () => {
    //     console.log(`hello my name is ${this.name}`)
    // }
}

person.sayhello()