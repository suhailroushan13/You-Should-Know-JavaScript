// Class Inheritance

class Person {
  constructor(name, age) {
    this.name = "Suhail";
    this.age = 20;
  }
}

class Person1 extends Person {
  constructor(isAlive) {
    super(isAlive);
    this.isAlive = true;
  }
}

let p = new Person1();

console.log(p); // Person1 { name: 'Suhail', age: 20 }

console.log(p.name, p.age,p.isAlive);
