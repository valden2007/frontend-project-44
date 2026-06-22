import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      ...stylistic.configs['recommended-flat'].rules,
      '@stylistic/semi': ['error', 'always'], // Обязательные точки с запятой
      '@stylistic/quotes': ['error', 'single'], // Одиночные кавычки
    },
  },
];