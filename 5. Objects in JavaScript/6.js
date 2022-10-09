// Using this keyword in JavaScript
//
// What is this keyword?
// this keyword refers to the object it belongs to
// this keyword refers to the owner of the function
// this keyword refers to the current object
// this keyword can have different values depending on where it is used
// this keyword is not static

// In a method, this refers to the owner object
// In a function, this refers to the global object
// In a function, in strict mode, this is undefined

const person = {
  firstName: "Steve",
  lastName: "Jobs",
  age: 56,
  fun() {
    return (
      "Hello " +
      this.firstName +
      this.lastName +
      " and i have car of " +
      car.name
    );
    //   `Hello ${person.firstName} ${person.lastName} and i have car  of ${car.name}
    //   Instaed of using person we can use this keyword
    //   for other objects you have use there key with value
    //   You can use this keyword inside its own object
  },
};

const car = {
  name: "BMW",
  model: "X5",
  year: 2020,
};
console.log(person,person.fun());

//  In a above Object of person we are using person every where in the function
//  so we can use this keyword instead of person
//  Two Objets casn share the key value pair to each other
//  this keyword is used to refer to the object it belongs to it
