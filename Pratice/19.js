// let a1 = {
//   name: "Suhail",
//   age: 20,
// };
// let a2 = Object.assign(a1);
// console.log(a2);
// a2.isAlive = true;

// console.log(a2);
// console.log(a1);

// let student = {
//   name: "suhail",
//   age: 20,
// };

// // delete student.age
// console.log(student);

// let obj = Object.create({
//   name: "suhail",
//   age: 20,
// });

// console.log(obj); // empty
// console.log(obj.name,obj.age); // suhail

// obj.isAlive = true;
// console.log(obj);
// console.log(obj.name,obj.age);

// let a1 = {
//   name: "Suhail",
//   age: 22,
//   address: {
//     city: "Hyd",
//   },
// };

// Object.freeze(a1);

// console.log(a1);
// a1.isAlive = true // Add
// a1.name = "Roushan" // Update
// a1.address.city= "mumbai"
// delete a1.address  // delete

// console.log(a1);

// console.log(Object.isFrozen(a1));

// let a1 = {
//   name: "Suhail",
//   age: 22,
//   address: {
//     city: "Hyd",
//   },
// };

// Object.seal(a1);
// console.log(Object.isSealed(a1));

// console.log(a1);

// // a1.address.city = true;
// a1.name = "Roushan"
// //
// // a1.isAlive = true;

// delete a1.address

// console.log(a1);

let a1 = {
  name: "Suhail",
  age: 22,
  address: {
    city: "Hyd",
  },
};

console.log(a1);


Object.preventExtensions(a1)
console.log(a1);
console.log(Object.isExtensible(a1));


console.log(a1);

a1.name = "Roushan"
a1.address.city = "Mumbai"
a1.address.area = "local"
// delete a1.address


console.log(a1);
