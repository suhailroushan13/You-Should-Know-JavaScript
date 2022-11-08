// Symbol Properties
// Properties	Description
// asyncIterator	Returns the default AsyncIterator for an object
// hasInstance	Determines if a constructor object recognizes an object as its instance
// isConcatSpreadable	Indicates if an object should be flattened to its array elements
// iterator	Returns the default iterator for an object
// match	Matches against a string
// matchAll	Returns an iterator that yields matches of the regular expression against a string
// replace	Replaces matched substrings of a string
// search	Returns the index within a string that matches the regular expression
// split	Splits a string at the indices that match a regular expression
// species	Creates derived objects
// toPrimitive	Converts an object to a primitive value
// toStringTag	Gives the default description of an object
// description	Returns a string containing the description of the symbol
// Example: Symbol Properties Example
const x = Symbol('hey');

// description property
console.log(x.description); // hey

const stringArray = ['a', 'b', 'c'];
const numberArray = [1, 2, 3];

// isConcatSpreadable property
numberArray[Symbol.isConcatSpreadable] = false;

let result = stringArray.concat(numberArray);
console.log(result); // ["a", "b", "c", [1, 2, 3]]