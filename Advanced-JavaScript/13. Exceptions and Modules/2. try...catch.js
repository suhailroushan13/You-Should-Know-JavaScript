// try ....catch

let a = 10;
let b = 20;
try {
  console.log(a + b);
  console.log(c); // Error ..go to catch block
} catch (error) {
  console.log(`Error is : ${error}`); // Error is : ReferenceError: c is not defined
}
