// Function Scope          VAR   LET   CONST
// Inside Function Scope   ✅    ✅    ✅
// Outside Function Scope  ❌    ❌    ❌


// VAR
// Inside Block Scope     ✅
function home() {
    var x = 10;
    console.log(x, "VAR INSIDE BLOCK SCOPE ✅");
}
home();

//  Outside Block Scope  ❌

// function home2() {
//   var x = 10;
// }
// home2();
// console.log(x,"VAR OUTSIDE BLOCK SCOPE ❌");

// --------------------------------------------------------------------------------

// LET
// Inside Block Scope     ✅
function car() {
    let x = 11;
    console.log(x, "LET INSIDE BLOCK SCOPE ✅");
}
car();

// function car2() {
//     let x = 11;
// }
// car2();
// console.log(x, "LET OUTSIDE BLOCK SCOPE ❌");

// --------------------------------------------------------------------------------

function house() {
    const x = 12;
    console.log(x, "CONST INSIDE BLOCK SCOPE ✅");
}
house();

// function house2() {
//     const x = 12;
// }
// house2();
// console.log(x, "CONST OUTSIDE BLOCK SCOPE ❌");