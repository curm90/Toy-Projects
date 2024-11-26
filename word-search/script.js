const wordSearch = document.querySelector('.word-search');

function generateRandomLetter() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function generateWordSearchGrid(size) {
  const grid = [];

  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      row.push(generateRandomLetter());
    }
    grid.push(row);
  }

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

document.addEventListener('DOMContentLoaded', () => {
  const grid = generateWordSearchGrid(12);
  renderWordSearchGrid(grid);
});
