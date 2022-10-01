/*
JavaScript Getter and Setter
In this tutorial, you will learn about JavaScript getter and setter methods with the help of examples.

In JavaScript, there are two kinds of object properties:

Data properties
Accessor properties
Data Property
Here's an example of data property that we have been using in the previous tutorials.

const student = {

    // data property
    firstName: 'Monica';
};
Accessor Property
In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords:

get - to define a getter method to get the property value
set - to define a setter method to set the property value


*/

const person = {
    name: "Suhail",
    age: 20,
    fac() {
        return `I am ${this.name} age of ${this.age}`
    }
}


console.log(person);
console.log(person.fac()); // If you dont want to add () after fac then add get in function

// Example

const person1 = {
    name: "Suhail",
    age: 20,
    get fac() {
        return `I am ${this.name} age of ${this.age}`
    }
}


console.log(person1);
console.log(person1.fac); // If you add fac() then u will get error 

// Using get because use can a function other key value pairs like person1.name and person1.fac 
//  where you dont need to call a function like person1.fac()





//    get getName() {
//     return this.firstName;
// }
// // Note: To create a getter method, the get keyword is used.

// // And also when accessing the value, we access the value as a property.

//     student.getName;

// console.log(student.getName()); // error