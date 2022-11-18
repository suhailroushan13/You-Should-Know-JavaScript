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
map1.set("Student", { name: "Roushan", age: 22 })
map1.set("Students", { name: "Roushan", age: 22 });

console.log(map1);

console.log("Size is " + map1.size);

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



/*
JavaScript WeakMap
The WeakMap is similar to a Map. However, WeakMap can only contain objects as keys. For example,

const weakMap = new WeakMap();
console.log(weakMap); // WeakMap {} 

let obj = {};

// adding object (element) to WeakMap
weakMap.set(obj, 'hello');

console.log(weakMap); // WeakMap {{} => "hello"}
Run Code
When you try to add other data types besides objects, WeakMap throws an error. For example,

const weakMap = new WeakMap();

// adding string as a key to WeakMap
weakMap.set('obj', 'hello');
Run Code
// throws error
// TypeError: Attempted to set a non-object key in a WeakMap
WeakMap Methods
WeakMaps have methods get(), set(), delete(), and has(). For example,

const weakMap = new WeakMap();
console.log(weakMap); // WeakMap {} 

let obj = {};

// adding object (element) to WeakMap
weakMap.set(obj, 'hello');

console.log(weakMap); // WeakMap {{} => "hello"}

// get the element of a WeakMap
console.log(weakMap.get(obj)); // hello

// check if an element is present in WeakMap
console.log(weakMap.has(obj)); // true

// delete the element of WeakMap
console.log(weakMap.delete(obj)); // true

console.log(weakMap); // WeakMap {} 
Run Code
WeakMaps Are Not iterable
Unlike Maps, WeakMaps are not iterable. For example,

const weakMap = new WeakMap();
console.log(weakMap); // WeakMap {} 

let obj = {};

// adding object (element) to WeakMap
weakMap.set(obj, 'hello');


// looping through WeakMap
for (let i of weakMap) {

    console.log(i);  // TypeError
}

 
 
 
 
 
 
*/