// for in Loop
// Use for Objects only ...Dont Use In Arrays (if index is matter for you)

let data = {
  name: "Suhail",
  age: 20,
  isAlive: true,
  favnum: [10, 20, 11],
  address: {
    city: "Hyderabad",
  },
};

for (let i in data) {
  console.log(`Key is this ${i} : ${data[i]} Value`);
}
