var obj1 = {
	outer: function() {
		console.log("TEST =>", this); // (1)
		var innerFunc = function() {
			console.log("TEST =>",this); // (2), (3)
		}
		innerFunc();

		var obj2 = {
			innerMethod: innerFunc
		};
		obj2.innerMethod();
	}
};
obj1.outer();