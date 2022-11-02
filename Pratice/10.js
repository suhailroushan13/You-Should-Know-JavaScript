class Tariq {
  constructor(date, month, year) {
    this.date = new Date().getDate();
    this.month = new Date().getMonth() + 1;
    this.year = new Date().getFullYear();
  }
}

const tariq = new Tariq();
console.log(tariq);

console.log(tariq.date, tariq.month);
console.log(tariq.month);
console.log(tariq.year);
