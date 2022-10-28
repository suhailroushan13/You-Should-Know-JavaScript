/*
Javascript Object.setPrototypeOf()
The JavaScript Object.setPrototypeOf() method sets the prototype of a specified object to another object or null.

The syntax of the setPrototypeOf() method is:

Object.setPrototypeOf(obj, prototype)
The setPrototypeOf() method, being a static method, is called using the Object class name.

setPrototypeOf() Parameters
The setPrototypeOf() method takes in:

obj - The object which is to have its prototype set.
prototype - The object's new prototype (an object or null).
Return value from setPrototypeOf()
Returns the specified object.
Note: Changing the [[Prototype]] of an object is currently a very slow operation in every browser and JavaScript engine.

Example 1: Using Object.setPrototypeOf()
let Animal = {
  makeSound() {
    console.log(`${this.name}, ${this.sound}!`);
  },
};
// defining new Dog object
function Dog(name) {
  this.name = name;
  this.sound = "bark";
  // setting prototype to Animal
  Object.setPrototypeOf(this, Animal);
}

dog1 = new Dog("Marcus");

dog1.makeSound(); // Marcus, bark!
 
 
 
 
 
 
*/