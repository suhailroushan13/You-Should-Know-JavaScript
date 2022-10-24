// JavaScript Array values()

// The values() method returns a new Array
// Iterator object that contains the values for
// each index in the array.

let languages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// returns an Array Iterator object that contain values
let iteratorObject = languages.values();

// looping through iterator
for (let value of iteratorObject) {
  console.log(value);
}

// Output:
// JavaScript
// Java
// C++

// Notes: The value() method does not change the original array.


// console.log(iteratorObject.next().value); 

let arrayWithHole = ["A", "B", , "C"];

// returns 'undefined' as a value for empty slot
let iteratorObject1 = arrayWithHole.values();

// looping through iterator
// for (let value of iteratorObject1) {
//   console.log(value);
// }

// Output;

// A;
// B;
// undefined;
// C;

// Example 3: More About Array Iterator Object
// The array iterator object does not store values rather it stores 
// the address of the array used. For example:

let fruits = ["Apple", "Banana", "Grapes"];

// returns values of each index in the fruits array
let iteratorObject2 = fruits.values();

// accessing the value of index 0 in the array
// console.log(iteratorObject2.next().value); // Apple

// changing the value of index 1
fruits[1] = "Cherry";

// accessing the value of index 1 in the array
// console.log(iteratorObject2.next().value); // Cherry 
// Output

// Apple
// Cherry