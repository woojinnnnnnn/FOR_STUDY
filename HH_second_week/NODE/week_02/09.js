const mymap = new Map()
mymap.set('one', 1)
mymap.set('two', 2)
mymap.set('three', 3)

console.log(mymap.keys())
for (const key of mymap.keys()) {
    console.log(key)
}

console.log(mymap.values())
for (const value of mymap.values()) {
    console.log(value)
}

console.log(mymap.entries())
for (const entry of mymap.entries()) {
    console.log(entry)
}

console.log(mymap.size) // map 의 사이즈 (길이)
console.log(mymap.has("two")) //key 기반 검색