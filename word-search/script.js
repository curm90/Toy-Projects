import { WORDSTOFIND } from './constants.js';
import { generateWordSearchGrid } from './helpers.js';

let currentSelection = [];
let selectedCells = [];

const wordSearch = document.querySelector('.word-search');
const selectedWord = document.querySelector('.selected-word');
const wordsToFindList = document.querySelector('.words-list');
const submitWordBtn = document.querySelector('.submit-btn');
const resetWordBtn = document.querySelector('.reset-btn');

function renderWordSearchGrid(grid) {
  wordSearch.innerHTML = '';

  grid.forEach((row, rowIndex) => {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    row.forEach((letter, colIndex) => {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('cell');
      cellDiv.textContent = letter;
      cellDiv.dataset.row = rowIndex;
      cellDiv.dataset.col = colIndex;
      rowDiv.appendChild(cellDiv);
      cellDiv.addEventListener('click', handleCellClick);
    });

    wordSearch.appendChild(rowDiv);
  });
}

function renderWordsToFind(words) {
  words.forEach((word) => {
    const wordItem = document.createElement('li');
    wordItem.textContent = word;
    wordsToFindList.appendChild(wordItem);
  });
}

function resetSelection() {
  currentSelection = [];
  selectedWord.textContent = '';
}

function resetGame() {
  selectedCells.forEach((cell) => {
    cell.classList.remove('selected', 'highlighted');
  });

  resetSelection();
  wordsToFindList.querySelectorAll('li').forEach((word) => {
    word.classList.remove('found');
  });
}

function highlightWord() {
  selectedCells.forEach((cell) => {
    cell.classList.add('highlighted');
  });
}

function handleCellClick(e) {
  const cell = e.target;
  const letter = cell.textContent;
  const row = cell.dataset.row;
  const col = cell.dataset.col;

  currentSelection.push({ letter, row, col });
  selectedCells.push(cell);

  selectedWord.textContent = currentSelection.map((cell) => cell.letter).join('');

  cell.classList.add('selected');
}

function onWordSubmit() {
  const word = selectedWord.textContent;
  const foundWordIndex = WORDSTOFIND.findIndex((w) => word.toLowerCase() === w.toLowerCase());

  if (foundWordIndex > -1) {
    const foundWord = WORDSTOFIND[foundWordIndex];
    console.log({ foundWord, wordsToFindList });

    wordsToFindList.children[foundWordIndex].classList.add('found');
    highlightWord();
    resetSelection();
  } else {
    alert('Word not found');
    resetSelection();
  }
}

submitWordBtn.addEventListener('click', onWordSubmit);
resetWordBtn.addEventListener('click', resetGame);

document.addEventListener('DOMContentLoaded', () => {
  const grid = generateWordSearchGrid(12);
  renderWordSearchGrid(grid);
  renderWordsToFind(WORDSTOFIND);
});
