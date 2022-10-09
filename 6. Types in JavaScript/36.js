// JavaScript Array keys()

// The keys() method returns a new Array
// Iterator object that contains the keys
// for each element in the array.

const arr = ["Java", "C", "C++", "Python", "Javascript"];

let store = arr.keys();

// for (let i of store) {
//   console.log(i);
// }
// It Also gives keys for empty array to
const arr2 = [
  { name: "Rahul", score: 89 }, // 0
  { name: "Vivek", score: 88 }, // 1
  ,                             // 2
  { name: "Sourav", score: 82 },// 3
  { name: "Gautam", score: 91 },// 4
  { name: "Sunil", score: 79 }, // 5
];

let store2 = arr2.keys();

for (let j of store2) {
  console.log(j);
}
/*
0
1
2
3
4
5
*/