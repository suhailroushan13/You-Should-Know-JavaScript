// Javascript Array toLocaleString()

// The toLocaleString() method returns a
// string representing the elements of the array in a particular locale.

// Any Array to String
// Does not change in Original Array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
console.log(arr.toLocaleString());
console.log(arr);

console.log(
  arr.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  })
);

const number = 123456.789;


console.log(
  number.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  })
);

// request a currency format
console.log(
  number.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
);
// → 123.456,79 €

// the Japanese yen doesn't use a minor unit
console.log(
  number.toLocaleString("ja-JP", { style: "currency", currency: "JPY" })
);
// → ￥123,457

// limit to three significant digits
console.log(number.toLocaleString("en-IN", { maximumSignificantDigits: 3 }));
// → 1,23,000

// German uses comma as decimal separator and period for thousands
console.log(number.toLocaleString("de-DE"));
// → 123.456,789

// Arabic in most Arabic speaking countries uses Eastern Arabic digits
console.log(number.toLocaleString("ar-EG"));
// → ١٢٣٤٥٦٫٧٨٩

// India uses thousands/lakh/crore separators
console.log(number.toLocaleString("en-IN"));
// → 1,23,456.789

// the nu extension key requests a numbering system, e.g. Chinese decimal
console.log(number.toLocaleString("zh-Hans-CN-u-nu-hanidec"));
// → 一二三,四五六.七八九

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(number.toLocaleString(["ban", "id"]));
// → 123.456,789

console.log(number);
