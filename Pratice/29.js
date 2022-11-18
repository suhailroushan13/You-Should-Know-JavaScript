// Classes

// function Person() {
//   this.name = "Suhail";
//   this.age = 24;
// }

// let person = new Person();
// console.log(person);

// A class may only have one constructor
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let person = new Person("Roushan", 23);
console.log(person);

let person2 = new Person("Ali", 20);
console.log(person2.name, person2.age);


