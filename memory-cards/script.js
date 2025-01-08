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

function flipUnmatchCardsBack(card1, card2) {
  card1.classList.remove('flipped');
  card2.classList.remove('flipped');
}
function resetGame() {
  flippedCards = [];
  numberOfTurns = 0;
  turnsCounter.textContent = numberOfTurns;

  shuffleArray(symbols);

  symbols.forEach((symbol, i) => {
    frontFaces[i].textContent = symbol;
  });

  allCards.forEach((card) => {
    card.classList.remove('flipped');
    card.addEventListener('click', handleCardClick);
  });

  winningMessage.textContent = '';
}

function handleCardClick(e) {
  const card = e.currentTarget;
  card.classList.toggle('flipped');

  flippedCards.push(card);

  if (flippedCards.length === 2) {
    disableAllCardsClick();
    const [firstCard, secondCard] = flippedCards;

    const firstCardTextContent = firstCard.querySelector('.back').textContent;
    const secondCardTextContent = secondCard.querySelector('.back').textContent;

    console.log({ firstCardTextContent, secondCardTextContent });

    if (checkIfMatch(firstCardTextContent, secondCardTextContent)) {
      console.log('Match!');
      firstCard.removeEventListener('click', handleCardClick);
      secondCard.removeEventListener('click', handleCardClick);
      flippedCards = [];
      matchesToWin--;
      matchesToWinCounter.textContent = matchesToWin;

      if (matchesToWin === 0) {
        handleWin();
      } else {
        enableAllCardsClick();
      }
    } else {
      setTimeout(() => {
        flipUnmatchCardsBack(firstCard, secondCard);
        flippedCards = [];
        enableAllCardsClick();
      }, 1000);
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
  });
}

function enableAllCardsClick() {
  allCards.forEach((card) => {
    card.addEventListener('click', handleCardClick);
  });
}

function handleWin() {
  winningMessage.textContent = `Congratulations! 🎉 You won in ${numberOfTurns} turns.`;
  disableAllCardsClick();
}

// function shuffle(array) {
//   let currentIndex = array.length,
//     randomIndex;

//   while (currentIndex !== 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
//   }

//   return array;
// }

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(symbols);

symbols.forEach((symbol, i) => {
  frontFaces[i].textContent = symbol;
});

resetButton.addEventListener('click', resetGame);
