/* 
 * In ECMA-262, objects are defined as collections of properties, which are containers that can hold primitive values,
 * functions, or even other objects. Each object property has zero or more attribute that define how a property can be
 * used, and every object is a member of the built-in type Object. While there are predefined objects in the browser,
 * you can also make your own.
 */

/* 
 * Objects can be created in several ways, including using literal
 * notations and constructors. Constructors create objects and then 
 * initialize properties, where each constructor is a function that has
 * a "prototype" property that implements prototype-based inheritance
 * and shared properties. When an object is created via a constructor, 
 * the object is given an implicit reference to the value of it's 
 * constructor's "prototype" property.
 *
 * Below is an example of an object that is created via the built-in
 * Object constructor using a "new" expression. 
 */

var beer = new Object();

/* 
 * Since the beer object has been created and initialized by the Object
 * constructor, we can now add custom properties to it with dot notation.
 * "name" and "style" are both properties of beer, and they can be accessed (like other
 * object properties) via dot-notation.
 */
beer.name = "PaleFish";
beer.style = "IPA";

/* 
 * Remember that object properties can be more than just primitive values. 
 * Below, we create the "sayName" function that alerts the "name" property of 
 * this particular Object instance (beer) via the "this" keyword.
 */ 
beer.sayName = function() {
	alert(this.name);
}

/* NOTE: Section 6.1.7 details how accessor properties behave for ECMAScript objects */

/* 
 * The ECMAScript spec details how objects can be created using literal notation
 * too - in the form of zero or more pairs of key-value pairs enclosed in curly braces.
 */
var beer = {
	name: "PaleFish";
	style: "IPA";

	sayName: function() {
		alert(this.name);
	}
};

// Factory pattern, to save time with creating multiple objects using the same interface
function createBeer(name, style){
	var b = new Object();
	b.name = name;
	b.style = style;
	b.sayName = function() {
		alert(this.name);
	};

}

var beer1 = createBeer("Castle", "Stout");
var beer2 = createBeer("Surf", "Lager");

// The one complex, mutable data type that JavaScript has is the Object data type

// Object data types store values by reference
var puppy = {name: "Avett"};
var anotherPuppy = puppy;
puppy.name = "Pip";

console.log(anotherPuppy.name);
console.log(puppy.name);

// Each data property in a object contains the name-value pair and three other attributes (all set to true by default)

// Writable - specifies whether the property can be modified
// Configurable - specifies whether or not the property attributes can be changed or the properties themselves deleted
// Enumberable - specifies whether the property can be returned in an if/for loop


// JavaScript has five primitive, immutable data types: Number, String, Boolean, Undefined, and Null

// Primitive data types are stored by value
var puppy = "Avett";
var anotherPuppy = "Pip";
puppy = "Tuck";

console.log(anotherPuppy);
console.log(puppy);



// Prototypes determine properties and methods that associated objects inherit from

// Every object holds a prototype property - add properties and methods to this for inheritance

function CraftBeer(beerName) {
    this.name = beerName;
}

CraftBeer.prototype.printName = function() {
    console.log(this.name);
}

var newBeer = new CraftBeer("Robust Ale");

newBeer.printName();

// Every object also holds a prototype attribute/prototype object which indicates the object that provides the inherited properties and methods

// Objects created with object literals have their prototype attribute set to Object.prototype

var beach = {name: "Sanibel"};
console.log(beach.constructor);
console.log(beach.prototype);

// Objects created with constructors have their prototype attribute set to the constructor

function Island(islandName) {
    this.name = islandName;
}

var island = new Island("Sanibel Island");
console.log(island.constructor);
console.log(island.prototype);

// In JS, prototype-based inheritance is implemented with the prototype property

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

// Print name from aGym prototype, which is champGym.prototype

console.log(aGym.name);

// Use method from champGym prototype, which is Gym.prototype. This demonstrates the prototype chain, which extends from aGym to champGym to Gym.

aGym.showNameAndPrice;

// Regarding the prototype chain mechanism, the JS runtime searches for an object's property first on the immediate object. If the property isn't found, the search moves up to the object's prototype and continues up the prototype chain until either the property is found or it isn't (in which case undefined is returned)

// All objects in JS inherit properties and methods from Object.prototype







