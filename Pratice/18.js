let n1 = "Suhail";
let n2 = "Roushan";
console.log("----------------");

//1.CharAt()

console.log(n1.charAt(1)); // u
console.log(n2.charAt(0)); // R

// 2. charCodeAt()
console.log("----------------");

console.log(n1.charCodeAt(0)); // S Unicode => 83

for (let i = 0; i < n1.length; ) {
  console.log(n1.charCodeAt(i));
  i++; // S Unicode => 83
}

/*
83 S
117 u
104 h
97 a
105 i
108 l
*/

// 3. CodePointAt()
console.log("----------------");

console.log(n1.codePointAt(0)); // S Unicode => 83

for (let i = 0; i < n1.length; ) {
  console.log(n1.codePointAt(i));
  i++; // S Unicode => 83
}

/*
83 S
117 u
104 h
97 a
105 i
108 l
*/

// 4. concat
console.log("----------------");

console.log(n1.concat(n2));

//5. endsWith()
console.log("----------------");

let n3 = "I am Suhail From Hyderabad";
console.log(n3.endsWith("Hyderabad")); // true
console.log(n3.endsWith("Mumbai")); // false

// 6. fromCharCode()

let n4 = 108;
console.log("----------------");

console.log(String.fromCharCode(n4)); // l

// 7. fromCharCode()

let n5 = 109;
console.log("----------------");

console.log(String.fromCharCode(n5)); // m

// 8. includes()

let n6 = "Hello I am Suhail I am From Hyderabad";
console.log("----------------");

console.log(n6.includes("I am")); // true

// 9. length()
console.log("----------------");

let n7 = "Suhail";
console.log(n7.length);

// 10. localcompare()
console.log("----------------");

let start = "a".localeCompare("b"); // -1
console.log(start);
let start1 = "b".localeCompare("a"); // 1
console.log(start1);
let start2 = "b".localeCompare("b"); // 0
console.log(start2);

// 11. match()
console.log("----------------");

let n8 = "I am Suhail Roushan Ali Suhail";
let reg = /Suhail/;
console.log(n8.match(reg));
console.log("----------------");

// 12. matchAll()
console.log("----------------");

console.log("Match ALL");

// 13. matchAll
let reg1 = /Suhail/g;
let output = n8.matchAll(reg1);
for (i of output) {
  console.log(i);
}

// 14. padEnd()

let n9 = "CODE";
console.log(n9.padEnd(10, "*"));

// 15. padStart()

let n10 = "Suhail";
console.log(n10.padStart(10, "*"));

// 16. repeat()

let n11 = "Hi";
console.log(n11.repeat(10));

// 17. replace

let n12 = "Hi I am Suhail Roushan";
console.log(n12.replace("Suhail", "Rayhaan"));

// 18. replaceAll

let n13 = "Hi I am Suhail Roushan";

console.log(n3.replaceAll("a", "i"));

// 19. Search()
let n14 = "Hi I am Suhail Roushan";

console.log(n14.search("Suhail")); // 0
console.log(n14.search("Hii")); // -1

// 20. slice()
// 0123456
let n15 = "ABCDEFG";
// 1234567

console.log(n15.slice(3, 6));

// 21.split

let n16 = "A.B.C.D.E.F";

console.log(n16.split("."));

// 22.startsWith()

let n17 = "Hi I am Suhail";
console.log(n17.startsWith("I am")); // false
console.log(n17.startsWith("Hi")); // true

// 23. substring
// 012345
let n18 = "Suhail";
// 123456
console.log(n18.substring(3, 6));

// 24. toLowerCase()

let n19 = "SUHAIL";
console.log(n19.toLowerCase());

// 25.toUpperCase()
let n20 = "suhail";
console.log(n20.toUpperCase());

// 26.trim()

let n21 = "    A B    C   ";
console.log(n21.trim());
