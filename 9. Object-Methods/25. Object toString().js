/*
Javascript Object toString()
The JavaScript Object toString() method returns the object as a string.

The syntax of the toString() method is:

obj.toString()
Here, obj is an object.

toString() Parameters
The toString() method does not take any parameters.

Return value from toString()
Returns a string representing the object.
Note: Every object descended from Object inherits toString() and if not overridden, it returns "[object <type>]".

Example: Using toString()
// built-in objects
let num = 10;
// number takes in optional radix argument (numeral base)
console.log(num.toString(2)); // "1010" in binary

console.log(new Date().toString()); // Thu Aug 06 2020 12:08:44 GMT+0545 (Nepal Time)

// overriding default toString(), custom object
function Dog(name, breed, sex) {
  this.name = name;
  this.breed = breed;
  this.sex = sex;
}

dog1 = new Dog("Daniel", "bulldog", "male");
console.log(dog1.toString()); // [object Object]

Dog.prototype.toString = function dogToString() {
  return `${this.name} is a ${this.sex} ${this.breed}.`;
};

console.log(dog1.toString()); // Daniel is a male bulldog.
 
 
 
 
 
 
*/