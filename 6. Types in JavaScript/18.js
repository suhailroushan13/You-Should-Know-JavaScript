// Array Every()

const arr = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "male",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

for (let i of arr) {
  if (i.eye_color == "blue") {
    console.log(i.eye_color, i.name);
  }
}

for (let j = 0; j <= arr.length - 1; j++) {
  if (arr[j].eye_color == "blue") {
    console.log(arr[j].eye_color, arr[j].name);
  }
}

const masss = arr.every((e) => e.mass > 10);

console.log(masss);

const heights = arr.every((e) => e.height <= 202);
console.log(heights);

const males = arr.every((e) => e.gender == "male");
console.log(males);
