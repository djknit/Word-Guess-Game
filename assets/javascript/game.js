// Declaring Variables
// Variables representing page content
var gameTitleText = document.getElementById("game_title");
var blanksWordText = document.getElementById("blanksWord_text");
var lettersGuessedText = document.getElementById("lettersGuessed_text");
var guessesLeftText = document.getElementById("guessesLeft_text");
var winsText = document.getElementById("wins_text");
var lossesText = document.getElementById("losses_text");
var infoSection = document.getElementById("info_section");

// Other variables
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var word = "";
var blanksWord = "";
var lettersGuessed = [];
var userguess = "";

// Function for choosing random president from the array (returns president object)
function randomPresident() {
    var i = Math.floor(Math.random() * presidentsArray.length);
    return presidentsArray[i];
}

// Function that takes a word and returns the blanks version
function makeBlanksWord(word_) {
    var blanksWord_ = "";
    for (i = 0; i < word_.length; i++) {
        if (word_[i] === " ") {
            blanksWord_ = blanksWord_ + " ";
        }
        else {
            blanksWord_ = blanksWord_ + "_";
        }
    }
    return blanksWord_;
}