// 명시적 this binding
// call, apply, bind


// call, apply 는 완전히 똑같은 기능을 한다.
// 단 apply 는 [] 로 묶어 주어야 함

var func = function ( a, b, c) {
    console.log(this, a, b, c)
}
//no binding
// func(1, 2, 3)

// 명시적 binding
func.apply({x:1}, [4, 5, 6])

