const wordCategories = {
  animals: {
    easy: ['cat', 'dog', 'cow', 'pig', 'rat', 'fox', 'owl'],
    medium: ['eagle', 'shark', 'zebra', 'snake', 'koala', 'panda', 'tiger', 'horse'],
    hard: ['pangolin', 'platypus', 'aardvark', 'narwhal', 'hedgehog', 'octopus', 'dolphin'],
  },

  countries: {
    easy: ['usa', 'peru', 'cuba', 'iran', 'mali', 'chad'],
    medium: ['france', 'brazil', 'canada', 'mexico', 'japan', 'spain', 'italy'],
    hard: ['zimbabwe', 'kazakhstan', 'mauritius', 'singapore', 'luxembourg'],
  },

  fruits: {
    easy: ['pear', 'plum', 'lime', 'kiwi', 'fig'],
    medium: ['apple', 'banana', 'orange', 'mango', 'grape', 'peach'],
    hard: ['dragonfruit', 'pomegranate', 'pineapple', 'blackberry', 'strawberry'],
  },

  sports: {
    easy: ['golf', 'polo', 'swim', 'ski'],
    medium: ['soccer', 'tennis', 'boxing', 'hockey', 'karate'],
    hard: ['volleyball', 'basketball', 'skateboard', 'wrestling'],
  },

  technology: {
    easy: ['app', 'web', 'code', 'game', 'wifi'],
    medium: ['laptop', 'server', 'mobile', 'tablet', 'router'],
    hard: ['javascript', 'database', 'algorithm', 'encryption'],
  },

  movies: {
    easy: ['star', 'hero', 'film', 'cast'],
    medium: ['avatar', 'matrix', 'disney', 'pixar'],
    hard: ['inception', 'gladiator', 'terminator', 'ghostbusters'],
  },

  professions: {
    easy: ['chef', 'vet', 'cop', 'nurse'],
    medium: ['teacher', 'doctor', 'lawyer', 'artist', 'singer'],
    hard: ['architect', 'scientist', 'professor', 'journalist'],
  },

  weather: {
    easy: ['rain', 'snow', 'wind', 'cold', 'hot'],
    medium: ['cloudy', 'stormy', 'sunny', 'foggy', 'thunder'],
    hard: ['hurricane', 'blizzard', 'lightning', 'avalanche'],
  },
};

// Get all available categories
const getCategories = () => Object.keys(wordCategories);

// Get all difficulty levels
const getDifficulties = () => ['easy', 'medium', 'hard'];

// Get a random item from any array
const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

// Get a random category
const getRandomCategory = () => getRandomItem(getCategories());

// Get a random difficulty
const getRandomDifficulty = () => getRandomItem(getDifficulties());

// Get a random word from specific category and difficulty
const getRandomWord = (category, difficulty) => {
  if (wordCategories[category] && wordCategories[category][difficulty]) {
    return getRandomItem(wordCategories[category][difficulty]);
  }
  return null;
};

// Get a completely random word from any category and difficulty
const getRandomWordAny = () => {
  const category = getRandomCategory();
  const difficulty = getRandomDifficulty();
  return {
    word: getRandomWord(category, difficulty),
    category: category,
    difficulty: difficulty,
  };
};

// Get a random word with specific difficulty but random category
const getRandomWordByDifficulty = (difficulty) => {
  const category = getRandomCategory();
  return {
    word: getRandomWord(category, difficulty),
    category: category,
    difficulty: difficulty,
  };
};

// Get a random word with specific category but random difficulty
const getRandomWordByCategory = (category) => {
  const difficulty = getRandomDifficulty();
  return {
    word: getRandomWord(category, difficulty),
    category: category,
    difficulty: difficulty,
  };
};

// Validate if a category exists
const isValidCategory = (category) => category in wordCategories;

// Validate if a difficulty exists
const isValidDifficulty = (difficulty) => getDifficulties().includes(difficulty);

export {
  wordCategories,
  getCategories,
  getDifficulties,
  getRandomCategory,
  getRandomDifficulty,
  getRandomWord,
  getRandomWordAny,
  getRandomWordByDifficulty,
  getRandomWordByCategory,
  isValidCategory,
  isValidDifficulty,
};
