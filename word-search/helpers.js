import { ALPHABET } from './constants.js';

export function generateRandomLetter() {
  return ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
}

export function findRandomStartPointForWord(word, gridSize) {
  const maxStartPoint = gridSize - word.length;
  const row = Math.floor(Math.random() * gridSize);
  const col = Math.floor(Math.random() * (maxStartPoint + 1));

  return { row, col };
}

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
