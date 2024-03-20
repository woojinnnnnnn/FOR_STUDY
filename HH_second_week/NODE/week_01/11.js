// 문 (if, else, if, switch) <- 사실상 제일 중요함

// 1. if 
// let x = 10

// 1-1 if 문

// if (x < 0) {
// console.log ( "x는 양수")
// }

// 1-2
// let y = "hello world"
// if (y.length >= 5 ) {
//     console.log(y.length)
// }
// y 의 길이가 5보다 크거나 가트면 길이를 콘솔 로그로 출력

// 2. if - else 문

// let c = -3
// if (c > 0) {
//     console.log("c 는 양수")
// } else {
//     console.log("c 는 음수")
// }

//if - else - if - else 문

// if (조건1) {
//     //main 01
// } else if (조건2) {
//     // main 02
// } else {
//     //main 03
// }

// let v = 5
// if (v < 0) {
//     console.log("1")
// } else if (v >= 0 && v < 10) {
//     console.log("2")
// } else {
//     console.log("3")
// } 


// 1-4 switch
// 변수에 값의 따라, 여러 개의 경우 (case) 중 하나를 출력
// defult

let fruits = "banana"

switch (fruits) {
    case "apple":
        console.log("is apple")
        break
    case "banana":
        console.log("is banana")
        break
    case "kiwi":
        console.log("is kiwi")
        break
    default:
        console.log( "none")
        break
}
