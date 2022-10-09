// Math Random

// Math.random()
// The Math.random() function returns a random number between 0 (inclusive), and 1 (exclusive):
//
// console.log(Math.random()); // 0.1234567894322
// console.log(Math.random()); // 0.987654321

// for (let i = 0; i < 100; i++) {
//   let random = Math.random();
//   console.log(Math.floor(random * (10 - 9)) + 9);
// }

// (max - min )+ min

// Function to generate random number
// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// console.log(getRandomNumber(10, 11));



function random(min,max){
  return Math.floor(Math.random()*(max-min + 1)+ min);
}
console.log(random(1,4))
// random(1,4)