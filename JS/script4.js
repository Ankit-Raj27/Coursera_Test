//Default values

function orderChickenWith(sideDish) {
	sideDish = sideDish || "whatevar!";
	console.log("Chiecken with " + sideDish);
	// body...
}
orderChickenWith("Noodles");
orderChickenWith();