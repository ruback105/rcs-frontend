// for
// let i = 0;
// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }
/*
let list = [4, 5, 6];

for (let i in list) {
   console.log(i); // "0", "1", "2",
}

for (let i of list) {
   console.log(i); // "4", "5", "6"
}
*/

// console.log("------------------");
// let test = 0;

// // while
// while (test < 15) {
//   console.log(test);
//   test += 3;
// }
// console.log("------------------");

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

// 1. katrs vārds sākas ar lielo burtu
// 2. Vārdos nav atstarpes
// 3. Vārdos nav ciparu
let dogNames = [" Fido ", "ci do", "Kido", "le1to"];

// for (let i = 0; i < dogNames.length; i++) {
//   let dog = dogNames[i];
//   dog = dog.replaceAll(" ", "");
//   let newName = "";

//   for (let j = 0; j < dog.length; j++) {
//     const char = dog[j];

//     if (char != Number(char)) {
//       newName += char; // F + i + d + o
//     }
//   }
//   dog = newName;
//   dog = capitalizeFirstLetter(dog);
//   dogNames[i] = dog;
// }

// console.log(dogNames);

// forEach
// dogNames.forEach((dog, idx) => {
//   dog = dog.replaceAll(" ", "");
//   dogNames[idx] = dog;
// });

// console.log(dogNames);
// map
dogNames = dogNames.map((dog) => dog.replaceAll(" ", ""));
console.log(dogNames);

// filter
// reduce
// find
// findIndex

// for -> console.log 1...10
// forEach -> console.log ["apple", "banana", "cherry"]
// map -> console.log [1,2,3] => [1,4,9]
