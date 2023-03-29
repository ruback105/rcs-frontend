// 1. Izveidojiet luksofora loģiku - atkarība no ieslēgtas gaismas izvadiet konsolē, vai mašīnas var braukt. Mainot mainīgu vērtības konsolē jāizvadās pareizs rezultāts.
const color = "red";

if (color === "red") {
  console.log("");
} else if (color === "yellow") {
  console.log("");
} else if (color === "green") {
  console.log("");
}

switch (color) {
  case "red":
    console.log("");
    break;
  case "yellow":
    console.log("");
    break;
  case "green":
    console.log("");
    break;
  default:
    console.log("");
}

// 2. Izveidot for ciklu, kas konsolē izvadīs ciparus no 9 līdz -9
for (let i = 9; i > -10; i--) {
  console.log(i);
}

// 3. Izveidot for ciklu, kas konsolē izvadīs ciparus no -50 līdz 50, ar soli 5. Tātad -50, -45, -40....50
for (let i = -50; i < 51; i += 5) {
  console.log(i); // -50 -> -45 -> 50
}

// 4. Ir dots masīvs ar nosaukumu `array`. Nepieciešams, izmantojot ciklu (for vai forEach), iziet cauri masīvam un uztaisīt jaunu masīvu, kas saturēs tikai ciparus no massīva `array`.
// Rezultāts pēc izpildes: newArray = [1, 2, 3]
let array = [1, 2, true, "a", "b", 3];
const newArray = [];
for (let i = 0; i < array.length; i += 1) {
  if (typeof array[i] === "number") {
    newArray.push(array[i]);
  }
}
console.log(newArray);

array.forEach((element) => {
  if (typeof element === "number") {
    newArray.push(element);
  }
});

array = array.filter((element) => typeof element === "number");

/* 5. Ir dots masīvs ar nosaukumu `names`. Izmantojot `map` ciklu, pārbaudiet un noformatējiet masīva ierakstus, lai:
   * Vārdos nav nevienas atstarpes
   * Vārdi sākas ar lielo burtu
   Opcionāli - lai tikai 1 burts ir liels, visi parējie mazi

   Katrai validācijai jāuztaisa funkciju, kas pieņems vārdu, un atgriezis noformatētu vārdu. Kā piemērs 1. funckijai - function removeSpaces(string) {...}
   Rezultātā `names` masīvs izskatīsies šādi: names = ["Jānis", "Kārlis", "Māris", "Dace", "Ervīns"];
*/
let names = [" Jānis ", "Kār lis", "māris", "dac e", "ErVīNs"];
