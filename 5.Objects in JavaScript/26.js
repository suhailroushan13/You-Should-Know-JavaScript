function Person() {
}

// adding property 
Person.prototype.age = 23

const person1 = new Person();
Person.prototype.name = 'Peter';

console.log(person1.name); // John
console.log(person1.age); // 23