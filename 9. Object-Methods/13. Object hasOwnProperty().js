/*
JavaScript Object hasOwnProperty()
The JavaScript Object hasOwnProperty() method checks if the object has the given property as its own property.

The syntax of the hasOwnProperty() method is:

obj.hasOwnProperty(prop)
Here, obj is an object.

hasOwnProperty() Parameters
The hasOwnProperty() method takes in:

prop - The String name or Symbol of the property to test.
Return value from hasOwnProperty()
Returns a Boolean indicating whether or not the object has the specified property as its own property.
Notes:

Unlike the in operator, this method does not check for a property in the object's prototype chain.
hasOwnProperty returns true even if the value of the property is null or undefined.
Example: Using hasOwnProperty()
const obj = {};
obj.property1 = 42;

console.log(obj.hasOwnProperty("property1")); // true

console.log(obj.hasOwnProperty("property2")); // false

// Inherited properties return false
console.log(obj.hasOwnProperty("toString")); // false
 
 
 
 
 
 
*/