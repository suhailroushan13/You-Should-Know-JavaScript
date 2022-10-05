function ShowMessage(firstName, lastName) {
  console.log("Hello " + arguments[0] + " " + arguments[1]);
}

ShowMessage("Steve", "Jobs");

ShowMessage("Bill", "Gates");

ShowMessage(100, 200);
