// Javascript Array reduceRight()

// The reduceRight() method reduces the array to a
// single value by executing a callback function on
// two values of the array (from right to left).
const arr1 = [13, 2, 5];
let data = arr1.reduceRight((init, value, index, array) => {
  // Start value starts from 0
  console.log(init);
  // last value of arr1  5
  console.log(value);
  // index of last value 0
  console.log(index);
  // console whole array [13,2,5]
  console.log(array);

  return init + value;
}, 0);
console.log(data);

// acc = 0 and item = 5 ====> 0+5 = 5
// acc = 5 and item = 2 ====> 5+2 = 7
// acc = 7 and item = 13 ====>7+13 = 20
