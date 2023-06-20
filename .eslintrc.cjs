const mode = process.env.NODE_ENV
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
          jsx: true
      }
  },
  env: {
    node: true
  },
  extends: [
      'plugin:vue/vue3-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'plugin:prettier/recommended'
  ],

  rules: {
      "no-console": mode === 'production' ? "error" : "off",
      "vue/multi-word-component-names":"off"
  }
};