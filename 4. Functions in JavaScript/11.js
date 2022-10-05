let ans = 1;
function fac(num) {
  for (let i = 1; i <= num; i++) {
    ans *= i;
  }
  console.log(ans);
}
fac(0);

function fac1(num) {
  return num == 1 || num == 0 ? 1 : num * fac1(num - 1);
}
let n = 5;
console.log(fac1(n));



