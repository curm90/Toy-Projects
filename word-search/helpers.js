import { ALPHABET, WORDSTOFIND } from './constants.js';

function generateRandomLetter() {
  return ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
}

function findRandomStartPointForWord(word, gridSize) {
  const maxStartPoint = gridSize - word.length;
  const row = Math.floor(Math.random() * gridSize);
  const col = Math.floor(Math.random() * (maxStartPoint + 1));

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

function fillEmptyCells(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === null) {
        grid[i][j] = generateRandomLetter();
      }
    }
  }
}

function placeWordHorizontally(grid, word, startPoint) {
  const { row, col } = startPoint;

  for (let i = 0; i < word.length; i++) {
    grid[row][col + i] = word[i];
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function generateWordSearchGrid(size) {
  const grid = Array.from({ length: size }, () => Array.from({ length: size }).fill(null));
  const maxAttempts = 100;

  const shuffledWords = [...WORDSTOFIND];
  shuffleArray(shuffledWords);

  shuffledWords.forEach((word) => {
    let placed = false;
    let attempts = 0;

    while (!placed && attempts < maxAttempts) {
      const startPoint = findRandomStartPointForWord(word, size);
      if (canPlaceWordHorizontally(grid, word, startPoint)) {
        placeWordHorizontally(grid, word, startPoint);
        placed = true;
      }
      attempts += 1;
    }

    if (!placed) {
      console.error(`Could not place word: ${word}`);
    }
  });

  fillEmptyCells(grid);

  return grid;
}
