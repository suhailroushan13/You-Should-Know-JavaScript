// Difference Between forEach() and Map()

// https://suhailroushan.medium.com/every-developer-should-know-foreach-vs-map-in-javascript-6a55df54c06a
// 
console.log("Difference Between forEach() and Map()");

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1st Difference
/*
The method’s return
As you can already see, one of 
the main differences between forEach and map in
 Javascript is the return of each method.

The forEach() method returns undefined,
 while map() returns a new array with the 
 transformed elements.
 */
// let newArray = arr.forEach((x) => x * x);
// console.log(newArray);
// let newArray1 = arr.map((x) => x * x);
// console.log(newArray1);
// console.log(arr.forEach((element) => element * element));
// console.log(arr.map((element) => element * element));
/*
undefined
[
   1,  4,  9, 16,  25,
  36, 49, 64, 81, 100
]
undefined
[
   1,  4,  9, 16,  25,
  36, 49, 64, 81, 100
]
 
*/

//2nd Difference
// Ability to chain with other methods

// const newArrayfor = arr
//   .forEach((element) => element + element)
//   .filter((x) => x > 9);
// console.log(newArrayfor); // undefined

// const newArrayMap = arr
//   .map((element) => element + element)
//   .filter((x) => x > 9);
// console.log(newArrayMap); // [ 10, 12, 14, 16, 18, 20 ]

//3rd Difference
/*
Mutability
Mutability means ” Capacity or ability to change.”

A mutable object is an object whose state can be changed after 
its creation. Regarding mutability, how do the foreach() and map() 
methods in Javascript behave?
 
forEach() does not modify the array in which it is called. (However, the callback method can do this).

map() does not modify the array in which it is called (although the callback method, if invoked, can do that).
 
*/

// let numbers = [5, 4, 3, 2, 1];
// numbers.forEach((x) => console.log(x * x)); // 5 4 3 2 1
// console.log(numbers);

// // For Returning

// let data = numbers.forEach((x) => x);
// console.log(data); // undefined

// numbers.forEach((x) => x); // undefined

// // console.log(numbers.forEach((x) => x ** x));

// // numbers.forEach((x) => console.log(x * x)); //

// // console.log(numbers.map((x) => x ** x));
// // numbers.map((x) => console.log(x * x));

