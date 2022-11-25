console.log("Hello");

let store = setTimeout(() => {
  console.log("I am SetTimeOut");
},5000);
clearTimeout(store);

console.log(`Id : ${store}`);
console.log("End");
