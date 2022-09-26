/*
Benefits of Using a Function
Function makes the code reusable. You can declare it once and use it multiple times.
Function makes the program easier as each small task is divided into a function.
Function increases readability.
Function makes the program easier to debug.
Function makes the program easier to maintain.
Function makes the program easier to extend.
Function makes the program easier to test.
Function makes the program easier to understand.
Function makes the program easier to implement.
*/

// Sum of Two Numbers
// program to add two numbers
// declaring a function
function add(a, b) {
    return a + b;
}

// take input from the user
let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number: "));

// calling function
let result = add(number1,number2);

// display the result
console.log("The sum is " + result);
// Run Code
// Output

// Enter first number: 3.4
// Enter second number: 4
// The sum is 7.4
// // In the above program, the sum of the numbers is returned by the function using the return statement. And that value is stored in the result variable.

// Benefits of Using a Function
// Function makes the code reusable. You can declare it once and use it multiple times.
// Function makes the program easier as each small task is divided into a function.
// Function increases readability.
// Function Expressions
// In Javascript, functions can also be defined as expressions. For example,

// // program to find the square of a number
// // function is declared inside the variable
let x = function (num) { return num * num };
console.log(x(4));

// // can be used as variable value for other variables
let y = x(3);
console.log(y);
// Run Code
// Output

// 16
// 9
// In the above program, variable x is used to store the function. Here the function is treated as an expression. And the function is called using the variable name.

// The function above is called an anonymous function.

// Note: In ES2015, JavaScript expressions are written as arrow functions.