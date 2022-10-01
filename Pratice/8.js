// While Creating a Object 
// const obj = {
//     name: "Helo",
//     age: 23,
//     fun: function name() {
//        return "Hello";

//     },
//     isAlive: true
// }
// console.log(typeof obj, obj);
// console.log(obj.fun());

// 


// const obj2 = {
//     name: "Hello",
//     age: 20,
//     fun: fac(),
//     isAlive: true,
// }

// function fac() {
//     return "Hello"
// }

// console.log(typeof obj2, obj2);
// console.log(obj2.fun);

// const obj3 = {
//     name: 'Suhail',
//     age: 20,
//     fun() {
//         return "Hello"
//     }
// }
// console.log(typeof obj3, obj3.fun(),obj3);
let a = this;
console.log(a); 
this.name = 'Sarah';
console.log(window.name); // Sarah