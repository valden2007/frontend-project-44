import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

// Функция генерации случайного числа в диапазоне
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Предикат (проверка на четность)
const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [String(question), correctAnswer];
};

const startEvenGame = () => {
  runGame(description, generateRound);
};

export default startEvenGame;