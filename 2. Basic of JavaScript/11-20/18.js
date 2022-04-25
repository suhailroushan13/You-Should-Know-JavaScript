console.log("1. Remove Spaces from the string Using trim()");

// How to Remove Spaces From a String
let firstName = '   John ';

// Using trim() method
// First get the length of the string
// trim() method removes the spaces from the beginning and end of the string
console.log(firstName);

console.log(firstName.length); // 6
console.log("Using trim() method");; 
let final = firstName.trim();// Removed All Spaced from the string
console.log(final.length); // 4
console.log(final); // John

console.log('---------------------------------------------------------');

console.log("2. Lower Case or Normal Case To ---->> TO UPPER CASE");

let letters = "abcd";
let name = "Suhail";

console.log(letters.toUpperCase()); // ABCD
console.log(name.toUpperCase()); // SUHAIL
console.log("---------------------------------------------------------");

console.log("3. Upper Case or Normal Case To ---->> TO LOWER CASE");
let vowels = "ABCD";
let name1 = "Suhail";

console.log(vowels.toLowerCase()); // abcd
console.log(name1.toLowerCase()); // suhail

console.log("---------------------------------------------------------");




