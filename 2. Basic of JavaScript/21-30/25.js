// undefined
// If you didnt declare a value to a variable for let var const, it will be undefined.
let result;
console.log(typeof result);
result = 34;
console.log(typeof result, result);

var home;
console.log(typeof home);
home = "Hello";
console.log(typeof home, home);

console.log("----------------------------------");


// nulll

let empty = null;
console.log(empty)
console.log(typeof empty); // object
empty = "Hello"; // String
console.log(typeof empty, empty); // string


//BigInt

let myNumber = BigInt(11);
let num = 11n
// Writing n in last is known as BigInt
// You cant add other data types with BigInt

console.log(myNumber);
console.log(typeof myNumber);
console.log(num + myNumber);