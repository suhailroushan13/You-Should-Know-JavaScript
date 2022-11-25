console.log("Started");

let data = setTimeout(() => {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
}, 10000);

clearTimeout(data);
console.log("Ended");
for (let i = 0; i <= 10; i++) {
  console.log(i * 2);
}
