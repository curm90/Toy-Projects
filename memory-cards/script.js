const symbols = [
  '🍕',
  '🍔',
  '🍟',
  '🌭',
  '🍿',
  '🍦',
  '🍩',
  '🍪',
  '🍕',
  '🍔',
  '🍟',
  '🌭',
  '🍿',
  '🍦',
  '🍩',
  '🍪',
];
const matchesToWin = symbols.length / 2;

const cardContainers = document.querySelectorAll('.card-container');
const frontFaces = document.querySelectorAll('.back');
// const turnsCounter = document.querySelector('.turns-counter');

function checkIfMatch(el1, el2) {
  return el1.textContent === el2.textContent;
}

cardContainers.forEach((cardContainer) => {
  cardContainer.addEventListener('click', () => {
    cardContainer.classList.toggle('flipped');
  });
});

function shuffle(array) {
  let currentIndex = 0;

  while (currentIndex < array.length - 1) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex++;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

const randomSymbols = shuffle(symbols);

randomSymbols.forEach((symbol, i) => {
  console.log({ symbol });
  frontFaces[i].textContent = symbol;
});

console.log({ frontFaces });
