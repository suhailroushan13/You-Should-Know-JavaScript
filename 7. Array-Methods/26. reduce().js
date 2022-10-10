// Array Reduce()
// The reduce() method executes a reducer function
// on each element of the array and returns a single output value.

const values = [3, 5, 1, 4, 2];

const total = values.reduce((acc, item) => {
  return acc + item;
}, 0);
// console.log(total); // 15
// acc = 0 and item = 3 ====> 0+3 = 3
// acc = 3 and item = 5 ====> 3+5 = 8
// acc = 8 and item = 1 ====> 8+1 = 9
// acc = 9 and item = 4 ====> 9+4 = 13
// acc = 13 and item = 2 ===> 13+2 = 15

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(
//   arr.reduce((acc, count) => {
//     return acc + count;
//   }, 0)
// );

function sum_reducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

// let sum = arr.reduce(sum_reducer);
// console.log(sum); // 21

const arr1 = [13, 2, 5];
let data = arr1.reduce((init, value, index, array) => {
  // Start value starts from 0
  console.log(init);
  // 1st value of arr1  13
  console.log(value);
  // index of 1st value 0
  console.log(index);
  // console whole array [13,2,5]
  console.log(array);

  return init + value;
}, 0);
console.log(data);
