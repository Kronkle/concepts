package main
	
import (
	"fmt"
	"math/rand"
)

// Standard function - can take zero or more arguments. Notice that type comes after variable name.
func add(x int, y int) int {
	return x + y
}

// Don't have to define type twice in params if it is the same.
func addShort(x, y int) int {
	return x + y
}

// A function can return multiple results.
func swap(x, y string) (string, string) {
	return y, x
}

// An empty return statement returns the named return values.
func split(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	return
}

// Var statement declares a list of variables, type is last here too - can be at package or function level.
var c, python, java bool

func main() {

	// Imported package example
	fmt.Println("My favorite number is", rand.Intn(10))

	// Standard func example
	fmt.Println(add(42, 13))

	// Shortened params func example
	fmt.Println(addShort(42, 13))

	// Multiple results func example
	a, b := swap("hello", "world")
	fmt.Println(a,b)

	// Empty return statement func example
	fmt.Println(split(15))

	// Package and function level variables example
	var i int
	fmt.Println(i, c, python, java)
}