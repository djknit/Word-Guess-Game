var hasBegun = false;

document.onkeyup = function() {
    if (hasBegun === false) {
        hasBegun = true;
        letTheGamesBegin();
        document.onkeyup = function(event) {
            userGuess = event.key;
            if (isValid(userGuess)) {
                userGuess = userGuess.toLowerCase();
                checkGuess(userGuess);
                addToLettersGuessed(userGuess);
                writeInstructions("");
            }
            else {
                writeInstructions("Invalid input detected.")
            }
            if (hasWon()) {
                win();
            }
            else if (hasLost()) {
                lose();
            }
            if (gameOver === true) {
                lastPresident = currentPresident;
                writeInfo(lastPresident);
                setTimeout(function() {
                    newGame();
                }, 800);
            }
        }      
    }
}