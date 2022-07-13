// Addition of 3 numbers Using Function Parameter
function add(a, b, c) {
  let d;
  d = a + b + c;
  console.log(d);
}

add(1, 2, 3);

// Printing Multiplication Table Using Function Parameter

function table(num) {
  let i = 1;
  for (i; i <= 10; i++) {
    console.log(`${num} X ${i} = ${num * i}`);
  }
}
table(6)