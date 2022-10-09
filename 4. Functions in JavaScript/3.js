var square = function (x) {
  var result = x * x;
  console.log(result);
};
square(3);

/*


There is actually a very clear distinction between these calls. 
console.log() is a function used to print information to the console. 
return on the other hand is a call to pass some value back up to where the call was made. 
For instance, let’s say you create a function called square() that takes in a single numeric parameter and returns that value squared.
Your function would look like the following:

var square = function square(x) {
  return x*x;
};
You would call your function like this: var ans = square(5);

This would set ans equal to the value returned by square() but will not print it to the console.
Hence, the return statement is passing the value x*x back to the call of square. 
If you want to view the value in ans, you would write: console.log(ans); or to simplify the problem as a whole you could write: console.log(square(5)); and my guess is you have this last line in your code which is why you are confused.

Hope this helps, Dustin =D
 
 
 
 
*/
