var numbers = [10, 20, 3, 16, 45]
var max = min = numbers[0]
numbers.forEach(function(number, index){
    console.log(index + number)
    // 현재 들어가는 숫자가 max 보다 큰 경우
    // if (number > max) {
    //     max = number
    // }

    // if (number < min) {
    //     min = number
    // }
})

// console.log(max, min)

// 아쉬움