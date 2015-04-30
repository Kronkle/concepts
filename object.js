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

