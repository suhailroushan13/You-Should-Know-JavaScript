/*
The fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.

Example
// use of fromCharCode()
let string1 = String.fromCharCode(72, 69, 76, 76, 79);

// printing the equivalent characters
console.log(string1);

// Output:
// HELLO
Run Code
fromCharCode() Syntax
The syntax of the fromCharCode() method is:

String.fromCharCode(num1, ..., numN)
The fromCharCode() method, being a static method, is called using the String class name.

fromCharCode() Parameters
The fromCharCode() method takes in :

num1, ..., numN - A sequence of UTF-16 code units (numbers between 0 and 65535). Numbers greater than 65535 (0xFFFF) are truncated.
fromCharCode() Return Value
Returns a string of length N consisting of the N specified UTF-16 code units.
Note: The fromCharCode() method returns a string and not a String object.

Example 1: Using fromCharCode() method
// use of fromCharCode()
let string1 = String.fromCharCode(72, 69, 76, 76, 79);

// printing the equivalent characters
console.log(string1);
Run Code
Output

HELLO
In the above example, we have called fromCharCode() method through the String constructor object and assigned it to the string1 variable.

The fromCharCode() concatenates the characters converted from the given UTF-16 code unit. That means, unicode value 72 is converted to H, 69 to E, 76 to L, 79 to O and later concatenated into a string HELLO.

Example 2: Using fromCodePoint() Method With Hexadecimal Value
// numbers can be passed as a hexadecimal value
let string2 = String.fromCharCode(0x2017);

console.log(string2); 
Run Code
Output

‗
In the above example, we have passed a hexadecimal value 0x2017 whose decimal equivalent is 8215. The unicode point value 8215 is converted to a character ‗.

The string2 holds the return value of the fromCharCode(0x2017), which is ‗.

Note: If any of the unicode values are not representable in a single UTF-16 code unit, we can use fromCodePoint() method.
 
 
 
 
 
 
*/
