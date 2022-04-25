// Increment and decrement Operator

// 1. Increment (Increase the value by 1)
// Increment has PREFIX  and POSTFIX 
// PREFIX: ++x  // Pre Means First
// POSTFIX: x++  // Post Means at The End or Last

// PREFIX:++x
x = 2;
console.log(++x,"Prefix changes the value rapidly with +1");  // 3 
// RAPID CHANGE OF VALUE
// In Line No.8 The Value of 2 is Increase By 1 (++x = x + 1)

// POSTFIX:x++
x = 5;
console.log(x++,"It changed the value +1... but it will show from next time when it is used ");  // 5 // While using the Postfix the value of x is not changed
console.log(x,"Here the value has got +1 ");  // 6 // But While Using Next Time the value of x is Increase By 1
// DELAY CHANGE OF VALUE By 1 Time
// It Delays by 1 Line
// After the Using of First Time ..in the Second Time the value of x is Increase By 1

console.log("--------------------------------------------");

// 2. Decrement (Decrease the value by 1)
// Decrement has PREFIX  and POSTFIX
// PREFIX: --x
// POSTFIX: x--


// PREFIX:--x
x = 5;
console.log(--x, "Prefix changes the value rapidly with -1");  // 4
// RAPID CHANGE OF VALUE
// In Line No.8 The Value of 5 is Decrease By 1 (--x = x - 1)


// POSTFIX:x--
x = 5;
console.log(x--, "It changed the value -1... but it will show from next time when it is used ");  // 5 // While using the Postfix the value of x is not changed
console.log(x, "Here the value has got -1 ");  // 4 // But While Using Next Time the value of x is Decrease By 1
// DELAY CHANGE OF VALUE By 1 Time
// It Delays by 1 Line
// After the Using of First Time ..in the Second Time the value of x is Decrease By 1


console.log("--------------------------------------------");

// 3. Exponentiation Operator
// Exponentiation Operator is used to raise the value of a number to the power of another number.
// It is also known as power operator.
// It is also known as exponentiation operator.

let base = 2;
let exponent = 3;
let result = base ** exponent;
console.log(result);  // 8 // 2 power 3


