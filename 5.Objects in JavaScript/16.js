// JavaScript Constructor Function

// function Name() {
//     this.name = "Suhail",
//         this.age = 20
// }


// const name = new Name();

// console.log(name);

// const name2 = {
//     name: "sUHAIL",
//     age: 20
// }

// console.log(name2);


function Tariq(date, month, year) {
    this.date = new Date().getDate()
    this.month = new Date().getMonth() + 1
    this.year = new Date().getFullYear()
}

const tariq = new Tariq()
console.log(tariq);

console.log(tariq.date);
console.log(tariq.month);