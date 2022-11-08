let number = 10;

console.log(number.toExponential(1));
// JavaScript Number toExponential()
// The JavaScript Number toExponential() method returns a string representing the Number object in exponential notation.

// The syntax of the toExponential() method is:

// num.toExponential(fractionDigits)
// Here, num is a number.

// Number toExponential() Parameters
// The toExponential() method takes in:
// 
// fractionDigits (Optional) - An integer specifying the number of digits after the decimal point. By default, it is as many digits as necessary to specify the number.
// Return value from Number toExponential()
// Returns a string representing the given Number object in exponential notation, rounded to fractionDigits digits after the decimal point.
// Example: Using Number.toExponential()
let num = 695.8457;

let exp_num = num.toExponential();
console.log(exp_num); // 6.958457e+2

let exp_num1 = num.toExponential(2);
console.log(exp_num1); // 6.96e+2
// Run Code
// Output

6.958457e+2
6.96e+2