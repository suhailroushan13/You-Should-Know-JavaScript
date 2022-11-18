class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return console.log(`${this.name} and ${this.age}`);
  }
}

let person = new Student("Suhail", 20);
console.log(person);
person.greet();
