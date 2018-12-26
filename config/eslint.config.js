module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: ['airbnb-base/legacy'],
  plugins: ['import'],
  rules: {
    'max-len': ['error', 100, 2, { ignoreUrls: true, }], // airbnb is allowing some edge cases
    'no-console': 'error', // airbnb is using warn
    'no-alert': 'error', // airbnb is using warn

    'arrow-parens': 'off', // Incompatible with prettier
    'object-curly-newline': 'off', // Incompatible with prettier
    'no-mixed-operators': 'off', // Incompatible with prettier
    'arrow-body-style': 'off', // Not our taste?
    'function-paren-newline': 'off', // Incompatible with prettier
    'no-plusplus': 'off',
    'space-before-function-paren': 0, // Incompatible with prettier

    quotes: [
      'error', 
      'single', 
      { "avoidEscape": true, "allowTemplateLiterals": false }
    ], // Incompatible with prettier
  }
};