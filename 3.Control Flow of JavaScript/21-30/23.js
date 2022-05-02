// Type Conversions

// In programming, type conversion is the process of converting data of one type to another. For example: converting String data to Number.

// There are two types of type conversion in JavaScript.

// Implicit Conversion - automatic type conversion
// Explicit Conversion - manual type conversion



// JavaScript Implicit Conversion
// In certain situations, JavaScript automatically converts one data type to another (to the right type). This is known as implicit conversion.

// Example 1: Implicit Conversion to String
// numeric string used with + gives string type
let result;

result = '3' + 2; 
console.log(result) // "32"

result = '3' + true; 
console.log(result); // "3true"

result = '3' + undefined; 
console.log(result); // "3undefined"

result = '3' + null; 
console.log(result); // "3null"



// Example 2: Implicit Conversion to Number

// numeric string used with - , / , * results number type

let result1;

result1 = '4' - '2'; 
console.log(result1); // 2

result1 = '4' - 2;
console.log(result1); // 2

result1 = '4' * 2;
console.log(result1); // 8

result1 = '4' / 2;
console.log(result1); // 2



// Example 3: Non-numeric String Results to NaN
// non-numeric string used with - , / , * results to NaN

let result2;

result2 = 'hello' - 'world';
console.log(result2); // NaN

result2 = '4' - 'hello';
console.log(result2); // NaN



// Example 4: Implicit Boolean Conversion to Number
// if boolean is used, true is 1, false is 0

let result3;

result3 = '4' - true;
console.log(result3); // 3

result3 = 4 + true;
console.log(result3); // 5

result3 = 4 + false;
console.log(result3); // 4



// Example 5: null Conversion to Number 
// null is 0 when used with number
let result4;

result4 = 4 + null;
console.log(result4);  // 4

result4 = 4 - null;
console.log(result4);  // 4


// Example 6: undefined used with number, boolean or null
// Arithmetic operation of undefined with number, boolean or null gives NaN

let result5;

result5 = 4 + undefined;
console.log(result5);  // NaN

result5 = 4 - undefined;
console.log(result5);  // NaN

result5 = true + undefined;
console.log(result5);  // NaN

result5 = null + undefined;
console.log(result5);  // NaN



// JavaScript Explicit Conversion
// You can also convert one data type to another as per your needs. The type conversion that you do manually is known as explicit type conversion.

// In JavaScript, explicit type conversions are done using built-in methods.

// Here are some common methods of explicit conversions.

// 1. Convert to Number Explicitly
// To convert numeric strings and boolean values to numbers, you can use Number(). For example,


let result6;

// string to number
result6 = Number('324');
console.log(result6); // 324

result6 = Number('324e-1')  
console.log(result6); // 32.4

// boolean to number
result6 = Number(true);
console.log(result6); // 1

result6 = Number(false);
console.log(result6); // 0
// In JavaScript, empty strings and null values return 0. For example,

let result7;
result7 = Number(null);
console.log(result7);  // 0

let result8 = Number(' ')
console.log(result8);  // 0


// If a string is an invalid number, the result will be NaN. For example,

let result9;
result9 = Number('hello');
console.log(result9); // NaN

result9 = Number(undefined);
console.log(result9); // NaN

result9 = Number(NaN);
console.log(result9); // NaN



// Note: You can also generate numbers from strings using parseInt(), parseFloat(), unary operator + and Math.floor(). For example,

let result10;
result10 = parseInt('20.01');
console.log(result10); // 20

result10 = parseFloat('20.01');
console.log(result10); // 20.01

result10 = +'20.01';
console.log(result10); // 20.01

result10 = Math.floor('20.01');
console.log(result10); // 20


// 2. Convert to String Explicitly
// To convert other data types to strings, you can use either String() or toString(). For example,

//number to string
let result11;
result11 = String(324);
console.log(result11);  // "324"

result11 = String(2 + 4);
console.log(result11); // "6"

//other data types to string
result11 = String(null);
console.log(result11); // "null"

result11 = String(undefined);
console.log(result11); // "undefined"

result11 = String(NaN);
console.log(result11); // "NaN"

result11 = String(true);
console.log(result11); // "true"

result11 = String(false);
console.log(result11); // "false"

// using toString()
result11 = (324).toString();
console.log(result11); // "324"

result11 = true.toString();
console.log(result11); // true

// Note: String() takes null and undefined and converts them to string.
// However, toString() gives error when null are passed.


// 3. Convert to Boolean Explicitly
// To convert other data types to a boolean, you can use Boolean().
// 
// In JavaScript, undefined, null, 0, NaN, '' converts to false. For example,

let result12;
result12 = Boolean('');
console.log(result12); // false

result12 = Boolean(0);
console.log(result12); // false

result12 = Boolean(undefined);
console.log(result12); // false

result12 = Boolean(null);
console.log(result12); // false

result12 = Boolean(NaN);
console.log(result12); // false
// All other values give true. For example,

result12 = Boolean(324);
console.log(result); // true

result12 = Boolean('hello');
console.log(result12); // true

result12 = Boolean(' ');
console.log(result12); // true



// JavaScript Type Conversion Table
// The table shows the conversion of different values to String, Number, and Boolean in JavaScript.

// Value	StringConversion	Number Conversion	Boolean Conversion
// 1	         "1"	                    1               true
// 0	      	 "0"	                 	0	            false
// "1"	      	 "1"	                 	1           	true
// "0"		     "0"	                 	0	            true
// "ten"	    "ten"	                   NaN	            true
// true	        "true"	           	        1	            true
// false	    "false"	                	0       	    false
// null	        "null"	                    0	            false
// undefined	"undefined"	               NaN      	    false
// ''	      	  ""	                 	0	            false
// ' '	      	  " "	                 	0	            true