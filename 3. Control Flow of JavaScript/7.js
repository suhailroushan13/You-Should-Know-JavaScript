// Nested if else
// Nested if...else Statement
// You can also use an if...else statement inside of an if...else statement. This is known as nested if...else statement.

// Example 4: Nested if...else Statement
// check if the number is positive, negative or zero
const number = prompt("Enter a number: ");

if (number >= 0) {
    if (number == 0) {
        console.log("You entered number 0");
    } else {
        console.log("You entered a positive number");
    }
} else {
    console.log("You entered a negative number");
}

// Enter a number: 5
// You entered a positive number