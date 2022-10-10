// Array Concat ()

// It will concat multiple arrays and returns a new array

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = ["Java", "C", "C++", "Python", "Javascript"];

console.log(arr1.concat(arr2));

// [
//   1,            2,
//   3,            4,
//   5,            6,
//   7,            8,
//   9,            10,
//   'Java',       'C',
//   'C++',        'Python',
//   'Javascript'
// ]

const arr3 = [2, 4, 6, 8, 10];
const arr4 = [1, 3, 5, 7, 9];

// Concatenating Multiple Arrays
console.log(arr1.concat(arr2, arr3, arr4));
/*
[
  1,     2,        3,
  4,     5,        6,
  7,     8,        9,
  10,    'Java',   'C',
  'C++', 'Python', 'Javascript',
  2,     4,        6,
  8,     10,       1,
  3,     5,        7,
  9
]
 
 */

// Adding Multiple Values While Concatenating
console.log(arr1.concat("Hello", arr2, arr3, arr4));
/*
[
  1,            2,       3,
  4,            5,       6,
  7,            8,       9,
  10,           'Hello', 'Java',
  'C',          'C++',   'Python',
  'Javascript', 2,       4,
  6,            8,       10,
  1,            3,       5,
  7,            9
]
*/

