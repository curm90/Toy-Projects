const wordCategories = {
  animals: {
    easy: [
      { word: 'cat', hint: 'Popular household pet that purrs' },
      { word: 'dog', hint: "Man's best friend" },
      { word: 'cow', hint: 'Provides milk and says moo' },
      { word: 'pig', hint: 'Pink farm animal that loves mud' },
      { word: 'rat', hint: 'Small rodent with a long tail' },
      { word: 'fox', hint: 'Clever red-furred wild canine' },
      { word: 'owl', hint: 'Wise night bird' },
    ],
    medium: [
      { word: 'eagle', hint: 'Large bird of prey, symbol of America' },
      { word: 'shark', hint: 'Feared ocean predator' },
      { word: 'zebra', hint: 'African horse with stripes' },
      { word: 'snake', hint: 'Slithering reptile without legs' },
      { word: 'koala', hint: 'Australian tree-dwelling marsupial that eats eucalyptus' },
      { word: 'panda', hint: 'Black and white bear from China' },
      { word: 'tiger', hint: 'Large striped wild cat' },
      { word: 'horse', hint: 'Domesticated animal used for riding' },
    ],
    hard: [
      { word: 'pangolin', hint: 'Scaly anteater, most trafficked mammal' },
      { word: 'platypus', hint: 'Egg-laying mammal with a duck bill' },
      { word: 'aardvark', hint: 'African mammal that eats ants' },
      { word: 'narwhal', hint: 'Arctic whale with a long tusk' },
      { word: 'hedgehog', hint: 'Small spiny mammal that rolls into a ball' },
      { word: 'octopus', hint: 'Intelligent sea creature with eight arms' },
      { word: 'dolphin', hint: 'Intelligent marine mammal known for echolocation' },
    ],
  },

  countries: {
    easy: [
      { word: 'usa', hint: 'North American country, stars and stripes' },
      { word: 'peru', hint: 'South American country, home to Machu Picchu' },
      { word: 'cuba', hint: 'Caribbean island nation known for cigars' },
      { word: 'iran', hint: 'Middle Eastern country, formerly Persia' },
      { word: 'mali', hint: 'West African country, home to Timbuktu' },
      { word: 'chad', hint: 'Central African country with a lake sharing its name' },
    ],
    medium: [
      { word: 'france', hint: 'European country known for the Eiffel Tower' },
      { word: 'brazil', hint: 'Largest South American country' },
      { word: 'canada', hint: 'Second largest country by land area' },
      { word: 'mexico', hint: 'North American country known for tacos' },
      { word: 'japan', hint: 'Asian island nation of the rising sun' },
      { word: 'spain', hint: 'European country known for flamenco' },
      { word: 'italy', hint: 'European country shaped like a boot' },
    ],
    hard: [
      { word: 'zimbabwe', hint: 'Southern African country with Victoria Falls' },
      { word: 'kazakhstan', hint: 'Largest landlocked country in the world' },
      { word: 'mauritius', hint: 'Island nation in the Indian Ocean' },
      { word: 'singapore', hint: 'Small wealthy Asian city-state' },
      { word: 'luxembourg', hint: 'Small wealthy European country between France and Germany' },
    ],
  },

  fruits: {
    easy: [
      { word: 'pear', hint: 'Green or yellow fruit shaped like a teardrop' },
      { word: 'plum', hint: 'Small purple fruit with a pit' },
      { word: 'lime', hint: 'Small green citrus fruit' },
      { word: 'kiwi', hint: 'Fuzzy brown fruit with green flesh' },
      { word: 'fig', hint: 'Sweet fruit with seeds inside' },
    ],
    medium: [
      { word: 'apple', hint: 'Common red or green fruit' },
      { word: 'banana', hint: 'Yellow curved fruit' },
      { word: 'orange', hint: 'Round citrus fruit named after its color' },
      { word: 'mango', hint: 'Sweet tropical fruit with orange flesh' },
      { word: 'grape', hint: 'Small round fruit growing in clusters' },
      { word: 'peach', hint: 'Soft fuzzy fruit with a large pit' },
    ],
    hard: [
      { word: 'dragonfruit', hint: 'Pink scaly fruit with white flesh and black seeds' },
      { word: 'pomegranate', hint: 'Red fruit filled with juicy seeds' },
      { word: 'pineapple', hint: 'Tropical fruit with spiky skin' },
      { word: 'blackberry', hint: 'Small dark aggregate fruit growing on bushes' },
      { word: 'strawberry', hint: 'Red heart-shaped fruit with seeds on outside' },
    ],
  },

  sports: {
    easy: [
      { word: 'golf', hint: 'Sport played with clubs and small balls' },
      { word: 'polo', hint: 'Sport played on horseback' },
      { word: 'swim', hint: 'Moving through water' },
      { word: 'ski', hint: 'Winter sport sliding down slopes' },
    ],
    medium: [
      { word: 'soccer', hint: 'Sport where you kick a ball into a goal' },
      { word: 'tennis', hint: 'Sport played with rackets over a net' },
      { word: 'boxing', hint: 'Fighting sport with gloves' },
      { word: 'hockey', hint: 'Sport played on ice with sticks' },
      { word: 'karate', hint: 'Martial art from Japan' },
    ],
    hard: [
      { word: 'volleyball', hint: 'Team sport hitting ball over a net' },
      { word: 'basketball', hint: 'Sport shooting balls through hoops' },
      { word: 'skateboard', hint: 'Riding on a board with wheels' },
      { word: 'wrestling', hint: 'Combat sport with holds and pins' },
    ],
  },

  technology: {
    easy: [
      { word: 'app', hint: 'Software program for phones' },
      { word: 'web', hint: 'Internet network of pages' },
      { word: 'code', hint: 'Computer programming instructions' },
      { word: 'game', hint: 'Interactive entertainment software' },
      { word: 'wifi', hint: 'Wireless internet connection' },
    ],
    medium: [
      { word: 'laptop', hint: 'Portable computer' },
      { word: 'server', hint: 'Computer that provides resources to others' },
      { word: 'mobile', hint: 'Portable phone device' },
      { word: 'tablet', hint: 'Flat touch-screen computer' },
      { word: 'router', hint: 'Device that forwards data packets' },
    ],
    hard: [
      { word: 'javascript', hint: 'Popular web programming language' },
      { word: 'database', hint: 'Organized collection of data' },
      { word: 'algorithm', hint: 'Step-by-step problem solving procedure' },
      { word: 'encryption', hint: 'Process of coding information' },
    ],
  },

  movies: {
    easy: [
      { word: 'star', hint: 'Celestial body, often in movie titles' },
      { word: 'hero', hint: 'Main character who saves the day' },
      { word: 'film', hint: 'Another word for movie' },
      { word: 'cast', hint: 'Group of actors in a movie' },
    ],
    medium: [
      { word: 'avatar', hint: 'Movie about blue aliens on Pandora' },
      { word: 'matrix', hint: 'Movie about a simulated reality' },
      { word: 'disney', hint: 'Famous animation studio' },
      { word: 'pixar', hint: 'Studio known for toy story' },
    ],
    hard: [
      { word: 'inception', hint: 'Movie about dreams within dreams' },
      { word: 'gladiator', hint: 'Movie about Roman fighter' },
      { word: 'terminator', hint: 'Movie about killer robots from future' },
      { word: 'ghostbusters', hint: 'Movie about catching supernatural beings' },
    ],
  },

  professions: {
    easy: [
      { word: 'chef', hint: 'Professional cook' },
      { word: 'vet', hint: 'Animal doctor' },
      { word: 'cop', hint: 'Police officer' },
      { word: 'nurse', hint: 'Healthcare worker' },
    ],
    medium: [
      { word: 'teacher', hint: 'Education professional' },
      { word: 'doctor', hint: 'Medical professional' },
      { word: 'lawyer', hint: 'Legal professional' },
      { word: 'artist', hint: 'Creative professional' },
      { word: 'singer', hint: 'Musical performer' },
    ],
    hard: [
      { word: 'architect', hint: 'Designs buildings' },
      { word: 'scientist', hint: 'Studies natural world' },
      { word: 'professor', hint: 'University teacher' },
      { word: 'journalist', hint: 'News reporter' },
    ],
  },

  weather: {
    easy: [
      { word: 'rain', hint: 'Water falling from clouds' },
      { word: 'snow', hint: 'Frozen precipitation' },
      { word: 'wind', hint: 'Moving air' },
      { word: 'cold', hint: 'Low temperature' },
      { word: 'hot', hint: 'High temperature' },
    ],
    medium: [
      { word: 'cloudy', hint: 'Sky covered with clouds' },
      { word: 'stormy', hint: 'Severe weather with rain and wind' },
      { word: 'sunny', hint: 'Clear sky with visible sun' },
      { word: 'foggy', hint: 'Low visibility due to water vapor' },
      { word: 'thunder', hint: 'Loud noise during storms' },
    ],
    hard: [
      { word: 'hurricane', hint: 'Severe tropical storm' },
      { word: 'blizzard', hint: 'Severe snowstorm' },
      { word: 'lightning', hint: 'Electric discharge in sky' },
      { word: 'avalanche', hint: 'Large snow mass falling down mountain' },
    ],
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

// // Get a random word with specific difficulty but random category
// const getRandomWordByDifficulty = (difficulty) => {
//   const category = getRandomCategory();
//   return {
//     word: getRandomWord(category, difficulty),
//     category: category,
//     difficulty: difficulty,
//   };
// };

// // Get a random word with specific category but random difficulty
// const getRandomWordByCategory = (category) => {
//   const difficulty = getRandomDifficulty();
//   return {
//     word: getRandomWord(category, difficulty),
//     category: category,
//     difficulty: difficulty,
//   };
// };

// Validate if a category exists
// const isValidCategory = (category) => category in wordCategories;

// Validate if a difficulty exists
// const isValidDifficulty = (difficulty) => getDifficulties().includes(difficulty);

export {
  wordCategories,
  getCategories,
  getDifficulties,
  getRandomCategory,
  getRandomDifficulty,
  getRandomWord,
  getRandomWordAny,
};
