// Array Every()
// So Array Every Returns a Boolean Value
// Checks whether the condition given in the parameter
// is true or false

// Checks all should match the condition
// if all match then true
// else false

// every will return true if all every predicate is true
const arr = [2, 4, 6, 8, 10];

// console.log(arr.every((x) => x % 2 == 0)); // true
// OR

// function isEven(num) {
//   return !(num & 1);
// }
// console.log(arr.every(search));

//

function isEven(num) {
  return !(num & 1);
}

console.log("This is every");

console.log(arr.every(isEven));
