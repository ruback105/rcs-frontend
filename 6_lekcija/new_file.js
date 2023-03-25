// for -> console.log 0...9
// for (let i = 0; i < 10; i += 1)
// 1 - mainīga deklarēšāna - let i = 0
// 2 - execution condition - i < 10
// 3 - kas notiek ar indeksu pēc cikla izpildes? - i += 1
for (let i = -10; i < 0; i += 1) {
  console.log(i);
}

// forEach -> console.log ["apple", "banana", "cherry"]
const fruits = ["apple", "banana", "cherry", "grape"];
// console.log(array[0]); // "apple"
// console.log(array[1]); // "banana"
// console.log(array[2]); // "cherry"
fruits.forEach((fruit) => {
  console.log(fruit);
});

// map -> console.log [1,2,3] => [1,4,9]
let dataArray = [1, 2, 3]; // [1, 4, 9]
const newArray = dataArray.map((number) => {
  return number * number;
}); // [1, 4, 9]
