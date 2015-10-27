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