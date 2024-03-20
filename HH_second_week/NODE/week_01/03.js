
// 2. 문자 : string
// '' = ""

let str = "hello world"
console.log(str)
console.log(typeof str)

// 2-1 str 이 가지고 있는 문자열의 길이 
console.log(str.length) 

// 2-2 문자열 결합하기 (concat)
let str1 = "hello ";
let str2 = "world";
let result = str1.concat(str2);
// console.log(result);

// 2-3 문자열 자르기 (substr)
let str3 = "hello, world!"
console.log (str3.substr(7, 5))
console.log(str3.slice(7, 12))

// 2-4 문자열 검색 (search) 를 통해 h e l l o  ->6번째 부터 world 가 나온다 알려줌
let str4 = "hello world"
console.log(str4.search("world"))

//2-5 문자열 대체 (replace) world 가 java 로 바뀜
let str5 = "hello world"
let result01 = str5.replace("world", "javascript")
console.log( result01 )

//2-6 문자열 분할 (split) 을 통해 "apple, banana, kiwi" <- 한줄이 ['apple', 'banana', 'kiwi'] 로 나뉨
let str6 = "apple, banana, kiwi"
let result02 = str6.split(",")
console.log(result02)