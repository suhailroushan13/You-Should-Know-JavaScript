/*
 JavaScript Arrays
In this tutorial, you will learn about JavaScript arrays with the help of examples.

An array is an object that can store multiple values at once. For example,

const words = ['hello', 'world', 'welcome'];
Here, words is an array. The array is storing 3 values.

Create an Array
You can create an array using two ways:

1. Using an array literal

The easiest way to create an array is by using an array literal []. For example,

const array1 = ["eat", "sleep"];
2. Using the new keyword

You can also create an array using JavaScript's new keyword.

const array2 = new Array("eat", "sleep");
In both of the above examples, we have created an array having two elements.

Note: It is recommended to use array literal to create an array.

Here are more examples of arrays:

// empty array
const myList = [ ];

// array of numbers
const numberArray = [ 2, 4, 6, 8];

// array of strings
const stringArray = [ 'eat', 'work', 'sleep'];

// array with mixed data types
const newData = ['work', 'exercise', 1, true];
You can also store arrays, functions and other objects inside an array. For example,

const newData = [
    {'task1': 'exercise'},
    [1, 2 ,3],
    function hello() { console.log('hello')}
];
Access Elements of an Array
You can access elements of an array using indices (0, 1, 2 …). For example,

const myArray = ['h', 'e', 'l', 'l', 'o'];

// first element
console.log(myArray[0]);  // "h"

// second element
console.log(myArray[1]); // "e"
Run Code
Array indexing in JavaScript
Array indexing in JavaScript
Note: Array's index starts with 0, not 1.

Add an Element to an Array
You can use the built-in method push() and unshift() to add elements to an array.

The push() method adds an element at the end of the array. For example,

let dailyActivities = ['eat', 'sleep'];

// add an element at the end
dailyActivities.push('exercise');

console.log(dailyActivities); //  ['eat', 'sleep', 'exercise']
Run Code
The unshift() method adds an element at the beginning of the array. For example,

let dailyActivities = ['eat', 'sleep'];

//add an element at the start
dailyActivities.unshift('work'); 

console.log(dailyActivities); // ['work', 'eat', 'sleep']
Run Code
Change the Elements of an Array
You can also add elements or change the elements by accessing the index value.

let dailyActivities = [ 'eat', 'sleep'];

// this will add the new element 'exercise' at the 2 index
dailyActivities[2] = 'exercise';

console.log(dailyActivities); // ['eat', 'sleep', 'exercise']
Run Code
Suppose, an array has two elements. If you try to add an element at index 3 (fourth element), the third element will be undefined. For example,

let dailyActivities = [ 'eat', 'sleep'];

// this will add the new element 'exercise' at the 3 index
dailyActivities[3] = 'exercise';

console.log(dailyActivities); // ["eat", "sleep", undefined, "exercise"]
Run Code
Basically, if you try to add elements to high indices, the indices in between will have undefined value.

Remove an Element from an Array
You can use the pop() method to remove the last element from an array. The pop() method also returns the returned value. For example,

let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];

// remove the last element
dailyActivities.pop();
console.log(dailyActivities); // ['work', 'eat', 'sleep']

// remove the last element from ['work', 'eat', 'sleep']
const removedElement = dailyActivities.pop();

//get removed element
console.log(removedElement); // 'sleep'
console.log(dailyActivities);  // ['work', 'eat']
Run Code
If you need to remove the first element, you can use the shift() method. The shift() method removes the first element and also returns the removed element. For example,

let dailyActivities = ['work', 'eat', 'sleep'];

// remove the first element
dailyActivities.shift();

console.log(dailyActivities); // ['eat', 'sleep']

 
 
 
 
 
 
*/