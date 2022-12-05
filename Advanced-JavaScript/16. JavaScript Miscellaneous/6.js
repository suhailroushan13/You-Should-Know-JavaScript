// In JavaScript, this keyword refers to the object where it is called.
// 1. this Inside Global Scope
// When this is used alone, this refers to the global object (window object in browsers). For example,

// let a = this;
// console.log(a); // Window {}

// this.name = "Sarah";
// console.log(window.name); // Sarah // Works in Only Browser

// 2. this Inside a Function

function greet() {
  // this inside function
  // this refers to the global object
  //   console.log(this);
}

// greet(); // Window {}

class Person {
  constructor() {
    this.name = "Suhail";
    //   console.log(this);
  }
}

// let person = new Person();
// console.log(person);

// this Inside an Object

const obj = {
  name: "Suhail",
  age: 20,
  isAlive: true,
  address: {
    zip: 500045,
    area: "Hyderabad",
  },
  fun() {
    return `${this.name} ${this.age}`;
  },
};

let v1 = obj.fun();
// console.log(v1);

// Arrow functions do not have their own this. When you use this inside an arrow function, this refers to its parent scope object. For example,

let person = {
  name: "Suhail",
  age: 20,
  isAlive: true,
  bankBalance() {
    let s1 = () => {
     return console.log(`My Name is ${this.name} and My Age is ${this.age}`);
    };
   s1();
  },
};

person.bankBalance()