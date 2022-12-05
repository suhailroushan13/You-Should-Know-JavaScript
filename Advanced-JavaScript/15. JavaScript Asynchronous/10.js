let promise = new Promise((resolve, reject) => {
  resolve("Good");
});

let data = async () => {
  try {
    console.log("Hello");
  } catch (error) {
    console.log(error);
  }
};

data()
