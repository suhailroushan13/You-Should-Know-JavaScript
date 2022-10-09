/*


JavaScript if...else statement
An if statement can have an optional else clause. The syntax of the if...else statement is:

if (condition) {
    // block of code if condition is true
} else {
   // block of code if condition is false
}
The if..else statement evaluates the condition inside the parenthesis.

If the condition is evaluated to true,

the code inside the body of if is executed
the code inside the body of else is skipped from execution

If the condition is evaluated to false,

the code inside the body of else is executed
the code inside the body of if is skipped from execution
Working of if-else statement in JavaScript
Working of the if...else statement
Example 2: if…else Statement
// check if the number is positive or negative/zero

const number = prompt("Enter a number: ");

// check if number is greater than 0
if (number > 0) {
  console.log("The number is positive");
}
// if number is not greater than 0
else {
  console.log("The number is either a negative number or 0");
}

console.log("The if...else statement is easy");
Run Code
Output 1

Enter a number: 2
The number is positive
The if...else statement is easy
Suppose the user entered 2. In this case, the condition number > 0 evaluates to true. Hence, the body of the if statement is executed and the body of the else statement is skipped.

Output 2

Enter a number: -1
The number is either a negative number or 0
The if...else statement is easy
Suppose the user entered -1. In this case, the condition number > 0 evaluates to false. Hence, the body of the else statement is executed and the body of the if statement is skipped.
*/
