import { WORDSTOFIND } from './constants.js';
import { findRandomStartPointForWord, generateRandomLetter, shuffleArray } from './helpers.js';

function canPlaceWord(grid, word, startPoint, direction) {
  let { row, col } = startPoint;

  for (let i = 0; i < word.length; i++) {
    if (direction === 'horizontal') {
      col += i;
    } else if (direction === 'vertical') {
      row += i;
    } else if (direction === 'diagonal') {
      row += i;
      col += i;
    }

    if (
      row >= grid.length ||
      col >= grid[0].length ||
      (grid[row][col] !== null && grid[row][col] !== word[i])
    ) {
      return false;
    }

    row = startPoint.row;
    col = startPoint.col;
  }

  return true;
}

function placeWord(grid, word, startPoint, direction) {
  let { row, col } = startPoint;

  for (let i = 0; i < word.length; i++) {
    if (direction === 'horizontal') {
      col += i;
    } else if (direction === 'vertical') {
      row += i;
    } else if (direction === 'diagonal') {
      row += i;
      col += i;
    }

    grid[row][col] = word[i];

    row = startPoint.row;
    col = startPoint.col;
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

export function generateWordSearchGrid(size) {
  const grid = Array.from({ length: size }, () => Array.from({ length: size }).fill(null));
  const directions = ['horizontal', 'vertical', 'diagonal'];
  const maxAttempts = 100;

  const shuffledWords = [...WORDSTOFIND];
  shuffleArray(shuffledWords);

  shuffledWords.forEach((word) => {
    let placed = false;
    let attempts = 0;

    while (!placed && attempts < maxAttempts) {
      const direction = directions[Math.floor(Math.random() * directions.length)];
      const startPoint = findRandomStartPointForWord(word, size, direction);

      if (canPlaceWord(grid, word, startPoint, direction)) {
        placeWord(grid, word, startPoint, direction);
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
