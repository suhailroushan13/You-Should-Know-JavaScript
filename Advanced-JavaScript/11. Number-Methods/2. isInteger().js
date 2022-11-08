console.log(Number.isInteger(123)); // true
console.log(Number.isInteger(3473.345)); // false
console.log(Number.isInteger("873")); // false
console.log(Number.isInteger(1e1)); // true

console.log(Number.isInteger(5.0)); // true; 5.0 == 5
console.log(Number.isInteger(0.5)); // false 0.5 

