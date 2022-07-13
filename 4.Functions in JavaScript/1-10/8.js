// Recursion

// A Function calling it self is known as Recusrion
// So always use recursion only when there is if condition
// So we can stop at particular condition
// Calling a Function inside the same function is known as Recursion
// Use recursion only in if condition so there will be no maximum reach of call stack;

function suhail() {
  console.log("Suhail");
  suhail(); // Here it will print suhail till it reaches maximum call stack
}

suhail();

// If you didn't used in a condition then you will get this error
/*
node:events:693
    function removeListener(type, listener) {
                           ^

RangeError: Maximum call stack size exceeded
 
*/
