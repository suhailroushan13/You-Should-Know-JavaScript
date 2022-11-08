// Symbol

let a = "Hello";
let b = "Hello";

console.log(a == b); // true
console.log(a === b); // true

let symbolA = Symbol("Hello");
let symbolB = Symbol("Hello");
console.log(symbolA == symbolB); // false
console.log(symbolA === symbolB); // false
console.log(typeof symbolA, typeof symbolB); // symbol symbol

let person = {
  name: "Suhail",
  age: 20,
  isAlive: true,
  number: 9618211626,
};
console.log(person);
person.school = "Nalanda";

console.log(person);

for (let i in person) {
  console.log(i, person[i]);
}

let college = Symbol("college");
 college = Symbol("collegesss");

person[college] = "Chaitanya";
person[college] = "Chaitanyasss";

console.log(person);
