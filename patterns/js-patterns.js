/* 
 * This script will outline basic design 
 * pattern philosophies using JS.
 */

 // Design patterns are proven sets of steps for solving specific problems.

// Example 1 - Builder Pattern 
var myNav = $('<nav id="myNav">Navigation Links</nav>');

/*
 * Explanation 1 - jQuery uses the Builder Pattern, which allows you
 * to construct objects through specifying the type and content of
 * object and without explicitly creating them (i.e. didn't have to
 * use document.createElement here). 
 */

// Example 2 - Prototype Pattern
var sedan = {
	numWheels: 4,
	numDoors: 4,
	numHands: 1,
};

var corolla = Object.create(sedan);

console.log(corolla.numWheels);
corolla.numWheels = 1;
console.log(corolla.numWheels);

// Another way to do this (supported by IE8)
var sedanPrototype = {

	init: function (carModel) {
		this.model = carModel;
	},

	getModel: function () {
		console.log("The model of this vehicle is " + this.model);
	}
};

function vehicle (model) {

	function F() {};
	F.prototype = sedanPrototype;

	var f = new F();

	f.init(model);
	return f;
}

var car = vehicle("Toyota Corolla");
car.getModel();

/* 
 * Explanation 2 - The prototype pattern involves creating objects
 * with the same template of an existing object via cloning.
 */