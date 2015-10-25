/*
 * Binary search finds the position of a target value within a sorted array 
 * within O(log n) time. With every number found, go either higher or lower using
 * a divide-and-conquer strategy.
 */

// Create an array of numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Create binary search function
var binarySearch = function(numbers, target, first, last) {
	
	// Calculate middle position within this particular array
	var mid = Math.floor(( first + last ) / 2);

	// Retrieve value from middle position
	var val = numbers[mid];

	// Run a binary search on first half of array if value in middle position is greater than target
	if (val > target) {
		return binarySearch(numbers, target, first, mid-1);
	}

	// Run a binary search on second half of array if value in middle position is less than target
	if (val < target) {
		return binarySearch(numbers, target, mid+1, end);
	}

	// Return middle position if value isn't less than or greater than target (found!)
	return mid;

};

console.log(binarySearch(numbers, 5, 0, numbers.length - 1));

// Create a wrapper for binarySearch function
var binarySearchWrapper = function(numbers, target) {
    // We could also do error checking here 
    if (numbers.length <= 0) {
        console.log("array length is not sufficient");
        return;
    }
    return binarySearch(numbers, target, 0, numbers.length-1);
}