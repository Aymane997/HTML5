const i = prompt("Donnez la taille du tableau : ");
const tab = [];
let somme = 0;
let moyenne = 0;

for (let j = 0; j < i; j++) {
  tab[j] = prompt(`Entrez l'élément ${j} du tableau.`);
  somme += parseInt(tab[j]);
  moyenne = somme / tab.length;
}

console.log(somme);
console.log(moyenne);
