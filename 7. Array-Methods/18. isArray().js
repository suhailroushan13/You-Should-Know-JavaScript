// Array is.Array() //
// Checks the array is a array or not

// Returns true if the array is true
// Returns false if the array is false

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr);

console.log(Array.isArray(arr));

//

const arr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(arr2);

console.log(Array.isArray(arr2));

console.log(typeof arr2); // Its an Object but shows as Array


// passing an empty array []
console.log(Array.isArray([])); // true

// we have created an array with element 7 and
// passed that value to isArray()
console.log(Array.isArray(new Array(7))); // true

// passing a boolean value
console.log(Array.isArray(true)); // false

// passing undefined
console.log(Array.isArray(undefined)); // false

// not passing any argument in isArray()
console.log(Array.isArray()); // false
