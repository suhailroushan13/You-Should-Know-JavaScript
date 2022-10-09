// Array Length()
// .length gives the count of array which starts from 1
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.length); //10;

arr.length = 4;
console.log(arr); // [ 1, 2, 3, 4 ]
arr.length = 8;
console.log(arr); // [ 1, 2, 3, 4, <4 empty items> ]

const arr2 = [];
console.log(arr2.length);

var companyList = ["Apple", "Google", "Facebook", "Amazon"];
console.log(companyList.length); // Output: 4

var randomList = ["JavaScript", 44];
console.log(randomList.length); // Output: 2

var emptyArray = [];
console.log(emptyArray.length); // Output: 0

// Example 2: Using Array length in for loop
var languages = ["JavaScript", "Python", "C++", "Java", "Lua"];

// languages.length can be used to find out
// the number of times to loop over an array
for (let i = 0; i < languages.length; i++) {
  console.log(languages[i]);
}

// Example 3: Changing length property of Array
var languages = ["JavaScript", "Python", "C++", "Java", "Lua"];

// truncate the Array to 3 elements
languages.length = 3;

// Output: [ 'JavaScript', 'Python', 'C++' ]
console.log(languages);

// extend the Array to length 6
languages.length = 6;

// Output: [ 'JavaScript', 'Python', 'C++', <3 empty items> ]
console.log(languages);
