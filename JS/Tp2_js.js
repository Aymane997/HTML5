let distance = prompt("La distance: ");
let temps = prompt("Le temps : ");

console.log(typeof distance);
distance = parseInt(distance);
temps = parseInt(temps);

const vitesse = distance / temps;

console.log("la vitesse est :" + vitesse + "m/s");

alert(`la vitesse est : ${vitesse} m/s`);
