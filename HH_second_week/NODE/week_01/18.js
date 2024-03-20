//while
// let i = 0;

// while ( i < 10 ){
//     console.log(i)
//     i++
// }

// while (조건) {
//     //메인로직
//     //증감
// }

// for (초기값, 조건, 증감자) {

// }

//while 문으로, 3초와 100초 미만의 숫자 중 5의 배수만 출력하는 애.
// let i = 3
// while ( i < 100 ){
//     // 5의 배수이려면 5보다 크거나 같아야함. i >= 5
//     if ( i % 5 === 0 && i >= 5 ){
//         console.log(i)
//     }
//     i ++; 
// }

// do ~ while

// let i = 0
// do {
//     console.log(i)
//     i++;
// } while ( i < 10 )

// for (i = 0; i < 10; i++) {
//     if ( i === 5) {
//         break; // 5가 되었으니. 그만.
//     }
//     console.log(i)
// }
for (i = 0; i < 10; i++) {
    if ( i === 5) {
        continue; // 5가 됐으니 밑 i 로 넘어가지 않고 그 다음 6으로 넘어감.
    }
    console.log(i)
}