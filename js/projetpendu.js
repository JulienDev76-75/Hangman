// declaration variable globale :
let tablettre = ["informatique", "voyage", "fontaine", "musique", "piscine", "train", "moquette"];
var scores = 7;
const commands = ["j","r","q"];
//------------------------------------------------------MES FONCTIONS------------------------------------------------------------
// 1 - function used to get choice user between "play", "rules" or "exit"
function getChoiceUserCommand(){
    do {
        var userCommand = prompt("Voici les commandes disponibles: \n j : Jouer \n r : Règles \n q : quitter");
    }
    while(!commands.includes(userCommand));
    return userCommand;
};

// 1bis - function used to generate a choice by the computer in the choicesCmp list
function generateChoiceRandom(){
    let random = Math.floor(Math.random() * Math.floor(tablettre.length));
    return tablettre[random];
};

// 2- function to divide the letters of the array into words: ["v","o","y","a","g","e"] => reference to the answerArray variable
function makeNewArray(){
    let newArr = Array.from(choiceComputer);
    return newArr;
};

//3 - function to hide letters with underscores: ["_ _ _ _ _ _ _"] => reference to the userResultArray variable
function hideLetter(){
    // display underscores
    let resultArray=[];
    for(i=0; i < answerArray.length; i++){
        resultArray.push(" _ ");
    }
    return resultArray;
};

//4 - function to check that the player has entered a letter and retrieve his chosen letter => userLetter variable
function getUserLetter(){
   for(let i = 0; i < 100 ; i++){
    let choiceUser = prompt(userResultArray.join() + "\n merci de saisir une lettre (entre a et z)");
    if (choiceUser.length === 1 && isNaN(choiceUser)){
        return choiceUser.toLowerCase();
    }
    else{
        alert("merci de saisir une seule lettre");
    }
   }    
};

//5 - function allowing to compare the selected letter with the word of the computer
function compareLetterOnWord(){
    if(answerArray.includes(userLetter)){
        for(i = 0; i < answerArray.length; i++){
            if(userLetter === answerArray[i]){ 
                userResultArray[i] = userLetter;
                alert("Oui la lettre '" + userLetter + "' est présente! \n" + userResultArray.join());
            }
        }
    }
    else{
        playerPoints -= 1
        alert("Non la lettre n'est pas présente \nPoints restants : " + playerPoints);
        return false;
    }
};

function play(){
    //Welcome
    alert("C'est partis!"); 
    choiceComputer = generateChoiceRandom();
    answerArray = makeNewArray();
    userResultArray = hideLetter();
    while(scores > 0)
    {
        userLetter = getUserLetter();
        compareLetterOnWord();

            if(userResultArray.join() === answerArray.join()){
                alert("Bravo, c'est gagné!");
                break;
            }
        
            else if(scores === 0){
            alert("C'est perdu... \nLe mot a trouver était : " + choiceComputer)
            } 
    }
};

//-------------------------------------------------- Rules && Play --------------------------------------------------------------------------------------

while(true){
    let choiceUserCommand = getChoiceUserCommand();
    if(choiceUserCommand === "j"){
        scores = 7;
        play();
    }
    else if(choiceUserCommand === "r"){
        alert("Voici les règles du jeu : Vous avez 7 coups pour gagner, si vous trouvez la bonne lettre, vous ne perdez pas de points. Bonne chance à vous !");
    }
    else{
        alert("A bientôt peut-etre!");
        break;
    }
};