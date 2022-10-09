// Array Every()
// So Array Every Returns a Boolean Value 
// Checks whether the condition given in the parameter
// is true or false


const arr = [2, 4, 6, 8, 10];

// console.log(arr.every((x) => x % 2 == 0)); // true
// OR

function search(num) {
  return !(num & 1);
}
console.log(arr.every(search));
