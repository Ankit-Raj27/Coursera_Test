(function() {
	var ankitGreeter = {};
	ankitGreeter.name = "Ankit";
	var greeting = "Hello ";
	ankitGreeter.sayHello = function () {
		console.log(greeting + ankitGreeter.name);
	}

	window.ankitGreeter = ankitGreeter;
})(window);