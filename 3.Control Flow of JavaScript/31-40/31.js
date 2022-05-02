let num1 = 10;
let num2 = 10;
function large(num1, num2) {
  if (num1 < num2) {
    console.log("Num2 is Greater", num2);
  } else if (num1 > num2) {
    console.log("Num1 is Greater", num1);
  } else if (num1 == num2) {
    console.log("Both are same");
  }
}

large(20, 20);
