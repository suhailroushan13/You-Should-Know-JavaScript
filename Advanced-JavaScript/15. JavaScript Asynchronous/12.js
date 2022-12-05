//  setInterval() and ClearInterval()

let count = 0;

let data = setInterval(function () {
  console.log("Hello ");

  count = count + 1;
  if (count == 2) {
    clearInterval(data);
  }
}, 1000);

console.log(data);


