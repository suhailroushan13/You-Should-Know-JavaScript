const person = {
  name: "Steve",
  age: 56,
  isMarried: true,
  address: {
    city: "San Francisco",
    state: "California",
    country: "USA \n",
  },
  fun: function () {
    return "\n Hello \n";
  },
  phone: 1234567890,
};


person.say = function () {
    return "Hello Say";
}
console.log(person,person.fun(),person.say());
