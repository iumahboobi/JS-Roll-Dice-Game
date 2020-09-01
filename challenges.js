/** Game Rules:
  - The game has 2 players, playing in rounds
  - In each turn, a player rolls a dice as many times as he wishes. Each result get added
  to his Round score
  - But if the player rolls a 1, akk this ROUND score gets lost. After that, its the next player's turn
  - The player can choose to 'hold', which means that his ROUND score gets added
  to his GLOBALscore. After that, it is the next player's turn
  - The first player to reach 100 points on GLOBAL score wins the game
 */

/** Crate fundamental game variables
 * How to generate a random number
 * How to maniuplate the DOM
 * How to read from the DOM
 * How to change the style
 */

/** The PIG Game */

/**1st we need  Score for each player, Round score and active player variables */
/** in second step We should create now a dice */
/** floor removes the decimal part of the number */

/** Setting all scores value and players current score to 0  (there are ids so we select them by giving ids) */

/** Now doing some DOM manipulation */
/** Object giving us access to DOM is document.querry selector object */
/** querry selector select elements from html */
/** since our active Player variable is 0 so by coercion javascript change the value if we just simply
 * type #current-0 activePlayer = it would be for activePlayer0 and if we change activePlayer =1  then it wouldbe for the
 * second player
 */

/** Active player variable should now track the player who is playing */
/** When ever you want to write HTML code it should be in string */

//document.querySelector('#content-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
/** To us equerry selector other way*/

/** querrySelector to change CSS */

/** Select the element in which the event will happen it would be the button of roll the dice */

var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector(".dice").style.display = "block";
document.querySelector(".btn-roll").addEventListener("click", function() {
    if (gamePlaying) {
        // 1. Random Number

        var dice = Math.floor(Math.random() * 6) + 1;

        //2. Display the Result
        var diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        /**Changing images of an image dice element */
        diceDOM.src = "./images/dice-" + dice + ".png";

        // 3. Update the round score  if the roll number was not a 1
        if (dice !== 1) {
            // Add Score
            roundScore += dice;
            //now to display the value on user interface
            document.querySelector(
                "#current-" + activePlayer
            ).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
    if (gamePlaying) {
        // add current score to player global score
        scores[activePlayer] += roundScore;

        // update user interface
        document.querySelector("#score-" + activePlayer).textContent =
            scores[activePlayer];

        //To check if player win the game
        if (scores[activePlayer] >= 20) {
            document.querySelector("#name-" + activePlayer).textContent = "Winner!!!";
            document.querySelector(".dice").style.display = "none";
            document
                .querySelector(".player-" + activePlayer + "-panel")
                .classList.add("winner");
            document
                .querySelector(".player-" + activePlayer + "-panel")
                .classList.remove("active");
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    //Next Player
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;

    // When player get 0 his/her current score should get 0 and also should be visible on UI.

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    // changing Active player color to another Active player as soon as player changes using toggle
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    // Now also when player get 1 and swwitching to other player the dice should also get invisible

    document.querySelector(".dice").style.display = "none";
}

/**Setter value */
//document.querySelector(`#current-` + activePlayer).textContent = dice;

/**Getter value */
//var x = document.querySelector('#score-0').textContent;

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector(".dice").style.display = "none";

    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    //exact same thing for active class
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    // now add back the active class to player 1
    document.querySelector(".player-0-panel").classList.add("active");
}