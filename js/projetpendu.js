// declaration variable globale :
let tablettre = ["informatique", "voyage", "fontaine", "musique", "piscine", "train", "moquette"];
var scores = 7;
let motMystère = "";
// ------------------------- fonctions--------------------

//1 Le but ici est de générer un choix aléatoire de l'ordi

function generateChoice() {
    let motRandom = Math.floor(Math.random() * Math.floor(tablettre.length));
    return tablettre[motRandom];
};

//2 function split le mot de l'ordi :

function splitWord() {
    let splitWord = Array.from(ChoixOrdi);
    return splitWord;
};

//Hide the word
function hideTheWord () {
    for (i = 0; i < choixOrdi.length; i++) {
        let motMystère = motMystère + ' _ ';
        return motMystère; //équivalent à la fonction (.push)
        }
};

//3 fonction qui demande choix du joueur
function askPlayerChoice() {
    let choice = prompt("Faites votre choix d'une seule lettre entre a et z " );
        if (choice.length === 1 && isNaN(choice)) {
            return choice;
        }
        else {
            alert("merci de saisir une seule lettre");
        }
};

//4 fonction comparaison lettre joueur/ordi
function comparaison(){
    if(splitWord.includes(ChoixPlayer))
    {
        for(i = 0; i < splitWord.length; i++)
        {
            if(choixPlayer === splitWord[i])
            { 
                hideTheWord[i] = choixPlayer;
                scores += 0;
                alert("Super ! Ta lettre : " + choixPlayer + "' est présente! \n" + hideTheWord.join());
            }
        }
    }
    else
    {
        scores -= 1
        alert("Essaye encore ! Il ne te reste que :" + playerPoints);
        return false;
    }
};


// -------------------------------------- mon code ------------------------------

alert("Vous venez dans le monde terrifiant du jeu du pendu");

let choixOrdi = generateChoice();
let 
alert("L'ordinateur a choisi ce mot :" + " " + motMystère);

while (scores > 0){
    choixPlayer = askPlayerChoice();
    let comparaison = comparaison ();

    if(hideTheWord.join() === splitWord.join()){
        alert("tu es un ou une winner, tu as gagné un cookie!");
        break;
    }
    
    // if the user's points fall to 0, the player has lost
    else if(playerPoints === 0){
        alert("C'est perdu... \nLe mot à trouver était : " + choixOrdi);
    } 
};
//var str = "informatique";
//console.log(str.split(""));
//["i", "n", "f", "o", "r", "m", "a", "t", "i", "q", "u", "e"]
//.join ?