'use strict';

let body = document.querySelector('body');
let checkBtn = document.querySelector('.check');
let againBtn = document.querySelector('.again');
let guessInput = document.querySelector('.guess');
let message = document.querySelector('.message');
let secretNumber = document.querySelector('.secret-number');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');

let guessNumber;
let playerGuess;

// Generate the guess number
const generateGuessNumber = () => {
  guessNumber = Math.floor(Math.random() * 19 + 1);
  console.log(`Number is ${guessNumber}`);
};

generateGuessNumber();

// Get the player guess and check it
const onCheckBtn = () => {
  // Get player guess
  playerGuess = Number(guessInput.value);
  let playerScore = Number(score.textContent);

  // If no number
  if (!playerGuess) {
    message.textContent = '⛔ No Number!';
    // If player wins
  } else if (playerGuess === guessNumber) {
    message.textContent = '🎉 Your Guess Is Correct!';
    secretNumber.textContent = guessNumber;
    body.style.backgroundColor = '#80ED99';

    // Set highscore
    if (playerScore > Number(highscore.textContent)) {
      highscore.textContent = score.textContent;
    } else if (Number(highscore.textContent) === 0) {
      highscore.textContent = score.textContent;
    }
    // If guess too high
  } else {
    // Checks if guess is too high or too low and shows apropriate message
    playerGuess > guessNumber
      ? (message.textContent = '🧨 Too High! Guess Again!')
      : (message.textContent = '🧨 Too Low! Guess Again!');

    score.textContent = playerScore - 1;
  }
};

const onAgainBtn = () => {
  generateGuessNumber();

  body.style.backgroundColor = '#4a403a';
  secretNumber.textContent = '?';
  message.textContent = 'Start Guessing';
  guessInput.value = '';
  score.textContent = 20;
};

checkBtn.addEventListener('click', onCheckBtn);
againBtn.addEventListener('click', onAgainBtn);
