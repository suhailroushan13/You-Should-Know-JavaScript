// Date Object
/*
4 Ways to create date object

1. new Date()
2. new Date(milliseconds)
3. new Date(date string)
4. new Date(year,months,day,hours,minutes,seconds,milliseconds) 
 
 
 
 
*/

let a1 = new Date();
console.log(a1); // 2022-11-30T04:35:41.520Z

let a2 = new Date(2000000000000);
console.log(a2); // 2033-05-18T03:33:20.000Z

let a3 = new Date("30 Nov 2022");
console.log(a3); // 2022-11-30T00:00:00.000Z

let a4 = new Date(2002, 01, 11, 10, 0, 0, 0);
console.log(a4); // 2002-02-11T10:00:00.000Z


let a5 = Date.now();
console.log(a5); // 1669783234656

let a6 = new Date(1669783234656); 
console.log(a6); // 2022-11-30T04:40:34.656Z





/*
JavaScript Date Methods
There are various methods available in JavaScript Date object.

Method	Description
now()	Returns the numeric value corresponding to the current time (the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC)
getFullYear()	Gets the year according to local time
getMonth()	Gets the month, from 0 to 11 according to local time
getDate()	Gets the day of the month (1–31) according to local time
getDay()	Gets the day of the week (0-6) according to local time
getHours()	Gets the hour from 0 to 23 according to local time
getMinutes	Gets the minute from 0 to 59 according to local time
getUTCDate()	Gets the day of the month (1–31) according to universal time
setFullYear()	Sets the full year according to local time
setMonth()	Sets the month according to local time
setDate()	Sets the day of the month according to local time
setUTCDate()	Sets the day of the month according to universal time
 
 
 
 
 
 
*/