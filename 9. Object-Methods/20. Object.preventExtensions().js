/*
Javascript Object.preventExtensions()
The JavaScript Object.preventExtensions() method prevents new properties from being added to an object.

The syntax of the preventExtensions() method is:

Object.preventExtensions(obj)
The preventExtensions() method, being a static method, is called using the Object class name.

preventExtensions() Parameters
The preventExtensions() method takes in:

obj - The object which should be made non-extensible.
Return value from preventExtensions()
Returns the object being made non-extensible.
Notes:

The properties of a non-extensible object, in general, may still be deleted.
Attempting to add new properties to a non-extensible object will fail, either silently or by throwing a TypeError in strict mode.
Properties can still be added to the non-extensible object's prototype.
Example: Using preventExtensions()
let obj = {};
// by default, objects are extensible
console.log(Object.isExtensible(obj)); // true

let obj1 = Object.preventExtensions(obj);
console.log(obj == obj1); // true -> Returns the same object

console.log(Object.isExtensible(obj)); // false

// TypeError: Cannot define property newProp, object is not extensible
Object.defineProperty(obj, "newProp", {
  value: 123456,
});
 
 
 
 
 
 
*/