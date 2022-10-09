/*
Working of JavaScript Arrays
In JavaScript, an array is an object. And, the indices of arrays are objects keys.

Since arrays are objects, the array elements are stored by reference. Hence, when an array value is copied, any change in the copied array will also reflect in the original array. For example,

let arr = ['h', 'e'];
let arr1 = arr;
arr1.push('l');

console.log(arr); // ["h", "e", "l"]
console.log(arr1); // ["h", "e", "l"]
Run Code
You can also store values by passing a named key in an array. For example,

let arr = ['h', 'e'];
arr.name = 'John';

console.log(arr); // ["h", "e"]
console.log(arr.name); // "John"
console.log(arr['name']); // "John"
Run Code
Array indexing in JavaScript
Array indexing in JavaScript
However, it is not recommended to store values by passing arbitrary names in an array.

Hence in JavaScript, you should use an array if values are in ordered collection. Otherwise it's better to use object with { }. 
 
 
 
 
 
 
*/

