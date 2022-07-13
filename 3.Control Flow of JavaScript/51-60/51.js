/*
The continue statement is used to skip the current iteration of the loop and the control flow of the program goes to the next iteration.

The syntax of the continue statement is:

continue [label];
Note: label is optional and rarely used.

Working of JavaScript continue Statement
Working of continue statement in JavaScript
Working of JavaScript continue Statement
continue with for Loop
In a for loop, continue skips the current iteration and control flow jumps to the updateExpression.

Example 1: Print the Value of i
// program to print the value of i
for (let i = 1; i <= 5; i++) {

    // condition to continue    
    if (i == 3) {
        continue;
    }

    console.log(i);
}
Run Code
Output

1
2
4
5
In the above program, for loop is used to print the value of i in each iteration.

Notice the continue statement inside the loop.

if(i == 3) {
    continue;
}
This means

When i is equal to 3, the continue statement skips the third iteration.
Then, i becomes 4 and the test condition and continue statement is evaluated again.
Hence, 4 and 5 are printed in the next two iterations.
Note: The continue statement is almost always used with decision making statements. To learn more, visit JavaScript if...else Statement.

To learn more about for loop, visit JavaScript for loop.

Note: The break statement terminates the loop entirely. However, the continue statement only skips the current iteration.

continue with while Loop
In a while loop, continue skips the current iteration and control flow of the program jumps back to the while condition.

The continue statement works in the same way for while and do...while loops.

Example 2: Calculate Positive Number
// program to calculate positive numbers only
// if the user enters a negative number, that number is skipped from calculation

// negative number -> loop terminate
// non-numeric character -> skip iteration

let sum = 0;
let number = 0;

while (number >= 0) {

    // add all positive numbers
    sum += number;

    // take input from the user
    number = parseInt(prompt('Enter a number: '));

    // continue condition
    if (isNaN(number)) {
        console.log('You entered a string.');
        number = 0; // the value of number is made 0 again
        continue;
    }

}

// display the sum
console.log(`The sum is ${sum}.`);
Run Code
Output

Enter a number: 1
Enter a number: 2
Enter a number: hello
You entered a string.
Enter a number: 5
Enter a number: -2
The sum is 8. 
In the above program, the user enters a number. The while loop is used to print the total sum of positive numbers entered by the user.

Notice the use of the continue statement.

if (isNaN(number)) {
    continue;
}
When the user enters a non-numeric number/string, the continue statement skips the current iteration. Then the control flow of the program goes to the condition of while loop.
When the user enters a number less than 0, the loop terminates.
In the above program, isNaN() is used to check if the value entered by a user is a number or not.

To learn more about the while loop, visit JavaScript while loop.

continue with Nested Loop
When continue is used inside of two nested loops, continue skips the current iteration of the inner loop. For example,

// nested for loops

// first loop
for (let i = 1; i <= 3; i++) {

    // second loop
    for (let j = 1; j <= 3; j++) {
        if (j == 2) {
          continue;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}
Run Code
Output

i = 1, j = 1
i = 1, j = 3
i = 2, j = 1
i = 2, j = 3
i = 3, j = 1
i = 3, j = 3
In the above program, when the continue statement executes, it skips the current iteration in the inner loop and control flow of the program moves to the updateExpression of the inner loop.

Hence, the value of j = 2 is never displayed in the output.
 
 
 
 
*/
