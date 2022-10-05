/*
The JavaScript date object can be used to get year, month and day. You can display a timer on the webpage by the help of JavaScript date object.

You can use different Date constructors to create date object. It provides methods to get and set day, month, year, hour, minute and seconds.
Constructor
You can use 4 variant of Date constructor to create date object.

Date()
Date(milliseconds)
Date(dateString)
Date(year, month, day, hours, minutes, seconds, milliseconds)
JavaScript Date Methods
Let's see the list of JavaScript date methods with their description.

Methods	Description
getDate()	It returns the integer value between 1 and 31 that represents the day for the specified date on the basis of local time.
getDay()	It returns the integer value between 0 and 6 that represents the day of the week on the basis of local time.
getFullYears()	It returns the integer value that represents the year on the basis of local time.
getHours()	It returns the integer value between 0 and 23 that represents the hours on the basis of local time.
getMilliseconds()	It returns the integer value between 0 and 999 that represents the milliseconds on the basis of local time.
getMinutes()	It returns the integer value between 0 and 59 that represents the minutes on the basis of local time.
getMonth()	It returns the integer value between 0 and 11 that represents the month on the basis of local time.
getSeconds()	It returns the integer value between 0 and 60 that represents the seconds on the basis of local time.
getUTCDate()	It returns the integer value between 1 and 31 that represents the day for the specified date on the basis of universal time.
getUTCDay()	It returns the integer value between 0 and 6 that represents the day of the week on the basis of universal time.
getUTCFullYears()	It returns the integer value that represents the year on the basis of universal time.
getUTCHours()	It returns the integer value between 0 and 23 that represents the hours on the basis of universal time.
getUTCMinutes()	It returns the integer value between 0 and 59 that represents the minutes on the basis of universal time.
getUTCMonth()	It returns the integer value between 0 and 11 that represents the month on the basis of universal time.
getUTCSeconds()	It returns the integer value between 0 and 60 that represents the seconds on the basis of universal time.
setDate()	It sets the day value for the specified date on the basis of local time.
setDay()	It sets the particular day of the week on the basis of local time.
setFullYears()	It sets the year value for the specified date on the basis of local time.
setHours()	It sets the hour value for the specified date on the basis of local time.
setMilliseconds()	It sets the millisecond value for the specified date on the basis of local time.
setMinutes()	It sets the minute value for the specified date on the basis of local time.
setMonth()	It sets the month value for the specified date on the basis of local time.
setSeconds()	It sets the second value for the specified date on the basis of local time.
setUTCDate()	It sets the day value for the specified date on the basis of universal time.
setUTCDay()	It sets the particular day of the week on the basis of universal time.
setUTCFullYears()	It sets the year value for the specified date on the basis of universal time.
setUTCHours()	It sets the hour value for the specified date on the basis of universal time.
setUTCMilliseconds()	It sets the millisecond value for the specified date on the basis of universal time.
setUTCMinutes()	It sets the minute value for the specified date on the basis of universal time.
setUTCMonth()	It sets the month value for the specified date on the basis of universal time.
setUTCSeconds()	It sets the second value for the specified date on the basis of universal time.
toDateString()	It returns the date portion of a Date object.
toISOString()	It returns the date in the form ISO format string.
toJSON()	It returns a string representing the Date object. It also serializes the Date object during JSON serialization.
toString()	It returns the date in the form of string.
toTimeString()	It returns the time portion of a Date object.
toUTCString()	It converts the specified date in the form of string using UTC time zone.
valueOf()	It returns the primitive value of a Date object.
 
 
 
 
*/
// Dates in JavaScript

// The Date Object

// 1. Represents a point in time
// 2. Let you allow to perform basic operations with date and time

let one = new Date();
// console.log(one);
// Output : 2022-09-26T23:23:17.436Z
// In Browser : Tue Sep 27 2022 04:55:19 GMT+0530 (India Standard Time)

let two = new Date(1164441100645);
// console.log(two);
// Output : 2006-11-25T07:51:40.645Z
// Browser : Sat Nov 25 2006 13:21:40 GMT+0530 (India Standard Time)

let three = new Date("2002-02-11,01:30");
// console.log(three);
// document.write(three) // Console.log of Browser

// Date Methods

let now = new Date();
// document.write(now)

// TO
// toDateString

// GET                      // SET
/*
1. getDate()           setDate()
2. getFullYear()       setFullYear()
3. getMonth()          setMonth()
5. getHours()          setHours()
6. getDay()              ----- 
7. getMinutes()        setMinutes()
8. getSeconds()        setSeconds()
9. getMilliSecondd()   setMilliseconds()

*/

document.write("<br/> <b>TO DATE STRING</b>");
document.write("<br/>");
document.write("1. toDateString()===>", now.toDateString()); // Tue Sep 27 2022
document.write("<br/>");
document.write("<br/> <b>GET METHODS</b>");
document.write("<br/> 2. getDate()===>", now.getDate()); // 27
document.write("<br/> 3. getFullYear()===>", now.getFullYear()); // 2022
document.write("<br/> 4. getMonth()===>", now.getMonth()); // it shows 8 because it starts from 0
document.write("<br/> 5. getDay()===>", now.getDay()); // 2 is Tuesday , 0 is Sunday , 1 is Monday
document.write("<br/> 6. getHours()===>", now.getHours()); // it shows 5 because its 5:30AM Now
document.write("<br/> 7. getMinutes()===>", now.getMinutes()); // it shows 30 because its 5:30 Now
document.write("<br/> 8. getSeconds()===>", now.getSeconds()); // it shows 1 to 59 seconds
document.write("<br/> 9. getMilliseconds()===>", now.getMilliseconds()); // it shows returns the milliseconds (0 to 999) of a date.
document.write("<br/>");

document.write("<br/> <b>SET METHODS</b>");
document.write("<br/> 10. setDate()===>");
now.setDate(11);
document.write(now);
document.write("<br/> 11. setFullYear()===>");
now.setFullYear(2002);
document.write(now);
document.write("<br/> 12. setMonth()===>");
now.setMonth(1);
document.write(now);
document.write("<br/> 13. setHours()===>");
now.setHours(22);
document.write(now);
document.write("<br/> 14. setMinutes()===>");
now.setMinutes(30);
document.write(now);
document.write("<br/> 15. setSeconds()===>");
now.setSeconds(1);
document.write(now);
document.write("<br/> 16. setMilliseconds()===>");
now.setMilliseconds(01);
document.write(now);

// 4 ways to create date

// Date();
// Date(milliseconds);
// Date(dateString);
// Date(year, month, day, hours, minutes, seconds, milliseconds);

let today = new Date();
var birthday = new Date("December 17, 1995 03:24:00");
var birthday = new Date("1995-12-17T03:24:00");
var birthday = new Date(1995, 11, 17); // the month is 0-indexed
var birthday = new Date(1995, 11, 17, 3, 24, 0);
var birthday = new Date(628021800000); // passing epoch timestamp
// document.write(birthday);

document.write("<br/>");
document.write("<br/><b> Things you can add</b>");
document.write("<br/>");
document.write(`let now1 = new Date().toLocaleString("en-us", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "Asia/Kolkata",
  weekday: "long",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: true,
  dayPeriod: "short",
//   day: "2-digit",
//   year: "2-digit",
});
`);

let now1 = new Date().toLocaleString("en-us", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "Asia/Kolkata",
  weekday: "long",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: true,
  dayPeriod: "short",
  //   day: "2-digit",
  //   year: "2-digit",
});
document.write("<br/>");

document.write("<br/>");

document.write("<br/>");

// console.log(now);
document.write(now1);
