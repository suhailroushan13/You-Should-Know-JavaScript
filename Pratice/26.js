import readline from "readline-sync";

let a = readline.questionInt("Enter a :");
let b = readline.questionInt("Enter b :");
let c = readline.questionInt("Enter b :");

let num = -b + Math.sqrt(b * b - 4 * a * c);
let num1 = -b - Math.sqrt(b * b - 4 * a * c);

let deno = 2 * a;
console.log(num / deno);
console.log(num1 / deno);
