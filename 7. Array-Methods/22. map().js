// Array Map() Method

/*
The map method returns a new array by applying 
the callback function on each element of an array

it creates a new array with the results of calling 
a function for every array element. 
Hence map() method relies on immutability. 
Also, map() does not execute/call the
function for those array elements without values.
*/

// Using Map
// 1. The returning value
// Using ForEach

let numbers = [5, 4, 3, 2, 1];
// It uses for Displaying
// not for Returning Array
numbers.forEach((x) => console.log(x)); // 5 4 3 2 1
// It does not change the Original Array

// For Returning
console.log(numbers.map((x) => x)); // [5,4,3,2,1]
let data = numbers.map((x) => x);
console.log(data); // [5,4,3,2,1]

// 2. Ability to chain other methods

// Using ForEach
// As it returns array you pass the value to other array methods
console.log(numbers.map((x) => x * x).fitter((x) => x > 9)); // undefined

// 3. Mutability

//Mutability means
// Capacity or ability to change."
//A mutable object is an object whose state can be changed after its creation.
// Regarding mutability,
// how do the foreach( ) and map( ) methods in Javascript behave
// Using map
// The map() method returns an entirely new array with transformed
//elements and the same amount of data. In the case of forEach(),
//even if it returns undefined, it will mutate the original array with the callback.

console.log(numbers);
numbers.map((ele, index) => console.log((numbers[index] = ele * ele)));
console.log(numbers);

/*
[ 5, 4, 3, 2, 1 ]
25
16
9
4
1
[ 25, 16, 9, 4, 1 ]
*/

//4. Performance Speed
const myAwesomeArray = [1, 2, 3, 4, 5];
const start = performance.now();
myAwesomeArray.map((x) => x + x * 10000000000);
const end = performance.now();
console.log(end - start);

// 0.01813400536775589
