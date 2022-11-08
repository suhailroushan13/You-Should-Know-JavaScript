// JavaScript Break Statement
// The break statement "jumps out" of a loop.
//
// The break statement can also be used to jump out of a switch statement.
//
// Syntax
// break;
// break [label];
// Parameter Values
// Parameter	Description
// label	Optional. Specifies the label name to break out of.
// Description
// The break statement "jumps out" of a loop.
//
// This statement can also be used to jump out of a switch statement.
//
// When you use break without a label, it terminates the innermost enclosing while, do-while, for, or switch immediately and transfers program control to the following statement.
//
// When you use break with a label, it terminates the specified labeled statement.
//
// Note: The break statement has no effect if it is used outside a loop or a switch.
//
// Tip: Use the debugger statement to debug JavaScript code.
//
// Tip: Use the continue statement to skip the current iteration in a loop.
//
// Tip: Use the return statement to stop the execution of a function.
//
// Tip: Use the throw statement to create a custom error.
//
// Example
// The following example uses break to jump out of a loop:
//
// Example
// var text = "";
// var i;
// for (i = 0; i < 10; i++) {
//   if (i === 3) { break; }
//   text += "The number is " + i + "<br>";
// }
// document.getElementById("demo").innerHTML = text;
// The result of the example will be:
//
// The number is 0
// The number is 1
// The number is 2
// The following example uses break to jump out of a switch:
//
// Example
// var text = "";
// var i;
// for (i = 0; i < 10; i++) {
//   switch(i) {
//     case 3:
//       text += "The number is 3";
//       break;
//     case 5:
//       text += "The number is 5";
//       break;
//     case 7:
//       text += "The number is 7";
//       break;
//   }
// }
// document.getElementById("demo").innerHTML = text;
// The result of the example will be:
//
// The number is 3The number is 5The number is 7
// The following example uses break to jump out of a labeled block:
//
// Example
// var text = "";
// var i;
// loop1:
// for (i = 0; i < 5; i++) {
//   if (i === 1) {
//     break loop1;
//   }
//   text += "The number is " + i + "<br>";
// }
// document.getElementById("demo").innerHTML = text;
// The result of the example will be:
//
// The number is 0
// The following example uses break to jump out of a labeled block:
//
