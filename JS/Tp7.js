// Tp 7
let nbr = prompt("Entrez un numéro compris entre 10 et 20 : ");

if (nbr < 20 && nbr > 10) {
  alert("Bravo!");
}
while (nbr > 20 || nbr < 10) {
  if (nbr > 20) {
    nbr = prompt("Entrez un numéro Plus petit ! : ");
  }
  if (nbr < 10) {
    nbr = prompt("Entrez un numéro Plus Grand ! : ");
  }
  if (nbr < 20 && nbr > 10) {
    alert("Bravo!");
  }
}
