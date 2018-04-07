// GLOBAL VARIABLES------------------------------------

var randomNum;
var randomCrystal1;
var randomCrystal2;
var randomCrystal3;
var randomCrystal4;
var playerScore;
var winsCounter = 0;
var lossCounter = 0;

//console.log tests to make sure random functions are working appropriately
// console.log(randomNum);
console.log(randomCrystal1);
console.log(randomCrystal2);
// console.log(playerScore);

$(document).ready(function() {
//start or reset the game
  startGame();

//display total number of wins and losses and playerScore
  $("#wins").html(" " + winsCounter);
  $("#losses").html(" " + lossCounter);
// $("#user-score").html(" " + playerScore);

//when any crystal is clicked add it to the aggregate player score
  $("#crystal1").on('click', function() {
    $("#user-score").html(playerScore += randomCrystal1);
    winOrLose();
  });

  $("#crystal2").on('click', function() {
    $("#user-score").html(playerScore += randomCrystal2);
    winOrLose();
  });

  $("#crystal3").on('click', function() {
    $("#user-score").html(playerScore += randomCrystal3);
    winOrLose();
  });

  $("#crystal4").on('click', function() {
    $("#user-score").html(playerScore += randomCrystal4);
    winOrLose();
  });

  console.log(playerScore);

//when player score equals randomNum, wins go up by 1; if I go over, the losses go up by 1
  function winOrLose() {
      if (playerScore === randomNum) {
      winsCounter++;
      $("#wins").html(" " + winsCounter);
      startGame();
  } else if (playerScore > randomNum) {
      lossCounter++;
      $("#losses").html(" " + lossCounter);
      startGame();
    }
  }

//this function resets the game after each win or loss
  function startGame() {
    randomNum = Math.floor((Math.random() * 120) + 19);
    randomCrystal1 = Math.floor((Math.random() * 12) + 1);
    randomCrystal2 = Math.floor((Math.random() * 12) + 1);
    randomCrystal3 = Math.floor((Math.random() * 12) + 1);
    randomCrystal4 = Math.floor((Math.random() * 12) + 1);
    playerScore = 0;

    $("#random-score").html(randomNum);
    $("#user-score").html(" " + playerScore);
  }
}); 