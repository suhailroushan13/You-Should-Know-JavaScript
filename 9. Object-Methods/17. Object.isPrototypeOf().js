/*
Javascript Object.isPrototypeOf()
The JavaScript Object.isPrototypeOf() method checks if an object exists in another object's prototype chain.

The syntax of the isPrototypeOf() method is:

prototypeObj.isPrototypeOf(object)
Here, prototypeObj is an object.

isPrototypeOf() Parameters
The isPrototypeOf() method takes in:

object - The object whose prototype chain will be searched.
Return value from isPrototypeOf()
Returns a Boolean indicating whether the calling object lies in the prototype chain of the specified object.
Note: isPrototypeOf() differs from instanceof operator as it checks the object prototype chain against prototypeObj not prototypeObj.prototype.

Example: Using Object.isPrototypeOf()
let obj = new Object();
console.log(Object.prototype.isPrototypeOf(obj)); // true
console.log(Function.prototype.isPrototypeOf(obj.toString)); // true

console.log(Array.prototype.isPrototypeOf([2, 4, 8])); // true

// define object
let Animal = {
  makeSound() {
    console.log(`${this.name}, ${this.sound}!`);
  },
};

// new object
function Dog(name) {
  this.name = name;
  this.sound = "bark";

  // setting prototype using setPrototypeOf()
  Object.setPrototypeOf(this, Animal);
}

dog1 = new Dog("Marcus");

console.log(Animal.isPrototypeOf(dog1)); // true
 
 
 
 
 
 
*/