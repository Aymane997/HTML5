// Tp 5 et Tp 4
const email_bd = prompt("Adresse email :");
const mdp_bd = prompt("Mot de passe :");

let email = prompt("Entrez votre Adresse email :");
let mdp = prompt("Entrez votre mot de passe :");

let compteur = 0;

while (email !== email_bd || mdp !== mdp_bd) {
  alert("Identifiants incorrect, réessayer");
  email = prompt("Entrez votre Adresse email :");
  mdp = prompt("Entrez votre mot de passe :");
  compteur += 1;
  if (compteur == 5) {
    alert(
      `Vous avez saisi des mauvais identifiants ${compteur} fois, votre compte est bloqué`
    );
    Break;
  }
}

if (email === email_bd && mdp === mdp_bd) {
  alert("Bienvenue!");
}
