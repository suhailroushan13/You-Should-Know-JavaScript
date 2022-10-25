/*
Javascript String includes()
In this tutorial, we will learn about the JavaScript String includes() method with the help of examples.

The includes() method checks if one string can be found inside another string.

Example
const message = "JavaScript is fun";

// check if message includes the string "Java"
let result = message.includes("Java");
console.log(result);

// Output: true
Run Code
includes() Syntax
The syntax of the includes() method is:

str.includes(searchString, position)
Here, str is a string.

includes() Parameters
The includes() method takes in:

searchString - A string to be searched for within str.
position (optional) - The position within str to begin searching for searchString. By default, it is 0.
includes() Return Value
Returns true if searchString is found anywhere within str.
Returns false if searchString is not found anywhere within str.
Note: The includes() method is case sensitive.

Example: Using includes() method
let sentence = "Java is to JavaScript what Car is to Carpet.";

let check = sentence.includes("Java");
console.log(check); // true

// case sensitive
let check1 = sentence.includes("java");
console.log(check1); // false

// second argument specifies position to start at
let check2 = sentence.includes("Java", 20);
console.log(check2); // false

let check3 = sentence.includes("whose");
console.log(check3); // false

let check4 = sentence.includes("");
console.log(check4); // true
Run Code
Output

true
false
false
false
true
 
 
 
 
 
 
*/
