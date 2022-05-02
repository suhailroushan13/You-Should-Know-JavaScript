function table(num) {
  for (let i = 1, j = 1; i <= 10 && j <= 10; i++, j++) {
    console.log(`${num} x ${i} = ${i * num},${j * 1}`);
  } 
}

table(5);
