// setTime in try..catch

try {
  setTimeout(() => {
    console.log("Hello");
    console.log(c);
  }, 4000);
} catch (error) {
  console.log(`Error is : ${error}`);
}
// Output:-
// ReferenceError: c is not defined
//     at Timeout._onTimeout
// (/home/suhail/u-noob-learn-javascript/Advanced-JavaScript/13. Exceptions and Modules/4. other.js:6:17)
// at listOnTimeout (node:internal/timers:559:17)
// at processTimers (node:internal/timers:502:7)

setTimeout(function () {
  try {
    console.log("Hello");
    console.log(c);
  } catch (error) {
    console.log(`Error is : ${error}`);
  }
}, 4000);

// Output:-
// Hello
// Error is : ReferenceError: c is not defined
