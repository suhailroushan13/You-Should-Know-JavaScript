// Block Scope of        VAR LET CONST
// Inside Block Scope    ✅  ✅  ✅
// Outside Block Scope   ✅  ❌  ❌

// VAR

// Block Scope of VAR
// VAR Block Scope Works Both Inside and Outside Scope
// Inside Block Scope     ✅ 
{
    var x = 10;
    var y = 20;
    console.log(x, y ,"VAR INSIDE BLOCK SCOPE ✅" );
  } 
  // Output :- 10,20
  
  //  Outside Block Scope  ✅
  {
    var x = 10;
    var y = 20;
  }
  console.log(x, y,"VAR OUTSIDE BLOCK SCOPE ✅");
  // Output :- 10,20
  
  // -------------------------------------------------------------------------------------
  
  
  // Block Scope of LET
  // Inside Block Scope    ✅
  {
    let a = 30;
    let b = 40;
    console.log(a, b,"LET INSIDE BLOCK SCOPE ✅");
  }
  
  //  Outside Block Scope  ❌
  
  // {
  //   let a = 30;
  //   let b = 40;
  // }
  // console.log(a, b,"LET OUTSIDE BLOCK SCOPE ❌");
  
  // -------------------------------------------------------------------------------------
  
  // Block Scope of CONST
  
  // Inside Block Scope   ✅ 
  {
      const c = 50;
      const d = 60;
      console.log(c, d,'CONST INSIDE BLOCK SCOPE ✅');
  }
  
  //  Outside Block Scope  ❌
  // {
  //     const c = 50;
  //     const d = 60;
  
  // }
  // console.log(c, d,"CONST OUTSIDE BLOCK SCOPE ❌");
  
  
  
  