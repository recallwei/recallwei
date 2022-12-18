/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  globals: {},
  extends: [
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript",
    "airbnb-base",
    "@vue/eslint-config-prettier"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "comma-dangle": "off",
    "vue/multi-word-component-names": ["error", { ignores: ["index"] }],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/extensions": "off",
    "import/prefer-default-export": "off"
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".vue"]
      }
    }
  }
}
