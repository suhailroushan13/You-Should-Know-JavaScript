/*
JavaScript for loop
The syntax of the for loop is:


for (initialExpression; condition; updateExpression) {
    for loop body
}
Here,

The initialExpression initializes and/or declares variables and executes only once.
The condition is evaluated.
If the condition is false, the for loop is terminated.
If the condition is true, the block of code inside of the for loop is executed.
The updateExpression updates the value of initialExpression when the condition is true.
The condition is evaluated again. This process continues until the condition is false.
To learn more about the conditions, visit JavaScript Comparison and Logical Operators.

Working of for loop in JavaScript with flowchart
Flowchart of JavaScript for loop
Example 1: Display a Text Five Times
program to display text 5 times
const n = 5;

looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
    console.log(`I love JavaScript.`);
}
Run Code
Output

I love JavaScript.
I love JavaScript.
I love JavaScript.
I love JavaScript.
I love JavaScript.
Here is how this program works.

Iteration	Variable	Condition: i <= n	Action
1st	i = 1
n = 5	true	I love JavaScript. is printed.
i is increased to 2.
2nd	i = 2
n = 5	true	I love JavaScript. is printed.
i is increased to 3.
3rd	i = 3
n = 5	true	I love JavaScript. is printed.
i is increased to 4.
4th	i = 4
n = 5	true	I love JavaScript. is printed.
i is increased to 5.
5th	i = 5
n = 5	true	I love JavaScript. is printed.
i is increased to 6.
6th	i = 6
n = 5	false	The loop is terminated.
Example 2: Display Numbers from 1 to 5
program to display numbers from 1 to 5
const n = 5;

looping from i = 1 to 5
in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    console.log(i);     // printing the value of i
}
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
n = 5	true	1 is printed.
i is increased to 2.
2nd	i = 2
n = 5	true	2 is printed.
i is increased to 3.
3rd	i = 3
n = 5	true	3 is printed.
i is increased to 4.
4th	i = 4
n = 5	true	4 is printed.
i is increased to 5.
5th	i = 5
n = 5	true	5 is printed.
i is increased to 6.
6th	i = 6
n = 5	false	The loop is terminated.
Example 3: Display Sum of n Natural Numbers
program to display the sum of natural numbers
let sum = 0;
const n = 100

looping from i = 1 to n
in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    sum += i;  // sum = sum + i
}

console.log('sum:', sum);
Run Code
Output

sum: 5050
Here, the value of sum is 0 initially. Then, a for loop is iterated from i = 1 to 100. In each iteration, i is added to sum and its value is increased by 1.

When i becomes 101, the test condition is false and sum will be equal to 0 + 1 + 2 + ... + 100.

The above program to add sum of natural numbers can also be written as

program to display the sum of n natural numbers
let sum = 0;
const n = 100;

looping from i = n to 1
in each iteration, i is decreased by 1
for(let i = n; i >= 1; i-- ) {
    adding i to sum in each iteration
    sum += i; // sum = sum + i
}

console.log('sum:',sum);
Run Code
This program also gives the same output as the Example 3. You can accomplish the same task in many different ways in programming; programming is all about logic.

Although both ways are correct, you should try to make your code more readable.

JavaScript Infinite for loop
If the test condition in a for loop is always true, it runs forever (until memory is full). For example,

infinite for loop
for(let i = 1; i > 0; i++) {
    block of code
}
In the above program, the condition is always true which will then run the code for infinite times.

In the next tutorial, you will learn about while and do...while loop.



*/