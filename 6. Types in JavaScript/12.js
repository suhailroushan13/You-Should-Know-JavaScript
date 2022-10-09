// Adding elements in 2d Array == Multidimensional Array

let arr = [["Jack", 23], ["Sarah", 24]]
arr.push(["Suhail", 21])
console.log(arr);   // [ [ 'Jack', 23 ], [ 'Sarah', 24 ], [ 'Suhail', 21 ] ]


let arr2 = [["Jack", 23], ["Sarah", 24]]
arr2[1][2] = "Suhail";
console.log(arr2); // [ [ 'Jack', 23 ], [ 'Sarah', 24, 'Suhail' ] ]


let arr3 = [['Jack', 23], ['Sarah', 24, 'Suhail']]
arr3.pop()
console.log(arr3); // [ [ 'Jack', 23 ] ]


let arr4 = [['Jack', 23], ['Sarah', 24, 'Suhail']]
arr4[1].pop()
console.log(arr4);




