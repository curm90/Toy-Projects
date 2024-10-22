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
