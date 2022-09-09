/*
avaScript if...else Statement
In this tutorial, you will learn about the if...else statement to create decision making programs with the help of examples.

Video: JavaScript if...else

In computer programming, there may arise situations where you have to run a block of code among more than one alternatives. For example, assigning grades A, B or C based on marks obtained by a student.

In such situations, you can use the JavaScript if...else statement to create a program that can make decisions.

In JavaScript, there are three forms of the if...else statement.

if statement
if...else statement
if...else if...else statement
JavaScript if Statement
The syntax of the if statement is:

if (condition) {
    // the body of if
}
The if statement evaluates the condition inside the parenthesis ().

If the condition is evaluated to true, the code inside the body of if is executed.
If the condition is evaluated to false, the code inside the body of if is skipped.
Note: The code inside { } is the body of the if statement.

Working of if statement in JavaScript
Working of the if Statement
Example 1: if Statement
// check if the number is positive

const number = prompt("Enter a number: ");

// check if number is greater than 0
if (number > 0) {
 // the body of the if statement
  console.log("The number is positive");
}

console.log("The if statement is easy");
Run Code
Output 1

Enter a number: 2
The number is positive
The if statement is easy
Suppose the user entered 2. In this case, the condition number > 0 evaluates to true. And, the body of the if statement is executed.

Output 2

Enter a number: -1
The if statement is easy
Suppose the user entered -1. In this case, the condition number > 0 evaluates to false. Hence, the body of the if statement is skipped.

Since console.log("The if statement is easy"); is outside the body of the if statement, it is always executed.

Comparison and logical operators are used in conditions. So to learn more about comparison and logical operators, you can visit JavaScript Comparison and Logical Operators.

*/