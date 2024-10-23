const keyboard = document.querySelector('.keyboard');
const keyboardList = document.querySelector('.list');

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

for (const letter of alphabet) {
  const li = document.createElement('li');
  const button = document.createElement('button');
  button.classList.add('key');
  button.textContent = letter;
  li.appendChild(button);
  keyboardList.appendChild(li);
}
