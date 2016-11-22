module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'lodash-fp',
    'better',
    'fp',
  ],
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  rules: {
    'arrow-parens': [2, 'as-needed'],
    'better/no-deletes': 2,
    'better/no-fors': 2,
    'better/no-instanceofs': 2,
    'better/no-switches': 0,
    'better/no-whiles': 2,
    curly: [2, 'multi-line'],
    'fp/no-arguments': 2,
    'fp/no-mutating-assign': 2,
    'fp/no-mutation': 2,
    'func-style': [2, 'expression'],
    'import/first': 0,
    'max-len': 0,
    'no-confusing-arrow': 0,
    'no-console': 0,
    'no-underscore-dangle': [2, {
      allow: ['_id'],
    }],
    'no-use-before-define': [2, 'nofunc'],
    'sort-imports': 2,
    'space-before-function-paren': 0,
  },
};