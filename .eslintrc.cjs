module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'import/extensions': 'off',
    'import/no-import-module-exports': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
  },
};
