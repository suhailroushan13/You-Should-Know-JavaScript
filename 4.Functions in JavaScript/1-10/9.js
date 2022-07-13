function suhail() {
  console.log("I am First");
  console.log("I am Second");
  console.log("I am Third");
}
suhail();

function evenodd(a) {
  if (a % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

evenodd(9);

function box() {
  let i = 1;
  for (i; i <= 10; i++) {
    if (i == 4) {
      console.log("Stopped at four");

      box();
    }
    console.log(i);
    console.log("Hello");
  }
}
box();
