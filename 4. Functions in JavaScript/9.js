let print = function (number) {
  let n1 = number - 1;
  console.log(n1);
  if (n1 > 0) {
    print(n1);
  }
};
print(5);
