// throw

let num = 3;
let find = 3;
try {
  if (num == find) throw "Milgaaya";
  if (num < num / 2) throw "Less Than";
  if (num > num / 2) throw "Greater Than";
} catch (error) {
  console.log(error);
}
