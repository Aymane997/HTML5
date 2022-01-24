const i = prompt("Donnez la taille du tableau : ");
const tab1 = [];
const tab2 = [];
const res = [];

for (let j = 0; j < i; j++) {
  tab1[j] = parseInt(prompt(`Entrez l'élément ${j + 1} du tableau 1.`));
  tab2[j] = parseInt(prompt(`Entrez l'élément ${j + 1} du tableau 2.`));

  res[j] = tab1[j] + tab2[j];
}

alert(`[${res}]`);
