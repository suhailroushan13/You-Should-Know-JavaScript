
let text = "Hyderabad I am Suhail Roushan From ";

console.log(text.length);

console.log(text.endsWith("Hyderabad", 9));

/*
The endsWith() method returns true if a string ends with the specified string. If not, the method returns false.

Example
// string definition 
let sentence = "Java is to JavaScript what Car is to Carpet.";

// checking if the given string ends with "to Carpet."
let check = sentence.endsWith("to Carpet.");

console.log(check);    

// Output
// true
Run Code
endsWith() Syntax
The syntax of the endsWith() method is:

str.endsWith(searchString, length)
Here, str is a string.

endsWith() Parameters
The endsWith() method takes two parameters:

searchString - The characters to be searched for at the end of str.
length (optional) - It is used as the length of str where searchString is searched. Default value is str.length.
endsWith() Return Value
The endswith() method returns:

true - if the given characters are found at the end of the string.
false - if given characters are not found at the end of the string.
Example 1: Using endsWith() Method
// string definition
let sentence = "JavaScript is fun";

// checking if the given string ends with "fun"
let check = sentence.endsWith("fun");

console.log(check);

// checking if the given string ends with "is"
let check1 = sentence.endsWith("is");

console.log(check1);
Run Code
Output

true
false
In the above example, we are using the endsWith() method to check whether sentence ends with a specified string or not.

Since, the string "JavaScript is fun" ends with "fun" so sentence.endsWith("fun") returns true.

sentence.endsWith("is") returns false as the given string doesn't end with "is".

Example 2: endsWith() for Case Sensitive Strings
The endsWith() method is case sensitive. For example,

// string definition
let sentence = "JavaScript is fun";

// checking if the given string ends with "fun"
let check = sentence.endsWith("fun");

console.log(check);

// checking if the given string ends with "Fun"
let check1 = sentence.endsWith("Fun");

console.log(check1);
Run Code
Output

true
false 
Here, we are checking if sentence ends with "fun" or "Fun"

Since the endsWith() method is case sensitive, it treats "fun" and "Fun" as two different strings. So, the method returns true for "fun" and False for "Fun".

Example 3: endsWith() with two Parameters
let sentence = "JavaScript is fun";

// second argument specifies the portion of string to consider
let check = sentence.endsWith("JavaScript", 10);

console.log(check);
Run Code
Output

true
In the above example, we are specifying the portion of string to consider while checking specified searchString with the endswith() method.

We have passed two arguments, "JavaScript" and 10 where "JavaScript" indicates the string to search and 10 indicates the portion of the string to consider.

The method checks if the first 10 characters of the string end with "JavaScript" and returns true.
 
 
 
 
 
 
*/