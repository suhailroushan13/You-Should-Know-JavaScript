// Array Find ()
// It Only Returns the First Values from Array
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenfind = arr.find((num) => num % 2 == 0);
// console.log(evenfind);

// // Array filter filters the whole array
// const even = arr.filter((num) => !!(num & 1));

// console.log(even);

const team = [
  { name: "Bill", age: 10 },
  { name: "Linus", age: 15 },
  { name: "Alan", age: 20 },
  { name: "Steve", age: 34 },
];

let find = team.find((e) => e.age > 10);
console.log(find); //  Linus

let find1 = team.filter((e) => e.age > 10);
console.log(find1);
// All Greater than 10
// [
//   { name: "Linus", age: 15 },
//   { name: "Alan", age: 20 },
//   { name: "Steve", age: 34 },
// ];
