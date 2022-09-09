// Declaring Variables Using keyword let

// LET
// The variable type let is introduced in ES6.
// It shares a lot of similarities with var,
// but unlike var, it has scope constraints.
// Its declaration and assignment are similar to var.
// The purpose of introducing let is to resolve all issues
// posed by variables scope, which developers face during development.
// The properties of let are that
// They have visibility linked to the block they belong with.
// We can change their values,
// but they cannot be redeclare in the same scope, unlike var.

let firstName = "Suhail";
let lastName = "Roushan";
let age = "21";
let height = "5.8";
let weight = "60";
let eyeColor = "Brown";
let hairColor = "Black";
let address = "Kathmandu";
let city = "Kathmandu";
let state = "Bagmati";
let zipCode = "44600";
let country = "Nepal";
let phone = "9841234567";
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(height);
console.log(weight);
console.log(eyeColor);
console.log(hairColor);
console.log(address);
console.log(city);
console.log(state);
console.log(zipCode);
console.log(country);
console.log(phone);

// Declaring Variables Using keyword const

// CONST
// The const keyword was introduced in ES6 (2015).

// Variables defined with const cannot be Redeclare.

// Variables defined with const cannot be Reassigned.

// Variables defined with const have Block Scope.

// var declares a variable, meaning its value will vary.
// const declares a constant, meaning its value will remain
// constant and not change.
// If your variable changes throughout the program or website,
// declare it using a var statement.
// Otherwise, if its value does not change, declare it using
// a const statement.

const myConst = "A const does not change.";

var myVar = "A var does change.";

const PI = 3.141592653589793;
PI = 3.14; // This will give an error
PI = PI + 10; // This will also give an error

// const age; // error as const cannot be kept un-initialized;
// const age = 20;
// const age = 21; // error as once declared const variable can't be
// re-declared in same scope or different scope.

const constBirthday = "12/12/1998";
const constFirstName = "Suhail";
const constLastName = "Roushan";
const constAge = "21";
const constHeight = "5.8";
const constWeight = "60";
const constEyeColor = "Brown";
const constHairColor = "Black";
const constAddress = "Kathmandu";
const constCity = "Kathmandu";
const constState = "Bagmati";
const constZipCode = "44600";
const constCountry = "Nepal";
const constPhone = "9841234567";
console.log(constBirthday);
console.log(constFirstName);
console.log(constLastName);
console.log(constAge);
console.log(constHeight);
console.log(constWeight);
console.log(constEyeColor);
console.log(constHairColor);
console.log(constAddress);
console.log(constCity);
console.log(constState);
console.log(constZipCode);
console.log(constCountry);
console.log(constPhone);

// Constant Objects and Arrays
// The keyword const is a little misleading.

// It does not define a constant value. It defines a constant reference to a value.

// Because of this you can NOT:

// Reassign a constant value
// Reassign a constant array
// Reassign a constant object
// But you CAN:

// Change the elements of constant array
// Change the properties of constant object

// Constant Arrays
// You can change the elements of a constant array:

// Example
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

// Constant Objects
// You can change the properties of a constant object:

// Example
// You can create a const object:
const car = { type: "Fiat", model: "500", color: "white" };

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
