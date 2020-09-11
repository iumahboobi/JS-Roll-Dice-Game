var scores, roundScore, activePlayer, gamePlaying, lastDice;
newGame();

lastDice;
document.querySelector(".btn-roll").addEventListener("click", function() {
    //We wan all these codes to happen when gamePlaying is true

    if (gamePlaying) {
        var dice1 = Math.floor(Math.random() * 6 + 1);
        var dice2 = Math.floor(Math.random() * 6 + 1);

        // Display Result
        document.getElementById("dice-1").style.display = "none";
        document.getElementById("dice-2").style.display = "none";

        document.getElementById = "dice-1" + dice1 + ".png";
        document.getElementById = "dice-2" + dice2 + ".png";

    }


    //If player gets two 6 in a row so he will lose his/her all scores and switch to next player
    /**
    if (dice === 6 && lastDice === 6) {

        //player losses score

        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = '0';
        nextPlayer();

    } 
     */
    // Update the round score when the dice is not 1
    if (dice1 !== 1 && dice2 !== 1) {
        //adding dice result in our roundScore
        roundScore += dice1 + dice2;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
        //Switch to Next Player
        nextPlayer();
    }

});

document.querySelector(".btn-hold").addEventListener("click", function() {
    if (gamePlaying) {
        // Add current scores to global score
        scores[activePlayer] += roundScore;
        // Updating scores on User Interface

        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.input-score').value;
        var winningScore;

        if (input) { // here input is true while js coerced it to true
            winningScore = input;
        } else {
            winningScore = 100;
        }
        // Now check if the Player score is 50 and the player wins/ Replace the player name with winner
        if (scores[activePlayer] >= winningScore) {
            document.querySelector("#name-" + activePlayer).textContent = "Winner!!";
            document.getElementById("dice-1").style.display = "none";
            document.getElementById("dice-2").style.display = "none";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            //putting our gameplaying situation here to be false so that game stops
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector(".btn-new").addEventListener("click", newGame);

function newGame() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('dice-1').style.display = "none";
    document.getElementById('dice-2').style.display = "none";

    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    //Removing Winner class from both Panels
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    // Removing active class from both panel as we dont know who wins

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    // Add active class back to the first Player
    document.querySelector(".player-0-panel").classList.add("active");
}

function nextPlayer() {
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");


    document.getElementById('dice-1').style.display = "none";
    document.getElementById('dice-2').style.display = "none";
}

// We need gameplaying to be false for both dice and hold buttons.