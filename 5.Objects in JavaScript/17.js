function Tariq(date, month, year) {
    this.date = new Date().getDate()
    this.month = new Date().getMonth() + 1
    this.year = new Date().getFullYear()
}

const tariq = new Tariq()
const date2 = new Tariq()
console.log(tariq);
console.log(date2);


console.log(tariq.date);
console.log(tariq.month); 

console.log(date2.date);
console.log(date2.month); 


