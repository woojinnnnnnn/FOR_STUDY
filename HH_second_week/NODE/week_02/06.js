// array

const arr = [
    function (a, b) {
        return a + b
    }, //0 번쨰 
    function ( a, b) {
        return a - b
    } // 1번쨰
]

console.log(arr[0](1, 3))
console.log(arr[1](10, 7))