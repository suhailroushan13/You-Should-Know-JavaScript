/*
Javascript Object.isSealed()
The JavaScript Object.isSealed() method checks if an object is sealed.

The syntax of the isSealed() method is:

Object.isSealed(obj)
The isSealed() method, being a static method, is called using the Object class name.

isSealed() Parameters
The isSealed() method takes in:

obj - The object which should be checked.
Return value from isSealed()
A Boolean indicating whether or not the given object is sealed.
Note: An object is sealed if it is not extensible and if all its properties are non-configurable and therefore not removable (but not necessarily non-writable).

Example: Using isSealed()
// By default, objects are not sealed
let empty = {};
console.log(Object.isSealed(empty)); // false

// non-extensible empty objects are sealed
Object.preventExtensions(empty);
console.log(Object.isSealed(empty)); // true

// for non-empty objects, all properties have to be non-configurable
let obj = { value: "A B C" };
Object.preventExtensions(obj);
console.log(Object.isSealed(obj)); // false

// making all properties non-configurable
Object.defineProperty(obj, "value", { configurable: false });
console.log(Object.isSealed(obj)); // true

// Using seal()
let obj2 = { a: 1, b: 2, c: 3 };
Object.seal(obj2);
console.log(Object.isSealed(obj2)); // true
 
 
 
 
 
 
*/