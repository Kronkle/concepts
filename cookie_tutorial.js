// The DOM provides cookie getters and setters for general use

// Set variable to all of the cookies associated with the document
allCookies = document.cookie;

// Create a cookie and give it a key-value pair, a path, and a maximum age in seconds
// Note Firefox and Chrome won't allow session cookies to expire
// encodeURIComponent sanitizes cookie string
document.cookie = encodeURIComponent('name=lucas; path=/; max-age=1');

// Create a cookieView that will encapsulate cookie handling
var cookieView = function () {
	var me = this;
	me.initCookieView();
};

// Initialize cookieView onsubmit and onclick behavior for buttons
cookieView.prototype.initCookieView = function () {
	var me = this;
	var cookieCounter; 

	var addCookieForm = document.getElementById("addCookieForm");
	
	// When specific search letter is clicked, populate employees with names starting with the clicked letter
    addCookieForm.onsubmit = function () {
    	var name = document.getElementById("newCookie").value;
    	cookieCounter = me.updateCookieCounter();
    	me.bakeNewCookie(name, cookieCounter);
    };

    var showCookiesButton = document.getElementById("showCookiesButton");

    showCookiesButton.onclick = function() {
    	me.showCookies();
    	return false;
    };
};

// Create and update a counter cookie for appending an iterating number to new cookie names
cookieView.prototype.updateCookieCounter = function () {

	var counterName = "counter";
	var cookieCounter; 

	// Create counter cookie if it doesn't exist
	if (document.cookie.indexOf(counterName) === -1) {
		document.cookie = 'counter=0';
		cookieCounter = 0;

	// If counter cookie does exist, increment current value
	} else {
		alert("here");
		// Retrieve current value of counter cookie via regex match
		var cookieMatchStr = document.cookie;
		var cookieMatch = cookieMatchStr.match( /counter=([0-9]*);/i );
		alert(cookieMatch[0]);
		// Assign current count to first matching group of regex
		var cookieCounterValue = cookieMatch[0];
		alert("here3" + cookieCounterValue);

		// Increment and update counter cookie
		cookieCounterValue++;
		document.cookie = counterName + '=' + cookieCounterValue;
		cookieCounter = cookieCounterValue;
	}

	return cookieCounter;
};

// bakeNewCookie method for translating user input into new cookie
cookieView.prototype.bakeNewCookie = function(name, counter) {
	document.cookie = 'name' + counter + '=' + name;
};

// showCookie method for showing all cookies
cookieView.prototype.showCookies = function() {
	var allCookies = document.cookie;
	alert(allCookies);
};

// Initialize directory view
var cookieView = new cookieView;




