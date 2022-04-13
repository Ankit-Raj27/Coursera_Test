// function test()
// {
// 	console.log(this);
// 	console.log("Hello Coursera!");
// 	this.myName= "ANkit";
// }

// test();
// console.log(window.myName);

// FUNTION CONSTRUCTOR

function Circle(radius)
{
	this.radius = radius;
}

Circle.prototype.getArea = function() {
	Math.PI * Math.pow(this.radius,2);
};

var myCircle = new Circle(10); // new object
console.log(myCircle);