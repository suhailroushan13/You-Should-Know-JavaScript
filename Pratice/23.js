// Symbolfor

let sym = Symbol.for("Hello");
let sym1 = Symbol.for("Hello1");

console.log(Symbol.keyFor(sym)); // Hello
console.log(Symbol.keyFor(sym1)); // Hello1

let a = Symbol("Hello I am Suhail");
console.log(a.description);
ĺ