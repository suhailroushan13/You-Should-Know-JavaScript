// Symbols are not included in for...in Loop
// The for...in loop does not iterate over Symbolic properties. For example,

let id = Symbol("id");

let person = {
    name: "Jack",
    age: 25,
    [id]: 12
};

// using for...in
for (let key in person) {
    console.log(key);
}