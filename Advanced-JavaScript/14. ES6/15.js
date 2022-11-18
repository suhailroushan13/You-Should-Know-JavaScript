// JavaScript Proxy

let student = { name: "Suhail", age: 23 };
let handler = {
  default: "NO PROP",
  get: function (target, prop, recivier) {
    if (prop in target) {
      return target[prop];
    } else {
      return this.default;
    }
  },

  set: function (target, prop, reciver) {
    if (prop in target) {
      return target[prop];
    } else {
      return this.default;
    }
  },
};

let test = new Proxy(student, handler);
console.log(test.name);
console.log(test.age);
console.log(test.grjklgr);
