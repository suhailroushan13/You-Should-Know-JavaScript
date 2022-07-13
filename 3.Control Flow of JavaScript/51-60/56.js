// Browser Environment 


let n1 = prompt("Enter n1 value");
let n2 = prompt("Enter n2 value");
let ask = prompt("Enter The Operation");
let add = +n1 + +n2;
let sub = +n1 - +n2;
let mul = +n1 * +n2;
let div = +n1 / +n2;
let mod = +n1 % +n2;

switch (ask) {
  case "add":
    alert(+add);
    break;

  case "sub":
    alert(+sub);
    break;
  case "mul":
    alert(+mul);
    break;
  case "div":
    alert(+div);
    break;
  case "mod":
    alert(+mod);
    break;
  default:
    alert("Invalid Input");
    break;
}
