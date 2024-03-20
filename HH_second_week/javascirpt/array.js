// const arr = [1, 2, 3, 4, 5]
// console.log(arr)

// const rainbow = ['red', 'blue', 'yellow', 'black', 'kimchi', 'purple']
// console.log(rainbow[rainbow.length - 1]) 랭스로 길이 재고 -1 로 마지막 거 호출. [] 안에 있어야함.

// const color = [ 'red', 'orange', 'yellow', 'blue', 'green', 'indigo']
// color.push('ultraviolet')
// console.log(color)

// color.pop()
// console.log(color)

// const color = [ 'red', 'orange', 'yellow', 'blue', 'green', 'indigo']
// for (const rainbow of color){
//     console.log (rainbow)
// }

// const color = [ 'red', 'orange', 'yellow', 'blue', 'green', 'indigo']
// for (let i =0; i < color.length; i++) {
//     console.log(color[i])
// } 

// 우선 리스트를 만들고 sum 이라는 값에 0 을 부여

const price = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0
// 반복문을 활용 토탈 안에 프라이스 리스트들을 집어 넣음
for (const total of price) {
    // 이후 섬 이라는 함수에 토탈안에 들어간 리스트 (숫자) 를 집어 넣고
    sum += total
}
// 에버리지 라는 것은 ? = 썸. 55가 들어감 그걸 / 배열의 길이 만큼 나누어 평균으로 !
const avg = sum / price.length
// 리터널 뭐로 이제 구함.
console.log(`total: ${sum}, avg: ${avg}`)