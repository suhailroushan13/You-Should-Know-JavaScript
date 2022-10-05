const even = [2, 4, 6, 8]
let hey = even.entries()

console.log(hey); // Array Iterator
console.log(hey.next().value);
console.log(hey.next().value);
console.log(hey.next().value);
console.log(hey.next().value);


/*
[ 0, 2 ]
[ 1, 4 ]
[ 2, 6 ]
[ 3, 8 ]

*/

for (let entry of hey) {
    console.log(entry);

}
