let data = async () => {
  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p1 took 5 Seconds");
    }, 5000);
  });

  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p2 took 3 seconds");
    }, 3000);
  });
  let s1 = await p1;
  let s2 = await p2;
  console.log(s1);
  console.log(s2);
};

data();
