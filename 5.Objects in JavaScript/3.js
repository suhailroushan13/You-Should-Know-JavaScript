const empty = {};
console.log(empty);

empty.firstName = "Steve";
empty.lastName = "Jobs";
// 
//  now we have a new property called firstName
//  now we have a new property called lastName
console.log(empty);

// Update
empty.firstName = "Bill";
empty.lastName = "Gates";
console.log(empty);
// now we have a updated property called firstName
// now we have a updated property called lastName

// Delete
delete empty.firstName;
delete empty.lastName;

console.log(empty);
// now we have a deleted property called firstName
// now we have a deleted property called lastName

// To check if a property exists in an object

empty.firstName = "Bill";
empty.lastName = "Gates";
// in operator
// in operator returns true if the property exists in the object
// in operator returns false if the property does not exist in the object

console.log("firstName" in empty);
console.log("lastName" in empty);
// age does not exist in the empty object
// so it returns false
console.log("age" in empty);

// Iterating over an object
// for in loop
// for in loop iterates over the properties of an object
// for in loop iterates over the keys of an object

for (let key in empty) {
  // where key is the name of the property
  // where empty[key] is the value of the property

  console.log(key, empty[key]);
}


// In Loops of Objects use Arrow Notation
