/*
Javascript Object.fromEntries()
The JavaScript Object.fromEntries() method creates an object from a list of key-value pairs.

The syntax of the fromEntries() method is:

Object.fromEntries(iterable)
The fromEntries() method, being a static method, is called using the Object class name.

fromEntries() Parameters
The fromEntries() method takes in:

iterable - An iterable such as Array or Map or other objects implementing the iterable protocol.
Return value from fromEntries()
Returns a new object whose properties are given by the entries of the iterable.
Note: Object.fromEntries() performs the reverse of Object.entries().

Example: Using fromEntries()
// Converting Map to an Object
const map = new Map([
  ["a", 1],
  ["b", 2],
]);
const obj = Object.fromEntries(map);
console.log(obj); // { a: 1, b: 2 }

// Converting Map to an Object
const arr = [
  ["0", "a"],
  ["1", "b"],
  ["2", "c"],
];
const newObj = Object.fromEntries(arr);
console.log(newObj); // { '0': 'a', '1': 'b', '2': 'c' }
 
 
 
 
 
 
*/