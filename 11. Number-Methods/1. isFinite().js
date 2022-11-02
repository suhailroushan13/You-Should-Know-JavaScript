let number = 775;
console.log(isFinite(number)); // true

let number2 = "745533e3";
console.log(isFinite(number2)); // true

let number3 = 745533e3;
console.log(isFinite(number3)); // true
console.log(isFinite(null)); // true

console.log(isFinite(NaN)); // false
console.log(isFinite(-Infinity)); // false
console.log(isFinite(+Infinity)); // false
console.log(isFinite(undefined)); // false
