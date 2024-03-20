// map
// Js -> 객체, 배열 : 많고 다양하고 복잡한 프로그래밍.
// 그래도 현실에 반영하기는 어려웠다.
// map, set 같은 자료 구조 를 등장 !

//  데이터의 구성, 검색, 사용 들을 효율적으로 처리 > 기존의 객체 또는 배열보다,.

// 1. map
// -key / -value
// key 에 어떤 데이터 타입도 들어올 수 있다
// map 은 키가 정렬된 순서로 저장되기 떄문.
// 검색, 삭제, 제거, 여부확인

const mymap = new Map()
mymap.set('key', 'value')

mymap.get('key')

// 반복 이 중요 -> method : key, value, entries