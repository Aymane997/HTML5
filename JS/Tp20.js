function RotTab(table, nbrRot, sens) {
  let elem = 0;
  for (let i = 0; i < nbrRot; i++) {
    if (sens === "Droite") {
      elem = table.pop();
      table.unshift(elem);
    }
    if (sens === "Gauche") {
      elem = table.shift();
      table.push(elem);
    }
  }
  return table;
}

const i = prompt("Donnez la taille du tableau : ");
const tableau = [];

for (let j = 0; j < i; j++) {
  tableau[j] = prompt(`Entrez l'élément ${j} du tableau.`);
}

const nRot = prompt("Donnez le nombre de rotation du tableau : ");
const S = prompt("Donnez le sens de rotation du tableau : ");

console.log(`[${RotTab(tableau, nRot, S)}]`);
