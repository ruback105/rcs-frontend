var abc = "abcdefghijklmnopqrstuvwxyz";
var esc = "I don't \n know"; // \n new line
var len = abc.length; // string length

// abc.indexOf("lmno"); // find substring, -1 if doesn't contain
// abc.lastIndexOf("lmno"); // last occurance

// console.log(abc);
const cutted = abc.slice(3, 6); // cuts out "def", negative values count from behind
// console.log(cutted);

abc.replace("abc", "123"); // find and replace, takes regular expressions
abc.replaceAll("abc", "123"); // find and replace, takes regular expressions
abc.toUpperCase(); // convert to upper case
abc.toLowerCase(); // convert to lower case
// abc.concat(" ", str2); // abc + " " + str2
// abc.charAt(2); // character at index: "c"
// abc[2]; // unsafe, abc[2] = "C" doesn't work
// abc.charCodeAt(2); // character code at index: "c" -> 99
// abc.split(","); // splitting a string on commas gives an array
// abc.split(""); // splitting on characters
// const number = 128;
// number.toString(16); // number to hex(16), octal (8) or binary (2)

const name = "Arturs";

const doubleQuotes = "Hello world";
const singleQuotes = "Hello world";
const superString = `Hello world ${name} test`;

let test = "Hello  m y  na me  is"; // Hello my name is
console.log(test);
test = test.replaceAll("  ", "&nbsp;");
console.log(test);
test = test.replaceAll(" ", "");
console.log(test);
test = test.replaceAll("&nbsp;", " ");
console.log(test);

const text = "Hello,world,!";
console.log(text.split(","));
