// Array can be Declaring Using 2 Ways
// 1.Array Literals 
const arr1 = [1, 2, 3, 4, 5, 6]
// 2. Using New Array 
const arr2 = new Array(1, 2, 3, 4, 5, 6)

// To Check if the given variable is array or not
// 1. Using Array.isArray()

console.log(Array.isArray(arr1)); // true

const arr3 = [{}]
console.log(Array.isArray(arr3)); // true

const arr4 = {}
console.log(Array.isArray(arr4)); // false


// Comparing 2 same values arrays

console.log(arr1 == arr2); // Even though values are same but differnt way to create array

const arr5 = [1, 2, 3, 4, 5, 6]

console.log(arr1 == arr5); // Even though values are same and same way to create array but both are not equal to it


// Adding a element at first postion using ==> unshift()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.unshift(0)
console.log(numbers); //[0, 1, 2, 3, 4,5, 6, 7, 8, 9,10]

// Adding a element a last postition using ==> push()

numbers.push(11)
console.log(numbers); //[0, 1, 2, 3, 4,5, 6, 7, 8, 9,10,11]


// Removing a element from first position using shift()
numbers.shift()
console.log(numbers); //[1, 2, 3, 4,5, 6, 7, 8, 9,10,11]

// Removing a element from last poisiting using pop()

numbers.pop()
console.log(numbers);//[1, 2, 3, 4,5, 6, 7, 8, 9,10]





