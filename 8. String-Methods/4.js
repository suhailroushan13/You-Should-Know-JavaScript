let names = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let result = names.codePointAt(0);

console.log(result);

for (let i = 0; i <= names.length - 1; i++) {
  let out = names.codePointAt(i);
  console.log(out);
}
