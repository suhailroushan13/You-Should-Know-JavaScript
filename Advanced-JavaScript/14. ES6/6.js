// Destructuring Assignments;

//  Before ES6
const person = {
  name: "Suhail",
  age: 20,
  isAlive: true,
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.isAlive);

// In ES6

let { name, age, isAlive } = person;
console.log(name);
console.log(age);
console.log(isAlive);

// In Arrays

const arrValue = ["One", "Two", "Three"];
const [x, y, z] = arrValue;
console.log(x, y, z);

// Different Name While Destructuring Variables

const person1 = {
  name1: "Suhail",
  age1: 20,
};

// let { name1, age2 } = person1;
// console.log(name1); // Suhail
// console.log(age2); // Error Undefined

// To use Different Name
// let { name1, age1: age2 } = person1;
// console.log(name1); // Suhail
// console.log(age2); // 20

// Default Values in Objects

const person2 = {
  name2: "Suhail",
};

let { name2, age2 = 30, address = "Hyderabad" } = person2;
console.log(name2, age2, address);
console.log(person2);

console.log(person2.address); // Undefined

// Default Values in Arrays

let arrs = [5];
let [a, b = 10] = arrs;
console.log(arrs, b, a);

// Swapping Variables
// In this example, two variables are swapped using the destructuring assignment syntax.

let c = 5;
let d = 7;

console.log(c);
console.log(d);

[c, d] = [d, c];

console.log(c);
console.log(d);

// Skip Items
// You can skip unwanted items in an array without assigning them to local variables. For example,

const arrValue1 = ["one", "two", "three"];

// destructuring assignment in arrays
const [f, , g] = arrValue1;

console.log(f); // one
console.log(g); // three

// Assign Remaining Elements to a Single Variable
// You can assign the remaining elements of an array to a variable using the spread syntax .... For example,

const arrValue3 = ["one", "two", "three", "four"];

// destructuring assignment in arrays
// assigning remaining elements to y
const [x1, ...y1] = arrValue3;

console.log(x1); // one
console.log(y1); // ["two", "three", "four"]

const person22 = {
  name11: "Sara",
  age: 25,
  gender: "female",
};

// destructuring assignment
// assigning remaining properties to rest
let { name11, ...rest } = person22;

console.log(name); // Sara
console.log(rest); // {age: 25, gender: "female"}

// Nested Destructuring Assignment
// You can perform nested destructuring for array elements. For example,

// nested array elements
const arrValue11 = ["one", ["two", "three"]];

// nested destructuring assignment in arrays
const [x11, [y11, z11]] = arrValue11;

console.log(x11); // one
console.log(y11); // two
console.log(z11); // three
// Here, the variable y and z are assigned nested elements two and three.

// In order to execute the nested destructuring assignment, you have to enclose the variables in an array structure (by enclosing inside []).

// You can also perform nested destructuring for object properties. For example,

const person11 = {
  name111: "Jack",
  age: 26,
  hobbies: {
    read: true,
    playGame: true,
  },
};
// nested destructuring
const {
  name111,
  hobbies: { read, playGame },
  isAlive1 = true,
} = person11;

console.log(name111); // Jack
console.log(read); // true
console.log(playGame); // true
console.log(isAlive1);

console.log(person11);
