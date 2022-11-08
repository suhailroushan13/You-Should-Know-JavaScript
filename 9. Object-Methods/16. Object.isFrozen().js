/*
Javascript Object.isFrozen()
The JavaScript Object.isFrozen() checks if an object is frozen.

A frozen object can no longer be changed. Freezing an object prevents:

New properties from being added to the object.
Existing properties to be removed from the object.
Changing the enumerability, configurability, or writability of existing properties.
Changing values of the existing object properties and prototype.
The syntax of the isFrozen() method is:

Object.isFrozen(obj)
The isFrozen() method, being a static method, is called using the Object class name.

isFrozen() Parameters
The isFrozen() method takes in:

obj - The object which should be checked.
Return value from isFrozen()
Returns a Boolean indicating whether or not the given object is frozen.
Example: Using isFrozen()
// new objects are extensible, so not frozen
console.log(Object.isFrozen({ name: "JavaScript" })); // false

// preventing extensions only does not make frozen
// property is still configurable
let obj = { a: 1 };
Object.preventExtensions(obj);
console.log(Object.isFrozen(obj)); // false

// deleting property
delete obj.a;
console.log(Object.isFrozen(obj)); // true -> vacuously frozen

let newObj = { b: 2 };
// make non-extensible
Object.preventExtensions(newObj);
// make non-writable
Object.defineProperty(newObj, "b", {
  writable: false,
});
// properties are still configurable
console.log(Object.isFrozen(newObj)); // false

// using freeze()
let frozen = { 65: "A" };

Object.freeze(frozen);
console.log(Object.isFrozen(frozen)); // true
 
 
 
 
 
 
*/