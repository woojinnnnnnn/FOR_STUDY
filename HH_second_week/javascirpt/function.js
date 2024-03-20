function calculateAvg(price1, price2, price3) {
    const avg = (price1 + price2 + price3) /3
    return avg
}

// const price1 = 1000
// const price2 = 2000
// const asd = calculateAvg(price1, price2)
// console.log (`1과의 평균은 ${asd}입니다.`)

// const price3 = 2000
// const price4 = 3000
// const avg2 = calculateAvg(price3, price4)
// console.log(`3and4 avg is ${avg2} ok ?`)

const price1 = 1000
const price2 = 2000
const price3 = 3000
const avg = calculateAvg(price1, price2, price3)
console.log(`1,2,3 의 총 평균은 ${avg} 입니다.`)