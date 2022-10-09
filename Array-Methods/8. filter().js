// The filter() method returns a new array
// with all elements that pass the test
// defined by the given function.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(arr.filter((x) => x >= 5));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function to check even numbers
function checkEven(number) {
  if (number % 2 == 0) return true;
  else return false;
}

// create a new array by filter even numbers from the numbers array
let evenNumbers = numbers.filter(checkEven);
// console.log(evenNumbers);

// Output: [ 2, 4, 6, 8, 10 ]

const languages = [
  "JavaScript",
  "Python",
  "Ruby",
  "C",
  "C++",
  "Swift",
  "PHP",
  "Java",
];

// function search(arr, letter) {
//   for (let i of arr) {
//     if (i.includes(letter)) {
//       console.log(i);
//     }
//   }
// }

// search(languages, "Sw");

const search = (arr, letter) =>
  arr.filter((x) => {
    if (x == letter) {
      console.log(x);
    }
  });
search(languages, "Swift");
