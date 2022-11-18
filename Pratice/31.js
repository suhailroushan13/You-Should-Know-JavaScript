class Student {
  constructor(name) {
    this.name = name;
  }
  get gettingName() {
    return name;
  }
  set settingName(x) {
    this.name = x;
  }
}

let a1 = new Student("Hello");
a1.settingName = "Suhail";
console.log(a1);

class Person {}

console.log(typeof Person);
