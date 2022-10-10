// Javascript Array some()

// The some() method tests whether any of the array
// elements pass the given test function.

// array of scores obtained by student

// Checks atleast one of the conition passes or not

// some will return true if any conition is true

let scoreObtained = [115, 110, 139, 78, 5, 120];

let data = scoreObtained.some((x) => (x < 40 ? true : false));

console.log(data);

//  Using Functions

function fail(num) {
  return num < 40;
}

let data1 = scoreObtained.some(fail);
console.log(data1); // true 
