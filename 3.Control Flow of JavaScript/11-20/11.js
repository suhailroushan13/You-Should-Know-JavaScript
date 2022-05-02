 // Create the function
var timesTable = function (number) {
  // Create the for loop
  for (var i = 1; i <= 5; i++) {
    var answer = number * i;
    console.log(number + " times " + i + " equals " + answer);
  }
};

timesTable(12);
