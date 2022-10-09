//  Find Ki Index (Only First Element ka Index)
// The findIndex() method returns the index of the
//  first array element that satisfies the provided
//  test function or else returns -1.

// If the element does not match it will send -1
const arr = [2, 8, 10, 31, 4];

let ok = arr.findIndex((e) => e % 2 != 0);
console.log(ok);

let days = ["Sunday", "Wednesday", "Tuesday", "Friday"];

let ok2 = days.findIndex((e) => e == "Wed");
console.log(ok2);
