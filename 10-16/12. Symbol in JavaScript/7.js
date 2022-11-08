// Symbol Methods
// There are various methods available with Symbol.

// Method	Description
// for()	Searches for existing symbols
// keyFor()	Returns a shared symbol key from the global symbol registry.
// toSource()	Returns a string containing the source of the Symbol object
// toString()	Returns a string containing the description of the Symbol
// valueOf()	Returns the primitive value of the Symbol object.
// Example: Symbol Methods
// get symbol by name
let sym = Symbol.for('hello');
let sym1 = Symbol.for('id');

// get name by symbol
console.log( Symbol.keyFor(sym) ); // hello
console.log( Symbol.keyFor(sym1) ); // id