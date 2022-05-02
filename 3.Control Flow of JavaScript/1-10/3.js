/*
JavaScript while Loop
The syntax of the while loop is:

while (condition) {
    body of loop
}
Here,

A while loop evaluates the condition inside the parenthesis ().
If the condition evaluates to true, the code inside the while loop is executed.
The condition is evaluated again.
This process continues until the condition is false.
When the condition evaluates to false, the loop stops.
To learn more about the conditions, visit JavaScript Comparison and Logical Operators.

Flowchart of while Loop
Flowchart of while loop in JavaScript
Flowchart of JavaScript while loop
Example 1: Display Numbers from 1 to 5
program to display numbers from 1 to 5
initialize the variable

*/
let i = 1, n = 5;

// while loop from i = 1 to 5
while (i <= n) {
    console.log(i);
    i += 1;
}

/*
Run Code
Output

1
2
3
4
5
Here is how this program works.

Iteration	Variable	Condition: i <= n	Action
1st	i = 1
n = 5	true	1 is printed. i is increased to 2.
2nd	i = 2
n = 5	true	2 is printed. i is increased to 3.
3rd	i = 3
n = 5	true	3 is printed. i is increased to 4.
4th	i = 4
n = 5	true	4 is printed. i is increased to 5.
5th	i = 5
n = 5	true	5 is printed. i is increased to 6.
6th	i = 6
n = 5	false	The loop is terminated
Example 2: Sum of Positive Numbers Only
program to find the sum of positive numbers
if the user enters a negative numbers, the loop ends
the negative number entered is not added to sum

let sum = 0;

take input from the user
let number = parseInt(prompt('Enter a number: '));

while(number >= 0) {

    add all positive numbers
    sum += number;

    take input again if the number is positive
    number = parseInt(prompt('Enter a number: '));
}

display the sum
console.log(`The sum is ${sum}.`);
Run Code
Output

Enter a number: 2
Enter a number: 5
Enter a number: 7
Enter a number: 0
Enter a number: -3
The sum is 14.
In the above program, the user is prompted to enter a number.

Here, parseInt() is used because prompt() takes input from the user as a string. And when numeric strings are added, it behaves as a string. For example, '2' + '3' = '23'. So parseInt() converts a numeric string to number.

The while loop continues until the user enters a negative number. During each iteration, the number entered by the user is added to the sum variable.

When the user enters a negative number, the loop terminates. Finally, the total sum is displayed.

JavaScript do...while Loop
The syntax of do...while loop is:

do {
    body of loop
} while(condition)
Here,

The body of the loop is executed at first. Then the condition is evaluated.
If the condition evaluates to true, the body of the loop inside the do statement is executed again.
The condition is evaluated once again.
If the condition evaluates to true, the body of the loop inside the do statement is executed again.
This process continues until the condition evaluates to false. Then the loop stops.
Note: do...while loop is similar to the while loop. The only difference is that in do…while loop, the body of loop is executed at least once.

Flowchart of do...while Loop
Flowchart of do...while loop in JavaScript
Flowchart of JavaScript do...while loop
Let's see the working of do...while loop.

Example 3: Display Numbers from 1 to 5
program to display numbers
let i = 1;
const n = 5;

do...while loop from 1 to 5
do {
    console.log(i);
    i++;
} while(i <= n);
Run Code
Output

1
2
3
4
5
Here is how this program works.

Iteration	Variable	Condition: i <= n	Action
 	i = 1
n = 5	not checked	1 is printed. i is increased to 2.
1st	i = 2
n = 5	true	2 is printed. i is increased to 3.
2nd	i = 3
n = 5	true	3 is printed. i is increased to 4.
3rd	i = 4
n = 5	true	4 is printed. i is increased to 5.
4th	i = 5
n = 5	true	5 is printed. i is increased to 6.
5th	i = 6
n = 5	false	The loop is terminated
Example 4: Sum of Positive Numbers
to find the sum of positive numbers
if the user enters negative number, the loop terminates
negative number is not added to sum

let sum = 0;
let number = 0;

do {
    sum += number;
    number = parseInt(prompt('Enter a number: '));
} while(number >= 0)

console.log(`The sum is ${sum}.`);
Run Code
Output 1

Enter a number: 2
Enter a number: 4
Enter a number: -500
The sum is 6.
Here, the do...while loop continues until the user enters a negative number. When the number is negative, the loop terminates; the negative number is not added to the sum variable.

Output 2

Enter a number: -80
The sum is 0.
The body of the do...while loop runs only once if the user enters a negative number.

Infinite while Loop
If the condition of a loop is always true, the loop runs for infinite times (until the memory is full). For example,

// infinite while loop
while(true){
    // body of loop
}
Here is an example of an infinite do...while loop.

// infinite do...while loop
const count = 1;
do {
   // body of loop
} while(count == 1)
In the above programs, the condition is always true. Hence, the loop body will run for infinite times.

for Vs while Loop
A for loop is usually used when the number of iterations is known. For example,

// this loop is iterated 5 times
for (let i = 1; i <=5; ++i) {
   // body of loop
}
And while and do...while loops are usually used when the number of iterations are unknown. For example,

while (condition) {
    // body of loop
}



*/