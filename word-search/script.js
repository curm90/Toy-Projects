import { WORDSTOFIND } from './constants.js';
import { generateWordSearchGrid } from './renderGrid.js';
import { checkWinCondition } from './winModal.js';
import { renderWordsToFind } from './wordsToFind.js';

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

function resetSelection() {
  currentSelection = [];
  selectedWord.textContent = '';
}

export function resetGame() {
  removeSelectedAndHighlightedClasses();
  removeFoundClass(wordsToFindList);
  selectedCells = [];
  resetSelection();
}

function removeFoundClass(wordList) {
  wordList.querySelectorAll('li').forEach((word) => {
    word.classList.remove('found');
  });
}

function removeSelectedClass(word) {
  const lastSelectedWordCells = selectedCells.slice(-word.length);

  lastSelectedWordCells.forEach((cell) => {
    cell.classList.remove('selected');
  });
  selectedCells = selectedCells.slice(0, -word.length);
}

function removeSelectedAndHighlightedClasses() {
  selectedCells.forEach((cell) => {
    cell.classList.remove('selected', 'highlighted');
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
  const { row, col } = cell.dataset;
  console.log({ cell });

  currentSelection.push({ letter, row, col });
  selectedCells.push(cell);
  selectedWord.textContent = currentSelection.map((cell) => cell.letter).join('');

  cell.classList.add('selected');
}

function onWordSubmit() {
  if (currentSelection.length === 0) {
    selectedWord.textContent = 'Select a word first';
    return;
  }

  const word = selectedWord.textContent;
  const foundWordIndex = WORDSTOFIND.findIndex((w) => word.toLowerCase() === w.toLowerCase());

  if (foundWordIndex > -1) {
    wordsToFindList.children[foundWordIndex].classList.add('found');
    highlightWord();
    resetSelection();
    checkWinCondition(WORDSTOFIND);
  } else {
    selectedWord.textContent = 'Invalid word';
    removeSelectedClass(word);
    currentSelection = [];
  }
}

submitWordBtn.addEventListener('click', onWordSubmit);
resetWordBtn.addEventListener('click', resetGame);

document.addEventListener('DOMContentLoaded', () => {
  const grid = generateWordSearchGrid(12);
  renderWordSearchGrid(grid);
  renderWordsToFind(WORDSTOFIND);
});
