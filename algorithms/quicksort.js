/* 
 * Quicksort swaps items in place in an array by partitioning different
 * sections of the array with a "pivot". 
 */

var numbers = [4, 2, 8, 100, 99];

/*
 * Make a function to swap values around the pivot when a value to the left
 * of the pivot is greater than a value to the right
 */ 
var swap = new function(items, firstIndex, secondIndex) {
	var temp = items[firstIndex];
	items[firstIndex] = items[secondIndex];
	items[secondIndex] = temp;
};


var partition = new function(items, left, right) {

	var pivot = items[Math.floor((right+left) / 2)],
			i = left,
			j = right;

	while (i <= j) {
		
		while(items[i] < pivot){
			i++;
		}

		while(items[j] > pivot) {
			j--;
		}

		if (i <= j){
			swap(items, i, j);
			i++;
			j--;
		}
	}

	return i;
}