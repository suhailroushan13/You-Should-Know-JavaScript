const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arr2 = arr;

console.log(arr2 === arr);

const s = "Hello";
const j = s;
console.log(j === s);

const a = { name: "Suhail" };
const b = a;
console.log(a === b);

const arr3 = new Array(1, 2, 3, 4, 4, 5);
console.log((arr == arr3));
console.log(typeof arr);
console.log(typeof arr3);


