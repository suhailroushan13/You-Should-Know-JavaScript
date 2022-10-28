// Array objects
const arr = ["JavaScript", "Python", "C"];
console.log(Object.values(arr)); // [ 'JavaScript', 'Python', 'C' ]

// Array-like objects
const obj = { 65: "A", 66: "B", 67: "C" };
console.log(Object.values(obj)); // [ 'A', 'B', 'C' ]

// random key ordering
const obj1 = { 42: "a", 22: "b", 71: "c" };
console.log(Object.values(obj1)); // ['b', 'a', 'c']  -> Arranged in key's numerical order

// string -> from ES2015+, non objects are coerced to object
const string = "code";
console.log(Object.values(string)); // [ 'c', 'o', 'd', 'e' ]
