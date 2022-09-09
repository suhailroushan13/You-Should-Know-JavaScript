// Difference Between var and let and const

// VAR

// Use of this keyword without varibale declaration is a default of var

//  var name = 'Jack';
//  name = 'Jack' // But this is not a good practice and its deprecated

// 1.Scoping
// 2. Reassignment
// 3. When we access a vaiable without declaring

// 1. Scoping
//  What is the scope of a variable?
//
//  There are three types of scope
// 1. Block Scope
// 2. Function Scope
// 3. Global Scope

// 1. Block Scope
{
  var x = "Hello";
}

// 2. Function Scope
function scope() {
  var x = "Hello";
}

// 3. Global Scope
var global = "I am Global";

// VAR USES

// 1. but if var is in a function scope ...then it can be only available in that function scope
// 2. if var is in global scope ...then it can be available in all the function scope and global scope
// 3. if var is in a function scope ..it will become function scope variable
// 4. if var is in a function scope .. you can acces it inside that function scope at any block...inside that function scope // Having it Multiple blocks
// 5. Var allows you to re declare the same variable

// WHY NOT TO USE VAR
//  1. It is not a good practice to use var
//  2. IF You asssign a value to a variable using var, it will be accessible in the global scope
// 3. If you assign var i = 1 and same let i = 1 and then it will be conflict with let
// 4. If you use var in a loop, it will be accessible in the global scope
// 5. Because the let i will be print everywhere out of the block as it is having the previous value of i from var
// 6 So let will become a global varibale...if u have same varibale using let and var
// 7. So Stop using var to declare variables
