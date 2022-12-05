// Clousers

function sum(name) {
  function newSum() {
    return "Hi" + name;
  }
  return newSum;
}

let a = sum(" Roushan");
console.log(a);
console.log(a());

// Clousers are basically used for Data Privacy

let value = 0;
function cool() {
  function newCool() {
    return (value += 1);
  }
  return newCool;
}

let b = cool();
console.log(b);
console.log(b());
console.log(b());
console.log(b());
console.log(b());

// console.log(c());


