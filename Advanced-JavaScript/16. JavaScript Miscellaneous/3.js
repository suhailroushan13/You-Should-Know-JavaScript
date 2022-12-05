let data =
  '{ "name": "Suhail", "age": 20, "isAlive": true, "address": { "city": "Hyderabad", "zip": 500045 } }';

let json = JSON.parse(data);
console.log(json);
console.log(json.name);
console.log(json.address.city);
