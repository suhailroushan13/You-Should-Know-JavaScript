// Array Filter()

const arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];
// console.log(arr);
// arr.filter((e) => {
//   if (e % 2 == 0) {
//     console.log(e);
//   }
// });

const isEven = (num) => {
  if (num % 2 == 0) {
    return num;
  }
};

let news = arr.filter(isEven);
// console.log(news);

const words = [
  "Suhail",
  "Roushan",
  "Apple",
  "Mango",
  "Android",
  "Samsung",
  "Ronak",
  "Man",
  "Sun",
  "Suzuki",
];
function search(num) {
  for (let i of words) {
    // console.log(i);
    let arr = [];
    arr.push(i);
    if (arr[0][0] == num[0]) {
      console.log(arr.join(""));
    }
  }
}
// search("A");

const prices = [1800, 2000, null, 3000, 5000, "Thousand", 500, 8000];

let ushar = prices.filter((e) => {
  if (e > 2000 && e != null) {
    console.log(e);
  }
});
