// Promises

let value = new Promise(function (resolve, reject) {
  resolve("Hau Bhai Resolve Hogaya");
  reject("Error");
});

value
  .then(() => {
    let data = true;
    if (data) console.log("True");
  })
  .catch(() => {
    console.log("Error");
  });
