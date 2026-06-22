import readlineSync from 'readline-sync';

// Количество раундов для победы
const roundsCount = 3;

const runGame = (description, getRoundData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  
  // Выводим правила игры
  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    // Получаем из конкретной игры вопрос и правильный ответ
    const [question, correctAnswer] = getRoundData();
    
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return; // Завершаем игру при ошибке
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;