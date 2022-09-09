// JavaScript Switch Statement
// The switch statement is used to perform different actions based on different conditions.
//
// Syntax
// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }
// Parameter Values
// Parameter	Description
// expression	Required. The expression to be evaluated and matched
// x	Required. The value to compare
// y	Required. The value to compare
// default	Optional. The default code block to be executed if no case matches
// Description
// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.
// Tip: Use the debugger statement to debug JavaScript code.
//
// Tip: Use the break statement to "jump out" of a switch.
//
// Tip: Use the continue statement to skip the current iteration in a loop.
//
// Tip: Use the return statement to stop the execution of a function.
//

// Tip: Use the throw statement to create a custom error.
//
// Example
// The following example uses the switch statement to select one of many code blocks to be executed:
//
// Example
// var text;
// var fruits = "Banana";
// switch(fruits) {
//   case "Banana":
//     text = "Banana is good!";
//     break;
//   case "Orange":
//     text = "I am not a fan of orange.";
//     break;
//   case "Apple":
//     text = "How you like them apples?";
//     break;
//   default:
//     text = "I have never heard of that fruit...";
// }
// document.getElementById("demo").innerHTML = text;
// The result of the example will be:
//
// Banana is good!
// The following example uses the switch statement to select one of many code blocks to be executed:
//
