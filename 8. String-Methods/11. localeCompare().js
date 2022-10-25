let msg = "f";
let a = msg.localeCompare("f");
console.log(a); // 0

let msg1 = "b";
let a1 = msg1.localeCompare("a");
console.log(a1); // 1

let msg2 = "a";
let a2 = msg2.localeCompare("b");
console.log(a2); // -1
