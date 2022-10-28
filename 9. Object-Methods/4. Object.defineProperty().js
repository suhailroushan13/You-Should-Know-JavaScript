let obj = {};

// with a data property descriptor
Object.defineProperty(obj, "property1", {
  value: 788,
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(obj.property1); // 788

// with an accessor property descriptor
Object.defineProperty(obj, "property2", {
  get() {
    console.log("Getting Value...");
    return val;
  },
  set(newVal) {
    console.log("Setting Value...");
    val = newVal;
  },
  enumerable: true,
  configurable: true,
});

obj.property2 = 6969; // Setting Value...

console.log(obj.property2); // 6969


