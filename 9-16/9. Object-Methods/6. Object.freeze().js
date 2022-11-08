/*
JavaScript Object.freeze()
The JavaScript Object.freeze() method freezes an object.

A frozen object can no longer be changed. Freezing an object prevents:

New properties from being added to the object.
Existing properties to be removed from the object.
Changing the enumerability, configurability, or writability of existing properties.
Changing values of the existing object properties and prototype.
The syntax of the freeze() method is:

Object.freeze(obj)
The freeze() method, being a static method, is called using the Object class name.

freeze() Parameters
The freeze() method takes in:

obj - The object to freeze.
Return value from freeze()
The object that was passed to the function.
Notes:

Any attempts to add or remove from properties set of frozen objects will fail either silently or throw TypeError (mostly when in strict mode).
Objects sealed with Object.seal() can have their existing properties changed while Object.freeze() makes the existing properties immutable.
Example: Using freeze()
let obj = {
  prop: function () {},
  foo: "bar",
};

let o = Object.freeze(obj);

console.log(o == obj); // True -> Returns the same object
console.log(Object.isFrozen(obj)); // true

// changes will fail silently
obj.foo = "bar1";
console.log(obj.foo); // bar

// does not add silently
obj.new_foo = "bar";
console.log(obj.new_foo); // undefined

// Following will also throw error
// Object.setPrototypeOf(obj, { x: 20 })
 
 
 
 
 
 
*/