/*
Javascript Object toLocaleString()
The JavaScript Object toLocaleString() method returns a string representing the object.

The syntax of the toLocaleString() method is:

obj.toLocaleString()
Here, obj is an object.

toLocaleString() Parameters
The toLocaleString() method does not take in any parameters by default.

Return value from toLocaleString()
Returns a string representing the object.
Some objects overriding toLocaleString:

Array: JavaScript Array toLocaleString()
Number: JavaScript Number toLocaleString()
Example: Using toLocaleString() method
// toLocaleString for Array
const arr = [4, 7, 10];
let string = arr.toLocaleString("fr", { style: "currency", currency: "EUR" });
console.log(string); // 4,00 €,7,00 €,10,00 €

// toLocaleString for Number
const num = 123456.789;
// India uses thousands/lakh/crore separators
console.log(num.toLocaleString("en-IN")); // 1,23,456.789

// toLocaleString for Date
const date = new Date(Date.now());
console.log(date); // Wed Jul 29 2020 15:37:00 GMT+0545 (Nepal Time)

let dateStr = date.toLocaleString("de");
console.log(dateStr); // 29.7.2020, 15:37:00
 
 
 
 
 
 
*/