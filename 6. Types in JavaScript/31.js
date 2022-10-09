const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const search = (arr, num) => {
  if (arr.indexOf(num) == -1) {
    console.log("Unavaliable");
  } else {
    console.log("Hau hai re bhai");
  }
};

search(arr,10)