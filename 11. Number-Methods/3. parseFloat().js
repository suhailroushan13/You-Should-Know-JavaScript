// String to Number

let data = "123";
let change = Number.parseFloat(data);
console.log(typeof change,change);

let data2 = "123e4";
 change = Number.parseFloat(data2);
console.log(typeof change, change);


let data3 = "d234eNde";
change = Number.parseFloat(data3);
console.log(typeof change, change);


let data4 = "234eNde";
change = Number.parseFloat(data4);
console.log(typeof change, change);
