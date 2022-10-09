// To Display The Output We Use Console.log
console.log("Hello World");
console.log('Hello World');
// ----------------------------------------------------
// //Double Quotations and Single Quotations are Same both can be Used
// ----------------------------------------------------
// //Comments in JavaScript

// // Single Line Comment Starts with //

// // This is a Single Line Comment

/*
This is a Multi Line Comment
This is a Multi Line Comment
This is a Multi Line Comment
This is a Multi Line Comment
*/
// -


// To Run This File
// node fileName.js
// node 1.js




// / Differnet Uses of Console logs

// let x = 1;
// console.log(x); // 1

// let y = 2,z=3,q=5;
// console.log(y,z,q);//2 3 5

// How to Convert an Output in an Object just to show it
// It will not change its data type
// Just Add {} in Console
// let x = 1
// let y = 2
// let z = 3
// console.log( {x, y, z} )

// %s is for string
// %d is for number
// console.log("%s is %d years old.", "John", 29)

// Variations of logs
// There are a few variations of logs. There is the most widely used console.log(). But there is also:

// console.log("Console Log");
// console.info("Console Info");
// console.debug("Console Debug");
// console.warn("Console Warn");
// console.error("Console Error");
// console.count();

// for(i=0; i<10; i++){
// console.count();
//
//   }

// console.time();
// setTimeout(() => {
//   console.log("This Message Printed After 5 Seconds");
//   console.timeEnd();
// }, 5000);

// Output:
// This Message Printed After 5 Seconds
// default: 5.007s

// console.time()

// setTimeout(() => {
//   console.timeEnd()
// }, 5000)

// setTimeout(() => {
//   console.timeLog()
// }, 2000)

// ----------------------------------------
// console.log('I am not in a group')

// console.group()
// console.log('I am in a group')
// console.log('I am also in a group')
// console.groupEnd()

// console.log('I am not in a group')

// Output:
// I am not in a group
//   I am in a group
//   I am also in a group
// I am not in a 

// -----------------------------------


// let devices = [
//     {
//       name: 'iPhone',
//       brand: 'Apple'
//     },
//     {
//       name: 'Galaxy',
//       brand: 'Samsung'
//     }
//   ]

//   console.table(devices)

// ┌─────────┬──────────┬───────────┐
// │ (index) │   name   │   brand   │
// ├─────────┼──────────┼───────────┤
// │    0    │ 'iPhone' │  'Apple'  │
// │    1    │ 'Galaxy' │ 'Samsung' │
// └─────────┴──────────┴───────────┘

// %c is for Styling // Visble in Browser Console
// console.log("%c This is yellow text on a blue background.", "color:yellow; background-color:blue")



// --------------------------------------------------------
// Just add console.clear() to the top of your code and you'll have a fresh console every time you refresh. ?
// Just don't add it to the bottom of your code, lol.
// console.clear()

// console.assert
// This method is used to check if a condition is true. If it's not, it will throw an error.

// console.assert(/** Condition **/, /** Error message **/);


// console.assert(1 === 1, "1 is equal to 1"); // No error
// console.assert(0 === [], "0 is equal to []"); // Error in the console


const {log:say} = console;

say("Hey Suhail");

var bol = console.log
bol("hello")