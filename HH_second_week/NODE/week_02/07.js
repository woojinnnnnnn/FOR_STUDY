function multi (num) {
    return function (x) {
        return x * num
    }
}

function add (x, y) {
    return x + y
}

const multione = multi(2)
const multithree = multi(3)

console.log(multione(10))
console.log(multithree(10))

const result = add(multione(5), multithree(10))
console.log(`final ${result}`)