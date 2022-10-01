// Date in JavaScript

let x = new Date();
console.log(x);
// Output
// 2021-07-22T06:56:00.000Z in Node JS its in utc iso string

// Output
// Mon Sep 12 2022 04:21:33 GMT+0530 (India Standard Time) in Browser

// Parameters in Date
// Maximum 7 Parameters
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
let y = new Date(2002, 01, 01, 01, 01, 01, 01);
console.log(y);
// Output

// Minimum 2 Parameter which is year
// new Date(year)
let z = new Date(2002, 01);
console.log(z);

let a = new Date("October 13, 2014 11:13:00");
let b = new Date("October 13, 2014");
let c = new Date("2014-11-13");
let d = new Date(1410692980000);
console.log(a);

// Start Date of the Date
let e = new Date(0);
console.log(e);
// Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)

