// Benefit of Using Symbols in Object
// If the same code snippet is used in various programs, then it is better to use Symbols in the object key. It's because you can use the same key name in different codes and avoid duplication issues. For example,

let person = {
    name: "Jack"
};

// creating Symbol
let id = Symbol("id");

// adding symbol as a key
person[id] = 12;
// In the above program, if the person object is also used by another program, then you wouldn't want to add a property that can be accessed or changed by another program. Hence by using Symbol, you create a unique property that you can use.

// Now, if the other program also needs to use a property named id, just add a Symbol named id and there won't be duplication issues. For example,
 person = {
    name: "Jack"
};

let id1 = Symbol("id");

person[id1] = "Another value";
// In the above program, even if the same name is used to store values, the Symbol data type will have a unique value.

// In the above program, if the string key was used, then the later program would have changed the value of the property. For example,

 person = {
    name: "Jack"
};

// using string as key
person.id = 12;
console.log(person.id); // 12

// Another program overwrites value
person.id = 'Another value';
console.log(person.id); // Another value
// In the above program, the second user.id overwrites the previous value.

