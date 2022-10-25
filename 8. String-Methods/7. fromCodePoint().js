/*
JavaScript String fromCodePoint()
The JavaScript String fromCodePoint() method returns a string created by using the given sequence of code points.

The fromCodePoint() method returns a string created by using the given sequence of unicode code points.

Example
// returns a string of characters represented by unicode 65, 66 and 67
let alphabets = String.fromCodePoint(65, 66, 67);

// printing the equivalent characters
console.log(alphabets);

// Output:
// ABC
Run Code
fromCodePoint() Syntax
The syntax of the fromCodePoint() method is:

String.fromCodePoint(num1, ..., numN)
The fromCodePoint() method, being a static method, is called using the String class name.

fromCodePoint() Parameters
The fromCodePoint() method takes in:

num1, ..., numN - A sequence of code points.
fromCodePoint() Return Value
Returns a string created by using the specified sequence of Unicode code points.
Notes:

Unicode code point value is a number value for each character which is defined by an international standard. For example, the Unicode value for the letter A is 65.
The method throws a RangeError if an invalid Unicode code point is given.
Example 1: Using fromCodePoint() method
// return 'Hello' string from given unicode
let greet = String.fromCodePoint(72, 101, 108, 108, 111);

// printing the equivalent characters
console.log(greet);
Run Code
Output

Hello
In the above example, we have called fromCodePoint() through the String constructor object and assigned the return value to greet.

The fromCodePoint() method concatenates the characters converted from the given Unicode code points.

That means, Unicode code point 72 is converted to "H", 101 to "E" and 108 to "L", 111 to "O" and later concatenated into the "Hello" string.

Example 2: fromCodePoint() with Hexadecimal Value
// passing unicode as a hexadecimal value
let string2 = String.fromCodePoint(0x2014);

console.log(string2); 
Run Code
Output

—
In the above example, we have passed a hexadecimal value 0x2014 whose decimal equivalent is 8212. The Unicode point value 8212 is converted to a character —.

string2 holds the return value of fromCodePoint(0x2014), which is —.

Example 3: fromCodePoint() with Invalid Unicode code Point
// passing invalid unicode value  
let string3 = String.fromCodePoint(Infinity);

console.log(string3);
Run Code
Output

RangeError: Invalid code point Infinity

 
 
 
 
 
 
*/
