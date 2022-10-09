const obj = {};
console.log(obj);
// Output:
// {} Empty Object

const person = {
  firstName: "Steve",
  lastName: "Jobs",
  age: 56,
  isMarried: true,
  address: {
    city: "San Francisco",
    state: "California",
    country: "USA",
  },
  skills: ["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB"],
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person,person.getFullName());
console.log(typeof person); // object


// Accessing Object Properties
// 1. Dot Notation
// 2. Bracket Notation

// Dot Notation
console.log(person.firstName);
console.log(person.lastName);

// Bracket Notation
console.log(person["firstName"]);
console.log(person["lastName"]);


// Modify Object Properties
// 1. Dot Notation
// 2. Bracket Notation

// Dot Notation
person.firstName = "Bill";
person.lastName = "Gates";

// Bracket Notation
person["firstName"] = "Bill";
person["lastName"] = "Gates";

console.log(person);


// Add New Properties
// 1. Dot Notation
// 2. Bracket Notation

// Dot Notation
person.firstName = "Bill";
person.lastName = "Gates";
person.age = 65;

// Bracket Notation
person["firstName"] = "Bill";
person["lastName"] = "Gates";
person["age"] = 65;

console.log(person);














// person.life = true
// console.log(person.life);
// delete person.life
// console.log(person.life);




