/*
Data Types in JavaScript

There are 2 Types of Data Types in JavaScript

1.Primitive Data Types : Where it can store only Single Type of Data


2.Non Primitive Data Type : Where it can store Multiple Types of Data



Primitive Data Types are


1.String 
2.Number
3.null
4.undefined
5.BigInt
6.Symbol
7.Boolean

JavaScript Data Types
There are eight basic data types in JavaScript. They are:

Data Types	Description	Example
String	represents textual data	'hello', "hello world!" etc
Number	an integer or a floating-point number	3, 3.234, 3e-2 etc.
BigInt	an integer with arbitrary precision	900719925124740999n , 1n etc.
Boolean	Any of two values: true or false	true and false
undefined	a data type whose variable is not initialized	let a;
null	denotes a null value	let a = null;
Symbol	data type whose instances are unique and immutable	let value = Symbol('hello');




JavaScript String
String is used to store text. In JavaScript, strings are surrounded by quotes:

Single quotes: 'Hello'
Double quotes: "Hello"
Backticks: `Hello`
For example,

//strings example
const name = 'ram';
const name1 = "hari";
const result = `The names are ${name} and ${name1}`;
Single quotes and double quotes are practically the same and you can use either of them.

Backticks are generally used when you need to include variables or expressions into a string. This is done by wrapping variables or expressions with ${variable or expression} as shown above.

You will learn about the use of backticks in the JavaScript String tutorial.

JavaScript Number
Number represents integer and floating numbers (decimals and exponentials). For example,

const number1 = 3;
const number2 = 3.433;
const number3 = 3e5 // 3 * 10^5
A number type can also be +Infinity, -Infinity, and NaN (not a number). For example,

const number1 = 3/0;
console.log(number1); // Infinity

const number2 = -3/0;
console.log(number2); // -Infinity

// strings can't be divided by numbers
const number3 = "abc"/3; 
console.log(number3);  // NaN
Run Code
JavaScript BigInt
In JavaScript, Number type can only represent numbers less than (253 - 1) and more than -(253 - 1). However, if you need to use a larger number than that, you can use the BigInt data type.

A BigInt number is created by appending n to the end of an integer. For example,

// BigInt value
const value1 = 900719925124740998n;

// Adding two big integers
const result1 = value1 + 1n;
console.log(result1); // "900719925124740999n"

const value2 = 900719925124740998n;

// Error! BitInt and number cannot be added
const result2 = value2 + 1; 
console.log(result2); 
Run Code
Output

900719925124740999n
Uncaught TypeError: Cannot mix BigInt and other types
Note: BigInt was introduced in the newer version of JavaScript and is not supported by many browsers including Safari. Visit JavaScript BigInt support to learn more.

JavaScript Boolean
This data type represents logical entities. Boolean represents one of two values: true or false. It is easier to think of it as a yes/no switch. For example,

const dataChecked = true;
const valueCounted = false;
You will learn more about booleans in the JavaScript Comparison and Logical Operators tutorial.

JavaScript undefined
The undefined data type represents value that is not assigned. If a variable is declared but the value is not assigned, then the value of that variable will be undefined. For example,


let name;

console.log(name); // undefined
Run Code
It is also possible to explicitly assign a variable value undefined. For example,

let name = undefined;
console.log(name); // undefined
Run Code
Note: It is recommended not to explicitly assign undefined to a variable. Usually, null is used to assign 'unknown' or 'empty' value to a variable.

JavaScript null
In JavaScript, null is a special value that represents empty or unknown value. For example,

const number = null;
The code above suggests that the number variable is empty.

Note: null is not the same as NULL or Null.

JavaScript Symbol
This data type was introduced in a newer version of JavaScript (from ES2015).

A value having the data type Symbol can be referred to as a symbol value. Symbol is an immutable primitive value that is unique. For example,

// two symbols with the same description

const value1 = Symbol('hello');
const value2 = Symbol('hello');
Though value1 and value2 both contain 'hello', they are different as they are of the Symbol type.





Non Primitive Data Types

1.Objects 
Object	key-value pairs of collection of data	let student = { };

JavaScript Object
An object is a complex data type that allows us to store collections of data. For example,

const student = {
    firstName: 'ram',
    lastName: null,
    class: 10
};
You will learn about JavaScript Objects in later tutorials.

2.Arrays
Arrays have Store Elements in a Collection
Where it can store multiple values in a single variabel
let fruits = ["apple","mango","orange"]
Arrays starts from 0
 
 
 
*/
