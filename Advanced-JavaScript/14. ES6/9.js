// Spread Operator

let data1 = ["Hello", "I", "am", "Suhail"];
console.log(data1);

let data2 = data1;
console.log(data2);

data1.push("Roushan");

console.log(data1);

console.log(data2);

let data3 = [...data1];
console.log(data1);
console.log(data3);

data1.push("Ali");

console.log(data1);
console.log(data3);

let fun = [1, 2, 3];
let fun2 = [...fun, 4, 5, 6];

console.log(fun2);

//Objects

let obj1 = { x: 1, y: 2 };
let obj2 = { z: 3 };

let obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// Rest Operator

let func = function (...args) {
  console.log(args);
};

func(3);

func(1, 2, 344);

function sum(x, y) {
  console.log(x + y);
}

const num = [1, 2, 3, 4];

sum(...num);
