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
