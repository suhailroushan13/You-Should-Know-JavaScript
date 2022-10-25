/*
JavaScript String length
In this tutorial, you will learn about the JavaScript String length property with the help of examples.

The length property returns the number of characters in a string.

Example
// defining a string
let sentence = "I love Programiz.";

// returns number of characters in the sentence string
let len = sentence.length;

console.log(len);

// Output:
// 17
Run Code
length Syntax
The syntax of the length property is:

str.length
Here, str is a string.

length Parameters
The length property does not take any parameters.

length Return Value
Returns the number of characters in a string.
Note: The String.length property returns the code units in the UTF-16 string format. Some rare string characters require two code units to be represented. Due to this, the length property might not always return the number of characters.

Example 1: Using length Property
// defining string
let string1 = "JavaScript";

// returns the number of characters in 'JavaScript'
let len = string1.length;

console.log(len);
Run Code
Output

10
In the above example, we have defined a string named string1. We have then used the length property to find out the number of characters in string1.

Since 'JavaScript' contains 10 characters, string1.length returns 10.

Example 2: length Property is Read Only
The String.length property is a read-only property. There will be no effect if we try to change it manually. For example:

let string2 = "Programming";

// assigning a value to string's length property
string2.length = 5;

// doesn't change the original string
console.log(string2); // Programming

// returns the length of 'Programming'
console.log(string2.length); // 11
Run Code
Output

Programming
11
Here we have assigned a new value to string2.length. Since the String.length property is read-only, assigning value to it doesn't change the original array.

string2.length returns 11 which is the length of 'Programming'.
 
 
 
 
 
 
*/
