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
let { word: wordObj, category, difficulty } = getRandomWordAny();
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const keyboardList = document.querySelector('.list');
const livesRemaining = document.querySelector('.lives-remaining');
const wordHolder = document.querySelector('.word-holder');
const categoryName = document.querySelector('.category-name');
const difficultyName = document.querySelector('.difficulty-name');
const gameText = document.querySelector('.game-text');
const newGameBtn = document.querySelector('.new-game');
const hintBtn = document.querySelector('.hint-btn');

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
addWordToWordHolder(wordObj.word);

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
  return fullWord === wordObj.word;
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
    const updatedWord = updateWordHolder(word, guess);

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

function updateWordHolder(word, guess) {
  return word
    .split('')
    .map((letter, index) => {
      if (letter === guess) {
        return letter;
      } else {
        return wordHolder.textContent.split(' ')[index];
      }
    })
    .join(' ');
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
    handleGuess(key.textContent, wordObj.word);
    key.disabled = true;
    key.style.cursor = 'not-allowed';
  });
}

function showHint() {
  gameText.textContent = wordObj.hint;
  hintBtn.disabled = true;
  hintBtn.style.cursor = 'not-allowed';
}

function resetHintBtn() {
  hintBtn.disabled = false;
  hintBtn.style.cursor = 'pointer';
}

function resetWordState() {
  ({ word: wordObj, category, difficulty } = getRandomWordAny());
  categoryName.textContent = category;
  difficultyName.textContent = difficulty;
  addWordToWordHolder(wordObj.word);
}

function resetKeysState() {
  [...allKeys].map((key) => {
    key.disabled = false;
    key.style.cursor = 'pointer';
  });
}

function resetLives() {
  numberOfGuesses = INITIAL_LIVES;
  livesRemaining.textContent = numberOfGuesses;
}

function resetGame() {
  gameText.textContent = '';

  resetWordState();
  resetKeysState();
  resetLives();
  resetHintBtn();
  resetHangman();
}

hintBtn.addEventListener('click', showHint);
newGameBtn.addEventListener('click', resetGame);
