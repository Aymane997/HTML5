const taille = prompt("Donnez la taille du tableau : ");
const tab = [];
let somme = 0;

for (let i = 0; i < taille; i++) {
  const ligne = [];
  for (let j = 0; j < taille; j++) {
    ligne.push(
      parseInt(
        prompt(
          `Entrez l'élément de la ligne ${i + 1} et la colonne ${
            j + 1
          } de la matrice.`
        )
      )
    );
  }
  tab.push(ligne);
}

for (let i = 0; i < taille; i++) {
  somme += tab[i][i];
}

console.log(somme);
