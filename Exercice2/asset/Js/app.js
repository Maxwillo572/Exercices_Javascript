// Demande à l'utilisateur de saisir le premier nombre
var number1 = prompt("Entrez le premier nombre :");

// Demande à l'utilisateur de saisir le deuxième nombre
var number2 = prompt("Entrez le deuxième nombre :");

// Convertit les nombres saisis en nombres entiers
number1 = parseInt(number1);
number2 = parseInt(number2);

// Calcule la somme des deux nombres
var somme = number1 + number2;

// Affiche le résultat de l'addition
var message = "Le résultat de l'addition est : " + somme;
alert(message);
console.log(message); // Affiche le message dans la console du navigateur
