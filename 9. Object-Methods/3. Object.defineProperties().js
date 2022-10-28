let obj = {};

Object.defineProperties(obj, {
  property1: {
    value: true,
    writable: true,
  },
  property2: {
    value: "Hello",
    writable: false,
  },
});

console.log(obj); // {}
console.log(obj.property1); // true
console.log(obj.property2); // Hello

// Adding key value pair oin differnet style
// if u console object it will be empty

// if u console object with key it will be return value of it
