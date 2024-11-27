const wordsToFind = [
  'code',
  // 'programming',
  // 'developer',
  // 'software',
  // 'engineer',
  // 'javascript',
  // 'react',
  'host',
  'server',
  'web',
];

let currentSelection = [];
let selectedCells = [];

const wordSearch = document.querySelector('.word-search');
const selectedWord = document.querySelector('.selected-word');
const wordsToFindList = document.querySelector('.words-list');
const submitWordBtn = document.querySelector('.submit-btn');

function generateRandomLetter() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function findRandomStartPointForWord(word, gridSize) {
  const mazStartPoint = gridSize - word.length;
  const row = Math.floor(Math.random() * gridSize);
  const col = Math.floor(Math.random() * (mazStartPoint + 1));

  return { row, col };
}

function canPlaceWordHorizontally(grid, word, startPoint) {
  const { row, col } = startPoint;
  for (let i = 0; i < word.length; i++) {
    if (grid[row][col + i] !== null && grid[row][col + i] !== word[i]) {
      return false;
    }
  }

  return true;
}

function placeWordHorizontally(grid, word, startPoint) {
  const { row, col } = startPoint;

  for (let i = 0; i < word.length; i++) {
    grid[row][col + i] = word[i];
  }
}

function fillEmptyCells(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === null) {
        grid[i][j] = generateRandomLetter();
      }
    }
  }
}

function generateWordSearchGrid(size) {
  const grid = Array.from({ length: size }, () => Array.from({ length: size }).fill(null));

  wordsToFind.forEach((word) => {
    let placed = false;
    while (!placed) {
      const startPoint = findRandomStartPointForWord(word, size);
      if (canPlaceWordHorizontally(grid, word, startPoint)) {
        placeWordHorizontally(grid, word, startPoint);
        placed = true;
      }
    }
    const startPoint = findRandomStartPointForWord(word, size);
    placeWordHorizontally(grid, word, startPoint);
  });

  fillEmptyCells(grid);

  return grid;
}

function renderWordSearchGrid(grid) {
  wordSearch.innerHTML = '';

  grid.forEach((row, colIndex) => {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    row.forEach((letter, rowIndex) => {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('cell');
      cellDiv.textContent = letter;
      cellDiv.dataset.col = colIndex;
      cellDiv.dataset.row = rowIndex;
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
  selectedCells = [];
  selectedWord.textContent = '';
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
  const foundWordIndex = wordsToFind.findIndex((w) => word.toLowerCase() === w.toLowerCase());

  console.log({ foundWordIndex });

  if (foundWordIndex > -1) {
    const foundWord = wordsToFind[foundWordIndex];
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

document.addEventListener('DOMContentLoaded', () => {
  const grid = generateWordSearchGrid(12);
  renderWordSearchGrid(grid);
  renderWordsToFind(wordsToFind);
});
