// // IF - else
// if (age >= 14 && age < 19) {
//   // logical condition
//   status = "Eligible."; // executed if condition is true
// } else {
//   // else block is optional
//   status = "Not eligible."; // executed if condition is false
// }

// // Switch
// switch (
//   new Date().getDay() // input is current day
// ) {
//   case 6: // if (day == 6)
//     text = "Saturday";
//     break;
//   case 0: // if (day == 0)
//     text = "Sunday";
//     break;
//   default: // else...
//     text = "Whatever";
// }

const age = 30;

if (typeof age === "number") {
  if (age >= 18) {
    console.log("Eligible");
  } else if (age >= 16) {
    console.log("Eligible but no drinking");
  } else {
    console.log("Not eligable");
  }
}

const dayOfWeek = 3;

switch (dayOfWeek) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("This day doesn't exist");
}
