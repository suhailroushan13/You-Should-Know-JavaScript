import fetch from "node-fetch";
let data = "https://api.sgithub.com/users/suhailroushan13";

let user = fetch(data);

console.log(user);

user
  .then((d) => {
    console.log(d, d.urls);
    console.log(d.statuss);
  })
  .catch(() => {
    console.log("Error hai yeh");
  });
// A Promises is an Place Holder for a certain period of time ...which will be filled with value later from asynchronous operations

// A container for future value == Promises
