// Array Keys()
// The keys() method returns a new Array Iterator object that contains
//   the keys for each element in the array.

const arr = [1,2,3,4,5,6,7,8,9,10]

let store = arr.keys();
console.log(store);

for (let i of store) {
  console.log(i);
}


console.log(store.next().value);
console.log(store.next().value);
console.log(store.next().value);
console.log(store.next().value);
console.log(store.next().value);
console.log(store.next().value);
const words = ["Hello", "I am", "Suhail"];
console.log(words);

for (let i of words.keys()) {
  console.log(i);
}
