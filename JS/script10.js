// //  ARRAYS

// var array = new Array();
// array[0] = "Ankit";
// array[1] = 2;
// array[2] = function (name) {
// 	// body...
// 	console.log("Hello " + name);
// };
// array[3] = {course : "HTML,CSS, JS"};

// console.log(array);
// console.log(array[1]);
// array[2](array[0]);
// console.log(array[3].course)

// SHORT HAND ARRAY CREATION

// var names = ["Ankit", "Raj", "Khushi"];
// // console.log(names);

// for (var i = 0; i < names.length; i++)
// {
// 	console.log("Hello " + names[i]);
// }

// names[100] = "GOD";

// for (var i = 0; i < names.length; i++)
// {
// 	console.log("Hello " + names[i]);
// }

var names2 = ["Ankit", "Raj", "Khushi"];

// var myObj = {
// 	name : "Ankit",
// 	course : "HTML, CSS, JS",
// 	platform : "Coursera"
// };

// for (var prop in myObj) {
// 	console.log(prop + " : " + myObj[prop]);
// }

for (var name in names2)
{
	console.log("Hello " + names2[name]);
}