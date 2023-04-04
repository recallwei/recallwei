const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  globals: {},
  extends: [
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:markdown/recommended',
    'next/core-web-vitals',
    "plugin:@typescript-eslint/recommended",
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.js'],
      parser: 'espree',
      parserOptions: {
        ecmaVersion: 'latest'
      }
    },
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser'
    }
  ],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'comma-dangle': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/newline-after-import': 'off',
    'import/no-absolute-path': 'off', // for import ./public
    'import/no-unresolved': 'off',
    'no-unused-vars': 'off', // use @typescript-eslint/no-unused-vars to check.
    'no-shadow': 'off' // use @typescript-eslint/no-shadow to check.
  }
})
