// JavaScript Array length()

// The length property returns or sets
//  the number of elements in an array.

// It starts the length from 1

let city = ["California", "Barcelona", "Paris", "Kathmandu"];

// find the length of the city array
let len = city.length;
console.log(len);

// Output: 4
var companyList = ["Apple", "Google", "Facebook", "Amazon"];
console.log(companyList.length); // Output: 4

var randomList = ["JavaScript", 44];
console.log(randomList.length); // Output: 2

var emptyArray = [];
console.log(emptyArray.length); // Output: 0

var languages = ["JavaScript", "Python", "C++", "Java", "Lua"];

// languages.length can be used to find out
// the number of times to loop over an array
for (i = 0; i < languages.length; i++) {
  console.log(languages[i]);
}

var languages = ["JavaScript", "Python", "C++", "Java", "Lua"];

// truncate the Array to 3 elements
languages.length = 3;

// Output: [ 'JavaScript', 'Python', 'C++' ]
console.log(languages);

// extend the Array to length 6
languages.length = 6;

// Output: [ 'JavaScript', 'Python', 'C++', <3 empty items> ]
console.log(languages);

// [ 'JavaScript', 'Python', 'C++' ]
// [ 'JavaScript', 'Python', 'C++', <3 empty item> ]


// Here, we first truncated the length of Array as 3 (assigned value) 
// is less than 4 (original Array length).

// If the assigned value is more than the original Array length, empty
//  items are appended to the end of the Array. We can see this happen 
// in the second example.