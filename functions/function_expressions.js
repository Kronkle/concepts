// There are two ways to define a function - by function declaration and expression

// Function declaration
function functionName(arg 0, arg1, arg2) {
	// function body
}

// Most common function expression form
var functionName = function(arg 0, arg1, arg2) {
	// function body
};

// This function is considered to be an anonymous function because it has no 
// identifier after the function keyword. Since this is assigned to a variable,
// it can be returned through another function.
function createFunc(name) {
	return function(obj1, obj2) {
		var value1 = obj1[name];
		var value2 = obj2[name];
		alert("value1: " + value1 + " value2: " + value2);
	}
}

// Function expressions can also be used for recursion. Here, we use a named function expression 
// to execute a factorial operation.
var factorial = (function f(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * f(num - 1);
	}
});

// Closures are functions that have access to variables from another function's scope
function createFunc(name) {
	return function(obj1, obj2) {
		// Access name variable from outer function within inner function
		var value1 = obj1[name];
		var value2 = obj2[name];
		alert("value1: " + value1 + " value2: " + value2);
	}
}

