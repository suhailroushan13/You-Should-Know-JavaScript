// Array Entries()
// It returns a array with object key/value pairs in the 
// form of indexs
// The entries() method returns a new Array
//  Iterator object containing key/value pairs 
// for each array index.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let store = arr.entries();

// 
// console.log(store.next().value);
// console.log(store.next().value);
// console.log(store.next().value);
// console.log(store.next().value);
// console.log(store.next().value);
// console.log(store.next().value);


for (let i of store) {
  console.log(i);
}

// console.log(arr);


/*
[ 0, 1 ]
[ 1, 2 ]
[ 2, 3 ]
[ 3, 4 ]
[ 4, 5 ]
[ 5, 6 ]
[ 6, 7 ]
[ 7, 8 ]
[ 8, 9 ]
[ 9, 10 ]
*/