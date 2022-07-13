/*
The JavaScript switch statement is used in decision making.

The switch statement evaluates an expression and executes the corresponding body that matches the expression's result.

The syntax of the switch statement is:

switch(variable/expression) {
    case value1:  
        // body of case 1
        break;

    case value2:  
        // body of case 2
        break;

    case valueN:
        // body of case N
        break;

    default:
        // body of default
}
The switch statement evaluates a variable/expression inside parentheses ().

If the result of the expression is equal to value1, its body is executed.
If the result of the expression is equal to value2, its body is executed.
This process goes on. If there is no matching case, the default body executes.
Notes:

The break statement is optional. If the break statement is encountered, the switch statement ends.
If the break statement is not used, the cases after the matching case are also executed.
The default clause is also optional.
Flowchart of switch Statement
Flowchart of JavaScript switch statement
Flowchart of JavaScript switch statement
Example 1: Simple Program Using switch Statement
// program using switch statement
let a = 2;

switch (a) {

    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`);
Run Code
Output

The value is two.
In the above program, an expression a = 2 is evaluated with a switch statement.

The expression's result is evaluated with case 1 which results in false.
Then the switch statement goes to the second case. Here, the expression's result matches with case 2. So The value is two is displayed.
The break statement terminates the block and control flow of the program jumps to outside of the switch block.
Example 2: Type Checking in switch Statement
// program using switch statement
let a = 1;

switch (a) {
    case "1":
        a = 1;
        break;
    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;

    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`);
Run Code
Output

The value is one.
In the above program, an expression a = 1 is evaluated with a switch statement.

In JavaScript, the switch statement checks the value strictly. So the expression's result does not match with case "1".
Then the switch statement goes to the second case. Here, the expressions's result matches with case 1. So The value is one is displayed.
The break statement terminates the block and control flow of the program jumps to outside of the switch block.
Note: In JavaScript, the switch statement checks the cases strictly (should be of the same data type) with the expression's result. Notice in the above example, 1 does not match with "1".

Let's write a program to make a simple calculator with the switch statement.

Example 3: Simple Calculator
// program for a simple calculator
let result;

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;
    case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;
    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}
Run Code
Output

Enter operator: +
Enter first number: 4
Enter second number: 5
4 + 5 = 9
In above program, the user is asked to enter either +, -, * or /, and two operands. Then, the switch statement executes cases based on the user input.

JavaScript switch With Multiple Case
In a JavaScript switch statement, cases can be grouped to share the same code.

Example 4: switch With Multiple Case
// multiple case switch program
let fruit = 'apple';
switch(fruit) {
    case 'apple':
    case 'mango':
    case 'pineapple':
        console.log(`${fruit} is a fruit.`);
        break;
    default:
        console.log(`${fruit} is not a fruit.`);
        break;
}
Run Code
Output

apple is a fruit.
In the above program, multiple cases are grouped. All the grouped cases share the same code.

If the value of the fruit variable had value mango or pineapple, the output would have been the same.
 
 
 
 
*/