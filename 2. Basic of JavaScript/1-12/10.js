// Reassign the VAR in VARIABLE_NAME to a new value. ✅
var a = "apple";
a = "ball";
console.log(a);  // ball // No Error ✅

var a = "apple";
var a = "applesss";
console.log(a); // applesss // No Error ✅
// ------------------------------------------------------------------
// Reassign the LET in VARIABLE_
let b = "boat";
 b = "banana";
console.log(b); // banana // No Error ✅

// let b = "boat";
// let b = "banana";
// console.log(b); // banana // Error - Cannot redeclare b ❌

//------------------------------------------------------------------

// const c = 3.14;
// c = 45;
// console.log(c); // 3.14 // Error - Cannot re-assign c ❌

// const c = 3.1457;
// const c = 65;
// console.log(c); // 3.1457 // Error - Cannot re-assign c ❌