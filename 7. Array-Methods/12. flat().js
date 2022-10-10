// Array flat()
//  Array flat Methods returns a new array by
// converting all multidimensional array into
// single nested array or 1d array
// Example :-
// [1,2,[3,5],[3,7],4] ===> [1,2,3,5,3,7,4]
// The flat() method creates a new array by
// flattening a nested array up to the specified depth.

let numbers = [1, 2, [3, 4, [5, 6, [7, 8]]]];

// reducing nesting by flattening the array to depth 2
let store = numbers.flat(3);
console.log(store);

//  Flat is also used to remove holes from an array

// Example :- [1,,3,,5] ==> [1,3,5]

const arr2 = [1, , 5, 7, 33, , 5];
console.log(arr2.flat());
// [ 1, 5, 7, 33, 5 ]
