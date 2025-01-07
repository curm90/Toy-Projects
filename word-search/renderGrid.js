import { WORDSTOFIND } from './constants.js';
import { findRandomStartPointForWord, generateRandomLetter, shuffleArray } from './helpers.js';

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
