import runGame from '../index.js';

const description = 'What is the result of the expression?';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 20); // Числа поменьше, чтобы удобно считать
  const num2 = getRandomNumber(1, 20);
  const operators = ['+', '-', '*'];
  // Выбираем случайный оператор из массива
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, num2, operator);

  return [question, String(correctAnswer)];
};

const startCalcGame = () => {
  runGame(description, generateRound);
};

export default startCalcGame;