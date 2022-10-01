// JavaScript Setter
// In JavaScript, setter methods are used to change the values of an object.For example,
/*
 
 
 const student = {
    firstName: 'Monica',
    
    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(student.firstName); // Monica

// change(set) object property using a setter
student.changeName = 'Sarah';
 
 console.log(student.firstName); // Sarah
 
 
*/

const student = {
    firstname: "Suhail"
}

Object.defineProperty(student, "getName", {
    get: function () {
        return this.firstname
    }
})

Object.defineProperty(student, "setName", {
    set: function (value) {
        return this.firstname = value;
    }

})

student.setName = "Hello"
// console.log(s);
console.log(student.getName);


