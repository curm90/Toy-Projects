const cells = document.querySelectorAll('.cell');
const messageEl = document.querySelector('.message');

const players = ['X', '0'];
let currentPlayer = players[0];
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function highlightWinningCells(cellsArray) {
  cellsArray.forEach((index) => {
    cells[index].style.color = 'green';
    cells[index].style.opacity = '0.7';
  });
}

function checkIfWin(player) {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    debugger;
    if (
      cells[a].textContent === player &&
      cells[b].textContent === player &&
      cells[c].textContent === player
    ) {
      highlightWinningCells(combination);
      return true;
    }
  }
  return false;
}

function checkIfDraw() {
  return [...cells].every((cell) => cell.textContent !== '');
}

function handleCellClick(e) {
  const cell = e.target;

  if (cell.textContent !== '') {
    return;
  }

  cell.textContent = currentPlayer;

  if (checkIfWin(currentPlayer)) {
    messageEl.textContent = `Player ${currentPlayer} wins!`;

    cells.forEach((cell) => {
      if (cell.textContent === '') {
        cell.removeEventListener('click', handleCellClick);
        cell.style.cursor = 'not-allowed';
      }
    });
    return;
  }

  if (checkIfDraw()) {
    messageEl.textContent = 'Draw!';
    return;
  }

  currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
  messageEl.textContent = `Player ${currentPlayer}'s turn.`;
}

function restartGame() {
  cells.forEach((cell) => {
    cell.textContent = '';
    cell.style.opacity = '';
    cell.style.color = '';
  });

  currentPlayer = players[0];
  messageEl.textContent = "Player X's turn";
}

for (cell of cells) {
  cell.addEventListener('click', handleCellClick);
}
