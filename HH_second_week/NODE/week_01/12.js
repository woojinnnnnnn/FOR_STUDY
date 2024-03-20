// 조건문의 중첩
let age = 15
let gender = "women"

// 미성년자 구분
if (age >= 18 ) {
    // console.log( "adult")
    if (gender === 'women') {
        console.log("adult woomen")
    } else {
        console.log("adult men")
    }
} else {
    if (gender === 'women'){
        console.log('teen women')
    } else {
        console.log('teen men')
    }
    // console.log("teen")
}