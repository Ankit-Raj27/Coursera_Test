// // String concatination
// var string = "hello";
// string += " world";
// string = string + " world";
// console.log(string+"!");

// Regular maths operator

// console.log((5+4)/3);
// console.log(undefined/5);
// function test(a) {
// 	console.log(a/7);
// }
// test();

// Equality

// var x = 4 , y = 4;
// if (x==y)
// {
// 	console.log("x=4 is eqaul to y=4");
// }
// x='4';
// if (x==y)
// {
// 	console.log("x='4' is eual to y=4");
// }

// // Strict eqality

// if(x === y)
// {
// 	console.log("Strict: x='4' is equal to y=4");
// }
// else
// {
// 	console
// 	.log("Strict: x='4' is NOT equal to y=4");
// }

// If statements (all false)

// if (false||null||undefined||""||0||NaN)
// {
// 	console.log("This line won't be executed");
// }
// else
// {
// 	console.log("All false");
// }

// // If statements (All true)

// if (true && "hello" && 1 && -1 && "false") 
// {
// 	console.log("All true");
// }

//Best practice of  for {} style
// Curly brace on the same or next line
// Is just a style?

// function a()
// {
// 	return
// 	{
// 		name: "Ankit"
// 	};
// }

// function b()
// {
// 	return{
// 		name: "Ankit"
// 	};
// }
// console.log(a());
// console.log(b());

//For loop

var sum = 0;
for (var i = 0; i < 10; i++) {
	console.log(i);
	sum=sum+i;
}

console.log("sum of 0 through 9 is : " + sum);
