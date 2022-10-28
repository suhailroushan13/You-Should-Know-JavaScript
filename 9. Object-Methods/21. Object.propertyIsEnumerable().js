/*
Javascript Object.propertyIsEnumerable()
The JavaScript Object.propertyIsEnumerable() method checks if the given property is enumerable and is the object's own property.

The syntax of the propertyIsEnumerable() method is:

obj.propertyIsEnumerable(prop)
Here, obj is an object.

propertyIsEnumerable() Parameters
The propertyIsEnumerable() method takes in:

prop - The name of the property to test.
Return value from propertyIsEnumerable()
Returns a Boolean indicating whether the specified property is enumerable and is the object's own property.
Note: Every object has a propertyIsEnumerable method. This method can determine whether the specified property in an object can be enumerated by a for...in loop.

Example: Using Object.propertyIsEnumerable()
let arr = [1, 2, 3, 4];
console.log(arr.propertyIsEnumerable(0)); // true
console.log(arr.propertyIsEnumerable("length")); // false

console.log(Math.propertyIsEnumerable("random")); // false

let obj = {
  prop: "Hello World!",
};
console.log(obj.propertyIsEnumerable("prop")); // true
// property does not exist
console.log(obj.propertyIsEnumerable("random")); // false
 
 
 
 
 
 
*/