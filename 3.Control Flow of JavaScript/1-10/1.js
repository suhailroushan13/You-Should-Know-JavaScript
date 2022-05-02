// JavaScript if...else Statement
// In computer programming, there may arise situations where you have to run a block of code among more than one alternatives. For example, assigning grades A, B or C based on marks obtained by a student.

// In such situations, you can use the JavaScript if...else statement to create a program that can make decisions.

// In JavaScript, there are three forms of the if...else statement.

// if statement
// if...else statement
// if...else if...else statement
// JavaScript if Statement
// The syntax of the if statement is:

// if (condition) {
    // the body of if
// }
// The if statement evaluates the condition inside the parenthesis ().

// If the condition is evaluated to true, the code inside the body of if is executed.
// If the condition is evaluated to false, the code inside the body of if is skipped.
// Note: The code inside { } is the body of the if statement.

// Working of if statement in JavaScript
// Working of the if Statement
// Example 1: if Statement
// check if the number is positive

// const number = prompt("Enter a number: ");

// check if number is greater than 0
// if (number > 0) {
 // the body of the if statement
//   console.log("The number is positive");
// }

// console.log("The if statement is easy");
// Run Code
// Output 1

// Enter a number: 2
// The number is positive
// The if statement is easy
// Suppose the user entered 2. In this case, the condition number > 0 evaluates to true. And, the body of the if statement is executed.

// Output 2

// Enter a number: -1
// The if statement is easy
// Suppose the user entered -1. In this case, the condition number > 0 evaluates to false. Hence, the body of the if statement is skipped.

// Since console.log("The if statement is easy"); is outside the body of the if statement, it is always executed.

// Comparison and logical operators are used in conditions. So to learn more about comparison and logical operators, you can visit JavaScript Comparison and Logical Operators.

// JavaScript if...else statement
// An if statement can have an optional else clause. The syntax of the if...else statement is:

// if (condition) {
    // block of code if condition is true
// } else {
   // block of code if condition is false
// }
// The if..else statement evaluates the condition inside the parenthesis.

// If the condition is evaluated to true,

// the code inside the body of if is executed
// the code inside the body of else is skipped from execution

// If the condition is evaluated to false,

// the code inside the body of else is executed
// the code inside the body of if is skipped from execution
// Working of if-else statement in JavaScript
// Working of the if...else statement
// Example 2: if…else Statement
// check if the number is positive or negative/zero

// const number = prompt("Enter a number: ");

// check if number is greater than 0
// if (number > 0) {
//   console.log("The number is positive");
// }
// if number is not greater than 0
// else {
//   console.log("The number is either a negative number or 0");
// }

// console.log("The if...else statement is easy");
// Run Code
// Output 1

// Enter a number: 2
// The number is positive
// The if...else statement is easy
// Suppose the user entered 2. In this case, the condition number > 0 evaluates to true. Hence, the body of the if statement is executed and the body of the else statement is skipped.

// Output 2

// Enter a number: -1
// The number is either a negative number or 0
// The if...else statement is easy
// Suppose the user entered -1. In this case, the condition number > 0 evaluates to false. Hence, the body of the else statement is executed and the body of the if statement is skipped.

// JavaScript if...else if statement
// The if...else statement is used to execute a block of code among two alternatives. However, if you need to make a choice between more than two alternatives, if...else if...else can be used.

// The syntax of the if...else if...else statement is:

// if (condition1) {
    // code block 1
// } else if (condition2){
    // code block 2
// } else {
    // code block 3
// }
// If condition1 evaluates to true, the code block 1 is executed.
// If condition1 evaluates to false, then condition2 is evaluated.
// If the condition2 is true, the code block 2 is executed.
// If the condition2 is false, the code block 3 is executed.
// Working of if-else ladder statement in JavaScript
// Working of the if...else if...else statement
// Example 3: if...else if Statement
// check if the number if positive, negative or zero
// const number = prompt("Enter a number: ");


// check if number is greater than 0
// if (number > 0) {
//     console.log("The number is positive");
// }
// check if number is 0
// else if (number == 0) {
//   console.log("The number is 0");
// }
// if number is neither greater than 0, nor zero
// else {
//     console.log("The number is negative");
// }

// console.log("The if...else if...else statement is easy");
// Run Code
// Output

// Enter a number: 0
// The number is 0
// The if...else if...else statement is easy
// Suppose the user entered 0, then the first test condition number > 0 evaluates to false. Then, the second test condition number == 0 evaluates to true and its corresponding block is executed.

// Nested if...else Statement
// You can also use an if...else statement inside of an if...else statement. This is known as nested if...else statement.

// Example 4: Nested if...else Statement
// check if the number is positive, negative or zero
// const number = prompt("Enter a number: ");

// if (number >= 0) {
//     if (number == 0) {
//         console.log("You entered number 0");
//     } else {
//         console.log("You entered a positive number");
//     }
// } else {
//     console.log("You entered a negative number");
// }
// Run Code
// Output

// Enter a number: 5
// You entered a positive number
// Suppose the user entered 5. In this case, the condition number >= 0 evaluates to true, and the control of the program goes inside the outer if statement.

// Then, the test condition, number == 0, of the inner if statement is evaluated. Since it's false, the else clause of the inner if statement is executed.

// Note: As you can see, nested if...else makes our logic complicated and we should try to avoid using nested if...else whenever possible.

// Body of if...else With Only One Statement
// If the body of if...else has only one statement, we can omit { } in our programs. For example, you can replace

// const number = 2;
// if (number > 0) {
//     console.log("The number is positive.");
// } else {
//    console.log("The number is negative or zero.");
// }
// Run Code
// with

// const number = 2;
// if (number > 0)
//     console.log("The number is positive.");
//  else 
//    console.log("The number is negative or zero.");
// Run Code
// Output

// The number is positive.