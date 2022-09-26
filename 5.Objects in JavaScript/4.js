// Methods in Objects

// If a Function is a Property of an Object, it is called a Method

// 4 Ways to Create Methods in Objects

const person = {
  firstName: "Steve",
  lastName: "Jobs",
};

// 1. While Creating an Object

const person1 = {
  firstName: "Steve",
  lastName: "Jobs",
  fun: function () {
    return "Hello";
  },
};
console.log(person, person1.fun());

// Output
// { firstName: 'Steve', lastName: 'Jobs' } Hello

// 2. After Creating an Object

const person2 = {
  firstName: "Steve",
  lastName: "Jobs",
};

person2.fun = function () {
  return "Hello";
};

console.log(person2, person2.fun());

// Output
// { firstName: 'Steve', lastName: 'Jobs', fun: [Function: fun] } Hello

// 3. Create a Function and then Add it to an Object

const person3 = {
  firstName: "Steve",
  lastName: "Jobs",
};

function fun() {
  return "Hello";
}

person3.fun = fun;

console.log(person3, person3.fun());

// Output
// { firstName: 'Steve', lastName: 'Jobs', fun: [Function: fun] } Hello

// 4. Add a Function to an Object 

const person4 = {
  firstName: "Steve",
  lastName: "Jobs",
  fun() {
    return "Hello";
  },
};

console.log(person4, person4.fun());

// Output
// { firstName: 'Steve', lastName: 'Jobs', fun: [Function: fun] } Hello
