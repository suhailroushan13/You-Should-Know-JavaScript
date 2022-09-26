// Factorial

// 5! = 5x(5-1)x(5-2)x(5-3)x(5-4)x(5-5)
//  5! = 5x4x3x2x1
let ans = 1;
function fac(num) {
  for (let i = num; i >= 1; i--) {
    ans *= i;
  }
  console.log(ans);
}
fac(4);
