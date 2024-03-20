// set
// 고유한 값을 저장하는 자료구조
// 값만 저장한다.
// 키를 저장하지는 않는다
// 값이 중복되지 않는 요소로만 구성된다.
// 값 추가, 검색, 삭제, 모든 값 제거, 존재여부 확인

const myset = new Set()
myset.add('value1')
myset.add('value2')
myset.add('value3')
myset.add('value4')
myset.add('value5')

// console.log(myset.size)

// interator 반복한 그놈
for(const value of myset.values()) {
    console.log(value)
}