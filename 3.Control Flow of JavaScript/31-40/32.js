function box(num1, num2, num3) {
  //   let num2 = 20;
  // let num3 = 30;let num1 = 10;


  if (num1 > num2 && num1 > num3) {
    console.log(num1, "is greatest among 3");
  } else if (num2 > num1 && num2 > num3)
    console.log(num2, "is greatest among 3");
  else if (num3 > num1 && num3 > num2) {
    console.log(num3, "is greatest among 3");
  }
}
box(60,120,30);


