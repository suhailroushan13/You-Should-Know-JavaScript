/*
JavaScript Object getOwnPropertyNames()
The JavaScript Object.getOwnPropertyNames() method returns an array of all properties found in a given object.

The syntax of the getOwnPropertyNames() method is:

Object.getOwnPropertyNames(obj)
The getOwnPropertyNames() method, being a static method, is called using the Object class name.

getOwnPropertyNames() Parameters
The getOwnPropertyNames() method takes in:

obj - The object whose enumerable and non-enumerable properties are to be returned.
Return value from getOwnPropertyNames()
Returns an array of strings that corresponds to the properties found directly in the given object.
Note: Object.getOwnPropertyNames() returns all own properties of the object while Object.keys() returns all enumerable own properties.

Example: Using getOwnPropertyNames()
// array object
let arr = ["a", "b", "c"];
console.log(Object.getOwnPropertyNames(arr)); // [ '0', '1', '2', 'length' ]

// array-like objects
let obj = { 65: "A", 66: "B", 67: "C" };
console.log(Object.getOwnPropertyNames(obj)); // [ '65', '66', '67' ]

// non-enumerable properties are also returned
let obj1 = Object.create(
  {},
  {
    getValue: {
      value: function () {
        return this.value;
      },
      enumerable: false,
    },
  }
);
obj1.value = 45;

console.log(Object.getOwnPropertyNames(obj1)); // [ 'getValue', 'value' ]

 
 
 
 
 
 
*/