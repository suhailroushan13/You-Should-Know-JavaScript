function number(a, b, c) {
  console.log(a, b, c);
}

let data = number.length;

console.log(data); // 3

function odd(a, b = 10, c) {
  console.log(a, b, c);
}

data = odd.length;

console.log(data); // 1

/*
a=11,b,c ===> 0
a,b=11,c ===> 1
a,b,c=10 ===> 2

//  It always count from first

*/
