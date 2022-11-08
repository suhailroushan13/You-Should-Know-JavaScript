// Add Symbol as an Object Key
// You can add symbols as a key in an object using square brackets []. For example,

let id = Symbol("id");

let person = {
    name: "Jack",

    // adding symbol as a key
    [id]: 123 // not "id": 123
};

console.log(person); // {name: "Jack", Symbol(id): 123}