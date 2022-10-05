function Tariq(date, month, year) {
    this.date = date
    this.month = month
    this.year = year
}

const tariq = new Tariq(11, 02, 2002)
const date2 = new Tariq(01, 10, 2022)
console.log(tariq);
console.log(date2);


console.log(tariq.date);
console.log(tariq.month);

console.log(date2.date);
console.log(date2.month); 