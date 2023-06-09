// Demande à l'utilisateur de saisir une phrase
var phrase = prompt("Entrez une phrase :");
console.log(phrase.length)

// Compte le nombre de mots dans la phrase
var mots = phrase.split(" ");
var nombreMots = mots.length;

// Affiche le nombre de mots dans la phrase
alert("Le nombre de mots dans la phrase est : " + nombreMots);
