const keyboardList = document.querySelector('.list');

const testWord = 'development';

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

for (const letter of alphabet) {
  const list = document.createElement('li');
  const button = document.createElement('button');
  button.classList.add('key');
  button.textContent = letter;
  list.appendChild(button);
  keyboardList.appendChild(list);
}

const allKeys = document.querySelectorAll('.key');

for (const key of allKeys) {
  key.addEventListener('click', () => {
    console.log(key.textContent);
    if (testWord.includes(key.textContent)) {
      console.log('correct');
    } else {
      console.log('incorrect');
    }
  });
}
