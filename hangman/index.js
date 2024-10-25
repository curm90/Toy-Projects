import { getRandomWordAny } from './data.js';

const INITIAL_LIVES = 10;

const hangmanParts = [
  'base',
  'pole',
  'beam',
  'noose',
  'head',
  'body',
  'leftArm',
  'rightArm',
  'leftLeg',
  'rightLeg',
];

let numberOfGuesses = INITIAL_LIVES;
let { word: testWord, category, difficulty } = getRandomWordAny();
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const keyboardList = document.querySelector('.list');
const livesRemaining = document.querySelector('.lives-remaining');
const wordHolder = document.querySelector('.word-holder');
const categoryName = document.querySelector('.category-name');
const difficultyName = document.querySelector('.difficulty-name');
const gameText = document.querySelector('.game-text');
const newGameBtn = document.querySelector('.new-game');

categoryName.textContent = category;
difficultyName.textContent = difficulty;

for (const letter of alphabet) {
  const list = document.createElement('li');
  const button = document.createElement('button');
  button.classList.add('key');
  button.textContent = letter;
  list.appendChild(button);
  keyboardList.appendChild(list);
}

const allKeys = document.querySelectorAll('.key');

livesRemaining.textContent = numberOfGuesses;
addWordToWordHolder(testWord);

function addWordToWordHolder(word) {
  wordHolder.textContent = word
    .split('')
    .map(() => '_')
    .join(' ');
}

function checkIfGuessIsCorrect(guess, word) {
  return word.includes(guess);
}

function checkIfWordIsGuessedCorrectly(word) {
  const fullWord = word.split(' ').join('');
  console.log(fullWord, testWord);
  return fullWord === testWord;
}

function disableAllKeys() {
  [...allKeys].map((key) => {
    key.style.cursor = 'not-allowed';
    key.disabled = true;
  });
}

function handleWin() {
  gameText.textContent = 'Congratulations! You won! 🎉';
  disableAllKeys();
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

    if (checkIfWordIsGuessedCorrectly(updatedWord)) {
      handleWin();
    }
  } else {
    numberOfGuesses--;
    livesRemaining.textContent = numberOfGuesses;
    updateHangman(numberOfGuesses);

    if (numberOfGuesses < 1) {
      gameText.textContent = 'Game over!';
      disableAllKeys();
      return;
    }
  }
}

function updateHangman(livesRemaining) {
  const partsToShow = INITIAL_LIVES - livesRemaining;

  hangmanParts.slice(0, partsToShow).forEach((part) => {
    document.getElementById(part).style.display = 'initial';
  });
}

function resetHangman() {
  hangmanParts.forEach((part) => {
    document.getElementById(part).style.removeProperty('display');
  });
}

for (const key of allKeys) {
  key.addEventListener('click', () => {
    handleGuess(key.textContent, testWord);
    key.disabled = true;
    key.style.cursor = 'not-allowed';
  });
}

function resetGame() {
  numberOfGuesses = INITIAL_LIVES;
  livesRemaining.textContent = numberOfGuesses;

  gameText.textContent = '';
  [...allKeys].map((key) => {
    key.disabled = false;
    key.style.cursor = 'pointer';
  });

  ({ word: testWord, category, difficulty } = getRandomWordAny());
  categoryName.textContent = category;
  difficultyName.textContent = difficulty;
  addWordToWordHolder(testWord);

  resetHangman();
}

newGameBtn.addEventListener('click', resetGame);
