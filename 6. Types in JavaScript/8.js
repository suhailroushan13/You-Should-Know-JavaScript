// Value Types Data Types are Primitive Data Types ==> Immutable
// String , Symbol , Boolean , BigInt , null , Number , undefined
// Stores Data in Stack in Last in First Out Order LIFO
// Its has less space than compared to other data structres
let suhail = 1234;
console.log(suhail); // 1234

let ayeen = suhail;
console.log(ayeen); // 1234

suhail = 4567;

console.log(ayeen); // 1234

// Reference Types Data Types are Non Primitive Data Types ==> Mutable 
// Function , Arrays , Dates , Regex , Objects 
// Stores Data in Heap 
// Its is slower than stack 
// But much usefull for complex variables
let obj1 = { name: "Suhail", age: 20 }
console.log(obj1); // { name: 'Suhail', age: 20 }

let obj2 = obj1;
console.log(obj2); // { name: 'Suhail', age: 20 }

obj1.name = "Roushan"

console.log(obj2); // { name: 'Roushan', age: 20 }




