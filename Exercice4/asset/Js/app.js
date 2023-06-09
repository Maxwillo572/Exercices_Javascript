// Demande à l'utilisateur son âge
var age = parseInt(prompt("Quel est votre âge ?"));

// Vérifie si l'âge est inférieur à 0 ou si la valeur entrée n'est pas un nombre
if (age < 0 || isNaN(age)) {
  alert("Cette personne n'existe pas !");
  console.log("Cette personne n'existe pas !");
}
// Vérifie si l'âge est égal à 0
if (age === 0) {
  alert("Cette personne vient de naître !");
  console.log("Cette personne vient de naître !");
}
// Vérifie si l'âge est supérieur ou égal à 18
if (age >= 18) {
  alert("Vous êtes majeur !");
  console.log("Vous êtes majeur !");
}
// Si aucune des conditions précédentes n'est satisfaite, alors l'âge est inférieur à 18
if (age <= 18) {
  alert("Vous êtes mineur !");
  console.log("Vous êtes mineur !");
}
