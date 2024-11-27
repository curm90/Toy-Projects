const wordsToFind = [
  'code',
  'programming',
  'developer',
  'software',
  'engineer',
  'javascript',
  'react',
  'host',
  'server',
  'web',
];

const wordSearch = document.querySelector('.word-search');
const selectedWord = document.querySelector('.selected-word');
const wordsToFindList = document.querySelector('.words-list');

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
    const startPoint = findRandomStartPointForWord(word, size);
    placeWordHorizontally(grid, word, startPoint);
  });

  fillEmptyCells(grid);

  return grid;
}

function renderWordSearchGrid(grid) {
  wordSearch.innerHTML = '';

  grid.forEach((row) => {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    row.forEach((letter) => {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('cell');
      cellDiv.textContent = letter;
      rowDiv.appendChild(cellDiv);
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

document.addEventListener('DOMContentLoaded', () => {
  const grid = generateWordSearchGrid(12);
  renderWordSearchGrid(grid);
  renderWordsToFind(wordsToFind);
});
