/*
Javascript Object.is()
The JavaScript Object.is() method checks if two values are the same value.

The syntax of the is() method is:

Object.is(value1, value2)
The is() method, being a static method, is called using the Object class name.

is() Parameters
The is() method takes in:

value1 - The first value to compare.
value2 - The second value to compare.
Return value from is()
Returns a Boolean indicating whether or not the two arguments are the same value.
Two values are the same if one of the following holds:

both undefined
both null
both true or both false
both strings of the same length with the same characters in the same order
both the same object (means both object have same reference)
both numbers and
both +0
both -0
both NaN
or both non-zero and both not NaN and both have the same value
Example: Using Object.is()
// Objects with the same values
console.log(Object.is("JavaScript", "JavaScript")); // true
// Objects with different values
console.log(Object.is("JavaScript", "javascript")); // false

console.log(Object.is([], [])); // false

let obj1 = { a: 1 };
let obj2 = { a: 1 };
console.log(Object.is(obj1, obj1)); // true
console.log(Object.is(obj1, obj2)); // false

console.log(Object.is(null, null)); // true

// Special Cases
console.log(Object.is(0, -0)); // false
console.log(Object.is(-0, -0)); // true
console.log(Object.is(NaN, 0 / 0)); // true
 
 
 
 
 
 
*/