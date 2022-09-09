// Global Scope                  VAR  LET   CONST
// Inside of the global Scope    ✅   ✅    ✅
// Outside of the global Scope   ✅   ✅    ✅

// VAR

var a = "apple";

function tree() {
  console.log(a, "----Global Scope Works Anywhere in the global Scope✅");
}
tree();

// LET

let b = "banana";

function tree2() {
  console.log(b, "----Global Scope Works Anywhere in the global Scope✅");
}
tree2();

// CONST

const c = "chocolate";

function tree3() {
  console.log(c, "----Global Scope Works Anywhere in the global Scope✅");
}
tree3();
