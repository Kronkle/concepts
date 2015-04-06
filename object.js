//In ECMA-262, objects are defined as unordered arrays

//Early object notation
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