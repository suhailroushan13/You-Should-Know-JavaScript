// Array Join() Method
// The join() method returns a new string by
// concatenating all of the elements in an array,
//  separated by a specified separator.

/*
The join() method does not change the original array.
Elements like undefined, null, or empty array have an
 empty string representation.
*/
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr.join());
// 1,2,3,4,5,6,7,8,9,10

console.log(arr.join(""));
// 12345678910

console.log(arr.join(" | "));
// 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

const arr2 = ["Java", "C", "C++"];
console.log(arr2.join(" "));
// Java C C++

console.log(arr.join("+"));
// 1+2+3+4+5+6+7+8+9+10
