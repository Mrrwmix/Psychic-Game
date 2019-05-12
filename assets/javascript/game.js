// global variables
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losing = 0;
var guessesLeft = 10;
var lastGuess = [];

// random letter function

function randomLetter() {
    var letterIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[letterIndex];
}

// generating the first lettter, onkeyup function, and updating text
var theLetter = randomLetter();

document.onkeyup = function(event){
    var theGuess = event.key;
    if (guessesLeft < 1){
        losing++;
        document.getElementById("result").innerText = "You lost! The letter was " + theLetter;
        theLetter = randomLetter();
        document.getElementById("losses").textContent = losing;
        guessesLeft = 10;
        lastGuess = [];
    }
    else if (theGuess == theLetter){
        wins++;
        document.getElementById("result").innerText = "You won! The letter was " + theLetter;
        theLetter = randomLetter();
        document.getElementById("winnies").textContent = wins;
        guessesLeft = 10;
        lastGuess = [];
        document.getElementById("remaining").textContent = "";
    }
    else {
        lastGuess.push(theGuess);
        document.getElementById("guesses").textContent = lastGuess;
        guessesLeft--;
    }
    document.getElementById("remaining").textContent = guessesLeft;
}


