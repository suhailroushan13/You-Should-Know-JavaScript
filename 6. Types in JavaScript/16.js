const even = [2, 4, 6, 8]

let mix = even.copyWithin(0, 3)
console.log(mix);// 0 chnage to 3 in index
// 2 chnages to 8
// 8 4 6 8


const odd = [1, 3, 5, 7]
let mix2 = odd.copyWithin(-1)
console.log(mix2);
// -1 will copy the 0th index to last one index

