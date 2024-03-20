//이런 패턴은 어떨까요?
var copyObject = function (target) {
	var result = {};

	// for ~ in 구문을 이용하여, 객체의 모든 프로퍼티에 접근할 수 있습니다.
	// 하드코딩을 하지 않아도 괜찮아요.
	// 이 copyObject로 복사를 한 다음, 복사를 완료한 객체의 프로퍼티를 변경하면
	// 되겠죠!?
	for (var prop in target) {
		result[prop] = target[prop];
	}
	return result;
} 

//위 패턴을 우리 예제에 적용해봅시다.
var user = {
	name: 'jaenam',
	gender: 'male',
};

var user2 = copyObject(user);
user2.name = 'jung';

if (user !== user2) {
	console.log('유저 정보가 변경되었습니다.'); // 출력
}

console.log(user.name, user2.name); // jaenam jung
console.log(user === user2); // false