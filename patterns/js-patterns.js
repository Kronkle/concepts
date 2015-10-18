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

// Example 3 - Composite Pattern
$('.myClass').addClass('selected');
$('#myId').addClass('selected');

$("table tbody #button").on("click", function(event){
	alert("Clicked a tr button");
});

$('#buttonTwo').on("click", function(event){
	alert("Clicked a lone button");
})

/* 
 * Explanation 3 - The composite patterns involves treating an individual
 * object in the same manner as a group of those objects. For example, jQuery
 * provides a consistent API for dealing with a single DOM element or multiple
 * DOM elements.
 */

// Example 4 - Facade Pattern

$(document).ready(function(){
//Code here
});

/*
 * Explanation 4 - the Facade Pattern provides a simple
 * interface to the user while hiding its internal
 * complexity. For example, jQuery's document.ready
 * function accounts for various browser inconsistencies 
 * under the hood.
 */

// Example 5 - Observer Pattern

$("#button").click(function() {
    alert("Button has been clicked");
});

/*
 * Explanation 5 - the Observer Pattern involves a subject
 * maintaining a list of observers and notifying them 
 * after specific events take place. For example, 
 * a click handler observer can be added to a specific DOM
 * element to notify an observer when the element
 * is clicked to trigger a specific action.
 */ 

// Example 6 - Mediator Pattern
$("#vote").on('click', function(e) {
	e.preventDefault();
	var voteChoice = "Bernie";
	ballotMachine.publish("submitVote", voteChoice);
});

var submitVote = function(voteChoice) {
	alert("Vote for " + voteChoice + " submitted");
};

ballotMachine.subscribe("submitVote", submitVote);


/* 
 * Explanation 6 - the Mediator Pattern involves using a single
 * shared subject that acts as a liason between objects. For example,
 * a Ballot Machine object could act as a mediator/controller for 
 * handling actions when a vote for Bernie is submitted.
 */

