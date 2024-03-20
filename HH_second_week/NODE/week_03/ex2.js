// var copyObjectDeep = function(target) {
//     var result = {}
//     if (typeof target === 'object' && target !== null) {
//         for ( var prop in target ) {
//             result[prop] = copyObjectDeep(target[prop])
//         }
//     } else {
//         result = target;
//     }
//     return result
// }

// var obj = {
//     a: 1,
//     b: {
//         c:null,
//         b: [1,2]
//     }
// }
// var obj2 = copyObjectDeep(obj)

// obj2.a = 3
// obj2.b.c = 4
// obj2.b.d[1] = 3

// console.log(obj) // { a: 1 b: { c:null, d:[1, 3]} }
// console.log(obj2) // a: 3. b:{c:4, d:{0:1, 1:2}}

// var count = 0;
// var timer = setInterval(function(){
//     console.log(count);
//     if( ++count > 4) clearInterval(timer);
// }, 300)

// var count = 0;
// var cbFunc = function() {
//     console.log(count)
//     if (++count > 4) clearInterval(timer)
// }
// var timer = setInterval(cbFunc, 300)

var newArr = [10, 20, 30].map(function(currentValue, index) {
    console.log( currentValue, index);
    return currentValue + 5;
})
console.log(newArr)