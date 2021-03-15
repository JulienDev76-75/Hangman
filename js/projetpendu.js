// declaration variable globale :
let tablettre = ["informatique", "voyage", "fontaine", "musique", "piscine", "train", "moquette"];
let tabAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var scores = 7;
let motMystère = "";
let lettretrouver = "";

// ------------------------- fonctions--------------------

// 1 Le but ici est de générer un choix aléatoire de l'ordi
function generateChoice() {
let motRandom = Math.floor(Math.random() * Math.floor(tablettre.length));
return tablettre[motRandom];
}

//2 function demandant le choix du joueur :

function askPlayerChoice() {
let choice = prompt("Faites votre choix d'une seule lettre entre a et z " );
if (choice.length === 1 && isNaN(choice)) {
return choice;
}
else {
alert("merci de saisir une seule lettre");
}
};

3 // fonction
function test(){
for (var i = 0; i < choixOrdi.length; i++) { //Le joueur a choisi une lettre qui va être checkée dans une boucle si y'a une correspondance et si oui (il l'a remplace + scores)
if(choixOrdi.length.charAt(i) === choixPlayer){//si la lettre du joueur correspond au mot dans la boucle alors :
//motMystère += lettretrouver;
motMystère[i] = choixPlayer;
console.log(motMystère[i]);
}
else{
//motMystère += ' _ ';
scores -= 1;
}
}

};

// -------------------------------------- mon code ------------------------------

alert("Vous venez dans le monde terrifiant du jeu du pendu");

// fonction 1
let choixOrdi = generateChoice();
console.log(choixOrdi);

for (i = 0; i < choixOrdi.length; i++) { //Je crée une boucle qui parcoure le mot à trouver afin d'afficher le bon nombre de tirets.
motMystère = motMystère + ' _ ';//équivalent à la fonction .push
//motMystère.push("_");
}

alert("L'ordinateur a choisi ce mot :" + " " + motMystère);

//fonction 2
let choixPlayer = askPlayerChoice();
console.log(choixPlayer);

//fonction 3

//// appelez la fonction

//WHILE a faire




var str = "informatique";
console.log(str.split(""));
["i", "n", "f", "o", "r", "m", "a", "t", "i", "q", "u", "e"]
.join ?