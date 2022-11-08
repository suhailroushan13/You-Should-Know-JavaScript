const obj = { name: "Adam", age: 20, location: "Nepal" };
console.log(Object.entries(obj)); // [ [ 'name', 'Adam' ], [ 'age', 20 ], [ 'location', 'Nepal' ] ]

// Array-like objects
const obj1 = { 0: "A", 1: "B", 2: "C" };
console.log(Object.entries(obj1)); // [ [ '0', 'A' ], [ '1', 'B' ], [ '2', 'C' ] ]

// random key ordering
const obj2 = { 42: "a", 22: "b", 71: "c" };
// [ [ '22', 'b' ], [ '42', 'a' ], [ '71', 'c' ] ] -> arranged in numerical order of keys
console.log(Object.entries(obj2));

// string -> from ES2015+, non objects are coerced to object
const string = "code";
console.log(Object.entries(string)); // [ [ '0', 'c' ], [ '1', 'o' ], [ '2', 'd' ], [ '3', 'e' ] ]

// primite types have no properties
console.log(Object.entries(55)); // []

// Iterating through key-value of objects
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}
