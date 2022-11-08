// function.apply

const obj = {
  name: "Suhail",
  age: 20,
  call() {
    return `Name is ${this.name} and age is ${this.age}`;
  },
};

const obj2 = {
  name: "Roushan",
  age: 22,
};

let data = obj.call.apply(obj2)
console.log(data);

