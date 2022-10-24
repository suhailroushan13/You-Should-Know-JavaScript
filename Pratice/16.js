//  All Array Methods

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = ["Java", "C", "C++", "Python", "Javascript"];

let result;

console.log(arr2.at(0));
console.log(arr2.at(1));

console.log(arr2.copyWithin(1, 3));

console.log(arr1.concat(arr2));

result = arr1.constructor;
console.log(result);

result = arr1.entries();

for (let i of result) {
  console.log(i);
}

console.log(arr1.every((x) => x % 2 == 0));

console.log(arr1.fill(2, 3, 5));

console.log(arr1.filter((x) => x % 2 == 0));

console.log(arr1.find((x) => x % 2 == 0));
console.log(arr1.findIndex((x) => x % 2 == 0));

console.log(arr1.flat());

console.log(arr1.flatMap((x) => x * 2));

arr1.forEach((x) => console.log(x));

result = Array.from("123");
console.log(result);

let data = result.includes(String(2)); // true
console.log(data);

data = result.includes(2); // false

console.log(data);

console.log(result.indexOf("3"));

data = Array.isArray([2, 34, 4, 4]);
console.log(data);

data = result.join("+");
console.log(data);

data = arr2.keys();
for (let i of data) {
  console.log(i);
}

console.log(arr1.lastIndexOf(2, 1));

console.log(arr1.map((x) => x * x));

data = Array.of("Hello");
console.log(data);
arr1.pop();
console.log(arr1);
arr1.push(100);
console.log(arr1);

console.log(arr1.reduce((init, value) => init + value));
console.log(arr1.reduceRight((init, value) => init + value));

data = arr1.reverse();
console.log(data);

arr1.shift();
console.log(arr1);

arr1.unshift(100);
console.log(arr1);

console.log(arr1.slice(2, 8));
console.log(arr1);
console.log(arr1.splice(2, 1, 100));
console.log(arr1);

data = arr1.some((x) => x % 2 == 0);
console.log(data);

arr1.sort((a, b) => a - b);
console.log(arr1);

data = arr1.toLocaleString("en-IN", {
  style: "currency",
  currency: "INR",
});

console.log(data);

data = arr1.toString();
console.log(data);

data = arr1.values();
for (let i of data) {
  console.log(i);
}

console.log(arr1.length);
