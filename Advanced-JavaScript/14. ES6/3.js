// Arrow Functions

// Normal Functions

// function sayName(name) {
//   return name;
// }

// let x = sayName("Hello");
// console.log(x);

// 1. Arrow Function with No Arguments

let fun = () => console.log("Hello");
fun();

// 2. Arrow Function with 1 Argument

let fun1 = (name) => console.log("Hello");
fun1();

// 3. Arrow Function with Expression

let age = 20;
let data = age > 18 ? () => console.log("Adult") : () => console.log("Baby");
data();

// 4. Arrow Function With Multi Line

let fun2 = (name) => {
  console.log(name);
};
fun2("Hello");

// 5. Arguments Binding

let fun3 = (...n) => {
  console.log(n);
};

fun3(4, 6, 7, 3, 3, 3);
