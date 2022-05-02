// for (start from ; end till ; n++ or n--)
// {
// Block of code
// }

// If there is no end condition ..then it will go in infinite loop

// for loop is an Entry Controlled Loop
// first check condtion then perform Loop
// if condition is ok then go in loop or else not
// for (let n = 1; n<=10; n++)
// {
//     console.log(n);

// }
function table(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${i * num}`);
  }
}

table(5);


// Initilizatio is Optional 
// U can decalre above the loop
// But semi-colon ; is important....2 semi-colons are important in a for loop;


// function table(num) {
// let n = 1;

//   for (; i <= 10; i++) {
//     console.log(`${num} x ${i} = ${i * num}`);
//   }
// }

// table(5);