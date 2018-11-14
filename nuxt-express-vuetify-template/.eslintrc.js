module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'eslint:recommended',
    'plugin:vue/essential'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "code": 120,
    "comma-dangle": ["error", {
      "arrays": "always",
      "objects": "always",
      "imports": "ignore",
      "exports": "ignore",
      "functions": "never"
    }],
    "quotes": [2, "single", { "avoidEscape": true }],
    "no-console": "off"
  }
}
