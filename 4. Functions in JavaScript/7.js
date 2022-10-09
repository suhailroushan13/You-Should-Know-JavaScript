/*
JavaScript Hoisting
In this tutorial, you will learn about JavaScript hoisting with the help of examples.

Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration. For example,

// using test before declaring
console.log(test);   // undefined
var test;
Run Code
The above program works and the output will be undefined. The above program behaves as

// using test before declaring
var test;
console.log(test); // undefined
Run Code
Since the variable test is only declared and has no value, undefined value is assigned to it.

If you want to learn more about variables, visit JavaScript Variables.

Note: In hoisting, though it seems that the declaration has moved up in the program, the actual thing that happens is that the function and variable declarations are added to memory during the compile phase.

Variable Hoisting
In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.

For example,

// program to display value
a = 5;
console.log(a);
var a; // 5
Run Code
In the above example, variable a is used before declaring it. And the program works and displays the output 5. The program behaves as:

// program to display value
var a;
a = 5;
console.log(a); // 5
Run Code
However in JavaScript, initializations are not hoisted. For example,

// program to display value
console.log(a);
var a = 5;
Run Code
Output

undefined
The above program behaves as:

var a;
console.log(a);
a = 5;
Run Code
Only the declaration is moved to the memory in the compile phase. Hence, the value of variable a is undefined because a is printed without initializing it.

Also, when the variable is used inside the function, the variable is hoisted only to the top of the function. For example,

// program to display value
var a = 4;

function greet() {
    b = 'hello';
    console.log(b); // hello
    var b;
}

greet(); // hello
console.log(b);
Run Code
Output

hello
Uncaught ReferenceError: b is not defined
In the above example, variable b is hoisted to the top of the function greet and becomes a local variable. Hence b is only accessible inside the function. b does not become a global variable.

To learn more about local and global variables, visit JavaScript Variable Scope.

Note: In hoisting, the variable declaration is only accessible to the immediate scope.

If a variable is used with the let keyword, that variable is not hoisted. For example,

// program to display value
a = 5;
console.log(a);
let a; // error
Run Code
Output

Uncaught ReferenceError: Cannot access 'a' before initialization
While using let, the variable must be declared first.

Function Hoisting
A function can be called before declaring it. For example,

// program to print the text
greet();

function greet() {
    console.log('Hi, there.');
}
Run Code
Output

Hi, there
In the above program, the function greet is called before declaring it and the program shows the output. This is due to hoisting.

However, when a function is used as an expression, an error occurs because only declarations are hoisted. For example;

// program to print the text
greet();

let greet = function() {
    console.log('Hi, there.');
}
Run Code
Output

Uncaught ReferenceError: greet is not defined
If var was used in the above program, the error would be:

Uncaught TypeError: greet is not a function
Note: Generally, hoisting is not performed in other programming languages like Python, C, C++, Java.

Hoisting can cause undesirable outcomes in your program. And it is best to declare variables and functions first before using them and avoid hoisting.

In the case of variables, it is better to use let than var
 
 
 
 
*/