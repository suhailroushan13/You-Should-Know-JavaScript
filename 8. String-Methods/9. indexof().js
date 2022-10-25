/*
JavaScript String indexOf()
In this tutorial, we will learn about the JavaScript String indexOf() method with the help of examples.

The string indexOf() method returns the index of the first occurence of the substring in a string.

Example
const message = "JavaScript is not Java";

// returns index of 'v' in first occurrence of 'va'
const index = message.indexOf("va");

console.log('index: ' + index);  // index: 2
Run Code
indexOf() Syntax
The syntax of the indexOf() method is:

str.indexOf(searchValue, fromIndex)
Here, str is a string.

indexOf() Parameters
The indexOf() method takes in:

searchValue - The value to search for in the string. If no string is provided explicitly, "undefined" will be searched.
fromIndex (optional) - The index to start the search at. By default it is 0. If fromIndex < 0, the search starts at index 0.
indexOf() Return Value
Returns the first index of the value in the string if it is present at least once.
Returns -1 if the value is not found in the string.
Note: The indexOf() method is case sensitive.

For empty string searchValue and fromIndex less than the string's length, indexOf returns the value the same as fromIndex.

Similarly, for empty string searchValue and fromIndex greater than the string's length, indexOf returns the string's length.

"Programiz JavaScript".indexOf("", 0); // returns 0
"Programiz JavaScript".indexOf("", 3); // returns 3

// string length here is 20
"Programiz JavaScript".indexOf("", 25); // returns 20
"Programiz JavaScript".indexOf("", 21); // returns 20
Example 1: Using indexOf() method
var str = "JavaScript is the world's most misunderstood programming language.";

// indexOf() returns the first occurance
var index1 = str.indexOf("language");
console.log(index1); // 57

var index2 = str.indexOf("p");
console.log(index2); // 8

// second argument specifies the search's start index
var index3 = str.indexOf("p", 9);
console.log(index3); // 45

// indexOf returns -1 if not found
var index4 = str.indexOf("Python");
console.log(index4); // -1
Run Code
Output

57
8
45
-1
Example 2: Finding All the Occurrences of an Element
function findAllIndex(string, value) {
  indices = [];
  var currentIndex = string.indexOf(value);
  while (currentIndex != -1) {
    indices.push(currentIndex);
    currentIndex = string.indexOf(value, currentIndex + value.length);
  }
  return indices;
}

var str = "JavaScript is as related to Java as Carpenter is to Carpet.";

var occurance1 = findAllIndex(str, "J");
console.log(occurance1); // [ 0, 28 ]

var occurance2 = findAllIndex(str, "Carpet");
console.log(occurance2); // [ 52 ]

var occurance3 = findAllIndex(str, "x");
console.log(occurance3); // []
Run Code
Output

[ 0, 28 ]
[ 52 ]
[]
 
 
 
 
 
 
*/
