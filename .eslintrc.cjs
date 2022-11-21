module.exports = {
  root: true,
  parserOptions: {
    extraFileExtensions: ['.vue'],
    sourceType: 'module', // Allows for the use of imports
    ecmaVersion: 'latest',
  },

  env: {
    browser: true,
    amd: true,
    node: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],

  plugins: ['vue'],

  globals: {
    process: 'readonly',
    chrome: 'readonly',
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
  },

  // add your custom rules here
  rules: {
    'vue/require-default-prop': 0,
    'vue/html-indent': ['error', 2],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/multi-word-component-names': 0,
    'vue/singleline-html-element-content-newline': 0,
    'no-unused-vars': 'off',
    'vue/no-v-model-argument': 'off',
    'vue/no-v-for-template-key': 'off',
    'vue/no-v-html': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
}
