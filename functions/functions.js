// Basic syntax of a function is as follows:
function functionName(arg 0, arg1, ..., argN) {
	statements
}

// Example of a basic function
function sayHi (name, message) {
	alert("Hello " + name + ", " + message);
}

// Calling basic function
sayHi("John", "how are you today?");

// Functions can return values using the "return" statement
function sum(num1, num2) {
	return num1 + num2
	// this won't execute:
	alert("Past the return statement");
}

var result = sum(5, 10);

// In ECMAScript, named arguments are not a necessity
function sayHi() {
	alert("Hello " + arguments[0] + ", " + arguments[1]);
}

/* There isn't traditional overloading in ECMAScript. Since functions don't 
 * have true signatures (arguments are represented as an array containing
 * 0 or more values) - if two functions have the same name, the last function
 * becomes the owner of the name.
 */

function cheer() {
	alert("Go Hornets");
}

function cheer() {
	alert("Go Panthers");
}

/* It's possible to simulate overloading by checking the type and number
 * of arguments that have been passed into a a function and then reacting
 * accordingly
 */
function cheer() {
	if (argument[0].toLowerCase() == "basketball") {
		alert("Go Hornets");
	} else {
		alert("Go Panthers");
	}
}