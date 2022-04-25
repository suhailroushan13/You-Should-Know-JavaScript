// JavaScript is a Interpreted Language
// Where you can perform Calculations

var add = 10 + 12
console.log(add);
// Output :- 22

var sub = 10 - 12
console.log(sub);
// Output :- -2

var mul = 10 * 12
console.log(mul);
// Output :- 120

var div = 10 / 2
console.log(div);
// Output :- 5

// In Any Programming Language % is not Percenatge its Modules
// 10 % 2 = 0
// The Left ones after Dividing
// 10 % 3 = 1
// AAA AAA AAA A 
//  The Left one is 1 so 10%3 = 1
var mod = 10 % 2
console.log(mod);
// Output :- 0
//////////////////////////

console.log("===================================================");
console.log("DATA TYPES IN JAVASCRIPT");


// Data Types
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Object
// 7. Symbol
// 8. Function
// 9. Array
// 10. BigInt

let num = 11;  // Number
let str = "Hello"; // String
let bool = true; // Boolean
let undef = undefined; // Undefined
let nulll = null; // Null
let obj = {}; // obj
let sym = Symbol(); // Symbol
let func = function () { }; // Function
let arr = []; // Array
let bigInt = BigInt(10);    // BigInt

console.log(num, str, bool, undef, nulll, obj, sym, func, arr, bigInt);
// Output :- 11 Hello true undefined null [object Object] Symbol() function () [] BigInt(10)
console.log(typeof num);
// Output :- number
console.log(typeof str);
// Output :- string
console.log(typeof bool);
// Output :- boolean
console.log(typeof undef);
// Output :- undefined
console.log(typeof nulll);
// Output :- object   // First Issue in JavaScript is that it is Object for null
console.log(typeof obj);
// Output :- object
console.log(typeof sym);
// Output :- symbol
console.log(typeof func);
// Output :- function
console.log(typeof arr);
// Output :- object
console.log(typeof bigInt);
// Output :- bigint

console.log("\n\n\nNotice that typeof returned object for the null type.\n This is a known issue in JavaScript since its first release.");

 