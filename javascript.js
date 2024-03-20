const minNumber = 20;
const maxNumber = 50;
const maxAttempts = 5;

let randomNumber = generateRandomNumber(minNumber, maxNumber);
let attempts = 0;

const guessInput = document.getElementById('guess');
const checkButton = document.getElementById('check');
const messageDisplay = document.getElementById('message');

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkGuess() {
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < minNumber || guess > maxNumber) {
    setMessage('Please enter a valid number between 20 and 50.', 'red');
    return;
  }

  attempts++;

  if (guess === randomNumber) {
    setMessage(`Congratulations! You've guessed the correct number (${randomNumber}) in ${attempts} attempts.`, 'green');
    guessInput.disabled = true;
    checkButton.disabled = true;
  } else if (guess < randomNumber) {
    setMessage('Too low! Try a higher number.', 'blue');
  } else {
    setMessage('Too high! Try a lower number.', 'blue');
  }

  if (attempts === maxAttempts) {
    setMessage(`Sorry, you've reached the maximum number of attempts. The correct number was ${randomNumber}.`, 'red');
    guessInput.disabled = true;
    checkButton.disabled = true;
  }

  guessInput.value = ''; // this will help Clear the input for me  after each guess
}

function setMessage(msg, color) {
  messageDisplay.textContent = msg;
  messageDisplay.style.color = color;
}

checkButton.addEventListener('click', checkGuess);
