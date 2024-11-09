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
let matchesToWin = symbols.length / 2;
let numberOfTurns = 0;
let flippedCards = [];

const allCards = document.querySelectorAll('.card-container');
const frontFaces = document.querySelectorAll('.back');
const resetButton = document.querySelector('.reset-button');
const turnsCounter = document.querySelector('.turns-counter');
const matchesToWinCounter = document.querySelector('.matches-to-win');
const winningMessage = document.querySelector('.winning-message');

turnsCounter.textContent = numberOfTurns;
matchesToWinCounter.textContent = matchesToWin;

function checkIfMatch(el1, el2) {
  return el1 === el2;
}

function getSymbolUniCode(symbol) {
  return symbol.codePointAt(0);
}

function flipUnmatchCardsBack(card1, card2) {
  setTimeout(() => {
    card1.classList.remove('flipped');
    card2.classList.remove('flipped');
  }, 1000);
}

function resetGame() {
  allCards.forEach((card) => {
    card.classList.remove('flipped');
  });

  flippedCards = [];
  numberOfTurns = 0;
  turnsCounter.textContent = numberOfTurns;
  matchesToWin = symbols.length / 2;
  matchesToWinCounter.textContent = matchesToWin;
  winningMessage.textContent = '';
}

function handleCardClick(e) {
  const card = e.currentTarget;
  card.classList.toggle('flipped');

  flippedCards.push(card);

  console.log({ flippedCards });

  if (flippedCards.length === 2) {
    const [firstCard, secondCard] = flippedCards;

    const firstCardTextContent = firstCard.querySelector('.back').textContent;
    const secondCardTextContent = secondCard.querySelector('.back').textContent;

    console.log({ firstCardTextContent, secondCardTextContent });
    const symbolOneCode = getSymbolUniCode(firstCardTextContent);
    const symbolTwoCode = getSymbolUniCode(secondCardTextContent);

    console.log({ symbolOneCode, symbolTwoCode });

    if (checkIfMatch(firstCardTextContent, secondCardTextContent)) {
      console.log('Match!');
      firstCard.removeEventListener('click', () => {});
      secondCard.removeEventListener('click', () => {});
      flippedCards = [];
      matchesToWin--;
      matchesToWinCounter.textContent = matchesToWin;

      if (matchesToWin === 0) {
        handleWin();
      }
    } else {
      flipUnmatchCardsBack(firstCard, secondCard);
      flippedCards = [];
    }

    turnsCounter.textContent = ++numberOfTurns;
  }
}

allCards.forEach((card) => {
  card.addEventListener('click', handleCardClick);
});

function disableAllCardsClick() {
  allCards.forEach((card) => {
    card.removeEventListener('click', handleCardClick);
    card.disabled = true;
  });
}

function handleWin() {
  winningMessage.textContent = `Congratulations! 🎉 You won in ${numberOfTurns} turns.`;
  disableAllCardsClick();
}

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

resetButton.addEventListener('click', resetGame);

console.log({ frontFaces });
