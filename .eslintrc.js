module.exports = {
  env: {
    browser: true,
    meteor: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:require-path-exists/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: [
    'backbone',
    'require-path-exists'
  ],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-var': 'error',
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'semi-spacing': 'error',
    'arrow-spacing': 'error',
    'no-confusing-arrow': ['error', { allowParens: false }],
    'no-duplicate-imports': 'error',
    //'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'eqeqeq': ['error', 'always'],
    'no-alert': 'error',
    'no-caller': 'error',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-multi-spaces': 'error',
    'require-path-exists/exists': [2, {webpackConfigPath: 'webpack.config.js'}]
  },
  globals: {
    Mn: true,
    Backbone: true
    /*// Collections
        'Persons': true,
        'Modules': true,

        // More stuff
        // [...]

        // Packages
        'lodash': true,
        'i18n': true,
        'moment': true,
        'Messenger': true*/
  }
};
