// Access elements from an Array
const arr = [1, "two", 3, true, null, Symbol(3), BigInt(45), {}]
for (key of arr) {

    console.log(key);
}


for (let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i]);

}