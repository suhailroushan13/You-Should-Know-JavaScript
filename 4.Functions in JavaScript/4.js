/*
A JavaScript Function with a Return Statement
1. A function can also return a value.
2. The return statement is used to return a value from a function.
3. The return statement ends function execution and specifies a value to be returned to the function caller.
4. The return statement can be used to return a value from a function.
5. After the return statement (if any), the function will stop executing.
6. If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
7. Functions often compute a return value. The return value is "returned" back to the "caller":
8. The code that called the function can "receive" the return value in a variable.
9. The return statement can be used without a value. In this case, the function will return undefined.
10.Return values are often used in expressions.The return value of a function can be used as a value for a variable: 
*/

function sum(a, b) {
  console.log(a + b);
}
let total = sum(3, 3);
console.log(total); 
// 
// Output:
// 6
// undefined


// To remove that undefined we use the return statement
// If we dont use the return statement then the function will return undefined
// If we use the return statement then the function will return the value
// If we dont use the return it will not allow the function to store the variable in next variable
// If we use the return it will allow the function to store the variable in next variable..without getting undefined

function sum2(a, b) {
  return a + b;
}
let total1 = sum2(3, 3);
console.log(total1);
//
// Output:
// 6




