const nom = "Christian lisangola";
const voy = "aeiouy";

let voyelle = "";
let consonne = "";

for (let i = 0; i < nom.length; i++) {
  if (voy.includes(nom[i])) {
    voyelle += nom[i].toLowerCase();
  } else {
    consonne += nom[i].toLowerCase();
  }
}

console.log("les voyelles :" + voyelle);
console.log("les consonnes :" + consonne);
