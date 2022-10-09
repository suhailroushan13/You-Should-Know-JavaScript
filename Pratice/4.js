let ans = function (text) {
    let sum;
  setInterval(() => {
    for (let i = 0; i <= text.length; i++) {
    sum  = text[i];
    let arr = []
    arr.push(sum)
    console.log(arr);
    }
  }, 1000);
};
ans("hello");
