/* 
 * Quicksort swaps numbers in place in an array by partitioning different
 * sections of the array with a "pivot". When a pivot is defined, all items
 * are sorted so that items to the left of the pivot are less than the pivot
 * and all items to the right of the pivot are greater than the pivot. The 
 * algorithm is then run recursively, defining new pivots each time, until
 * all items are sorted properly.
 */

var numbers = [4, 2, 8, 100, 99];

/*
 * Make a function to swap values around the pivot when a value to the left
 * of the pivot is greater than a value to the right
 */ 
var swap = function(numbers, firstIndex, secondIndex) {
	var temp = numbers[firstIndex];
	numbers[firstIndex] = numbers[secondIndex];
	numbers[secondIndex] = temp;
};

/* 
 * Make a function to determine a "pivot" in the array (or subarray)
 * and set pointers to the first and last items in the array.
 */

var partition = function(numbers, left, right) {

	var pivot = numbers[Math.floor((right+left) / 2)];
	var i = left;
	var j = right;

	while (i <= j) {
		
		while(numbers[i] < pivot){
			i++;
		}

		while(numbers[j] > pivot) {
			j--;
		}

		if (i <= j){
			swap(numbers, i, j);
			i++;
			j--;
		}
	}

	return i;
};

var quickSort = function(numbers, left, right) {
	var index;

	if (numbers.length > 1) {
		index = partition(numbers, left, right);

		if (left < index - 1) {
			quickSort(numbers, left, index - 1);
		}

		if (index < right) {
			quickSort(numbers, index, right);
		}
	}

	return numbers;
}

// Run quicksort on array of numbers initialized above
var result = quickSort(numbers, 0, numbers.length - 1);

console.log(result);