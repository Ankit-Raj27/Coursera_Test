(function (){
	var rajGreeter = {};
	rajGreeter.name = "Raj";
	var greeting = "Hi "
	rajGreeter.sayHi = function () {
		console.log(greeting + rajGreeter.name);
	}
	window.rajGreeter = rajGreeter;
}(window))