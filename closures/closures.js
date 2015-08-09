//Global variable (belongs to window object)
var age = 23

//Using global variable
function getOld() {
	return age * 2;
}

//Using local variable
function getYoung() {
	var age = 46;
	return age / 2;
}

//Using global variable
function haveBirthday() {
	age++;
}

console.log(getOld());

//Function intended to increment age
haveBirthday();
console.log(getOld());

//This will still change age since it's a global variable
age++;
console.log(getOld());

//Since the local variable is erased after function execution, age remains the same here:
console.log(getYoung());
console.log(getYoung());

/* Redefine haveBirthday() as a closure - age becomes like a private variable that can be accessed by the child scope 
   via the now anonymous function */
function makeHaveBirthday() {
	var age = 23;
	function haveBirthday() {
		age++;
	}
	return haveBirthday();
}

var haveBirthday = makeHaveBirthday();

console.log(haveBirthday());
console.log(haveBirthday());
console.log(haveBirthday());
