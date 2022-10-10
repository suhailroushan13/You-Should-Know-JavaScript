// JavaScript Array sort()

// The sort() method sorts the items of an
// array in a specific order (ascending or descending).
// All undefined elements are sorted to the end of the array.
let city = ["California", "Barcelona", "Paris", "Kathmandu"];

// sort the city array in ascending order
let sortedArray = city.sort();
console.log(sortedArray);
console.log(city);

// Output: [ 'Barcelona', 'California', 'Kathmandu', 'Paris' ]

const arr = [10, 21, 13, 14, 51, 61, 71, 18, 19, 100];
console.log(arr.sort());
// [1, 10, 2, 3, 4,5,  6, 7, 8, 9]
// It added all 1 numbers first

// To arrange in Ascending to Descending order

console.log(arr.sort((a, b) => a - b));
// It changes the Original Array

// To Arrange in Desceding to Ascending Order

console.log(arr.sort((a, b) => b - a));
