const map = new Map();

console.log(map); // Map(0) {}
console.log(typeof map); // Object

let map1 = new Map();

// Creating the Elements
map1.set("person", { name: "Suhail", age: 20, isAlive: true });
// Map(1) { 'person' => { name: 'Suhail', age: 20, isAlive: true } }
map1.set("persons", { name: "Suhail", age: 20, isAlive: true });
let obj = {};
let i = 0;
map1.set(22, { names: "Roushan", age: 22 });
console.log(map1);

// Accesss the Elements

let data = map1.get("person");
let data2 = map1.get("persons");

console.log(data, data2);

// Checking the Elements

let check = map1.has("person"); // key names like person , persons and 22
console.log(check);

console.log(map1.has("suhail")); // key name is not there as suhail

// Deleting a Info

map1.delete("persons");
map1.delete(22);
console.log(map1);

// Clearing the Elements

map1.clear();
console.log(map1);

// Getting the Size of it


console.log(map1.size);
map1.set("Person", { name: "Suhail" });
console.log(map1);

console.log(map1.size);

let map3 = new Map();

map3.set(1, { number: 1 });
map3.set(2, { number: 2 });
console.log(map3);

for (let [i, j] of map3) {
  console.log(i, j);
}

// 1 { number: 1 }
// 2 { number: 2 }

// WeakMap

/*
1.Same as Map
2.  WeakMap can only contain objects as keys
3. WeakMaps have methods get(), set(), delete(), and has()
4. WeakMaps Are Not iterable
Unlike Maps, WeakMaps are not iterabl

5.
 
 
 
 
 
*/


