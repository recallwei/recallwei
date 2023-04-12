const { defineConfig } = require('eslint-define-config')

const OFF = 0
const WARNING = 1
const ERROR = 2

module.exports = defineConfig({
  root: true,
  extends: ['next/core-web-vitals', 'plugin:tailwindcss/recommended', 'prettier'],
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      parser: '@typescript-eslint/parser'
    }
  ],
  rules: {
    quotes: [ERROR, 'single'],
    semi: [ERROR, 'never'],
    'comma-dangle': OFF,
    // 'import/no-extraneous-dependencies': [ERROR, { devDependencies: true }],
    // 'import/extensions': OFF,
    // 'import/prefer-default-export': OFF,
    // 'import/newline-after-import': OFF,
    // 'import/no-absolute-path': OFF, // for import ./public
    // 'import/no-unresolved': OFF,
    // 'no-unused-vars': OFF, // use @typescript-eslint/no-unused-vars to check
    // 'no-shadow': OFF, // use @typescript-eslint/no-shadow to check
    '@typescript-eslint/indent': OFF,
    '@next/next/no-html-link-for-pages': [ERROR, 'app'] // use /app dir
  }
})
