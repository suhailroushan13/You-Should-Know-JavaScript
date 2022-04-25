// How to Extract Speific Words from the string;
console.log("Using Slice Method");
var str = "Hello World";
// In Slice Method Starts with 0
// Then Count the Same Number of Characters from 1

// 1. Count from 0
//  H e l l o
//  0

// 2. Count from 1
// H e l l o
// 1 2 3 4 5

// ------ OR -----
// slice(a,b)
// a = starting index of the string from where you want to start slicing starts with 0
// b = ending index count the string from 1
// OR b-a is 5 - 2 = 3 = llo

// OR
// starts from 0
// a is included
// b is excluded
var res = str.slice(2, 5);
console.log(res); 



