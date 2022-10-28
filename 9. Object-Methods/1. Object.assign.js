let a1 = {
  name: "Suhail",
  age: 20,
};

let newA1 = {};

let copy = Object.assign(newA1, a1);
console.log(newA1);//{ name: 'Suhail', age: 20 }
newA1.ok = "Hi"
console.log(newA1); //{ name: 'Suhail', age: 20, ok: 'Hi' }

console.log(copy == newA1); // true
console.log(copy); //{ name: 'Suhail', age: 20, ok: 'Hi' }

// It copies whole object into an new Object with a referncene one