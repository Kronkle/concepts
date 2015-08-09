// Demonstrates lodash, which is an FP utility library for JS and a superset of Underscore

var playWithLodash = function () {

	// Replace typical for loop with asynchronous _.times method:

	$("#iterateHere").append("<p>Hello World! Lodash makes JS for loops easy.</p>");
	
	_.times(5, function(n){
		$("#iterateHere").append("<p>" + n + "</p>");
	});


	// Replace Array's map function with asynchronous map method:

	$("#mapHere").append("<p>Lodash also makes returning nested properties easier.</p>");
	
	var footballTeams = [
		{
			"owner": "Mike",
			"players": [ {"number":"1"}, {"number":"54"} ]
		}, 
		{
			"owner": "Nic",
			"players": [ {"number":"53"}, {"number":"24"} ]
		}
	];

	var starters = _.map(footballTeams, 'players[0].number');

	$("#mapHere").append("<p> Starters for each team are " + starters + "</p>");


	// Replace Array's map function with three methods that can generate arrays easily

	$("#createArrayHere").append("<p>Arrays can be created and populated with ._times, ._uniqueId, and ._partial.</p>");
	
	var sushiIds = _.times(3, _.partial(_.uniqueId, 'sushi_'));

	$("#createArrayHere").append("<p> Sushi ids are " + sushiIds + "</p>");
};

playWithLodash();