//  2. Function Scope
console.log("FUNCTION SCOPE");

// This Works
function scope() {
  const constB = "const";
  var varB = "var";
  let letB = "let";

  console.log(varB);
  console.log(letB);
  console.log(constB);
}
scope();

/// But Not This
// function scope() {
//   const constB = "const";
//   var varB = "var";
//   let letB = "let";

// }
// scope();
// console.log(varB);
// console.log(letB);
// console.log(constB);

// This will give a Error
