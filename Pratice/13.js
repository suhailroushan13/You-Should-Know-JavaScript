// defining an array named alphabets
const alphabets = ["A", "B", "C"];

// array iterator object that contains
// key-value pairs for each index in the array
let iterator = alphabets.entries();

console.log(iterator);

for (let entry of iterator) {
    console.log(entry);
}
