// JavaScript Array splice()

// The splice() method returns an array by
// changing (adding/removing) its elements in place.

//                   0  1  2  3  4  5
let prime_numbers = [2, 3, 5, 7, 9, 11];
//

// 1st Parameter = what to remove index
// 2nd parameter = delete count starts from 1
// 3rd parameter = elements you want to add
console.log(prime_numbers.splice(4, 1, 108));
// in the index of 4 ...add this 1 element which is 108
// [ 2, 3, 5, 7, 108, 11 ]
console.log(prime_numbers);

console.log(languages); // [ 'JavaScript', 'Java', 'Lua', 'Python', 'C', 'C++' ]
let removed2 = languages.splice(2, 3);
// From Index 2 delete 1 2 3 elements from there
console.log(languages); // [ 'JavaScript', 'Java', 'C++

let languages = ["JavaScript", "Python", "Java", "Lua"];

// removes everything from start
let removed = languages.splice(1);
console.log(removed); // [ "Python", "Java", "Lua" ]
console.log(languages); // [ "JavaScript" ]