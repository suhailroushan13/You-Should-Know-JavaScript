// JavaScript Array slice()

// The slice() method returns a shallow
// copy of a portion of an array into a new array object.

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  1  2  3  4  5  6  7  8  9  10 11

console.log(arr.slice()); // Gives a whole array
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr.slice(4, 8));
// Slice is == start,end+1

// 1st parameter Start from 0 
// 2nd parameter Start from 1 
        //          0             1       2     3      4
let languages = ["JavaScript", "Python", "C", "C++", "Java"];
        //            1           2       3     4      5 
console.log(languages.slice(0, 2));



// Negative value 

console.log(languages.slice(0,-1)); // removes last array 
// [ 'JavaScript', 'Python', 'C', 'C++' ]
console.log(languages.slice(0,-2)); // removes last 2 array's
// [ 'JavaScript', 'Python', 'C' ]





console.log(languages.slice(-2));  // Gets last 2 arrays 
// [ 'C++', 'Java' ]