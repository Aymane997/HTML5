const i = prompt("Donnez la taille du tableau : ");
const tab = [];
let max = 0;
let min = 0;

for (let j = 0; j < i; j++) {
  tab[j] = parseInt(prompt(`Entrez l'élément ${j} du tableau.`));

  if (tab[j] > max) {
    max = tab[j];
  }
  if (tab[j] < min) {
    min = tab[j];
  }
}

alert(`Plus Grand : ${max}`);
alert(`Plus Petit : ${min}`);
