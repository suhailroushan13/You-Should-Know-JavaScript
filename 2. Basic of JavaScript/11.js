/*
What is an Operator?
In JavaScript, an operator is a special symbol used to perform operations on operands (values and variables). For example,

2 + 3; // 5
Here + is an operator that performs addition, and 2 and 3 are operands.

JavaScript Operator Types
Here is a list of different operators you will learn in this tutorial.

Assignment Operators
Arithmetic Operators
Comparison Operators
Logical Operators
Bitwise Operators
String Operators
Other Operators

✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

JavaScript Assignment Operators
Assignment operators are used to assign values to variables. For example,

const x = 5;
Here, the = operator is used to assign value 5 to variable x.

Here's a list of commonly used assignment operators:

Operator	Name	Example
=	Assignment operator	a = 7; // 7
+=	Addition assignment	a += 5; // a = a + 5
-=	Subtraction Assignment	a -= 2; // a = a - 2
*=	Multiplication Assignment	a *= 3; // a = a * 3
/=	Division Assignment	a /= 2; // a = a / 2
%=	Remainder Assignment	a %= 2; // a = a % 2
**=	Exponentiation Assignment	a **= 2; // a = a**2
Note: The commonly used assignment operator is =. You will understand other assignment operators such as +=, -=, *= etc. once we learn arithmetic operators.



✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅





JavaScript Arithmetic Operators
Arithmetic operators are used to perform arithmetic calculations. For example,

const number = 3 + 5; // 8
Here, the + operator is used to add two operands.

Operator	Name	Example
+	Addition	x + y
-	Subtraction	x - y
*	Multiplication	x * y
/	Division	x / y
%	Remainder	x % y
++	Increment (increments by 1)	++x or x++
--	Decrement (decrements by 1)	--x or x--
**	Exponentiation (Power)	x ** y
Example 1: Arithmetic operators in JavaScript
let x = 5;
let y = 3;

// addition
console.log('x + y = ', x + y);  // 8

// subtraction
console.log('x - y = ', x - y);  // 2

// multiplication
console.log('x * y = ', x * y);  // 15

// division
console.log('x / y = ', x / y);  // 1.6666666666666667

// remainder
console.log('x % y = ', x % y);   // 2

// increment
console.log('++x = ', ++x); // x is now 6
console.log('x++ = ', x++); // prints 6 and then increased to 7
console.log('x = ', x);     // 7

// decrement
console.log('--x = ', --x); // x is now 6
console.log('x-- = ', x--); // prints 6 and then decreased to 5
console.log('x = ', x);     // 5

//exponentiation
console.log('x ** y =', x ** y);
Run Code
Visit ++ and -- operator to learn more.

Note: The ** operator was introduced in ECMAScript 2016 and some browsers may not support them. To learn more, visit JavaScript exponentiation browser support.

// Increment and decrement Operator

// 1. Increment (Increase the value by 1)
// Increment has PREFIX  and POSTFIX 
// PREFIX: ++x  // Pre Means First
// POSTFIX: x++  // Post Means at The End or Last

// PREFIX:++x
x = 2;
console.log(++x,"Prefix changes the value rapidly with +1");  // 3 
// RAPID CHANGE OF VALUE
// In Line No.9 The Value of 2 is Increase By 1 (++x = x + 1)

// POSTFIX:x++
x = 5;
console.log(x++,"It changed the value +1... but it will show from next time when it is used ");  // 5 // While using the Postfix the value of x is not changed
console.log(x,"Here the value has got +1 ");  // 6 // But While Using Next Time the value of x is Increase By 1
// DELAY CHANGE OF VALUE By 1 Time
// It Delays by 1 Line
// After the Using of First Time ..in the Second Time the value of x is Increase By 1

console.log("--------------------------------------------");

// 2. Decrement (Decrease the value by 1)
// Decrement has PREFIX  and POSTFIX
// PREFIX: --x
// POSTFIX: x--


// PREFIX:--x
x = 5;
console.log(--x, "Prefix changes the value rapidly with -1");  // 4
// RAPID CHANGE OF VALUE
// In Line No.8 The Value of 5 is Decrease By 1 (--x = x - 1)


// POSTFIX:x--
x = 5;
console.log(x--, "It changed the value -1... but it will show from next time when it is used ");  // 5 // While using the Postfix the value of x is not changed
console.log(x, "Here the value has got -1 ");  // 4 // But While Using Next Time the value of x is Decrease By 1
// DELAY CHANGE OF VALUE By 1 Time
// It Delays by 1 Line
// After the Using of First Time ..in the Second Time the value of x is Decrease By 1


console.log("--------------------------------------------");

// 3. Exponentiation Operator
// Exponentiation Operator is used to raise the value of a number to the power of another number.
// It is also known as power operator.
// It is also known as exponentiation operator.

let base = 2;
let exponent = 3;
let result = base ** exponent;
console.log(result);  // 8 // 2 power 3







✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

JavaScript Comparison Operators
Comparison operators compare two values and return a boolean value, either true or false. For example,

const a = 3, b = 2;
console.log(a > b); // true 
Run Code
Here, the comparison operator > is used to compare whether a is greater than b.

Operator	Description	Example
==	Equal to: returns true if the operands are equal	x == y
!=	Not equal to: returns true if the operands are not equal	x != y
===	Strict equal to: true if the operands are equal and of the same type	x === y
!==	Strict not equal to: true if the operands are equal but of different type or not equal at all	x !== y
>	Greater than: true if left operand is greater than the right operand	x > y
>=	Greater than or equal to: true if left operand is greater than or equal to the right operand	x >= y
<	Less than: true if the left operand is less than the right operand	x < y
<=	Less than or equal to: true if the left operand is less than or equal to the right operand	x <= y
Example 2: Comparison operators in JavaScript
// equal operator
console.log(2 == 2); // true
console.log(2 == '2'); // true

// not equal operator
console.log(3 != 2); // true
console.log('hello' != 'Hello'); // true

// strict equal operator
console.log(2 === 2); // true
console.log(2 === '2'); // false

// strict not equal operator
console.log(2 !== '2'); // true
console.log(2 !== 2); // false
Run Code
Comparison operators are used in decision-making and loops. You will learn about the use of comparison operators in detail in later tutorials.



✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅


JavaScript Logical Operators
Logical operators perform logical operations and return a boolean value, either true or false. For example,

const x = 5, y = 3;
(x < 6) && (y < 5); // true
Here, && is the logical operator AND. Since both x < 6 and y < 5 are true, the result is true.

Operator	Description	Example
&&	Logical AND: true if both the operands are true, else returns false	x && y
||	Logical OR: true if either of the operands is true; returns false if both are false	x || y
!	Logical NOT: true if the operand is false and vice-versa.	!x
Example 3: Logical Operators in JavaScript
// logical AND
console.log(true && true); // true
console.log(true && false); // false

// logical OR
console.log(true || false); // true

// logical NOT
console.log(!true); // false
Run Code
Output

true
false
true
false
Logical operators are used in decision making and loops. You will learn about the use of logical operators in detail in later tutorials.







✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅



JavaScript Bitwise Operators
Bitwise operators perform operations on binary representations of numbers.

Operator	Description
&	Bitwise AND
|	Bitwise OR
^	Bitwise XOR
~	Bitwise NOT
<<	Left shift
>>	Sign-propagating right shift
>>>	Zero-fill right shift
Bitwise operators are rarely used in everyday programming. If you are interested, visit JavaScript Bitwise Operators to learn more.

JavaScript Bitwise Operators
Bitwise operators treat its operands as a set of 32-bit binary digits (zeros and ones) and perform actions. However, the result is shown as a decimal value.

Operators	Name	Example
&	Bitwise AND	x & y
|	Bitwise OR	x | y
^	Bitwise XOR	x ^ y
~	Bitwise NOT	~x
<<	Left shift	x << y
>>	Sign-propagating right shift	x >> y
>>>	Zero-fill right shift	x >>> y
Note: The minimum and the maximum integers that are representable through a 32-bit signed number are -2147483648 to 2147483647.

JavaScript Bitwise AND
Bitwise AND & returns 1 if the corresponding bits of both operands are 1 else it returns 0.

Operand 1	Operand 2	AND Operation
0	0	0 & 0 is 0
0	1	0 & 1 is 0
1	0	1 & 0 is 0
1	1	1 & 1 is 1
Let's take a look at the bitwise AND operation of two integers 12 and 25.

In binary,

12 = 01100
25 = 11001

// Bitwise AND Operation of 12 and 25

    00001100
&   00011001
    ---------
    00001000  = 8 (In decimal)
Note: Converting 12 to 32-bit binary gives us 00000000000000000000000000001100 and 25 gives 00000000000000000000000000011001. However, we have removed the preceding zeros for simplicity.

Example 1: Bitwise AND Operator
// bitwise AND operator example

let a = 12; 
let  b = 25; 

result = a & b; 
console.log(result); // 8 
Run Code
In the above program,

The binary value of 12 is 00000000000000000000000000001100
The binary value of 25 is 00000000000000000000000000011001.
When bitwise AND operation is performed, the binary result will be 00000000000000000000000000001000 which converts into the decimal value 8.
JavaScript Bitwise OR
Bitwise OR | returns 1 if either of the corresponding bits of one operand is 1 else returns 0.

Operand 1	Operand 2	OR Operation
0	0	0 | 0 is 0
0	1	0 | 1 is 1
1	0	1 | 0 is 1
1	1	1 | 1 is 1
Let's take a look at the bitwise OR operation of two integers 12 and 25.

In binary,

12 = 01100
25 = 11001

// Bitwise OR Operation of 12 and 25

    00001100
|   00011001
    --------
    00011101  = 29 (In decimal)
Example 2: Bitwise OR Operator
// bitwise OR operator example
let a = 12; 
let  b = 25; 

result = a | b; 
console.log(result); // 29
Run Code
When bitwise OR operation is performed, the binary result will be 00000000000000000000000000011101 which converts into the decimal value 29.

JavaScript Bitwise XOR
Bitwise XOR ^ returns 1 if the corresponding bits are different and returns 0 if the corresponding bits are the same.

Operand 1	Operand 2	XOR Operation
0	0	0 ^ 0 is 0
0	1	0 ^ 1 is 1
1	0	1 ^ 0 is 1
1	1	1 ^ 1 is 0
In binary,

12 = 01100
25 = 11001

// Bitwise XOR Operation of 12 and 25

    00001100
^   00011001
    --------
    00010101  = 21 (In decimal)
Example 3: Bitwise XOR Operator
// bitwise XOR operator example
let a = 12; 
let  b = 25; 

result = a ^ b; 
console.log(result); // 21
Run Code
When bitwise XOR operation is performed, the binary result will be 00000000000000000000000000010101 which converts into the decimal value 21.

JavaScript Bitwise NOT
Bitwise NOT ~ inverts the bit( 0 becomes 1, 1 becomes 0).

In binary,

12 = 00000000000000000000000000001100

// Bitwise Not Operation of 12 

    ~ 00000000000000000000000000001100
      ---------------------------------
      11111111111111111111111111110011  = -13(In decimal)
While converting 11111111111111111111111111110011 to decimal, the value would be 4294967283. But when using bitwise operator, the value is computed in signed 2's complement format except for zero-fill right shift.

2's complement is computed by inverting the bits(1's complement) and then adding 1. For example,

13 in binary: 00000000000000000000000000001101
1's complement of 13: 11111111111111111111111111110010

2's complement of 13: 11111111111111111111111111110010
                                                    +1
                      ---------------------------------
                      11111111111111111111111111110011
Notice the 2's complement of 13 (i.e. -13) is 11111111111111111111111111110011. This value is equivalent to the bitwise NOT of 12.

Example 4: Bitwise NOT Operator
// bitwise NOT operator example
let  b = 12;

result = ~b;

console.log(result); // -13
Run Code
When bitwise NOT operation is performed, the binary result will be 11111111111111111111111111110011 which converts into the decimal value -13.

Note: Bitwise NOT of a number x gives -(x + 1). Notice above ~2 gives -3.

JavaScript Left shift
In the left shift operator <<, the left operand specifies the number and the right operand specifies the number to be shifted left. Zero bits are added to the right and excess bits from the left are discarded.

Working of left shift in JavaScript
One bit left shift in JavaScript
For example,

let a = 8;
let  b = 1;

result = a << b;

// 1 ( 00000000000000000000000000010000 )
console.log(result);
Run Code
JavaScript Sign-propagating right shift
In the right shift operator >>, the first operand specifies the number and the second operand specifies the number to be shifted right. Excess bits from the right are discarded. The copies of the leftmost bit are shifted in from the left, hence the name sign-propagating.

Working of sign propagating right fill in Javascript
One bit right shift with sign propagating fill in JavaScript
For example,

let a = 8;
let b = 1;
// 11111111111111111111111111111101
let c = -3;

result = a >> b;
result1 = c >> b;

// 4 (00000000000000000000000000000100)
console.log(result); 

// -2 (11111111111111111111111111111110)
console.log(result1); 
Run Code
JavaScript Zero-fill right shift
Zero-fill right shift >>> shifts the operand to the right by filling the zero bits to the left. Excess bits from the right are discarded.

Working of right shift with zero fill in JavaScript
One bit right shift with zero fill in JavaScript
For example,

let a = 8;
let b = 1;
let c = -3; 

result = a >>> b;
result1 = c >>> b;

// 4 (00000000000000000000000000000100)
console.log(result);

// 1073741823 (00111111111111111111111111111111)
console.log(result);


✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅




JavaScript String Operators
In JavaScript, you can also use the + operator to concatenate (join) two or more strings.

Example 4: String operators in JavaScript
// concatenation operator
console.log('hello' + 'world');

let a = 'JavaScript';

a += ' tutorial';  // a = a + ' tutorial';
console.log(a);
Run Code
Output

helloworld
JavaScript tutorial
Note: When + is used with strings, it performs concatenation. However, when + is used with numbers, it performs addition.


✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

Other JavaScript Operators
Here's a list of other operators available in JavaScript. You will learn about these operators in later tutorials.


,	evaluates multiple operands and returns the value of the last operand.	let a = (1, 3 , 4); // 4
Comma operator (,)
The comma operator (,) evaluates each of its operands (from left to right) and returns the value of the last operand. 
This lets you create a compound expression in which multiple expressions are evaluated, with the compound expression's final
 value being the value of the rightmost of its member expressions. This is commonly used to provide multiple parameters to a for loop.

let x = 1;

x = (x++, x);

console.log(x);
// expected output: 2

x = (2, 3);

console.log(x);
// expected output: 3








?:	returns value based on the condition	(5 > 3) ? 'success' : 'error'; // "success"
Conditional (ternary) operator
The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?),
 then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute
if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.

function getFee(isMember) {
  return (isMember ? '$2.00' : '$10.00');
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(null));
// expected output: "$10.00"









delete	deletes an object's property, or an element of an array	delete x

The JavaScript delete removes a property from an object; if no more references to the same property are held, it is eventually released automatically.
const Employee = {
  firstname: 'John',
  lastname: 'Doe'
};

console.log(Employee.firstname);
// expected output: "John"

delete Employee.firstname;

console.log(Employee.firstname);
// expected output: undefined





typeof	returns a string indicating the data type	typeof 3; // "number"

The typeof operator returns a string indicating the type of the unevaluated operand.
console.log(typeof 42);
// expected output: "number"

console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof undeclaredVariable);
// expected output: "undefined"







void	discards the expression's return value	void(x)
The void evaluates the given expression and then returns undefined.
const output = void 1;
console.log(output);
// expected output: undefined

void console.log('expression evaluated');
// expected output: "expression evaluated"

void function iife() {
  console.log('iife is executed');
}();
// expected output: iife is executed

void function test() {
  console.log('test function executed');
};
try {
  test();
} catch (e) {
  console.log('test function is not defined');
  // expected output: "test function is not defined"
}


The in returns true if the specified property is in the specified object or its prototype chain.
in	returns true if the specified property is in the object	prop in object
const car = { make: 'Honda', model: 'Accord', year: 1998 };

console.log('make' in car);
// expected output: true

delete car.make;
if ('make' in car === false) {
  car.make = 'Suzuki';
}

console.log(car.make);
// expected output: "Suzuki"





instanceof	returns true if the specified object is of of the specified object type	object instanceof object_type
 
The instanceof tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value.
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
// expected output: true

console.log(auto instanceof Object);
// expected output: true


 
 
 
*/
