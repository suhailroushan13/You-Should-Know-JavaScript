// CallBack Function

console.log("Hello");

let fun1 = (name, fun) => {
  console.log(`Hello ${name}`);
  fun();
};

let fun2 = (name) => {
  console.log("I am Fun2");
};

fun1("Suhail", fun2);
