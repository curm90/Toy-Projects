const cardContainers = document.querySelectorAll('.card-container');

cardContainers.forEach((cardContainer) => {
  cardContainer.addEventListener('click', () => {
    cardContainer.classList.toggle('flipped');
  });
});
