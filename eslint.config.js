import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,

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
      prettier,
    },

    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      eqeqeq: 'error',
      'prettier/prettier': 'error',
    },
  },
];
