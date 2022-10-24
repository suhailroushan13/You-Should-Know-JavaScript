const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arr2 = ["Java", "C", "C++", "Python", "Javascript"];

console.log(arr1.at(0));
console.log(arr2.at(0));

console.log(arr1.concat(arr2));

// console.log(arr1.constructor().next().value);
// console.log(arr1.constructor().next().value);

// console.log(arr1.constructor().next().value);

console.log(arr1.copyWithin(0, 0, 11));

console.log(arr1.entries);
let data = arr1.entries();
for (let i of data) {
  console.log(i);
}

console.log(arr1.every((x) => x > 10));
console.log(arr1.every((x) => x < 10));

console.log(arr1.fill(10));

console.log(arr1.flat(2));

console.log(arr1.find((x) => x > 1));
console.log(arr1.findIndex((x) => x > 10));

// console.log(arr1.Array.from("10"));
// console.log(arr1.Array.from("Hello"));

console.log(arr1.filter((x) => x >= 10));

console.log(arr1.flatMap((x) => x > 1));

console.log(arr1.forEach((x) => x));

console.log(arr1.includes(10));

console.log(arr2.indexOf("C++"));

console.log(arr1.join(" : "));

console.log(arr1.keys());

console.log(arr1.length);

console.log(arr1.lastIndexOf((x) => x > 1));

console.log(arr1.map((x) => x > 1));

console.log(arr1.push(100));
console.log(arr1);
console.log(arr1.pop());

console.log(arr1.shift());
console.log(arr1.unshift(100000));
console.log(arr1);

console.log(arr1.sort());

console.log(arr1.some((x) => x > 1));

console.log(arr1.slice(0, 1));

console.log(arr1.splice(0, 1, 34));

console.log(
  arr1.toLocaleString("en-IN", {
    currency: "INR",
  })
);

console.log(arr1.toString("hello"));

console.log(arr1.values());
