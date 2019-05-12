// global variables
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var winText = document.getElementById("winnies").textContent;
var lossText = document.getElementById("losses").textContent;
var guessesLeftText = document.getElementById("remaining").textContent;
var guessesText = document.getElementById("guesses").textContent;
var wins = 0;
var losing = 0;
var guessesLeft = 10;
var lastGuess = [];

// random letter function

function randomLetter() {
    var letterIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[letterIndex];
}

// onkeyup logic
function psychicGame(event){
    if (guessesLeft == 10 || guessesLeft == 0){
    var theLetter = randomLetter();
    }
    if (lastGuess == theLetter){
        wins++;
    }
    else if (guessesLeft <= 0){
        losing++;
    } 
    else {
        lastGuess.push(document.onkeyup);
    }
}

//dynamically updating text

winText.innerText = wins;
lossText = losing;
guessesLeftText = guessesLeft;
guessesText = lastGuess;
