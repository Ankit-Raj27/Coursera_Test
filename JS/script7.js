// //  Copy by reference vs by value

// var a = 7;
// var b = a;
// console.log("a : " + a);
// console.log("b : " + b);

// b = 6;
// console.log("After the update of b : ");
// console.log("a : " + a);
// console.log("b : " + b);

//  Pass by reference

// var a = { x : 7};
// var b = a;

// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("After the update of b.x - ")

// console.log(a);
// console.log(b);


// Pass by refernece vs by Value

// function changePrimitive (primeValue)
// {
// 	console.log("in Change Primitive...");
// 	console.log("before: ");
// 	console.log(primeValue); 	

// 	primeValue = 5;
// 	console.log("after");
// 	console.log(primeValue);
// }

// var value = 7;
// changePrimitive(value); //primeValue = value
// console.log("after changePrimitive, original value : ");
// console.log(value);


function changeObject(objValue)
{
	console.log("in changeObject");
	console.log("befoe : ");
	console.log(objValue);

	objValue.xxx = 5;
	console.log("after : ");
	console.log(objValue);
}

value = {x : 7}; 
changeObject(value); //objValue = value
console.log("after changeObject, orig value : ");
console.log(value);