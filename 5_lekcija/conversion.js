// // String
let variable = 123;

String(123); // explicit
// 123 + ""; // implicit

String(123); // '123'
String(-12.3); // '-12.3'
String(null); // 'null'
String(undefined); // 'undefined'
String(true); // 'true'
String(false); // 'false'

// // Boolean
Boolean(2); // explicit
if (2) {
} // implicit due to logical context
!!2; // implicit due to logical operator == Boolean(2)

Boolean(""); // false
Boolean(0); // false
Boolean(-0); // false
Boolean(NaN); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(false); // false

// Boolean({}); // true
// Boolean([]); // true
// Boolean(Symbol()); // true
// !!Symbol(); // true
// Boolean(function () {}); // true

// // Number
Number(null); // 0
Number(undefined); // NaN
Number(true); // 1
Number(false); // 0
Number(" 12 "); // 12
Number("-12.34"); // -12.34
Number("\n"); // 0
Number(" 12s "); // NaN
Number(123); // 123
