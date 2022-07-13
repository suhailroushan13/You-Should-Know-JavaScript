/*
In this tutorial, you will learn about the break statement with the help of examples.

The break statement is used to terminate the loop immediately when it is encountered.

The syntax of the break statement is:

break [label];
Note: label is optional and rarely used.

Working of JavaScript break Statement
Working of break statement in JavaScript
Working of JavaScript break Statement
Example 1: break with for Loop
// program to print the value of i
for (let i = 1; i <= 5; i++) {
    // break condition     
    if (i == 3) {
        break;
    }
    console.log(i);
}
Run Code
Output

1
2
In the above program, the for loop is used to print the value of i in each iteration. The break statement is used as:

if(i == 3) {
    break;
}
This means, when i is equal to 3, the break statement terminates the loop. Hence, the output doesn't include values greater than or equal to 3.

Note: The break statement is almost always used with decision-making statements. To learn more, visit JavaScript if...else Statement.

To learn more about for loop, visit JavaScript for loop.

Example 2: break with while Loop
// program to find the sum of positive numbers
// if the user enters a negative numbers, break ends the loop
// the negative number entered is not added to sum

let sum = 0, number;

while(true) {

    // take input again if the number is positive
    number = parseInt(prompt('Enter a number: '));

    // break condition
    if(number < 0) {
        break;
    }

    // add all positive numbers
    sum += number;

}

// display the sum
console.log(`The sum is ${sum}.`);
Run Code
Output

Enter a number: 1
Enter a number: 2
Enter a number: 3
Enter a number: -5
The sum is 6. 
In the above program, the user enters a number. The while loop is used to print the total sum of numbers entered by the user.

Here the break statement is used as:

if(number < 0) {
    break;
}
When the user enters a negative number, here -5, the break statement terminates the loop and the control flow of the program goes outside the loop.

Thus, the while loop continues until the user enters a negative number.

To learn more about while loop, visit JavaScript while loop.

break with Nested Loop
When break is used inside of two nested loops, break terminates the inner loop. For example,

// nested for loops

// first loop
for (let i = 1; i <= 3; i++) {

    // second loop
    for (let j = 1; j <= 3; j++) {
        if (i == 2) {
          break;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}
Run Code
Output

i = 1, j = 1
i = 1, j = 2
i = 1, j = 3
i = 3, j = 1
i = 3, j = 2
i = 3, j = 3
In the above program, when i == 2, break statement executes. It terminates the inner loop and control flow of the program moves to the outer loop.

Hence, the value of i = 2 is never displayed in the output.

JavaScript Labeled break
When using nested loops, you can also terminate the outer loop with a label statement.

However labeled break is rarely used in JavaScript because this makes the code harder to read and understand.

If you want to learn more about the labeled break statements, visit labeled break.

The break statement is also used with switch statements. To learn more, visit JavaScript switch statement.
 
 
 
 
*/