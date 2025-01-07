export const wordsToFindList = document.querySelector('.words-list');

export function renderWordsToFind(words) {
  words.forEach((word) => {
    const wordItem = document.createElement('li');
    wordItem.textContent = word;
    wordsToFindList.appendChild(wordItem);
  });
}
