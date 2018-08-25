// Declaring Variables
// other variables
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var word = "";
var blanksWord = "";
var lettersGuessed = [];
var userguess = "";
var currentPresident;
var lastPresident;

// variables representing page content
var gameTitleText = document.getElementById("game_title");
var instructionsText = document.getElementById("instructions_text");
var blanksWordText = document.getElementById("blanksWord_text");
var lettersGuessedText = document.getElementById("lettersGuessed_text");
var guessesLeftText = document.getElementById("guessesLeft_text");
var winsText = document.getElementById("wins_text");
var lossesText = document.getElementById("losses_text");
var hangmanDrawing = document.getElementById("hangman_drawing")
var infoSection = document.getElementById("info_section");
var infoTitle = document.getElementById("info_title");
var infoImage = document.getElementById("info_img");
var infoName = document.getElementById("info_name");
var infoStats = document.getElementById("info_stats");

// function for setting the hangman drawing based on guesses left
function setDrawing() {
    var drawingNumber = 10 - guessesLeft;
    var drawingName;
    if (drawingNumber < 10) {
        drawingName = "assets/images/hangman0" + drawingNumber + ".png";
    }
    else {
        drawingName = "assets/images/hangman10.png";
    }
    hangmanDrawing.setAttribute("src", drawingName);
}

// Functions for writing content to various parts of the page
function writeInstructions(text) {
    instructionsText.innerHTML = text;
}

function writeBlanksWord() {
    blanksWordText.innerHTML = blanksWord;
}

function writeLettersGuessed() {
    lettersGuessedText.innerHTML = "Letters guessed: " + lettersGuessed;
}

function writeGuessesLeft() {
    guessesLeftText.innerHTML = "Guesses left: " + guessesLeft;
    setDrawing();
}

function writeWins() {
    winsText.innerHTML = "Wins: " + wins;
    document.getElementById("wins_and_losses").style.border = "2px solid blue";
    document.getElementById("wins_and_losses").style.background = "white";
}

function writeLosses() {
    lossesText.innerHTML = "Losses: " + losses;
}

function writeInfo(pres) {
    infoSection.style.border = "2px solid blue";
    infoSection.style.background = "white";
    infoTitle.innerHTML = "Last Round:";
    infoImage.innerHTML = '<img src="' + pres.imageLink + '" width=200= height="auto">';
    infoName.innerHTML = pres.fullName;
    infoStats.innerHTML = "Year born: " + pres.yearBorn + "<br>Year died: " + pres.yearDied + "<br>Years of presidency: " + pres.officeBegan + " - " + pres.officeEnded + "<br>Political party: " + pres.party;
}

// function for choosing random president from the array (returns president object)
function randomPresident() {
    var i = Math.floor(Math.random() * presidentsArray.length);
    return presidentsArray[i];
}

// function for making blanks word
function makeBlanksWord(word0) {
    blanksWord0 = "";
    for (i = 0; i < word0.length; i++) {
        if (word0[i] === " ") {
            blanksWord0 = blanksWord0 + " ";
        }
        else {
            blanksWord0 = blanksWord0 + "_";
        }
    }
    return blanksWord0;
}

// function to reset game
function newGame() {
    gameOver = false;
    // Reset letters guessed and guesses remaining
    lettersGuessed = [];
    guessesLeft = 9;
    //Reset word and corresponding blank word
    currentPresident = randomPresident();
    word = currentPresident.fullName;
    blanksWord = makeBlanksWord(word);

    console.log("word: " + word + "\nblanksWord: " + blanksWord);
    writeLettersGuessed();
    writeBlanksWord();
    writeGuessesLeft();
}

// function for starting the first round
function letTheGamesBegin() {
    writeInstructions("");
    writeWins();
    writeLosses();
    newGame();
}

// function for adding guess to lettersGuessed
function addToLettersGuessed(userGuess0) {
    lettersGuessed[lettersGuessed.length] = userGuess0;
    writeLettersGuessed();
}

// function verifying user guess is a valid guess
function isValid(g) {
    if (g.toLowerCase() === g.toUpperCase()) {
        return false;
    }
    else {
        g = g.toLowerCase();
        if (g==="a" || g==="b" || g==="c" || g==="d" || g==="e" || g==="f" || g==="g" || g==="h" || g==="i" || g==="j" || g==="k" || g==="l" || g==="m" || g==="n" || g==="o" || g==="p" || g==="q" || g==="r" || g==="s" || g==="t" || g==="u" || g==="v" || g==="w" || g==="x" || g==="y" || g==="z") {
            for (i = 0; i < lettersGuessed.length; i++) {
                if (g.toLowerCase() === lettersGuessed[i]) {
                    return false;
                }
            }
            return true;
        }
        else {
            return false;
        }
    }
}

// function for comparing guess to word and applying appropriate actions
function checkGuess(userGuess0) {
    var isWrong = true;
    var newBlanksWord = "";
    // compare the guess to each letter of the word and rebuild blanks word (filling in blank(s) if correct letter guessed)
    for (i = 0; i < word.length; i++) {
        if (userGuess0 === word[i].toLowerCase()) {
            isWrong = false;
            newBlanksWord = newBlanksWord + word[i];
        }
        else if (word[i] === " ") {
            newBlanksWord = newBlanksWord + " ";
        }
        else {
            newBlanksWord = newBlanksWord + blanksWord[i];
        }
    }
    // If the guess didn't match any letters in the word, user loses 1 from "guesses remaining"
    if (isWrong) {
        guessesLeft = guessesLeft - 1;
        writeGuessesLeft();
    }
    // If the letter is in the word, the new word with the corresponding blank(s) filled in is displayed
    else {
        blanksWord = newBlanksWord;
        writeBlanksWord();
    }
}

// function for accepting user guess
function getGuess() {
    document.onkeyup = function(event) {
    userGuess = event.key;
    }
}

// Win condition
function hasWon() {
    if (blanksWord === word) {
        return true;
    }
    else {
        return false;
    }
}

// Win sequence
function win() {
    wins = wins + 1;
    writeWins();
    gameOver = true;
}

// Loss condition
function lose() {
    losses = losses + 1;
    writeLosses();
    gameOver = true;
}

// Loss sequence
function hasLost() {
    if (guessesLeft <= 0) {
        return true;
    }
    else {
        return false;
    }
}