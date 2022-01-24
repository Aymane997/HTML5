const i = prompt("Donnez la taille du tableau : ");
const tab = [];
let somme = 0;

for (let j = 0; j < i; j++) {
  tab[j] = prompt(`Entrez l'élément ${j} du tableau.`);
  somme += parseInt(tab[j]);
}

console.log(somme);
