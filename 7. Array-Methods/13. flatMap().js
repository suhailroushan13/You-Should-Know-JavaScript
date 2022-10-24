// Array flatMap()
// The flatMap() method first maps each
// element of an array using a mapping function,
// then flattens it into a new array.
const arr = [1, 2, 3, 4, 5, 6, , 8, 9, 10];

console.log(arr.flatMap((x) => x ** 2));
// [
//    1,  4,  9,  16, 25,
//   36, 64, 81, 100
// ]

const arr2 = [1, 2, 34, 5, 6, 67, 7, [23, 4, 5, 5, [, 4, 5, 6, 6]]];
console.log(arr2.flat(2).flatMap((x) => x ** 2));
// [1, 4, 1156, 25, 36, 4489, 49, 529, 16, 25, 25, 16, 25, 36, 36]
