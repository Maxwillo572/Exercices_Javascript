//Exo 3
// Demande à l'utilisateur de saisir un nombre
var nombre = parseInt(prompt("Entrez un nombre :"));

// Vérifie si le nombre est pair ou impair
if (nombre % 2 === 0) {
  console.log(nombre + " est un nombre pair.");
} else {
  console.log(nombre + " est un nombre impair.");
}