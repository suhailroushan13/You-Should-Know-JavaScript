const a1 = {
  name: "Suhail",
  age: 20,
};

const { name: fullname, age: saal } = { ...a1 };

const a2 = Object.assign(
  {},
  {
    fullname,
    saal,
  }
);

console.log(a2);
