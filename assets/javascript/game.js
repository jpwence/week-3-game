
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Sets the starting point
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;


var updateGuessesLeft = function() {
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

var updateGuessesSoFar = function() {
  document.querySelector('#sofar').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

// Function for reset
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();


//This is the function for user's guess
document.onkeyup = function(event) {
    if (event.which <= 90 && event.which >= 65) {
    guessesLeft--;
    var userGuess = event.key.toLowerCase();

  guessedLetters.push(userGuess);

  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("Yay! You beat the computer!");
                reset();
              }
            }

        else if(guessesLeft == 0){
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Sorry! You lose. Try again.");
            reset();
          }
      }
};