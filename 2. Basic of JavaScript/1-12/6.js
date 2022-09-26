function box() {
    var a = "i am a";
    console.log("Function Scope");
    console.log(a);
  }

  box();
  
  
  // Here Var a is working inside function scope
  
  // function box() {
  //   var a = "i am a";
  //   console.log("Function Scope");
  // }
  // box();
  // console.log(a);
  
  // VAR USES
  
  // 1. but if var is in a function scope ...then it can be only available in that function scope
  // 2. if var is in global scope ...then it can be available in all the function scope and global scope
  // 3. if var is in a function scope ..it will become function scope variable
  // 4. if var is in a function scope .. you can acces it inside that function scope at any block...inside that function scope // Having it Multiple blocks
  // 5. Var allows you to re declare the same variable
  
  // LET USES
  
  // 1. let can only be used in a block scope
  // 2. if let is in a function scope ...then it can be only available in that function scope
  // 3. if let is in global scope ...then it can be available in all the global scope but not in function scope
  // 4. let will dont allow you to redeclare the same variable
  
  // let a = "hello;
  // let a = "bye"; // Error a is re declared
  
  //  But you can have this
  //  let a = "hello";
  //  a = "bye";
  // console.log(a) ; // This will work
  
  // let a = 'hello';
  
  // function box() {
  //     // console.log(a);
  //     console.log("Function Scope");
  // }
  
  // console.log(a);
  
  // CONST USES
  // const c = 'hello';
  // c =  'bye'; // Error c is a constant variable
  
  //  1. const is a constant variable
  // 2. const is a block scope variable
  // 3. const will not work out of the function scope
  // 4. const will not allow you to redeclare the same variable
  // 5. const will not allow you to reassign the same variable
  // const cc = 'cc'
  
  // function box() {
  //     console.log('Const Scope');
  
  //     console.log(cc);
  // }
  // box();
  // Output: cc
  
  // If const is declared outside .....you can still access inside the function
  // If const is declared inside .....you can not access outside the function
  