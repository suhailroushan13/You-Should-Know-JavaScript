const first = {
  name: "Suhail",
  age: 20,
  call() {
    return `${this.name} and ${this.age}`;
  },
};

const second = {
  name: "Suhail",
  age: 20,
};

let data = first.call.bind(second);
console.log(data());
