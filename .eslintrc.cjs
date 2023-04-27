module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto'
      }
    ]
  },
  env: {
    node: true,
    es2022: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  overrides: [
    {
      files: ['**/*.mjs'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2015
      },
      extends: ['plugin:prettier/recommended'],
      rules: {
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            endOfLine: 'auto'
          }
        ],
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off'
      }
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint', 'react', 'unused-imports', 'tailwindcss', 'simple-import-sort'],
      extends: ['plugin:tailwindcss/recommended', 'airbnb-typescript', 'plugin:prettier/recommended'],
      parserOptions: {
        project: './tsconfig.json'
      },
      rules: {
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            endOfLine: 'auto'
          }
        ],
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
            '': 'never'
          }
        ],
        'react/destructuring-assignment': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/consistent-type-imports': 'error',
        'import/prefer-default-export': 'off',
        'tailwindcss/classnames-order': [
          'warn',
          {
            officialSorting: true
          }
        ],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
      }
    },
    {
      files: ['**/*.astro'],
      plugins: ['@typescript-eslint', 'react', 'unused-imports', 'tailwindcss', 'simple-import-sort'],
      extends: ['plugin:tailwindcss/recommended', 'airbnb-typescript', 'plugin:prettier/recommended'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        extraFileExtensions: ['.astro']
      },
      rules: {
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            endOfLine: 'auto'
          }
        ],
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
            '': 'never'
          }
        ],
        'import/no-unresolved': [
          'error',
          {
            ignore: ['@/*']
          }
        ],
        'react/jsx-filename-extension': [1, { extensions: ['.astro'] }],
        'react/destructuring-assignment': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/consistent-type-imports': 'error',
        'import/prefer-default-export': 'off',
        'tailwindcss/classnames-order': [
          'warn',
          {
            officialSorting: true
          }
        ],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
      },
      globals: {
        Astro: 'readonly'
      }
    }
  ]
}
