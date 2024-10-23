let NumberOfGuesses = 9;
const testWord = 'development';
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const keyboardList = document.querySelector('.list');
const livesRemaining = document.querySelector('.lives-remaining');
const wordHolder = document.querySelector('.word-holder');

for (const letter of alphabet) {
  const list = document.createElement('li');
  const button = document.createElement('button');
  button.classList.add('key');
  button.textContent = letter;
  list.appendChild(button);
  keyboardList.appendChild(list);
}

const allKeys = document.querySelectorAll('.key');

livesRemaining.textContent = NumberOfGuesses;
wordHolder.textContent = testWord
  .split('')
  .map(() => '_')
  .join(' ');

function checkIfGuessIsCorrect(guess, word) {
  console.log(guess, word);
  return word.includes(guess);
}

function handleGuess(guess, word) {
  if (checkIfGuessIsCorrect(guess, word)) {
    const updatedWord = word
      .split('')
      .map((letter, index) => {
        if (letter === guess) {
          return letter;
        } else {
          return wordHolder.textContent.split(' ')[index];
        }
      })
      .join(' ');
    wordHolder.textContent = updatedWord;
  } else {
    // TODO: Disable guessed key and draw a part of the hangman
    NumberOfGuesses--;
    livesRemaining.textContent = NumberOfGuesses;
  }
}

for (const key of allKeys) {
  key.addEventListener('click', () => {
    handleGuess(key.textContent, testWord);
    key.disabled = true;
    key.style.cursor = 'not-allowed';
  });
}
