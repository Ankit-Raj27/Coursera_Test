function  greet() {
	console.log("Hello");
}

sayHi()
greet()

function sayHi()
{
	setTimeout(()  => 
	{
		console.log("Hi");
	},1000)
	console.log("Hi again");
}
