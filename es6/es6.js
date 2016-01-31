/* 
 * ECMAScript 6, or ECMAScript 2015, is the current version of the ECMAScript standard.
 * This file will cover 3 new features that ES6 introduces: 
 * Arrows, classes, and let + const
*/

// Arrows are shorthand for anonymous functions that share the same lexical this as their surrounding code.
// General syntax is param(s) => expression

// Expression bodies
var odds = evens.map(v => v + 1);

// Block bodies
nums.forEach(v => {
	if (v % 5 === 0)
		fives.push(v);
});


// Classes are sugar over the prototype-based OO pattern. 
// These support inheritance, super calls, instance and static methods and constructors.

class UI {
	constructor(options) {
		this.model = options.model;
		this.template = options.template;
	}

	// New syntax for defining methods on the class
	render() {
		return _.template(this.template, this.model.toObject());
	}
}

// Let + const create a block-scope binding construct. 
// let is similar to var, while const is a single-assignment reference. 
// Let variables can't be used before assignment.


function x() {
	{
	let k;
		{
			// block-scoped name, works
			const k = "dog";
			// error
			k = "cat";
		}
		// error, already declared in block
		let k = "fish";
	}
}