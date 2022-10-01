// Math Object
//
// The Math object allows you to perform mathematical tasks on numbers.

/*
JavaScript Math Methods
Method	Description
abs(x)	Returns the absolute value of x
acos(x)	Returns the arccosine of x, in radians
acosh(x)	Returns the hyperbolic arccosine of x
asin(x)	Returns the arcsine of x, in radians
asinh(x)	Returns the hyperbolic arcsine of x
atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y, x)	Returns the arctangent of the quotient of its arguments
atanh(x)	Returns the hyperbolic arctangent of x
cbrt(x)	Returns the cubic root of x
ceil(x)	Returns x, rounded upwards to the nearest integer
exp(x)	Returns the value of Ex
floor(x)	Returns x, rounded downwards to the nearest integer
log(x)	Returns the natural logarithm (base E) of x
max(x, y, z, ..., n)	Returns the number with the highest value
min(x, y, z, ..., n)	Returns the number with the lowest value
pow(x, y)	Returns the value of x to the power of y
random()	Returns a random number between 0 and 1
round(x)	Rounds x to the nearest integer
sign(x)	Returns if x is negative, null or positive (-1, 0, 1)

sqrt(x)	Returns the square root of x

trunc(x)	Returns the integer part of a number (x)
 
 
 
 
*/

console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045

// Math.round()
// The Math.round() function returns the value of a number rounded to the nearest integer.

console.log(Math.round(4.7)); // 5
console.log(Math.round(4.4)); // 4

// Math.pow()
// The Math.pow() function returns the value of x to the power of y (xy).

console.log(Math.pow(8, 2)); // 64

// Math.sqrt()
// The Math.sqrt() function returns the square root of a number.

console.log(Math.sqrt(64)); // 8

// Math.abs()
// The Math.abs() function returns the absolute (positive) value of a number.

console.log(Math.abs(-4.7)); // 4.7

// Math.ceil()
// The Math.ceil() function rounds a number UPWARDS to the nearest integer, and returns the result.

console.log(Math.ceil(4.4)); // 5

// Math.floor()
// The Math.floor() function rounds a number DOWNWARDS to the nearest integer, and returns the result.

console.log(Math.floor(4.7)); // 4

// Math.min() and Math.max()
// The Math.min() function can be used to find the lowest value in a list of arguments.

console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200

// The Math.max() function can be used to find the highest value in a list of arguments.

console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150

// Math.random()
// The Math.random() function returns a random number between 0 (inclusive), and 1 (exclusive):

console.log(Math.random()); // 0.1234567894322
console.log(Math.random()); // 0.987654321

// Math.trunc()
// The Math.trunc() function returns the integer part of a number.

console.log(Math.trunc(4.7)); // 4

// Math.sign()
// The Math.sign() function returns the sign of a number, indicating whether the number is positive, negative or zero.

console.log(Math.sign(3)); // 1
console.log(Math.sign(-3)); // -1
console.log(Math.sign(0)); // 0

// Math.sin(), Math.cos(), Math.tan()
// The Math.sin() function returns the sine (a value between -1 and 1) of the angle specified in radians.

console.log(Math.sin(90 * Math.PI / 180)); // 1

// The Math.cos() function returns the cosine (a value between -1 and 1) of the angle specified in radians.

console.log(Math.cos(0 * Math.PI / 180)); // 1

// The Math.tan() function returns the tangent (a value between -1 and 1) of the angle specified in radians.

console.log(Math.tan(45 * Math.PI / 180)); // 1

// Math.asin(), Math.acos(), Math.atan()
// The Math.asin() function returns the arcsine (in radians) of a number.

console.log(Math.asin(1) * 180 / Math.PI); // 90

// The Math.acos() function returns the arccosine (in radians) of a number.

console.log(Math.acos(1) * 180 / Math.PI); // 0

// The Math.atan() function returns the arctangent (in radians) of a number.

console.log(Math.atan(1) * 180 / Math.PI); // 45

// Math.log()
// The Math.log() function returns the natural logarithm (base e) of a number.

console.log(Math.log(2.718281828459045)); // 1

// Math.exp()
// The Math.exp() function returns Ex, where x is the argument, and E is Euler's constant (2.718…), the base of the natural logarithm.

console.log(Math.exp(1)); // 2.718281828459045

// Math.hypot()
// The Math.hypot() function returns the square root of the sum of squares of its arguments.

console.log(Math.hypot(3, 4)); // 5

// Math.cbrt()
// The Math.cbrt() function returns the cube root of a number.

console.log(Math.cbrt(8)); // 2

// Math.imul()
// The Math.imul() function returns the result of the C-like 32-bit multiplication of the two parameters.

console.log(Math.imul(2, 4)); // 8

// Math.clz32()
// The Math.clz32() function returns the number of leading zero bits in the 32-bit binary representation of a number.

console.log(Math.clz32(0)); // 32
console.log(Math.clz32(1)); // 31
console.log(Math.clz32(1000)); // 22
console.log(Math.clz32(0b01000000000000000000000000000000)); // 1
console.log(Math.clz32(0b00100000000000000000000000000000)); // 2

// Math.fround()
// The Math.fround() function returns the nearest single precision float representation of a number.

console.log(Math.fround(0)); // 0
console.log(Math.fround(1)); // 1
console.log(Math.fround(1.337)); // 1.3370000123977661
console.log(Math.fround(1.5)); // 1.5
console.log(Math.fround(NaN)); // NaN

// Math.log10()
// The Math.log10() function returns the base 10 logarithm of a number.

console.log(Math.log10(100)); // 2

// Math.log2()
// The Math.log2() function returns the base 2 logarithm of a number.

console.log(Math.log2(8)); // 3

// Math.log1p()
// The Math.log1p() function returns the natural logarithm of 1 + a number.

console.log(Math.log1p(1)); // 0.6931471805599453

// Math.expm1()
// The Math.expm1() function returns ex - 1, where x is the argument, and e is Euler's constant (2.718…), the base of the natural logarithm.

console.log(Math.expm1(1)); // 1.718281828459045

// Math.sinh()
// The Math.sinh() function returns the hyperbolic sine of a number.

console.log(Math.sinh(0)); // 0

// Math.cosh()
// The Math.cosh() function returns the hyperbolic cosine of a number.

console.log(Math.cosh(0)); // 1

// Math.tanh()
// The Math.tanh() function returns the hyperbolic tangent of a number.

console.log(Math.tanh(0)); // 0

// Math.asinh()
// The Math.asinh() function returns the hyperbolic arcsine of a number.

console.log(Math.asinh(0)); // 0

// Math.acosh()
// The Math.acosh() function returns the hyperbolic arccosine of a number.

console.log(Math.acosh(1)); // 0

// Math.atanh()
// The Math.atanh() function returns the hyperbolic arctangent of a number.

console.log(Math.atanh(0)); // 0



