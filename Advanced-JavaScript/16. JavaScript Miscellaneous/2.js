// JSON With Array

let data = {
    "name": "Suhail",
    "age": 20,
    "isAlive": true,
    "address": {
        "city": "Hyderabad",
        "zip": 500045
    }
}

console.log(data.address);
console.log(data["address"]);
console.log(data["address"]["city"]);
console.log(data.address.city);


let obj = JSON.stringify(data)
console.log(obj);
