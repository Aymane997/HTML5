// Tp 19
function SommeDiags(matrice) {
  let sumDiagonale = 0;
  let sumDiagonaleReverse = 0;
  for (let i = 0; i < taille; i++) {
    sumDiagonale += matrice[i][i];
    sumDiagonaleReverse += matrice[i][taille - 1 - i];
  }
  return sumDiagonaleReverse + sumDiagonale;
}
const taille = prompt("Donnez la taille du tableau : ");
const tab = [];

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

console.log(SommeDiags(tab));
