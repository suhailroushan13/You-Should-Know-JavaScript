// Array Includes()

// Array Includes value in true or false
// The includes() method returns:

// true if searchValue is found anywhere within the array
// false if searchValue is not found anywhere within the array

// Array Includes check the given element is
// present in the array or not
//
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr.includes(11)); // false
console.log(arr.includes(4)); // true
//  11 is not in the array so it gave false
// 4 is in the array so it gave true

// The includes() method is case sensitive. For example:

const words = ["Java", "Python", "C"];
console.log(words.includes("c")); // false
// There is no lowerCase c in the array
console.log(words.includes("C")); // true
// There is UpperCase C in the array


// 2nd Parameter is for to check from a specific index of array
const test = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(test.includes(4, 5)); // Checking 4 from 5th index // false
console.log(test.includes(4, 1)); // Checking 4 from 1st index // true


