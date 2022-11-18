let a = new Map();
console.log(a);

a.set("person", { name: "Suhail" });

console.log(a);

console.log(a.get("person"));

console.log(a.has("person"));

a.delete("person");
console.log(a);

a.set("1", "Suhail");
a.set("2", "Roushan");

console.log(a);

for (let key of a) {
  console.log(key);
}

// WeakMap can only have Object as Keys
// you cannot iterate over WeakMap
let b = new WeakMap();
console.log(b);
let obj = {};
b.set(obj, "Hello");
console.log(b);
console.log(b.get(obj));
console.log(b.has(obj));
console.log(b.delete(obj));
console.log(b);

console.log(b.get(obj));
