const number1 = 9;
const number2 = 10;

// console.log(number1);

function add(variable1, variable2) {
  const sumResult = variable1 + variable2;
  return sumResult; // 19
}

const newAdd = (variable1, variable2) => {
  const sumResult = variable1 + variable2;
  return sumResult; // 19
};

const shortenedNewAdd = (variable1, variable2) => variable1 + variable2;

const result = add(number1, number2);
// console.log(result);

const print = (el) => {
  console.log(el);
  return el;
};
const array = [1, 2, 3, 4, 5, 6];
array.forEach((el) => {
  print(el);
});
array.map((el) => {
  return el * 2;
});

[<p>Andris</p>, <p>Toms</p>, <p>Rihards</p>];

// 1 - no kā mēs atņemsim, 2 - ko mēs atņēmsim
// (100,25)   75
