
// What is Variable ?
/*
    Variable is a container for storing data values.
    Variable can be used to store data values.
    Variable is a name given to a memory location.
    We Can use the information stored in a variable to perform a task.
    We can use the same variable name to refer to different values.
    We can change the data of information later     
*/

// Declaring Variables Using var

var firstName = "Suhail Roushan";

console.log(firstName);

// Output : Suhail Roushan

// JavaScript is Case Sensitive
// hello is not equal to Hello

firstName = "JavaScript";

console.log(firstName);

// By Default If you didnt declare var it will take global variable as var

var home = "ROOM";
home = "ROOM";

// Both are Same

// By default it takes variable as global variable as var

// Ruling for Naming Variables
// 1. Variable names can only contain letters, numbers, and underscores.
// 2. Variable names are case sensitive.
// 3. Variable names should not be JavaScript keywords.
// Keywords are var , let , const
// 4. Variable names should not start with a number.
// 5. Use meaningful names in variables
// 6. Use CamelCase for naming variables

// You can use _ in variable names in start or in middle
// You can use $ in variable names in start or in middle

// All are Valid
var _suhail = "Hello, world!";
var suh_ail = "Hello, world!";
var $suhail = "Hello, world!";
var suh$ail = "Hello, world!";
var suhail = "Hello, world!";

// Spaces are not valid in Variable names

// var su hail = "Hello, world!"; // Not Allowed

// Always use CamelCase

// Example : firstPerson = "Suhail";
// Example : firstName = "Suhail";
// Example : first_person = "Suhail";
// Example : first_person_name = "Suhail";
// Example : first_person_name_age = "Suhail";
// Example : first_person_name_age_height = "Suhail";
// Example : first_person_name_age_height_weight = "Suhail";
