// Array copyWithIn()
// Copy the elememnt from 1 index to another index

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/// Index    0  1  2
// It Takes 2 Parameters
// 1st - Index of the element to be changed
// 2nd - Index of the element to be taken from
// 3rd - Till Where the Index of Excluding]

console.log(arr.copyWithin(0, 2, 3));
// 0 index element is 1
// 1 is going to change to index value of 2
// index value of 2 is 3
// so 1 ==> 3

// Output
// [3, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

let words = ["apple", "ball", "cat", "dog"];

console.log(words.copyWithin(1, 2, 3));

console.log(words);

// It changes the original Array

// [ 'apple', 'cat', 'cat', 'dog' ]
