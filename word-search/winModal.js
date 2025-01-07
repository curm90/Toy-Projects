import { resetGame } from './script.js';

const winModal = document.getElementById('winModal');
const closeBtn = document.querySelector('.close-btn');
const playAgainBtn = document.querySelector('.play-again-btn');

export function checkWinCondition(wordsToFind) {
  const foundWords = document.querySelectorAll('.words-list .found').length;
  if (foundWords === wordsToFind.length) {
    winModal.style.display = 'block';
  }
}

closeBtn.onclick = function () {
  winModal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target === winModal) {
    winModal.style.display = 'none';
  }
};

playAgainBtn.onclick = function () {
  winModal.style.display = 'none';
  resetGame();
};
