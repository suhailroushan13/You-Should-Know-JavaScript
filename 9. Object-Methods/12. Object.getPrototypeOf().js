/*
Javascript Object.getPrototypeOf()
The JavaScript Object.getPrototypeOf() method returns the prototype of the specified object.

The syntax of the getPrototypeOf() method is:

Object.getPrototypeOf(obj)
The getPrototypeOf() method, being a static method, is called using the Object class name.

getPrototypeOf() Parameters
The getPrototypeOf() method takes in:

obj - The object whose prototype is to be returned.
Return value from getPrototypeOf()
Returns prototype of the given object.
Returns null If there are no inherited properties.
Example: Using Object.getPrototypeOf()
let proto = {};
let obj = Object.create(proto);

console.log(Object.getPrototypeOf(obj) === proto); // true

console.log(Object.getPrototypeOf("JavaScript"));

// function
let func1 = function () {};

// creating object from function
let object1 = Object.create(func1);

console.log(Object.getPrototypeOf(func1) === Object.getPrototypeOf(object1)); // false

// Object.create() creates object with given object as prototype
console.log(func1 === Object.getPrototypeOf(object1)); // true
 
 
 
 
 
 
*/