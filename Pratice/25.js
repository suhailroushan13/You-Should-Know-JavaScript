import readline from "readline-sync";

let ask = readline.questionInt("Enter Number : ");

if (ask % 15 == 0) {
  console.log(`${ask} is divisble by 3 and 5 and FIZZBUSS`);
} else {
  if (ask % 3 == 0) {
    console.log(`${ask} is divisble by 3 and FIZZ`);
  }
  if (ask % 5 == 0) {
    console.log(`${ask} is divisble by 5 and BUSS`);
  }
}


