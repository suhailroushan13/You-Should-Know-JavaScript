//  Array Concat()

const arr1 = [1, 2, 3, 4]
const arr2 = [2, 4, 6, 8]

console.log(arr1.concat(arr2));


//  Or 

const arr3 = arr1.concat(arr2)
console.log(arr3);



// Or
// Adding in Middile of it
const arr4 = arr1.concat("I am String", arr2)
console.log(arr4);

// Concatenating Multiple Arrays
const arr5 = arr1.concat(arr2, arr3, arr4)
console.log(arr5);


