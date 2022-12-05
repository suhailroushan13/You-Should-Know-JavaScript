// Promises

let data = new Promise(function (resolve, reject) {
  resolve();
  reject();
});

data
  .then(function () {
    console.log("I am Cool");
  })
  .then(() => {
    console.log("I am From Coool 2", de);
  })
  .then(() => {
    console.log("I am tHIRD Cool");
  })
  .catch(() => { 
    console.log("I am Error");
  });
