// Jasmine tests consist of suites, specs, and matchers and are intended to be read close to plain language

// describe blocks (or suites) takes a string and function as parameters and describes what is being tested with the test suite
describe('JavaScript adder', function () {
	// it blocks (or specs) takes a string and a function as parameters and describes a particular test
	it('adds two numbers together', function () {
		// expect functions (or matchers) describes the expected behavior of a function under specific conditions
		expect(addSomething(n, m)).toEqual(n + m);
	});
});

// Jasmine also supports custom matcher creation
var customMatchers = {

	// Create a new matcher that takes built-in "util" and "customEqualityTesters" as parameters
	equalsMike: function(util, customEqualityTesters) {

		// Have this new matcher return a compare function that takes "actual" and the "optional" expected variable as parameters
		return {
			compare: function (actual, expected) {

				if (expected === undefined) {
					expected = '';
				}

				// The compare function must always return a "result" variable with a "pass" property which is evaluated
				var result = {};

				result.pass = util.equals(actual.name, "Mike" + expected, customEqualityTesters);

				// Test messages can also be defined before returning "result"
				if (result.pass) {
					result.message = "Mike is here.";
				} else {
					result.message = "Mike is not.";
				}
				return result;
			}
		};
	}
};

describe('JavaScript name statement', function () {

    beforeEach(function () {
		jasmine.addMatchers(customMatchers);
	});

	it('says Mike', function() {
		expect(stateName()).equalsMike();
	});

	it('says Mike Kronk with an additional parameter with last name', function() {
		expect({name: "Mike Kronk"}).equalsMike(" Kronk");
	});

	it('will never accept Mike Kronk without a parameter with last name', function() {
		expect({name: "Mike Kronk"}).not.equalsMike();
	});
});