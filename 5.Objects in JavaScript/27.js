function Person() {
    this.name = 'John'
}

// adding a prototype
Person.prototype.num = 23;

// creating object
const person = new Person();

// accessing prototype property
console.log(person);

console.log(person.__proto__);   // { age: 24 }