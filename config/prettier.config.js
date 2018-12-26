module.exports = {
  // Specify the line length that the printer will wrap on.
  printWidth: 100,

  // Specify the number of spaces per indentation-level.
  tabWidth: 2,

  // Indent lines with tabs instead of spaces.
  useTabs: false,

  // Print semicolons at the ends of statements.
  semi: true,

  // Use single quotes instead of double quotes.
  singleQuote: true,

  /**
   * Print trailing commas wherever possible when multi-line. 
   * "none" - No trailing commas.
   * "es5" - Trailing commas where valid in ES5 (objects, arrays, etc.)
   * "all" - Trailing commas wherever possible (including function arguments). This requires node 8 or a transform.
   */
  trailingComma: 'es5',

  // Print spaces between brackets in object literals.
  bracketSpacing: true,

  /**
   * Include parentheses around a sole arrow function parameter.
   * "avoid" - Omit parens when possible. Example: x => x
   * "always" - Always include parens. Example: (x) => x
   */
  arrowParens: 'avoid',
  endOfLine: 'lf'
};