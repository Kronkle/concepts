//In ECMA-262, objects are defined as unordered arrays

//Early object notation with the Object constructor
var beer = new Object();
beer.name = "PaleFish";
beer.style = "IPA";

beer.sayName = function() {
	alert(this.name);
}

//Object literal notation
var beer = {
	name: "PaleFish";
	style: "IPA";

	sayName: function() {
		alert(this.name);
	}
};

//Factory pattern, to save time with creating multiple objects using the same interface
function createBeer(name, style){
	var b = new Object();
	b.name = name;
	b.style = style;
	b.sayName = function() {
		alert(this.name);
	};
	return b;
}

var beer1 = createBeer("Castle", "Stout");
var beer2 = createBeer("Surf", "Lager");

// Prototypes determine properties and methods that associated objects inherit from

//Every object holds a prototype property - add properties and methods to this for inheritance

function CraftBeer(beerName) {
    this.name = beerName;
}

CraftBeer.prototype.printName = function() {
    console.log(this.name);
}

var newBeer = new CraftBeer("Robust Ale");

newBeer.printName();

//Every object also holds a prototype attribute/prototype object which indicates the object that provides the inherited properties and methods

//Objects created with object literals have their prototype attribute set to Object.prototype

var beach = {name: "Sanibel"};
console.log(beach.constructor);
console.log(beach.prototype);

//Objects created with constructors have their prototype attribute set to the constructor

function Island(islandName) {
    this.name = islandName;
}

var island = new Island("Sanibel Island");
console.log(island.constructor);
console.log(island.prototype);

//In JS, prototype-based inheritance is implemented with the prototype property

function Gym () {
    this.city = "Chapel Hill";
    this.hasSquatRack = true;
}

Gym.prototype.showNameAndPrice = function() {
    console.log("This is the " + this.Name + " gym and it costs " + this.Price + " a month.";
}

function champGym (gymName, gymPrice) {
    this.name = gymName;
    this.price = gymPrice;
}

champGym.prototype = new Gym();

var aGym = new champGym("Champion's Gym", "$50");

//Print name from aGym prototype, which is champGym.prototype

console.log(aGym.name);

//Use method from champGym prototype, which is Gym.prototype. This demonstrates the prototype chain, which extends from aGym to champGym to Gym.

aGym.showNameAndPrice;

//Regarding the prototype chain mechanism, the JS runtime searches for an object's property first on the immediate object. If the property isn't found, the search moves up to the object's prototype and continues up the prototype chain until either the property is found or it isn't (in which case undefined is returned)

//All objects in JS inherit properties and methods from Object.prototype







