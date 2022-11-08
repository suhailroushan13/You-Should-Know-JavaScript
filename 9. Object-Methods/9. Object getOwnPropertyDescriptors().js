/*
JavaScript Object getOwnPropertyDescriptors()
The JavaScript Object.getOwnPropertyDescriptors() method returns all own property descriptors of a given object.

The syntax of the getOwnPropertyDescriptors() method is:

Object.getOwnPropertyDescriptors(obj)
The getOwnPropertyDescriptors() method, being a static method, is called using the Object class name.

getOwnPropertyDescriptors() Parameters
The getOwnPropertyDescriptors() method takes in:

obj - The object for which to get all own property descriptors.
Return value from getOwnPropertyDescriptors()
Returns an object containing all own property descriptors of an object
Example: Using getOwnPropertyDescriptors()
let obj = {
  x: 10,
  get number() {
    return this.x;
  },
};

let value = Object.getOwnPropertyDescriptors(obj);
console.log(value);

// getOwnPropertyDescriptors() can be used for shallow clone
let cloneObj = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);

console.log(cloneObj); // { x: 10, number: [Getter] }
Run Code
Output

{
  x: { value: 10, writable: true, enumerable: true, configurable: true },
  number: {
    get: [Function: get number],
    set: undefined,
    enumerable: true,
    configurable: true
  }
}
{ x: 10, number: [Getter] }
 
 
 
 
 
 
*/