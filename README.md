
markdown
Brain Games

Набор консольных игр, построенных на основе одинаковых принципов. Каждая игра предлагает пользователю решить задачу в 3 раундах.

Установка

1. Клонируйте репозиторий:
   bash
   git clone https://github.com/Dante4292/frontend-project-44.git
   cd frontend-project-44
   

2. Установите зависимости:
   bash
   npm install
   

 Запуск игр

Проект предоставляет следующие команды для запуска игр:

| Игра | Команда | Описание |
|------|---------|----------|
| brain-even | `node bin/brain-even.js` | Определяет чётность числа |
| brain-calc | `node bin/brain-calc.js` | Решает арифметические выражения |
| brain-gcd | `node bin/brain-gcd.js` | Находит наибольший общий делитель |
| brain-prime | `node bin/brain-prime.js` | Определяет простое ли число |
| brain-progression | `node bin/brain-progression.js` | Находит пропущенное число в прогрессии |
| brain-games | `node bin/brain-games.js` | Приветствие пользователя |

 Пример запуска (brain-even)

bash
$ node bin/brain-even.js
Welcome to the Brain Games!
May I have your name? > Alice
Hello, Alice!
Answer "yes" if the number is even, otherwise answer "no".
Question: 12
Your answer: yes
Correct!
Question: 35
Your answer: no
Correct!
Question: 8
Your answer: yes
Correct!
Congratulations, Alice!

 Структура проекта


frontend-project-44/
├── .github/
│   ── workflows/           GitHub Actions для автотестов
├── bin/                     Точки входа для игр
│   ├── brain-games.js       Приветствие
│   ├── brain-even.js        Игра "Чётное/Нечётное"
│   ├── brain-calc.js        Игра "Калькулятор"
│   ├── brain-gcd.js         Игра "НОД"
│   ├── brain-prime.js       Игра "Простое число"
│   └── brain-progression.js Игра "Прогрессия"
├── src/
│   ├── games/               Логика игр
│   ├── cli.js               Утилита приветствия
│   └── index.js             Движок игр (общая логика)
├── .gitignore               Игнорируемые файлы
├── eslint.config.js         Конфигурация ESLint
├── Makefile                 Команды Make
├── package.json             Зависимости и скрипты
└── package-lock.json        Зафиксированные версии зависимостей


Технологии

- Node.js — среда выполнения JavaScript
- readline-sync — библиотека для синхронного ввода в консоли
- ESLint + @stylistic/eslint-plugin — линтинг кода
- GitHub Actions — автоматическое тестирование

Лицензия

ISC
