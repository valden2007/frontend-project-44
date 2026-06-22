import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10); // Длина от 5 до 10 чисел

  const progression = generateProgression(start, step, length);
  
  // Выбираем случайный индекс, который спрячем
  const hiddenIndex = getRandomNumber(0, length - 1);
  const correctAnswer = progression[hiddenIndex];
  
  // Заменяем число на две точки
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, String(correctAnswer)];
};

const startProgressionGame = () => {
  runGame(description, generateRound);
};

export default startProgressionGame;