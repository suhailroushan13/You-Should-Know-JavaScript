// Array FlatMap ()

// The flatMap() method first maps each element of an
//  array using a mapping function,
// then flattens it into a new array.

const arr = [1, 2, 3, 4, 5];

let search = arr.flatMap((e) => e ** 2);
console.log(search);


/*
flatMap() Return Value
Returns a new array after mapping every element using callback
Notes:

The flatMap() method does not change the original array.
The flatMap() method is equivalent to array.map().flat().
 
 
 
*/

// defining an array
let numbers = [1, 2, 3, 4, 5];

// incrementing each element of array using map()
let afterMapping = numbers.map((element) => element + 2);

// flattening the array using flat()
console.log(afterMapping);

let afterFlattening = afterMapping.flat();

console.log(afterFlattening); // [ 3, 4, 5, 6, 7 ]

// using flatMap() instead of flat() and map()
let after_flatMap = numbers.flatMap((element) => element + 2);

console.log(after_flatMap); // [ 3, 4, 5, 6, 7 ]

