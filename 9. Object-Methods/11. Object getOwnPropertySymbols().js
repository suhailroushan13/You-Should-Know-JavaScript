/*
JavaScript Object getOwnPropertySymbols()
The JavaScript Object.getOwnPropertySymbols() method returns an array of all symbol properties found in a given object.

The syntax of the getOwnPropertySymbols() method is:

Object.getOwnPropertySymbols(obj)
The getOwnPropertySymbols() method, being a static method, is called using the Object class name.

getOwnPropertySymbols() Parameters
The getOwnPropertySymbols() method takes in:

obj - The object whose symbol properties are to be returned.
Return value from getOwnPropertySymbols()
Returns an array of all symbol properties found directly upon the given object.
Note: Object.getOwnPropertySymbols() returns all symbol properties of the object while Object.getOwnPropertyNames() returns the string properties

Example: Using getOwnPropertySymbols()
let obj = {};
let a = Symbol("a");
let b = Symbol.for("b");

obj[a] = "localSymbolValue";
obj[b] = "globalSymbolValue";

// returns an array of symbol
let objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols.length); // 2
console.log(objectSymbols); // [Symbol(a), Symbol(b)]
console.log(objectSymbols[0]); // Symbol(a)
 
 
 
 
 
 
*/