import { generateWordSearchGrid } from './renderGrid.js';
import { checkWinCondition } from './winModal.js';
import { getRandomWords } from './wordsData.js';
import { renderWordsToFind } from './wordsToFind.js';

let currentSelection = [];
let selectedCells = [];
let isSelecting = false;
let { words: wordsToFind, category } = getRandomWords();

const wordSearch = document.querySelector('.word-search');
const selectedWord = document.querySelector('.selected-word');
const wordsToFindList = document.querySelector('.words-list');
const submitWordBtn = document.querySelector('.submit-btn');
const resetWordBtn = document.querySelector('.reset-btn');
const categoryEl = document.querySelector('.category');

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
      cellDiv.addEventListener('mousedown', handleOnMouseDown);
      cellDiv.addEventListener('mousemove', handleOnMouseMove);
      cellDiv.addEventListener('mouseup', handleOnMouseUp);
    });

    wordSearch.appendChild(rowDiv);
  });
}

function handleOnMouseDown(e) {
  e.preventDefault();
  isSelecting = true;
  addCellToSelection(e.target);
}

function handleOnMouseMove(e) {
  e.preventDefault();
  if (isSelecting) {
    addCellToSelection(e.target);
  }
}

function handleOnMouseUp(e) {
  e.preventDefault();
  isSelecting = false;
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

  ({ words: wordsToFind, category } = getRandomWords());
  wordsToFindList.innerHTML = '';

  const grid = generateWordSearchGrid(12, wordsToFind);
  renderWordSearchGrid(grid);
  renderWordsToFind(wordsToFind);
  categoryEl.textContent = category;
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

function addCellToSelection(cell) {
  const { row, col } = cell.dataset;

  if (!currentSelection.some((c) => c.row === row && c.col === col)) {
    currentSelection.push({ letter: cell.textContent, row, col });
    selectedCells.push(cell);
    selectedWord.textContent = currentSelection.map((cell) => cell.letter).join('');
    cell.classList.add('selected');
  }
}

function handleCellClick(e) {
  addCellToSelection(e.target);
}

function onWordSubmit() {
  if (currentSelection.length === 0) {
    selectedWord.textContent = 'Select a word first';
    return;
  }

  const word = selectedWord.textContent;
  const foundWordIndex = wordsToFind.findIndex((w) => word.toLowerCase() === w.toLowerCase());

  if (foundWordIndex > -1) {
    wordsToFindList.children[foundWordIndex].classList.add('found');
    highlightWord();
    resetSelection();
    checkWinCondition(wordsToFind);
  } else {
    selectedWord.textContent = 'Invalid word';
    removeSelectedClass(word);
    currentSelection = [];
  }
}

submitWordBtn.addEventListener('click', onWordSubmit);
resetWordBtn.addEventListener('click', resetGame);

document.addEventListener('DOMContentLoaded', () => {
  const grid = generateWordSearchGrid(14, wordsToFind);
  renderWordSearchGrid(grid);
  renderWordsToFind(wordsToFind);
  categoryEl.textContent = category;
});
