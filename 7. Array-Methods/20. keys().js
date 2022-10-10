// Array Keys()
// The keys() method returns a new Array Iterator object that contains
//   the keys for each element in the array.

const arr = [
  [1, 2],
  [2, 2],
];
let store = arr.keys();

for (let i of store) {
  console.log(i);
}

const words = ["Hello", "I am", "Suhail"];
console.log(words);

for (let i of words.keys()) {
  console.log(i);
}
