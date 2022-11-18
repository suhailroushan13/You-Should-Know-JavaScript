// Set

let a = new Set([1, 2, 3, 4, 5, 1]);
let b = new Set([1, 2, 3, 1, 1, 1, 1]);
console.log(a);
console.log(b);

a.add(10);
console.log(a.values());
console.log(a.has(2));
console.log(a.delete(10));
console.log(a);
console.log(a.clear());
console.log(a);
