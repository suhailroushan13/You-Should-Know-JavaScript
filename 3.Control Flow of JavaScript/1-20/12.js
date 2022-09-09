// JavaScript Continue Statement
// The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
//
// Syntax
// continue;
// continue [label];
// Parameter Values
// Parameter	Description
// label	Optional. Specifies the label name to continue to.
// Description
// The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
//
// When you use continue without a label, it terminates the current iteration of the innermost enclosing while, do-while, or for loop, and continues execution of the loop with the next iteration.
//
// When you use continue with a label, it terminates the current iteration of the specified labeled statement.
//
// Note: The continue statement has no effect if it is used outside a loop.
//
// Tip: Use the debugger statement to debug JavaScript code.
//
// Tip: Use the break statement to jump out of a loop.
//
// Tip: Use the return statement to stop the execution of a function.
//
// Tip: Use the throw statement to create a custom error.
//
// Example
// The following example uses continue to skip the value of 3:
//
// Example
// var text = "";
// var i;
// for (i = 0; i < 10; i++) {
//   if (i === 3) { continue; }
//   text += "The number is " + i + "<br>";
// }
// document.getElementById("demo").innerHTML = text;
// The result of the example will be:
//
// The number is 0
// The number is 1
// The number is 2
// The number is 4
// The number is 5
// The number is 6
// The number is 7
// The number is 8
// The number is 9
// The following example uses continue to skip the value of 3:
//
