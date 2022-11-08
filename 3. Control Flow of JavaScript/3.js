/*

JavaScript if...else if statement
The if...else statement is used to execute a block of code among two alternatives. However, if you need to make a choice between more than two alternatives, if...else if...else can be used.

The syntax of the if...else if...else statement is:

if (condition1) {
    // code block 1
} else if (condition2){
    // code block 2
} else {
    // code block 3
}
If condition1 evaluates to true, the code block 1 is executed.
If condition1 evaluates to false, then condition2 is evaluated.
If the condition2 is true, the code block 2 is executed.
If the condition2 is false, the code block 3 is executed.
Working of if-else ladder statement in JavaScript
Working of the if...else if...else statement
Example 3: if...else if Statement
// check if the number if positive, negative or zero
const number = prompt("Enter a number: ");


// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}
// check if number is 0
else if (number == 0) {
  console.log("The number is 0");
}
// if number is neither greater than 0, nor zero
else {
    console.log("The number is negative");
}

console.log("The if...else if...else statement is easy");
Run Code
Output

Enter a number: 0
The number is 0
The if...else if...else statement is easy
Suppose the user entered 0, then the first test condition number > 0 evaluates to false. Then, the second test condition number == 0 evaluates to true and its corresponding block is executed.

Nested if...else Statement
You can also use an if...else statement inside of an if...else statement. This is known as nested if...else statement.

Example 4: Nested if...else Statement
// check if the number is positive, negative or zero
const number = prompt("Enter a number: ");

if (number >= 0) {
    if (number == 0) {
        console.log("You entered number 0");
    } else {
        console.log("You entered a positive number");
    }
} else {
    console.log("You entered a negative number");
}
Run Code
Output

Enter a number: 5
You entered a positive number
Suppose the user entered 5. In this case, the condition number >= 0 evaluates to true, and the control of the program goes inside the outer if statement.

Then, the test condition, number == 0, of the inner if statement is evaluated. Since it's false, the else clause of the inner if statement is executed.

Note: As you can see, nested if...else makes our logic complicated and we should try to avoid using nested if...else whenever possible.

Body of if...else With Only One Statement
If the body of if...else has only one statement, we can omit { } in our programs. For example, you can replace

const number = 2;
if (number > 0) {
    console.log("The number is positive.");
} else {
   console.log("The number is negative or zero.");
}
Run Code
with

const number = 2;
if (number > 0)
    console.log("The number is positive.");
 else 
   console.log("The number is negative or zero.");
Run Code
Output

The number is positive.


*/
