// Array.from()

// The from() method creates a new array from any array-like or iterable object.

// creating a new array from string

// Uses of Array.from ()
/*
1.String to Array "12142" ==> ["1","2","1","4","2"]
  
The from() method creates a new array from any array-like or iterable object.
Parameters: This method accepts three parameters as mentioned above and described below:

object: This parameter holds that object that will convert into an array

mapFunction: This parameter is optional used to call on each item of the array.

thisValue: This parameter is optional, it holds the context to be passed as this to
be used while executing the mapFunction. If the context is passed, it will be used
like this for each invocation of the callback function, otherwise undefined is used as default.

Return value: It returns a new Array instance whose elements are same as the given array. 
In the case of a string, every alphabet of the string is converted to an element of the new array 
instance. Below example illustrate the Array from() method in JavaScript:


Example
*/
const arr = "12142";
console.log(Array.from(arr, Number)); // [ '1', '2', '1', '4', '2' ]

// 2nd Parameter takes map
// console.log(Array.from(arr, (x) => Number(x)));
