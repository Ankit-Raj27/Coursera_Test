//  OBJECT LITERALS AND THIS

var literalCircle = 
{ //NEW OBJECT()
	radius : 10,

	getArea : function () {
		var self = this;
		console.log(this);

		var increaseRadius = function()
		{
			self.radius = 20;
		};
		increaseRadius();
		console.log(this.radius);
		return Math.PI * Math.pow(this.radius,2);

	}

};

console.log(literalCircle.getArea());
