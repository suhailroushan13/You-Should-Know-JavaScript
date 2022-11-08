/*
JavaScript Object getOwnPropertyDescriptor()
The JavaScript Object.getOwnPropertyDescriptor() method returns a property descriptor for an object's own property.

The syntax of the getOwnPropertyDescriptor() method is:

Object.getOwnPropertyDescriptor(obj, prop)
The getOwnPropertyDescriptor() method, being a static method, is called using the Object class name.

getOwnPropertyDescriptor() Parameters
The getOwnPropertyDescriptor() method takes in:

obj - The object in which to look for the property.
prop - The name or Symbol of the property whose description is to be retrieved.
Return value from getOwnPropertyDescriptor()
Returns a property descriptor of the given property on the object.
Returns undefined if the property does not exist on the object.
Example: Using getOwnPropertyDescriptor()
let obj = {
  x: 10,
  get number() {
    return this.x;
  },
};

let xValue = Object.getOwnPropertyDescriptor(obj, "x");
console.log(xValue);

let value = Object.getOwnPropertyDescriptor(obj, "number");
console.log(value);

Object.defineProperty(obj, "name", {
  value: "JavaScript",
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(obj, "name"));
 
 
 
 
 
 
*/