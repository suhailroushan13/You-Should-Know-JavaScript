function greet(name, myfun) {
  console.log("Hello Main Greet",name);
  myfun(name);
}

function sayName(name) {
  console.log("Hello ", name);
}

setTimeout(greet, 4000, "Suhail", sayName);
