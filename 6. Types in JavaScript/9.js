//  To Empty an Array 

//  Declaring from var and let
console.log("Using Var");

var arr1 = [1, 2, 3, 4]
console.log(arr1); // 1 2 3 4 

// Making it Empty

arr1 = [];
console.log(arr1); // Empty

console.log("Using Let");

let arr2 = [5, 6, 7, 8]
console.log(arr2); // 5 6 7 8

// Making it Empty 

arr2 = [];
console.log(arr2); // Empty


// Declaring Const
// In Const you cannot you reassign and redeclare

// It means you cannot do arr = []
console.log("Using Cont");

const arr3 = [11, 12, 13, 14]
console.log(arr3); // 11 12 13 14
console.log(arr3.length);

//  Making it empty by .length = 0

arr3.length = 0;
console.log(arr3); // Empty










