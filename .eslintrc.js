module.exports = {
  env: {
    browser: true
  },
  extends: [
    'plugin:react/recommended'
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12
  },
  plugins: [
    'react'
  ],
  rules: {
  }
}
