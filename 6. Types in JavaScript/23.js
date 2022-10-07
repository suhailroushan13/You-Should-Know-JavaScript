//  Array Flat ()

const arr = [1, 2, [3, 4], [5, 6], [7, 8]];
//                    1      2       3
let ok = arr.flat(); // Removes all nested arrays
// console.log(ok);

const arr1 = [1, 2, [3, [4, 5]]];
let ok1 = arr1.flat(1); // Removes 1 Array [] Literal
console.log(ok1);

const arr2 = [1, 2, [3, [4, 5, [6, 7]]]];
let ok2 = arr2.flat(2); // Removes 2 Array [] Literal
console.log(ok2);

const arr3 = [1, 2, [3, [4, 5, [6, 7, [8, 9]]]]];
let ok3 = arr3.flat(3); // Removes 3 Array [] Literal
console.log(ok3);

const holes = [1, 2, 3, , 4, , 5, ,];
console.log(holes.flat()); // Removed all empty values

const hey = [1, 2, [3, 4, [5, 6]]];
console.log(hey.flat(2));
