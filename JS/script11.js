//  CLOSURE

function makeMulitplier(multiplier)
{
	// var multiplier = 2;

	function b(){
		console.log("multiplier is : " + multiplier);
	}
	b();

	return (
		function (x)
		{
			return multiplier * x;
		}
	);
}

var doubleAll = makeMulitplier(2);
console.log(doubleAll(10));