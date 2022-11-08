/*
JavaScript Object.isExtensible()
The JavaScript Object.isExtensible() method checks if an object is extensible i.e. new properties can be added to it.

The syntax of the isExtensible() method is:

Object.isExtensible(obj)
The isExtensible() method, being a static method, is called using the Object class name.

isExtensible() Parameters
The isExtensible() method takes in:

obj - The object which should be checked.
Return value from isExtensible()
Returns a Boolean indicating whether or not the given object is extensible.
Note: An object can be marked as non-extensible using Object.preventExtensions(), Object.seal(), or Object.freeze().

Example: Using isExtensible()
// New objects are extensible.
let empty = {};
console.log(Object.isExtensible(empty)); // true

Object.preventExtensions(empty);
console.log(Object.isExtensible(empty)); // false

// Sealed objects are by definition non-extensible.
let sealed = Object.seal({});
console.log(Object.isExtensible(sealed)); // false

// Frozen objects are also by definition non-extensible.
let frozen = Object.freeze({});
console.log(Object.isExtensible(frozen)); // false
 
 
 
 
 
 
*/