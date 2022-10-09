// Array forEach() Method

/*
The forEach() method calls a function for each element in an array.
The forEach() method is not executed for empty elements.

Always remember that it doesn’t return anything 
and if you try to get the value it will be undefined.
 
*/

// Using ForEach
// 1. The returning value
// Using ForEach

let numbers = [5, 4, 3, 2, 1];
// It uses for Displaying
// not for Returning Array
numbers.forEach((x) => console.log(x)); // 5 4 3 2 1
// It does not change the Original Array

// For Returning
console.log(numbers.forEach((x) => x)); // undefined
let data = numbers.forEach((x) => x);
console.log(data); // undefined

// 2. Ability to chain other methods

// Using ForEach
// As it returns undefiend you cannot change to other array methods
// console.log(numbers.forEach((x) => x * x).fitter((x) => x > 9)); // undefined

// 3. Mutability

//Mutability means
// Capacity or ability to change."
//A mutable object is an object whose state can be changed after its creation.
// Regarding mutability,
// how do the foreach( ) and map( ) methods in Javascript behave
// Using For Fach
//forEach() does not modify the array in which it is called,this).( However ,the callback method can do

console.log(numbers);
numbers.forEach((ele, index) => console.log((numbers[index] = ele * ele)));
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
myAwesomeArray.forEach((x) => x + x * 10000000000);
const end = performance.now();
console.log(end - start);
// 0.08336000144481659
